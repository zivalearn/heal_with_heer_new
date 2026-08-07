import React from 'react';
import { motion } from 'motion/react';

// 1. Olive branch / Leaves SVG
const LeavesSVG = () => (
  <svg className="w-full h-full" viewBox="0 0 120 120" fill="currentColor">
    {/* Central stem */}
    <path
      d="M20,100 C40,80 60,50 80,20 C82,17 85,15 88,18 C91,21 88,25 85,28 C65,58 45,85 20,100 Z"
      opacity="0.75"
    />
    {/* Left leaves */}
    <path d="M40,75 C25,70 15,55 22,45 C32,38 45,52 48,65 C49,69 45,74 40,75 Z" />
    <path d="M60,55 C48,50 40,35 47,25 C57,18 68,32 70,45 C71,49 66,54 60,55 Z" />
    {/* Right leaves */}
    <path d="M55,80 C70,75 80,60 73,50 C63,43 50,57 47,70 C46,74 50,79 55,80 Z" />
    <path d="M75,60 C90,55 100,40 93,30 C83,23 70,37 67,50 C66,54 70,59 75,60 Z" />
    {/* Top leaf */}
    <path d="M82,25 C90,15 102,10 102,20 C102,30 90,38 82,25 Z" />
  </svg>
);

// 2. Nazar / Evil Eye Symbol SVG
const NazarSVG = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
    {/* Outer dark blue concentric circle */}
    <circle cx="50" cy="50" r="46" fill="#0c3d59" opacity="0.85" />
    {/* Middle turquoise/light blue circle */}
    <circle cx="50" cy="50" r="32" fill="#4ea1ae" opacity="0.9" />
    {/* Inner white circle */}
    <circle cx="50" cy="50" r="18" fill="#ffffff" />
    {/* Core dark pupil (with white highlight) */}
    <circle cx="50" cy="50" r="8" fill="#072a3a" />
    <circle cx="47" cy="47" r="2.5" fill="#ffffff" />
  </svg>
);

// 3. Crescent Moon with Stars SVG
const MoonStarsSVG = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
    {/* Beautiful crescent moon */}
    <path d="M40,20 C65,20 80,42 74,68 C68,94 38,102 20,85 C42,85 58,70 58,48 C58,32 50,22 40,20 Z" />
    {/* Little sparkles / stars */}
    <path d="M75,25 L77,29 L81,30 L77,31 L75,35 L73,31 L69,30 L73,29 Z" />
    <path d="M85,45 L86,48 L89,49 L86,50 L85,53 L84,50 L81,49 L84,48 Z" />
    <path d="M60,65 L61,67 L63,68 L61,69 L60,71 L59,69 L57,68 L59,67 Z" />
  </svg>
);

// 4. Comet / Shooting Star Spiral SVG
const ShootingStarSVG = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
    {/* The Spiral Tail */}
    <path
      d="M50,50 C30,50 25,75 45,80 C65,85 80,65 75,45 C70,25 40,20 30,40 C20,60 35,80 55,75 C70,70 75,50 65,35"
      strokeLinecap="round"
    />
    {/* The shooting star head (8-point star) */}
    <path
      d="M65,35 L68,25 L71,35 L81,38 L71,41 L68,51 L65,41 L55,38 Z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

// 5. Labyrinth / Sacred Spiral SVG (as seen on the red chakra)
const LabyrinthSpiralSVG = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3.5">
    <path
      d="M50,50 C48,45 42,45 40,50 C38,55 45,60 50,58 C58,55 58,42 50,38 C38,32 32,50 42,58 C55,68 70,55 68,40 C65,22 38,18 25,35 C10,55 25,82 50,80 C78,78 90,48 80,25"
      strokeLinecap="round"
    />
  </svg>
);

// 6. Lotus Flower SVG (Yellow chakra / spiritual lotus)
const LotusSVG = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
    {/* Center petal */}
    <path d="M50,20 C55,40 55,70 50,80 C45,70 45,40 50,20 Z" />
    {/* Inner side petals */}
    <path d="M50,32 C65,45 68,70 50,80 C32,70 35,45 50,32 Z" opacity="0.85" />
    {/* Middle side petals */}
    <path d="M50,42 C78,50 78,72 50,80 C22,72 22,50 50,42 Z" opacity="0.75" />
    {/* Horizontal base petals */}
    <path d="M50,55 C88,60 82,78 50,80 C18,78 12,60 50,55 Z" opacity="0.6" />
    {/* Bottom support leaf */}
    <path d="M30,80 C40,84 60,84 70,80 C60,76 40,76 30,80 Z" opacity="0.9" />
  </svg>
);

