
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SkillsSection from '@/components/SkillsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ThemeToggle from '@/components/ThemeToggle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Index: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };
  
  useEffect(() => {
    // Apply theme to the document
    document.documentElement.classList.toggle('light-mode', theme === 'light');
    document.documentElement.classList.toggle('dark-mode', theme === 'dark');

    // GSAP ScrollTrigger animations for sections
    const sections = gsap.utils.toArray<HTMLElement>('.slide-in-section');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { 
          opacity: 0,
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Create batch animations for staggered elements
    gsap.utils.toArray<HTMLElement>('.stagger-fade-in').forEach((element) => {
      const children = gsap.utils.toArray<HTMLElement>((element).children);
      
      gsap.fromTo(
        children,
        { 
          opacity: 0, 
          y: 20 
        },
        {
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
        }
      );
    });

    // Clean up all ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [theme]);
  
  return (
    <div className={`flex flex-col min-h-screen ${theme}`}>
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
      {/* Theme toggle in bottom-right corner */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle currentTheme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default Index;
