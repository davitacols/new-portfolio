import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const navLinks = [
  { title: "Home", href: "#" },
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" }
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/yourusername" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername" },
  { icon: FaTwitter, href: "https://twitter.com/yourusername" }
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-2 rounded-lg bg-surface-dark border border-accent/10 lg:hidden"
      >
        {isOpen ? (
          <HiOutlineX className="w-6 h-6 text-secondary" />
        ) : (
          <HiOutlineMenu className="w-6 h-6 text-secondary" />
        )}
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-[280px] bg-surface-dark border-l border-accent/10 z-40 lg:translate-x-0"
      >
        <nav className="h-full flex flex-col justify-between p-8">
          {/* Navigation Links */}
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <motion.li
                key={link.title}
                whileHover={{ x: 4 }}
                transition={{ type: "tween", duration: 0.2 }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-secondary/70 hover:text-secondary transition-colors"
                >
                  {link.title}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="space-y-6">
            <div className="h-px bg-accent/10" />
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="text-secondary/70 hover:text-secondary transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </nav>
      </motion.aside>

      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;