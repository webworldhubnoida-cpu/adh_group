/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-[3rem] shadow-2xl">
              <img 
                src="/gallery/p5.png" 
                alt="Construction Site" 
                className="w-full h-[650px] object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute -bottom-10 -right-10 bg-primary p-10 text-white shadow-2xl z-20 hidden md:block rounded-[2rem] border-4 border-white">
              <p className="text-5xl font-heading font-bold mb-1">15+</p>
              <p className="text-xs uppercase tracking-[3px] font-bold text-light-blue">Years of Trust</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 mb-6 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 rounded-full">
              Our Legacy
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
              Crafting Superior Spaces <br />
              <span className="text-primary">With Integrity & Vision</span>
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-lg">
              <p>
                ADH Group stands as a beacon of excellence in the real estate and construction landscape of Aligarh. We combine traditional craftsmanship with cutting-edge modern engineering.
              </p>
              <p>
                Our philosophy is simple: Build with quality, act with integrity, and deliver with passion. Every project we undertake is meticulously designed to enhance the quality of life for our clients.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-slate-100">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-heading font-bold text-xl mb-2">Quality First</h4>
                  <p className="text-sm text-slate-500">Uncompromising standards in materials and structural integrity.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-heading font-bold text-xl mb-2">Timely Delivery</h4>
                  <p className="text-sm text-slate-500">Dedicated to meeting project milestones without compromising excellence.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
