import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/Themecontext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`p-2 rounded-full border transition-colors ${
        isDarkMode 
          ? 'border-[#3d3d3d] text-[#e1e1e1] hover:bg-[#1a1a1a]' 
          : 'border-gray-300 text-gray-700 hover:bg-gray-100'
      }`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <FiSun className="w-5 h-5" />
      ) : (
        <FiMoon className="w-5 h-5" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;