import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Heart } from 'lucide-react';

interface LettersFromUniverseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CELESTIAL_TEMPLATES = [
  "The stars have watched your quiet strength, dearest {name}. Every tear you've shed has been a cleansing rain for your soul. Breathe in the cosmic light today, and know that you are deeply held by the hands of the Universe. You do not have to carry the weight of the entire world; simply exist, shine, and let yourself heal.",
  "To {name}, the Universe whispers: The stagnation you feel is not a permanent state, but a sacred pause before a spectacular bloom. Align your heart with the divine life force. Your chakras are ready to open, and your life is ready to receive the infinite flow of cosmic light. Trust the timing of your life.",
  "Dearest {name}, there is a gentle healing energy flowing through your hands and your spirit at this very moment. Stop looking outward for the answers you already carry in your quiet depths. Trust your intuition, trust the warmth of your touch, and know that you are a powerful channel of universal love.",
  "Sweet {name}, look at how far you have walked on this earth. The Universe sees your courage to heal. Today, release the old ancestral weight, let your auric shield glow with pristine emerald light, and reclaim your sovereign peace. You are worthy of the same deep healing you so freely offer to others.",
  "Dearest {name}, the light that animates the stars is the very same light that beats in your heart. You are never separate from the infinite. When you feel small or exhausted, surrender to the silence. Feel the warm cosmic current restoring every cell, bringing you back to absolute harmony. You are safe."
];

