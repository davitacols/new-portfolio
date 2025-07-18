import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const experiences = [
  {
    title: "CEO & Founder",
    company_name: "dataDisk",
    date: "Jan 2020 - Present",
    points: [
      "Spearheaded the development of a revolutionary data management platform with robust AI integrations.",
      "Oversaw a team of engineers and data scientists to deliver scalable solutions for global clients.",
      "Expanded the platform's capabilities to support big data processing and real-time analytics.",
    ],
  },
  {
    title: "AI Fashion Model Developer",
    company_name: "Freelance",
    date: "Mar 2018 - Dec 2019",
    points: [
      "Developed AI algorithms for creating virtual fashion models with precise measurements.",
      "Collaborated with designers to bring realistic 3D visualizations to fashion ecommerce platforms.",
      "Integrated machine learning models to predict trends and personalize user experiences.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Tech Innovations",
    date: "Jul 2015 - Feb 2018",
    points: [
      "Designed and implemented backend systems for scalable web applications.",
      "Worked closely with cross-functional teams to optimize software performance.",
      "Enhanced system security and implemented best practices in software development.",
    ],
  },
];

const ExperienceCard = ({ experience, isLast }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative flex gap-6 pb-12"
  >
    {!isLast && (
      <div className="absolute left-[11px] top-[28px] w-[1px] h-[calc(100%-28px)] bg-accent/20" />
    )}

    <div className="relative flex-none">
      <div className="w-6 h-6 rounded-full bg-surface-dark border border-accent/20 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-accent" />
      </div>
    </div>

    <div className="flex-1 space-y-2">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-light text-secondary">{experience.title}</h3>
          <p className="text-sm text-secondary/70">{experience.company_name}</p>
        </div>
        <span className="text-sm text-secondary/60">{experience.date}</span>
      </div>

      <ul className="space-y-2 mt-4">
        {experience.points.map((point, index) => (
          <li key={index} className="text-secondary/70 text-sm leading-relaxed">
            {point}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-2">
          <p className={styles.sectionSubText}>Career Path</p>
          <h2 className={styles.sectionHeadText}>Experience.</h2>
        </div>

        <div className="mt-12">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;