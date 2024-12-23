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
          I am a driven and results-oriented professional with expertise in Machine Learning, Software Development, Data Analysis, and AI. With a passion for solving complex problems through innovative technology, I specialize in developing and deploying scalable machine learning models, building robust software applications, and extracting actionable insights from data to drive informed decision-making.

          Throughout my career, I have gained hands-on experience in a variety of domains, including deep learning, data analytics, and AI-powered solutions, using tools such as Python, TensorFlow, PyTorch, and scikit-learn. I am adept at building data pipelines, performing advanced data analysis, and utilizing AI to create intelligent applications that solve real-world challenges, from predictive analytics to computer vision and natural language processing.

          In software development, I focus on creating clean, efficient code and building robust, maintainable applications. I’m well-versed in best practices for software architecture and testing, ensuring that my solutions are both high-performing and scalable.

          I thrive in collaborative environments where I can leverage my diverse skill set to tackle complex technical problems. My goal is to continue advancing in the fields of AI, Machine Learning, and Data Science, and to contribute to projects that push the boundaries of what technology can achieve.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
