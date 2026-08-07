import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Modality } from '../types';
import { Sparkles, Compass, Eye, Heart, Flame, ShieldCheck, Hourglass, Calendar, Info, BookOpen, ArrowRight } from 'lucide-react';
import ModalityCircle from './ModalityCircle';

interface HealingModalitiesProps {
  onBookModality: (modalityName: string) => void;
  onSelectModality: (modalityId: string) => void;
}

const MODALITIES_DATA: Modality[] = [
  {
    id: 'nlp',
    title: 'Neuro Linguistic Programming',
    description: 'Cognitive Reframing, Belief Clearing & Behavioral Anchoring for absolute mental mastery.',
    detailedDescription: 'NLP with Heer works directly with the structure of your subjective experience. By identifying the subconscious language patterns and neural programming that govern your behaviors, we surgically dismantle limiting beliefs of "not being enough" or "fear of failure." Through advanced reframing and anchor installation, Heer helps you rewire your thoughts, aligning your conscious desires with your subconscious habits for effortless success.',
    iconName: 'Hourglass',
    color: 'teal'
  },
  {
    id: 'relationship',
    title: 'Relationship Mastery',
    description: 'Conscious Connection, Attachment Healing & Sacred Boundaries to open your heart safely.',
    detailedDescription: 'Relationship Mastery is a sacred container for healing relational wounds and ancestral attachment patterns. Whether you are navigating codependency, fear of intimacy, or recurring heartbreak, Heer guides you to release stored heartbreak from your cellular memory. Learn to establish radiant, sovereign boundaries while cultivating the safety to receive deep, conscious, unconditional love.',
    iconName: 'Heart',
    color: 'sage'
  },
  {
    id: 'trauma',
    title: 'Trauma Healing',
    description: 'Somatic Release, polyvagal regulation, and cellular repatterning to restore complete nervous system safety.',
    detailedDescription: 'Trauma is not just a psychological event; it is a physiological imprint stored within your nervous system and fascia. Heer uses gentle, trauma-informed somatic release, polyvagal mapping, and breathwork to safely complete unresolved fight-or-flight loops. Without needing to intellectually re-live past events, you will discharge stored distress, returning to a state of absolute sovereignty, calm, and safety in your body.',
    iconName: 'Sparkles',
    color: 'teal'
  },
  {
    id: 'reiki',
    title: 'Reiki Healing',
    description: 'Usui Reiki energy alignment and aura cleansing to harmonize your 7 sacred energy centers.',
    detailedDescription: 'This signature treatment is a comprehensive energetic tune-up. As an Usui Reiki Master, Heer scans and purifies your auric field to identify stagnant or depleted chakras. Using a blend of pure universal life-force energy, bespoke crystal grids, and targeted visualization, she gently clears blocks and aligns your centers. Clients report an immediate, profound sense of deep peace, mental clarity, and physical lightness.',
    iconName: 'Flame',
    color: 'sage'
  },
  {
    id: 'hypnotherapy',
    title: 'Hypnotherapy EFT',
    description: 'Deep subconscious reprogramming and meridian tapping to rapidly release emotional blockages.',
    detailedDescription: 'Hypnotherapy combined with Emotional Freedom Techniques (EFT) offers a quantum leap in emotional clearing. Heer guides you into a deeply relaxing, highly receptive theta brainwave state to directly access and reprogram the subconscious mind. Paired with targeted meridian tapping, we short-circuit the body\'s stress response, dissolving fears, phobias, and emotional blockages in minutes rather than years.',
    iconName: 'Eye',
    color: 'gold'
  },
  {
    id: 'innerchild',
    title: 'Energy Healing Cord Cutting',
    description: 'Regression therapy and energetic detachment rituals to release past bonds and reclaim your playful, sovereign self.',
    detailedDescription: 'Many adult self-sabotages stem from unhealed childhood wounds and invisible energetic cords connecting us to past partners or trauma. In this deeply restorative journey, Heer guides you to meet, comfort, and reparent your inner child, giving them the safety they never received. We then perform a sacred cord-cutting ritual, gently severing toxic or draining ties to restore your complete energetic sovereignty.',
    iconName: 'ShieldCheck',
    color: 'sage'
  },
  {
    id: 'timeline',
    title: 'Timeline Therapy',
    description: 'Release limiting beliefs and emotional blocks, heal past experiences, and create lasting positive change.',
    detailedDescription: 'Timeline Therapy is a powerful journey of emotional release and deep soul alignment. By accessing your subconscious timeline, Heer helps you locate and dissolve the root cause of long-standing emotional blocks, limiting beliefs, and past painful memories. Instead of endlessly managing triggers, you will completely discharge the negative emotional charge associated with past events. This sacred practice creates immediate, lasting positive change, allowing you to walk confidently toward your highest destiny with newfound clarity, freedom, and inner alignment.',
    iconName: 'Sparkles',
    color: 'teal'
  },
  {
    id: 'tarot',
    title: 'Tarot Reading Course',
    description: 'Intuitive soul map readings, archetypal life path analysis, and sacred code deciphering.',
    detailedDescription: 'Tarot and Numerology with Heer is a profound soul map reading. Using a luxurious, golden-foil deck paired with the sacred mathematical codes of your birthdate, Heer deciphers your unique life path, current karmic lessons, and upcoming timeline opportunities. This reading provides absolute clarity, uncovering your innate gifts and aligning your daily actions with your highest cosmic destiny.',
    iconName: 'Compass',
    color: 'gold'
  }
];

