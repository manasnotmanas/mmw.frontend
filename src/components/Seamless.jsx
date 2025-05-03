import React from 'react';
import { blueback } from '../assets'; // Assuming this is an image path

const Seamless = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 bg-[#0F0E47]">
      <div className="relative w-full max-w-7xl h-[80vh] bg-cover bg-center rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundImage: `url(${blueback})` }}>
        
        {/* Overlay dark background with some transparency */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Text container */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-poppins font-semibold leading-tight">
            Your omnichannel hub for seamless customer experience
          </h1>
        </div>

      </div>
    </div>
  );
};

export default Seamless;
