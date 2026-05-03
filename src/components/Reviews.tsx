/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { REVIEWS } from '../constants';

export default function Reviews() {
  return (
    <section className="py-24 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary bg-primary/5 rounded-full"
              >
                Client Testimonials
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-heading font-bold text-slate-900"
              >
                Voices of Trust & <span className="text-primary">Satisfaction</span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden md:block"
            >
              <div className="flex items-center space-x-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
                <span className="ml-3 text-slate-600 font-bold tracking-widest text-sm uppercase">Excellent 4.9/5</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative overflow-hidden">
           <motion.div 
             className="flex gap-8 w-max"
             animate={{
               x: ["0%", "-50%"],
             }}
             transition={{
               duration: 30,
               repeat: Infinity,
               ease: "linear",
             }}
           >
             {[...REVIEWS, ...REVIEWS].map((review, index) => (
               <div
                 key={index}
                 className="w-[350px] md:w-[450px] bg-white p-10 flex flex-col relative group rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 flex-shrink-0"
               >
                <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary transition-colors duration-500">
                  <Quote size={40} />
                </div>
                
                <div className="flex items-center space-x-1 text-accent mb-8">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <blockquote className="flex-grow">
                  <p className="text-lg font-medium text-slate-700 leading-relaxed mb-10 italic">
                    "{review.comment}"
                  </p>
                </blockquote>

                <div className="flex items-center space-x-4 pt-6 border-t border-slate-50">
                  {review.image && (
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-14 h-14 rounded-2xl transition-all duration-500 object-cover border-2 border-white shadow-md"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div>
                    <h4 className="text-slate-900 font-bold tracking-wide leading-tight">{review.name}</h4>
                    <p className="text-primary text-xs uppercase tracking-widest mt-1 font-bold">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-lg text-center md:text-left">
            Joining over 500+ families and business owners who have entrusted <span className="text-primary font-bold">ADH Group</span> with their architectural dreams.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-slate-400 font-heading font-bold uppercase tracking-widest text-xs">Quality Standards • Premium Excellence</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
