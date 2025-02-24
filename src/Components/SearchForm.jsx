import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { flights } from '../data';

const SearchForm = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const formattedDate = new Date(date).toISOString().split('T')[0]; // Ensure date format is correct

    const matchingFlights = flights.filter(
      (flight) =>
        flight.from.toLowerCase() === from.toLowerCase() &&
        flight.to.toLowerCase() === to.toLowerCase() &&
        flight.date === formattedDate
    );

    if (matchingFlights.length > 0) {
      navigate('/flights', { state: { matchingFlights } });
    } else {
      setError('Sorry, no flights found for your search criteria. Please try again.');
    }
  };

  const handleViewAllFlights = () => {
    navigate('/flights');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-gray-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-md lg:max-w-2xl"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
          Find Your Flight ✈️
        </h1>
        {error && (
          <p className="text-red-500 text-center mb-4 text-sm sm:text-base">
            {error}
          </p>
        )}
        <form onSubmit={handleSearch}>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm sm:text-base font-medium mb-2">
              From
            </label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Departure city"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm sm:text-base font-medium mb-2">
              To
            </label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Destination city"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm sm:text-base font-medium mb-2">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg"
          >
            Search Flights
          </button>
        </form>
        <button
          onClick={handleViewAllFlights}
          className="w-full mt-4 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-all font-semibold text-lg"
        >
          View All Flights
        </button>
      </motion.div>
    </div>
  );
};

export default SearchForm;