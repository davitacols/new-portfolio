import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../constants';
import ResumeButton from './ResumeButton';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;