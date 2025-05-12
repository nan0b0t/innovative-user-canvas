
import React, { useRef, useEffect } from 'react';
import CurvedDivider from './CurvedDivider';
import ProjectsHeading from './projects/ProjectsHeading';
import ProjectsGrid from './projects/ProjectsGrid';
import { projects } from '@/data/projects';
import gsap from 'gsap';

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      // Create a subtle animation for the background pattern
      gsap.fromTo('.pattern-dots', 
        { opacity: 0, scale: 0.95 },
        { 
          opacity: 0.7, 
          scale: 1, 
          duration: 1.5, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="relative py-20 bg-portfolio-dark section-with-mesh overflow-hidden"
    >
      {/* Sophisticated background patterns */}
      <div className="geometric-mesh opacity-40"></div>
      <div className="dot-pattern pattern-dots opacity-0"></div>
      
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-portfolio-accent/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-10 w-1/4 h-1/2 bg-portfolio-highlight/5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <ProjectsHeading />
        <ProjectsGrid projects={projects} />
      </div>
      
      <CurvedDivider position="bottom" className="absolute bottom-0 left-0 w-full h-16" />
    </section>
  );
};

export default ProjectsSection;
