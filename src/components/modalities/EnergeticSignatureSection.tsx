import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, BookOpen, ChevronRight, ChevronLeft, ArrowRight, 
  Heart, ShieldAlert, ShieldCheck, HelpCircle, Activity, Scissors 
} from 'lucide-react';
import { useImageRegistry } from '../../context/ImageContext';

interface EnergeticSignatureSectionProps {
  onBook: (programName: string) => void;
}

const energyNodes = [
  {
    id: 'crown',
    name: 'CROWN CHAKRA',
    sanskrit: 'Sahasrara',
    location: 'Crown of the Head',
    vibration: '963 Hz Violet Cosmic Light',
    breathQuote: '"Breathe into the crown portal"',
    breathText: 'Place your palms facing upward above your head. Inhale radiant crystalline light into the apex of your crown, allowing divine stillness to expand through your mind.',
    rhythm: '7-1-7-1 RHYTHM',
    chant: '"I am connected to divine wisdom, boundless space, and infinite peace."',
    blockage: 'Spiritual cynicism, mental rigidity, isolation, lack of life purpose, dogmatic thinking.',
    balanced: 'Deep spiritual connection, divine trust, absolute wisdom, cosmic awareness, and mental flexibility.',
    remedy: 'Visualize a beautiful violet lotus blossom opening at your crown. Gently repeat the affirmation: "I am connected to the source of all life." Use golden light cord cutting to detach from rigid intellectual beliefs and false spiritual dogmas.',
    color: '#D8C2FF', // soft violet
    accentColor: 'text-[#C6A2FF]',
    glowColor: 'rgba(216, 194, 255, 0.6)',
    glowBg: 'rgba(216, 194, 255, 0.08)',
    y: 40,
  },
  {
    id: 'third-eye',
    name: 'THIRD EYE CHAKRA',
    sanskrit: 'Ajna',
    location: 'Center of the Forehead, between the Brows',
    vibration: '852 Hz Indigo Sight Nectar',
    breathQuote: '"Breathe through the brow center"',
    breathText: 'Gently close your eyes and focus inward between your eyebrows. Inhale deep indigo air, quietening mental chatter and illuminating your inner vision.',
    rhythm: '6-2-6-2 RHYTHM',
    chant: '"My mind is clear, my intuition is sharp, and I trust my inner vision."',
    blockage: 'Mental fog, illusion, over-rationalizing, lack of intuition, paranoia, difficulty visualizing.',
    balanced: 'Strong intuitive awareness, inner wisdom, visual clarity, spiritual insight, and dream recall.',
    remedy: 'Close your eyes and breathe deeply into the space between your brows. Visualize an indigo sphere glowing brighter with every breath. Snip the energetic threads connected to mental illusions and other people\'s negative thought projections with silver light shears.',
    color: '#A5C4F7', // soft indigo/blue
    accentColor: 'text-[#7FA6E9]',
    glowColor: 'rgba(165, 196, 247, 0.6)',
    glowBg: 'rgba(165, 196, 247, 0.08)',
    y: 64,
  },
  {
    id: 'throat',
    name: 'THROAT CHAKRA',
    sanskrit: 'Vishuddha',
    location: 'Base of the Throat',
    vibration: '741 Hz Turquoise Truth Sound',
    breathQuote: '"Breathe through the throat pathway"',
    breathText: 'Relax your jaw and neck. Inhale cool turquoise air into the throat, letting out a soft sigh on the exhale to unblock suppressed expression.',
    rhythm: '5-2-5-2 RHYTHM',
    chant: '"I speak my truth with love, grace, and unshakable clarity."',
    blockage: 'Suppressed voice, fear of speaking your truth, lying, shyness, gossip, throat discomfort.',
    balanced: 'Authentic, clear expression; active listening; living in alignment with truth; vocal sovereignty.',
    remedy: 'Perform a sacred blue throat release. Visualize a crystal clear turquoise pool flowing freely from your vocal cords. Use a silver sword of light to dissolve cords tied to childhood silencing, fear of judgment, and suppressed opinions.',
    color: '#8BE7E3', // soft teal
    accentColor: 'text-[#5CDAD4]',
    glowColor: 'rgba(139, 231, 227, 0.6)',
    glowBg: 'rgba(139, 231, 227, 0.08)',
    y: 92,
  },
  {
    id: 'heart',
    name: 'HEART CHAKRA',
    sanskrit: 'Anahata',
    location: 'Center of the Chest',
    vibration: '639 Hz Emerald Compassion Frequency',
    breathQuote: '"Breathe through the center"',
    breathText: 'Place your hands over your heart. Breathe warm air directly under your palms, letting your ribs expand in all directions like a blooming rose.',
    rhythm: '4-2-4-2 RHYTHM',
    chant: '"I am open to receiving and giving love, compassion, and gentle forgiveness."',
    blockage: 'Grief, jealousy, fear of intimacy, holding grudges, heavy heart attachments, and emotional codependency.',
    balanced: 'Unconditional love, empathy, compassion, self-forgiveness, secure relationships, and inner harmony.',
    remedy: 'Place both hands over your heart. Breathe in brilliant emerald green light, and release grief as dark smoke. Visualize the relationship Master Cord, and perform a loving yet firm gold-laser cord cut, reclaiming your heart\'s independent sovereignty.',
    color: '#A2E3C4', // soft green
    accentColor: 'text-[#76CE9F]',
    glowColor: 'rgba(162, 227, 196, 0.6)',
    glowBg: 'rgba(162, 227, 196, 0.08)',
    y: 124,
  },
  {
    id: 'solar-plexus',
    name: 'SOLAR PLEXUS CHAKRA',
    sanskrit: 'Manipura',
    location: 'Upper Abdomen, below the Sternum',
    vibration: '528 Hz Golden Solar Power',
    breathQuote: '"Breathe into the solar fire"',
    breathText: 'Rest your hands on your upper abdomen. Inhale golden solar warmth into your core, igniting your internal fire and restoring personal power.',
    rhythm: '4-4-4-4 RHYTHM',
    chant: '"I am strong, sovereign, and worthy of taking up my full space."',
    blockage: 'Low self-esteem, shame, powerlessness, control issues, codependency, lack of motivation.',
    balanced: 'Unshakable confidence, strong boundaries, clear willpower, self-control, and inner sovereignty.',
    remedy: 'Engage your core with diaphragmatic fire breathing. Visualize a radiant golden sun at your navel center radiating warm boundaries. Recite: "I am strong, I am sovereign." Sever the psychic tentacles linked to manipulators, codependent partners, and control patterns.',
    color: '#FDE047', // soft gold yellow
    accentColor: 'text-[#EAB308]',
    glowColor: 'rgba(253, 224, 71, 0.6)',
    glowBg: 'rgba(253, 224, 71, 0.08)',
    y: 154,
  },
  {
    id: 'sacral',
    name: 'SACRAL CHAKRA',
    sanskrit: 'Svadhisthana',
    location: 'Lower Abdomen, below the Navel',
    vibration: '417 Hz Radiant Orange Flow',
    breathQuote: '"Breathe into the ocean pelvis"',
    breathText: 'Place your hands below your navel. Inhale warm orange light into your lower abdomen, inviting sweet emotional flow and creative freedom.',
    rhythm: '4-2-6-2 RHYTHM',
    chant: '"I honor my emotions, my creativity, and my sacred pleasure."',
    blockage: 'Creative blocks, emotional numbness, fear of pleasure, guilt, inner child trauma, fear of change.',
    balanced: 'Vibrant creativity, healthy emotional flow, joyful playfulness, passion, adaptability, and sensual freedom.',
    remedy: 'Sway your hips in a circular motion. Visualize a bright orange liquid light of warmth filling your pelvis, healing your inner child. Sever toxic energetic cords bound to old romantic partnerships, shame-based conditioning, or creative suppression.',
    color: '#FDBA74', // soft orange peach
    accentColor: 'text-[#F97316]',
    glowColor: 'rgba(253, 186, 116, 0.6)',
    glowBg: 'rgba(253, 186, 116, 0.08)',
    y: 184,
  },
  {
    id: 'root',
    name: 'ROOT CHAKRA',
    sanskrit: 'Muladhara',
    location: 'Base of the Spine',
    vibration: '396 Hz Coral Ruby Grounding',
    breathQuote: '"Breathe into the earth roots"',
    breathText: 'Feel your feet firmly planted on the floor. Inhale deep ruby red energy from the earth up through your spine, anchoring absolute safety.',
    rhythm: '4-4-6-2 RHYTHM',
    chant: '"I am safe, grounded, supported, and rooted in the present moment."',
    blockage: 'Survival anxiety, financial panic, chronic fatigue, lack of safety, insecurity, feeling ungrounded.',
    balanced: 'Absolute safety, deep stability, physical vitality, presence, ancestral peace, and a sense of belonging.',
    remedy: 'Sit with your bare feet flat on the earth or floor. Imagine ruby red roots extending deep into the heart of the Earth. Recite: "I am safe, I am supported, I am here." Release survival panic cords and ancestral burdens back to the Earth for transmutation.',
    color: '#FCA5A5', // soft red coral
    accentColor: 'text-[#EF4444]',
    glowColor: 'rgba(252, 165, 165, 0.6)',
    glowBg: 'rgba(252, 165, 165, 0.08)',
    y: 216,
  }
];

