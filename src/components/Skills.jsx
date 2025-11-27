import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Python', 'Java', 'RESTful APIs']
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'MySQL', 'SQLite', 'Database Design']
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'GitHub', 'VS Code', 'Jira', 'Machine Learning']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[#3d3d3d] text-sm uppercase tracking-wider mb-2">Expertise</p>
              <h2 className="text-4xl md:text-6xl font-light text-[#e1e1e1]">
                Technical Skills
              </h2>
            </div>
            <div className="text-[#3d3d3d] text-sm hidden md:block">
              {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} Skills
            </div>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-[#3d3d3d] via-[#3d3d3d]/50 to-transparent" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group relative border-r border-[#3d3d3d]/20 last:border-r-0 p-8 hover:bg-[#141414]/50 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-[#e1e1e1] group-hover:text-white transition-colors">
                    {category.title}
                  </h3>
                  <span className="text-[#3d3d3d]/40 text-xs">
                    {String(categoryIndex + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="w-12 h-px bg-[#3d3d3d] group-hover:w-20 transition-all duration-300" />
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                    }}
                    className="group/item flex items-center gap-3 text-[#e1e1e1]/70 hover:text-[#e1e1e1] transition-colors cursor-default"
                  >
                    <span className="w-1 h-1 bg-[#3d3d3d] rounded-full group-hover/item:bg-[#e1e1e1] transition-colors" />
                    <span className="text-sm font-light">{skill}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Hover indicator */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-px bg-[#3d3d3d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[#e1e1e1]/40 text-sm font-light">
            Continuously learning and adapting to new technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;