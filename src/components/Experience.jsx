import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative border-b border-[#3d3d3d]/20 hover:border-[#3d3d3d]/60 transition-all duration-300 py-12"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left - Date & Company */}
        <div className="lg:w-1/3 space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-[#3d3d3d]/40 text-xs font-light">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-[#e1e1e1]/60 text-sm font-light">
              {experience.date}
            </span>
          </div>
          
          <div className="space-y-2 pl-8">
            <h3 className="text-2xl font-light text-[#e1e1e1] group-hover:text-white transition-colors">
              {experience.title}
            </h3>
            <p className="text-[#3d3d3d] text-sm uppercase tracking-wider">
              {experience.company_name}
            </p>
          </div>
        </div>

        {/* Right - Responsibilities */}
        <div className="lg:w-2/3 space-y-4 pl-8 lg:pl-0">
          <ul className="space-y-3">
            {experience.points.map((point, pointIndex) => (
              <motion.li
                key={pointIndex}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3, 
                  delay: (index * 0.1) + (pointIndex * 0.05) 
                }}
                className="flex items-start gap-3 text-[#e1e1e1]/70 group-hover:text-[#e1e1e1]/90 transition-colors"
              >
                <span className="w-1 h-1 bg-[#3d3d3d] rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hover indicator */}
      <motion.div 
        className="absolute left-0 top-0 bottom-0 w-1 bg-[#3d3d3d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-[#0f0f0f]">
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
              <p className="text-[#3d3d3d] text-sm uppercase tracking-wider mb-2">Career</p>
              <h2 className="text-4xl md:text-6xl font-light text-[#e1e1e1]">
                Work Experience
              </h2>
            </div>
            <div className="text-[#3d3d3d] text-sm hidden md:block">
              {experiences.length} Positions
            </div>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-[#3d3d3d] via-[#3d3d3d]/50 to-transparent mb-8" />
          
          <p className="text-[#e1e1e1]/60 text-lg max-w-3xl font-light leading-relaxed">
            Over 8 years of professional experience delivering scalable solutions, 
            leading development teams, and driving technical innovation.
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-1">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Timeline Indicator */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-24 h-px bg-[#3d3d3d]/40" />
          <span className="text-[#e1e1e1]/40 text-xs uppercase tracking-wider">
            2010 - Present
          </span>
          <div className="w-24 h-px bg-[#3d3d3d]/40" />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;