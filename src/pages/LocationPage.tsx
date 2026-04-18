/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import LocationAdvantage from '../components/LocationAdvantage';
import { motion } from 'motion/react';

export default function LocationPage() {
  return (
    <div className="pt-24 min-h-screen bg-brand-blue-deep">
      <div className="py-20 bg-brand-blue border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="editorial-section-title block mb-4"
          >
            Regional Connectivity
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl font-serif italic text-white"
          >
            Location Advantages
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-brand-gray font-light max-w-2xl mx-auto leading-relaxed"
          >
            Explore our diverse project portfolio across Aligarh. Every ADH Group landmark is chosen for its strategic positioning, ensuring you are never far from what matters most.
          </motion.p>
        </div>
      </div>
      
      <LocationAdvantage />
      
      {/* Additional Map Section Placeholder */}
      <section className="py-24 bg-brand-blue-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="editorial-border bg-brand-blue h-[600px] flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-20 grayscale transition-all duration-1000 group-hover:scale-105 group-hover:opacity-40">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
                alt="Map Background"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative text-center z-10 px-8">
              <div className="editorial-border p-12 bg-brand-blue-deep/80 backdrop-blur-md max-w-xl mx-auto">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-3xl font-serif italic text-white mb-6"
                >
                  Explore Aligarh Muslim City
                </motion.h3>
                <p className="text-brand-gray text-sm font-light mb-8 leading-relaxed">
                  Our projects are integrated into the city's master plan, providing proximity to Educational Institutions, Healthcare Hubs, and Commercial Centers.
                </p>
                <button className="px-10 py-4 editorial-border bg-brand-gold text-brand-blue-deep font-semibold text-sm tracking-[4px] uppercase hover:bg-white transition-all transform active:scale-95">
                  View Full City Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
