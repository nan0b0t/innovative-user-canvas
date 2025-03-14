
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { AnimatedTextProps } from '@/types';
import gsap from 'gsap';

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  delay = 0
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting && textRef.current) {
        gsap.fromTo(
          textRef.current,
          { 
            y: 20, 
            opacity: 0 
          },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            ease: "power3.out",
            delay: delay 
          }
        );
      }
    }, {
      threshold: 0.1
    });
    
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={textRef} 
      className={cn("opacity-0", className)}
    >
      {text}
    </div>
  );
};

export default AnimatedText;
