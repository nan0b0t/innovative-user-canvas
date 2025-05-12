
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SkillsSection from '@/components/SkillsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const Index: React.FC = () => {
  useEffect(() => {
    // Apply dark theme to the document
    document.documentElement.classList.add('dark-mode');

    // GSAP ScrollTrigger animations for sections
    const sections = gsap.utils.toArray<HTMLElement>('.slide-in-section');
    sections.forEach(section => {
      if (section) {
        gsap.fromTo(section, {
          opacity: 0,
          y: 50
        }, {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    // Create batch animations for staggered elements
    gsap.utils.toArray<HTMLElement>('.stagger-fade-in').forEach(element => {
      if (element) {
        const children = gsap.utils.toArray<HTMLElement>(element.children);
        gsap.fromTo(children, {
          opacity: 0,
          y: 20
        }, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    // Animation for geometric patterns
    gsap.utils.toArray<HTMLElement>('.geometric-mesh').forEach(pattern => {
      gsap.fromTo(pattern, 
        { opacity: 0 },
        { 
          opacity: 0.3, 
          duration: 2,
          scrollTrigger: {
            trigger: pattern.parentElement,
            start: "top bottom",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Animation for dot patterns
    gsap.utils.toArray<HTMLElement>('.dot-pattern').forEach(pattern => {
      gsap.fromTo(pattern, 
        { opacity: 0 },
        { 
          opacity: 0.2, 
          duration: 2,
          scrollTrigger: {
            trigger: pattern.parentElement,
            start: "top bottom",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Clean up all ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen dark-mode">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
