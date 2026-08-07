import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Sparkles, Heart, ShieldCheck, Clock, CheckCircle2, 
  ArrowRight, Crown, Users, Baby, Coins, Flame, 
  Sparkle, Compass, UserCheck, Shield, Lock, Eye, Check,
  Flower2, Sun, Infinity as InfinityIcon
} from 'lucide-react';
import HealingJournal from './HealingJournal';
import LettersFromUniverseModal from '../LettersFromUniverseModal';

interface OneOnOnePageProps {
  onBack: () => void;
  onBook: (experienceName?: string) => void;
}

interface HealingExperience {
  id: string;
  emoji: string;
  badge: string;
  title: string;
  subtitle: string;
  duration: string;
  investment: string;
  description: string;
  modalities?: string[];
  themeColor: string;
  bgGradient: string;
  borderColor: string;
  accentIcon: React.ReactNode;
  highlights: string[];
}

export default function OneOnOnePage({ onBack, onBook }: OneOnOnePageProps) {
  // Modal for Letters from the Universe
  const [isUniverseModalOpen, setIsUniverseModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const experiences: HealingExperience[] = [
    {
      id: 'phoenix-within',
      emoji: '✨',
      badge: 'TRAUMA & DEEP RELEASE',
      title: 'The Phoenix Within',
      subtitle: 'Deep Trauma Healing Experience',
      duration: '1 Hour',
      investment: 'Starting from ₹15,000 | USD $150',
      description: 'Trauma often leaves invisible wounds that continue to shape our emotions, relationships, confidence, and daily life. This intensive healing experience is designed to gently release stored emotional pain, limiting beliefs, subconscious fears, and unresolved experiences while creating space for inner peace, emotional freedom, and lasting transformation.',
      themeColor: '#c0942c',
      bgGradient: 'from-[#FAF6EE] via-white to-[#FDFBF7]',
      borderColor: 'border-[#c0942c]/40',
      accentIcon: <Flame className="w-5 h-5 text-amber-600" />,
      highlights: [
        'Root-cause somatic release of stored trauma',
        'Clearing subconscious fears & cellular contractions',
        'Creating safe neural space for peace & sovereignty'
      ]
    },
    {
      id: 'sacred-love-blueprint',
      emoji: '❤️',
      badge: 'RELATIONSHIP & SELF-WORTH',
      title: 'Sacred Love Blueprint',
      subtitle: 'Relationship Mastery for Individuals',
      duration: '1 Hour 15 Minutes',
      investment: '₹12,000 | USD $120',
      description: 'Designed for individuals who wish to attract healthier relationships, heal attachment patterns, overcome heartbreak, improve self-worth, and create deeper emotional connections. This session helps transform your relationship with yourself first—allowing healthier relationships with others to naturally follow.',
      themeColor: '#be123c',
      bgGradient: 'from-[#FFF5F5] via-white to-[#FAF6EE]',
      borderColor: 'border-rose-300/60',
      accentIcon: <Heart className="w-5 h-5 text-rose-600" />,
      highlights: [
        'Attachment style recalibration & core wound healing',
        'Overcoming heartbreak & conscious cord disentanglement',
        'Cultivating profound self-worth & healthy boundaries'
      ]
    },
    {
      id: 'together-forever',
      emoji: '💍',
      badge: 'COUPLES & SACRED UNION',
      title: 'Together Forever',
      subtitle: 'Couples Relationship Healing & Mastery',
      duration: '1 Hour 15 Minutes',
      investment: 'Starting from ₹20,000 | USD $200',
      description: "A transformational session for couples seeking deeper communication, emotional healing, conflict resolution, trust rebuilding, and stronger intimacy. Together, you'll identify underlying relationship patterns and learn practical tools to reconnect with compassion, understanding, and love.",
      themeColor: '#0f766e',
      bgGradient: 'from-[#F0FDF4] via-white to-[#FAF6EE]',
      borderColor: 'border-emerald-300/60',
      accentIcon: <InfinityIcon className="w-5 h-5 text-teal-700" />,
      highlights: [
        'Safe, mediated space for truth & compassionate listening',
        'Neutralizing toxic conflict loops & defensiveness',
        'Rebuilding intimate trust & joint emotional vision'
      ]
    },
    {
      id: 'inner-child-rebirth',
      emoji: '🌿',
      badge: 'CHILDHOOD & PARENTAL WOUNDS',
      title: 'Inner Child Rebirth',
      subtitle: 'Childhood & Parental Wound Healing',
      duration: '45 Minutes',
      investment: '₹8,000 | USD $80',
      description: 'Many of our adult struggles originate in childhood experiences. This healing session helps release emotional wounds connected to childhood memories, parental relationships, rejection, abandonment, criticism, or emotional neglect, allowing you to move forward with greater confidence and emotional freedom.',
      themeColor: '#15803d',
      bgGradient: 'from-[#F7FEE7] via-white to-[#FAF6EE]',
      borderColor: 'border-lime-300/60',
      accentIcon: <Flower2 className="w-5 h-5 text-emerald-700" />,
      highlights: [
        'Retrieval & soothing of the fragmented inner child',
        'Healing maternal/paternal rejection & criticism wounds',
        'Reclaiming playful vitality, joy & organic confidence'
      ]
    },
    {
      id: 'abundance-awakening',
      emoji: '💰',
      badge: 'WEALTH CONSCIOUSNESS & BLOCKS',
      title: 'Abundance Awakening',
      subtitle: 'Money Blockage & Wealth Consciousness Healing',
      duration: '1 Hour',
      investment: '₹15,000 | USD $150',
      description: 'Financial success begins with your subconscious beliefs. This session helps identify and heal limiting money patterns, scarcity programming, fear of success, self-worth issues, and energetic blocks that may be preventing you from receiving greater abundance and prosperity.',
      themeColor: '#d97706',
      bgGradient: 'from-[#FFFBEB] via-white to-[#FAF6EE]',
      borderColor: 'border-amber-300/60',
      accentIcon: <Coins className="w-5 h-5 text-amber-600" />,
      highlights: [
        'Dismantling generational scarcity & survival mindset',
        'Subconscious recalibration to receptivity & prosperity',
        'Aligning money flow with purpose & authentic self-worth'
      ]
    },
    {
      id: 'soul-frequency',
      emoji: '✨',
      badge: 'ENERGETIC & SPIRITUAL ALIGNMENT',
      title: 'Soul Frequency',
      subtitle: 'Premium Healing Modalities',
      duration: '1 Hour 15 Minutes',
      investment: '₹12,000 | USD $120',
      description: 'Experience profound energetic healing through your chosen modality. Each session is uniquely customized to provide clarity, energetic alignment, emotional healing, spiritual insight, and deeper connection with your highest self.',
      modalities: [
        'Akashic Records Reading',
        'Reiki Energy Healing',
        'Other Premium Healing Modalities'
      ],
      themeColor: '#7c3aed',
      bgGradient: 'from-[#FAF5FF] via-white to-[#FAF6EE]',
      borderColor: 'border-purple-300/60',
      accentIcon: <Sun className="w-5 h-5 text-purple-600" />,
      highlights: [
        'Akashic soul blueprint & karmic pattern illumination',
        'Bio-field clearing, chakra balancing & Usui Reiki',
        'Harmonizing frequency with your highest divine timeline'
      ]
    },
    {
      id: 'heartbridge',
      emoji: '👨👩👧',
      badge: 'FAMILY & GENERATIONAL DYNAMICS',
      title: 'HeartBridge',
      subtitle: 'Parent–Child Bond Healing Experience',
      duration: '1 Hour 15 Minutes',
      investment: '₹10,000 | USD $100',
      description: 'Strengthen the emotional connection between parent and child by healing misunderstandings, communication gaps, emotional distance, behavioral challenges, and unresolved family dynamics. This session encourages trust, compassion, and a healthier lifelong relationship.',
      themeColor: '#0284c7',
      bgGradient: 'from-[#F0F9FF] via-white to-[#FAF6EE]',
      borderColor: 'border-sky-300/60',
      accentIcon: <Users className="w-5 h-5 text-sky-600" />,
      highlights: [
        'Bridging intergenerational communication divides',
        'Resolving emotional withdrawal & reactive behaviors',
        'Restoring lifelong trust, compassion & heart coherence'
      ]
    },
    {
      id: 'womb-of-light',
      emoji: '🤍',
      badge: 'PREGNANCY & MATERNAL HARMONY',
      title: 'Womb of Light',
      subtitle: 'Pregnancy Mother–Baby Connection Healing',
      duration: '1 Hour 15 Minutes',
      investment: '₹12,000 | USD $120',
      description: 'A nurturing healing experience created for expecting mothers to foster a deeper emotional and energetic bond with their unborn child. This session promotes relaxation, emotional balance, positive pregnancy energy, and a peaceful environment for both mother and baby.',
      themeColor: '#e11d48',
      bgGradient: 'from-[#FFF1F2] via-white to-[#FAF6EE]',
      borderColor: 'border-pink-300/60',
      accentIcon: <Baby className="w-5 h-5 text-rose-500" />,
      highlights: [
        'Energetic sanctuary for mother and growing baby',
        'Clearing maternal anxiety, fear & birth contractions',
        'Deepening intuitive soul-to-soul bonding in the womb'
      ]
    }
  ];

  const sessionFeatures = [
    {
      title: 'A completely private one-to-one consultation',
      desc: 'An intimate, highly protected container dedicated solely to your journey, truth, and pace.',
      icon: <Lock className="w-5 h-5 text-[#c0942c]" />
    },
    {
      title: 'Personalized healing based on your unique situation',
      desc: 'No generic formulas. Every energetic and somatic intervention is tailored specifically to your history.',
      icon: <UserCheck className="w-5 h-5 text-[#c0942c]" />
    },
    {
      title: 'Root-cause emotional and energetic healing',
      desc: 'Going beyond surface-level symptoms to clear the cellular contractions and beliefs where distress originates.',
      icon: <Flame className="w-5 h-5 text-[#c0942c]" />
    },
    {
      title: 'Practical guidance for long-term transformation',
      desc: 'Actionable real-world tools, communication scripts, and energetic anchors you can use every day.',
      icon: <Compass className="w-5 h-5 text-[#c0942c]" />
    },
    {
      title: 'A safe, compassionate, and confidential healing space',
      desc: 'Zero judgment, pure holding space, allowing your nervous system to fully soften and surrender.',
      icon: <Shield className="w-5 h-5 text-[#c0942c]" />
    },
    {
      title: 'Post-session recommendations and integration practices',
      desc: 'Carefully curated somatic rituals, grounding exercises, and integration guidance (where applicable).',
      icon: <CheckCircle2 className="w-5 h-5 text-[#c0942c]" />
    }
  ];

  const scrollToExperiences = () => {
    const element = document.getElementById('experiences');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-ocean-dark font-sans selection:bg-[#c0942c]/20 selection:text-ocean-dark relative overflow-x-hidden">
      
      {/* 1. TOP SUB-NAV BAR (MATCHING SITE BRANDING) */}
      <div className="bg-white/90 backdrop-blur-md border-b border-[#dfdbc9]/60 relative z-10 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#072a3a] hover:text-[#c0942c] transition-colors cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full bg-[#FAF6EE] border border-[#dfdbc9]/60 flex items-center justify-center group-hover:border-[#c0942c] group-hover:bg-[#f8ebd0]/40 transition-all">
              <ArrowLeft className="w-4 h-4 text-[#072a3a] group-hover:text-[#c0942c] group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[11px] font-mono font-bold tracking-widest text-[#c0942c] uppercase">
              1:1 PRIVATE SESSIONS
            </span>
            <button
              onClick={() => onBook('Private Healing Session')}
              className="px-5 py-2 bg-[#072a3a] hover:bg-[#0a3d54] text-white text-xs md:text-sm font-bold tracking-wider rounded-full shadow-sm hover:shadow-md transition-all duration-300 uppercase cursor-pointer"
            >
              Book Private Session
            </button>
          </div>

        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 px-6 max-w-7xl mx-auto overflow-hidden">
        
        {/* Soft Ambient Background Halos */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#f8ebd0]/40 via-[#FAF6EE]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-rose-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-40 left-10 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hero Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#072a3a] font-normal tracking-tight leading-[1.15]">
              Signature Private <span className="font-bold text-[#c0942c] underline decoration-[#c0942c]/40 underline-offset-8">Healing Experiences</span>
            </h1>

            {/* Subheading */}
            <div className="space-y-3 max-w-2xl text-ocean-light font-light leading-relaxed text-sm sm:text-base md:text-lg">
              <p>
                Each healing experience is thoughtfully designed to address the root cause of emotional, mental, energetic, and relational challenges.
              </p>
              <p className="font-normal text-[#072a3a]/90">
                Every session is conducted in a safe, confidential, and deeply personalized one-to-one setting.
              </p>
            </div>

            {/* Dual CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onBook('Private Healing Session')}
                className="px-8 py-4 bg-gradient-to-r from-[#072a3a] via-[#0a3d54] to-[#072a3a] hover:from-[#c0942c] hover:to-[#dfaf6b] text-white hover:text-ocean-dark font-sans font-bold tracking-wider text-sm md:text-base rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 uppercase cursor-pointer flex items-center justify-center gap-2.5"
              >
                <span>Book Your Private Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToExperiences}
                className="px-7 py-4 bg-white hover:bg-[#FAF6EE] border border-[#dfdbc9] hover:border-[#c0942c] text-[#072a3a] font-sans font-bold tracking-wider text-sm md:text-base rounded-xl shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Explore Healing Experiences</span>
                <Sparkle className="w-4 h-4 text-[#c0942c]" />
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-ocean-light font-medium border-t border-[#dfdbc9]/40">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Confidential Container</span>
              </div>
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-[#c0942c]" />
                <span>Certified Master Healer</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-sky-600" />
                <span>Global Online & In-Person</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Sacred Emblem & Healing Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE0] border-2 border-[#c0942c]/40 p-8 shadow-xl flex flex-col items-center justify-center text-center overflow-hidden">
              
              {/* Outer Rotating Sacred Geometry Dashed Ring */}
              <div className="absolute inset-4 rounded-3xl border border-dashed border-[#c0942c]/30 pointer-events-none" />
              
              {/* Subtle Cosmic Background Ripple */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c0942c]/10 via-transparent to-transparent pointer-events-none" />

              {/* Central Glowing Sacred Seal */}
              <div className="relative mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="w-32 h-32 rounded-full border-2 border-dashed border-[#c0942c]/40 flex items-center justify-center"
                />
                <div className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-gradient-to-tr from-[#072a3a] to-[#0a3d54] border-2 border-[#c0942c] flex items-center justify-center shadow-lg">
                  <Crown className="w-10 h-10 text-[#c0942c] animate-pulse" />
                </div>
              </div>

              {/* Badge Text */}
              <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#c0942c] uppercase block mb-2">
                SACRED PRIVATE SANCTUARY
              </span>

              <h3 className="font-serif text-2xl font-bold text-[#072a3a] mb-2 leading-tight">
                One-to-One Alignment
              </h3>

              <p className="text-xs text-ocean-light font-light leading-relaxed max-w-xs mb-6">
                Direct energetic immersion, deep nervous system regulation, and permanent root-cause dissolution in sacred presence.
              </p>

              <div className="inline-flex items-center gap-2 bg-white/80 border border-[#dfdbc9] px-4 py-2 rounded-full shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#c0942c]" />
                <span className="text-xs font-medium text-[#072a3a]">
                  Personalized to Your Soul Blueprint
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. HEALING EXPERIENCES SECTION */}
      <section id="experiences" className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-[#dfdbc9]/40">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#072a3a] font-normal tracking-tight leading-tight">
            Curated Healing Experiences
          </h2>

          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-[#c0942c]/40" />
            <div className="w-2 h-2 rounded-full bg-[#c0942c]" />
            <div className="w-12 h-[1px] bg-[#c0942c]/40" />
          </div>
        </div>

        {/* 8 Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onMouseEnter={() => setHoveredCard(exp.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative bg-gradient-to-b ${exp.bgGradient} border ${exp.borderColor} rounded-3xl p-7 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden`}
            >
              {/* Subtle Decorative Top Accent Line */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5 transition-opacity duration-300"
                style={{ backgroundColor: exp.themeColor, opacity: hoveredCard === exp.id ? 1 : 0.6 }}
              />

              <div className="space-y-5">
                
                {/* Header Row: Accent Icon */}
                <div className="flex items-center justify-end">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-[#dfdbc9]/60 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-[#c0942c] transition-all">
                    {exp.accentIcon}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#072a3a] leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#c0942c] mt-1 tracking-wide">
                    {exp.subtitle}
                  </p>
                </div>

                {/* Duration & Investment Metrics Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="bg-white/80 border border-[#dfdbc9]/60 px-3.5 py-2.5 rounded-xl flex items-center gap-2.5 shadow-xs">
                    <Clock className="w-4 h-4 text-[#c0942c] shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono uppercase text-ocean-light block leading-none">Duration</span>
                      <span className="text-xs sm:text-sm font-bold text-[#072a3a]">{exp.duration}</span>
                    </div>
                  </div>

                  <div className="bg-white/80 border border-[#dfdbc9]/60 px-3.5 py-2.5 rounded-xl flex items-center gap-2.5 shadow-xs">
                    <Coins className="w-4 h-4 text-[#c0942c] shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono uppercase text-ocean-light block leading-none">Investment</span>
                      <span className="text-xs sm:text-sm font-bold text-[#072a3a]">{exp.investment}</span>
                    </div>
                  </div>
                </div>

                {/* Exact Description Paragraph */}
                <p className="text-xs sm:text-sm text-ocean-light font-light leading-relaxed pt-1">
                  {exp.description}
                </p>

                {/* Optional Modalities List for Soul Frequency */}
                {exp.modalities && (
                  <div className="bg-[#FAF6EE] border border-[#c0942c]/30 rounded-2xl p-4 space-y-2 mt-2">
                    <span className="text-xs font-mono font-bold text-[#072a3a] tracking-wider uppercase block">
                      Choose Your Preferred Modality:
                    </span>
                    <ul className="space-y-1.5">
                      {exp.modalities.map((item, mIdx) => (
                        <li key={mIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[#072a3a] font-medium">
                          <Check className="w-3.5 h-3.5 text-[#c0942c] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Highlights Bullet Points */}
                <div className="space-y-2 pt-2 border-t border-[#dfdbc9]/40">
                  {exp.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-ocean-light font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c0942c] mt-2 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Book Session CTA Button */}
              <div className="pt-6 mt-6 border-t border-[#dfdbc9]/40">
                <button
                  onClick={() => onBook(exp.title)}
                  className="w-full py-3.5 px-6 bg-[#072a3a] hover:bg-[#c0942c] text-white hover:text-ocean-dark font-sans font-bold tracking-wider text-xs sm:text-sm rounded-xl shadow-xs hover:shadow-md transition-all duration-300 uppercase cursor-pointer flex items-center justify-center gap-2 group/btn"
                >
                  <span>Book Session</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </section>

      {/* 4. EVERY SESSION INCLUDES (PREMIUM FEATURE CARDS) */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-[#dfdbc9]/40">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#072a3a] font-normal tracking-tight leading-tight">
            Every Session Includes
          </h2>

          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-[#c0942c]/40" />
            <div className="w-2 h-2 rounded-full bg-[#c0942c]" />
            <div className="w-12 h-[1px] bg-[#c0942c]/40" />
          </div>

          <p className="text-xs sm:text-sm text-ocean-light leading-relaxed font-light">
            Every one-on-one journey with Heer is held within an unshakeable standard of safety, deep precision, and enduring support.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessionFeatures.map((feat, fIdx) => (
            <motion.div
              key={fIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: fIdx * 0.07 }}
              className="bg-white border border-[#dfdbc9]/70 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#c0942c]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-2xl bg-[#FAF6EE] border border-[#dfdbc9]/60 flex items-center justify-center group-hover:bg-[#f8ebd0]/60 group-hover:border-[#c0942c] transition-colors">
                  {feat.icon}
                </div>
                
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#072a3a] leading-snug">
                  {feat.title}
                </h3>

                <p className="text-xs sm:text-sm text-ocean-light font-light leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* 5. INTEGRATED FEATURE: RECEIVE YOUR NEXT SIGN (LETTERS FROM THE UNIVERSE) */}
      <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto border-t border-[#dfdbc9]/40 text-center">
        <div className="bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE0] border-2 border-[#c0942c]/40 rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden space-y-8">
          
          {/* Subtle Ambient Cosmic Background Ring */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#c0942c]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#c0942c]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Section Heading */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#c0942c] uppercase block">
              SACRED REFLECTIVE GUIDANCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#072a3a] font-normal tracking-tight">
              Receive Your Next Sign
            </h2>
            <p className="text-xs sm:text-sm text-ocean-light leading-relaxed font-light">
              Before your private healing session, open your heart and connect with the cosmic frequencies waiting to guide your journey.
            </p>
          </div>

          {/* Sacred Celestial Emblem Button (Interactive Trigger with homepage style) */}
          <div className="relative flex flex-col items-center justify-center pt-2">
            <button
              onClick={() => setIsUniverseModalOpen(true)}
              className="group relative flex items-center justify-center cursor-pointer focus:outline-none"
              aria-label="Receive Your Next Sign - Open Letters From the Universe"
            >
              {/* Soft Golden Ambient Halo */}
              <div className="absolute inset-0 rounded-full bg-[#c0942c]/15 blur-md group-hover:bg-[#c0942c]/28 transition-all duration-500 scale-110 pointer-events-none" />

              {/* Main Sacred Celestial Seal */}
              <motion.div
                animate={{ y: [0, -2.5, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE0] border-2 border-[#c0942c]/45 group-hover:border-[#c0942c] shadow-[0_4px_18px_rgba(192,148,44,0.18)] group-hover:shadow-[0_6px_24px_rgba(192,148,44,0.32)] flex items-center justify-center transition-all duration-300 group-hover:scale-105"
              >
                {/* Outer Sacred Geometry Ring */}
                <div className="absolute inset-1.5 rounded-full border border-dashed border-[#c0942c]/35 group-hover:border-[#c0942c]/70 group-hover:rotate-45 transition-all duration-700 pointer-events-none" />

                {/* Inner Emblem with Crown Icon Perfectly Centered */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FAF5EB] border border-[#c0942c]/45 flex items-center justify-center text-[#c0942c] group-hover:bg-[#c0942c] group-hover:text-white transition-all duration-300 shadow-xs">
                  <Crown className="w-6 h-6 sm:w-7 sm:h-7 text-[#c0942c] group-hover:text-white transition-colors duration-300 group-hover:scale-110" />
                </div>
              </motion.div>
            </button>

            <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#c0942c] uppercase mt-4 block">
              CLICK EMBLEM TO DRAW YOUR SACRED MESSAGE
            </span>
          </div>

          <p className="text-xs text-ocean-light italic max-w-lg mx-auto font-light">
            “The Universe is constantly speaking to you in whisper tones. All you need is the stillness to hear.”
          </p>

        </div>
      </section>

      {/* 6. INTEGRATED FEATURE: SOMATIC HEALING JOURNAL & REFLECTION */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-[#dfdbc9]/40">
        <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#072a3a] font-normal tracking-tight leading-tight">
            The Somatic Healing Journal
          </h2>
        </div>

        {/* Embedded Existing Healing Journal Component */}
        <div className="relative">
          <HealingJournal onBook={onBook} />
        </div>
      </section>

      {/* 7. FINAL LUXURIOUS CLOSING CTA */}
      <section className="py-20 md:py-28 px-6 max-w-4xl mx-auto border-t border-[#dfdbc9]/40 text-center">
        <div className="p-10 sm:p-14 bg-gradient-to-br from-[#132c3a] via-[#0a3537] to-[#041a24] text-cream rounded-[2.5rem] border border-gold-light/30 shadow-2xl relative overflow-hidden space-y-8">
          
          {/* Subtle Ambient Backdrops */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#c0942c]/10 to-transparent pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#c0942c]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Mini Shiny Gold Crown */}
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-[#c0942c]/40 flex items-center justify-center shadow-inner">
              <Crown className="w-6 h-6 text-yellow-400 drop-shadow-[0_2px_8px_rgba(250,204,21,0.5)] animate-pulse" />
            </div>
          </div>

          {/* Exact Heading Provided in Prompt */}
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-normal leading-tight tracking-tight">
              Heal deeply.<br />
              Transform completely.<br />
              <span className="text-[#dfaf6b] font-medium">Become the most empowered version of yourself.</span>
            </h2>
          </div>

          {/* Golden Divider Line */}
          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#c0942c] to-transparent mx-auto" />

          {/* Subtext */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-cream/80 font-light max-w-lg mx-auto leading-relaxed">
            Your sacred journey begins with a single step into absolute self-reclamation. All sessions are 100% private and confidential.
          </p>

          {/* Exact CTA Button */}
          <div className="pt-2">
            <button
              onClick={() => onBook('Private Healing Session')}
              className="px-10 py-5 bg-gradient-to-r from-[#dfaf6b] via-[#cf9e5a] to-[#be8d49] hover:from-[#cf9e5a] hover:to-[#dfaf6b] text-ocean-dark font-sans font-bold tracking-wider text-sm md:text-base rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 uppercase inline-flex items-center gap-3 cursor-pointer"
            >
              <span>Book Your Private Healing Session</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* Letters from the Universe Modal */}
      <LettersFromUniverseModal
        isOpen={isUniverseModalOpen}
        onClose={() => setIsUniverseModalOpen(false)}
      />

    </div>
  );
}
