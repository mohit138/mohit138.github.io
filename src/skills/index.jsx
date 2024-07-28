import React, { useEffect, useState } from 'react';
import SkillBlock from './SkillBlock';

const SkillsSection = () => {

  const [skills, setSkills] = useState([]);
  const fetchJson = () => {
    fetch('./skills.json')
    .then(response => {
      return response.json();
    }).then(data => {
      setSkills(data);
    }).catch((e) => {
      console.log(e.message);
    });
  }
  useEffect(() => {
    fetchJson();
  },[])

  const maxProficiency = Math.max(...skills.map(skill => skill.proficiency));
  const minProficiency = Math.min(...skills.map(skill => skill.proficiency));

  const getFontSize = (proficiency) => {
    const minSize = 20;
    const maxSize = 48;
    return ((proficiency - minProficiency) / (maxProficiency - minProficiency)) * (maxSize - minSize) + minSize;
  };

  return (
    <section id="skills" className="pt-32 pb-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-3xl font-bold text-white mb-12 mt-12 z-20 md:relative">Skills</span>
        <div className='text-lg font-bold text-white m-2'>[ What I play around with . . . ]</div>
        <div className="hidden md:grid md:grid-cols-3 gap-4 mt-8 cursor-default">
          {skills.map((skill, index) => (
            <SkillBlock
              key={index}
              fontSize={getFontSize(skill.proficiency)}
              renderForMobile={false}
            >
              {skill.name}
            </SkillBlock>
          ))}
        </div>
        {/* mobile rendering */}
        <div className="grid md:hidden grid-cols-2 gap-4 mt-8">
          {skills.map((skill, index) => (
            <SkillBlock
              key={index}
              renderForMobile={true}
            >
              {skill.name}
            </SkillBlock>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
