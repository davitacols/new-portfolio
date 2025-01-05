import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DayTimeDisplay = () => {
  const [currentDay, setCurrentDay] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      setCurrentDay(days[now.getDay()]);
      setCurrentTime(now.toLocaleTimeString());
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-gray-300 text-sm md:text-base"
    >
      <motion.p whileHover={{ scale: 1.05 }} className="font-medium">{currentDay}</motion.p>
      <motion.p whileHover={{ scale: 1.05 }} className="font-light">{currentTime}</motion.p>
    </motion.div>
  );
};

export default DayTimeDisplay;

