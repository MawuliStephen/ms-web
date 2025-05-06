// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import projects from '../../../data/project'; // Ensure each project includes a `stack` array (skills)

// const allSkills = [
//   "Website Development",
//   "UI/UX Design",
//   "RESTful API",
//   "Frontend Design",
//   "Poetry",
//   "Music",
//   "Communication",
//   "Analytical Thinking",
//   "Problem Solving",
//   "Brand Strategy",
//   "Content Creation",
//   "Social Media Marketing",
//   "Conversion Optimization",
//   "Email Campaigns",
//   "Creative Direction",
//   "Design Thinking",
// ];

// const ProjectsSection = () => {
//   const projectsPerPage = 4;
//   const [visibleCount, setVisibleCount] = useState(projectsPerPage);
//   const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
//   const observerRef = useRef<HTMLDivElement | null>(null);

//   // Filter projects based on selected skill
//   const filteredProjects = selectedSkill
//     ? projects.filter(project =>
//         project.stack.some(skill => skill.toLowerCase() === selectedSkill.toLowerCase())
//       )
//     : projects;

//   const visibleProjects = filteredProjects.slice(0, visibleCount);

//   // Infinite scroll observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
//         if (entries[0].isIntersecting) {
//           setVisibleCount(prev =>
//             Math.min(prev + projectsPerPage, filteredProjects.length)
//           );
//         }
//       },
//       { threshold: 1.0 }
//     );

//     const currentRef = observerRef.current;
//     if (currentRef) observer.observe(currentRef);

//     return () => {
//       if (currentRef) observer.unobserve(currentRef);
//     };
//   }, [visibleCount, filteredProjects.length]);

//   // Reset visible count when skill changes
//   useEffect(() => {
//     setVisibleCount(projectsPerPage);
//   }, [selectedSkill]);

//   return (
//     <section className="py-12 px-4 md:px-12 bg-gray-50" id="projects-section">
//       <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>

//       {/* Skill filter buttons */}
//       <div className="flex flex-wrap justify-center gap-3 mb-8">
//         {allSkills.map((skill, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedSkill(skill === selectedSkill ? null : skill)}
//             className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 
//               ${skill === selectedSkill
//                 ? 'bg-primary text-white scale-105'
//                 : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:scale-105'}
//             `}
//           >
//             {skill}
//           </button>
//         ))}
//       </div>

//       {/* Projects Grid */}
//       <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {visibleProjects.map((project, index) => (
//           <a
//             key={index}
//             href={project.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group block p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-300"
//           >
//             <div className="overflow-hidden rounded-xl mb-4">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//             <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
//             <p className="text-gray-600 mb-2 text-sm">{project.description}</p>
//             <div className="flex flex-wrap gap-2">
//               {project.stack.map((tech, idx) => (
//                 <span
//                   key={idx}
//                   className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </a>
//         ))}
//       </div>

//       {/* Sentinel div for auto-scroll */}
//       {visibleProjects.length < filteredProjects.length && (
//         <div ref={observerRef} className="h-10 mt-10" />
//       )}

//       {/* End message */}
//       {visibleProjects.length >= filteredProjects.length && (
//         <p className="text-center text-gray-500 mt-6">
//           {filteredProjects.length === 0
//             ? "No projects found for this skill."
//             : "You've reached the end."}
//         </p>
//       )}
//     </section>
//   );
// };

// export default ProjectsSection;



// // 'use client';

// // import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
// // import projects from '../../../data/project';

// // const ProjectsSection = () => {
// //   const projectsPerPage = 4;
// //   const [page, setPage] = useState(1);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const observerRef = useRef<HTMLDivElement | null>(null);
// //   const totalPages = Math.ceil(projects.length / projectsPerPage);

// //   // Memoize the visible projects calculation
// //   const visibleProjects = useMemo(() => (
// //     projects.slice(0, page * projectsPerPage)
// //   ), [page, projectsPerPage]);

// //   // Handle loading more projects
// //   const loadMore = useCallback(() => {
// //     if (page >= totalPages || isLoading) return;
// //     setIsLoading(true);
// //     // Simulate network delay for better UX
// //     setTimeout(() => {
// //       setPage(prev => prev + 1);
// //       setIsLoading(false);
// //     }, 500);
// //   }, [page, totalPages, isLoading]);

