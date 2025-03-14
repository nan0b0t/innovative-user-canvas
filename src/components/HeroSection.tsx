
import React, { useRef, useEffect } from 'react';
import { ArrowDown, ChevronDown } from 'lucide-react';
import AnimatedText from './AnimatedText';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const welcomeRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLAnchorElement>(null);
  
  useEffect(() => {
    // Initial animations when component mounts
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(
      welcomeRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.2 },
      "-=0.5"
    )
    .fromTo(
      paragraphRef.current,
      { opacity: 0, y: 20 },
      { opacity: 0.7, y: 0, duration: 0.8 },
      "-=0.7"
    )
    .fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(
      scrollRef.current,
      { opacity: 0, y: -10 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        onComplete: () => {
          // Add bounce animation after appearing
          gsap.to(scrollRef.current, {
            y: 10,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
          });
        }
      },
      "-=0.3"
    );
    
    // Parallax effect on scroll
    if (sectionRef.current && imageRef.current) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const sectionTop = sectionRef.current?.offsetTop || 0;
        const scrollRelative = scrollPosition - sectionTop;
        
        if (scrollRelative > -500 && scrollRelative < 500) {
          gsap.to(imageRef.current, {
            y: scrollRelative * 0.1,
            duration: 0.5,
            ease: "power1.out"
          });
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex items-center py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-portfolio-card/50 to-portfolio-dark z-0"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col space-y-6">
          <h1 ref={welcomeRef} className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient mb-6 opacity-0 mx-0 mt-[60px]">
            WELCOME
          </h1>
          
          <div className="space-y-2">
            <AnimatedText text="Hello, I'm a" className="text-lg md:text-xl text-portfolio-light/80" delay={0.2} />
            <AnimatedText text="Web Developer" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient" delay={0.3} />
            <AnimatedText text="Crafting digital experiences with code" className="text-xl md:text-2xl text-portfolio-light/80" delay={0.4} />
          </div>
          
          <p ref={paragraphRef} className="text-portfolio-light/70 max-w-xl text-balance opacity-0 my-0">
            I'm a passionate and skilled web professional, bringing a blend of creativity and technical expertise to the digital realm. From captivating web designs to seamless backend development, my skills span the spectrum of web development.
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 opacity-0">
            <a href="#projects" className="px-6 py-3 bg-portfolio-accent hover:bg-portfolio-accent/90 text-white rounded-full transition-colors duration-300 text-center hover-glow">
              View My Work
            </a>
            <a href="#contact" className="px-6 py-3 bg-transparent border border-portfolio-accent/50 hover:border-portfolio-accent text-portfolio-light rounded-full transition-colors duration-300 text-center hover-glow">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-portfolio-accent/40 to-portfolio-dark/40 rounded-full blur-3xl opacity-30"></div>
            <img ref={imageRef} alt="Developer" src="/lovable-uploads/92cfdc1b-d5d3-473a-817a-5e947ba98c9d.png" className="relative z-10 opacity-0 max-w-md lg:max-w-lg xl:max-w-xl object-none" />
          </div>
        </div>
      </div>
      
      <a 
        ref={scrollRef}
        href="#projects" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-portfolio-light/60 hover:text-portfolio-accent transition-colors duration-300 opacity-0" 
        aria-label="Scroll to projects"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
