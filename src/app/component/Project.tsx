"use client";

import React, { useEffect, useState, useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"; 
import { roboto } from '../fonts/fonts';
import { client, urlFor } from "@/lib/sanity.client";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS_QUERY = `*[_type == "project"]{
  _id,
  title,
  description,
  image,
  tech,
  link,
  github
}`;

const staticProjects = [
  {
    _id: "1",
    title: "VRR Gaming",
    tech: ["Next.js", "TailwindCSS", "TS"],
    image: "/projectImg/gamingmockup.png",
    link: "https://games-website-hazel.vercel.app/",
    description: "A high-performance gaming platform built for seamless user experience and dynamic content delivery."
  },
  {
    _id: "2",
    title: "Resume Craft AI Agent",
    tech: ["Next.js", "FastAPI", "TS"],
    image: "/projectImg/AiAgent.png",
    link: "https://resumecraft-pearl.vercel.app/",
    description: "Intelligent resume builder leveraging AI to optimize professional profiles and streamline applications."
  }
];

export default function Portfolio() {
  const [projects, setProjects] = useState<any[]>(staticProjects);
  const [activeProject, setActiveProject] = useState<number>(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await client.fetch(PROJECTS_QUERY);
        if (data && data.length > 0) {
          setProjects(data);
        }
      } catch (error) {
        console.error("Error fetching projects from Sanity:", error);
      }
    }
    fetchProjects();
  }, []);

  // Update image on scroll using IntersectionObserver
  useEffect(() => {
    if (!listRef.current) return;

    const projectRows = listRef.current.querySelectorAll('.project-scroll-row');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Number(entry.target.getAttribute('data-index'));
                setActiveProject(index);
            }
        });
    }, {
        // Trigger when the item hits the middle 50% of the screen
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0
    });

    projectRows.forEach(row => observer.observe(row));

    return () => {
        projectRows.forEach(row => observer.unobserve(row));
    };
  }, [projects]);

  return (
    <section id="project" className="w-full py-32 bg-background relative border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <h2 className={`text-6xl md:text-8xl font-black text-foreground tracking-tighter uppercase leading-none ${roboto.className}`}>
                Selected<br/>Works
            </h2>
            <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase max-w-xs mt-8 md:mt-0 pb-2">
                A collection of recent development and design explorations.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            
            {/* Sticky Image Reveal (Left/Top side) */}
            <div className="w-full lg:w-1/2 lg:sticky lg:top-32 h-[50vh] lg:h-[70vh] rounded-2xl overflow-hidden border border-border bg-secondary flex items-center justify-center relative transition-all duration-500 shadow-2xl">
                {projects.map((project, index) => {
                    const imgSrc = typeof project.image === 'string' ? project.image : (project.image ? urlFor(project.image).url() : '/placeholder.png');
                    return (
                        <img
                            key={project._id}
                            src={imgSrc}
                            alt={project.title}
                            className={`absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 ease-in-out ${
                                activeProject === index 
                                ? 'opacity-90 scale-100 z-10' 
                                : 'opacity-0 scale-110 z-0'
                            }`}
                        />
                    );
                })}
            </div>

            {/* Scrolling Project List (Right side) */}
            <div className="w-full lg:w-1/2 flex flex-col" ref={listRef}>
                <div className="w-full h-px bg-border mb-8"></div>
                {projects.map((project, index) => (
                    <div 
                        key={project._id} 
                        data-index={index}
                        className={`project-scroll-row group py-16 md:py-24 border-b border-border flex flex-col cursor-pointer transition-all duration-500 px-4 -mx-4 ${activeProject === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                        onClick={() => {
                            if (project.link) window.open(project.link, "_blank");
                        }}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <h3 className={`text-3xl md:text-5xl font-bold text-foreground uppercase tracking-tight transition-all duration-500 ${roboto.className} ${activeProject === index ? 'pl-4' : ''}`}>
                                {project.title}
                            </h3>
                            <ArrowUpRight className={`text-muted-foreground transition-all duration-500 transform ${activeProject === index ? 'scale-125 rotate-45 text-foreground' : ''}`} size={32} />
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech?.map((t: string, i: number) => (
                                <span key={i} className={`px-3 py-1 border text-[10px] uppercase tracking-widest rounded-full transition-colors ${activeProject === index ? 'border-foreground/30 text-foreground' : 'border-border text-muted-foreground'}`}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-8 max-w-lg">
                            {project.description}
                        </p>

                        <div className={`flex items-center gap-6 transition-all duration-500 ${activeProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-foreground font-medium hover:opacity-70 transition-opacity uppercase tracking-widest text-xs">
                                    Live Site <ExternalLink size={14} />
                                </a>
                            )}
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-foreground font-medium hover:opacity-70 transition-opacity uppercase tracking-widest text-xs">
                                    Github <Github size={14} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
}
