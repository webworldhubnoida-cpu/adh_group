/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Projects from '../components/Projects';
import { motion } from 'motion/react';

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <div className="bg-brand-blue-deep py-20 border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="editorial-section-title">The Blueprint</span>
            <h1 className="text-6xl font-serif italic text-white">Our Projects</h1>
          </motion.div>
        </div>
      </div>
      <Projects />
      <div className="bg-brand-blue py-24 border-t border-brand-gold/10">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <h4 className="text-brand-gold font-serif italic text-2xl mb-4">Interested in any of our properties?</h4>
              <p className="text-brand-gray mb-8">Schedule a site visit today and experience the quality for yourself.</p>
              <a href="/contact" className="inline-block px-12 py-4 bg-brand-gold text-brand-blue font-bold uppercase tracking-[2px] text-xs rounded-[2px]">Get in touch</a>
          </div>
      </div>
    </div>
  );
}
