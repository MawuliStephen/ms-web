// about/page.tsx
'use client';
import { useEffect, useRef, useState } from 'react';
import { SectionLayout } from './../components/navigations/section-layout';
import { Preamble } from './components/preamble';
import { CoreCompetencies } from './components/core-competencies';
import { WorkExperience } from './components/work-experience';
import { Projects } from './components/projects';
import { Volunteering } from './components/volunteering';
import { Hobbies } from './components/hobbies';
import { PrintButton } from './components/print-button';
import { Button } from '../components/navigations/button';

export default function AboutPageContent() {
    const [activeFilter, setActiveFilter] = useState<'all' | 'tech' | 'marketing'>('all');
    const printRef = useRef<HTMLDivElement>(null);

    // Verify ref is working
    useEffect(() => {
        console.log('Print ref:', printRef.current);
    }, []);

    const filteredContent = {
        tech: {
            competencies: ['Technology', 'Tools and Software'],
            showProjects: true,
            showMarketing: false,
            title: 'Software_Engineer_Resume'
        },
        marketing: {
            competencies: ['Marketing', 'Tools and Software'],
            showProjects: false,
            showMarketing: true,
            title: 'Marketing_Professional_Resume'
        },
        all: {
            competencies: ['Marketing', 'Technology', 'Tools and Software', 'Other'],
            showProjects: true,
            showMarketing: true,
            title: 'Professional_CV'
        }
    };

    return (
        <div>
            {/* Download Controls */}
            <div className="flex justify-center no-print sticky my-6 mt-20 z-10 bg-background/80 backdrop-blur-sm p-4 border-b">

                <div className=" mx-auto flex flex-wrap justify-center gap-3">
                    <Button
                        variant={activeFilter === 'tech' ? 'default' : 'outline'}
                        onClick={() => setActiveFilter('tech')}
                    >
                        Tech Resume
                    </Button>
                    <Button
                        variant={activeFilter === 'marketing' ? 'default' : 'outline'}
                        onClick={() => setActiveFilter('marketing')}
                    >
                        Marketing Resume
                    </Button>
                    <Button
                        variant={activeFilter === 'all' ? 'default' : 'outline'}
                        onClick={() => setActiveFilter('all')}
                    >
                        Full CV
                    </Button>


                    <PrintButton onClick={() => console.log(printRef.current?.innerHTML)}  componentRef={printRef}  // No type assertion needed            documentTitle={filteredContent[activeFilter].title}
                    />

                    <button className='btn' onClick={() => console.log(printRef.current?.innerHTML)}>
                        Test Print Content
                    </button>

                </div>

            </div>

            {/* Printable Content */}
            <div ref={printRef} className="print:p-8 space-y-8 print:space-y-6">
                <SectionLayout id="about-preamble" className="print:pt-0">
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

