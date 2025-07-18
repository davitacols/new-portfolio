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
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <span className="inline-block px-5 py-2 rounded-full border border-[#3d3d3d] text-sm text-[#e1e1e1]/80 bg-[#141414]">
                David Ansa - Web Developer | Software Developer | ML Specialist
              </span>
              
              <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight">
                <span className="text-[#e1e1e1]">Building digital </span>
                <span className="bg-gradient-to-r from-[#e1e1e1] via-[#a1a1a1] to-[#3d3d3d] bg-clip-text text-transparent">
                  experiences
                </span>
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
              className="flex flex-col sm:flex-row gap-6"
            >
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#3d3d3d] text-[#e1e1e1] rounded-lg hover:bg-[#4d4d4d] transition-colors text-lg cursor-pointer"
              >
                Contact me
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center px-8 py-4 border border-[#3d3d3d] text-[#e1e1e1] rounded-lg hover:bg-[#1a1a1a] transition-colors text-lg cursor-pointer"
              >
                View projects
              </a>
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

          {/* Right visual element */}
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
        </div>
      </div>
    </section>
  );
};

export default Hero;