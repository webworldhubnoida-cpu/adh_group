/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Team from '../components/Team';
import { motion } from 'motion/react';

export default function TeamPage() {
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
              The People
            </span>
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-white">Meet The Team</h1>
          </motion.div>
        </div>
      </div>
      <Team />
    </div>
  );
}
