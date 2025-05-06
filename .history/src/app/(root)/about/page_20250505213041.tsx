'use client';
import { useRef, useState } from 'react';
import { SectionLayout } from './../components/navigations/section-layout';
import { Preamble } from './components/preamble';
import { CoreCompetencies } from './components/core-competencies';
import { WorkExperience } from './components/work-experience';
import { Projects } from './components/projects';
import { Volunteering } from './components/volunteering';
import { Hobbies } from './components/hobbies';
import { useReactToPrint } from 'react-to-print';
import {PrintButton} from './components/print-button';

export default function AboutPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'tech' | 'marketing'>('all');
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    pageStyle: `
      @page { size: A4; margin: 1cm; }
      @media print {
        body { -webkit-print-color-adjust: exact; }
        .no-print { display: none !important; }
        .print\:bg-white { background: white !important; }
        .print\:text-black { color: black !important; }
        .print\:border-gray-200 { border-color: #e5e7eb !important; }
      }
    `,
    documentTitle: activeFilter === 'all' ? 'Full_CV' : `${activeFilter}_Resume`
  });

  const filteredContent = {
    tech: {
      competencies: ['Technology', 'Tools and Software'],
      showProjects: true,
      showMarketing: false
    },
    marketing: {
      competencies: ['Marketing', 'Tools and Software'],
      showProjects: false,
      showMarketing: true
    },
    all: {
      competencies: ['Marketing', 'Technology', 'Tools and Software', 'Other'],
      showProjects: true,
      showMarketing: true
    }
  };

  return (
    <div className='pt-15'>
      {/* Download Controls */}
      <div className="no-print sticky top-0 z-10 bg-background/80 backdrop-blur-sm p-4 border-b">
        <div className="max-w-7xl mx-auto flex justify-end mt-5 gap-4">
          <button 
            className={`px-4 py-2 rounded-md border ${
              activeFilter === 'tech' 
                ? 'btn' 
                : 'border-border hover:bg-surface'
            }`}
            onClick={() => setActiveFilter('tech')}
          >
            Tech Resume
          </button>
          <button 
            className={`px-4 py-2 rounded-md border ${
              activeFilter === 'marketing' 
                ? 'btn' 
                : 'btn-'
            }`}
            onClick={() => setActiveFilter('marketing')}
          >
            Marketing Resume
          </button>
          <button 
            className={`px-4 py-2 rounded-md border ${
              activeFilter === 'all' 
                ? 'btn' 
                : 'btn-outline border-border hover:bg-surface'
            }`}
            onClick={() => setActiveFilter('all')}
          >
            Full CV
          </button>
          <button 
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
            onClick={handlePrint}
          >
            Download {activeFilter === 'all' ? 'CV' : 'Resume'}
          </button>
        </div>
      </div>

      {/* Printable Content */}
      <div ref={printRef} className="print:p-8 space-y-8">
        <SectionLayout id="about-preamble">
          <Preamble />
        </SectionLayout>

        <SectionLayout id="about-competencies">
          <CoreCompetencies 
            groups={filteredContent[activeFilter].competencies} 
          />
        </SectionLayout>

        <SectionLayout id="about-experience">
          <WorkExperience />
        </SectionLayout>

        {filteredContent[activeFilter].showProjects && (
          <SectionLayout id="about-projects">
            <Projects />
          </SectionLayout>
        )}

        <SectionLayout id="about-volunteering">
          <Volunteering />
        </SectionLayout>

        <SectionLayout id="about-hobbies">
          <Hobbies />
        </SectionLayout>
      </div>
    </div>
  );
}

// // about/page.tsx
// 'use client';
// import { useRef, useState } from 'react';
// import { SectionLayout } from './../components/navigations/section-layout';
// import {Preamble} from './components/preamble';
// import {CoreCompetencies} from './components/core-competencies';
// import {WorkExperience} from './components/work-experience';
// import {Projects} from './components/projects';
// import {Volunteering} from './components/volunteering';
// import { Hobbies } from './components/hobbies';

// import { useReactToPrint } from 'react-to-print';

// export default function AboutPage() {
//   const [activeFilter, setActiveFilter] = useState<'all' | 'tech' | 'marketing'>('all');
//   const printRef = useRef<HTMLDivElement>(null);

//   const handlePrint = useReactToPrint({
//     content: () => printRef.current,
//     pageStyle: `
//       @page { size: A4; margin: 1cm; }
//       @media print {
//         body { -webkit-print-color-adjust: exact; }
//         .no-print { display: none !important; }
//       }
//     `
//   });

//   const filteredContent = {
//     tech: {
//       competencies: ['Technology', 'Tools and Software'],
//       showProjects: true,
//       showMarketing: false
//     },
//     marketing: {
//       competencies: ['Marketing', 'Tools and Software'],
//       showProjects: false,
//       showMarketing: true
//     },
//     all: {
//       competencies: ['Marketing', 'Technology', 'Tools and Software', 'Other'],
//       showProjects: true,
//       showMarketing: true
//     }
//   };

//   return (
//     <div>
//       Download Controls
//       <div className="no-print sticky top-0 z-10 bg-background/80 backdrop-blur-sm p-4 border-b">
//         <div className="max-w-7xl mx-auto flex justify-end gap-4">
//           <button className='btn-outline' onClick={() => setActiveFilter('tech')}>
//             Tech Resume
//           </button>
//           <button className='btn-outline' onClick={() => setActiveFilter('marketing')}>
//             Marketing Resume
//           </button>
//           <button className='btn-outline' onClick={() => setActiveFilter('all')}>
//             Full CV
//           </button>
//           <button onClick={handlePrint}>
//             Download {activeFilter === 'all' ? 'CV' : 'Resume'}
//           </button>
//         </div>
//       </div>

//       {/* Printable Content */}
//       <div ref={printRef} className="print:p-8">
//         <SectionLayout id="about-preamble">
//           <Preamble />
//         </SectionLayout>

//         <SectionLayout id="about-competencies">
//           <CoreCompetencies 
//             groups={filteredContent[activeFilter].competencies} 
//           />
//         </SectionLayout>

//         <SectionLayout id="about-experience">
//           <WorkExperience />
//         </SectionLayout>

//         {filteredContent[activeFilter].showProjects && (
//           <SectionLayout id="about-projects">
//             <Projects />
//           </SectionLayout>
//         )}

//         <SectionLayout id="about-volunteering">
//           <Volunteering />
//         </SectionLayout>

//         <SectionLayout id="about-hobbies">
//           <Hobbies />
//         </SectionLayout>
//       </div>
//     </div>
//   );
// }


// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About