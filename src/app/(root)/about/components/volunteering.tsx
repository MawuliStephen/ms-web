// components/volunteering.tsx
import React from 'react';
import data from '../../../../data/cv/data.json';

type Props = {
  activeFilter: 'tech' | 'marketing' | 'all';
};

export const Volunteering = ({ activeFilter }: Props) => {
  const { volunteering } = data;

  const filtered = 
    activeFilter === 'all'
      ? volunteering
      : volunteering.filter(item => item.categories?.includes(activeFilter));

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground border-b pb-2">Community Involvement</h2>
      <div className="space-y-4">
        {filtered.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between">
              <h3 className="font-medium text-foreground">{item.role}</h3>
              <span className="text-muted-foreground">{item.date}</span>
            </div>
            <p className="text-foreground/90">{item.organization}</p>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


// // components/volunteering.tsx
// import React from 'react';
// import data from '../../../../data/cv/data.json';

// export const Volunteering = () => {
//   const { volunteering } = data;

//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-foreground border-b pb-2">Community Involvement</h2>
//       <div className="space-y-4">
//         {volunteering.map((item, index) => (
//           <div key={index} className="space-y-1">
//             <div className="flex justify-between">
//               <h3 className="font-medium text-foreground">{item.role}</h3>
//               <span className="text-muted-foreground">{item.date}</span>
//             </div>
//             <p className="text-foreground/90">{item.organization}</p>
//             <p className="text-sm text-muted-foreground">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
