import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '25mb' }));
  app.use(express.urlencoded({ limit: '25mb', extended: true }));

  // Ensure public/uploads directory exists
  const publicDir = path.join(process.cwd(), 'public');
  const uploadsDir = path.join(publicDir, 'uploads');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  const manifestPath = path.join(uploadsDir, 'image_manifest.json');

  // Helper to read manifest
  const readManifest = () => {
    try {
      if (fs.existsSync(manifestPath)) {
        const raw = fs.readFileSync(manifestPath, 'utf-8');
        return JSON.parse(raw);
      }
    } catch (e) {
      console.error("Error reading image_manifest.json:", e);
    }
    return {};
  };

  // Helper to write manifest
  const writeManifest = (data: any) => {
    try {
      fs.writeFileSync(manifestPath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (e) {
      console.error("Error writing image_manifest.json:", e);
    }
  };

  // Serve static uploaded assets
  app.use('/uploads', express.static(uploadsDir));

  // Admin PIN verification API
  app.post("/api/admin/verify-pin", (req, res) => {
    const { pin } = req.body;
    const adminPin = process.env.ADMIN_PIN || "heer2026";
    if (pin === adminPin) {
      return res.json({ success: true, message: "Admin authenticated successfully." });
    }
    return res.status(401).json({ success: false, error: "Invalid Admin Security PIN." });
  });

  // Get image registry manifest
  app.get("/api/images", (req, res) => {
    const manifest = readManifest();
    res.json(manifest);
  });

  // Upload/Replace an image
  app.post("/api/images/upload", (req, res) => {
    try {
      const { imageId, dataUrl, filename } = req.body;
      if (!imageId || !dataUrl) {
        return res.status(400).json({ error: "imageId and dataUrl are required." });
      }

      const manifest = readManifest();
      const currentRecord = manifest[imageId] || {};

      // Match data URL prefix (e.g. data:image/png;base64,...)
      const matches = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      if (!matches || matches.length !== 3) {
        return res.status(400).json({ error: "Invalid base64 data URL format." });
      }

      const mimeType = matches[1];
      const base64Data = matches[2];
      const buffer = Buffer.from(base64Data, 'base64');

      // Determine extension
      let ext = 'webp';
      if (mimeType.includes('png')) ext = 'png';
      else if (mimeType.includes('jpeg') || mimeType.includes('jpg')) ext = 'jpg';
      else if (mimeType.includes('svg')) ext = 'svg';
      else if (mimeType.includes('gif')) ext = 'gif';

      // Clean imageId for safe filename
      const safeId = imageId.replace(/[^a-zA-Z0-9_-]/g, '_');
      const timestamp = Date.now();
      const newFilename = `${safeId}_${timestamp}.${ext}`;
      const savePath = path.join(uploadsDir, newFilename);

      // Write binary file to disk
      fs.writeFileSync(savePath, buffer);

      const fileUrl = `/uploads/${newFilename}`;

      // History tracking for undo / restore previous
      const history = currentRecord.history || [];
      if (currentRecord.currentSrc && currentRecord.currentSrc !== fileUrl) {
        history.unshift(currentRecord.currentSrc);
      }

      const updatedRecord = {
        imageId,
        currentSrc: fileUrl,
        originalFilename: filename || 'uploaded_image',
        updatedAt: new Date().toISOString(),
        history: history.slice(0, 5) // Keep last 5 history items
      };

      manifest[imageId] = updatedRecord;
      writeManifest(manifest);

      return res.json({ success: true, record: updatedRecord, manifest });
    } catch (err: any) {
      console.error("Failed to process image upload:", err);
      return res.status(500).json({ error: err.message || "Failed to upload image." });
    }
  });

  // Restore image to original or previous
  app.post("/api/images/restore", (req, res) => {
    try {
      const { imageId, mode } = req.body; // mode: 'original' or 'previous'
      if (!imageId) {
        return res.status(400).json({ error: "imageId is required." });
      }

      const manifest = readManifest();
      const record = manifest[imageId];

      if (!record) {
        return res.json({ success: true, manifest });
      }

      if (mode === 'original') {
        // Delete manifest entry to revert to code default
        delete manifest[imageId];
      } else if (mode === 'previous' && record.history && record.history.length > 0) {
        const previousSrc = record.history.shift();
        record.currentSrc = previousSrc;
        record.updatedAt = new Date().toISOString();
        manifest[imageId] = record;
      }

      writeManifest(manifest);
      return res.json({ success: true, manifest });
    } catch (err: any) {
      console.error("Failed to restore image:", err);
      return res.status(500).json({ error: err.message || "Failed to restore image." });
    }
  });

  // API endpoint for Tarot Reading using Gemini API or Groq API
  app.post("/api/tarot-reading", async (req, res) => {
    try {
      const { guidanceType = "Angel Guidance", name, question, cards } = req.body;

      if (!cards || cards.length !== 3) {
        return res.status(400).json({ error: "Please provide exactly three cards for the Past-Present-Future spread." });
      }

      const [pastCard, presentCard, futureCard] = cards;
      const guidanceCategoryUpper = guidanceType.toUpperCase();

      const prompt = `You are an experienced, compassionate, master Tarot reader in the sacred sanctuary of Heer.

Selected Guidance Category: "${guidanceType}"
Seeker Name: ${name || "A Soul Seeker"}

Cards Drawn (Past - Present - Future spread):
1. PAST: ${pastCard.name} (${pastCard.orientation}). Keywords: ${pastCard.keywords ? pastCard.keywords.join(", ") : ""}. Upright meaning: "${pastCard.upright}".
2. PRESENT: ${presentCard.name} (${presentCard.orientation}). Keywords: ${presentCard.keywords ? presentCard.keywords.join(", ") : ""}. Upright meaning: "${presentCard.upright}".
3. FUTURE: ${futureCard.name} (${futureCard.orientation}). Keywords: ${futureCard.keywords ? futureCard.keywords.join(", ") : ""}. Upright meaning: "${futureCard.upright}".

TASK REQUIREMENTS:
1. Write a reading tailored specifically to the guidance category "${guidanceType}".
   - "Angel Guidance": Spiritual perspective, heavenly messages, divine comfort.
   - "Love Guidance": Relationship dynamics, attachment, heart connection, emotional harmony.
   - "Career Guidance": Professional path, ambition, financial trajectory, vocation.
   - "Universal Guidance": Overarching life path, cosmic alignment, soul purpose.
   - "Daily Guidance": Today's immediate energy, practical focus, present mindset.

2. GUIDANCE FORMAT REQUIREMENT:
   - Provide a single, natural, cohesive interpretation of APPROXIMATELY 7 TO 8 MEANINGFUL LINES.
   - Do NOT list or explain each card individually.
   - Do NOT write: "The Star means...", "Strength means...", "The Fool means...".
   - Instead, combine the symbolism naturally into ONE flowing interpretation that reads like an experienced Tarot reader speaking to the seeker.

3. AFFIRMATION REQUIREMENT:
   - Provide ONE concise, uplifting affirmation related directly to this reading.

You MUST respond with a valid JSON object only. Do NOT wrap your response in markdown code blocks.
Return EXACTLY a JSON object with this key structure:
{
  "guidanceType": "${guidanceCategoryUpper}",
  "cardsDrawn": ["${pastCard.name}", "${presentCard.name}", "${futureCard.name}"],
  "guidance": "A 7 to 8 line natural, flowing, synthesized interpretation of the three cards combined into a unified narrative...",
  "affirmation": "One concise, uplifting affirmation related to the reading."
}`;

      // Try Gemini API first
      const geminiApiKey = process.env.GEMINI_API_KEY;
      if (geminiApiKey) {
        try {
          const { GoogleGenAI } = await import("@google/genai");
          const ai = new GoogleGenAI({ apiKey: geminiApiKey });
          const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: { responseMimeType: "application/json" }
          });
          const text = response.text;
          if (text) {
            const parsedReading = JSON.parse(text);
            return res.json(parsedReading);
          }
        } catch (geminiErr) {
          console.warn("Gemini API call error, falling back to Groq:", geminiErr);
        }
      }

      // Try Groq API next
      const groqApiKey = process.env.GROQ_API_KEY;
      if (groqApiKey) {
        try {
          const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${groqApiKey}`
            },
            body: JSON.stringify({
              model: "llama-3.3-70b-versatile",
              messages: [
                {
                  role: "system",
                  content: "You are an experienced, compassionate master Tarot reader providing natural, flowing, category-specific Tarot interpretations."
                },
                {
                  role: "user",
                  content: prompt
                }
              ],
              temperature: 0.7,
              response_format: { type: "json_object" }
            })
          });

          if (response.ok) {
            const responseData = await response.json();
            const contentString = responseData.choices?.[0]?.message?.content;
            if (contentString) {
              const parsedReading = JSON.parse(contentString);
              return res.json(parsedReading);
            }
          }
        } catch (groqErr) {
          console.warn("Groq API call error:", groqErr);
        }
      }

      // Fallback response if no API keys or calls failed
      const pName = pastCard.name;
      const prName = presentCard.name;
      const fName = futureCard.name;
      let guidance = "";
      let affirmation = "";

      if (guidanceType === 'Love Guidance') {
        guidance = `In the realm of the heart, your emotional journey is undergoing a profound and necessary integration. Your past experience with ${pName} served as a sacred foundation, teaching you essential lessons about self-worth, emotional boundaries, and authentic vulnerability. Presently, ${prName} illuminates the active energetic currents in your relationships, inviting you to communicate your deepest truths with patience and unarmored compassion. Looking ahead into your near future, ${fName} heralds a phase of harmonious evolution, drawing deeper trust, mutual understanding, and sacred connection into your romantic sphere. Remember that genuine love blossoms when you hold space for both yourself and your partner with gentle honor. Trust the subtle emotional shifts happening within your heart today. Divine love is surrounding you in ways both seen and unseen.`;
        affirmation = "I open my heart to authentic, unconditional love and trust the divine timing of my sacred connections.";
      } else if (guidanceType === 'Career Guidance') {
        guidance = `Your professional trajectory and vocational calling are aligning with powerful momentum and renewed clarity. The dedication, skills, and hard-won resilience developed through your past journey with ${pName} have built an enduring reservoir of experience. At this crucial juncture, ${prName} calls on you to focus your energy intentionally, take sovereign command of your projects, and trust in your inherent mastery. Moving forward on your professional horizon, ${fName} signals an expanding landscape filled with fruitful opportunities, proper recognition, and stable abundance. Approach your ambitions with a balanced mind and high ethical integrity, knowing that your unique gifts are genuinely needed. Stay disciplined yet adaptable as new professional doors swing open before you. Your dedicated work is laying the groundwork for lasting career fulfillment.`;
        affirmation = "I step confidently into my professional power, welcoming abundance, mastery, and aligned career growth.";
      } else if (guidanceType === 'Universal Guidance') {
        guidance = `The cosmic tides surrounding your overarching life path are calling you into deeper alignment with your soul's authentic blueprint. In the preceding chapter of your life, ${pName} acted as a pivotal spiritual teacher, guiding you to dismantle limiting illusions and integrate vital wisdom. Today, ${prName} sits at the center of your universe, urging you to remain grounded in your center, honor your inner compass, and embrace total personal sovereignty. Looking into the horizon of your path, ${fName} reveals a sacred phase of transformation, completion, and higher spiritual alignment. Every cycle you have navigated has meticulously prepared you for the wisdom you now embody. Walk forward with courage and quiet trust in the unfolding intelligence of the universe. You are exactly where you need to be in this infinite woven tapestry of life.`;
        affirmation = "I am in complete harmony with the universe, trusting that my journey is guided by infinite wisdom.";
      } else if (guidanceType === 'Daily Guidance') {
        guidance = `Today's energetic atmosphere invites you to move through your hours with conscious presence, clarity, and soft ease. Looking back at yesterday's momentum through ${pName}, you carry a valuable perspective that grounds your choices for today. Right now, ${prName} serves as your guiding star for the day, calling upon you to quiet mental noise, listen to your body's subtle wisdom, and act with clear intention. As today gently unfolds toward evening, ${fName} promises a peaceful, encouraging resolution and a renewed sense of personal harmony. Take a slow, deep breath, release any physical tension from your shoulders, and honor one simple act of self-care. You possess all the clarity required to navigate today's events effortlessly. Trust your stride and welcome the quiet blessings presenting themselves to you today.`;
        affirmation = "I embrace today with peace, presence, and calm confidence, trusting that each moment brings gentle grace.";
      } else {
        guidance = `Your celestial guardians wrap you in a sanctuary of peace as you reflect upon your spiritual path. The journey that brought you to this moment was shaped by the energy of ${pName}, teaching you to trust divine timing and release old burdens to the light. Right now, ${prName} illuminates your present moment, calling you to anchor serenity in your heart and remain open to subtle angelic guidance. As you step forward into what lies ahead, ${fName} opens a radiant doorway toward higher spiritual alignment, inner peace, and divine protection. Trust that you are unconditionally loved, supported, and gently led toward your highest spiritual good. Surrender fear and worry to the loving intelligence that flows through all creation. Your angels remind you that every step you take on this earth is blessed and purposeful.`;
        affirmation = "I welcome clarity, trust divine timing, and confidently move toward my highest path.";
      }

      return res.json({
        guidanceType: guidanceCategoryUpper,
        cardsDrawn: [pName, prName, fName],
        guidance,
        affirmation
      });

    } catch (error: any) {
      console.error("Server error during tarot reading:", error);
      return res.status(500).json({ error: error.message || "A server error occurred during the tarot reading." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
