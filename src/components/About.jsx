import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCode, HiOutlineLightningBolt, HiOutlineChartBar, HiOutlineSparkles } from 'react-icons/hi';
import { styles } from '../styles';

const services = [
  {
    title: "Machine Learning",
    icon: HiOutlineLightningBolt,
    description: "Developing and deploying scalable ML models with TensorFlow, PyTorch, and scikit-learn.",
  },
  {
    title: "Software Development",
    icon: HiOutlineCode,
    description: "Building robust applications with clean architecture, testing, and maintainable code practices.",
  },
  {
    title: "Data Analysis",
    icon: HiOutlineChartBar,
    description: "Extracting actionable insights from large datasets using Python, SQL, and visualization tools.",
  },
  {
    title: "AI Solutions",
    icon: HiOutlineSparkles,
    description: "Creating AI-powered solutions for computer vision, NLP, and predictive analytics.",
  }
];

const About = () => {
  return (
    <section 
      id="about" 
      className="py-20 px-6 bg-[#0f0f0f]"
    >
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
              <p className="text-[#3d3d3d] text-sm uppercase tracking-wider mb-2">Introduction</p>
              <h2 className="text-4xl md:text-6xl font-light text-[#e1e1e1]">
                Overview
              </h2>
            </div>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-[#3d3d3d] via-[#3d3d3d]/50 to-transparent mb-12" />
          
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl"
          >
            <p className="text-[#e1e1e1]/70 text-xl md:text-2xl leading-relaxed font-light mb-8">
              Creative and performance-driven Web and Software Developer with 8+ years of hands-on 
              experience delivering scalable solutions, clean UI/UX, and robust backend systems.
            </p>
            <p className="text-[#e1e1e1]/60 text-lg leading-relaxed font-light">
              Known for solving complex challenges, mentoring dev teams, and launching high-impact 
              applications. My approach combines technical expertise with minimalist design principles 
              to create solutions that are both powerful and intuitive.
            </p>
          </motion.div>
        </motion.div>

        {/* Specializations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border border-[#3d3d3d]/20 hover:border-[#3d3d3d]/60 bg-[#141414] hover:bg-[#1a1a1a] transition-all duration-300 p-8"
            >
              {/* Number */}
              <div className="absolute top-4 right-4 text-[#3d3d3d]/20 text-4xl font-light">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <motion.div
                className="w-12 h-12 mb-6 flex items-center justify-center border border-[#3d3d3d]/40 rounded-full group-hover:border-[#3d3d3d] group-hover:bg-[#3d3d3d]/10 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="w-6 h-6 text-[#e1e1e1]/70 group-hover:text-[#e1e1e1] transition-colors" />
              </motion.div>

              {/* Content */}
              <div className="space-y-4 relative z-10">
                <h3 className="text-xl font-light text-[#e1e1e1] group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <div className="w-12 h-px bg-[#3d3d3d] group-hover:w-20 transition-all duration-300" />
                <p className="text-[#e1e1e1]/60 text-sm leading-relaxed group-hover:text-[#e1e1e1]/80 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Hover indicator */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-px bg-[#3d3d3d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-16 pt-16 border-t border-[#3d3d3d]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-[#e1e1e1] mb-2">8+</div>
              <div className="text-[#e1e1e1]/60 text-xs uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-light text-[#e1e1e1] mb-2">50+</div>
              <div className="text-[#e1e1e1]/60 text-xs uppercase tracking-wider">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-light text-[#e1e1e1] mb-2">230+</div>
              <div className="text-[#e1e1e1]/60 text-xs uppercase tracking-wider">Open Source Contributions</div>
            </div>
            <div>
              <div className="text-3xl font-light text-[#e1e1e1] mb-2">97%</div>
              <div className="text-[#e1e1e1]/60 text-xs uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;