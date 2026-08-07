import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, CheckCheck } from 'lucide-react';
import { useImageRegistry } from '../context/ImageContext';

export default function WhatsAppFloat() {
  const { getSrc } = useImageRegistry();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; time: string }>>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Initialize with greeting after a short delay
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        setMessages([
          {
            text: "Namaste, beautiful soul. 🙏 Welcome to Heal With Heer. I am currently in a sacred healing circle, but your energy is warmly felt. How may I assist your journey today?",
            isUser: false,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = {
      text: inputText,
      isUser: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Auto-respond with helpful message after delay
    setTimeout(() => {
      setIsTyping(false);
      let replyText = "I have received your vibration. The quickest way to align is to click 'Book a Session' above to reserve our calendar time. Otherwise, leave your WhatsApp number here, and I will text you personally by sunset. ✨";
      
      // Smart answers
      const lower = inputText.toLowerCase();
      if (lower.includes('price') || lower.includes('cost') || lower.includes('how much')) {
        replyText = "Our sacred 90-minute alignment journeys start at $150. This includes personalized crystal blessings, sound realignments, and custom integration workbooks. Would you like me to guide you to our booking system?";
      } else if (lower.includes('modality') || lower.includes('services') || lower.includes('how do you heal')) {
        replyText = "We offer 8 deep-level modalities including Chakra Healing, Womb & Feminine Reclamation, Tarot Readings, Reiki, and Timeline Therapy. What areas of your heart or body are calling for release today?";
      }

      setMessages(prev => [
        ...prev,
        {
          text: replyText,
          isUser: false,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 2000);
  };

  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end">
      {/* Interactive Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="w-80 h-96 bg-cream rounded-3xl border border-gold-light/40 shadow-2xl flex flex-col overflow-hidden mb-4 z-50 font-sans"
          >
            {/* Header */}
            <div className="p-4 bg-ocean text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-cream border-2 border-gold-light flex items-center justify-center font-serif text-ocean font-bold text-sm">
                    HW
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-ocean rounded-full" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-semibold tracking-wider uppercase">Heer — Healing</h4>
                  <span className="text-[10px] text-teal-light">Sacredly Connected</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white"
                id="close-whatsapp-chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Body */}
            <div 
              className="flex-1 overflow-y-auto p-4 space-y-3 bg-cover bg-blend-overlay bg-cream/90 flex flex-col"
              style={{
                backgroundImage: `url('${getSrc('whatsapp.chat_bg', 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=200&blur=4')}')`
              }}
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[80%] rounded-2xl p-3 text-xs shadow-sm ${
                    m.isUser
                      ? 'bg-ocean text-white self-end rounded-tr-none'
                      : 'bg-white text-ocean self-start rounded-tl-none border border-gold-light/20'
                  }`}
                >
                  <p className="leading-relaxed">{m.text}</p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[8px] text-sage">
                    <span>{m.time}</span>
                    {m.isUser && <CheckCheck className="w-3 h-3 text-teal-light" />}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="bg-white/80 text-ocean border border-gold-light/20 self-start rounded-2xl rounded-tl-none p-3 text-xs shadow-sm max-w-[50%] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-ocean rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-ocean rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-ocean rounded-full animate-bounce" />
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-ivory border-t border-gold-light/20 flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="Ask about modalities or book..."
                className="flex-1 px-3 py-2 bg-cream rounded-xl text-xs text-ocean border border-gold-light/40 focus:outline-none focus:border-teal-soft placeholder:text-sage/40"
              />
              <button
                type="submit"
                className="p-2 bg-ocean hover:bg-ocean-dark text-white rounded-xl transition-colors duration-200"
                id="send-whatsapp-message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-tr from-ocean to-teal-soft hover:from-ocean-dark hover:to-teal-soft text-white rounded-full flex items-center justify-center shadow-2xl relative border-2 border-gold-light/50 transition-all duration-300"
        id="whatsapp-floating-button"
        aria-label="Connect on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 text-cream animate-pulse" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold border border-ivory rounded-full flex items-center justify-center text-[8px] font-bold text-ocean">
          1
        </span>
      </motion.button>
    </div>
  );
}
