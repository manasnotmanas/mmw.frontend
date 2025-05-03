import { Suit } from "../assets";
import React from 'react';
import { blueback } from '../assets'; // Assuming this is an image path

const SolutionImage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 bg-[#0F0E47]">
      <div className="relative w-full max-w-7xl h-[80vh] bg-cover bg-center rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundImage: `url(${Suit})` }}>
        
        {/* Overlay dark background with some transparency */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Text container */}
        

      </div>
    </div>
  );
};

export default SolutionImage;
