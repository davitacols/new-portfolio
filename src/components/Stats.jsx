import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: '8+', label: 'Years Experience' },
  { number: '97%', label: 'Efficiency Improvement' },
  { number: '500K+', label: 'Users Reached' },
  { number: '230+', label: 'Open Source Contributions' }
];

const AnimatedCounter = ({ number, label, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      const target = parseInt(number.replace(/[^0-9]/g, ''));
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [isInView, number]);
  
  const displayNumber = number.includes('+') ? `${count}+` : 
                      number.includes('%') ? `${count}%` : 
                      number.includes('K') ? `${Math.floor(count/1000)}K+` : count;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center group cursor-default"
    >
      <div className="text-3xl md:text-4xl font-light text-[#e1e1e1] mb-2 group-hover:text-white transition-colors">
        {displayNumber}
      </div>
      <div className="text-[#e1e1e1]/70 text-sm group-hover:text-[#e1e1e1]/90 transition-colors">
        {label}
      </div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 px-6 bg-[#141414] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#3d3d3d]/5 via-transparent to-[#3d3d3d]/5" />
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={stat.label}
              number={stat.number}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;