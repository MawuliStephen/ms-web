// about/page.tsx
'use client';
import { useState } from 'react';
import { SectionLayout } from '@/components/section-layout';
import Preamble from '@/components/preamble';
import CoreCompetencies from '@/components/core-competencies';
import WorkExperience from '@/components/work-experience';
import Projects from '@/components/projects';
import Volunteering from '@/components/volunteering';
import Hobbies from '@/components/hobbies';
// import { Button } from '@/components/ui/button';
import { useReactToPrint } from 'react-to-print';
// import { ref, ReactToPrint } from 'react-to-print';

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
      }
    `
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
    <div>
      {/* Download Controls */}
      <div className="no-print sticky top-0 z-10 bg-background/80 backdrop-blur-sm p-4 border-b">
        <div className="max-w-7xl mx-auto flex justify-end gap-4">
          <Button variant="outline" onClick={() => setActiveFilter('tech')}>
            Tech Resume
          </Button>
          <Button variant="outline" onClick={() => setActiveFilter('marketing')}>
            Marketing Resume
          </Button>
          <Button variant="outline" onClick={() => setActiveFilter('all')}>
            Full CV
          </Button>
          <Button onClick={handlePrint}>
            Download {activeFilter === 'all' ? 'CV' : 'Resume'}
          </Button>
        </div>
      </div>

      {/* Printable Content */}
      <div ref={printRef} className="print:p-8">
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


// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About