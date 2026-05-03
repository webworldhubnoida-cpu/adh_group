import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import TopHeader from './TopHeader';

export default function Navbar({ onBookVisit }: { onBookVisit: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    <nav className="sticky top-0 w-full z-50">
      <TopHeader />
      {/* MAIN NAVBAR */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md border-b border-gray-200 py-2'
            : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* LOGO */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="/gallery/logo navbar.png"
                alt="ADH GROUP"
                className="h-25 w-auto object-contain"
              />
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-sm font-semibold transition-all ${
                    location.pathname === link.href
                      ? 'text-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {link.name}

                  {/* Active underline */}
                  {location.pathname === link.href && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* CTA BUTTON */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={onBookVisit}
                className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-sm"
              >
                Book Visit
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-5 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium ${
                    location.pathname === link.href
                      ? 'bg-gray-100 text-black'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => {
                  setIsOpen(false);
                  onBookVisit();
                }}
                className="w-full mt-3 bg-black text-white py-3 rounded-lg font-semibold"
              >
                Book Visit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}