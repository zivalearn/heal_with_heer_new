import React from 'react';
import { motion } from 'motion/react';
import ModalityImage from './ModalityImage';

interface ModalityCircleProps {
  id: string;
  title: string;
  index: number;
}

// 1. Chakra Lotus Graphic
const ChakraIcon = () => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 text-ocean-dark transition-transform duration-300 group-hover:scale-105" fill="none" stroke="currentColor">
    {/* Outer Lotus Petals */}
    <g strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* 8 Symmetrical Lotus Petals */}
      <path d="M 50,15 C 53,28 47,28 50,15 Z M 50,85 C 47,72 53,72 50,85 Z" fill="rgba(100, 140, 180, 0.1)" />
      <path d="M 85,50 C 72,53 72,47 85,50 Z M 15,50 C 28,47 28,53 15,50 Z" fill="rgba(100, 140, 180, 0.1)" />
      <path d="M 75,25 C 65,35 60,30 75,25 Z M 25,75 C 35,65 40,70 25,75 Z" fill="rgba(100, 140, 180, 0.1)" />
      <path d="M 75,75 C 65,65 60,70 75,75 Z M 25,25 C 35,35 40,30 25,25 Z" fill="rgba(100, 140, 180, 0.1)" />
      
      {/* Intermediate mini petals for rich mandala look */}
      <path d="M 50,25 C 55,35 45,35 50,25" />
      <path d="M 50,75 C 45,65 55,65 50,75" />
      <path d="M 75,50 C 65,45 65,55 75,50" />
      <path d="M 25,50 C 35,55 35,45 25,50" />
    </g>
    
    {/* Concentric Sacred Geometry Rings */}
    <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
    <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    
    {/* Glowing Center Core */}
    <circle cx="50" cy="50" r="4" fill="currentColor" className="animate-pulse" />
    
    {/* Radiating sparkles */}
    <circle cx="50" cy="28" r="1" fill="currentColor" />
    <circle cx="50" cy="72" r="1" fill="currentColor" />
    <circle cx="72" cy="50" r="1" fill="currentColor" />
    <circle cx="28" cy="50" r="1" fill="currentColor" />
  </svg>
);

// 2. Tarot Cards Graphic (3 fanned out cards with cosmic engravings)
const TarotIcon = () => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 text-teal-dark transition-transform duration-300 group-hover:scale-105" fill="none" stroke="currentColor">
    {/* Left fanned card */}
    <g transform="rotate(-15 35 55)">
      <rect x="22" y="24" width="22" height="38" rx="2" fill="rgba(180, 200, 210, 0.1)" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="33" cy="43" r="4" stroke="currentColor" strokeWidth="1" />
      <line x1="33" y1="33" x2="33" y2="53" stroke="currentColor" strokeWidth="1" />
    </g>

    {/* Right fanned card */}
    <g transform="rotate(15 65 55)">
      <rect x="56" y="24" width="22" height="38" rx="2" fill="rgba(180, 200, 210, 0.1)" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 67,37 L 67,49 M 61,43 L 73,43" stroke="currentColor" strokeWidth="1" />
      <circle cx="67" cy="43" r="5" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1 1" />
    </g>

    {/* Center primary card (dominant) */}
    <g>
      <rect x="38" y="20" width="24" height="42" rx="2.5" fill="rgba(255, 255, 255, 0.95)" stroke="currentColor" strokeWidth="2" className="shadow-sm" />
      {/* Inner margin box */}
      <rect x="41" y="23" width="18" height="36" rx="1" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 1" />
      
      {/* Radiant Cosmic eye / Crescent Moon in Center */}
      <path d="M 45,41 C 48,37 52,37 55,41" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 45,41 C 48,45 52,45 55,41" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="50" cy="41" r="2.2" fill="currentColor" />
      
      {/* Star symbols on card corners */}
      <path d="M 50,28 L 50,32 M 48,30 L 52,30" stroke="currentColor" strokeWidth="0.8" />
      <path d="M 50,50 L 50,54 M 48,52 L 52,52" stroke="currentColor" strokeWidth="0.8" />
    </g>
  </svg>
);

