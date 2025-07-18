import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const ResumeButton = () => {
  return (
    <motion.a
      href="/Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 border border-[#3d3d3d] text-[#e1e1e1] rounded-lg hover:bg-[#1a1a1a] transition-colors"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <FiDownload className="w-4 h-4" />
      Resume
    </motion.a>
  );
};

export default ResumeButton;