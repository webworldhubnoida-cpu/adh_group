/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-blue overflow-hidden border-y border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden border border-brand-gold/20">
              <img 
                src="/gallery/p5.png" 
                alt="Construction Site" 
                className="w-full h-[600px] object-cover "
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute bottom-10 left-10 bg-brand-gold p-8 text-brand-blue shadow-2xl z-20 hidden md:block border-l-4 border-white">
              <p className="text-4xl font-serif font-bold mb-1 italic">15+</p>
              <p className="text-[10px] uppercase tracking-[2px] font-bold">Years of Trust</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="editorial-section-title">Our Legacy</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-8 leading-tight italic">
              Crafting Superior Spaces <br />
              With Integrity & Vision
            </h2>
            <div className="space-y-6 text-brand-gray leading-relaxed font-light text-lg">
              <p>
                ADH Group stands as a beacon of excellence in the real estate and construction landscape. We combine traditional craftsmanship with modern engineering.
              </p>
              <p>
                Our philosophy: Build with quality, act with integrity, and deliver with passion. Every project is designed to enhance the quality of life.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-brand-gold/10 pt-10">
              <div>
                <h4 className="text-brand-gold font-serif font-bold text-xl mb-2 italic">Quality First</h4>
                <p className="text-sm text-brand-gray opacity-70">Uncompromising standards in materials.</p>
              </div>
              <div>
                <h4 className="text-brand-gold font-serif font-bold text-xl mb-2 italic">Timely</h4>
                <p className="text-sm text-brand-gray opacity-70">Dedicated to meeting project milestones.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
