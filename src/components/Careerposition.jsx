import React from 'react';
import { NavLink } from 'react-router-dom';

const CareerCTASection = () => {
  return (
    <section className="bg-[#0f0347] py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-medium mb-6">
          Think you are a good fit for our team? <span className="block">Let's talk</span>
        </h2>
        <button className="mt-6 bg-white text-[#0f0347] hover:bg-gray-100 transition-colors font-semibold py-3 px-8 rounded-md text-lg">
         <NavLink to={"/OpenPosition"}>Open positions</NavLink> 
        </button>
      </div>
    </section>
  );
};

export default CareerCTASection;