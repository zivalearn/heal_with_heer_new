import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Calendar, Compass, ShieldCheck, Clock, Zap,
  CheckCircle, ArrowRight, Hourglass, Sparkles, ShieldAlert,
  Heart, Download, RefreshCw, Star, Leaf, Search, Users, Eye, Unlock, Smile,
  ChevronRight, Award, MessageSquare, Sun, Brain, Globe, Infinity, Download as DownloadIcon
} from 'lucide-react';
import { generatePDF } from '../../lib/pdfHelper';
import { SmartImage } from '../SmartImage';

// Data constants for Timeline Therapy certification (A. Program Curriculum)
const timelineModules = [
  {
    num: "01",
    title: "Module 1",
    subtitle: "Accessing Your Time-Stream",
    desc: "Unlock the subconscious architecture of your personal time-stream. Learn how your mind represents the past, present, and future, and establish a clear, reliable connection with your unconscious mind.",
    icon: Search,
    station: "ACCESS STATION ✧"
  },
  {
    num: "02",
    title: "Module 2",
    subtitle: "Releasing Negative Emotions",
    desc: "Master the gentle, rapid release of major accumulated negative emotions—anger, sadness, fear, hurt, and guilt—at their absolute root cause, clearing decades of emotional weight in minutes.",
    icon: Hourglass,
    station: "RELEASE STATION ✧"
  },
  {
    num: "03",
    title: "Module 3",
    subtitle: "Dissolving Limiting Beliefs",
    desc: "Identify and permanently dissolve core limiting beliefs and subconscious decisions (e.g. 'I am not good enough', 'I cannot succeed') that hold you back from your ultimate potential.",
    icon: Sparkles,
    station: "DISSOLVING STATION ✧"
  },
  {
    num: "04",
    title: "Module 4",
    subtitle: "Present-Moment Integration",
    desc: "Somatic and conscious integration of key wisdom and learnings from past experiences, clearing emotional triggers and establishing true present-moment peace and mental clarity.",
    icon: RefreshCw,
    station: "INTEGRATION STATION ✧"
  },
  {
    num: "05",
    title: "Module 5",
    subtitle: "Conscious Future Creation",
    desc: "Step forward in time to design and insert specific, highly structured empowering goals into your future timeline. Program your subconscious mind to naturally pull you toward success.",
    icon: Star,
    station: "CREATION STATION ✧"
  },
  {
    num: "06",
    title: "Module 6",
    subtitle: "Sovereign Alignment & Empowerment",
    desc: "Anchor your newly aligned timeline permanently. Step into a state of absolute self-worth, emotional freedom, and sovereign empowerment, ready to create the beautiful future you desire.",
    icon: ShieldCheck,
    station: "EMPOWERMENT STATION ✧"
  }
];

// Learning Outcomes (B. What You Will Learn)
const learningOutcomes = [
  {
    title: "Understanding your personal timeline",
    desc: "Access and map the exact spatial orientation of how your subconscious mind stores memories across time.",
    icon: Compass
  },
  {
    title: "Releasing limiting beliefs",
    desc: "Permanently dismantle subconscious blocks, self-sabotage patterns, and beliefs of inadequacy or doubt.",
    icon: Zap
  },
  {
    title: "Healing emotional memories",
    desc: "Gently clear historical reservoirs of anger, sadness, fear, hurt, and guilt at their initial root events.",
    icon: Heart
  },
  {
    title: "Reframing past experiences",
    desc: "Extract core positive learnings and wisdom from negative events without having to re-experience the pain.",
    icon: Hourglass
  },
  {
    title: "Present-moment integration",
    desc: "Unify your energy and conscious focus to live fully with gratitude and presence in the here and now.",
    icon: Clock
  },
  {
    title: "Future pacing techniques",
    desc: "Construct and insert specific, clear, and highly motivating goals into your future subconscious landscape.",
    icon: Sparkles
  },
  {
    title: "Emotional resilience",
    desc: "Develop permanent self-regulation tools and core stability that remain unshakable during life storms.",
    icon: ShieldCheck
  },
  {
    title: "Personal empowerment",
    desc: "Take full ownership of your personal narrative, stepping into sovereign clarity, self-love, and life purpose.",
    icon: Award
  }
];

// Transformation Pillars (C. Your Transformation)
const transformationPillars = [
  {
    title: "Emotional Release",
    icon: ShieldAlert,
    colorTheme: {
      primary: "#4F7786",
      badgeBg: "bg-[#4F7786]/10",
      border: "border-[#4F7786]/15 hover:border-[#4F7786]/45",
      glow: "shadow-[0_8px_30px_rgba(79,119,134,0.03)] hover:shadow-[0_15px_40px_rgba(79,119,134,0.12)]",
      text: "text-[#4F7786]",
      gradient: "from-white to-[#FAF9F6] hover:to-[#4F7786]/10",
    },
    bgImage: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=600",
    items: [
      "Release Decades of Baggage: Dissolve anger, sadness, fear, hurt, and guilt completely from your timeline.",
      "End Self-Sabotage: Stop repeating the same painful relational and behavioral patterns from your past.",
      "Overcome Subconscious Fears: Eradicate anxiety and worry surrounding future events and uncertainty.",
      "Gentle Healing Method: Process emotional blocks rapidly and safely without re-living old traumas."
    ]
  },
  {
    title: "Subconscious Realignment",
    icon: ShieldCheck,
    colorTheme: {
      primary: "#7F9C87",
      badgeBg: "bg-[#7F9C87]/10",
      border: "border-[#7F9C87]/15 hover:border-[#7F9C87]/45",
      glow: "shadow-[0_8px_30px_rgba(127,156,135,0.03)] hover:shadow-[0_15px_40px_rgba(127,156,135,0.12)]",
      text: "text-[#7F9C87]",
      gradient: "from-white to-[#FAF9F6] hover:to-[#7F9C87]/10",
    },
    bgImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600",
    items: [
      "Uncover Golden Wisdom: Learn to extract positive insights from difficult times to fortify your self-worth.",
      "Time-Stream Harmonization: Align past, present, and future timelines to live in total congruence.",
      "Active Present Awareness: Anchor your mind in the present moment, free from historical regret.",
      "Positive Future Mapping: Safely place exciting, motivating goals into your upcoming timeline."
    ]
  },
  {
    title: "Sovereign Empowerment",
    icon: Award,
    colorTheme: {
      primary: "#c0942c",
      badgeBg: "bg-gold/10",
      border: "border-gold/25 hover:border-gold",
      glow: "shadow-[0_8px_30px_rgba(192,148,44,0.03)] hover:shadow-[0_15px_40px_rgba(192,148,44,0.12)]",
      text: "text-gold",
      gradient: "from-white to-[#FAF9F6] hover:to-gold/10",
    },
    bgImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600",
    items: [
      "Claim Your Ultimate Vision: Walk forward along your timeline with complete clarity of purpose and hope.",
      "Unshakable Self-Love: Develop high-contrast, robust confidence that remains stable in any environment.",
      "Client Breakthrough Tools: Gain accredited timeline skills to facilitate deep subconscious healing in others.",
      "Sovereign Presence: Carry a light, clear, and fully integrated presence that inspires transformation."
    ]
  }
];

