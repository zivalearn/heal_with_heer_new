import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ChevronRight, ChevronLeft, Check, Download, Compass, Gem, Heart, Shield, Award, UserCheck, ArrowRight, RotateCcw } from 'lucide-react';
import { generatePDF } from '../lib/pdfHelper';

interface HealingQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToModality: (modalityId: string) => void;
  onBookSession: (modalityTitle?: string) => void;
}

// ----------------------------------------------------------------------------
// QUIZ DATA DEFINITIONS
// ----------------------------------------------------------------------------
interface OptionItem {
  id: string;
  label: string;
  tags?: string[];
}

interface Question {
  id: number;
  title: string;
  subtitle?: string;
  isMulti?: boolean;
  options: OptionItem[];
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Which of these challenges feel most true for you right now?",
    subtitle: "(Select all that apply)",
    isMulti: true,
    options: [
      { id: 'q1_overthink', label: 'I constantly overthink and struggle to quiet my mind.', tags: ['nlp', 'eft', 'amethyst'] },
      { id: 'q1_anxious', label: 'I often feel anxious, emotionally overwhelmed, or stressed.', tags: ['eft', 'hypnotherapy', 'trauma', 'amethyst', 'tourmaline'] },
      { id: 'q1_unhealthy_rel', label: 'I keep repeating the same unhealthy relationship patterns.', tags: ['trauma', 'relationship', 'hypnotherapy', 'rose_quartz'] },
      { id: 'q1_low_confidence', label: 'I struggle with low confidence or self-worth.', tags: ['nlp', 'hypnotherapy', 'citrine', 'tigers_eye'] },
      { id: 'q1_procrastinate', label: 'I procrastinate even when I know what I should do.', tags: ['nlp', 'carnelian', 'citrine'] },
      { id: 'q1_painful_memories', label: 'I find it difficult to let go of painful memories.', tags: ['trauma', 'smoky_quartz', 'cord_cutting'] },
      { id: 'q1_drained', label: 'I often feel emotionally drained after interacting with people.', tags: ['cord_cutting', 'reiki', 'tourmaline'] },
      { id: 'q1_disconnected', label: 'I feel disconnected from myself or my purpose.', tags: ['sbk', 'reiki', 'citrine', 'labradorite'] },
      { id: 'q1_career_blocked', label: 'I feel blocked in my career or finances.', tags: ['nlp', 'citrine', 'green_aventurine'] },
      { id: 'q1_spiritual_growth', label: 'I want to grow spiritually and trust my intuition.', tags: ['tarot', 'sbk', 'clear_quartz', 'selenite', 'moonstone'] },
    ]
  },
  {
    id: 2,
    title: "What would you most like to transform in your life?",
    subtitle: "(Select all that resonate)",
    isMulti: true,
    options: [
      { id: 'q2_emotional', label: 'Emotional healing', tags: ['trauma', 'eft', 'rose_quartz'] },
      { id: 'q2_rel', label: 'Better relationships', tags: ['relationship', 'trauma', 'rose_quartz'] },
      { id: 'q2_career', label: 'Career growth', tags: ['nlp', 'citrine', 'tigers_eye'] },
      { id: 'q2_finance', label: 'Financial abundance', tags: ['nlp', 'citrine', 'green_aventurine'] },
      { id: 'q2_confidence', label: 'Confidence', tags: ['nlp', 'hypnotherapy', 'carnelian', 'tigers_eye'] },
      { id: 'q2_selflove', label: 'Self-love', tags: ['trauma', 'relationship', 'rose_quartz'] },
      { id: 'q2_spiritual', label: 'Spiritual growth', tags: ['sbk', 'tarot', 'reiki', 'clear_quartz', 'labradorite'] },
      { id: 'q2_past', label: 'Letting go of the past', tags: ['trauma', 'cord_cutting', 'smoky_quartz'] },
      { id: 'q2_purpose', label: 'Finding life purpose', tags: ['sbk', 'tarot', 'citrine'] },
      { id: 'q2_inner_peace', label: 'Inner peace', tags: ['eft', 'reiki', 'amethyst', 'selenite'] },
      { id: 'q2_decisions', label: 'Better decision-making', tags: ['tarot', 'nlp', 'tigers_eye'] },
    ]
  },
  {
    id: 3,
    title: "Which experiences have affected you the most?",
    subtitle: "(Select all that resonate)",
    isMulti: true,
    options: [
      { id: 'q3_childhood_crit', label: 'Childhood criticism', tags: ['trauma', 'hypnotherapy', 'rose_quartz'] },
      { id: 'q3_neglect', label: 'Emotional neglect', tags: ['trauma', 'hypnotherapy', 'smoky_quartz'] },
      { id: 'q3_parents', label: 'Parent-related wounds', tags: ['trauma', 'relationship', 'rose_quartz'] },
      { id: 'q3_abandonment', label: 'Abandonment or rejection', tags: ['trauma', 'hypnotherapy', 'rose_quartz'] },
      { id: 'q3_betrayal', label: 'Betrayal', tags: ['trauma', 'cord_cutting', 'tourmaline'] },
      { id: 'q3_toxic_rel', label: 'Toxic relationship', tags: ['cord_cutting', 'trauma', 'tourmaline', 'rose_quartz'] },
      { id: 'q3_divorce', label: 'Divorce or breakup', tags: ['cord_cutting', 'trauma', 'smoky_quartz'] },
      { id: 'q3_bullying', label: 'Bullying', tags: ['trauma', 'hypnotherapy', 'carnelian'] },
      { id: 'q3_embarrassment', label: 'Failure or public embarrassment', tags: ['nlp', 'eft', 'tigers_eye'] },
      { id: 'q3_grief', label: 'Loss or grief', tags: ['trauma', 'reiki', 'amethyst'] },
      { id: 'q3_financial', label: 'Financial struggles', tags: ['nlp', 'citrine', 'green_aventurine'] },
      { id: 'q3_unresolved', label: "I don't know—but something feels unresolved.", tags: ['hypnotherapy', 'sbk', 'clear_quartz'] },
    ]
  },
  {
    id: 4,
    title: "Which thoughts do you experience most often?",
    subtitle: "(Select all that apply)",
    isMulti: true,
    options: [
      { id: 'q4_not_good_enough', label: '"I\'m not good enough."', tags: ['nlp', 'hypnotherapy', 'citrine', 'rose_quartz'] },
      { id: 'q4_leave', label: '"People eventually leave."', tags: ['trauma', 'relationship', 'rose_quartz'] },
      { id: 'q4_deserve_success', label: '"I don\'t deserve success."', tags: ['hypnotherapy', 'nlp', 'citrine'] },
      { id: 'q4_perfect', label: '"I have to be perfect."', tags: ['nlp', 'eft', 'amethyst'] },
      { id: 'q4_cant_trust', label: '"I can\'t trust people."', tags: ['trauma', 'cord_cutting', 'tourmaline'] },
      { id: 'q4_sabotage', label: '"I always sabotage myself."', tags: ['hypnotherapy', 'nlp', 'carnelian'] },
      { id: 'q4_stuck', label: '"I feel stuck."', tags: ['nlp', 'sbk', 'carnelian'] },
      { id: 'q4_who_am_i', label: '"I don\'t know who I really am."', tags: ['sbk', 'tarot', 'moonstone'] },
      { id: 'q4_absorb', label: '"I absorb everyone\'s emotions."', tags: ['cord_cutting', 'reiki', 'tourmaline'] },
      { id: 'q4_no_change', label: '"Nothing seems to change."', tags: ['hypnotherapy', 'trauma', 'clear_quartz'] },
    ]
  },
  {
    id: 5,
    title: "What are you hoping to create over the next 12 months?",
    subtitle: "(Select all that apply)",
    isMulti: true,
    options: [
      { id: 'q5_heal_emotionally', label: 'Heal emotionally', tags: ['trauma', 'eft', 'rose_quartz'] },
      { id: 'q5_confidence', label: 'Build confidence', tags: ['nlp', 'citrine', 'tigers_eye'] },
      { id: 'q5_abundance', label: 'Become financially abundant', tags: ['nlp', 'citrine', 'green_aventurine'] },
      { id: 'q5_healing_career', label: 'Start a healing career', tags: ['nlp', 'sbk', 'reiki', 'citrine'] },
      { id: 'q5_coach', label: 'Become a therapist or coach', tags: ['nlp', 'sbk', 'citrine'] },
      { id: 'q5_improve_rel', label: 'Improve relationships', tags: ['relationship', 'trauma', 'rose_quartz'] },
      { id: 'q5_intuition', label: 'Develop intuition', tags: ['tarot', 'sbk', 'amethyst', 'labradorite'] },
      { id: 'q5_happier', label: 'Feel happier every day', tags: ['eft', 'reiki', 'citrine', 'green_aventurine'] },
      { id: 'q5_release_trauma', label: 'Release trauma', tags: ['trauma', 'cord_cutting', 'smoky_quartz'] },
      { id: 'q5_meaningful_life', label: 'Create a meaningful life', tags: ['sbk', 'nlp', 'clear_quartz'] },
    ]
  },
  {
    id: 6,
    title: "Which statement sounds most like you?",
    subtitle: "(Select what best describes your preferred approach)",
    isMulti: true,
    options: [
      { id: 'q6_practical', label: 'I want practical techniques I can use immediately.', tags: ['nlp', 'eft', 'carnelian'] },
      { id: 'q6_deep_inside', label: 'I want to heal deeply from the inside.', tags: ['trauma', 'hypnotherapy', 'rose_quartz'] },
      { id: 'q6_understand_why', label: 'I want to understand why I think and behave this way.', tags: ['nlp', 'hypnotherapy', 'clear_quartz'] },
      { id: 'q6_spiritual_guidance', label: 'I want spiritual guidance and intuitive clarity.', tags: ['tarot', 'sbk', 'reiki', 'labradorite'] },
      { id: 'q6_help_others', label: 'I want to help heal others professionally.', tags: ['nlp', 'reiki', 'sbk', 'citrine'] },
      { id: 'q6_personalized_support', label: 'I think I need personalized support rather than just a course.', tags: ['one_one'] },
    ]
  }
];

