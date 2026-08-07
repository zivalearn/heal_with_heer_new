import React, { useState } from 'react';
import logoImg from '../assets/logo.png';
import { SmartImage } from './SmartImage';

interface HealLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  isDarkBg?: boolean;
}

export default function HealLogo({ className = '', size = 'md', showText = true, isDarkBg = false }: HealLogoProps) {
  const [imgError, setImgError] = useState(false);

  // Sizing configurations for crisp rendering without blurriness
  const dimensions = {
    sm: { width: 50, height: 35, imgClass: 'h-8 sm:h-9 w-auto max-h-[36px]' },
    md: { width: 100, height: 55, imgClass: 'h-11 sm:h-13 md:h-14 w-auto max-h-[56px]' },
    lg: { width: 150, height: 80, imgClass: 'h-20 sm:h-24 w-auto max-h-[96px]' },
    xl: { width: 260, height: 140, imgClass: 'h-32 sm:h-40 w-auto max-h-[160px]' }
  };

  const textStyles = {
    sm: {
      healWith: 'text-[9px] sm:text-[10px]',
      heer: 'text-[12px] sm:text-[13px]'
    },
    md: {
      healWith: 'text-[11px] sm:text-[12px] md:text-[13px]',
      heer: 'text-[15px] sm:text-[17px] md:text-[19px]'
    },
    lg: {
      healWith: 'text-[15px] sm:text-[17px]',
      heer: 'text-[22px] sm:text-[26px]'
    },
    xl: {
      healWith: 'text-[20px] sm:text-[24px]',
      heer: 'text-[30px] sm:text-[36px]'
    }
  };

  const currentSize = dimensions[size];
  const currentTextStyle = textStyles[size];

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 ${className} select-none`}>
      {!imgError ? (
        <div className={isDarkBg ? "bg-white/95 rounded-lg p-1 shadow-sm border border-white/20 inline-flex items-center justify-center shrink-0" : "inline-flex items-center justify-center shrink-0"}>
          <SmartImage
            id="global.logo"
            defaultSrc={logoImg}
            alt="Heal With Heer Logo"
            className={`object-contain transition-transform duration-300 hover:scale-[1.03] ${
              isDarkBg ? 'mix-blend-normal brightness-100' : 'mix-blend-multiply filter contrast-[1.05] brightness-[0.98]'
            } ${currentSize.imgClass}`}
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        /* Precision Vector SVG Logo Fallback */
        <svg
          width={currentSize.width}
          height={currentSize.height}
          viewBox="0 0 1000 660"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-500 hover:scale-105"
        >
          {/* Left Olive/Herbal Leaves */}
          <path
            d="M 120 330 C 70 300, 50 240, 70 190 C 85 220, 110 240, 130 250"
            stroke="#8fa89b"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M 100 240 C 60 210, 40 160, 60 110 C 75 140, 100 160, 110 170"
            stroke="#8fa89b"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M 140 280 C 110 250, 90 190, 100 130 C 120 160, 140 180, 150 200"
            stroke="#8fa89b"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Outer Infinity Loop Glimmer/Gradation */}
          <defs>
            <linearGradient id="infinityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#165e7d" />
              <stop offset="50%" stopColor="#4f9da6" />
              <stop offset="100%" stopColor="#165e7d" />
            </linearGradient>
            <linearGradient id="chakraPurple" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#b187eb" />
              <stop offset="100%" stopColor="#7e4ebd" />
            </linearGradient>
            <linearGradient id="chakraIndigo" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8799eb" />
              <stop offset="100%" stopColor="#4c5ebf" />
            </linearGradient>
            <linearGradient id="chakraBlue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#87dbeb" />
              <stop offset="100%" stopColor="#259ab8" />
            </linearGradient>
            <linearGradient id="chakraGreen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8be3bc" />
              <stop offset="100%" stopColor="#2ca36a" />
            </linearGradient>
            <linearGradient id="chakraYellow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#faeb93" />
              <stop offset="100%" stopColor="#d1b415" />
            </linearGradient>
            <linearGradient id="chakraOrange" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fca762" />
              <stop offset="100%" stopColor="#d16b11" />
            </linearGradient>
            <linearGradient id="chakraRed" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f27272" />
              <stop offset="100%" stopColor="#bd2a2a" />
            </linearGradient>
          </defs>

          {/* Left Infinity Loop */}
          <path
            d="M 500 330 C 400 180, 200 160, 160 330 C 120 500, 400 480, 500 330 Z"
            stroke="url(#infinityGrad)"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
          />

          {/* Right Infinity Loop */}
          <path
            d="M 500 330 C 600 180, 800 160, 840 330 C 880 500, 600 480, 500 330 Z"
            stroke="url(#infinityGrad)"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
          />

          {/* Crescent Moon in Left Loop */}
          <path
            d="M 280 230 C 210 230, 170 300, 170 360 C 170 420, 210 490, 280 490 C 240 450, 215 390, 220 340 C 225 290, 250 250, 280 230 Z"
            fill="#165e7d"
            opacity="0.85"
          />

          {/* Stars around moon */}
          <path d="M 290 280 L 293 288 L 301 288 L 295 293 L 297 301 L 290 296 L 283 301 L 285 293 L 279 288 L 287 288 Z" fill="#d4af37" />
          <path d="M 320 340 L 322 345 L 328 345 L 323 349 L 324 355 L 320 351 L 316 355 L 317 349 L 312 345 L 318 345 Z" fill="#d4af37" />
          <path d="M 275 420 L 277 424 L 282 424 L 278 427 L 279 432 L 275 429 L 271 432 L 272 427 L 268 424 L 273 424 Z" fill="#d4af37" />

          {/* Star spiral in Right Loop */}
          <path
            d="M 760 330 A 60 60 0 1 0 700 270 A 50 50 0 1 0 710 370 A 35 35 0 1 0 740 320 A 20 20 0 1 0 725 315"
            stroke="#4f9da6"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
          <path d="M 725 315 L 750 240 M 725 315 L 660 380 M 725 315 L 800 370 M 725 315 L 650 280" stroke="#bde0e5" strokeWidth="5" opacity="0.6" />
          <path d="M 725 315 L 728 300 L 740 300 L 730 310 L 733 325 L 725 316 L 717 325 L 720 310 L 710 300 L 722 300 Z" fill="#d4af37" />

          {/* CENTRAL AXIS - CHAKRA PILLAR */}
          <circle cx="500" cy="70" r="45" fill="url(#chakraPurple)" stroke="#fff" strokeWidth="6" />
          <path d="M 485 75 C 485 60, 500 55, 515 65 C 510 75, 495 85, 485 75 Z M 500 70 C 505 55, 520 60, 515 75 C 505 75, 500 70, 500 70 Z" fill="#fff" />
          <path d="M 495 72 L 485 82 L 495 79 Z" fill="#fff" />

          <circle cx="500" cy="155" r="45" fill="url(#chakraIndigo)" stroke="#fff" strokeWidth="6" />
          <path d="M 500 135 C 515 145, 515 165, 500 175 C 485 165, 485 145, 500 135 Z" fill="#fff" />
          <path d="M 500 145 C 508 152, 508 158, 500 165 C 492 158, 492 152, 500 145 Z" fill="url(#chakraIndigo)" />

          <circle cx="500" cy="240" r="45" fill="url(#chakraBlue)" stroke="#fff" strokeWidth="6" />
          <path d="M 480 240 C 480 230, 490 230, 500 240 C 490 250, 480 250, 480 240 Z M 520 240 C 520 230, 510 230, 500 240 C 510 250, 520 250, 520 240 Z" fill="#fff" />
          <circle cx="500" cy="240" r="8" fill="#fff" />

          <circle cx="500" cy="325" r="45" fill="url(#chakraGreen)" stroke="#fff" strokeWidth="6" />
          <path d="M 475 325 C 485 313, 515 313, 525 325 C 515 337, 485 337, 475 325 Z" fill="#fff" />
          <circle cx="500" cy="325" r="10" fill="url(#chakraGreen)" />
          <circle cx="500" cy="325" r="4" fill="#fff" />

          <circle cx="500" cy="410" r="45" fill="url(#chakraYellow)" stroke="#fff" strokeWidth="6" />
          <path d="M 500 393 C 506 405, 514 410, 522 410 C 510 415, 505 425, 500 427 C 495 425, 490 415, 478 410 C 486 410, 494 405, 500 393 Z" fill="#fff" />
          <circle cx="500" cy="413" r="5" fill="url(#chakraYellow)" />

          <circle cx="500" cy="495" r="45" fill="url(#chakraOrange)" stroke="#fff" strokeWidth="6" />
          <circle cx="500" cy="495" r="15" fill="#fff" />
          <path d="M 500 470 L 500 475 M 500 515 L 500 520 M 475 495 L 480 495 M 520 495 L 525 495" stroke="url(#chakraOrange)" strokeWidth="4" strokeLinecap="round" />
          <path d="M 482 477 L 486 481 M 514 509 L 518 513 M 482 513 L 486 509 M 514 481 L 518 477" stroke="url(#chakraOrange)" strokeWidth="4" strokeLinecap="round" />

          <circle cx="500" cy="580" r="45" fill="url(#chakraRed)" stroke="#fff" strokeWidth="6" />
          <path
            d="M 500 580 A 18 18 0 1 0 482 580 A 14 14 0 1 0 496 580 A 10 10 0 1 0 490 580 A 6 6 0 1 0 494 580"
            stroke="#fff"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      )}

      {/* Brand Text - Rendered next to the logo when showText is true */}
      {showText && (
        <div className="flex flex-col text-left justify-center pl-0.5">
          <span
            className={`font-serif italic font-bold uppercase ${
              isDarkBg ? 'text-[#E2F5F8]' : 'text-[#1e5d75]'
            } ${currentTextStyle.healWith} leading-none tracking-[0.08em]`}
          >
            HEAL WITH
          </span>
          <span
            className={`font-serif font-bold uppercase ${
              isDarkBg ? 'text-[#FCD34D]' : 'text-[#ba8d2f]'
            } ${currentTextStyle.heer} leading-none tracking-[0.12em] -mt-0.5 sm:-mt-1`}
          >
            HEER
          </span>
        </div>
      )}
    </div>
  );
}
