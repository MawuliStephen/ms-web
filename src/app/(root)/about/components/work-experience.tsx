// components/work-experience.tsx
import React from 'react';

const experiences = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2020 - Present',
    highlights: [
      'Led migration of legacy system to Next.js, improving performance by 40%',
      'Implemented CI/CD pipeline reducing deployment time by 65%',
      'Mentored 3 junior developers in React best practices'
    ]
  },
  {
    role: 'Digital Marketing Manager',
    company: 'Creative Agency',
    period: '2017 - 2020',
    highlights: [
      'Grew organic traffic by 250% through SEO strategy',
      'Managed $500k+ annual ad budget with 5:1 ROAS',
      'Developed content strategy producing 50+ high-converting pieces'
    ]
  }
];

export const WorkExperience = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground border-b pb-2">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
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