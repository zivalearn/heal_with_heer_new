import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Brain, Award, Sparkles, CheckCircle, Clock, Users, BookOpen, 
  Download, Heart, Shield, Compass, Globe, Check, ChevronRight, GraduationCap, 
  Briefcase, Moon, Smile, HelpCircle, RefreshCw
} from 'lucide-react';
import { generatePDF } from '../../lib/pdfHelper';

const hypnoModules = [
  {
    num: "01",
    title: "MODULE 1",
    subtitle: "Understanding Your Mind & Emotions",
    shortDesc: "Demystify subconscious patterns, emotional conditioning, and the mechanics of subconscious habit formation.",
    learnings: [
      "The conscious vs. subconscious mind models",
      "Subconscious programming and early memory prints",
      "Emotional triggers and survival response wiring",
      "Identifying self-sabotaging mental scripts"
    ],
    transformation: [
      "Gain absolute clarity on your automatic behaviors",
      "Stop blaming yourself for repetitive habits",
      "Build a safe foundation for emotional curiosity",
      "Identify your primary limiting subconscious beliefs"
    ],
    icon: Brain
  },
  {
    num: "02",
    title: "MODULE 2",
    subtitle: "Entering the Healing State with Hypnosis",
    shortDesc: "Master the induction of deep, serene alpha and theta brainwave states to access subconscious memory securely.",
    learnings: [
      "The neuroscience of deep physical relaxation",
      "Alpha & Theta brainwave states in clinical therapy",
      "Progressive muscle relaxation (PMR) inductions",
      "Formulating safe, positive subconscious suggestion scripts"
    ],
    transformation: [
      "Induce profound, self-guided mental relaxation easily",
      "Calm an overactive nervous system in minutes",
      "Learn to bypass logical resistance to positive change",
      "Establish deep self-trust and inner listening"
    ],
    icon: Sparkles
  },
  {
    num: "03",
    title: "MODULE 3",
    subtitle: "Healing Emotional Wounds with EFT",
    shortDesc: "Integrate ancient acupressure with modern emotional exposure to clear stored distress and stress hormones.",
    learnings: [
      "The acupressure meridian system & physical cells",
      "The basic EFT tapping recipe (setup and sequences)",
      "Targeting specific emotional charges and physical pain",
      "The scientific mechanics of lowering stress hormones"
    ],
    transformation: [
      "Relieve sudden stress and panic responses instantly",
      "Clear intense emotional charges from stressful memories",
      "Experience immediate lightness in your physical body",
      "Build a practical, lifelong daily emotional reset tool"
    ],
    icon: Compass
  },
  {
    num: "04",
    title: "MODULE 4",
    subtitle: "Healing Your Past",
    shortDesc: "Gently access and resolve negative memory blocks, child triggers, and stored emotional burdens.",
    learnings: [
      "Identifying root childhood memories and core wounds",
      "Inner child reconciliation and somatic reparenting",
      "Reframing past experiences under light hypnotic states",
      "Releasing stored anger, guilt, shame, and grief"
    ],
    transformation: [
      "Reclaim safety from early childhood triggers",
      "Forgive yourself and release heavy emotional baggage",
      "Reintegrate fragmented parts of your younger self",
      "Feel a deep, structural surge in baseline self-worth"
    ],
    icon: Heart
  },
  {
    num: "05",
    title: "MODULE 5",
    subtitle: "Reprogramming Your Subconscious Mind",
    shortDesc: "Design and implement custom self-hypnosis and mental imagery scripts to install empowering beliefs.",
    learnings: [
      "Designing highly customized hypnotherapy scripts",
      "The laws of subconscious belief acceptance",
      "Using mental imagery and metaphor for rapid rewiring",
      "Creating professional, high-impact hypnosis recordings"
    ],
    transformation: [
      "Program your subconscious with daily positive belief loops",
      "Align your deepest self-identity with your life goals",
      "Dissolve persistent imposter syndrome completely",
      "Experience deep, positive morning motivation and focus"
    ],
    icon: Award
  },
  {
    num: "06",
    title: "MODULE 6",
    subtitle: "EFT for Trauma, Anxiety & Emotional Healing",
    shortDesc: "Utilize advanced tapping strategies to process complex emotional triggers, grief, and traumatic symptoms.",
    learnings: [
      "Advanced EFT: The Movie Technique and Telling the Story",
      "Approaching painful trauma safely without re-traumatizing",
      "Overcoming creative and financial abundance blocks",
      "Somatic tapping for chronic physical symptoms and tension"
    ],
    transformation: [
      "Neutralize heavy emotional triggers confidently",
      "Release old abundance and success blocks effortlessly",
      "Relieve somatic physical tension stored in joints/muscles",
      "Restore calm and centered focus during stressful triggers"
    ],
    icon: Shield
  },
  {
    num: "07",
    title: "MODULE 7",
    subtitle: "Deep Healing with Hypnotherapy & EFT",
    shortDesc: "Combine subconscious reprogramming with physical meridian tapping for profound integrative healing.",
    learnings: [
      "The synergy of hypnotic suggestions and somatic tapping",
      "Designing dual-modality somatic healing protocols",
      "Client intake profiling, boundary setting, and ethics",
      "Structuring safe, highly effective 1-on-1 private sessions"
    ],
    transformation: [
      "Master a comprehensive, unified mind-body healing method",
      "Develop complete confidence in guiding others safely",
      "Gain professional clarity on client ethics and boundaries",
      "Establish a robust, compassionate practitioner presence"
    ],
    icon: Users
  },
  {
    num: "08",
    title: "MODULE 8",
    subtitle: "Creating Your New Life",
    shortDesc: "Establish a permanent, custom integration plan for lifelong personal peace and practitioner success.",
    learnings: [
      "Designing your personalized, daily integration routine",
      "Setting long-term personal and professional growth goals",
      "Building a heart-centered wellness practice from scratch",
      "Navigating continuing education and somatic supervision"
    ],
    transformation: [
      "Step forward with a crystal-clear, inspiring life roadmap",
      "Embody a deeply grounded, resilient, and authentic self",
      "Graduate as a certified, heart-centered practitioner",
      "Live with a profound sense of purpose and emotional freedom"
    ],
    icon: Smile
  }
];

interface HypnotherapyEFTPageProps {
  onBack: () => void;
  onBook: (serviceName: string) => void;
}

