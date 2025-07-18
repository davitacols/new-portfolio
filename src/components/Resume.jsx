import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { achievements, volunteer } from '../constants';

const Resume = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Achievements Section */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className={styles.sectionSubText}>Recognition</p>
            <h2 className={styles.sectionHeadText}>Achievements.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface-dark p-4 rounded-lg border-l-4 border-accent"
              >
                <p className="text-secondary/80">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Volunteer Section */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className={styles.sectionSubText}>Community Impact</p>
            <h2 className={styles.sectionHeadText}>Volunteer Work.</h2>
          </div>
          
          <div className="space-y-6">
            {volunteer.map((vol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface-dark p-6 rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg font-light text-secondary">{vol.role}</h3>
                  <p className="text-accent text-sm">{vol.date}</p>
                </div>
                <p className="text-secondary/70 mb-2 font-medium">{vol.organization}</p>
                <p className="text-secondary/70">{vol.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;