'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiArrowRight, HiCode, HiLightningBolt, HiSparkles } from 'react-icons/hi';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

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

    // Create a more dynamic particle system with gradient colors
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = Math.min(2500, Math.floor(window.innerWidth * window.innerHeight / 800));
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i += 3) {
      // Create a wider spread of particles
      posArray[i] = (Math.random() - 0.5) * 7;
      posArray[i + 1] = (Math.random() - 0.5) * 7;
      posArray[i + 2] = (Math.random() - 0.5) * 7;
      
      // Enhanced color gradient
      const t = Math.random();
      colorsArray[i] = 0.4 * (1 - t) + 0.6 * t;     // More vibrant purple
      colorsArray[i + 1] = 0.2 * (1 - t) + 0.3 * t; // Deeper blue
      colorsArray[i + 2] = 0.8 * (1 - t) + 0.9 * t; // Brighter highlights
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.0003;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0003;
    };

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      camera.rotation.y += targetX;
      camera.rotation.x += targetY;
      
      particlesMesh.rotation.y = elapsedTime * 0.08;
      particlesMesh.rotation.x = elapsedTime * 0.04;
      
      // Add wave animation to particles
      const positions = particlesGeometry.attributes.position.array;
      for(let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] = Math.sin(elapsedTime * 0.8 + x + z) * 0.15;
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
      
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" aria-hidden="true" />;
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/30 h-full"
  >
    <div className="space-y-4">
      <div className="inline-block p-2 bg-indigo-500/10 rounded-lg">
        <Icon className="w-6 h-6 text-indigo-400" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: HiCode,
      title: "Full-Stack Development",
      description: "Building scalable applications with modern technologies and best practices."
    },
    {
      icon: HiLightningBolt,
      title: "AI Integration",
      description: "Implementing cutting-edge AI solutions to solve complex problems."
    },
    {
      icon: HiSparkles,
      title: "Innovation Focus",
      description: "Creating unique solutions that push technological boundaries."
    }
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
        className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span className="text-indigo-400 text-sm">Available for projects</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Crafting Digital</span>{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                  Excellence
                </span>
              </h1>
              
              <p className="text-lg text-gray-400 font-light max-w-xl">
                Transforming complex challenges into elegant solutions through innovative 
                technology and creative problem-solving.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium"
              >
                Start a Project
                <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#about"
                className="flex items-center justify-center px-6 py-3 rounded-lg border border-gray-700 text-white font-medium hover:bg-gray-800/50 transition-colors"
              >
                Learn More
              </motion.a>
            </motion.div>

            <div className="flex items-center gap-6">
              {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative bg-gray-900/40 rounded-3xl p-8 backdrop-blur-xl border border-gray-800/50"
            >
              <pre className="text-sm text-gray-300 font-mono">
                <code>{`class Innovation:
    def __init__(self):
        self.tech_stack = {
            "frontend": ["React", "Next.js"],
            "backend": ["Python", "Node.js"],
            "ai": ["TensorFlow", "PyTorch"],
            "cloud": ["AWS", "GCP"]
        }
        
    async def create_solution(self, challenge):
        design = await self.analyze(challenge)
        solution = await self.implement(design)
        return self.optimize(solution)
        
    def stay_innovative(self):
        while True:
            self.explore_new_tech()
            self.solve_problems()
            self.push_boundaries()`}</code>
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;