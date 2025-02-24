import React, { useState } from 'react';
import { bookings, flights } from '../data';

const MyBookings = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const userBookings = bookings.filter((booking) => booking.passengerEmail === user?.email);
  const [editingBookingId, setEditingBookingId] = useState(null);
  const [updatedBooking, setUpdatedBooking] = useState({});

  const handleDeleteBooking = (bookingId) => {
    const bookingIndex = bookings.findIndex((booking) => booking.id === bookingId);
    if (bookingIndex !== -1) {
      bookings.splice(bookingIndex, 1);
      alert('Booking deleted successfully!');
      window.location.reload();
    }
  };

  const handleEditBooking = (bookingId) => {
    const booking = bookings.find((b) => b.id === bookingId);
    setEditingBookingId(bookingId);
    setUpdatedBooking({ ...booking });
  };

  const handleUpdateBooking = (bookingId) => {
    const bookingIndex = bookings.findIndex((b) => b.id === bookingId);
    if (bookingIndex !== -1) {
      bookings[bookingIndex] = updatedBooking;
      setEditingBookingId(null);
      alert('Booking updated successfully!');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">My Bookings</h1>
      {userBookings.length === 0 ? (
        <p className="text-gray-600">No bookings found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {userBookings.map((booking) => {
            const flight = flights.find((f) => f.id === booking.flightId);
            return (
              <div key={booking.id} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
                {editingBookingId === booking.id ? (
                  <div>
                    <h2 className="text-xl font-semibold">{flight.from} to {flight.to}</h2>
                    <div className="mb-4">
                      <label className="block text-gray-700">Passenger Name</label>
                      <input
                        type="text"
                        value={updatedBooking.passengerName}
                        onChange={(e) => setUpdatedBooking({ ...updatedBooking, passengerName: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Passenger Email</label>
                      <input
                        type="email"
                        value={updatedBooking.passengerEmail}
                        onChange={(e) => setUpdatedBooking({ ...updatedBooking, passengerEmail: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        value={updatedBooking.phone}
                        onChange={(e) => setUpdatedBooking({ ...updatedBooking, phone: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-gray-700">Address</label>
                      <input
                        type="text"
                        value={updatedBooking.address}
                        onChange={(e) => setUpdatedBooking({ ...updatedBooking, address: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <button
                      onClick={() => handleUpdateBooking(booking.id)}
                      className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition w-full"
                    >
                      Save Changes
                    </button>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-xl font-semibold">{flight.from} to {flight.to}</h2>
                    <p className="text-gray-600">Date: {flight.date}</p>
                    <p className="text-blue-600 font-bold">Price: ${flight.price}</p>
                    <p className="text-gray-600">Passenger: {booking.passengerName}</p>
                    <p className="text-gray-600">Email: {booking.passengerEmail}</p>
                    <p className="text-gray-600">Phone: {booking.phone}</p>
                    <p className="text-gray-600">Address: {booking.address}</p>
                    <p className="text-gray-600">Status: {booking.status}</p>
                    <p className="text-gray-600">Rating: {booking.rating}</p>
                    <button
                      onClick={() => handleEditBooking(booking.id)}
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition w-full"
                    >
                      Edit Booking
                    </button>
                    <button
                      onClick={() => handleDeleteBooking(booking.id)}
                      className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition w-full"
                    >
                      Delete Booking
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyBookings;