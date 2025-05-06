// components/core-competencies.tsx
import React from 'react';

const competencyGroups = {
  Marketing: [
    'Digital Strategy', 'SEO/SEM', 'Content Marketing', 
    'Social Media', 'Conversion Optimization', 'Analytics'
  ],
  Technology: [
    'JavaScript/TypeScript', 'React/Next.js', 'Node.js', 
    'Python', 'AWS/GCP', 'Database Design'
  ],
  'Tools and Software': [
    'Google Analytics', 'HubSpot', 'Adobe Creative Suite',
    'VS Code', 'Git', 'Docker'
  ],
  Other: [
    'Project Management', 'Team Leadership', 
    'Public Speaking', 'Technical Writing'
  ]
};

export const CoreCompetencies = ({ groups }: { groups: string[] }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground border-b pb-2">Core Competencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(competencyGroups)
          .filter(([group]) => groups.includes(group))
          .map(([group, skills]) => (
            <div key={group} className="space-y-2">
              <h3 className="text-lg font-semibold text-primary">{group}</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <li key={skill} className="px-3 py-1 bg-surface rounded-full text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};