interface TimelineCirculatingPillarProps {
  key?: React.Key;
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

function TimelineCirculatingPillar({ title, items, icon: PillarIcon, colorTheme, bgImage }: TimelineCirculatingPillarProps) {
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
    <div 
      className="bg-white/70 backdrop-blur-md border-2 border-gold/45 rounded-[2.2rem] p-6 lg:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(192,148,44,0.06)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden h-full min-h-[480px]"
    >
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
          <div className="flex items-center gap-4 border-b border-gold/25 pb-5">
            <div className={`w-12 h-12 rounded-full ${colorTheme.badgeBg} flex items-center justify-center ${colorTheme.text} flex-shrink-0 shadow-sm border border-gold/15`}>
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
                  className={`bg-gradient-to-b ${colorTheme.gradient} border border-gold/30 hover:border-gold shadow-sm rounded-2xl p-4.5 flex items-start gap-3.5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
                >
                  <div className={`mt-0.5 w-5 h-5 rounded-full ${colorTheme.badgeBg} flex items-center justify-center ${colorTheme.text} flex-shrink-0 border border-gold/15`}>
                    <CheckCircle className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div className="text-left leading-relaxed">
                    <p className="text-[11px] text-[#0A252C] font-extrabold uppercase tracking-wide">
                      {header}
                    </p>
                    <p className="text-[11px] text-black font-medium mt-0.5 leading-relaxed">
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

interface TimelinePageProps {
  onBack: () => void;
  onBook: (modalityName: string) => void;
}

export default function TimelinePage({ onBack, onBook }: TimelinePageProps) {
  const [downloading, setDownloading] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(0);
  const [hoveredDest, setHoveredDest] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleDownloadBrochure = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      generatePDF(
        "Timeline_Therapy_Brochure.pdf",
        "TIMELINE THERAPY CERTIFICATION PROGRAM",
        "Release the Past. Reclaim Your Present. Create Your Future.",
        "Become a Certified Timeline Therapy Practitioner & Transform Lives—Starting with Your Own\nRelease Emotional Baggage. Transform Limiting Beliefs. Create Lasting Change.\n\nOur past experiences shape how we think, feel, and respond to life. Unresolved emotions, limiting beliefs, and unconscious decisions often keep us stuck in repeating patterns without us even realizing it.\n\nThe Timeline Therapy Certification Program is a comprehensive, evidence-informed training designed to help you release negative emotions, transform limiting beliefs, heal emotional memories, and create lasting personal transformation using the powerful Timeline Therapy methodology.\n\nNo prior psychology, coaching, or therapy experience required.",
        [
          {
            title: "MODULE 1: Foundation of Timeline Therapy",
            text: "Understanding Your Emotional Timeline & How Your Past Shapes Your Present\n\nWHAT YOU WILL LEARN:",
            items: [
              "Introduction to Timeline Therapy methodology and how it works",
              "Understanding how emotional memories are stored in the subconscious mind",
              "Learning how past experiences create present emotional patterns",
              "Understanding the structure of unconscious learning and decision-making",
              "Identifying your personal timeline orientation",
              "Exploring the connection between past events, emotions, beliefs, and behaviours",
              "Understanding the principles of emotional healing and inner transformation",
              "YOUR TRANSFORMATION:",
              "Understand why certain situations trigger strong emotional reactions",
              "Identify where your recurring emotional patterns began",
              "Gain clarity on how past experiences influence your current choices",
              "Stop feeling controlled by unexplained emotions and reactions",
              "Develop awareness of your emotional patterns instead of repeating them unconsciously"
            ]
          },
          {
            title: "MODULE 2: Emotional Release Techniques",
            text: "Releasing Stored Emotional Pain & Creating Inner Freedom\n\nWHAT YOU WILL LEARN:",
            items: [
              "Guided release techniques for anger and emotional frustration",
              "Releasing fear, anxiety, and constant worry stored in the subconscious",
              "Healing deep sadness and unresolved emotional pain",
              "Removing guilt, shame, and self-blame patterns",
              "Processing emotionally charged memories safely",
              "Understanding how suppressed emotions affect thoughts and behaviours",
              "Learning techniques to create emotional relief and inner calm",
              "YOUR TRANSFORMATION:",
              "Release emotions you have been carrying for years",
              "Stop reacting from old emotional wounds",
              "Reduce the intensity of fear, anger, and anxiety triggers",
              "Feel emotionally lighter instead of mentally exhausted",
              "Create a healthier relationship with your past experiences"
            ]
          },
          {
            title: "MODULE 3: Limiting Beliefs & Internal Decisions",
            text: "Reprogramming the Beliefs That Keep You Stuck\n\nWHAT YOU WILL LEARN:",
            items: [
              "Identifying subconscious limiting beliefs affecting your confidence and choices",
              "Understanding unconscious decisions created from past experiences",
              "Recognizing beliefs like \"I am not enough\", \"I will fail\", or \"I am not worthy\"",
              "Replacing negative thought patterns with empowering beliefs",
              "Creating new internal meanings from past experiences",
              "Strengthening self-worth and personal identity",
              "YOUR TRANSFORMATION:",
              "Break free from beliefs that block your growth",
              "Stop self-sabotaging opportunities because of fear or doubt",
              "Build confidence without depending on external approval",
              "Change the way you see yourself and your abilities",
              "Develop a stronger, healthier self-image"
            ]
          },
          {
            title: "MODULE 4: Goal Creation Through Future Timeline",
            text: "Programming Your Mind for the Future You Desire\n\nWHAT YOU WILL LEARN:",
            items: [
              "Creating compelling and emotionally connected future goals",
              "Using timeline visualization to design your desired future",
              "Aligning goals with unconscious motivation",
              "Understanding how to create emotional commitment towards goals",
              "Learning future pacing techniques for success",
              "Identifying and overcoming internal resistance towards growth",
              "YOUR TRANSFORMATION:",
              "Create a clear vision instead of feeling lost or directionless",
              "Build emotional motivation towards your goals",
              "Reduce fear around taking new steps in life",
              "Train your mind to support your desired future",
              "Move from surviving your past to creating your future"
            ]
          },
          {
            title: "MODULE 5: Advanced Timeline Exploration",
            text: "Discovering the Root Cause Behind Repeated Emotional Patterns\n\nWHAT YOU WILL LEARN:",
            items: [
              "Understanding different types of emotional timelines",
              "Exploring your past, present, and future timeline",
              "Identifying root memories behind repeated emotional patterns",
              "Discovering emotional patterns formed across different life stages",
              "Recognizing repeated triggers in relationships, confidence, and decision-making",
              "Releasing unresolved emotional blocks",
              "Creating a healthier emotional timeline",
              "YOUR TRANSFORMATION:",
              "Understand why the same emotional situations keep repeating",
              "Identify hidden causes behind your fears and reactions",
              "Stop carrying old emotional patterns into new experiences",
              "Release triggers connected to past memories",
              "Create a new emotional foundation for healthier choices"
            ]
          },
          {
            title: "MODULE 6: Deep Timeline Healing",
            text: "Healing Unresolved Experiences Stored in the Subconscious\n\nWHAT YOU WILL LEARN:",
            items: [
              "Exploring unconscious emotional memories",
              "Healing painful memories from different timeline events",
              "Releasing emotional intensity attached to past experiences",
              "Transforming painful memories into empowering lessons",
              "Building emotional resilience through deep healing work",
              "YOUR TRANSFORMATION:",
              "Reduce the emotional impact of painful memories",
              "Stop being controlled by past experiences",
              "Feel safer and calmer when remembering difficult situations",
              "Transform pain into personal strength and wisdom",
              "Develop emotional stability during challenging moments"
            ]
          },
          {
            title: "MODULE 7: Timeline Integration & Emotional Healing",
            text: "Creating Lasting Change Through Inner Alignment\n\nWHAT YOU WILL LEARN:",
            items: [
              "Connecting past experiences with present behaviours",
              "Understanding how timelines influence decisions and reactions",
              "Integrating emotional healing into daily life",
              "Creating emotional freedom through timeline techniques",
              "Building awareness of thoughts, emotions, and responses",
              "Developing practices for maintaining inner transformation",
              "YOUR TRANSFORMATION:",
              "Respond consciously instead of reacting emotionally",
              "Break automatic patterns created by past experiences",
              "Feel more in control of your emotions and choices",
              "Apply healing techniques in real-life situations",
              "Create lasting emotional changes beyond the course"
            ]
          },
          {
            title: "MODULE 8: Lasting Transformation & Future Empowerment",
            text: "Building Your New Emotional Reality\n\nWHAT YOU WILL LEARN:",
            items: [
              "Creating a new emotional future",
              "Strengthening positive life patterns",
              "Replacing old reactions with healthier emotional responses",
              "Building emotional resilience for everyday challenges",
              "Maintaining long-term emotional healing practices",
              "Living with greater self-awareness and confidence",
              "YOUR TRANSFORMATION:",
              "Move forward without being defined by your past",
              "Maintain emotional balance during stressful situations",
              "Create healthier responses instead of repeating old patterns",
              "Feel confident in handling future challenges",
              "Build a life guided by awareness, choice, and emotional freedom"
            ]
          },
          {
            title: "FINAL PROGRAM TRANSFORMATION",
            text: "By the end of this Timeline Therapy Certification Program, learners will:",
            items: [
              "Understand how subconscious emotional memories influence thoughts, behaviours, and choices.",
              "Identify the root causes behind repeated emotional patterns and triggers.",
              "Release unresolved emotions connected to past experiences.",
              "Transform limiting beliefs and unconscious decisions affecting their life.",
              "Create a healthier emotional timeline aligned with their goals.",
              "Develop practical tools to regulate emotions and create inner stability.",
              "Build confidence, self-worth, and emotional resilience.",
              "Apply Timeline Therapy techniques for personal healing and professional growth.",
              "Move forward with clarity, emotional freedom, and a renewed sense of purpose."
            ]
          }
        ]
      );
    }, 1200);
  };

  const heroHighlights = [
    { text: "Heal Past Wounds", icon: Heart },
    { text: "Release Limiting Beliefs", icon: Zap },
    { text: "Rewrite Negative Patterns", icon: RefreshCw },
    { text: "Create Empowering Futures", icon: Star },
    { text: "Bring More Peace & Freedom", icon: Compass }
  ];

  return (
    <div className="bg-ivory text-ocean font-sans min-h-screen selection:bg-[#13112c]/10 selection:text-ocean timeline-page-root">
      
      {/* SCOPED FONT REGULATION & COSMIC INDIGO THEME STYLING */}
      <style dangerouslySetInnerHTML={{ __html: `
        .timeline-page-root .text-\\[9px\\] { font-size: 10.5px !important; }
        .timeline-page-root .text-\\[10px\\] { font-size: 12px !important; }
        .timeline-page-root .text-\\[11px\\] { font-size: 13px !important; }
        .timeline-page-root .text-xs { font-size: 14px !important; }
        .timeline-page-root .text-sm { font-size: 16px !important; }
        .timeline-page-root .text-base { font-size: 18px !important; }
        .timeline-page-root h1, .timeline-page-root h2, .timeline-page-root h3, .timeline-page-root h4 {
          line-height: 1.25 !important;
        }
        .timeline-page-root p, .timeline-page-root li, .timeline-page-root span {
          line-height: 1.6 !important;
        }
        @keyframes pathGlow {
          from { stroke-dashoffset: 40; }
          to { stroke-dashoffset: 0; }
        }
        .animate-path-glow {
          animation: pathGlow 1.5s linear infinite;
        }
        @keyframes butterflyRise {
          0% { transform: translateY(8px) scale(0.6); opacity: 0; }
          50% { opacity: 0.9; }
          100% { transform: translateY(-20px) scale(1.1); opacity: 0; }
        }
        .animate-butterfly-1 {
          animation: butterflyRise 2s ease-in-out infinite;
        }
        .animate-butterfly-2 {
          animation: butterflyRise 2.8s ease-in-out infinite 0.5s;
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(1.5deg); }
        }
        @keyframes sway-slow {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(1deg); }
        }
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 0.85; }
        }
      ` }} />

      {/* 1. NAVIGATION & BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-6 pt-6 relative z-10 flex flex-wrap justify-between items-center gap-4 border-b border-slate-200 pb-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-semibold text-sage hover:text-[#13112c] transition-colors uppercase tracking-widest cursor-pointer group"
          id="timeline-back-btn"
        >
          <ArrowLeft className="w-4 h-4 text-[#13112c] transition-transform group-hover:-translate-x-1" />
          Back to Sanctuary
        </button>
        <div className="flex items-center gap-2 text-[11px] text-ocean/70 uppercase tracking-wider font-semibold">
          <span className="hover:text-gold cursor-pointer" onClick={onBack}>Home</span>
          <span className="text-gold/40">&gt;</span>
          <span className="hover:text-gold cursor-pointer" onClick={onBack}>Healing Modalities</span>
          <span className="text-gold/40">&gt;</span>
          <span className="text-gold font-bold">Timeline Therapy</span>
        </div>
      </div>

      {/* 2. UNIFIED HERO BANNER WITH CELESTIAL STARRY THEME */}
      <section className="relative watercolor-bg bg-ivory text-ocean pt-12 pb-16 px-6 overflow-hidden">
        {/* Soft celestial/starfield particle layers */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, #4f46e5 1px, transparent 1px), radial-gradient(circle, #7c3aed 1px, transparent 1px)`,
          backgroundSize: '40px 40px, 60px 60px, 80px 80px',
          backgroundPosition: '0 0, 20px 30px, 40px 40px'
        }} />
        {/* Deep background glowing nebulae - Tweaked color palette to Cosmic Indigo/Violet */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ocean-dark leading-none">
                Timeline Therapy
              </h1>
            </div>

            {/* Elegant ornament line */}
            <div className="flex items-center gap-3 py-1 text-gold">
              <div className="h-[1px] w-12 bg-gold" />
              <Hourglass className="w-4 h-4 text-gold fill-none animate-pulse" />
              <div className="h-[1px] w-56 bg-gold" />
            </div>

            <p className="font-serif italic text-gold text-xl md:text-2xl lg:text-3xl font-light tracking-wide leading-snug">
              "Release the past that is no longer serving you. Live fully in the present and consciously design a beautiful future."
            </p>

            {/* Badges block - Two per row clean grid matching ref */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 py-6 border-t border-b border-gold/30">
              {[
                { text: "Gentle & Powerful Healing Technique", icon: Sparkles },
                { text: "Explore Your Personal Timeline", icon: Compass },
                { text: "Create Positive Future Outcomes", icon: Hourglass },
                { text: "Safe, Sacred & Judgement-Free", icon: ShieldCheck }
              ].map((badge, bIdx) => (
                <div 
                  key={bIdx} 
                  className="flex items-center gap-3.5 p-2 bg-transparent transition-all duration-300 group/hero-badge"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 text-gold shadow-sm group-hover/hero-badge:scale-105 group-hover/hero-badge:bg-gold/15 transition-all duration-300">
                    <badge.icon className="w-4.5 h-4.5 stroke-[1.8]" />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-ocean-dark tracking-wide leading-snug group-hover/hero-badge:text-gold transition-colors duration-300">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Horizontally aligned CTA buttons on a single line with equal height */}
            <div className="flex flex-row items-center gap-4 pt-2 whitespace-nowrap">
              <button
                onClick={() => onBook('Timeline Therapy')}
                className="h-[52px] px-8 bg-gradient-to-r from-[#18153b] to-[#13112c] hover:from-gold hover:to-gold-light text-cream hover:text-[#18153b] border border-gold/35 hover:border-gold text-xs font-bold tracking-widest rounded-xl shadow-lg transition-all duration-300 uppercase flex items-center justify-center gap-2 group cursor-pointer"
                id="timeline-enroll-btn"
              >
                <span>Enroll Now</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={handleDownloadBrochure}
                disabled={downloading}
                className="h-[52px] px-8 bg-white border border-[#18153b] text-ocean hover:bg-slate-50 text-xs font-bold tracking-[0.15em] uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md disabled:opacity-50"
                id="timeline-download-brochure-btn"
              >
                <Download className="w-4 h-4 text-[#18153b]" />
                {downloading ? 'Downloading...' : 'Download Brochure'}
              </button>
            </div>
          </div>

          {/* Hero Right: Rotating Roman clock face portal inside Arched Portal Container */}
          <div className="lg:col-span-7 flex justify-center items-center relative min-h-[500px] py-6 overflow-visible">
            
            {/* Scoped CSS animations for landscape portal elements */}
            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes landscape-drift {
                0% { transform: translate(-3%, -1%) scale(1.02); }
                50% { transform: translate(3%, 1%) scale(1.05); }
                100% { transform: translate(-3%, -1%) scale(1.02); }
              }
              @keyframes landscape-sway {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(1.2deg) skewX(0.5deg); }
              }
              @keyframes landscape-shimmer {
                0%, 100% { opacity: 0.35; filter: drop-shadow(0 0 2px rgba(251, 191, 36, 0.3)); }
                50% { opacity: 0.9; filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.75)); }
              }
              @keyframes landscape-pulse-glow {
                0%, 100% { transform: scale(0.95); opacity: 0.55; }
                50% { transform: scale(1.1); opacity: 0.9; }
              }
              @keyframes landscape-particle-rise {
                0% { transform: translateY(15px) translateX(0) scale(0.6); opacity: 0; }
                20% { opacity: 0.6; }
                80% { opacity: 0.6; }
                100% { transform: translateY(-35px) translateX(8px) scale(0.3); opacity: 0; }
              }
              @keyframes landscape-bird-fly {
                0% { transform: translate(-20px, 15px) scale(0.5); opacity: 0; }
                15% { opacity: 0.7; }
                85% { opacity: 0.7; }
                100% { transform: translate(30px, -20px) scale(0.3); opacity: 0; }
              }
              @keyframes landscape-ripple {
                0% { stroke-dashoffset: 0; opacity: 0.4; }
                50% { opacity: 0.7; }
                100% { stroke-dashoffset: -20; opacity: 0.4; }
              }
            `}} />

            {/* Arched Portal Container */}
            <div className="w-full max-w-[450px] aspect-[4/5] rounded-t-[16rem] rounded-b-[4rem] border-2 border-gold/30 shadow-[0_25px_60px_rgba(192,148,44,0.15)] relative overflow-hidden bg-gradient-to-b from-[#1c1a3b] via-[#100e2e] to-[#080718] group/portal animate-fade-in">
              
              {/* Thin Inner Nested Arched Gold Border */}
              <div className="absolute inset-2.5 rounded-t-[15.5rem] rounded-b-[3.5rem] border border-gold/15 pointer-events-none z-30" />

              {/* Landscape Layer 1: Time-aligned celestial background with Rotating Clock Face Overlay */}
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <SmartImage 
                  id="timeline.time_stream"
                  defaultSrc="https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?auto=format&fit=crop&q=80&w=800"
                  alt="Pathway winding towards a celestial time-stream alignment"
                  className="absolute inset-0 w-full h-full object-cover scale-110 object-bottom opacity-40 mix-blend-screen"
                  referrerPolicy="no-referrer"
                />

                {/* Starry glowing layers */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-950/40" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,163,67,0.15)_0%,transparent_60%)]" />

                {/* Rotating Clock Face Overlay */}
                <div className="absolute inset-4 rounded-full border border-gold/30 flex items-center justify-center animate-[spin_320s_linear_infinite] z-10">
                  <div className="absolute inset-2 rounded-full border border-dashed border-gold/15" />
                  <div className="absolute inset-4 rounded-full border border-gold/10" />

                  {/* Roman Numerals */}
                  <div className="absolute inset-0 text-gold font-serif text-sm font-semibold select-none pointer-events-none opacity-85 drop-shadow-[0_0_5px_rgba(212,163,67,0.6)]">
                    <span className="absolute top-4 left-1/2 -translate-x-1/2">XII</span>
                    <span className="absolute top-[13%] right-[26%]">I</span>
                    <span className="absolute top-[29%] right-[11%]">II</span>
                    <span className="absolute top-1/2 right-4 -translate-y-1/2">III</span>
                    <span className="absolute bottom-[29%] right-[11%]">IV</span>
                    <span className="absolute bottom-[13%] right-[26%]">V</span>
                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2">VI</span>
                    <span className="absolute bottom-[13%] left-[26%]">VII</span>
                    <span className="absolute bottom-[29%] left-[11%]">VIII</span>
                    <span className="absolute top-1/2 left-4 -translate-y-1/2">IX</span>
                    <span className="absolute top-[29%] left-[11%]">X</span>
                    <span className="absolute top-[13%] left-[26%]">XI</span>
                  </div>
                </div>

                {/* Center glowing sun/star */}
                <div className="absolute w-24 h-24 bg-gold/10 rounded-full blur-xl pointer-events-none mix-blend-screen animate-pulse z-20" />
                <div className="absolute w-12 h-12 bg-white/20 rounded-full blur-md pointer-events-none z-20" />
              </div>

              {/* Landscape Layer 7: Seated Person in deep time-alignment meditation */}
              <div className="absolute left-[38%] bottom-[24%] w-[25%] h-[20%] z-25 pointer-events-none">
                {/* Solid rock platform projecting into lake */}
                <svg className="absolute bottom-[-15px] left-[-20%] w-[140%] h-[120%] text-[#252243]" viewBox="0 0 60 40" fill="currentColor">
                  <path d="M0,40 L0,22 Q20,15 40,25 Q50,28 60,35 L60,40 Z" />
                  <path d="M10,25 Q25,20 38,26" stroke="rgba(192,148,44,0.4)" strokeWidth="0.5" fill="none" />
                </svg>

                {/* Seated Person Silhouetted from Behind */}
                <svg className="absolute bottom-[10px] left-[15%] w-[70%] h-[100%] text-[#14122c]" viewBox="0 0 40 50" fill="currentColor">
                  <circle cx="20" cy="12" r="4.5" />
                  <path d="M18.5,16 L21.5,16 L21,20 L19,20 Z" />
                  <path d="M11,22 Q20,19 29,22 Q32,32 30,42 L10,42 Q8,32 11,22 Z" />
                  <path d="M6,42 Q20,36 34,42 Q37,45 34,48 Q20,49 6,48 Q3,45 6,42 Z" />
                  <path d="M10,24 Q7,32 10,40 Q14,40 12,34" />
                  <path d="M30,24 Q33,32 30,40 Q26,40 28,34" />
                </svg>
              </div>

              {/* Landscape Layer 9: Rising particles & drifting stars */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute bottom-[10%] right-[22%] w-1.5 h-1.5 rounded-full bg-purple-200" style={{ animation: 'landscape-particle-rise 6s infinite ease-out' }} />
                <div className="absolute bottom-[14%] right-[16%] w-1 h-1 rounded-full bg-indigo-200" style={{ animation: 'landscape-particle-rise 5s infinite ease-out', animationDelay: '1.5s' }} />
                <div className="absolute bottom-[8%] right-[28%] w-1.5 h-1.5 rounded-full bg-amber-200" style={{ animation: 'landscape-particle-rise 7s infinite ease-out', animationDelay: '3s' }} />
                <div className="absolute bottom-[12%] right-[12%] w-1 h-1 rounded-full bg-yellow-100" style={{ animation: 'landscape-particle-rise 5.5s infinite ease-out', animationDelay: '4.5s' }} />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. DEFINITION / WHAT IS TIMELINE THERAPY SECTION (Rooted & Growing Art Styles! Tweaked for Time Alignment!) */}
      <section className="py-16 md:py-20 bg-white border-t border-[#dfdbc9]/30 relative overflow-hidden" id="what-is-timeline">
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Rooted in the Time-Stream Card */}
            <div className="lg:col-span-3 flex flex-col relative">
              <div className="bg-[#FAF8F5] border-2 border-gold/45 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full justify-start relative overflow-hidden group">
                <div className="absolute inset-2 border border-gold/15 rounded-xl pointer-events-none" />
                
                {/* Artistic Graphic Window: Sacred path winding through lush, peaceful forest (Original Image content) */}
                <div className="w-full aspect-[4/3] rounded-t-xl rounded-b-md border border-gold/25 overflow-hidden bg-gradient-to-b from-[#eae5f5]/25 to-[#faf8f5] relative">
                  <svg className="w-full h-full" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="time-sky" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="#fef08a" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#f5f3ff" />
                      </linearGradient>
                      <linearGradient id="time-path" x1="50%" y1="100%" x2="50%" y2="0%">
                        <stop offset="0%" stopColor="#d4af37" />
                        <stop offset="100%" stopColor="#ebd7b2" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient id="time-trunk" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#312e81" />
                        <stop offset="100%" stopColor="#1e1b4b" />
                      </linearGradient>
                    </defs>

                    <rect width="200" height="160" fill="url(#time-sky)" />
                    
                    {/* Concentric time rings */}
                    <circle cx="100" cy="140" r="100" stroke="#ebd7b2" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.5" />
                    <circle cx="100" cy="140" r="70" stroke="#ebd7b2" strokeWidth="0.5" opacity="0.4" />
                    <circle cx="100" cy="140" r="40" stroke="#ebd7b2" strokeWidth="0.75" strokeDasharray="1 4" opacity="0.6" />

                    {/* Winding path (original imagery representation) */}
                    <path d="M100 160 C110 130, 90 100, 105 80 C115 65, 120 50, 118 35" stroke="url(#time-path)" strokeWidth="8" strokeLinecap="round" fill="none" />
                    <path d="M100 160 C110 130, 90 100, 105 80 C115 65, 120 50, 118 35" stroke="#fff" strokeWidth="1" strokeDasharray="4 4" strokeLinecap="round" fill="none" opacity="0.6" />

                    {/* Ancient portal gateway columns */}
                    <rect x="80" y="30" width="4" height="40" fill="url(#time-trunk)" rx="1" />
                    <rect x="126" y="30" width="4" height="40" fill="url(#time-trunk)" rx="1" />
                    <path d="M76 30 L134 30 L128 26 L82 26 Z" fill="#d4af37" />

                    {/* Glowing stars */}
                    <circle cx="50" cy="40" r="1.5" fill="#fef08a" className="animate-pulse" />
                    <circle cx="150" cy="50" r="1" fill="#fef08a" />
                    <circle cx="70" cy="90" r="1.2" fill="#fff" className="animate-pulse" />
                  </svg>
                </div>

                {/* Left Card Content - Exact original descriptive boundaries */}
                <div className="mt-4 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg md:text-xl text-[#0A252C] font-bold tracking-tight">
                      Explore Your Path
                    </h3>
                    <div className="h-[1px] w-12 bg-gold/50 mx-auto my-2" />
                    <p className="text-xs md:text-sm text-[#0A252C] leading-relaxed font-semibold">
                      Timeline Therapy allows you to explore your personal timeline to identify blocks and release patterns, creating a gentle yet powerful foundation for emotional freedom.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column: Detailed Description */}
            <div className="lg:col-span-6 flex flex-col justify-center text-center space-y-6 px-4 lg:px-8">
              <div className="space-y-3">
                <h2 className="font-serif text-3xl md:text-4xl text-ocean-dark font-medium tracking-tight">
                  What is Timeline Therapy?
                </h2>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[1px] w-12 bg-gold/60" />
                  <Hourglass className="w-5 h-5 text-gold fill-none" />
                  <div className="h-[1px] w-12 bg-gold/60" />
                </div>
              </div>

              <div className="text-sm md:text-base text-[#0A252C] font-semibold leading-relaxed max-w-2xl mx-auto space-y-4 text-center">
                <p>
                  Timeline Therapy is a gentle yet powerful technique that helps you explore your personal timeline – past, present, and future – to identify and release blocks, traumas, and negative patterns. It empowers you to change your past perceptions and create a future aligned with your highest potential.
                </p>
              </div>

              {/* Row of 5 Circled Badges - Redesigned with high contrast labels */}
              <div className="grid grid-cols-5 gap-1 pt-6 border-t border-gold-light/20 max-w-lg mx-auto w-full">
                {[
                  { label: "Past Healing", icon: Heart },
                  { label: "Present Awareness", icon: Clock },
                  { label: "Future Creation", icon: Sparkles },
                  { label: "Emotional Freedom", icon: Leaf },
                  { label: "Empowerment & Clarity", icon: ShieldCheck }
                ].map((badge, bIdx) => (
                  <div key={bIdx} className="flex flex-col items-center text-center group cursor-default">
                    <div className="w-11 h-11 md:w-14 md:h-14 rounded-full border border-gold/45 flex items-center justify-center bg-gold/5 hover:border-gold hover:bg-gold/15 transition-all duration-300 shadow-[0_0_8px_rgba(212,163,67,0.05)] relative flex-shrink-0">
                      <badge.icon className="w-4 h-4 md:w-5 md:h-5 text-gold group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs md:text-sm font-bold tracking-wide text-[#0A252C] mt-2.5 group-hover:text-gold transition-colors duration-300 leading-tight">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Quotes Card */}
            <div className="lg:col-span-3 flex flex-col relative">
              <div className="bg-gradient-to-br from-[#FCFAF5] via-[#F5EFE0] to-[#EBE2CD] border-2 border-gold/45 rounded-2xl p-6 text-center shadow-md w-full relative overflow-hidden flex flex-col justify-between h-full min-h-[340px]">
                
                {/* Quotation Icon SVG */}
                <div className="flex justify-center pt-2">
                  <svg className="w-8 h-8 text-gold/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote Content */}
                <div className="my-auto py-4">
                  <p className="font-serif text-sm md:text-base text-[#0A252C] font-bold leading-relaxed italic">
                    "Your timeline is not set in stone. <br />
                    You have the power to heal your story <br />
                    and create a future you love."
                  </p>
                </div>

                {/* Bottom lineart lotus flower ornament */}
                <div className="flex flex-col items-center gap-2 pb-2">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path d="M12 21c-1.5-3-4.5-5-4.5-8.5s2-5.5 4.5-8.5c2.5 3 4.5 5 4.5 8.5s-3 5.5-4.5 8.5Z" />
                    <path d="M12 21c-3-2-6-4.5-6-7.5s2.5-4.5 4.5-6.5" />
                    <path d="M12 21c3-2 6-4.5 6-7.5s-2.5-4.5-4.5-6.5" />
                    <path d="M3 18c3.5-1 7-1.5 9-1.5s5.5.5 9 1.5" />
                  </svg>
                  <div className="h-[1px] w-8 bg-gold/40" />
                  <span className="text-[9px] text-[#0A252C] font-bold uppercase tracking-[0.25em]">Sovereign Alignment</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Curved Divider at the Bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[45px] text-ivory" viewBox="0 0 1200 120" fill="currentColor" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,18,84.13,26.86,133.32,41.9,183.54,54.71,234.33,63.47,263.26,68.45,292.48,64,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* 4. CURRICULUM, LEARNING OUTCOMES, AND YOUR TRANSFORMATION SECTIONS (NLP / Relationship Mastery alignment!) */}
      <section className="py-16 md:py-20 px-6 bg-ivory border-t border-[#dfdbc9]/30 relative z-10" id="protocol">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* A. PROGRAM CURRICULUM */}
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean-dark font-semibold tracking-tight">
                Program Curriculum
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-[1px] bg-gold" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <div className="w-10 h-[1px] bg-gold" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {timelineModules.map((mod, idx) => {
                const IconComponent = mod.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white border-2 border-gold/25 hover:border-gold rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl pointer-events-none group-hover:bg-gold/10 transition-all duration-300" />
                    
                    <div className="space-y-4">
                      {/* Badge / Module Header */}
                      <div className="flex justify-between items-center border-b border-gold/15 pb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                            <IconComponent className="w-5 h-5 stroke-[1.5]" />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider text-sage">
                            {mod.title}
                          </span>
                        </div>
                        <span className="font-serif text-3xl font-extrabold text-gold/20 group-hover:text-gold/45 transition-colors duration-300">
                          {mod.num}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="space-y-2 text-left">
                        <h4 className="font-serif text-lg font-bold text-ocean-dark group-hover:text-gold transition-colors duration-300">
                          {mod.subtitle}
                        </h4>
                        <p className="text-xs md:text-sm text-[#0A252C] leading-relaxed font-medium">
                          {mod.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gold/15 mt-6 text-left">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#0A252C]">
                        {mod.station}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* B. WHAT YOU WILL LEARN */}
          <div className="space-y-12">
            <div className="text-center space-y-3">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean-dark font-semibold tracking-tight">
                What You Will Learn
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-[1px] bg-gold" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <div className="w-10 h-[1px] bg-gold" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningOutcomes.map((outcome, idx) => {
                const IconComponent = outcome.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-[#FAF8F5] border-2 border-gold/25 hover:border-gold rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 text-left group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <IconComponent className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-serif text-sm font-bold text-ocean-dark group-hover:text-gold transition-colors duration-300 leading-snug">
                        {outcome.title}
                      </h4>
                      <p className="text-xs text-[#0A252C] font-semibold leading-relaxed">
                        {outcome.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* C. YOUR TRANSFORMATION */}
          <div className="space-y-12 pb-6">
            <div className="text-center space-y-3">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean-dark font-semibold tracking-tight">
                Your Transformation
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-[1px] bg-gold" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <div className="w-10 h-[1px] bg-gold" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {transformationPillars.map((pillar, idx) => (
                <TimelineCirculatingPillar 
                  key={idx}
                  title={pillar.title}
                  items={pillar.items}
                  icon={pillar.icon}
                  colorTheme={pillar.colorTheme}
                  bgImage={pillar.bgImage}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. TARGET HEALING AREAS VS BENEFITS (GRID ROW OF TWO CARDS) */}
      <section className="py-16 md:py-20 bg-white border-t border-[#dfdbc9]/30">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Card 1: What You Can Heal With Timeline Therapy (Left Card, 7 cols) */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#faf9f5] via-[#f7f5ec] to-[#f1ebd9] border-2 border-gold/45 rounded-[2.5rem] p-8 shadow-md flex flex-col justify-between text-left relative overflow-hidden group">
              
              {/* Subtle background glows */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-ocean-dark font-bold tracking-tight group-hover:text-gold transition-colors">
                  What You Can Heal With Timeline Therapy
                </h3>
                {/* Accent Line */}
                <div className="h-[1px] w-20 bg-gold/60 my-4" />
              </div>

              {/* List + Image Split subgrid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-4">
                
                {/* 8 List Items - 7 columns */}
                <div className="md:col-span-7 space-y-3.5">
                  {[
                    "Childhood wounds & emotional trauma",
                    "Limiting beliefs & negative patterns",
                    "Relationship & family challenges",
                    "Fear, phobias & anxiety",
                    "Self-worth & confidence issues",
                    "Health related emotional blocks",
                    "Career & abundance blocks",
                    "Future worry & uncertainty"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3.5 group/item">
                      {/* Gold Check Circle */}
                      <div className="w-5 h-5 rounded-full bg-[#fcf9f2] border-2 border-gold flex items-center justify-center flex-shrink-0 text-gold shadow-sm group-hover/item:scale-105 transition-all">
                        <CheckCircle className="w-3.5 h-3.5 fill-gold/10" strokeWidth={2.5} />
                      </div>
                      <span className="text-xs md:text-sm font-bold text-[#0A252C] group-hover/item:text-gold transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Celestial Portrait Image - 5 columns */}
                <div className="md:col-span-5 flex justify-center items-center">
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-full md:aspect-square max-w-[240px] rounded-full border-2 border-gold/40 shadow-[0_0_20px_rgba(212,163,67,0.25)] overflow-hidden bg-white p-1">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                      <SmartImage
                        id="timeline.pocket_watch"
                        defaultSrc="https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=600"
                        alt="An antique golden pocket watch representing the gentle, aligned flow of timeline therapy"
                        className="w-full h-full object-cover scale-110 group-hover:scale-115 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#13112c]/30 via-transparent to-transparent mix-blend-multiply" />
                      
                      {/* Mandala light circle outline simulation overlay */}
                      <div className="absolute inset-0 border border-white/20 rounded-full animate-[spin_60s_linear_infinite]" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 2: Benefits of Timeline Therapy (Right Card, 5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#faf9f5] via-[#f7f5ec] to-[#f1ebd9] border-2 border-gold/45 rounded-[2.5rem] p-8 shadow-md flex flex-col justify-between text-center relative overflow-hidden group">
              
              {/* Subtle background glows */}
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-ocean-dark font-bold tracking-tight group-hover:text-gold transition-colors">
                  Benefits of Timeline Therapy
                </h3>
                {/* Accent Line */}
                <div className="h-[1px] w-20 bg-gold/60 my-4 mx-auto" />
              </div>

              {/* 3x2 Grid of benefits with circular photo-icons - Tweaked colors to Lavender/Indigo Theme */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 my-auto">
                {[
                  { 
                    label: "Emotional Healing", 
                    icon: Heart,
                    bgUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=150',
                    tint: 'from-pink-100/50 to-rose-100/50 border-rose-200/40'
                  },
                  { 
                    label: "Freedom from Past Baggage", 
                    icon: Unlock,
                    bgUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=150',
                    tint: 'from-indigo-100/50 to-purple-100/50 border-purple-200/40'
                  },
                  { 
                    label: "Better Relationships", 
                    icon: Users,
                    bgUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=150',
                    tint: 'from-violet-100/50 to-indigo-100/50 border-indigo-200/40'
                  },
                  { 
                    label: "Increased Self-Love", 
                    icon: Smile,
                    bgUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=150',
                    tint: 'from-amber-100/50 to-orange-100/50 border-orange-200/40'
                  },
                  { 
                    label: "Clearer Vision for the Future", 
                    icon: Eye,
                    bgUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=150',
                    tint: 'from-indigo-100/50 to-blue-100/50 border-blue-200/40'
                  },
                  { 
                    label: "Personal Empowerment", 
                    icon: Zap,
                    bgUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=150',
                    tint: 'from-emerald-100/50 to-teal-100/50 border-emerald-200/40'
                  }
                ].map((item, bIdx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={bIdx} className="flex flex-col items-center group/benefit cursor-default">
                      {/* Photo + Icon Circle */}
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gold/45 flex items-center justify-center relative overflow-hidden bg-white shadow-sm hover:scale-105 hover:border-gold hover:shadow-md transition-all duration-300">
                        <SmartImage
                          id={`timeline.benefit_${bIdx + 1}`}
                          defaultSrc={item.bgUrl}
                          alt={item.label}
                          className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-95"
                          referrerPolicy="no-referrer"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.tint} mix-blend-multiply`} />
                        <div className="relative z-10 text-gold group-hover/benefit:text-gold-light group-hover/benefit:scale-110 transition-transform duration-300">
                          <IconComp className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                      </div>
                      <span className="text-xs md:text-sm font-extrabold tracking-wide text-[#0A252C] mt-3 leading-tight text-center max-w-[140px] group-hover/benefit:text-gold transition-colors duration-300">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION BANNER (SOFT LIGHT SACRED THEME) */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#FAF9F5] via-white to-[#FAF9F5] text-ocean relative overflow-hidden border-t border-[#dfdbc9]/30">
        {/* Soft subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-soft/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 px-6 space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A252C] tracking-tight leading-tight uppercase max-w-4xl mx-auto drop-shadow-xs">
            Your Past Does Not Define You. Reclaim Your Story Today.
          </h2>
          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#0A252C] max-w-2xl mx-auto leading-relaxed font-light">
            "Step forward along your winding path with absolute hope, personal transformation, emotional freedom, and life alignment."
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => onBook('Timeline Therapy')}
              className="px-10 py-5 bg-[#549E9E] hover:bg-[#438888] text-white font-bold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-full shadow-[0_4px_20px_rgba(79,157,166,0.25)] hover:shadow-[0_8px_30px_rgba(79,157,166,0.45)] transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300 border border-teal-light/30 cursor-pointer"
              id="timeline-final-cta-btn"
            >
              Book A Timeline Session
            </button>
            <button
              onClick={onBack}
              className="px-8 py-5 border border-ocean/20 hover:bg-ocean/5 text-ocean/80 hover:text-ocean rounded-full text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer"
            >
              Back to Sanctuary
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
