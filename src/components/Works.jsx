import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { HiOutlineArrowRight, HiOutlineExternalLink, HiOutlineCode } from 'react-icons/hi';

const projects = [
  {
    name: "Lola Muswell Hill",
    description: "Professional restaurant website with modern design, online menu, and reservation system. Features responsive layout and optimized user experience.",
    tags: ["React", "Restaurant", "Responsive"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    live_link: "https://lolamuswellhill.co.uk",
    source_code_link: "https://github.com/davitacols/lola-restaurant",
    category: "Web Development"
  },
  {
    name: "RWMS Nigeria",
    description: "Comprehensive waste management system for Nigeria. Features service booking, route optimization, and customer management dashboard.",
    tags: ["Next.js", "Management", "Nigeria"],
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
    live_link: "https://rwms.ng",
    source_code_link: "https://github.com/davitacols/rwms-nigeria",
    category: "System Development"
  },
  {
    name: "Moses Portfolio",
    description: "Modern portfolio website showcasing creative work and professional experience. Built with smooth animations and responsive design.",
    tags: ["Portfolio", "React", "Animation"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    live_link: "https://moses-sigma.vercel.app",
    source_code_link: "https://github.com/davitacols/moses-portfolio",
    category: "Portfolio Design"
  },
  {
    name: "Kingdom Merch",
    description: "E-commerce platform for merchandise sales with shopping cart, payment integration, and inventory management system.",
    tags: ["E-commerce", "Next.js", "Payment"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    live_link: "https://kingdommerch.vercel.app",
    source_code_link: "https://github.com/davitacols/kingdom-merch",
    category: "E-commerce"
  },
];

const ProjectCard = ({ project, index, onHover, isHovered }) => {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#141414] rounded-sm">
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.05 : 1,
            filter: isHovered ? 'brightness(0.7)' : 'brightness(1)'
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/40"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Getty-style watermark */}
        <div className="absolute top-4 left-4 text-white/60 text-xs font-light tracking-wider">
          DAVID ANSA
        </div>

        {/* Action buttons - Getty style */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <motion.a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <HiOutlineExternalLink className="w-5 h-5 text-black" />
              </motion.a>
              <motion.a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <HiOutlineCode className="w-5 h-5 text-black" />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project number - Getty style */}
        <div className="absolute bottom-4 right-4 text-white/40 text-xs font-light">
          {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-[#e1e1e1] font-light text-lg group-hover:text-white transition-colors">
            {project.name}
          </h3>
          <span className="text-[#3d3d3d] text-xs uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        
        <p className="text-[#e1e1e1]/60 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex gap-2 pt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[#e1e1e1]/40 text-xs px-2 py-1 border border-[#3d3d3d]/30 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="work" className="py-20 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        {/* Header - Getty style */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[#3d3d3d] text-sm uppercase tracking-wider mb-2">Portfolio</p>
              <h2 className="text-4xl md:text-6xl font-light text-[#e1e1e1]">
                Featured Work
              </h2>
            </div>
            <div className="text-[#3d3d3d] text-sm">
              {projects.length} Projects
            </div>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-[#3d3d3d] via-[#3d3d3d]/50 to-transparent mb-8" />
          
          <p className="text-[#e1e1e1]/60 text-lg max-w-2xl font-light leading-relaxed">
            A curated collection of digital experiences, from restaurant platforms to 
            e-commerce solutions, showcasing modern web development expertise.
          </p>
        </motion.div>

        {/* Projects Grid - Getty style masonry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              onHover={setHoveredIndex}
              isHovered={hoveredIndex === index}
            />
          ))}
        </div>

        {/* Footer CTA - Getty style */}
        <motion.div
          className="text-center border-t border-[#3d3d3d]/30 pt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#e1e1e1]/40 text-sm mb-6 uppercase tracking-wider">
            Ready to start your project?
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-8 py-3 border border-[#3d3d3d] text-[#e1e1e1] hover:bg-[#3d3d3d]/10 hover:border-[#4d4d4d] transition-all duration-300 font-light"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
            <HiOutlineArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;