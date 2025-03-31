
import React, { useRef, useEffect } from 'react';

const ProjectsHeading: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <div className="text-center mb-16">
      <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4 opacity-0">
        <span className="text-gradient">My Work</span>
      </h2>
      <p className="text-portfolio-light/80 max-w-2xl mx-auto opacity-0 animate-fade-in delay-100">
        In my professional journey, I have developed several noteworthy web projects that highlight my skills in modern web development.
        Each of these projects has allowed me to enhance my technical expertise and deliver high-quality web solutions that cater to different industries.
      </p>
    </div>
  );
};

export default ProjectsHeading;
