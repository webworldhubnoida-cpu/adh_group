/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TEAM_DATA } from '../constants.ts';

export default function Team() {
  return (
    <section id="team" className="py-24 bg-brand-blue relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="editorial-section-title">Our Leadership</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-white italic">
              The Minds Behind <br />
              ADH Group Success
            </h2>
          </div>
          <p className="max-w-md text-brand-gray font-light text-lg">
            Our team brings together decades of expertise in architecture, engineering, and management.
          </p>
        </div>

        <div className="space-y-16">
          {TEAM_DATA.map((category, catIndex) => (
            <div key={category.title} className="space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="text-sm uppercase tracking-[3px] font-bold text-brand-gold min-w-max">
                  {category.title}
                </h3>
                <div className="w-full h-[1px] bg-brand-gold/10" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.members.map((member, memIndex) => (
                  <motion.div
                    key={`${category.title}-${member.name}-${memIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: memIndex * 0.1 }}
                    className="editorial-card group"
                  >
                    <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-brand-blue-deep border border-brand-gold/10">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover "
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-4xl font-serif italic text-brand-gold opacity-10">ADH</span>
                        </div>
                      )}
                    </div>
                    <div className="text-left">
                      <h4 className="text-base font-bold text-white group-hover:text-brand-gold transition-colors duration-300">
                        {member.name}
                      </h4>
                      <p className="text-[10px] text-brand-gold font-bold uppercase tracking-[2px] mt-1">
                        {member.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Leadership in Action Gallery */}
        <div className="mt-32 pt-24 border-t border-brand-gold/10">
          <div className="mb-16">
            <span className="editorial-section-title">Visual Legacy</span>
            <h2 className="text-4xl font-serif italic text-white">Leadership in Action</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-gold/20">
            <div className="aspect-video bg-brand-blue-deep group overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" 
                 className="w-full h-full object-cover opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                 referrerPolicy="no-referrer"
                 alt="Construction Site Site"
               />
            </div>
            <div className="aspect-video bg-brand-blue-deep group overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=800" 
                 className="w-full h-full object-cover opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                 referrerPolicy="no-referrer"
                 alt="Meeting Room"
               />
            </div>
            <div className="aspect-video bg-brand-blue-deep group overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" 
                 className="w-full h-full object-cover opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
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
