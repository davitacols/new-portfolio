import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: "AI Image Recognition",
    description: "Deep learning system for real-time object detection and classification, achieving 95% accuracy on benchmark datasets. Implemented using TensorFlow and optimized for edge devices.",
    tags: [
      { name: "tensorflow", color: "bg-blue-400" },
      { name: "python", color: "bg-green-400" },
      { name: "deep-learning", color: "bg-purple-400" },
    ],
    image: "/placeholder.svg?height=450&width=800",
    source_code_link: "https://github.com/davitacols/AI-FashionCreator",
  },
  {
    name: "Data Analytics Platform",
    description: "Scalable platform for processing and visualizing large datasets in real-time. Features include automated reporting, predictive analytics, and interactive dashboards.",
    tags: [
      { name: "react", color: "bg-blue-400" },
      { name: "postgresql", color: "bg-green-400" },
      { name: "python", color: "bg-yellow-400" },
    ],
    image: "/placeholder.svg?height=450&width=800",
    source_code_link: "https://github.com/davitacols/dataDisk",
  },
  {
    name: "Fashion ML Model",
    description: "Machine learning model for predicting fashion trends and generating personalized style recommendations based on user preferences and historical data.",
    tags: [
      { name: "pytorch", color: "bg-orange-400" },
      { name: "scikit-learn", color: "bg-blue-400" },
      { name: "flask", color: "bg-gray-400" },
    ],
    image: "/placeholder.svg?height=450&width=800",
    source_code_link: "https://github.com/davitacols/Human-Body-Measurements-using-Computer-Vision",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700/50 shadow-lg hover:shadow-xl hover:border-blue-500/50 transition-all duration-300"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-800">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "/placeholder.svg?height=450&width=800";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60" />
        
        <a
          href={project.source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-white/20"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
          {project.name}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className={`${tag.color} text-xs font-medium px-2.5 py-0.5 rounded-full text-gray-900`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.15),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-400 rounded-full">
            My Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto text-center"
        >
          Explore my portfolio of AI and software development projects. Each project demonstrates
          my expertise in machine learning, data analytics, and software engineering, showcasing
          real-world applications and innovative solutions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center"
        >
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
          >
            View All Projects
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

