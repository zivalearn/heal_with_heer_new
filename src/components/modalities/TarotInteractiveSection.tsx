import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Moon, Star, RotateCcw, Download, Heart, Compass, Globe, Sun } from 'lucide-react';
import { TAROT_CARDS_78, TarotCard78 } from '../../data/tarotCards78';
import { TarotService, TarotReadingResponse } from '../../services/tarotService';
import { generatePDF } from '../../lib/pdfHelper';
import { getTarotCardImageUrl } from '../../utils/tarotImageUtils';

// Guidance Options definition for Requirement 1
const GUIDANCE_TYPES = [
  { id: 'Angel Guidance', label: 'Angel Guidance', icon: Sparkles },
  { id: 'Love Guidance', label: 'Love Guidance', icon: Heart },
  { id: 'Career Guidance', label: 'Career Guidance', icon: Compass },
  { id: 'Universal Guidance', label: 'Universal Guidance', icon: Globe },
  { id: 'Daily Guidance', label: 'Daily Guidance', icon: Sun },
];

// ============================================================================
// PREMIUM CARD BACK DESIGN WITH METALLIC SHIMMER
// ============================================================================
export function TarotCardBack({ shimmerIndex }: { shimmerIndex?: number }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0c0822] via-[#050a1a] to-[#010307] border border-[#D4AF37]/50 rounded-xl p-2 sm:p-3 flex flex-col justify-between items-center relative overflow-hidden select-none shadow-[0_4px_15px_rgba(0,0,0,0.6)]">
      {/* Mystical filigree background border */}
      <div className="absolute inset-1 border border-[#D4AF37]/20 rounded-lg flex flex-col justify-between p-1.5 pointer-events-none">
        <span className="text-[8px] sm:text-[10px] font-serif text-[#D4AF37]/40 leading-none">✦</span>
        <span className="text-[8px] sm:text-[10px] font-serif text-[#D4AF37]/40 leading-none self-end">✦</span>
      </div>
      
      {/* Starry haze overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(143,223,255,0.08)_0%,transparent_75%)]" />

      {/* Gold foil shimmer animation */}
      {shimmerIndex !== undefined && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent -skew-x-12 pointer-events-none"
          animate={{ x: ['-200%', '300%'] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatDelay: 5 + (shimmerIndex % 7) * 1.2,
            ease: 'easeInOut'
          }}
        />
      )}

      {/* Center alchemical seal */}
      <div className="my-auto relative flex items-center justify-center">
        <div className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-[#D4AF37]/15 animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-9 h-9 sm:w-12 sm:h-12 rounded-full border border-dashed border-[#D4AF37]/25 animate-[spin_30s_linear_infinite]" />
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#0c0822] border border-[#D4AF37]/40 flex items-center justify-center shadow-lg relative z-10">
          <Moon className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37]/80 fill-[#D4AF37]/10" />
          <Star className="w-2 h-2 text-[#D4AF37] absolute top-1 right-1 animate-pulse" />
        </div>
      </div>

      <div className="text-center font-serif text-[5px] sm:text-[6px] text-[#D4AF37]/50 tracking-[0.25em] uppercase relative z-10 font-bold">
        HEER SANCTUARY
      </div>
    </div>
  );
}