// 7. Celestial Sun SVG (Orange chakra)
const SunSVG = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
    <circle cx="50" cy="50" r="18" />
    {/* Rays */}
    <path d="M50,10 L53,22 L47,22 Z" />
    <path d="M50,90 L53,78 L47,78 Z" />
    <path d="M10,50 L22,53 L22,47 Z" />
    <path d="M90,50 L78,53 L78,47 Z" />
    {/* Diagonals */}
    <path d="M22,22 L32,30 L28,34 Z" />
    <path d="M78,78 L68,70 L72,66 Z" />
    <path d="M22,78 L30,68 L34,72 Z" />
    <path d="M78,22 L70,32 L66,28 Z" />
  </svg>
);

// 8. Dove of Peace / Divine Soul SVG (Purple chakra)
const DoveSVG = () => (
  <svg className="w-full h-full" viewBox="0 0 120 120" fill="currentColor">
    {/* Dove body and wings */}
    <path d="M30,65 C35,63 42,58 48,52 C45,42 42,28 50,22 C55,27 60,38 62,48 C72,42 85,32 95,28 C92,38 85,48 78,55 C88,58 102,60 108,68 C98,68 85,65 76,62 C74,72 70,85 62,95 C62,85 65,74 65,65 C55,68 45,72 30,65 Z" />
    {/* Olive branch in beak */}
    <path d="M108,68 C112,65 116,63 120,64 M114,66 C115,62 118,60 117,62 M116,65 C118,67 121,68 119,69" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// 9. Translucent/Aesthetic Smile / Sacred Smile motif
const CelestialSmileSVG = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3.5">
    {/* A halo circle */}
    <circle cx="50" cy="50" r="45" strokeDasharray="4 4" opacity="0.5" />
    {/* Closed peaceful smiling eyes */}
    <path d="M30,42 C33,48 41,48 44,42" strokeLinecap="round" />
    <path d="M56,42 C59,48 67,48 70,42" strokeLinecap="round" />
    {/* Beautiful smile */}
    <path d="M36,58 C42,68 58,68 64,58" strokeLinecap="round" />
    {/* Cheek stars */}
    <path d="M22,50 L24,51 L25,53 L26,51 L28,50 L26,49 L25,47 L24,49 Z" fill="currentColor" stroke="none" />
    <path d="M72,50 L74,51 L75,53 L76,51 L78,50 L76,49 L75,47 L74,49 Z" fill="currentColor" stroke="none" />
  </svg>
);

// 10. Handshake (Spiritual connection / partnership / union)
const HandshakeSVG = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="50" cy="50" r="45" strokeDasharray="6 3" opacity="0.3" />
    {/* Two clasped hands in outline */}
    <path d="M25,55 C35,55 38,45 48,45 C58,45 62,55 75,55" />
    <path d="M25,50 C35,50 38,40 48,40 C58,40 62,50 75,50" />
    <path d="M43,35 C41,40 41,46 43,51 M53,35 C55,40 55,46 53,51" />
    <path d="M33,45 C38,45 42,48 44,53 M63,45 C58,45 54,48 52,53" />
    {/* Sacred Heart */}
    <path d="M50,28 C48,25 45,25 45,28 C45,32 50,36 50,36 C50,36 55,32 55,28 C55,25 52,25 50,28 Z" fill="currentColor" stroke="none" />
  </svg>
);

// 11. Infinity Symbol (Endless cosmic flow / balance)
const InfinitySVG = () => (
  <svg className="w-full h-full" viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
    <path d="M30,40 C10,15 10,65 30,40 C50,15 70,65 90,40 C110,15 110,65 90,40 C70,15 50,65 30,40 Z" />
    {/* Sparkle details */}
    <circle cx="60" cy="40" r="3" fill="currentColor" stroke="none" />
  </svg>
);

// 12. Celestial Sparkle Star
const SparkleSVG = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
    <path d="M50,10 C50,35 35,50 10,50 C35,50 50,65 50,90 C50,65 65,50 90,50 C65,50 50,35 50,10 Z" />
  </svg>
);

