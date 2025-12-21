'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { SectionLayout, SectionHeader } from '../components/navigations/section-layout';
import { projects, type Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = React.memo(({ project, index }: ProjectCardProps) => (
  <a
    href={project.liveUrl || project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group block border rounded-lg bg-surface hover:shadow-md transition-all"
    aria-label={`View ${project.title} project`}
  >
    <div className="overflow-hidden rounded-lg mb-4">
      <Image
        src={project.image}
        alt={project.title}
        height={300}
        width={300}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        loading={index > 2 ? 'lazy' : 'eager'}
      />
    </div>

    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

      <p className="text-gray-600 mb-4 text-sm line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tech, idx) => (
          <span
            key={`${project.id}-tech-${idx}`}
            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
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

  const paginatedProjects = projects.slice(
    currentPage * projectsPerPage,
    currentPage * projectsPerPage + projectsPerPage
  );

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentPage]);

  return (
    <SectionLayout id="projects" hasBackdrop>
      <SectionHeader
        title="Projects"
        description="Selection of my recent work and contributions."
      />

      <div
        ref={containerRef}
        className="relative overflow-hidden min-h-[500px]"
        onTouchStart={e => setTouchStart(e.targetTouches[0].clientX)}
        onTouchMove={e => setTouchEnd(e.targetTouches[0].clientX)}
        onTouchEnd={() => {
          if (touchStart - touchEnd > 50 && currentPage < totalPages - 1) {
            setCurrentPage(p => p + 1);
          }
          if (touchStart - touchEnd < -50 && currentPage > 0) {
            setCurrentPage(p => p - 1);
          }
        }}
      >
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {paginatedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-3 h-3 rounded-full ${
                currentPage === i ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default ProjectsSection;

