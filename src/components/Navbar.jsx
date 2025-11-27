import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../constants';
import ResumeButton from './ResumeButton';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('button[aria-label="Toggle menu"]')) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed top-0 w-full z-20 transition-all duration-500 ${
        scrolled ? 'bg-[#0f0f0f]/95 backdrop-blur-xl border-b border-[#3d3d3d]/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto max-w-[1400px] px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.a 
            href="/" 
            className="text-xl font-light tracking-[0.2em] uppercase text-[#e1e1e1] group"
            whileHover={{ letterSpacing: '0.25em' }}
            transition={{ duration: 0.3 }}
          >
            David Ansa
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className="group relative px-6 py-3 text-[#e1e1e1]/60 hover:text-[#e1e1e1] transition-all duration-300 text-sm tracking-wider uppercase"
                whileHover={{ y: -2 }}
              >
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[10px] text-[#3d3d3d] opacity-0 group-hover:opacity-100 transition-opacity">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="ml-6">{link.title}</span>
                <motion.div 
                  className="absolute bottom-0 left-6 right-6 h-[1px] bg-[#e1e1e1] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </motion.a>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Resume Button */}
            <motion.a
              href="./Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-[#e1e1e1]/60 hover:text-[#e1e1e1] border border-[#3d3d3d]/30 hover:border-[#3d3d3d] transition-all duration-300 text-xs tracking-widest uppercase"
              whileHover={{ scale: 1.02 }}
            >
              Resume
            </motion.a>

            {/* Contact Button */}
            <motion.a
              href="#contact"
              className="px-6 py-2.5 bg-[#e1e1e1] text-[#0f0f0f] hover:bg-[#e1e1e1]/90 transition-all duration-300 text-xs tracking-widest uppercase font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 text-[#e1e1e1] hover:text-[#e1e1e1]/70 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
              className="absolute top-3 left-2 w-6 h-[1px] bg-current origin-center"
            />
            <motion.span
              animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              className="absolute top-5 left-2 w-6 h-[1px] bg-current"
            />
            <motion.span
              animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
              className="absolute top-7 left-2 w-6 h-[1px] bg-current origin-center"
            />
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 md:hidden bg-[#0f0f0f]/98 backdrop-blur-xl border-t border-[#3d3d3d]/10 z-50 overflow-hidden"
            >
              <div className="px-8 py-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-4 py-4 border-b border-[#3d3d3d]/10 hover:border-[#3d3d3d]/30 transition-all"
                  >
                    <span className="text-xs text-[#3d3d3d] tracking-wider">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-lg text-[#e1e1e1]/60 group-hover:text-[#e1e1e1] tracking-wider uppercase transition-colors">{link.title}</span>
                  </motion.a>
                ))}
                <div className="pt-6 space-y-3">
                  <a
                    href="./Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 border border-[#3d3d3d]/30 text-[#e1e1e1]/60 hover:text-[#e1e1e1] hover:border-[#3d3d3d] text-center text-xs tracking-widest uppercase transition-all"
                  >
                    Resume
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-6 py-3 bg-[#e1e1e1] text-[#0f0f0f] hover:bg-[#e1e1e1]/90 text-center text-xs tracking-widest uppercase font-medium transition-all"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;