import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-2 text-center">
          <p className={styles.sectionSubText}>What I Offer</p>
          <h2 className={styles.sectionHeadText}>Services.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#141414] p-8 rounded-lg border border-[#3d3d3d]/20 hover:border-[#3d3d3d]/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#3d3d3d]/20 flex items-center justify-center group-hover:bg-[#3d3d3d]/40 transition-colors">
                  <service.icon className="w-6 h-6 text-[#e1e1e1]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light text-[#e1e1e1] mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#e1e1e1]/70 text-sm mb-4 group-hover:text-[#e1e1e1]/90 transition-colors">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-[#e1e1e1]/60 text-xs">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;