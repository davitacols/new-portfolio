import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const milestones = [
  {
    year: '2024',
    title: 'Lead Software Engineer',
    company: 'JACKISA.COM',
    description: 'Leading full-stack development for logistics platforms'
  },
  {
    year: '2017',
    title: 'Software Developer',
    company: 'OZ WEARS',
    description: 'Achieved 97% efficiency improvement in inventory systems'
  },
  {
    year: '2014',
    title: 'Technical Official',
    company: 'Ibedmore Resources',
    description: 'Managed IT operations as sole technical staff'
  },
  {
    year: '2010',
    title: 'Software Engineer',
    company: 'Royalline Tech',
    description: 'Started professional development career'
  }
];

const Timeline = () => {
  return (
    <section className="py-20 px-6 bg-[#141414]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-2 text-center">
          <p className={styles.sectionSubText}>Career Journey</p>
          <h2 className={styles.sectionHeadText}>Timeline.</h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[#3d3d3d]/40" />
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start gap-8 pb-12 last:pb-0"
            >
              <div className="w-16 h-16 rounded-full bg-[#3d3d3d] flex items-center justify-center text-[#e1e1e1] font-light text-sm z-10">
                {milestone.year}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-light text-[#e1e1e1] mb-1">
                  {milestone.title}
                </h3>
                <p className="text-[#3d3d3d] text-sm mb-2">
                  {milestone.company}
                </p>
                <p className="text-[#e1e1e1]/70 text-sm">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;