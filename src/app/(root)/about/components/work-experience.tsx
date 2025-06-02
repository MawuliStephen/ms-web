// components/work-experience.tsx
import React from 'react';
import data from '../../../../data/cv/data.json';

type Props = {
  activeFilter: 'tech' | 'marketing' | 'all';
};

export const WorkExperience = ({ activeFilter }: Props) => {
  const { experiences } = data;

  const filteredExperiences =
    activeFilter === 'all'
      ? experiences
      : experiences.filter(exp => exp.categories.includes(activeFilter));

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground border-b pb-2">Work Experience</h2>
      <div className="space-y-8">
        {filteredExperiences.map((exp, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
              <span className="text-muted-foreground">{exp.period}</span>
            </div>
            <p className="text-primary">{exp.company}</p>
            <ul className="list-disc pl-5 space-y-1 text-foreground/90">
              {exp.highlights.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};


// // components/work-experience.tsx
// import React from 'react';
// import data from '../../../../data/cv/data.json'


// export const WorkExperience = () => {
// const {experiences} = data


//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-foreground border-b pb-2">Work Experience</h2>
//       <div className="space-y-8">
//         {experiences.map((exp, i) => (
//           <div key={i} className="space-y-2">
//             <div className="flex justify-between">
//               <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
//               <span className="text-muted-foreground">{exp.period}</span>
//             </div>
//             <p className="text-primary">{exp.company}</p>
//             <ul className="list-disc pl-5 space-y-1 text-foreground/90">
//               {exp.highlights.map((item, j) => (
//                 <li key={j}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };