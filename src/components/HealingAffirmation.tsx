import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sprout, Compass, Sparkles, Heart } from "lucide-react";

// List of 100 deep, trauma-informed wellness affirmations
const AFFIRMATIONS = [
  "I lovingly release what no longer serves me.",
  "I trust my journey even when I cannot yet see the destination.",
  "I deserve peace as much as I deserve success.",
  "I am worthy of love, exactly as I am in this moment.",
  "My sensitivity is a strength, not a weakness.",
  "I give myself permission to rest, recharge, and rebuild.",
  "I hold space for all parts of myself, even the wounded ones.",
  "I am the sovereign author of my own healing.",
  "I am grounded, centered, and deeply rooted in this present moment.",
  "I honor my boundaries as acts of deep self-respect.",
  "My breath is an anchor that brings me back to peace.",
  "I am allowed to slow down and move at my own gentle pace.",
  "I trust my body's innate wisdom to heal and restore.",
  "It is safe for me to feel my feelings without judgment.",
  "I release the weight of expectations that do not belong to me.",
  "I am breathing in calmness, and breathing out tension.",
  "My heart is soft, open, and resilient.",
  "I embrace my imperfections as beautiful threads of my story.",
  "I am capable of cultivating deep, lasting inner peace.",
  "I welcome joy and abundance into my life with open arms.",
  "I honor the child within me and tell them they are safe now.",
  "I am worthy of gentle moments, soft quiet, and slow mornings.",
  "I release the past and step gracefully into the present.",
  "I am creating a life of balance, ease, and intentionality.",
  "My healing is not a linear path, and that is completely okay.",
  "I choose to treat myself with exquisite tenderness today.",
  "I am sovereign in my energy; I only receive what is mine to hold.",
  "My voice matters, and I speak my truth with quiet confidence.",
  "I am surrounded by support, both seen and unseen.",
  "I step out of survival mode and allow myself to simply thrive.",
  "I am allowed to change, evolve, and outgrow old versions of myself.",
  "Today, I choose ease over struggle and grace over perfection.",
  "I am grateful for the resilience that got me here, and the peace I am building.",
  "My nervous system is settling into a state of deep, nourishing rest.",
  "I trust that everything is unfolding in perfect, divine timing.",
  "I am a sanctuary of peace and a beacon of loving energy.",
  "I release the need to control the uncontrollable.",
  "I am worthy of healthy, supportive, and nourishing relationships.",
  "My presence is a gift to the world.",
  "I am learning to trust the silent spaces inside me.",
  "I forgive myself for the times I forgot my own worth.",
  "I am safe to express my authentic self fully and freely.",
  "My well-being is a non-negotiable priority.",
  "I meet my resistance with curiosity and gentle kindness.",
  "I am worthy of the time it takes to heal.",
  "I release the urge to rush my own progress.",
  "I am deeply supported by the earth beneath my feet.",
  "I welcome clarity, focus, and intuitive wisdom today.",
  "I choose thoughts that nourish my soul and soothe my heart.",
  "Every cell in my body is vibrating with healing light.",
  "I am allowed to say 'no' to protect my peace.",
  "I am open to receiving help, healing, and tender care.",
  "My worth is inherent; it cannot be earned or taken away.",
  "I am letting go of the struggle and floating on the river of life.",
  "I am a beautiful work in progress, guided by love.",
  "I trust my intuition to light the path ahead.",
  "I am releasing fear and choosing to step forward in trust.",
  "I honor my sorrow, my joy, and everything in between.",
  "I am worthy of beautiful things, gentle connections, and calm days.",
  "My soul is calm, my mind is still, my heart is open.",
  "I am allowed to take up space and express my needs.",
  "I am reclaiming my power, my sovereignty, and my light.",
  "I deserve to feel safe, held, and respected.",
  "I am planting seeds of self-compassion with every breath.",
  "I trust my inner child, and I am here to protect them.",
  "I am letting go of old patterns and stepping into fresh potentials.",
  "I am resilient, grounded, and surrounded by tranquility.",
  "I permit myself to step away from noise and embrace silence.",
  "My power lies in my ability to remain soft and receptive.",
  "I release the need to prove my worth to anyone, including myself.",
  "I am worthy of peace of mind, physical ease, and spiritual balance.",
  "I am breathing out ancient burdens and breathing in new vitality.",
  "I trust the wisdom of my heart to guide my decisions.",
  "I choose to believe in my potential and honor my limits.",
  "I am worthy of setting and maintaining high standards for myself.",
  "I release guilt and step fully into self-forgiveness.",
  "My energy is sacred, and I choose who and what to share it with.",
  "I am soft on myself when the day feels heavy.",
  "I am safe to slow down, disconnect, and listen to the silence.",
  "I trust my journey, for it is shaping me into my truest self.",
  "I am aligned with the flow of grace and abundance.",
  "I release resentment to free up space in my own heart.",
  "I am surrounded by natural beauty and calming energy.",
  "My inner compass is clear, strong, and highly attuned.",
  "I choose to nurture my body with kindness and movement.",
  "I am allowed to feel tired and take a step back.",
  "I am safe in my body, grounded in my power, and free in my mind.",
  "I am worthy of deep, restorative, and peaceful sleep.",
  "I release the habit of comparison and celebrate my own path.",
  "I am open to the miraculous, gentle, and quiet gifts of today.",
  "I honor the temple of my body with wholesome nourishment.",
  "I am releasing tension from my shoulders, jaw, and brow.",
  "I am building a foundation of peace, block by gentle block.",
  "My heart is a vessel for love, beginning with love for myself.",
  "I am worthy of the love I so freely give to others.",
  "I release the need to understand everything right now.",
  "I trust the natural cycles of my life—the seasons of rest and growth.",
  "I am a sanctuary of quiet strength and gentle resilience.",
  "I choose to meet myself exactly where I am today.",
  "I am safe, I am loved, and I am healing."
];

