'use client';

import React, { useState, useRef, useEffect } from 'react';
import { SectionLayout, SectionHeader } from '../components/navigations/section-layout';
import projects from '../../../data/project';
import Image from 'next/image';


interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard = React.memo(({ project, index }: ProjectCardProps) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    // p-4 border rounded-lg bg-surface
    // className="group block   dark:bg-gray-200 rounded-lg border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-all"
    className="group block  border rounded-lg bg-surface hover:shadow-md transition-all"

    aria-label={`View ${project.title} project`}
  >
    <div className="overflow-hidden rounded-lg mb-4">
      <Image
        src={project.image}
        alt={project.title}
        height={400}
        width={300}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        loading={index > 2 ? "lazy" : "eager"}
      />
    </div>
    <div className='p-6 '> 

    <h3 className="text-xl font-semibold mb-2 dark:text-foreground">{project.title}</h3>
    <p className="text-gray-600 dark:text-foreground/70 mb-4 text-sm line-clamp-2">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2">
      {project.stack.map((tech, idx) => (
        <span
          key={`${project || index}-tech-${idx}`}
          className="text-xs px-2 py-1 bg-primary/10 text-primary dark:text-primary-light rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
    </div>
  </a>
));

ProjectCard.displayName = 'ProjectCard';

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
    <SectionLayout id="projects" hasBackdrop>
      <SectionHeader
        title="Projects"
        description="Selection of my recent work and contributions."
      />

      <div 
        className="relative overflow-hidden min-h-[500px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={containerRef}
      >
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {getPaginatedProjects().map((project, index) => (
            <ProjectCard
            // key={project.id}
            //  key={project.title || globalIndex}

              key={`${project.title || index}`}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-4">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentPage === index ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded disabled:opacity-50"
              aria-label="Previous page"
            >
              Previous
            </button>
            <span className="self-center text-sm">
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))}
              disabled={currentPage === totalPages - 1}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded disabled:opacity-50"
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ProjectsSection;
