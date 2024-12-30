import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "CEO & Founder",
    company_name: "dataDisk",
    date: "Jan 2020 - Present",
    bgColor: "bg-blue-900/20",
    borderColor: "border-blue-500/30",
    gradientFrom: "from-blue-500",
    gradientVia: "via-purple-500",
    gradientTo: "to-purple-500/0",
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
    bgColor: "bg-purple-900/20",
    borderColor: "border-purple-500/30",
    gradientFrom: "from-purple-500",
    gradientVia: "via-pink-500",
    gradientTo: "to-pink-500/0",
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
    bgColor: "bg-green-900/20",
    borderColor: "border-green-500/30",
    gradientFrom: "from-green-500",
    gradientVia: "via-teal-500",
    gradientTo: "to-teal-500/0",
    points: [
      "Designed and implemented backend systems for scalable web applications.",
      "Worked closely with cross-functional teams to optimize software performance.",
      "Enhanced system security and implemented best practices in software development.",
    ],
  },
];

const ExperienceCard = ({ experience, isLast }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative flex gap-6 pb-10"
  >
    {!isLast && (
      <div className={`absolute left-[28px] top-[48px] w-[2px] h-[calc(100%-48px)] bg-gradient-to-b ${experience.gradientFrom} ${experience.gradientVia} ${experience.gradientTo}`} />
    )}

    <div className="relative flex-none">
      <div
        className={`w-16 h-16 rounded-full ${experience.bgColor} ${experience.borderColor} border-2 shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110`}
      >
        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${experience.gradientFrom} ${experience.gradientVia} ${experience.gradientTo} animate-pulse`} />
      </div>
    </div>

    <div
      className={`flex-1 relative p-6 rounded-xl ${experience.bgColor} ${experience.borderColor} border shadow-md transition-all hover:shadow-lg hover:scale-[1.02]`}
    >
      <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-sm text-gray-300 shadow-sm">
        {experience.date}
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-100">{experience.title}</h3>
          <p className="text-sm text-gray-400">{experience.company_name}</p>
        </div>

        <ul className="space-y-2">
          {experience.points.map((point, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-300">
              <span className={`w-2 h-2 mt-1 rounded-full flex-shrink-0 bg-gradient-to-br ${experience.gradientFrom} ${experience.gradientVia} ${experience.gradientTo}`} />
              <span className="text-sm">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <span className="text-sm font-medium text-blue-400 uppercase tracking-wide">Career Path</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">Work Experience</h2>
        </motion.div>

        <div className="mt-16 space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

