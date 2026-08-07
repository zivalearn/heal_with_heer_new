import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Calendar,
  Heart,
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  MessageSquare,
  Globe,
  ChevronDown,
  Check,
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  Compass,
  Flame,
  Eye,
  ShieldCheck,
  Hourglass,
  Star,
  BookOpen,
  Crown
} from 'lucide-react';

import HealLogo from './components/HealLogo';
import BookingModal from './components/BookingModal';
import LettersFromUniverseModal from './components/LettersFromUniverseModal';
import HealingModalities from './components/HealingModalities';
import WhatsAppFloat from './components/WhatsAppFloat';
import FloatingSymbols from './components/FloatingSymbols';
import WatercolorStatCircle from './components/WatercolorStatCircle';
import ModalityImage from './components/ModalityImage';
import { TreeOfLifeScene } from './components/TreeOfLifeScene';
import { HealingAffirmation } from './components/HealingAffirmation';

import heroBg from '@/assets/hero_bg.jpeg';
import heroBgMobile from '@/assets/hero_bg_mobile.jpeg';

import { ImageProvider } from './context/ImageContext';
import { SmartImage } from './components/SmartImage';
import { ImageUploadModal } from './components/admin/ImageUploadModal';
import { VisualEditToolbar } from './components/admin/VisualEditToolbar';
import { ImageManagementStudio } from './components/admin/ImageManagementStudio';

import NLPPage from './components/modalities/NLPPage';
import RelationshipPage from './components/modalities/RelationshipPage';
import TraumaPage from './components/modalities/TraumaPage';
import ReikiChakraPage from './components/modalities/ReikiChakraPage';
import HypnotherapyEFTPage from './components/modalities/HypnotherapyEFTPage';
import InnerChildPage from './components/modalities/InnerChildPage';
import TimelinePage from './components/modalities/TimelinePage';
import TarotPage from './components/modalities/TarotPage';
import TrainTrainerPage from './components/modalities/TrainTrainerPage';
import AboutPage from './components/modalities/AboutPage';
import OneOnOnePage from './components/modalities/OneOnOnePage';
import HealingQuizModal from './components/HealingQuizModal';
import AIQuizToggle from './components/AIQuizToggle';

// Statistical items
const STATS = [
  {
    value: '5000+',
    label: 'Healed Individuals',
    icon: 'people',
    color: 'teal'
  },
  {
    value: '100+',
    label: 'Workshops & Events',
    icon: 'calendar',
    color: 'teal'
  },
  {
    value: '75+',
    label: 'Awards',
    icon: 'heart',
    color: 'sage'
  },
  {
    value: '5+',
    label: 'Years Of Experience',
    icon: 'hourglass',
    color: 'sage'
  }
];

// Timeline process steps
const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Awareness',
    subtitle: 'Understand what you\'re feeling',
    description: 'Acknowledge the physical and emotional blocks without judgment, naming the heavy energies you currently carry.',
    color: 'teal'
  },
  {
    id: 2,
    title: 'Release',
    subtitle: 'Let go of what no longer serves',
    description: 'Somatic, vocal, and energetic purging of traumatic loops, past relationships, and intergenerational baggage.',
    color: 'sage'
  },
  {
    id: 3,
    title: 'Heal',
    subtitle: 'Nourish your mind, body & energy',
    description: 'Direct transmission of Usui Reiki and color pranas into vulnerable centers to trigger cellular restoration.',
    color: 'gold'
  },
  {
    id: 4,
    title: 'Realign',
    subtitle: 'Rebalance and reconnect',
    description: 'Recalibrate your 7 primary chakras and shift limiting subconscious beliefs to align with your highest timeline.',
    color: 'teal'
  },
  {
    id: 5,
    title: 'Rise',
    subtitle: 'Step into your power & live aligned',
    description: 'Emerge grounded and fully sovereign, ready to co-create a reality driven by your authentic soul purpose.',
    color: 'sage'
  }
];

const TESTIMONIALS_DATA = [
  {
    id: '1',
    name: 'Course Graduate',
    role: 'Verified Participant',
    quote: "I joined the Time Line Therapy course because I wanted to understand why I kept reacting to certain situations in the same way. I wasn't sure what to expect at first, but the sessions were easy to follow. It was a learning experience that I could actually apply in my everyday life.",
    rating: 5,
    imageUrl: ''
  },
  {
    id: '2',
    name: 'Course Graduate',
    role: 'Verified Participant',
    quote: "One of the things I appreciated most about this course was the balance between learning and practice. The sessions were interactive and encouraged everyone to participate. I left the course feeling more positive and more self-aware",
    rating: 5,
    imageUrl: ''
  },
  {
    id: '3',
    name: 'Course Graduate',
    role: 'Verified Participant',
    quote: "The best part of this course was how practical and genuine it felt. Instead of only talking about healing, we were given simple tools that could be used outside the classroom. The trainer was kind, approachable and made sure everyone felt included throughout the training. It was time well spent.",
    rating: 5,
    imageUrl: ''
  },
  {
    id: '4',
    name: 'Course Graduate',
    role: 'Verified Participant',
    quote: "This course was one of the best personal development trainings I have attended. The trainer created a friendly atmosphere where everyone felt comfortable learning and practising. The techniques were explained clearly, and every session added something valuable.",
    rating: 5,
    imageUrl: ''
  }
];

const HEALING_STEPS = [
  {
    title: "Awareness",
    description: "Awaken to your physical and emotional blocks.",
    imageUrl: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=300",
    colorClass: "text-[#3c727a]"
  },
  {
    title: "Release",
    description: "Gently let go of limiting trauma patterns.",
    imageUrl: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=300",
    colorClass: "text-[#538271]"
  },
  {
    title: "Heal",
    description: "Nourish cellular rest and vibrant energy.",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=300",
    colorClass: "text-[#4f7f85]"
  },
  {
    title: "Realign",
    description: "Rebalance chakras and align with your highest timeline.",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=300",
    colorClass: "text-[#5b8c66]"
  },
  {
    title: "Rise",
    description: "Emerge fully sovereign, radiant and transformed.",
    imageUrl: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=300",
    colorClass: "text-[#718c5e]"
  }
];

const LEFT_SLIDESHOW_TESTIMONIALS = [
  {
    quote: "I joined the Time Line Therapy course because I wanted to understand why I kept reacting to certain situations in the same way. I wasn't sure what to expect at first, but the sessions were easy to follow. It was a learning experience that I could actually apply in my everyday life.",
    name: "Course Graduate"
  },
  {
    quote: "One of the things I appreciated most about this course was the balance between learning and practice. The sessions were interactive and encouraged everyone to participate. I left the course feeling more positive and more self-aware",
    name: "Course Graduate"
  },
  {
    quote: "The best part of this course was how practical and genuine it felt. Instead of only talking about healing, we were given simple tools that could be used outside the classroom. The trainer was kind, approachable and made sure everyone felt included throughout the training. It was time well spent.",
    name: "Course Graduate"
  },
  {
    quote: "This course was one of the best personal development trainings I have attended. The trainer created a friendly atmosphere where everyone felt comfortable learning and practising. The techniques were explained clearly, and every session added something valuable.",
    name: "Course Graduate"
  },
  {
    quote: "I joined the Relationship Master Certification Program hoping to improve the way I communicate with the people around me. The course gave me practical tools that I could use in everyday conversations instead of just teaching theory. Now it has my life easier and happier ",
    name: "Course Graduate"
  },
  {
    quote: "I joined the Energy Healing and Cord Cutting course because I wanted to understand how to feel more balanced and emotionally lighter. The sessions were calm, practical and easy to follow. After completing the course, I noticed that I felt more peaceful, slept better and was able to let go of stress much more easily.",
    name: "Course Graduate"
  },
  {
    quote: "I joined the Tarot course because I wanted to learn more than just the meanings of the cards. The practice sessions helped me build confidence, and by the end of the course I was able to read the cards with much more clarity.",
    name: "Course Graduate"
  }
];

const RIGHT_SLIDESHOW_TESTIMONIALS = [
  {
    quote: "This Reiki Healing course exceeded my expectations. The trainer explained everything clearly and created a friendly space where everyone felt comfortable learning together. The practice sessions were the highlight of the course because they helped me understand the techniques much better. Since completing the training, I have become more mindful, more relaxed and much more confident in applying what I learned. I would happily recommend this course to anyone looking for genuine personal growth.",
    name: "Course Graduate"
  },
  {
    quote: "I enrolled in this course to work on my personal growth and I'm really happy with my decision. The training was well organised and every session included practical activities instead of just theory. I enjoyed the supportive atmosphere and never felt uncomfortable asking questions. Over time, I noticed positive changes in the way I think, communicate and deal with challenges. I would definitely recommend this course to anyone looking to improve themselves.",
    name: "Course Graduate"
  },
  {
    quote: "Before joining this course, I often overthought simple situations and found it difficult to communicate clearly. The NLP techniques were explained with real-life examples, which made them easy to remember and practise. I liked that every session focused on learning by doing instead of only listening. Over the next few weeks, I started noticing positive changes in the way I handled conversations and everyday challenges. I'm really glad I decided to take this course.",
    name: "Course Graduate"
  },
  {
    quote: "This course gave me a completely different perspective on emotional healing. Every session was well planned and focused on practical exercises rather than just theory. The trainer was patient, understanding and always willing to answer questions. I noticed that I became calmer, more emotionally aware and much better at handling situations that used to affect me deeply. I'm grateful I took this course and would recommend it to anyone looking to work on themselves.",
    name: "Course Graduate"
  },
  {
    quote: "Before enrolling, I had read about Hypnotherapy and EFT but never understood how they worked together. This course made everything clear through practical demonstrations and guided practice. The trainer was patient, supportive and always encouraged questions. I left every session with something new to apply in my personal life. Looking back, I feel more confident, more focused and much better at managing difficult situations than I was before the course.",
    name: "Course Graduate"
  },
  {
    quote: "Before attending this course, I often found it difficult to deal with misunderstandings in my personal relationships. The sessions helped me understand how small changes in communication can make a big difference. The learning environment was friendly and supportive, and everyone was encouraged to participate. I left the training feeling more confident, emotionally aware and much better prepared to build stronger connections with the people in my life.",
    name: "Course Graduate"
  },
  {
    quote: "Before attending this training, I had only read about energy healing and wasn't sure how it actually worked. The course explained everything in a simple and practical way without making it complicated. The activities helped me experience the techniques myself, which made a big difference. I left the training feeling more relaxed, more positive and much more confident about using what I had learned in my daily life.",
    name: "Course Graduate"
  }
];

const WatercolorStepRing = ({ colorClass, index }: { colorClass: string; index: number }) => {
  const rotationAngle = (index * 60) + 15;
  return (
    <svg viewBox="0 0 200 200" style={{ transform: `rotate(${rotationAngle}deg)` }} className="absolute inset-0 w-full h-full select-none pointer-events-none transition-transform duration-1000 group-hover:rotate-[180deg]">
      <g className={colorClass}>
        {/* Diluted wash aura */}
        <path
          d="M 100, 20 C 150, 18 182, 50 180, 100 C 178, 150 144, 180 98, 178 C 52, 176 20, 144 22, 98 C 24, 52 50, 22 100, 20 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="24"
          strokeLinecap="round"
          className="opacity-[0.15] blur-[4px]"
        />
        {/* Core paint stroke */}
        <path
          d="M 102, 24 C 144, 20 174, 52 172, 96 C 170, 140 140, 172 96, 168 C 52, 164 24, 132 28, 88 C 32, 44 60, 28 102, 24 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          className="opacity-[0.3] blur-[1px]"
        />
        {/* Dry brush accent */}
        <path
          d="M 94, 28 C 136, 26 164, 56 162, 98 C 160, 140 128, 164 88, 158 C 48, 152 30, 120 34, 78 C 38, 36 46, 32 94, 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="opacity-[0.4]"
          strokeDasharray="120 40 60 30"
        />
      </g>
    </svg>
  );
};

