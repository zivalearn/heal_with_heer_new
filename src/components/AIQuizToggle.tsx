import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface AIQuizToggleProps {
  onOpenQuiz: () => void;
}

export default function AIQuizToggle({ onOpenQuiz }: AIQuizToggleProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      
      {/* Floating AI Capsule Button - Light Hero Palette Theme */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenQuiz}
        className="px-5 py-3.5 bg-gradient-to-r from-[#FFFDF9] via-[#FAF6ED] to-[#FFFDF9] border-2 border-[#c0942c] text-[#072a3a] rounded-full flex items-center gap-2.5 shadow-[0_8px_25px_rgba(192,148,44,0.3)] relative cursor-pointer hover:shadow-[0_12px_35px_rgba(192,148,44,0.45)] transition-all duration-300"
        id="ai-quiz-toggle-button"
        aria-label="Launch AI Healing Quiz"
      >
        <div className="relative flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-[#c0942c] animate-pulse" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#c0942c] rounded-full animate-ping" />
        </div>
        <span className="font-serif text-xs font-bold tracking-wider text-[#072a3a] hidden sm:inline uppercase">
          AI Healing Quiz
        </span>
        <span className="font-serif text-xs font-bold tracking-wider text-[#072a3a] sm:hidden uppercase">
          Quiz
        </span>
      </motion.button>

    </div>
  );
}