export default function HealingModalities({ onBookModality, onSelectModality }: HealingModalitiesProps) {
  // Return appropriate Lucide Icon based on iconName
  const renderIcon = (name: string, colorClass: string) => {
    const props = { className: `w-7 h-7 ${colorClass} transition-all duration-300` };
    switch (name) {
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Flame':
        return <Flame {...props} />;
      case 'Eye':
        return <Eye {...props} />;
      case 'Heart':
        return <Heart {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Hourglass':
        return <Hourglass {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  const getWatercolorClass = (color: 'teal' | 'sage' | 'gold') => {
    switch (color) {
      case 'teal':
        return 'watercolor-teal';
      case 'sage':
        return 'watercolor-sage';
      case 'gold':
        return 'watercolor-gold';
    }
  };

  const getColorTheme = (color: 'teal' | 'sage' | 'gold') => {
    switch (color) {
      case 'teal':
        return {
          text: 'text-ocean-light',
          bg: 'bg-teal-light/20',
          border: 'border-teal-light/40',
          hoverBg: 'hover:bg-teal-light/30',
          accent: 'teal-soft'
        };
      case 'sage':
        return {
          text: 'text-sage',
          bg: 'bg-sage-light/20',
          border: 'border-sage-light/40',
          hoverBg: 'hover:bg-sage-light/30',
          accent: 'sage'
        };
      case 'gold':
        return {
          text: 'text-gold',
          bg: 'bg-gold-light/20',
          border: 'border-gold-light/40',
          hoverBg: 'hover:bg-gold-light/30',
          accent: 'gold'
        };
    }
  };

  return (
    <section className="pt-12 pb-2 md:pt-16 md:pb-4 bg-ivory relative overflow-visible" id="healing-modalities-section">
      {/* Decorative Leaves/Floral floating elements */}
      <div className="absolute top-4 left-4 w-12 h-12 text-sage/20 floating-leaf pointer-events-none z-10">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L7,18C12,14 16,12 21,8C22,7 22,5 20,5C18,5 17,8 17,8Z" />
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 w-14 h-14 text-sage/15 floating-leaf-reverse pointer-events-none z-10">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M2,21A2,2 0 0,1 4,19C4,19 10,19 14,15C18,11 20,8 20,8C20,8 21,11 18,14C15,17 4,21 4,21H2M20,3C19,3 12,10 12,10C12,10 13,11 15,9C17,7 21,3 21,3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="font-serif text-4xl md:text-5xl text-ocean font-medium tracking-tight mb-2">
            Your healing, your way.
          </h2>
          <p className="text-base md:text-lg text-ocean/90 leading-relaxed font-normal">
            Explore powerful modalities to help you heal, realign and rise.
          </p>
        </div>

        {/* Floating background particles */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
          {/* Butterfly 1 */}
          <div className="absolute top-1/4 left-[5%] w-6 h-6 text-[#8fa89b]/30 animate-float-slow">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2C11.5,4 9.5,6 7,6C4.5,6 2.5,4 2,2C2,2.5 4,4.5 4,7C4,9.5 2,11.5 2,12C4,12.5 6,14.5 6,17C6,19.5 4,21.5 2,22C2.5,22 4.5,20 7,20C9.5,20 11.5,22 12,22C12.5,22 14.5,20 17,20C19.5,20 21.5,22 22,22C21.5,21.5 19.5,19.5 19.5,17C19.5,14.5 21.5,12.5 22,12C22,11.5 20,9.5 20,7C20,4.5 22,2.5 22,2C21.5,4 19.5,6 17,6C14.5,6 12.5,4 12,2Z" />
            </svg>
          </div>
          {/* Lotus petal 1 */}
          <div className="absolute top-[60%] left-[45%] w-7 h-7 text-[#4f9da6]/20 animate-float-sway">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2C12,2 9,8 9,12C9,15 11,17 12,17C13,17 15,15 15,12C15,8 12,2 12,2Z" />
            </svg>
          </div>
          {/* Leaf 1 */}
          <div className="absolute top-[10%] right-[10%] w-6 h-6 text-[#8fa89b]/25 animate-float-medium">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L7,18C12,14 16,12 21,8C22,7 22,5 20,5C18,5 17,8 17,8Z" />
            </svg>
          </div>
        </div>

        {/* 8 Watercolor circles Modalities - 2 columns on mobile, 3-4 on tablet, 8 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-y-6 gap-x-4 sm:gap-3 lg:gap-4 justify-items-center items-center pt-4 pb-2 px-1 relative z-10 w-full overflow-visible">
          {MODALITIES_DATA.map((modality, idx) => {
            const yOffset = Math.sin(idx * 1.1) * 4; // gentle, non-disruptive organic wave offset
            return (
              <motion.div
                key={modality.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                className="flex flex-col items-center text-center group cursor-pointer w-full max-w-[140px] sm:max-w-[150px]"
                style={{ y: yOffset }}
                onClick={() => onSelectModality(modality.id)}
              >
                {/* Beautifully hand-painted watercolor modality circle with custom SVGs */}
                <ModalityCircle id={modality.id} title={modality.title} index={idx} />

                {/* Delicate subtle tap hint shown only on group hover */}
                <span className="text-[10px] text-gold uppercase font-bold tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-0.5 justify-center">
                  Explore <ArrowRight className="w-2.5 h-2.5" />
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
