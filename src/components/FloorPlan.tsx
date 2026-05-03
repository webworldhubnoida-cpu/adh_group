/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { FLOOR_PLANS } from '../constants.ts';

export default function FloorPlan() {
  return (
    <section id="floor-plans" className="py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 rounded-full">
              Architectural Layouts
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight text-slate-900">
              Meticulously Planned <br />
              <span className="text-primary">Floor Plans</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Explore our range of thoughtfully designed floor plans, crafted to maximize space, light, and functionality for modern living.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FLOOR_PLANS.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-bg-light rounded-[1.5rem] sm:rounded-[2rem] p-3 sm:p-4 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className="relative overflow-hidden rounded-[1rem] sm:rounded-[1.5rem] bg-white aspect-[4/3]">
                <img 
                  src={plan.image} 
                  alt={plan.title} 
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-6 px-2 pb-2">
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">{plan.title}</h3>
                <div className="w-12 h-1 bg-primary/20 rounded-full transition-all duration-300 group-hover:w-full group-hover:bg-primary/40" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
