import React from 'react';
import SearchForm from '../Components/SearchForm';
import Slide from '../Components/Slide';
import Services from './Services';
import Gallery from '../Components/Gallery';
import Trips from '../Components/Trips';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Slide Component */}
      <div className="w-full">
        <Slide />
      </div>

      {/* SearchForm Component */}
      <div className="w-full py-12 bg-white">
        <SearchForm />
      </div>

      {/* Services Component */}
      <div className="w-full py-12 bg-gray-50">
        <Services />
      </div>

      {/* Trips Component */}
      <div className="w-full py-12 bg-white">
        <Trips />
      </div>

      {/* Gallery Component */}
      <div className="w-full py-12 bg-gray-50">
        <Gallery />
      </div>
    </div>
  );
};

export default Home;