import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Flights from './Pages/Flights.JSX';
import Booking from './Pages/Booking';
import MyBookings from './Pages/MyBookings';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './Components/Footer';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/flights" element={<Flights />} />
                <Route path="/booking/:id" element={<Booking />} />
                <Route path="/my-bookings" element={<MyBookings />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;