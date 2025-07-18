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
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-20 transition-all duration-300 ${
        scrolled ? 'bg-[#0f0f0f]/80 backdrop-blur-md border-b border-[#3d3d3d]/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto max-w-[1400px] px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a 
            href="/" 
            className="text-2xl font-light text-[#e1e1e1]"
            whileHover={{ scale: 1.02 }}
          >
            David<span className="text-[#3d3d3d]">Ansa</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className="text-[#e1e1e1]/70 hover:text-[#e1e1e1] transition-colors text-lg"
                whileHover={{ y: -2 }}
              >
                {link.title}
              </motion.a>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-6">
            {/* Resume Button */}
            <ResumeButton />

            {/* Contact Button */}
            <motion.a
              href="#contact"
              className="px-5 py-2.5 bg-[#3d3d3d] text-[#e1e1e1] rounded-lg hover:opacity-90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's talk
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#e1e1e1] hover:opacity-70 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 md:hidden bg-[#0f0f0f]/95 backdrop-blur-md border-t border-[#3d3d3d]/20 z-50"
            >
              <div className="px-8 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[#e1e1e1]/70 hover:text-[#e1e1e1] transition-colors py-2"
                  >
                    {link.title}
                  </a>
                ))}
                <div className="pt-4 space-y-3">
                  <a
                    href="./Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 border border-[#3d3d3d] text-[#e1e1e1] rounded-lg text-center hover:bg-[#1a1a1a] transition-colors"
                  >
                    Resume
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 bg-[#3d3d3d] text-[#e1e1e1] rounded-lg text-center hover:bg-[#4d4d4d] transition-colors"
                  >
                    Let's talk
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