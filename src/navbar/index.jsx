import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Title */}
          <div className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-left p-6 xs:p-8">
            <a href='/'>Mohit Gidwani</a>
        </div>
          
          {/* Navigation Links */}
          <div className="flex space-x-4 justify-center items-center pr-4 xs:pr-8">
            <a
              href="https://www.linkedin.com/in/mohitgidwani13/"
              target='_blank'
              className="text-white hover:text-gray-400 transition duration-300 flex items-center p-4 xs:p-8 m-auto" rel="noreferrer"
            >
              LinkedIn
            </a>
            {/* Download Button */}
            <a href="/Resume_Mohit_Gidwani_2024.pdf" download="Mohit_Gidwani_Resume">
                <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
                Resume (↓)
                </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
