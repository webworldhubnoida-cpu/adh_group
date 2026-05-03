/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Market() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-12 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute -top-24 -right-24 p-24 opacity-10 pointer-events-none transform rotate-12">
             <ShoppingBag size={400} className="text-white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-1 mb-6 text-xs font-bold uppercase tracking-[0.2em] text-light-blue bg-white/10 rounded-full backdrop-blur-sm">
                  Commercial Opportunities
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                  Ground Floor <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-light-blue">Premium Market</span>
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-white/80 mb-8 tracking-wide">
                  Strategic retail spaces within your community
                </h3>
                
                <p className="text-white/60 mb-10 leading-relaxed max-w-lg font-medium">
                  Elevate your business in a thriving community. Our ground floor commercial spaces offer high visibility, dedicated parking, and a captive audience.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-4 bg-accent text-white px-10 py-5 font-bold uppercase tracking-widest text-xs rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  Enquire Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <div className="relative min-h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <motion.img 
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=1200" 
                alt="Market Shops 3D" 
                className="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
