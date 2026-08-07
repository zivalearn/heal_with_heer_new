import React from 'react';
import hypnotherapy from '@/assets/modalities/hypnotherapy.jpeg';
import innerchild from '@/assets/modalities/innerchild.jpeg';
import nlp from '@/assets/modalities/nlp.jpeg';
import reiki from '@/assets/modalities/reiki.jpeg';
import relationship from '@/assets/modalities/relationship.jpeg';
import tarot from '@/assets/modalities/tarot.jpeg';
import timeline from '@/assets/modalities/timeline.jpeg';
import trauma from '@/assets/modalities/trauma.jpeg';
import { SmartImage } from './SmartImage';

const modalityImages: Record<string, string> = {
  hypnotherapy,
  innerchild,
  nlp,
  reiki,
  relationship,
  tarot,
  timeline,
  trauma,
};

interface ModalityImageProps {
  id: string;
  alt: string;
  className?: string;
}

export default function ModalityImage({ id, alt, className = "w-full h-full object-cover" }: ModalityImageProps) {
  const imgSrc = modalityImages[id];
  return (
    <SmartImage
      id={`modality.${id}`}
      defaultSrc={imgSrc}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
    />
  );
}
