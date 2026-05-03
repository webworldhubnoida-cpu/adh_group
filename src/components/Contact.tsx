/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    const text = `*New Inquiry from ADH Group Website*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/917900990004?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 rounded-full">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
              Let's Build Your <span className="text-primary">Vision Together</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-primary rounded-[2.5rem] p-10 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <h3 className="text-2xl font-heading font-bold mb-10">Reach Us</h3>
              
              <div className="space-y-10 relative z-10">
                <div className="group">
                  <p className="text-[10px] uppercase tracking-[3px] text-white/40 font-bold mb-4">Email Address</p>
                  <div className="space-y-2">
                    <a href="mailto:Info@adhgroup.in" className="text-white hover:text-light-blue transition-colors block text-lg font-medium">Info@adhgroup.in</a>
                  </div>
                </div>

                <div className="group">
                  <p className="text-[10px] uppercase tracking-[3px] text-white/40 font-bold mb-4">Call / WhatsApp</p>
                  <div className="flex flex-col gap-4">
                    <a href="https://wa.me/918937946287" target="_blank" rel="noopener noreferrer" className="text-white hover:text-light-blue transition-colors text-2xl font-bold">
                      +91 8937946287
                    </a>
                    <a href="https://wa.me/919837946287" target="_blank" rel="noopener noreferrer" className="text-white hover:text-light-blue transition-colors text-2xl font-bold">
                      +91 9837946287
                    </a>
                    <a href="https://wa.me/917900990004" target="_blank" rel="noopener noreferrer" className="text-white hover:text-light-blue transition-colors text-2xl font-bold">
                      +91 7900990004
                    </a>
                  </div>
                </div>

                <div className="group">
                  <p className="text-[10px] uppercase tracking-[3px] text-white/40 font-bold mb-4">Our Location</p>
                  <a href="https://www.google.com/maps/place/A.D.H.GROUP/@27.922835,78.0926584,17z/data=!3m1!4b1!4m6!3m5!1s0x3974a52416ddc77d:0xda01ac1a5b04ecfe!8m2!3d27.922835!4d78.0926584!16s%2Fg%2F11l2r69wks" target="_blank" rel="noopener noreferrer" className="text-white hover:text-light-blue transition-colors text-lg font-medium leading-relaxed block">
                    A.D.H. GROUP, Aligarh<br />
                    Uttar Pradesh, India
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-bg-light rounded-[2rem] p-8 flex items-center gap-6 border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <MessageCircle className="text-primary" size={28} />
              </div>
              <div>
                <p className="text-slate-900 font-bold">Quick Support</p>
                <p className="text-slate-500 text-sm font-medium">Typical response: 2 hours</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-xl">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-[1px] text-slate-500 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-bg-light border border-slate-100 rounded-2xl p-5 font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-[1px] text-slate-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-bg-light border border-slate-100 rounded-2xl p-5 font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[1px] text-slate-500 ml-1">Your Message</label>
                <textarea 
                  name="message"
                  required
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-bg-light border border-slate-100 rounded-2xl p-5 font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" 
                  placeholder="How can we help you today?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full md:w-auto px-12 py-5 bg-gradient-cta text-white font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all duration-300 rounded-full shadow-xl hover:shadow-accent/20 hover:scale-105"
              >
                Send to WhatsApp <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Integration */}
        <div className="mt-12 w-full h-[500px] rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.483015481747!2d78.09008347585647!3d27.922839716122634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a52416ddc77d%3A0xda01ac1a5b04ecfe!2sA.D.H.GROUP!5e0!3m2!1sen!2sin!4v1713430000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-90 hover:opacity-100 transition-all duration-700"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[1.5rem] border-white/20 rounded-[3rem]" />
        </div>
      </div>
    </section>
  );
}
