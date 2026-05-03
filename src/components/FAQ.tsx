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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* FAQ Image Side */}
          <div className="lg:col-span-4 hidden lg:block sticky top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="rounded-[3rem] overflow-hidden relative shadow-2xl"
            >
              <img 
                src="gallery/p3.jpeg" 
                alt="Architectural Detail"
                className="w-full h-[650px] object-cover opacity-90 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-white font-heading font-bold text-2xl italic leading-relaxed">"Excellence is not an act, but a habit."</p>
                <div className="w-16 h-1 bg-accent mt-6 rounded-full" />
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
                className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 rounded-full"
              >
                Insights & Clarity
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-heading font-bold text-slate-900"
              >
                Frequently Asked <span className="text-primary">Questions</span>
              </motion.h2>
            </div>

            <div className="space-y-6">
              {FAQS.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-3xl border transition-all duration-300 ${activeIndex === index ? 'bg-primary border-primary shadow-xl shadow-primary/20' : 'bg-bg-light border-slate-100 hover:border-primary/30'}`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-7 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className={`text-lg font-bold transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-slate-800'}`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      className={activeIndex === index ? 'text-white' : 'text-primary'}
                    >
                      <ChevronDown size={24} />
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
                          <div className={`w-full h-px mb-6 ${activeIndex === index ? 'bg-white/10' : 'bg-slate-200'}`} />
                          <p className={`font-medium leading-relaxed max-w-2xl ${activeIndex === index ? 'text-white/80' : 'text-slate-600'}`}>
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
              <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">
                Have more questions? <a href="/contact" className="text-primary hover:text-accent transition-all border-b border-primary/20 hover:border-accent">Connect with our team</a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
