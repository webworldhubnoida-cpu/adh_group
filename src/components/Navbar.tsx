/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onBookVisit }: { onBookVisit: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Team', href: '/team' },
    { name: 'Location', href: '/location' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 transition-all duration-300">
        {/* Editorial Topbar */}
        <div className={`hidden md:block bg-brand-blue-deep border-b border-white/5 py-2 transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 py-0 overflow-hidden' : 'opacity-100'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[9px] uppercase font-bold tracking-[3px] text-white/50">
            <div className="flex gap-6 items-center">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 bg-brand-gold rounded-full" />
                Aligarh, Uttar Pradesh
              </span>
              <a href="tel:+917900990004" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                <Phone size={10} className="text-brand-gold" /> +91 7900990004
              </a>
            </div>
            <div className="flex gap-5 items-center">
              <span className="text-brand-gold/30">Connect:</span>
              <a href="#" className="hover:text-brand-gold transition-colors"><Instagram size={12} /></a>
              <a href="#" className="hover:text-brand-gold transition-colors"><Facebook size={12} /></a>
              <a href="#" className="hover:text-brand-gold transition-colors"><Twitter size={12} /></a>
              <a href="#" className="hover:text-brand-gold transition-colors"><Linkedin size={12} /></a>
            </div>
          </div>
        </div>

        <div className={`${isScrolled ? 'editorial-glass py-3' : 'bg-transparent py-5 border-b border-white/5'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/gallery/logo navbar.png" 
                alt="ADH GROUP" 
                className="h-25 w-auto object-contain"
              />
            </Link>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-widest ${
                      location.pathname === link.href ? 'text-brand-gold' : 'text-white hover:text-brand-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={onBookVisit}
                className="bg-brand-gold hover:bg-brand-gold-dark text-brand-blue px-6 py-2 rounded-none font-bold text-sm transition-all duration-300 transform hover:scale-105 uppercase tracking-tighter shadow-lg cursor-pointer"
              >
                Book Visit
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-brand-gold transition-colors focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-blue border-t border-white/10"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-4 text-base font-medium border-b border-white/5 last:border-0 ${
                      location.pathname === link.href ? 'text-brand-gold' : 'text-white hover:text-brand-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 pb-2 px-3">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onBookVisit();
                    }}
                    className="block w-full text-center bg-brand-gold text-brand-blue py-3 font-bold uppercase tracking-widest cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
