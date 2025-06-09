
import React from 'react';
import ProjectCard from '../ProjectCard';
import { Project } from '@/types';

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          index={index} 
          featured={index === 0 || index === 1} // Mark first two projects (Izenergy and Baaba.ng) as featured
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;
