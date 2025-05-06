'use client';

import React, { useState, useRef, useEffect } from 'react';
import projects from '../../../data/project';

const ProjectsSection = () => {
  const projectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const getPaginatedProjects = () => {
    const startIndex = currentPage * projectsPerPage;
    return projects.slice(startIndex, startIndex + projectsPerPage);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50 && currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    } else if (touchStart - touchEnd < -50 && currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  return (
    <section className="relative py-16 px-6 md:px-20 dark:bg-dark-background text-gray-500 dark:text-foreground" id="projects">
      {/* Subtle backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-20 dark:opacity-30 -z-10" />
      
      <div className="relative z-10 max-w-screen-xl mx-auto">
        <SectionHeader
          title="Projects"
          description="Selection of my recent work and contributions."
        />
        
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {getPaginatedProjects().map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentPage === i ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentPage(p => Math.max(p - 1, 0))}
              disabled={currentPage === 0}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages - 1))}
              disabled={currentPage === totalPages - 1}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );


  // return (
  //   <div className="relative py-12 w-full section-background dark:bg-dark-background text-gray-500 dark:text-foreground transition-colors duration-300">

  //     {/* Backdrop positioned absolutely within the relative parent */}
  //     {/* <div className="absolute inset-0 -z-1 bg-gradient-to-br from-primary/10 via-muted/30 to-transparent backdrop-blur-sm border border-white/10" /> */}
  //     <div className="absolute inset-0 ">
  //       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-muted/30 to-transparent backdrop-blur-sm" />
  //     </div>

  //     <section 
  //       className="relative w-full max-w-screen-xl mx-auto sm:px-6 lg:px-8" 
  //       id="projects-section" 
  //       ref={containerRef}
  //     >
  //       <div className='flex flex-col'>
  //         <hr />
  //         <hr />
  //         <hr />
  //       </div>

  //       <h2 className="text-3xl font-bold text-center my-10">Projects</h2>

  //       <div
  //         className="relative overflow-hidden min-h-[500px]"
  //         onTouchStart={handleTouchStart}
  //         onTouchMove={handleTouchMove}
  //         onTouchEnd={handleTouchEnd}
  //       >
  //         <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  //           {getPaginatedProjects().map((project, index) => (
  //             <ProjectCard
  //               key={`${project || index}`}
  //               project={project}
  //               index={index}
  //             />
  //           ))}
  //         </div>

  //         <div className="flex justify-center mt-8 space-x-2">
  //           {Array.from({ length: totalPages }).map((_, index) => (
  //             <button
  //               key={index}
  //               onClick={() => setCurrentPage(index)}
  //               className={`w-3 h-3 rounded-full ${currentPage === index ? 'bg-primary' : 'bg-gray-300'}`}
  //               aria-label={`Go to page ${index + 1}`}
  //             />
  //           ))}
  //         </div>

  //         <div className="flex justify-center gap-6 mt-6">
  //           <button
  //             onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
  //             disabled={currentPage === 0}
  //             className="px-4 py-2 bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
  //             aria-label="Previous page"
  //           >
  //             Previous
  //           </button>
  //           <span className="self-center">
  //             Page {currentPage + 1} of {totalPages}
  //           </span>
  //           <button
  //             onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))}
  //             disabled={currentPage === totalPages - 1}
  //             className="px-4 py-2 bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
  //             aria-label="Next page"
  //           >
  //             Next
  //           </button>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard = React.memo(({ project, index }: ProjectCardProps) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block p-4 bg-white dark:bg-dark-surface shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary border-t-4 border-t-primary"
    aria-label={`View ${project.title} project`}
  >
    <div className="overflow-hidden rounded-xl mb-4">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        loading={index > 2 ? "lazy" : "eager"}
      />
    </div>
    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm line-clamp-2">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2">
      {project.stack.map((tech, idx) => (
        <span
          key={`${project|| index}-tech-${idx}`}
          className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs px-2 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
  </a>
));

ProjectCard.displayName = 'ProjectCard';

export default ProjectsSection;


// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import projects from '../../../data/project';

// const ProjectsSection = () => {
//   const projectsPerPage = 6;
//   const [currentPage, setCurrentPage] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const totalPages = Math.ceil(projects.length / projectsPerPage);

//   // Get projects for current page
//   const getPaginatedProjects = () => {
//     const startIndex = currentPage * projectsPerPage;
//     return projects.slice(startIndex, startIndex + projectsPerPage);
//   };

//   // Handle touch events for swipe
//   const handleTouchStart = (e: React.TouchEvent) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (touchStart - touchEnd > 50) {
//       // Swipe left
//       if (currentPage < totalPages - 1) {
//         setCurrentPage(prev => prev + 1);
//       }
//     }

//     if (touchStart - touchEnd < -50) {
//       // Swipe right
//       if (currentPage > 0) {
//         setCurrentPage(prev => prev - 1);
//       }
//     }
//   };

//   // Auto-scroll to top when page changes (optional)
//   useEffect(() => {
//     if (containerRef.current) {
//       containerRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [currentPage]);

//   return (
//     <div className="py-12 px-4 md:px-12 section-background  dark:bg-dark-background text-gray-500 dark:text-foreground transition-colors duration-300">
// <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-muted/30 to-transparent backdrop-blur-sm border border-white/10" />

//       <section className="w-full max-w-screen-xl mx-auto  sm:px-6 lg:px-8 " id="projects-section" ref={containerRef}    >
//         <div className='flex flex-col   '>
//           <hr />
//           <hr />
//           <hr />
//         </div>

//         <h2 className="text-3xl font-bold text-center my-10">Projects</h2>

//         {/* Swipeable container */}
//         <div
//           className="relative overflow-hidden min-h-[500px]"
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//         >
//           {/* Projects grid */}
//           {/* <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}
//           <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//             {getPaginatedProjects().map((project, index) => (
//               <ProjectCard
//                 key={`${project || index}`}
//                 project={project}
//                 index={index}
//               />
//             ))}
//           </div>

//           {/* Page indicators */}
//           <div className="flex justify-center mt-8 space-x-2">
//             {Array.from({ length: totalPages }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentPage(index)}
//                 className={`w-3 h-3 rounded-full ${currentPage === index ? 'bg-primary' : 'bg-gray-300'}`}
//                 aria-label={`Go to page ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Navigation arrows */}
//           <div className="flex justify-center gap-6 mt-6">
//             <button
//               onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
//               disabled={currentPage === 0}
//               className="px-4 py-2 bg-gray-200  disabled:opacity-50"
//               aria-label="Previous page"
//             >
//               Previous
//             </button>
//             <span className="self-center">
//               Page {currentPage + 1} of {totalPages}
//             </span>
//             <button
//               onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))}
//               disabled={currentPage === totalPages - 1}
//               className="px-4 py-2 bg-gray-200  disabled:opacity-50"
//               aria-label="Next page"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </section>

      


//     </div>




//   );
// };

// // ProjectCard component remains the same
// interface ProjectCardProps {
//   project: typeof projects[0];
//   index: number;
// }

// const ProjectCard = React.memo(({ project, index }: ProjectCardProps) => (
//   <a
//     href={project.url}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="group block p-4 bg-surface dark:bg-dark-surface shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary border-t-4 border-t-solid border-t-primary"
//     aria-label={`View ${project.title} project`}
//   >
//     <div className="overflow-hidden  rounded-xl mb-4">
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//         loading={index > 2 ? "lazy" : "eager"}
//       />
//     </div>
//     <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
//     <p className="text-gray-600 mb-2 text-sm line-clamp-2">{project.description}</p>
//     <div className="flex flex-wrap gap-2">
//       {project.stack.map((tech, idx) => (
//         <span
//           key={`${project || index}-tech-${idx}`}
//           className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full "
//           style={{ transition: 'background-color 0.3s ease' }}
//         >
//           {tech}
//         </span>
//       ))}
//     </div>
//   </a>
// ));

// ProjectCard.displayName = 'ProjectCard';

// export default ProjectsSection;
