import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white shadow-sm">
      <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Logo Section */}
        <div className="w-64 md:mx-auto text-center md:text-left">
          <h3 className="font-bold text-3xl text-blue-500">
            Sky<span className='text-blue-300'>Book</span>
          </h3>
          <p className="mt-2 text-sm text-gray-600">Your ultimate flight booking system.</p>
        </div>

        {/* Links Section */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {/* Services */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-lg mb-3 text-blue-500">
              OUR SERVICES
            </h2>
            <ul className="list-none mb-10">
              <li className="text-gray-600 hover:text-blue-400 transition cursor-pointer">Flight Booking</li>
              <li className="mt-1 text-gray-600 hover:text-blue-400 transition cursor-pointer">Flight Status</li>
              <li className="mt-1 text-gray-600 hover:text-blue-400 transition cursor-pointer">Manage Booking</li>
              <li className="mt-1 text-gray-600 hover:text-blue-400 transition cursor-pointer">Special Offers</li>
              <li className="mt-1 text-gray-600 hover:text-blue-400 transition cursor-pointer">Travel Guides</li>
            </ul>
          </div>

          {/* About Us */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-lg mb-3 text-blue-500">
              ABOUT US
            </h2>
            <ul className="list-none mb-10">
              <li className="mt-1 text-gray-600 hover:text-blue-400 transition cursor-pointer">Our Story</li>
              <li className="mt-1 text-gray-600 hover:text-blue-400 transition cursor-pointer">Privacy Policy</li>
              <li className="mt-1 text-gray-600 hover:text-blue-400 transition cursor-pointer">Terms & Conditions</li>
              <li className="mt-1 text-gray-600 hover:text-blue-400 transition cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-lg mb-3 text-blue-500">
              CONTACT
            </h2>
            <ul className="list-none mb-10">
              <li className="mt-1 text-gray-600 hover:text-blue-400 transition cursor-pointer">Customer Support</li>
              <li className="mt-1 text-gray-600 hover:text-blue-400 transition cursor-pointer">+1 (800) 123-4567</li>
              <li className="mt-1 text-gray-600 hover:text-blue-400 transition cursor-pointer">Email: support@skybook.com</li>
              <li className="mt-1 text-gray-600 hover:text-blue-400 transition cursor-pointer">Contact Sales</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-lg mb-3 text-blue-500">
              SOCIAL
            </h2>
            <ul className="list-none mb-10">
              <li className="mt-1 text-gray-600">Follow Us for Updates and Offers</li>
            </ul>
            <div className="flex justify-center space-x-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.2 }} 
                className="text-blue-500 hover:text-blue-400 transition">
                <FaFacebookF size={20} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.2 }} 
                className="text-blue-500 hover:text-blue-400 transition">
                <FaInstagram size={20} />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.2 }} 
                className="text-blue-500 hover:text-blue-400 transition">
                <FaTwitter size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.2 }} 
                className="text-blue-500 hover:text-blue-400 transition">
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center items-center">
          <p className="text-sm text-gray-600 text-center">
            © 2024 SkyBook — <span className="text-blue-500">@copyright</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;