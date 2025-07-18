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

const ServiceCard = ({ title, description, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <div className="bg-surface-dark p-6 rounded-lg h-full border border-[#3d3d3d]/20 hover:border-[#3d3d3d]/40 transition-all duration-300 group">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-5 h-5 text-secondary group-hover:text-white transition-colors" aria-hidden="true" />
            </motion.div>
            <h3 className="text-lg font-light text-secondary group-hover:text-white transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-secondary/70 text-sm leading-relaxed group-hover:text-secondary/90 transition-colors">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section 
      id="about" 
      className="relative py-20 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-2">
          <p className={`${styles.sectionSubText}`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-secondary/70 text-base leading-relaxed max-w-3xl"
        >
          Creative and performance-driven Web and Software Developer with 8+ years of hands-on experience
          delivering scalable solutions, clean UI/UX, and robust backend systems. Known for solving complex
          challenges, mentoring dev teams, and launching high-impact applications. Expertise spans JavaScript,
          Python, React, Node.js, and machine learning technologies.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;