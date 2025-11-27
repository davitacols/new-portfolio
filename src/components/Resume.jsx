import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { achievements, volunteer } from '../constants';

const Resume = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Achievements Section */}
        <div className="space-y-12">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#3d3d3d] text-sm uppercase tracking-wider">Impact & Results</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#e1e1e1]">Achievements.</h2>
            <div className="w-24 h-px bg-gradient-to-r from-[#3d3d3d] to-transparent" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const [metric, description] = achievement.split(': ');
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-[#141414] p-8 rounded-sm border border-[#3d3d3d]/20 hover:border-[#3d3d3d]/60 transition-all duration-300 overflow-hidden"
                >
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3d3d3d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Number indicator */}
                  <div className="absolute top-4 right-4 text-[#3d3d3d]/20 text-6xl font-light leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="relative z-10 space-y-4">
                    <div className="text-3xl font-light text-[#e1e1e1] group-hover:text-white transition-colors">
                      {metric}
                    </div>
                    <div className="w-12 h-px bg-[#3d3d3d] group-hover:w-20 transition-all duration-300" />
                    <p className="text-[#e1e1e1]/70 text-sm leading-relaxed group-hover:text-[#e1e1e1]/90 transition-colors">
                      {description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Volunteer Section */}
        <div className="space-y-12">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#3d3d3d] text-sm uppercase tracking-wider">Community</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#e1e1e1]">Volunteer Work.</h2>
            <div className="w-24 h-px bg-gradient-to-r from-[#3d3d3d] to-transparent" />
          </motion.div>
          
          <div className="space-y-1">
            {volunteer.map((vol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative border-b border-[#3d3d3d]/20 hover:border-[#3d3d3d]/60 transition-all duration-300 py-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Left side - Role & Organization */}
                  <div className="lg:w-2/3 space-y-3">
                    <div className="flex items-center gap-4">
                      <span className="text-[#3d3d3d]/40 text-xs font-light">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl font-light text-[#e1e1e1] group-hover:text-white transition-colors">
                        {vol.role}
                      </h3>
                    </div>
                    <p className="text-[#3d3d3d] text-sm uppercase tracking-wider pl-10">
                      {vol.organization}
                    </p>
                    <p className="text-[#e1e1e1]/70 leading-relaxed pl-10 group-hover:text-[#e1e1e1]/90 transition-colors">
                      {vol.description}
                    </p>
                  </div>
                  
                  {/* Right side - Date */}
                  <div className="lg:w-1/3 lg:text-right pl-10 lg:pl-0">
                    <span className="text-[#e1e1e1]/60 text-sm font-light">
                      {vol.date}
                    </span>
                  </div>
                </div>
                
                {/* Hover indicator */}
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 w-1 bg-[#3d3d3d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;