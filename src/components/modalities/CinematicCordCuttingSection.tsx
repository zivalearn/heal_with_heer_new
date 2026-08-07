import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';

interface CinematicCordCuttingSectionProps {
  onBook?: (modalityName: string) => void;
}

export const CinematicCordCuttingSection: React.FC<CinematicCordCuttingSectionProps> = ({ onBook }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: false });

  // Animation Scenes Timeline (0 to 7)
  // 0: Figures fade in, breathing auras active
  // 1: Organic energy ribbon grows between hearts & particles travel
  // 2: Divine Feather appears from above, drifting weightlessly
  // 3: Feather slowly floats down, swaying gently with light rays
  // 4: Sacred Touch - Feather softly brushes the ribbon center
  // 5: Gentle Dissolution - ribbon transforms into shimmering golden stardust
  // 6: Liberation - particles spiral upward, individual spiritual auras expand in sovereignty
  // 7: Peaceful Stillness & Freedom
  const [scene, setScene] = useState<number>(0);

  // Floating ambient light dust particles
  const [ambientDust, setAmbientDust] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);
  
  // Feather floating surrounding particles
  const [featherParticles, setFeatherParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  // Dissolution burst particles generated upon soft feather touch
  const [stardustParticles, setStardustParticles] = useState<Array<{ id: number; startX: number; startY: number; dx: number; dy: number; size: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate fine ambient dust particles
    const dust = Array.from({ length: 42 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.8 + 1,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 6
    }));
    setAmbientDust(dust);

    // Particles following the divine feather
    const fParticles = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 60,
      y: (Math.random() - 0.5) * 80,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 1.5
    }));
    setFeatherParticles(fParticles);

    // Generate golden stardust dissolution particles
    const particles = Array.from({ length: 72 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 180 + 30;
      return {
        id: i,
        startX: 500,
        startY: 230,
        dx: Math.cos(angle) * distance * 0.8,
        dy: -Math.abs(Math.sin(angle) * distance) - Math.random() * 110, // spiral upward like stardust
        size: Math.random() * 3.8 + 1.2,
        delay: Math.random() * 0.8,
        duration: Math.random() * 3.2 + 2.2
      };
    });
    setStardustParticles(particles);
  }, []);

  // Scroll-triggered automatic cinematic timeline
  useEffect(() => {
    if (!isInView) {
      setScene(0);
      return;
    }

    setScene(0);

    const t1 = setTimeout(() => setScene(1), 1200); // Ribbon grows organically
    const t2 = setTimeout(() => setScene(2), 3200); // Divine Feather appears floating down
    const t3 = setTimeout(() => setScene(3), 5200); // Feather drifts down, swaying gracefully
    const t4 = setTimeout(() => setScene(4), 7000); // Sacred Touch & Gentle Pause
    const t5 = setTimeout(() => setScene(5), 7800); // Ribbon transforms into golden stardust
    const t6 = setTimeout(() => setScene(6), 9200); // Auras Expand & Sovereign Freedom
    const t7 = setTimeout(() => setScene(7), 10800); // Peaceful Stillness

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
    };
  }, [isInView]);

  return (
    <section 
      ref={containerRef}
      className="py-16 md:py-24 bg-[#FAF9F5] text-[#0A252C] relative overflow-hidden select-none border-t border-b border-[#dfdbc9]/30"
      id="sacred-cord-cutting"
    >
      {/* 1. SACRED ATMOSPHERIC BACKGROUND (Faint geometry, mandalas & subtle radial lighting) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Soft Golden Radial Ambient Glow */}
        <motion.div 
          animate={{
            opacity: scene >= 5 ? 0.3 : 0.15,
            scale: scene >= 5 ? 1.2 : 1.0
          }}
          transition={{ duration: 3.5, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,rgba(47,109,115,0.08)_50%,transparent_75%)] blur-3xl" 
        />

        {/* Faint Mandalas & Sacred Geometry (5% - 8% opacity) */}
        <svg viewBox="0 0 1000 700" className="absolute inset-0 w-full h-full text-[#c0942c] opacity-[0.06]">
          <g transform="translate(500, 350)">
            <circle cx="0" cy="0" r="340" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 8" />
            <circle cx="0" cy="0" r="260" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="100" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 4" />
            {Array.from({ length: 12 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 30})`}>
                <circle cx="180" cy="0" r="180" fill="none" stroke="currentColor" strokeWidth="0.4" />
                <line x1="0" y1="0" x2="340" y2="0" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 4" />
              </g>
            ))}
          </g>
        </svg>

        {/* Floating Ambient Golden Dust Particles */}
        {ambientDust.map((p) => (
          <motion.div
            key={p.id}
            animate={{
              y: [0, -60, 0],
              x: [0, 25, 0],
              opacity: [0.15, 0.65, 0.15]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-[#D4AF37]/60 blur-[0.5px]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* 2. POETIC ELEGANT HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6 space-y-3">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[11px] sm:text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase font-medium"
          >
            SACRED ENERGETIC TRANSFORMATION
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0A252C] font-normal tracking-tight leading-none"
          >
            The Ritual of Liberation
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif italic text-base sm:text-lg text-[#2F6D73] font-light max-w-xl mx-auto leading-relaxed"
          >
            "Where non-resonant bonds dissolve into stardust, allowing both souls to return to absolute emotional sovereignty."
          </motion.p>

          <div className="flex justify-center pt-2">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
          </div>
        </div>

        {/* 3. FULL-WIDTH CINEMATIC ANIMATION STAGE */}
        <div className="relative w-full max-w-5xl mx-auto h-[480px] sm:h-[540px] md:h-[600px] flex flex-col justify-between items-center">
          
          {/* MAIN SVG CINEMATIC VIEWPORT */}
          <div className="relative w-full h-full flex items-center justify-center">
            <svg 
              viewBox="0 0 1000 500" 
              className="w-full h-full overflow-visible select-none pointer-events-none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Aura Gradients */}
                <radialGradient id="leftAuraBreathing" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2F6D73" stopOpacity={scene >= 6 ? "0.6" : "0.3"} />
                  <stop offset="60%" stopColor="#7da086" stopOpacity={scene >= 6 ? "0.35" : "0.15"} />
                  <stop offset="100%" stopColor="#FAF9F5" stopOpacity="0" />
                </radialGradient>

                <radialGradient id="rightAuraBreathing" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity={scene >= 6 ? "0.6" : "0.35"} />
                  <stop offset="60%" stopColor="#fef08a" stopOpacity={scene >= 6 ? "0.35" : "0.15"} />
                  <stop offset="100%" stopColor="#FAF9F5" stopOpacity="0" />
                </radialGradient>

                {/* Energy Ribbon Flow Gradients */}
                <linearGradient id="ribbonGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2F6D73" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#fef08a" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.85" />
                </linearGradient>

                <linearGradient id="ribbonCoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#fef9c3" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>

                {/* Divine Light Feather Gradients */}
                <linearGradient id="goldenFeatherPlume" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="35%" stopColor="#fef9c3" stopOpacity="0.85" />
                  <stop offset="75%" stopColor="#D4AF37" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#b38728" stopOpacity="0.5" />
                </linearGradient>

                <linearGradient id="featherRayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="40%" stopColor="#fef08a" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </linearGradient>

                {/* Warm Golden Freedom Bloom Glow */}
                <radialGradient id="freedomBloomGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity="0.7" />
                  <stop offset="40%" stopColor="#D4AF37" stopOpacity="0.4" />
                  <stop offset="80%" stopColor="#7da086" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#FAF9F5" stopOpacity="0" />
                </radialGradient>

                {/* Spiritual Silhouette Translucent Light Gradients */}
                <linearGradient id="spiritBodyGradA" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#133842" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#2F6D73" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#7da086" stopOpacity="0.6" />
                </linearGradient>

                <linearGradient id="spiritBodyGradB" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#133842" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#2F6D73" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.65" />
                </linearGradient>

                {/* Soft Glow Filters */}
                <filter id="etherealGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="7" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="divineBloom" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="15" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* A. CENTRAL FREEDOM LIGHT BLOOM (Appears post-cut in Scene 6 & 7) */}
              <AnimatePresence>
                {scene >= 6 && (
                  <motion.g
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1.25 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                  >
                    <circle cx="500" cy="240" r="270" fill="url(#freedomBloomGlow)" />
                  </motion.g>
                )}
              </AnimatePresence>

              {/* B. LEFT SPIRITUAL SILHOUETTE & BREATHING AURA (Person A) */}
              <g transform="translate(230, 252) scale(1.28)">
                {/* Continuous Breathing Aura Circle */}
                <motion.circle 
                  cx="0" cy="0"
                  animate={{ 
                    r: scene >= 6 ? [165, 190, 165] : [125, 145, 125],
                    opacity: scene >= 6 ? [0.8, 1, 0.8] : [0.5, 0.7, 0.5]
                  }}
                  transition={{ 
                    duration: 4.8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  fill="url(#leftAuraBreathing)" 
                />

                {/* Elegant Human Spiritual Silhouette */}
                <motion.g
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.8 }}
                >
                  {/* Head Contour Outline */}
                  <circle cx="0" cy="-86" r="22" fill="#133842" stroke="#2F6D73" strokeWidth="1.5" filter="url(#etherealGlow)" />

                  {/* Body, Torso, Arms & Distinct Standing Legs Path */}
                  <path 
                    d="M -10,-65 C -20,-65 -38,-54 -46,-25 C -50,5 -46,45 -42,75 C -38,78 -34,75 -30,65 C -26,30 -24,-10 -22,-20 C -22,10 -20,45 -20,110 L -6,110 C -5,60 -3,25 -1,10 Q 0,5 1,10 C 3,25 5,60 6,110 L 20,110 C 20,45 22,10 22,-20 C 24,-10 26,30 30,65 C 34,75 38,78 42,75 C 46,45 50,5 46,-25 C 38,-54 20,-65 10,-65 Z" 
                    fill="url(#spiritBodyGradA)" 
                    stroke="#7da086" 
                    strokeWidth="1.2"
                    opacity="0.9"
                    filter="url(#etherealGlow)"
                  />

                  {/* Heart / Anahata Energy Center */}
                  <motion.circle 
                    cx="0" cy="-20" 
                    animate={{ 
                      r: scene >= 6 ? [14, 18, 14] : [9, 12, 9],
                      fill: scene >= 6 ? "#5eead4" : "#2F6D73"
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    stroke="#ffffff" 
                    strokeWidth="2"
                    filter="url(#etherealGlow)"
                  />
                  <circle cx="0" cy="-20" r="4" fill="#ffffff" />
                </motion.g>
              </g>

              {/* C. RIGHT SPIRITUAL SILHOUETTE & BREATHING AURA (Person B) */}
              <g transform="translate(770, 252) scale(1.28)">
                {/* Continuous Breathing Aura Circle */}
                <motion.circle 
                  cx="0" cy="0"
                  animate={{ 
                    r: scene >= 6 ? [165, 190, 165] : [125, 145, 125],
                    opacity: scene >= 6 ? [0.85, 1, 0.85] : [0.55, 0.75, 0.55]
                  }}
                  transition={{ 
                    duration: 4.8, 
                    repeat: Infinity, 
                    delay: 0.8,
                    ease: "easeInOut" 
                  }}
                  fill="url(#rightAuraBreathing)" 
                />

                {/* Elegant Human Spiritual Silhouette */}
                <motion.g
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.8, delay: 0.3 }}
                >
                  {/* Head Contour Outline */}
                  <circle cx="0" cy="-86" r="22" fill="#133842" stroke="#D4AF37" strokeWidth="1.5" filter="url(#etherealGlow)" />

                  {/* Body, Torso, Arms & Distinct Standing Legs Path */}
                  <path 
                    d="M -10,-65 C -20,-65 -38,-54 -46,-25 C -50,5 -46,45 -42,75 C -38,78 -34,75 -30,65 C -26,30 -24,-10 -22,-20 C -22,10 -20,45 -20,110 L -6,110 C -5,60 -3,25 -1,10 Q 0,5 1,10 C 3,25 5,60 6,110 L 20,110 C 20,45 22,10 22,-20 C 24,-10 26,30 30,65 C 34,75 38,78 42,75 C 46,45 50,5 46,-25 C 38,-54 20,-65 10,-65 Z" 
                    fill="url(#spiritBodyGradB)" 
                    stroke="#D4AF37" 
                    strokeWidth="1.2"
                    opacity="0.9"
                    filter="url(#etherealGlow)"
                  />

                  {/* Heart / Anahata Energy Center */}
                  <motion.circle 
                    cx="0" cy="-20" 
                    animate={{ 
                      r: scene >= 6 ? [14, 18, 14] : [9, 12, 9],
                      fill: scene >= 6 ? "#fef08a" : "#D4AF37"
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
                    stroke="#ffffff" 
                    strokeWidth="2"
                    filter="url(#etherealGlow)"
                  />
                  <circle cx="0" cy="-20" r="4" fill="#ffffff" />
                </motion.g>
              </g>

              {/* D. LIVING ORGANIC ENERGY RIBBON CORD (Active in Scenes 1 - 4) */}
              {scene >= 1 && scene <= 4 && (
                <g>
                  {/* Outer Pulsing Wave Ribbon */}
                  <motion.path 
                    d="M 230,230 C 350,180 650,280 770,230" 
                    fill="none" 
                    stroke="url(#ribbonGlowGrad)" 
                    strokeWidth={scene === 4 ? "8" : "5.5"}
                    filter="url(#etherealGlow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: scene === 4 ? 1 : 0.85 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />

                  {/* Inner Pure Luminous Core */}
                  <motion.path 
                    d="M 230,230 C 350,180 650,280 770,230" 
                    fill="none" 
                    stroke="url(#ribbonCoreGrad)" 
                    strokeWidth="2.2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />

                  {/* Continuous Stream of Particles travelling along the organic ribbon */}
                  <motion.circle
                    r="3.5"
                    fill="#ffffff"
                    filter="url(#etherealGlow)"
                    animate={{
                      cx: [230, 350, 500, 650, 770],
                      cy: [230, 195, 230, 265, 230],
                      opacity: [0.2, 1, 0.8, 1, 0.2]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.circle
                    r="3"
                    fill="#fef08a"
                    filter="url(#etherealGlow)"
                    animate={{
                      cx: [770, 650, 500, 350, 230],
                      cy: [230, 265, 230, 195, 230],
                      opacity: [0.2, 1, 0.8, 1, 0.2]
                    }}
                    transition={{ duration: 2.8, repeat: Infinity, delay: 0.6, ease: "linear" }}
                  />
                </g>
              )}

              {/* E. LUMINOUS DIVINE FEATHER OF LIGHT (Scenes 2 - 5) */}
              {scene >= 2 && scene <= 5 && (
                <motion.g
                  initial={{ y: -150, opacity: 0 }}
                  animate={{ 
                    y: scene === 4 || scene === 5 ? 85 : scene === 3 ? 45 : -20,
                    x: scene === 4 || scene === 5 ? [0, 6, -4, 0] : [0, 16, -12, 8, 0],
                    rotate: scene === 4 || scene === 5 ? [-3, -1, -2] : [-10, 6, -5, 3, 0],
                    opacity: 1 
                  }}
                  transition={{ 
                    y: { duration: 2.8, ease: [0.25, 0.1, 0.25, 1.0] },
                    x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  {/* Soft Light Rays behind Feather */}
                  <path 
                    d="M 470,-80 L 530,-80 L 515,230 L 485,230 Z" 
                    fill="url(#featherRayGrad)" 
                    opacity="0.4"
                  />

                  {/* DIVINE FEATHER VECTOR (Refined, Delicate & Smaller Scale) */}
                  <g transform="translate(500, 95) scale(0.60)">
                    {/* Golden Feather Soft Radial Halo */}
                    <circle cx="0" cy="10" r="45" fill="url(#freedomBloomGlow)" filter="url(#divineBloom)" />

                    {/* Drifting Feather Particles surrounding it */}
                    {featherParticles.map((fp) => (
                      <motion.circle
                        key={fp.id}
                        cx={fp.x}
                        cy={fp.y}
                        r={fp.size}
                        fill="#fef08a"
                        opacity={0.7}
                        animate={{
                          y: [fp.y, fp.y - 15, fp.y],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: fp.duration,
                          repeat: Infinity,
                          delay: fp.delay,
                          ease: "easeInOut"
                        }}
                      />
                    ))}

                    {/* Outer Plume Silhouette (Warm Gold, Translucent & Glowing) */}
                    <path 
                      d="M 0,-85 C -24,-58 -32,-20 -26,18 C -20,45 -8,65 0,85 C 8,65 20,45 26,18 C 32,-20 24,-58 0,-85 Z" 
                      fill="url(#goldenFeatherPlume)" 
                      stroke="#D4AF37" 
                      strokeWidth="1"
                      filter="url(#etherealGlow)"
                      opacity="0.9"
                    />

                    {/* Central Quill Shaft Line (Pure Ivory Light) */}
                    <path 
                      d="M 0,-80 C 1,-25 2,30 0,90" 
                      fill="none" 
                      stroke="#ffffff" 
                      strokeWidth="1.6" 
                      strokeLinecap="round"
                      filter="url(#etherealGlow)"
                    />

                    {/* Soft Delicate Feather Barb Veins */}
                    <path d="M 0,-65 C -12,-55 -20,-42 -22,-28" fill="none" stroke="#ffffff" strokeWidth="0.7" opacity="0.65" />
                    <path d="M 0,-45 C -14,-35 -22,-22 -23,-8" fill="none" stroke="#ffffff" strokeWidth="0.7" opacity="0.65" />
                    <path d="M 0,-25 C -15,-15 -21,-2 -19,12" fill="none" stroke="#ffffff" strokeWidth="0.7" opacity="0.65" />
                    <path d="M 0,-5 C -12,5 -18,18 -16,30" fill="none" stroke="#ffffff" strokeWidth="0.7" opacity="0.65" />

                    <path d="M 0,-65 C 12,-55 20,-42 22,-28" fill="none" stroke="#ffffff" strokeWidth="0.7" opacity="0.65" />
                    <path d="M 0,-45 C 14,-35 22,-22 23,-8" fill="none" stroke="#ffffff" strokeWidth="0.7" opacity="0.65" />
                    <path d="M 0,-25 C 15,-15 21,-2 19,12" fill="none" stroke="#ffffff" strokeWidth="0.7" opacity="0.65" />
                    <path d="M 0,-5 C 12,5 18,18 16,30" fill="none" stroke="#ffffff" strokeWidth="0.7" opacity="0.65" />

                    {/* Soft Tip Sparkle Core */}
                    <circle cx="0" cy="85" r="3" fill="#ffffff" filter="url(#etherealGlow)" />
                  </g>
                </motion.g>
              )}

              {/* F. HEALING MOMENT / SOFT FEATHER TOUCH & STARDUST BLOOM (Scene 4 & 5) */}
              {(scene === 4 || scene === 5) && (
                <g transform="translate(500, 230)">
                  {/* Soft Feather Contact Glow */}
                  <motion.circle 
                    cx="0" cy="0" 
                    initial={{ r: 2, opacity: 0.8 }}
                    animate={{ r: 120, opacity: 0 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    fill="url(#freedomBloomGlow)"
                    filter="url(#divineBloom)"
                  />
                  <motion.circle 
                    cx="0" cy="0" 
                    initial={{ r: 1, opacity: 1 }}
                    animate={{ r: 40, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    fill="#ffffff"
                    filter="url(#etherealGlow)"
                  />
                </g>
              )}

              {/* G. UPWARD SPIRALING GOLDEN STARDUST & DISPERSING LIGHT (Scenes 5, 6 & 7) */}
              {scene >= 5 && (
                <g>
                  {/* Golden Stardust particles drifting smoothly upward and outward */}
                  {stardustParticles.map((p) => (
                    <motion.circle
                      key={p.id}
                      cx={p.startX}
                      cy={p.startY}
                      r={p.size}
                      fill="#fef08a"
                      filter="url(#etherealGlow)"
                      initial={{ opacity: 0, x: 0, y: 0 }}
                      animate={{ 
                        opacity: [0, 0.95, 0],
                        x: p.dx,
                        y: p.dy
                      }}
                      transition={{ 
                        duration: p.duration, 
                        delay: p.delay, 
                        ease: "easeOut" 
                      }}
                    />
                  ))}
                </g>
              )}
            </svg>
          </div>

          {/* 4. POETIC FADING CAPTION (Subtle Meditation Narrative) */}
          <div className="text-center min-h-[60px] flex items-center justify-center relative z-20 px-4">
            <AnimatePresence mode="wait">
              {scene === 0 && (
                <motion.p
                  key="c0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.8 }}
                  className="font-serif text-sm sm:text-base text-[#0A252C]/80 font-normal tracking-wide"
                >
                  Two spiritual beings resting in tranquil presence...
                </motion.p>
              )}
              {scene === 1 && (
                <motion.p
                  key="c1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.8 }}
                  className="font-serif text-sm sm:text-base text-[#2F6D73] font-medium tracking-wide"
                >
                  An organic ribbon of past memories, emotional patterns, and shared energetic ties...
                </motion.p>
              )}
              {(scene === 2 || scene === 3) && (
                <motion.p
                  key="c2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.8 }}
                  className="font-serif text-sm sm:text-base text-[#D4AF37] font-medium tracking-wide"
                >
                  A luminous divine feather of light drifts down peacefully from above...
                </motion.p>
              )}
              {scene === 4 && (
                <motion.p
                  key="c4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.8 }}
                  className="font-serif text-sm sm:text-base text-[#D4AF37] font-medium tracking-wide italic"
                >
                  The golden feather gently brushes the energetic connection with unconditional love...
                </motion.p>
              )}
              {scene === 5 && (
                <motion.p
                  key="c5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.8 }}
                  className="font-serif text-sm sm:text-base text-[#7da086] font-medium tracking-wide"
                >
                  The attachment naturally dissolves into shimmering stardust...
                </motion.p>
              )}
              {scene >= 6 && (
                <motion.p
                  key="c6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 1 }}
                  className="font-serif text-base sm:text-lg text-[#0A252C] font-medium tracking-wide"
                >
                  Both souls expand into independent, radiant light &amp; eternal emotional freedom.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* 5. OPTIONAL ELEGANT BOOKING BUTTON */}
        {onBook && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center pt-12 md:pt-16"
          >
            <button
              onClick={() => onBook('Energy Healing & Cord Cutting Certification')}
              className="px-10 py-4 bg-[#0A252C] hover:bg-[#133842] text-white font-mono text-xs font-bold tracking-[0.25em] uppercase rounded-full shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-0.5 cursor-pointer border border-[#D4AF37]/30"
            >
              Begin Your Sacred Cord Cutting Journey
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
};