// ============================================================================
// IMAGE FALLBACK & LAZY LOADING COMPONENT (AUTHENTIC TAROT ARTWORK)
// ============================================================================
interface TarotImageWithFallbackProps {
  card?: TarotCard78;
  shouldLoad?: boolean; // Only true when card is revealed during Unveil
  src?: string;
  alt?: string;
  cardName?: string;
  className?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

export function TarotImageWithFallback({ card, shouldLoad = true, src, alt, cardName, className, referrerPolicy }: TarotImageWithFallbackProps) {
  const localUrl = useMemo(() => card ? getTarotCardImageUrl(card) : (src || ''), [card, src]);
  const remoteUrl = card?.image || src || '';
  const nameDisplay = card?.name || cardName || 'TAROT';

  const [currentSrc, setCurrentSrc] = useState<string>('');
  const [imageState, setImageState] = useState<'idle' | 'loading' | 'loaded' | 'fallback'>('idle');

  useEffect(() => {
    if (shouldLoad) {
      setCurrentSrc(localUrl);
      setImageState('loading');
    } else {
      setCurrentSrc('');
      setImageState('idle');
    }
  }, [shouldLoad, localUrl]);

  const handleImageError = () => {
    if (currentSrc === localUrl && remoteUrl && localUrl !== remoteUrl) {
      console.warn(`[Tarot Asset Missing] Expected authentic local card image at "${localUrl}" for "${nameDisplay}". Attempting remote fallback...`);
      setCurrentSrc(remoteUrl);
    } else {
      console.warn(`[Tarot Asset Missing] Could not load image for card "${nameDisplay}" (${localUrl}). Displaying custom luxury fallback card face.`);
      setImageState('fallback');
    }
  };

  // If card is not instructed to load yet, or image fails to load, render custom luxury card front without broken icons
  if (imageState === 'fallback' || !shouldLoad || !currentSrc) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-between p-2.5 sm:p-3 bg-gradient-to-b from-[#0e2742] via-[#071728] to-[#02070e] border border-[#D4AF37]/40 rounded-xl relative select-none">
        <div className="absolute inset-1 border border-[#D4AF37]/20 rounded-lg flex flex-col items-center justify-between p-1.5 pointer-events-none">
          <span className="text-[8px] font-mono text-[#D4AF37]/60">✦</span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D4AF37]/30 flex items-center justify-center relative bg-black/40 shadow-inner">
            <Star className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
          </div>
          <span className="text-[8px] font-mono text-[#D4AF37]/60">✦</span>
        </div>
        <div className="z-10 text-center flex flex-col justify-center items-center h-full w-full px-1">
          <span className="text-[10px] sm:text-xs font-serif font-bold text-amber-200 uppercase tracking-wider leading-tight text-center break-words max-w-full">
            {nameDisplay}
          </span>
          <span className="text-[6px] sm:text-[7px] font-mono text-[#8FDFFF]/80 tracking-widest mt-1 block uppercase">
            {card?.arcana || 'HEER SANCTUARY'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#02050e]">
      {imageState === 'loading' && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#09152b] to-[#02050e] animate-pulse flex items-center justify-center z-10">
          <Star className="w-4 h-4 text-[#D4AF37]/60 animate-spin" />
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt || card?.name || nameDisplay}
        className={`${className || ''} ${imageState === 'loading' ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 w-full h-full object-cover`}
        onLoad={() => setImageState('loaded')}
        onError={handleImageError}
        referrerPolicy={referrerPolicy}
      />
    </div>
  );
}

// Fallback reading generator if API key is not present or server responds with error
function generateFallbackReading(
  cards: Array<{ card: TarotCard78; orientation: 'upright' | 'reversed'; positionLabel: string }>,
  guidanceType: string = 'Angel Guidance'
): TarotReadingResponse {
  const [past, present, future] = cards;
  const pName = past.card.name;
  const prName = present.card.name;
  const fName = future.card.name;
  const cardsDrawn = [pName, prName, fName];

  let guidance = "";
  let affirmation = "";

  if (guidanceType === 'Love Guidance') {
    guidance = `In the realm of the heart, your emotional journey is undergoing a profound and necessary integration. Your past experience with ${pName} served as a sacred foundation, teaching you essential lessons about self-worth, emotional boundaries, and authentic vulnerability. Presently, ${prName} illuminates the active energetic currents in your relationships, inviting you to communicate your deepest truths with patience and unarmored compassion. Looking ahead into your near future, ${fName} heralds a phase of harmonious evolution, drawing deeper trust, mutual understanding, and sacred connection into your romantic sphere. Remember that genuine love blossoms when you hold space for both yourself and your partner with gentle honor. Trust the subtle emotional shifts happening within your heart today. Divine love is surrounding you in ways both seen and unseen.`;
    affirmation = "I open my heart to authentic, unconditional love and trust the divine timing of my sacred connections.";
  } else if (guidanceType === 'Career Guidance') {
    guidance = `Your professional trajectory and vocational calling are aligning with powerful momentum and renewed clarity. The dedication, skills, and hard-won resilience developed through your past journey with ${pName} have built an enduring reservoir of experience. At this crucial juncture, ${prName} calls on you to focus your energy intentionally, take sovereign command of your projects, and trust in your inherent mastery. Moving forward on your professional horizon, ${fName} signals an expanding landscape filled with fruitful opportunities, proper recognition, and stable abundance. Approach your ambitions with a balanced mind and high ethical integrity, knowing that your unique gifts are genuinely needed. Stay disciplined yet adaptable as new professional doors swing open before you. Your dedicated work is laying the groundwork for lasting career fulfillment.`;
    affirmation = "I step confidently into my professional power, welcoming abundance, mastery, and aligned career growth.";
  } else if (guidanceType === 'Universal Guidance') {
    guidance = `The cosmic tides surrounding your overarching life path are calling you into deeper alignment with your soul's authentic blueprint. In the preceding chapter of your life, ${pName} acted as a pivotal spiritual teacher, guiding you to dismantle limiting illusions and integrate vital wisdom. Today, ${prName} sits at the center of your universe, urging you to remain grounded in your center, honor your inner compass, and embrace total personal sovereignty. Looking into the horizon of your path, ${fName} reveals a sacred phase of transformation, completion, and higher spiritual alignment. Every cycle you have navigated has meticulously prepared you for the wisdom you now embody. Walk forward with courage and quiet trust in the unfolding intelligence of the universe. You are exactly where you need to be in this infinite woven tapestry of life.`;
    affirmation = "I am in complete harmony with the universe, trusting that my journey is guided by infinite wisdom.";
  } else if (guidanceType === 'Daily Guidance') {
    guidance = `Today's energetic atmosphere invites you to move through your hours with conscious presence, clarity, and soft ease. Looking back at yesterday's momentum through ${pName}, you carry a valuable perspective that grounds your choices for today. Right now, ${prName} serves as your guiding star for the day, calling upon you to quiet mental noise, listen to your body's subtle wisdom, and act with clear intention. As today gently unfolds toward evening, ${fName} promises a peaceful, encouraging resolution and a renewed sense of personal harmony. Take a slow, deep breath, release any physical tension from your shoulders, and honor one simple act of self-care. You possess all the clarity required to navigate today's events effortlessly. Trust your stride and welcome the quiet blessings presenting themselves to you today.`;
    affirmation = "I embrace today with peace, presence, and calm confidence, trusting that each moment brings gentle grace.";
  } else {
    guidance = `Your celestial guardians wrap you in a sanctuary of peace as you reflect upon your spiritual path. The journey that brought you to this moment was shaped by the energy of ${pName}, teaching you to trust divine timing and release old burdens to the light. Right now, ${prName} illuminates your present moment, calling you to anchor serenity in your heart and remain open to subtle angelic guidance. As you step forward into what lies ahead, ${fName} opens a radiant doorway toward higher spiritual alignment, inner peace, and divine protection. Trust that you are unconditionally loved, supported, and gently led toward your highest spiritual good. Surrender fear and worry to the loving intelligence that flows through all creation. Your angels remind you that every step you take on this earth is blessed and purposeful.`;
    affirmation = "I welcome clarity, trust divine timing, and confidently move toward my highest path.";
  }

  return {
    guidanceType: guidanceType.toUpperCase(),
    cardsDrawn,
    guidance,
    affirmation
  };
}

// Extract concise 1-sentence wisdom for compact messenger cards
function getOneSentenceWisdom(text: string, cardName: string): string {
  if (!text) return `Embrace the sacred guidance of ${cardName} on your path.`;
  // Clean text and take the first sentence
  const firstSentence = text.split(/(?<=[.!?])\s+/)[0];
  if (firstSentence && firstSentence.length > 10) {
    return firstSentence.length > 110 ? firstSentence.slice(0, 107) + "..." : firstSentence;
  }
  return text.length > 110 ? text.slice(0, 107) + "..." : text;
}

// Format 80-120 word narrative paragraph for "A Message From The Cards"
function formatFlowingNarrative(reading: TarotReadingResponse): string {
  if (reading.guidance) return reading.guidance;
  let narrative = reading.overallEnergy || "";
  if (narrative.length < 250 && reading.cardsConnection) {
    narrative += " " + reading.cardsConnection;
  }
  const words = narrative.split(" ");
  if (words.length > 130) {
    return words.slice(0, 120).join(" ") + "...";
  }
  return narrative;
}

// ============================================================================
// INTERACTIVE TAROT SECTION MAIN COMPONENT
// ============================================================================
export default function TarotInteractiveSection({ onBook: _onBook }: { onBook: (modality: string) => void }) {
  // Guidance Type selection (New Requirement 1)
  const [selectedGuidanceType, setSelectedGuidanceType] = useState<string>('Angel Guidance');

  // Ritual Animation Stages: 'idle' | 'hands-enter' | 'shuffling' | 'blessing' | 'fanning' | 'invited'
  type RitualStage = 'idle' | 'hands-enter' | 'shuffling' | 'blessing' | 'fanning' | 'invited';
  const [ritualStage, setRitualStage] = useState<RitualStage>('idle');
  const hasTriggeredRitual = useRef(false);

  // Deck & Card Assignments (22 cards fanned in arc, picked from 78 total)
  const [shuffled78, setShuffled78] = useState<TarotCard78[]>([]);
  const [fannedCardAssignments, setFannedCardAssignments] = useState<Array<{ card: TarotCard78; orientation: 'upright' | 'reversed' }>>([]);
  
  // Selection State
  const [selectedCardIndexes, setSelectedCardIndexes] = useState<number[]>([]); // indexes 0..21 in fan
  const [roleVisible, setRoleVisible] = useState<boolean[]>([false, false, false]); // 'Past', 'Present', 'Future' label fade-in
  
  // Experience Phase: 'selecting' | 'revealing' | 'interpreting' | 'complete'
  const [phase, setPhase] = useState<'selecting' | 'revealing' | 'interpreting' | 'complete'>('selecting');
  const [revealedCardIndexes, setRevealedCardIndexes] = useState<number[]>([]);
  const [loadedImageSlots, setLoadedImageSlots] = useState<number[]>([]); // Slots 0, 1, 2 whose image loading triggered at 90° flip point
  const [readingResponse, setReadingResponse] = useState<TarotReadingResponse | null>(null);

  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const readingRef = useRef<HTMLDivElement>(null);

  // Total cards in ceremonial fan (visually implies a complete tarot deck)
  const FAN_COUNT = 38;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize 78 card deck and pre-assign fanned cards
  const initDeck = () => {
    const shuffled = [...TAROT_CARDS_78];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffled78(shuffled);

    // Assign 38 cards from shuffled set
    const fanned = shuffled.slice(0, FAN_COUNT).map(card => ({
      card,
      orientation: (Math.random() > 0.35 ? 'upright' : 'reversed') as 'upright' | 'reversed'
    }));
    setFannedCardAssignments(fanned);

    setSelectedCardIndexes([]);
    setRoleVisible([false, false, false]);
    setRevealedCardIndexes([]);
    setLoadedImageSlots([]);
    setPhase('selecting');
    setReadingResponse(null);
  };

  useEffect(() => {
    initDeck();
  }, []);

  // IntersectionObserver to trigger ritual ONCE when ~50% of section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasTriggeredRitual.current) {
          hasTriggeredRitual.current = true;
          startRitualSequence();
        }
      },
      { threshold: 0.45 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Timed Ritual Sequence
  const startRitualSequence = () => {
    setRitualStage('hands-enter');

    // Stage 1 -> Stage 2 (Shuffling: 1.2s to 5.7s)
    setTimeout(() => {
      setRitualStage('shuffling');
    }, 1200);

    // Stage 2 -> Stage 3 (Blessing: 5.7s to 7.2s)
    setTimeout(() => {
      setRitualStage('blessing');
    }, 5700);

    // Stage 3 -> Stage 4 (Fanning: 7.2s to 9.2s)
    setTimeout(() => {
      setRitualStage('fanning');
    }, 7200);

    // Stage 4 -> Stage 5 (Invited: 9.2s onwards)
    setTimeout(() => {
      setRitualStage('invited');
    }, 9200);
  };

  // Card click handler during selection
  const handleSelectCard = (fanIdx: number) => {
    if (phase !== 'selecting' || (ritualStage !== 'fanning' && ritualStage !== 'invited')) return;

    setHoveredCardIdx(null);

    if (selectedCardIndexes.includes(fanIdx)) {
      // Unselect card
      const selectionPos = selectedCardIndexes.indexOf(fanIdx);
      setSelectedCardIndexes(prev => prev.filter(i => i !== fanIdx));
      setRoleVisible(prev => {
        const updated = [...prev];
        updated[selectionPos] = false;
        return updated;
      });
      return;
    }

    if (selectedCardIndexes.length < 3) {
      const newPos = selectedCardIndexes.length;
      setSelectedCardIndexes(prev => [...prev, fanIdx]);

      // Delay position label fade-in until card floats into place (~500ms)
      setTimeout(() => {
        setRoleVisible(prev => {
          const updated = [...prev];
          updated[newPos] = true;
          return updated;
        });
      }, 500);
    }
  };

  // Start Card Reveal when "Unveil the Wisdom" button is clicked
  const handleUnveilWisdom = () => {
    if (selectedCardIndexes.length !== 3 || phase !== 'selecting') return;

    setPhase('revealing');
    setRevealedCardIndexes([]);
    setLoadedImageSlots([]);

    // Flip Card 1 (Past) -> Pause -> Flip Card 2 (Present) -> Pause -> Flip Card 3 (Future)
    // At ~200ms into each 400ms flip rotation (the exact 90° point), trigger image load for that card face
    setTimeout(() => {
      setRevealedCardIndexes([0]);
      setTimeout(() => {
        setLoadedImageSlots([0]);
      }, 180);

      setTimeout(() => {
        setRevealedCardIndexes([0, 1]);
        setTimeout(() => {
          setLoadedImageSlots([0, 1]);
        }, 180);

        setTimeout(() => {
          setRevealedCardIndexes([0, 1, 2]);
          setTimeout(() => {
            setLoadedImageSlots([0, 1, 2]);
          }, 180);

          // Transition to interpreting phase & fetch AI reading
          setTimeout(() => {
            setPhase('interpreting');
            fetchReading();
          }, 1000);

        }, 650);
      }, 650);
    }, 400);
  };

  // Fetch AI reading via backend API
  const fetchReading = async () => {
    const selected3 = selectedCardIndexes.map((fanIdx, slotIdx) => {
      const assigned = fannedCardAssignments[fanIdx] || { card: shuffled78[0], orientation: 'upright' as const };
      return {
        id: assigned.card.id,
        name: assigned.card.name,
        keywords: assigned.card.keywords,
        upright: assigned.card.upright,
        reversed: assigned.card.reversed,
        orientation: assigned.orientation,
        positionLabel: slotIdx === 0 ? 'Past' : slotIdx === 1 ? 'Present' : 'Future',
        card: assigned.card
      };
    });

    try {
      const result = await TarotService.generateReading({
        guidanceType: selectedGuidanceType,
        name: "Soul Seeker",
        question: `Intuitive ${selectedGuidanceType} Spread`,
        cards: selected3.map(c => ({
          id: c.id,
          name: c.name,
          keywords: c.keywords,
          upright: c.upright,
          reversed: c.reversed,
          orientation: c.orientation
        }))
      });

      setReadingResponse(result);
      setPhase('complete');

      setTimeout(() => {
        readingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);

    } catch (err) {
      console.warn("Using intuitive reading fallback:", err);
      const fallback = generateFallbackReading(selected3, selectedGuidanceType);
      setReadingResponse(fallback);
      setPhase('complete');

      setTimeout(() => {
        readingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  };

  // PDF Report Generator
  const handleDownloadPDF = () => {
    if (!readingResponse || selectedCardIndexes.length !== 3) return;

    const selected3 = selectedCardIndexes.map((fanIdx, slotIdx) => {
      const assigned = fannedCardAssignments[fanIdx];
      return {
        posLabel: slotIdx === 0 ? "PAST" : slotIdx === 1 ? "PRESENT" : "FUTURE",
        card: assigned.card,
        orientation: assigned.orientation
      };
    });

    const categoryTitle = selectedGuidanceType.toUpperCase();

    generatePDF(
      `${selectedGuidanceType.replace(/\s+/g, '_')}_Reading.pdf`,
      `${categoryTitle} REPORT`,
      `Prepared for: Soul Seeker | ${selectedGuidanceType}`,
      `A ceremonial reading drawn at Heer Sanctuary, translated through ${selectedGuidanceType}.`,
      [
        {
          title: categoryTitle,
          text: `CARDS DRAWN:\n${selected3.map(c => `• ${c.card.name} (${c.posLabel})`).join('\n')}\n\nGUIDANCE:\n${readingResponse.guidance || formatFlowingNarrative(readingResponse)}\n\nAFFIRMATION:\n"${readingResponse.affirmation}"`
        },
        ...selected3.map(({ posLabel, card, orientation }) => ({
          title: `${posLabel} MESSENGER: ${card.name} (${orientation.toUpperCase()})`,
          text: `Upright Wisdom: ${card.upright}\n\nReversed Essence: ${card.reversed}`,
          items: [`Keywords: ${card.keywords.join(", ")}`]
        }))
      ],
      `Heal With Heer Sanctuary — ${selectedGuidanceType} & Intuitive Direction`
    );
  };

  // Reset for another ritual
  const handleResetAnotherReading = () => {
    initDeck();
    startRitualSequence();
  };

  // Arc calculation for fan layout with dynamic gap closing
  const getFanCardTransform = (effectiveIndex: number, unselectedTotal: number) => {
    if (unselectedTotal <= 1) {
      return { x: 0, y: 0, angle: 0 };
    }
    // Wide ceremonial arc spanning -64deg to +64deg
    const angleStep = 128 / (unselectedTotal - 1);
    const angle = -64 + effectiveIndex * angleStep;
    const rad = (angle * Math.PI) / 180;
    const radius = 380;
    const x = Math.sin(rad) * radius;
    const y = (1 - Math.cos(rad)) * 95;
    return { x, y, angle };
  };

  // Deterministic organic jitter for natural hand-spread feel
  const getOrganicCardOffset = (index: number) => {
    const rotJitter = Math.sin(index * 13.7) * 2.2; // -2.2deg to +2.2deg
    const yJitter = Math.cos(index * 7.3) * 3.5;   // -3.5px to +3.5px
    const xJitter = Math.sin(index * 3.1) * 1.5;   // -1.5px to +1.5px
    return { rotJitter, yJitter, xJitter };
  };

  // Responsive slot float coordinates above deck
  const getSlotFloatPosition = (slotIdx: number) => {
    if (isMobile) {
      if (slotIdx === 0) return { x: -105, y: -130 };
      if (slotIdx === 1) return { x: 0, y: -145 };
      return { x: 105, y: -130 };
    }
    if (slotIdx === 0) return { x: -200, y: -155 };
    if (slotIdx === 1) return { x: 0, y: -170 };
    return { x: 200, y: -155 };
  };

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-20 bg-[#02050e] text-white relative overflow-hidden border-t border-[#0D2E4A]/60 select-none" 
      id="interactive-reflection"
    >
      {/* SVG Filters and Gradients for Hands & Aura */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <radialGradient id="auraGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#8FDFFF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#02050e" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="fingertipGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF4D0" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#D4AF37" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sleeveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d2338" />
            <stop offset="60%" stopColor="#061321" />
            <stop offset="100%" stopColor="#02070e" />
          </linearGradient>
          <linearGradient id="handGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8D3C0" />
            <stop offset="50%" stopColor="#E2B297" />
            <stop offset="100%" stopColor="#C68C6F" />
          </linearGradient>
          <linearGradient id="skinStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8A987" />
            <stop offset="100%" stopColor="#8A5738" />
          </linearGradient>
          <linearGradient id="goldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E0A3" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#AA7C11" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-[#02050e] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(143,223,255,0.06)_0%,transparent_75%)] pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#8FDFFF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1300px] w-[94%] mx-auto px-2 sm:px-6 relative z-10">
        
        {/* Main Sacred Outer Stage Container */}
        <div className="w-full mx-auto text-center relative py-8 px-4 sm:px-8 md:px-12 bg-gradient-to-b from-[#071b2e]/90 via-[#030815]/95 to-[#071b2e]/90 rounded-2xl sm:rounded-3xl border border-[#D4AF37]/30 shadow-[0_0_50px_rgba(143,223,255,0.1)] backdrop-blur-md overflow-hidden min-h-[620px] flex flex-col justify-between">
          
          {/* Inner filigree frame */}
          <div className="absolute inset-2 sm:inset-3 border border-[#8FDFFF]/15 rounded-[1.2rem] pointer-events-none" />
          <span className="absolute top-4 left-4 text-amber-400/40 text-xs">✦</span>
          <span className="absolute top-4 right-4 text-amber-400/40 text-xs">✦</span>
          <span className="absolute bottom-4 left-4 text-amber-400/40 text-xs">✦</span>
          <span className="absolute bottom-4 right-4 text-amber-400/40 text-xs">✦</span>

          {/* Section Heading */}
          <div className="relative z-10 pt-2 space-y-2">
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase block font-bold">
              ✦ SACRED CEREMONIAL RITUAL ✦
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-medium tracking-tight">
              Sacred Angel Guidance Reading
            </h2>
          </div>

          {/* -----------------------------------------------------------------
              REQUIREMENT 1: CHOOSE YOUR GUIDANCE SELECTION (Appears when cards are fanned)
             ----------------------------------------------------------------- */}
          {(ritualStage === 'fanning' || ritualStage === 'invited') && phase === 'selecting' && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-30 mb-4 space-y-3 max-w-3xl mx-auto px-2 text-center"
            >
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
                <h3 className="font-serif text-base sm:text-lg font-bold tracking-wider text-amber-200 uppercase">
                  Choose Your Guidance
                </h3>
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
                {GUIDANCE_TYPES.map((type) => {
                  const isSelected = selectedGuidanceType === type.id;
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedGuidanceType(type.id)}
                      className={`px-2.5 py-2 sm:py-2.5 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer select-none relative group ${
                        isSelected
                          ? 'bg-gradient-to-b from-[#13314d] via-[#081f33] to-[#040e18] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.65)] text-amber-200 scale-105 z-10'
                          : 'bg-[#040e18]/80 hover:bg-[#081f33]/90 border-[#D4AF37]/30 hover:border-[#D4AF37]/70 text-white/80 hover:text-white'
                      }`}
                    >
                      {isSelected && (
                        <span className="absolute -top-1.5 -right-1 text-[8px] text-[#D4AF37]">✦</span>
                      )}
                      <Icon className={`w-4 h-4 mb-1 transition-colors ${isSelected ? 'text-[#D4AF37] animate-pulse' : 'text-white/60 group-hover:text-amber-200'}`} />
                      <span className="font-serif text-[10px] sm:text-xs font-semibold tracking-wider block">
                        {type.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* -----------------------------------------------------------------
              CELESTIAL STAGE / TABLE SURFACE
             ----------------------------------------------------------------- */}
          <div className="relative w-full h-[400px] sm:h-[440px] my-4 flex items-center justify-center overflow-visible">
            
            {/* Ambient Floating Gold Dust / Stardust Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
              {[...Array(12)].map((_, i) => {
                const left = (i * 7.9 + 4) % 92 + 4;
                const delay = i * 0.6;
                const duration = 4.5 + (i % 3) * 1.5;
                return (
                  <motion.div
                    key={i}
                    className="absolute text-[#D4AF37]/50 text-[7px] sm:text-[9px]"
                    style={{ left: `${left}%`, bottom: '20%' }}
                    animate={{
                      y: [-5, -60, -110],
                      x: [0, (i % 2 === 0 ? 10 : -10), 0],
                      opacity: [0, 0.65, 0],
                      scale: [0.6, 1.1, 0.5]
                    }}
                    transition={{
                      duration,
                      repeat: Infinity,
                      delay,
                      ease: 'easeInOut'
                    }}
                  >
                    ✦
                  </motion.div>
                );
              })}
            </div>

            {/* Soft Breathing Ambient Glow behind Reading Mat */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.96, 1.03, 0.96],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-2 w-[92%] max-w-[880px] h-[230px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.22)_0%,rgba(143,223,255,0.08)_55%,transparent_80%)] pointer-events-none blur-xl z-0"
            />

            {/* Dark Velvet Mystical Reading Mat with Sacred Geometry Circles */}
            <div className="absolute bottom-4 w-[92%] max-w-[860px] h-[220px] rounded-[50%] bg-[#040e1a]/85 border border-[#D4AF37]/30 shadow-[inset_0_0_45px_rgba(0,0,0,0.85)] pointer-events-none flex items-center justify-center overflow-hidden z-0">
              <div className="w-[85%] h-[85%] rounded-[50%] border border-dashed border-[#8FDFFF]/15 animate-[spin_120s_linear_infinite]" />
              <div className="w-[65%] h-[65%] rounded-[50%] border border-[#D4AF37]/15" />
            </div>

            {/* Aura Blessing Glow during Stage 3 */}
            <AnimatePresence>
              {ritualStage === 'blessing' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1.2 }}
                  exit={{ opacity: 0, scale: 1.4 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute w-80 h-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.45)_0%,rgba(143,223,255,0.15)_50%,transparent_75%)] pointer-events-none blur-xl z-20"
                />
              )}
            </AnimatePresence>

            {/* ---------------------------------------------------------------
                1. STACKED DECK (Visible during idle, hands-enter, shuffle, blessing)
               --------------------------------------------------------------- */}
            {(ritualStage === 'idle' || ritualStage === 'hands-enter' || ritualStage === 'shuffling' || ritualStage === 'blessing') && (
              <div className="relative w-[110px] sm:w-[125px] h-[170px] sm:h-[190px] z-20">
                {/* 3D Stacked Cards Layering effect */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 w-full h-full"
                    animate={
                      ritualStage === 'shuffling'
                        ? i % 2 === 0
                          ? { x: [-15, 20, -5, 0], y: [-10, -5, 2, 0], rotate: [-6, 8, -2, 0] }
                          : { x: [20, -20, 5, 0], y: [10, -8, -2, 0], rotate: [8, -6, 2, 0] }
                        : { x: i * 0.8, y: -i * 1.5, rotate: 0 }
                    }
                    transition={{
                      duration: ritualStage === 'shuffling' ? 1.5 : 0.4,
                      repeat: ritualStage === 'shuffling' ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  >
                    <TarotCardBack shimmerIndex={i} />
                  </motion.div>
                ))}
              </div>
            )}

            {/* ---------------------------------------------------------------
                2. HANDS ILLUSTRATION (Stages 1 through 4)
               --------------------------------------------------------------- */}
            <AnimatePresence>
              {(ritualStage === 'hands-enter' || ritualStage === 'shuffling' || ritualStage === 'blessing' || ritualStage === 'fanning') && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.0 }}
                  className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center overflow-hidden"
                >
                  {/* LEFT HAND */}
                  <motion.div
                    initial={{ x: -320, opacity: 0 }}
                    animate={
                      ritualStage === 'hands-enter'
                        ? { x: -65, y: -20, opacity: 1 }
                        : ritualStage === 'shuffling'
                        ? { x: [-70, -40, -65], y: [-20, -10, -18], rotate: [-4, 3, -2], opacity: 1 }
                        : ritualStage === 'blessing'
                        ? { x: -60, y: -30, rotate: -3, opacity: 1 }
                        : { x: -220, y: 0, opacity: 0.3 }
                    }
                    transition={{
                      duration: ritualStage === 'shuffling' ? 2.2 : 1.2,
                      repeat: ritualStage === 'shuffling' ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                    className="absolute"
                  >
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                      <g transform="translate(10, 10)">
                        {/* Dark Mystical Sleeve with Gold Trim */}
                        <path d="M 0,180 C 25,125 55,100 82,82 L 105,108 C 78,128 48,150 20,200 Z" fill="url(#sleeveGrad)" stroke="url(#goldStroke)" strokeWidth="0.8" opacity="0.95" />
                        <path d="M 82,82 C 90,74 100,68 108,70 C 112,71 102,88 105,108 Z" fill="#D4AF37" opacity="0.35" />

                        {/* Ethereal Hand & Palm */}
                        <path d="M 82,82 C 96,66 116,62 130,72 C 142,82 138,102 118,110 C 102,112 88,100 82,82 Z" fill="url(#handGrad)" stroke="url(#skinStroke)" strokeWidth="1" />

                        {/* Thumb */}
                        <path d="M 94,78 C 104,66 114,60 118,66 C 120,70 112,80 102,82 Z" fill="url(#handGrad)" stroke="url(#skinStroke)" strokeWidth="0.8" />

                        {/* Index Finger */}
                        <path d="M 116,70 C 134,50 152,45 158,50 C 161,54 144,66 128,72 Z" fill="url(#handGrad)" stroke="url(#skinStroke)" strokeWidth="0.8" />

                        {/* Middle Finger */}
                        <path d="M 124,74 C 144,55 164,50 170,56 C 172,60 152,72 132,76 Z" fill="url(#handGrad)" stroke="url(#skinStroke)" strokeWidth="0.8" />

                        {/* Ring Finger */}
                        <path d="M 128,80 C 146,63 164,60 168,66 C 170,70 152,80 134,82 Z" fill="url(#handGrad)" stroke="url(#skinStroke)" strokeWidth="0.8" />

                        {/* Pinky Finger */}
                        <path d="M 126,88 C 140,75 154,74 157,79 C 159,82 144,90 130,90 Z" fill="url(#handGrad)" stroke="url(#skinStroke)" strokeWidth="0.8" />

                        {/* Ring Ornament */}
                        <ellipse cx="148" cy="72" rx="2.5" ry="4.5" fill="none" stroke="#FFF4D0" strokeWidth="1.2" />

                        {/* Celestial Palm Star */}
                        <text x="108" y="94" fill="#D4AF37" fontSize="10" textAnchor="middle" opacity="0.85">✦</text>

                        {/* Fingertip Golden Light Aura */}
                        <circle cx="158" cy="50" r="7" fill="url(#fingertipGlow)" />
                        <circle cx="170" cy="56" r="8" fill="url(#fingertipGlow)" />
                        <circle cx="168" cy="66" r="6" fill="url(#fingertipGlow)" />
                      </g>
                    </svg>
                  </motion.div>

                  {/* RIGHT HAND */}
                  <motion.div
                    initial={{ x: 320, opacity: 0 }}
                    animate={
                      ritualStage === 'hands-enter'
                        ? { x: 65, y: -20, opacity: 1 }
                        : ritualStage === 'shuffling'
                        ? { x: [70, 40, 65], y: [-20, -10, -18], rotate: [4, -3, 2], opacity: 1 }
                        : ritualStage === 'blessing'
                        ? { x: 60, y: -30, rotate: 3, opacity: 1 }
                        : ritualStage === 'fanning'
                        ? { x: [20, 220], y: [-20, 10], rotate: [0, 18], opacity: [1, 0] }
                        : { x: 220, y: 0, opacity: 0 }
                    }
                    transition={{
                      duration: ritualStage === 'fanning' ? 1.8 : ritualStage === 'shuffling' ? 2.2 : 1.2,
                      repeat: ritualStage === 'shuffling' ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                    className="absolute"
                  >
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                      <g transform="translate(10, 10)">
                        {/* Dark Mystical Sleeve with Gold Trim */}
                        <path d="M 180,180 C 155,125 125,100 98,82 L 75,108 C 102,128 132,150 160,200 Z" fill="url(#sleeveGrad)" stroke="url(#goldStroke)" strokeWidth="0.8" opacity="0.95" />
                        <path d="M 98,82 C 90,74 80,68 72,70 C 68,71 78,88 75,108 Z" fill="#D4AF37" opacity="0.35" />

                        {/* Ethereal Hand & Palm */}
                        <path d="M 98,82 C 84,66 64,62 50,72 C 38,82 42,102 62,110 C 78,112 92,100 98,82 Z" fill="url(#handGrad)" stroke="url(#skinStroke)" strokeWidth="1" />

                        {/* Thumb */}
                        <path d="M 86,78 C 76,66 66,60 62,66 C 60,70 68,80 78,82 Z" fill="url(#handGrad)" stroke="url(#skinStroke)" strokeWidth="0.8" />

                        {/* Index Finger */}
                        <path d="M 64,70 C 46,50 28,45 22,50 C 19,54 36,66 52,72 Z" fill="url(#handGrad)" stroke="url(#skinStroke)" strokeWidth="0.8" />

                        {/* Middle Finger */}
                        <path d="M 56,74 C 36,55 16,50 10,56 C 8,60 28,72 48,76 Z" fill="url(#handGrad)" stroke="url(#skinStroke)" strokeWidth="0.8" />

                        {/* Ring Finger */}
                        <path d="M 52,80 C 34,63 16,60 12,66 C 10,70 28,80 46,82 Z" fill="url(#handGrad)" stroke="url(#skinStroke)" strokeWidth="0.8" />

                        {/* Pinky Finger */}
                        <path d="M 54,88 C 40,75 26,74 23,79 C 21,82 36,90 50,90 Z" fill="url(#handGrad)" stroke="url(#skinStroke)" strokeWidth="0.8" />

                        {/* Ring Ornament */}
                        <ellipse cx="32" cy="72" rx="2.5" ry="4.5" fill="none" stroke="#FFF4D0" strokeWidth="1.2" />

                        {/* Celestial Palm Star */}
                        <text x="72" y="94" fill="#D4AF37" fontSize="10" textAnchor="middle" opacity="0.85">✦</text>

                        {/* Fingertip Golden Light Aura */}
                        <circle cx="22" cy="50" r="7" fill="url(#fingertipGlow)" />
                        <circle cx="10" cy="56" r="8" fill="url(#fingertipGlow)" />
                        <circle cx="12" cy="66" r="6" fill="url(#fingertipGlow)" />
                      </g>
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ---------------------------------------------------------------
                3. FANNED CARDS SPREAD (Visible during 'fanning' & 'invited')
               --------------------------------------------------------------- */}
            {(ritualStage === 'fanning' || ritualStage === 'invited') && (
              <div 
                className="relative w-full h-full flex items-center justify-center"
                onMouseLeave={() => setHoveredCardIdx(null)}
              >
                
                {/* 38 Cards arranged in a graceful wide ceremonial arc */}
                {Array.from({ length: FAN_COUNT }).map((_, fanIdx) => {
                  const isSelected = selectedCardIndexes.includes(fanIdx);
                  const selectionOrderIdx = selectedCardIndexes.indexOf(fanIdx); // 0 (Past), 1 (Present), 2 (Future)
                  const isHovered = hoveredCardIdx === fanIdx && !isSelected;
                  const isRevealed = selectionOrderIdx !== -1 && revealedCardIndexes.includes(selectionOrderIdx);
                  const assigned = fannedCardAssignments[fanIdx];

                  // Stable base transform in ceremonial spread
                  const baseTransform = getFanCardTransform(fanIdx, FAN_COUNT);
                  const jitter = getOrganicCardOffset(fanIdx);

                  // Position calculation
                  const { x: floatX, y: floatY } = getSlotFloatPosition(selectionOrderIdx);

                  const cardX = isSelected ? floatX : baseTransform.x + jitter.xJitter;
                  const cardY = isSelected ? floatY : baseTransform.y + jitter.yJitter;
                  const cardRot = isSelected ? 0 : baseTransform.angle + jitter.rotJitter;
                  const cardScale = isSelected ? 1.08 : 1;
                  const cardZIndex = isSelected ? 50 : (isHovered ? fanIdx + 80 : fanIdx);

                  const posLabelName = selectionOrderIdx === 0 ? 'Past' : selectionOrderIdx === 1 ? 'Present' : selectionOrderIdx === 2 ? 'Future' : '';

                  return (
                    <motion.div
                      key={fanIdx}
                      initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
                      animate={{
                        x: cardX,
                        y: cardY,
                        rotate: cardRot,
                        scale: cardScale,
                        opacity: isSelected ? 1 : (selectedCardIndexes.length === 3 ? 0.35 : 1),
                        zIndex: cardZIndex
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute w-[75px] sm:w-[96px] h-[120px] sm:h-[152px] cursor-pointer origin-bottom select-none"
                      onMouseEnter={() => {
                        if (!isSelected && (ritualStage === 'fanning' || ritualStage === 'invited') && phase === 'selecting') {
                          setHoveredCardIdx(fanIdx);
                        }
                      }}
                      onMouseLeave={() => {
                        if (hoveredCardIdx === fanIdx) {
                          setHoveredCardIdx(null);
                        }
                      }}
                      onClick={() => handleSelectCard(fanIdx)}
                      style={{ perspective: '1000px' }}
                    >
                      <motion.div
                        className="w-full h-full relative"
                        style={{ transformStyle: 'preserve-3d' }}
                        animate={{ 
                          rotateY: isRevealed ? 180 : 0,
                          y: isHovered ? -10 : 0,
                          scale: isHovered ? 1.05 : 1
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        {/* FACE DOWN (Card Back with Gold Foil Shimmer) */}
                        <div
                          className={`absolute inset-0 w-full h-full rounded-xl transition-all duration-300 ${
                            isHovered
                              ? 'shadow-[0_0_22px_rgba(212,175,55,0.85)] border-2 border-amber-300'
                              : isSelected
                              ? 'shadow-[0_0_30px_rgba(212,175,55,0.95)] border-2 border-amber-400'
                              : 'border border-[#8FDFFF]/30'
                          }`}
                          style={{ backfaceVisibility: 'hidden' }}
                        >
                          <TarotCardCardBackWithParticles isHovered={isHovered} fanIdx={fanIdx} />
                        </div>

                        {/* FACE UP (Revealed Card Front) */}
                        <div
                          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden border-2 border-amber-400/90 shadow-[0_0_25px_rgba(212,175,55,0.5)] bg-[#02050e]"
                          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                        >
                          {assigned && (
                            <div className="w-full h-full relative flex flex-col justify-between p-1 bg-gradient-to-b from-[#09152b] to-[#02050e]">
                              <div className="h-[74%] w-full relative rounded-lg overflow-hidden border border-amber-400/30">
                                <TarotImageWithFallback
                                  card={assigned.card}
                                  shouldLoad={selectionOrderIdx !== -1 && loadedImageSlots.includes(selectionOrderIdx)}
                                  className="w-full h-full object-cover"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              <div className="h-[24%] flex flex-col items-center justify-center text-center px-0.5">
                                <span className="text-[8px] sm:text-[9px] font-mono font-bold uppercase text-amber-300 leading-tight truncate w-full">
                                  {assigned.card.name}
                                </span>
                                <span className="text-[6px] sm:text-[7px] font-mono text-[#8FDFFF] uppercase">
                                  {assigned.orientation}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>

                      </motion.div>

                      {/* POSITION ROLE BADGE ("Past", "Present", "Future") - Fades in ONLY after card floats into position */}
                      <AnimatePresence>
                        {isSelected && roleVisible[selectionOrderIdx] && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap z-50 pointer-events-none"
                          >
                            <span className="px-3 py-1 rounded-full bg-[#071b2e]/95 border border-[#D4AF37]/60 text-[#D4AF37] font-serif text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                              ✦ {posLabelName} ✦
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </motion.div>
                  );
                })}

              </div>
            )}

          </div>

          {/* -----------------------------------------------------------------
              STAGE INSTRUCTION & STATUS DISPLAY AREA
             ----------------------------------------------------------------- */}
          <div className="relative z-20 pb-4 min-h-[70px] flex flex-col items-center justify-center">
            
            {/* Shuffling & Ritual Status Indicators */}
            {ritualStage === 'hands-enter' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 font-serif text-sm sm:text-base text-[#8FDFFF] font-medium"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37] animate-spin" />
                <span>Invoking sacred energy...</span>
              </motion.div>
            )}

            {ritualStage === 'shuffling' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#071b2e]/90 border border-[#D4AF37]/60 shadow-[0_0_25px_rgba(212,175,55,0.35)] font-serif text-xs sm:text-sm font-bold tracking-widest text-[#D4AF37] uppercase"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
                <span>✦ Shuffling the Sacred 78-Card Deck... ✦</span>
                <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
              </motion.div>
            )}

            {ritualStage === 'blessing' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 font-serif text-sm sm:text-base text-[#D4AF37] font-medium"
              >
                <Sparkles className="w-4 h-4 text-[#8FDFFF] animate-spin" />
                <span>Consecrating cards with divine blessing...</span>
              </motion.div>
            )}

            {ritualStage === 'fanning' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 font-serif text-sm sm:text-base text-[#8FDFFF] font-medium"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Spreading the celestial cards before you...</span>
              </motion.div>
            )}

            {/* Invitation Text (Appears when cards are ready) */}
            {ritualStage === 'invited' && selectedCardIndexes.length < 3 && phase === 'selecting' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0 }}
                className="font-serif italic text-base sm:text-lg text-white/90 tracking-wide"
              >
                "Trust your intuition. Choose the three cards calling to you."
              </motion.p>
            )}

            {/* "✨ Unveil the Wisdom" Reveal Button (Fades in ONLY after 3 cards selected) */}
            <AnimatePresence>
              {selectedCardIndexes.length === 3 && phase === 'selecting' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="pt-1"
                >
                  <button
                    type="button"
                    onClick={handleUnveilWisdom}
                    className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#F5E5AD] to-[#D4AF37] hover:from-[#FAF5EB] hover:to-white text-[#050505] font-serif font-bold text-xs sm:text-sm tracking-widest rounded-xl border border-[#D4AF37]/80 shadow-[0_0_30px_rgba(212,175,55,0.6)] uppercase cursor-pointer flex items-center gap-2.5 transition-all duration-300 hover:scale-105"
                  >
                    <Sparkles className="w-4 h-4 text-[#050505]" />
                    <span>✨ Unveil the Wisdom</span>
                    <Sparkles className="w-4 h-4 text-[#050505]" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

        {/* -------------------------------------------------------------------
            MYSTICAL LOADING STATE (during 'interpreting' phase)
           ------------------------------------------------------------------- */}
        {phase === 'interpreting' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-12 px-6 text-center space-y-5 max-w-xl mx-auto bg-[#071b2e]/70 border border-[#D4AF37]/30 rounded-2xl backdrop-blur-md shadow-[0_0_50px_rgba(143,223,255,0.15)] my-10"
          >
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-[#8FDFFF]/30 border-t-[#D4AF37] animate-spin" />
              <div className="w-10 h-10 rounded-full bg-[#0a233c] border border-[#D4AF37]/40 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-amber-300 uppercase block">
                ✦ Consulting Ancient Wisdom ✦
              </span>
              <p className="font-serif text-base sm:text-lg text-white/90 italic">
                "Translating the sacred energy of your spread..."
              </p>
            </div>
          </motion.div>
        )}

        {/* -------------------------------------------------------------------
            REQUIREMENT 4: REVEALED AI READING OUTPUT LAYOUT
           ------------------------------------------------------------------- */}
        {phase === 'complete' && readingResponse && (
          <motion.div
            ref={readingRef}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12 pt-8 border-t border-[#8FDFFF]/20 space-y-8 text-left max-w-4xl mx-auto"
          >
            {/* Reading Header */}
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase block">
                ✦ {readingResponse.guidanceType || selectedGuidanceType.toUpperCase()} ✦
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-medium">
                Your Intuitive Reading
              </h3>
            </div>

            {/* Reading Output Container */}
            <div className="bg-gradient-to-r from-[#071b2e]/95 via-[#030815]/95 to-[#071b2e]/95 border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 shadow-[0_0_35px_rgba(212,175,55,0.2)] space-y-8">
              
              {/* 1. Cards Drawn Section */}
              <div className="space-y-3 border-b border-[#D4AF37]/25 pb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <h4 className="font-serif text-lg sm:text-xl font-semibold text-amber-200">
                    Cards Drawn
                  </h4>
                </div>
                <ul className="space-y-2 pl-2">
                  {selectedCardIndexes.map((fanIdx, idx) => {
                    const cardObj = fannedCardAssignments[fanIdx];
                    const cardName = cardObj?.card?.name || readingResponse.cardsDrawn?.[idx] || `Card ${idx + 1}`;
                    const orientation = cardObj?.orientation || 'upright';
                    const posLabel = idx === 0 ? 'Past' : idx === 1 ? 'Present' : 'Future';
                    return (
                      <li key={idx} className="font-serif text-sm sm:text-base text-white/90 flex items-center gap-2.5">
                        <span className="text-[#D4AF37] text-xs">✦</span>
                        <span className="font-semibold text-amber-100">{cardName}</span>
                        <span className="text-xs text-amber-300/70 uppercase font-mono">({orientation})</span>
                        <span className="text-xs text-white/50 font-sans ml-auto">[{posLabel}]</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* 2. Guidance Section (7-8 lines natural flowing combined interpretation) */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <h4 className="font-serif text-lg sm:text-xl font-semibold text-amber-200">
                    Guidance
                  </h4>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed font-serif italic pl-1 sm:pl-2">
                  "{formatFlowingNarrative(readingResponse)}"
                </p>
              </div>

              {/* 3. Affirmation Section */}
              {readingResponse.affirmation && (
                <div className="pt-4 border-t border-[#D4AF37]/25 space-y-2 bg-[#D4AF37]/10 p-5 rounded-xl border border-[#D4AF37]/30 text-center sm:text-left">
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <h5 className="font-serif text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
                      Affirmation
                    </h5>
                  </div>
                  <p className="font-serif italic text-base sm:text-lg text-amber-200 font-medium leading-relaxed">
                    "{readingResponse.affirmation}"
                  </p>
                </div>
              )}

            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                type="button"
                onClick={handleResetAnotherReading}
                className="px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] via-[#F5E5AD] to-[#D4AF37] hover:from-[#FAF5EB] hover:to-white text-[#050505] font-bold text-xs sm:text-sm tracking-wider rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all uppercase cursor-pointer border border-[#D4AF37]/60 flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Begin Another Reading</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadPDF}
                className="px-6 py-3.5 bg-[#071b2e]/80 hover:bg-[#0d2e4a]/80 text-amber-300 text-xs sm:text-sm font-semibold tracking-wider rounded-xl border border-[#D4AF37]/40 transition-all uppercase cursor-pointer flex items-center gap-2 shadow-[0_0_15px_rgba(143,223,255,0.1)]"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download PDF Report</span>
              </button>
            </div>

          </motion.div>
        )}

      </div>
    </section>
  );
}

// Sub-component for Card Back with particle effects on hover
function TarotCardCardBackWithParticles({ isHovered, fanIdx }: { isHovered: boolean; fanIdx?: number }) {
  return (
    <div className="relative w-full h-full">
      <TarotCardBack shimmerIndex={fanIdx} />
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
          {[0, 1, 2, 3].map((p) => (
            <motion.span
              key={p}
              initial={{ opacity: 0, y: 10, x: Math.random() * 40 - 20 }}
              animate={{ opacity: [0, 1, 0], y: -30, x: Math.random() * 40 - 20 }}
              transition={{ duration: 1.2, repeat: Infinity, delay: p * 0.2 }}
              className="absolute bottom-2 left-1/2 text-amber-300 text-[10px]"
            >
              ✦
            </motion.span>
          ))}
        </div>
      )}
    </div>
  );
}
