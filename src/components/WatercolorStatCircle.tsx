import React from 'react';
import { motion } from 'motion/react';
import { Users, Heart, Calendar, User } from 'lucide-react';

interface WatercolorStatCircleProps {
  key?: React.Key;
  value: string;
  label: string;
  iconType: string;
  color: 'teal' | 'sage';
  index: number;
}

// Organic hand-painted filled watercolor blotch (Multi-layered soft wet-bleed textures)
const WatercolorBlotchSVG = ({ variant, color }: { variant: number; color: 'teal' | 'sage' }) => {
  const colorClass = color === 'teal' ? 'text-[#bde0e5]' : 'text-[#c2d3cd]';

  // 4 unique organic shapes to simulate real watercolor paint behavior
  if (variant === 0) {
    return (
      <svg viewBox="0 0 200 200" className={`absolute inset-0 w-full h-full transform rotate-12 select-none pointer-events-none ${colorClass}`}>
        {/* Layer 1: Outer soft bleed wash */}
        <path
          d="M 100, 25 C 145, 20 178, 55 174, 100 C 170, 145 141, 178 100, 172 C 55, 168 23, 141 25, 100 C 27, 55 55, 27 100, 25 Z"
          fill="currentColor"
          className="opacity-[0.35] blur-[8px]"
        />
        {/* Layer 2: Medium bleed concentration */}
        <path
          d="M 103, 38 C 138, 34 165, 62 162, 98 C 159, 134 132, 162 98, 158 C 64, 154, 38, 130, 41, 95 C 44, 60, 68, 42 103, 38 Z"
          fill="currentColor"
          className="opacity-[0.5] blur-[4px]"
        />
        {/* Layer 3: Dynamic textured center splash */}
        <path
          d="M 97, 50 C 122, 48 142, 68 140, 95 C 138, 122 118, 140 94, 137 C 70, 134 52, 118 54, 91 C 56, 64 72, 52 97, 50 Z"
          fill="currentColor"
          className="opacity-[0.4] blur-[2px]"
        />
      </svg>
    );
  }

  if (variant === 1) {
    return (
      <svg viewBox="0 0 200 200" className={`absolute inset-0 w-full h-full transform -rotate-45 select-none pointer-events-none ${colorClass}`}>
        {/* Layer 1: Outer soft bleed wash */}
        <path
          d="M 100, 20 C 148, 22 182, 58 178, 103 C 174, 148 142, 180 97, 175 C 52, 170 20, 142 22, 97 C 24, 52 52, 18 100, 20 Z"
          fill="currentColor"
          className="opacity-[0.32] blur-[9px]"
        />
        {/* Layer 2: Medium bleed concentration */}
        <path
          d="M 98, 34 C 138, 31 166, 58 163, 98 C 160, 138 132, 162 95, 158 C 58, 154, 34, 130, 36, 93 C 38, 56, 58, 37 98, 34 Z"
          fill="currentColor"
          className="opacity-[0.48] blur-[4px]"
        />
        {/* Layer 3: Dynamic center splash */}
        <path
          d="M 105, 48 C 135, 52 153, 78 150, 105 C 147, 132 124, 148 98, 144 C 72, 140 56, 118 58, 93 C 60, 68 79, 44 105, 48 Z"
          fill="currentColor"
          className="opacity-[0.38] blur-[2px]"
        />
      </svg>
    );
  }

  if (variant === 2) {
    return (
      <svg viewBox="0 0 200 200" className={`absolute inset-0 w-full h-full transform rotate-90 select-none pointer-events-none ${colorClass}`}>
        {/* Layer 1: Outer soft bleed wash */}
        <path
          d="M 104, 23 C 144, 21 176, 51 174, 98 C 172, 145 146, 179 100, 174 C 54, 169 22, 141 24, 94 C 26, 47 58, 25 104, 23 Z"
          fill="currentColor"
          className="opacity-[0.36] blur-[8px]"
        />
        {/* Layer 2: Medium bleed concentration */}
        <path
          d="M 101, 36 C 132, 34 158, 56 156, 95 C 154, 134 130, 158 97, 155 C 64, 152, 42, 130, 44, 93 C 46, 56, 70, 38 101, 36 Z"
          fill="currentColor"
          className="opacity-[0.52] blur-[4px]"
        />
        {/* Layer 3: Dynamic center splash */}
        <path
          d="M 110, 48 C 135, 50 148, 74 145, 100 C 142, 126 122, 142 98, 138 C 74, 134 60, 114 63, 90 C 66, 66 85, 46 110, 48 Z"
          fill="currentColor"
          className="opacity-[0.35] blur-[2px]"
        />
      </svg>
    );
  }

  // Variant 3
  return (
    <svg viewBox="0 0 200 200" className={`absolute inset-0 w-full h-full transform rotate-180 select-none pointer-events-none ${colorClass}`}>
      {/* Layer 1: Outer soft bleed wash */}
      <path
        d="M 98, 26 C 146, 21 179, 53 174, 98 C 169, 143 141, 177 96, 171 C 51, 165 21, 139 24, 94 C 27, 49 50, 31 98, 26 Z"
        fill="currentColor"
        className="opacity-[0.34] blur-[10px]"
      />
      {/* Layer 2: Medium bleed concentration */}
      <path
        d="M 96, 38 C 132, 34 158, 58 156, 96 C 154, 134 130, 158 92, 153 C 54, 148 34, 124 36, 91 C 38, 58 60, 42 96, 38 Z"
        fill="currentColor"
        className="opacity-[0.46] blur-[5px]"
      />
      {/* Layer 3: Dynamic center splash */}
      <path
        d="M 88, 50 C 120, 44 142, 68 139, 98 C 136, 128 114, 144 88, 140 C 62, 136 48, 114 51, 88 C 54, 62 56, 56 88, 50 Z"
        fill="currentColor"
        className="opacity-[0.42] blur-[2px]"
      />
    </svg>
  );
};

export default function WatercolorStatCircle({ value, label, iconType, color, index }: WatercolorStatCircleProps) {
  // Render appropriate outline icon based on iconType, with strokeWidth exactly matching Image 2
  const renderIcon = () => {
    const props = { className: 'w-7 h-7 text-ocean/85 stroke-[1.4]' };
    switch (iconType) {
      case 'people':
        return <Users {...props} />;
      case 'heart':
        return <Heart {...props} />;
      case 'calendar':
        return <Calendar {...props} />;
      case 'hourglass':
        return <User {...props} />;
      default:
        return <Users {...props} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center group relative w-full text-center py-4"
    >
      {/* Subtle vertical divider line on the right, matches the thin gray lines in Image 2 */}
      {index < 3 && (
        <div className="hidden lg:block absolute -right-6 top-[15%] bottom-[15%] w-[1px] bg-[#dfdbc9]/60" />
      )}

      {/* 1. Statistical Value in beautiful Serif font */}
      <span className="font-serif text-4xl md:text-5xl text-ocean font-bold tracking-tight mb-2 relative transition-colors duration-300 group-hover:text-teal-soft">
        {value}
      </span>

      {/* 2. Text label placed underneath the value in clean uppercase style */}
      <div className="text-center max-w-[170px]">
        <p className="text-[13px] md:text-[14px] font-sans uppercase tracking-[0.2em] text-black font-bold transition-colors duration-300">
          {label}
        </p>
      </div>
    </motion.div>
  );
}
