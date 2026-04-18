/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Featured Projects', path: '/projects' },
    { name: 'Meet The Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-brand-blue text-white pt-24 pb-12 overflow-hidden relative border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="block">
              <img 
                 src="/gallery/logo footer.jpeg" 
                 alt="ADH GROUP" 
                 className="h-16 w-auto object-contain"
               />
            </Link>
            <p className="text-white/60 font-light leading-relaxed">
              Leading the architectural revolution with premium construction and real estate excellence. We build trust and legacies.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-brand-gold mb-8 uppercase tracking-[3px]">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-white/60 hover:text-brand-gold transition-colors font-light text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-gold rounded-full" /> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-brand-gold mb-8 uppercase tracking-[3px]">Our Services</h4>
            <ul className="space-y-4">
              {['Real Estate Development', 'Construction Services', 'Interior Design', 'Architectural Planning', 'Project Management'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-white/60 hover:text-brand-gold transition-colors font-light text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-gold rounded-full" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold text-brand-gold mb-8 uppercase tracking-widest">Head Office</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start group">
                <MapPin className="text-brand-gold shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <a 
                  href="https://www.google.com/maps/place/A.D.H.GROUP/@27.922835,78.0926584,17z/data=!3m1!4b1!4m6!3m5!1s0x3974a52416ddc77d:0xda01ac1a5b04ecfe!8m2!3d27.922835!4d78.0926584!16s%2Fg%2F11l2r69wks" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-white/60 leading-relaxed font-light hover:text-brand-gold transition-colors"
                >
                  A.D.H. GROUP, Aligarh<br />
                  Uttar Pradesh, India - 202001
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-brand-gold shrink-0" size={18} />
                <span className="text-sm text-white/60 font-light">+91 7900990004</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-brand-gold shrink-0" size={18} />
                <span className="text-sm text-white/60 font-light">info@adhgroup.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-xs text-white/40 uppercase tracking-widest">
            © {currentYear} ADH Group. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-white/40 uppercase font-bold tracking-widest">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