// ----------------------------------------------------------------------------
// COURSE & CRYSTAL KNOWLEDGE BASE
// ----------------------------------------------------------------------------
interface CourseInfo {
  id: string;
  viewKey: string;
  title: string;
  badge: string;
  description: string;
  benefit: string;
  transformation: string;
}

const COURSES_INFO: Record<string, CourseInfo> = {
  trauma: {
    id: 'trauma',
    viewKey: 'trauma',
    title: 'Trauma & Cellular Memory Healing',
    badge: 'Trauma & Deep Root Healing',
    description: 'Dissolves somatic emotional imprints, childhood neglect, and nervous system hyper-vigilance at the cellular level.',
    benefit: 'Releases subconscious pain triggers, restores deep nervous system safety, and stops reactive emotional loops.',
    transformation: 'Enables you to feel grounded, emotionally sovereign, and free from past relational or family baggage.'
  },
  nlp: {
    id: 'nlp',
    viewKey: 'nlp',
    title: 'NLP Masterclass & Mind Transformation',
    badge: 'Mindset & Self-Mastery',
    description: 'Rewires subconscious thought patterns, eliminates self-sabotage, and builds rapid confidence and goal clarity.',
    benefit: 'Overcomes overthinking, procrastination, and limiting money/career beliefs using practical immediate techniques.',
    transformation: 'Builds unshakeable self-confidence, crystal-clear communication, and accelerated career abundance.'
  },
  hypnotherapy: {
    id: 'hypnotherapy',
    viewKey: 'hypnotherapy',
    title: 'Subconscious Hypnotherapy & Inner Child',
    badge: 'Subconscious Rewiring',
    description: 'Reprograms core childhood beliefs, releases deep-seated fears, phobias, and restores inner child self-worth.',
    benefit: 'Directly accesses subconscious layers to break repeating self-sabotaging habits and core feelings of unworthiness.',
    transformation: 'Transforms deep self-doubt into authentic self-love, emotional stability, and inner empowerment.'
  },
  eft: {
    id: 'eft',
    viewKey: 'hypnotherapy',
    title: 'EFT Emotional Freedom Techniques',
    badge: 'Rapid Stress & Anxiety Relief',
    description: 'Somatic meridian tapping that neutralizes acute stress, emotional overwhelm, panic, and physical tension.',
    benefit: 'Provides rapid, on-demand emotional regulation during anxious moments or high-stress triggers.',
    transformation: 'Gives you lifelong mastery over your emotional state, calming mind and body in under 5 minutes.'
  },
  sbk: {
    id: 'sbk',
    viewKey: 'reiki',
    title: 'SBK Spiritual Transformation & Soul Purpose',
    badge: 'Spiritual & Purpose Awakening',
    description: 'Aligns your subtle energetic bodies, activates higher intuition, and clears soul-level life path blocks.',
    benefit: 'Clears energetic stagnation, awakens inner spiritual gifts, and aligns your daily actions with soul purpose.',
    transformation: 'Leads you into a vibrant state of spiritual alignment, clarity, and joyful higher living.'
  },
  tarot: {
    id: 'tarot',
    viewKey: 'tarot',
    title: 'Intuitive Tarot & Celestial Guidance Course',
    badge: 'Intuitive Clarity & Guidance',
    description: 'Teaches you to channel higher divine messages, unlock personal intuition, and make clear life decisions.',
    benefit: 'Provides clear answers during confusing life crossroads regarding relationships, career, and spiritual direction.',
    transformation: 'Empowers you with accurate intuitive insight, decisive wisdom, and spiritual self-reliance.'
  },
  cord_cutting: {
    id: 'cord_cutting',
    viewKey: 'reiki',
    title: 'Energy Healing & Etheric Cord Cutting',
    badge: 'Aura Cleansing & Energy Boundaries',
    description: 'Clears heavy toxic energetic attachments, ex-partner cords, and restores aura vitality for empaths.',
    benefit: 'Stops emotional energy drainage, severs unhealthy toxic bonds, and cleanses your subtle energy field.',
    transformation: 'Reclaims your sacred personal boundaries, vitality, and emotional independence.'
  },
  one_one: {
    id: 'one_one',
    viewKey: 'one_one',
    title: '1:1 Private Healing & Transformation Session',
    badge: 'Personalized 1:1 Sanctuary',
    description: 'Direct bespoke 1-on-1 immersion tailored to resolve complex, multi-layered emotional & life challenges.',
    benefit: 'Combines multiple advanced modalities in a safe, confidential, deeply personalized one-to-one sanctuary.',
    transformation: 'Fast-tracks permanent root-cause dissolution and personalized life realignment.'
  }
};

