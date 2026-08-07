import React, { useState } from 'react';
import { Camera, RefreshCw, Eye } from 'lucide-react';
import { useImageRegistry } from '../context/ImageContext';

export interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  id: string;
  defaultSrc: string;
  className?: string;
  alt?: string;
  badgePosition?: 'top-right' | 'top-left' | 'center' | 'bottom-right';
  badgeLabel?: string;
  wrapperClassName?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  id,
  defaultSrc,
  className = '',
  alt = '',
  badgePosition = 'top-right',
  badgeLabel,
  wrapperClassName = '',
  src: _overrideSrc,
  ...props
}) => {
  const { getSrc, isVisualEditMode, isAdminUnlocked, openReplaceModal, getImageInfo, manifest } = useImageRegistry();
  const [isHovered, setIsHovered] = useState(false);

  const currentSrc = getSrc(id, defaultSrc);
  const info = getImageInfo(id);
  const isCustom = Boolean(manifest[id]?.currentSrc);

  const positionClasses = {
    'top-right': 'top-2 right-2',
    'top-left': 'top-2 left-2',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'bottom-right': 'bottom-2 right-2'
  }[badgePosition];

  // If visual edit mode is disabled or admin not logged in, render standard <img> tag
  if (!isVisualEditMode || !isAdminUnlocked) {
    return (
      <img
        src={currentSrc}
        alt={alt || info?.title || id}
        className={className}
        {...props}
      />
    );
  }

  return (
    <div
      className={`relative group inline-block ${wrapperClassName}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={currentSrc}
        alt={alt || info?.title || id}
        className={`${className} transition-all duration-300 ${
          isHovered ? 'ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-black/80 brightness-105' : ''
        }`}
        {...props}
      />

      {/* Floating Visual Edit Overlay Badge */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          openReplaceModal(id, defaultSrc);
        }}
        className={`absolute ${positionClasses} z-40 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#071b2e]/90 text-[#D4AF37] border border-[#D4AF37]/60 shadow-[0_0_15px_rgba(212,175,55,0.4)] text-xs font-sans font-medium transition-all duration-200 hover:bg-[#D4AF37] hover:text-[#030815] hover:scale-105 active:scale-95 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-85 scale-95'
        }`}
        title={`Replace image: ${info?.title || id}`}
      >
        <Camera className="w-3.5 h-3.5" />
        <span>{badgeLabel || '📷 Replace Image'}</span>
        {isCustom && (
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-0.5" title="Custom image uploaded" />
        )}
      </button>
    </div>
  );
};
