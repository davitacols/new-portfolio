import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

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

    // Create animated particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = Math.min(2000, Math.floor(window.innerWidth * window.innerHeight / 1000));
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#4F46E5',
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      setSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" />;
};

const TechStack = () => {
  const technologies = [
    { name: 'Python', level: 95 },
    { name: 'TensorFlow', level: 90 },
    { name: 'React', level: 88 },
    { name: 'AWS', level: 85 },
  ];

  return (
    <div className="space-y-6 w-full max-w-xl">
      {technologies.map((tech) => (
        <div key={tech.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-300">{tech.name}</span>
            <span className="text-sm font-medium text-gray-400">{tech.level}%</span>
          </div>
          <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${tech.level}%` }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "ML Models Deployed" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "15+", label: "Industry Awards" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#030712] to-[#0F172A] overflow-hidden">
      <ThreeBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/80 to-[#030712]" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 mb-6"
                >
                  <span className="text-indigo-400 text-sm">Available for freelance work</span>
                </motion.div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Transforming Ideas with </span>
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                    AI & Code
                  </span>
                </h1>
              </div>
              <p className="text-lg md:text-xl text-gray-400 font-light max-w-xl">
                Specializing in machine learning solutions, full-stack development, and data-driven innovation. 
                Let's build something extraordinary together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity">
                View Projects
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-gray-700 text-white font-medium hover:bg-gray-800/50 transition-colors">
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-white font-medium mb-6">Technical Expertise</h3>
              <TechStack />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
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
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                {achievement.number}
              </h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">{achievement.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

