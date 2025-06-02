// components/projects.tsx
import React from 'react';
import data from '../../../../data/cv/data.json';

type Props = {
  activeFilter: 'tech' | 'marketing' | 'all';
};



export const Projects = ({ activeFilter }: Props) => {
  const { projects } = data;

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground border-b pb-2">Key Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, i) => (
          <div key={i} className="p-4 border rounded-lg bg-surface">
            <h3 className="text-lg font-semibold text-primary">{project.name}</h3>
            <p className="text-foreground/90 mt-1">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech: string) => (
                <span key={tech} className="text-xs px-2 py-1 bg-background rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// // components/projects.tsx
// import React from 'react';
// import data from '../../../../data/cv/data.json'

// const {projects} = data

// export const Projects = () => {
//   return (
//     <div className="space-y-6">
//       <h2 className="text-2xl font-bold text-foreground border-b pb-2">Key Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {projects.map((project, i) => (
//           <div key={i} className="p-4 border rounded-lg bg-surface">
//             <h3 className="text-lg font-semibold text-primary">{project.name}</h3>
//             <p className="text-foreground/90 mt-1">{project.description}</p>
//             <div className="mt-3 flex flex-wrap gap-2">
//               {project.tech.map(tech => (
//                 <span key={tech} className="text-xs px-2 py-1 bg-background rounded">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };