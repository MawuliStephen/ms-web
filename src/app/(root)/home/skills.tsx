'use client';

import React, { useState } from 'react';

const skills = [
  "Website Development",
  "UI/UX Design",
  "RESTful API",
  "Frontend Design",
  "Poetry",
  "Music",
  "Communication",
  "Analytical Thinking",
  "Problem Solving",
  "Brand Strategy",
  "Content Creation",
  "Social Media Marketing",
  "Conversion Optimization",
  "Email Campaigns",
  "Creative Direction",
  "Design Thinking",
];

// Sample content tagged with skills
const content = [
  { title: "Portfolio Website", skills: ["Website Development", "UI/UX Design", "Frontend Design"] },
  { title: "API Backend", skills: ["RESTful API", "Problem Solving"] },
  { title: "Poetry Collection", skills: ["Poetry", "Creative Direction"] },
  { title: "Music Collaboration App", skills: ["Music", "UI/UX Design", "Website Development"] },
  { title: "Marketing Funnel Design", skills: ["Content Creation", "Conversion Optimization", "Brand Strategy"] },
];

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const filteredContent = selectedSkill
    ? content.filter(item => item.skills.includes(selectedSkill))
    : content;

  return (
    <section className="flex flex-wrap  justify-center  py-16 px-6 md:px-20   text-center" id="skills">
      {/* <h2 className="text-3xl md:text-4xl font-bold mb-6">
        A Blend of <span className="text-primary">Creative</span> & <span className="text-primary">Technical</span> Skills
      </h2> */}
      {/* <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Filter my work and capabilities by selecting a skill below.
      </p> */}

      <div className="flex flex-wrap  justify-center gap-3 mb-8">
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => setSelectedSkill(skill === selectedSkill ? null : skill)}
            className={`px-4 py-2 text-sm font-medium  transition-all duration-300 
              ${skill === selectedSkill
                ? 'bg-primary text-white scale-105'
                : 'bg-gradient-to-r from-teal-500 via-teal-600 to-teal-100 text-white shadow-md hover:scale-105'}
            `}
          >
            {skill}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-between gap-6 max-w-4xl mx-auto">
        {filteredContent.length === 0 ? (
          <p className="text-gray-500">No items found for "{selectedSkill}".</p>
        ) : (
          filteredContent.map((item, idx) => (
            <div key={idx} className="p-6 bg-gray-100 rounded-xl shadow-sm text-left">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">
                Skills: {item.skills.join(', ')}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
