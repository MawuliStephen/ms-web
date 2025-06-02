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
            <div className="flex justify-center no-print sticky my-6 mt-20 z-10 bg-background/80 backdrop-blur-sm p-4 border-b">
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


// 'use client';
// import { useEffect, useRef, useState } from 'react';
// import { SectionLayout } from './../components/navigations/section-layout';
// import { Preamble } from './components/preamble';
// import { CoreCompetencies } from './components/core-competencies';
// import { WorkExperience } from './components/work-experience';
// import { Projects } from './components/projects';
// import { Volunteering } from './components/volunteering';
// import { Hobbies } from './components/hobbies';
// import { Button } from '../components/navigations/button';
// import { DownloadPDFButton } from './new';
// import data  from '../../../data/cv/data.json';


// export default function AboutPageContent() {
    
//     const printRef = useRef<HTMLDivElement>(null);
//     const [isRefReady, setIsRefReady] = useState(false);
//     const [activeFilter, setActiveFilter] = useState<'all' | 'tech' | 'marketing'>('all');

//     useEffect(() => {
//         if (printRef.current) {
//             setIsRefReady(true);
//         }
//     }, []);

//     const filteredContent = {
//         tech: {
           
//             showProjects: true,
//             showMarketing: false,
//             title: 'Software_Engineer_Resume'
//         },
//         marketing: {
//             showProjects: false,
//             showMarketing: true,
//             title: 'Marketing_Professional_Resume'
//         },
//         all: {
//             showProjects: true,
//             showMarketing: true,
//             title: 'Professional_CV'
//         }
//     };

//     console.log(filteredContent[activeFilter]);

//     return (
//         <div>
//             <div className="flex justify-center no-print sticky my-6 mt-20 z-10 bg-background/80 backdrop-blur-sm p-4 border-b">
//                 <div className="mx-auto flex flex-wrap justify-center gap-3">
//                     <Button variant={activeFilter === 'tech' ? 'default' : 'outline'} onClick={() => setActiveFilter('tech')}>
//                         Tech Resume
//                     </Button>
//                     <Button variant={activeFilter === 'marketing' ? 'default' : 'outline'} onClick={() => setActiveFilter('marketing')}>
//                         Marketing Resume
//                     </Button>
//                     <Button variant={activeFilter === 'all' ? 'default' : 'outline'} onClick={() => setActiveFilter('all')}>
//                         Full CV
//                     </Button>

//                     {isRefReady && (
//                         <DownloadPDFButton
//                             documentTitle={filteredContent[activeFilter].title}
//                             showProjects={filteredContent[activeFilter].showProjects}
//                             showMarketing={filteredContent[activeFilter].showMarketing}
//                         />
//                     )}
//                 </div>
//             </div>

//             <div ref={printRef} className="print:p-8 space-y-8 print:space-y-6 print-area">
//                 <SectionLayout id="about-preamble" className="print:pt-0">
//                     {/* <Preamble data={preamble} /> */}
//                      <Preamble activeFilter={activeFilter} />
//                 </SectionLayout>
//                 <SectionLayout id="about-competencies">
//                     <CoreCompetencies  activeFilter={activeFilter} />
//                  {/* <CoreCompetencies groups={filteredContent[activeFilter] /> */}
//                 </SectionLayout>
         
//                 <SectionLayout id="about-experience">
//                     <WorkExperience activeFilter={activeFilter} />
//                 </SectionLayout>



//                 {filteredContent[activeFilter].showProjects && (
//                     <SectionLayout id="about-projects">
//                         <Projects activeFilter={activeFilter} />
//                     </SectionLayout>
//                 )}

//                 <SectionLayout id="about-volunteering">
                 
//                     <Volunteering activeFilter={activeFilter} />

//                 </SectionLayout>

//                 <SectionLayout id="about-hobbies">
//                     <Hobbies />
//                 </SectionLayout>
//             </div>
//         </div>
//     );
// }


// // // AboutPageContent.tsx
// // 'use client';
// // import { useEffect, useRef, useState } from 'react';
// // import { SectionLayout } from './../components/navigations/section-layout';
// // import { Preamble } from './components/preamble';
// // import { CoreCompetencies } from './components/core-competencies';
// // import { WorkExperience } from './components/work-experience';
// // import { Projects } from './components/projects';
// // import { Volunteering } from './components/volunteering';
// // import { Hobbies } from './components/hobbies';
// // import { Button } from '../components/navigations/button';
// // import { DownloadPDFButton } from './new';
// // // import {CompetencyGroup} from '../../../../data/cv/data.json';


