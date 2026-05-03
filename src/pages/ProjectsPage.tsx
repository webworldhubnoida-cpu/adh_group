/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Projects from '../components/Projects';
import { motion } from 'motion/react';

export default function ProjectsPage() {
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
              The Blueprint
            </span>
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-white">Our Projects</h1>
          </motion.div>
        </div>
      </div>
      <Projects />
      <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <h4 className="text-slate-900 font-heading font-bold text-3xl mb-4">Interested in any of our properties?</h4>
              <p className="text-slate-600 font-medium mb-10">Schedule a site visit today and experience the quality for yourself.</p>
              <a href="/contact" className="inline-block px-12 py-5 bg-gradient-cta text-white font-bold uppercase tracking-widest text-sm rounded-full shadow-2xl hover:scale-105 transition-all duration-300">Schedule a Visit</a>
          </div>
      </div>
    </div>
  );
}