// 3. Reiki Healing Graphic (Gently cupped open palms channeling flame / divine energy)
const ReikiIcon = () => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 text-sage-dark transition-transform duration-300 group-hover:scale-105" fill="none" stroke="currentColor">
    {/* Flame / Life energy rising */}
    <path
      d="M 50,44 C 41,35 48,16 50,12 C 52,16 59,35 50,44 Z"
      fill="rgba(140, 180, 150, 0.15)"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 50,38 C 45,32 48,22 50,18 C 52,22 55,32 50,38 Z"
      fill="rgba(255, 255, 255, 0.5)"
      stroke="currentColor"
      strokeWidth="1.2"
    />

    {/* Left hand cupping */}
    <path
      d="M 28,60 C 26,48 35,46 38,46 C 41,46 41,52 36,54 C 42,54 44,59 38,62 C 43,62 43,68 36,69 C 39,69 39,74 33,74 C 28,74 24,68 28,60 Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      transform="rotate(-10 33 60)"
    />

    {/* Right hand cupping */}
    <path
      d="M 72,60 C 74,48 65,46 62,46 C 59,46 59,52 64,54 C 58,54 56,59 62,62 C 57,62 57,68 64,69 C 61,69 61,74 67,74 C 72,74 76,68 72,60 Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      transform="scale(-1, 1) translate(-100, 0) rotate(-10 33 60)"
    />

    {/* Energy sparkles floating around */}
    <path d="M 26,30 L 26,34 M 24,32 L 28,32" stroke="currentColor" strokeWidth="1" />
    <path d="M 74,30 L 74,34 M 72,32 L 76,32" stroke="currentColor" strokeWidth="1" />
    <circle cx="50" cy="52" r="1.5" fill="currentColor" />
  </svg>
);

// 4. Pranic Healing Graphic (Energy swirl / helix with star dust and hand)
const PranicIcon = () => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 text-teal-dark transition-transform duration-300 group-hover:scale-105" fill="none" stroke="currentColor">
    {/* Twin helical energy swirls */}
    <path
      d="M 20,40 C 35,20 65,20 80,40 C 90,53 75,70 60,65 C 45,60 30,75 42,84"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeDasharray="400"
      fill="none"
    />
    <path
      d="M 25,48 C 38,32 62,32 75,48 C 82,58 70,72 58,68 C 48,65 38,75 48,82"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeDasharray="4 2"
      fill="none"
      opacity="0.75"
    />

    {/* Hand emanating the energy sweep */}
    <path
      d="M 50,78 C 50,70 42,66 40,58 C 42,50 48,46 52,50 C 49,54 53,58 56,54 C 54,60 59,62 61,58 C 58,64 64,66 65,62 M 50,78 C 53,78 56,74 54,68"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      transform="rotate(35 50 65)"
    />

    {/* Sparkle Nodes */}
    <circle cx="34" cy="30" r="2.5" fill="currentColor" />
    <circle cx="68" cy="28" r="2" fill="currentColor" />
    <circle cx="78" cy="52" r="1.5" fill="currentColor" />
    <circle cx="22" cy="56" r="1" fill="currentColor" />
  </svg>
);

// 5. Womb Healing Graphic (Sacred heart vessel with flanking swirls & moons)
const WombIcon = () => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 text-sage-dark transition-transform duration-300 group-hover:scale-105" fill="none" stroke="currentColor">
    {/* Inner blooming floral seed/ovule */}
    <circle cx="50" cy="50" r="5" fill="rgba(180, 150, 130, 0.2)" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="1.5" fill="currentColor" />

    {/* Symmetrical framing womb heart structure */}
    <path
      d="M 50,74 C 36,66 22,54 22,38 C 22,26 34,22 42,28 C 46,31 48,35 50,38 C 52,35 54,31 58,28 C 66,22 78,26 78,38 C 78,54 64,66 50,74 Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Symmetrical organic wings/swirls radiating downwards */}
    <path d="M 28,38 C 16,42 12,56 18,66 C 24,76 40,78 50,74" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 2" fill="none" />
    <path d="M 72,38 C 84,42 88,56 82,66 C 76,76 60,78 50,74" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 2" fill="none" />

    {/* Moon crescent at the base */}
    <path d="M 42,80 C 45,83 55,83 58,80 C 54,80 46,80 42,80 Z" fill="currentColor" />
  </svg>
);

// 6. Inner Child Healing Graphic (Baby/child's profile safely cupped inside protective hands)
const InnerChildIcon = () => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 text-teal-dark transition-transform duration-300 group-hover:scale-105" fill="none" stroke="currentColor">
    {/* Outer protective circle / halo */}
    <circle cx="50" cy="48" r="32" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />

    {/* Gentle child face profile / baby sleeping outline inside center */}
    <g transform="translate(4,-2)">
      {/* Head & face contour */}
      <path
        d="M 44,30 C 37,30 33,35 33,42 C 33,48 38,52 44,52 C 45,52 46,51 47,51 C 45,54 44,57 44,60 C 44,65 48,68 53,68 C 58,68 61,64 61,60 C 61,54 56,52 53,52"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(255,255,255,0.7)"
      />
      {/* Closed eye */}
      <path d="M 40,41 C 41,43 43,43 44,41" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Smiling mouth curve */}
      <path d="M 41,47 C 42,48 44,48 45,46" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </g>

    {/* Two large cupped hands cradling from the bottom */}
    <path
      d="M 22,62 C 24,78 44,82 50,82 C 56,82 76,78 78,62 C 72,66 64,64 50,72 C 36,64 28,66 22,62 Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="rgba(100, 180, 170, 0.08)"
    />

    {/* Sparkling celestial dots */}
    <circle cx="28" cy="32" r="1.5" fill="currentColor" />
    <circle cx="72" cy="32" r="1.5" fill="currentColor" />
    <path d="M 50,18 L 50,22 M 48,20 L 52,20" stroke="currentColor" strokeWidth="0.8" />
  </svg>
);

