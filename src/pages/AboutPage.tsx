/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import About from '../components/About';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="bg-brand-blue-deep py-20 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="editorial-section-title">The Foundation</span>
            <h1 className="text-6xl font-serif italic text-white">About ADH Group</h1>
          </motion.div>
        </div>
      </div>
      <About />
      <section className="py-24 bg-brand-blue-deep">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-serif italic text-brand-gold mb-8">Our Core Mission</h3>
            <p className="max-w-3xl mx-auto text-brand-gray text-lg font-light leading-relaxed">
                To redefine the skyline of Aligarh with structures that are safe, sustainable, and aesthetically superior. We aim to be the most trusted name in real estate by delivering quality beyond expectations.
            </p>
        </div>
      </section>
    </div>
  );
}
