import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Award, ShieldCheck, Heart, Sparkles, Compass, 
  Zap, Sun, Check, BookOpen, Layers, MessageSquare, ChevronDown, 
  ChevronUp, CheckCircle, ShieldAlert, Download, Brain, Star, Globe, Users, Smile
} from 'lucide-react';
import { generatePDF } from '../../lib/pdfHelper';
import { EnergeticSignatureSection } from './EnergeticSignatureSection';
import { SmartImage } from '../SmartImage';
import { useImageRegistry } from '../../context/ImageContext';

interface ReikiChakraPageProps {
  onBack: () => void;
  onBook: (modalityName: string) => void;
}

const CHAKRAS_DATA = [
  {
    id: "crown",
    name: "Crown Chakra",
    sanskrit: "Sahasrara",
    translation: "Thousand-fold Splendor",
    color: "#D8B4FE", // Violet/Light Purple
    glowColor: "rgba(216, 180, 254, 0.4)",
    activeGlow: "shadow-[0_0_50px_rgba(216,180,254,0.6)]",
    icon: Sparkles,
    element: "Cosmic Energy",
    location: "Top of the Head",
    blockedState: "Exhaustion, spiritual cynicism, mental fog, or separation anxiety.",
    alignedState: "Divine connection, pristine mental clarity, peace, and deep universal trust.",
    affirmation: "I am connected to the infinite source of light, love, and wisdom.",
    flower: "Violet Lotus",
    flowerEmoji: "🪷",
    audioTone: "963 Hz (Cosmic)",
    somaticPractice: "Direct your focus 2 inches above your head. Visualize warm violet light cascading downwards, cleansing your mind like crystalline rain.",
  },
  {
    id: "thirdeye",
    name: "Third Eye Chakra",
    sanskrit: "Ajna",
    translation: "Beyond Wisdom & Command",
    color: "#818CF8", // Indigo
    glowColor: "rgba(129, 140, 248, 0.4)",
    activeGlow: "shadow-[0_0_50px_rgba(129,140,248,0.6)]",
    icon: Brain,
    element: "Light & Intuition",
    location: "Between the Eyebrows",
    blockedState: "Overthinking, trust issues, lack of vision, or intuitive disconnect.",
    alignedState: "Sovereign intuition, crystal clarity, visionary outlook, and deep inner knowing.",
    affirmation: "I trust my intuition and follow the guidance of my inner wisdom.",
    flower: "Cosmic Orchid",
    flowerEmoji: "🌸",
    audioTone: "852 Hz (Intuition)",
    somaticPractice: "Gently soften your gaze. Breathe in through your forehead center, feeling a cool indigo breeze expand behind your eyes on the inhale.",
  },
  {
    id: "throat",
    name: "Throat Chakra",
    sanskrit: "Vishuddha",
    translation: "Purest Truth",
    color: "#38BDF8", // Blue
    glowColor: "rgba(56, 189, 248, 0.4)",
    activeGlow: "shadow-[0_0_50px_rgba(56,189,248,0.6)]",
    icon: MessageSquare,
    element: "Ether & Sound",
    location: "Throat Center",
    blockedState: "Fear of speaking up, swallowing feelings, throat fatigue, or feeling unheard.",
    alignedState: "Sovereign authentic voice, clear creative expression, and graceful listening.",
    affirmation: "I speak my truth with grace, clarity, and absolute integrity.",
    flower: "Blue Iris",
    flowerEmoji: "✨",
    audioTone: "741 Hz (Truth)",
    somaticPractice: "Part your lips slightly. Breathe in, and on the exhale, hum a soft, warm sigh, feeling your neck and jaw completely dissolve all holding.",
  },
  {
    id: "heart",
    name: "Heart Chakra",
    sanskrit: "Anahata",
    translation: "Unstruck Sound",
    color: "#34D399", // Emerald Green
    glowColor: "rgba(52, 211, 153, 0.4)",
    activeGlow: "shadow-[0_0_50px_rgba(52,211,153,0.6)]",
    icon: Heart,
    element: "Air & Love",
    location: "Chest Center",
    blockedState: "Heavy grief, emotional defensiveness, coldness, or codependency.",
    alignedState: "Unconditional compassion, heart-centered resilience, boundaries, and love.",
    affirmation: "I am open to receiving and giving love, compassion, and gentle forgiveness.",
    flower: "Emerald Rose",
    flowerEmoji: "🌹",
    audioTone: "639 Hz (Harmonious)",
    somaticPractice: "Place your hands over your heart. Breathe warm air directly under your palms, letting your ribs expand in all directions like a blooming rose.",
  },
  {
    id: "solarplexus",
    name: "Solar Plexus Chakra",
    sanskrit: "Manipura",
    translation: "City of Jewels",
    color: "#FBBF24", // Yellow/Gold
    glowColor: "rgba(251, 191, 36, 0.4)",
    activeGlow: "shadow-[0_0_50px_rgba(251,191,36,0.6)]",
    icon: Zap,
    element: "Fire & Will",
    location: "Upper Abdomen",
    blockedState: "Low self-worth, anxiety, constant power struggles, or chronic exhaustion.",
    alignedState: "Radiant confidence, sovereign willpower, inner warmth, and active motivation.",
    affirmation: "I stand firmly in my personal power and trust my unique path.",
    flower: "Golden Sunflower",
    flowerEmoji: "🌻",
    audioTone: "528 Hz (Willpower)",
    somaticPractice: "Soften your stomach muscles completely. Breathe deeply into your solar plexus, fueling an inner golden flame with each inhalation.",
  },
  {
    id: "sacral",
    name: "Sacral Chakra",
    sanskrit: "Svadhisthana",
    translation: "One's Own Dwelling Place",
    color: "#FB923C", // Orange
    glowColor: "rgba(251, 146, 60, 0.4)",
    activeGlow: "shadow-[0_0_50px_rgba(251,146,60,0.6)]",
    icon: Compass,
    element: "Water & Flow",
    location: "Lower Abdomen",
    blockedState: "Creative dry spells, fear of intimacy, severe emotional instability, or stiffness.",
    alignedState: "Boundless creative flow, sensual vitality, emotional intelligence, and playful ease.",
    affirmation: "I embrace my creativity, feelings, and the natural flow of my life.",
    flower: "Tiger Lily",
    flowerEmoji: "🧡",
    audioTone: "417 Hz (Renewal)",
    somaticPractice: "Direct your breath deep into your pelvis. Imagine gentle orange water currents sweeping away any stagnation and bringing supple ease.",
  },
  {
    id: "root",
    name: "Root Chakra",
    sanskrit: "Muladhara",
    translation: "Root Support",
    color: "#F87171", // Red
    glowColor: "rgba(248, 113, 113, 0.4)",
    activeGlow: "shadow-[0_0_50px_rgba(248,113,113,0.6)]",
    icon: ShieldCheck,
    element: "Earth & Safety",
    location: "Base of Spine",
    blockedState: "Anxiety, survival panic, constant instability, or physical isolation.",
    alignedState: "Rooted safety, unshakable grounding, physical vital energy, and belonging.",
    affirmation: "I am safe, grounded, supported by the Earth, and exactly where I belong.",
    flower: "Crimson Poppy",
    flowerEmoji: "🌺",
    audioTone: "396 Hz (Liberation)",
    somaticPractice: "Feel the weight of your sit-bones. Breathe down through your spine, growing strong energetic roots deep into the warm center of the Earth.",
  }
];

