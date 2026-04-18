/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_IMAGES = [
  "/gallery/hero1.jpeg",
  "/gallery/hero2.png",
  "/gallery/p1.jpeg",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1920"
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-24 md:pt-32">
      {/* Background Image Slider with Cross-fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${HERO_IMAGES[currentImage]}")` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0  z-10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <span className="editorial-section-title">
            Expert Builders
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif italic font-medium mb-6 leading-[1.1] text-white">
            Building Your Dreams <br />
            <span className="text-brand-gold">Into Reality</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-brand-gray font-light mb-10 tracking-wide leading-relaxed">
            Trusted Real Estate Builders & Construction Experts delivering quality, precision, and architectural excellence across Aligarh.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/projects"
              className="w-full sm:w-auto px-10 py-4 bg-brand-gold text-brand-blue font-bold uppercase tracking-widest text-xs rounded-[2px] flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-transform"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white opacity-80 hover:opacity-100 text-white font-bold uppercase tracking-widest text-xs rounded-[2px] backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

       
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
