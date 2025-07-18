import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiDownload } from 'react-icons/hi';

const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#141414] to-[#1a1a1a] p-12 rounded-2xl border border-[#3d3d3d]/20"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#e1e1e1] mb-4">
            Ready to work together?
          </h2>
          <p className="text-[#e1e1e1]/70 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing. I'm always excited to take on new challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#3d3d3d] text-[#e1e1e1] rounded-lg hover:bg-[#4d4d4d] transition-colors"
            >
              Get In Touch
              <HiArrowRight className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="./Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#3d3d3d] text-[#e1e1e1] rounded-lg hover:bg-[#1a1a1a] transition-colors"
            >
              Download CV
              <HiDownload className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;