export default function ReikiChakraPage({ onBack, onBook }: ReikiChakraPageProps) {
  const { getSrc } = useImageRegistry();
  const [downloading, setDownloading] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activePetal, setActivePetal] = useState<number | null>(null);
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  const [selectedChakraId, setSelectedChakraId] = useState<string>("heart");
  const [channelingChakraId, setChannelingChakraId] = useState<string | null>(null);
  const [channelProgress, setChannelProgress] = useState<number>(0);
  const [alignedChakras, setAlignedChakras] = useState<Record<string, boolean>>({
    heart: true, // initial beautiful alignment
  });
  const [breathPhase, setBreathPhase] = useState<"inhale" | "hold" | "exhale" | "hold_out">("inhale");
  const [breathScale, setBreathScale] = useState<number>(1.0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    let breathTimer: NodeJS.Timeout;
    const runBreathingLoop = () => {
      setBreathPhase("inhale");
      setBreathScale(1.4);
      
      breathTimer = setTimeout(() => {
        setBreathPhase("hold");
        setBreathScale(1.4);
        
        breathTimer = setTimeout(() => {
          setBreathPhase("exhale");
          setBreathScale(1.0);
          
          breathTimer = setTimeout(() => {
            setBreathPhase("hold_out");
            setBreathScale(1.0);
            
            breathTimer = setTimeout(runBreathingLoop, 2000);
          }, 4000);
        }, 2000);
      }, 4000);
    };

    runBreathingLoop();
    return () => clearTimeout(breathTimer);
  }, []);

  const handleChannelReiki = (id: string) => {
    if (channelingChakraId) return;
    setChannelingChakraId(id);
    setChannelProgress(0);
    
    const duration = 3000; // 3 seconds
    const intervalTime = 50;
    const steps = duration / intervalTime;
    const increment = 100 / steps;
    
    const interval = setInterval(() => {
      setChannelProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setChannelingChakraId(null);
          setAlignedChakras(all => ({ ...all, [id]: true }));
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      generatePDF(
        "Reiki_Level_1_Certification_Brochure.pdf",
        "REIKI LEVEL 1 CERTIFICATION",
        "Awaken the Healer Within",
        "Connect with Universal Life Force Energy. Heal Yourself. Support Others. Transform Lives.\n\nReiki is more than an energy healing technique—it is a gentle yet powerful practice that promotes physical, emotional, mental, and spiritual wellbeing. By learning to channel Universal Life Force Energy, you can reduce stress, restore balance, encourage relaxation, and support the body's natural healing process.\n\nThe Reiki Level 1 Certification Program is a comprehensive, internationally designed training that introduces you to the foundations of Reiki, helping you understand energy, strengthen your intuitive awareness, practice self-healing, and confidently share Reiki with others.\n\nNo prior healing experience is required.",
        [
          {
            title: "MODULE 1: Your Reiki Journey Begins",
            text: "Awaken the Healer Within\n\nWHAT YOU'LL LEARN:",
            items: [
              "Discover the true essence and philosophy of Reiki beyond energy healing.",
              "Explore the fascinating history and evolution of Reiki.",
              "Understand how Universal Life Force Energy supports holistic wellbeing.",
              "Learn the Five Reiki Principles and how they transform everyday living.",
              "Prepare your mind, body, and spirit to receive Reiki energy.",
              "YOUR TRANSFORMATION:",
              "Open yourself to a completely new way of experiencing healing.",
              "Build a strong foundation for your Reiki journey.",
              "Develop a deeper connection with yourself and your energy.",
              "Begin seeing healing as a lifelong practice, not a one-time experience.",
              "Step into your journey with curiosity, confidence, and purpose."
            ]
          },
          {
            title: "MODULE 2: Discover the Invisible Energy Around You",
            text: "Understanding Chakras, Aura & Energy Flow\n\nWHAT YOU'LL LEARN:",
            items: [
              "Explore the body's energy system and how Reiki flows through it.",
              "Understand the seven chakras and their influence on your wellbeing.",
              "Learn how your aura reflects your emotional and energetic health.",
              "Recognize the signs of blocked, depleted, and balanced energy.",
              "Discover simple practices to restore energetic harmony.",
              "YOUR TRANSFORMATION:",
              "Start noticing energy in yourself and the world around you.",
              "Understand what your body and emotions are trying to communicate.",
              "Feel more balanced, grounded, and energetically aware.",
              "Identify energy drains before they affect your wellbeing.",
              "Experience life with greater awareness and presence."
            ]
          },
          {
            title: "MODULE 3: Becoming a Reiki Channel",
            text: "Opening Yourself to Universal Healing Energy\n\nWHAT YOU'LL LEARN:",
            items: [
              "Understand the Reiki attunement process and its significance.",
              "Learn how to channel Reiki with openness and intention.",
              "Experience energy through guided practical exercises.",
              "Strengthen your intuition and energetic sensitivity.",
              "Build trust in your natural ability to facilitate healing.",
              "YOUR TRANSFORMATION:",
              "Feel deeply connected to Universal Life Force Energy.",
              "Trust your intuition with greater confidence.",
              "Experience energy in a more meaningful and personal way.",
              "Release fear and self-doubt around healing.",
              "Step into your role as a Reiki channel with confidence."
            ]
          },
          {
            title: "MODULE 4: Healing Begins With You",
            text: "The Power of Self-Reiki\n\nWHAT YOU'LL LEARN:",
            items: [
              "Learn complete self-Reiki healing techniques.",
              "Practice Reiki for stress, emotional wellbeing, and relaxation.",
              "Discover hand positions that support physical healing.",
              "Build a nourishing daily Reiki routine.",
              "Experience healing as a daily act of self-love.",
              "YOUR TRANSFORMATION:",
              "Become your own source of healing and comfort.",
              "Feel calmer, lighter, and emotionally stronger.",
              "Reduce stress through simple daily practices.",
              "Create a deeper relationship with yourself.",
              "Build habits that support lifelong wellbeing."
            ]
          },
          {
            title: "MODULE 5: The Art of Healing Others",
            text: "Sharing Reiki with Confidence & Compassion\n\nWHAT YOU'LL LEARN:",
            items: [
              "Learn how to perform a complete Reiki healing session.",
              "Master hand positions and energy flow techniques.",
              "Create a safe, peaceful, and healing environment.",
              "Build meaningful connections through compassionate care.",
              "Understand professional ethics and practitioner responsibilities.",
              "YOUR TRANSFORMATION:",
              "Feel confident sharing Reiki with others.",
              "Create safe and meaningful healing experiences.",
              "Build trust through empathy and compassion.",
              "Support others with confidence and care.",
              "Begin your journey as a Reiki practitioner."
            ]
          },
          {
            title: "MODULE 6: Healing Beyond the Physical",
            text: "Restoring Balance to Mind, Body & Spirit\n\nWHAT YOU'LL LEARN:",
            items: [
              "Discover Reiki's role in emotional and mental wellbeing.",
              "Learn techniques to release emotional heaviness.",
              "Explore Reiki as a tool for spiritual growth.",
              "Support inner peace through mindful healing.",
              "Restore harmony across every aspect of your wellbeing.",
              "YOUR TRANSFORMATION:",
              "Let go of emotional heaviness with greater ease.",
              "Feel emotionally lighter and mentally clearer.",
              "Strengthen your inner resilience.",
              "Deepen your connection with your authentic self.",
              "Experience greater harmony in everyday life."
            ]
          },
          {
            title: "MODULE 7: Living the Reiki Way",
            text: "Bringing Healing Into Every Moment\n\nWHAT YOU'LL LEARN:",
            items: [
              "Integrate Reiki into your daily routines.",
              "Use Reiki to nurture relationships and family.",
              "Share healing with children, animals, plants, and spaces.",
              "Create a positive and balanced home environment.",
              "Live according to the Reiki principles every day.",
              "YOUR TRANSFORMATION:",
              "Make healing a natural part of your lifestyle.",
              "Bring more peace into your relationships and surroundings.",
              "Create environments filled with positive energy.",
              "Develop habits that nourish long-term wellbeing.",
              "Live each day with greater gratitude, mindfulness, and purpose."
            ]
          },
          {
            title: "MODULE 8: Your Journey Continues",
            text: "Embrace a Lifetime of Healing & Growth\n\nWHAT YOU'LL LEARN:",
            items: [
              "Strengthen your confidence through continued Reiki practice.",
              "Deepen your intuition with every healing experience.",
              "Discover ways to continue learning and growing.",
              "Explore opportunities to share Reiki professionally.",
              "Create your personal vision for a lifelong Reiki journey.",
              "YOUR TRANSFORMATION:",
              "Trust yourself as a confident Reiki practitioner.",
              "Continue growing with purpose and passion.",
              "Inspire healing in yourself and those around you.",
              "Embrace Reiki as a lifelong path of learning.",
              "Leave this certification feeling empowered, connected, and ready to make a meaningful difference."
            ]
          },
          {
            title: "FINAL PROGRAM TRANSFORMATION",
            text: "By the end of this certification, you will be able to:",
            items: [
              "Heal emotional wounds and energetic burdens you've been carrying for years.",
              "Release stress, emotional heaviness, and stagnant energy with greater ease.",
              "Reconnect with your body, mind, and inner self through the power of Reiki.",
              "Restore balance where you once felt exhausted, overwhelmed, or disconnected.",
              "Let go of what no longer serves your highest wellbeing.",
              "Create space for peace, clarity, healing, and emotional renewal.",
              "Strengthen your intuition and trust the wisdom within you.",
              "Support yourself and others through compassionate, heart-centred healing.",
              "Build a lifelong self-healing practice that nurtures your overall wellbeing.",
              "Step into a life of greater balance, purpose, and inner harmony."
            ]
          }
        ]
      );
    }, 1500);
  };

  const testimonials = [
    {
      stars: 5,
      text: "Heer is a beautiful teacher. Her way of teaching Reiki is simple, deep, and full of grace. Learning Level 1 was a sacred container that helped me heal emotional exhaustion and build an active daily self-Reiki practice.",
      author: "Neha S.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300"
    },
    {
      stars: 5,
      text: "This certification changed my perspective on energy entirely. I can feel the flow of life force so clearly now! The self-healing routine has completely calmed my everyday stress and overthinking.",
      author: "Riya M.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
    },
    {
      stars: 5,
      text: "Grateful for Heer's compassionate guidance. The program is incredibly well-structured, combining traditional principles with beautiful, modern techniques. I feel fully confident sharing this beautiful energy with my family.",
      author: "Aarti P.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300"
    }
  ];

  const reikiModules = [
    {
      num: "01",
      title: "Module 1",
      subtitle: "Your Reiki Journey Begins",
      desc: "Discover the healing energy within you. Begin your Reiki journey by understanding the origins, philosophy, principles, and healing potential of Reiki while building the foundation for lifelong learning.",
      icon: Sparkles,
      bgGradient: "from-white to-[#FAF5EB]/45",
      whatYouLearn: [
        "Discover the true essence and philosophy of Reiki beyond simple energy healing.",
        "Explore the fascinating history and evolution of Usui Shiki Ryoho Reiki.",
        "Understand how Universal Life Force Energy (Ki) supports holistic wellbeing.",
        "Learn the Five Reiki Principles and how they transform everyday living.",
        "Prepare your mind, body, and spirit to receive Reiki energy."
      ],
      yourTransformation: [
        "Open yourself to a completely new way of experiencing healing.",
        "Build a strong foundation for your Reiki journey.",
        "Develop a deeper connection with yourself and your energy.",
        "Begin seeing healing as a lifelong practice, not a one-time experience.",
        "Step into your journey with curiosity, confidence, and purpose."
      ]
    },
    {
      num: "02",
      title: "Module 2",
      subtitle: "The Energy Within You",
      desc: "Understanding your subtle energy body. Discover how chakras, the aura, and the body's energy system work together to influence your physical, emotional, mental, and spiritual wellbeing.",
      icon: Brain,
      bgGradient: "from-white to-[#FAF5EB]/45",
      whatYouLearn: [
        "Explore the body's energy system and how Reiki flows through subtle channels.",
        "Understand the seven primary chakras and their direct influence on your wellbeing.",
        "Learn how your aura reflects your emotional, mental, and energetic health.",
        "Recognize the symptoms of blocked, depleted, and hyperactive energy centers.",
        "Discover simple, actionable practices to restore energetic harmony daily."
      ],
      yourTransformation: [
        "Start noticing energy in yourself and the world around you.",
        "Understand what your body and emotions are trying to communicate.",
        "Feel more balanced, grounded, and energetically aware.",
        "Identify energy drains and blockages before they affect your wellbeing.",
        "Experience life with greater awareness, presence, and vitality."
      ]
    },
    {
      num: "03",
      title: "Module 3",
      subtitle: "Becoming a Reiki Channel",
      desc: "Connecting with Universal Life Force Energy. Experience the Reiki attunement process, strengthen your energetic awareness, and learn how to channel healing energy with confidence.",
      icon: Zap,
      bgGradient: "from-white to-[#FAF5EB]/45",
      whatYouLearn: [
        "Understand the sacred Reiki attunement process and its spiritual significance.",
        "Learn how to channel Reiki with openness, focus, and clear intention.",
        "Experience energy sensations through guided practical exercises.",
        "Strengthen your natural intuition and energetic sensitivity.",
        "Build deep trust in your inherent ability to facilitate healing."
      ],
      yourTransformation: [
        "Feel deeply connected to Universal Life Force Energy as a clear conduit.",
        "Trust your intuition and inner guidance with greater confidence.",
        "Experience energy flow in a deeply meaningful and personal way.",
        "Release fear, imposter syndrome, and self-doubt around healing.",
        "Step into your role as a certified Reiki channel with confidence."
      ]
    },
    {
      num: "04",
      title: "Module 4",
      subtitle: "Healing Starts With You",
      desc: "Self-Reiki for daily wellbeing. Practice self-Reiki techniques that help reduce stress, restore balance, encourage relaxation, and support your overall wellbeing.",
      icon: Heart,
      bgGradient: "from-white to-[#FAF5EB]/45",
      whatYouLearn: [
        "Learn complete, traditional self-Reiki healing hand positions.",
        "Practice targeted Reiki techniques for stress relief, emotional balance, and deep relaxation.",
        "Discover specific hand layouts that support physical pain relief and organic healing.",
        "Build a nourishing, personalized daily self-Reiki routine.",
        "Experience self-healing as a sacred, non-negotiable daily act of self-love."
      ],
      yourTransformation: [
        "Become your own source of healing, comfort, and inner peace.",
        "Feel calmer, lighter, and emotionally stronger from day to day.",
        "Reduce systemic stress and nervous system tension through simple daily practices.",
        "Create a deeper, more loving relationship with yourself.",
        "Build daily, life-enhancing habits that support long-term wellbeing."
      ]
    },
    {
      num: "05",
      title: "Module 5",
      subtitle: "The Art of Healing Others",
      desc: "Sharing Reiki with confidence & compassion. Learn how to perform Reiki sessions for others while creating a safe, ethical, and compassionate healing experience.",
      icon: Users,
      bgGradient: "from-white to-[#FAF5EB]/45",
      whatYouLearn: [
        "Learn how to perform a complete, professional Reiki healing session.",
        "Master hand positions, body scanning, and smooth energy flow techniques.",
        "Create a safe, peaceful, and energetically clean healing environment.",
        "Build meaningful connections with clients through compassionate, heart-centered care.",
        "Understand professional ethics, safe boundaries, and practitioner responsibilities."
      ],
      yourTransformation: [
        "Feel fully confident sharing the gift of Reiki with friends, family, and clients.",
        "Create safe, deeply soothing, and meaningful healing experiences for others.",
        "Build profound trust through deep empathy and professional boundaries.",
        "Support others dynamically with heart-centered confidence and care.",
        "Confidently begin your journey as an active Reiki practitioner."
      ]
    },
    {
      num: "06",
      title: "Module 6",
      subtitle: "Healing Beyond the Body",
      desc: "Emotional, mental, and spiritual wellbeing. Discover how Reiki supports emotional healing, mental clarity, spiritual growth, and deeper inner balance.",
      icon: Compass,
      bgGradient: "from-white to-[#FAF5EB]/45",
      whatYouLearn: [
        "Discover Reiki's role in dissolving emotional heaviness and mental clutter.",
        "Learn specific techniques to release stored emotional blockages and trauma.",
        "Explore Reiki as a meditative tool for spiritual growth and higher consciousness.",
        "Support inner peace and quiet the mind through mindful, energy-focused healing.",
        "Restore harmony across every aspect of your multidimensional wellbeing."
      ],
      yourTransformation: [
        "Gently let go of emotional heaviness and ancient burdens with greater ease.",
        "Feel emotionally lighter, mentally clearer, and spiritually aligned.",
        "Strengthen your inner resilience in the face of life's challenges.",
        "Deepen your connection with your authentic, high-vibe self.",
        "Experience greater spiritual harmony and presence in everyday life."
      ]
    },
    {
      num: "07",
      title: "Module 7",
      subtitle: "Living the Reiki Way",
      desc: "Bringing healing into everyday life. Learn practical ways to integrate Reiki into daily routines, relationships, home environments, and personal wellbeing.",
      icon: Sun,
      bgGradient: "from-white to-[#FAF5EB]/45",
      whatYouLearn: [
        "Integrate Reiki principles and energy into your standard daily routines.",
        "Use Reiki to nurture relationships, cultivate compassion, and heal family discord.",
        "Share healing energy safely with children, animals/pets, plants, and spaces.",
        "Create an energetically positive, calm, and balanced home environment.",
        "Live consciously according to the Five Reiki Principles every day."
      ],
      yourTransformation: [
        "Make holistic healing and energetic hygiene a natural part of your lifestyle.",
        "Bring greater peace, warmth, and balance into your relationships and surroundings.",
        "Create environments filled with peaceful, positive, and inviting energy.",
        "Develop strong habits that nourish long-term health and relationships.",
        "Live each day with profound gratitude, mindfulness, and sacred purpose."
      ]
    },
    {
      num: "08",
      title: "Module 8",
      subtitle: "Your Journey Continues",
      desc: "Confidence, practice, and lifelong growth. Build the confidence to continue your Reiki practice, strengthen your intuition, and embrace Reiki as a lifelong path of healing.",
      icon: Award,
      bgGradient: "from-white to-[#FAF5EB]/45",
      whatYouLearn: [
        "Strengthen your confidence through continued, self-paced Reiki practice.",
        "Deepen your intuitive insights with every healing experience.",
        "Discover practical ways to continue learning, growing, and expanding your wisdom.",
        "Explore professional opportunities to share Reiki in clinical or wellness settings.",
        "Create a personal vision map for your lifelong, independent Reiki journey."
      ],
      yourTransformation: [
        "Trust yourself entirely as a competent, certified Reiki practitioner.",
        "Continue growing and expanding your healing gifts with purpose and passion.",
        "Inspire gentle healing and mindfulness in yourself and those around you.",
        "Embrace Reiki as a lifelong, sacred path of learning and transformation.",
        "Leave this program feeling empowered, connected, and fully ready to heal."
      ]
    }
  ];

  return (
    <div className="bg-white text-ocean font-sans min-h-screen selection:bg-[#c0942c]/10 selection:text-ocean">
      
      {/* 1. NAVIGATION & BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-6 pt-6 relative z-10 flex flex-wrap justify-between items-center gap-4 border-b border-slate-200 pb-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-semibold text-black hover:text-ocean transition-colors uppercase tracking-widest cursor-pointer group"
          id="reiki-back-btn"
        >
          <ArrowLeft className="w-4 h-4 text-[#c0942c] transition-transform group-hover:-translate-x-1" />
          Back to Sanctuary
        </button>
        <div className="flex items-center gap-2 text-[11px] text-ocean/70 uppercase tracking-wider font-semibold">
          <span className="hover:text-ocean cursor-pointer" onClick={onBack}>Home</span>
          <span className="text-[#c0942c]/40">&gt;</span>
          <span className="hover:text-ocean cursor-pointer" onClick={onBack}>Healing Modalities</span>
          <span className="text-[#c0942c]/40">&gt;</span>
          <span className="text-[#c0942c] font-bold">Reiki Level 1 Certification</span>
        </div>
      </div>

      {/* 2. UNIFIED HERO BANNER */}
      <section className="relative pt-12 pb-24 px-6 overflow-hidden bg-ivory text-ocean">
        <div className="absolute inset-0 watercolor-bg opacity-75 z-0 pointer-events-none" />

        {/* Main Hero Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Column: Title & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-sm font-mono font-bold uppercase tracking-[0.25em] text-[#c0942c] block">
                Usui Shiki Ryoho Lineage
              </span>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-ocean">
                Reiki Healing <br />
                <span className="text-[#c0942c] italic font-normal font-serif text-2xl md:text-3xl lg:text-4xl block mt-2">
                  Level 1 • Level 2 • Level 3 • Level 4 • Master Reiki Certification
                </span>
              </h1>
            </div>

            {/* Hand-drawn look subtitle */}
            <div className="flex items-center gap-4">
              <p className="font-serif italic text-xl md:text-2xl text-[#c0942c] tracking-wide font-medium">
                "Awaken the Healer Within"
              </p>
              <div className="relative w-6 h-6 flex items-center justify-center text-[#c0942c]">
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-[1.5]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>

            <p className="text-base md:text-lg text-black leading-relaxed max-w-xl font-light italic">
              "Awaken the healer within and allow the Universe to channel divine cosmic energy through you, bringing harmony to your soul, restoring vibrant vitality to your body, and activating your absolute highest soul purpose."
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-5 py-4 border-t border-b border-[#dfdbc9]/30">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FAF5EB] border border-[#c0942c]/30 flex items-center justify-center text-[#c0942c] shadow-sm">
                  <Globe className="w-4 h-4 stroke-[1.5]" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-ocean font-bold">International Curriculum</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FAF5EB] border border-[#c0942c]/30 flex items-center justify-center text-[#c0942c] shadow-sm">
                  <Award className="w-4 h-4 stroke-[1.5]" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-ocean font-bold">International Certification</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FAF5EB] border border-[#c0942c]/30 flex items-center justify-center text-[#c0942c] shadow-sm">
                  <Layers className="w-4 h-4 stroke-[1.5]" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-ocean font-bold">All Reiki Levels</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onBook('Reiki Level 1 Certification Course')}
                className="px-8 py-4 bg-[#c0942c] hover:bg-[#d5a83a] text-white text-sm font-bold tracking-widest uppercase rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.01] cursor-pointer"
              >
                Enroll Now
              </button>
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="px-8 py-4 border border-ocean/20 bg-white/45 hover:bg-ocean/5 text-ocean text-sm font-bold tracking-widest uppercase rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#c0942c]" />
                {downloading ? 'Preparing Brochure...' : 'Download Brochure'}
              </button>
            </div>
          </div>

          {/* Right Column: Key Accreditations */}
          <div className="lg:col-span-5 space-y-4 z-10 w-full max-w-md lg:ml-auto">
            {[
              { title: "Divine Energy", icon: Sparkles },
              { title: "Increased Intuition", icon: Brain },
              { title: "Cosmic Healing", icon: Sun },
              { title: "Universal Blessings", icon: Compass },
              { title: "Soul Purpose", icon: Award }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-4 bg-white/75 backdrop-blur-md border border-[#dfdbc9]/40 rounded-2xl p-4 hover:border-[#c0942c]/50 hover:bg-white transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full border border-[#c0942c] flex items-center justify-center text-[#c0942c] flex-shrink-0 bg-[#faf7f2] shadow-[0_0_12px_rgba(192,148,44,0.15)]">
                  <item.icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm md:text-base font-bold text-ocean tracking-wide uppercase">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Wave bottom separator */}
        <div className="absolute bottom-0 left-0 right-0 h-16 w-full overflow-hidden z-10 pointer-events-none">
          <svg className="absolute bottom-0 w-full h-16 text-white fill-current" viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z" />
          </svg>
        </div>
      </section>

      {/* 3. "WHAT IS REIKI?" SECTION & BENEFITS GRID */}
      <section className="py-16 md:py-20 bg-[#FAF9F6] relative z-10 overflow-hidden border-t border-[#dfdbc9]/30" id="what-is-reiki">
        
        {/* Soft Background Artistry: Watercolor Gradients, Light Rays, and Sacred Geometry */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          
          {/* Ambient sunlight glow & mist effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#dfc588]/8 via-transparent to-transparent blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#769466]/8 via-transparent to-transparent blur-[140px]" />
          
          {/* Golden ray streams overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(223,197,136,0.03)_0%,rgba(255,255,255,0)_50%,rgba(118,148,102,0.02)_100%)]" />
          
          {/* Subtle watermarked Seed of Life sacred geometry in the background of the section */}
          <svg viewBox="0 0 100 100" className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 text-[#c0942c]/5 opacity-40">
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.15" />
            <circle cx="50" cy="20" r="30" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <circle cx="50" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <circle cx="20" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <circle cx="80" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.1" />
          </svg>

          {/* Faint botanical leaf watermark in background corners */}
          <svg className="absolute bottom-12 right-12 w-64 h-64 text-[#769466]/8 transform rotate-45" viewBox="0 0 100 100" fill="currentColor">
            <path d="M0,100 C30,80 50,40 50,0 C20,10 0,50 0,100 Z" />
          </svg>

        </div>

        {/* Scoped CSS Styles for Immersive Animations */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes reiki-breath {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-2.5px) scale(1.02); }
          }
          .animate-reiki-breath {
            transform-origin: 150px 225px;
            animation: reiki-breath 5.5s ease-in-out infinite;
          }
          @keyframes reiki-glow-leaves {
            0%, 100% { filter: drop-shadow(0 0 2px rgba(223, 197, 136, 0.4)) opacity(0.8); }
            50% { filter: drop-shadow(0 0 10px rgba(223, 197, 136, 0.85)) opacity(1); }
          }
          .animate-reiki-glow-leaves {
            animation: reiki-glow-leaves 4.5s ease-in-out infinite;
          }
          @keyframes reiki-glow-crown {
            0%, 100% { opacity: 0.45; r: 12px; }
            50% { opacity: 0.95; r: 17px; }
          }
          .animate-reiki-glow-crown {
            animation: reiki-glow-crown 3.5s ease-in-out infinite;
          }
          @keyframes reiki-ray-pulse {
            0%, 100% { opacity: 0.7; transform: scaleX(0.92); }
            50% { opacity: 1; transform: scaleX(1.08); }
          }
          .animate-reiki-ray-pulse {
            transform-origin: 150px 0px;
            animation: reiki-ray-pulse 4s ease-in-out infinite;
          }
          @keyframes reiki-petal-drift-1 {
            0% { transform: translate(0px, 0px) rotate(0deg); opacity: 0; }
            15% { opacity: 0.75; }
            85% { opacity: 0.75; }
            100% { transform: translate(35px, 95px) rotate(140deg); opacity: 0; }
          }
          .animate-reiki-petal-1 {
            animation: reiki-petal-drift-1 9s linear infinite;
          }
          @keyframes reiki-petal-drift-2 {
            0% { transform: translate(0px, 0px) rotate(0deg); opacity: 0; }
            20% { opacity: 0.8; }
            80% { opacity: 0.8; }
            100% { transform: translate(-30px, 80px) rotate(-90deg); opacity: 0; }
          }
          .animate-reiki-petal-2 {
            animation: reiki-petal-drift-2 7s linear infinite;
            animation-delay: 2.5s;
          }
          @keyframes reiki-sparkle-flicker {
            0%, 100% { opacity: 0.2; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          .animate-reiki-sparkle {
            animation: reiki-sparkle-flicker 4s ease-in-out infinite;
          }
          @keyframes reiki-ribbon-move {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -40; }
          }
          .animate-reiki-ribbon-line {
            stroke-dasharray: 10, 5;
            animation: reiki-ribbon-move 12s linear infinite;
          }
          .scroll-paper {
            background-color: #FAF6ED;
            background-image: 
              linear-gradient(90deg, rgba(212, 198, 163, 0.06) 1px, transparent 1px),
              linear-gradient(rgba(212, 198, 163, 0.06) 1px, transparent 1px);
            background-size: 5px 5px;
          }
          .energy-ribbon-svg {
            filter: drop-shadow(0 2px 8px rgba(118, 148, 102, 0.2));
          }
        ` }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* THREE-COLUMN DYNAMIC EXPERIENCE GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
            
            {/* LEFT COLUMN: THE PREMIUM ARTISTIC ENERGY ILLUSTRATION */}
            <div className="lg:col-span-4 h-full">
              <div className="scroll-paper border border-[#dfdbc9]/70 rounded-[2.5rem] p-6 shadow-md relative overflow-hidden flex flex-col justify-between items-center text-center h-full">
                {/* Header Badge */}
                <div className="w-full text-center border-b border-[#dfdbc9]/40 pb-3">
                  <span className="text-[9px] font-mono tracking-[0.2em] text-[#c0942c] font-bold uppercase block mb-1">
                    Universal Energy Flow
                  </span>
                  <h3 className="font-serif text-base font-bold text-ocean tracking-wide uppercase">
                    Reiki Life Force
                  </h3>
                </div>

                {/* Circle with AI / Natural Healing Image */}
                <div className="my-auto py-4">
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden p-2 shadow-xl bg-white border-2 border-[#c0942c]/40 mx-auto transform hover:scale-105 transition-transform duration-500">
                    <SmartImage 
                      id="reiki.natural_healing"
                      defaultSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
                      alt="Reiki Natural Healing & Mortar Pestle Herbs" 
                      className="w-full h-full object-cover rounded-full shadow-inner"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 rounded-full border border-white/50 pointer-events-none" />
                  </div>
                </div>

                {/* Minimal caption */}
                <div className="w-full text-center border-t border-[#dfdbc9]/40 pt-3">
                  <span className="text-xs font-mono tracking-[0.15em] text-[#769466] uppercase font-bold">
                    The Flow of Universal Life Force
                  </span>
                </div>
              </div>
            </div>

            {/* CENTER COLUMN: WHAT IS REIKI */}
            <div className="lg:col-span-5 h-full">
              <div className="scroll-paper border border-[#dfdbc9]/70 rounded-[2.5rem] p-6 sm:p-8 shadow-md relative overflow-hidden flex flex-col justify-between text-left h-full">
                
                {/* Header Titles */}
                <div className="space-y-3">
                  <span className="text-xs font-mono tracking-[0.2em] text-[#c0942c] font-bold uppercase block mb-1">
                    Ancient Usui Modality
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-ocean font-medium tracking-tight border-b border-[#dfdbc9]/40 pb-3">
                    What is Reiki?
                  </h2>
                </div>

                {/* Exact Description Paragraphs */}
                <div className="text-sm md:text-base text-black leading-relaxed font-light space-y-4 my-auto py-4">
                  <p>
                    The Reiki Level 1 Certification Program is a comprehensive, internationally designed training that introduces you to the foundations of Reiki, helping you understand energy, strengthen your intuitive awareness, practice self-healing, and confidently share Reiki with others.
                  </p>
                  <p>
                    Whether you're seeking personal transformation or beginning your journey as a Reiki practitioner, this certification provides the knowledge, practical techniques, and confidence to make Reiki a lifelong practice. No prior healing experience is required.
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="p-3.5 bg-[#FAF5EB] border border-[#c0942c]/25 rounded-2xl flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#c0942c] shrink-0" />
                  <p className="text-xs font-serif text-[#0c2a26] font-medium leading-tight">
                    Accredited Usui Lineage Training & International Certification
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: THE LUXURIOUS VERTICAL PARCHMENT SCROLL */}
            <div className="lg:col-span-3 w-full h-full">
              
              <div className="scroll-paper border border-[#dfdbc9]/70 rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(74,62,42,0.06)] relative overflow-hidden flex flex-col justify-between text-left h-full">
                
                {/* Vintage top and bottom bars for parchment appearance */}
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#dfc588]/40 via-[#c0942c] to-[#dfc588]/40" />
                <div className="absolute bottom-0 inset-x-0 h-2 bg-gradient-to-r from-[#dfc588]/40 via-[#c0942c] to-[#dfc588]/40" />

                {/* Handcrafted sketch lines corners */}
                <div className="absolute top-4 left-4 w-10 h-10 text-[#769466]/15 pointer-events-none">
                  <svg className="w-full h-full transform scale-x-[-1]" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M 0,0 C 30,5 50,20 55,45 C 56,52 50,60 40,64 C 41,50 32,35 25,22 Z" />
                  </svg>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 text-[#769466]/15 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M 0,0 C 30,5 50,20 55,45 C 56,52 50,60 40,64 C 41,50 32,35 25,22 Z" />
                  </svg>
                </div>

                <div className="relative z-10 my-auto py-2">
                  <span className="text-xs font-mono tracking-[0.2em] text-[#c0942c] font-bold uppercase block mb-1">
                    Your True Path
                  </span>
                  <h3 className="font-serif text-lg font-bold text-ocean tracking-wide uppercase border-b border-[#dfdbc9]/40 pb-3 mb-5">
                    What's Included In This Course
                  </h3>

                  {/* Botanical capsules - 4 items remaining */}
                  <div className="space-y-3.5">
                    {[
                      { text: "All 4 Reiki Levels (L1 to Master Teacher)", icon: Layers, color: "text-[#2F6D73]" },
                      { text: "Comprehensive Manuals & Guides", icon: BookOpen, color: "text-[#769466]" },
                      { text: "International Certification", icon: Award, color: "text-[#c0942c]" },
                      { text: "Ongoing Mentorship & Community", icon: Users, color: "text-sky-600/80" }
                    ].map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <div 
                          key={idx}
                          className="bg-white/80 hover:bg-white border border-[#dfdbc9]/30 rounded-xl p-3 px-3.5 flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm hover:border-[#c0942c]/40 group"
                        >
                          <div className={`w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${item.color}`}>
                            <IconComp className="w-3.5 h-3.5 stroke-[1.8]" />
                          </div>
                          <span className="text-sm font-serif text-[#0c2a26] leading-tight font-medium group-hover:text-ocean transition-colors">
                            {item.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* BOTTOM SUBSECTION: FLOWING REIKI ENERGY RIBBON WITH 5 OUTCOMES */}
          <div className="mt-20 pt-10 border-t border-[#dfdbc9]/30 relative">
            
            {/* Visual Header */}
            <div className="text-center mb-12">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ocean font-semibold tracking-tight">
                Daily Integration Outcomes
              </h3>
            </div>

            {/* Glowing Flowing Energy Ribbon (Animated Bezier Wave) */}
            <div className="absolute inset-x-0 top-[80px] h-10 pointer-events-none select-none z-0 overflow-visible hidden md:block">
              <svg className="w-full h-full energy-ribbon-svg" viewBox="0 0 1000 40" preserveAspectRatio="none">
                <defs>
                  {/* Glowing linear gradient for the ribbon */}
                  <linearGradient id="ribbon-gradient-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#c0942c" stopOpacity="0.15" />
                    <stop offset="25%" stopColor="#769466" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="75%" stopColor="#2F6D73" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#c0942c" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                
                {/* Solid soft underlying wave */}
                <path 
                  d="M 0,20 C 200,38 300,2 500,20 C 700,38 800,2 1000,20" 
                  fill="none" 
                  stroke="url(#ribbon-gradient-glow)" 
                  strokeWidth="2" 
                  opacity="0.5" 
                />
                
                {/* Pulsing energy flow dashed dash line */}
                <path 
                  d="M 0,20 C 200,38 300,2 500,20 C 700,38 800,2 1000,20" 
                  fill="none" 
                  stroke="url(#ribbon-gradient-glow)" 
                  strokeWidth="2" 
                  className="animate-reiki-ribbon-line" 
                />
              </svg>
            </div>

            {/* Five Outcome Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 relative z-10">
              {[
                { title: "Stress Relief", icon: Heart, color: "text-rose-500/85", desc: "Soothing deep tension" },
                { title: "Deep Calm", icon: Compass, color: "text-sky-600/85", desc: "Relaxing physical body" },
                { title: "Emotional Balance", icon: Sparkles, color: "text-amber-500", desc: "Dissolving heavy blocks" },
                { title: "Energy Alignment", icon: Sun, color: "text-[#c0942c]", desc: "Aligning subtle energy" },
                { title: "Inner Peace", icon: Layers, color: "text-[#769466]", desc: "Experiencing deep quiet" }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                    
                    {/* Glowing Circular Node */}
                    <div className="relative w-16 h-16 rounded-full bg-white border border-[#dfdbc9]/60 flex items-center justify-center shadow-md group-hover:shadow-[0_0_25px_rgba(192,148,44,0.45)] group-hover:border-[#c0942c]/80 transition-all duration-300 z-10">
                      
                      {/* Aura pulse ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#dfc588]/15 to-[#769466]/15 opacity-0 group-hover:opacity-100 group-hover:animate-ping duration-2000 pointer-events-none" />
                      
                      <div className={`w-11 h-11 rounded-full bg-[#FAF9F6] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${item.color}`}>
                        <IconComponent className="w-5.5 h-5.5 stroke-[1.5]" />
                      </div>
                    </div>

                    {/* Outcome Text */}
                    <h5 className="font-serif text-base md:text-lg font-extrabold text-[#0a252c] mt-5 group-hover:text-[#c0942c] transition-colors leading-snug">
                      {item.title}
                    </h5>
                    <span className="text-xs font-sans font-semibold tracking-wide text-[#4F7786] block mt-2 uppercase">
                      {item.desc}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 3.5. INTERACTIVE AURA FIELD SCANNER */}
      <EnergeticSignatureSection onBook={onBook} />

      {/* DYNAMIC CHAKRA TUNER & AURA RESONANCE ALIGNER */}
      <section className="py-16 md:py-20 bg-white relative z-10 overflow-hidden border-t border-[#dfdbc9]/30" id="chakra-harmonizer">
        
        {/* Sacred Geometry background elements */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-40">
          <div className="absolute top-10 right-1/4 w-80 h-80 rounded-full bg-[#FAF6ED] border border-[#dfdbc9]/20" />
          <div className="absolute -bottom-24 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#dfc588]/8 to-transparent blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="font-serif text-3xl md:text-5xl text-ocean font-normal tracking-tight hwh-section-heading">
              Align your Chakras with Heer’s Guidance
            </h2>
            <div className="flex items-center justify-center gap-3 pt-1">
              <div className="w-12 h-[1px] bg-[#c0942c]/30" />
              <div className="w-12 h-[1px] bg-[#c0942c]/30" />
            </div>
          </div>

          {/* Core Interactive Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* COLUMN 1: AURA FIELD DISPLAY (5 cols on lg) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 bg-[#FAF9F6] border border-[#dfdbc9]/60 rounded-[2rem] shadow-xs relative overflow-hidden">
              
              {/* Decorative corner borders */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#c0942c]/40" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#c0942c]/40" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#c0942c]/40" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#c0942c]/40" />

              {/* AURA FIELD IMAGE / ILLUSTRATION CONTAINER */}
              <div className="w-full flex-1 min-h-[380px] sm:min-h-[440px] max-w-[420px] relative flex items-center justify-center rounded-2xl overflow-hidden bg-white/60 p-3 border border-[#dfdbc9]/50 shadow-xs">
                {/* HIGH-PRECISION VECTOR AURA FIELD ILLUSTRATION */}
                <svg className="w-full h-full max-h-[460px]" viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="root-aura-red" cx="50%" cy="80%" r="50%">
                      <stop offset="0%" stopColor="#DC2626" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="sacral-aura-orange" cx="50%" cy="70%" r="50%">
                      <stop offset="0%" stopColor="#EA580C" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#EA580C" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="solar-aura-yellow" cx="50%" cy="60%" r="50%">
                      <stop offset="0%" stopColor="#CA8A04" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#CA8A04" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="heart-aura-green" cx="50%" cy="48%" r="50%">
                      <stop offset="0%" stopColor="#16A34A" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#16A34A" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="throat-aura-cyan" cx="50%" cy="38%" r="50%">
                      <stop offset="0%" stopColor="#0891B2" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#0891B2" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="third-aura-indigo" cx="50%" cy="28%" r="50%">
                      <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="crown-aura-violet" cx="50%" cy="15%" r="65%">
                      <stop offset="0%" stopColor="#9333EA" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#C084FC" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Outer Radiant Aura Field Waves */}
                  <circle cx="160" cy="120" r="140" fill="url(#crown-aura-violet)" />
                  <circle cx="160" cy="180" r="120" fill="url(#third-aura-indigo)" />
                  <circle cx="160" cy="210" r="105" fill="url(#throat-aura-cyan)" />
                  <circle cx="160" cy="240" r="90" fill="url(#heart-aura-green)" />
                  <circle cx="160" cy="270" r="75" fill="url(#solar-aura-yellow)" />
                  <circle cx="160" cy="300" r="60" fill="url(#sacral-aura-orange)" />
                  <circle cx="160" cy="330" r="45" fill="url(#root-aura-red)" />

                  {/* Woven Yoga/Meditation Carpet Base */}
                  <rect x="50" y="340" width="220" height="30" rx="6" fill="#FAF5EB" stroke="#c0942c" strokeWidth="1" />
                  <line x1="50" y1="355" x2="270" y2="355" stroke="#c0942c" strokeWidth="0.5" strokeDasharray="4 4" />

                  {/* Crystalline Meditating Human Figure */}
                  <g transform="translate(160, 230)">
                    {/* Head */}
                    <circle cx="0" cy="-105" r="20" fill="#FFFFFF" fillOpacity="0.85" stroke="#0A252C" strokeWidth="1.2" />
                    
                    {/* Torso & Lotus Legs */}
                    <path 
                      d="M 0,-80 C -15,-80 -25,-65 -25,-45 L -35,-10 C -55,10 -75,30 -80,50 C -85,65 -75,75 -60,73 L -10,50 C -5,50 5,50 10,50 L 60,73 C 75,75 85,65 80,50 C 75,30 55,10 35,-10 L 25,-45 C 25,-65 15,-80 0,-80 Z" 
                      fill="#FFFFFF" 
                      fillOpacity="0.8" 
                      stroke="#0A252C" 
                      strokeWidth="1.2" 
                    />

                    {/* Luminous Inner Energy Core Centers */}
                    <circle cx="0" cy="-105" r="5" fill="#9333EA" />
                    <circle cx="0" cy="-90" r="5" fill="#4F46E5" />
                    <circle cx="0" cy="-70" r="5" fill="#0891B2" />
                    <circle cx="0" cy="-45" r="5" fill="#16A34A" />
                    <circle cx="0" cy="-20" r="5" fill="#CA8A04" />
                    <circle cx="0" cy="5" r="5" fill="#EA580C" />
                    <circle cx="0" cy="30" r="5" fill="#DC2626" />
                  </g>
                </svg>
              </div>

            </div>

            {/* COLUMN 2: HUMAN AURA FIELDS INFORMATION (7 cols on lg) */}
            <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 bg-white border border-[#dfdbc9]/60 rounded-[2rem] shadow-xs relative text-left">
              
              <div className="space-y-5">
                <div className="border-b border-[#dfdbc9]/40 pb-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-ocean mt-1">
                    Understanding Your Human Aura Fields
                  </h3>
                  <p className="text-sm sm:text-base text-[#0a252c] font-light leading-relaxed mt-1">
                    Each color radiating in the aura field corresponds to a distinct vibrational layer of consciousness, emotional state, and physical vitality:
                  </p>
                </div>

                {/* AURA COLOR FIELD CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  
                  {/* Violet / Crown Aura */}
                  <div className="p-3.5 bg-[#FAF9F6] border border-purple-200 rounded-xl flex items-start gap-3 shadow-2xs">
                    <div className="w-3.5 h-3.5 rounded-full bg-purple-600 shrink-0 mt-1 shadow-[0_0_8px_rgba(147,51,234,0.6)]" />
                    <div>
                      <h4 className="font-serif text-xs font-bold text-ocean uppercase tracking-wider">
                        Violet / Purple (Crown Halo)
                      </h4>
                      <p className="text-xs text-[#0a252c] leading-relaxed font-light mt-0.5">
                        Represents spiritual connection, cosmic unity, divine wisdom, and higher consciousness state.
                      </p>
                    </div>
                  </div>

                  {/* Indigo / Third Eye Aura */}
                  <div className="p-3.5 bg-[#FAF9F6] border border-indigo-200 rounded-xl flex items-start gap-3 shadow-2xs">
                    <div className="w-3.5 h-3.5 rounded-full bg-indigo-600 shrink-0 mt-1 shadow-[0_0_8px_rgba(79,70,229,0.6)]" />
                    <div>
                      <h4 className="font-serif text-xs font-bold text-ocean uppercase tracking-wider">
                        Indigo (Celestial Vision)
                      </h4>
                      <p className="text-xs text-[#0a252c] leading-relaxed font-light mt-0.5">
                        Governs deep intuition, psychic clarity, inner vision, and imaginative insight.
                      </p>
                    </div>
                  </div>

                  {/* Cyan / Throat Aura */}
                  <div className="p-3.5 bg-[#FAF9F6] border border-cyan-200 rounded-xl flex items-start gap-3 shadow-2xs">
                    <div className="w-3.5 h-3.5 rounded-full bg-cyan-500 shrink-0 mt-1 shadow-[0_0_8px_rgba(8,145,178,0.6)]" />
                    <div>
                      <h4 className="font-serif text-xs font-bold text-ocean uppercase tracking-wider">
                        Turquoise / Cyan (Etheric Field)
                      </h4>
                      <p className="text-xs text-[#0a252c] leading-relaxed font-light mt-0.5">
                        Embodies authentic communication, vocal truth, peace, and harmonious expression.
                      </p>
                    </div>
                  </div>

                  {/* Emerald Green / Heart Aura */}
                  <div className="p-3.5 bg-[#FAF9F6] border border-emerald-200 rounded-xl flex items-start gap-3 shadow-2xs">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-600 shrink-0 mt-1 shadow-[0_0_8px_rgba(22,163,74,0.6)]" />
                    <div>
                      <h4 className="font-serif text-xs font-bold text-ocean uppercase tracking-wider">
                        Emerald Green (Astral Heart)
                      </h4>
                      <p className="text-xs text-[#0a252c] leading-relaxed font-light mt-0.5">
                        Radiates unconditional love, emotional empathy, compassion, and natural healing energy.
                      </p>
                    </div>
                  </div>

                  {/* Golden Yellow / Solar Plexus Aura */}
                  <div className="p-3.5 bg-[#FAF9F6] border border-amber-200 rounded-xl flex items-start gap-3 shadow-2xs">
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500 shrink-0 mt-1 shadow-[0_0_8px_rgba(202,138,4,0.6)]" />
                    <div>
                      <h4 className="font-serif text-xs font-bold text-ocean uppercase tracking-wider">
                        Golden Yellow (Mental Body)
                      </h4>
                      <p className="text-xs text-[#0a252c] leading-relaxed font-light mt-0.5">
                        Reflects intellect, personal power, self-confidence, optimism, and mental clarity.
                      </p>
                    </div>
                  </div>

                  {/* Orange / Sacral Aura */}
                  <div className="p-3.5 bg-[#FAF9F6] border border-orange-200 rounded-xl flex items-start gap-3 shadow-2xs">
                    <div className="w-3.5 h-3.5 rounded-full bg-orange-500 shrink-0 mt-1 shadow-[0_0_8px_rgba(234,88,12,0.6)]" />
                    <div>
                      <h4 className="font-serif text-xs font-bold text-ocean uppercase tracking-wider">
                        Peach / Orange (Emotional Body)
                      </h4>
                      <p className="text-xs text-[#0a252c] leading-relaxed font-light mt-0.5">
                        Stimulates creative passion, emotional warmth, vitality, and joyful relationships.
                      </p>
                    </div>
                  </div>

                  {/* Crimson Red / Root Aura */}
                  <div className="p-3.5 bg-[#FAF9F6] border border-red-200 rounded-xl flex items-start gap-3 shadow-2xs sm:col-span-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-600 shrink-0 mt-1 shadow-[0_0_8px_rgba(220,38,38,0.6)]" />
                    <div>
                      <h4 className="font-serif text-xs font-bold text-ocean uppercase tracking-wider">
                        Crimson Red (Etheric Base Matrix)
                      </h4>
                      <p className="text-xs text-[#0a252c] leading-relaxed font-light mt-0.5">
                        Anchors physical stamina, grounding force, security, and primal life force energy directly to the Earth.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* HEER'S REIKI ATTUNEMENT SUMMARY */}
              <div className="mt-6 pt-4 border-t border-[#dfdbc9]/40 bg-[#FAF9F6] p-4 rounded-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c0942c]/10 text-[#c0942c] flex items-center justify-center font-serif text-sm font-bold">
                    ✨
                  </div>
                  <div>
                    <h5 className="text-xs font-serif font-bold text-ocean">Harmonize Your Aura Spectrum</h5>
                    <p className="text-xs text-[#0a252c] font-light">
                      Heer's personalized attunements clear blockages across all 7 aura layers simultaneously.
                    </p>
                  </div>
                </div>
                <button 
                  onClick={onBook}
                  className="px-4 py-2 bg-[#0a252c] hover:bg-[#15424a] text-white text-[10px] font-mono tracking-widest uppercase rounded-lg transition-all shadow-xs cursor-pointer shrink-0"
                >
                  Book Session
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. WHO IS THIS PROGRAM FOR? (Celestial Lotus Layout) */}
      <section className="py-16 md:py-20 bg-[#FAF9F6] text-ocean relative overflow-hidden border-t border-[#dfdbc9]/30 z-10">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#769466]/8 blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#0a3d54]/8 blur-[100px]" />
          <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-[#E2ECE6]/25 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          
          {/* Celestial sacred geometry backdrop */}
          <svg viewBox="0 0 100 100" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] text-[#c0942c]/15 opacity-35">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 1" />
            <path d="M 50,20 C 55,35 55,65 50,80" fill="none" stroke="currentColor" strokeWidth="0.08" />
            <path d="M 50,20 C 45,35 45,65 50,80" fill="none" stroke="currentColor" strokeWidth="0.08" />
            <path d="M 20,50 C 35,55 65,55 80,50" fill="none" stroke="currentColor" strokeWidth="0.08" />
            <circle cx="50" cy="35" r="15" fill="none" stroke="currentColor" strokeWidth="0.08" />
            <circle cx="50" cy="65" r="15" fill="none" stroke="currentColor" strokeWidth="0.08" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean font-semibold tracking-tight leading-tight">
              Who Is This Certification For?
            </h2>
            <div className="flex justify-center pt-2">
              <div className="h-[1px] w-16 bg-[#c0942c]/50" />
            </div>
          </div>

          {/* LOTUS LAYOUT CONTAINER (Desktop) */}
          <div className="hidden lg:block relative w-full max-w-5xl mx-auto h-[540px] my-4 select-none">
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full text-[#c0942c]/15 pointer-events-none select-none z-0">
              <path d="M 120,120 Q 200,200 200,200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 280,120 Q 200,200 200,200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 120,280 Q 200,200 200,200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 280,280 Q 200,200 200,200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
            </svg>

            {/* Central Glowing Blooming Lotus */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
              <div className="relative w-80 h-80 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#c0942c]/10 rounded-full blur-2xl animate-pulse duration-4000" />
                
                {activePetal !== null && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                    className={`absolute inset-0 rounded-full blur-md pointer-events-none ${
                      activePetal === 0 ? "bg-[#769466]/25 -translate-x-12 -translate-y-12" :
                      activePetal === 1 ? "bg-[#c0942c]/25 translate-x-12 -translate-y-12" :
                      activePetal === 2 ? "bg-teal-500/25 -translate-x-12 translate-y-12" :
                      "bg-blue-400/25 translate-x-12 translate-y-12"
                    }`}
                  />
                )}

                <motion.div 
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute inset-1 rounded-full border-2 border-[#c0942c]/40 flex items-center justify-center shadow-[inset_0_0_35px_rgba(192,148,44,0.12)] bg-[#FAF9F5]/98 backdrop-blur-sm z-10"
                >
                  <div className="absolute inset-4 rounded-full border border-[#c0942c]/20 flex flex-col items-center justify-center text-center p-6 space-y-1">
                    <div className="text-[#2F6D73] mb-1">
                      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-none stroke-[#2F6D73] stroke-[1.5]">
                        <path d="M16 6 C12 12, 12 18, 16 24 C20 18, 20 12, 16 6 Z" fill="#FAF5EB" />
                        <path d="M16 16 C10 12, 6 15, 6 20 C10 22, 14 20, 16 16 Z" fill="#E2ECE6" />
                        <path d="M16 16 C22 12, 26 15, 26 20 C22 22, 18 20, 16 16 Z" fill="#E2ECE6" />
                      </svg>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#2F6D73] uppercase tracking-[0.25em] block">
                      PROGRAM PATH
                    </span>
                    <span className="font-serif text-xl md:text-2xl font-bold text-ocean tracking-wide leading-tight block">
                      Who Is This
                    </span>
                    <span className="font-serif text-xl md:text-2xl font-bold text-ocean tracking-wide leading-tight block">
                      Program For?
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 4 Lotus Petal Cards */}
            {[
              {
                title: "Beginners & Seekers",
                illustration: <BeginnersIllustration />,
                desc: "Beginners interested in Reiki and energy healing, seeking personal transformation, emotional wellness, stress reduction, and deep self-awareness.",
                gradientClass: "from-[#769466]/12 via-[#FAF9F6]/95 to-[#E2ECE6]/30",
                borderClass: "border-[#769466]/35 hover:border-[#769466]/75",
                glowClass: "shadow-[0_8px_30px_rgba(118,148,102,0.04)] hover:shadow-[0_20px_50px_rgba(118,148,102,0.12)]",
                shapeClass: "rounded-[140px_20px_140px_20px]",
                posClass: "left-[4%] top-[4%] w-[38%] h-[200px]"
              },
              {
                title: "Therapists & Professionals",
                illustration: <ProfessionalsIllustration />,
                desc: "Coaches, counsellors, therapists, yoga teachers, and wellness professionals looking to add a powerful, accredited modality of energy healing to support client breakthroughs.",
                gradientClass: "from-[#c0942c]/10 via-[#FAF9F6]/95 to-[#FAF5EB]/50",
                borderClass: "border-[#c0942c]/30 hover:border-[#c0942c]/75",
                glowClass: "shadow-[0_8px_30px_rgba(192,148,44,0.04)] hover:shadow-[0_20px_50px_rgba(192,148,44,0.15)]",
                shapeClass: "rounded-[20px_140px_20px_140px]",
                posClass: "right-[4%] top-[4%] w-[38%] h-[200px]"
              },
              {
                title: "Loved Ones & Families",
                illustration: <FamiliesIllustration />,
                desc: "Compassionate individuals wishing to support family, friends, children, animals, plants, and spaces through gentle, heart-centered, and stress-relieving life force channeling.",
                gradientClass: "from-teal-500/12 via-[#FAF9F6]/95 to-[#EAF3F1]/40",
                borderClass: "border-teal-500/35 hover:border-teal-500/75",
                glowClass: "shadow-[0_8px_30px_rgba(47,109,115,0.04)] hover:shadow-[0_20px_50px_rgba(47,109,115,0.12)]",
                shapeClass: "rounded-[20px_140px_20px_140px]",
                posClass: "left-[4%] bottom-[4%] w-[38%] h-[200px]"
              },
              {
                title: "Aspiring Practitioners",
                illustration: <PractitionersIllustration />,
                desc: "Anyone desiring to open a personal Reiki practice, receive accredited Usui lineage attunements, strengthen intuitive pathways, and begin a lifetime healing lineage.",
                gradientClass: "from-blue-400/12 via-[#FAF9F6]/95 to-[#E2ECE6]/30",
                borderClass: "border-blue-400/35 hover:border-blue-400/75",
                glowClass: "shadow-[0_8px_30px_rgba(79,119,134,0.04)] hover:shadow-[0_20px_50px_rgba(79,119,134,0.12)]",
                shapeClass: "rounded-[140px_20px_140px_20px]",
                posClass: "right-[4%] bottom-[4%] w-[38%] h-[200px]"
              }
            ].map((petal, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActivePetal(idx)}
                onMouseLeave={() => setActivePetal(null)}
                className={`absolute ${petal.posClass} ${petal.shapeClass} bg-gradient-to-tr ${petal.gradientClass} border ${petal.borderClass} ${petal.glowClass} p-6 cursor-default flex flex-col justify-center overflow-hidden transition-all duration-300`}
              >
                <div className={`absolute inset-3 border border-[#c0942c]/5 ${petal.shapeClass} pointer-events-none opacity-40`} />
                <div className="flex gap-4 items-start relative z-10">
                  <div className="flex-shrink-0">{petal.illustration}</div>
                  <div className="space-y-1.5 text-left">
                    <h3 className="font-serif text-base font-bold text-ocean tracking-wide flex items-center gap-1.5">
                      {petal.title}
                    </h3>
                    <p className="text-xs text-black font-light leading-relaxed">
                      {petal.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LOTUS LAYOUT (Mobile Grid) */}
          <div className="block lg:hidden space-y-6 mt-8">
            {[
              {
                title: "Beginners & Seekers",
                desc: "Beginners interested in Reiki and energy healing, seeking personal transformation, emotional wellness, stress reduction, and deep self-awareness.",
                borderClass: "border-[#769466]/30",
                bg: "bg-[#769466]/5"
              },
              {
                title: "Therapists & Professionals",
                desc: "Coaches, counsellors, therapists, yoga teachers, and wellness professionals looking to add a powerful, accredited modality of energy healing to support client breakthroughs.",
                borderClass: "border-[#c0942c]/30",
                bg: "bg-[#c0942c]/5"
              },
              {
                title: "Loved Ones & Families",
                desc: "Compassionate individuals wishing to support family, friends, children, animals, plants, and spaces through gentle, heart-centered, and stress-relieving life force channeling.",
                borderClass: "border-teal-500/30",
                bg: "bg-teal-500/5"
              },
              {
                title: "Aspiring Practitioners",
                desc: "Anyone desiring to open a personal Reiki practice, receive accredited Usui lineage attunements, strengthen intuitive pathways, and begin a lifetime healing lineage.",
                borderClass: "border-blue-400/30",
                bg: "bg-blue-400/5"
              }
            ].map((petal, idx) => (
              <div 
                key={idx}
                className={`p-6 rounded-2xl border ${petal.borderClass} ${petal.bg} text-left space-y-2`}
              >
                <h3 className="font-serif text-lg font-bold text-ocean tracking-wide">{petal.title}</h3>
                <p className="text-sm text-black font-light leading-relaxed">{petal.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* 6. PROGRAM CURRICULUM SYLLABUS SECTION */}
      <section className="py-16 md:py-20 px-6 bg-[#faf7f2] border-t border-[#dfdbc9]/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-serif text-4xl md:text-6xl text-ocean font-semibold tracking-tight">
              Program Curriculum
            </h2>
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="w-10 h-[1px] bg-[#c0942c]/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c0942c]" />
              <div className="w-10 h-[1px] bg-[#c0942c]/30" />
            </div>
          </div>

          {/* Journey Chain Grid */}
          <div className="relative">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {reikiModules.map((mod, idx) => {
                const IconComponent = mod.icon;
                return (
                  <div key={idx} className="relative group flex flex-col h-full">
                    {/* The Card - styled to match Relationship Mastery page */}
                    <div className="bg-white hover:bg-[#FAF9F5] border border-[#dfdbc9]/60 hover:border-[#c0942c]/80 rounded-[2.2rem] p-6 lg:p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(27,62,75,0.02)] hover:shadow-[0_15px_35px_rgba(192,148,44,0.12)] hover:-translate-y-2 transition-all duration-500 relative z-10 overflow-hidden text-left h-full">
                      
                      {/* Soft botanical branch background sketch in top corner */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-15 pointer-events-none select-none">
                        <svg className="w-full h-full text-[#769466]" viewBox="0 0 100 100" fill="none">
                          <path d="M 100,0 Q 60,30 50,70 Q 30,85 10,95" stroke="currentColor" strokeWidth="0.75" />
                          <path d="M 60,30 C 55,40 50,45 40,42" stroke="currentColor" strokeWidth="0.5" />
                          <circle cx="40" cy="42" r="1.5" fill="currentColor" />
                          <circle cx="50" cy="70" r="1.5" fill="currentColor" />
                        </svg>
                      </div>

                      <div className="space-y-5 flex-grow flex flex-col">
                        {/* Header with circular icon badge & number */}
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-4xl font-extrabold text-[#c0942c] tracking-tight">
                            {mod.num}
                          </span>
                          <div className="w-11 h-11 rounded-full bg-[#FAF5EB] border border-[#c0942c]/10 flex items-center justify-center text-[#c0942c] shadow-sm">
                            <IconComponent className="w-5 h-5 stroke-[2]" />
                          </div>
                        </div>

                        {/* Module Label */}
                        <div className="space-y-1">
                          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#c0942c] block">
                            {mod.title}
                          </span>
                          <h3 className="font-serif text-xl font-bold text-[#0A252C] leading-snug">
                            {mod.subtitle}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-[#0a252c] leading-relaxed font-normal flex-grow">
                          {mod.desc}
                        </p>
                      </div>

                      {/* Station indicator at bottom */}
                      <div className="pt-4 border-t border-[#dfdbc9]/60 flex items-center justify-between mt-6">
                        <span className="text-xs font-bold text-[#c0942c] uppercase tracking-[0.12em]">
                          {idx === 0 ? "Boarding Station" : idx === 7 ? "Final Station ✧" : "Next Station →"}
                        </span>
                        <span className="text-sm text-[#c0942c]">✦</span>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. BEFORE / AFTER COMPARISON TRANSFORMATION GRID */}
      <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-white via-ivory to-white border-t border-[#dfdbc9]/30 relative z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none select-none z-0">
          <div className="absolute top-12 right-12 w-2 h-2 rounded-full bg-white opacity-40 animate-ping" />
          <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-white opacity-50 animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-5xl text-ocean font-medium tracking-tight">
              Your Reiki Transformations
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-[#c0942c]/30" />
              <span className="text-[10px] md:text-xs font-semibold uppercase text-black tracking-[0.25em]">
                A Journey of Universal Healing
              </span>
              <div className="w-12 h-[1px] bg-[#c0942c]/30" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto px-4 sm:px-6">
            
            {/* Left Column: Before State (Dark Red/Rust Theme) */}
            <div className="relative group p-8 sm:p-12 md:p-14 lg:p-16 bg-[#51130e] border-4 border-[#99221b] rounded-3xl transition-all duration-500 flex flex-col justify-between text-left shadow-xl hover:-translate-y-1">
              <div className="relative z-10 w-full px-2 sm:px-4">
                <div className="flex items-center gap-3.5 mb-6 border-b border-red-800/40 pb-4">
                  <span className="w-10 h-10 rounded-full bg-red-950/50 border border-red-700/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <ShieldAlert className="w-5 h-5 stroke-[2]" />
                  </span>
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-white tracking-wide">BEFORE</h4>
                    <p className="text-[10px] uppercase tracking-widest text-red-200/80 font-semibold">Exhausted & Energetically Blocked</p>
                  </div>
                </div>

                <ul className="flex flex-col gap-4">
                  {[
                    "Exhausted & depleted daily",
                    "Carrying heavy emotional burdens",
                    "Stressed & easily overwhelmed",
                    "Disconnected from your inner self",
                    "Limiting thoughts & self-doubt",
                    "Prone to external negativity",
                    "Blocked chakra balance",
                    "Lacking daily calming routine",
                    "Doubtful of intuitive insights",
                    "Stagnant physical energy flow"
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="15" y1="9" x2="9" y2="15" />
                        <line x1="9" y1="9" x2="15" y2="15" />
                      </svg>
                      <span className="text-base md:text-lg text-white/95 font-semibold leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: After State (Teal/Sage Green Theme) */}
            <div className="relative group p-8 sm:p-12 md:p-14 lg:p-16 bg-[#0c2a26] border-4 border-[#1e584f] rounded-3xl transition-all duration-500 flex flex-col justify-between text-left shadow-xl hover:-translate-y-1">
              <div className="relative z-10 w-full px-2 sm:px-4">
                <div className="flex items-center gap-3.5 mb-6 border-b border-teal-800/40 pb-4">
                  <span className="w-10 h-10 rounded-full bg-teal-950/50 border border-teal-700/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5 stroke-[2]" />
                  </span>
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-white tracking-wide">AFTER</h4>
                    <p className="text-[10px] uppercase tracking-widest text-teal-200/80 font-semibold">Centered & Emotionally Radiant</p>
                  </div>
                </div>

                <ul className="flex flex-col gap-4">
                  {[
                    "Centered, light, & resilient",
                    "Calm & peaceful emotional core",
                    "Empowered daily self-Reiki",
                    "Safe, clear energetic boundaries",
                    "Healed chakra energy centers",
                    "Compassionate & heart-centered",
                    "Stronger, activated intuition",
                    "Supportive healing for loved ones",
                    "Nourishing lifestyle alignment",
                    "Lifelong path of sacred growth"
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-base md:text-lg text-white/95 font-semibold leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. WHAT YOU WILL LEARN SECTION */}
      <section className="py-16 md:py-20 bg-[#faf7f2] border-t border-[#dfdbc9]/30 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-5xl text-ocean font-semibold tracking-tight">
              What You Will Learn
            </h2>
            <div className="flex justify-center pt-2">
              <div className="h-[1px] w-16 bg-[#c0942c]/50" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            
            {/* Left: What's Included */}
            <div className="bg-white border border-[#dfdbc9]/60 rounded-3xl p-8 text-left shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#c0942c]">THE SANCTUARY VALUE</span>
                  <h3 className="font-serif text-2xl font-bold text-ocean">What's Included</h3>
                </div>
                <div className="h-[1px] w-12 bg-[#c0942c]/40" />
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "8 Comprehensive Modules",
                    "Guided Reiki Healing Practices",
                    "Self-Reiki Routine Guide",
                    "Hand Position Demonstrations",
                    "Chakra & Energy Workbook",
                    "Meditation & Grounding Guides",
                    "Practical Homework Exercises",
                    "Downloadable Resources",
                    "Lifetime Course Access",
                    "Lineage accredited Certificate"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-black font-light leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-[#c0942c]/10 flex items-center justify-center text-[#c0942c] flex-shrink-0 mt-0.5 border border-[#c0942c]/20">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#dfdbc9]/20">
                <button
                  onClick={() => onBook('Reiki Level 1 Course Enrollment')}
                  className="w-full py-3 bg-[#c0942c] hover:bg-[#d5a83a] text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all shadow-md"
                >
                  Enroll With Materials
                </button>
              </div>
            </div>

            {/* Right: Career Opportunities */}
            <div className="bg-white border border-[#dfdbc9]/60 rounded-3xl p-8 text-left shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#769466]">PROFESSIONAL HORIZONS</span>
                  <h3 className="font-serif text-2xl font-bold text-ocean">Career Opportunities</h3>
                </div>
                <div className="h-[1px] w-12 bg-[#769466]/40" />
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Personal Reiki Practice",
                    "Holistic Wellness Coaching",
                    "Reiki Practitioner Services",
                    "Yoga & Meditation Centres",
                    "Wellness Retreats & Spas",
                    "Emotional Support Facilitator",
                    "Community Wellness Support",
                    "Energy Healing Integration",
                    "Integrative Medical Support",
                    "Stress Management Mentoring"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-black font-light leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-[#769466]/10 flex items-center justify-center text-[#769466] flex-shrink-0 mt-0.5 border border-[#769466]/20">
                        <Award className="w-3.5 h-3.5 stroke-[1.5]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#dfdbc9]/20">
                <button
                  onClick={() => onBook('Reiki Career Opportunities Consultation')}
                  className="w-full py-3 bg-ocean hover:bg-[#15424A] text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all shadow-md"
                >
                  Consult Career Pathways
                </button>
              </div>
            </div>

          </div>

          {/* Why Learn With Us Text box */}
          <div className="mt-12 bg-white border border-[#dfdbc9]/60 rounded-3xl p-8 text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#c0942c] via-[#769466] to-[#2F6D73]" />
            <h4 className="font-serif text-[#0A252C] font-bold text-[#0A252C] uppercase tracking-wider mb-4">Why Learn With Us?</h4>
            <p className="text-sm md:text-base text-black leading-relaxed font-light italic max-w-2xl mx-auto">
              "This certification combines the timeless wisdom of Reiki with a structured, practical, and transformational learning experience. Rather than simply teaching techniques, the program helps you build confidence, develop energetic awareness, strengthen your intuition, and integrate Reiki into everyday life. Whether your goal is personal healing or supporting others, you'll gain practical skills that empower you to use Reiki with clarity, compassion, and confidence."
            </p>
          </div>

        </div>
      </section>

      {/* 10. SACRED INVITATION CTA (Matching NLP top section structure, format, and color) */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#e1f0f2]/60 via-[#f4fafb] to-[#ffffff] text-ocean-dark overflow-hidden border-t border-[#dfdbc9]/30 text-center">
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
            backgroundImage: `url('${getSrc('reiki.cta_bg', 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1600')}')`
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
          <div className="space-y-8">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#2F6D73]">
              Ready to Awaken Your Inner Healer?
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-ocean-dark tracking-tight leading-tight uppercase max-w-4xl mx-auto drop-shadow-sm">
              Become a Certified <br />
              <span className="text-teal-soft italic font-normal font-serif lowercase">Reiki</span> Practitioner
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#0a252c] max-w-3xl mx-auto leading-relaxed font-light font-serif italic py-2">
              Awaken the healer within and allow the Universe to channel divine cosmic energy through you, bringing harmony to your soul, restoring your body's vital currents, and empowering you to share sacred light.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={() => onBook('Reiki Level 1 Certification Course')}
                className="px-10 py-5 bg-gradient-to-r from-teal-soft via-teal-soft/90 to-teal-soft hover:from-teal-soft/90 hover:to-teal-soft text-white font-bold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-full shadow-[0_4px_20px_rgba(79,157,166,0.25)] hover:shadow-[0_8px_30px_rgba(79,157,166,0.45)] transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300 border border-teal-light/30 cursor-pointer"
                id="reiki-join-cta"
              >
                Become a Certified Reiki Practitioner
              </button>

              <button
                onClick={onBack}
                className="px-8 py-5 border border-slate-200 hover:bg-slate-50 text-ocean rounded-full text-xs font-bold tracking-widest uppercase transition-all cursor-pointer"
              >
                Back to Sanctuary
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

/* SUB-COMPONENTS */

interface ReikiCirculatingPillarProps {
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

function ReikiCirculatingPillar({ title, items, icon: PillarIcon, colorTheme, bgImage }: ReikiCirculatingPillarProps) {
  const [orderedItems, setOrderedItems] = useState(items);

  useEffect(() => {
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
    <div className="bg-white/75 backdrop-blur-md border-2 border-[#dfdbc9]/60 rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(192,148,44,0.06)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden h-full min-h-[480px]">
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src={bgImage} 
          alt="" 
          className="w-full h-full object-cover opacity-[0.1] mix-blend-multiply" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-ivory/90" />
      </div>

      <div className="space-y-6 relative z-10 w-full flex-grow flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-4 border-b border-[#dfdbc9]/40 pb-5">
            <div className={`w-12 h-12 rounded-full ${colorTheme.badgeBg} flex items-center justify-center ${colorTheme.text} flex-shrink-0 shadow-sm border border-[#dfdbc9]/25`}>
              <PillarIcon className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div className="text-left">
              <span className="text-[11px] font-bold uppercase block tracking-widest text-ocean-dark font-serif" style={{ letterSpacing: '3px' }}>
                {title}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-1 text-left">
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
                  className={`bg-gradient-to-b ${colorTheme.gradient} border border-[#dfdbc9]/50 hover:border-[#c0942c] shadow-sm rounded-2xl p-4 flex items-start gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
                >
                  <div className={`mt-0.5 w-5 h-5 rounded-full ${colorTheme.badgeBg} flex items-center justify-center ${colorTheme.text} flex-shrink-0 border border-[#dfdbc9]/25`}>
                    <CheckCircle className="w-3.5 h-3.5 stroke-[2]" />
                  </div>
                  <div className="leading-relaxed">
                    <p className="text-xs text-ocean-dark font-bold uppercase tracking-wide">
                      {header}
                    </p>
                    <p className="text-xs text-sage font-light mt-0.5">
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

const BeginnersIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-16 h-16 text-[#769466] drop-shadow-[0_4px_10px_rgba(118,148,102,0.15)]">
    <circle cx="60" cy="60" r="48" fill="currentColor" fillOpacity="0.15" />
    <path d="M 40,82 C 40,70 48,62 60,62 C 72,62 80,70 80,82 C 80,85 75,85 60,85 C 45,85 40,85 40,82 Z" fill="currentColor" fillOpacity="0.7" />
    <circle cx="60" cy="51" r="9" fill="#FAF5EB" stroke="currentColor" strokeWidth="1" />
    <circle cx="45" cy="40" r="1.5" fill="gold" />
    <circle cx="75" cy="45" r="2" fill="gold" />
    <circle cx="62" cy="35" r="1" fill="currentColor" />
  </svg>
);

const ProfessionalsIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-16 h-16 text-gold drop-shadow-[0_4px_10px_rgba(212,175,55,0.25)]">
    <circle cx="60" cy="60" r="48" fill="currentColor" fillOpacity="0.15" />
    <circle cx="60" cy="50" r="15" fill="currentColor" fillOpacity="0.3" />
    <path d="M 60,25 L 60,75 M 35,50 L 85,50" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
    <path d="M 60,60 C 54,54 55,42 60,35 C 65,42 66,54 60,60 Z" fill="#FAF5EB" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const FamiliesIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-16 h-16 text-teal-500 drop-shadow-[0_4px_10px_rgba(47,109,115,0.15)]">
    <circle cx="60" cy="60" r="48" fill="currentColor" fillOpacity="0.15" />
    <circle cx="60" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 4" />
    <circle cx="60" cy="46" r="8" fill="#FAF5EB" stroke="currentColor" strokeWidth="1" />
    <path d="M 45,82 C 45,68 50,58 60,58 C 70,58 75,68 75,82 Z" fill="currentColor" fillOpacity="0.7" />
  </svg>
);

const PractitionersIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-16 h-16 text-blue-400 drop-shadow-[0_4px_10px_rgba(79,119,134,0.15)]">
    <circle cx="60" cy="60" r="48" fill="currentColor" fillOpacity="0.15" />
    <circle cx="60" cy="50" r="22" fill="none" stroke="gold" strokeWidth="0.75" />
    <circle cx="60" cy="46" r="8" fill="#FAF5EB" stroke="currentColor" strokeWidth="1" />
    <path d="M 57,35 L 60,31 L 63,35 L 60,37 Z" fill="gold" />
  </svg>
);
