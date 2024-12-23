import React from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-1 w-1 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, Math.random() * 100 - 50],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

const Hero = () => {
  const specialties = [
    {
      title: "Machine Learning Specialist",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9M3.6 9h16.8M3.6 15h16.8"/>
        </svg>
      ),
      description: "Developing intelligent solutions with AI"
    },
    {
      title: "Software Developer",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      description: "Building robust applications"
    },
    {
      title: "Data Analyst",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 3H3v18h18V3z"/>
          <path d="M21 9H3M21 15H3M9 21V3M15 21V3"/>
        </svg>
      ),
      description: "Extracting insights from data"
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#0A0F1C]">
      <FloatingParticles />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-[#1a1f2c] to-[#0A0F1C] opacity-80" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.03),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                <h1 className="text-6xl font-bold">
                  <span className="text-white">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    David Ansa
                  </span>
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-400 font-light"
              >
                Transforming data into intelligence, code into solutions.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid gap-4"
            >
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * (index + 3) }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <div className="relative flex items-center gap-4 bg-[#1a1f2c]/80 p-6 rounded-xl backdrop-blur-sm border border-gray-800/50">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      {specialty.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{specialty.title}</h3>
                      <p className="text-gray-400 text-sm">{specialty.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-3xl"></div>
            <div className="relative bg-[#1a1f2c]/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800/50">
              <pre className="text-sm text-gray-300 font-mono">
                <code>{`class DataScientist:
    def __init__(self):
        self.skills = [
            "Machine Learning",
            "Data Analysis",
            "Software Development"
        ]
        
    def solve_problems(self, data):
        return innovative_solutions`}</code>
              </pre>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a 
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <span className="text-sm font-light">Learn More</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-6"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;