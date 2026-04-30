
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BrandWordmark: React.FC = () => (
  <div className="flex items-center select-none py-1">
    {/* Combined Logo and Text SVG for perfect responsiveness and layout fidelity */}
    <svg viewBox="0 0 280 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 sm:h-8 md:h-10 lg:h-12 w-auto">
      {/* Icon Group - Translated down to align with text center */}
      <g className="text-blue-600" transform="translate(2, 12) scale(0.85)">
        {/* Outer Hexagon */}
        <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Inner Hexagon */}
        <path d="M12 7L16.3 9.5V14.5L12 17L7.7 14.5V9.5L12 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Connecting Spokes */}
        <path d="M12 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.5 6.5L16.3 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.5 17.5L16.3 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 23V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.5 17.5L7.7 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.5 6.5L7.7 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>

      {/* Text Group */}
      <text x="28" y="30" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="24" letterSpacing="-0.5" fill="#0f172a">ClinicStack</text>
      <text x="162" y="30" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="24" letterSpacing="-0.5" fill="#2563eb">AI</text>
    </svg>
  </div>
);

interface NavbarProps {
  onNavigateHome?: () => void;
  isScrolled?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, isScrolled = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Growth Engine', href: '#features' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <header className="w-full max-w-7xl mx-auto px-4 lg:px-6 py-1.5 lg:py-3 rounded-full bg-white/70 backdrop-blur-lg border border-slate-100 shadow-lg pointer-events-auto transition-all duration-300">
        <div className="flex items-center justify-between h-8 md:h-12">
          {/* Brand Wordmark Area */}
          <div className="flex-shrink-0 cursor-pointer" onClick={handleLogoClick}>
            <BrandWordmark />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-700 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={scrollToContact}
                className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-700 transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button 
              onClick={scrollToContact}
              className="px-6 py-2.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.1)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] font-bold text-xs uppercase tracking-widest"
            >
              Book Growth Audit
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-full text-slate-500 hover:text-blue-700 hover:bg-slate-50 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="block w-5 h-5" /> : <Menu className="block w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="md:hidden overflow-hidden border-t border-slate-100"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-blue-700 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <button 
                  onClick={scrollToContact}
                  className="block w-full text-left px-3 py-3 text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-blue-700 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  Contact Us
                </button>
                <div className="mt-4 px-3">
                  <button 
                    onClick={scrollToContact}
                    className="w-full px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-black uppercase tracking-widest shadow-lg hover:shadow-xl transition-all active:scale-95"
                  >
                    Book Growth Audit
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Navbar;
