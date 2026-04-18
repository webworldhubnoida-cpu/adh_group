/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Contact from '../components/Contact';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="bg-brand-blue-deep py-20 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="editorial-section-title">Connectivity</span>
            <h1 className="text-6xl font-serif italic text-white">Contact Us</h1>
          </motion.div>
        </div>
      </div>
      <Contact />
    </div>
  );
}
