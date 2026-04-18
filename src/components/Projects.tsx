/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { PROJECTS } from '../constants.ts';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-brand-blue-deep text-white overflow-hidden border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="editorial-section-title">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight italic">
              Crafting Landmark <br />
              <span className="text-brand-gold">Destinations</span>
            </h2>
          </motion.div>
          
          <div className="flex gap-4">
             <div className="px-6 py-2 border border-brand-gold/30 text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:bg-brand-gold hover:text-brand-blue transition-colors">Residential</div>
             <div className="px-6 py-2 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-widest cursor-pointer bg-brand-gold/10">Commercial</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-gold/20">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden h-[500px] bg-brand-blue"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-40 "
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-12 w-full">
                <div className="flex items-center gap-2 text-brand-gold mb-3">
                  <MapPin size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-[2px]">{project.location}</span>
                </div>
                <h3 className="text-4xl font-serif font-bold mb-4 italic leading-tight">{project.title}</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold border border-brand-gold/50 px-3 py-1">
                  {project.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <button className="px-12 py-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300 font-bold uppercase tracking-widest text-sm">
             Browse Archive
           </button>
        </div>
      </div>
    </section>
  );
}
