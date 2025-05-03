import React from 'react';
import { ArrowRight, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function OutsourcingPartnerProfile() {
  return (
    <div className="w-full max-w-5xl p-6 mx-auto">
      <div 
        className="rounded-lg p-8 flex flex-col md:flex-row items-center md:items-start justify-between shadow-lg gap-6"
        style={{ backgroundColor: '#0f0e47' }}
      >
        {/* Left side - Content and navigation button */}
        <div className="w-full md:w-2/3 md:pr-8">
          <p className="text-white text-lg mb-6 leading-relaxed text-center md:text-left">
            <strong>We are one of the most trusted and dependable service partners</strong> for our clients to redefine CX management (CXM) in the digital age.
          </p>
          
          <div className="flex justify-center md:justify-start">
            <NavLink
              to="/about-us"
              className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 px-5 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-white"
              style={{ backgroundColor: '#505081' }}
            >
              <span>About us</span>
              <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
        
        {/* Right side - Icon and heading */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-end">
          <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md backdrop-blur-sm">
            <Users size={32} className="text-white" />
          </div>
          
          <h2 className="text-xl font-bold text-white text-center md:text-right">
            Complete Outsourcing Partner
          </h2>
        </div>
      </div>
    </div>
  );
}
