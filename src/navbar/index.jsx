import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black p-4 fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Title */}
          <div className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-left p-6 xs:p-8 hover:text-slate-200 transition duration-400">
            <a href='/#'>Mohit Gidwani</a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4 justify-center items-center pr-4 xs:pr-8">
            <a href="#about" className="text-white hover:text-gray-400 transition duration-300">
              About
            </a>
            <a href="#experience" className="text-white hover:text-gray-400 transition duration-300">
              Journey
            </a>
            <a href="#skills" className="text-white hover:text-gray-400 transition duration-300">
              Skills
            </a>
            <a href="/Resume_Mohit_Gidwani_2024.pdf" download="Mohit_Gidwani_Resume">
              <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
                Resume (↓)
              </button>
            </a>
          </div>

          {/* Burger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? (
                <svg className="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block opacity-100' : 'hidden opacity-0'}  bg-gray-900 bg-opacity-50 shadow-lg p-4 transition-opacity duration-300 ease-in-out`}>
          <a href="#about" onClick={toggleMenu} className="block text-white hover:text-gray-400 transition duration-300 py-2">
            About
          </a>
          <a href="#experience" onClick={toggleMenu} className="block text-white hover:text-gray-400 transition duration-300 py-2">
            Journey
          </a>
          <a href="#skills" onClick={toggleMenu} className="block text-white hover:text-gray-400 transition duration-300 py-2">
            Skills
          </a>
          <a href="/Resume_Mohit_Gidwani_2024.pdf" download="Mohit_Gidwani_Resume">
            <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
              Resume (↓)
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
