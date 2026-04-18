/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Building2, HardHat, Palette, Ruler, ClipboardCheck } from 'lucide-react';
import { SERVICES } from '../constants.ts';

const iconMap = {
  Building2: <Building2 className="w-10 h-10" />,
  HardHat: <HardHat className="w-10 h-10" />,
  Palette: <Palette className="w-10 h-10" />,
  Ruler: <Ruler className="w-10 h-10" />,
  ClipboardCheck: <ClipboardCheck className="w-10 h-10" />
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-blue-deep relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-gold/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="editorial-section-title">Key Services</span>
            <h2 className="text-4xl md:text-5xl font-serif italic font-medium text-white mb-4">
              Comprehensive Solutions
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="editorial-card group relative overflow-hidden h-[400px] flex flex-col"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover "
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-brand-gold mb-6 group-hover:scale-105 transition-transform duration-300">
                  {iconMap[service.icon as keyof typeof iconMap]}
                </div>
                <h3 className="text-2xl font-serif font-bold text-black mb-4 italic">{service.title}</h3>
               
                <div className="mt-8">
                  <div className="h-px w-0 group-hover:w-full bg-brand-gold transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
