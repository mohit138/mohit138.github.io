import React, { useEffect, useState } from 'react';
import JourneyItem from './JourneyItem';

// Sample JSON data for experience


const JourneySection = () => {
  const [journeyData, setData] = useState([]);
  const fetchJson = () => {
    fetch('./journey.json')
    .then(response => {
      return response.json();
    }).then(data => {
      setData(data);
    }).catch((e) => {
      console.log(e.message);
    });
  }
  useEffect(() => {
    fetchJson();
  },[])
  return (
    <section id="experience" className="pt-32 pb-0.5 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-3xl font-bold text-white lg:relative z-20">Journey</span>
        <div className='text-lg font-bold text-white m-2'>[ What all places I have been . . . ]</div>
        {journeyData.map((exp, index) => (
          <JourneyItem
            key={index}
            company={exp.company}
            titles={exp.titles}
            startMonth={exp.startMonth}
            endMonth={exp.endMonth}
            summary={exp.summary}
            points={exp.points}
            logo={exp.logo}
            logoUrl={exp.logoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default JourneySection;
