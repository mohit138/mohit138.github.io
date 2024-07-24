import React from 'react';

const Hero = () => {
  return (
    <div className="bg-black min-h-screen flex items-center mt-8">
      <div className="text-white text-left absolute left-8 p-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-6xl font-bold py-2">
        Mastering Complexity: 
        </h1>
        <h1 className="text-4xl leading-tight sm:leading-tight sm:text-5xl md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight 2xl:text-8xl 2xl:leading-tight font-bold">
        Engineering Solutions,
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold">
        Connecting Dots
        </h1>
      </div>
      
    </div>
  );
};

export default Hero;
