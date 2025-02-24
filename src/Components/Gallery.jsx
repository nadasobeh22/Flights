import React from 'react';
import gal1 from '../../src/assets/images/gal1.jpg';
import gal2 from '../../src/assets/images/gal2.jpg';
import gal3 from '../../src/assets/images/gal3.jpg';
import gal4 from '../../src/assets/images/gal4.jpg';
import gal5 from '../../src/assets/images/gal5.jpg';
import gal6 from '../../src/assets/images/gal6.jpg';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [gal1, gal2, gal3, gal4, gal5, gal6];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-8">
          Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 md:h-80 object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;