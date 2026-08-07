import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Calendar, Compass, ShieldCheck, Clock, Zap,
  CheckCircle, ArrowRight, Eye, Star, Sparkles, BookOpen, Moon,
  Heart, Sun, Download, ChevronRight, Award, Brain, Globe, Infinity, 
  Check, ShieldAlert, MessageSquare, RefreshCw, UserCheck, Smile,
  Briefcase, GraduationCap, Flame, Layers, Users
} from 'lucide-react';
import { generatePDF } from '../../lib/pdfHelper';
import HealingJournal from './HealingJournal';

interface TraumaPageProps {
  onBack: () => void;
  onBook: (modalityName: string) => void;
}

const TRAUMA_SERVICES = [
  { title: 'Somatic Healing Integration', duration: '60 Mins', price: '$90 USD', desc: 'Identify emotional blockages, process stored stress, and regulate your nervous system.' },
  { title: 'Inner Child & Parts Work', duration: '60 Mins', price: '$95 USD', desc: 'Nurture the wounded child within, release emotional triggers, and establish inner safety.' },
  { title: 'EFT Tapping & Release', duration: '45 Mins', price: '$75 USD', desc: 'Relieve stress, process difficult emotions, and clear somatic stagnation in the body.' },
  { title: 'Trauma-Informed Life Coaching', duration: '60 Mins', price: '$100 USD', desc: 'Build resilience, map safe boundaries, and co-create an empowering growth path.' },
  { title: 'Nervous System Recovery Session', duration: '45 Mins', price: '$80 USD', desc: 'Soothe systemic exhaustion with breathwork, grounding, and vagal toning.' },
  { title: 'Generational Healing Circle', duration: '75 Mins', price: '$120 USD', desc: 'Gentle, compassionate exploration to dismantle inherited family patterns.' }
];

