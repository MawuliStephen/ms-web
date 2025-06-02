'use client';

import React, { useState } from 'react';
import { SectionLayout, SectionHeader } from '../components/navigations/section-layout';

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
    <SectionLayout id="skills">
      <SectionHeader
        title="Skills & Experience"
        description="Wide range of skills and experience in software engineering, marketing, and design."
      />

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => setSelectedSkill(skill === selectedSkill ? null : skill)}
            className={`px-4 py-2 text-sm font-medium transition-all duration-300 
              ${skill === selectedSkill
                ? 'bg-primary text-white scale-105'
                : 'bg-gradient-to-r from-teal-500 via-teal-600 to-teal-100 text-white shadow-md hover:scale-105'
              }`}
          >
            {skill}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredContent.length === 0 ? (
          <div className="col-span-full text-center py-8">


            <p className="text-gray-500 dark:text-gray-400">
              {`No items found for "${selectedSkill}".`}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
  No items found for &quot;{selectedSkill}&quot;.
</p>


            <p className="text-gray-500 dark:text-gray-400">
              No items found for &quot;{selectedSkill}&quot;.
            </p>



          </div>
        ) : (
          filteredContent.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-left"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-foreground">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-foreground/70">
                Skills: {item.skills.join(', ')}
              </p>
            </div>
          ))
        )}
      </div>


    </SectionLayout>
  );
};

export default SkillsSection;
