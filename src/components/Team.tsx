/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TEAM_DATA } from '../constants.ts';

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 rounded-full">
              Our Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">
              The Minds Behind <br />
              <span className="text-primary">ADH Group Success</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-600 font-medium text-lg">
            Our team brings together decades of expertise in architecture, engineering, and strategic management.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-8 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...TEAM_DATA.flatMap(cat => cat.members), ...TEAM_DATA.flatMap(cat => cat.members)].map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="w-[280px] md:w-[320px] group flex-shrink-0"
              >
                <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-[2rem] bg-bg-light shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl font-heading font-bold text-primary/10">ADH</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="text-left px-2">
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-xs text-accent font-bold uppercase tracking-widest mt-2">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Leadership in Action Gallery */}
        <div className="mt-32 pt-24 border-t border-slate-100">
          <div className="mb-16">
            <span className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 rounded-full">
              Visual Legacy
            </span>
            <h2 className="text-4xl font-heading font-bold text-slate-900">Leadership in Action</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-video rounded-[2rem] overflow-hidden shadow-xl group">
               <img 
                 src="gallery/p1.jpeg" 
                 className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                 referrerPolicy="no-referrer"
                 alt="Construction Site Site"
               />
            </div>
            <div className="aspect-video rounded-[2rem] overflow-hidden shadow-xl group">
               <img 
                 src="gallery/hero1.jpeg" 
                 className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                 referrerPolicy="no-referrer"
                 alt="Meeting Room"
               />
            </div>
            <div className="aspect-video rounded-[2rem] overflow-hidden shadow-xl group">
               <img 
                 src="gallery/hero2.png" 
                 className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                 referrerPolicy="no-referrer"
                 alt="Engineering"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
