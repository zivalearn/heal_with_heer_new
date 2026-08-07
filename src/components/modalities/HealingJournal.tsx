import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Sparkles, Heart, Compass, Eye, Sun, Moon, 
  ChevronLeft, ChevronRight, ArrowRight, CornerRightDown 
} from 'lucide-react';

interface HealingJournalProps {
  onBook: (modalityName: string) => void;
}

interface Service {
  title: string;
  duration: string;
  price: string;
  desc: string;
  quote: string;
  bgGradient: string;
  image: string;
}

const SERVICES: Service[] = [
  {
    title: 'The Phoenix Within',
    duration: '1 Hour',
    price: '₹15,000 | USD $150',
    desc: 'Trauma often leaves invisible wounds that continue to shape our emotions, relationships, confidence, and daily life. This intensive healing experience is designed to gently release stored emotional pain, limiting beliefs, subconscious fears, and unresolved experiences while creating space for inner peace, emotional freedom, and lasting transformation.',
    quote: 'Reclaim your light from the ashes of yesterday.',
    bgGradient: 'from-amber-500/10 via-yellow-500/5 to-orange-500/5',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Sacred Love Blueprint',
    duration: '1 Hour 15 Mins',
    price: '₹12,000 | USD $120',
    desc: 'Designed for individuals who wish to attract healthier relationships, heal attachment patterns, overcome heartbreak, improve self-worth, and create deeper emotional connections. This session helps transform your relationship with yourself first—allowing healthier relationships with others to naturally follow.',
    quote: 'Transform your relationship with yourself, and sacred love follows.',
    bgGradient: 'from-rose-500/10 via-pink-500/5 to-amber-500/5',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Together Forever',
    duration: '1 Hour 15 Mins',
    price: '₹20,000 | USD $200',
    desc: "A transformational session for couples seeking deeper communication, emotional healing, conflict resolution, trust rebuilding, and stronger intimacy. Together, you'll identify underlying relationship patterns and learn practical tools to reconnect with compassion, understanding, and love.",
    quote: 'Reconnect with compassion, understanding, and divine trust.',
    bgGradient: 'from-emerald-500/10 via-teal-500/5 to-cyan-500/5',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Inner Child Rebirth',
    duration: '45 Mins',
    price: '₹8,000 | USD $80',
    desc: 'Many of our adult struggles originate in childhood experiences. This healing session helps release emotional wounds connected to childhood memories, parental relationships, rejection, abandonment, criticism, or emotional neglect, allowing you to move forward with greater confidence and emotional freedom.',
    quote: 'Hold your younger self gently. You are safe and sovereign now.',
    bgGradient: 'from-lime-500/10 via-emerald-500/5 to-teal-500/5',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Abundance Awakening',
    duration: '1 Hour',
    price: '₹15,000 | USD $150',
    desc: 'Financial success begins with your subconscious beliefs. This session helps identify and heal limiting money patterns, scarcity programming, fear of success, self-worth issues, and energetic blocks that may be preventing you from receiving greater abundance and prosperity.',
    quote: 'Dismantle scarcity. Align with the infinite flow of prosperity.',
    bgGradient: 'from-amber-500/10 via-yellow-500/5 to-emerald-500/5',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Soul Frequency',
    duration: '1 Hour 15 Mins',
    price: '₹12,000 | USD $120',
    desc: 'Experience profound energetic healing through your chosen modality (Akashic Records Reading, Reiki Energy Healing, or Other Premium Modalities). Each session is uniquely customized to provide clarity, energetic alignment, emotional healing, spiritual insight, and deeper connection with your highest self.',
    quote: 'Harmonize your frequency with your highest divine timeline.',
    bgGradient: 'from-purple-500/10 via-indigo-500/5 to-amber-500/5',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'HeartBridge',
    duration: '1 Hour 15 Mins',
    price: '₹10,000 | USD $100',
    desc: 'Strengthen the emotional connection between parent and child by healing misunderstandings, communication gaps, emotional distance, behavioral challenges, and unresolved family dynamics. This session encourages trust, compassion, and a healthier lifelong relationship.',
    quote: 'Bridge generational divides with open hearts and deep listening.',
    bgGradient: 'from-sky-500/10 via-blue-500/5 to-teal-500/5',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Womb of Light',
    duration: '1 Hour 15 Mins',
    price: '₹12,000 | USD $120',
    desc: 'A nurturing healing experience created for expecting mothers to foster a deeper emotional and energetic bond with their unborn child. This session promotes relaxation, emotional balance, positive pregnancy energy, and a peaceful environment for both mother and baby.',
    quote: 'Create an energetic sanctuary of warmth for mother and child.',
    bgGradient: 'from-rose-500/10 via-pink-500/5 to-amber-500/5',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
  }
];

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

