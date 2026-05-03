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
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 rounded-full">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
              Comprehensive Construction Solutions
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600 font-medium">
              Delivering excellence across every facet of real estate and construction with precision and passion.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden h-[450px] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>
              
              <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
                <div className="mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-light-blue shadow-xl">
                    {iconMap[service.icon as keyof typeof iconMap]}
                  </div>
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {service.title}
                </h3>
                
                <p className="text-white/80 text-sm font-medium leading-relaxed transform transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  {service.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-white/10 transform transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-light-blue hover:text-white transition-colors">
                    Learn More <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
