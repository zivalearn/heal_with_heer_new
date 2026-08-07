import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Moon, Sun, Compass, Star, Infinity, ChevronLeft, ChevronRight, Eye
} from 'lucide-react';
import { 
  CONSTELLATION_NODES, 
  CONSTELLATION_CONNECTIONS, 
  ConstellationArchetype 
} from '../../data/constellationData';
import { TarotImageWithFallback } from './TarotInteractiveSection';

// Custom Symbol Mapper for nodes
const SymbolIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Lotus':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2c1.5 4 4.5 6 7 6-3 1-5 3-7 7-2-4-4-6-7-7 2.5 0 5.5-2 7-6Z" />
          <path d="M12 12c1-2.5 3-4 5.5-4.5M12 12c-1-2.5-3-4-5.5-4.5M12 16c2-1 4.5-1 6.5.5M12 16c-2-1-4.5-1-6.5.5" />
          <circle cx="12" cy="12" r="1.5" className="fill-current" />
        </svg>
      );
    case 'Infinity':
      return <Infinity className={className} />;
    case 'Moon':
      return <Moon className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Star':
      return <Star className={className} />;
    case 'Sun':
      return <Sun className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

interface CelestialConstellationAtlasProps {
  onBook: (modalityName: string) => void;
}

export default function CelestialConstellationAtlas({ onBook }: CelestialConstellationAtlasProps) {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);
  const prevActiveIdx = useRef<number>(0);

  const activeIdx = hoveredIdx !== null ? hoveredIdx : selectedIdx;
  const activeNode = CONSTELLATION_NODES[activeIdx];

  // Trigger flip animation on card changes
  useEffect(() => {
    if (activeIdx !== prevActiveIdx.current) {
      setIsCardFlipped(false);
      const timer = setTimeout(() => {
        setIsCardFlipped(true);
      }, 150);
      prevActiveIdx.current = activeIdx;
      return () => clearTimeout(timer);
    }
  }, [activeIdx]);

  // Handle keyboard interaction
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedIdx(index);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSelectedIdx((prev) => (prev + 1) % CONSTELLATION_NODES.length);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSelectedIdx((prev) => (prev - 1 + CONSTELLATION_NODES.length) % CONSTELLATION_NODES.length);
    }
  };

  // Static twinkling stars (30 stars) with random configurations
  const staticStars = useRef(
    Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      x: Math.floor(Math.random() * 86) + 7,
      y: Math.floor(Math.random() * 86) + 7,
      size: Math.random() > 0.7 ? 2 : 1,
      duration: `${2 + Math.random() * 4}s`,
      delay: `${Math.random() * 3}s`,
    }))
  ).current;

  // Static drifting particles (12 particles)
  const driftingParticles = useRef(
    Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.floor(Math.random() * 80) + 10,
      y: Math.floor(Math.random() * 80) + 10,
      size: Math.floor(Math.random() * 3) + 2,
      duration: `${10 + Math.random() * 10}s`,
    }))
  ).current;

  return (
    <section className="py-16 md:py-20 bg-ivory relative overflow-hidden border-t border-[#dfdbc9]/30" id="celestial-constellation-atlas">
      {/* Visual background details */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#041a24]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* SECTION HEADER */}
        <span className="text-xs font-mono font-bold tracking-[0.3em] text-white uppercase block mb-1">
          CELESTIAL ARCHETYPES
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#0B2F3A] font-medium tracking-tight mb-4">
          Explore the Celestial Constellation Atlas
        </h2>
        
        {/* Elegant Gold Divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-[1px] w-16 bg-gold/40" />
          <span className="text-gold text-xs animate-pulse">✦</span>
          <div className="h-[1px] w-16 bg-gold/40" />
        </div>

        {/* Short Description */}
        <p className="text-sm md:text-base text-ocean/80 max-w-2xl mx-auto leading-relaxed mb-16 font-light">
          Every Major Arcana represents an archetypal energy. Explore the sacred constellation and discover how each card reflects different stages of your inner journey.
        </p>

        {/* MAIN CONTAINER */}
        <div className="hidden lg:grid grid-cols-12 gap-10 items-center justify-center text-left min-h-[700px] max-w-6xl mx-auto">
          
          {/* LEFT: CONSTELLATION MAP CANVAS */}
          <div className="col-span-7 flex justify-center relative">
            <div 
              className="relative w-full aspect-square max-w-[620px] rounded-full bg-gradient-to-br from-[#02131a] via-[#041a24] to-[#010b10] border-2 border-gold/20 shadow-[0_20px_50px_rgba(4,26,36,0.65)] overflow-hidden flex items-center justify-center p-4 group select-none"
              id="constellation-canvas"
            >
              {/* Backing Sacred Geometry lines */}
              <div className="absolute inset-0 border-[0.5px] border-gold/10 rounded-full scale-[0.85] pointer-events-none" />
              <div className="absolute inset-0 border-[0.5px] border-gold/5 rounded-full scale-[0.70] pointer-events-none" />
              <div className="absolute inset-0 border-[0.5px] border-gold/5 rounded-full scale-[0.55] pointer-events-none" />
              <div className="absolute inset-0 border-[0.5px] border-gold/5 rounded-full scale-[0.35] pointer-events-none" />
              <div className="absolute inset-0 border border-dashed border-gold/5 rounded-full scale-[0.20] pointer-events-none animate-spin-slow" />
              
              {/* Sacred axes */}
              <div className="absolute w-[95%] h-[0.5px] bg-gold/5 pointer-events-none" />
              <div className="absolute h-[95%] w-[0.5px] bg-gold/5 pointer-events-none" />
              <div className="absolute w-[95%] h-[0.5px] bg-gold/5 rotate-45 pointer-events-none" />
              <div className="absolute w-[95%] h-[0.5px] bg-gold/5 -rotate-45 pointer-events-none" />

              {/* Moon Watermark (very faint) */}
              <div className="absolute w-[45%] h-[45%] rounded-full border border-gold/5 flex items-center justify-center pointer-events-none animate-orbit-rotate opacity-20">
                <div className="absolute -top-3 w-4 h-4 text-gold/35">
                  <Moon className="w-full h-full fill-gold/10 stroke-[1]" />
                </div>
                <div className="absolute -bottom-3 w-4 h-4 text-gold/35">
                  <Sun className="w-full h-full fill-gold/10 stroke-[1]" />
                </div>
              </div>

              {/* Twinkling Star Field */}
              {staticStars.map((star) => (
                <div
                  key={star.id}
                  className="absolute rounded-full bg-white animate-twinkle"
                  style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    '--twinkle-duration': star.duration,
                    '--twinkle-delay': star.delay,
                  } as React.CSSProperties}
                />
              ))}

              {/* Drifting subtle particles */}
              {driftingParticles.map((pt) => (
                <div
                  key={pt.id}
                  className="absolute rounded-full bg-gold/40 blur-[0.5px] animate-drift"
                  style={{
                    left: `${pt.x}%`,
                    top: `${pt.y}%`,
                    width: `${pt.size}px`,
                    height: `${pt.size}px`,
                    '--drift-duration': pt.duration,
                  } as React.CSSProperties}
                />
              ))}

              {/* SVG CONNECTION LINES */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100">
                {CONSTELLATION_CONNECTIONS.map(([startId, endId], idx) => {
                  const startNode = CONSTELLATION_NODES[startId];
                  const endNode = CONSTELLATION_NODES[endId];
                  const isHighlighted = activeIdx === startId || activeIdx === endId;

                  return (
                    <line
                      key={idx}
                      x1={startNode.x}
                      y1={startNode.y}
                      x2={endNode.x}
                      y2={endNode.y}
                      stroke={isHighlighted ? "#d4af37" : "#d4af37"}
                      strokeWidth={isHighlighted ? "0.45" : "0.15"}
                      opacity={isHighlighted ? "0.85" : "0.15"}
                      className={isHighlighted ? "animate-stroke-flow" : "transition-all duration-700"}
                    />
                  );
                })}
              </svg>

              {/* TAROT CONSTELLATION NODES */}
              {CONSTELLATION_NODES.map((node) => {
                const isActive = activeIdx === node.id;
                const isSelected = selectedIdx === node.id;

                return (
                  <div
                    key={node.id}
                    className="absolute z-20 group/node cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#041a24] rounded-full"
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onMouseEnter={() => setHoveredIdx(node.id)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onClick={() => setSelectedIdx(node.id)}
                    onKeyDown={(e) => handleKeyDown(e, node.id)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Tarot Constellation Node: ${node.title}`}
                  >
                    {/* Glowing outer aura for hovered node */}
                    <div 
                      className={`absolute inset-[-14px] rounded-full transition-all duration-500 pointer-events-none ${
                        isActive 
                          ? 'bg-gold/10 scale-110 opacity-100 blur-[4px]' 
                          : 'bg-transparent scale-50 opacity-0'
                      }`} 
                    />

                    {/* Orbiting Symbols (Optional mini preview) */}
                    {isActive && (
                      <div className="absolute inset-[-16px] pointer-events-none animate-spin-slow">
                        <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 text-gold/80 bg-[#041a24] border border-gold/45 rounded-full flex items-center justify-center p-[1px]">
                          <SymbolIcon name={node.symbol} className="w-[5px] h-[5px]" />
                        </div>
                      </div>
                    )}

                    {/* Node Core */}
                    <div 
                      className={`relative w-[11px] h-[11px] rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        isActive
                          ? 'bg-white border-gold shadow-[0_0_12px_#d4af37]'
                          : isSelected
                            ? 'bg-gold border-gold/50 shadow-[0_0_6px_rgba(212,175,55,0.5)]'
                            : 'bg-[#031c26]/80 border-gold/45 group-hover/node:bg-gold-light group-hover/node:border-gold'
                      }`}
                    >
                      {/* Inner core dot */}
                      {isActive && (
                        <span className="absolute w-1 h-1 rounded-full bg-gold" />
                      )}
                    </div>

                    {/* Tiny hover name tags */}
                    <div 
                      className={`absolute top-4 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#03171e]/95 border border-gold/20 rounded text-[9px] text-gold font-mono whitespace-nowrap transition-all duration-300 pointer-events-none ${
                        isActive 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 -translate-y-1'
                      }`}
                    >
                      {node.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: REVEALED TAROT CARD & DETAIL PANEL */}
          <div className="col-span-5 flex flex-col justify-between space-y-6 h-full pl-4">
            
            {/* Split layout: Card Flip on top-left, basic detail side-by-side or stacked nicely */}
            <div className="flex gap-6 items-start h-auto">
              
              {/* Premium 3D Flipping Tarot Card container */}
              <div className="perspective-1000 flex-shrink-0 relative z-10 select-none">
                <div 
                  className={`w-[155px] h-[255px] transition-transform duration-700 transform-style-3d relative ${
                    isCardFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* CARD BACK (glowing celestial orbit) */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-b from-[#05212c] to-[#021118] border border-gold/30 p-2 shadow-xl flex flex-col justify-between">
                    <div className="border border-gold/15 rounded-xl h-full w-full flex flex-col justify-between p-2 relative overflow-hidden bg-[#03171e]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,163,67,0.12)_0%,transparent_75%)]" />
                      <div className="flex justify-between text-[7px] text-gold/35 font-mono">
                        <span>✦</span>
                        <span>✦</span>
                      </div>
                      
                      <div className="mx-auto my-auto w-12 h-12 border border-gold/25 rounded-full flex items-center justify-center text-gold/60 animate-[spin_120s_linear_infinite] relative">
                        <div className="absolute inset-1 border border-dashed border-gold/15 rounded-full animate-pulse" />
                        <Compass className="w-5 h-5" strokeWidth={1.2} />
                      </div>

                      <div className="flex justify-between text-[7px] text-gold/35 font-mono rotate-180">
                        <span>✦</span>
                        <span>✦</span>
                      </div>
                    </div>
                  </div>

                  {/* CARD FRONT (dynamic archetype detail) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-b from-[#faf7f0] to-[#f2ecdd] border-2 border-gold/45 p-2 shadow-xl flex flex-col justify-between">
                    <div className="border border-gold/25 rounded-xl h-full w-full flex flex-col justify-between p-2 relative overflow-hidden bg-white">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,163,67,0.03)_0%,transparent_80%)] pointer-events-none" />
                      
                      {/* Roman index & Name */}
                      <div className="flex justify-between text-[7px] text-gold font-bold font-mono uppercase tracking-[0.15em] leading-none pb-1 border-b border-gold/10">
                        <span>{activeNode.roman}</span>
                        <span className="truncate max-w-[80px]">{activeNode.title}</span>
                      </div>

                      {/* Art with Fallback */}
                      <div className="w-full aspect-[1/1.22] rounded-lg overflow-hidden relative border border-[#dfdbc9] bg-[#faf9f6] my-1">
                        <TarotImageWithFallback
                          src={activeNode.image}
                          alt={activeNode.title}
                          cardName={activeNode.title}
                          className="w-full h-full object-cover grayscale-[15%]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F3A]/10 to-transparent pointer-events-none" />
                      </div>

                      {/* Card Footer */}
                      <div className="text-center pt-1 border-t border-gold/15 bg-[#fcfbfa] flex flex-col items-center flex-grow justify-center">
                        <div className="w-5 h-5 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center text-gold mb-0.5 animate-pulse">
                          <SymbolIcon name={activeNode.symbol} className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-[6.5px] text-gold font-mono uppercase tracking-[0.15em] font-semibold truncate max-w-full">
                          {activeNode.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Information Panel text (top block) */}
              <div className="flex-grow space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#5A8795]">
                  MAJOR ARCANA • KEY {activeNode.roman}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#0B2F3A] leading-tight">
                  {activeNode.title}
                </h3>
                <span className="text-xs text-gold font-medium block italic font-serif">
                  {activeNode.subtitle}
                </span>
                
                <div className="h-[1px] w-full bg-gold/20 my-2" />
                
                {/* Inspirational Quote */}
                <div className="bg-[#041a24]/5 border-l-2 border-gold p-2 rounded-r-lg italic text-[11px] text-ocean/85 font-serif leading-relaxed">
                  "{activeNode.quote}"
                </div>
              </div>

            </div>

            {/* Detailed Content Grid (4 elegant sections) */}
            <div className="bg-white/80 border border-gold/15 rounded-2xl p-5 space-y-4 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                
                {/* Section 1: Core Lesson */}
                <div className="space-y-1 text-left">
                  <h4 className="text-[9.5px] font-mono font-bold uppercase tracking-[0.15em] text-[#0B2F3A] flex items-center gap-1.5">
                    <span className="text-gold">✦</span> Core Lesson
                  </h4>
                  <p className="text-[11.5px] text-ocean/90 leading-relaxed font-light">
                    {activeNode.coreLesson}
                  </p>
                </div>

                {/* Section 2: Light Expression */}
                <div className="space-y-1 text-left">
                  <h4 className="text-[9.5px] font-mono font-bold uppercase tracking-[0.15em] text-[#0B2F3A] flex items-center gap-1.5">
                    <span className="text-gold">✦</span> Light Expression
                  </h4>
                  <p className="text-[11.5px] text-ocean/90 leading-relaxed font-light">
                    {activeNode.lightExpression}
                  </p>
                </div>

              </div>

              <div className="h-[0.5px] w-full bg-gold/15" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                
                {/* Section 3: Shadow Pattern */}
                <div className="md:col-span-4 space-y-1 text-left">
                  <h4 className="text-[9.5px] font-mono font-bold uppercase tracking-[0.15em] text-red-800 flex items-center gap-1.5">
                    <span className="text-red-400">✦</span> Shadow Pattern
                  </h4>
                  <p className="text-[11.5px] text-ocean/90 leading-relaxed font-light">
                    {activeNode.shadowPattern}
                  </p>
                </div>

                {/* Section 4: Real Life Reflection */}
                <div className="md:col-span-8 space-y-1 text-left">
                  <h4 className="text-[9.5px] font-mono font-bold uppercase tracking-[0.15em] text-[#0B2F3A] flex items-center gap-1.5">
                    <span className="text-gold">✦</span> Real Life Reflection
                  </h4>
                  <p className="text-[11.5px] text-ocean/90 leading-relaxed font-light">
                    {activeNode.realLifeReflection}
                  </p>
                </div>

              </div>

              {/* Action Button at bottom */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => onBook(`Sovereign Reading: ${activeNode.title}`)}
                  className="px-4 py-2 border border-gold/40 hover:border-gold bg-[#041a24] hover:bg-[#083040] text-cream hover:text-gold text-[9.5px] font-bold uppercase tracking-[0.2em] rounded-lg transition-colors flex items-center gap-1.5 group/btn"
                >
                  <span>Connect with this energy</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* MOBILE LAYOUT VERSION: ELEGANT CAROUSEL DIAL */}
        <div className="lg:hidden block max-w-md mx-auto space-y-8 select-none">
          
          {/* Circular Glowing Selector Container */}
          <div className="relative aspect-square max-w-[280px] mx-auto rounded-full bg-[#041a24] border border-gold/20 flex items-center justify-center overflow-hidden p-6 shadow-xl">
            {/* Orbiting ring */}
            <div className="absolute inset-4 border border-dashed border-gold/10 rounded-full animate-spin-slow" />
            <div className="absolute inset-10 border border-gold/5 rounded-full scale-100" />
            
            {/* Stars background */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,rgba(212,163,67,0.05)_0%,transparent_80%)]" />

            {/* Glowing active center node */}
            <div className="relative text-center flex flex-col items-center justify-center z-10 space-y-1">
              <span className="text-[10px] font-mono text-gold tracking-widest block">KEY {activeNode.roman}</span>
              
              <div className="w-16 h-16 rounded-full border border-gold/40 bg-gradient-to-br from-[#05212c] to-[#010c12] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.25)] relative">
                <div className="absolute inset-1 border border-dashed border-gold/15 rounded-full animate-orbit-rotate" />
                <SymbolIcon name={activeNode.symbol} className="w-6 h-6 text-gold animate-pulse" />
              </div>

              <span className="font-serif text-lg font-medium text-cream uppercase tracking-widest pt-1 block">{activeNode.title}</span>
              <span className="text-[9px] text-white font-semibold uppercase tracking-wider block">{activeNode.subtitle}</span>
            </div>

            {/* Left / Right Selector Handles */}
            <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between z-20">
              <button
                onClick={() => setSelectedIdx((prev) => (prev - 1 + CONSTELLATION_NODES.length) % CONSTELLATION_NODES.length)}
                className="w-10 h-10 rounded-full bg-[#03171e]/90 border border-gold/20 flex items-center justify-center text-gold hover:bg-[#052530] transition-colors shadow-lg cursor-pointer"
                aria-label="Previous Archetype"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSelectedIdx((prev) => (prev + 1) % CONSTELLATION_NODES.length)}
                className="w-10 h-10 rounded-full bg-[#03171e]/90 border border-gold/20 flex items-center justify-center text-gold hover:bg-[#052530] transition-colors shadow-lg cursor-pointer"
                aria-label="Next Archetype"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick sliding mobile card front-reveal only */}
          <div className="flex justify-center select-none pt-2">
            <div className="w-[160px] h-[260px] rounded-2xl bg-gradient-to-b from-[#faf7f0] to-[#f2ecdd] border-2 border-gold/45 p-2 shadow-xl flex flex-col justify-between">
              <div className="border border-gold/25 rounded-xl h-full w-full flex flex-col justify-between p-2 relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,163,67,0.03)_0%,transparent_80%)] pointer-events-none" />
                <div className="flex justify-between text-[7px] text-gold font-bold font-mono uppercase tracking-[0.15em] leading-none pb-1 border-b border-gold/10">
                  <span>{activeNode.roman}</span>
                  <span className="truncate max-w-[80px]">{activeNode.title}</span>
                </div>
                <div className="w-full aspect-[1/1.22] rounded-lg overflow-hidden relative border border-[#dfdbc9] bg-[#faf9f6] my-1">
                  <TarotImageWithFallback
                    src={activeNode.image}
                    alt={activeNode.title}
                    cardName={activeNode.title}
                    className="w-full h-full object-cover grayscale-[15%]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean/10 to-transparent pointer-events-none" />
                </div>
                <div className="text-center pt-1 border-t border-gold/15 bg-[#fcfbfa] flex flex-col items-center flex-grow justify-center">
                  <span className="text-[6.5px] text-gold font-mono uppercase tracking-[0.15em] font-semibold truncate max-w-full">
                    {activeNode.subtitle}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant quote for mobile */}
          <div className="bg-[#041a24]/5 border-l-2 border-gold p-4 rounded-r-lg italic text-xs text-ocean font-serif leading-relaxed text-center mx-4">
            "{activeNode.quote}"
          </div>

          {/* Information panel (Stacked columns below) */}
          <div className="bg-white border border-gold/15 rounded-2xl p-6 mx-4 space-y-6 text-left shadow-md">
            
            <div className="space-y-1">
              <span className="text-[9px] font-mono font-bold tracking-widest text-[#5A8795] uppercase block">
                CORE VALUE & THE LESSON
              </span>
              <h4 className="text-xs font-serif font-bold uppercase text-[#0B2F3A] tracking-wider">
                ✦ Core Lesson
              </h4>
              <p className="text-xs text-ocean/90 leading-relaxed font-light">
                {activeNode.coreLesson}
              </p>
            </div>

            <div className="h-[0.5px] w-full bg-gold/15" />

            <div className="space-y-1">
              <span className="text-[9px] font-mono font-bold tracking-widest text-[#5A8795] uppercase block">
                LIGHT & HIGHEST EXPRESSION
              </span>
              <h4 className="text-xs font-serif font-bold uppercase text-[#0B2F3A] tracking-wider">
                ✦ Light Expression
              </h4>
              <p className="text-xs text-ocean/90 leading-relaxed font-light">
                {activeNode.lightExpression}
              </p>
            </div>

            <div className="h-[0.5px] w-full bg-gold/15" />

            <div className="space-y-1">
              <span className="text-[9px] font-mono font-bold tracking-widest text-red-400 uppercase block">
                SHADOW & UNBALANCED PATTERNS
              </span>
              <h4 className="text-xs font-serif font-bold uppercase text-red-800 tracking-wider">
                ✦ Shadow Pattern
              </h4>
              <p className="text-xs text-ocean/90 leading-relaxed font-light">
                {activeNode.shadowPattern}
              </p>
            </div>

            <div className="h-[0.5px] w-full bg-gold/15" />

            <div className="space-y-1">
              <span className="text-[9px] font-mono font-bold tracking-widest text-[#5A8795] uppercase block">
                PRACTICAL INTERPRETATION
              </span>
              <h4 className="text-xs font-serif font-bold uppercase text-[#0B2F3A] tracking-wider">
                ✦ Real Life Reflection
              </h4>
              <p className="text-xs text-ocean/90 leading-relaxed font-light">
                {activeNode.realLifeReflection}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onBook(`Sovereign Reading: ${activeNode.title}`)}
                className="w-full py-3.5 bg-[#041a24] text-cream border border-gold/30 hover:border-gold text-xs font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Connect with this energy</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
