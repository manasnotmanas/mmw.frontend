import React from 'react';
import { blueback } from '../assets'; // Assuming this is an image path

const AboutSeamless = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 bg-[#0F0E47]">
      <div className="relative w-full max-w-7xl h-[80vh] bg-cover bg-center rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundImage: `url(${blueback})` }}>
        
        {/* Overlay dark background with some transparency */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Text container */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-white px-4">
        <section className=" py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          We operate in a competitive environment
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Our multilingual capabilities provide operational excellence and help you to improve business processes and performance
        </p>
      </div>
    </section>
        </div>

      </div>
    </div>
  );
};

export default AboutSeamless;
