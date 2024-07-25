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
    fetchJson()
  },[])
  return (
    <section id="experience" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 mt-12 lg:relative z-20">Journey</h2>
        {journeyData.map((exp, index) => (
          <JourneyItem
            key={index}
            company={exp.company}
            title={exp.title}
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
