import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { flights, bookings } from '../data';
import StarRating from '../Components/StarRating';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const flight = flights.find((f) => f.id === parseInt(id));
  const user = JSON.parse(localStorage.getItem('user'));

  const [passengerName, setPassengerName] = useState(user?.fullName || '');
  const [passengerEmail, setPassengerEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [address, setAddress] = useState(user?.address || '');
  const [rating, setRating] = useState(0);

  const handleBooking = (e) => {
    e.preventDefault();

    if (!user) {
      alert('Please login to book a flight.');
      navigate('/login');
      return;
    }

    if (flight.seats > 0) {
      const newBooking = {
        id: bookings.length + 1,
        flightId: flight.id,
        passengerName,
        passengerEmail,
        phone,
        address,
        date: new Date().toISOString(),
        status: 'Confirmed',
        rating,
      };
      bookings.push(newBooking);
      flight.seats -= 1;
      alert('Booking confirmed!');
      navigate('/my-bookings');
    } else {
      alert('No seats available!');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Book Your Flight</h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-semibold mb-4">{flight.from} to {flight.to}</h2>
        <p className="text-gray-600 mb-2">Date: {flight.date}</p>
        <p className="text-blue-600 font-bold mb-4">Price: ${flight.price}</p>
        <form onSubmit={handleBooking}>
          <div className="mb-4">
            <label className="block text-gray-700">Passenger Name</label>
            <input
              type="text"
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Passenger Email</label>
            <input
              type="email"
              value={passengerEmail}
              onChange={(e) => setPassengerEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Rate this flight</label>
            <StarRating rating={rating} setRating={setRating} />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Confirm Booking
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Booking;