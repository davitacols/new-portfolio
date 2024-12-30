import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Machine Learning Engineering",
    icon: "🤖",
    description: "Developing and deploying scalable ML models using TensorFlow, PyTorch, and scikit-learn. Specializing in deep learning and neural networks.",
    gradient: "from-blue-500 to-cyan-500",
    skills: ["TensorFlow", "PyTorch", "scikit-learn"]
  },
  {
    title: "Software Development",
    icon: "💻",
    description: "Building robust applications with Python, focusing on clean architecture, testing, and maintainable code practices.",
    gradient: "from-emerald-500 to-green-500",
    skills: ["Python", "React", "Node.js"]
  },
  {
    title: "Data Analysis",
    icon: "📊",
    description: "Performing complex data analysis using Python, SQL, and visualization tools. Extracting actionable insights from large datasets.",
    gradient: "from-amber-500 to-orange-500",
    skills: ["Pandas", "SQL", "Tableau"]
  },
  {
    title: "AI Solutions",
    icon: "🎯",
    description: "Creating AI-powered solutions for real-world problems, including computer vision, NLP, and predictive analytics.",
    gradient: "from-purple-500 to-pink-500",
    skills: ["Computer Vision", "NLP", "Analytics"]
  }
];

const ServiceCard = ({ title, description, gradient, icon, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }}
    >
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="group relative p-8 rounded-2xl bg-gray-900/50 hover:bg-gray-800/50 backdrop-blur-lg border border-gray-800/50 transition-all duration-300"
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        />
        
        <div className="relative space-y-6">
          <motion.div 
            className="flex items-center gap-4"
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} p-0.5`}
            >
              <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center text-2xl">
                {icon}
              </div>
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
          </motion.div>

          <motion.p 
            className="text-gray-400 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          >
            {description}
          </motion.p>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.2 + skillIndex * 0.1 + 0.5
                }}
                className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${gradient} text-white/90 font-medium`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section className="relative min-h-screen bg-[#030712] py-24 px-6 overflow-hidden">
      {/* Animated Background Effects */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.1),transparent_50%)]" 
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto space-y-16 relative z-10"
      >
        <div className="text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-sm font-medium text-blue-400 border border-blue-500/10"
          >
            Introduction
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            <motion.span 
              className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent inline-block"
              whileHover={{ scale: 1.02 }}
            >
              Crafting Digital Solutions
            </motion.span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto text-center"
        >
          Experienced Machine Learning Engineer and Software Developer with a passion for creating
          innovative AI solutions. Leveraging cutting-edge technologies to transform complex
          challenges into elegant, efficient solutions. Committed to excellence in code quality
          and system architecture.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;