// 7. Trauma Healing Graphic (Strong deeply rooted tree of life representing somatic release and anchoring)
const TraumaIcon = () => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 text-ocean-dark transition-transform duration-300 group-hover:scale-105" fill="none" stroke="currentColor">
    {/* Tree Trunk & Roots */}
    <path
      d="M 46,75 C 47,65 44,55 42,48 C 45,44 55,44 58,48 C 56,55 53,65 54,75 C 60,78 68,79 72,83 M 28,83 C 32,79 40,78 46,75 M 50,75 C 50,82 50,84 50,86"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Rich detailed branch structures */}
    <path
      d="M 42,48 C 38,40 30,38 24,42 M 58,48 C 62,40 70,38 76,42 M 50,44 C 50,30 42,24 35,22 M 50,44 C 50,30 58,24 65,22 M 50,34 C 47,28 53,28 50,34 Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      fill="none"
    />

    {/* Canopy Leaf Clusters (Muted elegant dots & circles) */}
    <circle cx="24" cy="42" r="3.5" fill="rgba(80, 120, 160, 0.15)" stroke="currentColor" strokeWidth="1" />
    <circle cx="76" cy="42" r="3.5" fill="rgba(80, 120, 160, 0.15)" stroke="currentColor" strokeWidth="1" />
    <circle cx="35" cy="22" r="4" fill="rgba(80, 120, 160, 0.15)" stroke="currentColor" strokeWidth="1" />
    <circle cx="65" cy="22" r="4" fill="rgba(80, 120, 160, 0.15)" stroke="currentColor" strokeWidth="1" />
    <circle cx="50" cy="16" r="4.5" fill="rgba(80, 120, 160, 0.15)" stroke="currentColor" strokeWidth="1" />

    {/* Micro decorative leaves floating */}
    <path d="M 18,34 Q 15,30 22,30 Z" fill="currentColor" opacity="0.8" />
    <path d="M 82,34 Q 85,30 78,30 Z" fill="currentColor" opacity="0.8" />
  </svg>
);

// 8. Timeline Therapy Graphic (Elegant physical hourglass with flowing sand and subtle future wave)
const TimelineIcon = () => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 text-sage-dark transition-transform duration-300 group-hover:scale-105" fill="none" stroke="currentColor">
    {/* Hourglass outer Frame structure */}
    <g strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Top and Bottom solid plate bars */}
      <path d="M 28,18 L 72,18 M 28,78 L 72,78" />
      {/* Curvaceous glass body bulb shape */}
      <path d="M 32,20 C 34,42 46,45 46,48 C 46,51 34,54 32,76 C 32,76 32,76 32,76 M 68,20 C 66,42 54,45 54,48 C 54,51 66,54 68,76" fill="rgba(255,255,255,0.7)" />
    </g>

    {/* Side column pillar supports */}
    <line x1="26" y1="18" x2="26" y2="78" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="74" y1="18" x2="74" y2="78" stroke="currentColor" strokeWidth="1" opacity="0.5" />

    {/* Top Bulb filled sand */}
    <path d="M 35,24 C 37,34 46,38 48,38 C 50,38 59,34 61,24 Z" fill="rgba(140, 160, 130, 0.25)" stroke="currentColor" strokeWidth="1" />
    
    {/* Falling single stream sand line */}
    <line x1="50" y1="46" x2="50" y2="74" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" className="animate-pulse" />

    {/* Bottom Bulb piled sand */}
    <path d="M 35,74 C 42,70 58,70 65,74 Z" fill="rgba(140, 160, 130, 0.4)" stroke="currentColor" strokeWidth="1.2" />

    {/* Floating stars/clocks depicting timeline segments */}
    <circle cx="18" cy="48" r="1.5" fill="currentColor" />
    <circle cx="82" cy="48" r="1.5" fill="currentColor" />
  </svg>
);

