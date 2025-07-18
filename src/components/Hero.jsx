import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import heroImage from '../assets/use-hero.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#1a1a1a]" />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-8 py-32 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left content */}
          <div className="space-y-10">
            {/* Mobile floating elements */}
            <div className="lg:hidden absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-[#3d3d3d]/30 rounded-full"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                  }}
                  animate={{
                    y: [null, -50, window.innerHeight + 50],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: Math.random() * 8 + 6,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8 relative z-10"
            >
              <motion.span 
                className="inline-block px-5 py-2 rounded-full border border-[#3d3d3d] text-sm text-[#e1e1e1]/80 bg-[#141414] backdrop-blur-sm"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="block sm:hidden">David Ansa - Developer</span>
                <span className="hidden sm:block">David Ansa - Web Developer | Software Developer | ML Specialist</span>
              </motion.span>
              
              <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight">
                <motion.span 
                  className="text-[#e1e1e1] inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Building digital{' '}
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-[#e1e1e1] via-[#a1a1a1] to-[#3d3d3d] bg-clip-text text-transparent inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  experiences
                </motion.span>
              </h1>
              
              <p className="text-xl text-[#e1e1e1]/70 max-w-2xl leading-relaxed">
                Creative and performance-driven developer with 8+ years delivering scalable solutions, clean UI/UX, and robust backend systems.
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <motion.a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#3d3d3d] text-[#e1e1e1] rounded-lg hover:bg-[#4d4d4d] transition-all duration-300 text-base sm:text-lg cursor-pointer shadow-lg hover:shadow-xl"
              >
                Contact me
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </motion.a>
              
              <motion.a 
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-[#3d3d3d] text-[#e1e1e1] rounded-lg hover:bg-[#1a1a1a] hover:border-[#4d4d4d] transition-all duration-300 text-base sm:text-lg cursor-pointer backdrop-blur-sm"
              >
                View projects
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-3 pt-4"
            >
              <div className="flex items-center gap-3 text-[#e1e1e1]/70">
                <FaEnvelope className="w-4 h-4" />
                <a href="mailto:davitacols@gmail.com" className="text-sm hover:text-[#e1e1e1] transition-colors">davitacols@gmail.com</a>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-8 pt-4"
            >
              <a href="https://github.com/davitacols" target="_blank" rel="noopener noreferrer" 
                className="text-[#e1e1e1]/70 hover:text-[#e1e1e1] transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/davitacols" target="_blank" rel="noopener noreferrer" 
                className="text-[#e1e1e1]/70 hover:text-[#e1e1e1] transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Right visual element - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative aspect-square rounded-2xl bg-[#141414] border border-[#3d3d3d] overflow-hidden">
              <img 
                src={heroImage} 
                alt="David Ansa" 
                className="w-full h-full object-cover"
              />
              <motion.div
                animate={{
                  background: [
                    'radial-gradient(circle at 30% 30%, rgba(61,61,61,0.2) 0%, transparent 70%)',
                    'radial-gradient(circle at 70% 70%, rgba(61,61,61,0.2) 0%, transparent 70%)'
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0"
              />
            </div>
          </motion.div>
          
          {/* Mobile visual element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:hidden mt-12"
          >
            <div className="relative w-48 h-48 mx-auto">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3d3d3d]/20 to-[#3d3d3d]/10 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <img 
                src={heroImage} 
                alt="David Ansa" 
                className="relative z-10 w-full h-full object-cover rounded-full border-2 border-[#3d3d3d]/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;