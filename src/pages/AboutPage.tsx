/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import About from '../components/About';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="bg-primary py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1 mb-6 text-xs font-bold uppercase tracking-[0.2em] text-light-blue bg-white/10 rounded-full backdrop-blur-sm">
              The Foundation
            </span>
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-white">About ADH Group</h1>
          </motion.div>
        </div>
      </div>
      <About />
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">Our Core Mission</h3>
            <p className="max-w-3xl mx-auto text-slate-600 text-lg font-medium leading-relaxed">
                To redefine the skyline of Aligarh with structures that are safe, sustainable, and aesthetically superior. We aim to be the most trusted name in real estate by delivering quality beyond expectations.
            </p>
        </div>
      </section>
    </div>
  );
}
