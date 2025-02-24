import React from 'react';
import { FaPlane, FaSuitcase, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation Variants
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 10 },
  },
  hover: {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 300 },
  },
};

const Services = () => {
  const services = [
    {
      icon: <FaPlane size={40} className="text-blue-500" />,
      title: 'Flight Booking',
      description: 'Book your flights easily and securely.',
    },
    {
      icon: <FaSuitcase size={40} className="text-blue-500" />,
      title: 'Baggage Handling',
      description: 'Safe and efficient baggage handling services.',
    },
    {
      icon: <FaHeadset size={40} className="text-blue-500" />,
      title: 'Customer Support',
      description: '24/7 customer support for all your travel needs.',
    },
    {
      icon: <FaShieldAlt size={40} className="text-blue-500" />,
      title: 'Secure Payments',
      description: 'Safe and reliable payment processing.',
    },
  ];

  return (
    <div className="container mx-auto px-5 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white py-6 px-8 rounded-lg text-gray-800 flex gap-4 flex-col items-center text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // يظهر العنصر عندما يكون 20% في النطاق المرئي
            transition={{ delay: index * 0.3 }}   // تأخير بين ظهور كل بطاقة
            whileHover="hover"
          >
            {service.icon}
            <h3 className="font-bold text-xl">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;