import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Testimonial } from '../types';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Course Graduate',
    role: 'Verified Student',
    quote: "I joined the Time Line Therapy course because I wanted to understand why I kept reacting to certain situations in the same way. I wasn't sure what to expect at first, but the sessions were easy to follow. It was a learning experience that I could actually apply in my everyday life.",
    rating: 5,
    imageUrl: ''
  },
  {
    id: '2',
    name: 'Course Graduate',
    role: 'Verified Student',
    quote: "One of the things I appreciated most about this course was the balance between learning and practice. The sessions were interactive and encouraged everyone to participate. I left the course feeling more positive and more self-aware",
    rating: 5,
    imageUrl: ''
  },
  {
    id: '3',
    name: 'Course Graduate',
    role: 'Verified Student',
    quote: "The best part of this course was how practical and genuine it felt. Instead of only talking about healing, we were given simple tools that could be used outside the classroom. The trainer was kind, approachable and made sure everyone felt included throughout the training. It was time well spent.",
    rating: 5,
    imageUrl: ''
  },
  {
    id: '4',
    name: 'Course Graduate',
    role: 'Verified Student',
    quote: "This course was one of the best personal development trainings I have attended. The trainer created a friendly atmosphere where everyone felt comfortable learning and practising. The techniques were explained clearly, and every session added something valuable.",
    rating: 5,
    imageUrl: ''
  },
  {
    id: '5',
    name: 'Course Graduate',
    role: 'Verified Student',
    quote: "I joined the Relationship Master Certification Program hoping to improve the way I communicate with the people around me. The course gave me practical tools that I could use in everyday conversations instead of just teaching theory. Now it has my life easier and happier ",
    rating: 5,
    imageUrl: ''
  },
  {
    id: '6',
    name: 'Course Graduate',
    role: 'Verified Student',
    quote: "I joined the Energy Healing and Cord Cutting course because I wanted to understand how to feel more balanced and emotionally lighter. The sessions were calm, practical and easy to follow. After completing the course, I noticed that I felt more peaceful, slept better and was able to let go of stress much more easily.",
    rating: 5,
    imageUrl: ''
  },
  {
    id: '7',
    name: 'Course Graduate',
    role: 'Verified Student',
    quote: "I joined the Tarot course because I wanted to learn more than just the meanings of the cards. The practice sessions helped me build confidence, and by the end of the course I was able to read the cards with much more clarity.",
    rating: 5,
    imageUrl: ''
  },
  {
    id: '8',
    name: 'Course Graduate',
    role: 'Verified Student',
    quote: "This Reiki Healing course exceeded my expectations. The practice sessions were the highlight of the course because they helped me understand the techniques much better. Since completing the training, I have become more mindful, more relaxed and much more confident. I would happily recommend this course to anyone looking for genuine personal growth.",
    rating: 5,
    imageUrl: ''
  },
  {
    id: '9',
    name: 'Course Graduate',
    role: 'Verified Student',
    quote: "I enrolled in this course to work on my personal growth and I'm really happy with my decision. I enjoyed the supportive atmosphere and never felt uncomfortable asking questions. I would definitely recommend this course to anyone looking to improve themselves.",
    rating: 5,
    imageUrl: ''
  },
  {
    id: '10',
    name: 'Course Graduate',
    role: 'Verified Student',
    quote: "Before joining this course, I often overthought simple situations and found it difficult to communicate clearly. The NLP techniques were explained with real-life examples, which made them easy to remember and practise. I'm really glad I decided to take this course.",
    rating: 5,
    imageUrl: ''
  },
  {
    id: '11',
    name: 'Course Graduate',
    role: 'Verified Student',
    quote: "This course gave me a completely different perspective on emotional healing. I noticed that I became calmer, more emotionally aware and much better at handling situations that used to affect me deeply. I'm grateful I took this course.",
    rating: 5,
    imageUrl: ''
  },
  {
    id: '12',
    name: 'Course Graduate',
    role: 'Verified Student',
    quote: "Before enrolling, I had read about Hypnotherapy and EFT but never understood how they worked together. This course made everything clear through practical demonstrations and guided practice. I left every session with something new to apply in my personal life. ",
    rating: 5,
    imageUrl: ''
  },
  {
    id: '13',
    name: 'Course Graduate',
    role: 'Verified Student',
    quote: "Before attending this course, I often found it difficult to deal with misunderstandings in my personal relationships. The sessions helped me understand how small changes in communication can make a big difference.",
    rating: 5,
    imageUrl: ''
  },
  {
    id: '14',
    name: 'Course Graduate',
    role: 'Verified Student',
    quote: "Before attending this training, I had only read about energy healing and wasn't sure how it actually worked. The course explained everything in a simple and practical way without making it complicated.",
    rating: 5,
    imageUrl: ''
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section className="py-20 bg-cream relative overflow-hidden border-t border-b border-gold-light/10" id="testimonials-section">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] watercolor-teal opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-ocean font-medium tracking-tight">
            What My Clients Say
          </h2>
          <div className="w-16 h-0.5 bg-gold/50 mx-auto mt-4" />
        </div>

        {/* Carousel Framework */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Sliding Quote content */}
            <div className="min-h-[320px] flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
                >
                  {/* Lotus Emblem Icon Frame */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="relative">
                      {/* Gold arched frame backing */}
                      <div className="absolute -inset-2 border border-gold/30 rounded-full scale-105" />
                      {/* Lotus Emblem Container */}
                      <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-ivory shadow-xl relative z-10 bg-gradient-to-br from-[#1b3240] via-[#233f52] to-[#2c4759] flex items-center justify-center">
                        <div className="relative flex items-center justify-center p-6 text-gold-light">
                          <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl" />
                          <svg className="w-20 h-20 relative z-10 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                            <path d="M12 2C11.5 2 11 3 11 4.5C11 6.5 12 9 12 9C12 9 13 6.5 13 4.5C13 3 12.5 2 12 2M6 8C5.5 8 5 9.5 5 11C5 13 6.5 15 6.5 15C6.5 15 7.5 12.5 7.5 11C7.5 9.5 7 8 6 8M18 8C17 8 16.5 9.5 16.5 11C16.5 12.5 17.5 15 17.5 15C17.5 15 19 13 19 11C19 9.5 18.5 8 18 8M3 14C2.5 14 2 15.5 2 17C2 18.5 3.5 20 3.5 20C3.5 20 4.5 18 4.5 17C4.5 15.5 4 14 3 14M21 14C20 14 19.5 15.5 19.5 17C19.5 18 20.5 20 20.5 20C20.5 20 22 18.5 22 17C22 15.5 21.5 14 21 14Z" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      {/* Floating star emblem */}
                      <div className="absolute bottom-2 right-4 w-12 h-12 rounded-full bg-cream shadow-md flex items-center justify-center border border-gold-light/40 z-20">
                        <Star className="w-5 h-5 text-gold fill-gold" />
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className="md:col-span-7 text-left flex flex-col justify-center">
                    {/* Big quotation mark */}
                    <Quote className="w-12 h-12 text-teal-soft/20 mb-4 stroke-[1.5]" />

                    {/* Ratings */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: current.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="font-serif text-base md:text-lg text-ocean leading-relaxed font-light italic mb-6">
                      "{current.quote}"
                    </p>

                    {/* Author credit */}
                    <div>
                      <h4 className="font-serif text-lg text-ocean font-semibold tracking-wide">
                        {current.name}
                      </h4>
                      <p className="text-xs uppercase tracking-widest text-gold font-bold mt-1">
                        {current.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Left and Right Nav buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-20">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-ivory hover:bg-cream border border-gold-light/40 text-ocean-light hover:text-ocean transition-all duration-200 shadow-md"
                id="testimonial-prev"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-20">
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-ivory hover:bg-cream border border-gold-light/40 text-ocean-light hover:text-ocean transition-all duration-200 shadow-md"
                id="testimonial-next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots below slider */}
          <div className="flex justify-center gap-2.5 mt-10">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'w-8 bg-ocean' : 'w-2.5 bg-sage/30 hover:bg-sage/60'
                }`}
                id={`testimonial-dot-${idx}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