export function MainWebsiteContent() {
  // Navigation & Sub-Pages routing
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'one_one' | 'nlp' | 'relationship' | 'trauma' | 'reiki' | 'hypnotherapy' | 'innerchild' | 'timeline' | 'tarot' | 'traintrainer' | 'admin_images'>('home');

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#admin/images' || window.location.hash === '#admin' || window.location.pathname === '/admin/images') {
        setCurrentView('admin_images');
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    window.addEventListener('popstate', checkHash);
    return () => {
      window.removeEventListener('hashchange', checkHash);
      window.removeEventListener('popstate', checkHash);
    };
  }, []);

  // Booking modal controls
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preSelectedModality, setPreSelectedModality] = useState('');

  // Letters from the Universe Modal state
  const [isUniverseModalOpen, setIsUniverseModalOpen] = useState(false);

  // AI Healing & Transformation Quiz state
  const [isQuizOpen, setIsQuizOpen] = useState(true);

  // Slideshow indices for left and right columns
  const [leftTestimonialIdx, setLeftTestimonialIdx] = useState(0);
  const [rightTestimonialIdx, setRightTestimonialIdx] = useState(0);

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setLeftTestimonialIdx((prev) => (prev + 1) % LEFT_SLIDESHOW_TESTIMONIALS.length);
    }, 4500);

    const rightInterval = setInterval(() => {
      setRightTestimonialIdx((prev) => (prev + 1) % RIGHT_SLIDESHOW_TESTIMONIALS.length);
    }, 5000);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, []);

  // Mobile menu control
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Nav Dropdowns state
  const [activeDropdown, setActiveDropdown] = useState<'modalities' | 'resources' | null>(null);

  // Region state
  const [selectedRegion, setSelectedRegion] = useState('We are global');

  const triggerBooking = (_modalityName: string = '') => {
    const enrollmentUrl = 'https://healing-courses-3jvg.vercel.app/';
    const win = window.open(enrollmentUrl, '_blank', 'noopener,noreferrer');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = enrollmentUrl;
    }
  };

  const navigateToSection = (sectionId: string) => {
    setCurrentView('home');
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-ivory text-ocean font-sans relative overflow-x-hidden select-none">
      
      {/* 1. ANNOUNCEMENT BAR */}
      <div className="bg-ocean-dark text-cream text-[11px] md:text-xs py-2 px-6 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-gold-light/10 z-50 relative font-medium">
        <div className="flex items-center gap-2">
          {/* Custom micro lotus icon in announcement bar */}
          <svg className="w-3.5 h-3.5 text-gold animate-pulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C11.5 2 11 3 11 4.5C11 6.5 12 9 12 9C12 9 13 6.5 13 4.5C13 3 12.5 2 12 2M6 8C5.5 8 5 9.5 5 11C5 13 6.5 15 6.5 15C6.5 15 7.5 12.5 7.5 11C7.5 9.5 7 8 6 8M18 8C17 8 16.5 9.5 16.5 11C16.5 12.5 17.5 15 17.5 15C17.5 15 19 13 19 11C19 9.5 18.5 8 18 8M3 14C2.5 14 2 15.5 2 17C2 18.5 3.5 20 3.5 20C3.5 20 4.5 18 4.5 17C4.5 15.5 4 14 3 14M21 14C20 14 19.5 15.5 19.5 17C19.5 18 20.5 20 20.5 20C20.5 20 22 18.5 22 17C22 15.5 21.5 14 21 14Z" />
          </svg>
          <span className="tracking-wide">Heal your past, transform your present and design the life you truly deserve.</span>
        </div>
        
        <div className="flex items-center gap-5">
          {/* Region selector dropdown */}
          <div className="relative group cursor-pointer flex items-center gap-1.5 hover:text-gold transition-colors duration-200">
            <Globe className="w-3.5 h-3.5 text-teal-light" />
            <span>{selectedRegion}</span>
            <ChevronDown className="w-3 h-3 text-sage" />
            
            {/* Quick region selector list */}
            <div className="absolute right-0 top-6 bg-ocean-dark border border-gold-light/20 rounded-xl p-2 hidden group-hover:block w-40 shadow-xl z-50 text-left">
              {['We are global', 'Online Zoom', 'WhatsApp Direct', 'Sacred India Retreat'].map(region => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className="w-full text-left px-3 py-1.5 hover:bg-ocean rounded-lg text-[11px] transition-colors duration-200 block"
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          <div className="h-3 w-[1px] bg-gold-light/20 hidden sm:block" />

          {/* Social connections */}
          <div className="flex items-center gap-3.5 text-cream/80">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-200">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-200">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-200">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-200">
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION BAR */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gold-light/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Left: Beautiful Infinity Logo Component */}
          <button onClick={() => navigateToSection('hero-section')} className="flex items-center cursor-pointer">
            <HealLogo size="md" showText={true} />
          </button>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-semibold tracking-wide text-ocean-light">
            <button onClick={() => navigateToSection('hero-section')} className="hover:text-teal-soft transition-colors duration-200 font-semibold cursor-pointer">Home</button>
            <button onClick={() => { setCurrentView('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-teal-soft transition-colors duration-200 font-semibold cursor-pointer">About</button>
            <button onClick={() => { setCurrentView('one_one'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-teal-soft transition-colors duration-200 font-semibold cursor-pointer">1:1</button>
            
            {/* Interactive Modalities Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('modalities')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="hover:text-teal-soft transition-colors duration-200 flex items-center gap-1 cursor-pointer font-semibold">
                Courses <ChevronDown className="w-3.5 h-3.5 text-sage" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'modalities' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 bg-cream border border-gold-light/30 rounded-2xl p-4 w-72 shadow-xl z-50 text-left normal-case"
                  >
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-3 border-b border-gold-light/10 pb-2">Sacred Modalities</h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {[
                        { id: 'nlp', name: 'Neuro Linguistic Programming' },
                        { id: 'relationship', name: 'Relationship Mastery' },
                        { id: 'trauma', name: 'Trauma Healing' },
                        { id: 'reiki', name: 'Reiki Healing' },
                        { id: 'hypnotherapy', name: 'Hypnotherapy EFT' },
                        { id: 'innerchild', name: 'Energy Healing & Cord Cutting' },
                        { id: 'timeline', name: 'Timeline Therapy' },
                        { id: 'tarot', name: 'Tarot Reading Course' }
                      ].map(mod => (
                        <button
                          key={mod.id}
                          onClick={() => {
                            setActiveDropdown(null);
                            setCurrentView(mod.id as any);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="text-left text-xs font-medium text-ocean hover:text-teal-soft hover:translate-x-1 transition-all duration-200 flex items-center gap-2 w-full cursor-pointer"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-soft" />
                          {mod.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={() => { setCurrentView('traintrainer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-teal-soft transition-colors duration-200 font-semibold cursor-pointer">Train The Trainer</button>
            <button onClick={() => navigateToSection('footer-section')} className="hover:text-teal-soft transition-colors duration-200 font-semibold cursor-pointer">Contact</button>
          </nav>

          {/* Right: Premium CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => triggerBooking()}
              className="px-6 py-3 bg-ocean hover:bg-ocean-dark text-cream text-[13px] font-semibold tracking-wider rounded-full shadow-md hover:shadow-lg hover:scale-102 transition-all duration-300 uppercase cursor-pointer"
              id="header-book-session"
            >
              Book a Session
            </button>
          </div>

          {/* Mobile Hamburg menu trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-ocean-light hover:text-ocean cursor-pointer"
            id="mobile-menu-toggle"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-cream border-b border-gold-light/20 overflow-hidden font-semibold text-[14px] tracking-wide text-ocean-light text-left"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                <button onClick={() => navigateToSection('hero-section')} className="py-2 hover:text-teal-soft border-b border-gold-light/10 text-left cursor-pointer">Home</button>
                <button onClick={() => { setIsMobileMenuOpen(false); setCurrentView('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="py-2 hover:text-teal-soft border-b border-gold-light/10 text-left cursor-pointer">About</button>
                <button onClick={() => { setIsMobileMenuOpen(false); setCurrentView('one_one'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="py-2 hover:text-teal-soft border-b border-gold-light/10 text-left cursor-pointer">1:1</button>
                <button onClick={() => navigateToSection('healing-modalities-section')} className="py-2 hover:text-teal-soft border-b border-gold-light/10 text-left cursor-pointer">Courses</button>
                <button onClick={() => { setIsMobileMenuOpen(false); setCurrentView('traintrainer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="py-2 hover:text-teal-soft border-b border-gold-light/10 text-left cursor-pointer">Train The Trainer</button>
                <button onClick={() => navigateToSection('footer-section')} className="py-2 hover:text-teal-soft text-left cursor-pointer">Contact</button>
                
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    triggerBooking();
                  }}
                  className="w-full py-3.5 bg-ocean text-white rounded-xl font-bold uppercase tracking-widest text-center shadow-md mt-2"
                  id="mobile-book-session"
                >
                  Book a Session
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. HERO SECTION */}
      {currentView === 'home' ? (
        <>
          <section className="relative pt-6 pb-12 md:pb-16 px-6 watercolor-bg overflow-hidden bg-[#faf7f2]/40" id="hero-section">
        
        {/* Responsive Wave Clip Path SVG Definitions */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            {/* Vertical wave clip path for desktop - precisely matching the hand-drawn curves */}
            <clipPath id="wave-clip-vertical" clipPathUnits="objectBoundingBox">
              <path d="M 0.25,0 C 0.05,0.1 0.35,0.2 0.28,0.28 C 0.2,0.34 0.38,0.42 0.12,0.55 C -0.05,0.65 0.25,0.72 0.18,0.82 C 0.1,0.9 -0.05,0.95 0,1 L 1,1 L 1,0 Z" />
            </clipPath>
            {/* Horizontal wave clip path for mobile - giving a clean watercolor puddle look */}
            <clipPath id="wave-clip-horizontal" clipPathUnits="objectBoundingBox">
              <path d="M 0,0.18 C 0.18,0.02 0.38,0.25 0.5,0.12 C 0.65,-0.02 0.82,0.22 1,0.08 L 1,1 L 0,1 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Desktop Wave Background Image (lg:block hidden) - Merges the nature meditation image into the background */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none select-none z-0 lg:block hidden opacity-60"
          style={{
            clipPath: 'url(#wave-clip-vertical)',
            WebkitClipPath: 'url(#wave-clip-vertical)',
          }}
        >
          <SmartImage
            id="homepage.hero_bg_desktop"
            defaultSrc={heroBg}
            alt="Serene meditation background wave"
            className="w-full h-full object-cover object-center scale-[1.01] opacity-[0.45] brightness-110 contrast-90"
            referrerPolicy="no-referrer"
          />
          {/* Color matching ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f2] via-[#faf7f2]/40 to-transparent" />
          {/* Soft light transition blending from the left screen background */}
          <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#faf7f2] to-transparent" />
        </div>

        {/* Mobile/Tablet Wave Background Image (lg:hidden block) */}
        <div 
          className="absolute left-0 right-0 bottom-0 h-[46%] pointer-events-none select-none z-0 lg:hidden block"
          style={{
            clipPath: 'url(#wave-clip-horizontal)',
            WebkitClipPath: 'url(#wave-clip-horizontal)',
          }}
        >
          <SmartImage
            id="homepage.hero_bg_mobile"
            defaultSrc={heroBgMobile}
            alt="Serene meditation background wave mobile"
            className="w-full h-full object-cover object-center opacity-[0.35] brightness-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f2] via-[#faf7f2]/60 to-transparent" />
          {/* Top soft fade transition */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#faf7f2] to-transparent" />
        </div>

        {/* Soft Watercolor Vignette Corners */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[#bde0e5]/20 to-transparent blur-3xl pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#c2d3cd]/25 to-transparent blur-3xl pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#bde0e5]/20 to-transparent blur-3xl pointer-events-none z-10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#c2d3cd]/20 to-transparent blur-3xl pointer-events-none z-10" />

        {/* Floating Translucent Background Symbols */}
        <FloatingSymbols />

        {/* Crescent Moon & Sparkling Star (Top-Left, matching Image 2) */}
        <div className="absolute top-8 left-6 md:top-12 md:left-12 w-12 h-12 text-[#bfae93]/60 z-10 pointer-events-none select-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
            <path d="M40,20 C65,20 80,42 74,68 C68,94 38,102 20,85 C42,85 58,70 58,48 C58,32 50,22 40,20 Z" />
            <path d="M75,25 L77,29 L81,30 L77,31 L75,35 L73,31 L69,30 L73,29 Z" fill="#d4af37" className="animate-pulse" />
          </svg>
        </div>

        {/* Floating Flying White Dove (Top-Left Center, matching Image 2) */}
        <motion.div
          className="absolute top-[8%] left-[26%] w-16 h-16 z-10 pointer-events-none select-none"
          animate={{
            y: [0, -6, 0],
            x: [0, 4, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 120 120" fill="none" className="w-full h-full drop-shadow-[0_4px_8px_rgba(7,42,58,0.08)]">
            <path
              d="M30,65 C35,63 42,58 48,52 C45,42 42,28 50,22 C55,27 60,38 62,48 C72,42 85,32 95,28 C92,38 85,48 78,55 C88,58 102,60 108,68 C98,68 85,65 76,62 C74,72 70,85 62,95 C62,85 65,74 65,65 C55,68 45,72 30,65 Z"
              fill="#ffffff"
            />
            <path
              d="M30,65 C35,63 42,58 48,52 C45,42 42,28 50,22 C55,27 60,38 62,48 C72,42 85,32 95,28 C92,38 85,48 78,55 C88,58 102,60 108,68 C98,68 85,65 76,62 C74,72 70,85 62,95 C62,85 65,74 65,65 C55,68 45,72 30,65 Z"
              stroke="#dfdbc9"
              strokeWidth="1.2"
            />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Hero Column: Heading, Subtext, Divider, Buttons */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center">
            
            {/* Delicate Subtitle */}
            <span className="font-cursive text-xl text-[#7da086] tracking-wider font-semibold mb-3 block uppercase">
              Heal , Transform, Create a Legacy
            </span>

            {/* Giant Heading with custom script accent matching Image 2 */}
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#072a3a] tracking-tight leading-none mb-6">
              Healing is <br />
              <span className="font-script text-6xl md:text-8xl text-[#4f9da6] font-normal leading-normal block -mt-2">
                coming home to you.
              </span>
            </h1>

            {/* Calm Subtext paragraphs exactly matching Image 2 */}
            <p className="font-cursive text-xl tracking-wider font-semibold uppercase text-[#2c4759]/90 max-w-lg mb-2">
              Change your old identity and <span className="text-[#072a3a]">Become a new Avatar</span>
            </p>

            {/* Custom Outline Green Lotus Divider Ornament (matching Image 2) */}
            <div className="flex items-center gap-4 max-w-md my-4">
              <div className="h-[1px] flex-1 bg-[#dfdbc9]/70" />
              <svg className="w-8 h-8 text-[#7da086] stroke-[1.1]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {/* Outlined Lotus from reference */}
                <path d="M12 21C12 21 15.5 17 15.5 14C15.5 11.5 13.5 10.5 12 12C10.5 10.5 8.5 11.5 8.5 14C8.5 17 12 21 12 21Z" />
                <path d="M12 21C12 21 19 18 19 14.5C19 11.5 16 11.5 14.5 13.5C13 11 11.5 10.5 11.5 10.5" />
                <path d="M12 21C12 21 5 18 5 14.5C5 11.5 8 11.5 9.5 13.5C11 11 12.5 10.5 12.5 10.5" />
                <path d="M3 18C5 18.5 19 18.5 21 18" strokeLinecap="round" />
              </svg>
              <div className="h-[1px] flex-1 bg-[#dfdbc9]/70" />
            </div>
          </div>

          {/* Right Hero Column: Nature accessories arranged organically floating on the background wave */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative select-none">
            
          </div>

        </div>

        {/* Transition Statistics Section (Located horizontally directly below the hero - with individual circled water-brush rings, matching Image 2) */}
        <div className="max-w-6xl mx-auto mt-8 md:mt-10 relative z-20 px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 justify-center items-center">
            {STATS.map((stat, idx) => (
              <WatercolorStatCircle
                key={idx}
                value={stat.value}
                label={stat.label}
                iconType={stat.icon}
                color={stat.color as 'teal' | 'sage'}
                index={idx}
              />
            ))}
          </div>
        </div>

        {/* INTERACTIVE CELESTIAL SEAL: RECEIVE YOUR NEXT SIGN */}
        <div className="flex flex-col items-center justify-center mt-8 mb-3 relative z-30 select-none">
          {/* Label Above Seal */}
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.25em] text-[#c0942c] uppercase block mb-1.5 text-center">
            RECEIVE YOUR NEXT SIGN. CLICK THE BUTTON BELOW.
          </span>

          {/* Sacred Celestial Emblem Button (76px - 80px) */}
          <button
            onClick={() => setIsUniverseModalOpen(true)}
            className="group relative flex items-center justify-center cursor-pointer focus:outline-none"
            aria-label="Receive Your Next Sign - Open Letters From the Universe"
          >
            {/* Soft Golden Ambient Halo (Subtle, non-harsh) */}
            <div className="absolute inset-0 rounded-full bg-[#c0942c]/15 blur-md group-hover:bg-[#c0942c]/28 transition-all duration-500 scale-110 pointer-events-none" />

            {/* Main Sacred Celestial Seal with Subtle Floating & Breathing */}
            <motion.div
              animate={{ y: [0, -2.5, 0], scale: [1, 1.03, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-20 h-20 rounded-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE0] border-2 border-[#c0942c]/45 group-hover:border-[#c0942c] shadow-[0_4px_18px_rgba(192,148,44,0.18)] group-hover:shadow-[0_6px_24px_rgba(192,148,44,0.32)] flex items-center justify-center transition-all duration-300 group-hover:scale-105"
            >
              {/* Outer Sacred Geometry Ring */}
              <div className="absolute inset-1.5 rounded-full border border-dashed border-[#c0942c]/35 group-hover:border-[#c0942c]/70 group-hover:rotate-45 transition-all duration-700 pointer-events-none" />

              {/* Inner Emblem with Crown Icon Perfectly Centered in Golden Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FAF5EB] border border-[#c0942c]/45 flex items-center justify-center text-[#c0942c] group-hover:bg-[#c0942c] group-hover:text-white transition-all duration-300 shadow-xs">
                <Crown className="w-6 h-6 text-[#c0942c] group-hover:text-white transition-colors duration-300 group-hover:scale-110" />
              </div>
            </motion.div>
          </button>
        </div>

        {/* "The Awakening" Quote Section directly below the Seal Button */}
        <div className="max-w-4xl mx-auto mt-4 md:mt-6 text-center px-6 relative z-20 pb-4">
          
          {/* THE AWAKENING in Capital Font, Blue color tone */}
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-[0.25em] text-[#1d5c8a] uppercase mb-3">
            THE AWAKENING
          </h2>

          {/* The profound quote in italic cursive format */}
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean-dark font-medium leading-relaxed italic max-w-3xl mx-auto font-cursive px-4">
            "The quality of your life changes the moment, you stop asking <span className="text-[#1d5c8a] font-semibold">" what should I do ? "</span> and start asking <span className="text-[#7da086] font-semibold">" who must I become? "</span>"
          </p>

          <div className="w-16 h-[1px] bg-[#dfdbc9]/60 mx-auto mt-5" />
        </div>

        {/* Tranquil Wavy Bottom Divider (mixing into the second section) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px] pointer-events-none">
          <svg className="relative block w-full h-[80px] md:h-[140px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            {/* Background wave for depth: slightly lighter/cream color or semi-transparent */}
            <path
              d="M0,60 C150,110 350,10 600,60 C850,110 1050,10 1200,60 L1200,120 L0,120 Z"
              fill="#fdfcf7"
              opacity="0.4"
            />
            {/* Foreground main wave: matches next section background (#fdfcf7) perfectly */}
            <path
              d="M0,80 C200,120 450,25 700,80 C950,135 1100,55 1200,90 L1200,120 L0,120 Z"
              fill="#fdfcf7"
            />
          </svg>
        </div>

      </section>

      {/* 4. HEALING MODALITIES SECTION (Modular Component) */}
      <HealingModalities 
        onBookModality={triggerBooking} 
        onSelectModality={(id) => {
          setCurrentView(id as any);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }} 
      />

      {/* 8. HEALING PROCESS & TESTIMONIALS SECTION (Combined card reordered before Signature Journeys) */}
      <section className="pt-6 pb-12 bg-ivory border-t border-b border-[#dfdbc9]/20 relative overflow-hidden" id="healing-process">
        
        {/* Soft atmospheric background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#daead1]/20 via-[#dcf0f5]/15 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Main Integrated Container */}
          <div className="bg-[#FAF9F5] border border-[#dfdbc9]/60 rounded-[2.5rem] shadow-xl relative overflow-hidden p-6 md:p-8 lg:p-10">
            
            {/* Absolute watercolor bleeds in bottom corners */}
            <div className="absolute bottom-0 left-0 w-80 h-40 bg-gradient-to-tr from-[#daead1]/20 via-[#eae6da]/5 to-transparent blur-2xl pointer-events-none rounded-bl-[2.5rem]" />
            <div className="absolute bottom-0 right-0 w-80 h-40 bg-gradient-to-tl from-[#dcf0f5]/20 via-[#eae6da]/5 to-transparent blur-2xl pointer-events-none rounded-br-[2.5rem]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
              
              {/* LEFT COLUMN: Your Healing Process (col-span-7) */}
              <div className="lg:col-span-7 flex flex-col justify-between py-2 h-full">
                <div className="w-full flex flex-col justify-between h-full space-y-6">
                  
                  {/* Header */}
                  <div className="text-center md:text-left mb-4">
                    <h3 className="font-serif text-4xl md:text-5xl text-[#132c3a] font-medium tracking-tight">
                      Your Healing Journey
                    </h3>
                    <p className="text-[#4c755c] mt-1.5 text-sm md:text-base font-light tracking-wide italic">
                      Every transformation begins with one gentle step.
                    </p>
                    {/* Small gold floral ornament divider */}
                    <div className="flex justify-start mt-2">
                      <svg className="w-6 h-4 text-gold-light" viewBox="0 0 100 50" fill="currentColor">
                        <path d="M 50,10 C 42,25 30,30 10,32 C 30,34 42,39 50,54 C 58,39 70,34 90,32 C 70,30 58,25 50,10 Z" />
                      </svg>
                    </div>
                  </div>

                  {/* REDESIGNED STAIRCASE DIAGRAM ROADMAP */}
                  <div className="flex flex-col md:flex-row items-end justify-between gap-4 pt-2 pb-2 max-w-4xl mx-auto relative w-full">
                    
                    {/* Step 1: Awareness */}
                    <div className="w-full md:w-[19%] flex flex-col items-center md:items-start group transition-all duration-300 hover:-translate-y-1">
                      <div className="bg-[#eef5f1] border border-[#dce8d7] rounded-2xl p-3.5 w-full shadow-sm text-center md:text-left flex flex-col justify-center min-h-[88px] relative">
                        <span className="absolute -top-2.5 -left-2.5 w-7 h-7 rounded-full bg-[#7da086] text-white font-mono text-xs font-bold flex items-center justify-center shadow">1</span>
                        <div>
                          <h4 className="font-serif text-[#132c3a] font-bold text-sm leading-tight mt-0.5">Awareness</h4>
                          <p className="text-[11px] text-[#52665b] mt-1 font-medium leading-tight">
                            Awaken & Align.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 2: Release */}
                    <div className="w-full md:w-[19%] flex flex-col items-center md:items-start group transition-all duration-300 hover:-translate-y-1 md:-translate-y-[15px]">
                      <div className="bg-[#e6efe0] border border-[#d2e2ca] rounded-2xl p-3.5 w-full shadow-sm text-center md:text-left flex flex-col justify-center min-h-[88px] relative">
                        <span className="absolute -top-2.5 -left-2.5 w-7 h-7 rounded-full bg-[#93b59e] text-white font-mono text-xs font-bold flex items-center justify-center shadow">2</span>
                        <div>
                          <h4 className="font-serif text-[#132c3a] font-bold text-sm leading-tight mt-0.5">Release</h4>
                          <p className="text-[11px] text-[#52665b] mt-1 font-medium leading-tight">
                            Unfold & Let Go.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 3: Heal */}
                    <div className="w-full md:w-[19%] flex flex-col items-center md:items-start group transition-all duration-300 hover:-translate-y-1 md:-translate-y-[30px]">
                      <div className="bg-[#fcf7ee] border border-[#ebd6b0] rounded-2xl p-3.5 w-full shadow-sm text-center md:text-left flex flex-col justify-center min-h-[88px] relative">
                        <span className="absolute -top-2.5 -left-2.5 w-7 h-7 rounded-full bg-[#dfaf6b] text-white font-mono text-xs font-bold flex items-center justify-center shadow">3</span>
                        <div>
                          <h4 className="font-serif text-[#132c3a] font-bold text-sm leading-tight mt-0.5">Heal</h4>
                          <p className="text-[11px] text-[#52665b] mt-1 font-medium leading-tight">
                            Cellular Restoration.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 4: Realign */}
                    <div className="w-full md:w-[19%] flex flex-col items-center md:items-start group transition-all duration-300 hover:-translate-y-1 md:-translate-y-[45px]">
                      <div className="bg-[#eaf4ef] border border-[#d4ebd9] rounded-2xl p-3.5 w-full shadow-sm text-center md:text-left flex flex-col justify-center min-h-[88px] relative">
                        <span className="absolute -top-2.5 -left-2.5 w-7 h-7 rounded-full bg-[#4c755c] text-white font-mono text-xs font-bold flex items-center justify-center shadow">4</span>
                        <div>
                          <h4 className="font-serif text-[#132c3a] font-bold text-sm leading-tight mt-0.5">Realign</h4>
                          <p className="text-[11px] text-[#52665b] mt-1 font-medium leading-tight">
                            Subconscious Balance.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Step 5: Rise */}
                    <div className="w-full md:w-[19%] flex flex-col items-center md:items-start group transition-all duration-300 hover:-translate-y-1 md:-translate-y-[60px]">
                      <div className="bg-[#faf5ec] border border-[#eadaab] rounded-2xl p-3.5 w-full shadow-md text-center md:text-left flex flex-col justify-center min-h-[88px] relative ring-2 ring-gold/20">
                        <span className="absolute -top-2.5 -left-2.5 w-7 h-7 rounded-full bg-gold text-white font-mono text-xs font-bold flex items-center justify-center shadow-lg animate-bounce">5</span>
                        <div>
                          <h4 className="font-serif text-[#132c3a] font-bold text-sm leading-tight mt-0.5 flex items-center gap-1">Rise <Sparkles className="w-3.5 h-3.5 text-gold" /></h4>
                          <p className="text-[11px] text-[#52665b] mt-1 font-medium leading-tight">
                            Emerge Grounded.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Centered Horizontal Connecting Line in the Middle */}
                  <div className="w-full max-w-2xl h-[1.5px] bg-gradient-to-r from-transparent via-[#dfaf6b]/60 to-transparent mx-auto my-4" />

                  {/* PROFOUND CONTENT QUOTE BLOCK AFTER THE DIAGRAM */}
                  <div className="mt-4 md:mt-6 p-5 md:p-6 bg-[#FAF9F5] border border-[#dfdbc9]/60 rounded-3xl shadow-sm text-center max-w-3xl mx-auto relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#7da086]/5 rounded-full blur-xl pointer-events-none" />
                    
                    <p className="font-serif text-sm md:text-base text-[#1a3a4a] italic leading-relaxed mb-4 font-medium">
                      "Your job is not to repeat your unsealed past. Your job is to heal the past wounds and design your future."
                    </p>
                    
                    <div className="w-16 h-[1px] bg-gold/40 mx-auto mb-4" />
                    
                    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2.5 text-xs font-sans tracking-wide text-[#3a5d45]">
                      <div className="flex items-center gap-1.5 font-semibold flex-shrink-0">
                        <span className="text-[#dfaf6b]">✦</span> Choose <span className="text-ocean-dark underline decoration-gold">Purpose</span> over comfort
                      </div>
                      <div className="flex items-center gap-1.5 font-semibold flex-shrink-0">
                        <span className="text-[#dfaf6b]">✦</span> <span className="text-ocean-dark underline decoration-gold">Growth</span> over ego
                      </div>
                      <div className="flex items-center gap-1.5 font-semibold flex-shrink-0">
                        <span className="text-[#dfaf6b]">✦</span> <span className="text-ocean-dark underline decoration-gold">Contribution</span> over applause
                      </div>
                      <div className="flex items-center gap-1.5 font-semibold flex-shrink-0">
                        <span className="text-[#dfaf6b]">✦</span> <span className="text-ocean-dark underline decoration-gold">Truth</span> over approval
                      </div>
                      <div className="flex items-center gap-1.5 font-semibold flex-shrink-0">
                        <span className="text-[#dfaf6b]">✦</span> <span className="text-ocean-dark underline decoration-gold">Legacy</span> over distractions
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* VERTICAL DIVIDER (hidden on mobile, visible on large screens) */}
              <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
                <div className="w-[1px] bg-[#dfdbc9]/60 h-[85%] self-center" />
              </div>

              {/* RIGHT COLUMN: Today's Healing Affirmation (col-span-4) */}
              <div className="lg:col-span-4 flex flex-col justify-between py-2 h-full">
                <HealingAffirmation />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3-COLUMN SECTIONS (5, 6, and 7): QUOTE, SIGNATURE JOURNEYS, AND WHY WORK WITH ME */}
      <section className="py-20 bg-cream/50 relative border-t border-gold-light/10" id="signature-journeys">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT COLUMN: Quote + Testimonial 1 (col-span-3) */}
            <div className="lg:col-span-3 flex flex-col gap-6 justify-between">
              {/* 5. INSPIRATIONAL QUOTE CARD (Left Column) - Compact, Elegant */}
              <div className="bg-gradient-to-b from-[#1b3240] via-[#233f52] to-[#2c4759] rounded-[2.5rem] p-7 text-cream text-center shadow-xl border border-gold-light/25 relative overflow-hidden flex-1 flex flex-col justify-center group hover:border-gold/50 transition-all duration-500 min-h-[250px]">
                
                {/* Mystic lighting layer */}
                <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-teal-soft/10 to-transparent pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sage-light/5 rounded-full blur-2xl pointer-events-none" />
                
                {/* Quote Header Leaf Ornament */}
                <div className="flex justify-center mb-3">
                  <svg className="w-6 h-6 text-gold-light/40 animate-pulse" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                    <path d="M 50,20 C 45,35 48,45 50,55 C 52,45 55,35 50,20 Z" fill="currentColor" />
                    <path d="M 50,38 C 38,42 32,50 35,58 C 42,54 46,46 50,38 Z" fill="currentColor" />
                    <path d="M 50,38 C 62,42 68,50 65,58 C 58,54 54,46 50,38 Z" fill="currentColor" />
                  </svg>
                </div>

                {/* Main Centered Quote Content */}
                <div className="space-y-4 px-1">
                  <h3 className="font-serif text-4xl md:text-5xl text-white font-medium leading-tight tracking-tight">
                    "You are not <br />
                    too much. <br />
                    <span className="text-gold-light font-normal italic font-cursive">You are healing.</span>"
                  </h3>
                  
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto" />
                  
                  <p className="text-base md:text-lg text-cream/80 leading-relaxed font-light">
                    Awareness is the first step of healing.
                  </p>
                </div>
              </div>

              {/* LEFT TESTIMONIAL CARD (Slideshow matching the Quote Card above) */}
              <div className="bg-gradient-to-b from-[#1b3240] via-[#233f52] to-[#2c4759] text-cream border border-gold-light/25 rounded-[2.5rem] p-6 shadow-xl flex-1 flex flex-col justify-between relative overflow-hidden group hover:border-gold/50 transition-all duration-500">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
                <div className="space-y-3 flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between pb-3 border-b border-gold-light/20">
                    <div>
                      <span className="font-cursive text-base text-gold-light font-medium block mb-0.5">Testimonial</span>
                      <h4 className="font-serif text-lg md:text-xl text-white font-medium whitespace-nowrap">Lives Transformed</h4>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between pt-2">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={leftTestimonialIdx}
                        initial={{ x: 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -40, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="flex-1 flex flex-col justify-center"
                      >
                        <p className="text-sm md:text-base text-cream italic leading-relaxed font-normal">
                          "{LEFT_SLIDESHOW_TESTIMONIALS[leftTestimonialIdx].quote}"
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. SIGNATURE HEALING JOURNEYS (Center Column) - Side-by-side 4 Journeys Row matching Template 2 */}
            <div className="lg:col-span-6 flex flex-col justify-stretch">
              <div className="bg-white border border-[#eae6da] rounded-[2.5rem] p-6 md:p-8 shadow-xl flex-1 flex flex-col justify-between relative overflow-hidden">
                
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="font-serif text-4xl md:text-5xl text-ocean font-medium tracking-tight">
                    Signature Healing Journeys
                  </h3>
                  {/* Small gold floral ornament divider */}
                  <div className="flex justify-center mt-2.5">
                    <svg className="w-6 h-4 text-gold-light" viewBox="0 0 100 50" fill="currentColor">
                      <path d="M 50,10 C 42,25 30,30 10,32 C 30,34 42,39 50,54 C 58,39 70,34 90,32 C 70,30 58,25 50,10 Z" />
                    </svg>
                  </div>
                </div>

                {/* 8 Journeys Layout: Aligned in a beautiful responsive grid of 2 rows of 4 cards on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 items-stretch mt-6">
                  
                  {/* Journey 1: Neuro Linguistic Programming (NLP) */}
                  <div className="flex flex-col justify-between h-full group">
                    <div className="flex flex-col">
                      {/* Arched image frame with consistent dimensions & shadow */}
                      <div className="arch-card-frame aspect-[3/3.8] overflow-hidden relative border border-[#eae6da] bg-[#faf9f6] rounded-2xl shadow-sm transition-all duration-300 group-hover:shadow-md">
                        <ModalityImage
                          id="nlp"
                          alt="Neuro Linguistic Programming"
                          className="w-full h-full object-cover scale-[1.22] transition-transform duration-700 group-hover:scale-[1.30]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/10 to-transparent" />
                      </div>

                      {/* Content details below - with robust baseline alignment */}
                      <div className="pt-6 text-left px-1">
                        <h4 className="font-serif text-lg md:text-xl font-semibold text-ocean leading-snug tracking-tight min-h-[56px] flex items-center justify-start text-left">
                          Neuro Linguistic <br />Programming
                        </h4>
                        <div className="mt-3 text-xs sm:text-xs md:text-sm text-[#52665b] font-medium leading-relaxed text-left min-h-[48px] flex items-start">
                          <p>Cognitive Reframing & Belief Clearing, Anchoring & Mind Mastery</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Journey 2: Relationship Mastery */}
                  <div className="flex flex-col justify-between h-full group">
                    <div className="flex flex-col">
                      {/* Arched image frame with consistent dimensions & shadow */}
                      <div className="arch-card-frame aspect-[3/3.8] overflow-hidden relative border border-[#eae6da] bg-[#faf9f6] rounded-2xl shadow-sm transition-all duration-300 group-hover:shadow-md">
                        <ModalityImage
                          id="relationship"
                          alt="Relationship Mastery"
                          className="w-full h-full object-cover scale-[1.22] transition-transform duration-700 group-hover:scale-[1.30]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/10 to-transparent" />
                      </div>

                      {/* Content details below - with robust baseline alignment */}
                      <div className="pt-6 text-left px-1">
                        <h4 className="font-serif text-lg md:text-xl font-semibold text-ocean leading-snug tracking-tight min-h-[56px] flex items-center justify-start text-left">
                          Relationship <br />Mastery
                        </h4>
                        <div className="mt-3 text-xs sm:text-xs md:text-sm text-[#52665b] font-medium leading-relaxed text-left min-h-[48px] flex items-start">
                          <p>Attachment Healing & Heart Opening to open your heart safely</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Journey 3: Trauma Healing */}
                  <div className="flex flex-col justify-between h-full group">
                    <div className="flex flex-col">
                      {/* Arched image frame with consistent dimensions & shadow */}
                      <div className="arch-card-frame aspect-[3/3.8] overflow-hidden relative border border-[#eae6da] bg-[#faf9f6] rounded-2xl shadow-sm transition-all duration-300 group-hover:shadow-md">
                        <ModalityImage
                          id="trauma"
                          alt="Trauma Healing"
                          className="w-full h-full object-cover scale-[1.22] transition-transform duration-700 group-hover:scale-[1.30]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/10 to-transparent" />
                      </div>

                      {/* Content details below - with robust baseline alignment */}
                      <div className="pt-6 text-left px-1">
                        <h4 className="font-serif text-lg md:text-xl font-semibold text-ocean leading-snug tracking-tight min-h-[56px] flex items-center justify-start text-left">
                          Trauma <br />Healing
                        </h4>
                        <div className="mt-3 text-xs sm:text-xs md:text-sm text-[#52665b] font-medium leading-relaxed text-left min-h-[48px] flex items-start">
                          <p>Emotional Clearing & Somatic Nervous System Safety Restoration</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Journey 4: Reiki Healing & Chakra Balancing */}
                  <div className="flex flex-col justify-between h-full group">
                    <div className="flex flex-col">
                      {/* Arched image frame with consistent dimensions & shadow */}
                      <div className="arch-card-frame aspect-[3/3.8] overflow-hidden relative border border-[#eae6da] bg-[#faf9f6] rounded-2xl shadow-sm transition-all duration-300 group-hover:shadow-md">
                        <ModalityImage
                          id="reiki"
                          alt="Reiki Healing & Chakra Balancing"
                          className="w-full h-full object-cover scale-[1.22] transition-transform duration-700 group-hover:scale-[1.30]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/10 to-transparent" />
                      </div>

                      {/* Content details below - with robust baseline alignment */}
                      <div className="pt-6 text-left px-1">
                        <h4 className="font-serif text-lg md:text-xl font-semibold text-ocean leading-snug tracking-tight min-h-[56px] flex items-center justify-start text-left">
                          Reiki <br />Healing
                        </h4>
                        <div className="mt-3 text-xs sm:text-xs md:text-sm text-[#52665b] font-medium leading-relaxed text-left min-h-[48px] flex items-start">
                          <p>Energy Alignment, Aura Cleansing & chakra center balancing</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Journey 5: Hypnotherapy and EFT */}
                  <div className="flex flex-col justify-between h-full group">
                    <div className="flex flex-col">
                      {/* Arched image frame with consistent dimensions & shadow */}
                      <div className="arch-card-frame aspect-[3/3.8] overflow-hidden relative border border-[#eae6da] bg-[#faf9f6] rounded-2xl shadow-sm transition-all duration-300 group-hover:shadow-md">
                        <ModalityImage
                          id="hypnotherapy"
                          alt="Hypnotherapy EFT"
                          className="w-full h-full object-cover scale-[1.22] transition-transform duration-700 group-hover:scale-[1.30]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/10 to-transparent" />
                      </div>

                      {/* Content details below - with robust baseline alignment */}
                      <div className="pt-6 text-left px-1">
                        <h4 className="font-serif text-lg md:text-xl font-semibold text-ocean leading-snug tracking-tight min-h-[56px] flex items-center justify-start text-left">
                          Hypnotherapy <br />EFT
                        </h4>
                        <div className="mt-3 text-xs sm:text-xs md:text-sm text-[#52665b] font-medium leading-relaxed text-left min-h-[48px] flex items-start">
                          <p>Subconscious Reprogramming & Meridian Tapping Emotional Freedom</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Journey 6: Energy Healing and Cord Cutting */}
                  <div className="flex flex-col justify-between h-full group">
                    <div className="flex flex-col">
                      {/* Arched image frame with consistent dimensions & shadow */}
                      <div className="arch-card-frame aspect-[3/3.8] overflow-hidden relative border border-[#eae6da] bg-[#faf9f6] rounded-2xl shadow-sm transition-all duration-300 group-hover:shadow-md">
                        <ModalityImage
                          id="innerchild"
                          alt="Energy Healing Cord Cutting"
                          className="w-full h-full object-cover scale-[1.22] transition-transform duration-700 group-hover:scale-[1.30]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/10 to-transparent" />
                      </div>

                      {/* Content details below - with robust baseline alignment */}
                      <div className="pt-6 text-left px-1">
                        <h4 className="font-serif text-lg md:text-xl font-semibold text-ocean leading-snug tracking-tight min-h-[56px] flex items-center justify-start text-left">
                          Energy Healing <br />Cord Cutting
                        </h4>
                        <div className="mt-3 text-xs sm:text-xs md:text-sm text-[#52665b] font-medium leading-relaxed text-left min-h-[48px] flex items-start">
                          <p>Energetic Detachment, Release Rituals & childhood reparenting</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Journey 7: Timeline Therapy */}
                  <div className="flex flex-col justify-between h-full group">
                    <div className="flex flex-col">
                      {/* Arched image frame with consistent dimensions & shadow */}
                      <div className="arch-card-frame aspect-[3/3.8] overflow-hidden relative border border-[#eae6da] bg-[#faf9f6] rounded-2xl shadow-sm transition-all duration-300 group-hover:shadow-md">
                        <ModalityImage
                          id="timeline"
                          alt="Timeline Therapy"
                          className="w-full h-full object-cover scale-[1.22] transition-transform duration-700 group-hover:scale-[1.30]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/10 to-transparent" />
                      </div>

                      {/* Content details below - with robust baseline alignment */}
                      <div className="pt-6 text-left px-1">
                        <h4 className="font-serif text-lg md:text-xl font-semibold text-ocean leading-snug tracking-tight min-h-[56px] flex items-center justify-start text-left">
                          Timeline <br />Therapy
                        </h4>
                        <div className="mt-3 text-xs sm:text-xs md:text-sm text-[#52665b] font-medium leading-relaxed text-left min-h-[48px] flex items-start">
                          <p>Heal past emotional blocks, release limits & create positive future</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Journey 8: Tarot & Numerology */}
                  <div className="flex flex-col justify-between h-full group">
                    <div className="flex flex-col">
                      {/* Arched image frame with consistent dimensions & shadow */}
                      <div className="arch-card-frame aspect-[3/3.8] overflow-hidden relative border border-[#eae6da] bg-[#faf9f6] rounded-2xl shadow-sm transition-all duration-300 group-hover:shadow-md">
                        <ModalityImage
                          id="tarot"
                          alt="Tarot Reading Course"
                          className="w-full h-full object-cover scale-[1.22] transition-transform duration-700 group-hover:scale-[1.30]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/10 to-transparent" />
                      </div>

                      {/* Content details below - with robust baseline alignment */}
                      <div className="pt-6 text-left px-1">
                        <h4 className="font-serif text-lg md:text-xl font-semibold text-ocean leading-snug tracking-tight min-h-[56px] flex items-center justify-start text-left">
                          Tarot Reading <br />Course
                        </h4>
                        <div className="mt-3 text-xs sm:text-xs md:text-sm text-[#52665b] font-medium leading-relaxed text-left min-h-[48px] flex items-start">
                          <p>Avail your first personalized reading or gain dual certifications</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: Why work with Heer + Testimonial 2 (col-span-3) */}
            <div className="lg:col-span-3 flex flex-col gap-6 justify-between" id="why-work-with-me">
              {/* 7. WHY WORK WITH HEER */}
              <div className="bg-gradient-to-br from-[#dcf0f5] via-[#e8f3e7] to-[#daead1] border border-[#dfdbc9]/60 rounded-[2.5rem] p-7 shadow-xl flex-1 flex flex-col justify-center relative overflow-hidden group hover:border-[#b5b1a3] transition-all duration-500 text-ocean min-h-[250px]">
                
                {/* Upper soft aesthetic backdrop */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/40 rounded-full blur-xl pointer-events-none" />

                {/* Header */}
                <div className="text-center pt-1 mb-4">
                  <span className="font-cursive text-lg text-[#4c755c] font-semibold block mb-0.5">
                    Divine Intention
                  </span>
                  <h3 className="font-serif text-4xl text-[#1f384a] font-medium leading-tight">
                    Why work with Heer?
                  </h3>
                  <div className="w-16 h-[1.5px] bg-[#4c755c]/20 mx-auto mt-2" />
                </div>

                {/* Vertical Features list with beautiful custom hand-drawn line-art icons - No hover descriptions */}
                <div className="space-y-3.5 relative z-10 flex-1 flex flex-col justify-center">
                  {[
                    { 
                      title: 'Ancient wisdom', 
                      subtitle: 'Modern approach', 
                      icon: (
                        <svg className="w-5 h-5 text-[#4c755c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          {/* Tree of life leaf structure icon */}
                          <path d="M12 22V10M12 10C14 8 16 8 18 6M12 14C10 12 8 12 6 10M12 10C12 7 14 5 16 3M12 12C12 10 10 8 8 6" strokeLinecap="round" />
                          <circle cx="12" cy="10" r="1" fill="currentColor" />
                          <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                          <circle cx="6" cy="10" r="1.5" fill="currentColor" />
                        </svg>
                      )
                    },
                    { 
                      title: 'Safe, sacred &', 
                      subtitle: 'judgement-free space', 
                      icon: (
                        <svg className="w-5 h-5 text-[#3a647d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          {/* Protect shield with heart center */}
                          <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 14.5 C 10.5,13 10,11.5 12,9 C 14,11.5 13.5,13 12,14.5 Z" fill="rgba(58, 100, 125, 0.2)" />
                        </svg>
                      )
                    },
                    { 
                      title: 'Personalized', 
                      subtitle: 'healing journeys', 
                      icon: (
                        <svg className="w-5 h-5 text-[#4c755c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          {/* Open cupped hands holding seed sprout */}
                          <path d="M3 12c3-1 4.5 1 6 3 M21 12c-3-1-4.5 1-6 3 M12 16V9M12 9c-1-2-3-2-4-3 M12 11c1-2 3-2 4-3" strokeLinecap="round" />
                        </svg>
                      )
                    },
                    { 
                      title: 'Experienced', 
                      subtitle: 'guidance', 
                      icon: (
                        <svg className="w-5 h-5 text-[#3a647d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          {/* Glowing third eye or guiding compass/star */}
                          <path d="M12 3V21M3 12H21 M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" strokeLinecap="round" />
                          <polygon points="12,8 14,12 12,16 10,12" fill="rgba(58, 100, 125, 0.2)" />
                        </svg>
                      )
                    },
                    { 
                      title: 'Online sessions', 
                      subtitle: 'worldwide', 
                      icon: (
                        <svg className="w-5 h-5 text-[#4c755c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          {/* Circular global connection lines */}
                          <circle cx="12" cy="12" r="9" />
                          <path d="M3.6 9h16.8M3.6 15h16.8 M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z" />
                        </svg>
                      )
                    }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex gap-3 text-left items-start group/feat">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/80 border border-white/50 shadow-sm flex items-center justify-center">
                        {feat.icon}
                      </div>
                      <div className="flex-1 pt-0.5">
                        <h4 className="text-base font-bold text-[#1f384a] leading-snug flex flex-col">
                          <span>{feat.title}</span>
                          <span className="font-medium text-sm text-[#4c755c] -mt-0.5">{feat.subtitle}</span>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT TESTIMONIAL CARD (Slideshow matching the Features Card above) */}
              <div className="bg-gradient-to-br from-[#dcf0f5] via-[#e8f3e7] to-[#daead1] border border-[#dfdbc9]/60 text-ocean rounded-[2.5rem] p-6 shadow-xl flex-1 flex flex-col justify-between relative overflow-hidden group hover:border-[#b5b1a3] transition-all duration-500">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-full blur-xl pointer-events-none" />
                <div className="space-y-3 flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between pb-3 border-b border-[#4c755c]/20">
                    <div>
                      <span className="font-cursive text-base text-[#4c755c] font-semibold block mb-0.5">Testimonial</span>
                      <h4 className="font-serif text-lg md:text-xl text-[#1f384a] font-medium whitespace-nowrap">Lives Transformed</h4>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between pt-2">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={rightTestimonialIdx}
                        initial={{ x: 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -40, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="flex-1 flex flex-col justify-center"
                      >
                        <p className="text-sm md:text-base text-[#0f281a] italic leading-relaxed font-normal">
                          "{RIGHT_SLIDESHOW_TESTIMONIALS[rightTestimonialIdx].quote}"
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. HEALING PROCESS & TESTIMONIALS SECTION (Combined card exactly like Image 2) */}
      <section className="hidden" id="healing-process-duplicate">
        
        {/* Soft atmospheric background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#daead1]/20 via-[#dcf0f5]/15 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Main Integrated Container */}
          <div className="bg-[#FAF9F5] border border-[#dfdbc9]/60 rounded-[2.5rem] shadow-xl relative overflow-hidden p-6 md:p-10 lg:p-12">
            
            {/* Absolute watercolor bleeds in bottom corners */}
            <div className="absolute bottom-0 left-0 w-80 h-40 bg-gradient-to-tr from-[#daead1]/20 via-[#eae6da]/5 to-transparent blur-2xl pointer-events-none rounded-bl-[2.5rem]" />
            <div className="absolute bottom-0 right-0 w-80 h-40 bg-gradient-to-tl from-[#dcf0f5]/20 via-[#eae6da]/5 to-transparent blur-2xl pointer-events-none rounded-br-[2.5rem]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch relative z-10">
              
              {/* LEFT COLUMN: Your Healing Process (col-span-7) */}
              <div className="lg:col-span-7 flex flex-col justify-start py-4">
                <div className="w-full flex flex-col justify-start space-y-6">
                  
                  {/* Header */}
                  <div className="text-center">
                    <h3 className="font-serif text-5xl md:text-6xl text-[#132c3a] font-medium tracking-tight">
                      Your Healing Journey
                    </h3>
                    <p className="text-[#4c755c] mt-2 text-base md:text-lg font-light tracking-wide italic">
                      Every transformation begins with one gentle step.
                    </p>
                    {/* Small gold floral ornament divider */}
                    <div className="flex justify-center mt-3">
                      <svg className="w-6 h-4 text-gold-light" viewBox="0 0 100 50" fill="currentColor">
                        <path d="M 50,10 C 42,25 30,30 10,32 C 30,34 42,39 50,54 C 58,39 70,34 90,32 C 70,30 58,25 50,10 Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Redesigned Lotus Flower Healing Journey Path */}
                  <div className="relative py-2 sm:py-4 px-2 overflow-hidden bg-transparent min-h-[380px] flex items-center justify-center">
                    
                    {/* Custom animation keyframes and styles */}
                    <style dangerouslySetInnerHTML={{__html: `
                      @keyframes riverDash {
                        0% { stroke-dashoffset: 80; }
                        100% { stroke-dashoffset: 0; }
                      }
                      @keyframes floatPetal {
                        0% { transform: translateY(-10px) translateX(-5px) rotate(0deg) scale(0.8); opacity: 0; }
                        50% { opacity: 0.35; }
                        100% { transform: translateY(80px) translateX(15px) rotate(180deg) scale(0.6); opacity: 0; }
                      }
                      .animate-river-dash {
                        animation: riverDash 15s linear infinite;
                      }
                      .animate-float-petal-1 {
                        animation: floatPetal 14s linear infinite;
                      }
                      .animate-float-petal-2 {
                        animation: floatPetal 18s linear infinite 3s;
                      }
                      .animate-float-petal-3 {
                        animation: floatPetal 22s linear infinite 6s;
                      }
                    `}} />

                    {/* Subtle floating lotus petals in background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
                      <svg className="absolute top-[15%] left-[20%] w-6 h-6 text-[#7da086]/30 animate-float-petal-1" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50,20 C35,45 42,65 50,70 C58,65 65,45 50,20 Z" />
                      </svg>
                      <svg className="absolute top-[35%] right-[15%] w-5 h-5 text-[#dfaf6b]/25 animate-float-petal-2" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50,20 C35,45 42,65 50,70 C58,65 65,45 50,20 Z" />
                      </svg>
                      <svg className="absolute top-[60%] left-[35%] w-7 h-7 text-[#bde0e5]/30 animate-float-petal-3" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50,20 C35,45 42,65 50,70 C58,65 65,45 50,20 Z" />
                      </svg>
                      <svg className="absolute bottom-[25%] right-[30%] w-5 h-5 text-[#7da086]/25 animate-float-petal-1" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50,20 C35,45 42,65 50,70 C58,65 65,45 50,20 Z" />
                      </svg>
                    </div>

                    {/* Gentle Winding River Path (Desktop: horizontal, Mobile: vertical) */}
                    <svg className="absolute inset-x-0 top-[26%] h-24 w-full hidden sm:block pointer-events-none z-0" viewBox="0 0 1000 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#bde0e5" stopOpacity="0.5" />
                          <stop offset="25%" stopColor="#7da086" stopOpacity="0.35" />
                          <stop offset="50%" stopColor="#dfaf6b" stopOpacity="0.45" />
                          <stop offset="75%" stopColor="#4c755c" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#dfaf6b" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M 50,50 Q 250,110 450,20 T 850,80 T 950,50" 
                        fill="none" 
                        stroke="url(#riverGradient)" 
                        strokeWidth="12" 
                        strokeLinecap="round" 
                        className="opacity-60"
                      />
                      <path 
                        d="M 50,50 Q 250,110 450,20 T 850,80 T 950,50" 
                        fill="none" 
                        stroke="#ffffff" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeDasharray="6 8" 
                        className="opacity-80 animate-river-dash"
                      />
                    </svg>

                    {/* Vertical Winding River Path for Mobile */}
                    <svg className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-40 h-[92%] sm:hidden pointer-events-none z-0" viewBox="0 0 200 1000" preserveAspectRatio="none">
                      <path 
                        d="M 100,40 Q 40,250 160,450 T 60,850 T 100,960" 
                        fill="none" 
                        stroke="url(#riverGradient)" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        className="opacity-50"
                      />
                      <path 
                        d="M 100,40 Q 40,250 160,450 T 60,850 T 100,960" 
                        fill="none" 
                        stroke="#ffffff" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeDasharray="5 7" 
                        className="opacity-70 animate-river-dash"
                      />
                    </svg>

                    {/* Floating Lotus Medallions */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-12 sm:gap-1.5 relative z-10 w-full">
                      {HEALING_STEPS.map((step, idx) => {
                        // Custom subtitles mapping to the 5 lotus stages
                        const stageSubtitles = [
                          "Awaken & Align",
                          "Unfold & Letting Go",
                          "Cellular Restoration",
                          "Subconscious Balance",
                          "Emerge Grounded & Sovereign"
                        ];

                        return (
                          <div key={step.title} className="flex-1 flex flex-col items-center text-center group relative z-10">
                            {/* Milestone Medallion Circle (increased by 30%) */}
                            <div className="relative w-22 h-22 sm:w-28 sm:h-28 flex items-center justify-center transition-transform duration-500 hover:scale-105">
                              {/* Pulsing glow boundary */}
                              <div className="absolute inset-0 rounded-full bg-[#7da086]/10 animate-pulse opacity-40 scale-110 pointer-events-none z-0" style={{ animationDuration: `${3.5 + idx}s` }} />
                              <div className="absolute inset-1 rounded-full bg-white/40 shadow-sm border border-[#dfdbc9]/30 backdrop-blur-sm z-0" />
                              
                              {/* Floating inner medallion wrapper that lifts on hover */}
                              <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/95 shadow-md hover:shadow-xl relative z-10 bg-[#FAF9F5] flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2.5 group-hover:shadow-2xl">
                                {(() => {
                                  switch (idx) {
                                    case 0:
                                      return (
                                        <svg viewBox="0 0 100 100" className="w-full h-full p-1.5">
                                          <defs>
                                            <radialGradient id="grad-bud" cx="50%" cy="50%" r="50%">
                                              <stop offset="0%" stopColor="#fffcf5" />
                                              <stop offset="65%" stopColor="#dce8d7" />
                                              <stop offset="100%" stopColor="#96b29f" />
                                            </radialGradient>
                                            <radialGradient id="aura-bud" cx="50%" cy="50%" r="50%">
                                              <stop offset="0%" stopColor="#bde0e5" stopOpacity="0.45" />
                                              <stop offset="100%" stopColor="#bde0e5" stopOpacity="0" />
                                            </radialGradient>
                                          </defs>
                                          <circle cx="50" cy="50" r="38" fill="url(#aura-bud)" className="animate-pulse" style={{ animationDuration: '4s' }} />
                                          <path d="M50,75 Q50,85 52,91" stroke="#7da086" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                                          <path d="M41,71 C35,66 39,57 45,69 Z" fill="#7da086" opacity="0.75" />
                                          <path d="M59,71 C65,66 61,57 55,69 Z" fill="#7da086" opacity="0.75" />
                                          <path d="M50,30 C34,48 42,72 50,75 C58,72 66,48 50,30 Z" fill="url(#grad-bud)" stroke="#5d85a6" strokeWidth="0.8" />
                                          <path d="M50,30 C43,45 46,65 50,75" stroke="#7da086" strokeWidth="0.6" fill="none" opacity="0.6" />
                                          <path d="M50,30 C57,45 54,65 50,75" stroke="#7da086" strokeWidth="0.6" fill="none" opacity="0.6" />
                                          <circle cx="50" cy="22" r="1.5" fill="#dfaf6b" className="animate-ping" style={{ animationDuration: '3s' }} />
                                          <circle cx="50" cy="22" r="1" fill="#dfaf6b" />
                                        </svg>
                                      );
                                    case 1:
                                      return (
                                        <svg viewBox="0 0 100 100" className="w-full h-full p-1.5">
                                          <defs>
                                            <radialGradient id="grad-opening" cx="50%" cy="50%" r="50%">
                                              <stop offset="0%" stopColor="#fffcf5" />
                                              <stop offset="60%" stopColor="#e5efe0" />
                                              <stop offset="100%" stopColor="#7ba186" />
                                            </radialGradient>
                                            <radialGradient id="aura-release" cx="50%" cy="50%" r="50%">
                                              <stop offset="0%" stopColor="#7da086" stopOpacity="0.4" />
                                              <stop offset="100%" stopColor="#7da086" stopOpacity="0" />
                                            </radialGradient>
                                          </defs>
                                          <circle cx="50" cy="50" r="40" fill="url(#aura-release)" className="animate-pulse" style={{ animationDuration: '5s' }} />
                                          <path d="M50,75 Q48,84 46,91" stroke="#7da086" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                                          <path d="M50,72 C25,60 30,42 38,45 C44,48 48,65 50,72 Z" fill="#93b59e" opacity="0.55" />
                                          <path d="M50,72 C75,60 70,42 62,45 C56,48 52,65 50,72 Z" fill="#93b59e" opacity="0.55" />
                                          <path d="M50,34 C40,48 42,68 50,72 C58,68 60,48 50,34 Z" fill="url(#grad-opening)" stroke="#7da086" strokeWidth="0.8" />
                                          <path d="M50,34 C35,50 43,65 47,70 Z" fill="url(#grad-opening)" opacity="0.85" stroke="#7da086" strokeWidth="0.4" />
                                          <path d="M50,34 C65,50 57,65 53,70 Z" fill="url(#grad-opening)" opacity="0.85" stroke="#7da086" strokeWidth="0.4" />
                                          <path d="M30,30 C28,26 31,23 33,26 C35,29 32,32 30,30 Z" fill="#7da086" opacity="0.4" className="animate-bounce" style={{ animationDuration: '4s' }} />
                                          <circle cx="65" cy="25" r="1.5" fill="#dfaf6b" opacity="0.7" />
                                        </svg>
                                      );
                                    case 2:
                                      return (
                                        <svg viewBox="0 0 100 100" className="w-full h-full p-1.5">
                                          <defs>
                                            <radialGradient id="grad-half" cx="50%" cy="50%" r="50%">
                                              <stop offset="0%" stopColor="#fffcf5" />
                                              <stop offset="50%" stopColor="#ebd6b0" />
                                              <stop offset="100%" stopColor="#4c728a" />
                                            </radialGradient>
                                            <radialGradient id="aura-heal" cx="50%" cy="50%" r="50%">
                                              <stop offset="0%" stopColor="#dfaf6b" stopOpacity="0.4" />
                                              <stop offset="100%" stopColor="#dfaf6b" stopOpacity="0" />
                                            </radialGradient>
                                          </defs>
                                          <circle cx="50" cy="50" r="42" fill="url(#aura-heal)" className="animate-pulse" style={{ animationDuration: '3.5s' }} />
                                          <path d="M50,75 Q52,83 55,91" stroke="#7da086" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                                          <path d="M50,72 C20,55 18,35 32,38 C42,40 48,64 50,72 Z" fill="#507487" opacity="0.5" />
                                          <path d="M50,72 C80,55 82,35 68,38 C58,40 52,64 50,72 Z" fill="#507487" opacity="0.5" />
                                          <path d="M50,72 C28,50 38,34 44,38 C48,42 49,66 50,72 Z" fill="url(#grad-half)" stroke="#507487" strokeWidth="0.8" />
                                          <path d="M50,72 C72,50 62,34 56,38 C52,42 51,66 50,72 Z" fill="url(#grad-half)" stroke="#507487" strokeWidth="0.8" />
                                          <path d="M50,40 C42,50 45,68 50,72 C55,68 58,50 50,40 Z" fill="#fffcf5" stroke="#dfaf6b" strokeWidth="0.8" />
                                          <circle cx="50" cy="40" r="4" fill="#fdf2d5" className="animate-ping" style={{ animationDuration: '2s' }} />
                                          <circle cx="50" cy="40" r="3" fill="#dfaf6b" />
                                        </svg>
                                      );
                                    case 3:
                                      return (
                                        <svg viewBox="0 0 100 100" className="w-full h-full p-1.5">
                                          <defs>
                                            <radialGradient id="grad-realign" cx="50%" cy="50%" r="50%">
                                              <stop offset="0%" stopColor="#f5faf6" />
                                              <stop offset="60%" stopColor="#c5dfcb" />
                                              <stop offset="100%" stopColor="#3d664f" />
                                            </radialGradient>
                                            <radialGradient id="aura-realign" cx="50%" cy="50%" r="50%">
                                              <stop offset="0%" stopColor="#bde0e5" stopOpacity="0.45" />
                                              <stop offset="100%" stopColor="#4c755c" stopOpacity="0" />
                                            </radialGradient>
                                          </defs>
                                          <circle cx="50" cy="50" r="44" fill="none" stroke="#bde0e5" strokeWidth="0.6" opacity="0.3" className="animate-ping" style={{ animationDuration: '6s' }} />
                                          <circle cx="50" cy="50" r="36" fill="none" stroke="#7da086" strokeWidth="0.5" opacity="0.35" />
                                          <circle cx="50" cy="50" r="42" fill="url(#aura-realign)" opacity="0.55" />
                                          <path d="M50,75 L50,91" stroke="#4c755c" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                                          <path d="M50,72 C12,50 20,28 35,32 C44,35 48,66 50,72 Z" fill="#4c755c" opacity="0.35" />
                                          <path d="M50,72 C88,50 80,28 65,32 C56,35 52,66 50,72 Z" fill="#4c755c" opacity="0.35" />
                                          <path d="M50,72 C25,40 35,20 50,22 C65,20 75,40 50,72 Z" fill="#4c755c" opacity="0.3" />
                                          <path d="M50,72 C20,48 30,30 40,34 C46,36 49,68 50,72 Z" fill="url(#grad-realign)" stroke="#4c755c" strokeWidth="0.5" />
                                          <path d="M50,72 C80,48 70,30 60,34 C54,36 51,68 50,72 Z" fill="url(#grad-realign)" stroke="#4c755c" strokeWidth="0.5" />
                                          <path d="M50,72 C32,48 40,36 50,38 C60,36 68,48 50,72 Z" fill="url(#grad-realign)" stroke="#2b4737" strokeWidth="0.8" />
                                          <line x1="50" y1="10" x2="50" y2="90" stroke="#7ec4cf" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
                                          <circle cx="50" cy="50" r="1.5" fill="#7ec4cf" />
                                        </svg>
                                      );
                                    case 4:
                                      return (
                                        <svg viewBox="0 0 100 100" className="w-full h-full p-1.5">
                                          <defs>
                                            <radialGradient id="grad-full" cx="50%" cy="50%" r="50%">
                                              <stop offset="0%" stopColor="#fffcf5" />
                                              <stop offset="40%" stopColor="#ebd6b0" />
                                              <stop offset="75%" stopColor="#dfaf6b" />
                                              <stop offset="100%" stopColor="#6e542c" />
                                            </radialGradient>
                                            <radialGradient id="aura-rise" cx="50%" cy="50%" r="50%">
                                              <stop offset="0%" stopColor="#ebd6b0" stopOpacity="0.55" />
                                              <stop offset="100%" stopColor="#ebd6b0" stopOpacity="0" />
                                            </radialGradient>
                                          </defs>
                                          <circle cx="50" cy="50" r="46" fill="url(#aura-rise)" className="animate-pulse" style={{ animationDuration: '3s' }} />
                                          <path d="M50,75 Q48,82 46,91" stroke="#7da086" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                                          <path d="M46,82 C38,80 34,75 36,73 C38,71 43,76 46,82 Z" fill="#7da086" opacity="0.75" />
                                          <path d="M50,72 C5,55 8,25 28,32 C38,35 46,65 50,72 Z" fill="#937544" opacity="0.35" />
                                          <path d="M50,72 C95,55 92,25 72,32 C62,35 54,65 50,72 Z" fill="#937544" opacity="0.35" />
                                          <path d="M50,72 C10,40 25,12 50,15 C75,12 90,40 50,72 Z" fill="#937544" opacity="0.35" />
                                          <path d="M50,72 C15,48 25,28 38,32 C45,34 49,65 50,72 Z" fill="url(#grad-full)" stroke="#937544" strokeWidth="0.5" />
                                          <path d="M50,72 C85,48 75,28 62,32 C55,34 51,65 50,72 Z" fill="url(#grad-full)" stroke="#937544" strokeWidth="0.5" />
                                          <path d="M50,72 C25,44 38,22 48,25 C52,27 50,65 50,72 Z" fill="url(#grad-full)" stroke="#705427" strokeWidth="0.8" />
                                          <path d="M50,72 C75,44 62,22 52,25 C48,27 50,65 50,72 Z" fill="url(#grad-full)" stroke="#705427" strokeWidth="0.8" />
                                          <path d="M50,72 C35,46 45,30 50,32 C55,30 65,46 50,72 Z" fill="url(#grad-full)" stroke="#705427" strokeWidth="0.8" />
                                          <g transform="translate(24, 18) scale(0.55)" className="animate-bounce" style={{ animationDuration: '3.5s' }}>
                                            <path d="M5,5 C1,1 0,6 3,8 C0,10 1,15 5,11 C9,15 10,10 7,8 C10,6 9,1 5,5 Z" fill="#fcf6e8" opacity="0.85" />
                                          </g>
                                          <g transform="translate(73, 14) scale(0.5) rotate(15)" className="animate-bounce" style={{ animationDuration: '4.5s' }}>
                                            <path d="M5,5 C1,1 0,6 3,8 C0,10 1,15 5,11 C9,15 10,10 7,8 C10,6 9,1 5,5 Z" fill="#fcf6e8" opacity="0.9" />
                                          </g>
                                          <circle cx="48" cy="9" r="1" fill="#dfaf6b" className="animate-ping" style={{ animationDuration: '1.5s' }} />
                                          <circle cx="54" cy="7" r="1.5" fill="#dfaf6b" />
                                          <circle cx="38" cy="13" r="1" fill="#dfaf6b" />
                                        </svg>
                                      );
                                    default:
                                      return null;
                                  }
                                })()}
                              </div>
                            </div>

                            {/* Text labels below */}
                            <div className="pt-4 text-center max-w-[170px] px-1">
                              <span className="text-xs sm:text-sm font-mono tracking-widest text-[#567c60] uppercase font-bold">Stage {idx + 1}</span>
                              <h4 className="font-serif text-xl md:text-2xl font-bold text-[#132c3a] leading-tight group-hover:text-[#4c755c] transition-colors duration-300 mt-1">
                                {step.title}
                              </h4>
                              <p className="text-base sm:text-lg text-[#1f472f] mt-1.5 font-cursive font-bold tracking-wide">
                                {stageSubtitles[idx]}
                              </p>
                              <p className="text-xs sm:text-sm text-[#2d4036] mt-2 leading-relaxed font-medium">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>

                </div>
              </div>

              {/* VERTICAL DIVIDER (hidden on mobile, visible on large screens) */}
              <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
                <div className="w-[1px] bg-[#dfdbc9]/60 h-[85%] self-center" />
              </div>

              {/* RIGHT COLUMN: Today's Healing Affirmation (col-span-4) */}
              <div className="lg:col-span-4 flex flex-col justify-start py-4">
                <HealingAffirmation />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 11. OLD IDENTITY VS NEW AVATAR COMPARISON */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-[#dfdbc9]/30" id="identity-comparison">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#7da086]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#dfaf6b]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          
          <h3 className="font-serif text-4xl md:text-5xl text-ocean font-medium tracking-tight mb-4">
            Old Identity <span className="font-light italic text-[#7da086]">vs</span> New Avatar
          </h3>
          <p className="font-sans text-base text-[#52665b] font-light tracking-wide max-w-2xl mx-auto mb-16">
            Witness the profound shift from a life of survival and past repetition to a sovereign, healed reality.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 md:gap-8 lg:gap-4 items-stretch max-w-5xl mx-auto mt-16 relative">
            
            {/* Left Card: Unhealed Version (Heavy, Stagnant, Premium Dark Gray) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#182329] to-[#0e1619] border border-[#2d3a41] rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group shadow-xl">
              {/* Heavy shadowed corner overlay */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#000]/10 to-[#000]/30 pointer-events-none" />
              <div className="absolute top-0 left-0 w-32 h-32 bg-gray-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-[#1f2d34] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#2d3a41] shadow-md">
                  <span className="text-2xl opacity-60">⏳</span>
                </div>
                <h4 className="font-serif text-2xl md:text-3xl text-white font-medium mb-1">
                  The Unhealed Version
                </h4>
                <p className="text-[11px] font-mono text-gray-400 uppercase tracking-widest mb-8 font-semibold">
                  Old Identity
                </p>

                <ul className="space-y-4 text-left text-sm text-[#9ab0b8] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 mt-1 flex-shrink-0 text-xs">✦</span>
                    <span>Repeating past trauma loops and limiting self-beliefs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 mt-1 flex-shrink-0 text-xs">✦</span>
                    <span>Constantly negotiating with the past and seeking validation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 mt-1 flex-shrink-0 text-xs">✦</span>
                    <span>Nervous system trapped in fight-or-flight survival mode</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 mt-1 flex-shrink-0 text-xs">✦</span>
                    <span>Emotional cord attachments drain your life force energy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 mt-1 flex-shrink-0 text-xs">✦</span>
                    <span>Living in comfort zones while ignoring your soul's purpose</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Middle: Elegant Upward-Pointing Vertical Transition Connector (Lg Screen) */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center relative min-h-full py-8">
              <div className="h-4/5 w-[2px] bg-gradient-to-b from-[#dfaf6b] via-[#7da086]/50 to-slate-200/25 relative flex flex-col items-center">
                {/* Glowing Bouncing Upward Transition Arrow at the top of the line */}
                <div className="absolute -top-6 bg-[#f4faf6] p-2.5 rounded-full border-2 border-[#7da086] shadow-md animate-bounce flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#7da086]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                  </svg>
                </div>
                
                {/* Micro indicators representing energy rise */}
                <div className="w-3 h-3 rounded-full bg-[#dfaf6b] absolute top-1/4 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="w-2 h-2 rounded-full bg-[#dfaf6b] absolute top-1/4" />
                <div className="w-2 h-2 rounded-full bg-[#7da086] absolute top-2/4" />
                <div className="w-2 h-2 rounded-full bg-slate-400/40 absolute top-3/4" />
              </div>
            </div>

            {/* Mobile / Tablet Horizontal Transition Element */}
            <div className="lg:hidden flex items-center justify-center py-4 my-2">
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#7da086] font-bold mb-2">Shift into sovereignty</span>
                <div className="bg-[#f4faf6] p-3 rounded-full border-2 border-[#7da086] shadow-md animate-bounce flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#7da086]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Card: New Avatar Healed Version (Radiant, Gold Accented, Ivory & Soft Sage) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#fbfaf6] via-[#f7fbf8] to-[#f0f7f2] border-2 border-gold/40 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group shadow-xl hover:shadow-2xl transition-all duration-500 ring-4 ring-[#7da086]/5">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold-light/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -top-3 -right-3 text-3xl font-bold text-yellow-400 animate-pulse drop-shadow-md">👑</div>
              
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gold-light/40 shadow-md">
                  <span className="text-2xl">✨</span>
                </div>
                <h4 className="font-serif text-2xl md:text-3xl text-ocean-dark font-medium mb-1">
                  The New Avatar
                </h4>
                <p className="text-[11px] font-mono text-[#7da086] uppercase tracking-widest mb-8 font-bold">
                  Healed Version
                </p>

                <ul className="space-y-4 text-left text-sm text-[#1b3a25] font-medium leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-[#dfaf6b] mt-1 flex-shrink-0 text-sm">✦</span>
                    <span>Fully aligned with your highest sovereign timeline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#dfaf6b] mt-1 flex-shrink-0 text-sm">✦</span>
                    <span>Sovereign emotional boundaries and cleared cords</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#dfaf6b] mt-1 flex-shrink-0 text-sm">✦</span>
                    <span>A regulated, calm nervous system vibrating in peace</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#dfaf6b] mt-1 flex-shrink-0 text-sm">✦</span>
                    <span>Operating from authentic power, growth, and truth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#dfaf6b] mt-1 flex-shrink-0 text-sm">✦</span>
                    <span>Designing a beautiful future and creating a legacy</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Deep Profound Quote and Call to Action */}
          <div className="mt-20 max-w-3xl mx-auto p-10 bg-gradient-to-br from-[#132c3a] to-[#041a24] text-cream rounded-[2.5rem] border border-gold-light/25 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-teal-soft/10 to-transparent pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#dfaf6b]/5 rounded-full blur-3xl pointer-events-none" />
            
            {/* Mini Shiny Yellow Crown over the quote */}
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-yellow-400 drop-shadow-[0_2px_8px_rgba(250,204,21,0.5)] animate-pulse" viewBox="0 0 100 100" fill="currentColor">
                <path d="M20,70 L30,35 L50,55 L70,35 L80,70 Z" />
                <circle cx="20" cy="70" r="3" />
                <circle cx="30" cy="35" r="3" />
                <circle cx="50" cy="55" r="3" />
                <circle cx="70" cy="35" r="3" />
                <circle cx="80" cy="70" r="3" />
              </svg>
            </div>

            <p className="font-serif text-lg md:text-xl lg:text-2xl text-white font-medium leading-relaxed italic mb-8">
              "You cannot become your new avatar until you stop negotiating with your past."
            </p>

            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto mb-8" />

            <p className="font-sans text-base text-cream/90 font-light mb-8 leading-relaxed max-w-lg mx-auto">
              Ready to begin your journey and make a <span className="font-bold text-white">New Avatar</span>?
            </p>

            <button
              onClick={() => triggerBooking()}
              className="px-8 py-4 bg-gradient-to-r from-[#dfaf6b] to-[#cf9e5a] hover:from-[#cf9e5a] hover:to-[#be8d49] text-ocean-dark font-sans font-bold tracking-wider rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 uppercase inline-flex items-center gap-2.5"
            >
              <span>Book a Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>
      </>
      ) : (
        <>
          {currentView === 'admin_images' && <ImageManagementStudio onBackToSite={() => { setCurrentView('home'); window.location.hash = ''; }} />}
          {currentView === 'about' && <AboutPage onBack={() => setCurrentView('home')} onBook={triggerBooking} />}
          {currentView === 'one_one' && <OneOnOnePage onBack={() => setCurrentView('home')} onBook={triggerBooking} />}
          {currentView === 'nlp' && <NLPPage onBack={() => setCurrentView('home')} onBook={triggerBooking} />}
          {currentView === 'relationship' && <RelationshipPage onBack={() => setCurrentView('home')} onBook={triggerBooking} />}
          {currentView === 'trauma' && <TraumaPage onBack={() => setCurrentView('home')} onBook={triggerBooking} />}
          {currentView === 'reiki' && <ReikiChakraPage onBack={() => setCurrentView('home')} onBook={triggerBooking} />}
          {currentView === 'hypnotherapy' && <HypnotherapyEFTPage onBack={() => setCurrentView('home')} onBook={triggerBooking} />}
          {currentView === 'innerchild' && <InnerChildPage onBack={() => setCurrentView('home')} onBook={triggerBooking} />}
          {currentView === 'timeline' && <TimelinePage onBack={() => setCurrentView('home')} onBook={triggerBooking} />}
          {currentView === 'tarot' && <TarotPage onBack={() => setCurrentView('home')} onBook={triggerBooking} />}
          {currentView === 'traintrainer' && <TrainTrainerPage onBack={() => setCurrentView('home')} onBook={triggerBooking} />}
        </>
      )}


      {/* 11. FOOTER SECTION */}
      <footer className="bg-[#0a3537] text-cream pt-16 pb-8 border-t border-white/5 font-sans text-xs" id="footer-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start border-b border-white/5 pb-12">
            
            {/* About Column (col-span-3) */}
            <div className="md:col-span-3 space-y-5 text-left md:border-r md:border-white/5 md:pr-6">
              
              {/* HealLogo Navigation Brand Logo & Brand Name */}
              <div className="flex items-center">
                <HealLogo size="sm" showText={true} isDarkBg={true} />
              </div>

              <p className="text-[#c5dcd0] leading-relaxed max-w-xs font-light text-[11px] md:text-xs">
                A sacred space for healing, transformation and spiritual growth. You deserve to heal, rise and thrive.
              </p>
              
              {/* Footer social icons with gold hover exactly like Image 1 */}
              <div className="flex items-center gap-4 text-cream/75 pt-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors duration-200" aria-label="Instagram">
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors duration-200" aria-label="Facebook">
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors duration-200" aria-label="YouTube">
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                  </svg>
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors duration-200" aria-label="WhatsApp">
                  <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links Column (col-span-2) */}
            <div className="md:col-span-2 space-y-4 text-left md:border-r md:border-white/5 md:pr-4">
              <h4 className="font-serif text-[13px] font-semibold text-white/95 tracking-wide">Quick Links</h4>
              <ul className="space-y-2.5 text-[#c5dcd0] font-medium text-[11px] md:text-xs flex flex-col items-start">
                <li><button onClick={() => navigateToSection('why-work-with-me')} className="hover:text-white transition-colors cursor-pointer text-left">About Me</button></li>
                <li><button onClick={() => navigateToSection('healing-modalities-section')} className="hover:text-white transition-colors cursor-pointer text-left">Healing Modalities</button></li>
                <li><button onClick={() => navigateToSection('signature-journeys')} className="hover:text-white transition-colors cursor-pointer text-left">Programs</button></li>
                <li><button onClick={() => navigateToSection('healing-process')} className="hover:text-white transition-colors cursor-pointer text-left">Courses</button></li>
                <li><button onClick={() => navigateToSection('testimonials-section')} className="hover:text-white transition-colors cursor-pointer text-left">Blog</button></li>
                <li><button onClick={() => navigateToSection('footer-section')} className="hover:text-white transition-colors cursor-pointer text-left">Contact</button></li>
              </ul>
            </div>

            {/* Healing Modalities Column (col-span-3) */}
            <div className="md:col-span-3 space-y-4 text-left md:border-r md:border-white/5 md:pr-4">
              <h4 className="font-serif text-[13px] font-semibold text-white/95 tracking-wide">Healing Modalities</h4>
              <ul className="space-y-2.5 text-[#c5dcd0] font-medium text-[11px] md:text-xs flex flex-col items-start">
                {[
                  { id: 'nlp', name: 'Neuro Linguistic Programming (NLP)' },
                  { id: 'relationship', name: 'Relationship Mastery' },
                  { id: 'trauma', name: 'Trauma Healing' },
                  { id: 'reiki', name: 'Reiki Healing & Chakra Balancing' },
                  { id: 'hypnotherapy', name: 'Hypnotherapy and EFT' },
                  { id: 'innerchild', name: 'Energy Healing & Cord Cutting' },
                  { id: 'timeline', name: 'Timeline Therapy' },
                  { id: 'tarot', name: 'Tarot and Numerology' }
                ].map(mod => (
                  <li key={mod.id}>
                    <button 
                      onClick={() => {
                        setCurrentView(mod.id as any);
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }} 
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {mod.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column (col-span-2) */}
            <div className="md:col-span-2 space-y-4 text-left md:border-r md:border-white/5 md:pr-4">
              <h4 className="font-serif text-[13px] font-semibold text-white/95 tracking-wide">Support</h4>
              <ul className="space-y-2.5 text-[#c5dcd0] font-medium font-sans text-[11px] md:text-xs">
                <li><a href="#hero-section" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#hero-section" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#hero-section" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#hero-section" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>

            {/* Contact Details Column (col-span-2) */}
            <div className="md:col-span-2 space-y-4 text-left pl-1">
              <h4 className="font-serif text-[13px] font-semibold text-white/95 tracking-wide">Contact</h4>
              <ul className="space-y-3.5 text-[#c5dcd0] font-sans text-[11px] md:text-xs">
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#d4af37]/90 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="font-medium text-cream/90 hover:text-white transition-colors">+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#d4af37]/90 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="font-medium text-cream/90 hover:text-white transition-colors truncate">hello@healwithheer.com</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#d4af37]/90 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span className="font-medium text-cream/90 hover:text-white transition-colors">Worldwide (Online)</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright Center Align with gold lotus separator precisely as in Image 1 */}
          <div className="pt-8 flex flex-col items-center gap-4 text-[#c5dcd0] text-[11px] font-light">
            <div className="flex items-center gap-2.5">
              <span>© 2026 Heal With Heer. All Rights Reserved.</span>
              
              {/* Delicate gold outline lotus separator symbol precisely styled as in Image 1 */}
              <svg className="w-5 h-5 text-[#d4af37] opacity-80 ml-1.5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 40,82 C 45,80 55,80 60,82" />
                <path d="M 50,30 C 46,45 46,68 50,75 C 54,68 54,45 50,30 Z" />
                <path d="M 50,38 C 38,50 41,68 50,75 C 59,68 62,50 50,38 Z" />
                <path d="M 50,48 C 28,52 30,68 46,75 C 42,67 44,56 50,48 Z" />
                <path d="M 50,48 C 72,52 70,68 54,75 C 58,67 56,56 50,48 Z" />
              </svg>

              <button
                onClick={() => { setCurrentView('admin_images'); window.location.hash = '#admin/images'; }}
                className="text-[10px] text-white/40 hover:text-[#D4AF37] transition-colors ml-2 font-mono underline"
                title="Open Image Management Studio"
              >
                Image Studio
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING INTERACTIVE WHATSAPP (Modular Component) */}
      <WhatsAppFloat />

      {/* AI HEALING QUIZ TOGGLE & POPUP MODAL */}
      <AIQuizToggle onOpenQuiz={() => setIsQuizOpen(true)} />
      <HealingQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onNavigateToModality={(modKey) => {
          setCurrentView(modKey as any);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onBookSession={(modTitle) => triggerBooking(modTitle || "1:1 Session")}
      />

      {/* SACRED CALENDAR RESERVATION MODAL (Modular Component) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialModality={preSelectedModality}
      />

      {/* LETTERS FROM THE UNIVERSE CELESTIAL MODAL */}
      <LettersFromUniverseModal
        isOpen={isUniverseModalOpen}
        onClose={() => setIsUniverseModalOpen(false)}
      />

      {/* IMAGE MANAGEMENT STUDIO MODALS & TOOLBAR */}
      <VisualEditToolbar onOpenStudio={() => { setCurrentView('admin_images'); window.location.hash = '#admin/images'; }} />
      <ImageUploadModal />

    </div>
  );
}

export default function App() {
  return (
    <ImageProvider>
      <MainWebsiteContent />
    </ImageProvider>
  );
}