export const EnergeticSignatureSection: React.FC<EnergeticSignatureSectionProps> = ({ onBook }) => {
  const { getSrc } = useImageRegistry();
  const [activeNode, setActiveNode] = useState<string>('heart');
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number; size: number }>>([]);
  
  // Custom Human Aura Image Placeholder State with fallback candidate paths
  const customImageUrl = getSrc('energetic.aura_field', '/assets/images/human-aura-field.jpg');
  const [imageError, setImageError] = useState<boolean>(false);

  useEffect(() => {
    const newParticles = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      delay: Math.random() * 5,
      duration: 12 + Math.random() * 12,
      size: Math.random() * 3 + 2,
    }));
    setParticles(newParticles);
  }, []);

  const activeNodeData = energyNodes.find(node => node.id === activeNode) || energyNodes[3];

  const handleNextNode = () => {
    const currentIndex = energyNodes.findIndex(node => node.id === activeNode);
    const nextIndex = (currentIndex + 1) % energyNodes.length;
    setActiveNode(energyNodes[nextIndex].id);
  };

  const handlePrevNode = () => {
    const currentIndex = energyNodes.findIndex(node => node.id === activeNode);
    const prevIndex = (currentIndex - 1 + energyNodes.length) % energyNodes.length;
    setActiveNode(energyNodes[prevIndex].id);
  };

  return (
    <section className="py-4 md:py-6 bg-[#FAF9F6] text-[#0A252C] relative overflow-hidden border-t border-[#dfdbc9]/30 z-10" id="aura-scanner">
      {/* Gentle Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#EAF3F1]/40 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#FAF9F6]/50 blur-3xl" />
        {/* Soft rotating outer sacred geometry circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full animate-[spin_180s_linear_infinite] pointer-events-none" />
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header - Compact Landscape Title */}
        <div className="text-center max-w-3xl mx-auto mb-3 space-y-0.5">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#0A252C] font-semibold tracking-tight">
            Open Your Chakras with Heer
          </h2>
          <p className="text-xs text-black max-w-xl mx-auto font-normal">
            Open your Blockages
          </p>
          <div className="flex justify-center pt-0.5">
            <div className="h-[1px] w-14 bg-gold/50" />
          </div>
        </div>

        {/* Interactive Landscape Grid Layout - Fits within single window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:gap-4 items-stretch max-w-[1340px] mx-auto">
          
          {/* Column 1 (col-span-3): Left Menu Selectors */}
          <div className="hidden lg:flex flex-col justify-center items-center gap-1 lg:col-span-3 h-full bg-white/60 backdrop-blur-md p-3 border border-[#dfdbc9]/60 rounded-[1.8rem] shadow-xs">
            <div className="w-full my-auto">
              <div className="flex flex-col gap-1">
                {energyNodes.map((node) => {
                  const isSelected = activeNode === node.id;
                  return (
                    <button
                      key={node.id}
                      className={`w-full text-left p-2 rounded-lg transition-all duration-300 flex items-center justify-between group relative overflow-hidden cursor-pointer ${
                        isSelected
                          ? 'bg-white border border-[#2F6D73]/30 shadow-[0_3px_16px_rgba(47,109,115,0.08)]'
                          : 'hover:bg-white/50 border border-transparent'
                      }`}
                      onMouseEnter={() => setActiveNode(node.id)}
                      onClick={() => setActiveNode(node.id)}
                    >
                      <div className="flex items-center gap-2 z-10">
                        <div 
                          className="w-2.5 h-2.5 rounded-full transition-all duration-300 shrink-0"
                          style={{
                            backgroundColor: node.color,
                            boxShadow: isSelected ? `0 0 10px ${node.color}` : 'none',
                          }}
                        />
                        <div>
                          <h4 className="font-serif text-[11px] font-bold tracking-wider text-[#0A252C] leading-tight">
                            {node.name}
                          </h4>
                          <span className="text-[8.5px] font-mono uppercase tracking-wider text-ocean/50 block">
                            {node.sanskrit}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 text-ocean/40 transition-transform duration-300 shrink-0 ${
                        isSelected ? 'transform translate-x-0.5 opacity-100 text-[#2F6D73]' : 'opacity-0 group-hover:opacity-100'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2 (col-span-5): Center Silhouette Figure with Custom Image Placeholder Support */}
          <div className="lg:col-span-5 flex flex-col items-center justify-between p-3 sm:p-4 bg-white/60 backdrop-blur-md border border-[#c0942c]/30 rounded-[1.8rem] shadow-xs relative overflow-hidden h-full">
            
            {/* Soft rotating geometric rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[88%] h-[88%] border border-gold/10 rounded-full animate-[spin_120s_linear_infinite] flex items-center justify-center">
                <div className="w-[82%] h-[82%] border border-gold/10 border-dashed rounded-full" />
              </div>
            </div>

            {/* Floating dust particles */}
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: p.size,
                  height: p.size,
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0) 70%)',
                }}
                animate={{
                  y: [0, -35, 0],
                  x: [0, 10, 0],
                  opacity: [0.1, 0.45, 0.1],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* The Master SVG & Custom Image Canvas */}
            <div className="w-full max-w-[320px] aspect-[210/180] relative my-auto flex items-center justify-center">
              <svg 
                viewBox="0 22 200 196" 
                className="w-full h-full relative z-10 select-none overflow-visible"
              >
                <defs>
                  {/* Subtle Aura Radial Gradient */}
                  <radialGradient id="aura-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={activeNodeData.color} stopOpacity="0.3" />
                    <stop offset="60%" stopColor={activeNodeData.color} stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#FAF9F6" stopOpacity="0" />
                  </radialGradient>

                  {/* Silhouette Fill Gradient */}
                  <linearGradient id="body-silhouette-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2F6D73" stopOpacity="0.15" />
                    <stop offset="50%" stopColor="#7F9C87" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#d4af37" stopOpacity="0.15" />
                  </linearGradient>

                  {/* Silhouette Stroke Gradient */}
                  <linearGradient id="body-outline-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2F6D73" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#7F9C87" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#d4af37" stopOpacity="0.8" />
                  </linearGradient>

                  {/* Flow Spines */}
                  {energyNodes.map(node => (
                    <linearGradient key={`spine-grad-${node.id}`} id={`spine-glow-${node.id}`} x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="#FCA5A5" stopOpacity="0.8" />
                      {node.id !== 'root' && <stop offset="50%" stopColor="#FDE047" stopOpacity="0.8" />}
                      <stop offset="100%" stopColor={node.color} stopOpacity="0.9" />
                    </linearGradient>
                  ))}

                  {/* Soft Radial Edge Mask centered at (100, 128) to eliminate square image borders */}
                  <mask id="aura-soft-blend-mask">
                    <radialGradient id="aura-blend-grad" cx="100" cy="128" r="162" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="74%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="90%" stopColor="#ffffff" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </radialGradient>
                    <rect x="-80" y="-55" width="360" height="360" fill="url(#aura-blend-grad)" />
                  </mask>
                </defs>

                {/* Concentric Sacred Geometry under the silhouette */}
                <g className="opacity-75">
                  <circle cx="100" cy="124" r="75" fill="none" stroke="rgba(212,175,55,0.08)" strokeWidth="0.5" />
                  <circle cx="100" cy="124" r="55" fill="none" stroke="rgba(212,175,55,0.06)" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="100" cy="124" r="35" fill="none" stroke="rgba(47,109,115,0.1)" strokeWidth="0.5" />
                </g>

                {/* Big Ambient Dynamic Aura around the Active Node */}
                <motion.circle
                  cx="100"
                  animate={{ cy: activeNodeData.y }}
                  transition={{ type: 'spring', stiffness: 70, damping: 18 }}
                  r="65"
                  fill="url(#aura-glow)"
                  className="pointer-events-none"
                />

                {/* CUSTOM USER IMAGE LAYER (FETChes /public/assets/images/human-aura-field.jpg) */}
                {!imageError ? (
                  <g transform="translate(0, 0)" mask="url(#aura-soft-blend-mask)">
                    <image 
                      href={customImageUrl} 
                      x="-66.5" 
                      y="-40.5" 
                      width="338" 
                      height="338" 
                      preserveAspectRatio="xMidYMid meet"
                      onError={() => {
                        setImageError(true);
                      }}
                      style={{ mixBlendMode: 'multiply' }}
                      className="transition-opacity duration-500 opacity-98 pointer-events-none"
                    />
                  </g>
                ) : (
                  /* EXACT HUMAN MEDITATING SILHOUETTE FALLBACK (LOTUS POSE) */
                  <g transform="translate(0, 0)">
                    {/* Human Head */}
                    <circle cx="100" cy="38" r="14" fill="url(#body-silhouette-grad)" stroke="url(#body-outline-grad)" strokeWidth="1.2" />
                    
                    {/* Human Neck & Torso & Seated Lotus Legs */}
                    <path 
                      d="M 93,51 
                         C 88,54 75,60 70,72 
                         C 66,82 64,95 64,110 
                         C 64,125 66,138 72,148 
                         L 72,158 
                         C 62,165 48,178 40,192 
                         C 34,202 36,212 48,214 
                         C 65,216 85,212 100,212 
                         C 115,212 135,216 152,214 
                         C 164,212 166,202 160,192 
                         C 152,178 138,165 128,158 
                         L 128,148 
                         C 134,138 136,125 136,110 
                         C 136,95 134,82 130,72 
                         C 125,60 112,54 107,51 Z" 
                      fill="url(#body-silhouette-grad)" 
                      stroke="url(#body-outline-grad)" 
                      strokeWidth="1.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />

                    {/* Arms folded calmly with hands in lap (Lotus mudra posture) */}
                    <path 
                      d="M 70,72 C 60,95 62,125 80,140 C 90,148 110,148 120,140 C 138,125 140,95 130,72" 
                      fill="none" 
                      stroke="url(#body-outline-grad)" 
                      strokeWidth="1" 
                      strokeOpacity="0.5" 
                    />
                    <path 
                      d="M 85,140 C 95,145 105,145 115,140" 
                      fill="none" 
                      stroke="url(#body-outline-grad)" 
                      strokeWidth="1.2" 
                      strokeOpacity="0.7" 
                    />
                  </g>
                )}

                {/* Central Spine Line (Sushumna Nadi Channel) */}
                <line 
                  x1="100" 
                  y1="38" 
                  x2="100" 
                  y2="212" 
                  stroke="rgba(47,109,115,0.15)" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />

                {/* Glowing flow along the spine from Root (212) to active node Y */}
                <motion.line
                  x1="100"
                  y1="212"
                  x2="100"
                  animate={{ y2: activeNodeData.y }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 70, 
                    damping: 18,
                    mass: 0.8
                  }}
                  stroke={`url(#spine-glow-${activeNodeData.id})`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="filter opacity-90 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]"
                />

                {/* Moving Kundalini Orb Sparkler */}
                <motion.circle
                  cx="100"
                  animate={{ cy: activeNodeData.y }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 70, 
                    damping: 18,
                    mass: 0.8
                  }}
                  r="6"
                  fill={activeNodeData.color}
                  className="filter drop-shadow-[0_0_10px_rgba(255,255,255,0.95)]"
                />

                {/* Connecting lines to outer panels */}
                {energyNodes.map((node) => {
                  const isActive = activeNode === node.id;
                  return (
                    <g key={`lines-${node.id}`} className="pointer-events-none">
                      {/* Left connection line to menu */}
                      <motion.line
                        x1="100"
                        y1={node.y}
                        x2="15"
                        y2={node.y}
                        stroke={node.color}
                        strokeWidth="1"
                        strokeDasharray="3 3"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: isActive ? 0.45 : 0.05,
                        }}
                        transition={{ duration: 0.4 }}
                      />
                      {/* Right connection line to glass card */}
                      <motion.line
                        x1="100"
                        y1={node.y}
                        x2="185"
                        y2={node.y}
                        stroke={node.color}
                        strokeWidth="1"
                        strokeDasharray="3 3"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: isActive ? 0.45 : 0.05,
                        }}
                        transition={{ duration: 0.4 }}
                      />
                    </g>
                  );
                })}

                {/* Overlaid Interactive Chakra Nodes */}
                {energyNodes.map((node) => {
                  const isActive = activeNode === node.id;
                  return (
                    <g 
                      key={`interactive-node-${node.id}`}
                      className="cursor-pointer group"
                      onMouseEnter={() => setActiveNode(node.id)}
                      onClick={() => setActiveNode(node.id)}
                    >
                      {/* Generous hover target area */}
                      <circle 
                        cx="100" 
                        cy={node.y} 
                        r="14" 
                        fill="transparent" 
                        className="cursor-pointer"
                      />

                      {/* Ripple Expansion Effect when hovered or active */}
                      {isActive && (
                        <motion.circle
                          cx="100"
                          cy={node.y}
                          r="5"
                          stroke={node.color}
                          strokeWidth="1.5"
                          fill="none"
                          initial={{ r: 5, opacity: 0.9 }}
                          animate={{ r: 24, opacity: 0 }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeOut"
                          }}
                        />
                      )}

                      {/* Inner Node Circle with breathing animation */}
                      <motion.circle
                        cx="100"
                        cy={node.y}
                        r={isActive ? 6 : 4}
                        fill={node.color}
                        stroke="white"
                        strokeWidth={isActive ? 1.5 : 1}
                        animate={{
                          scale: isActive ? [1, 1.15, 1] : [1, 1.08, 1],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="drop-shadow-md transition-all duration-300"
                        style={{
                          filter: isActive ? `drop-shadow(0 0 8px ${node.color})` : 'none'
                        }}
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Custom Image Upload Instruction Indicator */}
            <div className="text-center select-none pt-1">
              <span className="text-[9px] sm:text-[9.5px] font-mono text-[#0A252C]/60 tracking-tight bg-white/80 px-2.5 py-0.5 rounded-full border border-[#c0942c]/20 shadow-2xs inline-flex items-center gap-1">
                ✨ Image Path: <code className="text-[#c0942c] font-bold">/public/assets/images/human-aura-field.jpg</code>
              </span>
            </div>

            {/* Micro Navigation for Mobile */}
            <div className="flex lg:hidden items-center gap-4 mt-2 px-4 py-1.5 rounded-full bg-white/60 border border-slate-200 shadow-xs">
              <button 
                onClick={handlePrevNode}
                className="p-1 rounded-full hover:bg-white text-[#0A252C] transition-all cursor-pointer"
                aria-label="Previous energy center"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-serif text-xs font-bold tracking-widest uppercase text-[#0A252C] min-w-[120px] text-center">
                {activeNodeData.name.split(' ')[0]}
              </span>
              <button 
                onClick={handleNextNode}
                className="p-1 rounded-full hover:bg-white text-[#0A252C] transition-all cursor-pointer"
                aria-label="Next energy center"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 3 (col-span-4): Right Premium Glass Diagnostic Card */}
          <div className="lg:col-span-4 w-full h-full">
            <div className="backdrop-blur-xl bg-white/60 border border-[#dfdbc9]/60 shadow-xs rounded-[1.8rem] p-3 sm:p-4 relative overflow-hidden text-left h-full flex flex-col justify-between">
              
              {/* Glowing decorative indicator element at the top */}
              <div 
                className="absolute top-0 inset-x-0 h-[3px] transition-all duration-500" 
                style={{
                  background: `linear-gradient(90deg, transparent, ${activeNodeData.color}, transparent)`,
                  boxShadow: `0 2px 15px ${activeNodeData.color}`
                }}
              />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-2.5 flex-grow flex flex-col justify-between h-full"
                >
                  {/* BOX 1: SOMATIC PRACTICE & INHALE RHYTHM */}
                  <div className="bg-[#FAF9F5]/90 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-gold/20 shadow-xs relative overflow-hidden flex flex-col items-center justify-center text-center space-y-2">
                    {/* Centered Animated Breathing Circle Indicator */}
                    <div className="flex flex-col items-center justify-center text-center pt-0.5">
                      <motion.div 
                        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-center shadow-inner relative overflow-hidden"
                        style={{
                          backgroundColor: `${activeNodeData.color}35`,
                          border: `1.5px solid ${activeNodeData.color}`,
                        }}
                        animate={{
                          scale: [1, 1.08, 1],
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <span className="text-[10px] font-mono font-bold tracking-wider text-[#0A252C] uppercase leading-none select-none text-center">
                          INHALE
                        </span>
                      </motion.div>
                      <span className="text-[8.5px] font-mono tracking-widest uppercase text-gold font-bold mt-1 text-center">
                        {activeNodeData.rhythm}
                      </span>
                    </div>

                    {/* Text spanning full width from left edge to right edge */}
                    <p className="text-xs text-ocean-dark/90 leading-relaxed font-normal text-left w-full border-t border-gold/15 pt-2">
                      {activeNodeData.breathText}
                    </p>
                  </div>

                  {/* BOX 2: SACRED CHANT AFFIRMATION */}
                  <div className="bg-[#FAF9F5]/90 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-gold/20 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs p-0.5 rounded bg-[#FAF9F6] border border-gold/20 shadow-2xs">🕉️</span>
                      <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-gold font-bold block">
                        SACRED CHANT AFFIRMATION
                      </span>
                    </div>
                    
                    <div className="bg-white/95 rounded-xl p-3 border border-gold/15 text-center shadow-inner">
                      <p className="font-serif italic text-xs sm:text-sm text-[#0A252C] font-medium leading-relaxed">
                        {activeNodeData.chant}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
