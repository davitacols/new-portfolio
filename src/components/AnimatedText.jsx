import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className }) => {
  // Split text into words
  const words = text.split(' ');

  // Animation variants for container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Animation variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeIn",
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;