export default function TraumaPage({ onBack, onBook }: TraumaPageProps) {
  const [downloading, setDownloading] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeModule, setActiveModule] = useState<number | null>(0);
  const [hoveredDest, setHoveredDest] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleDownloadBrochure = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      generatePDF(
        "Trauma_Healing_Practitioner_Certification_Brochure.pdf",
        "TRAUMA HEALING CERTIFICATION PROGRAM",
        "Heal. Restore. Transform. Thrive.",
        "Become a Certified Trauma Healing Practitioner & Transform Lives—Starting with Your Own\nHeal Trauma. Restore Emotional Wellbeing. Create Lasting Change.\n\nTrauma affects more than memories—it shapes our emotions, relationships, confidence, physical health, and the way we experience life. Whether you're healing your own journey or supporting others, true transformation begins by understanding the nervous system, addressing the root cause, and creating emotional safety.\n\nThe Trauma Healing Certification Program is a comprehensive, evidence-informed training designed to help you understand trauma, regulate the nervous system, release emotional patterns, and apply trauma-informed healing practices with confidence. No prior psychology or counselling experience required.",
        [
          {
            title: "MODULE 1: Understanding Trauma & Your Nervous System",
            text: "Why You Feel the Way You Do\n\nWHAT YOU'LL LEARN:",
            items: [
              "What trauma really is (it's more than painful memories)",
              "How trauma affects your mind, body, emotions, and relationships",
              "Common signs of unresolved trauma in daily life",
              "The difference between stress and trauma",
              "Why creating emotional safety is the first step toward healing",
              "YOUR TRANSFORMATION:",
              "Understand your emotional reactions without blaming yourself",
              "Recognize hidden trauma patterns in everyday life",
              "Learn why your nervous system reacts the way it does",
              "Stop confusing trauma with \"being weak\" or \"overthinking\"",
              "Build a safe foundation for deep emotional healing"
            ]
          },
          {
            title: "MODULE 2: Healing the Root Cause",
            text: "Break Free from Emotional Patterns\n\nWHAT YOU'LL LEARN:",
            items: [
              "Why unresolved trauma keeps repeating in your life",
              "Discover the real reason behind emotional triggers",
              "Understand the mind-body-emotion connection",
              "Learn practical healing techniques used in trauma recovery",
              "Build emotional strength and resilience",
              "YOUR TRANSFORMATION:",
              "Identify emotional patterns before they control you",
              "Heal the root cause instead of just managing symptoms",
              "Respond calmly instead of reacting emotionally",
              "Feel emotionally stronger and more balanced",
              "Experience greater peace and confidence in daily life"
            ]
          },
          {
            title: "MODULE 3: Healing Through the Mind & Body",
            text: "Release Trauma Stored in Your Body\n\nWHAT YOU'LL LEARN:",
            items: [
              "How trauma gets stored inside the body",
              "Recognize physical sensations linked to emotional pain",
              "Simple body-based healing practices",
              "Strengthen your mind-body connection",
              "Feel emotionally safe while processing difficult experiences",
              "YOUR TRANSFORMATION:",
              "Understand what your body has been trying to tell you",
              "Reduce stress, tension, and emotional overwhelm",
              "Feel lighter, calmer, and more connected to yourself",
              "Improve emotional awareness and self-care",
              "Gain confidence while healing difficult emotions"
            ]
          },
          {
            title: "MODULE 4: Breathing & Relaxation for Emotional Healing",
            text: "Calm Your Mind in Minutes\n\nWHAT YOU'LL LEARN:",
            items: [
              "Powerful breathing techniques for instant calm",
              "Relaxation practices to reduce stress and anxiety",
              "How breathing regulates your nervous system",
              "Daily exercises to improve emotional balance",
              "Create your personal relaxation routine",
              "YOUR TRANSFORMATION:",
              "Calm anxiety naturally",
              "Feel more relaxed throughout the day",
              "Improve emotional control during stressful situations",
              "Sleep better and reduce physical tension",
              "Develop healthy habits for long-term emotional wellness"
            ]
          },
          {
            title: "MODULE 5: Healing & Personal Growth",
            text: "Grow Beyond Your Past\n\nWHAT YOU'LL LEARN:",
            items: [
              "Discover how healing opens the door to personal growth",
              "Set meaningful goals that support your healing journey",
              "Build lasting self-confidence and healthy self-worth",
              "Develop a positive mindset that supports emotional resilience",
              "Create habits for lifelong learning and continuous self-improvement",
              "YOUR TRANSFORMATION:",
              "Move from surviving to growing with confidence",
              "Build a stronger sense of self-worth and self-belief",
              "Replace negative thinking with empowering perspectives",
              "Gain clarity about your future and personal goals",
              "Embrace lifelong growth with confidence and purpose"
            ]
          },
          {
            title: "MODULE 6: Trauma-Informed Professional Practice",
            text: "Support Others with Confidence, Compassion & Care\n\nWHAT YOU'LL LEARN:",
            items: [
              "Understand the principles of trauma-informed care",
              "Create a safe, supportive, and non-judgmental environment for clients",
              "Develop effective communication and active listening skills",
              "Apply trauma-informed strategies in different professional settings",
              "Recognize signs of secondary trauma, compassion fatigue, and burnout",
              "Learn ethical practices and professional boundaries",
              "YOUR TRANSFORMATION:",
              "Support clients with greater confidence and empathy",
              "Build trust through safe and compassionate communication",
              "Develop professional skills that create meaningful client relationships",
              "Prevent burnout while caring for others",
              "Become a confident trauma-informed practitioner"
            ]
          },
          {
            title: "MODULE 7: Building Your Professional Healing Practice",
            text: "Turn Your Passion for Healing into a Meaningful Career\n\nWHAT YOU'LL LEARN:",
            items: [
              "Plan and structure effective healing sessions",
              "Build strong, professional relationships with clients",
              "Develop your unique identity as a trauma healing practitioner",
              "Learn strategies for growing a sustainable and ethical practice",
              "Create a long-term professional development plan",
              "Explore personal branding and business fundamentals",
              "YOUR TRANSFORMATION:",
              "Feel confident leading healing sessions",
              "Build authentic, long-lasting client relationships",
              "Develop a professional identity that reflects your purpose",
              "Create a sustainable healing practice with confidence",
              "Prepare for long-term career success in the wellness industry"
            ]
          },
          {
            title: "MODULE 8: Integration, Certification & Professional Growth",
            text: "Step Forward with Confidence and Continue Your Healing Journey\n\nWHAT YOU'LL LEARN:",
            items: [
              "Integrate everything you've learned throughout the program",
              "Apply trauma healing skills confidently in real-life situations",
              "Create a personalized healing and professional growth plan",
              "Explore opportunities for continued learning and specialization",
              "Develop a lifelong self-care and professional development strategy",
              "Celebrate your transformation and prepare for your next chapter",
              "YOUR TRANSFORMATION:",
              "Confidently apply trauma healing knowledge in everyday life",
              "Leave with a personalized roadmap for continued healing",
              "Continue growing both personally and professionally",
              "Feel empowered to support yourself and others",
              "Graduate with the confidence to make a meaningful impact"
            ]
          },
          {
            title: "FINAL PROGRAM TRANSFORMATION",
            text: "By the end of this Trauma Therapy Certification Program, learners will:",
            items: [
              "Understand trauma and how it affects the mind, body, emotions, and nervous system.",
              "Identify and heal the root causes of emotional pain.",
              "Regulate their nervous system using evidence-informed techniques.",
              "Release stored trauma through practical mind-body healing practices.",
              "Build confidence, self-worth, and emotional resilience.",
              "Create healthier relationships through trauma-informed communication and boundaries.",
              "Develop the professional knowledge and practical skills to support others safely and ethically.",
              "Graduate with a personalized healing and professional growth plan, ready to continue their journey with confidence."
            ]
          }
        ]
      );
    }, 1200);
  };

  const heroHighlights = [
    { icon: Globe, label: "Evidence-Informed Care" },
    { icon: Brain, label: "Nervous System Focus" },
    { icon: Compass, label: "Somatic Mind-Body Tools" },
    { icon: Award, label: "Accredited Practitioner" },
    { icon: Infinity, label: "Lifetime Learning Access" }
  ];

  const traumaModules = [
    {
      num: "01",
      title: "Module 1",
      subtitle: "Understanding Trauma & Your Nervous System",
      shortDesc: "Understand trauma, emotional triggers, stress responses, and how to co-create baseline emotional safety.",
      learnings: [
        "What trauma really is (it's more than painful memories)",
        "How trauma affects your mind, body, emotions, and relationships",
        "Common signs of unresolved trauma in daily life",
        "The difference between stress and trauma",
        "Why creating emotional safety is the first step toward healing"
      ],
      transformation: [
        "Understand your emotional reactions without blaming yourself",
        "Recognize hidden trauma patterns in everyday life",
        "Learn why your nervous system reacts the way it does",
        "Stop confusing trauma with 'being weak' or 'overthinking'",
        "Build a safe foundation for deep emotional healing"
      ],
      icon: Brain,
      bgGradient: "from-[#fcfbfa] to-[#FAF5EB]/40"
    },
    {
      num: "02",
      title: "Module 2",
      subtitle: "Healing the Root Cause",
      shortDesc: "Identify root patterns, inner child dynamics, childhood conditioning, and attachment wounds.",
      learnings: [
        "Why unresolved trauma keeps repeating in your life",
        "Discover the real reason behind emotional triggers",
        "Understand the mind-body-emotion connection",
        "Learn practical healing techniques used in trauma recovery",
        "Build emotional strength and resilience"
      ],
      transformation: [
        "Identify emotional patterns before they control you",
        "Heal the root cause instead of just managing symptoms",
        "Respond calmly instead of reacting emotionally",
        "Feel emotionally stronger and more balanced",
        "Experience greater peace and confidence in daily life"
      ],
      icon: Heart,
      bgGradient: "from-[#fcfbfa] to-[#041a24]/5"
    },
    {
      num: "03",
      title: "Module 3",
      subtitle: "Healing Through the Mind & Body",
      shortDesc: "Explore body-based experiencing, releasing stored muscular tension, and mindfulness.",
      learnings: [
        "How trauma gets stored inside the body",
        "Recognize physical sensations linked to emotional pain",
        "Simple body-based healing practices",
        "Strengthen your mind-body connection",
        "Feel emotionally safe while processing difficult experiences"
      ],
      transformation: [
        "Understand what your body has been trying to tell you",
        "Reduce stress, tension, and emotional overwhelm",
        "Feel lighter, calmer, and more connected to yourself",
        "Improve emotional awareness and self-care",
        "Gain confidence while healing difficult emotions"
      ],
      icon: Sparkles,
      bgGradient: "from-[#fcfbfa] to-[#FAF5EB]/40"
    },
    {
      num: "04",
      title: "Module 4",
      subtitle: "Breathing & Relaxation for Emotional Healing",
      shortDesc: "Regulate stress hormones and slow down systemic hyperarousal with directed respiratory work.",
      learnings: [
        "Powerful breathing techniques for instant calm",
        "Relaxation practices to reduce stress and anxiety",
        "How breathing regulates your nervous system",
        "Daily exercises to improve emotional balance",
        "Create your personal relaxation routine"
      ],
      transformation: [
        "Calm anxiety naturally",
        "Feel more relaxed throughout the day",
        "Improve emotional control during stressful situations",
        "Sleep better and reduce physical tension",
        "Develop healthy habits for long-term emotional wellness"
      ],
      icon: RefreshCw,
      bgGradient: "from-[#fcfbfa] to-[#041a24]/5"
    },
    {
      num: "05",
      title: "Module 5",
      subtitle: "Healing & Personal Growth",
      shortDesc: "Reprogram core unworthiness, set goals rooted in sovereignty, and expand emotional limits.",
      learnings: [
        "Discover how healing opens the door to personal growth",
        "Set meaningful goals that support your healing journey",
        "Build lasting self-confidence and healthy self-worth",
        "Develop a positive mindset that supports emotional resilience",
        "Create habits for lifelong learning and continuous self-improvement"
      ],
      transformation: [
        "Move from surviving to growing with confidence",
        "Build a stronger sense of self-worth and self-belief",
        "Replace negative thinking with empowering perspectives",
        "Gain clarity about your future and personal goals",
        "Embrace lifelong growth with confidence and purpose"
      ],
      icon: Sun,
      bgGradient: "from-[#fcfbfa] to-[#FAF5EB]/40"
    },
    {
      num: "06",
      title: "Module 6",
      subtitle: "Trauma-Informed Professional Practice",
      shortDesc: "Hold impeccable client safety, structure boundaries, block secondary trauma, and prevent fatigue.",
      learnings: [
        "Understand the principles of trauma-informed care",
        "Create a safe, supportive, and non-judgmental environment for clients",
        "Develop effective communication and active listening skills",
        "Apply trauma-informed strategies in different professional settings",
        "Recognize signs of secondary trauma, compassion fatigue, and burnout",
        "Learn ethical practices and professional boundaries"
      ],
      transformation: [
        "Support clients with greater confidence and empathy",
        "Build trust through safe and compassionate communication",
        "Develop professional skills that create meaningful client relationships",
        "Prevent burnout while caring for others",
        "Become a confident trauma-informed practitioner"
      ],
      icon: ShieldCheck,
      bgGradient: "from-[#fcfbfa] to-[#041a24]/5"
    },
    {
      num: "07",
      title: "Module 7",
      subtitle: "Building Your Professional Healing Practice",
      shortDesc: "Learn business development, ethical marketing, pricing structure, and client relationship maps.",
      learnings: [
        "Plan and structure effective healing sessions",
        "Build strong, professional relationships with clients",
        "Develop your unique identity as a trauma healing practitioner",
        "Learn strategies for growing a sustainable and ethical practice",
        "Create a long-term professional development plan",
        "Explore personal branding and business fundamentals"
      ],
      transformation: [
        "Feel confident leading healing sessions",
        "Build authentic, long-lasting client relationships",
        "Develop a professional identity that reflects your purpose",
        "Create a sustainable healing practice with confidence",
        "Prepare for long-term career success in the wellness industry"
      ],
      icon: Briefcase,
      bgGradient: "from-[#fcfbfa] to-[#FAF5EB]/40"
    },
    {
      num: "08",
      title: "Module 8",
      subtitle: "Integration, Certification & Professional Growth",
      shortDesc: "Complete final case integrations, draw roadmaps, and step out as a verified Trauma Specialist.",
      learnings: [
        "Integrate everything you've learned throughout the program",
        "Apply trauma healing skills confidently in real-life situations",
        "Create a personalized healing and professional growth plan",
        "Explore opportunities for continued learning and specialization",
        "Develop a lifelong self-care and professional development strategy",
        "Celebrate your transformation and prepare for your next chapter"
      ],
      transformation: [
        "Confidently apply trauma healing knowledge in everyday life",
        "Leave with a personalized roadmap for continued healing",
        "Continue growing both personally and professionally",
        "Feel empowered to support yourself and others",
        "Graduate with the confidence to make a meaningful impact"
      ],
      icon: Award,
      bgGradient: "from-[#fcfbfa] to-[#041a24]/5"
    }
  ];

  const benefitsList = [
    "Release emotional pain and past burden",
    "Break toxic cycles and limiting patterns",
    "Improve relationships and communication",
    "Increase self-love, confidence & self-worth",
    "Reduce anxiety, stress and overwhelm",
    "Feel lighter, happier and more empowered",
    "Live a peaceful, purpose-driven life"
  ];

  const transformOutcomes = [
    "Stop blaming yourself and finally start understanding your emotional reactions.",
    "Accept your past and begin healing your inner wounds.",
    "Understand the hidden trauma patterns that influence your daily life.",
    "Recognize your nervous system responses instead of seeing trauma as a personal weakness.",
    "Become more mindful and confident when facing emotional challenges.",
    "Create a safe inner and outer environment that supports healing.",
    "Respond to difficult situations with greater calmness, resilience, and self-control.",
    "Gain better control over your emotions, thoughts, and expressions.",
    "Develop a clear sense of direction and purpose in life.",
    "Unlock your true potential by healing from within."
  ];

  const whatsIncluded = [
    "8 Comprehensive Learning Modules",
    "Guided Healing Exercises",
    "Practical Activities & Assessments",
    "Trauma Healing Workbook",
    "Inner Child Workbook",
    "Emotional Regulation Toolkit",
    "Guided Meditations",
    "Breathwork Library",
    "Reflection Journals",
    "Lifetime Learning Access",
    "Downloadable Resources",
    "Certificate of Completion"
  ];

  const careerOpps = [
    "Trauma Healing Practice",
    "Coaching & Mentoring",
    "Counselling Support Roles",
    "Corporate Wellness Programs",
    "Educational Institutions",
    "Community & NGO Programs",
    "Holistic Wellness Centres",
    "Mental Health Awareness Initiatives",
    "Personal Development & Life Coaching"
  ];

  const faqs = [
    {
      q: "Do I need prior experience?",
      a: "No. This program is suitable for beginners as well as experienced healthcare, wellness, or coaching professionals looking to expand their knowledge base."
    },
    {
      q: "Will I receive a certificate?",
      a: "Yes. Participants who successfully complete the modules, final assessments, and integration exercises will receive an accredited Certificate of Completion as a Trauma Healing Practitioner."
    },
    {
      q: "Is this course based only on theory?",
      a: "No. The program is heavily practical and includes experiential exercises, guided somatic activities, interactive tools, reflection workbooks, and real-world case simulations to ensure integrated learning."
    },
    {
      q: "Can I use this professionally?",
      a: "Yes. The practical knowledge and somatic skills gained in this program can be integrated into your existing professional role as a coach, counselor, educator, or holistic healer subject to local laws, credentials, and professional scope of practice."
    }
  ];

  return (
    <div className="bg-ivory text-ocean font-sans min-h-screen selection:bg-[#041a24]/10 selection:text-ocean trauma-page-root">
      
      {/* SCOPED FONT REGULATION */}
      <style dangerouslySetInnerHTML={{ __html: `
        .trauma-page-root .text-\\[9px\\] { font-size: 10.5px !important; }
        .trauma-page-root .text-\\[10px\\] { font-size: 12px !important; }
        .trauma-page-root .text-\\[11px\\] { font-size: 13px !important; }
        .trauma-page-root .text-xs { font-size: 14px !important; }
        .trauma-page-root .text-sm { font-size: 16px !important; }
        .trauma-page-root .text-base { font-size: 18px !important; }
        .trauma-page-root h1, .trauma-page-root h2, .trauma-page-root h3, .trauma-page-root h4 {
          line-height: 1.25 !important;
        }
        .trauma-page-root p, .trauma-page-root li, .trauma-page-root span {
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
      ` }} />

      {/* 1. NAVIGATION & BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-6 pt-6 relative z-10 flex flex-wrap justify-between items-center gap-4 border-b border-slate-200 pb-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-semibold text-sage hover:text-[#041a24] transition-colors uppercase tracking-widest cursor-pointer group"
          id="trauma-back-btn"
        >
          <ArrowLeft className="w-4 h-4 text-[#041a24] transition-transform group-hover:-translate-x-1" />
          Back to Sanctuary
        </button>
        <div className="flex items-center gap-2 text-[11px] text-ocean/70 uppercase tracking-wider font-semibold">
          <span className="hover:text-gold cursor-pointer" onClick={onBack}>Home</span>
          <span className="text-gold/40">&gt;</span>
          <span className="hover:text-gold cursor-pointer" onClick={onBack}>Healing Modalities</span>
          <span className="text-gold/40">&gt;</span>
          <span className="text-gold font-bold">Trauma Healing Practitioner Certification</span>
        </div>
      </div>

      {/* 2. UNIFIED HERO BANNER WITH CELESTIAL STARRY THEME */}
      <section className="relative watercolor-bg bg-ivory text-ocean pt-12 pb-16 px-6 overflow-hidden">
        {/* Soft celestial/starfield particle layers from Tarot Page */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, #0a3d54 1px, transparent 1px), radial-gradient(circle, #0a3d54 1px, transparent 1px)`,
          backgroundSize: '40px 40px, 60px 60px',
          backgroundPosition: '0 0, 20px 30px'
        }} />
        {/* Deep background glowing nebulae */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-teal-soft/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-sm md:text-base font-mono tracking-[0.25em] text-[#0A252C] uppercase font-bold block">
                TRAUMA THERAPY LANDING PAGE
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ocean-dark leading-none">
                Trauma Healing
              </h1>
            </div>

            {/* Elegant ornament line */}
            <div className="flex items-center gap-3 py-1 text-gold">
              <div className="h-[1px] w-12 bg-gold" />
              <Sparkles className="w-4 h-4 text-gold fill-current animate-pulse" />
              <div className="h-[1px] w-56 bg-gold" />
            </div>

            <div className="text-base md:text-lg text-[#0A252C] leading-relaxed max-w-xl font-light space-y-4">
              <p className="font-serif italic text-gold text-2xl md:text-3xl font-light tracking-wide leading-snug">
                Nobody here is broken.<br />
                You have just been bleating a story that was never yours.
              </p>
              <p>
                Stop carrying old wounds. Do not let them define your life anymore.
              </p>
              <p className="font-serif text-xl md:text-2xl font-bold text-ocean-dark">
                Be ready to be a new avatar.
              </p>
            </div>

            {/* 5 Highlights Icons under hero text matching Tarot */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 pt-6 pb-6 border-t border-b border-gold/35">
              {heroHighlights.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-2 group">
                  <div className="w-11 h-11 rounded-full bg-[#FAFDFD] border border-[#041a24]/20 flex items-center justify-center text-[#041a24] group-hover:bg-[#041a24]/10 transition-colors shadow-sm">
                    <item.icon className="w-5 h-5 stroke-[1.2]" />
                  </div>
                  <span className="text-[10px] md:text-xs text-ocean font-medium leading-tight max-w-[100px] block">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-4 pt-2">
              <button
                onClick={() => onBook('Trauma Healing Certification Course')}
                className="px-8 py-4 bg-gradient-to-r from-ocean to-ocean-dark hover:from-gold hover:to-gold-light text-cream hover:text-ocean-dark border border-gold/35 hover:border-gold text-xs font-bold tracking-widest rounded-xl shadow-lg transition-all duration-300 uppercase flex items-center gap-2 group cursor-pointer whitespace-nowrap"
                id="trauma-enroll-btn"
              >
                <span>Enroll in Programme</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={handleDownloadBrochure}
                disabled={downloading}
                className="px-8 py-4 bg-white border border-[#0a3d54] text-ocean hover:bg-slate-50 text-xs font-bold tracking-[0.15em] uppercase rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md whitespace-nowrap"
                id="trauma-download-btn"
              >
                <Download className="w-4 h-4 text-[#0a3d54]" />
                {downloading ? 'Downloading...' : 'Download'}
              </button>
            </div>
          </div>

          {/* Hero Right: Sunrise Landscape Arched Portal representing Somatic Resilience */}
          <div className="lg:col-span-6 flex justify-center items-center relative min-h-[500px] py-6 overflow-visible">
            
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
            <div className="w-full max-w-[480px] aspect-[4/5] rounded-t-[16rem] rounded-b-[4rem] border-2 border-gold/30 shadow-[0_25px_60px_rgba(192,148,44,0.15)] relative overflow-hidden bg-gradient-to-b from-[#e3f2fd] via-[#fdf6e2] to-[#fffbeb] group/portal animate-fade-in">
              
              {/* Thin Inner Nested Arched Gold Border */}
              <div className="absolute inset-2.5 rounded-t-[15.5rem] rounded-b-[3.5rem] border border-gold/15 pointer-events-none z-30" />

              {/* Landscape Layer 1: Sky and Sunrise Gradient Backdrop */}
              <div className="absolute inset-0 z-0">
                {/* Celestial Radial Sunrise */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#bbdefb] via-[#fff9db] to-[#ffe0b2] opacity-100" />
                <div className="absolute bottom-[35%] left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-gradient-to-t from-[#ffe082] via-[#ffd54f] to-transparent blur-[40px] opacity-85 z-0" />
                <div className="absolute bottom-[38%] left-1/2 -translate-x-1/2 w-18 h-18 rounded-full bg-gradient-to-b from-[#fffbeb] to-[#fff59d] blur-[2px] shadow-[0_0_25px_#fff59d] opacity-95 z-10" />

                {/* Faint Sacred Geometry blended into the sky */}
                <svg className="absolute inset-0 w-full h-full text-gold/15 pointer-events-none opacity-[0.2] scale-125 translate-y-[-10%]" viewBox="0 0 100 100">
                  <circle cx="50" cy="40" r="30" stroke="currentColor" strokeWidth="0.25" fill="none" />
                  <circle cx="50" cy="40" r="20" stroke="currentColor" strokeWidth="0.15" fill="none" />
                  <circle cx="50" cy="40" r="10" stroke="currentColor" strokeWidth="0.25" fill="none" />
                  <g stroke="currentColor" strokeWidth="0.15" fill="none">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <line
                        key={i}
                        x1="50"
                        y1="40"
                        x2={50 + 30 * Math.cos((i * 30 * Math.PI) / 180)}
                        y2={40 + 30 * Math.sin((i * 30 * Math.PI) / 180)}
                      />
                    ))}
                  </g>
                  {/* Subtle overlapping rings (flower of life segment) */}
                  <circle cx="40" cy="40" r="10" stroke="currentColor" strokeWidth="0.1" fill="none" />
                  <circle cx="60" cy="40" r="10" stroke="currentColor" strokeWidth="0.1" fill="none" />
                  <circle cx="50" cy="30" r="10" stroke="currentColor" strokeWidth="0.1" fill="none" />
                  <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.1" fill="none" />
                </svg>
              </div>

              {/* Landscape Layer 2: Distance Mountain Silhouettes in Haze */}
              <div className="absolute inset-x-0 bottom-[38%] h-[20%] z-5 pointer-events-none">
                {/* Far range */}
                <svg className="absolute bottom-0 w-full h-full text-[#94a3b8] opacity-45 fill-current" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,20 L0,12 Q15,4 30,10 T60,6 Q80,12 100,8 L100,20 Z" />
                </svg>
                {/* Mid range */}
                <svg className="absolute bottom-[-1px] w-full h-full text-[#64748b] opacity-60 fill-current" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,20 L0,15 Q25,8 50,16 T100,11 L100,20 Z" />
                </svg>
              </div>

              {/* Landscape Layer 3: Calm Lake with Shimmering reflections */}
              <div className="absolute inset-x-0 bottom-0 h-[40%] z-10 overflow-hidden bg-gradient-to-b from-[#ffe0b2] via-[#e3f2fd] to-[#b3e5fc]">
                {/* Lake Shimmering Golden Path */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-52 h-full bg-gradient-to-b from-amber-300/35 via-amber-500/10 to-transparent blur-[15px] opacity-85 z-10 pointer-events-none" />

                {/* Simulated Water ripples */}
                <svg className="absolute inset-0 w-full h-full text-sky-400/50 z-10 pointer-events-none" viewBox="0 0 200 100" preserveAspectRatio="none">
                  <path d="M 10,10 H 190 M 30,25 H 170 M 15,40 H 185 M 40,55 H 160 M 20,70 H 180 M 50,85 H 150" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,12" fill="none" style={{ animation: 'landscape-ripple 8s linear infinite' }} />
                  <path d="M 25,18 H 175 M 10,32 H 190 M 35,48 H 165 M 15,62 H 185 M 45,78 H 155 M 20,92 H 180" stroke="currentColor" strokeWidth="0.75" strokeDasharray="8,15" fill="none" style={{ animation: 'landscape-ripple 12s linear infinite reverse' }} />
                </svg>

                {/* Shimmering highlights on the water */}
                <div className="absolute top-2 left-[40%] w-1.5 h-1.5 rounded-full bg-amber-200 opacity-80" style={{ animation: 'landscape-shimmer 2.5s infinite ease-in-out' }} />
                <div className="absolute top-6 left-[55%] w-1 h-1 rounded-full bg-amber-300 opacity-70" style={{ animation: 'landscape-shimmer 3s infinite ease-in-out', animationDelay: '0.8s' }} />
                <div className="absolute top-4 left-[48%] w-2 h-0.5 bg-amber-100 opacity-90 rounded-full" style={{ animation: 'landscape-shimmer 2s infinite ease-in-out', animationDelay: '0.3s' }} />
                <div className="absolute top-10 left-[42%] w-1.5 h-0.5 bg-amber-300 opacity-60 rounded-full" style={{ animation: 'landscape-shimmer 3.5s infinite ease-in-out', animationDelay: '1.2s' }} />
                <div className="absolute top-12 left-[51%] w-2 h-1 bg-amber-100 opacity-80 rounded-full" style={{ animation: 'landscape-shimmer 4s infinite ease-in-out', animationDelay: '0.5s' }} />
              </div>

              {/* Landscape Layer 4: Soft Drifting Mist */}
              <div 
                className="absolute inset-x-0 bottom-[28%] h-[20%] z-15 pointer-events-none opacity-[0.35]"
                style={{ animation: 'landscape-drift 24s infinite ease-in-out' }}
              >
                {/* Smooth white/teal haze overlays */}
                <div className="absolute top-0 left-[-10%] w-[60%] h-6 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-md" />
                <div className="absolute top-2 right-[-10%] w-[55%] h-8 bg-gradient-to-r from-transparent via-[#daf2ee]/30 to-transparent blur-lg" />
                <div className="absolute bottom-1 left-[15%] w-[70%] h-6 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-md" />
              </div>

              {/* Landscape Layer 5: Birds Flying in Distance */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <svg className="absolute top-[28%] left-[25%]" width="24" height="16" viewBox="0 0 24 16" style={{ animation: 'landscape-bird-fly 15s infinite linear' }}>
                  <path d="M2,10 Q6,4 10,8 Q14,4 18,10" stroke="white" strokeWidth="0.75" fill="none" opacity="0.8" />
                </svg>
                <svg className="absolute top-[22%] left-[35%]" width="16" height="12" viewBox="0 0 24 16" style={{ animation: 'landscape-bird-fly 12s infinite linear', animationDelay: '4s' }}>
                  <path d="M2,10 Q6,4 10,8 Q14,4 18,10" stroke="white" strokeWidth="0.5" fill="none" opacity="0.6" />
                </svg>
                <svg className="absolute top-[32%] left-[18%]" width="20" height="14" viewBox="0 0 24 16" style={{ animation: 'landscape-bird-fly 18s infinite linear', animationDelay: '8s' }}>
                  <path d="M2,10 Q6,4 10,8 Q14,4 18,10" stroke="white" strokeWidth="0.6" fill="none" opacity="0.7" />
                </svg>
              </div>

              {/* Landscape Layer 6: Majestic Tree of Resilience (Left-to-Right Framing) */}
              <div className="absolute left-[-2%] bottom-[32%] w-[45%] h-[55%] z-20 pointer-events-none overflow-visible origin-bottom" style={{ animation: 'landscape-sway 10s infinite ease-in-out' }}>
                <svg className="w-full h-full text-[#4a2e1b]" viewBox="0 0 100 120" fill="currentColor">
                  {/* Organic Tree Trunk and Branches */}
                  <path d="M12,120 Q16,80 32,60 Q45,45 42,20 Q41,18 40,16 Q35,32 28,45 Q20,58 10,65 Q8,66 10,68 Q18,65 24,56 Q30,48 35,35 Q37,15 50,5 Q55,2 52,12 Q48,22 44,38 Q46,45 58,40 Q64,38 72,42 Q75,44 70,46 Q64,43 56,44 Q46,46 42,54 Q38,62 30,85 Q22,105 20,120 Z" />
                  
                  {/* Majestic foliage clustering */}
                  <circle cx="50" cy="5" r="14" className="text-[#2d5a27]" />
                  <circle cx="38" cy="18" r="12" className="text-[#1b4314]" />
                  <circle cx="60" cy="12" r="11" className="text-[#2d5a27]" opacity="0.95" />
                  <circle cx="44" cy="30" r="13" className="text-[#14320e]" />
                  <circle cx="28" cy="42" r="10" className="text-[#34632a]" />
                  <circle cx="68" cy="40" r="9" className="text-[#224d1a]" opacity="0.85" />

                  {/* Highlights/leaf details within tree */}
                  <circle cx="52" cy="2" r="1.5" className="text-gold/45" />
                  <circle cx="35" cy="15" r="1" className="text-gold/30" />
                  <circle cx="42" cy="28" r="1.2" className="text-gold/35" />
                  <circle cx="58" cy="10" r="1" className="text-teal-soft/25" />
                  <circle cx="26" cy="40" r="1.5" className="text-gold/25" />
                </svg>
              </div>

              {/* Landscape Layer 7: Sitting Person silhouette on rock platform */}
              <div className="absolute left-[38%] bottom-[24%] w-[25%] h-[20%] z-25 pointer-events-none">
                {/* Solid rock platform projecting into lake */}
                <svg className="absolute bottom-[-15px] left-[-20%] w-[140%] h-[120%] text-[#4b382a]" viewBox="0 0 60 40" fill="currentColor">
                  <path d="M0,40 L0,22 Q20,15 40,25 Q50,28 60,35 L60,40 Z" />
                  <path d="M10,25 Q25,20 38,26" stroke="rgba(192,148,44,0.4)" strokeWidth="0.5" fill="none" />
                </svg>

                {/* Seated Person Silhouetted from Behind in deep meditation */}
                <svg className="absolute bottom-[10px] left-[15%] w-[70%] h-[100%] text-[#2e2a24]" viewBox="0 0 40 50" fill="currentColor">
                  {/* Head & Neck */}
                  <circle cx="20" cy="12" r="4.5" />
                  <path d="M18.5,16 L21.5,16 L21,20 L19,20 Z" />
                  {/* Torso & Shoulders */}
                  <path d="M11,22 Q20,19 29,22 Q32,32 30,42 L10,42 Q8,32 11,22 Z" />
                  {/* Folded cross-legged base */}
                  <path d="M6,42 Q20,36 34,42 Q37,45 34,48 Q20,49 6,48 Q3,45 6,42 Z" />
                  {/* Left and right folded arms resting on lap */}
                  <path d="M10,24 Q7,32 10,40 Q14,40 12,34" />
                  <path d="M30,24 Q33,32 30,40 Q26,40 28,34" />
                </svg>
              </div>

              {/* Landscape Layer 8: Blooming Lotus in Lower Foreground with pulsing light */}
              <div className="absolute right-[12%] bottom-[6%] w-[26%] aspect-square z-25">
                {/* Soft glow halo behind lotus (pulsing animation) */}
                <div 
                  className="absolute inset-[-40%] rounded-full bg-gradient-to-r from-pink-400/35 via-amber-300/25 to-transparent blur-[8px] z-0" 
                  style={{ animation: 'landscape-pulse-glow 4s infinite ease-in-out' }}
                />
                
                {/* High fidelity layered SVG Lotus */}
                <svg className="w-full h-full text-pink-300 drop-shadow-[0_0_8px_rgba(244,143,177,0.7)] z-10 relative" viewBox="0 0 40 40" fill="currentColor">
                  {/* Back outer petals */}
                  <path d="M20,38 C12,34 5,28 7,20 C10,18 15,22 20,28 C25,22 30,18 33,20 C35,28 28,34 20,38 Z" className="text-pink-400 opacity-80" />
                  {/* Middle petals */}
                  <path d="M20,38 C14,32 10,25 12,16 C16,16 18,22 20,27 C22,22 24,16 28,16 C30,25 26,32 20,38 Z" className="text-pink-300" />
                  {/* Front/Center petals */}
                  <path d="M20,38 C16,33 14,28 16,18 C18,20 19,25 20,28 C21,25 22,20 24,18 C26,28 24,33 20,38 Z" className="text-rose-200" />
                  {/* Lotus Golden pistil center */}
                  <circle cx="20" cy="27" r="2.5" className="text-gold" />
                  <line x1="20" y1="27" x2="20" y2="23" stroke="#fef08a" strokeWidth="0.75" />
                  <line x1="18.5" y1="27.5" x2="17.5" y2="24" stroke="#fef08a" strokeWidth="0.5" />
                  <line x1="21.5" y1="27.5" x2="22.5" y2="24" stroke="#fef08a" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Landscape Layer 9: Tiny Floating Lotus Petals and Golden Particles */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {/* Rising Particles */}
                <div className="absolute bottom-[10%] right-[22%] w-1.5 h-1.5 rounded-full bg-yellow-200" style={{ animation: 'landscape-particle-rise 6s infinite ease-out' }} />
                <div className="absolute bottom-[14%] right-[16%] w-1 h-1 rounded-full bg-pink-200" style={{ animation: 'landscape-particle-rise 5s infinite ease-out', animationDelay: '1.5s' }} />
                <div className="absolute bottom-[8%] right-[28%] w-1.5 h-1.5 rounded-full bg-amber-200" style={{ animation: 'landscape-particle-rise 7s infinite ease-out', animationDelay: '3s' }} />
                <div className="absolute bottom-[12%] right-[12%] w-1 h-1 rounded-full bg-yellow-100" style={{ animation: 'landscape-particle-rise 5.5s infinite ease-out', animationDelay: '4.5s' }} />

                {/* Drifting Lotus Petals */}
                <svg className="absolute top-[35%] right-[20%] text-pink-300/40 fill-current" width="10" height="14" viewBox="0 0 10 14" style={{ animation: 'landscape-particle-rise 9s infinite ease-in-out', animationDelay: '0.5s' }}>
                  <path d="M5,0 Q0,5 2,10 Q5,14 8,10 Q10,5 5,0 Z" />
                </svg>
                <svg className="absolute top-[45%] right-[40%] text-pink-200/50 fill-current" width="8" height="12" viewBox="0 0 10 14" style={{ animation: 'landscape-particle-rise 11s infinite ease-in-out', animationDelay: '2.5s' }}>
                  <path d="M5,0 Q0,5 2,10 Q5,14 8,10 Q10,5 5,0 Z" />
                </svg>
                <svg className="absolute top-[25%] right-[10%] text-pink-400/30 fill-current" width="12" height="16" viewBox="0 0 10 14" style={{ animation: 'landscape-particle-rise 10s infinite ease-in-out', animationDelay: '4.5s' }}>
                  <path d="M5,0 Q0,5 2,10 Q5,14 8,10 Q10,5 5,0 Z" />
                </svg>
              </div>

            </div>

          </div>
        </div>

        {/* Curved Divider at the Bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[45px] text-white" viewBox="0 0 1200 120" fill="currentColor" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,18,84.13,26.86,133.32,41.9,183.54,54.71,234.33,63.47,263.26,68.45,292.48,64,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* 3. DEFINITION / WHAT IS TRAUMA HEALING SECTION (Rooted & Growing Art Styles!) */}
      <section className="py-16 md:py-20 bg-white border-t border-[#dfdbc9]/30 relative overflow-hidden" id="what-is-trauma">
        {/* Scoped CSS animations for about section cards */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes float-gentle {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-4px) rotate(2deg); }
          }
          @keyframes sway-slow {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(1.5deg); }
          }
          @keyframes pulse-subtle {
            0%, 100% { opacity: 0.45; }
            50% { opacity: 0.85; }
          }
        `}} />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Rooted in Safety Card */}
            <div className="lg:col-span-3 flex flex-col relative">
              <div className="bg-gradient-to-b from-[#fdfbf7] to-[#fcfaf2] border border-gold/30 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full justify-start relative overflow-hidden group">
                <div className="absolute inset-2 border border-gold/10 rounded-xl pointer-events-none" />
                
                {/* Artistic Graphic Window: Ancient Tree Rooted Beside Forest Stream */}
                <div className="w-full aspect-[4/3] rounded-t-xl rounded-b-md border border-gold/20 overflow-hidden bg-gradient-to-b from-[#daf2ee]/25 to-[#fdfbf7] relative">
                  <svg className="w-full h-full" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="left-sky" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="#fef08a" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#e2e8f0" />
                      </linearGradient>
                      <linearGradient id="left-trunk" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#452a1d" />
                        <stop offset="100%" stopColor="#1f1008" />
                      </linearGradient>
                      <linearGradient id="left-sunray" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef08a" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#fef08a" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="left-stream" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>

                    {/* Sky and ambient lighting */}
                    <rect width="200" height="160" fill="url(#left-sky)" />
                    
                    {/* Distant soft forest silhouettes */}
                    <path d="M0 100 Q40 80 80 95 T160 85 T200 90 L200 160 L0 160 Z" fill="#cbd5e1" opacity="0.4" />
                    <path d="M0 110 Q50 95 100 108 T200 100 L200 160 L0 160 Z" fill="#94a3b8" opacity="0.3" />

                    {/* Sunlight Rays */}
                    <polygon points="20,-20 80,-20 160,160 70,160" fill="url(#left-sunray)" opacity="0.3" />
                    <polygon points="60,-20 110,-20 190,160 120,160" fill="url(#left-sunray)" opacity="0.2" />

                    {/* Calm Forest Stream */}
                    <path d="M0 130 C60 125, 120 140, 200 125 L200 145 C120 155, 60 140, 0 150 Z" fill="url(#left-stream)" />
                    <path d="M20 132 C80 128, 140 142, 180 130" stroke="#93c5fd" strokeWidth="0.75" strokeDasharray="4 8" opacity="0.5" />

                    {/* Mossy Ground bank */}
                    <path d="M0 125 Q40 120 70 122 T140 128 T200 126 L200 160 L0 160 Z" fill="#14532d" />
                    <path d="M0 132 Q35 127 65 130 T130 134 T200 132 L200 160 L0 160 Z" fill="#166534" />

                    {/* Mossy Stones */}
                    <path d="M15 135 Q25 125 35 132 T40 145 L10 145 Z" fill="#475569" stroke="#334155" strokeWidth="0.5" />
                    <path d="M75 142 Q85 135 95 140 T105 152 L70 152 Z" fill="#334155" />

                    {/* Expansive roots winding over earth & stone */}
                    <path d="M48 115 C45 125 35 130 25 134 C20 136 12 142 8 148" stroke="url(#left-trunk)" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <path d="M48 115 C45 125 35 130 25 134" stroke="#d97706" strokeWidth="0.75" fill="none" opacity="0.3" />
                    
                    <path d="M52 118 C52 128 55 136 58 145 C60 150 63 154 65 158" stroke="url(#left-trunk)" strokeWidth="5.5" strokeLinecap="round" fill="none" />
                    <path d="M52 118 C52 128 55 136 58 145" stroke="#f59e0b" strokeWidth="1" fill="none" opacity="0.35" />

                    <path d="M56 116 C60 124 70 132 80 138 C88 142 94 144 98 148" stroke="url(#left-trunk)" strokeWidth="3.5" strokeLinecap="round" fill="none" />

                    {/* Ancient Tree Trunk */}
                    <path d="M42 60 Q45 85 46 115 L58 115 Q55 85 58 60 Z" fill="url(#left-trunk)" />
                    <path d="M46 70 Q48 90 49 110" stroke="#1f1008" strokeWidth="0.5" fill="none" />
                    <path d="M51 65 Q52 88 53 112" stroke="#1f1008" strokeWidth="0.5" fill="none" />

                    {/* Branches */}
                    <path d="M44 70 Q30 55 20 52" stroke="url(#left-trunk)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <path d="M56 68 Q70 52 82 48" stroke="url(#left-trunk)" strokeWidth="2.5" strokeLinecap="round" fill="none" />

                    {/* Foliage Canopy */}
                    <g opacity="0.95">
                      <circle cx="22" cy="46" r="14" fill="#064e3b" />
                      <circle cx="80" cy="44" r="15" fill="#064e3b" />
                      <circle cx="48" cy="26" r="16" fill="#064e3b" />
                      
                      <circle cx="26" cy="50" r="11" fill="#15803d" />
                      <circle cx="74" cy="46" r="12" fill="#15803d" />
                      <circle cx="48" cy="30" r="13" fill="#15803d" />
                      
                      <circle cx="30" cy="48" r="8" fill="#4ade80" opacity="0.8" />
                      <circle cx="70" cy="44" r="9" fill="#4ade80" opacity="0.8" />
                      <circle cx="48" cy="28" r="10" fill="#a7f3d0" opacity="0.85" />
                    </g>

                    {/* Ferns, Wildflowers, Botanical elements */}
                    <path d="M8 128 Q6 118 2 114" stroke="#22c55e" strokeWidth="0.75" strokeLinecap="round" fill="none" />
                    <path d="M12 127 Q12 118 10 112" stroke="#15803d" strokeWidth="0.75" strokeLinecap="round" fill="none" />
                    
                    <circle cx="14" cy="131" r="1.5" fill="#f87171" />
                    <circle cx="28" cy="138" r="1.5" fill="#fef08a" />
                    <circle cx="34" cy="144" r="1.2" fill="#60a5fa" />
                    <circle cx="86" cy="145" r="1.5" fill="#fef08a" />

                    {/* Floating butterflies & delicate particles */}
                    <path d="M30 85 Q28 82 29 80 Q31 82 33 80 Q32 83 30 85 Z" fill="#fbbf24" style={{ animation: 'float-gentle 4s infinite ease-in-out' }} />
                    <path d="M140 65 Q138 62 139 60 Q141 62 143 60 Q142 63 140 65 Z" fill="#f472b6" style={{ animation: 'float-gentle 5s infinite ease-in-out', animationDelay: '1s' }} />

                    <circle cx="55" cy="110" r="1.2" fill="#fef08a" opacity="0.8" style={{ animation: 'pulse-subtle 3s infinite' }} />
                    <circle cx="38" cy="120" r="0.8" fill="#fef08a" opacity="0.6" style={{ animation: 'pulse-subtle 4s infinite', animationDelay: '0.5s' }} />
                    <circle cx="68" cy="125" r="1" fill="#fef08a" opacity="0.7" style={{ animation: 'pulse-subtle 3.5s infinite', animationDelay: '1.2s' }} />
                  </svg>
                </div>

                {/* Left Card Content */}
                <div className="mt-4 text-center">
                  <h3 className="font-serif text-lg md:text-xl text-black font-semibold tracking-tight">
                    Rooted in Safety
                  </h3>
                  <div className="h-[1px] w-12 bg-gold/40 mx-auto my-2" />
                  <p className="text-xs md:text-sm text-black leading-relaxed font-normal text-justify" style={{ textAlign: 'justify' }}>
                    Healing begins when the body feels safe enough to soften. Like deep roots anchoring a tree through every season, emotional safety creates the foundation for resilience, self-trust, and lasting transformation.
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Column: Detailed Description */}
            <div className="lg:col-span-6 flex flex-col justify-center text-center space-y-6 px-4 lg:px-8">
              <div className="space-y-3">
                <h2 className="font-serif text-3xl md:text-4xl text-ocean-dark font-semibold tracking-tight">
                  What is Trauma Healing?
                </h2>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[1px] w-12 bg-gold/60" />
                  <Moon className="w-5 h-5 text-gold fill-none" />
                  <div className="h-[1px] w-12 bg-gold/60" />
                </div>
              </div>

              <div className="text-base md:text-base text-[#0A252C] font-normal leading-[1.75] max-w-2xl mx-auto space-y-4">
                <p className="text-justify" style={{ textAlign: 'justify' }}>
                  Trauma healing is the process of gently identifying, digesting, and releasing stored distress and survival conditioning from the mind, the somatic tissues, and the nervous system. 
                </p>
                <p className="text-justify" style={{ textAlign: 'justify' }}>
                  Instead of merely managing symptoms or talking about memories, this certification addresses root emotional wounding, child patterns, and somatic blocks. We reconstruct basic emotional safety so the body can naturally shift back into calm, resilience, and genuine self-worth.
                </p>
                <p className="text-justify" style={{ textAlign: 'justify' }}>
                  By understanding how stress response mechanisms function, learners develop profound practical tools to regulate themselves and ethically support clients through highly transformative life changes.
                </p>
              </div>
            </div>

            {/* Right Column: Growing Beyond the Storm Card */}
            <div className="lg:col-span-3 flex flex-col relative">
              <div className="bg-gradient-to-b from-[#fdfbf7] to-[#fcfaf2] border border-gold/30 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full justify-start relative overflow-hidden group">
                <div className="absolute inset-2 border border-gold/10 rounded-xl pointer-events-none" />
                
                {/* Artistic Graphic Window: Magnificent Tree of Life Reflecting in Tranquil Lake */}
                <div className="w-full aspect-[4/3] rounded-t-xl rounded-b-md border border-gold/20 overflow-hidden bg-gradient-to-b from-[#0f2c3d] via-[#102433] to-[#04111a] relative">
                  <svg className="w-full h-full" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="right-sky" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0f1d2a" />
                        <stop offset="40%" stopColor="#1e3a5f" />
                        <stop offset="70%" stopColor="#b45309" />
                        <stop offset="100%" stopColor="#fef08a" />
                      </linearGradient>
                      <linearGradient id="right-lake" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#b45309" stopOpacity="0.8" />
                        <stop offset="30%" stopColor="#1e3a5f" />
                        <stop offset="100%" stopColor="#0f172a" />
                      </linearGradient>
                      <linearGradient id="right-canopy" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#86efac" />
                        <stop offset="50%" stopColor="#16a34a" />
                        <stop offset="100%" stopColor="#14532d" />
                      </linearGradient>
                      <linearGradient id="right-sunray" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#fffbeb" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Sky Backing (Sunrise) */}
                    <rect width="200" height="90" fill="url(#right-sky)" />
                    
                    {/* Rolling Hills & Mist */}
                    <path d="M0 75 Q40 60 90 70 T200 65 L200 90 L0 90 Z" fill="#1e293b" opacity="0.5" />
                    <path d="M0 80 Q60 72 120 82 T200 78 L200 90 L0 90 Z" fill="#0f172a" />

                    {/* Sun Disk */}
                    <circle cx="100" cy="74" r="11" fill="#fffbeb" />

                    {/* Lake */}
                    <rect y="90" width="200" height="70" fill="url(#right-lake)" />

                    {/* Sunlight rays through branches */}
                    <polygon points="100,74 40,0 80,0" fill="url(#right-sunray)" opacity="0.25" />
                    <polygon points="100,74 120,0 160,0" fill="url(#right-sunray)" opacity="0.25" />

                    {/* Tree of Life standing on shore */}
                    <g>
                      <path d="M52 50 Q54 70 48 90 L62 90 Q56 70 58 50 Z" fill="#2d1500" />
                      <path d="M54 60 Q40 45 32 40" stroke="#2d1500" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M56 58 Q72 42 80 38" stroke="#2d1500" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M55 52 Q55 35 50 25" stroke="#2d1500" strokeWidth="2" strokeLinecap="round" />

                      {/* Broad flourishing canopy */}
                      <circle cx="32" cy="38" r="14" fill="url(#right-canopy)" opacity="0.9" />
                      <circle cx="80" cy="36" r="15" fill="url(#right-canopy)" opacity="0.9" />
                      <circle cx="50" cy="24" r="16" fill="url(#right-canopy)" opacity="0.95" />
                      <circle cx="40" cy="32" r="13" fill="#22c55e" opacity="0.8" />
                      <circle cx="70" cy="30" r="13" fill="#22c55e" opacity="0.8" />
                      <circle cx="56" cy="18" r="12" fill="#86efac" opacity="0.85" />
                    </g>

                    {/* Mirror reflection of trunk & canopy in lake with opacity */}
                    <g opacity="0.4" style={{ transform: 'scaleY(-0.6) translateY(-235px) translateX(0px)' }}>
                      <path d="M52 50 Q54 70 48 90 L62 90 Q56 70 58 50 Z" fill="#140a00" />
                      <circle cx="32" cy="38" r="14" fill="#064e3b" />
                      <circle cx="80" cy="36" r="15" fill="#064e3b" />
                      <circle cx="50" cy="24" r="16" fill="#064e3b" />
                    </g>

                    {/* Water ripples */}
                    <line x1="20" y1="105" x2="180" y2="105" stroke="#38bdf8" strokeWidth="0.5" strokeDasharray="8 15" opacity="0.5" />
                    <line x1="40" y1="115" x2="160" y2="115" stroke="#38bdf8" strokeWidth="0.75" strokeDasharray="12 20" opacity="0.4" />
                    <line x1="10" y1="125" x2="190" y2="125" stroke="#38bdf8" strokeWidth="0.5" strokeDasharray="6 12" opacity="0.5" />

                    {/* Shoreline */}
                    <path d="M0 90 Q30 88 55 90 T100 92 L100 100 L0 100 Z" fill="#091e20" />
                    
                    {/* Lotus flowers */}
                    <path d="M75 102 Q78 98 80 102 Q82 98 85 102 Z" fill="#f472b6" />
                    <ellipse cx="80" cy="103" rx="4" ry="1.2" fill="#ec4899" />

                    {/* Graceful birds flying */}
                    <g opacity="0.5">
                      <path d="M140 30 Q143 25 146 28 Q149 25 152 30" stroke="#fff" strokeWidth="0.5" fill="none" />
                      <path d="M155 24 Q157 20 159 22 Q161 20 163 24" stroke="#fff" strokeWidth="0.5" fill="none" />
                    </g>

                    {/* Subtle butterflies */}
                    <path d="M115 45 Q113 42 114 40 Q116 42 118 40 Q117 43 115 45 Z" fill="#fbbf24" style={{ animation: 'float-gentle 4s infinite ease-in-out' }} />
                    <circle cx="120" cy="78" r="0.8" fill="#fffbeb" opacity="0.8" style={{ animation: 'pulse-subtle 3s infinite' }} />
                  </svg>
                </div>

                {/* Right Card Content */}
                <div className="mt-4 text-center">
                  <h3 className="font-serif text-lg md:text-xl text-black font-semibold tracking-tight">
                    Growing Beyond the Storm
                  </h3>
                  <div className="h-[1px] w-12 bg-gold/40 mx-auto my-2" />
                  <p className="text-xs md:text-sm text-black leading-relaxed font-normal text-justify" style={{ textAlign: 'justify' }}>
                    Healing doesn't erase the past—it helps you grow beyond it. Like a flourishing tree reaching toward the light, every step forward brings renewed strength, clarity, hope, and the freedom to embrace life again.
                  </p>
                </div>
              </div>
            </div>

          </div>



        </div>
      </section>

      {/* 4. WHY CHOOSE THIS CERTIFICATION? */}
      <section className="py-16 md:py-20 bg-ivory border-t border-[#dfdbc9]/30 relative overflow-hidden">
        {/* Starry overlay details */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, #0a3d54 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />

        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ocean font-medium tracking-tight mb-3">
            Why Choose This Certification?
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-14">
            <div className="h-[1px] w-14 bg-gold/30" />
            <span className="text-gold text-xs">✦</span>
            <div className="h-[1px] w-14 bg-gold/30" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 max-w-6xl mx-auto">
            {[
              { title: "Internationally Designed Curriculum", desc: "Crafted following global psychotherapeutic and somatic standards to ensure premium educational depth.", icon: Globe },
              { title: "Evidence-Informed Trauma Framework", desc: "Grounded in neuroscience, attachment theory, and cutting-edge polyvagal system diagnostics.", icon: Brain },
              { title: "Mind, Body & Nervous System", desc: "No single-dimension healing. We integrate mental reframing with profound bodily releasing exercises.", icon: Sparkles },
              { title: "Practical Healing Techniques", desc: "Drip-fed guided exercises, scripts, and real scenarios. Learn by doing, not just reading theory.", icon: BookOpen },
              { title: "Lifetime Access to Materials", desc: "Never lose access. Study at your own pace from anywhere in the world, with lifetime syllabus upgrades.", icon: Clock },
              { title: "Downloadable Resources & Workbooks", desc: "Fully equipped with premium workbook PDFs, client intake checklists, and integration guides.", icon: Download },
              { title: "Certificate of Completion", desc: "Secure a gorgeous, verifiable digital license celebrating your trauma-informed healing expertise.", icon: Award },
              { title: "Suitable for Personal & Pro Use", desc: "Whether healing childhood wounds or coaching paying clients, this curriculum transforms lives.", icon: UserCheck }
            ].map((prop, idx) => (
              <div 
                key={idx}
                className="bg-white border border-[#dfdbc9] hover:border-gold hover:shadow-md p-5 rounded-2xl flex flex-col items-center justify-center text-center group transition-all duration-300 hover:-translate-y-1 min-h-[220px]"
              >
                <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-3 group-hover:scale-110 transition-transform duration-300">
                  <prop.icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="font-serif text-sm font-bold text-black leading-tight mb-2 min-h-[40px] flex items-center justify-center">
                  {prop.title}
                </h4>
                <p className="text-[11px] text-[#0a3d54]/85 font-light leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SYLLABUS: INTERACTIVE CURRICULUM SECTION (Tarot Modules Accordion Grid!) */}
      <section className="py-16 md:py-20 px-6 bg-[#faf7f2] border-t border-[#dfdbc9]/30 relative z-10" id="curriculum">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12 space-y-2">
            <h2 className="font-serif text-3xl md:text-4xl text-ocean-dark font-semibold tracking-tight">
              Program Curriculum
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-[1px] bg-gold" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="w-10 h-[1px] bg-gold" />
            </div>
            <p className="text-base sm:text-lg text-sage font-medium italic pt-1">
              Click any module card to explore what you will learn and your internal transformation.
            </p>
          </div>

          {/* Interactive Modules Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left side list of 8 Modules */}
            <div className="lg:col-span-5 space-y-3.5">
              {traumaModules.map((mod, idx) => {
                const IconComponent = mod.icon;
                const isActive = activeModule === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveModule(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                      isActive 
                        ? 'bg-[#041a24] text-cream border-gold shadow-lg translate-x-2' 
                        : 'bg-white text-ocean border-gold-light/20 hover:border-gold/45 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`font-serif text-xl font-bold ${isActive ? 'text-gold' : 'text-ocean/45 group-hover:text-gold'}`}>
                        {mod.num}
                      </span>
                      <div className="space-y-0.5">
                        <span className={`text-[10px] font-bold uppercase tracking-widest block ${isActive ? 'text-gold-light/70' : 'text-[#5a8795]'}`}>
                          {mod.title}
                        </span>
                        <h4 className="font-serif text-sm font-bold leading-tight">
                          {mod.subtitle}
                        </h4>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                      isActive 
                        ? 'bg-gold/15 border-gold text-gold' 
                        : 'bg-[#fafdfd] border-[#041a24]/10 text-ocean'
                    }`}>
                      <IconComponent className="w-4 h-4 stroke-[1.5]" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right side active Module detailed panel (Celestial Diamond styling!) */}
            <div className="lg:col-span-7">
              {activeModule !== null && (
                <div className="bg-[#041a24] text-cream rounded-[2.5rem] border border-gold/45 p-6 md:p-8 lg:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[520px] transition-all duration-500">
                  {/* Decorative background sparks */}
                  <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
                    backgroundImage: `radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)`,
                    backgroundSize: '24px 24px'
                  }} />
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-gold/10 rounded-full blur-2xl" />

                  <div className="relative z-10 space-y-6">
                    {/* Header */}
                    <div className="flex justify-between items-start border-b border-gold/20 pb-4">
                      <div>
                        <span className="text-xs font-mono font-bold tracking-[0.25em] text-gold uppercase block mb-1">
                          {traumaModules[activeModule].title} DETAILS
                        </span>
                        <h3 className="font-serif text-xl md:text-2xl font-medium text-cream leading-tight">
                          {traumaModules[activeModule].subtitle}
                        </h3>
                      </div>
                      <span className="font-serif text-5xl font-extrabold text-gold/20">
                        {traumaModules[activeModule].num}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm text-cream/75 leading-relaxed font-light italic">
                      "{traumaModules[activeModule].shortDesc}"
                    </p>

                    {/* What You'll Learn & Your Transformation Lists */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      {/* What You'll Learn */}
                      <div className="space-y-3">
                        <h5 className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-2 border-b border-gold/15 pb-1.5">
                          <BookOpen className="w-4 h-4 text-gold stroke-[1.5]" />
                          What You'll Learn
                        </h5>
                        <ul className="space-y-2">
                          {traumaModules[activeModule].learnings.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm md:text-base text-cream/90 leading-relaxed font-normal">
                              <span className="text-gold text-xs mt-1">✦</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Your Transformation */}
                      <div className="space-y-3">
                        <h5 className="text-xs font-bold uppercase tracking-widest text-[#5A8795] flex items-center gap-2 border-b border-gold/15 pb-1.5">
                          <CheckCircle className="w-4 h-4 text-[#5A8795] stroke-[1.5]" />
                          Your Transformation
                        </h5>
                        <ul className="space-y-2">
                          {traumaModules[activeModule].transformation.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm md:text-base text-cream/90 leading-relaxed font-normal">
                              <span className="text-[#5A8795] text-xs mt-1">✔</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Station progress marker */}
                  <div className="pt-4 border-t border-gold/15 flex items-center justify-between mt-8 relative z-10 text-gold/75 text-[11px] font-bold uppercase tracking-[0.15em]">
                    <span>Milestone {activeModule + 1} / 8</span>
                    <button 
                      onClick={() => onBook(`Enroll in ${traumaModules[activeModule].subtitle}`)}
                      className="text-xs text-cream hover:text-gold border border-gold/30 hover:border-gold py-1.5 px-4.5 rounded-lg transition-colors bg-[#0a3d54]/20"
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

      {/* 6. WHO IS THIS PROGRAM FOR? (Beautiful stone arches with branching tree!) */}
      <section className="py-16 md:py-20 bg-white border-t border-[#dfdbc9]/30 relative overflow-hidden" id="who-is-it-for">
        {/* Sacred Geometry Mandala Backdrop */}
        <div className="absolute right-[-100px] bottom-[-100px] w-96 h-96 opacity-[0.03] text-ocean select-none pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" fill="none" />
            <path d="M50,10 A40,40 0 0,0 90,50 A40,40 0 0,0 50,90 A40,40 0 0,0 10,50 A40,40 0 0,0 50,10 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="font-serif text-3xl md:text-5xl text-ocean-dark font-medium tracking-tight">
              Who Is This Program For?
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-gold/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="w-12 h-[1px] bg-gold/40" />
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
              <path d="M 120 75 C 105 70, 95 55, 100 45" strokeWidth="1.5" strokeDasharray="2 2" className="text-gold/60" />
              <path d="M 310 75 C 295 70, 285 55, 290 45" strokeWidth="1.5" strokeDasharray="2 2" className="text-gold/60" />
              <path d="M 490 75 C 505 70, 515 55, 510 45" strokeWidth="1.5" strokeDasharray="2 2" className="text-gold/60" />
              <path d="M 680 75 C 695 70, 705 55, 700 45" strokeWidth="1.5" strokeDasharray="2 2" className="text-gold/60" />
            </svg>

            {/* Absolute-positioned Circles, Headings ABOVE, and Descriptions BELOW */}
            <div className="absolute top-0 left-0 w-full grid grid-cols-4 px-[1%] lg:px-[3%]">
              {[
                { label: "Personal Seekers", icon: Smile, color: "border-[#769466] text-[#769466] bg-[#769466]/10", subtitle: "Individuals", desc: "Individuals actively seeking personal healing, emotional growth, trigger resolution, and deep inner child reconciliation." },
                { label: "Coaches & Healers", icon: Users, color: "border-gold text-gold-dark bg-gold/10", subtitle: "Professionals & Coaches", desc: "Coaches, therapists, counsellors, psychologists, yoga educators, and wellness practitioners seeking to add ethical somatic techniques to their kit." },
                { label: "Educators & Caregivers", icon: GraduationCap, color: "border-[#2F6D73] text-[#2F6D73] bg-[#2F6D73]/10", subtitle: "Teachers & Guardians", desc: "Teachers, social educators, community organizers, and guardians who want to construct trauma-informed spaces and safety nets." },
                { label: "Healthcare Leaders", icon: Briefcase, color: "border-[#4F7786] text-[#4F7786] bg-[#4F7786]/10", subtitle: "Leaders & Guardians", desc: "Healthcare workers, mental health facilitators, corporate HR leads, and wellness organizers driving somatic wellbeing initiatives in teams." }
              ].map((circle, idx) => {
                const IconComp = circle.icon;
                return (
                  <div key={idx} className="flex flex-col items-center">
                    {/* Heading ABOVE the circle, size increased by 5 values (text-lg md:text-xl) */}
                    <span className="text-sm lg:text-base xl:text-lg font-serif font-bold text-ocean-dark mb-4 text-center px-1 block leading-tight min-h-[56px] flex items-end justify-center">
                      {circle.label}
                    </span>
                    
                    {/* Circle itself */}
                    <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 ${circle.color} flex items-center justify-center shadow-md backdrop-blur-md z-10 hover:scale-110 transition-transform duration-300`}>
                      <IconComp className="w-5 h-5 lg:w-7 lg:h-7" />
                    </div>

                    {/* Content BELOW near the circles */}
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
              { label: "Personal Seekers", icon: Smile, color: "border-[#769466] text-[#769466] bg-[#769466]/10", subtitle: "Individuals", desc: "Individuals actively seeking personal healing, emotional growth, trigger resolution, and deep inner child reconciliation." },
              { label: "Coaches & Healers", icon: Users, color: "border-gold text-gold-dark bg-gold/10", subtitle: "Professionals & Coaches", desc: "Coaches, therapists, counsellors, psychologists, yoga educators, and wellness practitioners seeking to add ethical somatic techniques to their kit." },
              { label: "Educators & Caregivers", icon: GraduationCap, color: "border-[#2F6D73] text-[#2F6D73] bg-[#2F6D73]/10", subtitle: "Teachers & Guardians", desc: "Teachers, social educators, community organizers, and guardians who want to construct trauma-informed spaces and safety nets." },
              { label: "Healthcare Leaders", icon: Briefcase, color: "border-[#4F7786] text-[#4F7786] bg-[#4F7786]/10", subtitle: "Leaders & Guardians", desc: "Healthcare workers, mental health facilitators, corporate HR leads, and wellness organizers driving somatic wellbeing initiatives in teams." }
            ].map((circle, idx) => {
              const IconComp = circle.icon;
              return (
                <div key={idx} className="bg-gradient-to-b from-[#fdfbf7] to-[#fcfaf2] border border-[#dfdbc9] p-5 rounded-2xl flex gap-4 items-start shadow-sm">
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

      {/* 7. YOUR TRANSFORMATION DETAILS & SUMMARY (NLP-style Circulating Pillars layout!) */}
      <section className="py-16 md:py-20 bg-ivory/50 border-t border-[#dfdbc9]/30 relative overflow-hidden" id="transformation">
        {/* Glowing Nebulae overlay */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-soft/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-5xl text-ocean-dark font-medium tracking-tight">
              Your Transformation
            </h2>
          </div>

          {/* Redesigned Two Panels for Better Readability and Equal Height Alignment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
            {/* Panel 1: Personal Path */}
            <div className="bg-white rounded-[2rem] border border-gold/30 p-6 md:p-8 shadow-sm space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="border-b border-gold/20 pb-4">
                  <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-gold uppercase block mb-1">
                    STAGE ONE: INNER RECONCILIATION
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-ocean-dark">
                    Your Personal Healing Journey
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Stop blaming yourself and finally start understanding your emotional reactions.",
                    "Accept your past and begin healing your inner wounds.",
                    "Understand the hidden trauma patterns that influence your daily life.",
                    "Recognize your nervous system responses instead of seeing trauma as a personal weakness.",
                    "Become more mindful and confident when facing emotional challenges.",
                    "Create a safe inner and outer environment that supports healing.",
                    "Respond to difficult situations with greater calmness, resilience, and self-control.",
                    "Gain better control over your emotions, thoughts, and expressions."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-[#FAF8F5] border border-gold/10 hover:border-gold/25 rounded-xl p-4 transition-all duration-300">
                      <span className="text-gold font-bold text-lg mt-0.5">✔</span>
                      <p className="text-base md:text-lg text-ocean-dark font-medium leading-relaxed text-justify" style={{ textAlign: 'justify' }}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Panel 2: Professional Path */}
            <div className="bg-white rounded-[2rem] border border-gold/30 p-6 md:p-8 shadow-sm space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="border-b border-gold/20 pb-4">
                  <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#5a8795] uppercase block mb-1">
                    STAGE TWO: PROFESSIONAL MASTERY
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-ocean-dark">
                    Your Professional Competency
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Understand trauma and how it affects the mind, body, emotions, and nervous system.",
                    "Identify and heal the root causes of emotional pain.",
                    "Regulate their nervous system using evidence-informed techniques.",
                    "Release stored trauma through practical mind-body healing practices.",
                    "Build confidence, self-worth, and emotional resilience.",
                    "Create healthier relationships through trauma-informed communication and boundaries.",
                    "Develop the professional knowledge and practical skills to support others safely and ethically.",
                    "Graduate with a personalized healing and professional growth plan, ready to continue their journey with confidence."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-[#FAF8F5] border border-gold/10 hover:border-gold/25 rounded-xl p-4 transition-all duration-300">
                      <span className="text-[#5a8795] font-bold text-lg mt-0.5">✔</span>
                      <p className="text-base md:text-lg text-ocean-dark font-medium leading-relaxed text-justify" style={{ textAlign: 'justify' }}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. WHAT'S INCLUDED (ELEGANT BOTANICAL HEALING GARDEN!) */}
      <section className="py-16 md:py-20 bg-white border-t border-[#dfdbc9]/30 relative overflow-hidden" id="whats-included">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-5xl text-ocean-dark font-medium tracking-tight">
              What's Included
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-gold/45" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="w-12 h-[1px] bg-gold/45" />
            </div>
          </div>

          {/* Interactive Healing Garden Map Container */}
          <div className="relative bg-gradient-to-b from-[#fdfbf7] via-[#f7f4ea] to-[#fcfaf2] border border-gold/25 rounded-[3rem] p-6 md:p-12 overflow-hidden shadow-sm">
            
            {/* Sacred Geometry subtly blended into background at very low opacity */}
            <div className="absolute inset-0 opacity-[0.01] pointer-events-none flex items-center justify-center">
              <svg className="w-4/5 h-4/5 text-[#041a24]" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.2" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.2" />
                <path d="M 50,5 L 95,50 L 50,95 L 5,50 Z" fill="none" stroke="currentColor" strokeWidth="0.2" />
              </svg>
            </div>

            {/* Compact Grid of Healing Stations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 max-w-5xl mx-auto">
              {[
                {
                  title: "8 Comprehensive Learning Modules",
                  emoji: "📖",
                  desc: "A meticulous sequence of 8 core theoretical and somatic modules guiding your transition from safe groundwork to professional proficiency.",
                  visual: (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#769466]/25 to-transparent rounded-2xl" />
                      <div className="absolute bottom-2 inset-x-4 h-6 bg-[#647c55] rounded-full filter blur-[1px] opacity-40" />
                      <div className="w-10 h-14 bg-[#d2c9b4] border border-[#bfa67a] rounded-r-md shadow-md transform -rotate-12 transition-transform group-hover:rotate-0 flex flex-col justify-between p-1.5">
                        <div className="w-8 h-0.5 bg-[#bfa67a]" />
                        <div className="flex flex-col gap-0.5">
                          <div className="w-8 h-[1.5px] bg-[#6e6859]" />
                          <div className="w-6 h-[1.5px] bg-[#6e6859]" />
                        </div>
                        <BookOpen className="w-3 h-3 text-[#8a7243] self-end stroke-[1.5]" />
                      </div>
                    </div>
                  )
                },
                {
                  title: "Guided Healing Exercises",
                  emoji: "✨",
                  desc: "Somatic release scripts, EFT tapping flows, and vagal toning guides custom-designed for deep emotional integration.",
                  visual: (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#8fa382]/20 rounded-2xl" />
                      <div className="w-12 h-6 bg-[#bd9a77] border border-[#a27b5c] rounded-full shadow-md absolute bottom-2 z-10 flex items-center justify-center">
                        <div className="w-10 h-3 border border-[#ebd7b2]/30 rounded-full" />
                      </div>
                      <svg className="absolute bottom-1 right-2 w-8 h-8 text-gold/60" viewBox="0 0 100 100" fill="currentColor">
                        <circle cx="50" cy="50" r="15" className="text-gold fill-current opacity-25 filter blur-[4px]" />
                        <path d="M50,20 C40,40 30,50 50,80 C70,50 60,40 50,20 Z" />
                      </svg>
                      <div className="absolute bottom-4 left-2 flex flex-col items-center">
                        <div className="w-1 h-2.5 bg-gold rounded-full animate-ping" />
                        <div className="w-2 h-3 bg-cream border border-gold/30 rounded-sm" />
                      </div>
                    </div>
                  )
                },
                {
                  title: "Practical Activities & Assessments",
                  emoji: "📝",
                  desc: "Experiential integration tasks, trauma-informed self-reflection metrics, and practical diagnostic tools.",
                  visual: (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#9bb1b1]/25 to-transparent rounded-2xl" />
                      <div className="w-12 h-10 bg-white border border-[#dfdbc9] rounded-[4px] shadow-md p-1 flex flex-col gap-0.5 transform rotate-6 group-hover:rotate-0 transition-transform">
                        <div className="flex justify-between items-center border-b border-gold/15 pb-0.5">
                          <span className="text-[5px] font-bold text-gold">JOURNAL</span>
                          <div className="w-1 h-1 rounded-full bg-gold/30" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <div className="w-8 h-[1px] bg-slate-400" />
                          <div className="w-10 h-[1px] bg-slate-300" />
                        </div>
                      </div>
                      <svg className="absolute right-1 bottom-3 w-6 h-6 text-gold-dark" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M80,20 L30,70 L20,80 L25,65 L75,15 Z" />
                      </svg>
                    </div>
                  )
                },
                {
                  title: "Trauma Healing Workbook",
                  emoji: "📚",
                  desc: "A beautifully illustrated physical and digital workbook with guided prompts, worksheets, and emotional safety trackers.",
                  visual: (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#bd9a77]/15 rounded-2xl" />
                      <div className="w-11 h-15 bg-[#faf9f6] border border-[#a27b5c] rounded-md shadow-md p-1.5 flex flex-col justify-between">
                        <div className="text-center font-serif text-[5px] text-[#0a3d54] font-bold">TRAUMA</div>
                        <div className="w-full h-6 bg-gold/10 rounded border border-gold/10 flex items-center justify-center text-[8px]">🪷</div>
                        <div className="w-6 h-0.5 bg-slate-300 self-center" />
                      </div>
                      <svg className="absolute bottom-1 right-1 w-6 h-6 text-[#769466] opacity-50" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M10,80 C30,70 40,50 30,20 C40,40 60,60 80,70" stroke="currentColor" strokeWidth="4" fill="none" />
                      </svg>
                    </div>
                  )
                },
                {
                  title: "Inner Child Workbook",
                  emoji: "🌿",
                  desc: "A sacred self-guided workbook exploring reparenting, attachment resolution, and healing early conditioning.",
                  visual: (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#769466]/20 to-transparent rounded-2xl" />
                      <svg className="absolute inset-0 w-full h-full text-[#4a5f3d]/30" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M90,100 C80,60 70,50 50,40 C30,30 20,40 10,100 L90,100 Z" />
                      </svg>
                      <div className="absolute bottom-3 left-4 flex flex-col items-center animate-pulse" style={{ transformOrigin: 'top center' }}>
                        <div className="w-[1px] h-8 bg-[#8a7243]" />
                        <div className="w-4 h-1 bg-[#8a7243] rounded" />
                      </div>
                      <div className="w-9 h-11 bg-[#bdc7b8] border border-[#769466] rounded shadow absolute bottom-1 right-3 transform rotate-12 flex items-center justify-center text-[10px]">📖</div>
                    </div>
                  )
                },
                {
                  title: "Emotional Regulation Toolkit",
                  emoji: "🪷",
                  desc: "A rich digital kit of polyvagal tools, emergency grounding maps, daily checklists, and somatic stabilization guides.",
                  visual: (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#5a8795]/15 rounded-2xl" />
                      <div className="w-12 h-9 bg-[#8c6b4f] border border-[#5c4033] rounded shadow p-0.5 relative flex items-center justify-center gap-0.5">
                        <div className="w-2.5 h-4 bg-[#d6c5f0] border border-purple-300 rounded-sm transform rotate-45 animate-pulse" />
                        <div className="w-2 h-5 bg-[#b25e1a] border border-[#4a2300] rounded-sm flex flex-col justify-between">
                          <div className="w-full h-0.5 bg-[#4a2300]" />
                          <div className="w-1 h-1.5 bg-[#ffcc00] self-center" />
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  title: "Guided Meditations",
                  emoji: "🧘",
                  desc: "High-quality, calming audio tracks helping you soothe fight-or-flight reactions and reclaim internal peace.",
                  visual: (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#5a8795]/25 to-transparent rounded-2xl" />
                      <div className="w-14 h-3 bg-[#8b9d88] border border-[#5d6e5a] rounded-full absolute bottom-3 shadow z-10" />
                      <svg className="absolute bottom-1 inset-x-0 h-6 w-full text-[#5a8795]/40 animate-pulse" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                        <ellipse cx="50" cy="80" rx="20" ry="6" strokeWidth="1" />
                      </svg>
                      <span className="absolute bottom-4 text-xs animate-bounce">🧘</span>
                    </div>
                  )
                },
                {
                  title: "Breathwork Library",
                  emoji: "🌬",
                  desc: "A digital audio library of pranayama and somatic respiratory patterns for hyperarousal recovery and lung capacity optimization.",
                  visual: (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#a8baba]/15 rounded-2xl" />
                      <div className="w-12 h-2.5 bg-[#e2ceac] border border-[#c1ad8b] rounded absolute bottom-3 shadow" />
                      <div className="w-6 h-4 bg-[#c5a059] border border-[#8a6a2a] rounded-b-lg absolute bottom-4.5 z-10 flex items-center justify-center">
                        <div className="w-4 h-0.5 bg-[#ebd7b2]/50 rounded-full" />
                      </div>
                      <div className="absolute bottom-8 w-8 h-8 border border-gold/25 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
                    </div>
                  )
                },
                {
                  title: "Reflection Journals",
                  emoji: "📓",
                  desc: "Somatic check-in templates, trigger logs, and integration prompts to safely map your daily nervous system trends.",
                  visual: (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#9c8d7b]/20 to-transparent rounded-2xl" />
                      <div className="w-10 h-14 bg-[#614e3b] border border-[#3b2e21] rounded-l-md shadow-md transform -rotate-6 p-0.5 relative flex flex-col justify-between">
                        <div className="absolute top-1.5 left-1 w-[1px] h-10 bg-gold opacity-40 rounded" />
                        <div className="w-full h-full bg-cream rounded-r-sm p-1 flex flex-col gap-0.5">
                          <div className="w-6 h-[1.5px] bg-slate-300" />
                        </div>
                      </div>
                      <div className="absolute bottom-1 right-1 flex flex-col items-center">
                        <div className="w-1 h-2.5 bg-slate-300 rounded-full animate-pulse filter blur-[1px]" />
                        <div className="w-4 h-2.5 bg-teal-soft/80 border border-[#3f5d5e] rounded-b-full shadow" />
                      </div>
                    </div>
                  )
                },
                {
                  title: "Lifetime Learning Access",
                  emoji: "♾",
                  desc: "Unrestricted, permanent access to all material, future curriculum updates, workbooks, and resource expansion updates.",
                  visual: (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold/10 rounded-2xl" />
                      <svg className="absolute inset-0 w-full h-full text-gold-dark/30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20,100 C20,30 80,30 80,100" />
                        <line x1="20" y1="100" x2="35" y2="70" />
                        <line x1="80" y1="100" x2="65" y2="70" />
                      </svg>
                      <div className="absolute top-6 w-8 h-8 bg-[radial-gradient(circle,rgba(255,223,128,0.8)_0%,transparent_70%)] animate-pulse rounded-full" />
                    </div>
                  )
                },
                {
                  title: "Downloadable Resources",
                  emoji: "📂",
                  desc: "Clinical client intake worksheets, session planner templates, boundaries maps, and therapeutic assessment printouts.",
                  visual: (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#769466]/15 to-transparent rounded-2xl" />
                      <div className="w-12 h-8 relative flex items-center justify-center gap-1">
                        <div className="w-4 h-10 bg-cream border border-[#ebd7b2] rounded-full transform -rotate-45 relative shadow">
                          <div className="absolute inset-y-3 inset-x-0 h-0.5 bg-red-800" />
                        </div>
                        <div className="w-4 h-10 bg-cream border border-[#ebd7b2] rounded-full transform rotate-12 relative shadow">
                          <div className="absolute inset-y-4 inset-x-0 h-0.5 bg-red-800" />
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  title: "Certificate of Completion",
                  emoji: "🎓",
                  desc: "Earn a physical or high-resolution printable diploma recognizing your completed trauma-informed learning path.",
                  visual: (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold/20 rounded-2xl" />
                      <div className="w-14 h-11 bg-white border border-gold-dark/40 rounded shadow p-1 flex flex-col justify-between transform -rotate-3 hover:rotate-0 transition-transform">
                        <div className="border border-gold/30 h-full p-0.5 flex flex-col justify-between">
                          <span className="text-[3px] font-bold text-center text-slate-800">DIPLOMA OF COMPLETION</span>
                          <div className="flex justify-between items-end">
                            <div className="w-3 h-0.5 bg-slate-300" />
                            <div className="w-2 h-2 rounded-full bg-gold border border-gold-dark/50" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              ].map((station, idx) => (
                <div 
                  key={idx}
                  className="bg-[#faf8f5] border border-[#e5dfcb] hover:border-gold hover:shadow-md rounded-2xl p-4 flex gap-4 items-start transition-all duration-300 relative overflow-hidden group min-h-[140px]"
                >
                  {/* Visual container badge */}
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-white border border-[#e5dfcb]/60 p-1 flex items-center justify-center relative shadow-sm">
                    <div className="w-full h-full relative z-10">
                      {station.visual}
                    </div>
                  </div>

                  {/* Content Right */}
                  <div className="space-y-1 text-left flex-grow">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono font-bold text-gold uppercase tracking-widest">Station {idx + 1}</span>
                    </div>
                    <h3 className="font-serif text-sm font-bold text-ocean-dark leading-tight group-hover:text-gold transition-colors">
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

      {/* 9. CAREER OPPORTUNITIES (PATHWAYS AFTER HEALING!) */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#fdfbf7] via-[#faf6eb] to-[#fcfaf2] border-t border-[#dfdbc9]/30 relative overflow-hidden" id="careers">
        
        {/* Soft, magical watercolor botanical background overlays */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#769466]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-10 right-20 w-80 h-80 bg-teal-soft/5 rounded-full blur-[90px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ocean-dark font-medium tracking-tight">
              Where Your Healing Can Lead
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-gold/45" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="w-12 h-[1px] bg-gold/45" />
            </div>
          </div>

          {/* ==================== DESKTOP & TABLET LANDSCAPE MAP ==================== */}
          <div className="hidden md:block relative w-full h-[600px] bg-white/20 border border-gold/15 rounded-[3.5rem] p-6 overflow-hidden shadow-inner">
            
            {/* Subtle background grid pattern */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
              backgroundImage: `radial-gradient(circle, #0a3d54 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }} />

            {/* SVG Winding Stone Pathways starting from bottom-center lotus */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 580" preserveAspectRatio="none">
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Nine Organic Bezier Paths connecting Lotus (500, 510) to each destination coordinate */}
              {[
                "M 500,510 C 380,380 260,220 180,80",   // 1. Practice
                "M 500,510 C 320,420 200,320 110,240",  // 2. Coaching
                "M 500,510 C 380,480 280,440 220,400",  // 3. Counselling
                "M 500,510 C 440,400 390,300 360,220",  // 4. Corporate
                "M 500,510 C 500,360 500,200 500,70",   // 5. Educational
                "M 500,510 C 560,400 610,300 640,220",  // 6. NGO
                "M 500,510 C 620,380 740,220 820,80",   // 7. Retreats
                "M 500,510 C 680,420 800,320 890,240",  // 8. Awareness
                "M 500,510 C 620,480 720,440 780,400"   // 9. Personal Dev
              ].map((dStr, idx) => (
                <g key={idx}>
                  {/* Base stone pathway (stepping stones) */}
                  <path 
                    d={dStr} 
                    fill="none" 
                    stroke="#e2dcbf" 
                    strokeWidth="3.5" 
                    strokeDasharray="2 12" 
                    strokeLinecap="round"
                    className="opacity-80"
                  />
                  {/* Glowing active path on hover */}
                  <path 
                    d={dStr} 
                    fill="none" 
                    stroke="#d4af37" 
                    strokeWidth="3.5" 
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    className={`transition-all duration-700 opacity-0 stroke-gold animate-path-glow ${
                      hoveredDest === idx ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </g>
              ))}
            </svg>

            {/* Bottom-Center Source Lotus */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 select-none">
              <div className="relative w-20 h-20 flex items-center justify-center">
                {/* Glowing water ripples */}
                <div className="absolute inset-0 rounded-full bg-teal-soft/10 animate-ping" style={{ animationDuration: '3.5s' }} />
                <div className="absolute w-14 h-14 rounded-full bg-gold/5 border border-gold/15 animate-pulse" />
                <div className="absolute w-18 h-5 bg-gradient-to-r from-teal-soft/20 via-gold/15 to-teal-soft/20 rounded-full filter blur-md bottom-0" />
                
                {/* Detailed SVG Lotus Blossom */}
                <svg className="w-12 h-12 text-white drop-shadow-[0_0_15px_rgba(253,244,215,0.95)]" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50,15 C42,35 25,45 20,65 C32,65 42,50 50,30 C58,50 68,65 80,65 C75,45 58,35 50,15 Z" fill="#fff" className="opacity-95" />
                  <path d="M50,25 C45,40 32,48 28,63 C38,63 45,52 50,38 C55,52 62,63 72,63 C68,48 55,40 50,25 Z" fill="#faf6e8" className="opacity-90" />
                  <path d="M50,35 C48,45 42,50 38,60 C45,60 48,52 50,45 C52,52 55,60 62,60 C58,50 52,45 50,35 Z" fill="#ebd7b2" className="opacity-95" />
                  <circle cx="50" cy="55" r="4" fill="#d4af37" />
                </svg>
              </div>
              <span className="text-[8.5px] font-mono font-bold tracking-[0.25em] text-[#0a3d54] uppercase">Sovereign Source</span>
            </div>

            {/* Absolutely Positioned Career Destination Points */}
            {[
              {
                title: "Trauma Healing Practice",
                desc: "Support individuals through trauma-informed healing sessions.",
                left: "18%", top: "14%"
              },
              {
                title: "Coaching & Mentoring",
                desc: "Guide personal transformation with compassionate coaching.",
                left: "11%", top: "42%"
              },
              {
                title: "Counselling Support Roles",
                desc: "Offer emotional support in therapeutic environments.",
                left: "22%", top: "70%"
              },
              {
                title: "Corporate Wellness Programs",
                desc: "Bring wellbeing and resilience into workplaces.",
                left: "36%", top: "38%"
              },
              {
                title: "Educational Institutions",
                desc: "Create emotionally safe learning environments.",
                left: "50%", top: "12%"
              },
              {
                title: "Community & NGO Programs",
                desc: "Support healing initiatives within communities.",
                left: "64%", top: "38%"
              },
              {
                title: "Holistic Wellness Centres",
                desc: "Become part of holistic healing centres and retreats.",
                left: "82%", top: "14%"
              },
              {
                title: "Mental Health Awareness",
                desc: "Promote emotional wellbeing through awareness programs.",
                left: "89%", top: "42%"
              },
              {
                title: "Personal Development",
                desc: "Empower others to discover their highest potential.",
                left: "78%", top: "70%"
              }
            ].map((dest, idx) => (
              <div 
                key={idx}
                className="absolute flex flex-col items-center group cursor-pointer z-10 transition-all duration-500"
                style={{ 
                  left: dest.left, 
                  top: dest.top,
                  transform: 'translate(-50%, -50%)',
                  width: '175px'
                }}
                onMouseEnter={() => setHoveredDest(idx)}
                onMouseLeave={() => setHoveredDest(null)}
              >
                {/* Direct Content Box placed directly where the dotted lines lead */}
                <div className="bg-[#FAF5EB] border-2 border-[#b89474] group-hover:border-gold rounded-xl shadow-sm p-2.5 w-full text-center transition-all duration-300 group-hover:bg-white group-hover:scale-105 group-hover:shadow-md relative z-20">
                  <h4 className="font-serif text-[11px] font-bold text-[#5c4033] group-hover:text-gold leading-tight tracking-wide mb-0.5 transition-colors select-none">
                    {dest.title}
                  </h4>
                  <p className="text-[9.5px] text-ocean/90 leading-normal font-light select-none">
                    {dest.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ==================== MOBILE RESPONSIVE LAYOUT ==================== */}
          <div className="block md:hidden space-y-4 max-w-md mx-auto">
            {[
              { title: "Trauma Healing Practice", desc: "Support individuals through trauma-informed healing sessions." },
              { title: "Coaching & Mentoring", desc: "Guide personal transformation with compassionate coaching." },
              { title: "Counselling Support Roles", desc: "Offer emotional support in therapeutic environments." },
              { title: "Corporate Wellness Programs", desc: "Bring wellbeing and resilience into workplaces." },
              { title: "Educational Institutions", desc: "Create emotionally safe learning environments." },
              { title: "Community & NGO Programs", desc: "Support healing initiatives within communities." },
              { title: "Holistic Wellness Centres", desc: "Become part of holistic healing centres and retreats." },
              { title: "Mental Health Awareness", desc: "Promote emotional wellbeing through awareness programs." },
              { title: "Personal Development", desc: "Empower others to discover their highest potential." }
            ].map((dest, idx) => (
              <div 
                key={idx}
                className="bg-[#FAF5EB] border border-gold/25 rounded-2xl p-4 shadow-sm relative overflow-hidden group hover:border-gold transition-all duration-300 text-center space-y-1"
              >
                <h4 className="font-serif text-sm font-bold text-ocean-dark group-hover:text-gold transition-colors">
                  {dest.title}
                </h4>
                <p className="text-sm text-[#0A252C] font-light leading-relaxed">
                  {dest.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. EXTRA SERVICES: INTERACTIVE HEALING JOURNAL */}
      <section className="py-16 md:py-20 bg-white border-t border-[#dfdbc9]/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-center max-w-3xl mx-auto mb-6 space-y-2">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean font-medium tracking-tight">
              Our 1-to-1 Signature Healing Sessions
            </h2>
          </div>

          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-[1px] w-14 bg-gold/30" />
            <span className="text-gold text-xs">✦</span>
            <div className="h-[1px] w-14 bg-gold/30" />
          </div>

          {/* Interactive Healing Journal component */}
          <HealingJournal onBook={onBook} />
        </div>
      </section>

      {/* 12. CALL TO ACTION BANNER - STRUCTURE, FORMAT & COLOUR COPIED FROM NLP TOPMOST SECTION */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-[#e1f0f2]/60 via-[#f4fafb] to-[#ffffff] text-[#0A252C] overflow-hidden border-t border-[#dfdbc9]/30">
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
            backgroundImage: `url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1600')`
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
          <div className="space-y-8">
            {/* Main title formatted matching NLP page header */}
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0A252C] tracking-tight leading-tight uppercase max-w-4xl mx-auto drop-shadow-sm">
              YOUR LIFE CAN BECOME <br />
              <span className="text-[#4f9da6] italic font-normal font-serif lowercase">your greatest</span> HEALING.
            </h2>

            {/* Sub-text paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-[#0A252C] max-w-3xl mx-auto leading-relaxed font-light font-serif italic py-2">
              Step into baseline safety. Reintegrate your past, claim your presence, and rise into your sovereignty with certified trauma-informed practice.
            </p>

            {/* Action buttons matching NLP style */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={() => onBook('Trauma Healing Practice Certification')}
                className="px-8 sm:px-10 py-4.5 sm:py-5 bg-[#4f9da6] hover:bg-[#3f8c8c] text-white font-bold text-xs sm:text-sm tracking-[0.15em] uppercase rounded-2xl sm:rounded-full shadow-[0_4px_20px_rgba(79,157,166,0.25)] hover:shadow-[0_8px_30px_rgba(79,157,166,0.45)] transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300 border border-teal-light/30 cursor-pointer"
                id="trauma-final-cta"
              >
                Become a Certified Trauma Healing Practitioner
              </button>
              
              <button
                onClick={onBack}
                className="px-8 py-4.5 sm:py-5 border border-slate-300/80 bg-white/70 hover:bg-white text-[#0A252C] font-bold text-xs sm:text-sm tracking-[0.15em] uppercase rounded-2xl sm:rounded-full shadow-sm transition-all duration-300 cursor-pointer"
              >
                Return to Sanctuary
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
