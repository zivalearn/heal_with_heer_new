import React, { useState } from 'react';
import { SmartImage } from '../SmartImage';
import { useImageRegistry } from '../../context/ImageContext';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, Sparkles, CheckCircle, Clock, Users, BookOpen, 
  HelpCircle, Award, Compass, Heart, Shield, Check, ChevronRight, 
  Brain, FileText, Gift, MessageSquare, Flame, CheckCircle2, AlertCircle, X, Play,
  Briefcase, GraduationCap, Sun, Mic,
  Target, BarChart2, Globe, Lightbulb, Hourglass, Rocket
} from 'lucide-react';

interface TrainTrainerPageProps {
  onBack: () => void;
  onBook: (modalityName?: string) => void;
}

export default function TrainTrainerPage({ onBack, onBook }: TrainTrainerPageProps) {
  const { getSrc } = useImageRegistry();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');
  const [selectedCalling, setSelectedCalling] = useState<string>("Corporate Leadership");

  // New States for upgraded interactive sections
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [hoveredIncluded, setHoveredIncluded] = useState<number | null>(null);
  const [activeGraduateIdx, setActiveGraduateIdx] = useState<number>(0);
  const [selectedAudienceIdx, setSelectedAudienceIdx] = useState<number>(0);

  // Active Section Tracker for Floating Progress Navigator
  React.useEffect(() => {
    const sections = [
      "hero", "calling", "engines", 
      "journey", "included", "perfect-for", "success", "apply"
    ];
    
    const handleScroll = () => {
      let current = "hero";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Personalization Content Data
  const personalizationContent = {
    "Corporate Leadership": {
      solutionTitle: "Empower Leaders & Teams with Grounded Authority",
      solutionSubtitle: "The Supreme Executive Certification",
      solutionDesc: "This transformational certification is engineered specifically for corporate leaders, consultants, executive mentors, and high-performance strategists. Learn how to design high-impact organizational training, command boardrooms with unshakeable presence, and deploy trauma-informed somatic regulation in high-pressure team environments.",
      bannerTitle: "Bridging Corporate Rigor & Deep Somatic Integration",
      bannerImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      bannerSubtitle: "HIGH-PERFORMANCE RETREAT",
      doesThisSoundLikeYou: [
        "You are a seasoned professional or executive who wants to lead high-end corporate programs, but needs a structured system to command premium consulting fees.",
        "You see corporate fatigue and burnout around you and want to integrate somatic wellness into corporate cultures safely and effectively.",
        "You believe you need standard certification boards or executive MBA titles to lead training, when what companies actually want is raw transformational capacity.",
        "Despite your years of corporate success, you struggle to position your custom methodologies as highly credible, premium consulting offerings.",
        "You are ready to transition from a full-time job to an elite independent advisor, but lack a clear business roadmap for executive client acquisition."
      ]
    },
    "Wellness & Healing": {
      solutionTitle: "Facilitate Sacred Space & Somatic Healing",
      solutionSubtitle: "The Ultimate Healer's Certification",
      solutionDesc: "This transformational certification is crafted for energy healers, yoga instructors, breathwork guides, and alternative therapists. Learn how to translate raw energetic and biological wisdom into structured, accredited programs, hold a safe trauma-informed space for deep somatic release, and build a flourishing, sustainable healing practice.",
      bannerTitle: "Bridging Ancient Wisdom & Trauma-Informed Group Space",
      bannerImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
      bannerSubtitle: "THE SACRED TEMPLE RESONANCE",
      doesThisSoundLikeYou: [
        "You are a passionate healer, Reiki master, or therapist who wants to transform lives but lacks a structured, repeatable curriculum to scale your practice.",
        "You struggle to explain your profound metaphysical or intuitive experiences in a way that modern premium clients can easily understand and pay for.",
        "You believe you need thousands of social media followers or an expensive studio before you can host transformational group retreats.",
        "Despite your deep connection to healing, imposter syndrome and money blockages stop you from charging premium rates for your sacred gifts.",
        "You keep waiting for the perfect moment or more qualifications to start your own healing circle, while people continue to suffer without your medicine."
      ]
    },
    "Life Coaching": {
      solutionTitle: "Guide Powerful Personal Transformation & Breakthroughs",
      solutionSubtitle: "The Elite Coach's Blueprint",
      solutionDesc: "This certification is designed for aspiring and active life coaches, relationship mentors, and mindset strategists. Master the psychological, somatic, and narrative engines that trigger permanent neurological shifts. Learn to transition from simple hourly calls to high-ticket annual retainer relationships with deep structural safety.",
      bannerTitle: "Bridging Psychological Depth & Practical Accountability",
      bannerImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
      bannerSubtitle: "ELITE LIFE TRANSFORMATION LAB",
      doesThisSoundLikeYou: [
        "You are natural-born listener and advisor whom friends always turn to for guidance, but you lack a professional, step-by-step coaching methodology.",
        "You want to transition from charging low hourly rates to building high-value, comprehensive package systems that guarantee breakthroughs.",
        "You believe you must have a perfectly flawless life yourself before you are allowed to coach others toward their professional or personal goals.",
        "You struggle to identify your precise coaching niche and feel overwhelmed trying to serve everyone with general mindset advice.",
        "You keep researching frameworks and buying more self-help books instead of stepping onto the stage and signing your first retainer client."
      ]
    },
    "Public Speaking": {
      solutionTitle: "Command any Stage with Absolute Magnetic Presence",
      solutionSubtitle: "The Keynote Orator's Masterclass",
      solutionDesc: "This certification is optimized for keynote speakers, educators, authors, and rising thought leaders. Demystify stage dynamics, emotional contagion, and pacing geometry. Learn to translate your life's deepest trials into compelling, high-converting signature narratives that hold audiences of thousands completely spellbound.",
      bannerTitle: "Bridging Expressive Vocal Timbre & Stage Energetics",
      bannerImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200",
      bannerSubtitle: "THE MAGNETIC KEYNOTE ARENA",
      doesThisSoundLikeYou: [
        "You have an extraordinary life story or deep message to share with the world, but panic, freeze response, or rapid breathing stops you on stage.",
        "You know how to talk, but you don't know how to structure your presentations to keep audiences highly engaged, weeping, or ready to take massive action.",
        "You believe you need a professional theatrical background, a flawless accent, or a booking agency before you can land paid speaking engagements.",
        "Despite your expertise, you feel invisible in a noisy digital landscape and struggle to project unshakeable authority when pitching to event curators.",
        "You are waiting for a stage to be offered to you, instead of mastering the systemic positioning needed to command paid keynote invitations."
      ]
    },
    "Education & Facilitation": {
      solutionTitle: "Design & Deliver Transformational Curriculums",
      solutionSubtitle: "The Master Pedagogy Certification",
      solutionDesc: "Designed for school leaders, higher education professors, and modern online academy builders. Elevate standard boring lectures into interactive, activity-based learning labs. Master classroom dynamics, trauma-informed group engagement, and experiential learning loops that imprint knowledge directly into muscle memory.",
      bannerTitle: "Bridging Modern Pedagogy & Somatic Resonance",
      bannerImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
      bannerSubtitle: "EXPERIMENTAL PEDAGOGY ACADEMY",
      doesThisSoundLikeYou: [
        "You are a teacher, professor, or corporate trainer tired of standard passive lecturing and watching your students' eyes glaze over during sessions.",
        "You want to transition from traditional rigid educational models to high-impact, experiential, and somatic group facilitation.",
        "You believe online teaching is inferior to offline classrooms, simply because you haven't learned how to design interactive virtual containers.",
        "You struggle to structure complex academic theories or technical data into simple, digestible steps that students love and retain for life.",
        "You are holding back your original educational academy because you are intimidated by curriculum mapping or digital platform logistics."
      ]
    },
    "Spiritual Growth": {
      solutionTitle: "Bridge Energetic Dimensions & Sacred Mentorship",
      solutionSubtitle: "The Spiritual Master's Sanctuary",
      solutionDesc: "For intuitive guides, transpersonal mentors, and seekers who hold space for deep ancestral, cosmic, and spiritual integration. Learn to merge standard modern facilitator safety with sacred alchemy, chakra resonance, and intuitive channeling to guide souls safely through mystical transitions.",
      bannerTitle: "Bridging Spiritual Transcendence & Grounded Safe Containment",
      bannerImage: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1200",
      bannerSubtitle: "SACRED COSMIC SANCTUARY",
      doesThisSoundLikeYou: [
        "You feel a divine calling to guide others through spiritual awakenings and dark nights of the soul, but worry about being labeled as unscientific or woo-woo.",
        "You have powerful intuitive gifts and energy awareness, but lack a grounded, trauma-informed psychological container to keep clients safe.",
        "You believe spiritual work must be offered for free or for tiny donations, which blocks you from building a sustainable, high-impact legacy.",
        "Despite your deep spiritual connections, you lack a clear step-by-step roadmap to packages your wisdom into professional, accredited courses.",
        "You keep hiding your true spiritual sovereignty, fearing judgment from peers, and waiting for external permission to step into your role as a guide."
      ]
    }
  };

  // 10-Module Master Trainer Program Data
  const masterTrainerModules = [
    {
      moduleNum: 1,
      title: "THE TRAINER MINDSET & INDUSTRY",
      subtitle: "Understand the Business of Being a Professional Trainer",
      topics: [
        "The new world of coaching, training & facilitation",
        "Trainer vs Coach vs Facilitator vs Speaker",
        "What organisations actually pay trainers for",
        "Training as a profession vs hobby",
        "Corporate, education, community & individual markets",
        "Different revenue models for trainers",
        "Skills required to become professionally successful"
      ],
      activity: "Trainer Possibility Map",
      outcome: "Your Trainer Opportunity Map"
    },
    {
      moduleNum: 2,
      title: "DISCOVER YOUR TRAINER IDENTITY",
      subtitle: "Build the Trainer You Want to Become",
      topics: [
        "Your natural trainer strengths",
        "Experience → Expertise → Teachability",
        "Finding your unique trainer personality",
        "What makes you different from other trainers",
        "Your values, beliefs & teaching philosophy",
        "Building authenticity and authority",
        "Creating your Trainer Promise",
        "Designing your unique Trainer Identity"
      ],
      activity: "Trainer Identity Canvas",
      outcome: "Your Trainer Identity Statement + Promise"
    },
    {
      moduleNum: 3,
      title: "FIND YOUR PROFITABLE TRAINING NICHE",
      subtitle: "Stop Trying to Train Everyone",
      topics: [
        "Understanding the power of a niche",
        "Audience + Problem + Transformation",
        "Finding your natural training zone",
        "Identifying problems you can solve",
        "Choosing your ideal audience",
        "B2B vs B2C training",
        "Finding commercially valuable training topics",
        "Creating your niche positioning"
      ],
      activity: "Niche Finder Exercise",
      outcome: "Primary Niche + Ideal Audience + Niche Statement"
    },
    {
      moduleNum: 4,
      title: "TRAINER CONFIDENCE & POWERFUL DELIVERY",
      subtitle: "Learn to Lead the Room With Confidence",
      topics: [
        "Psychology of trainer confidence",
        "Overcoming fear of judgment and mistakes",
        "Developing trainer presence",
        "Posture, eye contact, movement & energy",
        "Voice modulation and vocal authority",
        "Powerful openings",
        "Storytelling & impactful explanations",
        "Handling nervousness and blank moments",
        "How to establish credibility in the first 5 minutes"
      ],
      activity: "60-Second Trainer Challenge",
      outcome: "Confident Trainer Introduction + Delivery Framework"
    },
    {
      moduleNum: 5,
      title: "DESIGN TRANSFORMATIONAL TRAINING",
      subtitle: "Turn Knowledge Into Learning",
      topics: [
        "Information vs transformation",
        "Training outcomes vs topics",
        "Designing the participant's Before → After",
        "KNOW → FEEL → DO framework",
        "Learning objectives",
        "Structuring powerful training content",
        "Sequencing concepts for maximum impact",
        "Avoiding information overload",
        "Designing participant takeaways"
      ],
      activity: "Training Transformation Map",
      outcome: "Complete Learning Outcome Blueprint"
    },
    {
      moduleNum: 6,
      title: "BUILD YOUR SIGNATURE WORKSHOP",
      subtitle: "Turn Your Expertise Into a Product People Can Buy",
      topics: [
        "Choosing your signature topic",
        "Creating a powerful workshop title",
        "Defining your audience and problem",
        "Building your workshop promise",
        "Workshop architecture",
        "Opening → Content → Activity → Reflection → Application → Closing",
        "Creating 3–5 powerful training sections",
        "Designing practical exercises",
        "Creating your workshop takeaway"
      ],
      activity: "Build Your First Workshop",
      outcome: "Your Complete Signature Workshop Blueprint"
    },
    {
      moduleNum: 7,
      title: "MASTER FACILITATION & ROOM MANAGEMENT",
      subtitle: "Stop Presenting. Start Leading the Room.",
      topics: [
        "Trainer vs presenter mindset",
        "The psychology of participation",
        "Asking powerful questions",
        "Creating discussions and interaction",
        "Managing quiet participants",
        "Handling dominant participants",
        "Handling difficult or negative participants",
        "Managing distractions and off-topic conversations",
        "Reading room energy",
        "Adapting your training in real time"
      ],
      activity: "Facilitator Hot Seat",
      outcome: "Your Practical Facilitation Toolkit"
    },
    {
      moduleNum: 8,
      title: "CREATE ENGAGING & UNFORGETTABLE TRAINING",
      subtitle: "Make People Participate, Experience & Remember",
      topics: [
        "Understanding the attention curve",
        "Creating curiosity",
        "Pattern interrupts",
        "HOOK → TEACH → EXPERIENCE → REFLECT → APPLY",
        "Storytelling for trainers",
        "Games, polls, role plays & challenges",
        "Case studies and demonstrations",
        "Creating “Aha!” moments",
        "Frameworks, models & memorable teaching",
        "Turning boring content into engaging experiences"
      ],
      activity: "Turn Boring Into Brilliant",
      outcome: "Your 10-Minute Interactive Training Experience"
    },
    {
      moduleNum: 9,
      title: "BUILD YOUR TRAINER BRAND & AUTHORITY",
      subtitle: "Become Known for Something",
      topics: [
        "Personal branding for trainers",
        "Expertise positioning",
        "Creating your trainer headline",
        "Professional trainer bio",
        "Speaker/trainer profile",
        "Identifying your signature topic",
        "Building your signature framework",
        "Content that establishes authority",
        "Testimonials, results & social proof",
        "Building credibility even as a new trainer"
      ],
      activity: "Become Known for ONE Thing",
      outcome: "Trainer Brand + Bio + Signature Positioning"
    },
    {
      moduleNum: 10,
      title: "BUILD YOUR TRAINER BUSINESS",
      subtitle: "Go From Trainer to Paid Professional",
      topics: [
        "Where trainers find opportunities",
        "Corporates, schools, colleges, events & communities",
        "Creating different training offers",
        "Workshops vs masterclasses vs corporate programs",
        "Understanding trainer pricing",
        "Value-based pricing",
        "Creating your trainer pitch",
        "Finding your first/next client",
        "Outreach, referrals & partnerships",
        "Building your trainer portfolio",
        "Creating a 30-day client acquisition strategy"
      ],
      activity: "My First Client Plan",
      outcome: "Trainer Portfolio + Offer + Pitch + 30-Day Action Plan"
    }
  ];

  const roadmapSteps = [
    "DISCOVER", "DEFINE", "DESIGN", "DELIVER", "ENGAGE", "DIFFERENTIATE", "DEMONSTRATE", "GET PAID", "GROW"
  ];

  const roadmapOutcomes = [
    "Trainer Identity",
    "Training Niche",
    "Ideal Audience",
    "Trainer Positioning",
    "Signature Topic",
    "Signature Workshop Blueprint",
    "Facilitation Toolkit",
    "Engagement Techniques",
    "Trainer Bio & Profile",
    "Personal Branding Direction",
    "Trainer Offer",
    "Trainer Pitch",
    "Portfolio Structure",
    "Client Acquisition Strategy",
    "30-Day Trainer Action Plan"
  ];

  // Sacred Blueprint Hover States & Particle Tracker
  const heroRef = React.useRef<HTMLDivElement>(null);
  const [heroSize, setHeroSize] = useState({ width: 1200, height: 700 });
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [cursorParticles, setCursorParticles] = useState<{id: number, x: number, y: number, dx: number, dy: number}[]>([]);

  React.useEffect(() => {
    if (heroRef.current) {
      const handleResize = () => {
        setHeroSize({
          width: heroRef.current?.clientWidth || 1200,
          height: heroRef.current?.clientHeight || 700
        });
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Map to 1200x700 SVG coordinates
    const svgX = (x / rect.width) * 1200;
    const svgY = (y / rect.height) * 700;
    
    setMousePos({ x: svgX, y: svgY });

    if (Math.random() < 0.28) {
      const id = Date.now() + Math.random();
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 25 + 5;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance - 20; // float upwards
      
      setCursorParticles(prev => [
        ...prev.slice(-12), // Keep max 12 particles
        { id, x: svgX, y: svgY, dx, dy }
      ]);
    }
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  // Interactive road steps
  const roadSteps = [
    {
      step: "Step 01",
      title: "Why This Is The Best Time To Become A Trainer",
      subtitle: "Capitalize on the educational revolution",
      color: "from-blue-50 to-teal-50/50",
      icon: <Clock className="w-5 h-5 text-teal-soft" />,
      bullets: [
        { title: "Industry Demand", desc: "The global training and coaching industry is growing at an unprecedented rate of over 15% annually as individuals and corporates seek real transformation." },
        { title: "Future of Learning", desc: "Traditional degrees are giving way to high-impact skill certifications and action-oriented micro-learning experiences." },
        { title: "AI + Human Trainers", desc: "While AI handles data and generic information, human connection, emotional safety, somatic integration, and intuitive healing cannot be automated." },
        { title: "Corporate Growth", desc: "Companies are spending billions annually on mental fitness, leadership, stress relief, soft skills, and employee resilience training." }
      ]
    },
    {
      step: "Step 02",
      title: "The 6 Levels Of Becoming A High-Impact Trainer",
      subtitle: "Your evolutionary growth roadmap",
      color: "from-amber-50 to-orange-50/30",
      icon: <Compass className="w-5 h-5 text-[#c0942c]" />,
      levels: [
        { label: "Explorer", desc: "Seeking answers, discovering your inherent strengths, and realizing your true purpose." },
        { label: "Learner", desc: "Mastering practical healing and coaching frameworks under professional, direct mentorship." },
        { label: "Trainer", desc: "Starting to lead individual sessions, delivering core knowledge cleanly and safely." },
        { label: "Facilitator", desc: "Guiding group energetics, cultivating a deeply supportive healing container." },
        { label: "Authority", desc: "Designing original masterclasses and positioning yourself as the go-to expert in your niche." },
        { label: "Legacy Builder", desc: "Creating global impact, certifiying others, and building a thriving, purpose-driven empire." }
      ]
    },
    {
      step: "Step 03",
      title: "The Biggest Myths Keeping Experts Invisible",
      subtitle: "Deconstructing the blocks holding you back",
      color: "from-red-50 to-pink-50/30",
      icon: <Brain className="w-5 h-5 text-red-500" />,
      myths: [
        { myth: "I need 10 years of experience", truth: "People don't buy years on a resume; they buy a proven system and structured results that can transform their pain into power." },
        { myth: "I need thousands of followers", truth: "A high-ticket, deeply dedicated client base only requires raw authentic authority and high-resonance messaging, not viral trends." },
        { myth: "I need perfect English", truth: "Your clients want heart-to-heart safety, somatic empathy, and raw transparency—not polished corporate jargon or perfect linguistics." },
        { myth: "I need expensive certifications", truth: "Standard intellectual theories are useless without actionable frameworks, actual practice, and direct integration." }
      ]
    },
    {
      step: "Step 04",
      title: "The 7 Qualities Of Extraordinary Trainers",
      subtitle: "The divine pillars of sacred facilitation",
      color: "from-emerald-50 to-teal-50/30",
      icon: <Award className="w-5 h-5 text-emerald-600" />,
      qualities: [
        { name: "Confidence", desc: "An unshakeable belief in your healing system, radiating grounded authority in every room." },
        { name: "Communication", desc: "Channeling absolute clarity, turning complex metaphysical ideas into simple daily steps." },
        { name: "Facilitation", desc: "The capability to read, hold, and pivot group energy based on silent somatic cues." },
        { name: "Leadership", desc: "Modeling personal sovereignty and inspiring others to take courageous action." },
        { name: "Storytelling", desc: "Creating a deeply memorable narrative arc that lands directly in the hearts of your listeners." },
        { name: "Energy", desc: "Maintaining high-vibrational coherence that elevates the nervous systems of everyone present." },
        { name: "Authenticity", desc: "Sharing your raw truth and vulnerabilities so clients feel completely safe to expose theirs." }
      ]
    },
    {
      step: "Step 05",
      title: "The T.R.A.I.N Framework",
      subtitle: "Our signature high-conversion transformation blueprint",
      color: "from-purple-50 to-indigo-50/30",
      icon: <Sparkles className="w-5 h-5 text-purple-600" />,
      train: [
        { letter: "T", term: "Teach With Clarity", desc: "Transform complex ideas and somatic theories into simple, highly digestible, step-by-step learning experiences." },
        { letter: "R", term: "Relate Through Stories", desc: "Create direct emotional connection that people remember, using vulnerable, high-impact metaphors." },
        { letter: "A", term: "Activate Learning", desc: "Utilize immersive partner activities, live coaching, interactive group discussions, and deep subconscious reflection." },
        { letter: "I", term: "Influence & Inspire", desc: "Directly lead your audience toward real action instead of simply dumping theoretical information on them." },
        { letter: "N", term: "Nurture Transformation", desc: "Provide continuous safety and integration tools to help your learners achieve lasting neural and behavioral change." }
      ]
    }
  ];

  const navigatorItems = [
    { id: "hero", label: "Hero" },
    { id: "calling", label: "Calling" },
    { id: "engines", label: "Master Program" },
    { id: "journey", label: "Master Journey" },
    { id: "included", label: "Everything Included" },
    { id: "perfect-for", label: "Programme For You" },
    { id: "success", label: "Success Stories" },
    { id: "apply", label: "Apply & Book" }
  ];

  return (
    <div className="bg-[#fdfcf7] min-h-screen text-ocean-dark pb-24 font-sans traintrainer-page-root relative">
      
      {/* SCOPED FONT & COMPONENT REGULATION */}
      <style dangerouslySetInnerHTML={{ __html: `
        .traintrainer-page-root .text-\\[9px\\] { font-size: 11px !important; }
        .traintrainer-page-root .text-\\[10px\\] { font-size: 13px !important; }
        .traintrainer-page-root .text-\\[11px\\] { font-size: 14.5px !important; }
        .traintrainer-page-root .text-xs { font-size: 16px !important; }
        .traintrainer-page-root .text-sm { font-size: 18px !important; }
        .traintrainer-page-root .text-base { font-size: 20px !important; }
        .traintrainer-page-root .text-lg { font-size: 22px !important; }
        .traintrainer-page-root .text-xl { font-size: 24px !important; }
        .traintrainer-page-root h1, .traintrainer-page-root h2, .traintrainer-page-root h3, .traintrainer-page-root h4 {
          line-height: 1.3 !important;
        }
        .traintrainer-page-root p, .traintrainer-page-root li, .traintrainer-page-root span {
          line-height: 1.65 !important;
        }
        @keyframes pathGlow {
          from { stroke-dashoffset: 40; }
          to { stroke-dashoffset: 0; }
        }
        .animate-path-glow {
          animation: pathGlow 1.5s linear infinite;
        }
        @keyframes goldParticleFade {
          0% { transform: scale(0.7) translate(0, 0); opacity: 0; }
          15% { opacity: 0.95; }
          100% { transform: scale(0.15) translate(var(--dx, 15px), var(--dy, -30px)); opacity: 0; }
        }
        .animate-gold-fade {
          animation: goldParticleFade 1.3s ease-out forwards;
        }
        @keyframes subtleDrift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(8px, -15px) scale(1.03); }
        }
        .animate-subtle-drift {
          animation: subtleDrift 14s ease-in-out infinite;
        }
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-slow-spin {
          animation: slowSpin 60s linear infinite;
        }
      ` }} />
      
      {/* 1. HERO BANNER - Soft Luxury Flagship experience */}
      <section 
        id="hero"
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative pt-12 pb-16 px-6 overflow-hidden bg-[#FAF9F5] select-none"
      >
        {/* Subtle paper-like grain texture & dotted grid background */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, #0a3d54 1px, transparent 1px), radial-gradient(circle, #c0942c 1px, transparent 1px)`,
          backgroundSize: '24px 24px, 36px 36px'
        }} />
        
        {/* Ambient Watercolor Bleeds and Golden Glow behind Heading */}
        <div className="absolute -top-12 -right-12 w-[550px] h-[550px] bg-[#bde0e5]/15 rounded-full blur-[110px] pointer-events-none mix-blend-multiply animate-subtle-drift" />
        <div className="absolute -bottom-24 -left-12 w-[450px] h-[450px] bg-teal-soft/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#c0942c]/6 to-transparent blur-[120px] pointer-events-none mix-blend-screen" />
        
        {/* Faint luxury background sacred geometry constellation */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] flex items-center justify-center animate-slow-spin">
          <svg className="w-[800px] h-[800px] text-[#0a3d54]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1,2" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.25" />
            <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="currentColor" strokeWidth="0.25" />
            <polygon points="50,20 80,50 50,80 20,50" fill="none" stroke="currentColor" strokeWidth="0.15" />
          </svg>
        </div>

        {/* Dynamic golden cursor particles */}
        {cursorParticles.map(p => (
          <div
            key={p.id}
            className="absolute pointer-events-none w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#dfbc9a] to-[#c0942c] opacity-0 animate-gold-fade z-20"
            style={{
              left: `${(p.x / 1200) * 100}%`,
              top: `${(p.y / 700) * 100}%`,
              '--dx': `${p.dx}px`,
              '--dy': `${p.dy}px`,
            } as React.CSSProperties}
          />
        ))}

        {/* Sacred Blueprint Constellation Network overlaying behind contents */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 1200 700" preserveAspectRatio="none">
            {/* Draw connections */}
            {[
              { from: 1, to: 2 },
              { from: 1, to: 3 },
              { from: 2, to: 3 },
              { from: 2, to: 4 },
              { from: 3, to: 5 },
              { from: 4, to: 5 },
              { from: 4, to: 6 },
              { from: 5, to: 6 }
            ].map((conn, idx) => {
              const nodes = [
                { id: 1, x: 600, y: 110 },
                { id: 2, x: 420, y: 250 },
                { id: 3, x: 780, y: 250 },
                { id: 4, x: 350, y: 440 },
                { id: 5, x: 850, y: 440 },
                { id: 6, x: 600, y: 580 }
              ];
              const fromNode = nodes.find(n => n.id === conn.from)!;
              const toNode = nodes.find(n => n.id === conn.to)!;
              
              // Calculate interactive glow
              const getGlow = (nx: number, ny: number) => {
                const d = Math.hypot(mousePos.x - nx, mousePos.y - ny);
                return d > 180 ? 0 : (1 - d / 180);
              };
              const glow = (getGlow(fromNode.x, fromNode.y) + getGlow(toNode.x, toNode.y)) / 2;
              const opacity = 0.05 + glow * 0.28;
              
              return (
                <line
                  key={`conn-${idx}`}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="#c0942c"
                  strokeWidth={1 + glow * 1.5}
                  strokeOpacity={opacity}
                  className="transition-all duration-300 ease-out"
                />
              );
            })}

            {/* Draw Nodes */}
            {[
              { id: 1, label: "✦", x: 600, y: 110 },
              { id: 2, label: "Leadership", x: 420, y: 250 },
              { id: 3, label: "Healing", x: 780, y: 250 },
              { id: 4, label: "Business", x: 350, y: 440 },
              { id: 5, label: "Facilitation", x: 850, y: 440 },
              { id: 6, label: "Master Trainer", x: 600, y: 580 }
            ].map((node) => {
              const d = Math.hypot(mousePos.x - node.x, mousePos.y - node.y);
              const glow = d > 180 ? 0 : (1 - d / 180);
              const opacity = 0.07 + glow * 0.45;
              const radius = node.id === 1 ? 8 : 5.5;
              
              return (
                <g key={`node-${node.id}`}>
                  {/* Pulsing ring */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={radius + 8}
                    fill="none"
                    stroke="#c0942c"
                    strokeWidth="1"
                    strokeOpacity={0.03 + glow * 0.22}
                    className="animate-pulse"
                    style={{ animationDuration: `${3 + node.id * 0.5}s` }}
                  />
                  {/* Central node dot */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={radius}
                    fill="#c0942c"
                    fillOpacity={opacity}
                    stroke="#FAF9F5"
                    strokeWidth="1.5"
                    strokeOpacity={opacity + 0.15}
                    className="transition-all duration-300 ease-out"
                  />
                  {/* Subtle label */}
                  <text
                    x={node.x}
                    y={node.y + (node.id === 1 ? -16 : 22)}
                    textAnchor="middle"
                    fill="#072a3a"
                    fillOpacity={0.12 + glow * 0.68}
                    className="font-serif text-[10px] tracking-[0.2em] uppercase select-none transition-all duration-300 pointer-events-none font-medium"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-8 pt-4">
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Top yellow banner bar from image */}
            <div className="inline-block bg-[#f8ebd0] border border-[#c0942c]/40 px-6 py-2.5 rounded-full shadow-sm">
              <span className="text-xs md:text-sm font-bold tracking-wider text-[#072a3a]">
                From <span className="font-extrabold text-[#835d10]">"Meaningless Work"</span> to <span className="underline decoration-[#c0942c] decoration-2 underline-offset-4 text-[#835d10] font-extrabold">Purpose Driven Career</span>
              </span>
            </div>
            
            {/* Main Heading from image */}
            <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl text-[#072a3a] font-extrabold leading-tight tracking-tight uppercase">
              <span className="block text-[#c0942c]">PASSIONATE ABOUT HELPING PEOPLE,</span>
              <span className="block text-[#072a3a] my-1">BUT DON'T KNOW</span>
              <span className="block text-[#072a3a] my-1 font-black">"WHERE TO START"</span>
              <span className="block text-[#072a3a] my-1">OR</span>
              <span className="block text-[#072a3a] underline decoration-[#c0942c] decoration-4 underline-offset-8">HOW TO SCALE?</span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-[#072a3a] leading-relaxed max-w-3xl mx-auto font-medium pt-2">
              This <strong className="font-bold text-[#072a3a]">Master Trainer Certification Programme</strong> gives you the roadmap to build a successful coaching and training business that creates
            </p>
            
            <p className="font-sans text-2xl md:text-3xl lg:text-4xl text-[#c0942c] font-black tracking-tight pt-1">
              Impact, Freedom & Consistent Income.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20">
            <button
              onClick={() => onBook("Master Trainer Certification")}
              className="relative overflow-hidden px-10 py-4.5 bg-[#e11d48] hover:bg-[#be123c] text-white rounded-xl font-sans font-bold tracking-wider text-base md:text-lg shadow-[0_10px_25px_-5px_rgba(225,29,72,0.35)] hover:shadow-[0_20px_45px_-5px_rgba(225,29,72,0.5)] hover:-translate-y-0.5 hover:scale-[1.01] transition-all duration-500 ease-out uppercase w-full sm:w-auto group cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span>APPLY NOW</span>
            </button>
          </div>
        </div>
      </section>

      {/* 1.5 CHOOSE YOUR CALLING PERSONALIZATION SECTION */}
      <section id="calling" className="py-16 md:py-20 px-6 max-w-6xl mx-auto border-t border-[#dfdbc9]/30 relative overflow-hidden">
        {/* Subtle decorative elements for luxury calibration feel */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-amber-200/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-teal-soft/5 rounded-full blur-[80px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-14 relative z-10"
        >
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#072a3a] font-normal leading-tight tracking-tight">
            Choose Your Calling
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-[#c0942c]/30" />
            <Sparkles className="w-4 h-4 text-[#c0942c] animate-pulse" />
            <div className="w-12 h-[1px] bg-[#c0942c]/30" />
          </div>
          <p className="text-sm md:text-base text-sage italic font-light max-w-2xl mx-auto leading-relaxed">
            "Every extraordinary facilitator begins with a different calling. Select the path that resonates most with you and let your journey adapt accordingly."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {[
            { id: "Corporate Leadership", desc: "Align logic, metrics, and soft skills to elevate executive performance.", icon: <Briefcase className="w-5 h-5" /> },
            { id: "Wellness & Healing", desc: "Facilitate somatic nervous system regulation and holistic space.", icon: <Heart className="w-5 h-5" /> },
            { id: "Life Coaching", desc: "Guide personal exploration, limiting belief release, and future roadmaps.", icon: <Compass className="w-5 h-5" /> },
            { id: "Public Speaking", desc: "Command the stage with raw magnetic presence and unshakeable authority.", icon: <Mic className="w-5 h-5" /> },
            { id: "Education & Facilitation", desc: "Design elegant, transformational curriculums and experiential learning.", icon: <GraduationCap className="w-5 h-5" /> },
            { id: "Spiritual Growth", desc: "Bridge energetic dimensions, ancestral wisdom, and sacred alignment.", icon: <Sun className="w-5 h-5" /> }
          ].map((calling) => {
            const isSelected = selectedCalling === calling.id;
            return (
              <button
                key={calling.id}
                onClick={() => setSelectedCalling(calling.id)}
                className={`group relative text-left p-6.5 rounded-2xl bg-white border transition-all duration-500 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${
                  isSelected 
                    ? "border-[#c0942c] ring-2 ring-[#c0942c]/15 shadow-md" 
                    : "border-[#dfdbc9]/50 hover:border-[#c0942c]/35"
                }`}
                style={{
                  boxShadow: isSelected ? "0 12px 30px -5px rgba(192, 148, 44, 0.12)" : undefined
                }}
              >
                {/* Minimal glowing background effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c0942c]/0 to-[#c0942c]/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Active left gold border accent strip */}
                {isSelected && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#dfbc9a] to-[#c0942c] rounded-l-2xl" />
                )}

                <div className="flex items-center gap-4 mb-3 relative z-10">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isSelected ? "bg-amber-500/10 text-[#c0942c] scale-105" : "bg-[#fcfaf4] text-ocean-light group-hover:text-ocean"
                  }`}>
                    {calling.icon}
                  </div>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#072a3a] leading-tight">
                    {calling.id}
                  </h3>
                </div>

                <p className="text-xs text-ocean-light leading-relaxed font-light relative z-10">
                  {calling.desc}
                </p>

                {/* Refined corner gold indicator */}
                <div className={`absolute top-4.5 right-4.5 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isSelected ? "bg-[#c0942c] scale-100" : "bg-transparent scale-0"
                }`} />
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. DOES THIS SOUND LIKE YOU SECTION */}
      <section className="py-16 md:py-20 px-6 max-w-6xl mx-auto border-t border-[#dfdbc9]/30">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3 mb-12"
        >
          <h2 className="font-sans text-3xl md:text-5xl text-[#072a3a] font-extrabold uppercase tracking-tight">
            DOES THIS SOUND LIKE <span className="text-[#c0942c] font-black italic">YOU?</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-[1px] bg-[#c0942c]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#c0942c]" />
            <div className="w-10 h-[1px] bg-[#c0942c]/40" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Target className="w-6 h-6 text-[#854d0e]" />,
              text: "You know you're meant to coach and transform lives—but you're still unsure which niche truly reflects your strengths and purpose."
            },
            {
              icon: <BarChart2 className="w-6 h-6 text-[#854d0e]" />,
              text: "You have the passion, skills, and knowledge, but not a clear roadmap to turn your expertise into a profitable coaching business."
            },
            {
              icon: <Globe className="w-6 h-6 text-[#854d0e]" />,
              text: "You believe you need a fancy website, a big office, or thousands of followers before people will trust and invest in your services."
            },
            {
              icon: <Lightbulb className="w-6 h-6 text-[#854d0e]" />,
              text: "Despite your certifications and achievements, self-doubt still stops you from showing up with confidence."
            },
            {
              icon: <Hourglass className="w-6 h-6 text-[#854d0e]" />,
              text: "You keep waiting for the \"perfect time\"—but it never comes."
            },
            {
              icon: <Rocket className="w-6 h-6 text-[#854d0e]" />,
              text: "You dream of becoming a successful coach, but fear, self-doubt, and uncertainty keep holding you back from taking the first step."
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#fefce8] border border-[#fef08a] p-6 md:p-7 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-[#fde047] border border-[#eab308]/50 flex items-center justify-center shrink-0 mb-4 shadow-sm">
                {item.icon}
              </div>
              <p className="text-sm md:text-base text-[#1e293b] leading-relaxed font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout Text from Image 1 / Image 2 */}
        <div className="text-center pt-12 space-y-1">
          <p className="text-base sm:text-lg text-[#072a3a] font-bold">
            If you nodded <span className="font-extrabold text-[#072a3a]">YES</span> to even one of these,
          </p>
          <p className="text-xl sm:text-2xl font-black text-[#c0942c] tracking-tight">
            this programme was created for you.
          </p>
        </div>
      </section>

      {/* 3. THE SOLUTION SECTION */}
      <section className="py-12 md:py-16 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl text-[#072a3a] font-black tracking-tight uppercase">
            THE SOLUTION
          </h2>
        </motion.div>

        {/* Yellow Box Container from Image 2 */}
        <div className="bg-[#facc15] border-2 border-[#eab308] p-8 sm:p-12 md:p-14 rounded-3xl shadow-xl max-w-4xl mx-auto space-y-6 text-center text-[#18181b]">
          <p className="text-base sm:text-lg md:text-xl font-medium text-[#000000]">
            That's exactly why we created the <strong className="font-black text-[#000000]">Master Trainer Certification Programme.</strong>
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#18181b] font-normal max-w-3xl mx-auto">
            This transformational certification programme is designed for aspiring coaches, trainers, mentors, consultants, and professionals who are passionate about creating meaningful change but need the right roadmap to build a successful coaching and training career.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#18181b] font-normal max-w-3xl mx-auto">
            You'll discover how to identify your niche, create transformational coaching programmes, confidently deliver high-impact sessions, attract your ideal clients, and build a purpose-driven business—without needing years of experience, thousands of followers, or expensive infrastructure.
          </p>

          <div className="pt-6 border-t border-[#000000]/15 space-y-3">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#000000] tracking-tight">
              This isn't just another certification.
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-black text-[#000000] leading-snug max-w-2xl mx-auto">
              It's your blueprint for becoming a confident, credible, and high-impact trainer who transforms lives while building a thriving coaching business.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE MASTER TRAINER PROGRAM & 10-MODULE CURRICULUM */}
      <section id="engines" className="py-16 md:py-24 px-6 max-w-6xl mx-auto border-t border-[#dfdbc9]/30">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#072a3a] font-normal tracking-tight leading-tight">
            THE MASTER TRAINER PROGRAM
          </h2>

          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-[#c0942c]/40" />
            <div className="w-2 h-2 rounded-full bg-[#c0942c]" />
            <div className="w-12 h-[1px] bg-[#c0942c]/40" />
          </div>

          {/* Key Program Metric Pills - Single Line */}
          <div className="pt-2 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto flex-wrap sm:flex-nowrap">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white border border-[#dfdbc9]/70 px-3 sm:px-4 py-2 rounded-xl shadow-xs shrink-0 whitespace-nowrap">
              <Clock className="w-4 h-4 text-[#c0942c] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-[#072a3a]">20 Hours</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white border border-[#dfdbc9]/70 px-3 sm:px-4 py-2 rounded-xl shadow-xs shrink-0 whitespace-nowrap">
              <Users className="w-4 h-4 text-[#c0942c] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-[#072a3a]">Live Group Sessions</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white border border-[#dfdbc9]/70 px-3 sm:px-4 py-2 rounded-xl shadow-xs shrink-0 whitespace-nowrap">
              <CheckCircle2 className="w-4 h-4 text-[#c0942c] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-[#072a3a]">Practical Assignments</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white border border-[#dfdbc9]/70 px-3 sm:px-4 py-2 rounded-xl shadow-xs shrink-0 whitespace-nowrap">
              <Briefcase className="w-4 h-4 text-[#c0942c] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-[#072a3a]">Trainer Toolkit</span>
            </div>
          </div>
        </div>

        {/* 10 Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {masterTrainerModules.map((mod) => (
            <div 
              key={mod.moduleNum}
              className="bg-white border border-[#dfdbc9]/60 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#c0942c]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#dfbc9a] via-[#c0942c] to-[#072a3a]/20" />

              <div className="space-y-4">
                {/* Module Badge & Subtitle */}
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-block px-3 py-1 bg-[#fcf6e8] border border-[#c0942c]/30 rounded-lg text-xs font-mono font-bold text-[#c0942c] tracking-wider">
                    MODULE {mod.moduleNum < 10 ? `0${mod.moduleNum}` : mod.moduleNum}
                  </span>
                  <span className="text-[11px] font-mono text-ocean-light/70 uppercase">
                    Step {mod.moduleNum}/10
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#072a3a] leading-tight">
                    {mod.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#c0942c] mt-1">
                    {mod.subtitle}
                  </p>
                </div>

                {/* Topics Bullet List */}
                <ul className="space-y-2 pt-2 border-t border-[#dfdbc9]/30">
                  {mod.topics.map((topic, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2 text-xs sm:text-sm text-ocean-light font-light leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c0942c] mt-2 shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Activity & Outcome Footer Box */}
              <div className="mt-6 pt-4 border-t border-[#dfdbc9]/40 bg-[#FAF9F5] rounded-xl p-3.5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#072a3a]">
                  <Sparkles className="w-3.5 h-3.5 text-[#c0942c] shrink-0" />
                  <span><strong className="font-bold text-[#072a3a]">Activity:</strong> {mod.activity}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#072a3a]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong className="font-bold text-[#072a3a]">Outcome:</strong> {mod.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* THE FINAL TRAINER ROADMAP */}
        <div className="mt-20 bg-gradient-to-b from-[#faf8f3] to-white border border-[#dfdbc9]/70 rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm space-y-10">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#072a3a] font-normal tracking-tight">
              THE FINAL TRAINER ROADMAP
            </h3>
            <p className="text-xs sm:text-sm text-ocean-light leading-relaxed font-light">
              At the end of the program, everything connects into a seamless professional journey:
            </p>
          </div>

          {/* 9-Step Interactive Ribbon */}
          <div className="bg-[#FAF9F5] border border-[#dfdbc9]/60 rounded-2xl p-4 sm:p-6 shadow-inner">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-[#072a3a]">
              {roadmapSteps.map((step, sIdx) => (
                <React.Fragment key={step}>
                  <div className="bg-white border border-[#dfdbc9]/70 px-3 py-1.5 rounded-lg shadow-xs flex items-center gap-1.5 hover:border-[#c0942c] transition-colors">
                    <span className="text-[10px] font-mono text-[#c0942c] font-bold">0{sIdx + 1}</span>
                    <span>{step}</span>
                  </div>
                  {sIdx < roadmapSteps.length - 1 && (
                    <span className="text-[#c0942c] font-bold">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 15 Key Outcomes Checklist */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#072a3a] text-center">
              By the end, participants will have:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {roadmapOutcomes.map((item, oIdx) => (
                <div key={oIdx} className="bg-white border border-emerald-100 p-3 rounded-xl flex items-center gap-2.5 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-[#072a3a]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Core Promise */}
          <div className="bg-[#FAF9C8]/25 border-2 border-[#c0942c]/40 rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-sm">
            <span className="text-xs font-mono font-bold tracking-widest text-[#c0942c] uppercase block">
              Premium Core Promise
            </span>
            <blockquote className="font-serif text-base sm:text-lg md:text-xl italic text-[#072a3a] leading-relaxed max-w-3xl mx-auto font-medium">
              “From knowing you can train to knowing exactly what to train, who to train, how to deliver it and how to turn your expertise into a professional training career.”
            </blockquote>
            <p className="text-xs font-mono text-ocean-light tracking-wider uppercase pt-1">
              Train the trainer
            </p>
          </div>

          {/* Direct CTA */}
          <div className="text-center pt-2">
            <button
              onClick={() => onBook("Master Trainer Certification")}
              className="relative overflow-hidden px-10 py-4 bg-[#e11d48] hover:bg-[#be123c] text-white rounded-xl font-sans font-bold tracking-wider text-sm md:text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 uppercase cursor-pointer"
            >
              ENROLL IN MASTER TRAINER PROGRAM
            </button>
          </div>

        </div>

      </section>

      {/* 5. INTERACTIVE JOURNEY ROAD SECTION (SECTION 6) */}
      <section id="journey" className="py-16 md:py-20 px-6 bg-[#faf8f3] border-t border-[#dfdbc9]/30 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center space-y-4 mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-[#072a3a] font-medium tracking-tight">
            WHAT YOU'LL LEARN
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-[#c0942c]/40" />
            <span className="text-[#c0942c] text-xs">✦</span>
            <div className="w-12 h-[1px] bg-[#c0942c]/40" />
          </div>
        </div>

        {/* Visual Winding Facilitation Highway (Wow Factor 2!) */}
        <div className="hidden lg:block max-w-5xl mx-auto mb-12 relative bg-white/40 border border-[#dfdbc9]/30 rounded-[2.5rem] p-8 overflow-hidden shadow-sm z-10">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle, #0a3d54 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px'
          }} />
          <h3 className="font-mono text-xs font-bold text-ocean-dark text-center mb-6 tracking-[0.2em] uppercase">
            The Facilitation Highway: Click any Portal to travel
          </h3>
          <div className="relative h-44 w-full">
            {/* SVG Winding Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 900 150" fill="none" preserveAspectRatio="none">
              <path 
                d="M 50 75 C 200 150, 250 10, 450 75 C 650 140, 700 10, 850 75" 
                stroke="#dfdbc9" 
                strokeWidth="4" 
                strokeLinecap="round"
                className="opacity-50"
              />
              <motion.path 
                d="M 50 75 C 200 150, 250 10, 450 75 C 650 140, 700 10, 850 75" 
                stroke="#c0942c" 
                strokeWidth="4" 
                strokeLinecap="round"
                initial={{ pathLength: 0.1 }}
                animate={{ pathLength: (activeStep + 1) / 5 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="opacity-90 shadow-md"
              />
            </svg>

            {/* Step Coordinates across the path using mathematically perfect percentages */}
            {[
              { x: "5.55%", y: "50%", label: "01", name: "The Revolution" },
              { x: "24.44%", y: "73.33%", label: "02", name: "Growth Levels" },
              { x: "50%", y: "50%", label: "03", name: "Debunking Myths" },
              { x: "75.55%", y: "26.67%", label: "04", name: "Sacred Qualities" },
              { x: "94.44%", y: "50%", label: "05", name: "T.R.A.I.N. Method" }
            ].map((node, i) => {
              const isSelected = activeStep === i;
              const isCompleted = i <= activeStep;
              return (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10"
                  style={{ left: node.x, top: node.y }}
                >
                  <motion.div 
                    animate={{
                      scale: isSelected ? 1.15 : 1,
                      backgroundColor: isCompleted ? "#c0942c" : "#ffffff",
                      borderColor: isCompleted ? "#c0942c" : "#dfdbc9",
                      color: isCompleted ? "#ffffff" : "#072a3a"
                    }}
                    transition={{ duration: 0.4 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-bold text-xs border relative shadow-sm`}
                  >
                    {isSelected && (
                      <span className="absolute inset-0 rounded-full bg-[#c0942c]/25 animate-ping" />
                    )}
                    {node.label}
                  </motion.div>
                  <span className={`text-[11px] font-serif font-bold mt-2 whitespace-nowrap transition-colors ${
                    isCompleted ? 'text-[#c0942c]' : 'text-ocean-light group-hover:text-ocean'
                  }`}>
                    {node.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* The Interactive Road Map Container */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
          
          {/* Left: Interactive Vertical Milestones (Stepper representation of the Road) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {roadSteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                    isSelected 
                      ? 'bg-white border-[#c0942c] shadow-md ring-1 ring-[#c0942c]/20' 
                      : 'bg-white/60 border-[#dfdbc9]/50 hover:bg-white hover:border-[#c0942c]/40'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-mono font-bold text-xs ${
                    isSelected ? 'bg-ocean text-white' : 'bg-cream text-ocean-light'
                  }`}>
                    0{idx + 1}
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono tracking-widest text-[#c0942c] uppercase font-bold block">{step.step}</span>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-ocean-dark leading-tight">{step.title}</h4>
                    <p className="text-[11px] text-ocean-light/75 font-light truncate max-w-xs">{step.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Step Box Display */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-[#dfdbc9]/65 rounded-[2.5rem] p-6 md:p-8 shadow-md relative overflow-hidden text-left h-full"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-soft/10 to-transparent rounded-bl-[2.5rem] pointer-events-none" />
                
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#fcf6e8] border border-[#c0942c]/20 flex items-center justify-center">
                    {roadSteps[activeStep].icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#c0942c] font-bold tracking-widest uppercase block">
                      {roadSteps[activeStep].step} — THE CORE PATHWAY
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#072a3a] leading-tight">
                      {roadSteps[activeStep].title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-sage italic font-light pb-4 border-b border-[#dfdbc9]/20 mb-6">
                  {roadSteps[activeStep].subtitle}
                </p>

                {/* Conditional Rendering based on selected step */}
                {activeStep === 0 && (
                  <div className="space-y-4.5">
                    {roadSteps[0].bullets?.map((bullet, idx) => (
                      <div key={idx} className="space-y-1 text-left">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-soft" />
                          <h4 className="font-serif text-xs md:text-sm font-bold text-[#1f3c4c]">{bullet.title}</h4>
                        </div>
                        <p className="text-xs text-ocean-light/90 pl-3.5 font-light leading-relaxed">{bullet.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {roadSteps[1].levels?.map((level, idx) => (
                      <div key={idx} className="p-3.5 bg-cream/30 border border-[#dfdbc9]/30 rounded-xl text-left space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-mono font-bold text-ocean-light">LEVEL 0{idx + 1}</span>
                          <span className="text-[9px] font-bold text-[#c0942c]">✦</span>
                        </div>
                        <h4 className="font-serif text-xs md:text-sm font-bold text-ocean">{level.label}</h4>
                        <p className="text-[10.5px] text-ocean-light/85 font-light leading-relaxed">{level.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-4">
                    {roadSteps[2].myths?.map((myth, idx) => (
                      <div key={idx} className="p-4 bg-red-50/25 border border-red-100 rounded-xl text-left flex gap-3 items-start">
                        <AlertCircle className="w-4.5 h-4.5 text-red-400 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <h4 className="text-xs md:text-sm font-bold text-red-950 font-serif line-through decoration-red-500/50">" {myth.myth} "</h4>
                          <p className="text-[11px] text-ocean-light/90 leading-relaxed font-light">
                            <span className="font-bold text-emerald-700">TRUTH:</span> {myth.truth}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {roadSteps[3].qualities?.map((quality, idx) => (
                      <div 
                        key={idx} 
                        className={`p-2.5 bg-emerald-50/15 border border-emerald-100/50 rounded-xl text-left ${
                          idx === 6 ? 'sm:col-span-2' : ''
                        }`}
                      >
                        <h4 className="text-xs md:text-sm font-serif font-bold text-emerald-950 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c0942c]" />
                          {quality.name}
                        </h4>
                        <p className="text-[10.5px] text-ocean-light/90 leading-relaxed font-light mt-0.5">{quality.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeStep === 4 && (
                  <div className="space-y-3.5">
                    {roadSteps[4].train?.map((item, idx) => (
                      <div key={idx} className="flex gap-3 items-start p-2.5 hover:bg-purple-50/10 rounded-xl transition-all">
                        <div className="w-7 h-7 rounded-lg bg-purple-100/60 flex items-center justify-center shrink-0 font-serif font-bold text-sm text-purple-900 shadow-inner">
                          {item.letter}
                        </div>
                        <div className="space-y-0.5 text-left">
                          <h4 className="font-serif text-xs md:text-sm font-bold text-purple-950">{item.term}</h4>
                          <p className="text-[11px] text-ocean-light leading-relaxed font-light">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 6. EVERYTHING INCLUDED SECTION */}
      <section id="included" className="py-16 md:py-20 px-6 max-w-6xl mx-auto border-t border-[#dfdbc9]/30">
        <div className="text-center space-y-3 mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-[#072a3a] font-medium tracking-tight">
            Everything Included
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-[1px] bg-[#c0942c]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#c0942c]" />
            <div className="w-10 h-[1px] bg-[#c0942c]/40" />
          </div>
          <p className="text-xs md:text-sm text-sage italic font-light max-w-xl mx-auto">
            Everything you need to become a confident, successful and high-impact trainer.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {[
            { name: "Live Workshop", icon: <Users className="w-5 h-5 text-blue-600" />, desc: "Interactive training cohorts" },
            { name: "Workbook", icon: <FileText className="w-5 h-5 text-amber-600" />, desc: "Structured self-reflection" },
            { name: "Trainer Manual", icon: <BookOpen className="w-5 h-5 text-red-600" />, desc: "The ultimate program blueprint" },
            { name: "Training Templates", icon: <FileText className="w-5 h-5 text-purple-600" />, desc: "Ready-to-use slide decks" },
            { name: "Session Planner", icon: <Compass className="w-5 h-5 text-emerald-600" />, desc: "Structure your private hours" },
            { name: "Activities Library", icon: <Brain className="w-5 h-5 text-sky-600" />, desc: "Icebreakers & active triggers" },
            { name: "Certificate", icon: <Award className="w-5 h-5 text-yellow-600" />, desc: "Accredited master credentials" },
            { name: "AI Prompt Pack", icon: <Sparkles className="w-5 h-5 text-violet-600" />, desc: "Speed run program design" },
            { name: "Private Community", icon: <MessageSquare className="w-5 h-5 text-pink-600" />, desc: "Lifetime healing support" },
            { name: "Bonus Resources", icon: <Gift className="w-5 h-5 text-teal-600" />, desc: "Surprises and tool expansion" }
          ].map((item, idx) => {
            const isHovered = hoveredIncluded === idx;
            return (
              <div 
                key={idx} 
                onMouseEnter={() => setHoveredIncluded(idx)}
                onMouseLeave={() => setHoveredIncluded(null)}
                className="bg-[#FAF9F5] border border-[#dfdbc9]/50 p-4 rounded-2xl text-center flex flex-col justify-center items-center gap-2.5 relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-[#c0942c]/40 cursor-pointer h-48"
              >
                {/* Tactical Page Turn or Stack Fan-Out Simulation */}
                {isHovered && item.name === "Workbook" && (
                  <div className="absolute inset-x-3.5 top-3.5 bottom-12 bg-white border border-[#dfdbc9]/60 rounded-lg shadow-inner p-1.5 flex gap-1 animate-fadeIn">
                    <div className="w-1/2 h-full border-r border-[#dfdbc9]/30 bg-[#faf8f5] rounded-l p-1 flex flex-col justify-between text-left">
                      <div className="w-full h-1 bg-[#dfdbc9] rounded" />
                      <div className="w-3/4 h-1 bg-[#dfdbc9]/60 rounded" />
                      <div className="w-1/2 h-1 bg-[#dfdbc9]/60 rounded" />
                    </div>
                    <div className="w-1/2 h-full bg-[#faf8f5] rounded-r p-1 flex flex-col justify-between text-left relative overflow-hidden">
                      {/* Dynamic page curl fold effect */}
                      <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-gradient-to-bl from-[#dfdbc9] to-white shadow-sm rounded-bl" />
                      <div className="w-full h-1 bg-[#dfdbc9] rounded" />
                      <div className="w-2/3 h-1 bg-[#dfdbc9]/60 rounded" />
                      <div className="w-4/5 h-1 bg-[#dfdbc9]/60 rounded" />
                    </div>
                  </div>
                )}

                {isHovered && item.name === "Training Templates" && (
                  <div className="absolute inset-x-3.5 top-3.5 bottom-12 flex items-center justify-center animate-fadeIn">
                    {/* Layer stack fan-out */}
                    <div className="absolute w-20 h-14 bg-[#072a3a]/10 border border-[#dfdbc9] rounded-lg shadow-sm transform -rotate-6 -translate-x-3 -translate-y-1" />
                    <div className="absolute w-20 h-14 bg-[#c0942c]/10 border border-[#dfdbc9] rounded-lg shadow-sm transform rotate-6 translate-x-3 translate-y-1" />
                    <div className="absolute w-20 h-14 bg-white border border-[#c0942c]/30 rounded-lg shadow-md flex items-center justify-center">
                      <div className="w-10 h-1 bg-[#c0942c]/30 rounded-full" />
                    </div>
                  </div>
                )}

                {isHovered && item.name === "Session Planner" && (
                  <div className="absolute inset-x-3.5 top-3.5 bottom-12 bg-white border border-[#dfdbc9]/50 rounded-lg p-1.5 flex flex-col gap-1 justify-between animate-fadeIn">
                    <div className="grid grid-cols-4 gap-1 flex-1">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className={`rounded-sm border ${i === 3 || i === 6 ? 'bg-[#c0942c]/20 border-[#c0942c]/40' : 'bg-[#faf8f5] border-[#dfdbc9]/40'}`} />
                      ))}
                    </div>
                    <div className="w-full h-1 bg-[#072a3a]/25 rounded-full" />
                  </div>
                )}

                {isHovered && item.name === "Live Workshop" && (
                  <div className="absolute inset-x-3.5 top-3.5 bottom-12 flex items-center justify-center gap-1.5 animate-fadeIn">
                    {[...Array(3)].map((_, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ scale: 0.7, opacity: 0 }} 
                        animate={{ scale: 1, opacity: 1 }} 
                        transition={{ delay: i * 0.1 }}
                        className="w-6 h-6 rounded-full bg-cream border border-[#c0942c]/30 flex items-center justify-center text-[9px] font-mono text-[#c0942c]"
                      >
                        👤
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Normal Content showing when NOT hovered (or for other types) */}
                {(!isHovered || (item.name !== "Workbook" && item.name !== "Training Templates" && item.name !== "Session Planner" && item.name !== "Live Workshop")) && (
                  <>
                    <motion.div 
                      animate={{ 
                        y: isHovered ? -5 : 0,
                        scale: isHovered ? 1.05 : 1
                      }}
                      className="w-10 h-10 rounded-full bg-cream/40 border border-[#dfdbc9]/20 flex items-center justify-center shadow-sm relative z-10"
                    >
                      {item.icon}
                      {isHovered && item.name === "Certificate" && (
                        <span className="absolute inset-0 rounded-full border-2 border-[#c0942c] animate-ping opacity-75" />
                      )}
                    </motion.div>
                    <div className="space-y-0.5">
                      <h4 className="font-serif text-xs md:text-sm font-bold text-ocean-dark leading-tight">{item.name}</h4>
                      <p className="text-[10px] text-ocean-light/75 font-light leading-snug px-1">{item.desc}</p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. WHY LEARN FROM US SECTION */}
      <section className="py-16 md:py-20 px-6 bg-[#FAF9C8]/10 border-t border-[#dfdbc9]/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-teal-soft/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center space-y-3 mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-[#072a3a] font-medium tracking-tight">
              Why Learn From Us?
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-[#c0942c]/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c0942c]" />
              <div className="w-12 h-[1px] bg-[#c0942c]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Activity Based Learning", desc: "No passive lectures. Participate in dynamic activities that imprint learning points deep in your muscular and somatic memory." },
              { title: "Hands-on Practice", desc: "Lead real facilitation segments during active program modules and receive constructive, compassionate feedback from masters." },
              { title: "Ready-to-Use Frameworks", desc: "Skip starting from blank files. Deploy our copy-paste templates, diagnostic scripts, and structural slides immediately." },
              { title: "Lifetime Skill", desc: "These communication, coaching, and facilitation skillsets remain with you forever, raising your value in any room." },
              { title: "Practical Assignments", desc: "Complete actual, highly-practical assignments that mimic live situations, preparing you for real clients." },
              { title: "Industry Ready", desc: "Crafted directly to match corporate resilience, soft skills, wellness workshops, and public coaching high standards." },
              { title: "Certification", desc: "Earn highly respected, accredited certifications showing your professional status as a Master Trainer." },
              { title: "Community", desc: "Gain secure entry to our private healing practitioner community for lifelong integration, masterminding, and sharing jobs." }
            ].map((adv, idx) => (
              <div key={idx} className="bg-white border border-[#dfdbc9]/40 p-6 rounded-2xl text-left space-y-2 hover:shadow-md hover:border-teal-soft/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-[#fcf6e8] flex items-center justify-center font-mono font-bold text-xs text-[#c0942c]">
                  {idx + 1}
                </div>
                <h3 className="font-serif text-sm sm:text-base font-bold text-ocean-dark leading-tight pt-1">{adv.title}</h3>
                <p className="text-[11.5px] text-ocean-light leading-relaxed font-light">{adv.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. YOUR TRANSFORMATION SECTION (SECTION 11) */}
      <section className="py-16 md:py-20 px-6 max-w-4xl mx-auto border-t border-[#dfdbc9]/30">
        <div className="text-center space-y-3 mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-[#072a3a] font-medium tracking-tight">
            Your Transformation Journey
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-[1px] bg-[#c0942c]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#c0942c]" />
            <div className="w-10 h-[1px] bg-[#c0942c]/40" />
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-10">
          <div className="bg-cream/50 border border-[#dfdbc9]/50 p-1 rounded-full flex gap-1 shadow-inner">
            <button
              onClick={() => setActiveTab('before')}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest cursor-pointer transition-all duration-300 ${
                activeTab === 'before' ? 'bg-red-500 text-white shadow-sm' : 'text-ocean-light hover:text-ocean'
              }`}
            >
              The BEFORE State
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest cursor-pointer transition-all duration-300 ${
                activeTab === 'after' ? 'bg-emerald-600 text-white shadow-sm' : 'text-ocean-light hover:text-ocean'
              }`}
            >
              The AFTER State
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'before' ? (
            <motion.div
              key="before"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-red-50/15 border border-red-100 rounded-[2rem] p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-5 text-left shadow-sm"
            >
              {[
                { title: "Nervous", desc: "Fear of public speaking, stumbling, or freeze response." },
                { title: "Confused", desc: "No clarity on which niche aligns with your true purpose." },
                { title: "No Clients", desc: "Struggling to attract serious high-value interest." },
                { title: "No Structure", desc: "Overwhelming information without linear logical flow." },
                { title: "Low Confidence", desc: "Imposter syndrome and chronic self-doubt." },
                { title: "No Direction", desc: "Unsure of exact pricing, marketing, or positioning." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-red-50 shadow-inner space-y-1.5 flex flex-col justify-start">
                  <div className="flex items-center gap-1.5 text-red-500">
                    <AlertCircle className="w-4.5 h-4.5" />
                    <h4 className="font-serif text-sm font-bold">{item.title}</h4>
                  </div>
                  <p className="text-[11px] text-ocean-light font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="after"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-emerald-50/15 border border-emerald-100 rounded-[2rem] p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-left shadow-sm"
            >
              {[
                { title: "Professional Trainer", desc: "Accredited master facilitator who commands any room with absolute ease." },
                { title: "Confident Speaker", desc: "Articulate, calm speaker who channels clarity under somatic regulation." },
                { title: "Recognized Expert", desc: "Highly positioned authority whom clients trust and pay premium retainers." },
                { title: "Workshop Creator", desc: "Original masterclass designer who turns wisdom into high-impact courses." },
                { title: "Coach", desc: "Somatic, trauma-informed master guiding others safely toward breakthroughs." },
                { title: "Thought Leader", desc: "Pioneer in your sacred niche, changing paradigms with raw authenticity." },
                { title: "Multiple Income Streams", desc: "Earning from premium private packages, group retreats, and corporate wellness contracts." }
              ].map((item, idx) => (
                <div key={idx} className={`bg-white p-4 rounded-2xl border border-emerald-50 shadow-inner space-y-1.5 flex flex-col justify-start ${
                  idx === 6 ? 'sm:col-span-2' : ''
                }`}>
                  <div className="flex items-center gap-1.5 text-emerald-600">
                    <CheckCircle2 className="w-4.5 h-4.5" />
                    <h4 className="font-serif text-xs md:text-sm font-bold">{item.title}</h4>
                  </div>
                  <p className="text-[10.5px] text-ocean-light font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 9. THIS PROGRAM IS PERFECT FOR SECTION */}
      <section id="perfect-for" className="py-16 md:py-20 px-6 max-w-5xl mx-auto border-t border-[#dfdbc9]/30">
        <div className="text-center space-y-3 mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-[#072a3a] font-medium tracking-tight">
            This Program Is Perfect For
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-[1px] bg-[#c0942c]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#c0942c]" />
            <div className="w-10 h-[1px] bg-[#c0942c]/40" />
          </div>
        </div>

        {/* Dynamic Demographic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { title: "Professionals", insight: "Translates dry analytical data into high-resonance somatic storytelling to command executive presence." },
            { title: "Teachers", insight: "Reinvent pedagogy through somatic sound integration, turning passive classroom environments into high-impact learning spaces." },
            { title: "Professors", insight: "Elevates technical lectures into immersive, somatic group facilitations that imprint knowledge permanently." },
            { title: "Coaches", insight: "Transition from basic per-hour sessions to high-ticket transformational programs with deep clinical-level safety." },
            { title: "Healers", insight: "Provides the robust curriculum architecture needed to turn intuitive gifts into premium accredited courses." },
            { title: "Reiki Practitioners", insight: "Integrates sacred space holding with trauma-informed biology, boosting facilitator credibility." },
            { title: "Psychologists", insight: "Bridges clinical psychological safety with active somatic expression and breath release frameworks." },
            { title: "Doctors", insight: "Integrates physical wellness wisdom into scalable, high-impact group preventative training structures." },
            { title: "HR Professionals", insight: "Enables the internal development of somatic resilience programs to combat workplace fatigue." },
            { title: "Consultants", insight: "Positions custom analytical methodologies as elite, highly authoritative advisory certifications." },
            { title: "Entrepreneurs", insight: "Master public alignment and vocal authority to magnetize clients and align team operations." },
            { title: "Content Creators", insight: "Bridges digital influence with real-time, physical space holding that commands premium prices." },
            { title: "College Students", insight: "Gain a lifetime master skill in human communication and psychological facilitation early on." },
            { title: "Homemakers", insight: "Reclaim personal sovereign voice and launch a flexible, high-income healing/mentorship practice." },
            { title: "Aspiring Trainers", insight: "Provides the exact step-by-step blueprint to build and accredit your very first academy." }
          ].map((profile, idx) => {
            const isSelected = selectedAudienceIdx === idx;
            return (
              <button 
                key={idx} 
                onMouseEnter={() => setSelectedAudienceIdx(idx)}
                onClick={() => setSelectedAudienceIdx(idx)}
                className={`bg-white border p-4.5 rounded-xl text-center shadow-sm flex items-center justify-center transition-all duration-300 cursor-pointer text-xs font-serif font-bold ${
                  isSelected 
                    ? 'border-[#c0942c] bg-amber-50/20 text-[#c0942c] scale-102 shadow-md ring-2 ring-[#c0942c]/15' 
                    : 'border-[#dfdbc9]/40 text-ocean-dark hover:border-[#c0942c]/50 hover:bg-[#FAF9F5]'
                } ${
                  idx === 14 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <span>{profile.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Demographic Insight Panel */}
        <div className="mt-8 max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedAudienceIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-[#dfdbc9]/55 p-6 rounded-2xl shadow-sm text-center space-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#c0942c]" />
              <span className="text-[10px] font-mono tracking-widest text-[#c0942c] uppercase font-bold block">
                ALCHEMICAL APPLICATION FOR DEMOGRAPHIC:
              </span>
              <h4 className="font-serif text-base font-bold text-ocean-dark">
                {[
                  "Professionals", "Teachers", "Professors", "Coaches", "Healers",
                  "Reiki Practitioners", "Psychologists", "Doctors", "HR Professionals", "Consultants",
                  "Entrepreneurs", "Content Creators", "College Students", "Homemakers", "Aspiring Trainers"
                ][selectedAudienceIdx]}
              </h4>
              <p className="text-xs sm:text-sm text-sage italic font-light leading-relaxed">
                {[
                  "Translates dry analytical data into high-resonance somatic storytelling to command executive presence.",
                  "Reinvent pedagogy through somatic sound integration, turning passive classroom environments into high-impact learning spaces.",
                  "Elevates technical lectures into immersive, somatic group facilitations that imprint knowledge permanently.",
                  "Transition from basic per-hour sessions to high-ticket transformational programs with deep clinical-level safety.",
                  "Provides the robust curriculum architecture needed to turn intuitive gifts into premium accredited courses.",
                  "Integrates sacred space holding with trauma-informed biology, boosting facilitator credibility.",
                  "Bridges clinical psychological safety with active somatic expression and breath release frameworks.",
                  "Integrates physical wellness wisdom into scalable, high-impact group preventative training structures.",
                  "Enables the internal development of somatic resilience programs to combat workplace fatigue.",
                  "Positions custom analytical methodologies as elite, highly authoritative advisory certifications.",
                  "Master public alignment and vocal authority to magnetize clients and align team operations.",
                  "Bridges digital influence with real-time, physical space holding that commands premium prices.",
                  "Gain a lifetime master skill in human communication and psychological facilitation early on.",
                  "Reclaim personal sovereign voice and launch a flexible, high-income healing/mentorship practice.",
                  "Provides the exact step-by-step blueprint to build and accredit your very first academy."
                ][selectedAudienceIdx]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 10. SUCCESS STORIES (SECTION 12) */}
      <section id="success" className="py-16 md:py-20 px-6 bg-[#faf8f3] border-t border-[#dfdbc9]/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center space-y-3 mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-[#072a3a] font-medium tracking-tight">
              Our Success Stories
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-[#c0942c]/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#c0942c]" />
              <div className="w-12 h-[1px] bg-[#c0942c]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            {/* Visual Portal (Fanning Graduates) */}
            <div className="lg:col-span-7 bg-white/40 border border-[#dfdbc9]/30 rounded-[2.5rem] p-8 h-[380px] flex items-center justify-center relative overflow-hidden shadow-sm">
              <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
                backgroundImage: `radial-gradient(circle, #0a3d54 1.5px, transparent 1.5px)`,
                backgroundSize: '20px 20px'
              }} />
              
              {/* Connected Line Paths to graduates */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none">
                {/* Line to 1 (left node) */}
                <path d="M 330 190 L 120 110" stroke="#dfdbc9" strokeWidth="2" className="opacity-40" />
                {activeGraduateIdx === 0 && <path d="M 330 190 L 120 110" stroke="#c0942c" strokeWidth="2.5" strokeDasharray="6 6" className="animate-path-glow" />}

                {/* Line to 2 (top node) */}
                <path d="M 330 190 L 330 60" stroke="#dfdbc9" strokeWidth="2" className="opacity-40" />
                {activeGraduateIdx === 1 && <path d="M 330 190 L 330 60" stroke="#c0942c" strokeWidth="2.5" strokeDasharray="6 6" className="animate-path-glow" />}

                {/* Line to 3 (right node) */}
                <path d="M 330 190 L 540 110" stroke="#dfdbc9" strokeWidth="2" className="opacity-40" />
                {activeGraduateIdx === 2 && <path d="M 330 190 L 540 110" stroke="#c0942c" strokeWidth="2.5" strokeDasharray="6 6" className="animate-path-glow" />}
              </svg>

              {/* Central Alchemical Academy Portal */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-[#072a3a] to-teal-dark border border-[#c0942c]/40 flex flex-col items-center justify-center text-center shadow-2xl z-20">
                <span className="text-[7px] font-mono tracking-widest text-[#c0942c] font-bold">ALCHEMICAL</span>
                <span className="text-[9px] font-serif text-white font-semibold">ACADEMY</span>
                <div className="absolute inset-0 rounded-full border-4 border-white/5 animate-pulse" />
              </div>

              {/* Graduate Fanned Nodes */}
              {/* Graduate 1 (Left) */}
              <button 
                onClick={() => setActiveGraduateIdx(0)}
                className="absolute left-12 top-16 group flex flex-col items-center cursor-pointer z-20"
              >
                <div className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                  activeGraduateIdx === 0 ? "border-[#c0942c] ring-4 ring-[#c0942c]/20 scale-110" : "border-[#dfdbc9] group-hover:border-[#c0942c] scale-100"
                }`}>
                  <SmartImage id="traintrainer.alumni_1" defaultSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300" alt="Anjali Sharma" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <span className="text-[10px] font-serif font-bold mt-1.5 text-ocean-dark">Anjali S.</span>
              </button>

              {/* Graduate 2 (Top Center) */}
              <button 
                onClick={() => setActiveGraduateIdx(1)}
                className="absolute left-1/2 -translate-x-1/2 top-6 group flex flex-col items-center cursor-pointer z-20"
              >
                <div className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                  activeGraduateIdx === 1 ? "border-[#c0942c] ring-4 ring-[#c0942c]/20 scale-110" : "border-[#dfdbc9] group-hover:border-[#c0942c] scale-100"
                }`}>
                  <SmartImage id="traintrainer.alumni_2" defaultSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300" alt="Dr. Vikram Mehta" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <span className="text-[10px] font-serif font-bold mt-1.5 text-ocean-dark">Dr. Vikram</span>
              </button>

              {/* Graduate 3 (Right) */}
              <button 
                onClick={() => setActiveGraduateIdx(2)}
                className="absolute right-12 top-16 group flex flex-col items-center cursor-pointer z-20"
              >
                <div className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                  activeGraduateIdx === 2 ? "border-[#c0942c] ring-4 ring-[#c0942c]/20 scale-110" : "border-[#dfdbc9] group-hover:border-[#c0942c] scale-100"
                }`}>
                  <SmartImage id="traintrainer.alumni_3" defaultSrc="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=300" alt="Rhea Nair" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <span className="text-[10px] font-serif font-bold mt-1.5 text-ocean-dark">Rhea N.</span>
              </button>
            </div>

            {/* Dynamic Details Card */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGraduateIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-[#dfdbc9]/40 p-6 rounded-[2rem] shadow-sm space-y-5"
                >
                  <div className="flex items-center gap-4.5">
                    <SmartImage 
                      id={`traintrainer.alumni_${activeGraduateIdx + 1}`}
                      defaultSrc={
                        activeGraduateIdx === 0 
                          ? "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300"
                          : activeGraduateIdx === 1
                          ? "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300"
                          : "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=300"
                      } 
                      alt="Graduate Profile" 
                      className="w-14 h-14 rounded-full object-cover border border-[#dfdbc9]/50 shadow-inner"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-serif text-base font-bold text-ocean-dark leading-tight">
                        {activeGraduateIdx === 0 ? "Anjali Sharma" : activeGraduateIdx === 1 ? "Dr. Vikram Mehta" : "Rhea Nair"}
                      </h4>
                      <p className="text-[11px] text-[#c0942c] font-medium">
                        {activeGraduateIdx === 0 ? "Corporate Executive to Leadership Coach" : activeGraduateIdx === 1 ? "Healer & Reiki Master" : "Yoga Teacher & Content Creator"}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-ocean-light leading-relaxed font-light italic bg-cream/25 p-4 rounded-xl border border-[#dfdbc9]/20">
                    "{activeGraduateIdx === 0 
                      ? "The T.R.A.I.N framework was a lifesaver. I went from being extremely nervous when speaking in corporate boardrooms to confidently hosting high-impact retreats for 50+ executives." 
                      : activeGraduateIdx === 1 
                      ? "I had certifications, but zero structure. I didn't know how to monetize my healing wisdom. In the Master Trainer Programme, I learned step-by-step program design." 
                      : "My biggest myth was needing thousands of followers. Heer proved that authentic high-resonance positioning is what actually converts. I launched my workshop on emotional freedom filling it on Day 1."
                    }"
                  </p>

                  <div className="space-y-3.5 pt-2 border-t border-[#dfdbc9]/20">
                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="font-mono text-ocean-light uppercase">Niche Focus:</span>
                      <span className="font-serif font-bold text-ocean-dark">
                        {activeGraduateIdx === 0 ? "Executive Somatic Integration" : activeGraduateIdx === 1 ? "Accredited Reiki Facilitation" : "Emotional Freedom Somatic Flow"}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="font-mono text-ocean-light uppercase">Subconscious Breakthrough:</span>
                      <span className="font-serif font-bold text-ocean-dark text-right max-w-xs leading-tight">
                        {activeGraduateIdx === 0 ? "Quiet Authority without slides" : activeGraduateIdx === 1 ? "Linear Somatic blueprint mapping" : "True authentic soul-level trust"}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-[10.5px]">
                      <span className="font-mono text-ocean-light uppercase">Resonant Frequency:</span>
                      <span className="font-mono font-bold text-[#c0942c]">
                        {activeGraduateIdx === 0 ? "Alpha Command (8.5 Hz)" : activeGraduateIdx === 1 ? "Somatic Grounding (5.2 Hz)" : "Heart Resonant (7.8 Hz)"}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between bg-emerald-50/40 border border-emerald-100 rounded-xl px-4 py-2.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                      {activeGraduateIdx === 0 ? "Hosted 4 Corporate Workshops in 3 Months" : activeGraduateIdx === 1 ? "Launched Signature Healing Academy" : "100% Sold Out First Group Workshop"}
                    </span>
                    <div className="flex gap-0.5 text-[#c0942c] text-[10px]">
                      ✦ ✦ ✦
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      {/* 11. CALL TO ACTION BANNER */}
      <section id="apply" className="py-16 md:py-20 bg-[#041a24] text-cream relative overflow-hidden border-t border-white/10 mx-6 rounded-[2.5rem] shadow-xl" style={{
        backgroundImage: `url('${getSrc('traintrainer.cta_bg', 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1600')}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-[#041c26]/90 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041a24] via-transparent to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center space-y-6">
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#c0942c] uppercase block">
            LIMITED INTAKE COHORT
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight">
            Ready to design your legacy and<br />
            <span className="italic text-[#c0942c] font-medium">Teach Professionally?</span>
          </h3>
          
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-[#c0942c]/40" />
            <Sparkles className="w-5 h-5 text-[#c0942c] animate-pulse" />
            <div className="w-12 h-[1px] bg-[#c0942c]/40" />
          </div>

          <p className="text-xs md:text-base text-cream/80 max-w-2xl mx-auto leading-relaxed font-light italic">
            "Your wisdom deserves an audience. Take the first step today and step fully into your divine power as a Master Facilitator."
          </p>

          <div className="pt-6 relative flex flex-col items-center w-full">
            {/* Somatic Breathing Circle (Halo behind button) */}
            <motion.div 
              animate={{
                scale: [1, 1.45, 1.45, 1],
                opacity: [0.15, 0.4, 0.4, 0.15]
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-48 h-48 rounded-full border-2 border-[#c0942c]/45 bg-[#c0942c]/5 pointer-events-none z-0"
            />
            
            {/* Secondary wider breathing ring */}
            <motion.div 
              animate={{
                scale: [1, 1.75, 1.75, 1],
                opacity: [0.05, 0.2, 0.2, 0.05]
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.9
              }}
              className="absolute w-48 h-48 rounded-full border border-teal-soft/30 pointer-events-none z-0"
            />

            {/* Premium Action Button with drawing border line */}
            <button
              onClick={() => onBook("Master Trainer Certification")}
              className="relative overflow-hidden px-10 py-5 bg-[#869b62] hover:bg-[#768a54] text-white rounded-xl font-sans font-bold tracking-wider text-sm md:text-base flex items-center justify-center gap-3.5 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 uppercase group z-10 cursor-pointer"
            >
              {/* Gold drawing continuous border pathways (drawn as absolute SVG overlay) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.rect
                  x="0.5"
                  y="0.5"
                  width="99"
                  height="99"
                  rx="11"
                  fill="none"
                  stroke="#c0942c"
                  strokeWidth="2.5"
                  strokeDasharray="40 120"
                  animate={{
                    strokeDashoffset: [0, 160]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </svg>

              <span className="relative z-10">Apply & Book Interview</span>
              <svg className="w-5 h-5 text-white/95 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21C12 21 19 17 19 12C19 9.5 17.5 7.5 15 7C14.5 5.5 13.5 4 12 3C10.5 4 9.5 5.5 9 7C6.5 7.5 5 9.5 5 12C5 17 12 21 12 21Z" />
                <path d="M12 21C12 21 15.5 17 15.5 12C15.5 10 14.5 8 12 6.5C9.5 8 8.5 10 8.5 12C8.5 17 12 21 12 21Z" />
                <path d="M12 21V6.5" />
              </svg>
            </button>

            {/* Somatic breathing synchronizer message */}
            <span className="text-[9px] font-mono tracking-widest text-[#c0942c] uppercase font-bold mt-12 relative z-10 animate-pulse">
              Match your breath with the circular aura before applying
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