export default function HealingJournal({ onBook }: HealingJournalProps) {
  const [currentPage, setCurrentPage] = useState<number>(1); // 0 = Cover, 1 to 6 = Spreads, 7 = Back Cover
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate golden particles during page turn
  const triggerParticles = () => {
    const newParticles: Particle[] = Array.from({ length: 18 }).map((_, i) => ({
      id: Date.now() + i,
      x: 10 + Math.random() * 80, // percentage x
      y: 60 + Math.random() * 30, // percentage y
      size: 2 + Math.random() * 5, // size in px
      duration: 1 + Math.random() * 1.5 // duration in s
    }));
    setParticles(newParticles);
    setTimeout(() => {
      setParticles([]);
    }, 2500);
  };

  const handleNextPage = () => {
    if (isFlipping || currentPage >= SERVICES.length + 1) return;
    setIsFlipping(true);
    setFlipDirection('next');
    triggerParticles();
    
    // Page flip transition duration matches 800ms
    setTimeout(() => {
      setCurrentPage(prev => prev + 1);
      setIsFlipping(false);
      setFlipDirection(null);
    }, 850);
  };

  const handlePrevPage = () => {
    if (isFlipping || currentPage <= 0) return;
    setIsFlipping(true);
    setFlipDirection('prev');
    triggerParticles();
    
    setTimeout(() => {
      setCurrentPage(prev => prev - 1);
      setIsFlipping(false);
      setFlipDirection(null);
    }, 850);
  };

  // Helper to render botanical sketch illustration on corners
  const renderBotanicalSketch = (position: 'tl' | 'tr' | 'bl' | 'br', color: string = 'text-sage/30') => {
    const isLeft = position.endsWith('l');
    const isTop = position.startsWith('t');
    
    return (
      <svg 
        className={`absolute w-36 h-36 pointer-events-none select-none opacity-45 ${color} ${
          isTop ? 'top-0' : 'bottom-0'
        } ${
          isLeft ? 'left-0' : 'right-0'
        } ${
          isTop && isLeft ? 'transform rotate-0' :
          isTop && !isLeft ? 'transform scale-x-[-1]' :
          !isTop && isLeft ? 'transform scale-y-[-1]' :
          'transform scale-[-1]'
        }`}
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 0,0 C 40,10 65,30 70,60 C 72,70 65,80 50,85" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
        <path d="M 30,15 C 45,25 40,35 32,30" stroke="currentColor" strokeWidth="0.5" />
        <path d="M 52,32 C 60,40 50,45 44,38" stroke="currentColor" strokeWidth="0.5" />
        <path d="M 64,48 C 75,55 65,65 58,58" stroke="currentColor" strokeWidth="0.5" />
        {/* Soft detailed leaf contours */}
        <path d="M 32,30 C 25,25 22,18 28,15 C 34,12 36,22 32,30 Z" fill="currentColor" fillOpacity="0.06" />
        <path d="M 44,38 C 38,32 35,25 41,22 C 47,19 48,30 44,38 Z" fill="currentColor" fillOpacity="0.06" />
        <path d="M 58,58 C 50,52 46,45 52,42 C 58,39 60,50 58,58 Z" fill="currentColor" fillOpacity="0.06" />
        {/* Small wildflower details */}
        <circle cx="35" cy="18" r="1.5" fill="currentColor" fillOpacity="0.3" />
        <circle cx="46" cy="25" r="1.5" fill="currentColor" fillOpacity="0.3" />
        <circle cx="56" cy="45" r="2.0" fill="currentColor" fillOpacity="0.2" />
      </svg>
    );
  };

  // Render high fidelity watercolor SVGs for left page of chapters
  const renderWatercolorIllustration = (idx: number) => {
    switch (idx) {
      case 0: // Somatic Healing Integration
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
            <defs>
              <filter id="blur-wc-1" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="15" />
              </filter>
            </defs>
            {/* Blurry watercolor splashes */}
            <circle cx="80" cy="100" r="45" fill="#7da086" filter="url(#blur-wc-1)" opacity="0.35" />
            <circle cx="130" cy="90" r="40" fill="#c0942c" filter="url(#blur-wc-1)" opacity="0.25" />
            <circle cx="100" cy="130" r="50" fill="#2f6d73" filter="url(#blur-wc-1)" opacity="0.3" />
            
            {/* Fine hand-drawn ink overlay */}
            <g stroke="#0a252c" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" opacity="0.75">
              {/* Figure in meditation */}
              <path d="M 100,125 C 85,125 75,130 65,145 M 100,125 C 115,125 125,130 135,145 M 60,145 L 140,145" />
              <circle cx="100" cy="105" r="6" />
              <path d="M 98,111 L 102,111 L 100,125 Z" />
              
              {/* Organic roots growing downwards */}
              <path d="M 100,145 C 95,155 85,160 80,172" />
              <path d="M 100,145 C 105,155 115,160 120,172" strokeWidth="0.5" />
              <path d="M 95,145 C 93,152 90,158 88,168" strokeWidth="0.5" />
              <path d="M 105,145 C 107,152 110,158 112,168" strokeWidth="0.5" />
              
              {/* Surrounding delicate sensory aura ring */}
              <circle cx="100" cy="115" r="42" stroke="#c0942c" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.6" />
              <circle cx="100" cy="115" r="32" stroke="#7da086" strokeWidth="0.5" opacity="0.4" />
            </g>
            <circle cx="100" cy="115" r="3" fill="#c0942c" className="animate-pulse" />
          </svg>
        );
      case 1: // Inner Child & Parts Work
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
            <defs>
              <filter id="blur-wc-2" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="15" />
              </filter>
            </defs>
            <circle cx="70" cy="110" r="45" fill="#f472b6" filter="url(#blur-wc-2)" opacity="0.25" />
            <circle cx="120" cy="90" r="45" fill="#fbcfe8" filter="url(#blur-wc-2)" opacity="0.35" />
            <circle cx="100" cy="125" r="40" fill="#c0942c" filter="url(#blur-wc-2)" opacity="0.2" />

            <g stroke="#0a252c" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" opacity="0.75">
              {/* Open vintage birdcage with plants growing out */}
              <path d="M 85,150 L 115,150 L 115,105 C 115,90 85,90 85,105 Z" fill="none" />
              <path d="M 92,150 L 92,100" strokeWidth="0.5" />
              <path d="M 100,150 L 100,95" strokeWidth="0.5" />
              <path d="M 108,150 L 108,100" strokeWidth="0.5" />
              <circle cx="100" cy="90" r="2.5" />
              <path d="M 85,120 L 70,110 L 73,125" /> {/* Swinging open door */}
              
              {/* Flourishing vines climbing inside and out */}
              <path d="M 100,150 Q 88,135 90,120 T 78,105" stroke="#7da086" strokeWidth="1" />
              <circle cx="78" cy="105" r="1.5" fill="#7da086" />
              <path d="M 100,150 Q 112,130 110,115 T 125,95" stroke="#7da086" strokeWidth="1" />
              <circle cx="125" cy="95" r="1.5" fill="#7da086" />
              
              {/* Flying golden butterfly */}
              <path d="M 130,80 Q 125,75 128,70 Q 131,75 135,72 Q 133,78 130,80 Z" fill="#c0942c" stroke="#c0942c" strokeWidth="0.5" />
              <path d="M 142,95 Q 138,91 140,87 Q 143,91 147,89 Q 145,94 142,95 Z" fill="#f472b6" stroke="#f472b6" strokeWidth="0.5" />
            </g>
          </svg>
        );
      case 2: // EFT Tapping & Release
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
            <defs>
              <filter id="blur-wc-3" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="16" />
              </filter>
            </defs>
            <circle cx="80" cy="90" r="40" fill="#38bdf8" filter="url(#blur-wc-3)" opacity="0.3" />
            <circle cx="120" cy="110" r="45" fill="#7da086" filter="url(#blur-wc-3)" opacity="0.25" />
            <circle cx="100" cy="130" r="35" fill="#c0942c" filter="url(#blur-wc-3)" opacity="0.2" />

            <g stroke="#0a252c" strokeWidth="0.75" strokeLinecap="round" opacity="0.75">
              {/* Swirling energy currents represented by fine flow lines */}
              <path d="M 50,130 Q 80,105 110,120 T 170,95" strokeWidth="0.5" />
              <path d="M 40,110 Q 75,130 110,100 T 160,115" strokeWidth="0.8" />
              <path d="M 60,85 Q 90,115 125,85 T 150,100" strokeWidth="0.5" strokeDasharray="3 4" />
              
              {/* Delicate water ripple circles around central points */}
              <ellipse cx="110" cy="100" rx="15" ry="6" stroke="#c0942c" strokeWidth="0.5" opacity="0.6" />
              <ellipse cx="110" cy="100" rx="25" ry="10" stroke="#c0942c" strokeWidth="0.5" opacity="0.3" />
              <ellipse cx="75" cy="130" rx="12" ry="5" stroke="#7da086" strokeWidth="0.5" opacity="0.5" />
              
              {/* Sprouting flower nodes */}
              <circle cx="110" cy="100" r="2" fill="#c0942c" />
              <circle cx="75" cy="130" r="1.5" fill="#7da086" />
              <circle cx="125" cy="85" r="2" fill="#38bdf8" />
            </g>
          </svg>
        );
      case 3: // Trauma-Informed Life Coaching
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
            <defs>
              <filter id="blur-wc-4" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="15" />
              </filter>
            </defs>
            <circle cx="90" cy="80" r="45" fill="#2f6d73" filter="url(#blur-wc-4)" opacity="0.3" />
            <circle cx="120" cy="120" r="40" fill="#c0942c" filter="url(#blur-wc-4)" opacity="0.25" />
            <circle cx="70" cy="115" r="35" fill="#7da086" filter="url(#blur-wc-4)" opacity="0.25" />

            {/* Glowing path towards a mountain top */}
            <g stroke="#0a252c" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" opacity="0.75">
              {/* Mountain ridge outline */}
              <path d="M 40,150 L 80,105 L 110,125 L 155,80 L 175,110" fill="none" strokeWidth="1" />
              
              {/* Rising Sun ray lines */}
              <line x1="155" y1="80" x2="145" y2="65" stroke="#c0942c" strokeWidth="0.5" />
              <line x1="155" y1="80" x2="165" y2="65" stroke="#c0942c" strokeWidth="0.5" />
              <line x1="155" y1="80" x2="135" y2="78" stroke="#c0942c" strokeWidth="0.5" />
              <line x1="155" y1="80" x2="175" y2="78" stroke="#c0942c" strokeWidth="0.5" />
              
              {/* A person standing atop the peak, hands open */}
              <circle cx="155" cy="73" r="2" />
              <path d="M 155,75 L 155,80 M 151,77 Q 155,76 159,77 M 153,80 L 151,84 M 157,80 L 159,84" strokeWidth="0.5" />

              {/* Safe pathway looping up */}
              <path d="M 45,150 C 65,145 70,135 85,130 C 100,125 110,118 125,110 C 140,102 145,92 153,82" stroke="#c0942c" strokeWidth="0.75" strokeDasharray="2 3" />
            </g>
          </svg>
        );
      case 4: // Nervous System Recovery Session
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
            <defs>
              <filter id="blur-wc-5" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="15" />
              </filter>
            </defs>
            <circle cx="100" cy="110" r="50" fill="#2f6d73" filter="url(#blur-wc-5)" opacity="0.35" />
            <circle cx="70" cy="90" r="35" fill="#7da086" filter="url(#blur-wc-5)" opacity="0.25" />
            <circle cx="130" cy="100" r="40" fill="#fbcfe8" filter="url(#blur-wc-5)" opacity="0.2" />

            <g stroke="#0a252c" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" opacity="0.75">
              {/* Floating Lotus under Crescent Moon */}
              <path d="M 100,70 A 10,10 0 0,1 110,60 A 8,8 0 0,0 102,62 A 10,10 0 0,0 100,70 Z" fill="#c0942c" stroke="none" />
              
              {/* Gentle lake ripples */}
              <path d="M 50,140 Q 100,130 150,140" strokeWidth="0.5" />
              <path d="M 65,148 Q 100,142 135,148" strokeWidth="0.5" />
              <path d="M 40,132 Q 100,125 160,132" strokeWidth="0.5" strokeDasharray="3 5" />
              
              {/* Beautiful floating lotus blossom */}
              <g transform="translate(100, 115) scale(0.65)" className="text-[#0a252c]">
                <path d="M -20,10 C -12,4 -5,0 0,12 C 5,0 12,4 20,10 C 15,2 5,-5 0,12 C -5,-5 -15,2 -20,10 Z" fill="#faf6e8" />
                <path d="M -15,12 C -10,7 -4,4 0,12 C 4,4 10,7 15,12 C 10,6 4,0 0,12 C -4,0 -10,6 -15,12 Z" fill="#fbcfe8" />
                <circle cx="0" cy="11" r="2" fill="#c0942c" stroke="none" />
              </g>
            </g>
          </svg>
        );
      case 5: // Generational Healing Circle
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
            <defs>
              <filter id="blur-wc-6" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="15" />
              </filter>
            </defs>
            <circle cx="100" cy="100" r="55" fill="#c0942c" filter="url(#blur-wc-6)" opacity="0.2" />
            <circle cx="80" cy="110" r="40" fill="#7da086" filter="url(#blur-wc-6)" opacity="0.25" />
            <circle cx="120" cy="90" r="40" fill="#2f6d73" filter="url(#blur-wc-6)" opacity="0.25" />

            <g stroke="#0a252c" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" opacity="0.75">
              {/* Sacred concentric circular rings resembling ancient tree lines or mandalas */}
              <circle cx="100" cy="100" r="48" strokeWidth="0.5" strokeDasharray="2 4" />
              <circle cx="100" cy="100" r="38" strokeWidth="0.5" opacity="0.6" />
              <circle cx="100" cy="100" r="26" strokeWidth="0.5" strokeDasharray="4 3" />
              <circle cx="100" cy="100" r="14" strokeWidth="0.5" opacity="0.4" />
              
              {/* Radiating root fibers reaching outward, representing ancestral connections */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 45 * Math.PI) / 180;
                const x1 = 100 + 14 * Math.cos(angle);
                const y1 = 100 + 14 * Math.sin(angle);
                const x2 = 100 + 44 * Math.cos(angle);
                const y2 = 100 + 44 * Math.sin(angle);
                
                // Add natural wave to rays
                const mx = 100 + 28 * Math.cos(angle) + 4 * Math.sin(angle);
                const my = 100 + 28 * Math.sin(angle) - 4 * Math.cos(angle);
                
                return (
                  <path 
                    key={i} 
                    d={`M ${x1},${y1} Q ${mx},${my} ${x2},${y2}`} 
                    strokeWidth={0.5} 
                    strokeDasharray={i % 2 === 0 ? '' : '2 3'}
                  />
                );
              })}
              
              {/* Glowing sovereign central seed */}
              <circle cx="100" cy="100" r="3.5" fill="#c0942c" />
              <circle cx="100" cy="100" r="7" stroke="#c0942c" strokeWidth="0.5" className="animate-pulse" />
            </g>
          </svg>
        );
      case 6: // HeartBridge
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
            <defs>
              <filter id="blur-wc-7" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="15" />
              </filter>
            </defs>
            <circle cx="85" cy="95" r="45" fill="#38bdf8" filter="url(#blur-wc-7)" opacity="0.25" />
            <circle cx="115" cy="105" r="45" fill="#c0942c" filter="url(#blur-wc-7)" opacity="0.25" />
            <g stroke="#0a252c" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" opacity="0.75">
              <path d="M 60,110 C 80,80 120,80 140,110" stroke="#c0942c" strokeWidth="1" fill="none" />
              <path d="M 50,120 C 80,100 120,100 150,120" stroke="#0284c7" strokeWidth="0.75" fill="none" strokeDasharray="3 3" />
              <circle cx="100" cy="92" r="3" fill="#c0942c" />
            </g>
          </svg>
        );
      case 7: // Womb of Light
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
            <defs>
              <filter id="blur-wc-8" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="15" />
              </filter>
            </defs>
            <circle cx="100" cy="100" r="50" fill="#f472b6" filter="url(#blur-wc-8)" opacity="0.25" />
            <circle cx="100" cy="100" r="30" fill="#fef08a" filter="url(#blur-wc-8)" opacity="0.3" />
            <g stroke="#0a252c" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" opacity="0.75">
              <circle cx="100" cy="100" r="35" stroke="#e11d48" strokeWidth="0.75" strokeDasharray="2 3" fill="none" />
              <circle cx="100" cy="100" r="20" stroke="#c0942c" strokeWidth="0.5" fill="none" />
              <circle cx="100" cy="100" r="4" fill="#c0942c" className="animate-pulse" />
            </g>
          </svg>
        );
      default:
        return null;
    }
  };

  // Render Left Page of open chapter spread
  const renderLeftPage = (idx: number) => {
    const service = SERVICES[idx];
    if (!service) {
      return (
        <div className="relative bg-gradient-to-br from-[#FAF9F5] via-[#FCFAF4] to-[#FAF8F1] rounded-l-[1.8rem] p-10 h-full linen-texture" />
      );
    }
    return (
      <div className="relative border-r border-[#ebdcc9]/40 bg-gradient-to-br from-[#FAF9F5] via-[#FCFAF4] to-[#FAF8F1] rounded-l-[1.8rem] p-6 lg:p-10 flex flex-col justify-between overflow-hidden shadow-inner h-full min-h-[460px] lg:min-h-0">
        {/* Subtle Paper Fiber Overlay */}
        <div className="absolute inset-0 linen-texture opacity-30 pointer-events-none" />
        
        {/* Subtle central watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] text-[#0a252c] pointer-events-none">
          <svg className="w-4/5 h-4/5" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50,15 C42,35 25,45 20,65 C32,65 42,50 50,30 C58,50 68,65 80,65 C75,45 58,35 50,15 Z" />
          </svg>
        </div>

        {/* Corner Botanical Sketches */}
        {renderBotanicalSketch('tl')}
        {renderBotanicalSketch('bl')}

        {/* Top Page Header (Chapter Label) */}
        <div className="relative z-10 flex justify-between items-center border-b border-gold/15 pb-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
            HEER SANCTUARY
          </span>
          <span className="font-serif text-xs italic text-ocean/50">
            Chapter {idx + 1}
          </span>
        </div>

        {/* Center Illustration & Topic Photo Area */}
        <div className="flex-grow flex items-center justify-center relative my-3">
          <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 rounded-2xl bg-white border-2 border-[#c0942c]/35 shadow-md p-1.5 relative group/img overflow-hidden">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover/img:scale-105" 
              referrerPolicy="no-referrer"
            />
            {/* Subtle vintage vignette overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#0a252c]/30 via-transparent to-transparent pointer-events-none" />
            
            {/* Tucked in Pressed Flower sketch detail */}
            <div className="absolute bottom-1 right-1 w-12 h-12 opacity-60 text-white drop-shadow-sm pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 50 50" fill="currentColor">
                <path d="M 25,50 C 25,35 20,25 10,20 C 15,18 25,24 25,35" stroke="currentColor" strokeWidth="0.75" fill="none" />
                <ellipse cx="10" cy="20" rx="3" ry="1.5" className="transform rotate-12" />
                <ellipse cx="15" cy="18" rx="2" ry="1.0" />
              </svg>
            </div>
          </div>
        </div>

        {/* Handwritten Margin Quote at the bottom */}
        <div className="relative z-10 text-center px-4">
          <p className="font-serif italic text-[13px] md:text-sm text-gold-dark font-medium leading-relaxed font-handwritten select-none">
            "{service.quote}"
          </p>
        </div>

        {/* Left Page Number */}
        <div className="absolute bottom-4 left-6 text-[10px] font-mono font-semibold text-ocean/40">
          { (idx + 1) * 2 - 1 }
        </div>
      </div>
    );
  };

  // Render Right Page of open chapter spread
  const renderRightPage = (idx: number) => {
    const service = SERVICES[idx];
    if (!service) {
      return (
        <div className="relative bg-gradient-to-bl from-[#FAF9F5] via-[#FCFAF4] to-[#FAF8F1] rounded-r-[1.8rem] p-10 h-full linen-texture" />
      );
    }
    return (
      <div className="relative bg-gradient-to-bl from-[#FAF9F5] via-[#FCFAF4] to-[#FAF8F1] rounded-r-[1.8rem] p-6 lg:p-10 flex flex-col justify-between overflow-hidden shadow-inner h-full min-h-[460px] lg:min-h-0">
        {/* Subtle Paper Fiber Overlay */}
        <div className="absolute inset-0 linen-texture opacity-30 pointer-events-none" />

        {/* Subtle central watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] text-[#0a252c] pointer-events-none">
          <svg className="w-4/5 h-4/5" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50,15 C42,35 25,45 20,65 C32,65 42,50 50,30 C58,50 68,65 80,65 C75,45 58,35 50,15 Z" />
          </svg>
        </div>

        {/* Corner Botanical Sketches */}
        {renderBotanicalSketch('tr')}
        {renderBotanicalSketch('br')}

        {/* Top Page Header (Modality Header) */}
        <div className="relative z-10 flex justify-between items-center border-b border-gold/15 pb-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5A8795] font-bold">
            PRIVATE SOMATIC SERVICE
          </span>
          <span className="font-serif text-xs italic text-ocean/50">
            Heal & Restore
          </span>
        </div>

        {/* Main Service Info Block */}
        <div className="flex-grow flex flex-col justify-center space-y-4 lg:space-y-5 relative z-10 my-4 text-left">
          {/* Title */}
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#5A8795]">
              MODALITY {idx + 1}
            </span>
            <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#0a252c] tracking-tight leading-tight">
              {service.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm lg:text-base text-[#0a252c] leading-relaxed font-normal">
            {service.desc}
          </p>

          {/* Session Attributes (Duration | Price) */}
          <div className="flex flex-wrap items-center gap-4 py-2 border-t border-b border-[#ebdcc9]/50">
            <div className="flex items-center gap-1.5 text-sm text-[#0a252c]">
              <Sun className="w-3.5 h-3.5 text-gold stroke-[2]" />
              <span className="font-mono font-bold tracking-wide">{service.duration} Session</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
            <div className="flex items-center gap-1.5 text-sm text-[#0a252c]">
              <Eye className="w-3.5 h-3.5 text-[#5A8795]" />
              <span className="font-mono font-bold tracking-wide">1-on-1 Online</span>
            </div>
          </div>

          {/* Pricing Section styled beautifully */}
          <div className="pt-1 flex items-baseline gap-2">
            <span className="text-xs uppercase tracking-widest font-mono text-ocean/50">
              Energy Exchange:
            </span>
            <span className="font-serif text-lg lg:text-xl font-extrabold text-[#c0942c] tracking-tight">
              {service.price}
            </span>
          </div>
        </div>

        {/* Booking Button styled like a vintage label/stamped ribbon */}
        <div className="relative z-10 pt-2">
          <button
            onClick={() => onBook(`Trauma Healing Session - ${service.title}`)}
            className="w-full py-3 px-6 bg-gradient-to-r from-[#0a252c] to-[#2f6d73] hover:from-[#c0942c] hover:to-[#dfc588] text-cream hover:text-[#0a252c] text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Book This Session</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Right Page Number */}
        <div className="absolute bottom-4 right-6 text-[10px] font-mono font-semibold text-ocean/40">
          { (idx + 1) * 2 }
        </div>
      </div>
    );
  };

  // Render open chapter spread
  const renderChapterSpread = (idx: number) => {
    return (
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 relative z-10">
        {renderLeftPage(idx)}
        {renderRightPage(idx)}
      </div>
    );
  };

  // Render book closed cover view
  const renderCoverView = () => {
    return (
      <div 
        onClick={handleNextPage}
        className="w-full h-full relative z-10 flex flex-col justify-between p-8 lg:p-12 text-center select-none cursor-pointer group rounded-[2rem] overflow-hidden pl-16"
      >
        {/* Elegant Bound Book Spine on the far left edge of the cover */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#113137] via-[#0a252c] to-[#15424A] border-r border-[#c0942c]/30 z-20 shadow-[3px_0_12px_rgba(0,0,0,0.18)] rounded-l-[2rem] flex flex-col justify-between py-10 items-center">
          {/* Horizontal gold rib bands */}
          <div className="w-full h-[3px] bg-gradient-to-r from-[#ebdca9]/50 via-[#c0942c] to-[#ebdca9]/50 shadow-[0_1px_2px_rgba(0,0,0,0.2)]" />
          <div className="w-full h-[3px] bg-gradient-to-r from-[#ebdca9]/50 via-[#c0942c] to-[#ebdca9]/50 shadow-[0_1px_2px_rgba(0,0,0,0.2)]" />
          <div className="w-full h-[3px] bg-gradient-to-r from-[#ebdca9]/50 via-[#c0942c] to-[#ebdca9]/50 shadow-[0_1px_2px_rgba(0,0,0,0.2)]" />
          <div className="w-full h-[3px] bg-gradient-to-r from-[#ebdca9]/50 via-[#c0942c] to-[#ebdca9]/50 shadow-[0_1px_2px_rgba(0,0,0,0.2)]" />
        </div>

        {/* Subtle heavy fabric woven/linen texture background overlay */}
        <div className="absolute inset-0 bg-[#f7f3e8] shadow-inner" />
        <div className="absolute inset-0 linen-texture opacity-35" />

        {/* Outer Elegant Gold Stitched Margin Frame */}
        <div className="absolute inset-y-3.5 right-3.5 left-16 border-2 border-[#c0942c]/25 rounded-[1.5rem] pointer-events-none" />
        <div className="absolute inset-y-5 right-5 left-18 border border-[#c0942c]/10 rounded-[1.3rem] pointer-events-none" />

        {/* Botanical corner illustrations */}
        {renderBotanicalSketch('tl', 'text-gold/25')}
        {renderBotanicalSketch('tr', 'text-gold/25')}
        {renderBotanicalSketch('bl', 'text-gold/25')}
        {renderBotanicalSketch('br', 'text-gold/25')}

        {/* Header Ribbon / Book tag */}
        <div className="relative z-10 flex flex-col items-center pt-2">
          <span className="font-mono text-[10px] tracking-[0.4em] text-ocean/45 uppercase font-bold">
            PRIVATE COLLECTION
          </span>
          <div className="w-16 h-[1px] bg-gold/30 mt-2" />
        </div>

        {/* Embossed Gold central stamp (Lotus + Spine) */}
        <div className="relative z-10 flex flex-col items-center justify-center py-6">
          
          {/* Subtle pressed lavender sketch next to the lotus - Shifted left and placed on background z-0 to prevent title text obstruction */}
          <div className="absolute top-[-30px] left-[12%] w-16 h-28 opacity-[0.12] text-sage pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 50 100" fill="currentColor">
              <path d="M 25,90 C 25,60 20,40 10,20 C 12,18 15,22 25,45" stroke="currentColor" strokeWidth="0.75" fill="none" />
              <circle cx="10" cy="20" r="1.5" />
              <circle cx="12" cy="25" r="1.5" />
              <circle cx="14" cy="30" r="1.5" />
              <circle cx="16" cy="35" r="1.5" />
              <circle cx="20" cy="45" r="1.5" />
            </svg>
          </div>

          <div className="w-28 h-28 rounded-full bg-gold/5 border border-gold/15 flex items-center justify-center p-4 shadow-inner relative group-hover:scale-105 transition-transform duration-500">
            
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-full bg-gold/5 animate-pulse" />
            
            <svg className="w-16 h-16 text-gold drop-shadow-[0_2px_5px_rgba(192,148,44,0.4)]" viewBox="0 0 100 100" fill="currentColor">
              {/* Embossed Lotus Stamp */}
              <path d="M50,15 C42,35 25,45 20,65 C32,65 42,50 50,30 C58,50 68,65 80,65 C75,45 58,35 50,15 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M50,25 C45,40 32,48 28,63 C38,63 45,52 50,38 C55,52 62,63 72,63 C68,48 55,40 50,25 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8" />
              <path d="M50,35 C48,45 42,50 38,60 C45,60 48,52 50,45 C52,52 55,60 62,60 C58,50 52,45 50,35 Z" fill="currentColor" opacity="0.85" />
              <circle cx="50" cy="53" r="2.5" />
            </svg>
          </div>

          {/* Book Title */}
          <div className="space-y-2 mt-8">
            <h2 className="font-serif text-2xl md:text-3xl font-normal text-[#0a252c] tracking-tight">
              Our Somatic <br />
              <span className="italic font-medium text-gold font-serif text-3xl">Healing Journal</span>
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto pt-1" />
            <p className="text-[11px] font-serif text-ocean/50 italic max-w-xs mx-auto">
              "An elegant record of eight therapeutic restorative chapters."
            </p>
          </div>

        </div>

        {/* Bottom invitation and ribbon bookmark representation */}
        <div className="relative z-10 pb-2 flex flex-col items-center">
          
          {/* Curled corner guide icon */}
          <div className="flex items-center gap-1.5 text-xs text-gold font-mono font-semibold tracking-wider hover:text-gold-dark transition-colors mb-2">
            <span>Turn Corner to Open</span>
            <CornerRightDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
          
          <div className="text-[10px] text-ocean/45 font-mono uppercase tracking-[0.2em]">
            HEER SANCTUARY © 2026
          </div>
        </div>

      </div>
    );
  };

  // Render book closed back cover view
  const renderBackCoverView = () => {
    return (
      <div 
        onClick={handlePrevPage}
        className="w-full h-full relative z-10 flex flex-col justify-between p-12 text-center select-none cursor-pointer group rounded-[2rem] overflow-hidden pr-16"
      >
        {/* Elegant Bound Book Spine on the far right edge of the back cover */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#113137] via-[#0a252c] to-[#15424A] border-l border-[#c0942c]/30 z-20 shadow-[-3px_0_12px_rgba(0,0,0,0.18)] rounded-r-[2rem] flex flex-col justify-between py-10 items-center">
          {/* Horizontal gold rib bands */}
          <div className="w-full h-[3px] bg-gradient-to-r from-[#ebdca9]/50 via-[#c0942c] to-[#ebdca9]/50 shadow-[0_1px_2px_rgba(0,0,0,0.2)]" />
          <div className="w-full h-[3px] bg-gradient-to-r from-[#ebdca9]/50 via-[#c0942c] to-[#ebdca9]/50 shadow-[0_1px_2px_rgba(0,0,0,0.2)]" />
          <div className="w-full h-[3px] bg-gradient-to-r from-[#ebdca9]/50 via-[#c0942c] to-[#ebdca9]/50 shadow-[0_1px_2px_rgba(0,0,0,0.2)]" />
          <div className="w-full h-[3px] bg-gradient-to-r from-[#ebdca9]/50 via-[#c0942c] to-[#ebdca9]/50 shadow-[0_1px_2px_rgba(0,0,0,0.2)]" />
        </div>

        <div className="absolute inset-0 bg-[#f7f3e8] shadow-inner" />
        <div className="absolute inset-0 linen-texture opacity-35" />

        {/* Outer Elegant Gold Stitched Margin Frame */}
        <div className="absolute inset-y-3.5 left-3.5 right-16 border-2 border-[#c0942c]/25 rounded-[1.5rem] pointer-events-none" />
        <div className="absolute inset-y-5 left-5 right-18 border border-[#c0942c]/10 rounded-[1.3rem] pointer-events-none" />

        {/* Corner Botanical Sketches */}
        {renderBotanicalSketch('tl', 'text-gold/25')}
        {renderBotanicalSketch('tr', 'text-gold/25')}
        {renderBotanicalSketch('bl', 'text-gold/25')}
        {renderBotanicalSketch('br', 'text-gold/25')}

        <div className="relative z-10 flex flex-col items-center pt-2">
          <span className="font-mono text-[9px] tracking-[0.3em] text-ocean/45 uppercase font-bold">
            CONCLUDING SPREAD
          </span>
          <div className="w-16 h-[1px] bg-gold/30 mt-2" />
        </div>

        {/* Embossed Logo central stamp */}
        <div className="relative z-10 flex flex-col items-center justify-center py-6 space-y-6">
          <div className="w-20 h-20 rounded-full border border-gold/15 flex items-center justify-center p-3 relative">
            <svg className="w-10 h-10 text-gold opacity-50" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,15 C42,35 25,45 20,65 C32,65 42,50 50,30 C58,50 68,65 80,65 C75,45 58,35 50,15 Z" />
            </svg>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl font-normal text-[#0a252c] tracking-tight">
              Your somatic wisdom is <br />
              <span className="italic font-medium text-gold font-serif">always inside you.</span>
            </h3>
            <p className="text-[11px] font-sans text-ocean/60 max-w-xs mx-auto leading-relaxed">
              When you are ready to unfold the next chapter, our guides are here to co-create emotional safety with you.
            </p>
          </div>
        </div>

        <div className="relative z-10 pb-2 flex flex-col items-center">
          <div className="text-[10px] text-gold font-mono font-semibold tracking-wider hover:text-gold-dark transition-colors mb-2">
            ← Click anywhere to re-open
          </div>
          <div className="text-[10px] text-ocean/45 font-mono uppercase tracking-[0.2em]">
            HEER SANCTUARY © 2026
          </div>
        </div>

      </div>
    );
  };

  return (
    <div className="w-full relative flex flex-col items-center">
      
      {/* SCOPED TEXTURE AND BOOK STYLING FOR THE JOURNAL */}
      <style dangerouslySetInnerHTML={{ __html: `
        .linen-texture {
          background-image: 
            linear-gradient(90deg, rgba(212, 198, 163, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(212, 198, 163, 0.1) 1px, transparent 1px);
          background-size: 3.5px 3.5px;
        }
        @keyframes gentle-bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-bounce-x {
          animation: gentle-bounce-x 2.5s infinite ease-in-out;
        }
        @keyframes gold-drift-up {
          0% { transform: translateY(0px) scale(0.6); opacity: 0; }
          20% { opacity: 0.85; }
          80% { opacity: 0.55; }
          100% { transform: translateY(-110px) scale(1.2); opacity: 0; }
        }
        .animate-gold-drift {
          animation: gold-drift-up 1.8s ease-out forwards;
        }
        .book-shadow {
          box-shadow: 0 32px 85px -15px rgba(10, 37, 44, 0.22), 0 20px 45px -10px rgba(192, 148, 44, 0.12), inset 0 0 35px rgba(10, 37, 44, 0.03);
        }
        /* Custom serif script vibe for annotations */
        .font-handwritten {
          font-family: 'Playfair Display', Georgia, serif;
          letter-spacing: 0.02em;
        }
        /* Page Turn Animation Curl keyframes */
        @keyframes page-curl-next {
          0% { transform: rotateY(0deg) skewY(0deg); filter: brightness(1); }
          50% { transform: rotateY(-90deg) skewY(-3deg); filter: brightness(0.9); }
          100% { transform: rotateY(-180deg) skewY(0deg); filter: brightness(1); }
        }
        @keyframes page-curl-prev {
          0% { transform: rotateY(-180deg) skewY(0deg); filter: brightness(1); }
          50% { transform: rotateY(-90deg) skewY(3deg); filter: brightness(0.9); }
          100% { transform: rotateY(0deg) skewY(0deg); filter: brightness(1); }
        }
        .animate-curl-next {
          animation: page-curl-next 850ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
          transform-style: preserve-3d;
        }
        .animate-curl-prev {
          animation: page-curl-prev 850ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
          transform-style: preserve-3d;
        }
      ` }} />

      {/* Floating Gold Particles overlay while turning */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full bg-gradient-to-tr from-[#c0942c] to-amber-200 shadow-[0_0_8px_#fef08a] animate-gold-drift"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`
            }}
          />
        ))}
      </div>

      {/* ==================== JOURNAL CORE DISPLAY ==================== */}
      <div className="w-full max-w-7xl px-3 sm:px-6 md:px-12 lg:px-16 flex flex-col items-center">

        {/* Dynamic Instruction Banner above the Book - Always within screen bounds */}
        <div className="flex items-center justify-center gap-3 mb-3 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FAF5EB] border border-[#c0942c]/40 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#072a3a] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#c0942c]" />
            <span>Click arrows or curled corners to turn pages</span>
          </div>
        </div>

        {/* Book Container with elegant 3D perspective and shadow */}
        <div className="w-full relative flex items-center justify-center py-2 sm:py-4">
          
          {/* Main Book body */}
          <div 
            className="relative w-full max-w-[94%] sm:max-w-[940px] lg:max-w-[1000px] xl:max-w-[1040px] h-[540px] sm:h-[620px] lg:h-[640px] rounded-[2rem] book-shadow transition-all duration-500 overflow-visible bg-[#FAF8F5]"
            style={{ perspective: '1500px' }}
          >
            
            {/* Center Spine Crease Line & Ribbon (Shown only when book is OPEN) */}
            {currentPage > 0 && currentPage < SERVICES.length + 1 && (
              <>
                {/* Center fold Shadow overlays */}
                <div className="absolute top-0 bottom-0 left-[50%] -translate-x-[1px] w-[2px] bg-[#0a252c]/15 z-25 pointer-events-none" />
                <div className="absolute top-0 bottom-0 left-[50%] -translate-x-[25px] w-[25px] bg-gradient-to-r from-transparent to-[#0a252c]/5 z-25 pointer-events-none" />
                <div className="absolute top-0 bottom-0 left-[50%] w-[25px] bg-gradient-to-l from-transparent to-[#0a252c]/5 z-25 pointer-events-none" />
                
                {/* Golden Spine stitch line */}
                <div className="absolute top-0 bottom-0 left-[50%] -translate-x-[0.5px] w-[1px] border-l border-dashed border-[#c0942c]/40 z-25 pointer-events-none" />

                {/* Velvet Ribbon Bookmark hanging down the crease */}
                <div className="absolute top-0 bottom-[-16px] left-[50%] -translate-x-1/2 w-3.5 bg-[#c0942c] shadow-[1px_2px_4px_rgba(0,0,0,0.18)] z-25 pointer-events-none rounded-b-[2px]">
                  <div className="absolute bottom-0 inset-x-0 h-3 bg-gradient-to-b from-transparent to-[#99731b] rounded-b-[2px]" />
                  <div className="absolute bottom-[-6px] left-[50%] -translate-x-1/2 w-[1px] h-2 bg-amber-200/50" />
                </div>
              </>
            )}

            {/* Render Views based on Page index */}
            <div className="w-full h-full relative rounded-[2rem] overflow-hidden">
              
              {/* If flipping is ACTIVE, we render the page curl effect */}
              {isFlipping ? (
                <div className="w-full h-full relative grid grid-cols-1 lg:grid-cols-2 bg-[#FAF8F5]">
                  
                  {/* Underlay Left Page (displays targets of the prev/next state) */}
                  <div className="w-full h-full relative border-r border-[#ebdcc9]/30 overflow-hidden bg-[#FAF9F5]">
                    {flipDirection === 'prev' ? (
                      /* Going backwards: underlay left page is target left page */
                      (currentPage - 1 === 0 ? (
                        <div className="w-full h-full linen-texture bg-[#f7f3e8]" />
                      ) : (
                        renderLeftPage(Math.max(0, currentPage - 2))
                      ))
                    ) : (
                      /* Going forwards: underlay left page is current left page */
                      (currentPage === 0 ? (
                        <div className="w-full h-full linen-texture bg-[#f7f3e8]" />
                      ) : (
                        renderLeftPage(Math.max(0, currentPage - 1))
                      ))
                    )}
                  </div>

                  {/* Underlay Right Page */}
                  <div className="w-full h-full relative overflow-hidden bg-[#FAF9F5]">
                    {flipDirection === 'prev' ? (
                      /* Going backwards: underlay right page is target right page */
                      (currentPage - 1 >= SERVICES.length + 1 ? (
                        <div className="w-full h-full linen-texture bg-[#f7f3e8]" />
                      ) : (
                        currentPage - 1 === 0 ? (
                          <div className="w-full h-full linen-texture bg-[#f7f3e8]" />
                        ) : (
                          renderRightPage(Math.min(SERVICES.length - 1, currentPage - 2))
                        )
                      ))
                    ) : (
                      /* Going forwards: underlay right page is target right page */
                      (currentPage >= SERVICES.length ? (
                        <div className="w-full h-full linen-texture bg-[#f7f3e8]" />
                      ) : (
                        renderRightPage(Math.min(SERVICES.length - 1, currentPage))
                      ))
                    )}
                  </div>

                  {/* Flipping 3D overlay sheet */}
                  <div 
                    className="absolute right-0 top-0 w-1/2 h-full origin-left z-30 preserve-3d"
                    style={{
                      animationName: flipDirection === 'next' ? 'page-curl-next' : 'page-curl-prev',
                      animationDuration: '850ms',
                      animationTimingFunction: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
                      animationFillMode: 'forwards'
                    }}
                  >
                    {/* Front side of flipping sheet */}
                    <div className="absolute inset-0 backface-hidden z-25 overflow-hidden">
                      {flipDirection === 'prev' ? (
                        /* Going backwards: starts on left showing what is being flipped closed (the back cover or right page of current spread) */
                        currentPage >= SERVICES.length + 1 ? (
                          renderBackCoverView()
                        ) : (
                          renderRightPage(Math.min(SERVICES.length - 1, currentPage - 1))
                        )
                      ) : (
                        /* Going forwards: starts showing what was on right page */
                        currentPage === 0 ? (
                          <div className="w-full h-full linen-texture bg-[#f7f3e8]">
                            {renderCoverView()}
                          </div>
                        ) : (
                          renderRightPage(Math.min(SERVICES.length - 1, currentPage - 1))
                        )
                      )}
                    </div>

                    {/* Back side of flipping sheet */}
                    <div 
                      className="absolute inset-0 backface-hidden z-20 overflow-hidden"
                      style={{ transform: 'rotateY(180deg)' }}
                    >
                      {flipDirection === 'prev' ? (
                        /* Going backwards: back side shows the target left page */
                        currentPage - 1 === 0 ? (
                          <div className="w-full h-full linen-texture bg-[#f7f3e8]">
                            {renderCoverView()}
                          </div>
                        ) : (
                          renderLeftPage(Math.max(0, currentPage - 2))
                        )
                      ) : (
                        /* Going forwards: back side shows the target left page */
                        currentPage >= SERVICES.length ? (
                          <div className="w-full h-full linen-texture bg-[#f7f3e8]">
                            {renderBackCoverView()}
                          </div>
                        ) : (
                          renderLeftPage(Math.min(SERVICES.length - 1, currentPage))
                        )
                      )}
                    </div>

                  </div>

                </div>
              ) : (
                /* Static View (Normal Idle) */
                <>
                  {currentPage === 0 && renderCoverView()}
                  
                  {currentPage > 0 && currentPage < SERVICES.length + 1 && (
                    renderChapterSpread(currentPage - 1)
                  )}

                  {currentPage === SERVICES.length + 1 && renderBackCoverView()}
                </>
              )}

            </div>

            {/* CURLED PAGE CORNER FLIP CONTROLS (Floating Corner indicators) */}
            {currentPage < SERVICES.length + 1 && !isFlipping && (
              <div 
                onClick={handleNextPage}
                className="absolute right-0 bottom-0 w-16 h-16 cursor-pointer group/corner z-30 overflow-visible"
                title="Next Spread"
              >
                {/* Visual Curly page corner design */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[20px] border-t-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-[#c0942c]/20 border-l-[20px] border-l-[#c0942c]/20 rounded-bl-xl group-hover/corner:border-b-[#c0942c]/40 group-hover/corner:border-l-[#c0942c]/40 transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#FAF8F5] transform rotate-45 translate-x-2.5 translate-y-2.5 border-l border-t border-[#dfdbc9] group-hover/corner:scale-110 transition-transform shadow-[2px_2px_5px_rgba(0,0,0,0.05)]" />
              </div>
            )}

            {currentPage > 0 && !isFlipping && (
              <div 
                onClick={handlePrevPage}
                className="absolute left-0 bottom-0 w-16 h-16 cursor-pointer group/corner z-30 overflow-visible"
                title="Previous Spread"
              >
                <div className="absolute bottom-0 left-0 w-0 h-0 border-t-[20px] border-t-transparent border-l-[20px] border-l-transparent border-b-[20px] border-b-[#c0942c]/20 border-r-[20px] border-r-[#c0942c]/20 rounded-br-xl group-hover/corner:border-b-[#c0942c]/40 group-hover/corner:border-r-[#c0942c]/40 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-5 h-5 bg-[#FAF8F5] transform -rotate-45 -translate-x-2.5 translate-y-2.5 border-r border-t border-[#dfdbc9] group-hover/corner:scale-110 transition-transform shadow-[-2px_2px_5px_rgba(0,0,0,0.05)]" />
              </div>
            )}

            {/* ==================== SCREEN-SAFE NAVIGATION ARROWS ==================== */}
            {/* Left Page Navigation Arrow */}
            {currentPage > 0 && (
              <div className="absolute left-2 sm:-left-6 md:-left-7 top-1/2 -translate-y-1/2 z-40">
                <button
                  onClick={handlePrevPage}
                  disabled={isFlipping}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FAF5EB]/95 backdrop-blur-xs text-[#0a252c] border border-[#c0942c]/50 hover:border-[#c0942c] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(10,37,44,0.15)] hover:shadow-[0_0_18px_rgba(192,148,44,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto cursor-pointer disabled:opacity-40"
                  id="trauma-journal-prev-btn"
                  aria-label="Previous Page"
                  title="Previous Page"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#0a252c]" />
                </button>
              </div>
            )}

            {/* Right Page Navigation Arrow */}
            {currentPage < SERVICES.length + 1 && (
              <div className="absolute right-2 sm:-right-6 md:-right-7 top-1/2 -translate-y-1/2 z-40">
                <button
                  onClick={handleNextPage}
                  disabled={isFlipping}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FAF5EB]/95 backdrop-blur-xs text-[#0a252c] border border-[#c0942c]/50 hover:border-[#c0942c] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(10,37,44,0.15)] hover:shadow-[0_0_18px_rgba(192,148,44,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto cursor-pointer disabled:opacity-40"
                  id="trauma-journal-next-btn"
                  aria-label="Next Page"
                  title="Next Page"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#0a252c]" />
                </button>
              </div>
            )}

          </div>

        </div>

        {/* Book footer indicator / dots showing active page status */}
        <div className="flex items-center gap-2 mt-6 pb-2">
          <button 
            onClick={() => { if(!isFlipping) setCurrentPage(0); }}
            className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
              currentPage === 0 
                ? 'bg-gold border-gold scale-125' 
                : 'bg-[#ebdcc9] border-transparent hover:bg-gold/45'
            }`}
            title="Cover"
          />
          {SERVICES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { if(!isFlipping) setCurrentPage(idx + 1); }}
              className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                currentPage === idx + 1 
                  ? 'bg-[#2f6d73] border-[#2f6d73] scale-125' 
                  : 'bg-[#ebdcc9] border-transparent hover:bg-[#2f6d73]/45'
              }`}
              title={`Chapter ${idx + 1}: ${_.title}`}
            />
          ))}
          <button 
            onClick={() => { if(!isFlipping) setCurrentPage(SERVICES.length + 1); }}
            className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
              currentPage === SERVICES.length + 1 
                ? 'bg-gold border-gold scale-125' 
                : 'bg-[#ebdcc9] border-transparent hover:bg-gold/45'
            }`}
            title="Back Cover"
          />
        </div>

      </div>

    </div>
  );
}