export default function LettersFromUniverseModal({ isOpen, onClose }: LettersFromUniverseModalProps) {
  const [step, setStep] = useState<'input' | 'drawing' | 'letter'>('input');
  const [letterName, setLetterName] = useState('');
  const [generatedLetter, setGeneratedLetter] = useState<string | null>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset state when closing
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setStep('input');
        setLetterName('');
        setGeneratedLetter(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleDrawLetter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!letterName.trim()) return;

    setStep('drawing');

    setTimeout(() => {
      const hash = letterName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const letterIndex = hash % CELESTIAL_TEMPLATES.length;
      const rawTemplate = CELESTIAL_TEMPLATES[letterIndex];
      const finalized = rawTemplate.replace(/{name}/g, letterName.trim());

      setGeneratedLetter(finalized);
      setStep('letter');
    }, 1500);
  };

  const handleReset = () => {
    setStep('input');
    setLetterName('');
    setGeneratedLetter(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/45 backdrop-blur-md cursor-pointer z-0"
          />

          {/* Modal Content Box - Zero Scroll, Compact & Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative w-[90%] max-w-lg bg-[#FAF6EE] border-2 border-[#dfdbc9] rounded-[2rem] shadow-[0_20px_50px_rgba(10,37,44,0.18)] p-6 sm:p-8 md:p-9 text-center z-10 overflow-hidden text-[#0A252C] select-none my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ancient Decorative Gold Corner Accents */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#c0942c]/40 rounded-tl-sm pointer-events-none" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#c0942c]/40 rounded-tr-sm pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#c0942c]/40 rounded-bl-sm pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#c0942c]/40 rounded-br-sm pointer-events-none" />

            {/* Fine Inner Accent Border */}
            <div className="absolute inset-2.5 border border-[#c0942c]/20 rounded-[1.6rem] pointer-events-none select-none" />

            {/* Soft Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#c0942c]/10 blur-3xl pointer-events-none" />

            {/* Close Icon Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-[#0A252C]/60 hover:text-[#0A252C] hover:bg-[#c0942c]/10 transition-colors cursor-pointer z-30 group"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Modal Content Switcher */}
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                {step === 'input' && (
                  <motion.div
                    key="step-input"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    {/* Header */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center justify-center gap-1.5 text-[#c0942c] mb-1">
                        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em]">Sacred Channel</span>
                        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                      </div>

                      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0A252C] tracking-tight">
                        Letters From the Universe
                      </h2>

                      <p className="text-xs sm:text-sm text-[#0A252C]/80 max-w-sm mx-auto leading-relaxed font-light">
                        Focus your intention, enter your name, and receive a channeled message of cosmic guidance.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleDrawLetter} className="space-y-4 pt-1">
                      <div className="space-y-1.5 text-center">
                        <label className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#c0942c] block">
                          What is your name, beloved soul?
                        </label>
                        <input
                          type="text"
                          value={letterName}
                          onChange={(e) => setLetterName(e.target.value)}
                          placeholder="Enter Your Name"
                          className="w-full bg-white/90 border border-[#dfdbc9] focus:border-[#c0942c] focus:ring-1 focus:ring-[#c0942c] rounded-full px-5 py-3 text-center text-[#0A252C] font-serif text-base placeholder:text-[#0A252C]/30 shadow-xs tracking-wide focus:outline-none transition-all"
                          required
                          autoFocus
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={!letterName.trim()}
                        className={`w-full py-3.5 rounded-full text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-xs ${
                          !letterName.trim()
                            ? "bg-[#c0942c]/40 cursor-not-allowed"
                            : "bg-gradient-to-r from-[#c0942c] to-[#d5a83a] hover:opacity-95 shadow-[0_4px_16px_rgba(192,148,44,0.22)] active:scale-[0.98]"
                        }`}
                      >
                        Draw Your Celestial Letter ✧
                      </button>
                    </form>
                  </motion.div>
                )}

                {step === 'drawing' && (
                  <motion.div
                    key="step-drawing"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="py-10 space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#FAF5EB] border-2 border-dashed border-[#c0942c] flex items-center justify-center text-[#c0942c] mx-auto animate-spin duration-[4000ms]">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <p className="text-xs sm:text-sm font-serif italic text-[#0A252C]/85">
                      Unfolding your sacred celestial parchment...
                    </p>
                  </motion.div>
                )}

                {step === 'letter' && generatedLetter && (
                  <motion.div
                    key="step-letter"
                    initial={{ opacity: 0, scale: 0.96, rotateY: -6 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.96, rotateY: 6 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="space-y-3 py-1"
                  >
                    {/* Header Title */}
                    <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#0A252C] tracking-tight">
                      Letters From the Universe
                    </h2>

                    {/* Decorative Top Gold Ornament */}
                    <div className="flex items-center justify-center gap-2 text-[#c0942c]/70 text-xs font-serif my-1">
                      <div className="h-[1px] w-12 bg-[#c0942c]/30" />
                      <span>✧</span>
                      <div className="h-[1px] w-12 bg-[#c0942c]/30" />
                    </div>

                    {/* Parchment Letter Body Box */}
                    <div className="bg-[#FAF5EB]/90 border border-[#dfdbc9]/80 rounded-xl p-4 sm:p-5 shadow-xs text-left relative overflow-hidden space-y-2.5">
                      <p className="font-serif text-sm sm:text-base font-bold italic text-[#0A252C]">
                        Dear {letterName.trim()},
                      </p>

                      <p className="text-xs sm:text-sm font-serif italic leading-relaxed text-[#0A252C]/90 text-justify">
                        {generatedLetter}
                      </p>

                      {/* Decorative Bottom Gold Ornament */}
                      <div className="flex items-center justify-center gap-2 text-[#c0942c]/70 text-xs font-serif pt-1">
                        <div className="h-[1px] w-10 bg-[#c0942c]/25" />
                        <span>✧</span>
                        <div className="h-[1px] w-10 bg-[#c0942c]/25" />
                      </div>

                      {/* Signature */}
                      <div className="text-right font-serif pt-1">
                        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c0942c]">
                          With Light,
                        </p>
                        <p className="text-xs sm:text-sm italic text-[#0A252C] font-semibold mt-0.5">
                          The Universe ✨
                        </p>
                      </div>
                    </div>

                    {/* Step 5 Navigation Buttons - No Scrolling, Complete Layout */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                      <button
                        onClick={handleReset}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#c0942c] bg-white/90 hover:bg-[#c0942c] text-[#c0942c] hover:text-white text-[11px] font-bold uppercase tracking-widest transition-all shadow-xs cursor-pointer active:scale-95"
                      >
                        Draw Another Letter ✧
                      </button>
                      <button
                        onClick={onClose}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#dfdbc9] bg-white/70 hover:bg-[#dfdbc9]/40 text-[#0A252C]/80 hover:text-[#0A252C] text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer active:scale-95"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
