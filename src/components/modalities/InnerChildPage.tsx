import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Calendar, Sparkles, CheckCircle, Flame, ShieldAlert,
  Award, Clock, ShieldCheck, Heart, Users, Brain, Globe, Infinity, Download,
  Eye, HeartHandshake, ChevronRight
} from 'lucide-react';
import { generatePDF } from '../../lib/pdfHelper';
import innerchildImg from '@/assets/modalities/innerchild.jpeg';
import { CinematicCordCuttingSection } from './CinematicCordCuttingSection';
import { SmartImage } from '../SmartImage';

interface InnerChildPageProps {
  onBack: () => void;
  onBook: (modalityName: string) => void;
}

export default function InnerChildPage({ onBack, onBook }: InnerChildPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Download syllabus as pdf file helper
  const handleDownloadSyllabus = () => {
    generatePDF(
      "Energy_Healing_Syllabus.pdf",
      "ENERGY HEALING & CORD CUTTING CERTIFICATION PROGRAM",
      "Release. Protect. Heal. Thrive.",
      "Become a Certified Energy Healing Practitioner & Transform Lives—Starting with Your Own\nRelease Unhealthy Attachments. Protect Your Energy. Restore Emotional Balance.\n\nEnergy shapes how we think, feel, react, and experience life. Every relationship, past experience, interaction, and environment leaves an energetic imprint. Over time, negative energy, emotional attachments, and unhealthy relational cords can leave you feeling drained, anxious, overwhelmed, or emotionally stuck.\n\nThe Energy Healing & Cord Cutting Certification Program is a comprehensive, practical training designed to help you understand your energy field, release unhealthy emotional attachments, protect your inner peace, and apply energy healing practices with confidence.\n\nNo prior energy work or healing experience required.",
      [
        {
          title: "MODULE 1: Awaken Your Energy",
          text: "Understanding Your Personal Energy System\n\nWHAT YOU WILL LEARN:",
          items: [
            "What human energy is and how it influences your daily life",
            "Understanding the human energy field, aura, and personal vibration",
            "How energy drains happen and why you feel exhausted or overwhelmed",
            "The science and spirituality of energy healing",
            "Developing body-awareness to recognize energetic shifts",
            "YOUR TRANSFORMATION:",
            "Become aware of your personal energy and how it affects your emotions",
            "Recognize when your energy is being drained or influenced by others",
            "Understand why you feel exhausted, overwhelmed, or emotionally heavy",
            "Stop absorbing other people's stress, emotions, and negative energy",
            "Build a safe and grounded foundation for your energy healing journey"
          ]
        },
        {
          title: "MODULE 2: What's Draining Your Energy?",
          text: "Recognising Energetic Attachments & Emotional Blocks\n\nWHAT YOU WILL LEARN:",
          items: [
            "What energetic cords are and how they form in relationships and past events",
            "Identifying toxic attachments, emotional dependencies, and energetic drains",
            "Recognizing signs of corded energy in daily life",
            "How past experiences and unresolved relationships affect present wellbeing",
            "Exploring emotional blocks that keep you stuck in repeating patterns",
            "YOUR TRANSFORMATION:",
            "Identify the exact relationships, experiences, and thoughts draining your energy",
            "Understand why you feel emotionally tied to past situations or individuals",
            "Gain clarity on hidden energetic attachments affecting your choices",
            "Recognize repeating emotional cycles in relationships and daily life",
            "Prepare yourself emotionally to release unhealthy attachments with grace"
          ]
        },
        {
          title: "MODULE 3: The Art of Letting Go",
          text: "Cord Cutting & Emotional Release\n\nWHAT YOU WILL LEARN:",
          items: [
            "Step-by-step cord cutting methodology and practical release techniques",
            "Visualizing and releasing unhealthy energetic cords safely and effectively",
            "Releasing emotional attachments to past relationships, guilt, and resentment",
            "Understanding the role of forgiveness in energetic freedom",
            "Guided energy release practices for immediate emotional relief",
            "YOUR TRANSFORMATION:",
            "Safely cut energetic cords with past relationships, trauma, and negative influences",
            "Feel an immediate sense of emotional relief, lightness, and freedom",
            "Stop feeling emotionally controlled by past situations or people",
            "Release resentment, guilt, and anger without conflict or confrontation",
            "Reclaim your personal energy, focus, and inner peace"
          ]
        },
        {
          title: "MODULE 4: Restore Your Inner Light",
          text: "Healing, Grounding & Energy Restoration\n\nWHAT YOU WILL LEARN:",
          items: [
            "Grounding techniques to anchor your energy and feel safe in your body",
            "Energy cleansing practices using breathwork, visualization, and intention",
            "Restoring depleted energy after emotional release or stressful situations",
            "Rebalancing your aura and personal energy field",
            "Daily energy maintenance routines for lasting vitality",
            "YOUR TRANSFORMATION:",
            "Feel grounded, calm, and present in your daily life",
            "Restore your energy levels after stressful or draining interactions",
            "Cleanse your aura and energy field of negative or stagnant energy",
            "Develop an inner sense of safety, balance, and emotional stability",
            "Experience greater vitality, clarity, and physical wellbeing"
          ]
        },
        {
          title: "MODULE 5: Protect What You Heal",
          text: "Energy Protection & Healthy Boundaries\n\nWHAT YOU WILL LEARN:",
          items: [
            "Powerful energy protection techniques to shield your energy field",
            "Setting healthy emotional and energetic boundaries without guilt",
            "Protecting yourself in crowded, stressful, or negative environments",
            "How to interact with negative individuals without absorbing their energy",
            "Creating a personal daily energy protection routine",
            "YOUR TRANSFORMATION:",
            "Protect your inner peace from negative people, places, and situations",
            "Set firm, healthy boundaries confidently and without feeling guilty",
            "Stay calm, centered, and unaffected during stressful conversations or events",
            "Prevent energy burnout, emotional exhaustion, and overwhelm",
            "Feel safe, protected, and empowered in any environment"
          ]
        },
        {
          title: "MODULE 6: Rise Into Higher Energy",
          text: "Raising Your Vibration & Strengthening Intuition\n\nWHAT YOU WILL LEARN:",
          items: [
            "Understanding energy frequencies and how to raise your vibration",
            "Developing and trusting your natural intuitive guidance",
            "Overcoming self-doubt and trusting your inner wisdom",
            "Using high-vibrational thoughts, emotions, and habits for emotional healing",
            "Aligning with positive energy, clarity, and emotional wellbeing",
            "YOUR TRANSFORMATION:",
            "Elevate your mood, mindset, and overall emotional state",
            "Develop a strong connection to your inner intuition and wisdom",
            "Make confident decisions guided by clarity rather than fear or anxiety",
            "Attract positive relationships, opportunities, and experiences",
            "Live with greater joy, gratitude, alignment, and inner peace"
          ]
        },
        {
          title: "MODULE 7: Healing the Energy Between Us",
          text: "Relationships, Energy Exchange & Emotional Freedom\n\nWHAT YOU WILL LEARN:",
          items: [
            "Understanding energetic exchanges in romantic, family, and social relationships",
            "Breaking energetic cycles of codependency and people-pleasing",
            "Healing relationship dynamics through energy awareness",
            "Creating balanced, respectful, and loving energy exchanges",
            "Maintaining energetic independence while caring for others",
            "YOUR TRANSFORMATION:",
            "Break free from people-pleasing, codependency, and emotional enmeshment",
            "Build healthy, balanced, and mutually respectful relationships",
            "Communicate your needs calmly without fear of rejection",
            "Maintain your personal energy while supporting loved ones",
            "Attract and nurture relationships based on love, respect, and mutual support"
          ]
        },
        {
          title: "MODULE 8: Living Energetically Aligned",
          text: "Integration, Daily Practice & Professional Growth\n\nWHAT YOU WILL LEARN:",
          items: [
            "Integrating energy healing practices into your daily life and routine",
            "Creating personalized energy healing rituals for ongoing wellbeing",
            "How to apply energy healing tools for professional use or supporting others",
            "Developing ethical guidelines for energy healing practice",
            "Building a lifelong practice of energy awareness, protection, and growth",
            "YOUR TRANSFORMATION:",
            "Seamlessly incorporate energy healing into your daily lifestyle",
            "Maintain long-term emotional balance, vitality, and energetic alignment",
            "Confidently use energy healing tools to support clients, friends, or family",
            "Build a sustainable, lifelong personal healing practice",
            "Graduate with the knowledge, skills, and confidence of a certified practitioner"
          ]
        },
        {
          title: "FINAL PROGRAM TRANSFORMATION",
          text: "By the end of this Energy Healing & Cord Cutting Certification Program, learners will:",
          items: [
            "Understand how human energy, aura, and vibration affect thoughts, emotions, and health.",
            "Identify and release unhealthy energetic attachments, cords, and emotional drains.",
            "Master practical cord cutting techniques to let go of past relationships and trauma.",
            "Protect their energy field from negative influences, stress, and toxic environments.",
            "Set firm, healthy boundaries confidently and guilt-free in personal and professional life.",
            "Raise their personal vibration, cultivate positive energy, and strengthen intuition.",
            "Restore depleted energy, ground themselves, and maintain long-term vitality.",
            "Build healthy, balanced relationships based on clean, respectful energetic exchange.",
            "Apply energy healing and cord cutting practices safely for self-healing or supporting clients."
          ]
        }
      ]
    );
  };

  const heroHighlights = [
    { icon: Globe, label: "Internationally Designed Curriculum" },
    { icon: Sparkles, label: "Energy-Based Healing Approach" },
    { icon: ShieldCheck, label: "Step-by-Step Healing Methodology" },
    { icon: Award, label: "Certificate of Completion" },
    { icon: Infinity, label: "Lifetime Access" }
  ];

  const bubbleConfigs = [
    {
      pos: "top-[6%] left-[18%]",
      size: "w-[150px] h-[150px] xl:w-[170px] xl:h-[170px]",
      borderClass: "border-[#769466]/25 hover:border-[#769466]",
      shadowClass: "shadow-[0_8px_25px_rgba(118,148,102,0.08)] hover:shadow-[0_15px_35px_rgba(118,148,102,0.2)]",
      iconColor: "text-[#769466] bg-[#769466]/10",
      animationClass: "animate-float-slow",
      duration: "13s",
      delay: "0s"
    },
    {
      pos: "top-[14%] right-[8%]",
      size: "w-[145px] h-[145px] xl:w-[165px] xl:h-[165px]",
      borderClass: "border-gold/25 hover:border-gold",
      shadowClass: "shadow-[0_8px_25px_rgba(212,175,55,0.08)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.2)]",
      iconColor: "text-gold bg-gold/10",
      animationClass: "animate-float-medium",
      duration: "11s",
      delay: "1.5s"
    },
    {
      pos: "top-[40%] left-[38%]",
      size: "w-[160px] h-[160px] xl:w-[185px] xl:h-[185px]",
      borderClass: "border-[#2F6D73]/35 hover:border-[#2F6D73]",
      shadowClass: "shadow-[0_8px_25px_rgba(47,109,115,0.1)] hover:shadow-[0_15px_35px_rgba(47,109,115,0.22)]",
      iconColor: "text-[#2F6D73] bg-[#EAF3F1]",
      animationClass: "animate-float-sway",
      duration: "15s",
      delay: "0.5s"
    },
    {
      pos: "bottom-[8%] left-[22%]",
      size: "w-[150px] h-[150px] xl:w-[170px] xl:h-[170px]",
      borderClass: "border-[#4F7786]/25 hover:border-[#4F7786]",
      shadowClass: "shadow-[0_8px_25px_rgba(79,119,134,0.08)] hover:shadow-[0_15px_35px_rgba(79,119,134,0.2)]",
      iconColor: "text-[#4F7786] bg-[#4F7786]/10",
      animationClass: "animate-float-slow",
      duration: "12s",
      delay: "2.5s"
    },
    {
      pos: "bottom-[14%] right-[10%]",
      size: "w-[135px] h-[135px] xl:w-[155px] xl:h-[155px]",
      borderClass: "border-teal-soft/25 hover:border-teal-soft",
      shadowClass: "shadow-[0_8px_25px_rgba(79,157,166,0.08)] hover:shadow-[0_15px_35px_rgba(79,157,166,0.2)]",
      iconColor: "text-teal-soft bg-teal-soft/10",
      animationClass: "animate-float-medium",
      duration: "10s",
      delay: "3.5s"
    }
  ];

  const energyPathways = [
    {
      id: 'awaken',
      label: 'Awaken',
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=300',
      desc: 'Understand your energy system'
    },
    {
      id: 'recognise',
      label: 'Recognise',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=300',
      desc: 'Identify energy drains'
    },
    {
      id: 'letgo',
      label: 'Let Go',
      image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=300',
      desc: 'Cord cutting rituals'
    },
    {
      id: 'restore',
      label: 'Restore',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=300',
      desc: 'Healing & grounding'
    },
    {
      id: 'protect',
      label: 'Protect',
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=300',
      desc: 'Healthy boundaries'
    },
    {
      id: 'rise',
      label: 'Rise',
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=300',
      desc: 'Higher vibration alignment'
    }
  ];

  const energyHeroImg = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200";

  const energyModules = [
    {
      num: "01",
      title: "Module 1",
      subtitle: "Awaken Your Energy",
      desc: "Discover the foundations of your personal energy, understand how energy influences every aspect of your life, and build awareness for lifelong healing.",
      bgGradient: "from-[#769466]/12 via-[#FAF9F6]/95 to-[#E2ECE6]/30",
      icon: Eye,
      station: "Awaken Station"
    },
    {
      num: "02",
      title: "Module 2",
      subtitle: "What's Draining Your Energy?",
      desc: "Understand energetic cords, emotional attachments, limiting beliefs, and hidden energy drains that prevent emotional freedom.",
      bgGradient: "from-[#2F6D73]/12 via-[#FAF9F6]/95 to-[#4F7786]/30",
      icon: ShieldAlert,
      station: "Attachment Station"
    },
    {
      num: "03",
      title: "Module 3",
      subtitle: "The Art of Letting Go",
      desc: "Master practical cord cutting methods, emotional release techniques, forgiveness practices, and guided visualizations for deep healing.",
      bgGradient: "from-[#4F7786]/12 via-[#FAF9F6]/95 to-[#EAF3F1]/30",
      icon: HeartHandshake,
      station: "Letting Go Station"
    },
    {
      num: "04",
      title: "Module 4",
      subtitle: "Restore Your Inner Light",
      desc: "Restore your emotional and energetic balance through grounding, cleansing, healing practices, and self-care techniques.",
      bgGradient: "from-[#7F9C87]/12 via-[#FAF9F6]/95 to-[#7F9C87]/30",
      icon: Sparkles,
      station: "Restoration Station"
    },
    {
      num: "05",
      title: "Module 5",
      subtitle: "Protect What You Heal",
      desc: "Build energetic resilience through protection techniques, healthy boundaries, and daily practices that preserve your inner peace.",
      bgGradient: "from-[#2F6D73]/12 via-[#FAF9F6]/95 to-[#EAF3F1]/30",
      icon: ShieldCheck,
      station: "Protection Station"
    },
    {
      num: "06",
      title: "Module 6",
      subtitle: "Rise Into Higher Energy",
      desc: "Develop intuitive awareness, cultivate positive energy, strengthen emotional resilience, and align with higher states of wellbeing.",
      bgGradient: "from-[#769466]/12 via-[#FAF9F6]/95 to-[#E2ECE6]/30",
      icon: Flame,
      station: "Vibration Station"
    },
    {
      num: "07",
      title: "Module 7",
      subtitle: "Healing the Energy Between Us",
      desc: "Understand the energetic dynamics of relationships, release unhealthy emotional patterns, and build healthier, balanced connections.",
      bgGradient: "from-[#4F7786]/12 via-[#FAF9F6]/95 to-[#4F7786]/30",
      icon: Users,
      station: "Relationship Station"
    },
    {
      num: "08",
      title: "Module 8",
      subtitle: "Living Energetically Aligned",
      desc: "Integrate your learning into everyday life, establish lifelong healing rituals, and confidently apply energy healing practices for yourself and others.",
      bgGradient: "from-[#7F9C87]/12 via-[#FAF9F6]/95 to-[#7F9C87]/30",
      icon: Award,
      station: "Integration Station ✧"
    }
  ];

  return (
    <div className="bg-ivory text-ocean font-sans min-h-screen relative overflow-hidden selection:bg-[#2F6D73]/20 selection:text-ocean-dark">
      
      {/* Dynamic Back to Sanctuary Header */}
      <div className="max-w-7xl mx-auto px-6 pt-8 relative z-50">
        <button 
          onClick={onBack}
          className="flex items-center gap-2.5 text-xs font-bold text-[#0A252C]/60 hover:text-[#2F6D73] transition-all duration-300 uppercase tracking-[0.25em] group"
          id="energy-back-to-sanctuary"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Sanctuary
        </button>
        <div className="flex items-center gap-2 text-[10.5px] text-[#0A252C]/55 uppercase tracking-wider mt-4 font-semibold">
          <span>Home</span>
          <span>&gt;</span>
          <span>Healing Sanctuary</span>
          <span>&gt;</span>
          <span className="text-teal-soft font-bold">Energy Healing &amp; Cord Cutting</span>
        </div>
      </div>

      {/* 1. LUXURIOUS HERO SECTION */}
      <section 
        className="relative pt-12 pb-16 px-6 overflow-hidden text-ocean"
        style={{ background: 'linear-gradient(90deg, #FAF9F6, #FDFCFA, #FFFFFF)' }}
      >
        {/* Soft elegant sand and cream background highlights */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2F6D73_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="space-y-2">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#0A252C] leading-none uppercase">
                Energy Healing &amp; <br />
                Cord Cutting
              </h1>
              <span className="text-base md:text-lg font-mono tracking-[0.25em] text-[#0A252C] uppercase font-bold block pt-1">
                CERTIFICATION PROGRAM
              </span>
            </div>

            {/* Floral/Leaf divider under heading */}
            <div className="flex items-center gap-2 py-1 text-gold">
              <div className="h-[1px] w-12 bg-gold" />
              <svg className="w-4 h-4 text-gold fill-current animate-pulse" viewBox="0 0 24 24">
                <path d="M12 21C12 21 15.5 17 15.5 14C15.5 11.5 13.5 10.5 12 12C10.5 10.5 8.5 11.5 8.5 14C8.5 17 12 21 12 21Z" />
              </svg>
              <div className="h-[1px] w-56 bg-gold" />
            </div>

            <p className="font-serif text-2xl md:text-3xl text-[#0A252C] italic leading-snug font-medium">
              "Cut the cords. Detach yourself from the past. Heal your energy."
            </p>

            <p className="text-lg md:text-xl text-[#2F6D73] font-semibold leading-relaxed">
              Become a Certified Energy Healing Practitioner &amp; Transform Lives—Starting with Your Own
            </p>

            {/* 5 Highlights Icons under hero text */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 pt-6 pb-6 border-t border-b border-gold/35">
              {heroHighlights.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-2 group">
                  <div className="w-11 h-11 rounded-full bg-[#FAFDFD] border border-[#2F6D73]/20 flex items-center justify-center text-[#2F6D73] group-hover:bg-[#2F6D73]/10 transition-colors shadow-sm">
                    <item.icon className="w-5 h-5 stroke-[1.2]" />
                  </div>
                  <span className="text-xs md:text-sm text-ocean font-medium leading-tight max-w-[120px] block">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Core Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onBook('Energy Healing & Cord Cutting Certification')}
                className="px-8 py-4 bg-[#0A252C] hover:bg-[#15424A] text-white text-sm font-bold tracking-[0.15em] uppercase rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group cursor-pointer"
                id="energy-hero-enroll-btn"
              >
                <span>Enroll Now</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={handleDownloadSyllabus}
                className="px-8 py-4 bg-white border border-[#4F7786] text-[#0A252C] hover:bg-slate-50 text-sm font-bold tracking-[0.15em] uppercase rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                id="energy-hero-syllabus-btn"
              >
                <Download className="w-4 h-4 text-[#4F7786]" />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>

          {/* Hero Right Content Column (Clean Plain Layout) */}
          <div className="lg:col-span-4 hidden lg:block" />

        </div>
      </section>

      {/* 2. THE PATHWAY METHODOLOGY SECTION */}
      <section className="py-16 md:py-20 bg-white border-t border-[#dfdbc9]/30 relative z-10">
        
        {/* Soft background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-gradient-to-r from-teal-light/5 to-gold/5 blur-[100px] pointer-events-none select-none" />

        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative Frame */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0A252C] font-semibold tracking-tight leading-tight">
                Heal Your Energy. Release Emotional Attachments. Restore Inner Balance.
              </h2>
              
              <div className="w-16 h-[2px] bg-gold" />
              
              <p className="text-base sm:text-lg text-[#0A252C] leading-relaxed font-medium">
                Your energy shapes the way you think, feel, connect with others, and experience life. Every relationship, emotion, thought, and experience leaves an energetic imprint. Over time, unresolved emotions, unhealthy attachments, stress, and past experiences can create energetic blocks that affect your emotional wellbeing, confidence, relationships, and overall quality of life.
              </p>

              <p className="text-base sm:text-lg text-[#0A252C] leading-relaxed font-medium">
                The Energy Healing &amp; Cord Cutting Certification Program is a comprehensive, internationally designed training that helps you understand your personal energy system, recognize energetic imbalances, release emotional and energetic attachments, restore inner harmony, strengthen energetic boundaries, and confidently apply practical healing techniques for yourself and others.
              </p>

              <p className="text-base sm:text-lg text-[#0A252C] italic leading-relaxed font-serif">
                Whether you're beginning your personal healing journey or expanding your professional skills, this certification provides a structured, practical, and transformational approach to energy healing.
              </p>

              {/* Dynamic Golden highlight badge box */}
              <div className="p-4 bg-gradient-to-r from-gold/15 to-[#FAF9F5] border-l-4 border-gold rounded-r-2xl mt-6">
                <p className="text-sm font-bold text-[#0A252C] uppercase tracking-wider">
                  ✦ No prior healing or therapy experience required.
                </p>
              </div>
            </div>

            {/* Right Horizontal/Grid Milestone Pathway Tracker */}
            <div className="lg:col-span-7 flex flex-col justify-center h-full">
              <h3 className="font-serif text-xl font-bold text-[#0A252C] text-left mb-8 uppercase tracking-[0.2em] text-teal-soft">
                The Evolutionary Energy Path
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 relative">
                {energyPathways.map((item, idx, arr) => (
                  <div 
                    key={item.id} 
                    className="flex flex-col items-center text-center group relative p-4 bg-gradient-to-b from-[#fcfbfa] to-white hover:to-[#EAF3F1] border border-[#2F6D73]/15 hover:border-[#2F6D73] rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-md cursor-default"
                  >
                    {/* Diamond Image Wrapper with organic ring surrounding it */}
                    <div className="relative w-22 h-22 md:w-24 md:h-24 mb-4 flex items-center justify-center">
                      
                      {/* Interactive hand-painted watercolor ring backdrop (Yellow watercolor diamond shape) */}
                      <InnerChildDiamondWatercolorRing index={idx} />
                      
                      {/* Outer Diamond Shape (acting as a gorgeous border frame) */}
                      <div 
                        className="absolute inset-2 bg-gradient-to-tr from-[#2F6D73]/20 to-[#2F6D73]/40 group-hover:from-gold/30 group-hover:to-gold/50 transition-all duration-500 flex items-center justify-center shadow-inner"
                        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                      >
                        {/* Inner Diamond Shape for the actual image */}
                        <div 
                          className="absolute inset-[1.5px] bg-white overflow-hidden"
                          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                        >
                          <SmartImage 
                            id={`innerchild.energy_path_${idx + 1}`}
                            defaultSrc={item.image} 
                            alt={item.label} 
                            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-125"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-[#2F6D73]/5 group-hover:bg-transparent transition-colors duration-300" />
                        </div>
                      </div>
                      
                      {/* High-end absolute numeric badge */}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#0A252C] border border-[#2F6D73]/25 flex items-center justify-center text-xs font-extrabold text-white shadow-md z-30 group-hover:bg-gold group-hover:border-white transition-all duration-500">
                        {idx + 1}
                      </div>

                    </div>
                    
                    {/* Pathway Step Text */}
                    <span className="text-sm md:text-base font-bold text-[#0A252C] uppercase tracking-wider mt-1 group-hover:text-[#2F6D73] transition-colors">
                      {item.label}
                    </span>
                    <span className="text-xs md:text-sm text-ocean/85 font-semibold mt-1 max-w-[130px] leading-snug block">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. PROGRAM CURRICULUM SECTION */}
      <section id="curriculum-section" className="py-16 md:py-20 px-6 bg-[#faf7f2] border-t border-[#dfdbc9]/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-serif text-3xl md:text-5xl text-[#0A252C] font-semibold tracking-tight uppercase">
              Program Curriculum
            </h2>
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="w-10 h-[1px] bg-[#2F6D73]/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c0942c]" />
              <div className="w-10 h-[1px] bg-[#2F6D73]/30" />
            </div>
          </div>

          {/* Journey Grid - Cleaner static layout with premium styling */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {energyModules.map((mod, idx) => {
                const IconComponent = mod.icon;
                return (
                  <div key={idx} className="relative group flex flex-col h-full">
                    {/* The Card - styled to match Relationship Mastery */}
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
                          <span className="font-serif text-4xl font-extrabold text-[#c0942c] tracking-tight">
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
                          <h3 className="font-serif text-xl font-bold text-[#0A252C] leading-snug">
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

        </div>
      </section>

      {/* 4. TRANSFORMATIONS SECTION */}
      <section className="py-16 md:py-20 px-6 bg-white border-t border-[#dfdbc9]/30 relative z-10 overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute inset-0 opacity-[0.22] pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#EAF3F1] blur-3xl animate-pulse duration-4000" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#7F9C87]/10 blur-3xl animate-pulse duration-3000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-5xl text-[#0A252C] font-semibold tracking-tight uppercase">
              Your Transformation
            </h2>
          </div>

          {/* Three Column Grid of Transformation Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Energetic Blocks We Release",
                icon: ShieldAlert,
                colorTheme: {
                  primary: "#4F7786",
                  badgeBg: "bg-[#4F7786]/10",
                  border: "border-[#4F7786]/15 hover:border-[#4F7786]/45",
                  glow: "shadow-[0_8px_30px_rgba(79,119,134,0.03)] hover:shadow-[0_15px_40px_rgba(79,119,134,0.12)]",
                  text: "text-[#4F7786]",
                  gradient: "from-white to-[#FAF9F6] hover:to-[#4F7786]/10",
                },
                bgImage: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600",
                items: [
                  "Unhealthy Attachments: Identify and dissolve invisible energetic cords draining your vitality and peace.",
                  "Emotional Blockages: Clear historical trauma patterns, toxic emotional residues, and ancestral imprints.",
                  "Daily Energy Drains: Pinpoint hidden people, places, and thoughts constantly pulling down your auric field.",
                  "Sabotaging Routines: Recognize and end behavior habits that default back to old emotional states."
                ]
              },
              {
                title: "Reclaiming Your Inner Light",
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
                  "Cord Cutting Rituals: Conduct practical cord severance ceremonies safely, compassionate to the self and others.",
                  "Energetic Protection: Construct high-vibration boundaries and daily shields against heavy environments.",
                  "Vital Self-Restoration: Practice advanced grounding and chakra clearing to restore emotional equilibrium.",
                  "Aesthetic Biofield Cleansing: Re-pattern your surrounding space and auric field back to secure states of alignment."
                ]
              },
              {
                title: "Daily Alignment & Growth",
                icon: Award,
                colorTheme: {
                  primary: "#2F6D73",
                  badgeBg: "bg-[#EAF3F1]",
                  border: "border-[#2F6D73]/15 hover:border-[#2F6D73]/45",
                  glow: "shadow-[0_8px_30px_rgba(47,109,115,0.03)] hover:shadow-[0_15px_40px_rgba(47,109,115,0.12)]",
                  text: "text-[#2F6D73]",
                  gradient: "from-white to-[#FAF9F6] hover:to-[#EAF3F1]",
                },
                bgImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600",
                items: [
                  "Conscious Energy Exchange: Navigate relations without absorbing external stress, ensuring reciprocal balance.",
                  "Spiritual Intuitive Awaken: Strengthen your gut instinct, trust your energetic read of rooms, and clear paths.",
                  "Accredited Healing Toolkit: Confidently utilize practical, structured techniques for your coaching clients.",
                  "Daily Resilient Rituals: Maintain a calm, light, protected presence under any daily life situation."
                ]
              }
            ].map((pillar, colIdx) => (
              <InnerChildCirculatingPillar 
                key={colIdx}
                id={`innerchild.pillar_${colIdx + 1}`}
                title={pillar.title}
                items={pillar.items}
                icon={pillar.icon}
                colorTheme={pillar.colorTheme}
                bgImage={pillar.bgImage}
              />
            ))}
          </div>

        </div>
      </section>

      <CinematicCordCuttingSection onBook={onBook} />

      {/* 5. WHO IS THIS FOR SECTION (Static Elegant Lotus Blossom) */}
      <section className="py-16 md:py-20 bg-[#FAF9F6] text-ocean relative overflow-hidden border-t border-[#dfdbc9]/30 z-10">
        
        {/* Sacred Geometry Background */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#769466]/8 blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#4F7786]/8 blur-[100px]" />
          <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-[#E2ECE6]/25 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          
          <svg viewBox="0 0 100 100" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] text-[#2F6D73] opacity-[0.03]">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.1" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Section Title */}
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#0A252C] font-semibold tracking-tight leading-tight max-w-3xl mx-auto">
              Who Is This Program For?
            </h2>
            <div className="flex justify-center pt-2">
              <div className="h-[1px] w-16 bg-gold/50" />
            </div>
          </div>

          {/* Lotus Petal Arranged Cards */}
          <div className="hidden lg:block relative w-full max-w-4xl mx-auto h-[500px] my-4 select-none">
            
            {/* Center Circle visual anchor - EXACT REF IMAGE 1 FORMAT & STRUCTURE */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
              <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
                <div className="absolute inset-0 bg-gold/15 rounded-full blur-2xl pointer-events-none animate-pulse" />
                <div className="absolute inset-0 rounded-full border-2 border-[#c0942c]/40 flex items-center justify-center shadow-[inset_0_0_35px_rgba(192,148,44,0.12)] bg-[#FAF9F5]/98 backdrop-blur-md">
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
                </div>
              </div>
            </div>

            {/* Static 4-petal layout */}
            {[
              {
                title: "Individuals",
                illustration: <IndividualsIllustration />,
                desc: "Seeking emotional, energetic, and spiritual healing, and those recovering from challenging relationships.",
                gradientClass: "from-[#769466]/10 via-[#FAF9F6]/95 to-[#E2ECE6]/30",
                borderClass: "border-[#769466]/25",
                shapeClass: "rounded-[120px_20px_120px_20px]",
                posClass: "left-[3%] top-[3%] w-[42%] h-[180px]"
              },
              {
                title: "Wellness Professionals",
                illustration: <CouplesIllustration />,
                desc: "Coaches, therapists, counsellors, and psychologists wanting to integrate practical energy-clearing strategies.",
                gradientClass: "from-[#2F6D73]/10 via-[#FAF9F6]/95 to-[#EAF3F1]/30",
                borderClass: "border-[#2F6D73]/25",
                shapeClass: "rounded-[20px_120px_20px_120px]",
                posClass: "right-[3%] top-[3%] w-[42%] h-[180px]"
              },
              {
                title: "Holistic Healers",
                illustration: <CoachesIllustration />,
                desc: "Reiki practitioners, yoga teachers, and meditation instructors seeking advanced cord cutting protocols.",
                gradientClass: "from-[#4F7786]/10 via-[#FAF9F6]/95 to-[#E2ECE6]/30",
                borderClass: "border-[#4F7786]/25",
                shapeClass: "rounded-[20px_120px_20px_120px]",
                posClass: "left-[3%] bottom-[3%] w-[42%] h-[180px]"
              },
              {
                title: "Growth Seekers",
                illustration: <HealersIllustration />,
                desc: "Anyone interested in personal transformation, high vibration living, and establishing solid boundaries.",
                gradientClass: "from-gold/8 via-[#FAF9F6]/95 to-[#FAF5EB]/50",
                borderClass: "border-gold/25",
                shapeClass: "rounded-[120px_20px_120px_20px]",
                posClass: "right-[3%] bottom-[3%] w-[42%] h-[180px]"
              }
            ].map((petal, idx) => (
              <div
                key={idx}
                className={`absolute ${petal.posClass} ${petal.shapeClass} bg-gradient-to-tr ${petal.gradientClass} border ${petal.borderClass} p-5 flex flex-col justify-center overflow-hidden shadow-sm`}
              >
                <div className="flex gap-4 items-center relative z-10">
                  <div className="flex-shrink-0 scale-90">
                    {petal.illustration}
                  </div>
                  <div className="space-y-1.5 text-left">
                    <h3 className="font-serif text-base font-bold text-ocean-dark tracking-wide">
                      {petal.title}
                    </h3>
                    <p className="text-sm text-[#0A252C] leading-relaxed font-medium max-w-[250px]">
                      {petal.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Mobile/Tablet layout list */}
          <div className="lg:hidden flex flex-col items-center gap-6 py-4">
            
            {/* Mobile Anchor */}
            <div className="w-full max-w-sm p-6 bg-gradient-to-b from-[#FAF9F5] to-white border border-[#c0942c]/40 rounded-[2rem] text-center shadow-md flex flex-col items-center justify-center space-y-2">
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
              <h3 className="font-serif text-xl md:text-2xl font-bold text-ocean tracking-wide">
                Who Is This Program For?
              </h3>
            </div>

            <div className="w-full max-w-md space-y-4">
              {[
                {
                  title: "Individuals",
                  illustration: <IndividualsIllustration />,
                  desc: "Seeking emotional, energetic, and spiritual healing, and those recovering from challenging relationships.",
                  gradientClass: "from-[#769466]/10 via-[#FAF9F6]/95 to-[#E2ECE6]/30",
                  borderClass: "border-[#769466]/25",
                  shapeClass: "rounded-[2rem_3rem_2rem_3rem]"
                },
                {
                  title: "Wellness Professionals",
                  illustration: <CouplesIllustration />,
                  desc: "Coaches, therapists, counsellors, and psychologists wanting to integrate practical energy-clearing strategies.",
                  gradientClass: "from-[#2F6D73]/10 via-[#FAF9F6]/95 to-[#EAF3F1]/30",
                  borderClass: "border-[#2F6D73]/25",
                  shapeClass: "rounded-[3rem_2rem_3rem_2rem]"
                },
                {
                  title: "Holistic Healers",
                  illustration: <CoachesIllustration />,
                  desc: "Reiki practitioners, yoga teachers, and meditation instructors seeking advanced cord cutting protocols.",
                  gradientClass: "from-[#4F7786]/10 via-[#FAF9F6]/95 to-[#E2ECE6]/30",
                  borderClass: "border-[#4F7786]/25",
                  shapeClass: "rounded-[3rem_2rem_3rem_2rem]"
                },
                {
                  title: "Growth Seekers",
                  illustration: <HealersIllustration />,
                  desc: "Anyone interested in personal transformation, high vibration living, and establishing solid boundaries.",
                  gradientClass: "from-gold/8 via-[#FAF9F6]/95 to-[#FAF5EB]/50",
                  borderClass: "border-gold/25",
                  shapeClass: "rounded-[2rem_3rem_2rem_3rem]"
                }
              ].map((petal, idx) => (
                <div
                  key={idx}
                  className={`w-full bg-gradient-to-tr ${petal.gradientClass} border ${petal.borderClass} ${petal.shapeClass} p-5 shadow-sm flex gap-4 items-center`}
                >
                  <div className="flex-shrink-0 scale-90">
                    {petal.illustration}
                  </div>
                  <div className="space-y-1 text-left">
                    <h4 className="font-serif text-base font-bold text-ocean-dark">
                      {petal.title}
                    </h4>
                    <p className="text-sm sm:text-base text-[#0A252C] leading-relaxed font-medium">
                      {petal.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 6. SACRED CTA INVITATION */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#e1f0f2]/60 via-[#f4fafb] to-[#ffffff] text-ocean-dark relative overflow-hidden border-t border-[#dfdbc9]/30 z-10">
        <div className="absolute inset-0 opacity-[0.35] pointer-events-none select-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-100/40 blur-[120px] animate-pulse duration-4000" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
          <div className="space-y-8">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-ocean-dark tracking-tight leading-tight uppercase max-w-4xl mx-auto">
              Begin your path to <br />
              <span className="text-teal-soft italic font-normal font-serif lowercase">conscious alignment &amp;</span> energetic sovereignty.
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-[#0A252C] max-w-3xl mx-auto leading-relaxed font-light font-serif italic py-4">
              Do not let past cords drain your precious current potential. Step into a safe, sacred space held by Master Teacher Heer, and learn to protect your energy system forever.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={() => onBook('Energy Healing & Cord Cutting Certification')}
                className="px-10 py-5 bg-gradient-to-r from-teal-soft via-teal-soft/90 to-teal-soft hover:from-teal-soft/90 hover:to-teal-soft text-white font-bold text-sm sm:text-base tracking-[0.2em] uppercase rounded-full shadow-[0_4px_20px_rgba(79,157,166,0.25)] hover:shadow-[0_8px_30px_rgba(79,157,166,0.45)] transform hover:-translate-y-0.5 transition-all duration-300 border border-teal-light/30 cursor-pointer"
                id="energy-cta-enroll"
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
}

const InnerChildDiamondWatercolorRing = ({ index }: { index: number }) => {
  // Use beautiful warm yellow and golden watercolor hues
  const yellowColors = [
    'text-amber-400',
    'text-yellow-400',
    'text-amber-500',
    'text-yellow-500',
    'text-amber-300',
    'text-yellow-300'
  ];
  
  const strokeColorClass = yellowColors[index % yellowColors.length];
  const rotationAngle = (index * 15) - 5; // Subtle variation

  return (
    <svg 
      viewBox="0 0 200 200" 
      style={{ transform: `rotate(${rotationAngle}deg)` }} 
      className={`absolute -inset-5 w-[calc(100%+40px)] h-[calc(100%+40px)] select-none pointer-events-none transition-transform duration-1000 group-hover:rotate-[180deg] ${strokeColorClass}`}
    >
      <g>
        {/* Soft atmospheric golden watercolor bleeding background */}
        <path
          d="M 100,10 Q 145,15 190,100 Q 145,185 100,190 Q 55,185 10,100 Q 55,15 100,10 Z"
          fill="currentColor"
          className="opacity-[0.22] blur-[10px]"
        />
        {/* Secondary offset splash for realistic hand-painted texture */}
        <path
          d="M 100,16 Q 150,8 184,100 Q 150,192 100,184 Q 50,192 16,100 Q 50,8 100,16 Z"
          fill="currentColor"
          className="opacity-[0.15] blur-[6px] transform translate-x-1 translate-y-1"
        />
        {/* Beautiful wavy hand-painted organic stroke */}
        <path
          d="M 100,15 C 118,12 135,28 185,100 C 135,172 118,188 100,185 C 82,188 65,172 15,100 C 65,28 82,12 100,15 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-[0.32] blur-[3px]"
        />
        {/* Sketchy detailed inner accent lines */}
        <path
          d="M 100,20 C 110,24 130,34 180,100 C 130,166 110,176 100,180 C 90,176 70,166 20,100 C 70,34 90,24 100,20 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-[0.45] stroke-[2]"
        />
        {/* Golden energy sparks/dots floating around */}
        <circle cx="50" cy="50" r="3" fill="currentColor" className="opacity-[0.6]" />
        <circle cx="150" cy="50" r="2.5" fill="currentColor" className="opacity-[0.5]" />
        <circle cx="135" cy="155" r="3.5" fill="currentColor" className="opacity-[0.6]" />
        <circle cx="65" cy="145" r="2" fill="currentColor" className="opacity-[0.4]" />
        <circle cx="100" cy="100" r="50" fill="currentColor" className="opacity-[0.06] blur-md" />
      </g>
    </svg>
  );
};

interface InnerChildCirculatingPillarProps {
  key?: any;
  id?: string;
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

function InnerChildCirculatingPillar({ id, title, items, icon: PillarIcon, colorTheme, bgImage }: InnerChildCirculatingPillarProps) {
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
      className="bg-white/70 backdrop-blur-md border-2 border-[#2F6D73] rounded-[2.2rem] p-6 lg:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(47,109,115,0.06)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden h-full min-h-[480px]"
    >
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <SmartImage 
          id={id || "innerchild.pillar"}
          defaultSrc={bgImage} 
          alt="" 
          className="w-full h-full object-cover opacity-[0.11] mix-blend-multiply" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-[#FAFDFD]/90" />
      </div>

      <div className="space-y-6 relative z-10 w-full flex-grow flex flex-col justify-between">
        <div className="space-y-6">
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
                    <p className="text-xs text-black font-bold uppercase tracking-wide">
                      {header}
                    </p>
                    <p className="text-[11px] text-[#2d3748] font-normal mt-0.5 leading-relaxed">
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
  <svg viewBox="0 0 120 120" className="w-14 h-14 text-[#769466] drop-shadow-[0_4px_10px_rgba(118,148,102,0.15)]">
    <defs>
      <linearGradient id="ind-grad-e1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#769466" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#FAF5EB" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="ind-grad-efig" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#769466" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#2F6D73" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="ind-grad-eleaf" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#E2ECE6" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#769466" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="48" fill="url(#ind-grad-e1)" className="opacity-80" />
    <path d="M 25,85 C 20,60 35,35 60,30 C 45,45 40,65 25,85 Z" fill="url(#ind-grad-eleaf)" stroke="#769466" strokeWidth="0.75" className="opacity-70" />
    <path d="M 95,85 C 100,60 85,35 60,30 C 75,45 80,65 95,85 Z" fill="url(#ind-grad-eleaf)" stroke="#769466" strokeWidth="0.75" className="opacity-70" />
    <path d="M 40,82 C 40,70 48,62 60,62 C 72,62 80,70 80,82 C 80,85 75,85 60,85 C 45,85 40,85 40,82 Z" fill="url(#ind-grad-efig)" />
    <circle cx="60" cy="51" r="9" fill="#FAF5EB" stroke="#769466" strokeWidth="1" />
  </svg>
);

const CouplesIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-14 h-14 text-[#2F6D73] drop-shadow-[0_4px_10px_rgba(47,109,115,0.15)]">
    <defs>
      <linearGradient id="cpl-grad-e1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2F6D73" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#FAF5EB" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="cpl-grad-efig1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2F6D73" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#4F7786" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="cpl-grad-efig2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4F7786" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#769466" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="48" fill="url(#cpl-grad-e1)" className="opacity-80" />
    <path d="M 43,85 C 43,72 49,63 54,63 C 58,63 60,72 60,85 Z" fill="url(#cpl-grad-efig1)" />
    <circle cx="50" cy="54" r="6" fill="#FAF5EB" stroke="#2F6D73" strokeWidth="0.75" />
    <path d="M 60,85 C 60,72 62,63 67,63 C 71,63 77,72 77,85 Z" fill="url(#cpl-grad-efig2)" />
    <circle cx="70" cy="54" r="6" fill="#FAF5EB" stroke="#2F6D73" strokeWidth="0.75" />
    <path d="M 60,42 C 58,39 55,40 55,44 C 55,48 60,52 60,52 C 60,52 65,48 65,44 C 65,40 62,39 60,42 Z" fill="gold" className="opacity-90" />
  </svg>
);

const CoachesIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-14 h-14 text-[#4F7786] drop-shadow-[0_4px_10px_rgba(79,119,134,0.15)]">
    <defs>
      <linearGradient id="cch-grad-e1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4F7786" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#FAF5EB" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="cch-grad-ementor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4F7786" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#2F6D73" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="cch-grad-eaura" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="gold" stopOpacity="0.4" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="48" fill="url(#cch-grad-e1)" className="opacity-80" />
    <circle cx="60" cy="50" r="28" fill="url(#cch-grad-eaura)" className="mix-blend-multiply" />
    <path d="M 45,82 C 45,68 50,58 60,58 C 70,58 75,68 75,82 C 75,84 70,84 60,84 C 50,84 45,84 45,82 Z" fill="url(#cch-grad-ementor)" />
    <circle cx="60" cy="46" r="8" fill="#FAF5EB" stroke="#4F7786" strokeWidth="1" />
  </svg>
);

const HealersIllustration = () => (
  <svg viewBox="0 0 120 120" className="w-14 h-14 text-gold drop-shadow-[0_4px_10px_rgba(212,175,55,0.25)]">
    <defs>
      <linearGradient id="hlr-grad-e1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="gold" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#FAF5EB" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="hlr-grad-ehand" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#769466" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#2F6D73" stopOpacity="0.7" />
      </linearGradient>
      <radialGradient id="hlr-eenergy" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="gold" stopOpacity="0.9" />
        <stop offset="40%" stopColor="gold" stopOpacity="0.4" />
        <stop offset="100%" stopColor="gold" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="48" fill="url(#hlr-grad-e1)" className="opacity-80" />
    <circle cx="60" cy="50" r="10" fill="url(#hlr-eenergy)" />
    <path d="M 60,60 C 54,54 55,42 60,35 C 65,42 66,54 60,60 Z" fill="#FAF5EB" stroke="gold" strokeWidth="1" />
  </svg>
);
