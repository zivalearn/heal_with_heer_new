import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Calendar, Heart, Brain, Award, Infinity, Globe, Sparkles,
  CheckCircle, Check, Users, UserCheck, Smile, ShieldCheck, Download, ChevronRight,
  Sparkle, ArrowRight, BookOpen, Compass, HeartHandshake, HelpCircle, ShieldAlert,
  MessageSquare, RefreshCw
} from 'lucide-react';
import { generatePDF } from '../../lib/pdfHelper';
import relationshipImg from '@/assets/modalities/relationship.jpeg';
import { SmartImage } from '../SmartImage';
import { useImageRegistry } from '../../context/ImageContext';

interface RelationshipPageProps {
  onBack: () => void;
  onBook: (modalityName: string) => void;
}

export default function RelationshipPage({ onBack, onBook }: RelationshipPageProps) {
  const { getSrc } = useImageRegistry();
  const [downloading, setDownloading] = useState(false);
  const [activePetal, setActivePetal] = useState<number | null>(null);

  // THE GARDEN OF UNSPOKEN WORDS STATE
  const [gardenLetters, setGardenLetters] = useState([
    {
      id: 1,
      to: "My Younger Self",
      from: "Anonymously",
      category: "Self Healing",
      emoji: "🪷",
      flowerType: "Lotus",
      flowerColor: "pink",
      message: "You did not deserve the silence you were forced to survive. You did nothing wrong. It is safe to breathe now, to speak, to be seen.",
      x: 15,
      y: 65,
      scale: 1.0,
      rotation: -8
    },
    {
      id: 2,
      to: "My Mother",
      from: "A daughter",
      category: "Forgiveness",
      emoji: "🤍",
      flowerType: "White Lily",
      flowerColor: "cream",
      message: "I forgive you for not being able to give me what you never received yourself. I release the weight of needing you to be different.",
      x: 38,
      y: 65,
      scale: 1.0,
      rotation: -3
    },
    {
      id: 3,
      to: "Someone I Lost",
      from: "Anonymously",
      category: "Grief",
      emoji: "💜",
      flowerType: "Lavender",
      flowerColor: "purple",
      message: "I still find your smile in the autumn leaves. I wish I told you that you were the safest harbor my heart ever knew. Rest in golden light.",
      x: 62,
      y: 65,
      scale: 1.0,
      rotation: 3
    },
    {
      id: 4,
      to: "Someone I Still Love",
      from: "A quiet heart",
      category: "Love",
      emoji: "🌸",
      flowerType: "Pink Peony",
      flowerColor: "rose",
      message: "We walked different paths, but a part of my soul still whispers your name to the stars. May you be warm, wherever you are.",
      x: 85,
      y: 65,
      scale: 1.0,
      rotation: 8
    },
    {
      id: 5,
      to: "My Future Self",
      from: "Anonymously",
      category: "Hope",
      emoji: "🌼",
      flowerType: "Sunflower",
      flowerColor: "gold",
      message: "I am planting these seeds today so that you can walk through a forest of peace tomorrow. Do not give up, we are almost home.",
      x: 20,
      y: 35,
      scale: 0.95,
      rotation: -10
    },
    {
      id: 6,
      to: "A Past Partner",
      from: "Anonymously",
      category: "Closure",
      emoji: "🍃",
      flowerType: "Cherry Blossom",
      flowerColor: "blush",
      message: "I am letting go of the words I never got to say, and the apologies that never came. Our story was a chapter, not the book.",
      x: 40,
      y: 35,
      scale: 0.95,
      rotation: -4
    },
    {
      id: 7,
      to: "My Father",
      from: "Your son",
      category: "Unspoken Words",
      emoji: "✨",
      flowerType: "Blue Iris",
      flowerColor: "blue",
      message: "I spent my whole life trying to earn your approval, only to realize I had to give it to myself. I love you, and I let you go.",
      x: 60,
      y: 35,
      scale: 0.95,
      rotation: 4
    },
    {
      id: 8,
      to: "The Universe",
      from: "A grateful soul",
      category: "Gratitude",
      emoji: "🌿",
      flowerType: "Wild Daisy",
      flowerColor: "yellow",
      message: "Thank you for the storms that broke me open. In the wreckage, I found the soil where my truest self could bloom.",
      x: 80,
      y: 35,
      scale: 0.95,
      rotation: 10
    }
  ]);

  // Form Fields State
  const [formTo, setFormTo] = useState("");
  const [formFrom, setFormFrom] = useState("");
  const [formCategory, setFormCategory] = useState("SELF HEALING");
  const [formMessage, setFormMessage] = useState("");

  // Letter Interaction State
  const [selectedLetter, setSelectedLetter] = useState<any>(null);

  // Submission Animation State
  const [submissionStep, setSubmissionStep] = useState<'idle' | 'folding' | 'seeding' | 'raining' | 'rooting' | 'sprouting' | 'bloomed' | 'success'>('idle');
  const [newFlowerData, setNewFlowerData] = useState<any>(null);

  const getFlowerDetails = (categoryName: string) => {
    const norm = categoryName.toLowerCase();
    if (norm.includes("gratitude")) return { type: "Wild Daisy", color: "yellow", emoji: "🌿" };
    if (norm.includes("closure")) return { type: "Cherry Blossom", color: "blush", emoji: "🍃" };
    if (norm.includes("forgiveness")) return { type: "White Lily", color: "cream", emoji: "🤍" };
    if (norm.includes("self") || norm.includes("healing")) return { type: "Lotus", color: "pink", emoji: "🪷" };
    if (norm.includes("hope")) return { type: "Sunflower", color: "gold", emoji: "🌼" };
    if (norm.includes("love")) return { type: "Pink Peony", color: "rose", emoji: "🌸" };
    if (norm.includes("grief")) return { type: "Lavender", color: "purple", emoji: "💜" };
    return { type: "Blue Iris", color: "blue", emoji: "✨" };
  };

  const handlePlantLetter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTo || !formMessage) return;

    const flowerInfo = getFlowerDetails(formCategory);

    const newLetter = {
      id: Date.now(),
      to: formTo,
      from: formFrom || "Anonymously",
      category: formCategory,
      emoji: flowerInfo.emoji,
      flowerType: flowerInfo.type,
      flowerColor: flowerInfo.color,
      message: formMessage,
      x: 15 + ((gardenLetters.length * 15) % 75),
      y: gardenLetters.length % 2 === 0 ? 65 : 35,
      scale: 1.0,
      rotation: gardenLetters.length % 2 === 0 ? 5 : -5
    };

    setNewFlowerData(newLetter);
    setSubmissionStep('folding');

    // Sequence of animations:
    // 1. folding: 1.2s -> letter folds into envelope
    setTimeout(() => {
      setSubmissionStep('seeding');
      // 2. seeding: 1.5s -> seed floats down
      setTimeout(() => {
        setSubmissionStep('raining');
        // 3. raining & rooting: 1.8s -> rain falls, roots grow
        setTimeout(() => {
          setSubmissionStep('sprouting');
          // 4. sprouting: 1.5s -> sprout emerges
          setTimeout(() => {
            setSubmissionStep('bloomed');
            // 5. bloomed: 1.8s -> golden light, blooms fully
            setTimeout(() => {
              // Add to state and clean up
              setGardenLetters(prev => [...prev, newLetter]);
              setSubmissionStep('success');
              // Clear fields
              setFormTo("");
              setFormFrom("");
              setFormMessage("");
            }, 1800);
          }, 1500);
        }, 1800);
      }, 1500);
    }, 1200);
  };

  const renderFlowerSVG = (type: string, color: string) => {
    switch (type) {
      case "Lotus":
        return (
          <svg className="w-12 h-12 drop-shadow-md" viewBox="0 0 100 100">
            <path d="M 50,20 C 45,35 30,55 50,85 C 70,55 55,35 50,20 Z" fill="#f7bfc2" stroke="#d68388" strokeWidth="0.75" />
            <path d="M 50,30 C 40,42 22,60 45,85 C 68,60 60,42 50,30 Z" fill="#faaab1" stroke="#d68388" strokeWidth="0.5" />
            <path d="M 50,42 C 45,50 35,65 50,85 C 65,65 55,50 50,42 Z" fill="#fc8895" stroke="#d68388" strokeWidth="0.5" />
            <circle cx="50" cy="55" r="3" fill="gold" />
          </svg>
        );
      case "White Lily":
        return (
          <svg className="w-12 h-12 drop-shadow-md" viewBox="0 0 100 100">
            <path d="M 50,25 C 40,40 25,35 30,55 C 35,65 48,60 50,85 C 52,60 65,65 70,55 C 75,35 60,40 50,25 Z" fill="#faf8f0" stroke="#dfdbc9" strokeWidth="0.75" />
            <path d="M 50,38 C 45,48 38,45 40,58 C 42,65 48,62 50,85 C 52,62 58,65 60,58 C 62,45 55,48 50,38 Z" fill="#ffffff" stroke="#dfdbc9" strokeWidth="0.5" />
            <line x1="50" y1="65" x2="42" y2="45" stroke="gold" strokeWidth="1" />
            <line x1="50" y1="65" x2="58" y2="45" stroke="gold" strokeWidth="1" />
            <circle cx="42" cy="45" r="1.5" fill="#c0942c" />
            <circle cx="58" cy="45" r="1.5" fill="#c0942c" />
          </svg>
        );
      case "Lavender":
        return (
          <svg className="w-12 h-12 drop-shadow-md" viewBox="0 0 100 100">
            <line x1="50" y1="20" x2="50" y2="85" stroke="#7da086" strokeWidth="1.5" />
            <circle cx="50" cy="30" r="4" fill="#a78bfa" />
            <circle cx="45" cy="35" r="3.5" fill="#8b5cf6" />
            <circle cx="55" cy="35" r="3.5" fill="#8b5cf6" />
            <circle cx="50" cy="42" r="4.5" fill="#a78bfa" />
            <circle cx="44" cy="48" r="4" fill="#7c3aed" />
            <circle cx="56" cy="48" r="4" fill="#7c3aed" />
            <circle cx="50" cy="56" r="5" fill="#8b5cf6" />
            <circle cx="43" cy="63" r="4.5" fill="#6d28d9" />
            <circle cx="57" cy="63" r="4.5" fill="#6d28d9" />
          </svg>
        );
      case "Pink Peony":
        return (
          <svg className="w-12 h-12 drop-shadow-md" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="22" fill="#fda4af" stroke="#f43f5e" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="17" fill="#fecdd3" stroke="#f43f5e" strokeWidth="0.5" />
            <path d="M 40,40 C 45,35 55,35 60,40 C 55,48 45,48 40,40 Z" fill="#ffe4e6" />
            <path d="M 40,60 C 45,65 55,65 60,60 C 55,52 45,52 40,60 Z" fill="#ffe4e6" />
            <circle cx="50" cy="50" r="10" fill="#fdbaf8" stroke="#d946ef" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="4" fill="gold" />
          </svg>
        );
      case "Sunflower":
        return (
          <svg className="w-12 h-12 drop-shadow-md" viewBox="0 0 100 100">
            {Array.from({ length: 12 }).map((_, i) => (
              <path 
                key={i} 
                d="M 50,50 L 50,22 C 53,30 50,40 50,50" 
                fill="#fbbf24" 
                stroke="#d97706" 
                strokeWidth="0.5" 
                transform={`rotate(${i * 30} 50 50)`} 
              />
            ))}
            <circle cx="50" cy="50" r="12" fill="#78350f" stroke="#451a03" strokeWidth="1" />
            <circle cx="50" cy="50" r="9" fill="#451a03" strokeDasharray="1 1" stroke="gold" strokeWidth="0.5" />
          </svg>
        );
      case "Wild Daisy":
        return (
          <svg className="w-12 h-12 drop-shadow-md" viewBox="0 0 100 100">
            {Array.from({ length: 10 }).map((_, i) => (
              <ellipse 
                key={i} 
                cx="50" 
                cy="32" 
                rx="5" 
                ry="16" 
                fill="#ffffff" 
                stroke="#dfdbc9" 
                strokeWidth="0.5" 
                transform={`rotate(${i * 36} 50 50)`} 
              />
            ))}
            <circle cx="50" cy="50" r="10" fill="#facc15" stroke="#ca8a04" strokeWidth="0.75" />
          </svg>
        );
      case "Cherry Blossom":
        return (
          <svg className="w-12 h-12 drop-shadow-md" viewBox="0 0 100 100">
            {Array.from({ length: 5 }).map((_, i) => (
              <path 
                key={i} 
                d="M 50,50 C 42,32 58,32 50,50" 
                fill="#ffe4e6" 
                stroke="#f43f5e" 
                strokeWidth="0.5" 
                transform={`rotate(${i * 72} 50 50)`} 
              />
            ))}
            <circle cx="50" cy="50" r="4.5" fill="#f43f5e" />
            <circle cx="50" cy="50" r="2" fill="gold" />
          </svg>
        );
      case "Blue Iris":
      default:
        return (
          <svg className="w-12 h-12 drop-shadow-md" viewBox="0 0 100 100">
            <path d="M 50,50 Q 50,22 40,28 C 45,38 50,46 50,50" fill="#60a5fa" stroke="#2563eb" strokeWidth="0.5" />
            <path d="M 50,50 Q 50,22 60,28 C 55,38 50,46 50,50" fill="#60a5fa" stroke="#2563eb" strokeWidth="0.5" />
            <path d="M 50,50 C 35,45 25,60 45,65 C 50,60 50,55 50,50" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="0.5" />
            <path d="M 50,50 C 65,45 75,60 55,65 C 50,60 50,55 50,50" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="0.5" />
            <path d="M 50,48 Q 50,58 50,65" stroke="gold" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );
    }
  };

  const renderVintageLetterSVG = (category: string, waxColor: string) => {
    // Select seal color based on category
    let sealColor = "#c0942c"; // default gold
    if (category === "Forgiveness") sealColor = "#b0bec5"; // silver/gray
    if (category === "Self Healing") sealColor = "#ec4899"; // rose pink
    if (category === "Love") sealColor = "#dc2626"; // red
    if (category === "Hope") sealColor = "#eab308"; // bright gold
    if (category === "Grief") sealColor = "#8b5cf6"; // purple/violet
    if (category === "Closure") sealColor = "#78350f"; // sepia brown
    if (category === "Unspoken Words") sealColor = "#1e3a8a"; // deep midnight blue

    return (
      <svg className="w-14 h-14 drop-shadow-lg" viewBox="0 0 100 100">
        {/* Envelope Body / Folded Parchment Paper */}
        <path d="M 15,30 L 85,30 L 85,75 L 15,75 Z" fill="#faf6ee" stroke="#dfdbc9" strokeWidth="1" />
        
        {/* Flap lines */}
        <path d="M 15,30 L 50,55 L 85,30" fill="none" stroke="#dfdbc9" strokeWidth="0.75" />
        <path d="M 15,75 L 40,50" fill="none" stroke="#dfdbc9" strokeWidth="0.5" />
        <path d="M 85,75 L 60,50" fill="none" stroke="#dfdbc9" strokeWidth="0.5" />
        
        {/* Melted Wax Background of the seal (organic circle) */}
        <path d="M 44,55 C 42,48 58,45 56,52 C 54,59 46,62 44,55 Z" fill={`${sealColor}cc`} className="animate-pulse" style={{ animationDuration: '4s' }} />
        
        {/* Inner solid wax seal */}
        <circle cx="50" cy="53" r="6" fill={sealColor} stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        {/* Seal stamp engraving emblem */}
        <path d="M 50,56 C 47,53 47,50 50,48 C 53,50 53,53 50,56 Z" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.5" />
      </svg>
    );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleDownloadBrochure = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      generatePDF(
        "Relationship_Mastery_Brochure.pdf",
        "RELATIONSHIP MASTERY CERTIFICATION PROGRAM",
        "Build Stronger Relationships. Communicate Better. Love Deeper.",
        "Become a Certified Relationship Coach & Create Healthy, Lasting Relationships\n\nHealthy relationships don't happen by chance—they are built through trust, communication, emotional awareness, and mutual understanding. Whether you're looking to strengthen your own relationships or help others build meaningful connections, this certification provides practical tools that create lasting transformation.\n\nThe Relationship Mastery Certification Program is an internationally designed course that helps you understand relationship psychology, emotional intelligence, communication, conflict resolution, trust-building, and long-term relationship success.\n\nNo prior coaching or counselling experience required.",
        [
          {
            title: "MODULE 1: Building the Foundation for Lasting Love",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "The foundations of a healthy and fulfilling relationship",
              "Understanding your relationship values and expectations",
              "Developing self-awareness before understanding others",
              "Recognizing green flags, red flags, and compatibility",
              "Creating the right mindset for lasting love",
              "YOUR TRANSFORMATION:",
              "Build a strong foundation for healthy relationships",
              "Gain clarity about what you truly need in a partner",
              "Recognize healthy relationship patterns with confidence",
              "Develop greater self-awareness before entering or improving a relationship",
              "Feel emotionally prepared to create meaningful, lasting connections"
            ]
          },
          {
            title: "MODULE 2: Discovering Yourself & Understanding Your Partner",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Understanding different attachment styles",
              "Identifying emotional needs in yourself and others",
              "Appreciating different personalities and love languages",
              "Recognizing emotional triggers and reactions",
              "Developing emotional awareness and empathy",
              "YOUR TRANSFORMATION:",
              "Understand yourself on a much deeper emotional level",
              "Build stronger emotional connections with others",
              "Reduce misunderstandings caused by different personalities",
              "Respond with empathy instead of assumptions",
              "Feel more emotionally connected and understood in relationships"
            ]
          },
          {
            title: "MODULE 3: Half of the Time It's Misunderstandings",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Listening with intention instead of simply hearing",
              "Expressing thoughts and feelings with clarity",
              "Navigating difficult conversations confidently",
              "Asking meaningful questions that deepen connection",
              "Creating emotional intimacy through communication",
              "YOUR TRANSFORMATION:",
              "Communicate openly without fear or hesitation",
              "Express emotions with confidence and clarity",
              "Handle difficult conversations calmly",
              "Feel heard, understood, and respected",
              "Build stronger relationships through meaningful communication"
            ]
          },
          {
            title: "MODULE 4: Transforming Fights into Connection",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Understanding the real causes of relationship conflict",
              "Managing emotions during disagreements",
              "Healthy conflict resolution techniques",
              "Repairing emotional disconnect after arguments",
              "Strengthening relationships through forgiveness and growth",
              "YOUR TRANSFORMATION:",
              "Stop reacting emotionally during conflicts",
              "Resolve disagreements in a healthier way",
              "Turn conflict into opportunities for growth",
              "Strengthen trust after difficult conversations",
              "Build emotionally resilient relationships"
            ]
          },
          {
            title: "MODULE 5: Creating Trust, Respect & Emotional Security",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Building trust through consistency and honesty",
              "Setting healthy personal boundaries",
              "Creating mutual respect in relationships",
              "Developing emotional safety and vulnerability",
              "Strengthening long-term commitment",
              "YOUR TRANSFORMATION:",
              "Build relationships based on trust and honesty",
              "Set healthy boundaries without guilt",
              "Feel emotionally safe expressing yourself",
              "Strengthen mutual respect and appreciation",
              "Create secure and lasting relationships"
            ]
          },
          {
            title: "MODULE 6: It's the Small Gestures That Matter Most",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Strengthening emotional intimacy through daily actions",
              "Keeping romance alive beyond the honeymoon phase",
              "Practicing appreciation and gratitude",
              "Creating meaningful relationship rituals",
              "Building habits that strengthen connection",
              "YOUR TRANSFORMATION:",
              "Feel more emotionally connected every day",
              "Keep love and romance alive naturally",
              "Create lasting habits that strengthen relationships",
              "Express appreciation more openly",
              "Build deeper emotional intimacy over time"
            ]
          },
          {
            title: "MODULE 7: Breaking Patterns & Building Healthy Relationship Habits",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Identifying recurring relationship patterns",
              "Releasing resentment and emotional baggage",
              "Responding consciously instead of reacting emotionally",
              "Developing healthy relationship habits",
              "Creating emotional resilience for lifelong relationships",
              "YOUR TRANSFORMATION:",
              "Break unhealthy relationship cycles",
              "Let go of emotional pain from the past",
              "Respond thoughtfully instead of impulsively",
              "Build healthier daily relationship habits",
              "Feel more emotionally balanced and secure"
            ]
          },
          {
            title: "MODULE 8: Designing Your Relationship Success Blueprint",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Defining your relationship vision",
              "Aligning shared values and future goals",
              "Growing together through life's changes",
              "Maintaining long-term emotional connection",
              "Creating a lifelong relationship success plan",
              "YOUR TRANSFORMATION:",
              "Create a clear vision for your ideal relationship",
              "Build a relationship based on shared values",
              "Navigate life changes together with confidence",
              "Continue growing individually and as a couple",
              "Create a fulfilling, healthy, and lasting relationship"
            ]
          },
          {
            title: "FINAL PROGRAM TRANSFORMATION",
            text: "By the end of this Relationship Mastery Certification Program, learners will:",
            items: [
              "Build healthy, emotionally secure relationships with confidence.",
              "Understand yourselves and others on a deeper emotional level.",
              "Communicate openly, honestly, and effectively.",
              "Resolve conflicts with maturity and emotional intelligence.",
              "Develop trust, respect, and healthy relationship boundaries.",
              "Strengthen emotional intimacy and meaningful connection.",
              "Break unhealthy relationship patterns and build lasting habits.",
              "Create fulfilling relationships based on love, trust, and shared values.",
              "Develop practical relationship skills that can be applied personally or professionally."
            ]
          }
        ]
      );
    }, 1200);
  };

  const heroHighlights = [
    { icon: Globe, label: "Internationally Designed Curriculum" },
    { icon: Brain, label: "Evidence-Based Psychology" },
    { icon: Heart, label: "Practical Tools for Real-Life" },
    { icon: Award, label: "Certificate of Completion" },
    { icon: Infinity, label: "Lifetime Access" }
  ];

  const relationshipModules = [
    {
      num: "01",
      title: "Module 1",
      subtitle: "Building the Foundation for Lasting Love",
      desc: "Learn the fundamentals of healthy relationships, self-awareness, emotional safety, and relationship values.",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=400",
      bgGradient: "from-[#FDFBF7] to-[#EAF3F1]/30",
      station: "Boarding Station"
    },
    {
      num: "02",
      title: "Module 2",
      subtitle: "Discovering Yourself & Understanding Your Partner",
      desc: "Understand attachment styles, emotional needs, personality differences, and emotional awareness.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=400",
      bgGradient: "from-[#FDFBF7] to-[#4F7786]/10",
      station: "Next Station →"
    },
    {
      num: "03",
      title: "Module 3",
      subtitle: "Half of the Time It's Misunderstandings",
      desc: "Master communication, listening, emotional expression, and meaningful conversations.",
      icon: MessageSquare,
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=400",
      bgGradient: "from-[#FDFBF7] to-[#7F9C87]/15",
      station: "Next Station →"
    },
    {
      num: "04",
      title: "Module 4",
      subtitle: "Transforming Fights into Connection",
      desc: "Learn healthy conflict resolution, emotional regulation, forgiveness, and relationship repair.",
      icon: RefreshCw,
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=400",
      bgGradient: "from-[#FDFBF7] to-[#EAF3F1]/30",
      station: "Next Station →"
    },
    {
      num: "05",
      title: "Module 5",
      subtitle: "Creating Trust, Respect & Emotional Security",
      desc: "Build trust, boundaries, mutual respect, emotional safety, and relationship confidence.",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400",
      bgGradient: "from-[#FDFBF7] to-[#4F7786]/10",
      station: "Next Station →"
    },
    {
      num: "06",
      title: "Module 6",
      subtitle: "It's the Small Gestures That Matter Most",
      desc: "Discover appreciation, romance, intimacy, daily habits, and meaningful relationship rituals.",
      icon: Sparkle,
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=400",
      bgGradient: "from-[#FDFBF7] to-[#7F9C87]/15",
      station: "Next Station →"
    },
    {
      num: "07",
      title: "Module 7",
      subtitle: "Breaking Patterns & Building Healthy Relationship Habits",
      desc: "Release resentment, identify unhealthy cycles, respond consciously, and build lasting habits.",
      icon: Compass,
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=400",
      bgGradient: "from-[#FDFBF7] to-[#EAF3F1]/30",
      station: "Next Station →"
    },
    {
      num: "08",
      title: "Module 8",
      subtitle: "Designing Your Relationship Success Blueprint",
      desc: "Create shared goals, relationship vision, long-term growth strategies, and future planning.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1502481851512-e9e2529bbbf9?auto=format&fit=crop&q=80&w=400",
      bgGradient: "from-[#FDFBF7] to-[#4F7786]/10",
      station: "Graduation Station ✧"
    }
  ];

  return (
    <div className="bg-[#faf7f2] text-ocean font-sans min-h-screen selection:bg-[#2F6D73]/10 selection:text-ocean">
      
      {/* NAVIGATION & BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-6 pt-6 relative z-10 flex flex-wrap justify-between items-center gap-4 border-b border-slate-200 pb-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-semibold text-sage hover:text-[#0A252C] transition-colors uppercase tracking-widest cursor-pointer group"
          id="relationship-back-btn"
        >
          <ArrowLeft className="w-4 h-4 text-[#2F6D73] transition-transform group-hover:-translate-x-1" />
          Back to Sanctuary
        </button>
        <div className="flex items-center gap-2 text-[11px] text-ocean/70 uppercase tracking-wider font-semibold">
          <span className="hover:text-[#2F6D73] cursor-pointer" onClick={onBack}>Home</span>
          <span className="text-[#2F6D73]/40">&gt;</span>
          <span className="hover:text-[#2F6D73] cursor-pointer" onClick={onBack}>Healing Modalities</span>
          <span className="text-[#2F6D73]/40">&gt;</span>
          <span className="text-[#2F6D73] font-bold">Relationship Mastery</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section 
        className="relative pt-12 pb-16 px-6 overflow-hidden watercolor-bg text-ocean"
        style={{ background: 'linear-gradient(90deg, #EAF3F1, #F7FBFA, #FFFFFF)' }}
      >
        {/* Soft elegant sand and cream background highlights */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2F6D73_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        {/* Responsive Wave & Flower Clip Path SVG Definitions for Relationship Page */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <clipPath id="wave-clip-vertical-relationship" clipPathUnits="objectBoundingBox">
              <path d="M 0.18,0 C 0.02,0.1 0.28,0.2 0.22,0.28 C 0.14,0.34 0.30,0.42 0.08,0.55 C -0.05,0.65 0.20,0.72 0.14,0.82 C 0.08,0.9 -0.05,0.95 0,1 L 1,1 L 1,0 Z" />
            </clipPath>
            <clipPath id="wave-clip-horizontal-relationship" clipPathUnits="objectBoundingBox">
              <path d="M 0,0.18 C 0.18,0.02 0.38,0.25 0.5,0.12 C 0.65,-0.02 0.82,0.22 1,0.08 L 1,1 L 0,1 Z" />
            </clipPath>
            <clipPath id="flower-clip-path" clipPathUnits="objectBoundingBox">
              <path d="M 0.5,0.05 C 0.55,0.15 0.62,0.1 0.68,0.14 C 0.78,0.18 0.8,0.28 0.85,0.32 C 0.82,0.38 0.93,0.44 0.93,0.48 C 0.93,0.52 0.82,0.58 0.85,0.64 C 0.8,0.68 0.78,0.78 0.68,0.82 C 0.62,0.86 0.55,0.81 0.5,0.91 C 0.45,0.81 0.38,0.86 0.32,0.82 C 0.22,0.78 0.2,0.68 0.15,0.64 C 0.18,0.58 0.07,0.52 0.07,0.48 C 0.07,0.44 0.18,0.38 0.15,0.32 C 0.2,0.28 0.22,0.18 0.32,0.14 C 0.38,0.1 0.45,0.15 0.5,0.05 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Note: The side images have been completely removed as requested */}

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* HERO LEFT COLUMN: Left-Aligned Content */}
          <div className="lg:col-span-7 text-left flex flex-col items-start justify-center space-y-6">
            
            {/* Hero Main Heading */}
            <div className="space-y-2 text-left">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0A252C] leading-none text-left">
                RELATIONSHIP <br />
                MASTERY
              </h1>
              <span className="text-sm sm:text-base font-mono tracking-[0.25em] text-[#0A252C] uppercase font-bold block pt-1 text-left">
                CERTIFICATION PROGRAM
              </span>
            </div>

            {/* Heart symbol divider under heading */}
            <div className="flex items-center justify-start gap-2 py-1 text-gold w-full">
              <div className="h-[1px] w-10 bg-gold" />
              <Heart className="w-4 h-4 text-gold fill-current animate-pulse" />
              <div className="h-[1px] w-48 bg-gold" />
            </div>

            <p className="font-serif text-2xl md:text-3xl text-[#0A252C] italic leading-snug font-medium text-left">
              "Build Stronger Relationships. Communicate Better. Love Deeper."
            </p>

            <p className="text-lg md:text-xl text-[#2F6D73] font-semibold leading-relaxed text-left">
              Become a Certified Relationship Coach & Create Healthy, Lasting Relationships
            </p>

            {/* 5 Highlights Icons under hero text left aligned */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 pt-4 pb-4 border-t border-b border-gold/35 w-full">
              {heroHighlights.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 group">
                  <div className="w-10 h-10 rounded-full bg-[#FAFDFD] border border-[#2F6D73]/20 flex items-center justify-center text-[#2F6D73] group-hover:bg-[#2F6D73]/10 transition-colors shadow-sm">
                    <item.icon className="w-4.5 h-4.5 stroke-[1.2]" />
                  </div>
                  <span className="text-[10px] md:text-xs text-ocean font-medium leading-tight block">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Core Action Buttons left aligned */}
            <div className="flex flex-wrap gap-4 pt-2 justify-start w-full">
              <button
                onClick={() => onBook('Relationship Mastery Certification')}
                className="px-8 py-4 bg-[#0A252C] hover:bg-[#15424A] text-white text-xs font-bold tracking-[0.15em] uppercase rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group cursor-pointer"
                id="relationship-hero-enroll-btn"
              >
                <span>Enroll Now</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={handleDownloadBrochure}
                disabled={downloading}
                className="px-8 py-4 bg-white border border-[#4F7786] text-[#0A252C] hover:bg-slate-50 text-xs font-bold tracking-[0.15em] uppercase rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                id="relationship-hero-brochure-btn"
              >
                <Download className="w-4 h-4 text-[#4F7786]" />
                {downloading ? 'Downloading...' : 'Download Brochure'}
              </button>
            </div>

          </div>

          {/* HERO RIGHT COLUMN: Empty as requested */}
          <div className="hidden lg:block lg:col-span-5" />

        </div>
      </section>

      {/* 2. DEFINITION SECTION */}
      <section className="py-16 md:py-20 bg-white border-t border-[#dfdbc9]/30 relative overflow-hidden" id="what-is-relationship-mastery">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Glowing Sacred Heart / Vesica Piscis union - Crisp Diamond Shape */}
            <div className="lg:col-span-3 flex justify-center relative">
              <div className="relative w-60 h-60 sm:w-68 sm:h-68 rotate-45 rounded-xl p-2.5 bg-gradient-to-b from-gold via-gold/90 to-[#FAF5EB] border-2 border-gold shadow-xl flex items-center justify-center group overflow-visible">
                
                {/* Intricate Sacred Geometry Lace Mandala Frame matching the Relationship/Love theme */}
                <svg className="absolute inset-[-18px] w-[calc(100%+36px)] h-[calc(100%+36px)] text-gold/60 pointer-events-none animate-spin duration-[120s] -rotate-45" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 2.5" fill="none" />
                  <circle cx="60" cy="60" r="51" stroke="currentColor" strokeWidth="0.25" fill="none" />
                  <circle cx="60" cy="60" r="47" stroke="currentColor" strokeWidth="0.75" fill="none" />
                  
                  {/* Overlapping Circles of life / Union */}
                  <g stroke="currentColor" strokeWidth="0.35" fill="none" className="opacity-40">
                    <circle cx="60" cy="60" r="24" />
                    <circle cx="75" cy="60" r="24" />
                    <circle cx="45" cy="60" r="24" />
                    <circle cx="60" cy="75" r="24" />
                    <circle cx="60" cy="45" r="24" />
                  </g>
                </svg>

                {/* Diamond image frame - negated rotation to keep content upright */}
                <div className="w-full h-full rounded-lg overflow-hidden relative z-10 bg-[#0A252C] -rotate-45 flex items-center justify-center">
                  <SmartImage
                    id="relationship.union_diamond"
                    defaultSrc="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=400"
                    alt="Union of Connection"
                    className="w-[141%] h-[141%] max-w-none object-cover opacity-45 mix-blend-screen scale-110 group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A252C]/50 via-transparent to-transparent" />
                  
                  {/* Glowing Sacred Heart overlay illustration */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                    <defs>
                      <filter id="glow-filter-rel" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Two overlapping hearts union */}
                    <g stroke="#FFF" strokeWidth="1.25" fill="none" filter="url(#glow-filter-rel)" className="opacity-95 animate-pulse duration-3000">
                      <path d="M42 38 C36 32, 28 35, 28 44 C28 52, 38 58, 42 62 C46 58, 56 52, 56 44 C56 35, 48 32, 42 38 Z" />
                    </g>
                    <g stroke="gold" strokeWidth="1.25" fill="none" filter="url(#glow-filter-rel)" className="opacity-95 animate-pulse duration-4000">
                      <path d="M58 38 C52 32, 44 35, 44 44 C44 52, 54 58, 58 62 C62 58, 72 52, 72 44 C72 35, 64 32, 58 38 Z" />
                    </g>
                    
                    {/* Glowing sparks */}
                    <g fill="#ffffff">
                      <circle cx="50" cy="46" r="1.5" className="animate-ping" style={{ animationDuration: '2s' }} />
                      <circle cx="50" cy="46" r="1" />
                      <circle cx="36" cy="40" r="1" />
                      <circle cx="64" cy="40" r="1" />
                      <circle cx="50" cy="58" r="1.25" />
                    </g>
                  </svg>
                </div>

              </div>
            </div>

            {/* Middle Column: Detailed Methodology & Paragraphs */}
            <div className="lg:col-span-6 flex flex-col justify-center text-center space-y-6 px-4 lg:px-8">
              <div className="space-y-3">
                <h2 className="font-serif text-3xl md:text-4xl text-[#0A252C] font-semibold tracking-tight">
                  What is Relationship Mastery?
                </h2>
                
                {/* Elegant heart divider ornament */}
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[1px] w-12 bg-gold/60" />
                  <Heart className="w-5 h-5 text-gold fill-none" />
                  <div className="h-[1px] w-12 bg-gold/60" />
                </div>
              </div>

              {/* Elegant explanatory text matching the style exactly */}
              <div className="text-base md:text-base text-[#0A252C] font-normal leading-relaxed max-w-2xl mx-auto space-y-4 text-justify">
                <p>
                  Healthy relationships don't happen by chance—they are built through trust, communication, emotional awareness, and mutual understanding. Whether you're looking to strengthen your own relationships or help others build meaningful connections, this certification provides practical tools that create lasting transformation.
                </p>
                <p>
                  The Relationship Mastery Certification Program is an internationally designed course that helps you understand relationship psychology, emotional intelligence, communication, conflict resolution, trust-building, and long-term relationship success.
                </p>
                <p>
                  Whether you want to repair ancestral trauma, anchor secure attachment, or guide others into sacred relational alignment, this training provides the ultimate blueprint for deep, co-creative love.
                </p>
              </div>

              {/* Highlighted background block with gold/yellow border - Reverted back to Rectangle as requested */}
              <div className="max-w-xl mx-auto w-full px-6 py-4 bg-[#2F6D73]/5 border-2 border-gold/75 rounded-2xl text-xs md:text-sm font-bold text-[#0A252C] uppercase tracking-[0.15em] text-center shadow-sm">
                No prior coaching or counselling experience required.
              </div>
            </div>

            {/* Right Column: Quote Card - Crisp Diamond Shape with clear gap from the paragraph text */}
            <div className="lg:col-span-3 flex justify-center relative py-10 lg:py-6 overflow-visible">
              <div className="relative w-60 h-60 sm:w-68 sm:h-68 rotate-45 rounded-xl p-2.5 bg-gradient-to-b from-gold via-gold/90 to-[#FAF5EB] border-2 border-gold shadow-xl flex items-center justify-center group overflow-visible">
                
                {/* Intricate Sacred Geometry Lace Mandala Frame matching the Relationship/Love theme (negated rotation to stay upright) */}
                <svg className="absolute inset-[-18px] w-[calc(100%+36px)] h-[calc(100%+36px)] text-gold/60 pointer-events-none animate-spin duration-[120s] -rotate-45" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 2.5" fill="none" />
                  <circle cx="60" cy="60" r="51" stroke="currentColor" strokeWidth="0.25" fill="none" />
                  <circle cx="60" cy="60" r="47" stroke="currentColor" strokeWidth="0.75" fill="none" />
                  
                  {/* Overlapping Circles of life / Union */}
                  <g stroke="currentColor" strokeWidth="0.35" fill="none" className="opacity-40">
                    <circle cx="60" cy="60" r="24" />
                    <circle cx="75" cy="60" r="24" />
                    <circle cx="45" cy="60" r="24" />
                    <circle cx="60" cy="75" r="24" />
                    <circle cx="60" cy="45" r="24" />
                  </g>
                </svg>

                {/* Quote card container (white background preserved) */}
                <div className="w-full h-full rounded-lg overflow-hidden relative z-10 bg-white/95 backdrop-blur-md border border-gold/50 flex items-center justify-center">
                  
                  {/* Subtle internal gold diamond line */}
                  <div className="absolute inset-2 border border-gold/20 rounded-md pointer-events-none" />

                  {/* Upright content inside (counter-rotated -45 degrees) */}
                  <div className="-rotate-45 p-4 text-center select-none relative z-10 flex flex-col items-center justify-center space-y-2 max-w-[210px] sm:max-w-[240px]">
                    <div className="font-serif text-sm sm:text-base text-[#0A252C] font-semibold leading-relaxed space-y-1">
                      <p className="italic text-[#0A252C]">"Healing your relational blueprint is the doorway to absolute connection."</p>
                      <p className="text-gold font-bold italic text-xs sm:text-[12.5px] mt-1.5">Love is not a mystery—it is a conscious, somatic alignment."</p>
                    </div>
                    
                    {/* Elegant heart at bottom of card */}
                    <div className="flex justify-center pt-1">
                      <Heart className="w-4 h-4 text-gold fill-none animate-pulse duration-3000" strokeWidth={1.5} />
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Quote Block: Take the Next Step Towards Mastery */}
          <div className="max-w-5xl mx-auto text-center relative z-10 px-6 pt-10 pb-6">
            <div className="space-y-8">
              {/* "Take the Next Step Towards Mastery." - Extra bold, 2 sizes bigger, with vibrant yellow/gold highlight */}
              <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-ocean-dark tracking-tight leading-[1.05] uppercase max-w-5xl mx-auto drop-shadow-md">
                TAKE THE NEXT STEP <br />
                <span className="text-amber-500 drop-shadow-[0_2px_12px_rgba(245,158,11,0.45)] font-black italic font-serif lowercase">towards</span>{' '}
                <span className="text-amber-600 font-black">MASTERY.</span>
              </h2>

              {/* Sub-text paragraph - every word bold, 2 sizes larger */}
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-ocean-dark max-w-4xl mx-auto leading-relaxed font-serif italic py-4">
                Secure your place in the upcoming cohort and begin your journey of <span className="text-amber-600 font-extrabold underline decoration-amber-400 decoration-2 underline-offset-4">relational healing and transformation.</span>
              </p>
            </div>
          </div>

          {/* Elongated, beautifully stretched horizontal pathway flow spanning the full section width */}
          <div className="mt-12 pt-10 border-t border-[#2F6D73]/10 relative">
            <div className="relative">
              {/* Elegant horizontal backdrop line connecting all circles */}
              <div className="absolute left-10 right-10 top-[64px] md:top-[72px] lg:top-[80px] h-[1px] bg-gradient-to-r from-transparent via-[#2F6D73]/30 to-transparent z-0 hidden sm:block animate-pulse duration-3000" />

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-12 md:gap-16 lg:gap-24 w-full max-w-6xl mx-auto relative z-10">
                {[
                  {
                    id: 'attachment',
                    label: 'Attachment',
                    image: 'https://images.unsplash.com/photo-1510154221590-ff63e90a136f?auto=format&fit=crop&q=80&w=300',
                    desc: 'Attachment wounds'
                  },
                  {
                    id: 'regulation',
                    label: 'Regulation',
                    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=300',
                    desc: 'Nervous regulation'
                  },
                  {
                    id: 'dialogue',
                    label: 'Dialogue',
                    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=300',
                    desc: 'Conscious dialogue'
                  },
                  {
                    id: 'boundaries',
                    label: 'Boundaries',
                    image: 'https://images.unsplash.com/photo-1593349480506-8433a14cd785?auto=format&fit=crop&q=80&w=300',
                    desc: 'Sovereign boundary'
                  },
                  {
                    id: 'rebuilding',
                    label: 'Rebuilding',
                    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=300',
                    desc: 'Trust & vulnerability'
                  },
                  {
                    id: 'connection',
                    label: 'Connection',
                    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=300',
                    desc: 'Secure union'
                  }
                ].map((item, idx, arr) => (
                  <div key={idx} className="flex flex-col items-center text-center group relative">
                    
                    {/* Beautifully hand-painted watercolor flower container exactly like requested */}
                    <div className="relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center mb-3">
                      
                      {/* 1. Custom Hand painted watercolor flower ring */}
                      <RelationshipCircleWatercolorRing id={item.id} index={idx} />
 
                      {/* 2. Core perfect solid white flower frame with gold/yellow borders */}
                      <div 
                        className="absolute w-[88px] h-[88px] md:w-[102px] md:h-[102px] lg:w-[116px] lg:h-[116px] bg-cream flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-[1.04] transition-all duration-500 z-10 overflow-hidden"
                        style={{
                          clipPath: 'url(#flower-clip-path)',
                          WebkitClipPath: 'url(#flower-clip-path)'
                        }}
                      >
                        
                        {/* The Image related to the word */}
                        <SmartImage 
                          id={`relationship.${item.id}`}
                          defaultSrc={item.image} 
                          alt={item.label} 
                          className="absolute inset-0 w-full h-full object-cover scale-[1.38] origin-center transition-transform duration-700 group-hover:scale-[1.5]"
                          referrerPolicy="no-referrer"
                        />
 
                        {/* Ethereal dark overlay for text legibility inside the flower shape */}
                        <div className="absolute inset-0 bg-black/35 z-10" />

                        {/* Text label placed INSIDE the circle, centered */}
                        <div className="absolute inset-0 z-30 flex items-center justify-center p-2 text-center select-none">
                          <span className="text-[9px] md:text-[10px] lg:text-[11px] font-sans font-black tracking-wider text-[#FAF9F5] uppercase drop-shadow-md leading-tight">
                            {item.label}
                          </span>
                        </div>

                        {/* Beautiful flower-shaped border overlay inside */}
                        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none z-20 text-gold/60">
                          <path 
                            d="M 50,10 C 53,20 60,15 65,18 C 75,22 78,30 82,35 C 80,40 90,47 90,50 C 90,53 80,60 82,65 C 78,70 75,78 65,82 C 60,85 53,80 50,90 C 47,80 40,85 35,82 C 25,78 22,70 18,65 C 20,60 10,63 10,50 C 10,37 20,40 18,35 C 22,30 25,22 35,18 C 40,15 47,20 50,10 Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path 
                            d="M 50,17 C 52,24 57,20 61,22 C 69,25 71,31 74,36 C 72,40 80,46 80,49 C 80,51 72,57 74,61 C 71,66 69,72 61,75 C 57,77 52,73 50,80 C 48,73 43,77 39,75 C 31,72 29,66 26,61 C 28,57 20,51 20,49 C 20,46 28,40 26,36 C 29,31 31,25 39,22 C 43,20 48,24 50,17 Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-75"
                          />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Long elongated arrow pointing to next circle, vertically centered perfectly */}
                    {idx < arr.length - 1 && (
                      <div className="absolute top-16 md:top-18 lg:top-20 -translate-y-1/2 -right-4 sm:-right-6 md:-right-10 lg:-right-14 text-[#2F6D73]/80 pointer-events-none hidden sm:block z-20">
                        <ArrowRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CURRICULUM SECTION */}
      <section className="py-16 md:py-20 px-6 bg-[#faf7f2] border-t border-[#dfdbc9]/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-serif text-3xl md:text-5xl text-[#0A252C] font-semibold tracking-tight">
              The Relationship Mastery Path
            </h2>
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="w-10 h-[1px] bg-[#2F6D73]/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c0942c]" />
              <div className="w-10 h-[1px] bg-[#2F6D73]/30" />
            </div>
          </div>

          {/* Journey Chain Grid */}
          <div className="relative">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {relationshipModules.map((mod, idx) => {
                const IconComponent = mod.icon;
                return (
                  <div key={idx} className="relative group flex flex-col h-full">
                    {/* The Card - styled to match 3.png */}
                    <div className="bg-white hover:bg-[#FAF9F5] border border-[#dfdbc9]/60 hover:border-[#2F6D73]/80 rounded-[2.2rem] p-6 lg:p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(27,62,75,0.02)] hover:shadow-[0_15px_35px_rgba(79,119,134,0.12)] hover:-translate-y-2 transition-all duration-500 relative z-10 overflow-hidden text-left h-full">
                      
                      {/* Soft botanical branch background sketch in top corner */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-15 pointer-events-none select-none">
                        <svg className="w-full h-full text-[#7F9C87]" viewBox="0 0 100 100" fill="none">
                          <path d="M 100,0 Q 60,30 50,70 Q 30,85 10,95" stroke="currentColor" strokeWidth="0.75" />
                          <path d="M 60,30 C 55,40 50,45 40,42" stroke="currentColor" strokeWidth="0.5" />
                          <circle cx="40" cy="42" r="1.5" fill="currentColor" />
                          <circle cx="50" cy="70" r="1.5" fill="currentColor" />
                        </svg>
                      </div>

                      <div className="space-y-5 flex-grow flex flex-col">
                        {/* Header with circular icon badge & number */}
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-3xl font-extrabold text-[#c0942c] tracking-tight">
                            {mod.num}
                          </span>
                          <div className="w-10 h-10 rounded-full bg-[#EAF3F1] border border-[#2F6D73]/10 flex items-center justify-center text-[#2F6D73] shadow-sm">
                            <IconComponent className="w-4 h-4 stroke-[2]" />
                          </div>
                        </div>

                        {/* Module Label */}
                        <div className="space-y-1">
                          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0A252C] block">
                            {mod.title}
                          </span>
                          <h3 className="font-serif text-lg font-bold text-[#0A252C] leading-snug">
                            {mod.subtitle}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-[#0A252C] leading-relaxed font-normal flex-grow">
                          {mod.desc}
                        </p>
                      </div>

                      {/* Station indicator at bottom */}
                      <div className="pt-4 border-t border-[#4F7786]/10 flex items-center justify-between mt-6">
                        <span className="text-xs font-bold text-[#0A252C] uppercase tracking-[0.12em]">
                          {mod.station}
                        </span>
                        <span className="text-xs text-gold">✦</span>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Bottom Journey Timeline Map - styled to match 3.png */}
          <div className="mt-20 pt-12 border-t border-[#dfdbc9]/60 max-w-5xl mx-auto text-center space-y-10">
            <div className="space-y-4">
              <span className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#c0942c] uppercase tracking-wide block">
                This is Your Journey
              </span>
              <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#0A252C] font-normal tracking-tight leading-tight max-w-4xl mx-auto">
                You don't just learn. <span className="italic text-[#c0942c] font-normal font-serif">You heal, you grow, you transform.</span>
              </h3>
            </div>

            {/* Steps Row */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 items-stretch relative px-4 pt-4">
              
              {/* Connecting Line */}
              <div className="absolute top-[44px] left-10 right-10 h-[1.5px] bg-gradient-to-r from-[#7da086]/15 via-[#c0942c]/40 to-[#7da086]/15 z-0 hidden md:block" />

              {[
                { step: "1", title: "You arrive with courage", desc: "Setting conscious intentions", icon: "🌱" },
                { step: "2", title: "You learn with intention", desc: "Understanding relational dynamics", icon: "📖" },
                { step: "3", title: "You transform from within", desc: "Releasing protective barriers", icon: "🪷" },
                { step: "4", title: "You create conscious connections", desc: "Engaging in safe dialogues", icon: "🦋" },
                { step: "5", title: "You become the healer", desc: "Sovereign emotional leadership", icon: "🌳" }
              ].map((step, sIdx) => (
                <div key={sIdx} className="relative z-10 flex flex-col items-center text-center group h-full">
                  <div className="w-14 h-14 rounded-full bg-white border border-[#dfdbc9] group-hover:border-[#c0942c] flex-shrink-0 flex items-center justify-center text-xl shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="mt-4 space-y-1 max-w-[150px] flex flex-col justify-start h-full">
                    <h5 className="font-serif text-[13px] font-bold text-[#0A252C] leading-snug min-h-[38px] flex items-center justify-center">
                      {step.title}
                    </h5>
                    <p className="text-xs text-[#0A252C] leading-normal pt-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            {/* Final Legacy Quote */}
            <div className="w-full max-w-4xl mx-auto pt-8">
              <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-[#c0942c] font-normal leading-relaxed text-center relative px-6">
                <span className="absolute -top-4 left-0 md:left-4 font-serif text-6xl text-[#c0942c]/15 select-none pointer-events-none">“</span>
                "Healing yourself is the beginning. Healing relationships is the legacy."
                <span className="absolute -bottom-10 right-0 md:right-4 font-serif text-6xl text-[#c0942c]/15 select-none pointer-events-none">”</span>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. TRANSFORMATIONS SECTION - THE THREE SCROLLS OF TRANSFORMATION */}
      <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-[#fdfcf9] via-[#FAF9F5] to-[#fbfaf8] relative z-10 overflow-hidden border-t border-[#dfdbc9]/30" id="three-scrolls">
        {/* Animated Background Style for very soft watercolor wash, petals and golden dust */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes float-slow-up {
            0% { transform: translateY(110%) rotate(0deg) translateX(0); opacity: 0; }
            10% { opacity: 0.8; }
            90% { opacity: 0.8; }
            100% { transform: translateY(-20%) rotate(360deg) translateX(25px); opacity: 0; }
          }
          @keyframes drift-light {
            0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
            50% { transform: translate(15px, -15px) scale(1.1); opacity: 0.7; }
            100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          }
          @keyframes garden-sway {
            0%, 100% { transform: rotate(-3deg) scale(1); }
            50% { transform: rotate(3deg) scale(1.02); }
          }
          @keyframes rain-fall {
            0% { transform: translateY(-120%); opacity: 0; }
            50% { opacity: 0.4; }
            100% { transform: translateY(120%); opacity: 0; }
          }
          @keyframes pulse-gold-glow {
            0%, 100% { box-shadow: 0 0 10px rgba(192, 148, 44, 0.2); border-color: rgba(192, 148, 44, 0.3); }
            50% { box-shadow: 0 0 25px rgba(192, 148, 44, 0.5); border-color: rgba(192, 148, 44, 0.7); }
          }
          .animate-float-petal-1 {
            animation: float-slow-up 12s infinite linear;
          }
          .animate-float-petal-2 {
            animation: float-slow-up 16s infinite linear;
            animation-delay: 3s;
          }
          .animate-float-petal-3 {
            animation: float-slow-up 20s infinite linear;
            animation-delay: 7s;
          }
          .animate-float-dust {
            animation: drift-light 8s infinite ease-in-out;
          }
          .garden-flower-sway {
            animation: garden-sway 6s infinite ease-in-out;
          }
          .animate-rain-drop {
            animation: rain-fall 1.5s infinite linear;
          }
          .pulse-gold {
            animation: pulse-gold-glow 2.5s infinite ease-in-out;
          }
        `}} />

        {/* Soft Background Decorators */}
        <div className="absolute inset-0 opacity-[0.25] pointer-events-none z-0">
          {/* Radial watercolor washes */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(127,156,135,0.06)_0%,transparent_70%)] blur-2xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(79,119,134,0.05)_0%,transparent_70%)] blur-2xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(192,148,44,0.03)_0%,transparent_80%)] blur-3xl" />
          
          {/* Faint botanical sketch SVGs in background */}
          <svg className="absolute top-10 left-12 w-64 h-64 text-[#7F9C87]/15 fill-none" viewBox="0 0 100 100">
            <path d="M 10,90 Q 30,50 60,30 Q 75,20 85,10" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
            <path d="M 60,30 C 55,40 50,45 40,42 Q 35,55 25,60" stroke="currentColor" strokeWidth="0.25" strokeLinecap="round" />
            <path d="M 30,70 Q 15,65 20,50" stroke="currentColor" strokeWidth="0.25" strokeLinecap="round" />
          </svg>
          <svg className="absolute bottom-10 right-12 w-80 h-80 text-[#2F6D73]/10 fill-none" viewBox="0 0 100 100">
            <path d="M 90,90 Q 70,50 40,30 Q 25,20 15,10" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
            <path d="M 40,30 C 45,40 50,45 60,42 Q 65,55 75,60" stroke="currentColor" strokeWidth="0.25" strokeLinecap="round" />
          </svg>

          {/* Tiny golden dust particles */}
          <div className="absolute top-1/3 left-1/6 w-2 h-2 rounded-full bg-gold/30 animate-float-dust" style={{ top: '25%', left: '15%' }} />
          <div className="absolute top-2/3 right-1/4 w-3.5 h-3.5 rounded-full bg-gold/15 animate-float-dust" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-2/3 w-2.5 h-2.5 rounded-full bg-gold/25 animate-float-dust" style={{ animationDelay: '4s' }} />

          {/* Floating Petals */}
          <div className="absolute -bottom-10 left-[10%] w-3 h-4 bg-rose-200/40 rounded-full blur-[0.5px] animate-float-petal-1 pointer-events-none" />
          <div className="absolute -bottom-10 left-[45%] w-4 h-5 bg-[#7F9C87]/20 rounded-full blur-[0.5px] animate-float-petal-2 pointer-events-none" />
          <div className="absolute -bottom-10 right-[20%] w-3 h-5 bg-rose-200/30 rounded-full blur-[0.5px] animate-float-petal-3 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0a252c] font-semibold tracking-[0.2em] uppercase leading-snug" id="transformation-scrolls-title">
              The Three Scrolls of Transformation
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c0942c] to-transparent mx-auto mt-4" />
          </div>

          {/* Three Column Scroll Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 max-w-7xl mx-auto items-stretch">
            
            {/* SCROLL 1: Healing */}
            <div className="group relative flex flex-col justify-between p-8 pt-14 pb-14 bg-gradient-to-b from-[#faf6ee] via-[#FAF9F5] to-[#f5f0e3] text-ocean shadow-xl hover:shadow-2xl hover:shadow-[#c0942c]/10 hover:-translate-y-3 hover:ring-4 hover:ring-[#c0942c]/10 border border-[#dfdbc9]/65 rounded-[2.5rem] transition-all duration-700 min-h-[640px]" id="scroll-healing">
              {/* Subtle organic botanical embossing background overlay */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none overflow-hidden rounded-[2.5rem]">
                <svg className="w-full h-full text-[#c0942c] fill-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 0,20 Q 50,40 100,20" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M 0,80 Q 50,60 100,80" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Wooden rods representing scroll suspension */}
              {/* Top Rod */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-[94%] h-3.5 bg-gradient-to-r from-[#8a6f3e] via-[#dfdbc9] to-[#8a6f3e] rounded-full shadow-md z-30 flex items-center justify-between px-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#c0942c] shadow-inner" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#c0942c] shadow-inner" />
              </div>
              {/* Bottom Rod */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[94%] h-3.5 bg-gradient-to-r from-[#8a6f3e] via-[#dfdbc9] to-[#8a6f3e] rounded-full shadow-md z-30 flex items-center justify-between px-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#c0942c] shadow-inner" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#c0942c] shadow-inner" />
              </div>

              {/* Rolled Edge Highlights */}
              <div className="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-black/[0.03] to-transparent pointer-events-none rounded-t-[2.5rem]" />
              <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-black/[0.03] to-transparent pointer-events-none rounded-b-[2.5rem]" />

              <div className="space-y-6 relative z-10 w-full flex-grow flex flex-col justify-between">
                <div className="space-y-6">
                  
                  {/* Title & Stage */}
                  <div className="text-center space-y-1">
                    <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#7da086] uppercase block">
                      Stage One • Healing
                    </span>
                    <h3 className="font-serif text-2xl text-[#0a252c] font-normal">
                      The Patterns You'll Release
                    </h3>
                  </div>

                  {/* Scroll 1 Illustration: Wilted botanical branch slowly growing fresh green leaves */}
                  <div className="h-32 flex items-center justify-center relative bg-[#faf8f2]/60 rounded-2xl border border-[#dfdbc9]/40 p-4">
                    <svg className="w-full h-full max-w-[200px]" viewBox="0 0 120 60" fill="none">
                      {/* Left: Wilted drooping branch */}
                      <path d="M 10,40 Q 40,35 60,30" stroke="#a0a0a0" strokeWidth="1" strokeDasharray="1.5 1" />
                      <path d="M 25,38 Q 22,46 20,44" stroke="#a0a0a0" strokeWidth="0.75" />
                      <path d="M 40,35 Q 36,44 33,42" stroke="#a0a0a0" strokeWidth="0.75" />
                      {/* Wilted drooping leaf shape */}
                      <path d="M 20,44 C 18,50 14,48 20,44" fill="#d1d1d1" className="opacity-70" />
                      <path d="M 33,42 C 30,48 26,46 33,42" fill="#d1d1d1" className="opacity-70" />

                      {/* Center Transition */}
                      <path d="M 60,30 Q 85,25 110,20" stroke="#7da086" strokeWidth="1.5" />
                      
                      {/* Right: Fresh green budding leaves */}
                      <path d="M 72,28 Q 78,20 82,21" stroke="#7da086" strokeWidth="1" />
                      <path d="M 72,28 C 76,22 84,20 82,21 Z" fill="#7da086" />
                      <path d="M 88,25 Q 96,15 100,17" stroke="#7da086" strokeWidth="1" />
                      <path d="M 88,25 C 93,18 101,15 100,17 Z" fill="#7da086" />
                      <path d="M 100,22 Q 108,12 112,14" stroke="#7da086" strokeWidth="1" />
                      <path d="M 100,22 C 105,15 113,12 112,14 Z" fill="#7da086" />

                      {/* Growing shoot tip */}
                      <circle cx="110" cy="20" r="1.5" fill="#c0942c" />
                    </svg>
                  </div>

                  {/* Items List */}
                  <div className="space-y-5 text-left font-sans text-sm sm:text-base text-[#0a252c] leading-relaxed pt-2">
                    {[
                      "Anxious-Avoidant Loops: Break the cycle of the anxious chaser and avoidant distancer that leaves both partners empty.",
                      "Codependency & self-erasure: Repattern the default urge to sacrifice your needs, values, and boundary structure for safety.",
                      "Intimacy and vulnerability blocks: Safely release physical and emotional protective walls so you can receive and harbor clean love.",
                      "Generational & ancestral grief: Locate and cut trauma cords linked to patterns of infidelity, divorce, and relational grief."
                    ].map((item, idx, arr) => {
                      const parts = item.split(':');
                      const keyword = parts[0];
                      const desc = parts.slice(1).join(':');
                      return (
                        <div key={idx} className="space-y-4">
                          <div className="flex items-start gap-3">
                            {/* Lotus icon */}
                            <svg className="w-4 h-4 text-[#c0942c] flex-shrink-0 fill-current mt-0.5" viewBox="0 0 24 24">
                              <path d="M12 2C11.5 4 9.5 6 7 7C8.5 8 9.5 9.5 9.5 11.5C9.5 10 10.5 8.5 12 8C13.5 8.5 14.5 10 14.5 11.5C14.5 9.5 15.5 8 17 7C14.5 6 12.5 4 12 2Z" />
                              <path d="M12 8C10.5 9 8 11 8 13.5C8 15 9 16 10.5 16C11.5 16 12 15 12 14.5C12 15 12.5 16 13.5 16C15 16 16 15 16 13.5C16 11 13.5 9 12 8Z" />
                            </svg>
                            <p className="font-light">
                              <strong className="font-serif font-bold text-[#0a252c]">{keyword}:</strong>{desc}
                            </p>
                          </div>
                          {idx < arr.length - 1 && (
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#c0942c]/20 to-transparent mx-auto my-3" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>

              {/* Hover Floating Petals Overlay (Inside Card) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 overflow-hidden rounded-[2.5rem] z-0">
                <div className="absolute top-[80%] left-[10%] w-2 h-3.5 bg-rose-200/50 rounded-full animate-float-petal-1" />
                <div className="absolute top-[70%] right-[15%] w-3 h-4 bg-[#7da086]/25 rounded-full animate-float-petal-2" />
              </div>
            </div>

            {/* SCROLL 2: Transformation */}
            <div className="group relative flex flex-col justify-between p-8 pt-14 pb-14 bg-gradient-to-b from-[#f2f6f3] via-[#FAF9F5] to-[#ebf1ee] text-ocean shadow-xl hover:shadow-2xl hover:shadow-[#c0942c]/10 hover:-translate-y-3 hover:ring-4 hover:ring-[#c0942c]/10 border border-[#dfdbc9]/65 rounded-[2.5rem] transition-all duration-700 min-h-[640px]" id="scroll-transformation">
              {/* Subtle organic botanical embossing background overlay */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none overflow-hidden rounded-[2.5rem]">
                <svg className="w-full h-full text-[#c0942c] fill-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 0,20 Q 50,40 100,20" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M 0,80 Q 50,60 100,80" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Wooden rods representing scroll suspension */}
              {/* Top Rod */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-[94%] h-3.5 bg-gradient-to-r from-[#8a6f3e] via-[#dfdbc9] to-[#8a6f3e] rounded-full shadow-md z-30 flex items-center justify-between px-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#c0942c] shadow-inner" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#c0942c] shadow-inner" />
              </div>
              {/* Bottom Rod */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[94%] h-3.5 bg-gradient-to-r from-[#8a6f3e] via-[#dfdbc9] to-[#8a6f3e] rounded-full shadow-md z-30 flex items-center justify-between px-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#c0942c] shadow-inner" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#c0942c] shadow-inner" />
              </div>

              {/* Rolled Edge Highlights */}
              <div className="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-black/[0.03] to-transparent pointer-events-none rounded-t-[2.5rem]" />
              <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-black/[0.03] to-transparent pointer-events-none rounded-b-[2.5rem]" />

              <div className="space-y-6 relative z-10 w-full flex-grow flex flex-col justify-between">
                <div className="space-y-6">
                  
                  {/* Title & Stage */}
                  <div className="text-center space-y-1">
                    <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#c0942c] uppercase block">
                      Stage Two • Transformation
                    </span>
                    <h3 className="font-serif text-2xl text-[#0a252c] font-normal">
                      The Skills You'll Build
                    </h3>
                  </div>

                  {/* Scroll 2 Illustration: A blooming lotus opening in gentle morning light with flowing botanical vines */}
                  <div className="h-32 flex items-center justify-center relative bg-[#f4f7f5]/60 rounded-2xl border border-[#dfdbc9]/40 p-4 overflow-hidden">
                    {/* Morning sunrays glow background */}
                    <div className="absolute w-24 h-24 rounded-full bg-yellow-100/40 blur-xl pointer-events-none" />
                    
                    <svg className="w-full h-full max-w-[200px]" viewBox="0 0 120 60" fill="none">
                      {/* Morning Sunrays */}
                      <path d="M 60,10 L 40,2" stroke="gold" strokeWidth="0.5" strokeDasharray="1.5 2" className="opacity-70" />
                      <path d="M 60,10 L 80,2" stroke="gold" strokeWidth="0.5" strokeDasharray="1.5 2" className="opacity-70" />
                      <path d="M 60,10 L 60,0" stroke="gold" strokeWidth="0.5" strokeDasharray="1.5 2" className="opacity-70" />

                      {/* Vines wrapping */}
                      <path d="M 15,48 Q 40,43 50,42 Q 60,42 105,48" stroke="#7da086" strokeWidth="0.75" />
                      <path d="M 25,46 C 22,38 30,36 32,44" stroke="#7da086" strokeWidth="0.5" />
                      <path d="M 95,47 C 98,39 90,37 88,45" stroke="#7da086" strokeWidth="0.5" />

                      {/* Blooming Lotus Petals */}
                      {/* Back petals */}
                      <path d="M 60,24 C 50,22 45,36 60,44 C 75,36 70,22 60,24 Z" fill="#ebc7c5" stroke="#dfa3a0" strokeWidth="0.5" />
                      {/* Mid petals */}
                      <path d="M 60,28 C 52,26 48,40 60,44 C 72,40 68,26 60,28 Z" fill="#f2d2d0" stroke="#dfa3a0" strokeWidth="0.5" />
                      {/* Front petal */}
                      <path d="M 60,33 C 55,32 52,42 60,44 C 68,42 65,32 60,33 Z" fill="#ffffff" stroke="#dfa3a0" strokeWidth="0.75" />

                      {/* Lotus central stamen */}
                      <circle cx="60" cy="35" r="1.5" fill="gold" />
                      <circle cx="58" cy="34" r="1" fill="gold" />
                      <circle cx="62" cy="34" r="1" fill="gold" />
                    </svg>
                  </div>

                  {/* Items List */}
                  <div className="space-y-5 text-left font-sans text-sm sm:text-base text-[#0a252c] leading-relaxed pt-2">
                    {[
                      "Secure attachment anchoring: Master emotional regulation to create solid internal safety and foster secure relational spaces.",
                      "Clear, sovereign boundaries: Express boundaries elegantly without aggression or fear of relational abandonment.",
                      "Conscious co-creative intimacy: Co-create relational spaces centered on trust, active emotional integration, and profound safety.",
                      "Somatic Heart-Opening: Safely release defensive body armor to welcome healthy, reciprocal connection and deep relational trust."
                    ].map((item, idx, arr) => {
                      const parts = item.split(':');
                      const keyword = parts[0];
                      const desc = parts.slice(1).join(':');
                      return (
                        <div key={idx} className="space-y-4">
                          <div className="flex items-start gap-3">
                            {/* Lotus icon */}
                            <svg className="w-4 h-4 text-[#7da086] flex-shrink-0 fill-current mt-0.5" viewBox="0 0 24 24">
                              <path d="M12 2C11.5 4 9.5 6 7 7C8.5 8 9.5 9.5 9.5 11.5C9.5 10 10.5 8.5 12 8C13.5 8.5 14.5 10 14.5 11.5C14.5 9.5 15.5 8 17 7C14.5 6 12.5 4 12 2Z" />
                              <path d="M12 8C10.5 9 8 11 8 13.5C8 15 9 16 10.5 16C11.5 16 12 15 12 14.5C12 15 12.5 16 13.5 16C15 16 16 15 16 13.5C16 11 13.5 9 12 8Z" />
                            </svg>
                            <p className="font-light">
                              <strong className="font-serif font-bold text-[#0a252c]">{keyword}:</strong>{desc}
                            </p>
                          </div>
                          {idx < arr.length - 1 && (
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#7da086]/25 to-transparent mx-auto my-3" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>

              {/* Hover Floating Petals Overlay (Inside Card) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 overflow-hidden rounded-[2.5rem] z-0">
                <div className="absolute top-[80%] left-[10%] w-2 h-3.5 bg-[#7da086]/20 rounded-full animate-float-petal-1" />
                <div className="absolute top-[70%] right-[15%] w-3 h-4 bg-rose-200/40 rounded-full animate-float-petal-2" />
              </div>
            </div>

            {/* SCROLL 3: Mastery */}
            <div className="group relative flex flex-col justify-between p-8 pt-14 pb-14 bg-gradient-to-b from-[#ebf3f4] via-[#FAF9F5] to-[#deebed] text-ocean shadow-xl hover:shadow-2xl hover:shadow-[#c0942c]/10 hover:-translate-y-3 hover:ring-4 hover:ring-[#c0942c]/10 border border-[#dfdbc9]/65 rounded-[2.5rem] transition-all duration-700 min-h-[640px]" id="scroll-mastery">
              {/* Subtle organic botanical embossing background overlay */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none overflow-hidden rounded-[2.5rem]">
                <svg className="w-full h-full text-[#c0942c] fill-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 0,20 Q 50,40 100,20" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M 0,80 Q 50,60 100,80" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Wooden rods representing scroll suspension */}
              {/* Top Rod */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-[94%] h-3.5 bg-gradient-to-r from-[#8a6f3e] via-[#dfdbc9] to-[#8a6f3e] rounded-full shadow-md z-30 flex items-center justify-between px-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#c0942c] shadow-inner" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#c0942c] shadow-inner" />
              </div>
              {/* Bottom Rod */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[94%] h-3.5 bg-gradient-to-r from-[#8a6f3e] via-[#dfdbc9] to-[#8a6f3e] rounded-full shadow-md z-30 flex items-center justify-between px-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#c0942c] shadow-inner" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#c0942c] shadow-inner" />
              </div>

              {/* Rolled Edge Highlights */}
              <div className="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-black/[0.03] to-transparent pointer-events-none rounded-t-[2.5rem]" />
              <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-black/[0.03] to-transparent pointer-events-none rounded-b-[2.5rem]" />

              <div className="space-y-6 relative z-10 w-full flex-grow flex flex-col justify-between">
                <div className="space-y-6">
                  
                  {/* Title & Stage */}
                  <div className="text-center space-y-1">
                    <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#2f6d73] uppercase block">
                      Stage Three • Mastery
                    </span>
                    <h3 className="font-serif text-2xl text-[#0a252c] font-normal">
                      The Practitioner You'll Become
                    </h3>
                  </div>

                  {/* Scroll 3 Illustration: A flourishing Tree of Life with warm golden sunrise behind it */}
                  <div className="h-32 flex items-center justify-center relative bg-[#eef5f6]/60 rounded-2xl border border-[#dfdbc9]/40 p-4 overflow-hidden">
                    {/* Golden sunrise rays background */}
                    <div className="absolute w-20 h-20 rounded-full bg-gradient-to-b from-yellow-300/30 to-amber-200/10 blur-lg pointer-events-none" />
                    
                    <svg className="w-full h-full max-w-[200px]" viewBox="0 0 120 60" fill="none">
                      {/* Sunrise Circle */}
                      <circle cx="60" cy="38" r="16" fill="url(#sunrise-glow-1)" className="opacity-60" />
                      <defs>
                        <radialGradient id="sunrise-glow-1" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#c0942c" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#dfdbc9" stopOpacity="0" />
                        </radialGradient>
                      </defs>

                      {/* Tree Roots */}
                      <path d="M 60,42 Q 55,50 45,52" stroke="#2f6d73" strokeWidth="0.75" />
                      <path d="M 60,42 Q 65,50 75,52" stroke="#2f6d73" strokeWidth="0.75" />
                      <path d="M 60,42 L 60,54" stroke="#2f6d73" strokeWidth="0.75" />

                      {/* Tree Trunk */}
                      <path d="M 58,42 L 57,32 C 57,28 50,22 45,24" stroke="#2f6d73" strokeWidth="1.75" strokeLinecap="round" />
                      <path d="M 62,42 L 63,32 C 63,28 70,22 75,24" stroke="#2f6d73" strokeWidth="1.75" strokeLinecap="round" />
                      <path d="M 60,32 L 60,18" stroke="#2f6d73" strokeWidth="1.5" />

                      {/* Flourishing Canopy / Leaf Clusters with gold highlights */}
                      <circle cx="45" cy="22" r="6" fill="#7da086" className="opacity-80" />
                      <circle cx="75" cy="22" r="6" fill="#7da086" className="opacity-80" />
                      <circle cx="60" cy="16" r="8" fill="#5a8795" className="opacity-80" />
                      
                      {/* Golden fruits / blossoms */}
                      <circle cx="44" cy="21" r="1.5" fill="gold" />
                      <circle cx="76" cy="23" r="1.5" fill="gold" />
                      <circle cx="58" cy="15" r="2.0" fill="gold" />
                      <circle cx="62" cy="17" r="1.5" fill="gold" />
                    </svg>
                  </div>

                  {/* Items List */}
                  <div className="space-y-5 text-left font-sans text-sm sm:text-base text-[#0a252c] leading-relaxed pt-2">
                    {[
                      "Become a certified expert: Acquire recognized certifications and qualifications to build a successful and rewarding coaching career.",
                      "Client Session Facilitation: Lead powerful diagnostic assessments, somatic integration practices, and client boundary plans.",
                      "Relational Workshop Design: Structure and deliver couples retreats, intimacy seminars, and conflict resolution circles.",
                      "Relational Ethics & Practice: Anchor professional ethical standards, trauma-informed safety guidelines, and practitioner hygiene."
                    ].map((item, idx, arr) => {
                      const parts = item.split(':');
                      const keyword = parts[0];
                      const desc = parts.slice(1).join(':');
                      return (
                        <div key={idx} className="space-y-4">
                          <div className="flex items-start gap-3">
                            {/* Lotus icon */}
                            <svg className="w-4 h-4 text-[#2f6d73] flex-shrink-0 fill-current mt-0.5" viewBox="0 0 24 24">
                              <path d="M12 2C11.5 4 9.5 6 7 7C8.5 8 9.5 9.5 9.5 11.5C9.5 10 10.5 8.5 12 8C13.5 8.5 14.5 10 14.5 11.5C14.5 9.5 15.5 8 17 7C14.5 6 12.5 4 12 2Z" />
                              <path d="M12 8C10.5 9 8 11 8 13.5C8 15 9 16 10.5 16C11.5 16 12 15 12 14.5C12 15 12.5 16 13.5 16C15 16 16 15 16 13.5C16 11 13.5 9 12 8Z" />
                            </svg>
                            <p className="font-light">
                              <strong className="font-serif font-bold text-[#0a252c]">{keyword}:</strong>{desc}
                            </p>
                          </div>
                          {idx < arr.length - 1 && (
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#2f6d73]/25 to-transparent mx-auto my-3" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>

              {/* Hover Floating Petals Overlay (Inside Card) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 overflow-hidden rounded-[2.5rem] z-0">
                <div className="absolute top-[80%] left-[10%] w-2 h-3.5 bg-[#2f6d73]/20 rounded-full animate-float-petal-1" />
                <div className="absolute top-[70%] right-[15%] w-3 h-4 bg-rose-200/40 rounded-full animate-float-petal-2" />
              </div>
            </div>

          </div>

        </div>
      </section>

       {/* 4B. A LETTER TO YOUR YOUNGER SELF (REFLECTIVE WRITING SECTION) */}
      <section className="py-16 md:py-20 px-6 bg-[#FAF9F5] text-[#0a252c] relative z-10 overflow-hidden border-t border-[#dfdbc9]/30" id="letter-to-younger-self">
        {/* Soft Sunlit Backdrop & Subtle Glows */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_15%,rgba(247,243,230,0.6),transparent_70%)]" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-amber-100/10 blur-[120px]" />
          <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] rounded-full bg-[#2f6d73]/5 blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center mb-6 space-y-2">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#0a252c] font-normal tracking-tight">
              A Letter to Your Younger Self 
            </h2>
            <p className="max-w-3xl mx-auto text-center text-xs md:text-sm text-[#4a6b72] font-serif italic leading-relaxed px-4 pt-1">
              Writing a letter to your younger self is a restorative ritual of release and self-compassion. By giving voice to unresolved feelings, unspoken gratitude, or gentle wisdom, you allow your past self to feel truly seen and held. Sealing your letter with a symbolic wax emblem anchors your healing intention, releasing emotional weight into peace.
            </p>
          </div>

          {/* Interactive Writing Desk & Form Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-7xl mx-auto">
            
            {/* LEFT COLUMN: THE VINTAGE WRITING DESK VISUALIZER (REDUCED TO lg:col-span-5 WITH ONE BIG LETTER) */}
            <div 
              className="lg:col-span-5 rounded-[2.5rem] border border-[#dfdbc9]/50 flex flex-col justify-center items-center relative overflow-hidden h-[580px] lg:h-[620px] shadow-2xl bg-cover bg-center transition-all duration-1000 p-4 md:p-6"
              style={{ 
                backgroundImage: `linear-gradient(to bottom, rgba(10, 37, 44, 0.45) 0%, rgba(10, 37, 44, 0.65) 60%, rgba(10, 25, 30, 0.92) 100%), url('${getSrc('relationship.writing_desk_bg', 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1600')}')`
              }}
            >
              {/* Submission Animation Overlays */}
              {submissionStep !== 'idle' && submissionStep !== 'success' && (
                <div className="absolute inset-0 bg-[#faf6ee]/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center p-6 text-center text-[#0a252c]">
                  <div className="max-w-md space-y-6">
                    {submissionStep === 'folding' && (
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }} 
                        animate={{ scale: 1, opacity: 1 }} 
                        className="space-y-4"
                      >
                        <div className="w-16 h-16 rounded-full bg-[#c0942c]/10 border border-[#c0942c]/20 mx-auto flex items-center justify-center text-[#c0942c] animate-pulse">
                          <svg className="w-8 h-8 fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <p className="font-serif italic text-[#0a252c] text-base">Carefully folding your letter on heavy parchment paper...</p>
                      </motion.div>
                    )}

                    {submissionStep === 'seeding' && (
                      <motion.div 
                        initial={{ y: -50, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        className="space-y-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#c0942c] shadow-[0_0_15px_#c0942c] mx-auto animate-ping" />
                        <p className="font-serif italic text-[#0a252c] text-base">Melting the organic wax to place the sacred seal...</p>
                      </motion.div>
                    )}

                    {submissionStep === 'raining' && (
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="space-y-4"
                      >
                        <div className="w-16 h-16 mx-auto text-[#2f6d73] flex items-center justify-center">
                          <svg className="w-10 h-10 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3" />
                          </svg>
                        </div>
                        <p className="font-serif italic text-[#0a252c] text-base">Releasing your letter to dissolve into pure healing light...</p>
                      </motion.div>
                    )}

                    {submissionStep === 'sprouting' && (
                      <motion.div 
                        initial={{ scale: 0.5, opacity: 0 }} 
                        animate={{ scale: 1, opacity: 1 }} 
                        className="space-y-4"
                      >
                        <div className="w-12 h-16 mx-auto text-[#c0942c] flex items-end justify-center">
                          <svg className="w-8 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096L9 21zm0 0l1.187-5.096L9 21zm5.121-11.879A9 9 0 0012 3a9 9 0 00-6.12 2.397m12.24 0A9 9 0 0118 12c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.656 48.656 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7C3.046 14.453 3 13.232 3 12c0-2.453.987-4.662 2.586-6.121" />
                          </svg>
                        </div>
                        <p className="font-serif italic text-[#0a252c] text-base">The energy of your words transforms into inner wisdom...</p>
                      </motion.div>
                    )}

                    {submissionStep === 'bloomed' && (
                      <motion.div 
                        initial={{ scale: 0.2, opacity: 0, rotate: -45 }} 
                        animate={{ scale: 1, opacity: 1, rotate: 0 }} 
                        transition={{ type: "spring", stiffness: 60 }}
                        className="space-y-4"
                      >
                        <div className="w-24 h-24 mx-auto flex items-center justify-center pulse-gold border-2 border-[#c0942c]/30 rounded-full bg-[#c0942c]/10">
                          {newFlowerData && renderVintageLetterSVG(newFlowerData.category, newFlowerData.flowerColor)}
                        </div>
                        <h4 className="font-serif text-xl text-[#c0942c]">Letter Sealed!</h4>
                        <p className="font-serif italic text-[#0a252c] text-sm max-w-xs mx-auto">Your letter has joined the eternal archives of healing on our sanctuary desk.</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              )}

              {/* SUCCESS OVERLAY */}
              {submissionStep === 'success' && (
                <div className="absolute inset-0 bg-[#faf6ee]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center p-8 text-center text-[#0a252c]">
                  <div className="max-w-md space-y-6">
                    <div className="w-20 h-20 rounded-full bg-[#2f6d73]/10 border border-[#2f6d73]/30 mx-auto flex items-center justify-center text-[#2f6d73] shadow-lg animate-pulse">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl text-[#0a252c]">Your Letter is Sealed</h3>
                      <p className="text-sm text-[#4a6b72] leading-relaxed font-light">
                        Thank you for sharing your heart. Your letter has been safely sealed and integrated into the timeline of your soul. Let go, and be at peace.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmissionStep('idle')}
                      className="px-6 py-2.5 bg-[#2f6d73] text-white rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-[#2f6d73]/90 transition-all duration-300 cursor-pointer"
                    >
                      Return to Desk
                    </button>
                  </div>
                </div>
              )}

              {/* Soft Candlelight Overlay Dots */}
              <div className="absolute inset-0 opacity-[0.2] pointer-events-none select-none z-0">
                <div className="absolute top-[12%] left-[20%] w-2 h-2 bg-amber-400 rounded-full blur-[2px] animate-pulse" />
                <div className="absolute top-[18%] right-[25%] w-3 h-3 bg-yellow-300 rounded-full blur-[3px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-[28%] left-[65%] w-2 h-2 bg-amber-400 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '2.5s' }} />
              </div>

              {/* ONE BIG LETTER RESTING ON THE DESK - VISIBLE & UPDATED AS USER WRITES */}
              <div className="relative z-20 flex-1 flex flex-col items-center justify-center p-2 my-auto w-full">
                <motion.div 
                  key={formCategory}
                  initial={{ opacity: 0.95, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full bg-[#FAF6EE] text-[#0a252c] rounded-2xl border-2 border-[#c0942c]/40 p-5 md:p-6 shadow-[0_15px_35px_rgba(0,0,0,0.35)] relative flex flex-col justify-between min-h-[380px] max-h-[460px] overflow-y-auto"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(192,148,44,0.12) 1px, transparent 1px), radial-gradient(circle at 50% 0%, rgba(250,246,238,1) 0%, rgba(243,235,215,1) 100%)',
                    backgroundSize: '100% 1.8rem, 100% 100%',
                    lineHeight: '1.8rem'
                  }}
                >
                  {/* Vintage Corner Flourishes */}
                  <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#c0942c]/40 rounded-tl pointer-events-none" />
                  <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#c0942c]/40 rounded-tr pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#c0942c]/40 rounded-bl pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#c0942c]/40 rounded-br pointer-events-none" />

                  {/* Letter Header Info */}
                  <div className="space-y-2 border-b border-[#c0942c]/25 pb-3 z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#c0942c] font-bold">
                        📜 SACRED PARCHMENT
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#4a6b72] font-bold">
                        {formCategory || "SELF HEALING"}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-left font-serif text-xs pt-1">
                      <div>
                        <span className="text-[9px] uppercase font-mono text-[#4a6b72] block font-bold">To:</span>
                        <span className="font-bold text-[#0a252c] truncate block">
                          {formTo || selectedLetter?.to || "My Younger Self"}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-mono text-[#4a6b72] block font-bold">From:</span>
                        <span className="font-bold text-[#0a252c] truncate block">
                          {formFrom || selectedLetter?.from || "My Present Self"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Letter Body Content */}
                  <div className="my-3 text-left font-serif text-xs sm:text-sm leading-[1.8rem] text-[#0a252c] italic whitespace-pre-wrap z-10 flex-1">
                    {formMessage || selectedLetter?.message || (
                      <span className="text-[#4a6b72]/60 not-italic font-sans text-xs">
                        Start typing your message on the right control panel... Your words will immediately appear here on this sacred parchment. Speak your truth and offer comfort to your soul.
                      </span>
                    )}
                  </div>

                  {/* Letter Footer with Wax Emblem Stamp */}
                  <div className="pt-3 border-t border-[#c0942c]/25 flex items-center justify-between z-10">
                    <div className="text-[9px] font-mono uppercase tracking-wider text-[#4a6b72] font-bold">
                      ✦ SEALED ARCHIVE ✦
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#c0942c] font-bold">
                        {formCategory || "SELF HEALING"} Seal
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#c0942c] to-[#eab308] border border-white flex items-center justify-center text-white text-xs shadow-md">
                        {formCategory.toUpperCase().includes("GRATITUDE") ? "💛" :
                         formCategory.toUpperCase().includes("FORGIVENESS") ? "🤍" :
                         formCategory.toUpperCase().includes("HEALING") ? "💖" :
                         formCategory.toUpperCase().includes("LOVE") ? "❤️" :
                         formCategory.toUpperCase().includes("HOPE") ? "🧡" :
                         formCategory.toUpperCase().includes("GRIEF") ? "💜" :
                         formCategory.toUpperCase().includes("CLOSURE") ? "💚" : "💙"}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>

            {/* RIGHT COLUMN: THE STATIONARY HANDWRITTEN LETTER FORM (INCREASED TO lg:col-span-7) */}
            <div className="lg:col-span-7 bg-[#faf6ee] rounded-[2.5rem] border border-[#dfdbc9]/70 p-5 md:p-6 flex flex-col justify-between shadow-xl relative text-[#0a252c] h-[580px] lg:h-[620px] overflow-y-auto">
              
              {/* Botanical ornamental borders in corner */}
              <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-[#c0942c]/20 rounded-tl-xl pointer-events-none" />
              <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#c0942c]/20 rounded-tr-xl pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-[#c0942c]/20 rounded-bl-xl pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-[#c0942c]/20 rounded-br-xl pointer-events-none" />

              <div className="space-y-3 relative z-10 w-full my-auto">
                
                {/* Form Header */}
                <div className="text-center space-y-1 pb-2 border-b border-[#dfdbc9]/40">
                  <h3 className="font-serif text-lg font-semibold text-[#0a252c]">
                    Seal and Release Your Letter
                  </h3>
                  <p className="text-[10.5px] text-[#4a6b72] italic font-light">
                    Release your heart's heaviest burdens. Seal them with wax and watch them dissolve.
                  </p>
                </div>

                {/* Form inputs: Order requested: To -> From -> Message Sub-box -> Categories (3 rows with hearts) -> Submit */}
                <form onSubmit={handlePlantLetter} className="space-y-3 text-left font-serif">
                  
                  {/* 1. Recipient */}
                  <div className="space-y-0.5">
                    <label className="text-[10px] font-mono tracking-wider text-[#4a6b72] font-bold uppercase flex items-center gap-1">
                      <span>💌</span> WHO IS THIS LETTER FOR?
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. My 7-year-old self, My teenage self..."
                        value={formTo}
                        onChange={(e) => setFormTo(e.target.value)}
                        className="w-full bg-transparent border-b border-[#dfdbc9] focus:border-[#c0942c] py-1 px-1 text-xs outline-none font-sans font-medium transition-colors"
                      />
                    </div>
                  </div>

                  {/* 2. Sender */}
                  <div className="space-y-0.5">
                    <label className="text-[10px] font-mono tracking-wider text-[#4a6b72] font-bold uppercase flex items-center gap-1">
                      <span>✍️</span> FROM (OPTIONAL, OR WRITE ANONYMOUSLY)
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="e.g. A wiser version of you, Me today..."
                        value={formFrom}
                        onChange={(e) => setFormFrom(e.target.value)}
                        className="w-full bg-transparent border-b border-[#dfdbc9] focus:border-[#c0942c] py-1 px-1 text-xs outline-none font-sans font-medium transition-colors"
                      />
                    </div>
                  </div>

                  {/* 3. Writing Part Sub-box (Placed immediately after From) */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono tracking-wider text-[#4a6b72] font-bold uppercase flex items-center gap-1">
                      <span>📝</span> WRITE YOUR REFLECTIVE LETTER...
                    </label>
                    <div className="relative rounded-xl border border-[#dfdbc9] bg-white p-2.5 shadow-inner">
                      <textarea
                        required
                        rows={3}
                        placeholder="Type your message here. Speak your absolute truth. Pour out your love, forgiveness, and guidance to the child inside..."
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        className="w-full bg-transparent resize-none leading-[1.5rem] text-xs outline-none font-serif placeholder:font-serif placeholder:italic focus:ring-0 focus:outline-none text-[#0a252c]"
                        style={{
                          backgroundImage: 'linear-gradient(rgba(192,148,44,0.15) 1px, transparent 1px)',
                          backgroundSize: '100% 1.5rem',
                          lineHeight: '1.5rem'
                        }}
                      />
                    </div>
                  </div>

                  {/* 4. Category Selection - 3 Rows with Small Colored Hearts */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono tracking-wider text-[#4a6b72] font-bold uppercase flex items-center gap-1">
                      <span>📜</span> SELECT A HEALING WAX SEAL CATEGORY
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 text-xs font-sans">
                      {[
                        { name: "GRATITUDE", heart: "💛" },
                        { name: "FORGIVENESS", heart: "🤍" },
                        { name: "SELF HEALING", heart: "💖" },
                        { name: "LOVE", heart: "❤️" },
                        { name: "HOPE", heart: "🧡" },
                        { name: "GRIEF", heart: "💜" },
                        { name: "CLOSURE", heart: "💚" },
                        { name: "UNSPOKEN WORDS", heart: "💙" }
                      ].map((cat) => (
                        <button
                          key={cat.name}
                          type="button"
                          onClick={() => setFormCategory(cat.name)}
                          className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg border text-left transition-all cursor-pointer ${
                            formCategory.toUpperCase() === cat.name
                              ? "bg-white border-[#c0942c] text-[#0a252c] font-bold shadow-sm" 
                              : "bg-transparent border-[#dfdbc9]/60 hover:bg-[#FAF9F5] text-[#4a6b72]"
                          }`}
                        >
                          <span className="text-xs">{cat.heart}</span>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider truncate leading-tight">{cat.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 5. Seal & Release Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#1a434e] hover:bg-[#112d34] text-white font-mono text-[11px] font-bold tracking-[0.18em] uppercase rounded-full shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 mt-1 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>✉️</span> SEAL & RELEASE MY LETTER
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

        {/* PARCHMENT DRAWER MODAL FOR READING PLANTED LETTERS */}
        <AnimatePresence>
          {selectedLetter && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#041216]/85 backdrop-blur-md flex items-center justify-center p-6"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 30 }} 
                animate={{ scale: 1, y: 0 }} 
                exit={{ scale: 0.9, y: 30 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="bg-[#faf6ee] rounded-[3rem] border border-[#dfdbc9] max-w-xl w-full p-8 md:p-10 shadow-2xl relative text-[#0a252c] text-left"
              >
                {/* Decorative golden corner loops */}
                <div className="absolute top-5 left-5 w-12 h-12 border-t-2 border-l-2 border-[#c0942c]/30 rounded-tl-xl" />
                <div className="absolute top-5 right-5 w-12 h-12 border-t-2 border-r-2 border-[#c0942c]/30 rounded-tr-xl" />
                <div className="absolute bottom-5 left-5 w-12 h-12 border-b-2 border-l-2 border-[#c0942c]/30 rounded-bl-xl" />
                <div className="absolute bottom-5 right-5 w-12 h-12 border-b-2 border-r-2 border-[#c0942c]/30 rounded-br-xl" />

                {/* Wax Seal Floating Accents */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-red-700 to-red-800 flex items-center justify-center text-gold font-bold shadow-md border-2 border-gold/30 z-10 font-serif text-sm">
                  🪷
                </div>

                <div className="space-y-6 pt-4 relative z-10">
                  
                  {/* Recipient Letter Head */}
                  <div className="text-center space-y-1">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#c0942c] uppercase block">
                      A MESSAGE FROM THE SANCTUARY
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-ocean-dark italic">
                      To: {selectedLetter.to}
                    </h3>
                    <p className="text-xs text-sage italic">
                      From: {selectedLetter.from} • Theme: {selectedLetter.emoji} {selectedLetter.category}
                    </p>
                  </div>

                  <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c0942c]/40 to-transparent mx-auto" />

                  {/* Handwritten styled parchment text */}
                  <div className="relative rounded-2xl border border-[#dfdbc9]/50 bg-white/70 p-6 shadow-inner min-h-[160px] flex items-center">
                    <p className="font-serif text-base leading-relaxed text-[#0a252c] italic text-center w-full">
                      "{selectedLetter.message}"
                    </p>
                  </div>

                  <div className="w-16 h-16 mx-auto flex items-center justify-center border border-[#dfdbc9]/60 rounded-full bg-[#FAF9F5]">
                    {renderVintageLetterSVG(selectedLetter.category, selectedLetter.flowerColor)}
                  </div>

                  {/* Close Wax Seal Button */}
                  <div className="text-center pt-2">
                    <button
                      onClick={() => setSelectedLetter(null)}
                      className="px-8 py-3.5 bg-gradient-to-r from-red-800 to-red-900 text-white rounded-full text-xs font-mono font-bold tracking-[0.15em] uppercase shadow-lg hover:from-red-900 hover:to-black transition-all cursor-pointer border border-[#c0942c]/20"
                    >
                      🕯️ Dissolve & Release
                    </button>
                    <p className="text-[10px] text-sage italic mt-2.5">
                      "Dissolve your letter and let its emotional weight wash away into pure energy."
                    </p>
                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>


      {/* 5. WHO IS THIS FOR SECTION (Lotus Blossom Redesign) */}
      <section className="py-16 md:py-20 bg-[#FAF9F6] text-ocean relative overflow-hidden border-t border-[#dfdbc9]/30 z-10">
        
        {/* Sacred Geometry & Ambient Watercolor Background Wash */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Radial Watercolor Washes */}
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#769466]/8 blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#4F7786]/8 blur-[100px]" />
          <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-[#E2ECE6]/25 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          
          {/* Low Opacity Sacred Geometry */}
          <svg viewBox="0 0 100 100" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-[#2F6D73] opacity-[0.035]">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 1" />
            <path d="M 50,20 C 55,35 55,65 50,80" fill="none" stroke="currentColor" strokeWidth="0.08" />
            <path d="M 50,20 C 45,35 45,65 50,80" fill="none" stroke="currentColor" strokeWidth="0.08" />
            <path d="M 20,50 C 35,55 65,55 80,50" fill="none" stroke="currentColor" strokeWidth="0.08" />
            <path d="M 20,50 C 35,45 65,45 80,50" fill="none" stroke="currentColor" strokeWidth="0.08" />
            <circle cx="50" cy="35" r="15" fill="none" stroke="currentColor" strokeWidth="0.08" />
            <circle cx="50" cy="65" r="15" fill="none" stroke="currentColor" strokeWidth="0.08" />
            <circle cx="35" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.08" />
            <circle cx="65" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.08" />
          </svg>

          {/* Floating Handcrafted Lotus Petals */}
          <motion.div 
            animate={{ y: [0, -15, 0], x: [0, 10, 0], rotate: [0, 12, 0] }} 
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }} 
            className="absolute top-[12%] left-[6%] w-10 h-16 rounded-[100%_0%_100%_0%] bg-[#FAF5EB] border border-[#2F6D73]/10 opacity-[0.25] transform -rotate-12" 
          />
          <motion.div 
            animate={{ y: [0, 20, 0], x: [0, -8, 0], rotate: [0, -15, 0] }} 
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1 }} 
            className="absolute bottom-[15%] right-[8%] w-8 h-12 rounded-[0%_100%_0%_100%] bg-[#E2ECE6] border border-gold/15 opacity-[0.35] transform rotate-45" 
          />
          <motion.div 
            animate={{ y: [0, -12, 0], x: [0, -12, 0], rotate: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 2.5 }} 
            className="absolute top-[60%] left-[8%] w-6 h-10 rounded-[100%_0%_100%_0%] bg-[#4F7786]/10 border border-[#4F7786]/10 opacity-20" 
          />
          <motion.div 
            animate={{ y: [0, -18, 0], x: [0, 15, 0], rotate: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 11, ease: "easeInOut", delay: 4 }} 
            className="absolute top-[8%] right-[15%] w-7 h-11 rounded-[0%_100%_0%_100%] bg-gold/10 border border-gold/10 opacity-20" 
          />

          {/* Tiny Glowing Particles */}
          <div className="absolute top-[25%] left-[22%] w-1.5 h-1.5 rounded-full bg-gold/30 animate-pulse duration-3000" />
          <div className="absolute bottom-[30%] right-[25%] w-2 h-2 rounded-full bg-[#E2ECE6]/50 animate-pulse duration-2000" />
          <div className="absolute top-[65%] right-[18%] w-1.5 h-1.5 rounded-full bg-gold/40 animate-pulse duration-4000" />

          {/* Elegant Subtle Botanical Line Drawing SVG in corners */}
          <svg viewBox="0 0 100 100" className="absolute top-[5%] right-0 w-32 h-48 text-[#2F6D73]/5 pointer-events-none select-none">
            <path d="M 100,0 C 70,10 60,30 65,50 M 80,10 C 65,15 62,22 68,28 M 70,25 C 55,28 50,38 58,45" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
            <path d="M 65,50 C 68,46 72,44 76,48 Z" fill="currentColor" />
            <path d="M 68,28 C 70,24 74,22 78,26 Z" fill="currentColor" />
            <path d="M 58,45 C 60,41 64,39 68,43 Z" fill="currentColor" />
          </svg>
          <svg viewBox="0 0 100 100" className="absolute bottom-0 left-0 w-32 h-48 text-[#769466]/5 pointer-events-none select-none transform rotate-180">
            <path d="M 100,0 C 70,10 60,30 65,50 M 80,10 C 65,15 62,22 68,28 M 70,25 C 55,28 50,38 58,45" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
            <path d="M 65,50 C 68,46 72,44 76,48 Z" fill="currentColor" />
            <path d="M 68,28 C 70,24 74,22 78,26 Z" fill="currentColor" />
            <path d="M 58,45 C 60,41 64,39 68,43 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* SECTION TITLE */}
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#0A252C] font-semibold tracking-tight leading-tight max-w-3xl mx-auto">
              Who Is This Program For?
            </h2>
            <p className="text-sm md:text-base text-ocean-dark/70 font-light font-serif italic max-w-xl mx-auto leading-relaxed">
              Designed for souls ready to heal their old patterns and wounds.
            </p>
            <div className="flex justify-center pt-2">
              <div className="h-[1px] w-16 bg-gold/50" />
            </div>
          </div>

          {/* LOTUS LAYOUT CONTAINER */}
          {/* A. Desktop Layout: Integrated 4-Petal Flower arrangement */}
          <div className="hidden lg:block relative w-full max-w-5xl mx-auto h-[540px] my-4 select-none">
            
            {/* Background connection waves branching out of center */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full text-gold/15 pointer-events-none select-none z-0">
              <path d="M 120,120 Q 200,200 200,200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 280,120 Q 200,200 200,200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 120,280 Q 200,200 200,200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 280,280 Q 200,200 200,200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
            </svg>

            {/* Central Glowing Fully Bloomed Lotus */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
              <div className="relative w-60 h-60 md:w-64 md:h-64 flex items-center justify-center">
                {/* Universal pulsing ambient glow */}
                <div className="absolute inset-0 bg-gold/10 rounded-full blur-2xl animate-pulse duration-4000 pointer-events-none" />
                
                {/* Direction-oriented Ripple connection shooting towards the hovered petal */}
                {activePetal !== null && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                    className={`absolute inset-0 rounded-full blur-md pointer-events-none ${
                      activePetal === 0 ? "bg-[#769466]/25 -translate-x-10 -translate-y-10" :
                      activePetal === 1 ? "bg-[#2F6D73]/25 translate-x-10 -translate-y-10" :
                      activePetal === 2 ? "bg-[#4F7786]/25 -translate-x-10 translate-y-10" :
                      "bg-gold/25 translate-x-10 translate-y-10"
                    }`}
                  />
                )}

                {/* Double golden/teal ring backing with breathing scale */}
                <motion.div 
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute inset-1 rounded-full border border-gold/30 flex items-center justify-center shadow-[inset_0_0_20px_rgba(212,175,55,0.06)] bg-[#FAF9F5]/95 backdrop-blur-sm z-10"
                >
                  <div className="absolute inset-2.5 rounded-full border border-[#2F6D73]/15 flex flex-col items-center justify-center text-center p-3">
                    {/* Centered blooming lotus icon */}
                    <svg viewBox="0 0 100 100" className="w-10 h-10 text-[#2F6D73] mb-1 animate-bounce" style={{ animationDuration: '4s' }}>
                      <path d="M 50,80 C 35,68 36,45 50,25 C 64,45 65,68 50,80 Z" fill="#E2ECE6" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M 50,80 C 24,72 15,55 32,42 C 40,51 44,66 50,80 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M 50,80 C 76,72 85,55 68,42 C 60,51 56,66 50,80 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M 50,80 C 42,65 44,48 50,32 C 56,48 58,65 50,80 Z" fill="currentColor" className="text-gold/80" />
                    </svg>
                    
                    <span className="font-serif text-xs md:text-sm font-bold text-[#2F6D73]/80 uppercase tracking-[0.2em] mb-0.5">
                      Program Path
                    </span>
                    <span className="font-serif text-base md:text-lg font-bold text-ocean-dark tracking-wider leading-tight">
                      Who Is This
                    </span>
                    <span className="font-serif text-base md:text-lg font-bold text-ocean-dark tracking-wider leading-tight">
                      Program For?
                    </span>
                    
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold/5 to-transparent mix-blend-overlay pointer-events-none" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* The 4 Premium Lotus Petal Cards */}
            {[
              {
                title: "Individuals",
                illustration: <IndividualsIllustration />,
                desc: "Looking to break patterns of toxic loop attachment, establish deep self-sovereignty, and prepare for secure love.",
                gradientClass: "from-[#769466]/12 via-[#FAF9F6]/95 to-[#E2ECE6]/30",
                borderClass: "border-[#769466]/35 hover:border-[#769466]/75",
                textClass: "text-[#769466]",
                glowClass: "shadow-[0_8px_30px_rgba(118,148,102,0.04)] hover:shadow-[0_20px_50px_rgba(118,148,102,0.12)]",
                shapeClass: "rounded-[140px_20px_140px_20px]",
                posClass: "left-[4%] top-[4%] w-[38%] h-[200px]"
              },
              {
                title: "Couples",
                illustration: <CouplesIllustration />,
                desc: "Who desire to dismantle chronic triggers, learn repair methodologies, and build lasting, sacred connection.",
                gradientClass: "from-[#2F6D73]/12 via-[#FAF9F6]/95 to-[#EAF3F1]/40",
                borderClass: "border-[#2F6D73]/35 hover:border-[#2F6D73]/75",
                textClass: "text-[#2F6D73]",
                glowClass: "shadow-[0_8px_30px_rgba(47,109,115,0.04)] hover:shadow-[0_20px_50px_rgba(47,109,115,0.12)]",
                shapeClass: "rounded-[20px_140px_20px_140px]",
                posClass: "right-[4%] top-[4%] w-[38%] h-[200px]"
              },
              {
                title: "Aspiring Coaches",
                illustration: <CoachesIllustration />,
                desc: "Looking to acquire an internationally accredited framework to start a high-impact relationship coaching practice.",
                gradientClass: "from-[#4F7786]/12 via-[#FAF9F6]/95 to-[#E2ECE6]/30",
                borderClass: "border-[#4F7786]/35 hover:border-[#4F7786]/75",
                textClass: "text-[#4F7786]",
                glowClass: "shadow-[0_8px_30px_rgba(79,119,134,0.04)] hover:shadow-[0_20px_50px_rgba(79,119,134,0.12)]",
                shapeClass: "rounded-[20px_140px_20px_140px]",
                posClass: "left-[4%] bottom-[4%] w-[38%] h-[200px]"
              },
              {
                title: "Existing Healers",
                illustration: <HealersIllustration />,
                desc: "Therapists, counselors, and Reiki energy practitioners wanting to integrate somatic-relational healing methods.",
                gradientClass: "from-gold/10 via-[#FAF9F6]/95 to-[#FAF5EB]/50",
                borderClass: "border-gold/30 hover:border-gold/75",
                textClass: "text-gold",
                glowClass: "shadow-[0_8px_30px_rgba(212,175,55,0.04)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)]",
                shapeClass: "rounded-[140px_20px_140px_20px]",
                posClass: "right-[4%] bottom-[4%] w-[38%] h-[200px]"
              }
            ].map((petal, idx) => (
              <div
                key={idx}
                className={`absolute ${petal.posClass} ${petal.shapeClass} bg-gradient-to-tr ${petal.gradientClass} border ${petal.borderClass} ${petal.glowClass} p-6 cursor-default flex flex-col justify-center overflow-hidden`}
              >
                {/* Custom internal delicate frame lines matching shape */}
                <div className={`absolute inset-3 border border-gold/5 ${petal.shapeClass} pointer-events-none opacity-40`} />

                <div className="flex gap-4 items-start relative z-10">
                  {/* Illustration Container */}
                  <div className="flex-shrink-0">
                    {petal.illustration}
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-base font-bold text-ocean-dark tracking-wide flex items-center gap-1.5">
                      {petal.title}
                    </h3>
                    <p className="text-[12px] text-ocean-dark/80 leading-relaxed font-normal max-w-[280px]">
                      {petal.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* B. Mobile/Tablet Layout: Staggered list with central lotus anchor */}
          <div className="lg:hidden flex flex-col items-center gap-8 py-4">
            
            {/* Mobile Central Anchor Card */}
            <div className="w-full max-w-sm p-6 bg-gradient-to-b from-[#FAF9F5] to-white border border-gold/30 rounded-[2rem] text-center shadow-lg flex flex-col items-center justify-center space-y-4">
              {/* Centered blooming lotus icon */}
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-[#2F6D73] animate-pulse">
                <path d="M 50,80 C 35,68 36,45 50,25 C 64,45 65,68 50,80 Z" fill="#E2ECE6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 50,80 C 42,65 44,48 50,32 C 56,48 58,65 50,80 Z" fill="currentColor" className="text-gold/80" />
              </svg>
              <h3 className="font-serif text-xl font-bold text-ocean-dark">
                Who Is This Program For?
              </h3>
              <p className="text-xs text-ocean-dark/70 font-light max-w-xs">
                Healing begins from a single, quiet center, blooming outward to transform all spheres of existence.
              </p>
            </div>

            {/* Mobile interactive petal list */}
            <div className="w-full max-w-md space-y-6">
              {[
                {
                  title: "Individuals",
                  illustration: <IndividualsIllustration />,
                  desc: "Looking to break patterns of toxic loop attachment, establish deep self-sovereignty, and prepare for secure love.",
                  gradientClass: "from-[#769466]/15 via-[#FAF9F6]/85 to-[#E2ECE6]/40",
                  borderClass: "border-[#769466]/30",
                  shapeClass: "rounded-[2rem_4rem_2rem_4rem]"
                },
                {
                  title: "Couples",
                  illustration: <CouplesIllustration />,
                  desc: "Who desire to dismantle chronic triggers, learn repair methodologies, and build lasting, sacred connection.",
                  gradientClass: "from-[#2F6D73]/12 via-[#FAF9F6]/85 to-[#FAF9F6]",
                  borderClass: "border-[#2F6D73]/30",
                  shapeClass: "rounded-[4rem_2rem_4rem_2rem]"
                },
                {
                  title: "Aspiring Coaches",
                  illustration: <CoachesIllustration />,
                  desc: "Looking to acquire an internationally accredited framework to start a high-impact relationship coaching practice.",
                  gradientClass: "from-[#4F7786]/12 via-[#FAF9F6]/85 to-[#FAF9F6]",
                  borderClass: "border-[#4F7786]/30",
                  shapeClass: "rounded-[4rem_2rem_4rem_2rem]"
                },
                {
                  title: "Existing Healers",
                  illustration: <HealersIllustration />,
                  desc: "Therapists, counselors, and Reiki energy practitioners wanting to integrate somatic-relational healing methods.",
                  gradientClass: "from-gold/10 via-[#FAF9F6]/90 to-[#FAF5EB]/50",
                  borderClass: "border-gold/30",
                  shapeClass: "rounded-[2rem_4rem_2rem_4rem]"
                }
              ].map((petal, idx) => (
                <div
                  key={idx}
                  className={`w-full bg-gradient-to-tr ${petal.gradientClass} border ${petal.borderClass} ${petal.shapeClass} p-6 shadow-md flex gap-4 items-start cursor-default`}
                >
                  <div className="flex-shrink-0">
                    {petal.illustration}
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-base font-bold text-ocean-dark flex items-center gap-1.5">
                      {petal.title}
                    </h4>
                    <p className="text-xs text-ocean-dark/80 leading-relaxed">
                      {petal.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 6. INVITATION SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#e1f0f2]/60 via-[#f4fafb] to-[#ffffff] text-ocean-dark relative overflow-hidden border-t border-[#dfdbc9]/30 z-10">
        {/* Ambient energy background */}
        <div className="absolute inset-0 opacity-[0.35] pointer-events-none select-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-100/40 blur-[120px] animate-pulse duration-4000" />
          <div className="absolute -bottom-20 left-10 w-96 h-96 rounded-full bg-teal-light/25 blur-[100px]" />
          <div className="absolute -top-20 right-10 w-96 h-96 rounded-full bg-amber-100/30 blur-[100px]" />
        </div>

        {/* Serene tree/sanctuary subtle image overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04] bg-cover bg-center mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: `url('${getSrc('relationship.cta_bg', 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1600')}')`
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
          <div className="space-y-8">
            {/* Headline with exact botanical font styling */}
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-ocean-dark tracking-tight leading-tight uppercase max-w-4xl mx-auto drop-shadow-sm">
              Are you ready to co-create sacred relationships?
            </h2>

            {/* Sub-text paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-[#0A252C] max-w-3xl mx-auto leading-relaxed font-light font-serif italic py-4">
              Master the art of concious relationships. Replace painful patterns with deeper trust, honest communication, emotional security and lasting love.
              Begin your journey of every lasting love today!
            </p>

            {/* Glowing booking button */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={() => onBook('Relationship Mastery Certification')}
                className="px-10 py-5 bg-gradient-to-r from-teal-soft via-teal-soft/90 to-teal-soft hover:from-teal-soft/90 hover:to-teal-soft text-white font-bold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-full shadow-[0_4px_20px_rgba(79,157,166,0.25)] hover:shadow-[0_8px_30px_rgba(79,157,166,0.45)] transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300 border border-teal-light/30 cursor-pointer"
                id="relationship-cta-enroll"
              >
                Enroll In Program
              </button>
              
              <button
                onClick={onBack}
                className="px-8 py-4 border border-ocean/15 hover:bg-ocean/5 text-ocean/70 hover:text-ocean rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
              >
                Back to Sanctuary
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

const RelationshipCircleWatercolorRing = ({ id, index }: { id: string; index: number }) => {
  const getWatercolorRingColors = () => {
    switch (id) {
      case 'attachment': return 'text-[#2F6D73]';
      case 'regulation': return 'text-[#5A8795]';
      case 'dialogue': return 'text-[#7F9C87]';
      case 'boundaries': return 'text-[#B29E7F]';
      case 'rebuilding': return 'text-[#5D85A6]';
      case 'connection': return 'text-[#2F6D73]';
      default: return 'text-sage';
    }
  };

  const strokeColorClass = getWatercolorRingColors();
  const rotationAngle = (index * 45) + 12;

  return (
    <svg viewBox="0 0 200 200" style={{ transform: `rotate(${rotationAngle}deg)` }} className="absolute inset-0 w-full h-full select-none pointer-events-none transition-transform duration-1000 group-hover:rotate-[360deg]">
      <g className={strokeColorClass}>
        {/* Layer 1: Very wide, highly diluted wash layer to give the true watercolor aura spread in a flower shape */}
        <path
          d="M 100,20 C 115,45 130,30 145,45 C 170,55 170,80 180,100 C 170,120 170,145 145,155 C 130,170 115,155 100,180 C 85,155 70,170 55,155 C 30,145 30,120 20,100 C 30,80 30,55 55,45 C 70,30 85,45 100,20 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="35"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-[0.12] blur-[6px]"
        />

        {/* Layer 2: Core organic paint brush stroke with uneven distribution and natural wet look in flower shape */}
        <path
          d="M 100,25 C 112,48 128,34 140,48 C 162,58 162,82 172,100 C 162,118 162,142 140,152 C 128,166 112,152 100,175 C 88,152 72,166 60,152 C 38,142 38,118 28,100 C 38,82 38,58 60,48 C 72,34 88,48 100,25 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-[0.3] blur-[2px]"
        />

        {/* Layer 3: Accent dry/wet hand paint stroke lines, running slightly off track to portray hand painted flower */}
        <path
          d="M 100,30 C 110,50 125,38 135,50 C 155,60 155,83 164,100 C 155,117 155,140 135,150 C 125,162 110,150 100,170 C 90,150 75,162 65,150 C 45,140 45,117 36,100 C 45,83 45,60 65,50 C 75,38 90,50 100,30"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-[0.45] stroke-[3]"
        />
      </g>
    </svg>
  );
};

interface RelationshipCirculatingPillarProps {
  key?: any;
  title: string;
  items: string[];
  icon: any;
  colorTheme: {
    primary: string;
    badgeBg: string;
    border: string;
    glow: string;
    text: string;
    gradient: string;
  };
  bgImage: string;
}

function RelationshipCirculatingPillar({ title, items, icon: PillarIcon, colorTheme, bgImage }: RelationshipCirculatingPillarProps) {
  const [orderedItems, setOrderedItems] = React.useState(items);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setOrderedItems(prev => {
        const next = [...prev];
        const first = next.shift();
        if (first !== undefined) {
          next.push(first);
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [items]);

  return (
    <div 
      className="bg-white/70 backdrop-blur-md border-2 border-[#2F6D73] rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(47,109,115,0.06)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden h-full min-h-[480px]"
    >
      {/* Background Flower Image with Soft Overlay Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src={bgImage} 
          alt="" 
          className="w-full h-full object-cover opacity-[0.11] mix-blend-multiply" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-[#FAFDFD]/90" />
      </div>

      <div className="space-y-6 relative z-10 w-full flex-grow flex flex-col justify-between">
        <div className="space-y-6">
          {/* Pillar Header */}
          <div className="flex items-center gap-4 border-b border-[#2F6D73]/20 pb-5">
            <div className={`w-12 h-12 rounded-full ${colorTheme.badgeBg} flex items-center justify-center ${colorTheme.text} flex-shrink-0 shadow-sm border border-[#2F6D73]/10`}>
              <PillarIcon className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div className="text-left space-y-1">
              <span 
                className="text-[11px] font-bold uppercase block tracking-widest text-[#0A252C]"
                style={{ letterSpacing: '4px' }}
              >
                {title}
              </span>
            </div>
          </div>

          {/* Pillar Items / Circular Motion Boxes */}
          <div className="flex flex-col gap-4 py-1">
            {orderedItems.map((item) => {
              const parts = item.split(':');
              const header = parts[0];
              const desc = parts.slice(1).join(':');
              return (
                <motion.div 
                  key={item}
                  layout
                  transition={{ 
                    type: "spring", 
                    stiffness: 45, 
                    damping: 18,
                    mass: 1.1
                  }}
                  className={`bg-gradient-to-b ${colorTheme.gradient} border border-[#2F6D73]/40 hover:border-[#2F6D73] shadow-sm rounded-2xl p-4.5 flex items-start gap-3.5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
                >
                  <div className={`mt-0.5 w-5 h-5 rounded-full ${colorTheme.badgeBg} flex items-center justify-center ${colorTheme.text} flex-shrink-0 border border-[#2F6D73]/10`}>
                    <CheckCircle className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div className="text-left leading-relaxed">
                    <p className="text-xs md:text-[13px] text-[#0A252C] font-bold uppercase tracking-wide">
                      {header}
                    </p>
                    <p className="text-xs text-black font-medium mt-0.5">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const IndividualsIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-16 h-16 text-[#769466] drop-shadow-[0_4px_10px_rgba(118,148,102,0.15)]">
    <defs>
      <linearGradient id="ind-grad-1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#769466" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#FAF5EB" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="ind-grad-fig" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#769466" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#2F6D73" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="ind-grad-leaf" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#E2ECE6" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#769466" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="48" fill="url(#ind-grad-1)" className="opacity-80" />
    <path d="M 25,85 C 20,60 35,35 60,30 C 45,45 40,65 25,85 Z" fill="url(#ind-grad-leaf)" stroke="#769466" strokeWidth="0.75" className="opacity-70" />
    <path d="M 95,85 C 100,60 85,35 60,30 C 75,45 80,65 95,85 Z" fill="url(#ind-grad-leaf)" stroke="#769466" strokeWidth="0.75" className="opacity-70" />
    <path d="M 40,82 C 40,70 48,62 60,62 C 72,62 80,70 80,82 C 80,85 75,85 60,85 C 45,85 40,85 40,82 Z" fill="url(#ind-grad-fig)" />
    <path d="M 48,72 C 50,68 55,67 60,67 C 65,67 70,68 72,72 C 70,78 50,78 48,72 Z" fill="#FAF5EB" stroke="#769466" strokeWidth="1" />
    <path d="M 54,69 L 66,69 L 64,76 L 56,76 Z" fill="#FAF9F6" stroke="gold" strokeWidth="0.75" />
    <line x1="60" y1="69" x2="60" y2="76" stroke="gold" strokeWidth="0.5" />
    <circle cx="60" cy="51" r="9" fill="#FAF5EB" stroke="#769466" strokeWidth="1" />
    <path d="M 52,51 C 52,43 68,43 68,51 C 68,53 66,56 60,56 C 54,56 52,53 52,51 Z" fill="#769466" className="opacity-90" />
    <circle cx="45" cy="40" r="1.5" fill="gold" className="animate-pulse" />
    <circle cx="75" cy="45" r="2" fill="gold" className="animate-pulse" />
    <circle cx="62" cy="35" r="1" fill="#769466" />
    <circle cx="35" cy="65" r="1.5" fill="#769466" />
  </svg>
);

const CouplesIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-16 h-16 text-[#2F6D73] drop-shadow-[0_4px_10px_rgba(47,109,115,0.15)]">
    <defs>
      <linearGradient id="cpl-grad-1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2F6D73" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#FAF5EB" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="cpl-grad-fig1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2F6D73" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#4F7786" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="cpl-grad-fig2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4F7786" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#769466" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="48" fill="url(#cpl-grad-1)" className="opacity-80" />
    <path d="M 20,95 Q 60,75 100,95" fill="none" stroke="#2F6D73" strokeWidth="1" strokeDasharray="3 3" />
    <path d="M 30,95 Q 60,82 90,95" fill="none" stroke="gold" strokeWidth="0.75" className="opacity-60" />
    <path d="M 15,90 C 10,75 22,55 30,50 C 25,65 25,80 15,90 Z" fill="#EAF3F1" stroke="#2F6D73" strokeWidth="0.5" />
    <path d="M 105,90 C 110,75 98,55 90,50 C 95,65 95,80 105,90 Z" fill="#EAF3F1" stroke="#2F6D73" strokeWidth="0.5" />
    <path d="M 43,85 C 43,72 49,63 54,63 C 58,63 60,72 60,85 Z" fill="url(#cpl-grad-fig1)" />
    <circle cx="50" cy="54" r="6" fill="#FAF5EB" stroke="#2F6D73" strokeWidth="0.75" />
    <path d="M 60,85 C 60,72 62,63 67,63 C 71,63 77,72 77,85 Z" fill="url(#cpl-grad-fig2)" />
    <circle cx="70" cy="54" r="6" fill="#FAF5EB" stroke="#2F6D73" strokeWidth="0.75" />
    <path d="M 53,68 Q 60,73 67,68" fill="none" stroke="gold" strokeWidth="1.25" className="animate-pulse" />
    <path d="M 60,42 C 58,39 55,40 55,44 C 55,48 60,52 60,52 C 60,52 65,48 65,44 C 65,40 62,39 60,42 Z" fill="gold" className="opacity-90 animate-pulse" />
  </svg>
);

const CoachesIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-16 h-16 text-[#4F7786] drop-shadow-[0_4px_10px_rgba(79,119,134,0.15)]">
    <defs>
      <linearGradient id="cch-grad-1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4F7786" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#FAF5EB" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="cch-grad-mentor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4F7786" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#2F6D73" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="cch-grad-aura" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="gold" stopOpacity="0.4" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="48" fill="url(#cch-grad-1)" className="opacity-80" />
    <circle cx="60" cy="50" r="28" fill="url(#cch-grad-aura)" className="mix-blend-multiply" />
    <circle cx="60" cy="50" r="38" fill="none" stroke="#4F7786" strokeWidth="0.5" strokeDasharray="2 4" className="opacity-40" />
    <circle cx="60" cy="50" r="22" fill="none" stroke="gold" strokeWidth="0.75" className="opacity-60 animate-pulse" />
    <path d="M 45,82 C 45,68 50,58 60,58 C 70,58 75,68 75,82 C 75,84 70,84 60,84 C 50,84 45,84 45,82 Z" fill="url(#cch-grad-mentor)" />
    <circle cx="60" cy="46" r="8" fill="#FAF5EB" stroke="#4F7786" strokeWidth="1" />
    <path d="M 57,35 L 60,31 L 63,35 L 60,37 Z" fill="gold" />
    <path d="M 24,84 C 24,76 28,71 34,71 C 40,71 41,76 41,84 Z" fill="#769466" className="opacity-60" />
    <circle cx="34" cy="63" r="4" fill="#FAF5EB" stroke="#769466" strokeWidth="0.5" className="opacity-80" />
    <path d="M 79,84 C 79,76 80,71 86,71 C 92,71 96,76 96,84 Z" fill="#769466" className="opacity-60" />
    <circle cx="86" cy="63" r="4" fill="#FAF5EB" stroke="#769466" strokeWidth="0.5" className="opacity-80" />
  </svg>
);

const HealersIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-16 h-16 text-gold drop-shadow-[0_4px_10px_rgba(212,175,55,0.25)]">
    <defs>
      <linearGradient id="hlr-grad-1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="gold" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#FAF5EB" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="hlr-grad-hand" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#769466" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#2F6D73" stopOpacity="0.7" />
      </linearGradient>
      <radialGradient id="hlr-energy" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="gold" stopOpacity="0.9" />
        <stop offset="40%" stopColor="gold" stopOpacity="0.4" />
        <stop offset="100%" stopColor="gold" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="48" fill="url(#hlr-grad-1)" className="opacity-80" />
    <path d="M 30,68 C 30,55 35,48 45,45 C 47,48 45,55 38,65 L 35,78 Z" fill="url(#hlr-grad-hand)" stroke="gold" strokeWidth="0.75" />
    <path d="M 90,68 C 90,55 85,48 75,45 C 73,48 75,55 82,65 L 85,78 Z" fill="url(#hlr-grad-hand)" stroke="gold" strokeWidth="0.75" />
    <circle cx="60" cy="50" r="15" fill="url(#hlr-energy)" className="animate-ping" style={{ animationDuration: '3s' }} />
    <circle cx="60" cy="50" r="10" fill="url(#hlr-energy)" className="animate-pulse" />
    <g className="opacity-70 animate-pulse">
      <path d="M 60,25 L 60,75 M 35,50 L 85,50" stroke="gold" strokeWidth="0.75" strokeDasharray="2 2" />
      <path d="M 42,32 L 78,68 M 42,68 L 78,32" stroke="gold" strokeWidth="0.5" strokeDasharray="1 3" />
    </g>
    <path d="M 60,60 C 54,54 55,42 60,35 C 65,42 66,54 60,60 Z" fill="#FAF5EB" stroke="gold" strokeWidth="1" />
  </svg>
);

