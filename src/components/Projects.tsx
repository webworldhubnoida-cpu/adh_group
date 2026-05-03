/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { PROJECTS } from '../constants.ts';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-light text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 rounded-full">
              Our Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight text-slate-900">
              Crafting Landmark <br />
              <span className="text-primary">Architectural Destinations</span>
            </h2>
          </motion.div>
          
          <div className="flex gap-3">
             <div className="px-6 py-2.5 rounded-full border border-slate-200 text-[11px] font-bold uppercase tracking-widest cursor-pointer hover:bg-primary hover:text-white transition-all duration-300">Residential</div>
             <div className="px-6 py-2.5 rounded-full bg-primary text-white text-[11px] font-bold uppercase tracking-widest cursor-pointer shadow-lg shadow-primary/20">Commercial</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden h-[500px] rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full text-white">
                <div className="flex items-center gap-2 text-light-blue mb-4">
                  <MapPin size={18} />
                  <span className="text-xs font-bold uppercase tracking-[0.1em]">{project.location}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">{project.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                    {project.status}
                  </span>
                  <button className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-lg">
                    <span className="text-xl">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <button className="px-10 py-4 bg-white text-primary border-2 border-primary/10 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-xs rounded-full shadow-lg">
             Browse Full Archive
           </button>
        </div>
      </div>
    </section>
  );
}
