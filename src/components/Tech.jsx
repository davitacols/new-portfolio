import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <section className="py-20 px-6 bg-[#141414]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[#3d3d3d] text-sm uppercase tracking-wider mb-2">Stack</p>
              <h2 className="text-4xl md:text-6xl font-light text-[#e1e1e1]">
                Technologies
              </h2>
            </div>
            <div className="text-[#3d3d3d] text-sm hidden md:block">
              {technologies.length} Tools
            </div>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-[#3d3d3d] via-[#3d3d3d]/50 to-transparent" />
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative aspect-square border border-[#3d3d3d]/20 hover:border-[#3d3d3d]/60 bg-[#0f0f0f] hover:bg-[#1a1a1a] transition-all duration-300 flex flex-col items-center justify-center p-6 cursor-default"
            >
              {/* Tech Icon */}
              <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Tech Name */}
              <p className="text-[#e1e1e1]/60 text-xs text-center font-light group-hover:text-[#e1e1e1] transition-colors">
                {technology.name}
              </p>

              {/* Hover Indicator */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-px bg-[#3d3d3d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[#e1e1e1]/40 text-sm font-light">
            Always exploring and mastering new technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;