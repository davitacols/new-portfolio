import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';

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

const TechCard = ({ name, icon, category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-accent/5 rounded-lg transform -rotate-3 transition-transform group-hover:rotate-0" />
      <div className="relative bg-surface-dark p-4 rounded-lg border border-accent/10 transition-transform group-hover:translate-y-1">
        <div className="flex items-center gap-3">
          <div className="text-2xl group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <div>
            <h3 className="text-secondary text-sm font-light">{name}</h3>
            <p className="text-secondary/60 text-xs">{category}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
        className="absolute top-40 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px]"
      />
      
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-2">
          <p className={styles.sectionSubText}>My Skills</p>
          <h2 className={styles.sectionHeadText}>Technologies.</h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary/70 text-base leading-relaxed max-w-3xl"
        >
          I work with a wide range of technologies in software development,
          machine learning, and cloud infrastructure. Here are the key tools
          and frameworks I use to build robust solutions.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} {...tech} index={index} />
          ))}
        </div>

        {/* Floating Decorative Elements */}
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-20 left-10 w-20 h-20 border border-accent/10 rounded-lg"
        />
        
        <motion.div
          animate={{ 
            y: [10, -10, 10],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-40 left-20 w-16 h-16 border border-accent/10 rounded-full"
        />
      </div>
    </section>
  );
};

export default Tech;