// 13. Sacred Feather / Light Feather
const FeatherSVG = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    {/* Central Quill */}
    <path d="M20,80 C35,70 65,40 80,20" />
    {/* Feathery Barbs */}
    <path d="M32,68 C22,60 28,52 38,55" />
    <path d="M42,58 C32,48 38,40 48,45" />
    <path d="M52,48 C42,38 48,30 58,35" />
    <path d="M62,38 C54,28 60,22 68,26" />
    {/* Opposing Side Barbs */}
    <path d="M35,67 C45,71 42,61 40,58" />
    <path d="M45,57 C55,61 52,51 50,48" />
    <path d="M55,47 C65,51 62,41 60,38" />
  </svg>
);

// 14. Heart Symbol (Love, kindness, support)
const HeartSVG = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
    <path d="M50,30 C50,30 45,15 30,15 C15,15 5,28 5,45 C5,65 30,85 50,90 C70,85 95,65 95,45 C95,28 85,15 70,15 C55,15 50,30 50,30 Z" />
  </svg>
);

// 15. Sprout Symbol (New beginnings, growth, wellness)
const SproutSVG = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50,90 L50,45 C50,35 60,30 75,30" />
    <path d="M50,45 C50,35 40,30 25,30" />
    <path d="M50,65 C35,65 25,55 25,45" />
    <path d="M50,65 C65,65 75,55 75,45" />
  </svg>
);

// 16. Cloud Symbol (Calmness, lightness, peace)
const CloudSVG = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <path d="M25,60 C20,60 15,55 15,48 C15,41 20,36 26,36 C29,26 38,18 48,18 C57,18 65,24 68,32 C72,28 78,26 83,26 C90,26 95,31 95,38 C95,45 90,50 83,50" />
    <path d="M25,60 L83,60" />
  </svg>
);

// 17. Butterfly Symbol (Transformation, grace, joy)
const ButterflySVG = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50,35 C42,25 24,15 18,25 C12,35 28,45 48,45" />
    <path d="M50,45 C38,48 25,58 23,65 C21,72 35,72 46,56" />
    <path d="M50,35 C58,25 76,15 82,25 C88,35 72,45 52,45" />
    <path d="M50,45 C62,48 75,58 77,65 C79,72 65,72 54,56" />
    <line x1="50" y1="25" x2="50" y2="75" />
  </svg>
);

// 18. Sacred Shell Symbol (Nature, protection, whisper of peace)
const ShellSVG = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M50,85 C28,80 16,58 20,38 C23,24 35,15 50,15 C65,15 77,24 80,38 C84,58 72,80 50,85 Z" />
    <path d="M50,85 L50,15" />
    <path d="M50,85 C42,65 32,45 32,15" />
    <path d="M50,85 C58,65 68,45 68,15" />
  </svg>
);

export interface SymbolInstance {
  id: string;
  type: 'leaves' | 'nazar' | 'moon' | 'comet' | 'labyrinth' | 'lotus' | 'sun' | 'dove' | 'smile' | 'handshake' | 'infinity' | 'sparkle' | 'feather' | 'heart' | 'sprout' | 'cloud' | 'butterfly' | 'shell';
  size: number; // in pixels
  top: string;  // e.g. "15%"
  left: string; // e.g. "20%"
  colorClass: string; // e.g. "text-teal-soft"
  animationDelay: string; // e.g. "1s"
  animationDuration: string; // e.g. "12s"
  animationClass: string; // e.g. "animate-float-slow"
}