export default function HypnotherapyEFTPage({ onBack, onBook }: HypnotherapyEFTPageProps) {
  const [activeModule, setActiveModule] = useState<number>(0);
  const [hoveredDest, setHoveredDest] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [downloading, setDownloading] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleDownloadBrochure = () => {
    setDownloading(true);
    setTimeout(() => {
      generatePDF(
        "Hypnotherapy-EFT-Certification-Syllabus.pdf",
        "HYPNOTHERAPY & EFT CERTIFICATION PROGRAM",
        "Relax. Heal. Reprogram. Transform.",
        "Become a Certified Hypnotherapy & EFT Practitioner and Create Lasting Transformation—Starting with Yourself\nHeal Your Mind. Release Emotional Blocks. Transform Your Life.\n\nYour subconscious mind controls your beliefs, emotions, habits, and behaviours. Many emotional struggles, fears, limiting beliefs, and unhealthy patterns are rooted deep within the subconscious and often remain unchanged despite conscious effort.\n\nThe Hypnotherapy & EFT Certification Program is a comprehensive, practical training designed to help you access the subconscious mind, release emotional blocks, heal past experiences, overcome limiting beliefs, and create lasting emotional wellbeing using the powerful combination of Clinical Hypnotherapy and Emotional Freedom Technique (EFT).\n\nNo prior experience in hypnotherapy, psychology, or counselling is required.",
        [
          {
            title: "MODULE 1: Understanding Your Mind & Emotions",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Understanding your conscious and subconscious mind",
              "Why you think, feel, and react the way you do",
              "The science behind Hypnotherapy and EFT",
              "Understanding stress, trauma, and emotional patterns",
              "Preparing your mind for healing",
              "Creating a strong foundation for transformation",
              "YOUR TRANSFORMATION:",
              "Understand the hidden reasons behind your emotions and reactions",
              "Become aware of patterns affecting your mental and emotional well-being",
              "Develop a deeper connection with yourself",
              "Prepare your mind for powerful healing and change"
            ]
          },
          {
            title: "MODULE 2: Entering the Healing State with Hypnosis",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Understanding the hypnotic state",
              "Relaxing your mind and body deeply",
              "Connecting with your subconscious mind",
              "Learning guided self-hypnosis techniques",
              "Releasing stress through hypnosis",
              "Accepting positive subconscious suggestions",
              "Creating a safe inner space for healing",
              "Practicing self-hypnosis confidently",
              "YOUR TRANSFORMATION:",
              "Learn to calm your mind and release daily stress",
              "Access a deeper state of relaxation and inner peace",
              "Build the ability to support your own emotional healing",
              "Create positive changes through subconscious reprogramming"
            ]
          },
          {
            title: "MODULE 3: Healing Emotional Wounds with EFT",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Understanding Emotional Freedom Technique (EFT)",
              "Learning the complete EFT tapping sequence",
              "Releasing stress and anxiety through tapping",
              "Healing fear, guilt, shame, and anger",
              "Reducing emotional overwhelm",
              "Feeling emotionally lighter and calmer",
              "Using EFT as a daily healing practice",
              "Combining breathwork with EFT",
              "YOUR TRANSFORMATION:",
              "Release emotional heaviness stored within you",
              "Reduce feelings of stress, anxiety, and overwhelm",
              "Learn a practical tool to manage emotions anytime",
              "Create a calmer and more balanced emotional state"
            ]
          },
          {
            title: "MODULE 4: Healing Your Past",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Understanding how your past shapes your present",
              "Healing childhood emotional wounds",
              "Releasing painful memories through hypnosis",
              "Using EFT to heal past experiences",
              "Letting go of emotional baggage",
              "Healing your inner child",
              "Replacing pain with emotional peace",
              "Creating freedom from the past",
              "YOUR TRANSFORMATION:",
              "Release the emotional impact of painful experiences",
              "Stop carrying old wounds into your present life",
              "Heal unresolved emotions from the past",
              "Create more peace, acceptance, and emotional freedom"
            ]
          },
          {
            title: "MODULE 5: Reprogramming Your Subconscious Mind",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Finding limiting beliefs",
              "Removing negative subconscious programming",
              "Replacing self-doubt with confidence",
              "Building self-worth and self-love",
              "Creating positive habits",
              "Programming your mind for success",
              "Visualising your desired future",
              "Creating lasting positive change",
              "YOUR TRANSFORMATION:",
              "Break free from beliefs that hold you back",
              "Develop stronger confidence and self-belief",
              "Create healthier thought patterns and habits",
              "Build a mindset aligned with your goals"
            ]
          },
          {
            title: "MODULE 6: EFT for Trauma, Anxiety & Emotional Healing",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "EFT for trauma healing",
              "Tapping for anxiety and overthinking",
              "Healing emotional triggers",
              "Releasing fears and phobias",
              "Letting go of guilt and shame",
              "Healing grief and loss",
              "Managing daily emotional stress",
              "Restoring emotional balance",
              "YOUR TRANSFORMATION:",
              "Learn to manage emotional triggers effectively",
              "Reduce anxiety, fear, and overwhelming thoughts",
              "Release emotional pain connected to difficult experiences",
              "Develop greater emotional stability and resilience"
            ]
          },
          {
            title: "MODULE 7: Deep Healing with Hypnotherapy & EFT",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Combining Hypnotherapy and EFT together",
              "Healing deep emotional patterns",
              "Releasing subconscious emotional blocks",
              "Healing relationship wounds",
              "Healing emotional triggers at the root",
              "Strengthening inner peace",
              "Building emotional resilience",
              "Deepening your healing journey",
              "YOUR TRANSFORMATION:",
              "Work on deeper emotional patterns affecting your life",
              "Release blocks that prevent personal growth",
              "Create a stronger sense of inner peace and emotional safety",
              "Build resilience to handle life challenges better"
            ]
          },
          {
            title: "MODULE 8: Creating Your New Life",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Letting go of old emotional patterns",
              "Creating a positive subconscious blueprint",
              "Strengthening confidence and self-belief",
              "Building healthy emotional habits",
              "Maintaining lifelong emotional healing",
              "Using Hypnotherapy and EFT for everyday challenges",
              "Creating a peaceful and balanced life",
              "Living with clarity, happiness, and purpose",
              "YOUR TRANSFORMATION:",
              "Move forward without being controlled by past emotions",
              "Create healthier patterns for your future",
              "Maintain emotional balance in daily life",
              "Build a life with greater confidence, peace, and self-awareness"
            ]
          },
          {
            title: "FINAL PROGRAM TRANSFORMATION",
            text: "By the end of this Hypnotherapy & EFT Self-Healing Program, learners will:",
            items: [
              "Understand how their mind, emotions, and subconscious patterns influence their life.",
              "Release emotional blocks, stress, and limiting patterns.",
              "Heal past experiences and develop greater emotional balance.",
              "Build confidence, self-worth, and inner peace.",
              "Learn practical Hypnotherapy and EFT tools for lifelong self-healing.",
              "Create healthier emotional patterns and a more empowered life."
            ]
          }
        ]
      );
      setDownloading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-ivory text-ocean-dark font-sans selection:bg-teal-light/50 relative overflow-hidden hypno-page-root">
      
      {/* SCOPED FONT & COMPONENT REGULATION */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hypno-page-root .text-\\[9px\\] { font-size: 10.5px !important; }
        .hypno-page-root .text-\\[10px\\] { font-size: 12px !important; }
        .hypno-page-root .text-\\[11px\\] { font-size: 13px !important; }
        .hypno-page-root .text-xs { font-size: 14px !important; }
        .hypno-page-root .text-sm { font-size: 16px !important; }
        .hypno-page-root .text-base { font-size: 18px !important; }
        .hypno-page-root h1, .hypno-page-root h2, .hypno-page-root h3, .hypno-page-root h4 {
          line-height: 1.25 !important;
        }
        .hypno-page-root p, .hypno-page-root li, .hypno-page-root span {
          line-height: 1.6 !important;
        }
        @keyframes pathGlow {
          from { stroke-dashoffset: 40; }
          to { stroke-dashoffset: 0; }
        }
        .animate-path-glow {
          animation: pathGlow 1.5s linear infinite;
        }
        .handmade-paper-premium {
          background-color: #fdfcf7;
          background-image: 
            radial-gradient(rgba(10, 61, 84, 0.015) 1px, transparent 0),
            radial-gradient(rgba(79, 157, 166, 0.01) 1.5px, transparent 0);
          background-size: 14px 14px, 42px 42px;
          background-position: 0 0, 7px 7px;
        }
        .watercolor-wash-premium {
          background: radial-gradient(circle at 15% 15%, rgba(244, 235, 208, 0.25) 0%, transparent 40%),
                      radial-gradient(circle at 85% 20%, rgba(143, 168, 155, 0.2) 0%, transparent 45%),
                      radial-gradient(circle at 50% 80%, rgba(79, 157, 166, 0.16) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(22, 94, 125, 0.12) 0%, transparent 45%),
                      radial-gradient(circle at 20% 70%, rgba(244, 235, 208, 0.14) 0%, transparent 40%);
        }
      ` }} />

      {/* 1. NAVIGATION & BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-6 pt-6 relative z-10 flex flex-wrap justify-between items-center gap-4 border-b border-slate-200 pb-4">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-[#0a3d54] uppercase hover:text-teal-soft transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Sanctuary
        </button>
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-sage uppercase">
          <span>Sanctuary</span>
          <span>/</span>
          <span>Modalities</span>
          <span>/</span>
          <span className="text-[#0a3d54] font-bold">Hypnotherapy & EFT</span>
        </div>
      </div>

      {/* 2. UNIFIED HERO BANNER WITH CELESTIAL STARRY THEME (Ocean/Teal Palette) */}
      <section className="relative pt-12 pb-16 px-6 md:px-12 lg:px-16 overflow-hidden flex items-center justify-center">
        {/* Shimmering celestial gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6f4f6]/40 via-white to-ivory z-0" />
        <div className="absolute top-10 left-10 w-80 h-80 bg-teal-soft/10 rounded-full blur-[80px] pointer-events-none animate-float-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-ocean-light/5 rounded-full blur-[90px] pointer-events-none animate-float-medium" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#c0942c] uppercase block">
                HYPNOTHERAPY & EFT LANDING PAGE
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ocean-dark leading-none">
                Hypnotherapy & EFT Healing
              </h1>
            </div>

            <div className="flex items-center gap-3 py-1">
              <div className="h-[1px] w-12 bg-gold" />
              <Sparkles className="w-4 h-4 text-[#c0942c] fill-current animate-pulse" />
              <div className="h-[1px] w-56 bg-gold" />
            </div>

            <div className="text-base md:text-lg text-[#0A252C] leading-relaxed max-w-xl font-light space-y-4">
              <p className="font-serif italic text-gold text-2xl md:text-3xl font-light tracking-wide leading-snug">
                Heal your mind. Release emotional blocks. Transform your life.
              </p>
            </div>

            {/* 5 Highlights Icons under hero text matching Trauma page */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 pt-6 pb-6 border-t border-b border-gold/35">
              {[
                { icon: Globe, label: "Accredited" },
                { icon: Brain, label: "Subconscious" },
                { icon: Compass, label: "EFT Meridian" },
                { icon: Award, label: "Clinical Hypnosis" },
                { icon: Sparkles, label: "Somatic Self" }
              ].map((hl, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                  <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center text-[#c0942c] mb-2 group-hover:scale-110 transition-transform duration-300">
                    <hl.icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-[0.15em] text-ocean-dark uppercase">
                    {hl.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap md:flex-nowrap items-center gap-4 pt-4">
              <button 
                onClick={() => onBook('Hypnotherapy & EFT Certification Program')}
                className="px-8 py-4 bg-[#0a3d54] hover:bg-gold text-white hover:text-ocean-dark border border-gold/35 hover:border-gold text-xs font-bold tracking-widest rounded-xl shadow-lg transition-all duration-300 uppercase flex items-center gap-2 group cursor-pointer whitespace-nowrap"
              >
                <span>Enroll Now</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={handleDownloadBrochure}
                disabled={downloading}
                className="px-8 py-4 bg-white border border-[#0a3d54] text-ocean hover:bg-slate-50 text-xs font-bold tracking-[0.15em] uppercase rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-[#0a3d54]" />
                {downloading ? 'Downloading...' : 'Download Brochure'}
              </button>
            </div>
          </div>

          {/* Hero Right - Sunrise Landscape Arched Portal (Themed Blue/Teal) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="w-full max-w-[350px] aspect-[4/5] rounded-[6rem] border-2 border-teal-soft p-4 relative overflow-hidden bg-[#072a3a] shadow-2xl group transition-transform duration-500 hover:scale-[1.02]">
              {/* Shimmering celestial gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#165e7d]/30 via-[#0a3d54]/60 to-[#072a3a] z-0" />
              
              {/* Circular ripples in background */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full border border-teal-soft/10 animate-pulse" />
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full border border-teal-soft/20 animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Abstract Moon */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-tr from-teal-light to-[#faf7f2]/90 shadow-[0_0_25px_rgba(189,224,229,0.5)] z-10" />
              
              {/* Layered landscape silhouettes representing emotional release */}
              <svg className="absolute bottom-0 inset-x-0 h-40 w-full z-10 text-[#0a3d54] fill-current" viewBox="0 0 200 120" preserveAspectRatio="none">
                <path d="M0 80 C60 70, 140 90, 200 80 L200 120 L0 120 Z" opacity="0.6" />
                <path d="M0 90 Q50 82 100 92 T200 88 L200 120 L0 120 Z" fill="#072a3a" />
              </svg>
              
              {/* Seated meditator silhouette with energetic meridian rays */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-teal-light animate-ping absolute" />
                  <Sparkles className="w-6 h-6 text-teal-soft relative z-10 drop-shadow-[0_0_8px_rgba(79,157,166,0.8)]" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[#faf7f2]/80 mt-2">SUBCONSCIOUS ALIGNMENT</span>
              </div>
            </div>
          </div>

        </div>
      </section>      {/* 3. DEFINITION / WHAT IS HYPNOTHERAPY & EFT SECTION (Rooted & Growing Art Styles!) */}
      <section className="py-16 md:py-20 bg-white border-t border-[#dfdbc9]/30 relative overflow-hidden" id="what-is-it">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: What is Hypnotherapy? */}
            <div className="lg:col-span-3 flex flex-col relative">
              <div className="bg-gradient-to-b from-[#fdfcf7] to-[#faf7f2] border border-teal-soft/30 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full justify-start relative overflow-hidden group">
                <div className="absolute inset-2 border border-teal-soft/10 rounded-xl pointer-events-none" />
                
                {/* Visual Icon Header */}
                <div className="w-12 h-12 rounded-full bg-teal-soft/10 border border-teal-soft/20 flex items-center justify-center text-teal-soft mb-4">
                  <Brain className="w-6 h-6" />
                </div>

                <div className="text-left space-y-3">
                  <h3 className="font-serif text-lg md:text-xl text-[#0a3d54] font-semibold tracking-tight">
                    What is Hypnotherapy?
                  </h3>
                  <div className="h-[1px] w-12 bg-teal-soft/40" />
                  <p className="text-sm text-[#0A252C] font-light leading-[1.75] text-justify" style={{ textAlign: 'justify' }}>
                    Clinical Hypnotherapy accesses the powerful subconscious mind under deep relaxation. It allows you to release childhood memories, change habits, silence your self-criticism, and reprogram healthy empowering beliefs directly at their root.
                  </p>
                  <ul className="space-y-1.5 pt-2">
                    {[
                      'Access the power of the subconscious mind',
                      'Heal past wounds and unresolved memories',
                      'Break deep-rooted habits & self-sabotage',
                      'Realign your inner patterns for peace & confidence'
                    ].map((pt, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[10px] text-ocean-dark font-medium">
                        <Check className="w-3.5 h-3.5 text-teal-soft shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Middle Column: Unified Subconscious Path */}
            <div className="lg:col-span-6 flex flex-col justify-center text-center space-y-6 px-4 lg:px-8">
              <div className="space-y-3">
                <h2 className="font-serif text-3xl md:text-4xl text-ocean-dark font-semibold tracking-tight">
                  What is Hypnotherapy & EFT?
                </h2>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[1px] w-12 bg-[#c0942c]/60" />
                  <Moon className="w-5 h-5 text-[#c0942c] fill-none" />
                  <div className="h-[1px] w-12 bg-[#c0942c]/60" />
                </div>
              </div>

              <div className="text-base md:text-base text-[#0A252C] font-normal leading-[1.75] max-w-2xl mx-auto space-y-4">
                <p className="text-justify" style={{ textAlign: 'justify' }}>
                  Clinical Hypnotherapy and Emotional Freedom Technique (EFT) work hand-in-hand to release deep-rooted patterns and stored trauma.
                </p>
                <p className="text-justify" style={{ textAlign: 'justify' }}>
                  Instead of merely managing symptoms or talking about memories, this dual-modality certification addresses root emotional wounding, childhood patterns, and somatic blocks. We reconstruct basic emotional safety so the mind and body can naturally shift back into calm, resilience, and genuine self-worth.
                </p>
                <p className="text-justify" style={{ textAlign: 'justify' }}>
                  By understanding how subconscious programming and stress response mechanisms function, learners develop profound practical tools to regulate themselves and ethically support clients through highly transformative life changes.
                </p>
              </div>
            </div>

            {/* Right Column: What is EFT Tapping? */}
            <div className="lg:col-span-3 flex flex-col relative">
              <div className="bg-gradient-to-b from-[#fdfcf7] to-[#faf7f2] border border-teal-soft/30 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full justify-start relative overflow-hidden group">
                <div className="absolute inset-2 border border-teal-soft/10 rounded-xl pointer-events-none" />
                
                {/* Visual Icon Header */}
                <div className="w-12 h-12 rounded-full bg-teal-soft/10 border border-teal-soft/20 flex items-center justify-center text-teal-soft mb-4">
                  <Compass className="w-6 h-6" />
                </div>

                <div className="text-left space-y-3">
                  <h3 className="font-serif text-lg md:text-xl text-[#0a3d54] font-semibold tracking-tight">
                    What is EFT Tapping?
                  </h3>
                  <div className="h-[1px] w-12 bg-teal-soft/40" />
                  <p className="text-sm text-[#0A252C] font-light leading-[1.75] text-justify" style={{ textAlign: 'justify' }}>
                    EFT (Emotional Freedom Technique) couples ancient acupressure with modern psychology. By tapping gently on specific meridian endpoints while focusing on emotional triggers, it dissolves stress, anxiety, and traumatic charges rapidly.
                  </p>
                  <ul className="space-y-1.5 pt-2">
                    {[
                      'Release daily stress, anxiety & panic blocks',
                      'Clear trauma memories stored in the physical body',
                      'Balance energy meridians & lower cortisol levels',
                      'Learn a lifelong self-healing tool for emotional wellness'
                    ].map((pt, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[10px] text-ocean-dark font-medium">
                        <Check className="w-3.5 h-3.5 text-teal-soft shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHO IS THIS PROGRAM FOR? (Beautiful stone arches with branching tree!) */}
      <section className="py-16 md:py-20 bg-white border-t border-[#dfdbc9]/30 relative overflow-hidden" id="who-is-it-for">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="font-serif text-3xl md:text-5xl text-ocean-dark font-medium tracking-tight">
              Who Is This Program For?
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-[#c0942c]/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c0942c]" />
              <div className="w-12 h-[1px] bg-[#c0942c]/40" />
            </div>
          </div>

          {/* DESKTOP VIEW WITH TREE MAP */}
          <div className="hidden md:flex flex-col items-center justify-center max-w-5xl mx-auto pb-12 relative">
            <svg viewBox="0 0 800 220" className="w-full max-w-4xl h-auto text-[#0a3d54] fill-none stroke-current" strokeLinecap="round">
              {/* Organic Trunk */}
              <path d="M 400 220 C 400 180, 400 150, 400 130" strokeWidth="6" className="opacity-85" />
              <path d="M 395 220 C 395 180, 400 160, 390 140" strokeWidth="3" className="opacity-60" />
              <path d="M 405 220 C 405 180, 400 160, 410 140" strokeWidth="3" className="opacity-60" />
              
              {/* Branching left outer */}
              <path d="M 400 130 C 370 110, 180 110, 100 65" strokeWidth="4" className="opacity-75" />
              {/* Branching left inner */}
              <path d="M 400 130 C 380 115, 330 110, 300 65" strokeWidth="3.5" className="opacity-75" />
              {/* Branching right inner */}
              <path d="M 400 130 C 420 115, 470 110, 500 65" strokeWidth="3.5" className="opacity-75" />
              {/* Branching right outer */}
              <path d="M 400 130 C 430 110, 620 110, 700 65" strokeWidth="4" className="opacity-75" />
              
              {/* Minor decorative foliage lines */}
              <path d="M 120 75 C 105 70, 95 55, 100 45" strokeWidth="1.5" strokeDasharray="2 2" className="text-teal-soft/60" />
              <path d="M 310 75 C 295 70, 285 55, 290 45" strokeWidth="1.5" strokeDasharray="2 2" className="text-teal-soft/60" />
              <path d="M 490 75 C 505 70, 515 55, 510 45" strokeWidth="1.5" strokeDasharray="2 2" className="text-teal-soft/60" />
              <path d="M 680 75 C 695 70, 705 55, 700 45" strokeWidth="1.5" strokeDasharray="2 2" className="text-teal-soft/60" />
            </svg>

            {/* Absolute positioned circle markers, labels ABOVE, descriptions BELOW */}
            <div className="absolute top-0 left-0 w-full grid grid-cols-4 px-[1%] lg:px-[3%]">
              {[
                { label: "Personal Healing", icon: Heart, color: "border-rose-300 text-rose-500 bg-rose-50/50", subtitle: "Individuals", desc: "Individuals seeking deep self-healing, emotional release, and subconscious reprogramming." },
                { label: "Coaches & Therapists", icon: Brain, color: "border-ocean-light text-ocean bg-ocean-light/10", subtitle: "Professionals & Coaches", desc: "Life coaches, NLP practitioners, and psychologists seeking rapid subconscious breakthrough structures." },
                { label: "Wellness Guides", icon: Sparkles, color: "border-teal-soft text-teal-soft bg-teal-soft/10", subtitle: "Yoga & Energy Teachers", desc: "Holistic guides, yoga educators, and energy practitioners looking to add clinical somatic and hypnotic tools." },
                { label: "Educators & Leaders", icon: GraduationCap, color: "border-indigo-300 text-indigo-500 bg-indigo-50/50", subtitle: "Mentors & Directors", desc: "Teachers, corporate mentors, and leaders looking to cultivate high emotional resilience in teams." }
              ].map((circle, idx) => {
                const IconComp = circle.icon;
                return (
                  <div key={idx} className="flex flex-col items-center">
                    <span className="text-sm lg:text-base xl:text-lg font-serif font-bold text-ocean-dark mb-4 text-center px-1 block leading-tight min-h-[56px] flex items-end justify-center">
                      {circle.label}
                    </span>
                    
                    <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 ${circle.color} flex items-center justify-center shadow-md backdrop-blur-md z-10 hover:scale-110 transition-transform duration-300`}>
                      <IconComp className="w-5 h-5 lg:w-7 lg:h-7" />
                    </div>

                    <div className="mt-5 text-center px-2 max-w-[220px]">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage block mb-1">
                        {circle.subtitle}
                      </span>
                      <p className="text-[11px] lg:text-xs text-ocean-dark/85 leading-relaxed font-light">
                        {circle.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE VIEW WITH COMPACT VERTICAL LIST */}
          <div className="md:hidden space-y-6 px-4 mt-6">
            {[
              { label: "Personal Healing", icon: Heart, color: "border-rose-300 text-rose-500 bg-rose-50/50", subtitle: "Individuals", desc: "Individuals seeking deep self-healing, emotional release, and subconscious reprogramming." },
              { label: "Coaches & Therapists", icon: Brain, color: "border-ocean-light text-ocean bg-ocean-light/10", subtitle: "Professionals & Coaches", desc: "Life coaches, NLP practitioners, and psychologists seeking rapid subconscious breakthrough structures." },
              { label: "Wellness Guides", icon: Sparkles, color: "border-teal-soft text-teal-soft bg-teal-soft/10", subtitle: "Yoga & Energy Teachers", desc: "Holistic guides, yoga educators, and energy practitioners looking to add clinical somatic and hypnotic tools." },
              { label: "Educators & Leaders", icon: GraduationCap, color: "border-indigo-300 text-indigo-500 bg-indigo-50/50", subtitle: "Mentors & Directors", desc: "Teachers, corporate mentors, and leaders looking to cultivate high emotional resilience in teams." }
            ].map((circle, idx) => {
              const IconComp = circle.icon;
              return (
                <div key={idx} className="bg-gradient-to-b from-[#fdfcf7] to-[#faf7f2] border border-slate-200 p-5 rounded-2xl flex gap-4 items-start shadow-sm">
                  <div className={`w-12 h-12 rounded-full border-2 ${circle.color} flex items-center justify-center shrink-0`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="space-y-1 text-left">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage block">
                      {circle.subtitle}
                    </span>
                    <h4 className="font-serif text-base font-bold text-ocean-dark">
                      {circle.label}
                    </h4>
                    <p className="text-xs text-ocean-dark/85 leading-relaxed font-light">
                      {circle.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE THIS CERTIFICATION? */}
      <section className="py-16 md:py-20 relative overflow-hidden watercolor-wash-premium handmade-paper-premium border-t border-[#dfdbc9]/30">
        
        {/* Soft Background blur halos of Cream, Muted Sage, Soft Slate Blue, and Light Teal */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#8fa89b]/10 blur-[130px] pointer-events-none animate-float-slow" />
        <div className="absolute bottom-1/4 right-10 w-[26rem] h-[26rem] rounded-full bg-[#5A8795]/8 blur-[150px] pointer-events-none animate-float-medium" style={{ animationDelay: '2s' }} />
        <div className="absolute top-10 right-1/4 w-80 h-80 rounded-full bg-teal-soft/6 blur-[110px] pointer-events-none animate-float-sway" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-10 left-1/3 w-[30rem] h-[30rem] rounded-full bg-[#f4ebd0]/20 blur-[140px] pointer-events-none animate-float-slow" style={{ animationDelay: '1s' }} />

        {/* Faint Botanical Illustrations in empty space backgrounds */}
        {/* Lotus Outline - Left side */}
        <div className="absolute top-16 left-6 lg:left-12 opacity-[0.04] text-[#8fa89b] pointer-events-none select-none z-0">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.6" className="w-56 h-56 lg:w-72 lg:h-72">
            <path d="M50 85 C45 70, 30 65, 20 50 C30 50, 45 60, 50 85 Z" />
            <path d="M50 85 C55 70, 70 65, 80 50 C70 50, 55 60, 50 85 Z" />
            <path d="M50 85 C40 60, 45 40, 50 15 C55 40, 60 60, 50 85 Z" />
            <path d="M50 85 C35 70, 25 75, 10 70 C20 68, 35 75, 50 85 Z" />
            <path d="M50 85 C65 70, 75 75, 90 70 C80 68, 65 75, 50 85 Z" />
          </svg>
        </div>

        {/* Eucalyptus Branch - Right side */}
        <div className="absolute top-1/3 right-4 lg:right-8 opacity-[0.04] text-[#5A8795] pointer-events-none select-none z-0">
          <svg viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="0.6" className="w-48 h-96 lg:w-60 lg:h-[480px]">
            <path d="M50 180 Q65 100 35 20" />
            <ellipse cx="38" cy="140" rx="14" ry="9" transform="rotate(-15 38 140)" />
            <ellipse cx="62" cy="120" rx="16" ry="10" transform="rotate(20 62 120)" />
            <ellipse cx="28" cy="95" rx="12" ry="8" transform="rotate(-30 28 95)" />
            <ellipse cx="54" cy="75" rx="15" ry="9" transform="rotate(10 54 75)" />
            <ellipse cx="26" cy="45" rx="10" ry="7" transform="rotate(-25 26 45)" />
            <ellipse cx="42" cy="25" rx="9" ry="6" transform="rotate(5 42 25)" />
          </svg>
        </div>

        {/* Dragonfly - Upper Center Right */}
        <div className="absolute top-24 right-1/4 opacity-[0.05] text-[#c0942c] pointer-events-none select-none z-0 animate-float-sway">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.6" className="w-20 h-20 lg:w-28 lg:h-28">
            <line x1="50" y1="20" x2="50" y2="80" />
            <ellipse cx="50" cy="18" rx="2" ry="1.5" />
            <path d="M50 30 C30 10, 10 25, 50 30 Z" />
            <path d="M50 30 C70 10, 90 25, 50 30 Z" />
            <path d="M50 40 C35 25, 20 38, 50 40 Z" />
            <path d="M50 40 C65 25, 80 38, 50 40 Z" />
          </svg>
        </div>

        {/* Mandala fragment - Bottom Left */}
        <div className="absolute bottom-12 left-8 lg:left-16 opacity-[0.03] text-[#8fa89b] pointer-events-none select-none z-0 animate-spin-slow">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-72 h-72 lg:w-80 lg:h-80">
            <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="35" />
            <circle cx="50" cy="50" r="25" strokeDasharray="1.5 1.5" />
            <circle cx="50" cy="50" r="15" />
            <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" />
            <path d="M50 5 C45 20, 35 20, 50 35 C65 20, 55 20, 50 5 Z" transform="rotate(0 50 50)" />
            <path d="M50 5 C45 20, 35 20, 50 35 C65 20, 55 20, 50 5 Z" transform="rotate(45 50 50)" />
            <path d="M50 5 C45 20, 35 20, 50 35 C65 20, 55 20, 50 5 Z" transform="rotate(90 50 50)" />
            <path d="M50 5 C45 20, 35 20, 50 35 C65 20, 55 20, 50 5 Z" transform="rotate(135 50 50)" />
            <path d="M50 5 C45 20, 35 20, 50 35 C65 20, 55 20, 50 5 Z" transform="rotate(180 50 50)" />
            <path d="M50 5 C45 20, 35 20, 50 35 C65 20, 55 20, 50 5 Z" transform="rotate(225 50 50)" />
            <path d="M50 5 C45 20, 35 20, 50 35 C65 20, 55 20, 50 5 Z" transform="rotate(270 50 50)" />
            <path d="M50 5 C45 20, 35 20, 50 35 C65 20, 55 20, 50 5 Z" transform="rotate(315 50 50)" />
          </svg>
        </div>

        {/* Flowing Vines - Bottom Right */}
        <div className="absolute bottom-6 right-8 lg:right-20 opacity-[0.035] text-[#8fa89b] pointer-events-none select-none z-0">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.6" className="w-56 h-56 lg:w-64 lg:h-64">
            <path d="M10 90 Q30 80 50 50 T90 10" />
            <path d="M25 78 C22 75 22 70 28 68 C34 66 32 75 25 78 Z" fill="currentColor" />
            <path d="M42 58 C39 55 39 50 45 48 C51 46 49 55 42 58 Z" fill="currentColor" />
            <path d="M62 38 C59 35 59 30 65 28 C71 26 69 35 62 38 Z" fill="currentColor" />
            <path d="M78 22 C75 19 75 14 81 12 C87 10 85 19 78 22 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          
          <h2 className="font-serif text-3xl md:text-5xl text-ocean font-normal tracking-tight mb-4">
            Why Choose This Certification?
          </h2>
          
          {/* Luxurious Golden Lotus Motif Botanical Divider */}
          <div className="flex items-center justify-center gap-4 mb-16 relative">
            <div className="h-[1px] w-24 md:w-36 bg-gradient-to-r from-transparent to-[#c0942c]/40" />
            
            <div className="relative flex items-center justify-center text-[#c0942c] w-12 h-8">
              <svg className="w-6 h-6 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 22 C8 17 4 15 2 12 C4 11 8 13 12 18 C16 13 20 11 22 12 C20 15 16 17 12 22 Z" />
                <path d="M12 22 C10 16 10 10 12 4 C14 10 14 16 12 22 Z" />
                <path d="M12 22 C9 14 11 11 7 8 C11 10 12 13 12 22 Z" />
                <path d="M12 22 C15 14 13 11 17 8 C13 10 12 13 12 22 Z" />
              </svg>
              <div className="absolute top-0 w-1 h-1 rounded-full bg-[#c0942c] animate-ping" />
            </div>

            <div className="h-[1px] w-24 md:w-36 bg-gradient-to-l from-transparent to-[#c0942c]/40" />
          </div>

          <div className="relative pt-4 pb-2 max-w-5xl mx-auto">
            
            {/* Elegant SVG dotted connection lines in background */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block text-teal-soft/20 z-0" xmlns="http://www.w3.org/2000/svg">
              {/* Horizontal Connecting Lines */}
              <line x1="16.6%" y1="16.6%" x2="50%" y2="16.6%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse" style={{ animationDuration: '3s' }} />
              <line x1="50%" y1="16.6%" x2="83.3%" y2="16.6%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse" style={{ animationDuration: '3s' }} />
              <line x1="16.6%" y1="50%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse" style={{ animationDuration: '3.5s' }} />
              <line x1="50%" y1="50%" x2="83.3%" y2="50%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse" style={{ animationDuration: '3.5s' }} />
              <line x1="16.6%" y1="83.3%" x2="50%" y2="83.3%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse" style={{ animationDuration: '4s' }} />
              <line x1="50%" y1="83.3%" x2="83.3%" y2="83.3%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse" style={{ animationDuration: '4s' }} />

              {/* Vertical Connecting Lines */}
              <line x1="16.6%" y1="16.6%" x2="16.6%" y2="50%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse" style={{ animationDuration: '3.2s' }} />
              <line x1="16.6%" y1="50%" x2="16.6%" y2="83.3%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse" style={{ animationDuration: '3.2s' }} />
              <line x1="50%" y1="16.6%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse" style={{ animationDuration: '3.7s' }} />
              <line x1="50%" y1="50%" x2="50%" y2="83.3%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse" style={{ animationDuration: '3.7s' }} />
              <line x1="83.3%" y1="16.6%" x2="83.3%" y2="50%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse" style={{ animationDuration: '4.2s' }} />
              <line x1="83.3%" y1="50%" x2="83.3%" y2="83.3%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse" style={{ animationDuration: '4.2s' }} />
            </svg>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {[
                { title: "Internationally Designed Curriculum", desc: "A world-class curriculum adhering to global standards in clinical integrative healing.", icon: Globe },
                { title: "Clinical Hypnotherapy & EFT Integration", desc: "Professional scripts of Clinical Hypnotherapy integrated with EFT, specially designed for exponential emotional release.", icon: RefreshCw },
                { title: "Subconscious Reprogramming Framework", desc: "Learn direct methods to bypass logical resistance and rewire core self-talk structures.", icon: Brain },
                { title: "Guided Self-Healing & Practical Exercises", desc: "A focus on practical somatic experience—transforming your own life first before guiding others.", icon: Heart },
                { title: "Lifetime Access to Learning Materials", desc: "Revisit high-fidelity recordings, modules, and scripts anytime you need client support.", icon: Clock },
                { title: "Downloadable Workbooks & Resources", desc: "Comprehensive clinical workbook sets, practice logs, and client profiling templates.", icon: Download },
                { title: "Guided Hypnosis & EFT Practice Sessions", desc: "Experience deep relaxation and meridian release loops led live by certification instructors.", icon: Sparkles },
                { title: "Certificate of Completion", desc: "Receive an accredited practitioner certificate valid for professional integration globally.", icon: Award },
                { title: "Suitable for Personal & Professional Use", desc: "Whether you want to heal yourself or help others heal, this course is perfect for you.", icon: Users }
              ].map((prop, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#FAF9F5]/90 border border-[#4f9da6]/20 hover:border-[#4f9da6]/60 rounded-[2.2rem] p-8 md:p-9 pb-10 flex flex-col items-center justify-start text-center group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_50px_-15px_rgba(10,61,84,0.08)] relative z-10 backdrop-blur-md min-h-[260px] cursor-default"
                >
                  {/* Watercolor Halo & Decorative Sparkles/Lotus petals */}
                  <div className="relative mb-6 flex items-center justify-center w-24 h-24 shrink-0">
                    {/* Soft watercolor halo */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#8fa89b]/30 via-[#4f9da6]/15 to-[#165e7d]/25 rounded-full blur-md opacity-90 group-hover:scale-110 transition-transform duration-500" />
                    
                    {/* Inner background glow */}
                    <div className="absolute inset-1.5 rounded-full bg-white/70 border border-[#bde0e5]/40 shadow-inner flex items-center justify-center z-10" />
                    
                    {/* Decorative elements around the halo */}
                    <div className="absolute inset-0 pointer-events-none z-10">
                      {/* Tiny lotus petal outline */}
                      <svg className="absolute -top-1 -left-1 w-5 h-5 text-[#8fa89b]/40 rotate-[-15deg]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2 C8 6 4 8 2 10 C4 11 8 13 10 18 C12 13 16 11 18 10 C16 8 12 6 10 2 Z" />
                      </svg>
                      {/* Gentle sparkle */}
                      <svg className="absolute -bottom-1 -right-1 w-4.5 h-4.5 text-[#c0942c]/50 group-hover:scale-125 transition-transform duration-300 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" />
                      </svg>
                      {/* Delicate leaf outline */}
                      <svg className="absolute -right-2 top-3 w-5 h-5 text-[#8fa89b]/35 rotate-[45deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M2 22 Q12 12 22 2 M12 12 Q17 7 22 2 M12 12 Q7 17 2 22" />
                      </svg>
                      {/* Soft glowing particle */}
                      <div className="absolute left-1 bottom-3 w-1.5 h-1.5 rounded-full bg-[#c0942c]/60 group-hover:animate-ping" />
                    </div>

                    {/* The Icon itself */}
                    <div className="relative z-20 text-[#0a3d54] group-hover:text-teal-soft group-hover:scale-110 transition-all duration-300">
                      <prop.icon className="w-7 h-7 stroke-[1.5]" />
                    </div>
                  </div>

                  <h4 className="font-serif text-base lg:text-[17px] font-bold text-[#0a3d54] leading-snug mb-3 min-h-[44px] flex items-center justify-center tracking-tight">
                    {prop.title}
                  </h4>
                  <p className="text-sm lg:text-base text-[#0A252C] font-light leading-relaxed">
                    {prop.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 6. SYLLABUS: INTERACTIVE CURRICULUM SECTION (Tarot Modules Accordion Grid!) */}
      <section className="py-16 md:py-20 px-6 bg-[#faf7f2] border-t border-[#dfdbc9]/30 relative z-10" id="curriculum">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12 space-y-2">
            <h2 className="font-serif text-3xl md:text-4xl text-ocean-dark font-semibold tracking-tight">
              Program Curriculum
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-[1px] bg-[#c0942c]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c0942c]" />
              <div className="w-10 h-[1px] bg-[#c0942c]/50" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side list of 8 Modules */}
            <div className="lg:col-span-5 space-y-3">
              {hypnoModules.map((mod, idx) => {
                const IconComponent = mod.icon;
                const isActive = activeModule === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveModule(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                      isActive 
                        ? 'bg-[#041a24] text-cream border-teal-soft shadow-lg translate-x-2' 
                        : 'bg-white text-ocean border-slate-100 hover:border-teal-soft/45 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`font-serif text-xl font-bold ${isActive ? 'text-teal-light' : 'text-ocean/45 group-hover:text-teal-soft'}`}>
                        {mod.num}
                      </span>
                      <div className="space-y-0.5">
                        <span className={`text-[10px] font-bold uppercase tracking-widest block ${isActive ? 'text-teal-light/70' : 'text-teal-soft'}`}>
                          {mod.title}
                        </span>
                        <h4 className="font-serif text-sm font-bold leading-tight">
                          {mod.subtitle}
                        </h4>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                      isActive 
                        ? 'bg-teal-soft/15 border-teal-soft text-teal-soft' 
                        : 'bg-[#fafdfd] border-[#041a24]/10 text-ocean'
                    }`}>
                      <IconComponent className="w-4 h-4 stroke-[1.5]" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right side active Module detailed panel */}
            <div className="lg:col-span-7">
              {activeModule !== null && (
                <div className="bg-[#0d3446] text-white rounded-[2.5rem] border border-teal-soft/50 p-6 md:p-8 lg:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[500px] transition-all duration-500">
                  <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
                    backgroundImage: `radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)`,
                    backgroundSize: '24px 24px'
                  }} />
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-teal-soft/15 rounded-full blur-2xl" />

                  <div className="relative z-10 space-y-6">
                    {/* Header */}
                    <div className="flex justify-between items-start border-b border-teal-soft/30 pb-4">
                      <div>
                        <span className="text-xs font-mono font-bold tracking-[0.25em] text-teal-light uppercase block mb-1">
                          {hypnoModules[activeModule].title} DETAILS
                        </span>
                        <h3 className="font-serif text-xl md:text-2xl font-medium text-white leading-tight">
                          {hypnoModules[activeModule].subtitle}
                        </h3>
                      </div>
                      <span className="font-serif text-5xl font-extrabold text-teal-soft/30">
                        {hypnoModules[activeModule].num}
                      </span>
                    </div>

                    <p className="text-sm text-slate-100 leading-relaxed font-medium italic">
                      "{hypnoModules[activeModule].shortDesc}"
                    </p>

                    {/* learnings & transformation lists */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div className="space-y-3">
                        <h5 className="text-xs font-bold uppercase tracking-widest text-teal-light flex items-center gap-2 border-b border-teal-soft/25 pb-1.5">
                          <BookOpen className="w-4 h-4 text-teal-light stroke-[1.5]" />
                          What You'll Learn
                        </h5>
                        <ul className="space-y-2">
                          {hypnoModules[activeModule].learnings.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-100 leading-relaxed font-medium">
                              <span className="text-teal-light text-xs mt-1">✦</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h5 className="text-xs font-bold uppercase tracking-widest text-teal-light flex items-center gap-2 border-b border-teal-soft/25 pb-1.5">
                          <CheckCircle className="w-4 h-4 text-teal-light stroke-[1.5]" />
                          Your Transformation
                        </h5>
                        <ul className="space-y-2">
                          {hypnoModules[activeModule].transformation.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-100 leading-relaxed font-medium">
                              <span className="text-teal-light text-xs mt-1">✔</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-teal-soft/25 flex items-center justify-between mt-8 relative z-10 text-teal-light/90 text-[11px] font-bold uppercase tracking-[0.15em]">
                    <span>Milestone {activeModule + 1} / 8</span>
                    <button 
                      onClick={() => onBook(`Enroll in ${hypnoModules[activeModule].subtitle}`)}
                      className="text-xs text-white hover:text-teal-light border border-teal-soft/40 hover:border-teal-soft py-1.5 px-4.5 rounded-lg transition-colors bg-[#0a3d54]/30 font-bold"
                    >
                      BOOK THIS MODULE
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 7. IMAGINE YOUR LIFE COMPARISON GRID (Before / After Subconscious Brain Hemisphere Grid!) */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#faf8f5] via-[#f5f2eb] to-[#faf8f5] relative overflow-hidden border-t border-[#dfdbc9]/30" id="comparison">
        {/* Self-contained Keyframe styles for animations */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes flow-particle-h {
            0% { left: 0%; opacity: 0; transform: translateY(-50%) scale(0.6); }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { left: 100%; opacity: 0; transform: translateY(-50%) scale(1); }
          }
          @keyframes flow-particle-v {
            0% { top: 0%; opacity: 0; transform: translateX(-50%) scale(0.6); }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; transform: translateX(-50%) scale(1); }
          }
          @keyframes ribbon-pulse {
            0%, 100% { filter: drop-shadow(0 0 5px rgba(192,148,44,0.3)); opacity: 0.8; }
            50% { filter: drop-shadow(0 0 15px rgba(192,148,44,0.6)); opacity: 1; }
          }
          @keyframes chaotic-drift {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(4px, -6px) rotate(1.5deg); }
            66% { transform: translate(-4px, 4px) rotate(-1deg); }
          }
          @keyframes gentle-coherence {
            0%, 100% { transform: scale(1); filter: drop-shadow(0 0 2px rgba(79,157,166,0.1)); }
            50% { transform: scale(1.015); filter: drop-shadow(0 0 10px rgba(79,157,166,0.25)); }
          }
          @keyframes subtle-sway {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(3deg); }
          }
          @keyframes floating-sparkle {
            0%, 100% { transform: scale(0.8) translateY(0px); opacity: 0.3; }
            50% { transform: scale(1.2) translateY(-4px); opacity: 0.8; }
          }
          .animate-flow-h-1 { animation: flow-particle-h 4.5s infinite linear; }
          .animate-flow-h-2 { animation: flow-particle-h 4.5s infinite linear 1.5s; }
          .animate-flow-h-3 { animation: flow-particle-h 4.5s infinite linear 3s; }
          
          .animate-flow-v-1 { animation: flow-particle-v 4s infinite linear; }
          .animate-flow-v-2 { animation: flow-particle-v 4s infinite linear 2s; }

          .animate-ribbon { animation: ribbon-pulse 6s infinite ease-in-out; }
          .animate-chaotic-card { animation: chaotic-drift 9s infinite ease-in-out; }
          .animate-coherence-card { animation: gentle-coherence 7s infinite ease-in-out; }
          .animate-sway-element { animation: subtle-sway 12s infinite ease-in-out; }
          .animate-sparkle-element { animation: floating-sparkle 4s infinite ease-in-out; }
        `}} />

        {/* BACKGROUND DECORATIVE ELEMENTS: Subtle watercolor paper aesthetics */}
        {/* Background Decorative 1: Lotus Outline top-left */}
        <div className="absolute top-12 left-10 opacity-[0.04] text-gold pointer-events-none select-none z-0">
          <svg className="w-48 h-48" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M60 100 C36 80, 12 60, 24 36 C36 24, 54 48, 60 72 C66 48, 84 24, 96 36 C108 60, 84 80, 60 100 Z" />
            <path d="M60 100 C48 72, 36 48, 60 24 C84 48, 72 72, 60 100 Z" />
          </svg>
        </div>

        {/* Background Decorative 2: Eucalyptus Branch bottom-right */}
        <div className="absolute bottom-12 right-10 opacity-[0.05] text-[#8fa89b] pointer-events-none select-none z-0 animate-sway-element">
          <svg className="w-64 h-64" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M12 108 Q48 96, 84 60 T114 12" />
            <ellipse cx="36" cy="90" rx="7" ry="12" transform="rotate(-30 36 90)" />
            <ellipse cx="58" cy="70" rx="7" ry="12" transform="rotate(-15 58 70)" />
            <ellipse cx="82" cy="46" rx="6" ry="11" transform="rotate(15 82 46)" />
            <ellipse cx="102" cy="24" rx="5" ry="9" transform="rotate(30 102 24)" />
          </svg>
        </div>

        {/* Background Decorative 3: Floating Feather bottom-left */}
        <div className="absolute bottom-24 left-16 opacity-[0.035] text-[#8fa89b] pointer-events-none select-none z-0 animate-sway-element" style={{ animationDelay: '2s' }}>
          <svg className="w-40 h-40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M15 85 C35 65, 55 45, 85 15 C75 25, 55 40, 35 55 C30 60, 25 68, 15 85 Z" />
            <line x1="25" y1="75" x2="18" y2="78" />
            <line x1="38" y1="63" x2="30" y2="68" />
            <line x1="50" y1="50" x2="42" y2="55" />
            <line x1="62" y1="38" x2="54" y2="43" />
          </svg>
        </div>

        {/* Background Decorative 4: Tiny Butterfly top-right */}
        <div className="absolute top-20 right-20 opacity-[0.03] text-gold pointer-events-none select-none z-0 animate-sway-element">
          <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M50 50 Q30 30 20 45 T50 50 Z" />
            <path d="M50 50 Q70 30 80 45 T50 50 Z" />
            <path d="M50 50 Q35 65 30 75 T50 50 Z" />
            <path d="M50 50 Q65 65 70 75 T50 50 Z" />
            <line x1="50" y1="40" x2="45" y2="25" />
            <line x1="50" y1="40" x2="55" y2="25" />
          </svg>
        </div>

        {/* Background Decorative 5: Sparkles and Botanical curves */}
        <div className="absolute top-1/2 left-8 opacity-[0.05] text-gold pointer-events-none select-none z-0 animate-sparkle-element">
          <Sparkles className="w-6 h-6 stroke-[1]" />
        </div>
        <div className="absolute bottom-1/3 right-12 opacity-[0.05] text-[#8fa89b] pointer-events-none select-none z-0 animate-sparkle-element" style={{ animationDelay: '1.5s' }}>
          <Sparkles className="w-5 h-5 stroke-[1]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header section */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-5xl text-ocean-dark font-medium tracking-tight">
              Imagine Your Subconscious Alignment
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-[#c0942c]/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c0942c]" />
              <div className="w-12 h-[1px] bg-[#c0942c]/40" />
            </div>
            <p className="text-sm md:text-base lg:text-lg text-ocean-dark font-semibold tracking-wide max-w-2xl mx-auto leading-relaxed">
              When we bridge Clinical Hypnotherapy with bio-meridian EFT tapping, we transition the nervous system and subconscious from state conflict to complete neural coherence.
            </p>
          </div>

          {/* Redesigned comparison cards connected with a flowing visual bridge */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
            
            {/* BEFORE: Conflict - Left Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-5 border border-teal-soft/10 bg-gradient-to-br from-[#f5e6e8] via-[#ebd6da] to-[#faf8f5] rounded-[2.5rem] p-6 md:p-8 space-y-6 relative overflow-hidden shadow-[0_20px_50px_rgba(179,138,146,0.04)] hover:shadow-[0_30px_60px_rgba(179,138,146,0.1)] hover:border-[#b38a92]/35 transition-all duration-500 group animate-chaotic-card"
            >
              {/* Soft overlay lines representing tangled chaotic energy */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none z-0">
                <svg className="w-full h-full text-[#b38a92]" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="0.8" fill="none">
                  <path d="M 10,10 Q 30,80 50,20 T 90,90" />
                  <path d="M 20,30 Q 80,10 40,70 T 80,30" />
                  <path d="M 5,50 Q 50,95 95,50" />
                </svg>
              </div>

              {/* Left Panel Header */}
              <div className="flex items-center gap-4.5 border-b border-[#e8d5d4]/60 pb-5 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f3e1e4] to-[#eed8dc] border border-[#b38a92]/35 flex items-center justify-center text-[#b38a92] shadow-inner shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5 text-[#b38a92]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeDasharray="3 3" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#b38a92] block mb-1">CONFLICT & SABOTAGE</span>
                  <h3 className="font-serif text-lg font-bold text-[#5c4a4d]">Subconscious Blocks & Overthinking</h3>
                </div>
              </div>

              {/* Bullet list as beautiful information rows */}
              <div className="space-y-4 relative z-10">
                {[
                  "Trapped in automatic loops of self-sabotage and procrastination.",
                  "Overwhelmed by daily stressors, somatic anxiety, and fight-or-flight triggers.",
                  "An active self-critic constantly driving feelings of imposter syndrome and low self-worth.",
                  "Unresolved childhood wounds and relationship baggages manifesting as emotional blocks."
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-4 bg-white/45 hover:bg-white/80 backdrop-blur-sm border border-[#e8d5d4]/40 hover:border-[#b38a92]/40 rounded-2xl p-4.5 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_2px_12px_rgba(179,138,146,0.04)] hover:shadow-[0_8px_20px_rgba(179,138,146,0.08)] group/item cursor-default"
                  >
                    <div className="w-8 h-8 rounded-full bg-rose-100/60 border border-[#e8d5d4] flex items-center justify-center text-[#b38a92] shrink-0 shadow-inner group-hover/item:bg-rose-200/50 group-hover/item:scale-110 transition-all duration-300">
                      <svg className="w-3.5 h-3.5 text-[#b38a92] group-hover/item:rotate-12 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-xs md:text-[13.5px] text-[#5c4a4d] font-normal leading-relaxed text-left">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* TRANSFORMATION BRIDGE: Flowing golden ribbon between both cards */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center relative h-full min-h-[300px]">
              {/* Horizontal flowing ribbon */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-20 w-full pointer-events-none select-none">
                <svg className="w-full h-full text-gold animate-ribbon overflow-visible" viewBox="0 0 100 40" fill="none" stroke="currentColor">
                  <defs>
                    <linearGradient id="gold-grad-bridge" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#c0942c" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#dca3b1" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#4f9da6" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                  {/* Curved ribbon line */}
                  <path d="M 0,20 Q 25,5 50,20 T 100,20" stroke="url(#gold-grad-bridge)" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 0,22 Q 25,12 50,22 T 100,22" stroke="#c0942c" strokeWidth="1" strokeOpacity="0.4" />
                </svg>
                
                {/* Glowing particles travelling across */}
                <div className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-r from-gold to-white shadow-[0_0_10px_#c0942c] animate-flow-h-1" style={{ top: '35%' }} />
                <div className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-teal-light to-white shadow-[0_0_10px_#4f9da6] animate-flow-h-2" style={{ top: '45%' }} />
                <div className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#dca3b1] to-white shadow-[0_0_10px_#dca3b1] animate-flow-h-3" style={{ top: '55%' }} />
              </div>
              
              {/* Micro label for the bridge */}
              <div className="relative z-10 bg-[#faf8f5]/90 backdrop-blur-md border border-gold/20 py-2.5 px-4.5 rounded-full text-[10px] font-bold text-[#c0942c] uppercase tracking-[0.2em] shadow-sm animate-pulse">
                The Flow of Healing
              </div>
            </div>

            {/* Mobile-only Bridge */}
            <div className="lg:hidden flex flex-col items-center justify-center py-6 relative my-2 w-full">
              <div className="h-24 w-12 relative pointer-events-none select-none">
                <svg className="w-full h-full text-gold animate-ribbon overflow-visible" viewBox="0 0 40 100" fill="none" stroke="currentColor">
                  <defs>
                    <linearGradient id="gold-grad-v-bridge" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#c0942c" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#dca3b1" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#4f9da6" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                  <path d="M 20,0 Q 5,25 20,50 T 20,100" stroke="url(#gold-grad-v-bridge)" strokeWidth="3" strokeLinecap="round" />
                </svg>
                {/* Glowing particles travelling vertically */}
                <div className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-b from-gold to-white shadow-[0_0_10px_#c0942c] animate-flow-v-1 left-1/2" style={{ left: '40%' }} />
                <div className="absolute w-2 h-2 rounded-full bg-gradient-to-b from-teal-light to-white shadow-[0_0_10px_#4f9da6] animate-flow-v-2 left-1/2" style={{ left: '50%' }} />
              </div>
              <div className="bg-[#faf8f5]/90 backdrop-blur-md border border-gold/20 py-1.5 px-3.5 rounded-full text-[9px] font-bold text-[#c0942c] uppercase tracking-[0.2em] shadow-sm mt-2">
                Transformational Shift
              </div>
            </div>

            {/* AFTER: Coherence - Right Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 border border-teal-soft/20 bg-gradient-to-br from-[#edf4f2] via-[#e2eff2] to-[#faf8f5] rounded-[2.5rem] p-6 md:p-8 space-y-6 relative overflow-hidden shadow-[0_20px_50px_rgba(79,157,166,0.06)] hover:shadow-[0_30px_60px_rgba(79,157,166,0.15)] hover:border-teal-soft/45 transition-all duration-500 group animate-coherence-card"
            >
              {/* Subtle background lotuses and flowing energy waves */}
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none select-none z-0">
                <svg className="w-full h-full text-teal-soft" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="0.8" fill="none">
                  <path d="M 0,50 Q 25,25 50,50 T 100,50" />
                  <path d="M 0,60 Q 25,35 50,60 T 100,60" />
                  <circle cx="50" cy="50" r="15" />
                  <circle cx="50" cy="50" r="25" strokeDasharray="2 2" />
                </svg>
              </div>

              {/* Right Panel Header */}
              <div className="flex items-center gap-4.5 border-b border-teal-soft/15 pb-5 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#edf4f2] to-[#bde0e5]/40 border border-teal-soft/30 flex items-center justify-center text-teal-soft shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5 text-teal-soft" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M12 8c-2 2-2 5 0 7 2-2 2-5 0-7z" />
                    <path d="M12 15c-2-2-5-2-7 0 2 2 5 2 7 0z" />
                    <path d="M12 15c2-2 5-2 7 0-2 2-5 2-7 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-teal-soft block mb-1">ALIGNMENT & COHERENCE</span>
                  <h3 className="font-serif text-lg font-bold text-ocean-dark">Subconscious Healing & Coherence</h3>
                </div>
              </div>

              {/* Bullet list as beautiful information rows */}
              <div className="space-y-4 relative z-10">
                {[
                  "Quiet, focused clarity with automatic alignment toward goals.",
                  "Calm, resilient nervous system capable of resetting in moments using somatic tapping.",
                  "An inner cheerleader of strong, quiet baseline self-confidence.",
                  "Reconciliation of past wounds, enabling clean emotional boundaries and inner child safety."
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-4 bg-white/55 hover:bg-white/90 backdrop-blur-sm border border-teal-soft/10 hover:border-teal-soft/30 rounded-2xl p-4.5 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(79,157,166,0.03)] hover:shadow-[0_10px_25px_rgba(79,157,166,0.1)] group/item cursor-default"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#edf4f2] border border-[#bde0e5]/60 flex items-center justify-center text-teal-soft shrink-0 shadow-[0_2px_10px_rgba(79,157,166,0.08)] relative overflow-hidden group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#8fa89b]/40 to-transparent opacity-80" />
                      <svg className="w-3.5 h-3.5 relative z-10 text-teal-soft" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-xs md:text-[13.5px] text-ocean-dark/90 font-normal leading-relaxed text-left">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 8. YOUR TRANSFORMATION DETAILS & SUMMARY */}
      <section className="py-16 md:py-20 bg-[#faf8f5] border-t border-[#dfdbc9]/30 relative overflow-hidden" id="transformation">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-soft/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ocean-light/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-5xl text-ocean-dark font-medium tracking-tight">
              Your Transformation
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-[#c0942c]/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c0942c]" />
              <div className="w-12 h-[1px] bg-[#c0942c]/40" />
            </div>
          </div>

          {/* Redesigned Two Panels for Better Readability and Contrast */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Panel 1: Subconscious Reprogramming */}
            <div className="bg-white rounded-[2rem] border border-teal-soft/30 p-6 md:p-8 shadow-sm space-y-6">
              <div className="border-b border-teal-soft/20 pb-4">
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#c0942c] uppercase block mb-1">
                  STAGE ONE: SUBCONSCIOUS COHERENCE
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-ocean-dark">
                  Subconscious Mind & Beliefs
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Stop overthinking and quiet the negative inner voice.",
                  "Dissolve subconscious blocks holding back your self-worth.",
                  "Replace self-doubt with steady inner belief and focus.",
                  "Program empowering mental habits effortlessly at night.",
                  "Release fear, guilt, shame, and emotional heavy memories.",
                  "Reduce anxiety and overwhelming thoughts naturally."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-[#FAF8F5] border border-teal-soft/10 hover:border-teal-soft/25 rounded-xl p-4 transition-all duration-300">
                    <span className="text-[#c0942c] font-bold text-base mt-0.5">✔</span>
                    <p className="text-sm md:text-[14.5px] text-ocean-dark font-medium leading-[1.65] text-justify" style={{ textAlign: 'justify' }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Panel 2: Somatic Emotional Release */}
            <div className="bg-white rounded-[2rem] border border-teal-soft/30 p-6 md:p-8 shadow-sm space-y-6">
              <div className="border-b border-teal-soft/20 pb-4">
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#4f9da6] uppercase block mb-1">
                  STAGE TWO: SOMATIC MERIDIAN CLEARING
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-ocean-dark">
                  Emotional Freedom & Somatic Safety
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Manage stress triggers in daily life using tapping sequences.",
                  "Heal unresolved trauma stored within physical cells.",
                  "Create secure boundaries without carrying guilt feelings.",
                  "Release parent/relationship wounds and trauma baggage.",
                  "Wake up feeling lighter, clearer, and connected to self.",
                  "Nurture a balanced and resilient emotional lifestyle."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-[#FAF8F5] border border-teal-soft/10 hover:border-teal-soft/25 rounded-xl p-4 transition-all duration-300">
                    <span className="text-[#4f9da6] font-bold text-base mt-0.5">✔</span>
                    <p className="text-sm md:text-[14.5px] text-ocean-dark font-medium leading-[1.65] text-justify" style={{ textAlign: 'justify' }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHAT'S INCLUDED (ELEGANT BOTANICAL HEALING GARDEN!) */}
      <section className="py-16 md:py-20 bg-white border-t border-[#dfdbc9]/30 relative overflow-hidden" id="whats-included">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-5xl text-ocean-dark font-medium tracking-tight">
              What's Included
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-[#c0942c]/45" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c0942c]" />
              <div className="w-12 h-[1px] bg-[#c0942c]/45" />
            </div>
          </div>

          <div className="relative bg-gradient-to-b from-[#fdfcf7] via-[#f4fbfc] to-[#faf7f2] border border-teal-soft/25 rounded-[3rem] p-6 md:p-12 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 max-w-5xl mx-auto">
              {[
                { title: "8 Comprehensive Learning Modules", emoji: "📖", desc: "A meticulous sequence of 8 core theoretical and subconscious modules guiding your transition from safe groundwork to professional proficiency." },
                { title: "Guided Self-Hypnosis Logs", emoji: "🧘", desc: "Somatic release scripts, autogenic relaxation tracks, and neural suggestion guides for safe subconscious reprogrammings." },
                { title: "EFT Practice Tappings", emoji: "✨", desc: "A detailed clinical manual mapping meridian points, cortisol reduction steps, and emotional clearing templates." },
                { title: "Practical Healing Tasks", emoji: "📝", desc: "Experiential integration tasks, subconscious profiling metrics, and daily habit tracking prompts." },
                { title: "Guided Visualizations", emoji: "🌬", desc: "High-quality, calming audio tracks helping you soothe fight-or-flight reactions and reclaim deep internal peace." },
                { title: "Emotional Healing Workbook", emoji: "📚", desc: "A beautifully illustrated physical and digital workbook with guided prompts, worksheets, and emotional safety trackers." },
                { title: "EFT Practice Manual", emoji: "🌿", desc: "A sacred self-guided workbook exploring reparenting, attachment resolution, and healing early conditioning." },
                { title: "Reflection Journal", emoji: "📓", desc: "Somatic check-in templates, trigger logs, and integration prompts to safely map your daily nervous system trends." },
                { title: "Downloadable Resources", emoji: "📂", desc: "Clinical client intake worksheets, session planner templates, boundaries maps, and therapeutic assessment printouts." },
                { title: "Lifetime Learning Access", emoji: "♾", desc: "Unrestricted, permanent access to all material, future curriculum updates, workbooks, and resource expansion updates." },
                { title: "Certificate of Completion", emoji: "🎓", desc: "Earn an accredited somatic practitioner certificate valid for professional integration globally." }
              ].map((station, idx) => (
                <div 
                  key={idx}
                  className="bg-[#faf8f5] border border-[#e5dfcb] hover:border-teal-soft hover:shadow-md rounded-2xl p-4 flex gap-4 items-start transition-all duration-300 relative overflow-hidden group min-h-[140px]"
                >
                  <div className="w-12 h-12 rounded-xl shrink-0 bg-white border border-[#e5dfcb]/60 flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {station.emoji}
                  </div>

                  <div className="space-y-1 text-left flex-grow">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono font-bold text-teal-soft uppercase tracking-widest">Station {idx + 1}</span>
                    </div>
                    <h3 className="font-serif text-sm font-bold text-ocean-dark leading-tight group-hover:text-teal-soft transition-colors">
                      {station.title}
                    </h3>
                    <p className="text-[11px] text-ocean-dark/80 leading-relaxed font-light">
                      {station.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. CAREER OPPORTUNITIES (PATHWAYS AFTER HEALING!) */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#fdfcf7] via-[#f1fafb] to-[#faf7f2] border-t border-[#dfdbc9]/30 relative overflow-hidden" id="careers">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#4f9da6]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-ocean/5 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-5xl text-ocean-dark font-medium tracking-tight">
              Where Your Healing Can Lead
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-[#c0942c]/45" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c0942c]" />
              <div className="w-12 h-[1px] bg-[#c0942c]/45" />
            </div>
          </div>

          {/* ==================== DESKTOP & TABLET LANDSCAPE MAP ==================== */}
          <div className="hidden md:block relative w-full h-[720px] bg-white/20 border border-teal-soft/15 rounded-[3.5rem] p-6 overflow-hidden shadow-inner">
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
              backgroundImage: `radial-gradient(circle, #0a3d54 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }} />

            {/* SVG Winding stone pathways to 9 career destinations starting from bottom-center lotus */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 700" preserveAspectRatio="none">
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {[
                "M 500,660 C 380,500 240,250 120,84",   // 1. Hypnotherapy Practice (Top Left - 12%)
                "M 500,660 C 350,550 240,420 120,336",  // 2. EFT Tapping Practice (Mid Left - 48%)
                "M 500,660 C 380,620 280,580 120,588",  // 3. Life Somatic Coaching (Bot Left - 84%)
                "M 500,660 C 460,500 400,340 340,196",  // 4. NLP Breakthrough (Inner Left - 28%)
                "M 500,660 C 480,450 520,250 500,84",   // 5. Emotional Wellness (Top Mid - 12%)
                "M 500,660 C 540,500 600,340 660,196",  // 6. Holistic Healing (Inner Right - 28%)
                "M 500,660 C 620,500 760,250 880,84",   // 7. Corporate Wellness (Top Right - 12%)
                "M 500,660 C 650,550 760,420 880,336",  // 8. Personal Growth (Mid Right - 48%)
                "M 500,660 C 620,620 720,580 880,588"   // 9. Continuous Self-Healing (Bot Right - 84%)
              ].map((dStr, idx) => (
                <g key={idx}>
                  <path 
                    d={dStr} 
                    fill="none" 
                    stroke="#bde0e5" 
                    strokeWidth="2.5" 
                    strokeDasharray="2 10" 
                    strokeLinecap="round"
                    className="opacity-60"
                  />
                  <path 
                    d={dStr} 
                    fill="none" 
                    stroke="#c0942c" 
                    strokeWidth="2.5" 
                    strokeDasharray="5 5"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    className={`transition-all duration-700 opacity-0 animate-path-glow ${
                      hoveredDest === idx ? 'opacity-90' : 'opacity-0'
                    }`}
                  />
                </g>
              ))}
            </svg>

            {/* Bottom-Center Source Lotus */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 select-none">
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-teal-soft/10 animate-ping" style={{ animationDuration: '3.5s' }} />
                <div className="absolute w-14 h-14 rounded-full bg-teal-soft/5 border border-teal-soft/15 animate-pulse" />
                <div className="absolute w-16 h-4 bg-gradient-to-r from-teal-soft/20 via-teal-soft/15 to-teal-soft/20 rounded-full filter blur-md bottom-0" />
                
                <svg className="w-12 h-12 text-white drop-shadow-[0_0_12px_rgba(192,148,44,0.95)]" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50,15 C42,35 25,45 20,65 C32,65 42,50 50,30 C58,50 68,65 80,65 C75,45 58,35 50,15 Z" fill="#c0942c" className="opacity-95" />
                  <path d="M50,25 C45,40 32,48 28,63 C38,63 45,52 50,38 C55,52 62,63 72,63 C68,48 55,40 50,25 Z" fill="#faf7f2" className="opacity-90" />
                  <path d="M50,35 C48,45 42,50 38,60 C45,60 48,52 50,45 C52,52 55,60 62,60 C58,50 52,45 50,35 Z" fill="#e6f4f6" className="opacity-95" />
                  <circle cx="50" cy="55" r="4" fill="#c0942c" />
                </svg>
              </div>
              <span className="text-[8px] font-mono font-bold tracking-[0.3em] text-[#c0942c] uppercase mt-1">Sovereign Source</span>
            </div>

            {/* Absolutely Positioned Career Destination Points */}
            {[
              { title: "Hypnotherapy Practice", left: "12%", top: "12%", desc: "Establish a private practice helping clients reprogram subconscious habits and beliefs." },
              { title: "EFT Tapping Practice", left: "12%", top: "48%", desc: "Guide clients through meridian tapping to clear emotional blocks and stress triggers." },
              { title: "Life Somatic Coaching", left: "12%", top: "84%", desc: "Integrate subconscious and body-based coaching into your existing life coaching toolkit." },
              { title: "NLP Breakthrough", left: "34%", top: "28%", desc: "Incorporate powerful neuro-linguistic and hypnotic structures for fast breakthroughs." },
              { title: "Emotional Wellness", left: "50%", top: "12%", desc: "Mentor individuals in regulating stress, calming anxiety, and building emotional stability." },
              { title: "Holistic Healing", left: "66%", top: "28%", desc: "Collaborate with multi-disciplinary wellness centers, spas, and healing sanctuaries." },
              { title: "Corporate Wellness", left: "88%", top: "12%", desc: "Lead resilience, stress management, and emotional intelligence workshops in corporations." },
              { title: "Personal Growth", left: "88%", top: "48%", desc: "Design workshops and courses to teach self-healing, mindfulness, and emotional freedom." },
              { title: "Continuous Self-Healing", left: "88%", top: "84%", desc: "Utilize these accredited tools as a lifelong daily practice for personal peace and growth." }
            ].map((dest, idx) => {
              const isHovered = hoveredDest === idx;
              return (
                <div 
                  key={idx}
                  style={{ left: dest.left, top: dest.top }}
                  className="absolute z-20 group -translate-x-1/2 -translate-y-1/2 w-[210px]"
                  onMouseEnter={() => setHoveredDest(idx)}
                  onMouseLeave={() => setHoveredDest(null)}
                >
                  <div className={`bg-white/95 backdrop-blur-md border p-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 text-left relative overflow-hidden ${
                    isHovered ? 'border-[#c0942c] ring-1 ring-[#c0942c]/25 scale-[1.02]' : 'border-[#dfdbc9]'
                  }`}>
                    <div className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full transition-colors ${
                      isHovered ? 'bg-[#c0942c] animate-ping' : 'bg-[#dfdbc9]'
                    }`} />
                    <span className="text-[8px] font-mono font-bold text-teal-soft uppercase tracking-widest block mb-0.5">PATHWAY 0{idx + 1}</span>
                    <h4 className="font-serif text-[11.5px] font-bold text-ocean-dark leading-tight mb-0.5 transition-colors group-hover:text-[#c0942c]">{dest.title}</h4>
                    <p className="text-[9.5px] text-ocean-dark/75 leading-relaxed font-light">{dest.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ==================== MOBILE COMPACT LIST ==================== */}
          <div className="md:hidden space-y-4 px-4">
            {[
              { title: "Hypnotherapy Practice", desc: "Establish a private practice helping clients reprogram subconscious habits and beliefs." },
              { title: "EFT Tapping Practice", desc: "Guide clients through meridian tapping to clear emotional blocks and stress triggers." },
              { title: "Life Somatic Coaching", desc: "Integrate subconscious and body-based coaching into your existing life coaching toolkit." },
              { title: "NLP Breakthrough", desc: "Incorporate powerful neuro-linguistic and hypnotic structures for fast breakthroughs." },
              { title: "Emotional Wellness", desc: "Mentor individuals in regulating stress, calming anxiety, and building emotional stability." },
              { title: "Holistic Healing", desc: "Collaborate with multi-disciplinary wellness centers, spas, and healing sanctuaries." },
              { title: "Corporate Wellness", desc: "Lead resilience, stress management, and emotional intelligence workshops in corporations." },
              { title: "Personal Growth", desc: "Design workshops and courses to teach self-healing, mindfulness, and emotional freedom." },
              { title: "Continuous Self-Healing", desc: "Utilize these accredited tools as a lifelong daily practice for personal peace and growth." }
            ].map((dest, idx) => (
              <div key={idx} className="bg-white border border-[#dfdbc9] p-4.5 rounded-2xl text-left flex gap-3.5 items-start">
                <span className="text-lg shrink-0 mt-0.5">🪷</span>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-[#c0942c] tracking-widest block uppercase">PATHWAY 0{idx + 1}</span>
                  <h4 className="font-serif text-sm font-bold text-ocean-dark leading-tight">{dest.title}</h4>
                  <p className="text-[11px] text-ocean-dark/80 leading-relaxed font-light">{dest.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. CINEMATIC CALL TO ACTION (MATCHING IMAGE 3 FORMAT & LIGHT THEME) */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#eaf4f5] via-[#f4fafb] to-[#eaf4f5] relative overflow-hidden border-t border-[#dfdbc9]/30" id="hypno-cta">
        {/* Soft background lighting glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,157,166,0.12)_0%,transparent_75%)] z-0" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-teal-soft/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-ocean/5 blur-[120px]" />

        <div className="max-w-4xl mx-auto text-center relative z-10 px-6 space-y-8">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#0a252c] font-normal tracking-tight leading-tight uppercase max-w-3xl mx-auto">
            START YOUR SUBCONSCIOUS <br />
            <span className="italic font-serif font-light text-[#3d8c95] lowercase text-3xl md:text-5xl lg:text-6xl mr-2">healing </span>
            <span className="font-serif font-black text-[#0a252c] uppercase">JOURNEY TODAY.</span>
          </h2>

          <p className="font-serif italic text-base md:text-lg lg:text-xl text-[#0a3d54] max-w-2xl mx-auto leading-relaxed font-normal">
            "Every transformation begins with a single choice. If you're ready to master your conscious and subconscious minds, release childhood wounds, and step forward as a certified somatic practitioner, this program is your next step."
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onBook('Hypnotherapy & EFT Certification Program')}
              className="px-8 py-4 bg-[#3d8c95] hover:bg-[#2d737b] text-white rounded-2xl text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2.5 group cursor-pointer"
              id="hypno-final-cta"
            >
              <span>ENROLL IN PROGRAMME</span>
            </button>
            <button
              onClick={onBack}
              className="px-8 py-4 bg-transparent hover:bg-[#3d8c95]/10 border border-[#0a3d54]/30 hover:border-[#0a3d54] text-[#0a252c] rounded-2xl text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              id="hypno-final-back-btn"
            >
              <span>RETURN TO SANCTUARY</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
