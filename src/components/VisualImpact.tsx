/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const galleryImages = [
  {
    url: "gallery/bas.png",
    title: "Basment parking plan",
    category: "Design"
  },
  {
    url: "gallery/ws.png",
    title: "Parking with shops",
    category: "Architectural"
  },
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    title: "Interior Sophistication",
    category: "Design"
  }
];

export default function VisualImpact() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 rounded-full">
                Capturing Excellence
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">
                The Visual Narrative <br /> of <span className="text-primary">ADH Group</span>
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-4 self-end">
            <p className="text-slate-600 font-medium text-lg leading-relaxed border-l-4 border-primary/20 pl-8">
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
              className="group relative overflow-hidden h-[600px] rounded-[3rem] shadow-xl"
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60" />
              
              <div className="absolute bottom-10 left-10 p-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className="text-light-blue text-xs uppercase font-bold tracking-[4px] block mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.category}
                </span>
                <h3 className="text-3xl font-heading font-bold text-white">{image.title}</h3>
                <div className="w-16 h-1 bg-accent mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