interface CrystalInfo {
  name: string;
  icon: string;
  color: string;
  bgGradient: string;
  purpose: string;
  benefits: string;
}

const CRYSTALS_INFO: Record<string, CrystalInfo> = {
  citrine: {
    name: 'Citrine',
    icon: '💎',
    color: '#D4AF37',
    bgGradient: 'from-amber-500/20 to-yellow-600/10',
    purpose: 'Abundance, Career Success & Unshakeable Confidence',
    benefits: 'Rebuilds solar plexus motivation, clears financial blockages, and attracts new vocational opportunities.'
  },
  rose_quartz: {
    name: 'Rose Quartz',
    icon: '🌸',
    color: '#F472B6',
    bgGradient: 'from-pink-500/20 to-rose-600/10',
    purpose: 'Heart Healing, Self-Love & Harmonious Relationships',
    benefits: 'Soothes heartbreak, nurtures inner child wounds, and opens the heart chakra to unconditional love and forgiveness.'
  },
  tourmaline: {
    name: 'Black Tourmaline',
    icon: '🛡️',
    color: '#9CA3AF',
    bgGradient: 'from-slate-700/30 to-gray-900/30',
    purpose: 'Energetic Protection, Empath Shielding & Grounding',
    benefits: 'Repels toxic energy, prevents emotional exhaustion, and anchors your aura in strong protective stability.'
  },
  clear_quartz: {
    name: 'Clear Quartz',
    icon: '✨',
    color: '#E0F2FE',
    bgGradient: 'from-sky-300/20 to-blue-500/10',
    purpose: 'Master Healing, High Vibration & Spiritual Amplification',
    benefits: 'Clears mental fog, amplifies positive intentions, and connects you with divine spiritual clarity.'
  },
  amethyst: {
    name: 'Amethyst',
    icon: '🔮',
    color: '#A855F7',
    bgGradient: 'from-purple-600/20 to-indigo-700/10',
    purpose: 'Anxiety Relief, Deep Inner Peace & Third-Eye Intuition',
    benefits: 'Calms overthinking, relieves stress, enhances restful sleep, and deepens intuitive wisdom during meditation.'
  },
  tigers_eye: {
    name: 'Tiger\'s Eye',
    icon: '🐅',
    color: '#D97706',
    bgGradient: 'from-amber-600/20 to-orange-700/10',
    purpose: 'Courage, Decisive Action & Fear Dissolution',
    benefits: 'Dispels fear of failure, boosts willpower, and grounds practical decision-making during career transitions.'
  },
  carnelian: {
    name: 'Carnelian',
    icon: '🔥',
    color: '#EF4444',
    bgGradient: 'from-red-500/20 to-orange-600/10',
    purpose: 'Motivation, Creative Vitality & Overcoming Procrastination',
    benefits: 'Ignites sacral energy, stimulates passion, and converts stagnant procrastination into decisive action.'
  },
  green_aventurine: {
    name: 'Green Aventurine',
    icon: '🌿',
    color: '#34D399',
    bgGradient: 'from-emerald-500/20 to-teal-600/10',
    purpose: 'New Beginnings, Prosperity & Emotional Renewal',
    benefits: 'Known as the Stone of Opportunity, it aligns you with luck, growth, and optimistic life transitions.'
  },
  moonstone: {
    name: 'Moonstone',
    icon: '🌙',
    color: '#C084FC',
    bgGradient: 'from-purple-400/20 to-pink-500/10',
    purpose: 'Emotional Balance, Cycles & Divine Intuition',
    benefits: 'Harmonizes emotional mood swings, honors life cycles, and deepens feminine intuitive connection.'
  },
  labradorite: {
    name: 'Labradorite',
    icon: '🌌',
    color: '#38BDF8',
    bgGradient: 'from-cyan-600/20 to-blue-800/10',
    purpose: 'Soul Transformation, Awakening & Aura Shielding',
    benefits: 'Unlocks latent spiritual gifts, protects during deep inner work, and facilitates cosmic transformation.'
  },
  smoky_quartz: {
    name: 'Smoky Quartz',
    icon: '⛰️',
    color: '#78716C',
    bgGradient: 'from-stone-600/30 to-neutral-800/20',
    purpose: 'Releasing Past Trauma, Stress Detox & Deep Grounding',
    benefits: 'Neutralizes negative emotional memories, releases grief, and anchors you safely in the present moment.'
  },
  selenite: {
    name: 'Selenite',
    icon: '🕊️',
    color: '#F8FAFC',
    bgGradient: 'from-slate-200/20 to-blue-100/10',
    purpose: 'Energy Cleansing, High Light & Aura Purification',
    benefits: 'Instantly purifies heavy aura vibrations, clears stuck energy from spaces, and invites celestial peace.'
  }
};

