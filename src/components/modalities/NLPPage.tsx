import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Calendar, Brain, Eye, Sparkles, Compass, 
  ShieldCheck, Hourglass, CheckCircle, ArrowRight, Award, Clock, Users, BookOpen,
  Download, MessageSquare, Handshake, RefreshCw, Star, Tv, UserCheck, CreditCard,
  Globe, Heart, GraduationCap, Briefcase, TrendingUp, Lightbulb,
  Sun, User, Crown
} from 'lucide-react';
import { generatePDF } from '../../lib/pdfHelper';
import { SmartImage } from '../SmartImage';

interface CirculatingPillarProps {
  key?: any;
  id?: string;
  title: string;
  items: string[];
  icon: any;
  colorTheme: {
    primary: string;
    badgeBg: string;
    border: string;
    glow: string;
    text: string;
    gradient: string;
  };
  bgImage: string;
}

function CirculatingPillar({ id, title, items, icon: PillarIcon, colorTheme, bgImage }: CirculatingPillarProps) {
  const [orderedItems, setOrderedItems] = React.useState(items);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setOrderedItems(prev => {
        const next = [...prev];
        const first = next.shift();
        if (first !== undefined) {
          next.push(first);
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="bg-white/70 backdrop-blur-md border-2 border-[#2F6D73] rounded-[2rem] p-6 lg:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(47,109,115,0.06)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden h-full min-h-[480px]"
    >
      {/* Background Flower Image with Soft Overlay Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <SmartImage 
          id={id || "nlp.pillar"}
          defaultSrc={bgImage} 
          alt="" 
          className="w-full h-full object-cover opacity-[0.11] mix-blend-multiply" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-[#FAFDFD]/90" />
      </div>

      <div className="space-y-6 relative z-10 w-full flex-grow flex flex-col justify-between">
        <div className="space-y-6">
          {/* Pillar Header */}
          <div className="flex items-center gap-4 border-b border-[#2F6D73]/20 pb-5">
            <div className={`w-12 h-12 rounded-full ${colorTheme.badgeBg} flex items-center justify-center ${colorTheme.text} flex-shrink-0 shadow-sm border border-[#2F6D73]/10`}>
              <PillarIcon className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div className="text-left space-y-1">
              <span 
                className="text-[11px] font-bold uppercase block tracking-widest text-[#0A252C]"
                style={{ letterSpacing: '4px' }}
              >
                {title}
              </span>
            </div>
          </div>

          {/* Pillar Items / Circular Motion Boxes */}
          <div className="flex flex-col gap-4 py-1">
            {orderedItems.map((item) => (
              <motion.div 
                key={item}
                layout
                transition={{ 
                  type: "spring", 
                  stiffness: 45, 
                  damping: 18,
                  mass: 1.1
                }}
                className={`bg-gradient-to-b ${colorTheme.gradient} border border-[#2F6D73]/40 hover:border-[#2F6D73] shadow-sm rounded-2xl p-4.5 flex items-start gap-3.5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
              >
                <div className={`mt-0.5 w-5 h-5 rounded-full ${colorTheme.badgeBg} flex items-center justify-center ${colorTheme.text} flex-shrink-0 border border-[#2F6D73]/10`}>
                  <CheckCircle className="w-3 h-3 stroke-[2.5]" />
                </div>
                <p className="text-xs md:text-[13px] text-[#0A252C] font-semibold leading-relaxed text-left">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const NLPCircleWatercolorRing = ({ id, index }: { id: string; index: number }) => {
  const getWatercolorRingColors = () => {
    switch (id) {
      case 'mind': return 'text-[#5d85a6]'; // Indigo/blue
      case 'language': return 'text-[#68988b]'; // Minty Teal
      case 'beliefs': return 'text-[#728555]'; // Warm Green/Sage
      case 'behavior': return 'text-[#8da372]'; // Olive/Sage Green
      case 'identity': return 'text-[#6c5d9e]'; // Celestial violet/indigo
      case 'results': return 'text-[#bf9f62]'; // Mystic Gold
      default: return 'text-sage';
    }
  };

  const strokeColorClass = getWatercolorRingColors();
  const rotationAngle = (index * 45) + 12; // Distinct organic rotation for each block

  return (
    <svg viewBox="0 0 200 200" style={{ transform: `rotate(${rotationAngle}deg)` }} className="absolute inset-0 w-full h-full select-none pointer-events-none transition-transform duration-1000 group-hover:rotate-[360deg]">
      <g className={strokeColorClass}>
        {/* Layer 1: Very wide, highly diluted wash layer to give the true watercolor aura spread */}
        <path
          d="M 100, 18 C 152, 16 186, 50 183, 102 C 180, 154 146, 184 98, 181 C 50, 178 16, 144 18, 96 C 20, 48 48, 20 100, 18 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="30"
          strokeLinecap="round"
          className="opacity-[0.11] blur-[5px]"
        />

        {/* Layer 2: Core organic paint brush stroke with uneven distribution and natural wet look */}
        <path
          d="M 103, 22 C 146, 18 178, 54 176, 98 C 174, 142 142, 176 96, 172 C 50, 168 22, 134 26, 90 C 30, 46 60, 26 103, 22 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="18"
          strokeLinecap="round"
          className="opacity-[0.28] blur-[1px]"
        />

        {/* Layer 3: Accent dry/wet hand paint stroke lines, running slightly off track to portray hand painted circle */}
        <path
          d="M 92, 28 C 138, 25 168, 58 165, 102 C 162, 146 128, 170 88, 164 C 48, 158 30, 122 34, 78 C 38, 34 46, 31 92, 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          className="opacity-[0.38]"
          strokeDasharray="140 30 80 40"
        />

        {/* Layer 4: Micro organic splatters or dry fiber runs */}
        <path
          d="M 105, 14 C 156, 18 180, 68 174, 115 C 168, 162 122, 182 82, 174 C 42, 166 18, 122 22, 75"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="opacity-[0.45]"
          strokeDasharray="90 80 110 30"
        />
      </g>
    </svg>
  );
};

interface NLPPageProps {
  onBack: () => void;
  onBook: (modalityName: string) => void;
}

export default function NLPPage({ onBack, onBook }: NLPPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [downloading, setDownloading] = React.useState(false);

  const handleDownloadBrochure = () => {
    setDownloading(true);
    setTimeout(() => {
      generatePDF(
        "NLP-Practitioner-Certification-Syllabus.pdf",
        "NLP MASTER PRACTITIONER CERTIFICATION PROGRAM",
        "Think Better. Communicate Better. Transform Your Life.",
        "Become a Certified NLP Master Practitioner & Unlock Your Full Potential\nReprogram Your Mind. Transform Your Beliefs. Create Extraordinary Results.\n\nYour thoughts create your emotions. Your emotions shape your behaviours. Your behaviours determine the results you achieve in every area of life. Neuro-Linguistic Programming (NLP) is one of the world's most powerful approaches for understanding how the mind works, changing limiting beliefs, mastering communication, and creating lasting personal and professional transformation.\n\nNo prior NLP or coaching experience required.",
        [
          {
            title: "MODULE 1: The Foundations of NLP & Human Excellence",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Introduction to Neuro-Linguistic Programming (NLP)",
              "Understanding how your mind, thoughts, and emotions work together",
              "How the conscious and unconscious mind influence your behaviour",
              "How your perception shapes your reality and experiences",
              "Understanding the connection between beliefs, values, identity, and behaviour",
              "Creating clear goals using NLP techniques",
              "Learning from successful people through NLP modelling",
              "Building the foundation for personal growth and transformation",
              "YOUR TRANSFORMATION:",
              "Understand the hidden patterns behind your thoughts and behaviours",
              "Become aware of what influences your decisions and reactions",
              "Develop a growth mindset and stronger self-awareness",
              "Create a foundation for changing unwanted patterns"
            ]
          },
          {
            title: "MODULE 2: Mastering Communication & Rapport",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Reading people's responses and emotional states",
              "Building stronger relationships through NLP techniques",
              "Developing the skill to handle difficult conversations with confidence",
              "Creating trust-based relationships in personal and professional spaces",
              "Using NLP techniques to communicate with greater impact and influence",
              "YOUR TRANSFORMATION:",
              "Communicate with more confidence and clarity",
              "Build stronger personal and professional connections",
              "Understand people's thoughts and emotions better",
              "Reduce misunderstandings and improve relationships"
            ]
          },
          {
            title: "MODULE 3: The Language of the Mind",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Understanding how language affects thoughts and emotions",
              "Using NLP language patterns for better communication",
              "Identifying hidden meanings behind words and statements",
              "Asking questions that create awareness and clarity",
              "Changing negative meanings into empowering perspectives",
              "Creating positive conversations with yourself and others",
              "Using language to resolve internal conflicts",
              "YOUR TRANSFORMATION:",
              "Change the way you talk to yourself and others",
              "Break negative thinking patterns",
              "Handle conversations with more confidence",
              "Create more positive and empowering experiences"
            ]
          },
          {
            title: "MODULE 4: Emotional Mastery & State Management",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Understanding how emotional states are created",
              "Creating positive emotional states through anchoring",
              "Changing unwanted emotional reactions",
              "Managing stress, fear, and anxiety effectively",
              "Building confidence whenever needed",
              "Developing emotional control and flexibility",
              "Creating resourceful states for success",
              "YOUR TRANSFORMATION:",
              "Feel more in control of your emotions",
              "Stay calm during stressful situations",
              "Access confidence and motivation when needed",
              "Replace negative emotional patterns with positive responses"
            ]
          },
          {
            title: "MODULE 5: Belief Change & Deep Personal Transformation",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Understanding how beliefs shape your life",
              "Identifying beliefs that limit your growth",
              "Replacing negative beliefs with empowering beliefs",
              "Understanding your values and what drives you",
              "Creating alignment between your goals and values",
              "Transforming your self-image and identity",
              "Creating lasting changes in thoughts and behaviours",
              "YOUR TRANSFORMATION:",
              "Break free from self-doubt and limiting beliefs",
              "Build stronger confidence and self-worth",
              "Create a more empowered identity",
              "Develop habits and behaviours that support your goals"
            ]
          },
          {
            title: "MODULE 6: Advanced NLP Practitioner Techniques",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Understanding how your mind stores memories and experiences",
              "Changing emotional responses connected to past experiences",
              "Overcoming fears and unwanted reactions",
              "Creating new positive behaviours and habits",
              "Understanding successful thinking strategies",
              "Developing better decision-making patterns",
              "Applying advanced NLP techniques for transformation",
              "YOUR TRANSFORMATION:",
              "Reduce the impact of fears and limiting experiences",
              "Create healthier responses to situations",
              "Improve motivation and decision-making",
              "Develop practical tools for lasting personal change"
            ]
          },
          {
            title: "MODULE 7: NLP Coaching & Transformational Facilitation",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Using NLP techniques for coaching and transformation",
              "Creating structured NLP coaching sessions",
              "Helping people set meaningful goals",
              "Identifying the root causes behind challenges",
              "Handling resistance during transformation",
              "Asking powerful questions for breakthroughs",
              "Creating effective change strategies",
              "Applying NLP through practical exercises",
              "YOUR TRANSFORMATION:",
              "Gain confidence in conducting transformation sessions",
              "Learn how to support others through change",
              "Understand deeper causes behind behaviours",
              "Develop practical coaching abilities"
            ]
          },
          {
            title: "MODULE 8: Master Practitioner Integration & Excellence",
            text: "WHAT YOU WILL LEARN:",
            items: [
              "Combining all NLP techniques for complete transformation",
              "Understanding success and peak performance strategies",
              "Applying NLP in leadership and personal growth",
              "Improving decision-making and creativity",
              "Using NLP in professional environments",
              "Learning through practical case studies",
              "Creating your personal NLP transformation plan",
              "Preparing for Master Practitioner assessment",
              "Continuing your growth as an NLP practitioner",
              "YOUR TRANSFORMATION:",
              "Apply NLP confidently in real-life situations",
              "Master communication, emotions, and mindset techniques",
              "Develop the confidence to use NLP professionally",
              "Create a roadmap for continuous personal and professional growth"
            ]
          },
          {
            title: "FINAL PROGRAM TRANSFORMATION",
            text: "By the end of this NLP Practitioner Certification Program, learners will:",
            items: [
              "Understand how the mind shapes thoughts, emotions, and behaviours.",
              "Transform limiting beliefs and negative patterns.",
              "Communicate with confidence and build stronger connections.",
              "Manage emotions and create positive mental states.",
              "Develop self-awareness, confidence, and personal growth.",
              "Apply NLP techniques for lasting behavioural change.",
              "Gain practical tools to create transformation in personal and professional life."
            ]
          }
        ]
      );
      setDownloading(false);
    }, 1500);
  };

  const nlpModules = [
    {
      num: "01",
      title: "Module 1",
      subtitle: "Foundation of NLP",
      desc: "Understand the principles of NLP, the conscious and unconscious mind, communication models, beliefs, values, perception, representational systems, and the foundations of human excellence.",
      icon: Brain,
      bgGradient: "from-[#FAF9F6] to-[#EAF3F1]/45",
      illustration: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400",
      illustrationAlt: "Peaceful individual standing at the beginning of a forest pathway during sunrise with soft light breaking through the trees"
    },
    {
      num: "02",
      title: "Module 2",
      subtitle: "Mastering Communication & Rapport",
      desc: "Learn rapport building, sensory acuity, calibration, active listening, body language, eye accessing cues, voice tonality, questioning skills, and advanced communication techniques.",
      icon: MessageSquare,
      bgGradient: "from-[#FAF9F6] to-[#4F7786]/10",
      illustration: "https://images.unsplash.com/photo-1516626894901-44526527d868?auto=format&fit=crop&q=80&w=400",
      illustrationAlt: "Two people having a warm conversation in a peaceful garden surrounded by greenery with soft golden light"
    },
    {
      num: "03",
      title: "Module 3",
      subtitle: "Emotional Mastery & Personal Transformation",
      desc: "Develop emotional intelligence, manage emotional states, build confidence, overcome limiting beliefs, strengthen self-worth, and create lasting personal transformation.",
      icon: Heart,
      bgGradient: "from-[#FAF9F6] to-[#7F9C87]/15",
      illustration: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400",
      illustrationAlt: "A person sitting peacefully in meditation while soft golden light radiates from within in calm nature"
    },
    {
      num: "04",
      title: "Module 4",
      subtitle: "Understanding Human Behaviour",
      desc: "Explore personality patterns, behavioural psychology, emotional triggers, VAK learning styles, perception, decision-making, and adapting communication for different personalities.",
      icon: Eye,
      bgGradient: "from-[#FAF9F6] to-[#EAF3F1]/45",
      illustration: "https://images.unsplash.com/photo-1439853949127-fa647821ebb0?auto=format&fit=crop&q=80&w=400",
      illustrationAlt: "Thoughtful reflection of trees in a calm lake representing self-awareness and understanding"
    },
    {
      num: "05",
      title: "Module 5",
      subtitle: "Advanced NLP Techniques",
      desc: "Master anchoring, submodalities, reframing, swish patterns, perceptual positions, timeline techniques, strategy elicitation, parts integration, and behavioural change techniques.",
      icon: RefreshCw,
      bgGradient: "from-[#FAF9F6] to-[#4F7786]/10",
      illustration: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&q=80&w=400",
      illustrationAlt: "A person confidently walking through a beautiful maze garden illuminated by clear sunlight"
    },
    {
      num: "06",
      title: "Module 6",
      subtitle: "Peak Performance & Success Psychology",
      desc: "Learn goal setting, motivation strategies, decision-making models, confidence building, productivity, resilience, success psychology, and personal excellence.",
      icon: Star,
      bgGradient: "from-[#FAF9F6] to-[#7F9C87]/15",
      illustration: "https://images.unsplash.com/photo-1486916856992-e4db22c8df33?auto=format&fit=crop&q=80&w=400",
      illustrationAlt: "A person standing on a mountain summit during sunrise with arms raised in gratitude"
    },
    {
      num: "07",
      title: "Module 7",
      subtitle: "NLP Coaching & Leadership Excellence",
      desc: "Develop transformational coaching skills, powerful questioning, feedback techniques, leadership communication, mentoring, conflict resolution, and client facilitation skills.",
      icon: UserCheck,
      bgGradient: "from-[#FAF9F6] to-[#EAF3F1]/45",
      illustration: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=80&w=400",
      illustrationAlt: "A compassionate mentor guiding a small group in a peaceful outdoor setting surrounded by nature"
    },
    {
      num: "08",
      title: "Module 8",
      subtitle: "Integration, Professional Practice & Certification",
      desc: "Integrate advanced NLP techniques, analyse real-life case studies, complete practical exercises, understand professional ethics, build a personal development plan, and confidently apply NLP in everyday life.",
      icon: Award,
      bgGradient: "from-[#FAF9F6] to-[#4F7786]/10",
      illustration: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=400",
      illustrationAlt: "A tranquil wellness studio with soft golden light flowing in representing readiness and new beginnings"
    }
  ];

  return (
    <div className="bg-ivory text-ocean font-sans min-h-screen nlp-page-root">
      {/* Scoped CSS to scale all font classes inside the NLP Page up by exactly 1 step */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Base font scale shifts (shifted up by 1 step instead of 2 to prevent overlaps) */
        .nlp-page-root .text-\\[9px\\] { font-size: 10.5px !important; }
        .nlp-page-root .text-\\[10px\\] { font-size: 12px !important; }
        .nlp-page-root .text-\\[10\\.5px\\] { font-size: 12.5px !important; }
        .nlp-page-root .text-\\[11px\\] { font-size: 13px !important; }
        .nlp-page-root .text-xs { font-size: 14px !important; }
        .nlp-page-root .text-\\[13px\\] { font-size: 15px !important; }
        .nlp-page-root .text-sm { font-size: 16px !important; }
        .nlp-page-root .text-\\[14\\.5px\\] { font-size: 17px !important; }
        .nlp-page-root .text-base { font-size: 18px !important; }
        .nlp-page-root .text-\\[17px\\] { font-size: 19px !important; }
        .nlp-page-root .text-lg { font-size: 20px !important; }
        .nlp-page-root .text-xl { font-size: 24px !important; }
        .nlp-page-root .text-2xl { font-size: 30px !important; }
        .nlp-page-root .text-3xl { font-size: 36px !important; }
        .nlp-page-root .text-4xl { font-size: 48px !important; }
        .nlp-page-root .text-5xl { font-size: 60px !important; }
        .nlp-page-root .text-6xl { font-size: 72px !important; }
        .nlp-page-root .text-7xl { font-size: 84px !important; }

        /* Responsive Medium screen shifts */
        @media (min-width: 768px) {
          .nlp-page-root .md\\:text-xs { font-size: 14px !important; }
          .nlp-page-root .md\\:text-sm { font-size: 16px !important; }
          .nlp-page-root .md\\:text-base { font-size: 18px !important; }
          .nlp-page-root .md\\:text-lg { font-size: 20px !important; }
          .nlp-page-root .md\\:text-xl { font-size: 24px !important; }
          .nlp-page-root .md\\:text-2xl { font-size: 30px !important; }
          .nlp-page-root .md\\:text-3xl { font-size: 36px !important; }
          .nlp-page-root .md\\:text-4xl { font-size: 48px !important; }
          .nlp-page-root .md\\:text-5xl { font-size: 60px !important; }
          .nlp-page-root .md\\:text-6xl { font-size: 72px !important; }
        }

        /* Responsive Large screen shifts */
        @media (min-width: 1024px) {
          .nlp-page-root .lg\\:text-xs { font-size: 14px !important; }
          .nlp-page-root .lg\\:text-sm { font-size: 16px !important; }
          .nlp-page-root .lg\\:text-base { font-size: 18px !important; }
          .nlp-page-root .lg\\:text-lg { font-size: 20px !important; }
          .nlp-page-root .lg\\:text-xl { font-size: 24px !important; }
          .nlp-page-root .lg\\:text-2xl { font-size: 30px !important; }
          .nlp-page-root .lg\\:text-3xl { font-size: 36px !important; }
          .nlp-page-root .lg\\:text-4xl { font-size: 48px !important; }
          .nlp-page-root .lg\\:text-5xl { font-size: 60px !important; }
          .nlp-page-root .lg\\:text-6xl { font-size: 72px !important; }
        }

        /* Ensure default element text scales beautifully */
        .nlp-page-root h1, .nlp-page-root h2, .nlp-page-root h3, .nlp-page-root h4 {
          line-height: 1.25 !important;
        }
        .nlp-page-root p, .nlp-page-root li, .nlp-page-root span, .nlp-page-root button, .nlp-page-root a {
          line-height: 1.6 !important;
        }

        /* Custom non-overlapping, reduced size for the hero characteristics */
        .nlp-page-root .nlp-hero-characteristic {
          font-size: 11px !important;
          line-height: 1.3 !important;
        }
        @media (min-width: 768px) {
          .nlp-page-root .nlp-hero-characteristic {
            font-size: 11.5px !important;
          }
        }

        /* Larger font size for circular element labels so they fit middle of larger circles */
        .nlp-page-root .nlp-circle-label {
          font-size: 11px !important;
          line-height: 1.15 !important;
        }
        @media (min-width: 768px) {
          .nlp-page-root .nlp-circle-label {
            font-size: 13px !important;
          }
        }
        @media (min-width: 1024px) {
          .nlp-page-root .nlp-circle-label {
            font-size: 14.5px !important;
          }
        }
      ` }} />

      {/* 2. HERO SECTION WITH DETAILS (Now placed below the introductory Asset section) */}
      <section 
        className="relative py-16 md:py-20 px-6 overflow-hidden watercolor-bg text-ocean border-t border-b border-slate-200"
        style={{ background: 'linear-gradient(90deg, #EAF3F1, #F7FBFA, #FFFFFF)' }}
      >
        
        {/* Ambient background decorative elements matching brand language */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          {/* White glow particles */}
          <div className="absolute top-12 right-12 w-2 h-2 rounded-full bg-white opacity-60 animate-ping duration-3000" />
          <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-white opacity-55 animate-pulse duration-2000" />
          <div className="absolute top-[45%] right-1/3 w-2 h-2 rounded-full bg-white opacity-45 shadow-[0_0_10px_white]" />
          
          {/* Sage leaves */}
          <svg className="absolute top-12 left-[8%] w-8 h-10 text-[#7F9C87]/25 fill-[#7F9C87]/10" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.75" fill="none">
            <path d="M2 22C2 22 8 20 12 14C16 8 22 2 22 2C22 2 16 8 10 12C4 16 2 22 2 22Z" />
            <path d="M12 14C10 12 8 11 6 11" />
            <path d="M14 12C13 10 13 8 13 6" />
          </svg>
          <svg className="absolute bottom-[15%] left-[4%] w-10 h-12 text-[#7F9C87]/20 fill-[#7F9C87]/5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.75" fill="none">
            <path d="M2 22C2 22 8 20 12 14C16 8 22 2 22 2C22 2 16 8 10 12C4 16 2 22 2 22Z" />
          </svg>

          {/* Watercolor lotus */}
          <svg className="absolute top-1/3 left-[45%] w-16 h-16 text-[#2F6D73]/12 fill-[#2F6D73]/5 animate-pulse duration-5000" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.5">
            <path d="M12 21C12 21 15.5 17 15.5 14C15.5 11.5 13.5 10.5 12 12C10.5 10.5 8.5 11.5 8.5 14C8.5 17 12 21 12 21Z" />
            <path d="M12 21C12 21 19 19 19 15C19 12 16 11 12 12C8 11 5 12 5 15C5 19 12 21 12 21Z" />
            <path d="M12 12C14.5 9 17 9 17 6C17 4 14.5 5 12 7C9.5 5 7 4 7 6C7 9 9.5 9 12 12Z" />
          </svg>

          {/* Teal botanical illustration */}
          <svg className="absolute top-1/4 right-[45%] w-12 h-16 text-[#2F6D73]/15 fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.75">
            <path d="M12 22V10M12 10C12 10 14 8 16 8M12 14C12 14 9 12 7 12M12 18C12 18 15 17 17 17M12 12C12 12 15 11 17 11M12 16C12 16 8 15 6 15" strokeLinecap="round" />
          </svg>

          {/* Soft blue stars */}
          <svg className="absolute top-10 right-24 w-4 h-4 text-[#4F7786]/40 fill-[#4F7786]/20 animate-pulse duration-2000" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <svg className="absolute bottom-24 right-[42%] w-3.5 h-3.5 text-[#4F7786]/30 fill-[#4F7786]/10 animate-pulse duration-3000" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>

        {/* Integrated Flowing Meditating Background Image - Beautifully visible, non-hazy */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[48%] opacity-[0.55] pointer-events-none select-none z-0">
          <div className="w-full h-full relative">
            <SmartImage
              id="nlp.flow_meditation"
              defaultSrc="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200"
              alt="NLP Consciousness Flow"
              className="w-full h-full object-cover"
              style={{
                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
              }}
              referrerPolicy="no-referrer"
            />
            {/* Ambient subtle white glow over the head of the meditating figure */}
            <div className="absolute top-[28%] right-[40%] w-32 h-32 rounded-full bg-white/20 blur-2xl animate-pulse duration-3000" />
          </div>
        </div>

        {/* Main Hero Grid Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="space-y-4">
              <span className="text-xs md:text-sm font-semibold uppercase block text-[#0A252C]" style={{ letterSpacing: '4px' }}>
                Subconscious Reprogramming
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] text-ocean-dark">
                NLP Practical Certification Programme
              </h1>
            </div>

            {/* Subtitle formatted exactly as requested */}
            <p className="font-serif italic text-xl md:text-2xl text-ocean-dark font-medium tracking-wide leading-normal">
              "Think better, communicate better, transform your life. Become a certified NLP practitioner and unlock your full potential."
            </p>

            {/* Exact Paragraph text requested by user */}
            <p className="text-base md:text-lg text-black leading-relaxed max-w-xl font-normal">
              Reprogramme your mind, transform your beliefs, and create extraordinary results.
            </p>

            {/* Features Row with Slate Blue and Muted Sage Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#4F7786]/10 border border-[#4F7786]/20 flex items-center justify-center text-[#4F7786] flex-shrink-0">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <span className="nlp-hero-characteristic text-[#0A252C] text-sm md:text-base font-medium leading-snug">
                  International Curriculum
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#7F9C87]/10 border border-[#7F9C87]/20 flex items-center justify-center text-[#7F9C87] flex-shrink-0">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <span className="nlp-hero-characteristic text-[#0A252C] text-sm md:text-base font-medium leading-snug">
                  Advanced Learning
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#4F7786]/10 border border-[#4F7786]/20 flex items-center justify-center text-[#4F7786] flex-shrink-0">
                  <RefreshCw className="w-3.5 h-3.5" />
                </div>
                <span className="nlp-hero-characteristic text-[#0A252C] text-sm md:text-base font-medium leading-snug">
                  Practical Transformation
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#7F9C87]/10 border border-[#7F9C87]/20 flex items-center justify-center text-[#7F9C87] flex-shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span className="nlp-hero-characteristic text-[#0A252C] text-sm md:text-base font-medium leading-snug">
                  Professional Certification
                </span>
              </div>
            </div>

            {/* Buttons Row with requested themes */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onBook('Neuro Linguistic Programming (NLP)')}
                className="px-8 py-4 bg-[#0A252C] hover:bg-[#15424A] text-[#FFFFFF] text-xs font-bold tracking-widest rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 uppercase cursor-pointer"
                id="nlp-enroll-btn"
              >
                Enroll Now
              </button>
              
              <button
                onClick={handleDownloadBrochure}
                disabled={downloading}
                className="px-8 py-4 bg-white border border-[#4F7786] text-[#0A252C] hover:bg-slate-50 text-xs font-bold tracking-widest rounded-full transition-all duration-300 uppercase flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {downloading ? 'Preparing Syllabus...' : 'Download Brochure'}
                <Download className={`w-4 h-4 text-[#4F7786] ${downloading ? 'animate-bounce' : ''}`} />
              </button>
            </div>
          </div>

          {/* Right Column Layout: NLP Feature Boxes matching updated UI */}
          <div className="lg:col-span-5 flex flex-col gap-2 z-10 w-full max-w-md lg:ml-auto">
            {[
              { title: "Transform Limiting Beliefs", icon: ShieldCheck },
              { title: "Master Communication & Influence", icon: MessageSquare },
              { title: "Emotional Mastery", icon: Heart },
              { title: "Better Relationships", icon: Users },
              { title: "Reprogrammed Success Habits", icon: RefreshCw }
            ].map((badge, idx) => (
              <div 
                key={idx} 
                className="bg-white border-2 border-dotted border-[#2F6D73] shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] rounded-xl p-2.5 md:p-3 flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-[#EAF3F1] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <badge.icon className="w-4 h-4 text-[#2F6D73]" />
                </div>
                <div>
                  <h4 className="text-[11px] md:text-xs font-bold text-[#0A252C] leading-tight tracking-wider uppercase transition-colors duration-300">{badge.title}</h4>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Beautiful double-layered curvy bottom separator */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <svg 
            viewBox="0 0 1440 120" 
            preserveAspectRatio="none" 
            className="w-full h-[40px] md:h-[70px] fill-current"
          >
            <path 
              d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z" 
              className="text-gold/10"
            />
            <path 
              d="M0,64L120,58.7C240,53,480,43,720,53.3C960,64,1200,96,1320,112L1440,128L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z" 
              className="text-ivory"
            />
          </svg>
        </div>
      </section>

      {/* 3. WHAT IS NLP SECTION */}
      <section className="py-16 md:py-20 bg-ivory border-t border-[#dfdbc9]/30 relative overflow-hidden" id="what-is-nlp">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Glowing Brain in Hand with Sacred Flower of Life Lace Border */}
            <div className="lg:col-span-3 flex justify-center relative">
              <div className="relative w-60 h-60 md:w-64 md:h-64 rounded-full p-2.5 bg-gradient-to-b from-[#02111a] to-[#041a24] border border-gold/35 shadow-2xl flex items-center justify-center group overflow-visible">
                
                {/* Intricate Flower of Life / Sacred Geometry Lace Mandala Frame */}
                <svg className="absolute inset-[-18px] w-[calc(100%+36px)] h-[calc(100%+36px)] text-gold/45 pointer-events-none animate-spin duration-[120s]" viewBox="0 0 120 120">
                  {/* Outer rings */}
                  <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 2.5" fill="none" />
                  <circle cx="60" cy="60" r="51" stroke="currentColor" strokeWidth="0.25" fill="none" />
                  <circle cx="60" cy="60" r="47" stroke="currentColor" strokeWidth="0.75" fill="none" />
                  
                  {/* 12 Overlapping Flower of Life Circles */}
                  <g stroke="currentColor" strokeWidth="0.35" fill="none" className="opacity-40">
                    <circle cx="60" cy="60" r="24" />
                    <circle cx="80" cy="60" r="24" />
                    <circle cx="77.32" cy="70" r="24" />
                    <circle cx="70" cy="77.32" r="24" />
                    <circle cx="60" cy="80" r="24" />
                    <circle cx="50" cy="77.32" r="24" />
                    <circle cx="42.68" cy="70" r="24" />
                    <circle cx="40" cy="60" r="24" />
                    <circle cx="42.68" cy="50" r="24" />
                    <circle cx="50" cy="42.68" r="24" />
                    <circle cx="60" cy="40" r="24" />
                    <circle cx="70" cy="42.68" r="24" />
                    <circle cx="77.32" cy="50" r="24" />
                  </g>
                </svg>

                {/* Circular image frame with neural synapses background */}
                <div className="w-full h-full rounded-full overflow-hidden relative z-10 bg-[#02111a]">
                  <SmartImage
                    id="nlp.synaptic_firing"
                    defaultSrc="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=400"
                    alt="Synaptic Firing Waves"
                    className="w-full h-full object-cover opacity-35 mix-blend-screen scale-110 group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glowing ambient center overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean/50 via-transparent to-transparent" />
                  
                  {/* Detailed glowing neural brain + hand overlay illustration */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                    <defs>
                      <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Stylized Hand supporting the brain from below */}
                    <path 
                      d="M22 78 C30 73, 44 71, 54 71 C61 71, 67 74, 74 81 C78 85, 80 91, 76 96 M36 73 C42 63, 51 61, 58 65 C62 67, 65 71, 67 75 M42 71 C47 59, 57 56, 64 61 C67 64, 69 68, 70 73" 
                      stroke="#bf9f62" 
                      strokeWidth="1.25" 
                      strokeLinecap="round" 
                      fill="none" 
                      className="opacity-90"
                    />

                    {/* Left Hemisphere (White Sparkles) */}
                    <g stroke="#ffffff" strokeWidth="0.85" fill="none" filter="url(#glow-filter)" className="opacity-95 animate-pulse duration-3000">
                      <path d="M48 24 C40 24, 33 28, 31 36 C29 42, 34 47, 38 45 C40 43, 42 39, 48 39" />
                      <path d="M48 39 C42 39, 37 43, 35 48 C33 52, 38 56, 42 54 C45 52, 46 48, 48 48" />
                      <path d="M48 31 C41 31, 37 35, 39 41" />
                      <path d="M42 27 C35 27, 31 31, 33 37" />
                    </g>

                    {/* Right Hemisphere (Gold Sparkles) */}
                    <g stroke="#bf9f62" strokeWidth="0.85" fill="none" filter="url(#glow-filter)" className="opacity-95 animate-pulse duration-4000">
                      <path d="M52 24 C60 24, 67 28, 69 36 C71 42, 66 47, 62 45 C60 43, 58 39, 52 39" />
                      <path d="M52 39 C58 39, 63 43, 65 48 C67 52, 62 56, 58 54 C55 52, 54 48, 52 48" />
                      <path d="M52 31 C59 31, 63 35, 61 41" />
                      <path d="M58 27 C65 27, 69 31, 67 37" />
                    </g>

                    {/* Central Synapse Connectors */}
                    <path d="M48 24 L52 24 M48 31 L52 31 M48 39 L52 39 M48 48 L52 48" stroke="#bf9f62" strokeWidth="0.65" strokeDasharray="1" />

                    {/* Glowing Synaptic Nodes */}
                    <g fill="#ffffff">
                      <circle cx="48" cy="24" r="1.5" className="animate-ping" style={{ animationDuration: '2s' }} />
                      <circle cx="31" cy="36" r="1.25" />
                      <circle cx="38" cy="45" r="1.5" />
                      <circle cx="35" cy="48" r="1" />
                    </g>
                    <g fill="#bf9f62">
                      <circle cx="52" cy="24" r="1.5" className="animate-ping" style={{ animationDuration: '2.5s' }} />
                      <circle cx="69" cy="36" r="1.25" />
                      <circle cx="62" cy="45" r="1.5" />
                      <circle cx="65" cy="48" r="1" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Middle Column: Detailed NLP Methodology & 5 Icons */}
            <div className="lg:col-span-6 flex flex-col justify-center text-center space-y-6 px-2 lg:px-6">
              <div className="space-y-3">
                <h2 className="font-serif text-3xl md:text-4xl text-ocean font-semibold tracking-tight">
                  What is NLP?
                </h2>
                
                {/* Elegant floral divider ornament */}
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[1px] w-12 bg-gold-light/60" />
                  <svg className="w-5 h-5 text-gold-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21C12 21 15.5 17 15.5 14C15.5 11.5 13.5 10.5 12 12C10.5 10.5 8.5 11.5 8.5 14C8.5 17 12 21 12 21Z" />
                  </svg>
                  <div className="h-[1px] w-12 bg-gold-light/60" />
                </div>
              </div>

              {/* Elegant explanatory text matching the reference image */}
              <div className="text-base md:text-base text-[#0A252C] font-normal leading-relaxed max-w-2xl mx-auto space-y-4 text-justify">
                <p>
                  Neuro-Linguistic Programming is one of the world's most powerful approaches for understanding how the mind works, changing limiting beliefs, mastering communication, and creating lasting personal and professional transformation.
                </p>
                <p>
                  The NLP practitioner certification program is a comprehensive, internationally designed training that helps you master advanced NLP techniques, emotional intelligence, communication excellence, mindset transformation, coaching skills, and peak performance strategies.
                </p>
                <p>
                  Whether you want to transform yourself, grow your career, or help others achieve lasting change, this certification provides practical tools that create measurable results.
                </p>
              </div>

              {/* Highlighted background block */}
              <div className="max-w-xl mx-auto px-6 py-2.5 bg-gold/15 border border-gold-light/40 rounded-xl text-xs md:text-sm font-bold text-ocean-dark uppercase tracking-wider shadow-sm">
                No prior NLP or coaching experience required.
              </div>
            </div>

            {/* Right Column: Quote Card matching Hero badges beautifully with lotus at the bottom */}
            <div className="lg:col-span-3 flex items-center justify-center">
              <div className="bg-white/60 backdrop-blur-md border border-gold-light/35 rounded-[2.2rem] p-10 text-center shadow-md w-full relative overflow-hidden flex flex-col justify-between min-h-[380px] lg:min-h-[420px] group hover:shadow-lg hover:border-gold-light/50 transition-all duration-300">
                
                <div className="my-auto space-y-5 relative z-10">
                  <div className="font-serif text-xl md:text-2xl text-ocean-dark font-medium leading-relaxed space-y-3">
                    <p className="italic text-[#0A252C]">"Your future isn't created by chance.</p>
                    <p className="italic text-[#0A252C]">It is created by the patterns your mind repeats every day.</p>
                    <p className="text-gold font-semibold italic">NLP helps you consciously rewrite those patterns."</p>
                  </div>
                </div>

                {/* Elegant gold lotus flower at bottom of card */}
                <div className="relative z-10 flex justify-center mt-4">
                  <svg className="w-8 h-8 text-gold animate-pulse duration-3000" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M12 21C12 21 15.5 17 15.5 14C15.5 11.5 13.5 10.5 12 12C10.5 10.5 8.5 11.5 8.5 14C8.5 17 12 21 12 21Z" />
                    <path d="M12 21C12 21 19 19 19 15C19 12 16 11 12 12C8 11 5 12 5 15C5 19 12 21 12 21Z" />
                    <path d="M12 12C14.5 9 17 9 17 6C17 4 14.5 5 12 7C9.5 5 7 4 7 6C7 9 9.5 9 12 12Z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* Quote Block: Your mind can become your greatest asset */}
          <div className="max-w-5xl mx-auto text-center relative z-10 px-6 pt-10 pb-6">
            <div className="space-y-8">
              {/* "Your mind can become your greatest asset." - Extra bold, 2 sizes bigger, with vibrant yellow/gold highlight */}
              <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-ocean-dark tracking-tight leading-[1.05] uppercase max-w-5xl mx-auto drop-shadow-md">
                YOUR MIND CAN BECOME <br />
                <span className="text-amber-500 drop-shadow-[0_2px_12px_rgba(245,158,11,0.45)] font-black italic font-serif lowercase">your greatest</span>{' '}
                <span className="text-amber-600 font-black">ASSET.</span>
              </h2>

              {/* Sub-text paragraph - every word bold, 2 sizes larger */}
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-ocean-dark max-w-4xl mx-auto leading-relaxed font-serif italic py-4">
                Every transformation begins with a single decision. If you're ready to master your thoughts, transform your beliefs, communicate with confidence, and create extraordinary results, <span className="text-amber-600 font-extrabold underline decoration-amber-400 decoration-2 underline-offset-4">this certification is your next step.</span>
              </p>
            </div>
          </div>

          {/* Elongated, beautifully stretched horizontal pathway flow spanning the full section width */}
          <div className="mt-6 pt-8 border-t border-gold-light/15 relative">
            <div className="relative">
              {/* Elegant horizontal backdrop line connecting all circles */}
              <div className="absolute left-10 right-10 top-[48px] md:top-[56px] lg:top-[64px] h-[1px] bg-gradient-to-r from-transparent via-gold-light/40 to-transparent z-0 hidden sm:block animate-pulse duration-3000" />

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-12 md:gap-16 lg:gap-24 w-full max-w-6xl mx-auto relative z-10">
                {[
                  {
                    id: 'identity',
                    label: 'Identity',
                    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=300'
                  },
                  {
                    id: 'beliefs',
                    label: 'Beliefs',
                    image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=300'
                  },
                  {
                    id: 'decisions',
                    label: 'Decisions',
                    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=300'
                  },
                  {
                    id: 'actions',
                    label: 'Actions',
                    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=300'
                  },
                  {
                    id: 'habits',
                    label: 'Habits',
                    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=300'
                  },
                  {
                    id: 'results',
                    label: 'Results',
                    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=300'
                  }
                ].map((item, idx, arr) => (
                  <div key={idx} className="flex flex-col items-center text-center group relative">
                    
                    {/* Beautifully hand-painted watercolor circular container */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-38 md:h-38 lg:w-44 lg:h-44 flex items-center justify-center mb-3">
                      
                      {/* 1. Custom Hand painted watercolor ring */}
                      <NLPCircleWatercolorRing id={item.id} index={idx} />

                      {/* 2. Core perfect solid white circle frame with shadows to hold the high quality image */}
                      <div className="absolute w-[82px] h-[82px] sm:w-[94px] sm:h-[94px] md:w-[112px] md:h-[112px] lg:w-[128px] lg:h-[128px] rounded-full bg-cream border border-gold-light/20 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-[1.04] transition-all duration-500 z-10 overflow-hidden">
                        
                        {/* The Ethereal AI-Generated Image */}
                        <SmartImage 
                          id={`nlp.${item.id}`}
                          defaultSrc={item.image} 
                          alt={item.label} 
                          className="absolute inset-0 w-full h-full object-cover scale-[1.38] origin-center transition-transform duration-700 group-hover:scale-[1.5]"
                          referrerPolicy="no-referrer"
                        />

                        {/* Ethereal darker overlay for text legibility */}
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300 pointer-events-none" />

                        {/* Text inside circle - pure white and positioned in the absolute MIDDLE */}
                        <div className="absolute inset-0 flex items-center justify-center p-2 z-20 text-center pointer-events-none">
                          <span className="nlp-circle-label font-extrabold uppercase tracking-wider text-white text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] select-none">
                            {item.label}
                          </span>
                        </div>

                        {/* Soft Inner gold inset ring */}
                        <div className="absolute inset-1.5 border border-gold-light/25 rounded-full pointer-events-none z-10" />
                      </div>
                    </div>
                    
                    {/* Long elongated arrow pointing to next circle, vertically centered perfectly */}
                    {idx < arr.length - 1 && (
                      <div className="absolute top-14 sm:top-16 md:top-19 lg:top-22 -translate-y-1/2 -right-4 sm:-right-6 md:-right-10 lg:-right-14 text-gold/85 pointer-events-none hidden sm:block z-20">
                        <ArrowRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3.5. WHY CHOOSE THIS CERTIFICATION */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-[#faf8f5] border-t border-[#dfdbc9]/30">
        <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-[#EAF3F1]/40 blur-3xl pointer-events-none animate-pulse duration-5000" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-[#FAF9F6]/50 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl text-ocean-dark font-normal tracking-tight mb-4">
            Why Choose This Certification?
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-[1px] w-14 bg-gold/30" />
            <span className="text-gold text-xs">✦</span>
            <div className="h-[1px] w-14 bg-gold/30" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 max-w-6xl mx-auto">
            {[
              { 
                title: "International NLP Curriculum", 
                desc: "A globally aligned program crafted following international standards of neuro-linguistic and subconscious reprogramming.", 
                icon: Globe 
              },
              { 
                title: "Advanced Practitioner Techniques", 
                desc: "Go beyond basic concepts to master subconscious pattern disruption, reframing, and timeline integration.", 
                icon: Brain 
              },
              { 
                title: "Hands-On Practical Exercises", 
                desc: "Gain deep practical experience through interactive case studies, live demonstrations, and somatic practice sessions.", 
                icon: Sparkles 
              },
              { 
                title: "Mindset Transformation Framework", 
                desc: "Learn actionable models to restructure beliefs, silence self-criticism, and align behavior with core identity.", 
                icon: Compass 
              },
              { 
                title: "Emotional Intelligence Training", 
                desc: "Master emotional regulation and state management strategies to guide yourself and others into peak performance.", 
                icon: Heart 
              },
              { 
                title: "Downloadable Practical Workbooks", 
                desc: "Receive comprehensive digital workbooks, coaching templates, and client profiling scripts for immediate integration.", 
                icon: Download 
              },
              { 
                title: "Lifetime Access to Materials", 
                desc: "Enjoy unrestricted, permanent access to all training modules, recordings, guides, and future program updates.", 
                icon: Clock 
              },
              { 
                title: "Accredited Certificate of Completion", 
                desc: "Earn a professional, verifiable certificate to confidently integrate NLP into your personal and professional practice.", 
                icon: Award 
              }
            ].map((prop, idx) => (
              <div 
                key={idx}
                className="bg-white border-2 border-[#2F6D73]/15 hover:border-[#2F6D73] hover:shadow-md p-6 rounded-[2.2rem] flex flex-col items-center justify-center text-center group transition-all duration-300 hover:-translate-y-1 min-h-[220px]"
              >
                <div className="w-11 h-11 rounded-full bg-[#EAF3F1] border border-[#2F6D73]/20 flex items-center justify-center text-[#2F6D73] mb-3 group-hover:scale-110 transition-transform duration-300">
                  <prop.icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="font-serif text-sm font-bold text-ocean-dark leading-tight mb-2 min-h-[40px] flex items-center justify-center">
                  {prop.title}
                </h4>
                <p className="text-xs text-[#0A252C] font-normal leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CERTIFICATION PROGRAM DETAILS */}
      <section className="py-16 md:py-20 bg-ivory border-t border-[#dfdbc9]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 space-y-2">
            <h2 className="font-serif text-3xl md:text-4xl text-ocean font-medium tracking-tight">
              Program Curriculum
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-[1px] bg-gold/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="w-10 h-[1px] bg-gold/50" />
            </div>
          </div>

          {/* Journey Chain Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {nlpModules.map((mod, idx) => {
                const IconComponent = mod.icon;
                return (
                  <div key={idx} className="relative group flex flex-col h-full">
                    {/* The Card - styled to match Relationship Mastery */}
                    <div className="bg-white hover:bg-[#FAF9F5] border border-[#dfdbc9]/60 hover:border-[#2F6D73]/80 rounded-[2.2rem] p-6 lg:p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(27,62,75,0.02)] hover:shadow-[0_15px_35px_rgba(79,119,134,0.12)] hover:-translate-y-2 transition-all duration-500 relative z-10 overflow-hidden text-left h-full">
                      
                      {/* Soft botanical branch background sketch in top corner */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-15 pointer-events-none select-none">
                        <svg className="w-full h-full text-[#7F9C87]" viewBox="0 0 100 100" fill="none">
                          <path d="M 100,0 Q 60,30 50,70 Q 30,85 10,95" stroke="currentColor" strokeWidth="0.75" />
                          <path d="M 60,30 C 55,40 50,45 40,42" stroke="currentColor" strokeWidth="0.5" />
                          <circle cx="40" cy="42" r="1.5" fill="currentColor" />
                          <circle cx="50" cy="70" r="1.5" fill="currentColor" />
                        </svg>
                      </div>

                      <div className="space-y-5 flex-grow flex flex-col">
                        {/* Header with circular icon badge & number */}
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-3xl font-extrabold text-[#c0942c] tracking-tight">
                            {mod.num}
                          </span>
                          <div className="w-10 h-10 rounded-full bg-[#EAF3F1] border border-[#2F6D73]/10 flex items-center justify-center text-[#2F6D73] shadow-sm">
                            <IconComponent className="w-4 h-4 stroke-[2]" />
                          </div>
                        </div>

                        {/* Module Label */}
                        <div className="space-y-1">
                          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0A252C] block">
                            {mod.title}
                          </span>
                          <h3 className="font-serif text-lg font-bold text-[#0A252C] leading-snug">
                            {mod.subtitle}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-[#0A252C] leading-relaxed font-normal flex-grow">
                          {mod.desc}
                        </p>
                      </div>

                      {/* Station indicator at bottom */}
                      <div className="pt-4 border-t border-[#4F7786]/10 flex items-center justify-between mt-6">
                        <span className="text-[10px] font-bold text-[#5A8795] uppercase tracking-[0.12em]">
                          {idx === 0 ? "Boarding Station" : idx === 7 ? "Final Station ✧" : "Next Station →"}
                        </span>
                        <span className="text-xs text-gold">✦</span>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. YOUR TRANSFORMATION */}
      <section 
        className="py-16 md:py-20 px-6 relative overflow-hidden border-t border-[#dfdbc9]/30"
        style={{ background: 'linear-gradient(180deg, #EAF3F1, #F7FBFA, #FFFFFF)' }}
        id="transformation-section"
      >
        {/* Ambient background decorative elements matching brand language */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          {/* White glow particles */}
          <div className="absolute top-12 right-12 w-2 h-2 rounded-full bg-white opacity-40 animate-ping duration-3000" />
          <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-white opacity-50 animate-pulse duration-2000" />
          
          {/* Sage leaves */}
          <svg className="absolute top-12 left-[4%] w-8 h-10 text-[#7F9C87]/15 fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.75">
            <path d="M2 22C2 22 8 20 12 14C16 8 22 2 22 2C22 2 16 8 10 12C4 16 2 22 2 22Z" />
            <path d="M12 14C10 12 8 11 6 11" />
            <path d="M14 12C13 10 13 8 13 6" />
          </svg>
          <svg className="absolute bottom-[10%] right-[4%] w-10 h-12 text-[#7F9C87]/12 fill-none animate-pulse duration-4000" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.75">
            <path d="M2 22C2 22 8 20 12 14C16 8 22 2 22 2C22 2 16 8 10 12C4 16 2 22 2 22Z" />
          </svg>

          {/* Watercolor lotus */}
          <svg className="absolute top-1/2 left-[8%] w-12 h-12 text-[#2F6D73]/10 fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.5">
            <path d="M12 21C12 21 15.5 17 15.5 14C15.5 11.5 13.5 10.5 12 12C10.5 10.5 8.5 11.5 8.5 14C8.5 17 12 21 12 21Z" />
            <path d="M12 21C12 21 19 19 19 15C19 12 16 11 12 12C8 11 5 12 5 15C5 19 12 21 12 21Z" />
          </svg>

          {/* Soft blue stars */}
          <svg className="absolute top-1/4 right-1/4 w-4 h-4 text-[#4F7786]/25 fill-none animate-pulse duration-3000" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-5xl text-ocean-dark font-medium tracking-tight">
              Your Transformation
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-[#2F6D73]/30" />
              <span className="text-xs md:text-sm font-semibold uppercase text-[#0A252C]" style={{ letterSpacing: '4px' }}>
                A Journey of Transcendence
              </span>
              <div className="w-12 h-[1px] bg-[#2F6D73]/30" />
            </div>
            <p className="text-base md:text-lg text-[#0A252C] font-normal italic max-w-xl mx-auto pt-2">
              "By the end of this certification, you will be able to:"
            </p>
          </div>

          {/* Three Column Grid of Transformation Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Mind & Beliefs",
                icon: Brain,
                colorTheme: {
                  primary: "#4F7786", // Slate Blue
                  badgeBg: "bg-[#4F7786]/10",
                  border: "border-[#4F7786]/15 hover:border-[#4F7786]/45",
                  glow: "shadow-[0_8px_30px_rgba(79,119,134,0.03)] hover:shadow-[0_15px_40px_rgba(79,119,134,0.12)]",
                  text: "text-[#4F7786]",
                  gradient: "from-white to-[#FAF9F6] hover:to-[#4F7786]/10",
                },
                bgImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=600",
                items: [
                  "Stop overthinking every conversation and decision.",
                  "Silence your negative inner voice and self-criticism.",
                  "Break free from limiting beliefs like \"I'm not good enough.\"",
                  "Stop seeking constant validation from others.",
                  "Replace anxiety-driven thinking with solution-focused thinking.",
                  "Stop overanalyzing what others think about you."
                ]
              },
              {
                title: "Emotional Liberation",
                icon: Heart,
                colorTheme: {
                  primary: "#7F9C87", // Sage Green
                  badgeBg: "bg-[#7F9C87]/10",
                  border: "border-[#7F9C87]/15 hover:border-[#7F9C87]/45",
                  glow: "shadow-[0_8px_30px_rgba(127,156,135,0.03)] hover:shadow-[0_15px_40px_rgba(127,156,135,0.12)]",
                  text: "text-[#7F9C87]",
                  gradient: "from-white to-[#FAF9F6] hover:to-[#7F9C87]/10",
                },
                bgImage: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&q=80&w=600",
                items: [
                  "Overcome fear of rejection and fear of failure.",
                  "Stop repeating the same self-sabotaging behaviors.",
                  "Eliminate procrastination caused by fear and perfectionism.",
                  "Release emotional triggers that control your reactions.",
                  "Learn to let go of painful memories without suppressing them.",
                  "Rewire habits that keep you stuck in the same cycle."
                ]
              },
              {
                title: "Relationships & Boundaries",
                icon: Compass,
                colorTheme: {
                  primary: "#2F6D73", // Deep Teal
                  badgeBg: "bg-[#EAF3F1]",
                  border: "border-[#2F6D73]/15 hover:border-[#2F6D73]/45",
                  glow: "shadow-[0_8px_30px_rgba(47,109,115,0.03)] hover:shadow-[0_15px_40px_rgba(47,109,115,0.12)]",
                  text: "text-[#2F6D73]",
                  gradient: "from-white to-[#FAF9F6] hover:to-[#EAF3F1]",
                },
                bgImage: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&q=80&w=600",
                items: [
                  "Stop people-pleasing and communicate your needs confidently.",
                  "Say \"No\" without guilt or fear of disappointing others.",
                  "Stop comparing yourself with others and build genuine self-worth.",
                  "Improve difficult conversations without conflict or avoidance.",
                  "Handle criticism without taking it personally.",
                  "Break unhealthy relationship patterns and attract healthier connections."
                ]
              }
            ].map((pillar, colIdx) => (
              <CirculatingPillar 
                key={colIdx}
                id={`nlp.pillar_${colIdx + 1}`}
                title={pillar.title}
                items={pillar.items}
                icon={pillar.icon}
                colorTheme={pillar.colorTheme}
                bgImage={pillar.bgImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5.5. PATHWAY AND MANIFESTO SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#FAF9F5] via-ivory to-[#FAF9F5] text-ocean relative overflow-hidden border-t border-[#dfdbc9]/30">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/10 blur-3xl animate-pulse duration-4000" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-teal-light/10 blur-3xl animate-pulse duration-3000" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          {/* Lighter, beautifully balanced, very bold text - scaled perfectly so it never wraps "LASTING" & "CHANGE." separately */}
          <div className="space-y-3 md:space-y-4 max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-ocean-dark uppercase">
              Think Differently.
            </h2>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-gold uppercase">
              Lead Confidently.
            </h2>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-ocean-dark uppercase">
              Create Lasting Change.
            </h2>
          </div>

          {/* Staircase Step Progression */}
          <div className="mt-4 pt-4 border-t border-gold-light/25 max-w-5xl mx-auto">
            {(() => {
              const transformationSteps = [
                { word: "awareness", icon: Sun },
                { word: "identity", icon: User },
                { word: "communication", icon: MessageSquare },
                { word: "transformation", icon: Sparkles },
                { word: "leadership", icon: Crown },
                { word: "peak performance", icon: Star }
              ];

              const [activeStep, setActiveStep] = React.useState(0);

              React.useEffect(() => {
                const interval = setInterval(() => {
                  setActiveStep(prev => (prev + 1) % 6);
                }, 4000);
                return () => clearInterval(interval);
              }, []);

              return (
                <div className="relative w-full overflow-visible">
                  {/* ==========================================
                      DESKTOP & TABLET SPREAD: COMPACT DIAGONAL STAIRCASE
                      ========================================== */}
                  <div className="hidden md:block relative w-full h-[320px] select-none overflow-visible">
                    {/* Ambient Glows & Shadows */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-gradient-to-tr from-gold/5 via-[#F5EFE6]/10 to-transparent blur-3xl pointer-events-none" />

                    {/* The Ascending Staircase Steps */}
                    {transformationSteps.map((step, idx) => {
                      const StepIcon = step.icon;
                      const isActive = idx === activeStep;

                      return (
                        <div
                          key={idx}
                          className="absolute group"
                          style={{
                            left: `${idx * 15.2}%`,
                            bottom: `${idx * 15.5}%`,
                            width: '22%',
                            zIndex: 30 - idx,
                          }}
                          onMouseEnter={() => setActiveStep(idx)}
                        >
                          {/* 3D Under-Slab Base / Extrusion */}
                          <div className="absolute inset-0 translate-y-[4px] rounded-xl bg-gradient-to-b from-[#E5DEC7] to-[#C9B99E] border-b border-[#AF9F82]/30 shadow-sm transition-all duration-300" />
                          
                          {/* Top Surface Marble Slab */}
                          <div 
                            className={`relative bg-gradient-to-b from-white via-[#FCFAF4] to-[#F5EFE6] border rounded-xl py-2 px-3 flex items-center justify-between transition-all duration-300 cursor-pointer ${
                              isActive 
                                ? 'border-[#D4AF37]/90 -translate-y-[2px] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_6px_14px_rgba(212,175,55,0.2)]' 
                                : 'border-[#D4AF37]/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_2px_4px_rgba(160,142,108,0.1)] group-hover:border-[#D4AF37]/80 group-hover:-translate-y-[1px]'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {/* Round badge for Step Number */}
                              <div className={`w-5 h-5 rounded-full bg-gradient-to-b from-[#FAF6EE] to-[#EAE2D1] border flex items-center justify-center text-[10px] font-bold text-[#9C8B68] transition-colors duration-300 ${
                                isActive ? 'border-[#D4AF37]/80 text-gold-dark' : 'border-[#D4AF37]/45'
                              }`}>
                                {idx + 1}
                              </div>
                              
                              {/* Stage Name */}
                              <span className={`font-serif text-[11px] lg:text-xs font-bold uppercase tracking-wider transition-colors duration-300 whitespace-nowrap ${
                                isActive ? 'text-gold' : 'text-[#2F6D73] group-hover:text-gold'
                              }`}>
                                {step.word}
                              </span>
                            </div>

                            {/* Line Icon */}
                            <motion.div
                              animate={isActive ? { y: [0, -2, 0] } : {}}
                              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                              className={`transition-colors duration-300 flex-shrink-0 ${isActive ? 'text-gold' : 'text-[#D4AF37]/80 group-hover:text-gold'}`}
                            >
                              <StepIcon className="w-3.5 h-3.5 stroke-[1.5]" />
                            </motion.div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* ==========================================
                      MOBILE SPREAD: VERTICAL ASCENDING SLABS
                      ========================================== */}
                  <div className="block md:hidden relative w-full max-w-sm mx-auto px-4 select-none">
                    {/* Vertical Glowing Path Line */}
                    <div className="absolute left-[36px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#D4AF37]/70 via-[#D4AF37]/35 to-[#D4AF37]/10 z-0" />
                    
                    {/* Glowing Lotus at the top */}
                    <div className="flex justify-center mb-8">
                      <motion.div
                        animate={{ scale: [1, 1.04, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-[#D4AF37]"
                      >
                        <svg className="w-8 h-8 text-[#D4AF37] fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.25">
                          <path d="M12 21C12 21 15.5 17 15.5 14C15.5 11.5 13.5 10.5 12 12C10.5 10.5 8.5 11.5 8.5 14C8.5 17 12 21 12 21Z" />
                          <path d="M12 21C12 21 19 19 19 15C19 12 16 11 12 12C8 11 5 12 5 15C5 19 12 21 12 21Z" />
                          <path d="M12 12C12 12 15 8 12 4C9 8 12 12 12 12Z" />
                        </svg>
                      </motion.div>
                    </div>

                    <div className="flex flex-col-reverse gap-5">
                      {transformationSteps.map((step, idx) => {
                        const StepIcon = step.icon;
                        const isActive = idx === activeStep;

                        return (
                          <div
                            key={idx}
                            className="relative group w-full"
                            style={{
                              marginLeft: `${idx * 10}px`,
                              width: `calc(100% - ${idx * 10}px)`,
                              zIndex: idx + 1
                            }}
                            onClick={() => setActiveStep(idx)}
                          >
                            {/* 3D Under-Slab Base */}
                            <div className="absolute inset-0 translate-y-[4px] rounded-xl bg-gradient-to-b from-[#E5DEC7] to-[#C9B99E] border-b border-[#AF9F82]/30 shadow" />

                            {/* Top Surface Slab */}
                            <div 
                              className={`relative bg-gradient-to-b from-white via-[#FCFAF4] to-[#F5EFE6] border rounded-xl p-4 flex items-center justify-between transition-all duration-300 ${
                                isActive 
                                  ? 'border-[#D4AF37] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_5px_10px_rgba(212,175,55,0.18)]' 
                                  : 'border-[#D4AF37]/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_4px_rgba(160,142,108,0.08)]'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                {/* Premium badge */}
                                <div className={`w-7 h-7 rounded-full bg-gradient-to-b from-[#FAF6EE] to-[#EAE2D1] border flex items-center justify-center text-xs font-bold text-[#9C8B68] ${
                                  isActive ? 'border-[#D4AF37]' : 'border-[#D4AF37]/45'
                                }`}>
                                  {idx + 1}
                                </div>
                                <span className={`font-serif text-xs font-semibold uppercase tracking-[0.14em] ${
                                  isActive ? 'text-gold' : 'text-[#2F6D73]'
                                }`}>
                                  {step.word}
                                </span>
                              </div>

                              <div className={isActive ? 'text-gold' : 'text-[#D4AF37]/80'}>
                                <StepIcon className="w-4 h-4 stroke-[1.5]" />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Imagine Your Life Comparison Grid (Brain Hemispheres visual) */}
          <div className="mt-14 border-t border-gold-light/15 pt-10 max-w-7xl mx-auto">
            <h3 className="font-serif text-3xl md:text-4xl text-ocean-dark font-medium tracking-tight mb-10">
              Imagine Your Life After This Certification
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto px-4 sm:px-6">
              
              {/* Left hemisphere: Before State (Dark Red Theme) */}
              <div className="relative group p-8 sm:p-12 md:p-14 lg:p-16 bg-[#510e0e] border-4 border-[#991b1b] rounded-3xl transition-all duration-500 flex flex-col justify-between text-left min-h-[560px] shadow-xl hover:-translate-y-1">
                
                <div className="relative z-10 w-full px-2 sm:px-4">
                  <div className="flex items-center gap-3.5 mb-6 border-b border-red-800/40 pb-4">
                    <span className="w-10 h-10 rounded-full bg-red-950/50 border border-red-700/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {/* Brain silhouette / stress icon */}
                      <svg className="w-5 h-5 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 8v4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 16h.01" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-serif text-2xl font-bold text-white tracking-wide">BEFORE</h4>
                      <p className="text-[10px] uppercase tracking-widest text-red-200/80 font-semibold">Survival & Over-Analysis</p>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-4">
                    {[
                      "Overthinking everything",
                      "Fear of rejection",
                      "Self-doubt",
                      "Anxiety",
                      "Emotional overwhelm",
                      "Procrastination",
                      "Seeking validation",
                      "Difficulty saying no",
                      "Poor confidence",
                      "Fear of failure"
                    ].map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="15" y1="9" x2="9" y2="15" />
                          <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                        <span className="text-base md:text-lg text-white/95 font-semibold leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right hemisphere: After State (Dark Blue Theme) */}
              <div className="relative group p-8 sm:p-12 md:p-14 lg:p-16 bg-[#0c1e2f] border-4 border-[#1e40af] rounded-3xl transition-all duration-500 flex flex-col justify-between text-left min-h-[560px] shadow-xl hover:-translate-y-1">
                
                <div className="relative z-10 w-full px-2 sm:px-4">
                  <div className="flex items-center gap-3.5 mb-6 border-b border-blue-800/40 pb-4">
                    <span className="w-10 h-10 rounded-full bg-blue-950/50 border border-blue-700/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {/* Active brain / spark icon */}
                      <svg className="w-5 h-5 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-serif text-2xl font-bold text-white tracking-wide">AFTER</h4>
                      <p className="text-[10px] uppercase tracking-widest text-blue-200/80 font-semibold">Integrated & Empowered</p>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-4">
                    {[
                      "Calm and emotionally balanced",
                      "Clear communication",
                      "High confidence",
                      "Strong boundaries",
                      "Solution-focused thinking",
                      "Better relationships",
                      "Leadership presence",
                      "Healthy self-worth",
                      "Purpose-driven decisions",
                      "Peak performance mindset"
                    ].map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-base md:text-lg text-white/95 font-semibold leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5.6. WHO IS THIS FOR SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#FAF9F5] to-ivory text-ocean relative overflow-hidden border-t border-[#dfdbc9]/30">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/3 left-10 w-72 h-72 rounded-full bg-gold/15 blur-3xl" />
          <div className="absolute bottom-1/3 right-10 w-72 h-72 rounded-full bg-teal-light/20 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean-dark font-medium tracking-tight mb-16 md:mb-20 max-w-2xl mx-auto">
            Who Is This NLP Certification For?
          </h2>

          {/* Responsive center-aligned layout with increased gap-y to handle diamond rotation corner overhangs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24 justify-items-center max-w-6xl mx-auto py-8 mt-6 md:mt-10">
            {[
              {
                title: "Students",
                icon: <GraduationCap className="w-6 h-6 text-gold" />,
                description: "Overcome academic anxiety, dissolve deep learning blocks, and program your mind for effortless memory recall and peak performance under pressure.",
                accent: "border-gold-light/25 hover:border-gold/60"
              },
              {
                title: "Professionals",
                icon: <Briefcase className="w-6 h-6 text-teal-soft" />,
                description: "Command boardrooms with absolute confidence, master high-stakes negotiations, structure persuasive messaging, and fast-track your leadership ascension.",
                accent: "border-teal-soft/25 hover:border-teal-soft/60"
              },
              {
                title: "Coaches & Therapists",
                icon: <Heart className="w-6 h-6 text-rose-400" />,
                description: "Integrate rapid subconscious healing tools into your existing practice to deliver quantum, permanent breakthroughs for your clients from session one.",
                accent: "border-rose-300/25 hover:border-rose-400/60"
              },
              {
                title: "Entrepreneurs",
                icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
                description: "Conquer imposter syndrome, eliminate business-stifling fear of failure, sharpen rapid decisions, and align corporate vision with peak flow states.",
                accent: "border-emerald-300/25 hover:border-emerald-400/60"
              }
            ].map((card, idx) => (
              <div 
                key={idx} 
                className={`relative w-64 h-64 sm:w-72 sm:h-72 rotate-45 bg-white border ${card.accent} rounded-3xl shadow-[0_8px_30px_rgba(4,41,58,0.03)] hover:shadow-xl hover:scale-[1.03] transition-all duration-500 flex items-center justify-center group overflow-hidden`}
              >
                {/* Counter-rotated inner container */}
                <div className="-rotate-45 w-full h-full p-8 flex flex-col justify-center items-center text-center select-none relative z-10">
                  {/* Subtle inner diamond watermark border */}
                  <div className="absolute inset-2.5 border border-gold/5 rounded-2xl pointer-events-none" />

                  {/* Icon Container */}
                  <div className="w-11 h-11 rounded-xl bg-ocean/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-ocean-dark mb-2 tracking-wide">
                    {card.title}
                  </h3>

                  {/* Description - highly legible and tightly bounded to avoid overflow */}
                  <p className="text-xs sm:text-sm text-ocean-dark leading-relaxed font-normal max-w-[170px] sm:max-w-[190px]">
                    {card.description}
                  </p>

                  {/* Micro elegant dot indicator instead of lines */}
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/50 opacity-0 group-hover:opacity-100 mt-4 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 8. ELEGANT CONCLUDING MESSAGE SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#FAF9F5] to-white text-ocean-dark relative overflow-hidden border-t border-[#dfdbc9]/30">
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <div className="space-y-6">
            {/* Elegant Floral/Lotus Ornament */}
            <div className="flex justify-center mb-2">
              <svg className="w-10 h-10 text-gold animate-pulse duration-3000" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 21C12 21 15.5 17 15.5 14C15.5 11.5 13.5 10.5 12 12C10.5 10.5 8.5 11.5 8.5 14C8.5 17 12 21 12 21Z" />
                <path d="M12 21C12 21 19 19 19 15C19 12 16 11 12 12C8 11 5 12 5 15C5 19 12 21 12 21Z" />
                <path d="M12 12C14.5 9 17 9 17 6C17 4 14.5 5 12 7C9.5 5 7 4 7 6C7 9 9.5 9 12 12Z" />
              </svg>
            </div>

            {/* The Concluding Message */}
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#1d5c8a] font-bold leading-tight italic max-w-5xl mx-auto px-4 drop-shadow-sm">
              "Every story is built on a story. We carry invisible scripts — <span className="font-extrabold text-[#0f3c5c]">'I am not enough'</span>, <span className="font-extrabold text-[#0f3c5c]">'I can't do it'</span>, and many more. The story is not the truth. If you want to <span className="font-extrabold text-[#0f3c5c]">rewrite your story</span> and <span className="font-extrabold text-[#0f3c5c]">transform your beliefs</span>, this certification is your next step."
            </p>

            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto pt-4" />

            {/* Final CTAs for completeness and seamless user flow */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onBook('Neuro Linguistic Programming (NLP)')}
                className="px-8 py-4 bg-[#0A252C] hover:bg-[#15424A] text-white text-xs font-bold tracking-widest rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 uppercase cursor-pointer"
              >
                Enroll Now
              </button>
              
              <button
                onClick={onBack}
                className="px-8 py-4 border border-ocean/15 hover:bg-ocean/5 text-ocean/70 hover:text-ocean rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
              >
                Return to Sanctuary
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
