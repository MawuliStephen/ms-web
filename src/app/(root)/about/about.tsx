'use client';
import { useEffect, useRef, useState } from 'react';
import { SectionLayout } from './../components/navigations/section-layout';
import { Preamble } from './components/preamble';
import { CoreCompetencies } from './components/core-competencies';
import { WorkExperience } from './components/work-experience';
import { Projects } from './components/projects';
import { Volunteering } from './components/volunteering';
import { Hobbies } from './components/hobbies';
import { Button } from '../components/navigations/button';
import { DownloadPDFButton } from './utils/download';
import data from '../../../data/cv/data.json';

export default function AboutPageContent() {
    const { preamble } = data;
    const printRef = useRef<HTMLDivElement>(null);
    const [isRefReady, setIsRefReady] = useState(false);
    const [activeFilter, setActiveFilter] = useState<'all' | 'tech' | 'marketing'>('all');

    const name = preamble[activeFilter]?.name || 'My_CV';
    const formattedName = name.replace(/\s+/g, '_');

    useEffect(() => {
        if (printRef.current) {
            setIsRefReady(true);
        }
    }, []);

    const filteredContent = {
        tech: {
            showProjects: true,
            showMarketing: false,
            title: `${formattedName}_Tech`
        },
        marketing: {
            showProjects: false,
            showMarketing: true,
            title: `${formattedName}_Marketing`
        },
        all: {
            showProjects: true,
            showMarketing: true,
            title: `${formattedName}_Professional`
        }
    };

    const currentContent = filteredContent[activeFilter];

    return (
        <div>
            <div className="flex justify-center no-print sticky my-6 mt-20 z-10 bg-background/80 backdrop-blur-sm p-4 ">
                <div className="mx-auto flex flex-wrap justify-center gap-3">
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

                    {/* {isRefReady && (
                        <DownloadPDFButton
                            documentTitle={currentContent.title}
                            showProjects={currentContent.showProjects}
                            showMarketing={currentContent.showMarketing}
                        />
                    )} */}

                    {isRefReady && (
                        <DownloadPDFButton
                            documentTitle={currentContent.title}
                            showProjects={currentContent.showProjects}
                            showMarketing={currentContent.showMarketing}
                            activeFilter={activeFilter}
                        />
                    )}

                </div>
            </div>

            <div ref={printRef} className="print:p-8 space-y-8 print:space-y-6 print-area">
                <SectionLayout id="about-preamble" className="print:pt-0">
                    <Preamble activeFilter={activeFilter} />
                </SectionLayout>
                <SectionLayout id="about-competencies">
                    <CoreCompetencies activeFilter={activeFilter} />
                </SectionLayout>
                <SectionLayout id="about-experience">
                    <WorkExperience activeFilter={activeFilter} />
                </SectionLayout>

                {currentContent.showProjects && (
                    <SectionLayout id="about-projects">
                        <Projects activeFilter={activeFilter} />
                    </SectionLayout>
                )}

                <SectionLayout id="about-volunteering">
                    <Volunteering activeFilter={activeFilter} />
                </SectionLayout>

                <SectionLayout id="about-hobbies">
                    <Hobbies />
                </SectionLayout>
            </div>
        </div>
    );
}

