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
    <section 
      className="relative py-16 px-6 md:px-20 text-center dark:bg-dark-background text-gray-500 dark:text-foreground"  id="skills"
    >
      {/* Faded line backdrop for dark mode */}
     
  
        {/* Faded line backdrop for light mode */}  
             <div className='flex flex-col   '>
            <hr />
            <hr />
            <hr />
          </div>

      <div className="relative z-10 max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex flex-col space-y-1 mb-8">
            {[...Array(3)].map((_, i) => (
              <hr key={i} className="border-t border-gray-200 dark:border-gray-700 w-full" />
            ))}
          </div>
          
          <h2 className="text-3xl font-bold mb-4">
            Skills & Experience
            <span className="text-primary">.</span>
          </h2>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Wide range of skills and experience in software engineering, marketing, and design.
          </p>
        </div>

        {/* Skills filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {skills.map((skill) => (
            <button
              key={skill}
              onClick={() => setSelectedSkill(skill === selectedSkill ? null : skill)}
              className={`px-4 py-2 text-sm font-medium  transition-all duration-300 transform
                ${skill === selectedSkill
                  ? ' btn-outline border  scale-105 shadow-lg'
                  : 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md hover:scale-105 hover:shadow-sm'
                }`}
            >
              {skill}
            </button>
          ))}
        </div>

        {/* Content cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredContent.length === 0 ? (
            <div className="col-span-full py-8">
              <p className="text-gray-500 dark:text-gray-400">
                No items found for "{selectedSkill}".
              </p>
            </div>
          ) : (
            filteredContent.map((item) => (
              <div 
                key={item.title} 
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-left"
              >
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Skills:</span> {item.skills.join(', ')}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


// 'use client';

// import React, { useState } from 'react';

// const skills = [
//   "Website Development",
//   "UI/UX Design",
//   "RESTful API",
//   "Frontend Design",
//   "Poetry",
//   "Music",
//   "Communication",
//   "Analytical Thinking",
//   "Problem Solving",
//   "Brand Strategy",
//   "Content Creation",
//   "Social Media Marketing",
//   "Conversion Optimization",
//   "Email Campaigns",
//   "Creative Direction",
//   "Design Thinking",
// ];

// // Sample content tagged with skills
// const content = [
//   { title: "Portfolio Website", skills: ["Website Development", "UI/UX Design", "Frontend Design"] },
//   { title: "API Backend", skills: ["RESTful API", "Problem Solving"] },
//   { title: "Poetry Collection", skills: ["Poetry", "Creative Direction"] },
//   { title: "Music Collaboration App", skills: ["Music", "UI/UX Design", "Website Development"] },
//   { title: "Marketing Funnel Design", skills: ["Content Creation", "Conversion Optimization", "Brand Strategy"] },
// ];

// const SkillsSection = () => {
//   const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

//   const filteredContent = selectedSkill
//     ? content.filter(item => item.skills.includes(selectedSkill))
//     : content;

//   return (
//     <section className="flex flex-wrap  justify-center  py-16 px-6 md:px-20   text-center dark:bg-dark-background text-gray-500 dark:text-foreground" id="skills">


//       <div className="flex flex-wrap  justify-center gap-3 mb-8 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 dark:bg-dark-background text-gray-500 dark:text-foreground">




//         <section className=" w-full max-w-screen-xl mx-auto  sm:px-6 lg:px-8 items-center justify-center text-center text-foreground dark:text-dark-foreground  py-20 px-10">

//           <div className='flex flex-col   '>
//             <hr />
//             <hr />
//             <hr />
//           </div>
//         {/* <div className="flex flex-col items-center mb-8"> */}


//           <h2 className="text-3xl font-bold text-center my-10">Skills & Experience
//             <span className="text-primary">.</span>

//           </h2>

//           <p className="text-lg md:text-xl mb-6">
//             Wide range of skills and experience in software enginering, marketing, and design.
//             {/* <br> That comes together in designing solutions </br> */}
//           </p>
//           </section>


//           <div>
//             {skills.map((skill, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedSkill(skill === selectedSkill ? null : skill)}
//                 className={`px-4 py-2 text-sm font-medium  transition-all duration-300 
//                   ${skill === selectedSkill
//                     ? 'bg-primary text-white scale-105'
//                     : 'bg-gradient-to-r from-teal-500 via-teal-600 to-teal-100 text-white shadow-md hover:scale-105'}
//                 `}
//               >
//                 {skill}
//               </button>
//             ))}
//         </div>

//       </div>

//       <div className="flex flex-wrap justify-between gap-6 max-w-4xl mx-auto">
//         {filteredContent.length === 0 ? (
//           <p className="text-gray-500">No items found for "{selectedSkill}".</p>
//         ) : (
//           filteredContent.map((item, idx) => (
//             <div key={idx} className="p-6 bg-gray-100 rounded-xl shadow-sm text-left">
//               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//               <p className="text-sm text-gray-600">
//                 Skills: {item.skills.join(', ')}
//               </p>
//             </div>
//           ))
//         )}
//       </div>
      
//     </section >
//   );
// };

// export default SkillsSection;
