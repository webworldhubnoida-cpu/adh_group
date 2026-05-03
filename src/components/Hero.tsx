import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const images = [
  "/gallery/hero4.jpeg",
  "/gallery/p1.jpeg",
  
  "/gallery/hero1.jpeg",
  "/gallery/hero2.png",
  "/gallery/hero3.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // AUTO CHANGE EVERY 4 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full aspect-[16/9] overflow-hidden">

      {/* BACKGROUND SLIDER */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="Hero Background"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* DARK OVERLAY (TEXT VISIBILITY FIX) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* LIGHT BLEND (WORKS ON DARK BG ALSO) */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent mix-blend-overlay" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="max-w-2xl">

          {/* TAG */}
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs uppercase tracking-wider border border-white/20">
            Premium Construction
          </span>

          {/* HEADING */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Crafting Modern <br />
            <span className="text-gray-200">Living Spaces</span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-4 text-sm md:text-lg text-gray-200 max-w-lg">
            We design and build high-quality homes with modern architecture,
            durability, and elegance for future living.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-gray-200 transition-all shadow-lg active:scale-95"
            >
              Explore Projects
            </button>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto border-2 border-white text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-black transition-all active:scale-95"
            >
              Contact Us
            </button>
          </div>

        </div>
      </div>

      {/* OPTIONAL DOT INDICATORS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>

    </section>
  );
}