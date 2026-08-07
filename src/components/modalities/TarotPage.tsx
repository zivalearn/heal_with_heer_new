import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Calendar, Compass, ShieldCheck, Clock, Zap,
  CheckCircle, ArrowRight, Eye, Star, Sparkles, BookOpen, Moon,
  Heart, Sun, Download, ChevronRight, Award, Brain, Globe, Infinity, 
  Check, ShieldAlert, MessageSquare, RefreshCw, UserCheck, Smile
} from 'lucide-react';
import { generatePDF } from '../../lib/pdfHelper';
import TarotInteractiveSection, { TarotImageWithFallback } from './TarotInteractiveSection';
import { SmartImage } from '../SmartImage';
import { useImageRegistry } from '../../context/ImageContext';

interface TarotPageProps {
  onBack: () => void;
  onBook: (modalityName: string) => void;
}

const TAROT_SERVICES = [
  { title: 'General Life Path Reading', duration: '45 Mins', price: '$75 USD', desc: 'Gain deep clarity, alignment, and directional maps on any area of your life journey.' },
  { title: 'Love & Relationship Reading', duration: '45 Mins', price: '$85 USD', desc: 'Understand your active connection, soul contracts, compatibility, and relational blocks.' },
  { title: 'Career & Life Purpose Map', duration: '45 Mins', price: '$80 USD', desc: 'Identify your sacred career callings, financial paths, and vocational blocks.' },
  { title: 'Soul Life Purpose Reading', duration: '60 Mins', price: '$110 USD', desc: 'Discover your unique numerology codes and card alignments for this current lifetime.' },
  { title: 'Year Ahead Energy Forecast', duration: '60 Mins', price: '$120 USD', desc: 'A comprehensive month-by-month look into the energetic tides and opportunities ahead.' },
  { title: 'Spiritual Guidance Reading', duration: '45 Mins', price: '$80 USD', desc: 'Connect directly with higher guides and receive direct, protective messages.' }
];