// // export default function AboutPageContent() {
// //     const printRef = useRef<HTMLDivElement>(null);
// //     const [isRefReady, setIsRefReady] = useState(false);
// //     const [activeFilter, setActiveFilter] = useState<'all' | 'tech' | 'marketing'>('all');

// //     useEffect(() => {
// //         if (printRef.current) {
// //             setIsRefReady(true);
// //         }
// //     }, []);

// //    const filteredContent: Record<
// //         'all' | 'tech' | 'marketing',
// //         {
// //             competencies: CompetencyGroup[];
// //             showProjects: boolean;
// //             showMarketing: boolean;
// //             title: string;
// //         }
// //     > = {
// //         tech: {
// //             competencies: ['Technology', 'Tools and Software'],
// //             showProjects: true,
// //             showMarketing: false,
// //             title: 'Software_Engineer_Resume'
// //         },
// //         marketing: {
// //             competencies: ['Marketing', 'Tools and Software'],
// //             showProjects: false,
// //             showMarketing: true,
// //             title: 'Marketing_Professional_Resume'
// //         },
// //         all: {
// //             competencies: ['Marketing', 'Technology', 'Tools and Software', 'Other'],
// //             showProjects: true,
// //             showMarketing: true,
// //             title: 'Professional_CV'
// //         }
// //     };


// //     return (
// //         <div>
// //             <div className="flex justify-center no-print sticky my-6 mt-20 z-10 bg-background/80 backdrop-blur-sm p-4 border-b">
// //                 <div className="mx-auto flex flex-wrap justify-center gap-3">
// //                     <Button variant={activeFilter === 'tech' ? 'default' : 'outline'} onClick={() => setActiveFilter('tech')}>
// //                         Tech Resume
// //                     </Button>
// //                     <Button variant={activeFilter === 'marketing' ? 'default' : 'outline'} onClick={() => setActiveFilter('marketing')}>
// //                         Marketing Resume
// //                     </Button>
// //                     <Button variant={activeFilter === 'all' ? 'default' : 'outline'} onClick={() => setActiveFilter('all')}>
// //                         Full CV
// //                     </Button>

// //                     {isRefReady && (
// //                         <DownloadPDFButton
// //                             documentTitle={filteredContent[activeFilter].title}
// //                             selectedGroups={filteredContent[activeFilter].competencies}
// //                             showProjects={filteredContent[activeFilter].showProjects}
// //                             showMarketing={filteredContent[activeFilter].showMarketing}
// //                         />
// //                     )}
// //                 </div>
// //             </div>

// //             <div ref={printRef} className="print:p-8 space-y-8 print:space-y-6 print-area">
// //                 <SectionLayout id="about-preamble" className="print:pt-0">
// //                     <Preamble />
// //                 </SectionLayout>
// //                 <SectionLayout id="about-competencies">
// //                     <CoreCompetencies groups={filteredContent[activeFilter].competencies} />
// //                 </SectionLayout>
// //                 <SectionLayout id="about-experience">
// //                     <WorkExperience />
// //                 </SectionLayout>
// //                 {filteredContent[activeFilter].showProjects && (
// //                     <SectionLayout id="about-projects">
// //                         <Projects />
// //                     </SectionLayout>
// //                 )}
// //                 <SectionLayout id="about-volunteering">
// //                     <Volunteering />
// //                 </SectionLayout>
// //                 <SectionLayout id="about-hobbies">
// //                     <Hobbies />
// //                 </SectionLayout>
// //             </div>
// //         </div>
// //     );
// // }

// // // // about/page.tsx
// // // 'use client';
// // // import { useEffect, useRef, useState } from 'react';
// // // import { SectionLayout } from './../components/navigations/section-layout';
// // // import { Preamble } from './components/preamble';
// // // import { CoreCompetencies } from './components/core-competencies';
// // // import { WorkExperience } from './components/work-experience';
// // // import { Projects } from './components/projects';
// // // import { Volunteering } from './components/volunteering';
// // // import { Hobbies } from './components/hobbies';
// // // import { PrintButton } from './components/print-button';
// // // // import { PrintButton } from './components/print-but';
// // // import { Button } from '../components/navigations/button';

