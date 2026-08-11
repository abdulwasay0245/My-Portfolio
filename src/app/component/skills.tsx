'use client';
import Image from 'next/image';
import { roboto } from '../fonts/fonts';
import skills from './data/skills';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const ctx = gsap.context(() => {
            gsap.from('.skill-item', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className='py-24 w-full flex flex-col items-center border-t border-border bg-background'>
            <div className='flex items-center gap-4 mb-16'>
                <div className='h-px w-12 bg-border'></div>
                <h2 className={`${roboto.className} text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground`}>
                    Technical Arsenal
                </h2>
                <div className='h-px w-12 bg-border'></div>
            </div>
            
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 justify-items-center justify-center items-center gap-12 w-full px-6 max-w-7xl mx-auto'>
                {skills.map((skill, index) => (
                    <div key={index} className='skill-item flex flex-col items-center justify-center text-center group cursor-default'>
                        <div className='h-20 w-20 flex items-center justify-center bg-secondary/50 rounded-2xl mb-4 border border-border group-hover:border-foreground transition-colors duration-300 overflow-hidden'>
                            <Image
                                alt={skill.name}
                                width={40}
                                height={40}
                                src={skill.img}
                                className={`opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 ${skill.name === "Rest API's" ? "invert dark:invert-0" : ""} ${skill.name === "MongoDB" ? "h-10 w-10" : ""}`}
                            />
                        </div>
                        <h3 className='text-xs font-medium text-muted-foreground uppercase tracking-widest group-hover:text-foreground transition-colors'>
                            {skill.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;