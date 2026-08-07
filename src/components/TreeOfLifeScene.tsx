import React from "react";

export function TreeOfLifeScene() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#faf9f5]" id="tree-of-life-scene-container">
      {/* CSS Animation styles specifically for the Tree of Life scene */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gentleRipple {
          0%, 100% { transform: scaleX(1) translateX(0); opacity: 0.4; }
          50% { transform: scaleX(1.05) translateX(-2px); opacity: 0.7; }
        }
        @keyframes beamPulse {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.18; }
        }
        @keyframes floatParticle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-40px) translateX(10px); opacity: 0; }
        }
        @keyframes leafDrift {
          0% { transform: translateY(-20px) translateX(-10px) rotate(0deg); opacity: 0; }
          15% { opacity: 0.7; }
          85% { opacity: 0.7; }
          100% { transform: translateY(120px) translateX(30px) rotate(180deg); opacity: 0; }
        }
        .animate-ripple-1 {
          animation: gentleRipple 6s ease-in-out infinite;
        }
        .animate-ripple-2 {
          animation: gentleRipple 8s ease-in-out infinite 1.5s;
        }
        .animate-ripple-3 {
          animation: gentleRipple 7s ease-in-out infinite 3s;
        }
        .animate-beam {
          animation: beamPulse 10s ease-in-out infinite;
        }
        .animate-particle-1 {
          animation: floatParticle 8s linear infinite;
        }
        .animate-particle-2 {
          animation: floatParticle 11s linear infinite 3s;
        }
        .animate-particle-3 {
          animation: floatParticle 9s linear infinite 5.5s;
        }
        .animate-leaf-drift-1 {
          animation: leafDrift 14s linear infinite;
        }
        .animate-leaf-drift-2 {
          animation: leafDrift 18s linear infinite 5s;
        }
      `}} />

      <svg
        viewBox="0 0 500 312"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        id="tree-of-life-svg"
      >
        <defs>
          {/* Sky Gradient: Morning Golden Hour */}
          <linearGradient id="skyGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FFF1D6" />      {/* Warm Golden Sunrise */}
            <stop offset="35%" stopColor="#FFF9E6" />     {/* Creamy light */}
            <stop offset="70%" stopColor="#E2EFE9" />     {/* Muted Sage White */}
            <stop offset="100%" stopColor="#BFDCD5" />    {/* Tranquil Soft Sage Blue */}
          </linearGradient>

          {/* Sun Glow */}
          <radialGradient id="sunGlow" cx="30%" cy="55%" r="55%">
            <stop offset="0%" stopColor="#FFFDF4" stopOpacity="1" />
            <stop offset="25%" stopColor="#FFEAA7" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#FFD27F" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFF1D6" stopOpacity="0" />
          </radialGradient>

          {/* Water Gradient with reflective colors */}
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFECB3" />      {/* Golden morning light reflection */}
            <stop offset="20%" stopColor="#D4E6D9" />     {/* Soft sage reflection */}
            <stop offset="65%" stopColor="#9BC0BE" />     {/* Soft turquoise blue */}
            <stop offset="100%" stopColor="#6C939A" />    {/* Tranquil blue-gray deep water */}
          </linearGradient>

          {/* Distant Hills Gradient */}
          <linearGradient id="hillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D2E2D8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#98B5A6" stopOpacity="0.8" />
          </linearGradient>

          {/* Ground Shore Gradient */}
          <linearGradient id="shoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A8C3B4" />      {/* Soft sage shoreline */}
            <stop offset="60%" stopColor="#8DA899" />     {/* Muted olive-sage */}
            <stop offset="100%" stopColor="#728B7E" />    {/* Deeper grounding tone */}
          </linearGradient>

          {/* Subtly transparent soil layer */}
          <linearGradient id="soilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7C6E5F" stopOpacity="0.92" />
            <stop offset="40%" stopColor="#635548" stopOpacity="0.94" />
            <stop offset="100%" stopColor="#44382E" stopOpacity="0.97" />
          </linearGradient>

          {/* Golden Root Energy Glow */}
          <linearGradient id="rootGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DFB06B" />
            <stop offset="60%" stopColor="#EAD8B1" />
            <stop offset="100%" stopColor="#DFB06B" stopOpacity="0.4" />
          </linearGradient>

          {/* Tree Trunk & Major Branches Gradient */}
          <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#56463C" />
            <stop offset="40%" stopColor="#43352C" />
            <stop offset="100%" stopColor="#2E231C" />
          </linearGradient>

          {/* Leaf Watercolor Blobs Gradients */}
          <radialGradient id="leafSage" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C3DEC9" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#8FA895" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6C8471" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="leafTeal" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#BCE3E7" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#82AFB4" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#527F84" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="leafGold" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE094" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#E2B765" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C5933A" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="leafCream" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFBF0" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#EADEC9" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#CBBFA9" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. SKY BACKGROUND */}
        <rect width="500" height="312" fill="url(#skyGrad)" />

        {/* 2. MORNING SUN GLOW & RAYS */}
        <circle cx="150" cy="170" r="140" fill="url(#sunGlow)" />
        
        {/* Soft volumetric sun rays */}
        <g className="animate-beam">
          <polygon points="150,170 -50,60 10,20" fill="#FFFDF4" opacity="0.12" />
          <polygon points="150,170 80,0 170,0" fill="#FFFDF4" opacity="0.15" />
          <polygon points="150,170 260,0 360,20" fill="#FFFDF4" opacity="0.12" />
          <polygon points="150,170 420,50 520,120" fill="#FFFDF4" opacity="0.10" />
          <polygon points="150,170 -20,130 50,80" fill="#FFFDF4" opacity="0.08" />
        </g>

        {/* 3. DISTANT MOUNTAINS */}
        <path d="M-20,175 Q40,162 100,168 T220,160 T340,165 T460,158 T520,163 L520,185 L-20,185 Z" fill="url(#hillGrad)" />
        <path d="M-20,180 Q80,172 160,177 T320,170 T480,175 T520,172 L520,195 L-20,195 Z" fill="url(#hillGrad)" opacity="0.6" />

        {/* 4. CALM LAKE WATER (Foreground & Left Side) */}
        <rect x="0" y="176" width="500" height="136" fill="url(#waterGrad)" />

        {/* Sun reflection path in water */}
        <polygon points="150,176 110,312 190,312" fill="#FFEAA7" opacity="0.25" />
        <ellipse cx="150" cy="185" rx="30" ry="2" fill="#FFFDF4" opacity="0.6" />
        <ellipse cx="150" cy="195" rx="55" ry="3.5" fill="#FFFDF4" opacity="0.45" />
        <ellipse cx="150" cy="210" rx="40" ry="3" fill="#FFFDF4" opacity="0.4" />
        <ellipse cx="145" cy="230" rx="65" ry="4" fill="#FFFDF4" opacity="0.3" />
        <ellipse cx="155" cy="255" rx="50" ry="5" fill="#FFFDF4" opacity="0.25" />
        <ellipse cx="140" cy="285" rx="80" ry="6" fill="#FFFDF4" opacity="0.15" />

        {/* 5. GENTLE RIPPLES ON WATER (Animated) */}
        <g stroke="#FFFDF4" strokeWidth="0.8" strokeLinecap="round" fill="none">
          <line x1="40" y1="190" x2="110" y2="190" className="animate-ripple-1" />
          <line x1="220" y1="185" x2="270" y2="185" className="animate-ripple-2" />
          <line x1="80" y1="205" x2="160" y2="205" className="animate-ripple-3" opacity="0.6" />
          <line x1="15" y1="225" x2="95" y2="225" className="animate-ripple-2" />
          <line x1="185" y1="235" x2="265" y2="235" className="animate-ripple-1" opacity="0.5" />
          <line x1="60" y1="260" x2="170" y2="260" className="animate-ripple-3" />
          <line x1="110" y1="280" x2="240" y2="280" className="animate-ripple-1" opacity="0.7" />
          <line x1="30" y1="295" x2="140" y2="295" className="animate-ripple-2" opacity="0.4" />
        </g>

        {/* 6. GROUNDING SHORE & SOIL (Right Side, holding the Tree) */}
        {/* Base shoreline path curving gracefully */}
        <path d="M 230,176 C 280,176 310,170 360,174 C 410,178 450,172 510,175 L 510,320 L 230,320 Z" fill="url(#shoreGrad)" />
        
        {/* Beneath-earth soil container where roots are visible */}
        <path d="M 270,178 C 310,178 340,174 380,177 C 420,180 460,174 510,176 L 510,320 L 270,320 Z" fill="url(#soilGrad)" />

        {/* 7. SUBTLY VISIBLE ROOTS (Grounding concept - drawn inside soil with soft glowing gold/bronze) */}
        <g stroke="url(#rootGlow)" fill="none" strokeLinecap="round" opacity="0.8">
          {/* Main Taproot */}
          <path d="M370,176 Q372,210 382,245 T395,285 Q398,295 396,305" strokeWidth="4.5" />
          {/* Left Root Systems extending towards water */}
          <path d="M365,178 Q330,205 295,225 T265,255" strokeWidth="3" />
          <path d="M320,210 Q290,235 275,270" strokeWidth="1.8" />
          <path d="M350,195 Q310,215 280,240 T255,275" strokeWidth="2.2" />
          <path d="M295,225 Q275,250 250,260" strokeWidth="1.2" />
          
          {/* Central Root Network */}
          <path d="M372,185 Q360,225 355,260 T350,295" strokeWidth="2.8" />
          <path d="M358,220 Q335,245 320,280" strokeWidth="1.6" />
          <path d="M375,200 Q382,235 378,270 T380,300" strokeWidth="2.5" />

          {/* Right Root Systems grounding deeply */}
          <path d="M378,176 Q420,200 455,215 T490,235" strokeWidth="3" />
          <path d="M390,195 Q435,215 465,245 T495,270" strokeWidth="2.2" />
          <path d="M430,210 Q455,240 480,265" strokeWidth="1.5" />
          <path d="M405,225 Q435,255 450,290" strokeWidth="1.8" />
          <path d="M455,245 Q475,275 498,295" strokeWidth="1.2" />
        </g>

        {/* Soil texture & depth layers to blend the roots subtly */}
        <path d="M 270,178 C 310,178 340,174 380,177 C 420,180 460,174 510,176 L 510,320 L 270,320 Z" fill="url(#soilGrad)" opacity="0.45" />

        {/* Shoreline edge details (lush grasses & soft gold highlight) */}
        <path d="M 230,176 C 280,176 310,170 360,174 C 410,178 450,172 510,175" stroke="#EAD8B1" strokeWidth="1.5" fill="none" opacity="0.7" />

        {/* 8. MAJESTIC TREE TRUNK (Elegant, twisting, organic wisdom) */}
        <g>
          {/* Major Trunk Structure */}
          <path d="M350,178 C352,150 358,110 370,85 C373,78 370,68 362,65 C348,60 330,55 315,58" fill="none" stroke="url(#trunkGrad)" strokeWidth="15" strokeLinecap="round" />
          <path d="M380,178 C378,145 375,105 385,82 C390,72 400,65 415,60 C430,55 448,53 460,56" fill="none" stroke="url(#trunkGrad)" strokeWidth="13" strokeLinecap="round" />
          
          {/* Solid fill overlay for trunk integration */}
          <path d="M346,178 C348,135 358,100 372,75 C377,66 385,66 390,75 C404,100 412,135 414,178 Z" fill="url(#trunkGrad)" />
          
          {/* Organic bark lines representing age & wisdom */}
          <path d="M358,178 Q360,140 370,115 T380,78" stroke="#32251D" strokeWidth="1.2" fill="none" opacity="0.7" />
          <path d="M370,178 Q372,135 382,105 T392,76" stroke="#221812" strokeWidth="1.5" fill="none" opacity="0.8" />
          <path d="M382,178 Q380,145 390,120 T398,85" stroke="#32251D" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M364,150 Q368,125 376,105" stroke="#6E5C51" strokeWidth="0.8" fill="none" opacity="0.5" />
          <path d="M394,145 Q392,120 388,98" stroke="#6E5C51" strokeWidth="0.8" fill="none" opacity="0.5" />

          {/* Golden outline highlighting morning sun reflection on trunk */}
          <path d="M346,178 C348,145 358,112 372,85" stroke="#FFF1D6" strokeWidth="1.2" fill="none" opacity="0.6" />
        </g>

        {/* 9. EXTENDING BEAUTIFUL BRANCHES (Growth & Connection) */}
        <g stroke="url(#trunkGrad)" strokeLinecap="round" fill="none">
          {/* Main Left Branches */}
          <path d="M366,85 C345,72 310,65 285,68 C270,70 250,82 230,80" strokeWidth="7" />
          <path d="M285,68 C265,55 240,48 210,50 T175,65" strokeWidth="4.5" />
          <path d="M238,81 C220,78 195,85 180,95 T150,115" strokeWidth="3" />
          <path d="M210,50 C195,38 175,32 150,35" strokeWidth="2.5" />
          <path d="M255,62 C245,45 225,35 205,25" strokeWidth="3" />
          <path d="M285,68 C280,50 270,35 255,20" strokeWidth="3" />

          {/* Main Center-Top Branches */}
          <path d="M378,70 C370,52 360,32 345,18 C338,12 322,8 310,5" strokeWidth="5.5" />
          <path d="M352,32 C345,22 330,15 315,10" strokeWidth="3" />
          <path d="M382,72 C390,52 398,35 410,22 C418,14 430,8 445,5" strokeWidth="5" />
          <path d="M396,40 C405,28 418,20 432,15" strokeWidth="2.5" />

          {/* Main Right Branches */}
          <path d="M398,82 C418,72 445,68 468,75 T505,88" strokeWidth="7.5" />
          <path d="M455,71 C475,62 495,58 515,62" strokeWidth="4.5" />
          <path d="M428,76 C445,88 470,95 490,110 T520,135" strokeWidth="3" />
          <path d="M472,64 C485,50 502,42 522,40" strokeWidth="2.5" />
        </g>

        {/* 10. LUSH CANOPY & LEAF CLUSTERS (Watercolor styled blobs + organic groupings) */}
        {/* Soft Background leaf blobs (creates the beautiful mist/watercolor depth) */}
        <g opacity="0.6">
          {/* Left clusters */}
          <circle cx="170" cy="65" r="45" fill="url(#leafSage)" />
          <circle cx="220" cy="50" r="50" fill="url(#leafTeal)" />
          <circle cx="260" cy="35" r="40" fill="url(#leafSage)" />
          {/* Top clusters */}
          <circle cx="320" cy="22" r="38" fill="url(#leafCream)" />
          <circle cx="370" cy="20" r="42" fill="url(#leafGold)" />
          <circle cx="420" cy="22" r="35" fill="url(#leafCream)" />
          {/* Right clusters */}
          <circle cx="470" cy="55" r="45" fill="url(#leafSage)" />
          <circle cx="490" cy="90" r="40" fill="url(#leafTeal)" />
          <circle cx="440" cy="95" r="38" fill="url(#leafSage)" />
        </g>

        {/* Foreground detailed leaf clusters & circles */}
        <g opacity="0.85">
          {/* Left side detailed leaves */}
          <circle cx="150" cy="70" r="30" fill="url(#leafSage)" />
          <circle cx="190" cy="85" r="35" fill="url(#leafTeal)" />
          <circle cx="205" cy="55" r="28" fill="url(#leafSage)" />
          <circle cx="235" cy="70" r="32" fill="url(#leafGold)" />
          <circle cx="130" cy="100" r="25" fill="url(#leafSage)" />
          
          {/* Center-top detailed leaves */}
          <circle cx="290" cy="28" r="32" fill="url(#leafCream)" />
          <circle cx="340" cy="15" r="30" fill="url(#leafGold)" />
          <circle cx="395" cy="18" r="32" fill="url(#leafCream)" />
          <circle cx="365" cy="35" r="26" fill="url(#leafSage)" />

          {/* Right side detailed leaves */}
          <circle cx="455" cy="50" r="32" fill="url(#leafSage)" />
          <circle cx="485" cy="70" r="35" fill="url(#leafTeal)" />
          <circle cx="440" cy="80" r="28" fill="url(#leafGold)" />
          <circle cx="505" cy="110" r="24" fill="url(#leafSage)" />
        </g>

        {/* Intricate golden highlight leaf circles for beautiful cinematic sunrise pop */}
        <g opacity="0.9" fill="#FFEAA7">
          <circle cx="175" cy="45" r="6" />
          <circle cx="185" cy="48" r="4.5" />
          <circle cx="230" cy="35" r="5" />
          <circle cx="245" cy="58" r="7" />
          <circle cx="320" cy="12" r="5.5" />
          <circle cx="355" cy="10" r="8" fill="#FFFDF4" />
          <circle cx="380" cy="25" r="6.5" />
          <circle cx="405" cy="15" r="5" />
          <circle cx="435" cy="32" r="7" />
          <circle cx="470" cy="42" r="5.5" />
          <circle cx="450" cy="65" r="6" />
        </g>

        {/* Individual stylized leaf path shapes overlaid for handcrafted design depth */}
        <g fill="#7E9C86" opacity="0.8">
          {/* Left Group */}
          <path d="M150,75 C140,75 135,70 145,65 C155,60 160,68 150,75 Z" />
          <path d="M172,92 C165,90 162,82 170,80 C178,78 180,86 172,92 Z" fill="#587A62" />
          <path d="M190,62 C182,65 178,58 186,54 C194,50 198,58 190,62 Z" fill="#E2B765" />
          <path d="M225,50 C218,48 214,40 222,38 C230,36 232,44 225,50 Z" />
          <path d="M250,70 C242,72 238,65 246,60 C254,55 258,63 250,70 Z" fill="#587A62" />

          {/* Right Group */}
          <path d="M435,55 C425,55 420,50 430,45 C440,40 445,48 435,55 Z" fill="#E2B765" />
          <path d="M465,65 C458,68 452,62 460,56 C468,50 472,58 465,65 Z" />
          <path d="M492,85 C485,82 480,75 490,72 C500,69 502,77 492,85 Z" fill="#587A62" />
          <path d="M450,105 C442,102 438,95 448,92 C458,89 460,97 450,105 Z" fill="#587A62" />
        </g>

        {/* 11. SHIMMERING SUNBEAM PARTICLES & DRIFTING LEAVES (Hope, Healing, Release) */}
        {/* Soft floating golden particles */}
        <g fill="#FFEAA7" opacity="0.8">
          <circle cx="210" cy="110" r="2" className="animate-particle-1" />
          <circle cx="270" cy="80" r="1.5" className="animate-particle-2" />
          <circle cx="340" cy="65" r="2.3" className="animate-particle-3" />
          <circle cx="410" cy="95" r="1.8" className="animate-particle-1" />
          <circle cx="160" cy="120" r="2.5" className="animate-particle-2" />
          <circle cx="310" cy="135" r="1.5" className="animate-particle-3" />
        </g>

        {/* Drifting leaves falling gently into the lake */}
        <g fill="#A8C3B4" opacity="0.85">
          <path d="M190,130 C182,132 178,125 186,120 C194,115 198,123 190,130 Z" className="animate-leaf-drift-1" />
          <path d="M315,115 C308,118 302,112 310,106 C318,100 322,108 315,115 Z" fill="#E2B765" className="animate-leaf-drift-2" />
        </g>

        {/* 12. LUSH SHORELINE BOTANICALS & WILDFLOWERS (Abundance & Life) */}
        {/* Delicate wild grasses along the bank */}
        <g stroke="#567260" strokeWidth="1.2" fill="none" strokeLinecap="round">
          {/* Grass clusters on the left of the shore */}
          <path d="M235,176 Q230,165 224,158" />
          <path d="M235,176 Q235,162 231,154" />
          <path d="M235,176 Q239,166 244,160" />

          {/* Grass cluster near tree base */}
          <path d="M310,178 Q305,164 298,155" />
          <path d="M310,178 Q311,161 307,151" stroke="#89A392" strokeWidth="0.9" />
          <path d="M310,178 Q316,165 321,158" />

          <path d="M335,176 Q330,160 322,148" stroke="#E2B765" strokeWidth="1" opacity="0.8" />
          <path d="M335,176 Q336,155 332,144" stroke="#89A392" strokeWidth="1.1" />
          <path d="M335,176 Q341,162 346,152" />

          {/* Reed clusters right side */}
          <path d="M420,179 Q415,158 405,142" stroke="#567260" strokeWidth="1.5" />
          <path d="M420,179 Q421,152 415,138" stroke="#E2B765" strokeWidth="1.2" />
          <path d="M420,179 Q428,160 434,146" stroke="#567260" strokeWidth="1.1" />

          <path d="M465,177 Q460,162 452,150" />
          <path d="M465,177 Q466,156 462,145" stroke="#89A392" />
          <path d="M465,177 Q471,164 476,155" />
        </g>

        {/* Soft watercolor floral blobs (lavender, gold, cream wildflowers) */}
        <g opacity="0.9">
          {/* Goldenrod / yellow flowers */}
          <circle cx="240" cy="173" r="2.5" fill="#FFEAA7" />
          <circle cx="238" cy="170" r="2" fill="#FFD27F" />
          <circle cx="242" cy="171" r="1.8" fill="#FFFDF4" />

          <circle cx="305" cy="174" r="3" fill="#FFEAA7" />
          <circle cx="303" cy="171" r="2" fill="#E2B765" />
          <circle cx="308" cy="172" r="2.2" fill="#FFEAA7" />

          {/* Soft lavender / blue wildflowers */}
          <circle cx="328" cy="173" r="2.5" fill="#A2C3E2" opacity="0.8" />
          <circle cx="326" cy="170" r="2" fill="#84A9D0" opacity="0.8" />
          <circle cx="330" cy="171" r="1.8" fill="#FFFDF4" />

          <circle cx="430" cy="175" r="3" fill="#A2C3E2" opacity="0.85" />
          <circle cx="427" cy="171" r="2.3" fill="#84A9D0" opacity="0.85" />
          <circle cx="433" cy="172" r="2" fill="#FFEAA7" />

          <circle cx="452" cy="174" r="2.5" fill="#FFFDF4" />
          <circle cx="454" cy="171" r="1.8" fill="#FFEAA7" />
        </g>
      </svg>
    </div>
  );
}
