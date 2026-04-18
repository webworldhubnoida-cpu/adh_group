/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Market() {
  return (
    <section className="py-24 bg-brand-blue-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1a2b48] border border-dashed border-brand-gold p-12 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
             <ShoppingBag size={400} className="text-white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="editorial-section-title">Commercial space</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 italic">
                  Ground Floor <span className="text-brand-gold">Market</span>
                </h2>
                <h3 className="text-xl md:text-2xl font-light text-brand-gray mb-8 italic tracking-wide">
                  Shops available inside your society
                </h3>
                
                <p className="text-white/60 mb-10 leading-relaxed max-w-lg font-light text-sm">
                  Elevate your business in a thriving community. Our ground floor commercial spaces offer high visibility and dedicated parking.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-4 bg-brand-gold text-brand-blue px-10 py-4 font-bold uppercase tracking-widest text-[10px] rounded-[2px] shadow-xl hover:scale-105 transition-transform"
                >
                  Enquire Now <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>

            <div className="relative min-h-[300px] border border-brand-gold/20">
              <motion.img 
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=1200" 
                alt="Market Shops 3D" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
