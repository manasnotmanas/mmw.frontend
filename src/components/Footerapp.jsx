import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#272757] text-white py-16 px-4 drop-shadow-2xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold mb-4 md:mb-0">MMW</div>

        {/* Social Icons and Copyright */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-center md:text-left">
            © 2025 MAKE MY WAY VENTURES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
