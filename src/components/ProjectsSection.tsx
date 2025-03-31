
import React, { useRef } from 'react';
import CurvedDivider from './CurvedDivider';
import ProjectsHeading from './projects/ProjectsHeading';
import ProjectsGrid from './projects/ProjectsGrid';
import { projects } from '@/data/projects';

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 bg-portfolio-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ProjectsHeading />
        <ProjectsGrid projects={projects} />
      </div>
      
      <CurvedDivider position="bottom" className="absolute bottom-0 left-0 w-full h-16" />
    </section>
  );
};

export default ProjectsSection;
