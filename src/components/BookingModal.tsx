/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-blue-deep/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-brand-blue border border-brand-gold/20 shadow-2xl overflow-hidden"
          >
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-32 h-1 bg-brand-gold" />
            <div className="absolute bottom-0 left-0 w-1 h-32 bg-brand-gold" />
            
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <span className="editorial-section-title">Priority access</span>
                  <h2 className="text-4xl font-serif italic text-white leading-tight">
                    Book Your <br /> Site Visit
                  </h2>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 text-white/40 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-gold mb-2 block">Your Name</label>
                    <div className="relative">
                      <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold/50" />
                      <input type="text" className="w-full bg-white/5 border border-white/10 p-4 pl-12 font-light text-white focus:outline-none focus:border-brand-gold transition-colors text-sm" placeholder="John Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-gold mb-2 block">Phone Number</label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold/50" />
                      <input type="tel" className="w-full bg-white/5 border border-white/10 p-4 pl-12 font-light text-white focus:outline-none focus:border-brand-gold transition-colors text-sm" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                   <div>
                    <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-gold mb-2 block">Email Address</label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold/50" />
                      <input type="email" className="w-full bg-white/5 border border-white/10 p-4 pl-12 font-light text-white focus:outline-none focus:border-brand-gold transition-colors text-sm" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-gold mb-2 block">Preferred Date</label>
                    <div className="relative">
                      <Calendar size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold/50" />
                      <input type="date" className="w-full bg-white/5 border border-white/10 p-4 pl-12 font-light text-white focus:outline-none focus:border-brand-gold transition-colors text-sm" />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-gold mb-2 block">Special Requests</label>
                  <div className="relative">
                    <MessageSquare size={14} className="absolute left-4 top-4 text-brand-gold/50" />
                    <textarea rows={3} className="w-full bg-white/5 border border-white/10 p-4 pl-12 font-light text-white focus:outline-none focus:border-brand-gold transition-colors text-sm" placeholder="Any specific requirements..."></textarea>
                  </div>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button className="w-full bg-brand-gold text-brand-blue font-bold uppercase tracking-[3px] text-[10px] py-4 rounded-[2px] hover:scale-[1.01] transition-transform shadow-xl">
                    Confirm Site Visit Request
                  </button>
                  <p className="text-[9px] text-white/30 text-center mt-4 tracking-wider">
                    Our sales representative will contact you within 24 hours to confirm the appointment.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
