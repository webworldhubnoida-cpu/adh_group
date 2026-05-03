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
            className="absolute inset-0 bg-primary/40 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <span className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 rounded-full">
                    Priority access
                  </span>
                  <h2 className="text-4xl font-heading font-bold text-slate-900 leading-tight">
                    Book Your <span className="text-primary">Site Visit</span>
                  </h2>
                </div>
                <button 
                  onClick={onClose}
                  className="p-3 bg-slate-100 rounded-2xl text-slate-400 hover:text-primary transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-[1px] text-slate-500 ml-1">Your Name</label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50" />
                      <input type="text" className="w-full bg-bg-light border border-slate-100 rounded-2xl p-4 pl-12 font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" placeholder="John Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-[1px] text-slate-500 ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50" />
                      <input type="tel" className="w-full bg-bg-light border border-slate-100 rounded-2xl p-4 pl-12 font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                   <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-[1px] text-slate-500 ml-1">Email Address</label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50" />
                      <input type="email" className="w-full bg-bg-light border border-slate-100 rounded-2xl p-4 pl-12 font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-[1px] text-slate-500 ml-1">Preferred Date</label>
                    <div className="relative">
                      <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50" />
                      <input type="date" className="w-full bg-bg-light border border-slate-100 rounded-2xl p-4 pl-12 font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-[1px] text-slate-500 ml-1">Special Requests</label>
                  <div className="relative">
                    <MessageSquare size={18} className="absolute left-4 top-4 text-primary/50" />
                    <textarea rows={3} className="w-full bg-bg-light border border-slate-100 rounded-2xl p-4 pl-12 font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none" placeholder="Any specific requirements..."></textarea>
                  </div>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button className="w-full bg-gradient-cta text-white font-bold uppercase tracking-widest text-xs py-5 rounded-full shadow-2xl hover:scale-[1.02] transition-all duration-300">
                    Confirm Site Visit Request
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-6 font-medium tracking-wide">
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
