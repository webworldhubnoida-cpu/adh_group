/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1541888941259-7b9d9ef77c25?auto=format&fit=crop&q=80&w=1200",
    title: "Structural Prowess",
    category: "Engineering"
  },
  {
    url: "https://images.unsplash.com/photo-1503387762-592dea58fe21?auto=format&fit=crop&q=80&w=1200",
    title: "Visionary Spaces",
    category: "Architecture"
  },
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    title: "Interior Sophistication",
    category: "Design"
  }
];

export default function VisualImpact() {
  return (
    <section className="py-24 bg-brand-blue-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="editorial-section-title block mb-4"
            >
              Capturing Excellence
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl font-serif italic text-white"
            >
              The Visual Narrative <br /> of <span className="text-brand-gold">ADH Group</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-4 self-end">
            <p className="text-brand-gray font-light text-sm leading-relaxed border-l border-brand-gold/30 pl-8">
              A curated look into our world of construction, where precision meets art and every detail is a testament to our commitment to Aligarh's urban future.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative overflow-hidden h-[600px] editorial-border"
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-10 left-10 p-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className="text-brand-gold text-[10px] uppercase font-bold tracking-[4px] block mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.category}
                </span>
                <h3 className="text-3xl font-serif italic text-white">{image.title}</h3>
                <div className="w-12 h-0.5 bg-brand-gold mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
