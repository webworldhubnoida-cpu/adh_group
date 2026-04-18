/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { REVIEWS } from '../constants';

export default function Reviews() {
  return (
    <section className="py-24 bg-brand-blue-deep border-b border-brand-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="editorial-section-title block mb-4"
              >
                Client Testimonials
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl font-serif italic text-white"
              >
                Voices of Trust & Satisfaction
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden md:block"
            >
              <div className="flex items-center space-x-1 text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
                <span className="ml-3 text-white font-light tracking-widest text-sm uppercase">Excellent 4.9/5</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="editorial-border bg-brand-blue p-10 flex flex-col relative group"
            >
              <div className="absolute top-8 right-8 text-brand-gold/20 group-hover:text-brand-gold transition-colors duration-500">
                <Quote size={40} />
              </div>
              
              <div className="flex items-center space-x-1 text-brand-gold mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <blockquote className="flex-grow">
                <p className="text-xl font-serif italic text-white/90 leading-relaxed mb-8">
                  "{review.comment}"
                </p>
              </blockquote>

              <div className="flex items-center space-x-4">
                {review.image && (
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-500 editorial-border p-0.5 object-cover"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div>
                  <h4 className="text-white font-medium tracking-wide leading-tight">{review.name}</h4>
                  <p className="text-brand-gold text-xs uppercase tracking-widest mt-1 font-light">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-10 border-t border-brand-gold/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-brand-gray text-sm font-light leading-relaxed max-w-lg text-center md:text-left">
            Joining over 500+ families and business owners who have entrusted ADH Group with their architectural dreams.
          </p>
          <div className="flex items-center space-x-6 grayscale opacity-50 contrast-125">
            <span className="text-white font-serif italic">Trusted Partners & Quality Standards</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
