'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { roboto } from '../fonts/fonts';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(
        [textRef1.current, textRef2.current],
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" },
        "+=0.2"
      )
      .fromTo(
        descRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        buttonRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className='flex flex-col items-center justify-center min-h-[90vh] w-full px-6 relative overflow-hidden'>
      
      {/* Very subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>
      
      <div className='flex flex-col items-start max-w-5xl w-full relative z-10'>
        <div className="overflow-hidden pb-2">
            <h1 ref={textRef1} className={`text-6xl md:text-9xl font-black text-foreground tracking-tighter uppercase leading-[0.9] ${roboto.className}`}>
                Abdul Wasay
            </h1>
        </div>
        <div className="overflow-hidden pb-4">
            <h2 ref={textRef2} className={`text-3xl md:text-6xl font-light text-muted-foreground tracking-tight ${roboto.className}`}>
                Creative Developer.
            </h2>
        </div>
        
        <div className='mt-12 flex flex-col md:flex-row gap-8 items-start'>
            <p ref={descRef} className='max-w-xl text-lg md:text-xl text-muted-foreground font-light leading-relaxed'>
                Crafting exceptional digital experiences through code. Specialized in modern front-end architectures, <span className="text-foreground font-medium">React</span>, and <span className="text-foreground font-medium">Agentic AI</span> interfaces.
            </p>
            
            <div ref={buttonRef} className="flex flex-col gap-4">
                <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium overflow-hidden transition-all duration-300 hover:opacity-90 rounded-none">
                    <span className="relative z-10 uppercase tracking-widest text-xs">Start a Project</span>
                </a>
                <a href="../Abdul-Wasay.pdf" download className="group relative inline-flex items-center justify-center px-8 py-4 border border-border bg-transparent text-foreground font-medium transition-all duration-300 hover:bg-secondary rounded-none">
                    <span className="uppercase tracking-widest text-xs">Download Resume</span>
                </a>
            </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
          <div className="w-px h-16 bg-gradient-to-b from-foreground to-transparent"></div>
      </div>
    </main>
  );
}

export default Hero;
