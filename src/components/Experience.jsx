import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { FaDatabase, FaTshirt, FaCode } from 'react-icons/fa'; // Import icons
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const experiences = [
  {
    title: "CEO & Founder",
    company_name: "dataDisk",
    date: "Jan 2020 - Present",
    icon: FaDatabase, // Use an icon component here
    iconBg: "#1d1836",
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
    icon: FaTshirt,
    iconBg: "#1a1f2c",
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
    icon: FaCode,
    iconBg: "#232631",
    points: [
      "Designed and implemented backend systems for scalable web applications.",
      "Worked closely with cross-functional teams to optimize software performance.",
      "Enhanced system security and implemented best practices in software development.",
    ],
  },
];

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{
      background: experience.iconBg,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    icon={
      <div className="w-10 h-10 flex items-center justify-center">
        {/* Adjust icon size and centering */}
        <experience.icon className="text-white w-8 h-8" />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
