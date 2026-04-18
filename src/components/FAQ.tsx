/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../constants';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-blue border-b border-brand-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* FAQ Image Side */}
          <div className="lg:col-span-4 hidden lg:block sticky top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="editorial-border overflow-hidden relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1541888941259-7b9d9ef77c25?auto=format&fit=crop&q=80&w=800" 
                alt="Architectural Detail"
                className="w-full h-[600px] object-cover grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-brand-gold font-serif italic text-xl">"Excellence is not an act, but a habit."</p>
                <div className="w-12 h-0.5 bg-brand-gold mt-4" />
              </div>
            </motion.div>
          </div>

          {/* FAQ Content Side */}
          <div className="lg:col-span-8">
            <div className="mb-16">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="editorial-section-title block mb-4"
              >
                Insights & Clarity
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl font-serif italic text-white"
              >
                Frequently Asked Questions
              </motion.h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="editorial-border bg-brand-blue-deep group"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-7 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-lg font-serif italic text-white group-hover:text-brand-gold transition-colors duration-300">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      className="text-brand-gold"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8">
                          <div className="w-full h-px bg-brand-gold/10 mb-6" />
                          <p className="text-brand-gray font-light leading-relaxed max-w-2xl">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-16 text-center lg:text-left"
            >
              <p className="text-white/40 text-sm font-light tracking-widest uppercase">
                Have more questions? <a href="/contact" className="text-brand-gold hover:underline underline-offset-4 transition-all">Connect with our team</a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
