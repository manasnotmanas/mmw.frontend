import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { menu, close, CogentLogo } from '../assets'; // Replace 'YourLogo' with your logo asset
import Buttons from './Buttons';

// Define your navigation links
const navLinks = [
  { id: 'solutions', title: 'Solutions' },
  { id: 'case-studies', title: 'Case Studies' },
  { id: 'about-us', title: 'About Us' },
  { id: 'careers', title: 'Careers' },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false);
        setIsScrolled(true);
        setToggle(false);
      } else {
        setShowNav(true);
        setIsScrolled(currentScrollY > 10);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      role="navigation"
      className={`w-full sticky top-0 left-0 z-50 px-6 py-4 flex justify-between items-center transition-transform duration-300
      bg-[#0F0E47] ${isScrolled ? 'backdrop-blur-md backdrop-saturate-150 bg-opacity-80' : ''}
      ${showNav ? 'translate-y-0' : '-translate-y-full'}
    `}
    >
      {/* Logo */}
      <Link to="/">
        <img src={CogentLogo} alt="logo" className="w-[150px] h-auto" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex list-none justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-[#8686AC] hover:text-white transition-colors duration-200 ${
              index !== navLinks.length - 1 ? 'mr-8' : ''
            }`}
          >
            <Link to={`/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
        {/* Contact Us Button */}
        <div className="ml-8">
          <Buttons >
            contact us
          </Buttons>
        </div>
      </ul>

      {/* Mobile Toggle */}
      <div className="sm:hidden flex items-center">
        <button onClick={() => setToggle(prev => !prev)} aria-label="Toggle mobile menu">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
          />
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`${
            toggle
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-5 pointer-events-none'
          } transition-all duration-300 ease-in-out absolute top-16 right-6 bg-[#505081] min-w-[180px] rounded-xl shadow-lg z-50 p-6`}
        >
          <ul className="list-none flex flex-col">
            {navLinks.map(nav => (
              <li
                key={nav.id}
                className="font-poppins font-normal cursor-pointer text-[16px] text-white mb-4"
              >
                <Link to={`/${nav.id}`} onClick={() => setToggle(false)}>
                  {nav.title}
                </Link>
              </li>
            ))}
            <button
              onClick={() => {
                navigate('/contact-us');
                setToggle(false);
              }}
              className="mt-4 bg-blue-500 text-white w-full py-2 rounded-full hover:bg-blue-600 transition"
            >
              Contact Us
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
