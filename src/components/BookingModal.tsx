import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare, Check, Sparkles, HelpCircle } from 'lucide-react';
import { SessionBooking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModality?: string;
}

const MODALITIES = [
  'Neuro Linguistic Programming (NLP)',
  'Relationship Mastery',
  'Trauma Healing',
  'Reiki Healing & Chakra Balancing',
  'Hypnotherapy and EFT',
  'Inner Child Healing and Cord Cutting',
  'Timeline Therapy',
  'Tarot and Numerology'
];

const TIME_SLOTS = [
  '09:00 AM - 10:30 AM (Morning Flow)',
  '11:00 AM - 12:30 PM (Midday Realignment)',
  '03:00 PM - 04:30 PM (Sunset Integration)',
  '06:00 PM - 07:30 PM (Sacred Evening)'
];

export default function BookingModal({ isOpen, onClose, initialModality = '' }: BookingModalProps) {
  const [formData, setFormData] = useState<SessionBooking>({
    name: '',
    email: '',
    phone: '',
    modality: initialModality || MODALITIES[0],
    date: new Date().toISOString().split('T')[0],
    timeSlot: TIME_SLOTS[0],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync initial modality if it changes
  React.useEffect(() => {
    if (initialModality) {
      setFormData(prev => ({ ...prev, modality: initialModality }));
    }
  }, [initialModality]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate luxury booking delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      modality: MODALITIES[0],
      date: new Date().toISOString().split('T')[0],
      timeSlot: TIME_SLOTS[0],
      message: ''
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ocean-dark/70 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl overflow-hidden bg-cream border border-gold-light/40 rounded-3xl shadow-2xl z-10 max-h-[90vh] flex flex-col"
          >
            {/* Top decorative gradient bar */}
            <div className="h-2 bg-gradient-to-r from-ocean via-teal-soft to-sage" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-ivory border border-gold-light/30 text-ocean-light hover:text-ocean hover:border-gold transition-colors duration-200"
              id="close-booking-modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="flex flex-col overflow-y-auto p-6 md:p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="p-1 rounded-full bg-teal-light/30">
                      <Sparkles className="w-4 h-4 text-teal-soft" />
                    </span>
                    <span className="font-cursive text-sm text-teal-soft tracking-wider font-semibold">
                      Sacred Session Reservation
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-ocean font-medium">
                    Begin Your Transformation
                  </h3>
                  <p className="text-sm text-sage mt-1">
                    Reserve your one-on-one virtual healing session with Heer. Each session is tailored entirely to your soul's current vibration.
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Personal Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-ocean-light flex items-center gap-1">
                        <User className="w-3 h-3" /> Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-4 py-3 rounded-xl bg-ivory border border-gold-light/50 focus:border-teal-soft focus:ring-1 focus:ring-teal-soft outline-none text-ocean transition-all duration-200 placeholder:text-sage/50 text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-ocean-light flex items-center gap-1">
                        <Mail className="w-3 h-3" /> Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. eleanor@healing.com"
                        className="w-full px-4 py-3 rounded-xl bg-ivory border border-gold-light/50 focus:border-teal-soft focus:ring-1 focus:ring-teal-soft outline-none text-ocean transition-all duration-200 placeholder:text-sage/50 text-sm"
                      />
                    </div>
                  </div>

                  {/* Phone & Modality Selector */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-ocean-light flex items-center gap-1">
                        <Phone className="w-3 h-3" /> WhatsApp / Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +1 (555) 019-2834"
                        className="w-full px-4 py-3 rounded-xl bg-ivory border border-gold-light/50 focus:border-teal-soft focus:ring-1 focus:ring-teal-soft outline-none text-ocean transition-all duration-200 placeholder:text-sage/50 text-sm"
                      />
                    </div>

                    {/* Modality */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-ocean-light flex items-center gap-1">
                        <HelpCircle className="w-3 h-3" /> Healing Modality
                      </label>
                      <select
                        value={formData.modality}
                        onChange={e => setFormData({ ...formData, modality: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-ivory border border-gold-light/50 focus:border-teal-soft focus:ring-1 focus:ring-teal-soft outline-none text-ocean text-sm transition-all duration-200"
                      >
                        {MODALITIES.map(m => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date & Time slots */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Date */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-ocean-light flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-xl bg-ivory border border-gold-light/50 focus:border-teal-soft focus:ring-1 focus:ring-teal-soft outline-none text-ocean text-sm transition-all duration-200"
                      />
                    </div>

                    {/* Time Slot */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-ocean-light flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Preferred Alignment Slot
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={e => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-ivory border border-gold-light/50 focus:border-teal-soft focus:ring-1 focus:ring-teal-soft outline-none text-ocean text-sm transition-all duration-200"
                      >
                        {TIME_SLOTS.map(t => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-ocean-light flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" /> Intention or Areas of Focus (Optional)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share what is on your heart, or what blockages you are currently experiencing..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-gold-light/50 focus:border-teal-soft focus:ring-1 focus:ring-teal-soft outline-none text-ocean transition-all duration-200 placeholder:text-sage/50 text-sm resize-none"
                    />
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-gold-light/20 pt-6">
                  <span className="text-xs text-sage italic">
                    * Heer personally prepares a ritual water and candle blessing prior to each session.
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 bg-ocean hover:bg-ocean-dark text-white rounded-xl font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl shadow-ocean/15 flex items-center justify-center gap-2 disabled:opacity-50 text-sm"
                    id="submit-booking"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Aligning energies...
                      </>
                    ) : (
                      <>
                        Confirm Session Booking
                        <Sparkles className="w-4 h-4 text-gold" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* Sacred Success screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 md:p-12 text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-ocean-dark/10 rounded-full flex items-center justify-center mb-6 relative border border-gold-light/30">
                  <div className="absolute inset-0 bg-teal-soft/10 rounded-full animate-ping" />
                  <Check className="w-10 h-10 text-ocean-light" />
                </div>

                <span className="font-cursive text-lg text-teal-soft font-semibold mb-2 block">
                  Auspicious Beginning
                </span>
                <h3 className="font-serif text-3xl text-ocean font-medium mb-3">
                  Your Space is Sacredly Reserved
                </h3>
                <p className="text-sage text-sm max-w-md mx-auto mb-8">
                  Welcome home, <strong className="text-ocean-light">{formData.name}</strong>. Your appointment for <strong className="text-ocean-light">{formData.modality}</strong> has been received by our spiritual alignment guides.
                </p>

                {/* Recipient breakdown */}
                <div className="w-full max-w-md bg-ivory rounded-2xl border border-gold-light/30 p-5 text-left mb-8 space-y-3 shadow-inner">
                  <div className="flex justify-between items-center text-xs text-sage border-b border-gold-light/10 pb-2">
                    <span className="font-semibold text-ocean-light">CONFIRMATION DETAILS:</span>
                    <span className="font-mono text-[10px] tracking-wider text-gold font-bold">RESERVED</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <span className="text-sage font-medium">Modality:</span>
                    <span className="col-span-2 text-ocean font-semibold">{formData.modality}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <span className="text-sage font-medium">Date & Time:</span>
                    <span className="col-span-2 text-ocean font-semibold">
                      {formData.date} at {formData.timeSlot.split(' ')[0]} {formData.timeSlot.split(' ')[1]}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <span className="text-sage font-medium">WhatsApp:</span>
                    <span className="col-span-2 text-ocean font-semibold">{formData.phone}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <span className="text-sage font-medium">Invitation Email:</span>
                    <span className="col-span-2 text-ocean font-semibold">{formData.email}</span>
                  </div>
                </div>

                <p className="text-xs text-sage/80 max-w-sm mb-8">
                  Heer will reach out to you personally via WhatsApp and Email to share the private session invitation link and your bespoke pre-session journaling prompts.
                </p>

                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-ocean hover:bg-ocean-dark text-white rounded-xl text-sm font-medium tracking-wide transition-all duration-300 shadow-md hover:shadow-lg"
                  id="return-home"
                >
                  Return to Sanctuary
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
