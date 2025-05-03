import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DropdownForm() {
  const [location, setLocation] = useState('');
  const [position, setPosition] = useState('training');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // Optionally validate location/position here
    navigate('/OpenInput'); // Navigate to new page
    window.scrollTo(0, 0); // Scroll to top
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8">
          Choose Your Preferences
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Location Dropdown */}
          <div className="mb-6">
            <label htmlFor="location" className="block text-xl font-semibold text-gray-700 mb-2">
              Location:
            </label>
            <select
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-indigo-100 transition duration-300"
            >
              <option value="">Select Location</option>
              {/* Add locations dynamically here */}
            </select>
          </div>

          {/* Position Dropdown */}
          <div className="mb-6">
            <label htmlFor="position" className="block text-xl font-semibold text-gray-700 mb-2">
              Position:
            </label>
            <select
              id="position"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-indigo-100 transition duration-300"
            >
              <option value="training and equality"></option>
              <option value="tele">Telesales executive</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-indigo-600 hover:to-purple-700 transition duration-300 transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default DropdownForm;
