import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { FaBrain, FaCode, FaChartBar, FaRobot } from 'react-icons/fa';

const servicesData = [
  {
    title: "Machine Learning Engineering",
    icon: <FaBrain className="text-blue-400 w-12 h-12" />,
    description: "Developing and deploying scalable ML models using TensorFlow, PyTorch, and scikit-learn. Specializing in deep learning and neural networks."
  },
  {
    title: "Software Development",
    icon: <FaCode className="text-green-400 w-12 h-12" />,
    description: "Building robust applications with Python, focusing on clean architecture, testing, and maintainable code practices."
  },
  {
    title: "Data Analysis",
    icon: <FaChartBar className="text-yellow-400 w-12 h-12" />,
    description: "Performing complex data analysis using Python, SQL, and visualization tools. Extracting actionable insights from large datasets."
  },
  {
    title: "AI Solutions",
    icon: <FaRobot className="text-purple-400 w-12 h-12" />,
    description: "Creating AI-powered solutions for real-world problems, including computer vision, NLP, and predictive analytics."
  }
];

const ServiceCard = ({ index, title, icon, description }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="flex flex-col items-center bg-[#1a1f2c] border border-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
  >
    <div className="w-20 h-20 flex items-center justify-center bg-blue-500/20 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm text-center">{description}</p>
  </motion.div>
);

const About = () => {
  return (
    <section className="relative z-0 bg-[#0A0F1C] py-16 px-6">
      <div className="container mx-auto">
        <motion.div variants={textVariant()} className="text-center">
          <p className="text-blue-400 text-sm uppercase tracking-wider mb-2">Introduction</p>
          <h2 className="text-white font-black text-3xl sm:text-4xl md:text-5xl">Overview</h2>
        </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Highly motivated Junior Front-End Developer with a passion for creating
        user- friendly web applications and interfaces. Possesses excellent
        problem-solving abilities and a keen eye for detail, ensuring the
        delivery of high-quality interface. Proficient in HTML, CSS, and
        JavaScript, with a strong understanding of UI/UX principles.
        Collaborative team player with a continuous learning mindset. A
        proactive team player with effective communication skills and a passion
        for staying updated with the latest frontend tools and technologies.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
