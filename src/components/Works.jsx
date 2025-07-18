import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { HiOutlineArrowRight, HiOutlineGlobe, HiOutlineCode } from 'react-icons/hi';

const projects = [
  {
    name: "Pic2Nav",
    description: "Created an AI-powered image-to-navigation engine with 98% location precision. Scaled to 500K+ users with optimized geolocation and fast delivery.",
    tags: ["AI", "Geolocation", "React"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop",
    live_link: "https://pic2nav.com",
    source_code_link: "https://github.com/davitacols/pic2nav",
  },
  {
    name: "Ansa FS",
    description: "Designed a browser-based file system interface with intuitive drag/drop and nested folder support. Built using React and modern web APIs.",
    tags: ["React", "File System", "Web APIs"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=450&fit=crop",
    live_link: "https://dev-ansa.vercel.app",
    source_code_link: "https://github.com/davitacols/ansa-fs",
  },
  {
    name: "TurfglobalTSP",
    description: "Developed a B2B market entry solution for African expansion. Integrated compliance tools, analytics, and partner matchmaking.",
    tags: ["B2B", "Analytics", "Compliance"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    live_link: "https://turfglobaltsp.com",
    source_code_link: "https://github.com/davitacols/turfglobaltsp",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-surface-dark rounded-lg overflow-hidden"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60" />
      </div>

      <div className="absolute top-4 right-4 flex gap-2">
        <a
          href={project.live_link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-surface-light/10 backdrop-blur-sm hover:bg-surface-light/20 transition-colors"
          aria-label="View live demo"
        >
          <HiOutlineGlobe className="w-5 h-5 text-secondary" />
        </a>
        <a
          href={project.source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-surface-light/10 backdrop-blur-sm hover:bg-surface-light/20 transition-colors"
          aria-label="View source code"
        >
          <HiOutlineCode className="w-5 h-5 text-secondary" />
        </a>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-light text-secondary group-hover:text-secondary/90 transition-colors">
          {project.name}
        </h3>
        
        <p className="text-secondary/70 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-secondary/60 text-xs px-3 py-1 rounded-full border border-accent/10 bg-accent/5"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.live_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-secondary/60 text-sm hover:text-secondary transition-colors"
        >
          View Project <HiOutlineArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.article>
  );
};

const Works = () => {
  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-2">
          <p className={styles.sectionSubText}>Featured Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary/70 text-base leading-relaxed max-w-3xl"
        >
          Selected projects from my professional experience showcasing full-stack development, system optimization, and business solutions.
          Each project demonstrates real-world impact and technical expertise.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;