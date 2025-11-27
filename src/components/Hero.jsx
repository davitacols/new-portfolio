import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import heroImage from '../assets/use-hero.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[#0f0f0f] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3d3d3d]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#3d3d3d]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[#3d3d3d] text-sm uppercase tracking-wider mb-2">
                Portfolio 2024
              </p>
              <div className="w-16 h-px bg-[#3d3d3d]" />
            </motion.div>

            {/* Name & Title */}
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-light text-[#e1e1e1] leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                David<br />Ansa
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-2"
              >
                <p className="text-xl md:text-2xl text-[#e1e1e1]/70 font-light">
                  Web Developer
                </p>
                <p className="text-xl md:text-2xl text-[#e1e1e1]/70 font-light">
                  Software Developer
                </p>
                <p className="text-xl md:text-2xl text-[#e1e1e1]/70 font-light">
                  Machine Learning Specialist
                </p>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-[#e1e1e1]/60 text-lg leading-relaxed max-w-xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              8+ years delivering scalable solutions, clean UI/UX, and robust backend systems. 
              Known for solving complex challenges and launching high-impact applications.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="space-y-3 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a 
                href="mailto:davitacols@gmail.com"
                className="flex items-center gap-3 text-[#e1e1e1]/70 hover:text-[#e1e1e1] transition-colors group"
              >
                <FaEnvelope className="w-4 h-4" />
                <span className="text-sm">davitacols@gmail.com</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <a 
                href="https://github.com/davitacols" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#e1e1e1]/70 hover:text-[#e1e1e1] transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/davitacols" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#e1e1e1]/70 hover:text-[#e1e1e1] transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <motion.a 
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#3d3d3d] text-[#e1e1e1] hover:bg-[#4d4d4d] transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Work
              </motion.a>
              
              <motion.a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-4 border border-[#3d3d3d] text-[#e1e1e1] hover:bg-[#3d3d3d]/10 hover:border-[#4d4d4d] transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              {/* Image container */}
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="David Ansa" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#3d3d3d]/40 -z-10" />
              
              {/* Label */}
              <div className="absolute top-4 left-4 text-[#e1e1e1]/40 text-xs uppercase tracking-wider">
                David Ansa
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[#3d3d3d] hover:text-[#e1e1e1] transition-colors cursor-pointer"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <HiArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;