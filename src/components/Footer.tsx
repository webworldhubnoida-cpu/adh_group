/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Globe, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Google Translate Initialization
    const scriptId = 'google-translate-script';
    
    const addGoogleTranslateScript = () => {
      if (document.getElementById(scriptId)) return;
      
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      const element = document.getElementById('google_translate_element');
      // Only initialize if the element exists and is empty
      if (element && element.innerHTML === '') {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      }
    };

    if (!window.google) {
      addGoogleTranslateScript();
    } else if (window.google.translate && window.google.translate.TranslateElement) {
      // If already loaded, trigger init manually
      window.googleTranslateElementInit();
    }
  }, []);

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Featured Projects', path: '/projects' },
    { name: 'Meet The Team', path: '/team' },
    { name: 'Our Certificates', path: '/certificates' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="block">
              <div className="bg-white p-2 inline-block rounded-xl">
                <img 
                   src="/gallery/logo footer.jpeg" 
                   alt="ADH GROUP" 
                   className="h-16 w-auto object-contain"
                 />
              </div>
            </Link>
            <p className="text-white/60 font-medium leading-relaxed">
              Leading the architectural revolution with premium construction and real estate excellence in Aligarh. We build trust and lasting legacies.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/adhgroupaligarh" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group" title="Facebook Page">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              
              <a href="https://www.instagram.com/adhgroupaligarh/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://x.com/Adhgroupaligarh" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group">
                <Twitter size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://in.pinterest.com/Adhgroupaligarh/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.621 0 11.988-5.367 11.988-11.987C23.987 5.367 18.638 0 12.017 0z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-light-blue mb-8 uppercase tracking-[3px]">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-white/60 hover:text-white transition-colors font-medium text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-light-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity" /> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-light-blue mb-8 uppercase tracking-[3px]">Our Services</h4>
            <ul className="space-y-4 mb-8">
              {['Real Estate Development', 'Construction Services', 'Interior Design', 'Architectural Planning', 'Project Management'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-white/60 hover:text-white transition-colors font-medium text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-white/5">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Eye className="text-accent" size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Total Visits</p>
                  <p>15</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-light-blue mb-8 uppercase tracking-[3px]">Head Office</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-light transition-colors">
                  <MapPin className="text-light-blue" size={20} />
                </div>
                <a 
                  href="https://www.google.com/maps/place/A.D.H.GROUP/@27.922835,78.0926584,17z/data=!3m1!4b1!4m6!3m5!1s0x3974a52416ddc77d:0xda01ac1a5b04ecfe!8m2!3d27.922835!4d78.0926584!16s%2Fg%2F11l2r69wks" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-white/60 leading-relaxed font-medium hover:text-white transition-colors"
                >
                  A.D.H. GROUP, Aligarh<br />
                  Uttar Pradesh, India - 202001
                </a>
              </li>
<li className="flex gap-4 items-start group">
  
  {/* ICON */}
  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
    <Phone className="text-light-blue" size={18} />
  </div>

  {/* PHONE NUMBERS */}
  <div className="flex flex-col text-sm font-medium text-white/60 group-hover:text-white transition-colors space-y-1">
    <span>+91 7900990004</span>
    <span>+91 8937946287</span>
    <span>+91 9837946287</span>
  </div>

</li>
              <li className="flex gap-4 items-center group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="text-light-blue" size={18} />
                </div>
                <span className="text-sm text-white/60 font-medium group-hover:text-white transition-colors">info@adhgroup.in</span>
              </li>
              <li className="pt-4 border-t border-white/5">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-white/40">
                    <Globe size={15} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Translate Page</span>
                  </div>
                  <div id="google_translate_element" className="google-translate-container"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <p className="text-xs text-white/40 font-bold uppercase tracking-widest">
            © {currentYear} ADH Group. All Rights Reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <a 
              href="https://www.webworldhub.co.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] text-white/40 hover:text-accent transition-colors font-bold uppercase tracking-[2px] border-b border-white/5 pb-1 md:border-0 md:pb-0"
            >
              Design & Development By <span className="text-white/60 group-hover:text-accent transition-colors">Web Wolrd Hub</span>
            </a>
            <div className="flex gap-8 text-[10px] text-white/40 uppercase font-bold tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
