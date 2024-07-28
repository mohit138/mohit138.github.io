import React from 'react';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-black -mt-12 pb-0.5"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-white text-xl sm:text-2xl xl:text-3xl xl:leading-relaxed 2xl:text-4xl 2xl:leading-loose leading-relaxed">
          I am a software engineer with a passion for minimalistic design and
          problem-solving. I thrive on decluttering complex systems and creating
          elegant solutions. My expertise lies in mastering complexity and
          connecting dots to deliver seamless user experiences.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
