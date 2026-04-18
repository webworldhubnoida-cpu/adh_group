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
    schools: <School size={20} />,
    hospitals: <Hospital size={20} />,
    markets: <Store size={20} />,
    connectivity: <Navigation size={20} />
  };

  return (
    <section className="py-24 bg-brand-blue border-b border-brand-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Panel: Project Selection */}
          <div className="lg:col-span-5">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="editorial-section-title block mb-4"
            >
              Strategic Mapping
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-serif italic text-white mb-12"
            >
              Location Advantages
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
                  className={`w-full text-left p-6 flex items-center justify-between group transition-all duration-500 editorial-border ${
                    selectedProject.title === project.title 
                    ? 'bg-brand-gold text-brand-blue-deep' 
                    : 'bg-brand-blue-deep text-white hover:border-brand-gold/50'
                  }`}
                >
                  <div>
                    <h4 className="text-xl font-serif italic mb-1">{project.title}</h4>
                    <p className={`text-xs uppercase tracking-widest ${
                      selectedProject.title === project.title ? 'text-brand-blue-deep/70' : 'text-brand-gray'
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
                <div className="relative h-64 mb-12 editorial-border overflow-hidden group">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-blue-deep/40" />
                  <div className="absolute bottom-8 left-8">
                    <div className="flex items-center space-x-2 text-brand-gold mb-2">
                      <MapPin size={16} />
                      <span className="text-xs uppercase tracking-[3px] font-medium">{selectedProject.location}</span>
                    </div>
                    <h3 className="text-3xl font-serif italic text-white">{selectedProject.title}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {selectedProject.advantages && Object.entries(selectedProject.advantages).map(([key, items], i) => (
                    <motion.div 
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-8 editorial-border bg-brand-blue-deep/50"
                    >
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="p-3 bg-brand-gold text-brand-blue-deep editorial-border shadow-[4px_4px_0px_rgba(212,175,55,0.2)]">
                          {advantageIcons[key as keyof typeof advantageIcons]}
                        </div>
                        <h5 className="text-white font-serif italic text-lg capitalize">{key}</h5>
                      </div>
                      <ul className="space-y-3">
                        {(items as string[]).map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-brand-gray text-sm font-light">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-brand-gold rotate-45 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 p-8 editorial-border border-dashed border-brand-gold/30 bg-brand-gold/5">
                  <div className="flex items-start space-x-4">
                    <div className="text-brand-gold mt-1">
                      <Navigation size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-serif italic text-xl mb-2">Primary Advantage</h4>
                      <p className="text-brand-gray text-sm font-light leading-relaxed">
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