const REMINDERS = [
  "Take three deep breaths.",
  "Stretch for two minutes.",
  "Step outside for fresh air.",
  "Celebrate one small win today.",
  "Rest your eyes for a minute.",
  "Unclench your jaw and soften your shoulders.",
  "Place a warm hand on your heart.",
  "Stand up and feel your feet flat on the earth.",
  "Express silent gratitude for one thing right now."
];

export function HealingAffirmation() {
  const [affirmation, setAffirmation] = useState("");
  const [reminder, setReminder] = useState("");
  const [isDrawing, setIsDrawing] = useState(false);

  // Initialize random values on mount
  useEffect(() => {
    const randomAff = AFFIRMATIONS[Math.floor(Math.random() * AFFIRMATIONS.length)];
    const randomRem = REMINDERS[Math.floor(Math.random() * REMINDERS.length)];
    setAffirmation(randomAff);
    setReminder(randomRem);
  }, []);

  const handleDraw = () => {
    if (isDrawing) return;
    setIsDrawing(true);

    // Short timeout to create a beautiful ritual feel
    setTimeout(() => {
      let nextAff = affirmation;
      let nextRem = reminder;

      // Keep drawing until we get a different affirmation to make it interactive
      while (nextAff === affirmation && AFFIRMATIONS.length > 1) {
        nextAff = AFFIRMATIONS[Math.floor(Math.random() * AFFIRMATIONS.length)];
      }
      while (nextRem === reminder && REMINDERS.length > 1) {
        nextRem = REMINDERS[Math.floor(Math.random() * REMINDERS.length)];
      }

      setAffirmation(nextAff);
      setReminder(nextRem);
      setIsDrawing(false);
    }, 400);
  };

  return (
    <div className="w-full flex flex-col justify-start space-y-6" id="healing-affirmation-ritual-root">
      
      {/* CSS Anim for ambient particles & drifting elements */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes driftPetal1 {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translate(-30px, 120px) rotate(45deg); opacity: 0; }
        }
        @keyframes driftPetal2 {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          15% { opacity: 0.5; }
          85% { opacity: 0.5; }
          100% { transform: translate(40px, 140px) rotate(-60deg); opacity: 0; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.15); }
        }
        @keyframes goldBreathe {
          0%, 100% { 
            box-shadow: 0 4px 20px rgba(223, 175, 107, 0.1), 0 0 0 1px rgba(223, 175, 107, 0.15); 
            transform: translateY(0); 
          }
          50% { 
            box-shadow: 0 12px 30px rgba(223, 175, 107, 0.25), 0 0 12px 3px rgba(223, 175, 107, 0.4); 
            transform: translateY(-4px); 
            border-color: rgba(223, 175, 107, 0.6);
          }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-8deg); }
        }
        .animate-gold-breathe {
          animation: goldBreathe 6s ease-in-out infinite;
        }
        .animate-drift-petal-1 {
          animation: driftPetal1 12s linear infinite;
        }
        .animate-drift-petal-2 {
          animation: driftPetal2 15s linear infinite 3s;
        }
        .animate-glow-pulse {
          animation: glowPulse 5s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: floatMedium 6s ease-in-out infinite;
        }
      `}} />

      {/* Header Container */}
      <div className="text-center space-y-1.5 relative px-1">
        <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-[#132c3a] font-medium tracking-tight">
          Today's Healing Affirmation
        </h3>
        
        {/* Intricate floral accent divider */}
        <div className="flex justify-center my-1 opacity-80">
          <svg className="w-10 h-2.5 text-[#7da086]" viewBox="0 0 100 30" fill="currentColor">
            <path d="M 50,2 C 45,12 30,15 10,16 C 30,17 45,20 50,30 C 55,20 70,17 90,16 C 70,15 55,12 50,2 Z" />
            <circle cx="50" cy="16" r="2.5" fill="#dfaf6b" />
          </svg>
        </div>

        <p className="text-[#4c755c] text-xs sm:text-xs md:text-sm font-light tracking-wide italic leading-relaxed max-w-lg mx-auto">
          Pause for a moment. Receive today's message.
        </p>
      </div>

      {/* Card Deck Wrapper */}
      <div className="relative group perspective-1000">
        
        {/* Floating Petal decorations positioned around card */}
        <div className="absolute -top-3 -left-2 w-6 h-6 pointer-events-none z-20 opacity-40 animate-drift-petal-1">
          <svg viewBox="0 0 100 100" fill="#dfaf6b" className="w-full h-full">
            <path d="M 50,10 C 20,40 30,75 50,90 C 70,75 80,40 50,10 Z" />
          </svg>
        </div>
        <div className="absolute -bottom-4 -right-2 w-5 h-5 pointer-events-none z-20 opacity-30 animate-drift-petal-2">
          <svg viewBox="0 0 100 100" fill="#9bc0be" className="w-full h-full">
            <path d="M 50,10 C 20,40 30,75 50,90 C 70,75 80,40 50,10 Z" />
          </svg>
        </div>

        {/* Ambient Back Glow */}
        <div className="absolute inset-1 rounded-[1.5rem] bg-gradient-to-tr from-[#9bc0be]/20 via-[#dfaf6b]/10 to-[#7da086]/15 blur-lg group-hover:scale-105 transition-all duration-700 pointer-events-none" />

        {/* The Card Element */}
        <div className="relative overflow-hidden bg-[#faf9f5] border border-[#dfdbc9]/70 rounded-[1.5rem] shadow-lg p-5 md:p-6 flex flex-col justify-between min-h-[220px] transition-all duration-500 hover:shadow-xl hover:border-[#dfdbc9] z-10 animate-gold-breathe">
          
          {/* Deluxe background watercolor wash & lines overlay */}
          <div className="absolute inset-0 bg-radial-gradient from-white/95 via-[#f7f5ef]/80 to-[#eae6da]/40 pointer-events-none z-0" />
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#4c755c_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0" />
          
          {/* Decorative Corner Borders */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#dfdbc9]/60 pointer-events-none z-0 rounded-tl" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#dfdbc9]/60 pointer-events-none z-0 rounded-tr" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#dfdbc9]/60 pointer-events-none z-0 rounded-bl" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#dfdbc9]/60 pointer-events-none z-0 rounded-br" />

          {/* Glowing stardust backdrops */}
          <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-[#dfaf6b]/20 blur-sm animate-glow-pulse pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-[#9bc0be]/30 blur-sm animate-glow-pulse pointer-events-none" style={{ animationDelay: '2.5s' }} />

          {/* SVG LOTUS TOP HEADER (Ethereal luxury emblem) */}
          <div className="flex justify-center items-center relative z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-500 pt-0.5">
            <svg viewBox="0 0 100 60" className="w-12 h-8 text-[#4c755c]">
              <path d="M 50,5 C 40,25 20,35 10,48 C 32,48 40,32 50,15 C 60,32 68,48 90,48 C 80,35 60,25 50,5 Z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 50,15 C 42,32 30,42 22,48 C 42,48 45,36 50,22 C 55,36 58,48 78,48 C 70,42 58,32 50,15 Z" fill="rgba(76, 117, 92, 0.08)" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="50" cy="5" r="1.5" fill="#dfaf6b" />
            </svg>
          </div>

          {/* Centered Affirmation Content with AnimatePresence */}
          <div className="flex-1 flex flex-col justify-center items-center py-2.5 text-center relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={affirmation}
                initial={{ opacity: 0, scale: 0.97, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.01, y: -5 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="max-w-[280px] md:max-w-[310px] mx-auto px-1 flex flex-col justify-center items-center"
              >
                <span className="text-[#dfaf6b]/35 font-serif text-4xl leading-none select-none h-3 -mt-2 mb-1.5 font-light">“</span>
                
                <h4 className="font-serif text-sm sm:text-base md:text-lg text-[#132c3a] font-normal leading-relaxed tracking-wide py-1.5 select-none flex items-center justify-center min-h-[56px]">
                  {affirmation || "I am grounded and centered in this peace."}
                </h4>

                <span className="text-[#dfaf6b]/35 font-serif text-4xl leading-none select-none h-3 mt-1.5 font-light">”</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* SVG Elegant Foliage flourish wrapping bottom center */}
          <div className="flex justify-center items-center opacity-30 group-hover:opacity-50 transition-opacity duration-500 relative z-10 mb-1">
            <svg viewBox="0 0 160 30" className="w-24 h-5 text-[#7da086] fill-none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
              <path d="M 80,15 C 50,15 35,5 15,10" />
              <path d="M 80,15 C 110,15 125,5 145,10" />
              <circle cx="80" cy="15" r="2" fill="#dfaf6b" stroke="none" />
            </svg>
          </div>

        </div>

      </div>

      {/* Premium Draw Button */}
      <div className="flex justify-center pt-1 relative z-15">
        <button
          onClick={handleDraw}
          disabled={isDrawing}
          className="px-6 py-3.5 bg-gradient-to-r from-[#4c755c] to-[#3f634e] hover:from-[#3f634e] hover:to-[#2e4c3a] text-white rounded-xl font-sans font-semibold tracking-wider text-sm flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-80 disabled:scale-100 uppercase"
          id="btn-draw-affirmation"
        >
          <motion.div
            animate={{ rotate: isDrawing ? 360 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Sprout className="w-4 h-4 text-[#dfdbc9]" />
          </motion.div>
          <span>{isDrawing ? "Shuffling..." : "🌿 Draw Another Affirmation"}</span>
        </button>
      </div>

      {/* Separator line */}
      <div className="w-1/3 h-[1px] bg-[#dfdbc9]/60 mx-auto" />

      {/* Gentle Reminder Box with Continuous peaceful animations */}
      <div className="bg-[#FAF9F5]/40 rounded-2xl p-4.5 border border-[#dfdbc9]/30 text-center relative overflow-hidden" id="gentle-reminder-box">
        {/* Soft watercolor background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#9bc0be]/5 via-transparent to-[#dfaf6b]/5 pointer-events-none z-0" />
        
        {/* Continuous peaceful animations of floating leaves and water ripples */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Animated Water Ripples */}
          <div className="absolute inset-0 border border-teal-light/20 rounded-full animate-ping opacity-[0.08]" style={{ animationDuration: '8s' }} />
          <div className="absolute inset-8 border border-teal-light/10 rounded-full animate-ping opacity-[0.04]" style={{ animationDuration: '12s' }} />

          {/* Drifting Leaves */}
          <svg className="absolute -top-1 left-[8%] w-4.5 h-4.5 text-sage/15 animate-float-slow" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L7,18C12,14 16,12 21,8C22,7 22,5 20,5C18,5 17,8 17,8Z" />
          </svg>
          <svg className="absolute -bottom-1 right-[8%] w-4 h-4 text-sage/15 animate-float-medium" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: '2s' }}>
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L7,18C12,14 16,12 21,8C22,7 22,5 20,5C18,5 17,8 17,8Z" />
          </svg>
        </div>

        <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-bold text-[#7da086] block mb-1 relative z-10">
          Spread love, Give value, Create Legacy
        </span>
        
        <AnimatePresence mode="wait">
          <motion.p
            key={reminder}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.4 }}
            className="font-serif text-base text-[#132c3a] font-normal tracking-wide min-h-[24px] flex items-center justify-center relative z-10"
          >
            {reminder || "Take three deep breaths."}
          </motion.p>
        </AnimatePresence>
      </div>

    </div>
  );
}
