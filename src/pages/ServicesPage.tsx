/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Services from '../components/Services';
import Market from '../components/Market';
import { motion } from 'motion/react';

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="bg-brand-blue-deep py-20 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="editorial-section-title">What We Offer</span>
            <h1 className="text-6xl font-serif italic text-white">Our Services</h1>
          </motion.div>
        </div>
      </div>
      <Services />
      <Market />
    </div>
  );
}