// Beautiful custom hand-painted watercolor circles (symmetrical yet organic) for each ID
const WatercolorModalityRing = ({ id, index }: { id: string; index: number }) => {
  const rotationAngle = (index * 45) + 12; // Distinct organic rotation for each block

  return (
    <svg viewBox="0 0 200 200" style={{ transform: `rotate(${rotationAngle}deg)` }} className="absolute inset-0 w-full h-full select-none pointer-events-none transition-transform duration-1000 group-hover:rotate-[360deg]">
      <defs>
        {/* Beautiful hand-painted watercolor sage-green and tranquil-blue gradient */}
        <linearGradient id={`medallionGrad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8fa89b" /> {/* Soft Sage Green */}
          <stop offset="50%" stopColor="#6ea3a1" /> {/* Soft Mid Teal */}
          <stop offset="100%" stopColor="#4f9da6" /> {/* Tranquil Blue */}
        </linearGradient>
      </defs>
      <g stroke={`url(#medallionGrad-${id})`}>
        {/* Layer 1: Very wide, highly diluted wash layer to give the true watercolor aura spread */}
        <path
          d="M 100, 18 C 152, 16 186, 50 183, 102 C 180, 154 146, 184 98, 181 C 50, 178 16, 144 18, 96 C 20, 48 48, 20 100, 18 Z"
          fill="none"
          strokeWidth="30"
          strokeLinecap="round"
          className="opacity-[0.14] blur-[5px]"
        />

        {/* Layer 2: Core organic paint brush stroke with uneven distribution and natural wet look */}
        <path
          d="M 103, 22 C 146, 18 178, 54 176, 98 C 174, 142 142, 176 96, 172 C 50, 168 22, 134 26, 90 C 30, 46 60, 26 103, 22 Z"
          fill="none"
          strokeWidth="18"
          strokeLinecap="round"
          className="opacity-[0.35] blur-[1px]"
        />

        {/* Layer 3: Accent dry/wet hand paint stroke lines, running slightly off track to portray hand painted circle */}
        <path
          d="M 92, 28 C 138, 25 168, 58 165, 102 C 162, 146 128, 170 88, 164 C 48, 158 30, 122 34, 78 C 38, 34 46, 31 92, 28"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          className="opacity-[0.45]"
          strokeDasharray="140 30 80 40"
        />

        {/* Layer 4: Micro organic splatters or dry fiber runs */}
        <path
          d="M 105, 14 C 156, 18 180, 68 174, 115 C 168, 162 122, 182 82, 174 C 42, 166 18, 122 22, 75"
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="opacity-[0.55]"
          strokeDasharray="90 80 110 30"
        />
      </g>
    </svg>
  );
};

export default function ModalityCircle({ id, title, index }: ModalityCircleProps) {
  return (
    <motion.div 
      className="relative w-[114px] h-[114px] sm:w-[106px] sm:h-[106px] md:w-34 md:h-34 lg:w-38 lg:h-38 flex items-center justify-center mb-1 group"
      whileHover={{ 
        y: -6, 
        rotate: 3,
        scale: 1.05
      }}
      transition={{ 
        type: "spring", 
        stiffness: 150, 
        damping: 15 
      }}
    >
      {/* 1. Subtle glowing ring overlay */}
      <div className="absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-tr from-[#8fa89b]/25 to-[#4f9da6]/25 blur-[4px] sm:blur-[6px] group-hover:blur-[10px] group-hover:scale-110 opacity-70 transition-all duration-500 z-0" />
      
      {/* 2. Custom Hand painted watercolor ring with gradients */}
      <WatercolorModalityRing id={id} index={index} />

      {/* 3. Ripple animation on hover */}
      <div className="absolute inset-2 sm:inset-4 rounded-full border border-[#4f9da6]/40 opacity-0 group-hover:animate-ping duration-1000 pointer-events-none z-0" />

      {/* 4. Core perfect solid frame holding the high quality AI image */}
      <div className="absolute w-[100px] h-[100px] sm:w-[92px] sm:h-[92px] md:w-[108px] md:h-[108px] lg:w-[122px] lg:h-[122px] rounded-full bg-cream border border-gold-light/20 flex items-center justify-center shadow-md sm:shadow-lg transition-all duration-500 z-10 overflow-hidden">
        
        {/* The Ethereal AI-Generated Healing Image */}
        <ModalityImage 
          id={id} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover scale-[1.38] origin-center transition-transform duration-700 group-hover:scale-[1.5]"
        />

        {/* High contrast dark gradient overlay ensuring white text pops clearly */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/35 pointer-events-none z-10" />

        {/* Soft Inner gold inset ring */}
        <div className="absolute inset-1 sm:inset-1.5 border border-gold-light/25 rounded-full pointer-events-none z-20" />

        {/* Text inside the circle */}
        <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-2.5 text-center z-30">
          <p className="font-serif text-[11px] sm:text-[9.5px] md:text-[11.5px] lg:text-[12.5px] text-white font-bold leading-[1.15] tracking-tight drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] px-1 select-none">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