// Preset layout of background symbols: highly complete, deeply aesthetic, and very soft opacities for ethereal floating look
const PRESET_SYMBOLS: SymbolInstance[] = [
  {
    id: 'sym-1',
    type: 'leaves',
    size: 55,
    top: '6%',
    left: '4%',
    colorClass: 'text-sage/20',
    animationDelay: '0s',
    animationDuration: '14s',
    animationClass: 'animate-float-slow'
  },
  {
    id: 'sym-3',
    type: 'moon',
    size: 58,
    top: '38%',
    left: '3%',
    colorClass: 'text-gold/22',
    animationDelay: '3s',
    animationDuration: '18s',
    animationClass: 'animate-float-sway'
  },
  {
    id: 'sym-4',
    type: 'comet',
    size: 60,
    top: '28%',
    left: '92%',
    colorClass: 'text-teal-soft/18',
    animationDelay: '0.8s',
    animationDuration: '15s',
    animationClass: 'animate-float-rotate'
  },
  {
    id: 'sym-5',
    type: 'labyrinth',
    size: 48,
    top: '75%',
    left: '8%',
    colorClass: 'text-sage/20',
    animationDelay: '2.5s',
    animationDuration: '13s',
    animationClass: 'animate-float-slow'
  },
  {
    id: 'sym-6',
    type: 'lotus',
    size: 52,
    top: '84%',
    left: '82%',
    colorClass: 'text-gold/24',
    animationDelay: '1s',
    animationDuration: '17s',
    animationClass: 'animate-float-sway'
  },
  {
    id: 'sym-7',
    type: 'sun',
    size: 50,
    top: '52%',
    left: '94%',
    colorClass: 'text-gold/18',
    animationDelay: '4.2s',
    animationDuration: '19s',
    animationClass: 'animate-float-rotate'
  },
  {
    id: 'sym-8',
    type: 'dove',
    size: 48,
    top: '62%',
    left: '32%',
    colorClass: 'text-teal-soft/18',
    animationDelay: '2s',
    animationDuration: '20s',
    animationClass: 'animate-float-medium'
  },
  {
    id: 'sym-9',
    type: 'smile',
    size: 54,
    top: '20%',
    left: '45%',
    colorClass: 'text-teal-soft/20',
    animationDelay: '1.2s',
    animationDuration: '16s',
    animationClass: 'animate-float-sway'
  },
  {
    id: 'sym-10',
    type: 'handshake',
    size: 55,
    top: '78%',
    left: '48%',
    colorClass: 'text-sage/20',
    animationDelay: '3.1s',
    animationDuration: '15s',
    animationClass: 'animate-float-slow'
  },
  {
    id: 'sym-11',
    type: 'infinity',
    size: 68,
    top: '12%',
    left: '28%',
    colorClass: 'text-gold/18',
    animationDelay: '2.2s',
    animationDuration: '18s',
    animationClass: 'animate-float-sway'
  },
  {
    id: 'sym-12',
    type: 'sparkle',
    size: 40,
    top: '34%',
    left: '18%',
    colorClass: 'text-teal-soft/22',
    animationDelay: '0.5s',
    animationDuration: '11s',
    animationClass: 'animate-float-rotate'
  },
  {
    id: 'sym-13',
    type: 'feather',
    size: 48,
    top: '88%',
    left: '18%',
    colorClass: 'text-sage/20',
    animationDelay: '1.8s',
    animationDuration: '16s',
    animationClass: 'animate-float-medium'
  },
  {
    id: 'sym-14',
    type: 'leaves',
    size: 40,
    top: '46%',
    left: '85%',
    colorClass: 'text-sage/18',
    animationDelay: '2.8s',
    animationDuration: '13s',
    animationClass: 'animate-float-slow'
  },
  {
    id: 'sym-15',
    type: 'heart',
    size: 42,
    top: '15%',
    left: '12%',
    colorClass: 'text-gold/18',
    animationDelay: '1.5s',
    animationDuration: '16s',
    animationClass: 'animate-float-sway'
  },
  {
    id: 'sym-16',
    type: 'sprout',
    size: 45,
    top: '5%',
    left: '22%',
    colorClass: 'text-sage/20',
    animationDelay: '2.4s',
    animationDuration: '14s',
    animationClass: 'animate-float-slow'
  },
  {
    id: 'sym-17',
    type: 'cloud',
    size: 55,
    top: '10%',
    left: '72%',
    colorClass: 'text-teal-soft/18',
    animationDelay: '1s',
    animationDuration: '18s',
    animationClass: 'animate-float-medium'
  },
  {
    id: 'sym-18',
    type: 'butterfly',
    size: 46,
    top: '22%',
    left: '88%',
    colorClass: 'text-gold/20',
    animationDelay: '0.5s',
    animationDuration: '15s',
    animationClass: 'animate-float-sway'
  },
  {
    id: 'sym-19',
    type: 'shell',
    size: 44,
    top: '68%',
    left: '88%',
    colorClass: 'text-sage/18',
    animationDelay: '3.5s',
    animationDuration: '17s',
    animationClass: 'animate-float-slow'
  },
  {
    id: 'sym-20',
    type: 'heart',
    size: 40,
    top: '85%',
    left: '28%',
    colorClass: 'text-teal-soft/22',
    animationDelay: '1.2s',
    animationDuration: '13s',
    animationClass: 'animate-float-medium'
  },
  {
    id: 'sym-21',
    type: 'sprout',
    size: 45,
    top: '50%',
    left: '12%',
    colorClass: 'text-sage/20',
    animationDelay: '2.8s',
    animationDuration: '15s',
    animationClass: 'animate-float-sway'
  },
  {
    id: 'sym-22',
    type: 'cloud',
    size: 50,
    top: '64%',
    left: '4%',
    colorClass: 'text-teal-soft/18',
    animationDelay: '0.2s',
    animationDuration: '19s',
    animationClass: 'animate-float-slow'
  },
  {
    id: 'sym-23',
    type: 'butterfly',
    size: 48,
    top: '42%',
    left: '26%',
    colorClass: 'text-gold/18',
    animationDelay: '1.8s',
    animationDuration: '22s',
    animationClass: 'animate-float-rotate'
  },
  {
    id: 'sym-24',
    type: 'shell',
    size: 46,
    top: '90%',
    left: '68%',
    colorClass: 'text-sage/20',
    animationDelay: '2.5s',
    animationDuration: '14s',
    animationClass: 'animate-float-medium'
  },
  {
    id: 'sym-25',
    type: 'sparkle',
    size: 36,
    top: '8%',
    left: '50%',
    colorClass: 'text-gold/24',
    animationDelay: '0.8s',
    animationDuration: '12s',
    animationClass: 'animate-float-rotate'
  },
  {
    id: 'sym-26',
    type: 'infinity',
    size: 60,
    top: '94%',
    left: '42%',
    colorClass: 'text-teal-soft/18',
    animationDelay: '2s',
    animationDuration: '16s',
    animationClass: 'animate-float-sway'
  },
  {
    id: 'sym-27',
    type: 'smile',
    size: 52,
    top: '76%',
    left: '60%',
    colorClass: 'text-gold/18',
    animationDelay: '3s',
    animationDuration: '15s',
    animationClass: 'animate-float-slow'
  },
  {
    id: 'sym-28',
    type: 'dove',
    size: 46,
    top: '20%',
    left: '64%',
    colorClass: 'text-teal-soft/20',
    animationDelay: '1.4s',
    animationDuration: '18s',
    animationClass: 'animate-float-medium'
  },
  {
    id: 'sym-29',
    type: 'comet',
    size: 52,
    top: '48%',
    left: '58%',
    colorClass: 'text-gold/15',
    animationDelay: '2.8s',
    animationDuration: '17s',
    animationClass: 'animate-float-sway'
  },
  {
    id: 'sym-30',
    type: 'lotus',
    size: 44,
    top: '56%',
    left: '22%',
    colorClass: 'text-gold/22',
    animationDelay: '0.5s',
    animationDuration: '14s',
    animationClass: 'animate-float-medium'
  },
  {
    id: 'sym-31',
    type: 'feather',
    size: 46,
    top: '32%',
    left: '52%',
    colorClass: 'text-sage/20',
    animationDelay: '1.9s',
    animationDuration: '16s',
    animationClass: 'animate-float-slow'
  },
  {
    id: 'sym-32',
    type: 'leaves',
    size: 45,
    top: '82%',
    left: '95%',
    colorClass: 'text-sage/18',
    animationDelay: '2.2s',
    animationDuration: '15s',
    animationClass: 'animate-float-sway'
  }
];

