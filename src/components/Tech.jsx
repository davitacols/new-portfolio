import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const categories = ['All', ...new Set(technologies.map(tech => tech.category))];

const TechCard = ({ name, icon, category, isSelected }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`relative group cursor-pointer ${isSelected ? 'z-10' : ''}`}
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
    <motion.div 
      className={`relative flex flex-col items-center p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
        isSelected 
          ? 'bg-gray-800/80 border-indigo-500/50' 
          : 'bg-gray-900/50 hover:bg-gray-800/50 border-gray-800/50'
      }`}
      animate={{
        y: isSelected ? -5 : 0,
        boxShadow: isSelected 
          ? '0 20px 25px -5px rgba(99, 102, 241, 0.1), 0 10px 10px -5px rgba(168, 85, 247, 0.1)'
          : 'none'
      }}
    >
      <motion.span 
        className="text-3xl mb-3"
        animate={{ scale: isSelected ? 1.1 : 1 }}
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.span>
      <motion.h3 
        className="text-sm font-medium"
        animate={{ color: isSelected ? '#fff' : '#d1d5db' }}
      >
        {name}
      </motion.h3>
      <motion.span 
        className="text-xs mt-1"
        animate={{ color: isSelected ? '#a5b4fc' : '#6b7280' }}
      >
        {category}
      </motion.span>
    </motion.div>
  </motion.div>
);

const BackgroundAnimation = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div 
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 1],
        transition: { duration: 1 }
      }}
    >
      {[
        { position: '20% 30%', color: 'rgba(99,102,241,0.15)' },
        { position: '80% 70%', color: 'rgba(167,139,250,0.15)' }
      ].map((gradient, index) => (
        <motion.div 
          key={index}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${gradient.position}, ${gradient.color}, transparent 70%)`
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </motion.div>
  </div>
);

const CategoryButton = ({ category, isSelected, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
      isSelected ? 'text-white' : 'text-gray-400 hover:text-white'
    }`}
  >
    {isSelected && (
      <motion.div
        layoutId="activeCategory"
        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg"
        initial={false}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    )}
    <span className="relative z-10">{category}</span>
  </motion.button>
);

const Tech = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const filteredTech = selectedCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <section className="relative min-h-screen bg-[#030712] py-24 px-6 overflow-hidden">
      <BackgroundAnimation />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto space-y-16 relative z-10"
      >
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/10"
          >
            <span className="text-sm font-medium text-indigo-400">Technologies</span>
          </motion.div>
          
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

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <CategoryButton
              key={category}
              category={category}
              isSelected={selectedCategory === category}
              onClick={() => handleCategoryChange(category)}
            />
          ))}
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          <AnimatePresence mode="wait">
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
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Tech;