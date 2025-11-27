import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { HiOutlineCode, HiOutlineDesktopComputer, HiOutlineLightningBolt, HiOutlineChartBar } from 'react-icons/hi';

const services = [
  {
    title: 'Web Development',
    description: 'Full-stack web applications with modern frameworks and responsive design.',
    icon: HiOutlineCode,
    features: ['React/Next.js', 'Node.js/Express', 'Database Integration', 'API Development']
  },
  {
    title: 'Software Solutions',
    description: 'Custom software development for business automation and efficiency.',
    icon: HiOutlineDesktopComputer,
    features: ['Desktop Applications', 'System Integration', 'Workflow Automation', 'Legacy Modernization']
  },
  {
    title: 'Machine Learning',
    description: 'AI-powered solutions for data analysis and predictive modeling.',
    icon: HiOutlineLightningBolt,
    features: ['Data Processing', 'Predictive Analytics', 'Computer Vision', 'Model Deployment']
  },
  {
    title: 'Consulting',
    description: 'Technical consulting and mentorship for development teams.',
    icon: HiOutlineChartBar,
    features: ['Code Review', 'Architecture Design', 'Team Training', 'Best Practices']
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="services" className="py-20 px-6 bg-[#0f0f0f]">
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
              <p className="text-[#3d3d3d] text-sm uppercase tracking-wider mb-2">What I Offer</p>
              <h2 className="text-4xl md:text-6xl font-light text-[#e1e1e1]">
                Services
              </h2>
            </div>
            <div className="text-[#3d3d3d] text-sm hidden md:block">
              {services.length} Services
            </div>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-[#3d3d3d] via-[#3d3d3d]/50 to-transparent" />
        </motion.div>

        {/* Services List */}
        <div className="space-y-1">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              className="group relative border-b border-[#3d3d3d]/20 hover:border-[#3d3d3d]/60 transition-all duration-300"
            >
              <div className="py-8 cursor-pointer">
                <div className="flex items-start justify-between gap-8">
                  {/* Left - Number & Icon */}
                  <div className="flex items-center gap-6">
                    <span className="text-[#3d3d3d]/40 text-sm font-light w-8">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    
                    <motion.div
                      className="w-12 h-12 border border-[#3d3d3d]/40 rounded-full flex items-center justify-center group-hover:border-[#3d3d3d] group-hover:bg-[#3d3d3d]/10 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-5 h-5 text-[#e1e1e1]/70 group-hover:text-[#e1e1e1] transition-colors" />
                    </motion.div>
                  </div>

                  {/* Center - Title & Description */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-2xl md:text-3xl font-light text-[#e1e1e1] group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#e1e1e1]/60 text-sm max-w-2xl group-hover:text-[#e1e1e1]/80 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  {/* Right - Expand Indicator */}
                  <motion.div
                    className="text-[#3d3d3d] group-hover:text-[#e1e1e1] transition-colors"
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </div>

                {/* Expandable Features */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pl-24 pr-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                              className="text-[#e1e1e1]/70 text-sm flex items-center gap-2"
                            >
                              <span className="w-1 h-1 bg-[#3d3d3d] rounded-full" />
                              {feature}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Hover indicator */}
              <motion.div 
                className="absolute left-0 top-0 bottom-0 w-1 bg-[#3d3d3d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[#e1e1e1]/40 text-sm font-light mb-6">
            Need a custom solution?
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-6 py-3 border border-[#3d3d3d] text-[#e1e1e1] hover:bg-[#3d3d3d]/10 hover:border-[#4d4d4d] transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Discuss Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;