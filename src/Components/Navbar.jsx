import React, { useState } from 'react';
import { FaUser, FaBars, FaTimes, FaPlane, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-12">
        {/* Logo */}
        <Link to='/' className="text-2xl lg:text-3xl font-bold text-blue-500 flex items-center gap-2">
          <FaPlane size={28} />
          <span>Fly</span><span className='text-blue-300'>Book</span>
        </Link>

        {/* Hamburger Menu Icon for Mobile */}
        <button onClick={toggleMenu} className="lg:hidden text-2xl text-gray-700">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links and Buttons */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center gap-6 lg:gap-8 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none`}>
          {/* Navigation Links */}
          <nav className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-lg font-medium">
            <Link to="/" className="text-gray-700 hover:text-blue-500 transition">Home</Link>
            <Link to="/flights" className="text-gray-700 hover:text-blue-500 transition">Flights</Link>
            <Link to="/my-bookings" className="text-gray-700 hover:text-blue-500 transition">My Bookings</Link>
          </nav>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row items-center gap-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="px-4 lg:px-5 py-2 rounded-md font-semibold bg-red-500 text-white hover:bg-red-600 transition flex items-center gap-2"
              >
                <FaSignOutAlt size={18} />
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="px-4 lg:px-5 py-2 rounded-md font-semibold bg-gray-100 hover:bg-gray-200 transition text-gray-700 flex items-center gap-2">
                  <FaUser size={18} />
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;