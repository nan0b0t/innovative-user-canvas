
import React, { useRef, useEffect } from 'react';
import CurvedDivider from './CurvedDivider';
import ProjectsHeading from './projects/ProjectsHeading';
import ProjectsGrid from './projects/ProjectsGrid';
import { projects } from '@/data/projects';
import gsap from 'gsap';
import { Sun, Zap, Leaf } from 'lucide-react';

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
      
      // Animate the floating icons
      gsap.fromTo('.floating-icon', 
        { y: 0 },
        { 
          y: -15, 
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          stagger: 0.5
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
      
      {/* Floating decorative icons */}
      <div className="floating-icon absolute top-20 left-[10%] text-portfolio-accent/20">
        <Sun size={40} />
      </div>
      <div className="floating-icon absolute top-40 right-[15%] text-portfolio-highlight/20">
        <Zap size={32} />
      </div>
      <div className="floating-icon absolute bottom-40 left-[20%] text-portfolio-accent/20">
        <Leaf size={36} />
      </div>
      
      {/* Gradient glows */}
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-portfolio-accent/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-10 w-1/4 h-1/2 bg-portfolio-highlight/5 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/3 left-1/4 w-1/5 h-1/4 bg-portfolio-accent/5 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <ProjectsHeading />
        <ProjectsGrid projects={projects} />
      </div>
      
      <CurvedDivider position="bottom" className="absolute bottom-0 left-0 w-full h-16" />
    </section>
  );
};

export default ProjectsSection;
