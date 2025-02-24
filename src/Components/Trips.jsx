import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import offer1 from '../../src/assets/images/offer1.jpg';
import offer2 from '../../src/assets/images/offer2.jpg';
import offer3 from '../../src/assets/images/offer3.jpg';

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

const Trips = () => {
  const offers = [
    {
      image: offer1,
      destination: 'Paris',
      price: 'From $200',
      description: 'Enjoy a tour in the City of Lights with our special offer.',
    },
    {
      image: offer2,
      destination: 'Dubai',
      price: 'From $300',
      description: 'Discover the city of the future with exclusive discounts.',
    },
    {
      image: offer3,
      destination: 'New York',
      price: 'From $400',
      description: 'An unforgettable experience in the city that never sleeps.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-8">Special Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            whileHover="hover"
            variants={hoverVariants}
          >
            <img
              src={offer.image}
              alt={offer.destination}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.destination}</h3>
              <p className="text-lg font-semibold text-blue-600 mb-4">{offer.price}</p>
              <p className="text-sm text-gray-600">{offer.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link
          to="/flights"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Trips;