export default function FloatingSymbols() {
  const renderIcon = (type: string) => {
    switch (type) {
      case 'leaves':
        return <LeavesSVG />;
      case 'nazar':
        return <NazarSVG />;
      case 'moon':
        return <MoonStarsSVG />;
      case 'comet':
        return <ShootingStarSVG />;
      case 'labyrinth':
        return <LabyrinthSpiralSVG />;
      case 'lotus':
        return <LotusSVG />;
      case 'sun':
        return <SunSVG />;
      case 'dove':
        return <DoveSVG />;
      case 'smile':
        return <CelestialSmileSVG />;
      case 'handshake':
        return <HandshakeSVG />;
      case 'infinity':
        return <InfinitySVG />;
      case 'sparkle':
        return <SparkleSVG />;
      case 'feather':
        return <FeatherSVG />;
      case 'heart':
        return <HeartSVG />;
      case 'sprout':
        return <SproutSVG />;
      case 'cloud':
        return <CloudSVG />;
      case 'butterfly':
        return <ButterflySVG />;
      case 'shell':
        return <ShellSVG />;
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
      {PRESET_SYMBOLS.map((symbol) => (
        <div
          key={symbol.id}
          className={`absolute ${symbol.colorClass} ${symbol.animationClass}`}
          style={{
            top: symbol.top,
            left: symbol.left,
            width: `${symbol.size}px`,
            height: `${symbol.size}px`,
            animationDelay: symbol.animationDelay,
            animationDuration: symbol.animationDuration,
          }}
        >
          {renderIcon(symbol.type)}
        </div>
      ))}
    </div>
  );
}