// //   // Intersection Observer setup
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting && !isLoading && page < totalPages) {
// //           loadMore();
// //         }
// //       },
// //       {
// //         rootMargin: '100px',
// //         threshold: 0.1,
// //       }
// //     );

// //     const current = observerRef.current;
// //     if (current) observer.observe(current);

// //     return () => {
// //       if (current) observer.unobserve(current);
// //     };
// //   }, [loadMore, isLoading, page, totalPages]);

// //   // Fallback for when there are no projects
// //   if (projects.length === 0) {
// //     return (
// //       <section className="py-12 px-4 md:px-12 bg-gray-50" id="projects-section">
// //         <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
// //         <p className="text-center text-gray-500">No projects available.</p>
// //       </section>
// //     );
// //   }

// //   return (
// //     <section className="py-12 px-4 md:px-12 bg-gray-50" id="projects-section">
// //       <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

// //       <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
// //         {visibleProjects.map((project, index) => (
// //           <ProjectCard 
// //             key={`${project.id || index}`} 
// //             project={project} 
// //             index={index}
// //           />
// //         ))}
// //       </div>

// //       {/* Loading indicator or sentinel */}
// //       <div ref={observerRef} className="h-20 flex items-center justify-center">
// //         {isLoading ? (
// //           <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary" />
// //         ) : (
// //           page < totalPages && <div className="h-px w-full" />
// //         )}
// //       </div>

// //       {/* End of content message */}
// //       {page >= totalPages && (
// //         <p className="text-center text-gray-500 mt-6">
// //           You've seen all {projects.length} projects.
// //         </p>
// //       )}
// //     </section>
// //   );
// // };

// // // Extracted ProjectCard component with proper TypeScript typing
// // interface ProjectCardProps {
// //   project: typeof projects[0];
// //   index: number;
// // }

// // const ProjectCard = React.memo(({ project, index }: ProjectCardProps) => (
// //   <a
// //     href={project.url}
// //     target="_blank"
// //     rel="noopener noreferrer"
// //     className="group block p-4 bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary border-t-4 border-t-solid border-t-primary"
// //     aria-label={`View ${project.title} project`}
// //   >
// //     <div className="overflow-hidden rounded-xl mb-4">
// //       <img
// //         src={project.image}
// //         alt={project.title}
// //         className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
// //         loading={index > 2 ? "lazy" : "eager"} // Lazy load only after first few images
// //       />
// //     </div>
// //     <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
// //     <p className="text-gray-600 mb-2 text-sm line-clamp-2">{project.description}</p>
// //     <div className="flex flex-wrap gap-2">
// //       {project.stack.map((tech, idx) => (
// //         <span
// //           key={`${project.id || index}-tech-${idx}`}
// //           className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
// //         >
// //           {tech}
// //         </span>
// //       ))}
// //     </div>
// //   </a>
// // ));

// // ProjectCard.displayName = 'ProjectCard'; // For better debugging

// // export default ProjectsSection;

// // // 'use client';

// // // import React, { useEffect, useRef, useState } from 'react';
// // // import projects from '../../../data/project';

// // // const ProjectsSection = () => {
// // //   const projectsPerPage = 4;
// // //   const [page, setPage] = useState(1);
// // //   const observerRef = useRef<HTMLDivElement | null>(null);

// // //   const totalPages = Math.ceil(projects.length / projectsPerPage);

// // //   // Calculate projects for the current page
// // //   const visibleProjects = projects.slice(0, page * projectsPerPage);

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       entries => {
// // //         if (entries[0].isIntersecting && page < totalPages) {
// // //           setPage(prev => prev + 1);
// // //         }
// // //       },
// // //       {
// // //         threshold: 0.25,
// // //         rootMargin: '0px 0px 200px 0px',
// // //       }
// // //     );

// // //     const current = observerRef.current;
// // //     if (current) observer.observe(current);

// // //     return () => {
// // //       if (current) observer.unobserve(current);
// // //     };
// // //   }, [page, totalPages]);

// // //   return (
// // //     <section className="py-12 px-4 md:px-12 bg-gray-50" id="projects-section">
// // //       <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

// // //       <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
// // //         {visibleProjects.map((project, index) => (
// // //           <a
// // //             key={index}
// // //             href={project.url}
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="group block p-4 bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary border-t-4 border-t-solid border-t-primary"
// // //           >
// // //             <div className="overflow-hidden rounded-xl mb-4">
// // //               <img
// // //                 src={project.image}
// // //                 alt={project.title}
// // //                 className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
// // //               />
// // //             </div>
// // //             <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
// // //             <p className="text-gray-600 mb-2 text-sm">{project.description}</p>
// // //             <div className="flex flex-wrap gap-2">
// // //               {project.stack.map((tech, idx) => (
// // //                 <span
// // //                   key={idx}
// // //                   className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
// // //                 >
// // //                   {tech}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //           </a>
// // //         ))}
// // //       </div>

// // //       {/* Sentinel element for triggering scroll loading */}
// // //       <div ref={observerRef} className="h-40 mt-10" />

// // //       {/* End of projects message */}
// // //       {page >= totalPages && (
// // //         <p className="text-center text-gray-500 mt-6">You've reached the end.</p>
// // //       )}
// // //     </section>
// // //   );
// // // };

// // // export default ProjectsSection;
