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
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-2">
          <p className={styles.sectionSubText}>Technical Expertise</p>
          <h2 className={styles.sectionHeadText}>Skills.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#141414] p-4 sm:p-6 rounded-lg border border-[#3d3d3d]/20 hover:border-[#3d3d3d]/40 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <h3 className="text-base sm:text-lg font-light text-[#e1e1e1] mb-3 sm:mb-4 group-hover:text-white transition-colors">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                    className="text-[#e1e1e1]/70 text-sm hover:text-[#e1e1e1] transition-colors cursor-default"
                  >
                    • {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;