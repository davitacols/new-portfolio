import React, { useState } from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'Python', icon: '🐍', category: 'Languages' },
  { name: 'TensorFlow', icon: '🧠', category: 'ML/AI' },
  { name: 'PyTorch', icon: '🔥', category: 'ML/AI' },
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'SQL', icon: '📊', category: 'Database' },
  { name: 'Git', icon: '📦', category: 'Tools' },
  { name: 'Linux', icon: '🐧', category: 'Tools' },
  { name: 'Kubernetes', icon: '⚓️', category: 'DevOps' }
];

const categories = [...new Set(technologies.map(tech => tech.category))];

const TechCard = ({ name, icon, category, isSelected }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative group cursor-pointer ${isSelected ? 'z-10' : ''}`}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
      <div className={`relative flex flex-col items-center p-6 rounded-2xl backdrop-blur-sm border border-gray-800/50 transition-all duration-300 ${
        isSelected 
          ? 'bg-gray-800/80 border-indigo-500/50' 
          : 'bg-gray-900/50 hover:bg-gray-800/50'
      }`}>
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="text-sm font-medium text-gray-300">{name}</h3>
        <span className="text-xs text-gray-500 mt-1">{category}</span>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredTech = selectedCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <section className="relative min-h-screen bg-[#030712] py-24 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(167,139,250,0.15),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-sm font-medium text-indigo-400 border border-indigo-500/10"
          >
            Technologies
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            All
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {filteredTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
            >
              <TechCard
                {...tech}
                isSelected={selectedCategory === tech.category}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;