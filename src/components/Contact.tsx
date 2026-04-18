/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-blue-deep overflow-hidden border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="editorial-section-title">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-white italic mb-4">
              Let's Build Together
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-brand-gold/10 border border-brand-gold/10 p-1">
          {/* Image Sidebar - Characteristic of Editorial Design */}
          <div className="lg:col-span-3 hidden lg:block overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1541888941259-7b9d9ef77c25?auto=format&fit=crop&q=80&w=800" 
              alt="Construction Detail"
              className="w-full h-full object-cover "
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-blue-deep/40 pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-full px-8 text-center">
              <span className="text-brand-gold font-serif italic text-2xl">Excellence In Every Detail</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 bg-brand-blue p-10 md:p-12 text-white border-r border-brand-gold/20">
            <h3 className="text-2xl font-serif italic font-bold mb-10 text-brand-gold">Reach Us</h3>
            
            <div className="space-y-12">
              <div className="group">
                <p className="text-[10px] uppercase tracking-[3px] text-white/40 font-bold mb-4">Email Address</p>
                <div className="space-y-1">
                  <a href="mailto:Info@adhgroup.in" className="text-white hover:text-brand-gold transition-colors block text-lg font-light">Info@adhgroup.in</a>
                  <a href="mailto:Adhgroupaligarh@gmail.com" className="text-white hover:text-brand-gold transition-colors block text-lg font-light">Adhgroupaligarh@gmail.com</a>
                </div>
              </div>

              <div className="group">
                <p className="text-[10px] uppercase tracking-[3px] text-white/40 font-bold mb-4">Call / WhatsApp</p>
                <a href="https://wa.me/c/917900990004" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-gold transition-colors text-lg font-light">
                  +91 7900990004
                </a>
              </div>

              <div className="group">
                <p className="text-[10px] uppercase tracking-[3px] text-white/40 font-bold mb-4">Our Location</p>
                <a href="https://www.google.com/maps/place/A.D.H.GROUP/@27.922835,78.0926584,17z/data=!3m1!4b1!4m6!3m5!1s0x3974a52416ddc77d:0xda01ac1a5b04ecfe!8m2!3d27.922835!4d78.0926584!16s%2Fg%2F11l2r69wks" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-gold transition-colors text-lg font-light leading-relaxed block">
                  A.D.H. GROUP, Aligarh<br />
                  Uttar Pradesh, India
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-5 bg-brand-blue p-8 md:p-12">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-gold mb-3 block">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 p-5 font-light text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-gold mb-3 block">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 p-5 font-light text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-[2px] text-brand-gold mb-3 block">Your Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-5 font-light text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="How can we help you today?"></textarea>
              </div>
              
              <button 
                type="button" 
                className="px-12 py-5 bg-brand-gold text-brand-blue font-bold uppercase tracking-[2px] text-xs flex items-center justify-center gap-3 transition-all duration-300 rounded-[2px]"
              >
                Send Message <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Integration */}
        <div className="mt-12 w-full h-96 rounded-3xl overflow-hidden border border-brand-gold/20 shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.483015481747!2d78.09008347585647!3d27.922839716122634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a52416ddc77d%3A0xda01ac1a5b04ecfe!2sA.D.H.GROUP!5e0!3m2!1sen!2sin!4v1713430000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
