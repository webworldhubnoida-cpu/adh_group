import { Mail, Phone, Twitter, Instagram, Facebook, ShieldCheck } from 'lucide-react';

export default function TopHeader() {
  return (
    <div className="bg-[#0A4D8C] text-white py-2 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left Side: Contact Info & UDYAM */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white/80 sm:border-r sm:border-white/20 sm:pr-6">
              <ShieldCheck size={14} className="text-light-blue" />
              <span>UDYAM-UP-02-0049128</span>
            </div>
            <a href="mailto:Info@adhgroup.in" className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider hover:text-light-blue transition-colors group">
              <Mail size={14} className="text-light-blue group-hover:scale-110 transition-transform" />
              <span>Info@adhgroup.in</span>
            </a>
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="tel:+918937946287" className="flex items-center gap-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider hover:text-light-blue transition-colors group">
                <Phone size={14} className="text-light-blue group-hover:scale-110 transition-transform" />
                <span>+91 8937946287</span>
              </a>
              <a href="tel:+919837946287" className="hidden xs:flex items-center gap-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider hover:text-light-blue transition-colors group border-l border-white/10 pl-3 sm:pl-4">
                <span>+91 9837946287</span>
              </a>
            </div>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/adhgroupaligarh" target="_blank" rel="noopener noreferrer" className="hover:text-light-blue transition-colors" aria-label="Facebook Page">
              <Facebook size={16} />
            </a>
          
            <a href="https://www.instagram.com/adhgroupaligarh/" target="_blank" rel="noopener noreferrer" className="hover:text-light-blue transition-colors" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="https://x.com/Adhgroupaligarh" target="_blank" rel="noopener noreferrer" className="hover:text-light-blue transition-colors" aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="https://in.pinterest.com/Adhgroupaligarh/" target="_blank" rel="noopener noreferrer" className="hover:text-light-blue transition-colors" aria-label="Pinterest">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.621 0 11.988-5.367 11.988-11.987C23.987 5.367 18.638 0 12.017 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
