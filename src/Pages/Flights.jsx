import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { flights } from '../data';
import StarRating from '../components/StarRating';

const Flights = () => {
  const location = useLocation();
  const matchingFlights = location.state?.matchingFlights || flights;

  console.log("Matching Flights:", matchingFlights); // للتحقق من البيانات

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Available Flights</h1>
      {matchingFlights.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {matchingFlights.map((flight) => (
            <motion.div
              key={flight.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <h2 className="text-xl font-semibold">{flight.from} to {flight.to}</h2>
              <p className="text-gray-600">Date: {flight.date}</p>
              <p className="text-blue-600 font-bold">Price: ${flight.price}</p>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Rating:</span>
                <StarRating rating={flight.rating} setRating={() => {}} />
              </div>
              <Link
                to={`/booking/${flight.id}`}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center block"
              >
                Book Now
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500">No flights found for your search criteria.</p>
      )}
    </div>
  );
};

export default Flights;