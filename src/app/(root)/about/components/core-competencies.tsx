import React from 'react';
import data from '../../../../data/cv/data.json';

type CompetencyGroups = {
  [groupName: string]: string[]; // e.g., "Marketing": ["Digital Strategy", ...]
};

const categoryGroupMap: Record<string, string[]> = {
  tech: ['Technology', 'Tools and Software', 'Other'],
  marketing: ['Marketing', 'Tools and Software'],
  all: ['Marketing', 'Technology', 'Tools and Software', 'Other'],
};

interface CoreCompetenciesProps {
  activeFilter: 'tech' | 'marketing' | 'all';
}

export const CoreCompetencies = ({ activeFilter }: CoreCompetenciesProps) => {
  const { competencies } = data as { competencies: CompetencyGroups };

  const visibleGroups = categoryGroupMap[activeFilter] || [];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground border-b pb-2">Core Competencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleGroups.map((groupName) => {
          const items = competencies[groupName];
          if (!items) return null;

          return (
            <div key={groupName} className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">{groupName}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="bg-surface px-3 py-1 rounded-full text-sm text-foreground/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


// import React from 'react';
// import data from '../../../../data/cv/data.json';

// type CompetencyGroups = {
//   [category: string]: string[];
// };

// const categoryGroupMap: Record<string, string[]> = {
//   tech: ['Technology', 'Tools and Software', 'Other'],
//   marketing: ['Marketing', 'Tools and Software'],
//   all: ['Marketing', 'Technology', 'Tools and Software', 'Other'],
// };

// export const CoreCompetencies = ({ activeFilter }: { activeFilter: string }) => {
//   const { competencies } = data as { competencies: CompetencyGroups };

//   // Determine which groups to show based on activeFilter
//   const visibleGroups = categoryGroupMap[activeFilter] || [];

//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-foreground border-b pb-2">Core Competencies</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {visibleGroups.map((group) => {
//           const items = competencies[group];
//           if (!items) return null;

//           return (
//             <div key={group} className="space-y-2">
//               <h3 className="text-lg font-semibold text-foreground">{group}</h3>
//               <div className="flex flex-wrap gap-2">
//                 {items.map((item) => (
//                   <span
//                     key={item}
//                     className="bg-surface px-3 py-1 rounded-full text-sm text-foreground/90"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };


// // import React from 'react';
// // import data from '../../../../data/cv/data.json';

// // type CompetencyGroups = {
// //   [category: string]: string[];
// // };

// // export const CoreCompetencies = () => {
// //   const { competencies } = data as { competencies: CompetencyGroups };

// //   return (
// //     <div className="space-y-6">
// //       <h2 className="text-2xl font-bold text-foreground border-b pb-2">Core Competencies</h2>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {Object.entries(competencies).map(([group, items]) => {
// //           if (group === 'groups') return null;

// //           return (
// //             <div key={group} className="space-y-2">
// //               <h3 className="text-lg font-semibold text-foreground">{group}</h3>
// //               <div className="flex flex-wrap gap-2">
// //                 {items.map(item => (
// //                   <span
// //                     key={item}
// //                     className="bg-surface px-3 py-1 rounded-full text-sm text-foreground/90"
// //                   >
// //                     {item}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // // import React from 'react';
// // // import data from '../../../../data/cv/data.json';

// // // type CompetencyGroups = {
// // //   [category: string]: string[]; // Each key maps to an array of strings
// // // };

// // // export const CoreCompetencies = () => {
// // //   const { competencies } = data as { competencies: CompetencyGroups };

// // //   return (
// // //     <div className="space-y-6">
// // //       <h2 className="text-2xl font-bold text-foreground border-b pb-2">Core Competencies</h2>
// // //       <div className="space-y-4">
// // //         {Object.entries(competencies).map(([group, items]) => {
// // //           if (group === 'groups') return null; // Skip the 'groups' key

// // //           return (
// // //             <div key={group}>
// // //               <h3 className="text-lg font-semibold text-foreground">{group}</h3>
// // //               <div className="flex flex-wrap gap-2 mt-1">
// // //                 {items.map(item => (
// // //                   <span
// // //                     key={item}
// // //                     className="bg-surface px-3 py-1 rounded-full text-sm text-foreground/90"
// // //                   >
// // //                     {item}
// // //                   </span>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     </div>
// // //   );
// // // };
