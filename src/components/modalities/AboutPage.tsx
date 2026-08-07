import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Sparkles, Award, ShieldCheck, Heart, Compass, 
  Flame, GraduationCap, CheckCircle2, ChevronRight, UserCheck, Star
} from 'lucide-react';
import heerImage from '@/assets/bg-heer-image.jpeg';
import mentorImage from '@/assets/bg-heer-mentor.jpeg';
import { SmartImage } from '../SmartImage';

interface AboutPageProps {
  onBack: () => void;
  onBook: (modalityName?: string) => void;
}

export default function AboutPage({ onBack, onBook }: AboutPageProps) {
  // Timeline Active Milestone State
  const [activeMilestone, setActiveMilestone] = useState<number>(0);

  const milestones = [
    {
      year: "The Breakdown",
      title: "Awakening Through Suffering",
      quote: "My path did not begin in a classroom, but in the depths of chronic physical pain and severe burnout.",
      description: "After years of ignoring the divine distress signals of my nervous system, my body went into full-scale collapse. This was the dark night of my soul—a sacred warning that talk therapy alone couldn't resolve because the trauma was stored in my cells.",
      vibe: "The Catalyst",
      somaticNote: "An unexpressed trauma is a silent contract of divine tension."
    },
    {
      year: "The Pilgrimage",
      title: "Initiation Into Usui Reiki & Bio-Pranas",
      quote: "To heal myself, I had to travel beyond the analytical mind and trace the currents of vital energy.",
      description: "In the quiet corners of spiritual ashrams, I spent years studying energy systems. I trained directly under authentic lineage holders to master the Usui Reiki Method and Pranic Restorations, experiencing firsthand the cellular relief of chakra clearance.",
      vibe: "The Attunement",
      somaticNote: "Energy is not abstract; it is the bio-electric blueprint of your physical vitality."
    },
    {
      year: "Divine Universal Powers",
      title: "Divine Universal Powers",
      quote: "By merging spiritual guidance and healing methods with divine intuition, each modality is deeply infused with sacred wisdom.",
      description: "I qualified as a Certified Life Coach and a Tarot Healer. By merging spiritual guidance and healing methods with divine intuition, each healing modality is deeply infused with sacred wisdom and divine universal powers.",
      vibe: "Sacred Intuition",
      somaticNote: "True sovereignty is achieved when your subconscious beliefs align with your soul's blueprint."
    },
    {
      year: "The Global Transmission",
      title: "5,000+ Hearts Sovereignly Aligned",
      quote: "My mission is to hold a safe, completely judgment-free mirror for you to retrieve your pieces.",
      description: "Today, I serve a vibrant global community of seekers, corporate leaders, and therapists. From deep cord-cutting ceremonies to divine EFT tapping, I facilitate the return of personal sovereignty, helping you live from an unshakeable inner compass.",
      vibe: "The Sovereignty",
      somaticNote: "We do not heal by adding new versions of ourselves, but by remembering who we always were."
    }
  ];

  const mentorCertifications = [
    "Certified NLP Practitioner",
    "Certified Timeline Therapy Practitioner",
    "Hypnotherapy Expert",
    "Master in EFT",
    "Trauma Healing Expert",
    "Relationship Mastery Expert"
  ];

  return (
    <div className="bg-[#FAF9F5] text-[#072a3a] min-h-screen relative overflow-hidden font-sans">
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-[0.012] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, #072a3a 1.5px, transparent 1.5px)`,
        backgroundSize: '24px 24px'
      }} />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#bde0e5]/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#c2d3cd]/25 to-transparent blur-3xl pointer-events-none" />

      {/* 1. HERO ARCHED CONTAINER */}
      <section className="relative pt-12 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Back Navigation Bar */}
          <div className="flex items-center justify-between mb-12 relative z-10">
            <button 
              onClick={onBack}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#dfdbc9]/60 text-[#072a3a] text-xs font-mono font-bold hover:bg-[#072a3a] hover:text-white hover:border-[#072a3a] transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              BACK TO SANCTUARY
            </button>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4.5 h-4.5 text-[#c0942c] animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-[#c0942c] uppercase font-bold">MEET MEHARR</span>
            </div>
          </div>

          {/* Main Hero Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Premium Arched Image & Aura Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start relative">
              <div className="relative group w-full max-w-sm">
                
                {/* Ethereal glowing watercolor halo */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#bde0e5]/30 to-[#c2d3cd]/30 rounded-[3.5rem] blur-2xl group-hover:scale-105 transition-transform duration-1000 opacity-80 pointer-events-none" />
                
                {/* Arched image container */}
                <div className="arch-card-frame w-full aspect-[3/4.2] overflow-hidden relative border-4 border-white shadow-2xl bg-[#faf9f6] z-10 transition-all duration-700 group-hover:scale-[1.01] group-hover:shadow-[0_25px_50px_rgba(7,42,58,0.12)]">
                  <SmartImage 
                    id="about.heer_portrait"
                    defaultSrc={heerImage} 
                    alt="Meharr - Somatic & Subconscious Alchemist" 
                    className="w-full h-full object-cover object-center scale-[1.08] group-hover:scale-[1.12] transition-transform duration-1000 filter brightness-[0.98] contrast-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#072a3a]/45 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Hand-drawn flower sketch absolute ornament (mystic flair) */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 text-[#c0942c]/60 z-20 pointer-events-none select-none animate-spin-slow">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="50" cy="50" r="10" />
                    {Array.from({ length: 8 }).map((_, i) => (
                      <path 
                        key={i} 
                        d="M 50,40 Q 50,15 45,25 Q 40,35 50,40" 
                        transform={`rotate(${i * 45} 50 50)`} 
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Copy */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="font-cursive text-xl text-[#7da086] tracking-wider font-semibold block uppercase">
                The Alchemist's Lineage
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#072a3a] font-normal leading-tight tracking-tight">
                Hi, I'm Meharr. <br />
                <span className="italic text-[#c0942c] font-medium">A guide for your return.</span>
              </h1>
              
              <div className="w-16 h-[2px] bg-[#c0942c]" />

              <p className="text-base sm:text-lg text-[#2c4759]/90 font-medium leading-relaxed">
                I help seekers, leaders, and healers step out of ancestral looping and trauma-stored physical tension, bridging Western nervous-system regulation with Eastern energetic mastery.
              </p>

              {/* Exact matching opacity, font weight, and readability as first paragraph */}
              <p className="text-base sm:text-lg text-[#2c4759]/90 font-medium leading-relaxed">
                Over the last five years, my devotion has been simple: to construct a completely judgment-free container where your subconscious blocks can be gently disarmed. I am not here to 'fix' you—because you were never broken. I am here to help you peel back the adaptive survival strategies of your past so you can remember your inherent personal sovereignty.
              </p>

              {/* Little Signature Graphic */}
              <div className="pt-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c0942c]/10 flex items-center justify-center border border-[#c0942c]/20">
                  <Heart className="w-4.5 h-4.5 text-[#c0942c] fill-current" />
                </div>
                <div className="text-left">
                  <span className="font-script text-3xl text-[#072a3a] block leading-none">Meharr</span>
                  <span className="text-[10px] font-mono text-sage tracking-widest uppercase font-bold">Founder, Heal With Heer</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. HER EVOLUTION SECTION */}
      <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-white to-[#FAF9F5] border-t border-[#dfdbc9]/30 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#c0942c] uppercase block">
              HER EVOLUTION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#072a3a] font-normal tracking-tight">
              The Path of Spiritual Healing
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-[#c0942c]/40" />
              <Compass className="w-4.5 h-4.5 text-[#c0942c] animate-pulse" />
              <div className="w-12 h-[1px] bg-[#c0942c]/40" />
            </div>
            {/* Descriptive sentence with increased contrast matching body text */}
            <p className="text-sm sm:text-base text-[#072a3a]/90 font-medium max-w-2xl mx-auto pt-1 leading-relaxed">
              Click on each evolutionary milestone below to witness how a personal collapse was transmuted into a global healing lineage.
            </p>
          </div>

          {/* Interactive Timeline Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
            
            {/* Left Timeline Selector (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3 text-left">
              {milestones.map((milestone, idx) => {
                const isSelected = activeMilestone === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveMilestone(idx)}
                    className={`w-full text-left p-6 rounded-[2rem] border transition-all duration-300 flex items-start gap-4 cursor-pointer relative overflow-hidden group ${
                      isSelected 
                        ? 'bg-gradient-to-br from-[#072a3a] to-[#0a3d54] text-cream border-[#072a3a] shadow-xl' 
                        : 'bg-white text-[#072a3a] border-[#dfdbc9]/50 hover:border-[#c0942c]/40 shadow-sm'
                    }`}
                  >
                    {/* Active side-border glow */}
                    {isSelected && <div className="absolute top-0 left-0 w-1.5 h-full bg-[#c0942c]" />}

                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 ${
                      isSelected ? 'bg-[#c0942c] text-white' : 'bg-[#faf9f5] border border-[#dfdbc9]/60 text-[#c0942c]'
                    }`}>
                      0{idx + 1}
                    </div>

                    <div className="space-y-1">
                      <span className={`text-[10px] font-mono tracking-widest font-bold uppercase ${
                        isSelected ? 'text-[#c0942c]' : 'text-[#c0942c]/70'
                      }`}>
                        {milestone.year}
                      </span>
                      <h4 className="font-serif text-lg font-semibold leading-snug">
                        {milestone.title}
                      </h4>
                      <span className={`text-xs block ${isSelected ? 'text-cream/70' : 'text-sage'} font-light italic mt-1 group-hover:translate-x-1 transition-transform duration-200`}>
                        {milestone.vibe} Portal &rarr;
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Display Board (lg:col-span-7) */}
            <div className="lg:col-span-7 bg-white border border-[#dfdbc9]/50 rounded-[3rem] p-8 md:p-10 shadow-xl text-left flex flex-col justify-between relative overflow-hidden min-h-[420px]">
              
              {/* Decorative Background Circles */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(192,148,44,0.03),transparent_40%)] pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMilestone}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="space-y-6 flex-grow flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    {/* Header Block */}
                    <div className="flex items-center justify-between border-b border-[#dfdbc9]/30 pb-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-[#c0942c] uppercase bg-[#FAF9F5] px-2.5 py-0.5 rounded-full border border-[#dfdbc9]/50">
                          Milestone {activeMilestone + 1}
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl text-[#072a3a] font-normal leading-tight mt-1">
                          {milestones[activeMilestone].title}
                        </h3>
                      </div>
                    </div>

                    {/* Bold Quote */}
                    <p className="font-serif text-lg text-[#072a3a] italic leading-relaxed font-bold border-l-2 border-[#c0942c] pl-4">
                      "{milestones[activeMilestone].quote}"
                    </p>

                    {/* Detailed Paragraph */}
                    <p className="text-sm text-[#2c4759] leading-relaxed font-normal">
                      {milestones[activeMilestone].description}
                    </p>
                  </div>

                  {/* Somatic Footer Note */}
                  <div className="bg-[#FAF9F5] border border-[#dfdbc9]/40 rounded-2xl p-4 mt-4 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#c0942c]/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#c0942c]/20">
                      <Flame className="w-3.5 h-3.5 text-[#c0942c] animate-pulse" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold tracking-widest text-[#c0942c] uppercase block">DIVINE INSIGHT:</span>
                      <p className="text-xs text-[#072a3a] font-medium leading-relaxed italic mt-0.5">
                        "{milestones[activeMilestone].somaticNote}"
                      </p>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>

      {/* 3. MEET HER DIVINE MENTOR SECTION */}
      <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-white via-[#FAF9F5] to-white border-t border-[#dfdbc9]/30 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center space-y-3 mb-14">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#c0942c] uppercase block">
              SACRED LINEAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#072a3a] font-normal tracking-tight">
              Meet Meharr's Divine Mentor
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-[#c0942c]/40" />
              <UserCheck className="w-4.5 h-4.5 text-[#c0942c]" />
              <div className="w-12 h-[1px] bg-[#c0942c]/40" />
            </div>
          </div>

          {/* Mentor Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
            
            {/* Left Side: Large Portrait Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-sm">
                <div className="absolute -inset-3 bg-gradient-to-tr from-[#c0942c]/20 to-[#7da086]/20 rounded-[3rem] blur-xl opacity-70 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
                <div className="arch-card-frame w-full aspect-[3/4] overflow-hidden relative border-4 border-white shadow-2xl bg-[#faf9f6] z-10 transition-all duration-700">
                  <SmartImage 
                    id="about.mentor_portrait"
                    defaultSrc={mentorImage} 
                    alt="Divine Mentor" 
                    className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#072a3a]/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right Side: Professional Mentor Info */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#c0942c] uppercase font-bold block mb-1">
                  MASTER PRACTITIONER & GUIDE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#072a3a] font-normal">
                  Divine Lineage & Master Expertise
                </h3>
              </div>

              <div className="w-16 h-[2px] bg-[#c0942c]" />

              <p className="text-sm sm:text-base text-[#2c4759] font-normal leading-relaxed">
                Guided by profound wisdom and years of mastery, Meharr's mentor holds supreme accreditations across subconscious transformation, cellular healing, and emotional sovereignty:
              </p>

              {/* Mentor Qualifications List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {mentorCertifications.map((mCert, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white border border-[#dfdbc9]/50 rounded-xl shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#c0942c] flex-shrink-0" />
                    <span className="font-serif text-xs sm:text-sm text-[#072a3a] font-medium">
                      {mCert}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. THE SOVEREIGN (SACRED PARCHMENT HANDWRITTEN LETTER) */}
      <section className="py-16 md:py-20 px-6 bg-[#FAF9F5] border-t border-[#dfdbc9]/30 relative overflow-hidden">
        
        {/* Soft background aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c0942c]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          
          {/* Vintage Sacred Parchment Document */}
          <div className="relative bg-[#F7F2E6] border-2 border-[#D4C5A9] rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(139,115,85,0.12)] text-left space-y-8 overflow-hidden">
            
            {/* Antique paper inner subtle border */}
            <div className="absolute inset-3 border border-[#E6D9BF]/60 rounded-[2rem] pointer-events-none" />

            {/* Top Sacred Symbol Stamp */}
            <div className="flex justify-between items-start border-b border-[#D4C5A9]/50 pb-6 relative z-10">
              <div>
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#8C6227] uppercase font-bold block">
                  SACRED MANUSCRIPT
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#3D2812] font-semibold tracking-tight mt-1">
                  The Sovereign
                </h2>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#EBE0C9] border border-[#C2AF87] flex items-center justify-center text-[#8C6227] shadow-inner">
                <Sparkles className="w-5 h-5 text-[#8C6227]" />
              </div>
            </div>

            {/* Letter Content */}
            <div className="space-y-6 text-base sm:text-lg text-[#3D2812]/90 leading-relaxed font-serif italic relative z-10">
              <p className="font-medium">
                I promise that Heal With Heer is a safe, zero-judgment space.
              </p>
              <p>
                This is a universal divine and energetic healing space where you can transform yourself and become a new version of yourself.
              </p>
              <p>
                I am simply a medium—a universal tool chosen to guide you.
              </p>
              <p className="font-medium text-[#2A1A0A]">
                All thanks belong to the Universe.
              </p>
            </div>

            {/* Bottom Signature Area */}
            <div className="pt-8 border-t border-[#D4C5A9]/50 flex justify-end items-center relative z-10">
              <div className="text-right space-y-1">
                <span className="font-serif italic text-3xl sm:text-4xl font-bold text-[#8C6227] block tracking-wide">
                  Meharr
                </span>
                <span className="text-[10px] font-mono text-[#8C6227]/70 tracking-widest uppercase font-semibold block">
                  Heal With Heer
                </span>
              </div>
            </div>

          </div>

          {/* Call to Action Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onBook("Sovereign Session")}
              className="px-8 py-4 bg-[#072a3a] hover:bg-[#0a3d54] text-white rounded-xl font-sans font-bold tracking-wider text-sm inline-flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 uppercase cursor-pointer"
            >
              <span>Begin Your Journey With Meharr</span>
              <ChevronRight className="w-4 h-4 text-[#c0942c]" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
