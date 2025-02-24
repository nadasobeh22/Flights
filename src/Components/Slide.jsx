import React from 'react';
import { motion } from 'framer-motion';
import slide1 from '../../src/assets/images/slide3.jpg';

const Slide = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Unleash Your Potential
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Discover a world of possibilities where creativity meets innovation. Let us help you turn your ideas into reality with cutting-edge solutions.
            </motion.p>
          </div>

          <motion.div
            className="hidden md:block w-1 h-64 bg-gray-500 mx-8"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          />

          <motion.div
            className="md:w-1/3 flex items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <img
              src={slide1}
              alt="Descriptive Image"
              className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide;