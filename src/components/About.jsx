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

        <motion.div
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-8 mx-auto max-w-3xl bg-[#1a1f2c] rounded-lg p-6 border border-gray-800 shadow-md"
        >
          <p className="text-gray-300 text-base leading-7">
            I'm a versatile tech professional specializing in Machine Learning, Software Development,
            and Data Analysis. With a strong foundation in Python and its ML/AI ecosystem, I develop
            innovative solutions that transform complex data into actionable intelligence.
            <br /><br />
            My expertise includes developing and deploying machine learning models, creating scalable
            software applications, and performing in-depth data analysis. I work with technologies
            like TensorFlow, PyTorch, and scikit-learn for ML projects, while utilizing modern software
            development practices to ensure robust and maintainable code.
            <br /><br />
            I'm particularly passionate about leveraging AI to solve real-world problems, whether it's
            through predictive analytics, computer vision, or natural language processing. My approach
            combines technical expertise with strong problem-solving skills to deliver effective solutions.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