// ----------------------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------------------
export default function HealingQuizModal({
  isOpen,
  onClose,
  onNavigateToModality,
  onBookSession
}: HealingQuizModalProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string[]>>({});
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Handle Option Toggle
  const toggleOption = (questionId: number, optionId: string, isMulti?: boolean) => {
    setSelectedAnswers(prev => {
      const current = prev[questionId] || [];
      if (!isMulti) {
        return { ...prev, [questionId]: [optionId] };
      }
      if (current.includes(optionId)) {
        return { ...prev, [questionId]: current.filter(id => id !== optionId) };
      } else {
        return { ...prev, [questionId]: [...current, optionId] };
      }
    });
  };

  const handleNext = () => {
    if (currentStep < QUIZ_QUESTIONS.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Final submit - trigger analysis animation
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setQuizSubmitted(true);
      }, 1600);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setIsAnalyzing(false);
  };

  // --------------------------------------------------------------------------
  // CALCULATE AI RECOMMENDATION SCORES
  // --------------------------------------------------------------------------
  const calculateRecommendations = () => {
    const courseScores: Record<string, number> = {
      trauma: 0,
      nlp: 0,
      hypnotherapy: 0,
      eft: 0,
      sbk: 0,
      tarot: 0,
      cord_cutting: 0,
      one_one: 0
    };

    const crystalScores: Record<string, number> = {
      citrine: 0,
      rose_quartz: 0,
      tourmaline: 0,
      clear_quartz: 0,
      amethyst: 0,
      tigers_eye: 0,
      carnelian: 0,
      green_aventurine: 0,
      moonstone: 0,
      labradorite: 0,
      smoky_quartz: 0,
      selenite: 0
    };

    let totalSelectionsCount = 0;
    let traumaCount = 0;
    let relationshipWoundsCount = 0;
    let anxietyCount = 0;
    let wantsPersonalizedOneOnOne = false;

    QUIZ_QUESTIONS.forEach(q => {
      const answered = selectedAnswers[q.id] || [];
      totalSelectionsCount += answered.length;

      answered.forEach(optId => {
        const option = q.options.find(o => o.id === optId);
        if (!option) return;

        // Check special indicators
        if (['q3_childhood_crit', 'q3_neglect', 'q3_parents', 'q3_abandonment', 'q1_painful_memories', 'q5_release_trauma'].includes(optId)) {
          traumaCount++;
        }
        if (['q1_unhealthy_rel', 'q3_toxic_rel', 'q3_divorce', 'q3_betrayal', 'q5_improve_rel'].includes(optId)) {
          relationshipWoundsCount++;
        }
        if (['q1_anxious', 'q1_overthink', 'q4_perfect', 'q4_stuck'].includes(optId)) {
          anxietyCount++;
        }
        if (optId === 'q6_personalized_support') {
          wantsPersonalizedOneOnOne = true;
        }

        // Apply tag scores
        option.tags?.forEach(tag => {
          if (courseScores[tag] !== undefined) {
            courseScores[tag] += 1;
          }
          if (crystalScores[tag] !== undefined) {
            crystalScores[tag] += 1;
          }
        });
      });
    });

    // Check 1:1 Session trigger condition
    const qualifyingTopCoursesCount = Object.values(courseScores).filter(score => score >= 3).length;
    const isOneOnOneRecommended =
      wantsPersonalizedOneOnOne ||
      totalSelectionsCount >= 10 ||
      traumaCount >= 3 ||
      relationshipWoundsCount >= 3 ||
      anxietyCount >= 3 ||
      qualifyingTopCoursesCount >= 3;

    if (isOneOnOneRecommended) {
      courseScores.one_one += 10;
    }

    // Sort Courses
    const sortedCourses = Object.entries(courseScores)
      .filter(([id]) => id !== 'one_one') // keep 1:1 separate for special highlight if triggered
      .sort((a, b) => b[1] - a[1]);

    const topCourseIds = sortedCourses.slice(0, 3).map(([id]) => id);

    // Sort Crystals
    const sortedCrystals = Object.entries(crystalScores)
      .sort((a, b) => b[1] - a[1]);

    const topCrystalIds = sortedCrystals.slice(0, 3).map(([id]) => id);

    return {
      topCourseIds,
      topCrystalIds,
      isOneOnOneRecommended,
      totalSelectionsCount,
      traumaCount,
      relationshipWoundsCount,
      anxietyCount
    };
  };

  const recs = calculateRecommendations();

  // --------------------------------------------------------------------------
  // GENERATE PDF REPORT
  // --------------------------------------------------------------------------
  const handleDownloadPDF = () => {
    const topCourseList = recs.topCourseIds.map(id => COURSES_INFO[id]).filter(Boolean);
    const topCrystalList = recs.topCrystalIds.map(id => CRYSTALS_INFO[id]).filter(Boolean);

    generatePDF(
      'Personalized_Healing_Roadmap.pdf',
      'YOUR PERSONALIZED HEALING & TRANSFORMATION ROADMAP',
      'Prepared by Heal With Heer Sanctuary | AI Diagnostic Assessment',
      'Based on your deep assessment, we have synthesized a custom healing trajectory, course recommendations, and crystal companions to guide your journey to emotional sovereignty.',
      [
        {
          title: 'RECOMMENDED COURSES & PATHWAYS',
          items: topCourseList.map((c, i) =>
            `${i + 1}. ${c.title} (${c.badge})\n    Focus: ${c.description}\n    Benefit: ${c.benefit}\n    Transformation: ${c.transformation}`
          )
        },
        {
          title: 'RECOMMENDED CRYSTAL COMPANIONS',
          items: topCrystalList.map((cr, i) =>
            `${i + 1}. ${cr.name} — ${cr.purpose}\n    How it helps: ${cr.benefits}`
          )
        },
        {
          title: 'YOUR 12-MONTH TRANSFORMATION PLAN',
          text: recs.isOneOnOneRecommended
            ? 'Because your responses highlight multi-layered, interconnected healing goals, starting with a 1:1 Personalized Healing & Transformation Session is strongly advised. This will establish direct root-cause dissolution before or alongside your core courses.'
            : 'By dedicating 15–20 minutes daily to your recommended course techniques and keeping your recommended crystals close during meditation, you will experience rapid emotional regulation, elevated confidence, and deep inner peace.'
        },
        {
          title: 'DAILY AFFIRMATION & INTEGRATION PRACTICE',
          text: '"I release all that no longer serves my highest good. I welcome emotional peace, unshakeable self-confidence, and divine abundance into my life today."'
        }
      ],
      'Heal With Heer Sanctuary — Personalized AI Healing Roadmap'
    );
  };

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentStep - 1];
  const currentSelectedCount = (selectedAnswers[currentQ?.id] || []).length;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/75 backdrop-blur-md animate-fade-in">
        
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF8F5] to-[#F5F1E8] border-2 border-[#D4AF37]/60 rounded-3xl shadow-[0_20px_60px_rgba(7,42,58,0.25)] text-[#072a3a] overflow-hidden my-auto"
        >
          {/* Top Gold Gradient Glow Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#c0942c]/60 via-[#D4AF37] to-[#c0942c]/60" />

          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#D4AF37]/30 flex items-center justify-between bg-[#F5F1E8]/90">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37]/25 to-[#FAF8F5] border border-[#c0942c]/60 flex items-center justify-center text-[#c0942c] shadow-inner">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#072a3a] flex items-center gap-2">
                  HEALING & TRANSFORMATION QUIZ
                </h2>
                <span className="text-[10px] sm:text-xs text-[#8fa89b] font-mono tracking-widest uppercase block font-semibold">
                  ✦ Discover Your Custom Healing Journey ✦
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#072a3a]/5 hover:bg-[#072a3a]/15 text-[#072a3a]/70 hover:text-[#072a3a] transition-colors cursor-pointer"
              title="Close Quiz"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Analyzing State */}
          {isAnalyzing && (
            <div className="p-12 sm:p-16 text-center space-y-6 flex flex-col items-center justify-center min-h-[380px]">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37]/40 border-t-[#c0942c] animate-spin flex items-center justify-center" />
                <Sparkles className="w-8 h-8 text-[#c0942c] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-semibold text-[#072a3a]">
                  Synthesizing Your Healing Blueprint...
                </h3>
                <p className="text-xs sm:text-sm text-[#4a5e68] max-w-md mx-auto italic font-serif">
                  "Analyzing emotional frequencies, subconscious patterns, and energetic alignment to build your recommended course & crystal roadmap."
                </p>
              </div>
            </div>
          )}

          {/* Quiz Active Questions */}
          {!isAnalyzing && !quizSubmitted && (
            <div className="p-5 sm:p-8 space-y-6">
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono text-[#072a3a]/80 font-medium">
                  <span>Question {currentStep} of {QUIZ_QUESTIONS.length}</span>
                  <span>{Math.round((currentStep / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
                </div>
                <div className="w-full h-1.5 bg-[#E2DBCF] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#c0942c] via-[#D4AF37] to-[#c0942c] transition-all duration-300 rounded-full"
                    style={{ width: `${(currentStep / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Banner */}
              <div className="space-y-1.5 text-left">
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#072a3a] leading-snug">
                  {currentQ.title}
                </h3>
                {currentQ.subtitle && (
                  <p className="text-xs sm:text-sm text-[#c0942c] font-sans italic font-medium">
                    {currentQ.subtitle}
                  </p>
                )}
              </div>

              {/* Options Grid */}
              <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1 custom-scrollbar">
                {currentQ.options.map((opt) => {
                  const isSelected = (selectedAnswers[currentQ.id] || []).includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleOption(currentQ.id, opt.id, currentQ.isMulti)}
                      className={`w-full p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer select-none group ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#072a3a] to-[#0c384e] border-[#c0942c] shadow-[0_4px_15px_rgba(7,42,58,0.25)] text-white'
                          : 'bg-[#FFFDF9] hover:bg-[#F5F0E6] border-[#c0942c]/30 text-[#072a3a] hover:border-[#c0942c]'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-sans font-medium leading-relaxed pr-3">
                        {opt.label}
                      </span>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-all ${
                        isSelected
                          ? 'bg-[#c0942c] border-[#c0942c] text-white'
                          : 'border-[#c0942c]/50 group-hover:border-[#c0942c]'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Actions */}
              <div className="pt-4 border-t border-[#D4AF37]/30 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className={`px-4 py-2.5 rounded-xl border border-[#072a3a]/20 text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    currentStep === 1
                      ? 'opacity-30 cursor-not-allowed text-[#072a3a]/40'
                      : 'hover:bg-[#072a3a]/5 text-[#072a3a] cursor-pointer'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentSelectedCount === 0}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg ${
                    currentSelectedCount > 0
                      ? 'bg-gradient-to-r from-[#072a3a] to-[#0c384e] hover:from-[#0d3c52] hover:to-[#124b68] text-white font-bold shadow-[0_4px_20px_rgba(7,42,58,0.3)] scale-102 border border-[#c0942c]'
                      : 'bg-[#072a3a]/10 text-[#072a3a]/40 cursor-not-allowed'
                  }`}
                >
                  <span>{currentStep === QUIZ_QUESTIONS.length ? 'Get AI Recommendation' : 'Next Step'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {/* QUIZ RESULT TAB */}
          {!isAnalyzing && quizSubmitted && (
            <div className="p-5 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto custom-scrollbar text-left">
              
              {/* Top Summary Banner */}
              <div className="bg-gradient-to-r from-[#FAF6ED] via-[#F5EFE2] to-[#FAF6ED] border border-[#c0942c] rounded-2xl p-5 sm:p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#c0942c]" />
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#072a3a]">
                    Your Personalized Healing Recommendation
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#3d515c] leading-relaxed font-sans font-medium">
                  Based on your responses, you are navigating a combination of emotional healing, mindset transformation, and unresolved inner patterns. Your selections indicate that targeted subconscious alignment and structured course learning will bring rapid emotional regulation, clarity, and unshakeable confidence.
                </p>
              </div>

              {/* SECTION 1: RECOMMENDED COURSES */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-2">
                  <h4 className="font-serif text-lg font-bold text-[#072a3a] uppercase tracking-wide flex items-center gap-2">
                    <Compass className="w-5 h-5 text-[#c0942c]" />
                    <span>Recommended Courses</span>
                  </h4>
                  <span className="text-[10px] font-mono text-[#c0942c] tracking-widest uppercase font-bold">
                    Direct Modality Match
                  </span>
                </div>

                <div className="space-y-3.5">
                  {recs.topCourseIds.map((courseId, idx) => {
                    const info = COURSES_INFO[courseId];
                    if (!info) return null;
                    const matchLabel = idx === 0 ? '⭐ Highest Match' : idx === 1 ? '⭐ Strong Match' : '⭐ Supportive Match';
                    return (
                      <div
                        key={courseId}
                        className="bg-white border border-[#c0942c]/40 hover:border-[#c0942c] rounded-2xl p-4 sm:p-5 space-y-3 transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="px-2.5 py-1 rounded-full bg-[#FAF6ED] border border-[#c0942c]/50 text-[11px] font-mono font-bold text-[#072a3a]">
                            {matchLabel}
                          </span>
                          <span className="text-[10px] font-mono text-[#5a6c78] uppercase font-semibold">
                            {info.badge}
                          </span>
                        </div>

                        <div>
                          <h5 className="font-serif text-base sm:text-lg font-bold text-[#072a3a]">
                            {info.title}
                          </h5>
                          <p className="text-xs text-[#3d515c] mt-1 leading-relaxed">
                            {info.description}
                          </p>
                        </div>

                        <div className="bg-[#FAF8F5] rounded-xl p-3 text-xs space-y-1.5 border border-[#c0942c]/20">
                          <p className="text-[#072a3a] font-medium">
                            <strong className="text-[#c0942c]">Benefit:</strong> {info.benefit}
                          </p>
                          <p className="text-[#3d515c]">
                            <strong className="text-[#072a3a]">Transformation:</strong> {info.transformation}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onNavigateToModality(info.viewKey);
                          }}
                          className="w-full py-2.5 px-4 bg-gradient-to-r from-[#072a3a] to-[#0c384e] hover:from-[#0d3c52] hover:to-[#124b68] border border-[#c0942c] rounded-xl text-xs font-bold text-amber-100 flex items-center justify-center gap-2 transition-all cursor-pointer group"
                        >
                          <span>Explore {info.title} Page</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 2: RECOMMENDED CRYSTAL COMPANIONS */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-2">
                  <h4 className="font-serif text-lg font-bold text-[#072a3a] uppercase tracking-wide flex items-center gap-2">
                    <Gem className="w-5 h-5 text-[#c0942c]" />
                    <span>Recommended Crystal Companions</span>
                  </h4>
                  <span className="text-[10px] font-mono text-[#c0942c] tracking-widest uppercase font-bold">
                    Energetic Resonance
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {recs.topCrystalIds.map((crystalId) => {
                    const cr = CRYSTALS_INFO[crystalId];
                    if (!cr) return null;
                    return (
                      <div
                        key={crystalId}
                        className="bg-white/90 border border-[#c0942c]/40 rounded-2xl p-4 flex flex-col justify-between space-y-2 text-center shadow-sm"
                      >
                        <div className="space-y-1">
                          <span className="text-2xl block">{cr.icon}</span>
                          <h5 className="font-serif text-sm font-bold text-[#072a3a]">
                            💎 {cr.name}
                          </h5>
                          <p className="text-[11px] text-[#c0942c] font-bold leading-tight">
                            {cr.purpose}
                          </p>
                        </div>
                        <p className="text-[10px] text-[#3d515c] leading-relaxed pt-2 border-t border-[#c0942c]/20">
                          {cr.benefits}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 3: RECOMMENDED NEXT STEP */}
              <div className="bg-gradient-to-r from-[#072a3a] via-[#0d384f] to-[#072a3a] border-2 border-[#c0942c] rounded-2xl p-5 sm:p-6 space-y-4 shadow-lg text-white">
                <div className="flex items-center gap-2 text-amber-200">
                  <UserCheck className="w-5 h-5 text-[#D4AF37]" />
                  <h4 className="font-serif text-base sm:text-lg font-bold uppercase tracking-wider text-amber-100">
                    Recommended Next Step
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-sans">
                  {recs.isOneOnOneRecommended
                    ? "Since your responses indicate multiple interconnected areas of healing, a personalized 1:1 Healing & Transformation Session will help you create a focused, root-cause resolution plan alongside your recommended courses."
                    : "To kickstart your progress, you can explore your top recommended course or book an initial 1:1 consultation to receive custom guidance tailored directly to your current intention."}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onBookSession("1:1 Personalized Healing & Transformation Session");
                  }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] hover:brightness-110 text-[#072a3a] font-bold rounded-xl text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 fill-current" />
                  <span>Book 1:1 Private Session</span>
                </button>
              </div>

              {/* ACTION FOOTER */}
              <div className="pt-4 border-t border-[#D4AF37]/30 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="px-4 py-2.5 rounded-xl border border-[#072a3a]/20 hover:bg-[#072a3a]/5 text-xs font-semibold text-[#072a3a] flex items-center gap-2 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadPDF}
                  className="px-6 py-2.5 rounded-xl bg-[#072a3a] hover:bg-[#0d3b50] border border-[#c0942c] text-amber-100 font-bold text-xs flex items-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#D4AF37]" />
                  <span>Download PDF Report</span>
                </button>
              </div>

            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
