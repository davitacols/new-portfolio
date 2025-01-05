import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    const setSize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    setSize();
    mountRef.current.appendChild(renderer.domElement);

    // Enhanced particles with color variation
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = Math.min(2000, Math.floor(window.innerWidth * window.innerHeight / 1000));
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 5;
      posArray[i + 1] = (Math.random() - 0.5) * 5;
      posArray[i + 2] = (Math.random() - 0.5) * 5;
      
      // Color - gradient between indigo and purple
      const t = Math.random();
      colorsArray[i] = 0.294 * (1 - t) + 0.541 * t;     // R: Mix of indigo and purple
      colorsArray[i + 1] = 0.275 * (1 - t) + 0.169 * t; // G: Mix of indigo and purple
      colorsArray[i + 2] = 0.902 * (1 - t) + 0.886 * t; // B: Mix of indigo and purple
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.008,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.0002;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0002;
    };

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      // Smooth camera movement
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      camera.rotation.y += targetX;
      camera.rotation.x += targetY;
      
      // Particle animation
      particlesMesh.rotation.y = elapsedTime * 0.1;
      particlesMesh.rotation.x = elapsedTime * 0.05;
      
      // Wave effect
      const positions = particlesGeometry.attributes.position.array;
      for(let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] = Math.sin(elapsedTime + x + z) * 0.1;
      }
      particlesGeometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
    };

    animate();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', setSize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', setSize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" />;
};

const TechStack = () => {
  const { scrollYProgress } = useScroll();
  
  const technologies = [
    { name: 'Python', level: 95 },
    { name: 'TensorFlow', level: 90 },
    { name: 'React', level: 88 },
    { name: 'AWS', level: 85 },
  ];

  return (
    <div className="space-y-6 w-full max-w-xl">
      {technologies.map((tech, index) => (
        <motion.div 
          key={tech.name}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="space-y-2"
        >
          <motion.div 
            className="flex justify-between items-center"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-sm font-medium text-gray-300">{tech.name}</span>
            <span className="text-sm font-medium text-gray-400">{tech.level}%</span>
          </motion.div>
          <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${tech.level}%` }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full relative"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const SocialLinks = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/davitacols' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/davitacols' },
    { icon: FaTwitter, url: 'https://twitter.com/davitaace' },
  ];

  return (
    <div className="flex space-x-4 mt-6">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <link.icon className="w-6 h-6" />
        </motion.a>
      ))}
    </div>
  );
};

const ProjectModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 p-6 rounded-lg max-w-lg w-full"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Latest Projects</h2>
            <ul className="space-y-4">
              <li className="text-gray-300">
                <h3 className="font-medium">AI-Powered Chat Bot</h3>
                <p className="text-sm text-gray-400">A sophisticated chatbot using GPT-3 for natural conversations.</p>
              </li>
              <li className="text-gray-300">
                <h3 className="font-medium">Blockchain Voting System</h3>
                <p className="text-sm text-gray-400">Secure and transparent voting system built on Ethereum.</p>
              </li>
              <li className="text-gray-300">
                <h3 className="font-medium">AR Product Visualization</h3>
                <p className="text-sm text-gray-400">Mobile app for visualizing products in AR using ARKit and React Native.</p>
              </li>
            </ul>
            <button
              onClick={onClose}
              className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "ML Models Deployed" },
    { number: "99.9%", label: "Client Satisfaction" },
    { number: "25+", label: "Industry Awards" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#030712] to-[#0F172A] overflow-hidden">
      <ThreeBackground />
      
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/80 to-[#030712]" 
      />

      <motion.div 
        style={{ opacity, y }}
        className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 mb-6">
                  <span className="text-indigo-400 text-sm">Available for freelance work</span>
                </div>
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.span 
                    className="text-white"
                    whileHover={{ scale: 1.02 }}
                  >
                    Transforming Ideas with{" "}
                  </motion.span>
                  <motion.span 
                    className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
                    whileHover={{ scale: 1.02 }}
                  >
                    AI & Code
                  </motion.span>
                </motion.h1>
              </motion.div>
              <motion.p 
                className="text-lg md:text-xl text-gray-400 font-light max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Specializing in machine learning solutions, full-stack development, and data-driven innovation. 
                Let's build something extraordinary together.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-gray-700 text-white font-medium hover:bg-gray-800/50 transition-colors"
              >
                Contact Me
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-white font-medium mb-6">Technical Expertise</h3>
              <TechStack />
              <SocialLinks />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-[#0F1629]/40 rounded-3xl p-8 backdrop-blur-xl border border-gray-800/50 shadow-2xl">
              <pre className="text-sm text-gray-300 font-mono">
                <code>{`class AIEngineer:
    def __init__(self):
        self.expertise = {
            "machine_learning": ["TensorFlow", "PyTorch"],
            "backend": ["Python", "Node.js"],
            "frontend": ["React", "Three.js"],
            "cloud": ["AWS", "GCP"]
        }
        
    async def solve_complex_problems(self):
        solution = await self.innovate()
        return transform_business(solution)
        
    def innovate(self):
        return "Building the future, one line at a time"`}</code>
              </pre>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                {achievement.number}
              </h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">{achievement.label}</p>
            </motion.div>
          ))}
        </motion.div>
        <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </motion.div>
    </section>
  );
};

export default Hero;