export default function TarotPage({ onBack, onBook }: TarotPageProps) {
  const { getSrc } = useImageRegistry();
  const [downloading, setDownloading] = useState(false);
  const [activePetal, setActivePetal] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleDownloadBrochure = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      generatePDF(
        "Tarot_Reading_Certification_Brochure.pdf",
        "TAROT CARD READING CERTIFICATION",
        "Awaken Your Intuition. Master the Cards. Guide with Confidence.",
        "Master the Art of Intuitive Tarot Reading & Transform Lives—Starting with Your Own\nUnlock the Wisdom of the Cards. Strengthen Your Intuition. Guide with Clarity.\n\nTarot is more than memorizing card meanings—it's a powerful tool for intuition, self-discovery, and meaningful guidance. Whether you're learning for personal growth or to support others professionally, this certification is designed to help you move beyond traditional interpretations and develop the confidence to read the cards naturally, accurately, and ethically.\n\nThe Intuitive Tarot Reading Certification Program is an internationally designed, step-by-step training that teaches you the symbolism, psychology, and intuitive flow of Tarot so you can conduct transformative readings with clarity and confidence.\n\nNo prior experience required.",
        [
          {
            title: "MODULE 1: Unlocking the Magic of Tarot",
            text: "The Sacred Foundation & Energetic Connection\n\nWHAT YOU WILL LEARN:",
            items: [
              "The history, evolution, and sacred origins of Tarot.",
              "Understanding how Tarot works through intuition and energy connection.",
              "How to choose, cleanse, consecrate, and care for your Tarot deck.",
              "Setting up your sacred reading space and energetic boundaries.",
              "Overcoming self-doubt and trusting your initial intuitive hits.",
              "YOUR TRANSFORMATION:",
              "Build a strong, respectful bond with your Tarot deck.",
              "Feel confident in your ability to read energy and symbols.",
              "Create a calm, grounded environment for personal and client readings.",
              "Release the fear of \"getting it wrong\" and embrace intuitive trust.",
              "Step onto your Tarot journey with excitement, respect, and clarity."
            ]
          },
          {
            title: "MODULE 2: The Secret Language of the Cards",
            text: "Understanding the Major, Minor & Court Arcana\n\nWHAT YOU WILL LEARN:",
            items: [
              "The Fool’s Journey: Understanding the 22 Major Arcana cards as life’s spiritual lessons.",
              "The 4 Elements & Suits: Wands (Fire), Cups (Water), Swords (Air), and Pentacles (Earth).",
              "Decoding the Minor Arcana: Numbers, patterns, and everyday life situations.",
              "The Court Cards Unveiled: Understanding Pages, Knights, Queens, and Kings as personalities and energies.",
              "Recognizing visual symbols, colors, and archetypes across different decks.",
              "YOUR TRANSFORMATION:",
              "Understand the deeper spiritual and psychological meanings behind every card.",
              "Stop relying on guidebook lookups and start interpreting symbols naturally.",
              "Easily connect card stories to real-life situations and personal challenges.",
              "Recognize personality types, emotions, and life phases through the Court Cards.",
              "Experience a rich, visual understanding of the entire 78-card deck."
            ]
          },
          {
            title: "MODULE 3: Awakening Your Intuitive Reader",
            text: "Blending Card Meanings with Deep Intuitive Insights\n\nWHAT YOU WILL LEARN:",
            items: [
              "The difference between memorization and intuitive storytelling.",
              "How to activate your inner intuition using imagery, symbolism, and feelings.",
              "Reading card combinations to tell a continuous, cohesive story.",
              "Understanding upright and reversed card meanings with balance and depth.",
              "Channeling clear, direct insights without getting overwhelmed.",
              "YOUR TRANSFORMATION:",
              "Transition smoothly from textbook meanings to fluid, intuitive readings.",
              "Weave individual cards into powerful, meaningful narratives.",
              "Interpret reversed cards with confidence rather than fear.",
              "Trust your instincts and spontaneous insights during a reading.",
              "Speak with authority, empathy, and intuitive flow."
            ]
          },
          {
            title: "MODULE 4: Reading Between the Cards",
            text: "Mastering Spreads & The Art of Storytelling\n\nWHAT YOU WILL LEARN:",
            items: [
              "Essential Tarot spreads: 1-card daily pulls, 3-card spreads, and Celtic Cross.",
              "How to design custom spreads for specific questions and life situations.",
              "Asking empowering, open-ended questions that unlock deep insights.",
              "Connecting cards together to reveal root causes, hidden influences, and outcomes.",
              "Managing complex or conflicting cards in a single spread.",
              "YOUR TRANSFORMATION:",
              "Conduct structured, insightful readings for any question or scenario.",
              "Help clients reframe problem-focused questions into empowering solutions.",
              "Identify underlying themes and patterns in a spread effortless.",
              "Deliver smooth, comprehensive readings that provide real clarity.",
              "Gain the flexibility to create custom spreads tailored to any situation."
            ]
          },
          {
            title: "MODULE 5: Tarot for Everyday Guidance",
            text: "Navigating Love, Career, Finances & Purpose\n\nWHAT YOU WILL LEARN:",
            items: [
              "Conducting specialized readings for Love, Relationships, and Compatibility.",
              "Career, Business, and Financial decision-making through Tarot.",
              "Spiritual growth, life purpose, and personal development readings.",
              "Timing in Tarot: Understanding seasons, elements, and energetic speed.",
              "Using Tarot as a tool for daily reflection and decision-making.",
              "YOUR TRANSFORMATION:",
              "Provide actionable clarity on real-world topics like love, career, and money.",
              "Help others navigate complex life choices with confidence and perspective.",
              "Offer practical guidance on timing and energetic momentum.",
              "Use Tarot for self-coaching and personal daily empowerment.",
              "Become a versatile reader capable of handling diverse client inquiries."
            ]
          },
          {
            title: "MODULE 6: Reading with Integrity & Confidence",
            text: "Ethics, Boundaries & Safe Client Practice\n\nWHAT YOU WILL LEARN:",
            items: [
              "Professional ethics and responsible Tarot reading practices.",
              "How to handle sensitive topics (health, grief, heavy emotions) with care.",
              "Establishing firm energetic boundaries to avoid absorbing client stress.",
              "Managing difficult, skeptical, or anxious clients calmly and professionally.",
              "Delivering challenging or sensitive card messages with compassion and empowerment.",
              "YOUR TRANSFORMATION:",
              "Conduct professional readings with complete ethical integrity and confidence.",
              "Protect your personal energy field from feeling drained after sessions.",
              "Deliver honest, constructive guidance without scaring or overwhelming clients.",
              "Build deep trust, safety, and rapport with those you read for.",
              "Feel fully prepared to handle any client scenario gracefully."
            ]
          },
          {
            title: "MODULE 7: Discovering Your Unique Reading Style",
            text: "Developing Your Personal Signature as a Reader\n\nWHAT YOU WILL LEARN:",
            items: [
              "Identifying your unique intuitive gifts (Clairvoyance, Clairsentience, Claircognizance).",
              "Combining Tarot with other healing modalities (Reiki, NLP, Coaching, Astrology).",
              "Finding your niche: Spiritual Guidance, Practical Coaching, or Intuitive Healing.",
              "Developing your personal reading voice, style, and presentation.",
              "Overcoming imposter syndrome and stepping into your power as a Tarot Reader.",
              "YOUR TRANSFORMATION:",
              "Embrace your distinct reading style and authentic intuitive strengths.",
              "Stand out confidently as a unique and memorable Tarot practitioner.",
              "Integrate Tarot seamlessly into your existing coaching or therapy work.",
              "Overcome self-doubt and embody true professional self-assurance.",
              "Communicate your value clearly to prospective clients and community."
            ]
          },
          {
            title: "MODULE 8: Your Journey as a Tarot Reader Begins",
            text: "Professional Integration, Business Setup & Lifelong Growth\n\nWHAT YOU WILL LEARN:",
            items: [
              "How to structure professional, paid Tarot sessions step-by-step.",
              "Setting up your Tarot practice (pricing, booking, policies, and client care).",
              "Building an authentic personal brand and attracting ideal clients.",
              "Continuing your spiritual and intuitive growth beyond the certification.",
              "Joining a supportive community of intuitive readers and healers.",
              "YOUR TRANSFORMATION:",
              "Confidently launch your professional Tarot reading practice.",
              "Set fair, empowering prices for your time and intuitive wisdom.",
              "Attract aligned clients who value your insights and guidance.",
              "Establish a sustainable, fulfilling practice that aligns with your purpose.",
              "Graduate with an internationally recognized certification and a lifelong passion."
            ]
          },
          {
            title: "FINAL PROGRAM TRANSFORMATION",
            text: "By the end of this Intuitive Tarot Reading Certification Program, learners will:",
            items: [
              "Master all 78 Tarot cards, their deeper symbolism, and intuitive meanings.",
              "Read Tarot confidently without needing guidebooks or memorized scripts.",
              "Conduct powerful, accurate readings using a variety of classic and custom spreads.",
              "Seamlessly weave cards together into empowering, life-changing narratives.",
              "Offer deep, practical insights for love, career, finances, and personal growth.",
              "Maintain high ethical standards, clear boundaries, and energetic protection.",
              "Develop a unique personal reading style that aligns with your authentic self.",
              "Launch and grow a professional Tarot reading practice with clarity and confidence."
            ]
          }
        ]
      );
    }, 1200);
  };

  const heroHighlights = [
    { icon: Globe, label: "Accredited Tarot Certification" },
    { icon: Brain, label: "Intuitive & Symbolic Mastery" },
    { icon: Compass, label: "Practical Spreads & Storytelling" },
    { icon: Award, label: "Professional Reading Ethics" },
    { icon: Infinity, label: "Lifelong Growth & Support" }
  ];

  const tarotModules = [
    {
      num: "01",
      title: "Module 1",
      subtitle: "Unlocking the Magic of Tarot",
      desc: "Understand Tarot as a tool for guidance and self-discovery. Learn history, structure of the deck, build connection, and setup sacred spaces for intuitive readings.",
      icon: Sparkles,
      bgGradient: "from-[#fcfbfa] to-[#FAF5EB]/40"
    },
    {
      num: "02",
      title: "Module 2",
      subtitle: "The Secret Language of the Cards",
      desc: "Interpret Major Arcana spiritual lessons, everyday Minor Arcana experiences, Court personalities, and key patterns in colors, elements, and symbols.",
      icon: Eye,
      bgGradient: "from-[#fcfbfa] to-[#041a24]/5"
    },
    {
      num: "03",
      title: "Module 3",
      subtitle: "Awakening Your Intuitive Reader",
      desc: "Awaken your natural intuition, distinguish intuitive hits from fear/overthinking, and read accurately without depending on guidebooks.",
      icon: Moon,
      bgGradient: "from-[#fcfbfa] to-[#FAF5EB]/40"
    },
    {
      num: "04",
      title: "Module 4",
      subtitle: "Reading Between the Cards",
      desc: "Master single-card, multi-card and complex spreads. Connect overlapping card dynamics naturally to read complete stories rather than isolated meanings.",
      icon: Compass,
      bgGradient: "from-[#fcfbfa] to-[#041a24]/5"
    },
    {
      num: "05",
      title: "Module 5",
      subtitle: "Tarot for Everyday Guidance",
      desc: "Apply Tarot safely to real-life situations. Explore in-depth readings for love, relationships, career, financial guidance, purpose, and periods of transition.",
      icon: Sun,
      bgGradient: "from-[#fcfbfa] to-[#FAF5EB]/40"
    },
    {
      num: "06",
      title: "Module 6",
      subtitle: "Reading with Integrity & Confidence",
      desc: "Learn the essential ethics of a reading practice. Establish safe, healthy client boundaries and communicate deep guidance compassionately.",
      icon: ShieldCheck,
      bgGradient: "from-[#fcfbfa] to-[#041a24]/5"
    },
    {
      num: "07",
      title: "Module 7",
      subtitle: "Discovering Your Unique Reading Style",
      desc: "Create personal reading rituals, apply advanced interpretations, and build consistency and deep trust in your unique intuitive gifts through real-life practice.",
      icon: BookOpen,
      bgGradient: "from-[#fcfbfa] to-[#FAF5EB]/40"
    },
    {
      num: "08",
      title: "Module 8",
      subtitle: "Your Journey as a Tarot Reader Begins",
      desc: "Establish a lifelong, independent Tarot practice. Set up continuous growth routines, regular readings, and step forward as a confident practitioner.",
      icon: Award,
      bgGradient: "from-[#fcfbfa] to-[#041a24]/5"
    }
  ];

  return (
    <div className="bg-[#050505] text-white/90 font-sans min-h-screen selection:bg-white/20 selection:text-white">
      
      {/* 1. NAVIGATION & BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-6 pt-6 relative z-10 flex flex-wrap justify-between items-center gap-4 border-b border-[#0D2E4A] pb-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-white transition-colors uppercase tracking-widest cursor-pointer group"
          id="tarot-back-btn"
        >
          <ArrowLeft className="w-4 h-4 text-white transition-transform group-hover:-translate-x-1" />
          Back to Sanctuary
        </button>
        <div className="flex items-center gap-2 text-[11px] text-white/70 uppercase tracking-wider font-semibold">
          <span className="hover:text-gold cursor-pointer" onClick={onBack}>Home</span>
          <span className="text-gold/40">&gt;</span>
          <span className="hover:text-gold cursor-pointer" onClick={onBack}>Healing Modalities</span>
          <span className="text-gold/40">&gt;</span>
          <span className="text-gold font-bold">Tarot Reading Certification</span>
        </div>
      </div>

      {/* 2. UNIFIED HERO BANNER WITH CELESTIAL ELEMENTS */}
      <section className="relative bg-gradient-to-b from-[#050505] via-[#071B2E] to-[#0D2E4A] text-white/90 pt-12 pb-16 px-6 overflow-hidden">
        {/* SVG clipPath definition for flower-clip-path */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <clipPath id="flower-clip-path" clipPathUnits="objectBoundingBox">
              <path d="M 0.5,0.05 C 0.55,0.15 0.62,0.1 0.68,0.14 C 0.78,0.18 0.8,0.28 0.85,0.32 C 0.82,0.38 0.93,0.44 0.93,0.48 C 0.93,0.52 0.82,0.58 0.85,0.64 C 0.8,0.68 0.78,0.78 0.68,0.82 C 0.62,0.86 0.55,0.81 0.5,0.91 C 0.45,0.81 0.38,0.86 0.32,0.82 C 0.22,0.78 0.2,0.68 0.15,0.64 C 0.18,0.58 0.07,0.52 0.07,0.48 C 0.07,0.44 0.18,0.38 0.15,0.32 C 0.2,0.28 0.22,0.18 0.32,0.14 C 0.38,0.1 0.45,0.15 0.5,0.05 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Soft celestial/starfield particle layers */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, #8FDFFF 1px, transparent 1px), radial-gradient(circle, #CFEFFF 1px, transparent 1px)`,
          backgroundSize: '40px 40px, 60px 60px',
          backgroundPosition: '0 0, 20px 30px'
        }} />
        {/* Deep background glowing nebulae with mystical blue/cyan glow */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#8FDFFF]/15 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[5000ms]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#0D2E4A]/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8FDFFF]/5 rounded-full blur-[150px] pointer-events-none" />

        {/* HERO INNER CONTENT */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs md:text-sm font-mono tracking-[0.25em] text-[#dfaf6b] uppercase font-bold block">
                TAROT COURSE
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight !text-white leading-none" style={{ color: '#ffffff' }}>
                Tarot Reading <br />
                Certification
              </h1>
            </div>

            {/* Elegant ornament line */}
            <div className="flex items-center gap-3 py-1 text-gold">
              <div className="h-[1px] w-12 bg-gold" />
              <Sparkles className="w-4 h-4 text-gold fill-current animate-pulse" />
              <div className="h-[1px] w-56 bg-gold" />
            </div>

            <p className="font-serif italic text-xl md:text-2xl !text-white tracking-wide leading-snug" style={{ color: '#ffffff' }}>
              "Master the Art of Intuitive Tarot Reading with Confidence."
            </p>

            <p className="text-sm md:text-base !text-white/95 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
              Unlock the Wisdom of the Cards. Strengthen Your Intuition. Guide with Clarity. Combine traditional Tarot wisdom with intuitive development and practical reading skills.
            </p>

            {/* 5 Highlights Icons under hero text */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 pt-6 pb-6 border-t border-b border-gold/30">
              {heroHighlights.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-2 group">
                  <div className="w-11 h-11 rounded-full bg-[#071B2E] border border-[#8FDFFF]/20 flex items-center justify-center text-white group-hover:bg-[#0D2E4A] transition-colors shadow-[0_0_10px_rgba(143,223,255,0.1)]">
                    <item.icon className="w-5 h-5 stroke-[1.2]" />
                  </div>
                  <span className="text-[10px] md:text-xs text-white/95 font-medium leading-tight max-w-[100px] block">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onBook('Tarot Reading Certification Course')}
                className="px-8 py-4 bg-gradient-to-r from-gold via-gold/90 to-gold hover:from-[#FAF5EB] hover:to-white text-[#050505] hover:text-[#071B2E] border border-gold/40 text-xs font-bold tracking-widest rounded-xl shadow-[0_4px_20px_rgba(212,163,67,0.25)] hover:shadow-[0_8px_30px_rgba(212,163,67,0.45)] transition-all duration-300 uppercase flex items-center gap-2 group cursor-pointer whitespace-nowrap"
                id="tarot-enroll-btn"
              >
                <span>Enroll Now</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={handleDownloadBrochure}
                disabled={downloading}
                className="px-8 py-4 bg-transparent border border-[#8FDFFF]/40 hover:border-[#8FDFFF] text-white hover:bg-[#8FDFFF]/10 text-xs font-bold tracking-[0.15em] uppercase rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(143,223,255,0.05)] hover:shadow-[0_0_20px_rgba(143,223,255,0.15)] whitespace-nowrap"
                id="tarot-download-btn"
              >
                <Download className="w-4 h-4 text-white" />
                {downloading ? 'Downloading...' : 'Download Brochure'}
              </button>
            </div>
          </div>

          {/* Hero Right: 5 Fanned Tarot Cards, Candles, Crystals, Zodiac Wheel */}
          <div className="lg:col-span-5 flex justify-center items-center relative min-h-[440px] py-10 overflow-visible">
            
            {/* Background glowing nebula halos */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#8FDFFF]/10 rounded-full blur-[80px] pointer-events-none z-0" />
            <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-[#CFEFFF]/15 rounded-full blur-[60px] pointer-events-none z-0" />
            
            {/* Elegant rotating Golden Zodiac Alignment Circle */}
            <div className="absolute bottom-6 w-[120%] aspect-[2/1] border border-[#8FDFFF]/10 rounded-full z-0 flex items-center justify-center transform scale-y-[0.35] opacity-80 pointer-events-none">
              <div className="w-[85%] h-[85%] border border-dashed border-[#8FDFFF]/15 rounded-full" />
              <div className="w-[70%] h-[70%] border border-[#8FDFFF]/5 rounded-full" />
              <svg className="absolute w-full h-full text-[#8FDFFF]/15 animate-[spin_180s_linear_infinite]" viewBox="0 0 200 200">
                {Array.from({ length: 24 }).map((_, i) => (
                  <line
                    key={i}
                    x1="100"
                    y1="10"
                    x2="100"
                    y2="18"
                    transform={`rotate(${i * 15} 100 100)`}
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                ))}
              </svg>
            </div>

            {/* Fanned Cards Stack (7 cards for rich fanned deck view) */}
            <div className="relative w-full max-w-[420px] h-[320px] flex items-center justify-center z-10">
              
              {/* Card 1: Far Far Left */}
              <div className="absolute w-[105px] h-[180px] rounded-xl bg-gradient-to-b from-[#0D2E4A] to-[#050505] border border-[#8FDFFF]/30 shadow-lg transform -rotate-[36deg] -translate-x-[115px] translate-y-[28px] transition-transform duration-300 hover:translate-y-[18px] z-10 flex flex-col justify-between p-2">
                <div className="border border-gold/20 rounded-lg h-full w-full flex flex-col justify-between p-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(143,223,255,0.05)_0%,transparent_70%)]" />
                  <div className="flex justify-between text-[7px] text-gold/40 font-mono">
                    <span>0</span>
                    <span>0</span>
                  </div>
                  <div className="mx-auto my-auto w-8 h-8 border border-gold/20 rounded-full flex items-center justify-center text-gold/30">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex justify-between text-[7px] text-gold/40 font-mono transform rotate-180">
                    <span>0</span>
                    <span>0</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Far Left */}
              <div className="absolute w-[105px] h-[185px] rounded-xl bg-gradient-to-b from-[#0D2E4A] to-[#050505] border border-[#8FDFFF]/35 shadow-lg transform -rotate-[24deg] -translate-x-[75px] translate-y-[18px] transition-transform duration-300 hover:translate-y-[8px] z-12 flex flex-col justify-between p-2">
                <div className="border border-gold/20 rounded-lg h-full w-full flex flex-col justify-between p-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(143,223,255,0.05)_0%,transparent_70%)]" />
                  <div className="flex justify-between text-[7px] text-gold/40 font-mono">
                    <span>X</span>
                    <span>X</span>
                  </div>
                  <div className="mx-auto my-auto w-8 h-8 border border-gold/20 rounded-full flex items-center justify-center text-gold/30">
                    <Sun className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex justify-between text-[7px] text-gold/40 font-mono transform rotate-180">
                    <span>X</span>
                    <span>X</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Mid Left */}
              <div className="absolute w-[108px] h-[190px] rounded-xl bg-gradient-to-b from-[#0D2E4A] to-[#050505] border border-[#8FDFFF]/40 shadow-lg transform -rotate-[12deg] -translate-x-[38px] translate-y-[8px] transition-transform duration-300 hover:translate-y-[-2px] z-15 flex flex-col justify-between p-2.5">
                <div className="border border-gold/25 rounded-lg h-full w-full flex flex-col justify-between p-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(143,223,255,0.05)_0%,transparent_70%)]" />
                  <div className="flex justify-between text-[7px] text-gold/50 font-mono">
                    <span>II</span>
                    <span>II</span>
                  </div>
                  <div className="mx-auto my-auto w-9 h-9 border border-gold/20 rounded-full flex items-center justify-center text-gold/40">
                    <Moon className="w-4 h-4" />
                  </div>
                  <div className="flex justify-between text-[7px] text-gold/50 font-mono transform rotate-180">
                    <span>II</span>
                    <span>II</span>
                  </div>
                </div>
              </div>

              {/* Card 4: Central Top Featured Card -> "I THE MAGICIAN" */}
              <div className="absolute w-[125px] h-[215px] rounded-xl bg-gradient-to-b from-[#0D2E4A] via-[#071B2E] to-[#050505] border-2 border-[#8FDFFF] shadow-[0_0_30px_rgba(143,223,255,0.35)] transform rotate-0 z-30 flex flex-col justify-between p-3 transition-transform duration-300 hover:scale-105">
                <div className="border border-gold/35 rounded-lg h-full w-full flex flex-col justify-between p-1.5 relative overflow-hidden bg-[#041a24]/85">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(143,223,255,0.18)_0%,transparent_75%)]" />

                  {/* Header metadata */}
                  <div className="flex justify-between text-[8px] text-white font-mono tracking-widest uppercase font-bold">
                    <span>I</span>
                    <span>THE MAGICIAN</span>
                  </div>

                  {/* Card Central Art - Magician emblem */}
                  <div className="relative mx-auto w-14 h-14 border border-gold/40 rounded-full flex items-center justify-center text-gold shadow-inner">
                    <svg className="w-full h-full text-gold stroke-[1.2]" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeDasharray="1, 1.5" />
                      <path d="M12 4v16M4 12h16" stroke="currentColor" />
                      <circle cx="12" cy="12" r="3" className="fill-gold/20" stroke="currentColor" />
                    </svg>
                    <Sparkles className="absolute w-4 h-4 text-white animate-pulse" />
                  </div>

                  {/* Footer metadata */}
                  <div className="text-center">
                    <div className="h-[1px] w-6 bg-gold/40 mx-auto mb-1" />
                    <span className="text-[7px] text-white font-mono uppercase tracking-[0.2em] font-semibold">MANIFESTATION</span>
                  </div>
                </div>
              </div>

              {/* Card 5: Mid Right */}
              <div className="absolute w-[108px] h-[190px] rounded-xl bg-gradient-to-b from-[#0D2E4A] to-[#050505] border border-[#8FDFFF]/40 shadow-lg transform rotate-[12deg] translate-x-[38px] translate-y-[8px] transition-transform duration-300 hover:translate-y-[-2px] z-15 flex flex-col justify-between p-2.5">
                <div className="border border-gold/25 rounded-lg h-full w-full flex flex-col justify-between p-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(143,223,255,0.05)_0%,transparent_70%)]" />
                  <div className="flex justify-between text-[7px] text-gold/50 font-mono">
                    <span>III</span>
                    <span>III</span>
                  </div>
                  <div className="mx-auto my-auto w-9 h-9 border border-gold/20 rounded-full flex items-center justify-center text-gold/40">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div className="flex justify-between text-[7px] text-gold/50 font-mono transform rotate-180">
                    <span>III</span>
                    <span>III</span>
                  </div>
                </div>
              </div>

              {/* Card 6: Far Right */}
              <div className="absolute w-[105px] h-[185px] rounded-xl bg-gradient-to-b from-[#0D2E4A] to-[#050505] border border-[#8FDFFF]/35 shadow-lg transform rotate-[24deg] translate-x-[75px] translate-y-[18px] transition-transform duration-300 hover:translate-y-[8px] z-12 flex flex-col justify-between p-2">
                <div className="border border-gold/20 rounded-lg h-full w-full flex flex-col justify-between p-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(143,223,255,0.05)_0%,transparent_70%)]" />
                  <div className="flex justify-between text-[7px] text-gold/40 font-mono">
                    <span>VI</span>
                    <span>VI</span>
                  </div>
                  <div className="mx-auto my-auto w-8 h-8 border border-gold/20 rounded-full flex items-center justify-center text-gold/30">
                    <Star className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex justify-between text-[7px] text-gold/40 font-mono transform rotate-180">
                    <span>VI</span>
                    <span>VI</span>
                  </div>
                </div>
              </div>

              {/* Card 7: Far Far Right */}
              <div className="absolute w-[105px] h-[180px] rounded-xl bg-gradient-to-b from-[#0D2E4A] to-[#050505] border border-[#8FDFFF]/30 shadow-lg transform rotate-[36deg] translate-x-[115px] translate-y-[28px] transition-transform duration-300 hover:translate-y-[18px] z-10 flex flex-col justify-between p-2">
                <div className="border border-gold/20 rounded-lg h-full w-full flex flex-col justify-between p-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(143,223,255,0.05)_0%,transparent_70%)]" />
                  <div className="flex justify-between text-[7px] text-gold/40 font-mono">
                    <span>XXI</span>
                    <span>XXI</span>
                  </div>
                  <div className="mx-auto my-auto w-8 h-8 border border-gold/20 rounded-full flex items-center justify-center text-gold/30">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex justify-between text-[7px] text-gold/40 font-mono transform rotate-180">
                    <span>XXI</span>
                    <span>XXI</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Elegant Wave Divider at the Bottom (with Midnight Black #050505 color for flawless transition) */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-20">
          <svg className="relative block w-full h-[45px] text-[#050505]" viewBox="0 0 1200 120" fill="currentColor" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,18,84.13,26.86,133.32,41.9,183.54,54.71,234.33,63.47,263.26,68.45,292.48,64,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* 2. TAROT READING CHAMBER SECTION */}
      <TarotInteractiveSection onBook={onBook} />

      {/* 3. DEFINITION / CORE CONCEPT SECTION */}
      <section className="py-16 md:py-20 bg-[#050505] border-t border-[#0D2E4A]/50 relative overflow-hidden" id="what-is-tarot-certification">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Diamond-shape Union Card with Golden sacred geometry */}
            <div className="lg:col-span-3 flex justify-center relative">
              <div className="relative w-56 h-56 md:w-60 md:h-60 rotate-45 rounded-[2rem] p-2 bg-gradient-to-b from-gold via-gold/80 to-[#071B2E] border border-gold/40 shadow-[0_0_25px_rgba(212,163,67,0.15)] flex items-center justify-center group overflow-visible">
                
                {/* Intricate Sacred Geometry Mandala Ring */}
                <svg className="absolute inset-[-18px] w-[calc(100%+36px)] h-[calc(100%+36px)] text-[#8FDFFF]/20 pointer-events-none animate-spin duration-[120s] -rotate-45" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 2.5" fill="none" />
                  <circle cx="60" cy="60" r="51" stroke="currentColor" strokeWidth="0.25" fill="none" />
                  <circle cx="60" cy="60" r="47" stroke="currentColor" strokeWidth="0.75" fill="none" />
                  <g stroke="currentColor" strokeWidth="0.35" fill="none" className="opacity-40">
                    <circle cx="60" cy="60" r="24" />
                    <circle cx="75" cy="60" r="24" />
                    <circle cx="45" cy="60" r="24" />
                    <circle cx="60" cy="75" r="24" />
                    <circle cx="60" cy="45" r="24" />
                  </g>
                </svg>

                {/* Diamond Image Frame */}
                <div className="w-full h-full rounded-[1.75rem] overflow-hidden relative z-10 bg-[#041a24] -rotate-45 flex items-center justify-center">
                  <SmartImage
                    id="tarot.intuitive_portal"
                    defaultSrc="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80&w=400"
                    alt="Celestial Intuitive Portal"
                    className="w-[141%] h-[141%] max-w-none object-cover opacity-45 mix-blend-screen scale-110 group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041a24]/50 via-transparent to-transparent" />
                  
                  {/* Overlapping celestial crescent moon & star */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                    <g stroke="gold" strokeWidth="1.25" fill="none" className="opacity-95 animate-pulse duration-3000">
                      <path d="M45,30 A18,18 0 1,0 75,55 A15,15 0 1,1 45,30 Z" />
                    </g>
                    <g fill="#ffffff">
                      <circle cx="50" cy="50" r="1.5" className="animate-ping" style={{ animationDuration: '2s' }} />
                      <circle cx="50" cy="50" r="1" />
                      <circle cx="36" cy="40" r="1" />
                      <circle cx="64" cy="40" r="1" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Middle Column: Detailed Methodology & Paragraphs */}
            <div className="lg:col-span-6 flex flex-col justify-center text-center space-y-6 px-2 lg:px-6">
              <div className="space-y-3">
                <h2 className="font-serif text-3xl md:text-4xl text-white font-semibold tracking-tight">
                  What is the Tarot Certification?
                </h2>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[1px] w-12 bg-gold/60" />
                  <Moon className="w-5 h-5 text-gold fill-none" />
                  <div className="h-[1px] w-12 bg-gold/60" />
                </div>
              </div>

              <div className="text-sm md:text-[14.5px] !text-white font-normal leading-relaxed max-w-2xl mx-auto space-y-4 text-justify" style={{ color: '#ffffff' }}>
                <p className="!text-white" style={{ color: '#ffffff' }}>
                  Tarot is more than memorizing card meanings—it's a powerful tool for intuition, self-discovery, and meaningful guidance. This certification is designed to help you move beyond traditional interpretations and develop the confidence to read the cards naturally, accurately, and ethically.
                </p>
                <p className="!text-white" style={{ color: '#ffffff' }}>
                  Whether you're beginning your Tarot journey or looking to deepen your existing knowledge, this step-by-step program combines traditional Tarot wisdom with intuitive development, practical reading skills, and real-life application.
                </p>
                <p className="!text-white" style={{ color: '#ffffff' }}>
                  By the end of this certification, you won't just know what the cards mean—you'll know how to truly read them, unlocking deep clarity on relationships, career, purpose, and life decisions.
                </p>
              </div>

              <div className="max-w-xl mx-auto w-full px-6 py-4 bg-[#0D2E4A]/50 border-2 border-gold/60 rounded-2xl text-[11px] md:text-xs font-bold text-white uppercase tracking-[0.15em] text-center shadow-[0_0_15px_rgba(212,163,67,0.1)]">
                No prior Tarot or psychic experience is required.
              </div>
            </div>

            {/* Right Column: Quote Card (Diamond shape) */}
            <div className="lg:col-span-3 flex items-center justify-center relative py-12 lg:py-8 overflow-visible">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-60 lg:h-60 xl:w-72 xl:h-72 rotate-45 bg-gradient-to-b from-[#0D2E4A]/80 to-[#071B2E]/90 backdrop-blur-md border-2 border-[#8FDFFF] shadow-[0_0_25px_rgba(143,223,255,0.25)] rounded-[2.5rem] flex items-center justify-center group overflow-visible hover:shadow-[0_0_35px_rgba(143,223,255,0.4)] hover:border-[#8FDFFF] transition-all duration-500">
                <div className="absolute inset-2 border border-[#8FDFFF]/15 rounded-[2.1rem] pointer-events-none" />
                
                {/* Upright content inside (counter-rotated) */}
                <div className="-rotate-45 p-6 text-center select-none relative z-10 flex flex-col items-center justify-center space-y-4 max-w-[190px] sm:max-w-[220px]">
                  <div className="font-serif text-[11px] sm:text-xs xl:text-[13px] text-white font-medium leading-relaxed">
                    <p className="italic text-white/95">
                      "The cards are a sacred mirror to your inner universe. Intuition is not a gift for the few—it is a muscle we awaken together."
                    </p>
                  </div>
                  <div className="flex justify-center pt-1">
                    <Star className="w-5 h-5 xl:w-6 xl:h-6 text-[#8FDFFF] fill-none animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CURRICULUM MODULES SECTION */}
      <section className="py-16 md:py-20 px-6 bg-[#071B2E]/90 border-t border-[#0D2E4A]/60 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12 space-y-2">
            <h2 className="font-serif text-3xl md:text-4xl text-white font-semibold tracking-tight">
              Program Curriculum
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-[1px] bg-[#8FDFFF]/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#8FDFFF]" />
              <div className="w-10 h-[1px] bg-[#8FDFFF]/40" />
            </div>
          </div>

          {/* Journey Chain Grid for 8 modules with Constellation Connectors */}
          <div className="relative space-y-12">
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes constellationLineRun {
                0% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: -40; }
              }
              .animate-constellation-link {
                stroke-dasharray: 8 6;
                animation: constellationLineRun 1.5s linear infinite;
              }
            `}} />

            {/* Row 1 Content Block (Modules 1-4) */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 right-0 pointer-events-none hidden lg:flex items-center z-0 overflow-hidden">
                <svg className="w-full h-[172px] text-[#8FDFFF]/20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="2" x2="100%" y2="2" stroke="currentColor" strokeWidth="2" className="animate-constellation-link" />
                  <line x1="0" y1="170" x2="100%" y2="170" stroke="currentColor" strokeWidth="2" className="animate-constellation-link" />
                </svg>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {tarotModules.slice(0, 4).map((mod, i) => {
                  const globalIdx = i;
                  const IconComponent = mod.icon;
                  return (
                    <div key={globalIdx} className="relative group flex flex-col h-full">
                      <div className="bg-gradient-to-b from-[#0D2E4A] via-[#071B2E] to-[#050505] border border-[#8FDFFF]/30 hover:border-[#8FDFFF] rounded-[2.2rem] p-5 lg:p-6 flex flex-col justify-between shadow-[0_0_15px_rgba(143,223,255,0.05)] hover:shadow-[0_0_25px_rgba(143,223,255,0.25)] hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 relative z-10 overflow-hidden text-left h-full">
                        <div className="space-y-4 flex-grow flex flex-col">
                          <div className="flex items-center justify-between">
                            <span className="font-serif text-3xl font-extrabold text-white/25 group-hover:text-white/50 transition-colors tracking-tight">
                              {mod.num}
                            </span>
                            <div className="w-9 h-9 rounded-full bg-[#8FDFFF]/15 border border-[#8FDFFF]/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-sm">
                              <IconComponent className="w-4 h-4 stroke-[1.5]" />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <span className="text-xs md:text-[13px] font-bold uppercase block text-white" style={{ letterSpacing: '4px' }}>
                              {mod.title}
                            </span>
                            <h3 className="font-serif text-[16px] lg:text-[17px] font-bold text-white leading-snug">
                              {mod.subtitle}
                            </h3>
                          </div>

                          <p className="text-[13px] text-white/80 leading-relaxed font-normal flex-grow">
                            {mod.desc}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#8FDFFF]/20 flex items-center justify-between mt-5">
                          <span className="text-[10px] font-bold text-white uppercase tracking-[0.15em]">
                            {globalIdx === 0 ? "Initial Gateway" : "Next Milestone →"}
                          </span>
                          <div className="w-2 h-2 rounded-full bg-[#8FDFFF]/60 animate-pulse" />
                        </div>
                      </div>

                      {globalIdx < 7 && (
                        <div className="absolute left-1/2 -bottom-8 w-[2px] h-8 border-l-2 border-dashed border-[#8FDFFF]/30 lg:hidden pointer-events-none z-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Row 2 Content Block (Modules 5-8) */}
            <div className="relative mt-8">
              <div className="absolute inset-y-0 left-0 right-0 pointer-events-none hidden lg:flex items-center z-0 overflow-hidden">
                <svg className="w-full h-[172px] text-[#8FDFFF]/20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="2" x2="100%" y2="2" stroke="currentColor" strokeWidth="2" className="animate-constellation-link" />
                  <line x1="0" y1="170" x2="100%" y2="170" stroke="currentColor" strokeWidth="2" className="animate-constellation-link" />
                </svg>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {tarotModules.slice(4, 8).map((mod, i) => {
                  const globalIdx = i + 4;
                  const IconComponent = mod.icon;
                  return (
                    <div key={globalIdx} className="relative group flex flex-col h-full">
                      <div className="bg-gradient-to-b from-[#0D2E4A] via-[#071B2E] to-[#050505] border border-[#8FDFFF]/30 hover:border-[#8FDFFF] rounded-[2.2rem] p-5 lg:p-6 flex flex-col justify-between shadow-[0_0_15px_rgba(143,223,255,0.05)] hover:shadow-[0_0_25px_rgba(143,223,255,0.25)] hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 relative z-10 overflow-hidden text-left h-full">
                        <div className="space-y-4 flex-grow flex flex-col">
                          <div className="flex items-center justify-between">
                            <span className="font-serif text-3xl font-extrabold text-white/25 group-hover:text-white/50 transition-colors tracking-tight">
                              {mod.num}
                            </span>
                            <div className="w-9 h-9 rounded-full bg-[#8FDFFF]/15 border border-[#8FDFFF]/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-sm">
                              <IconComponent className="w-4 h-4 stroke-[1.5]" />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <span className="text-xs md:text-[13px] font-bold uppercase block text-white" style={{ letterSpacing: '4px' }}>
                              {mod.title}
                            </span>
                            <h3 className="font-serif text-[16px] lg:text-[17px] font-bold text-white leading-snug">
                              {mod.subtitle}
                            </h3>
                          </div>

                          <p className="text-[13px] text-white/80 leading-relaxed font-normal flex-grow">
                            {mod.desc}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#8FDFFF]/20 flex items-center justify-between mt-5">
                          <span className="text-[10px] font-bold text-white uppercase tracking-[0.15em]">
                            {globalIdx === 7 ? "Initiation Mastery ✧" : "Next Milestone →"}
                          </span>
                          <div className="w-2 h-2 rounded-full bg-[#8FDFFF]/60 animate-pulse" />
                        </div>
                      </div>

                      {globalIdx < 7 && (
                        <div className="absolute left-1/2 -bottom-8 w-[2px] h-8 border-l-2 border-dashed border-[#8FDFFF]/30 lg:hidden pointer-events-none z-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. WHO IS THIS CERTIFICATION FOR (Sacred Geometry & Constellations Theme) */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#050505] to-[#071B2E] text-white relative overflow-hidden border-t border-[#0D2E4A]/60 z-10">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#8FDFFF]/5 blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#0D2E4A]/25 blur-[100px]" />
          <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-[#8FDFFF]/3 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          
          {/* Celestial sacred geometry vector background */}
          <svg viewBox="0 0 100 100" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-[#8FDFFF]/10 opacity-35">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 1" />
            <path d="M 50,20 C 55,35 55,65 50,80" fill="none" stroke="currentColor" strokeWidth="0.08" />
            <path d="M 50,20 C 45,35 45,65 50,80" fill="none" stroke="currentColor" strokeWidth="0.08" />
            <path d="M 20,50 C 35,55 65,55 80,50" fill="none" stroke="currentColor" strokeWidth="0.08" />
            <circle cx="50" cy="35" r="15" fill="none" stroke="currentColor" strokeWidth="0.08" />
            <circle cx="50" cy="65" r="15" fill="none" stroke="currentColor" strokeWidth="0.08" />
          </svg>

          {/* Floating celestial stars */}
          <motion.div animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }} className="absolute top-[12%] left-[6%] w-10 h-16 rounded-[100%_0%_100%_0%] bg-[#0D2E4A]/30 border border-[#8FDFFF]/10 opacity-[0.25]" />
          <motion.div animate={{ y: [0, 15, 0], rotate: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1 }} className="absolute bottom-[15%] right-[8%] w-8 h-12 rounded-[0%_100%_0%_100%] bg-[#0D2E4A]/40 border border-[#8FDFFF]/15 opacity-[0.35]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-semibold tracking-tight leading-tight">
              Who Is This Certification For?
            </h2>
            <p className="text-base md:text-lg !text-white/95 font-light font-serif italic max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
              Designed for seekers, practitioners, and therapists ready to master the complete 78-card Tarot system intuitively and ethically.
            </p>
            <div className="flex justify-center pt-2">
              <div className="h-[1px] w-16 bg-[#8FDFFF]/30" />
            </div>
          </div>

          {/* LOTUS LAYOUT CONTAINER (Desktop) */}
          <div className="hidden lg:block relative w-full max-w-5xl mx-auto h-[540px] my-4 select-none">
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full text-[#8FDFFF]/15 pointer-events-none select-none z-0">
              <path d="M 120,120 Q 200,200 200,200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 280,120 Q 200,200 200,200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 120,280 Q 200,200 200,200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 280,280 Q 200,200 200,200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
            </svg>

            {/* Central Glowing Blooming Lotus */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
              <div className="relative w-44 h-44 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#8FDFFF]/10 rounded-full blur-2xl animate-pulse duration-4000" />
                
                {activePetal !== null && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                    className={`absolute inset-0 rounded-full blur-md pointer-events-none ${
                      activePetal === 0 ? "bg-[#8FDFFF]/15 -translate-x-10 -translate-y-10" :
                      activePetal === 1 ? "bg-gold/15 translate-x-10 -translate-y-10" :
                      activePetal === 2 ? "bg-[#8FDFFF]/15 -translate-x-10 translate-y-10" :
                      "bg-indigo-soft/15 translate-x-10 translate-y-10"
                    }`}
                  />
                )}

                <motion.div 
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute inset-1 rounded-full border border-[#8FDFFF]/30 flex items-center justify-center shadow-[inset_0_0_20px_rgba(143,223,255,0.15)] bg-[#071B2E]/95 backdrop-blur-sm z-10"
                >
                  <div className="absolute inset-2.5 rounded-full border border-[#8FDFFF]/10 flex flex-col items-center justify-center text-center p-3">
                    <svg viewBox="0 0 100 100" className="w-10 h-10 text-gold mb-1" style={{ animationDuration: '4s' }}>
                      <path d="M 50,80 C 35,68 36,45 50,25 C 64,45 65,68 50,80 Z" fill="#0D2E4A" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M 50,80 C 42,65 44,48 50,32 C 56,48 58,65 50,80 Z" fill="currentColor" className="text-gold-light/60" />
                    </svg>
                    <span className="font-serif text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-0.5">
                      Tarot Path
                    </span>
                    <span className="font-serif text-[12px] font-bold text-white tracking-wider leading-tight">
                      Who Is This
                    </span>
                    <span className="font-serif text-[12px] font-bold text-white tracking-wider leading-tight">
                      Program For?
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 4 Premium Lotus Petal Cards */}
            {[
              {
                title: "Beginners & Seekers",
                illustration: <BeginnersSeekersIllustration />,
                desc: "Seekers with no prior Tarot experience wanting to explore deep self-discovery, connect with spirit guides, and strengthen natural intuition.",
                gradientClass: "from-[#0D2E4A]/45 via-[#071B2E]/80 to-[#050505]/95",
                borderClass: "border-[#8FDFFF]/20 hover:border-[#8FDFFF]/70",
                glowClass: "shadow-[0_0_15px_rgba(143,223,255,0.03)] hover:shadow-[0_0_25px_rgba(143,223,255,0.2)]",
                shapeClass: "rounded-[140px_20px_140px_20px]",
                posClass: "left-[4%] top-[4%] w-[38%] h-[200px]"
              },
              {
                title: "Energy Healers",
                illustration: <EnergyHealersIllustration />,
                desc: "Reiki practitioners, crystal healers, or angel healers looking to combine symbolic, structured card alignments alongside raw energy readings.",
                gradientClass: "from-[#0D2E4A]/45 via-[#071B2E]/80 to-[#050505]/95",
                borderClass: "border-[#8FDFFF]/20 hover:border-[#8FDFFF]/70",
                glowClass: "shadow-[0_0_15px_rgba(143,223,255,0.03)] hover:shadow-[0_0_25px_rgba(143,223,255,0.2)]",
                shapeClass: "rounded-[20px_140px_20px_140px]",
                posClass: "right-[4%] top-[4%] w-[38%] h-[200px]"
              },
              {
                title: "Coaches & Therapists",
                illustration: <CoachesTherapistsIllustration />,
                desc: "Therapists, clinical counselors, and mindset coaches wanting to introduce archetypal symbolism, mindfulness, and non-invasive guidance methods.",
                gradientClass: "from-[#0D2E4A]/45 via-[#071B2E]/80 to-[#050505]/95",
                borderClass: "border-[#8FDFFF]/20 hover:border-[#8FDFFF]/70",
                glowClass: "shadow-[0_0_15px_rgba(143,223,255,0.03)] hover:shadow-[0_0_25px_rgba(143,223,255,0.2)]",
                shapeClass: "rounded-[20px_140px_20px_140px]",
                posClass: "left-[4%] bottom-[4%] w-[38%] h-[200px]"
              },
              {
                title: "Aspiring Professionals",
                illustration: <AspiringProfessionalsIllustration />,
                desc: "Anyone wanting to read professionally for clients, establish structured pricing and ethics, design reading rituals, and launch a business.",
                gradientClass: "from-[#0D2E4A]/45 via-[#071B2E]/80 to-[#050505]/95",
                borderClass: "border-[#8FDFFF]/20 hover:border-[#8FDFFF]/70",
                glowClass: "shadow-[0_0_15px_rgba(143,223,255,0.03)] hover:shadow-[0_0_25px_rgba(143,223,255,0.2)]",
                shapeClass: "rounded-[140px_20px_140px_20px]",
                posClass: "right-[4%] bottom-[4%] w-[38%] h-[200px]"
              }
            ].map((petal, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActivePetal(idx)}
                onMouseLeave={() => setActivePetal(null)}
                className={`absolute ${petal.posClass} ${petal.shapeClass} bg-gradient-to-b ${petal.gradientClass} border ${petal.borderClass} ${petal.glowClass} p-6 cursor-default flex flex-col justify-center overflow-hidden transition-all duration-300`}
              >
                <div className={`absolute inset-3 border border-gold/5 ${petal.shapeClass} pointer-events-none opacity-40`} />
                <div className="flex gap-4 items-start relative z-10">
                  <div className="flex-shrink-0">{petal.illustration}</div>
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-base font-bold text-white tracking-wide flex items-center gap-1.5">
                      {petal.title}
                    </h3>
                    <p className="text-[12px] !text-white/95 leading-relaxed font-normal max-w-[280px]" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                      {petal.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LOTUS LAYOUT CONTAINER (Mobile/Tablet) */}
          <div className="lg:hidden flex flex-col items-center gap-8 py-4">
            <div className="w-full max-w-sm p-6 bg-gradient-to-b from-[#071B2E] to-[#050505] border border-[#8FDFFF]/30 rounded-[2rem] text-center shadow-lg flex flex-col items-center justify-center space-y-4">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-gold animate-pulse">
                <path d="M 50,80 C 35,68 36,45 50,25 C 64,45 65,68 50,80 Z" fill="#0D2E4A" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <h3 className="font-serif text-xl font-bold text-white">
                Who Is This Program For?
              </h3>
            </div>

            <div className="w-full max-w-md space-y-6">
              {[
                {
                  title: "Beginners & Seekers",
                  illustration: <BeginnersSeekersIllustration />,
                  desc: "Seekers with no prior Tarot experience wanting to explore deep self-discovery, connect with spirit guides, and strengthen natural intuition.",
                  gradientClass: "from-[#0D2E4A]/45 via-[#071B2E]/80 to-[#050505]/95",
                  borderClass: "border-[#8FDFFF]/20",
                  shapeClass: "rounded-[2rem_4rem_2rem_4rem]"
                },
                {
                  title: "Energy Healers",
                  illustration: <EnergyHealersIllustration />,
                  desc: "Reiki practitioners, crystal healers, or angel healers looking to combine symbolic, structured card alignments alongside raw energy readings.",
                  gradientClass: "from-[#0D2E4A]/45 via-[#071B2E]/80 to-[#050505]/95",
                  borderClass: "border-[#8FDFFF]/20",
                  shapeClass: "rounded-[4rem_2rem_4rem_2rem]"
                },
                {
                  title: "Coaches & Therapists",
                  illustration: <CoachesTherapistsIllustration />,
                  desc: "Therapists, clinical counselors, and mindset coaches wanting to introduce archetypal symbolism, mindfulness, and non-invasive guidance methods.",
                  gradientClass: "from-[#0D2E4A]/45 via-[#071B2E]/80 to-[#050505]/95",
                  borderClass: "border-[#8FDFFF]/20",
                  shapeClass: "rounded-[4rem_2rem_4rem_2rem]"
                },
                {
                  title: "Aspiring Professionals",
                  illustration: <AspiringProfessionalsIllustration />,
                  desc: "Anyone wanting to read professionally for clients, establish structured pricing and ethics, design reading rituals, and launch a business.",
                  gradientClass: "from-[#0D2E4A]/45 via-[#071B2E]/80 to-[#050505]/95",
                  borderClass: "border-[#8FDFFF]/20",
                  shapeClass: "rounded-[2rem_4rem_2rem_4rem]"
                }
              ].map((petal, idx) => (
                <div
                  key={idx}
                  className={`w-full bg-gradient-to-tr ${petal.gradientClass} border ${petal.borderClass} ${petal.shapeClass} p-6 shadow-md flex gap-4 items-start cursor-default`}
                >
                  <div className="flex-shrink-0">{petal.illustration}</div>
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-base font-bold text-white flex items-center gap-1.5">
                      {petal.title}
                    </h4>
                    <p className="text-xs !text-white/95 leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                      {petal.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. TAROT SERVICES GRID */}
      <section className="py-16 md:py-20 bg-[#050505] border-t border-[#0D2E4A]/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-3">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-medium tracking-tight">
              Our 1-on-1 Tarot Readings
            </h2>
          </div>

          <div className="flex items-center justify-center gap-3 mb-14">
            <div className="h-[1px] w-14 bg-[#8FDFFF]/30" />
            <span className="text-white text-xs">✦</span>
            <div className="h-[1px] w-14 bg-[#8FDFFF]/30" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {TAROT_SERVICES.map((serv, idx) => {
              const icons = [Sparkles, Heart, Compass, Eye, Sun, Moon];
              const IconComponent = icons[idx % icons.length];
              
              return (
                <div 
                  key={idx} 
                  className="bg-gradient-to-b from-[#0D2E4A] via-[#071B2E] to-[#050505] border border-[#8FDFFF]/30 hover:border-gold rounded-2xl p-5 shadow-[0_0_15px_rgba(143,223,255,0.03)] hover:shadow-[0_0_25px_rgba(143,223,255,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-center text-center h-full group relative"
                >
                  <div className="flex flex-col items-center w-full">
                    <div className="w-14 h-14 rounded-full bg-[#8FDFFF]/15 border border-[#8FDFFF]/30 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    
                    <h4 className="font-serif text-sm font-bold text-white leading-tight tracking-wide mb-3 min-h-[36px] flex items-center justify-center">
                      {serv.title}
                    </h4>
                    
                    <p className="text-[11px] !text-white/90 font-light leading-relaxed mb-6 max-w-[160px]" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      {serv.desc}
                    </p>
                  </div>

                  <div className="w-full flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-white/70 block mb-1">
                      {serv.duration} | Online
                    </span>
                    
                    <span className="text-xs font-serif font-bold text-white block mb-5">
                      {serv.price}
                    </span>
                    
                    <button
                      onClick={() => onBook(`Tarot Reading - ${serv.title}`)}
                      className="w-full py-2.5 border border-[#8FDFFF]/35 hover:bg-[#8FDFFF] hover:text-[#050505] hover:border-transparent text-white text-[10px] font-bold tracking-widest uppercase rounded-lg transition-all duration-300"
                      id={`tarot-book-service-${idx}`}
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION BANNER */}
      <section className="py-16 md:py-20 bg-[#050505] text-white relative overflow-hidden border-t border-[#0D2E4A]/60" style={{
        backgroundImage: `url('${getSrc('tarot.cta_bg', 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80&w=1600')}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-[#050505]/92 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.35] pointer-events-none select-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#8FDFFF]/10 blur-[120px] animate-pulse" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
          <div className="space-y-8">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight uppercase max-w-4xl mx-auto drop-shadow-sm">
              Begin your path to <br />
              <span className="text-white italic font-normal font-serif lowercase">intuitive clarity &</span> symbolic wisdom.
            </h2>

            <p className="text-base sm:text-lg md:text-xl !text-white/95 max-w-3xl mx-auto leading-relaxed font-light font-serif italic py-4" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
              Do not let doubt and guidebooks dictate your path. Step inside a deeply held, celestial training sanctuary and create readings rooted in deep intuitive wisdom, trust, and compassion.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={() => onBook('Tarot Reading Certification Course')}
                className="px-10 py-5 bg-gradient-to-r from-[#8FDFFF] to-[#5A8795] hover:from-[#CFEFFF] hover:to-[#8FDFFF] text-[#050505] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase rounded-full shadow-[0_0_30px_rgba(143,223,255,0.35)] hover:shadow-[0_0_40px_rgba(143,223,255,0.55)] transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer"
                id="tarot-cta-enroll"
              >
                Enroll In Program
              </button>
              
              <button
                onClick={onBack}
                className="px-8 py-4 border border-[#8FDFFF]/30 hover:bg-[#8FDFFF]/10 text-white hover:text-white rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
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

const TarotCircleWatercolorRing = ({ id, index }: { id: string; index: number }) => {
  const strokeColorClass = (() => {
    switch (id) {
      case 'major': return 'text-gold';
      case 'minor': return 'text-white';
      case 'court': return 'text-[#769466]';
      case 'intuition': return 'text-purple-400';
      case 'spreads': return 'text-emerald-500';
      case 'ethics': return 'text-white';
      default: return 'text-sage';
    }
  })();

  const rotationAngle = (index * 45) + 12;

  return (
    <svg viewBox="0 0 200 200" style={{ transform: `rotate(${rotationAngle}deg)` }} className="absolute inset-0 w-full h-full select-none pointer-events-none transition-transform duration-1000 group-hover:rotate-[360deg]">
      <g className={strokeColorClass}>
        <path
          d="M 100,20 C 115,45 130,30 145,45 C 170,55 170,80 180,100 C 170,120 170,145 145,155 C 130,170 115,155 100,180 C 85,155 70,170 55,155 C 30,145 30,120 20,100 C 30,80 30,55 55,45 C 70,30 85,45 100,20 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="35"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-[0.12] blur-[6px]"
        />
        <path
          d="M 100,25 C 112,48 128,34 140,48 C 162,58 162,82 172,100 C 162,118 162,142 140,152 C 128,166 112,152 100,175 C 88,152 72,166 60,152 C 38,142 38,118 28,100 C 38,82 38,58 60,48 C 72,34 88,48 100,25 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="20"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-[0.3] blur-[2px]"
        />
      </g>
    </svg>
  );
};

interface TarotCirculatingPillarProps {
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

function TarotCirculatingPillar({ title, items, icon: PillarIcon, colorTheme, bgImage }: TarotCirculatingPillarProps) {
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
    <div className="bg-white/70 backdrop-blur-md border-2 border-gold/40 rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(212,163,67,0.06)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden h-full min-h-[480px]">
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src={bgImage} 
          alt="" 
          className="w-full h-full object-cover opacity-[0.11] mix-blend-multiply" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-ivory/90" />
      </div>

      <div className="space-y-6 relative z-10 w-full flex-grow flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-4 border-b border-gold/20 pb-5">
            <div className={`w-12 h-12 rounded-full ${colorTheme.badgeBg} flex items-center justify-center ${colorTheme.text} flex-shrink-0 shadow-sm border border-gold/10`}>
              <PillarIcon className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div className="text-left space-y-1">
              <span className="text-[11px] font-bold uppercase block tracking-widest text-white font-serif" style={{ letterSpacing: '4px' }}>
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
                  className={`bg-gradient-to-b ${colorTheme.gradient} border border-gold/40 hover:border-gold shadow-sm rounded-2xl p-4.5 flex items-start gap-3.5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
                >
                  <div className={`mt-0.5 w-5 h-5 rounded-full ${colorTheme.badgeBg} flex items-center justify-center ${colorTheme.text} flex-shrink-0 border border-gold/10`}>
                    <CheckCircle className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div className="text-left leading-relaxed">
                    <p className="text-xs md:text-[13px] text-white font-bold uppercase tracking-wide">
                      {header}
                    </p>
                    <p className="text-xs text-white/90 font-medium mt-0.5">
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

const BeginnersSeekersIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-16 h-16 text-[#769466] drop-shadow-[0_4px_10px_rgba(118,148,102,0.15)]">
    <circle cx="60" cy="60" r="48" fill="currentColor" fillOpacity="0.15" />
    <path d="M 40,82 C 40,70 48,62 60,62 C 72,62 80,70 80,82 C 80,85 75,85 60,85 C 45,85 40,85 40,82 Z" fill="currentColor" fillOpacity="0.7" />
    <circle cx="60" cy="51" r="9" fill="#FAF5EB" stroke="currentColor" strokeWidth="1" />
    <circle cx="45" cy="40" r="1.5" fill="gold" />
    <circle cx="75" cy="45" r="2" fill="gold" />
    <circle cx="62" cy="35" r="1" fill="currentColor" />
  </svg>
);

const EnergyHealersIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-16 h-16 text-gold drop-shadow-[0_4px_10px_rgba(212,175,55,0.25)]">
    <circle cx="60" cy="60" r="48" fill="currentColor" fillOpacity="0.15" />
    <circle cx="60" cy="50" r="15" fill="currentColor" fillOpacity="0.3" className="animate-pulse" />
    <path d="M 60,25 L 60,75 M 35,50 L 85,50" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
    <path d="M 60,60 C 54,54 55,42 60,35 C 65,42 66,54 60,60 Z" fill="#FAF5EB" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const CoachesTherapistsIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-16 h-16 text-white drop-shadow-[0_4px_10px_rgba(255,255,255,0.15)]">
    <circle cx="60" cy="60" r="48" fill="currentColor" fillOpacity="0.15" />
    <circle cx="60" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 4" />
    <circle cx="60" cy="46" r="8" fill="#FAF5EB" stroke="currentColor" strokeWidth="1" />
    <path d="M 45,82 C 45,68 50,58 60,58 C 70,58 75,68 75,82 Z" fill="currentColor" fillOpacity="0.7" />
  </svg>
);

const AspiringProfessionalsIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-16 h-16 text-white drop-shadow-[0_4px_10px_rgba(255,255,255,0.15)]">
    <circle cx="60" cy="60" r="48" fill="currentColor" fillOpacity="0.15" />
    <circle cx="60" cy="50" r="22" fill="none" stroke="gold" strokeWidth="0.75" className="animate-pulse" />
    <circle cx="60" cy="46" r="8" fill="#FAF5EB" stroke="currentColor" strokeWidth="1" />
    <path d="M 57,35 L 60,31 L 63,35 L 60,37 Z" fill="gold" />
  </svg>
);
