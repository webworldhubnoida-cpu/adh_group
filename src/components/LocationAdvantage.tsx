/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { School, Hospital, Store, MapPin, ChevronRight, Navigation } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function LocationAdvantage() {
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);

  const advantageIcons = {
    schools: <School size={24} />,
    hospitals: <Hospital size={24} />,
    markets: <Store size={24} />,
    connectivity: <Navigation size={24} />
  };

  return (
    <section className="py-24 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Panel: Project Selection */}
          <div className="lg:col-span-5">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 rounded-full"
            >
              Strategic Mapping
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-12"
            >
              Location <span className="text-primary">Advantages</span>
            </motion.h2>

            <div className="space-y-4">
              {PROJECTS.map((project, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedProject(project)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-full text-left p-8 rounded-[2rem] flex items-center justify-between group transition-all duration-500 border ${
                    selectedProject.title === project.title 
                    ? 'bg-primary text-white border-primary shadow-2xl shadow-primary/20 scale-105 z-10' 
                    : 'bg-white text-slate-900 border-slate-100 hover:border-primary/30'
                  }`}
                >
                  <div>
                    <h4 className="text-xl font-heading font-bold mb-1">{project.title}</h4>
                    <p className={`text-xs font-bold uppercase tracking-widest ${
                      selectedProject.title === project.title ? 'text-white/70' : 'text-slate-400'
                    }`}>
                      {project.location}
                    </p>
                  </div>
                  <ChevronRight size={24} className={`transition-transform duration-500 ${
                    selectedProject.title === project.title ? 'translate-x-2' : 'group-hover:translate-x-1 opacity-30'
                  }`} />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Panel: Advantages Details */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <div className="relative h-80 mb-12 rounded-[3rem] overflow-hidden group shadow-2xl">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10">
                    <div className="flex items-center space-x-2 text-light-blue mb-3">
                      <MapPin size={20} />
                      <span className="text-xs uppercase tracking-[3px] font-bold">{selectedProject.location}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">{selectedProject.title}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {selectedProject.advantages && Object.entries(selectedProject.advantages).map(([key, items], i) => (
                    <motion.div 
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="flex items-center space-x-5 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center">
                          {advantageIcons[key as keyof typeof advantageIcons]}
                        </div>
                        <h5 className="text-slate-900 font-heading font-bold text-xl capitalize">{key}</h5>
                      </div>
                      <ul className="space-y-4">
                        {(items as string[]).map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-slate-500 text-sm font-medium">
                            <span className="mt-1.5 w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 p-10 rounded-[2.5rem] bg-primary text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                  <div className="flex items-start space-x-6 relative z-10">
                    <div className="text-light-blue mt-1">
                      <Navigation size={32} />
                    </div>
                    <div>
                      <h4 className="text-white font-heading font-bold text-2xl mb-3">Primary Advantage</h4>
                      <p className="text-white/70 text-base font-medium leading-relaxed">
                        {selectedProject.description} This project is strategically positioned for maximum growth and ease of access to Aligarh's key infrastructures.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