// // // export default function AboutPageContent() {
// // //     const [activeFilter, setActiveFilter] = useState<'all' | 'tech' | 'marketing'>('all');
// // //     const printRef = useRef<HTMLDivElement>(null);
// // //     // Debug mount and updates
// // //     useEffect(() => {
// // //         console.log('Component mounted - Ref status:', {
// // //             exists: !!printRef.current,
// // //             contentLength: printRef.current?.innerHTML?.length
// // //         });
// // //     }, []);

// // //     const filteredContent = {
// // //         tech: {
// // //             competencies: ['Technology', 'Tools and Software'],
// // //             showProjects: true,
// // //             showMarketing: false,
// // //             title: 'Software_Engineer_Resume'
// // //         },
// // //         marketing: {
// // //             competencies: ['Marketing', 'Tools and Software'],
// // //             showProjects: false,
// // //             showMarketing: true,
// // //             title: 'Marketing_Professional_Resume'
// // //         },
// // //         all: {
// // //             competencies: ['Marketing', 'Technology', 'Tools and Software', 'Other'],
// // //             showProjects: true,
// // //             showMarketing: true,
// // //             title: 'Professional_CV'
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             {/* Download Controls */}
// // //             <div className="flex justify-center no-print sticky my-6 mt-20 z-10 bg-background/80 backdrop-blur-sm p-4 border-b">

// // //                 <div className=" mx-auto flex flex-wrap justify-center gap-3">
// // //                     <Button
// // //                         variant={activeFilter === 'tech' ? 'default' : 'outline'}
// // //                         onClick={() => setActiveFilter('tech')}
// // //                     >
// // //                         Tech Resume
// // //                     </Button>
// // //                     <Button
// // //                         variant={activeFilter === 'marketing' ? 'default' : 'outline'}
// // //                         onClick={() => setActiveFilter('marketing')}
// // //                     >
// // //                         Marketing Resume
// // //                     </Button>
// // //                     <Button
// // //                         variant={activeFilter === 'all' ? 'default' : 'outline'}
// // //                         onClick={() => setActiveFilter('all')}
// // //                     >
// // //                         Full CV
// // //                     </Button>


// // //                     <PrintButton componentRef={printRef}            documentTitle={filteredContent[activeFilter].title}
// // //                     />

// // //                     {/* <button className='btn' onClick={() => console.log(printRef.current?.innerText)}>
// // //                         Test Print Content
// // //                     </button> */}

// // //                     {/* Debug controls */}
// // //                     {/* <div className="no-print flex gap-4 mb-4 p-4 bg-gray-100 rounded-lg">
// // //                         <button
// // //                             className="btn"
// // //                             onClick={() => console.log('Current ref content:', printRef.current?.innerHTML)}
// // //                         >
// // //                             Verify HTML Content
// // //                         </button>
// // //                         <button
// // //                             className="btn"
// // //                             onClick={() => console.log('Text content:', printRef.current?.innerText)}
// // //                         >
// // //                             Verify Text Content
// // //                         </button>
// // //                     </div> */}

// // //                 </div>

// // //             </div>

// // //             {/* Printable Content */}
// // //             <div ref={printRef} className="print:p-8 space-y-8 print:space-y-6">
// // //                 <SectionLayout id="about-preamble" className="print:pt-0">
// // //                     <Preamble />
// // //                 </SectionLayout>

// // //                 <SectionLayout id="about-competencies">
// // //                     <CoreCompetencies
// // //                         groups={filteredContent[activeFilter].competencies}
// // //                     />
// // //                 </SectionLayout>

// // //                 <SectionLayout id="about-experience">
// // //                     <WorkExperience />
// // //                 </SectionLayout>

// // //                 {filteredContent[activeFilter].showProjects && (
// // //                     <SectionLayout id="about-projects">
// // //                         <Projects />
// // //                     </SectionLayout>
// // //                 )}

// // //                 <SectionLayout id="about-volunteering">
// // //                     <Volunteering />
// // //                 </SectionLayout>

// // //                 <SectionLayout id="about-hobbies">
// // //                     <Hobbies />
// // //                 </SectionLayout>
// // //             </div>
// // //         </div>
// // //     );
// // // }

