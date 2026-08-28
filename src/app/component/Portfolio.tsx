'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { urlFor } from '@/lib/sanity.client';

import Image from 'next/image';

export default function Portfolio({ projects = [] }: { projects?: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const defaultProjects = [
    {
      _id: '1',
      title: 'Lirante',
      description: 'Lirante - Food Delivery Solution. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tech: ["Landing Page", "Product Design", "Animation", "Glassmorphism", "Cards"],
      link: '#',
    },
    {
      _id: '2',
      title: 'TechNova',
      description: 'TechNova - Next-Gen Tech Platform. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tech: ["Web App", "Next.js", "Tailwind", "Framer Motion"],
      link: '#',
    }
  ];

  const displayProjects = projects && projects.length > 0 ? projects : defaultProjects;
  const activeProject = displayProjects[activeIndex] || displayProjects[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as any, stiffness: 60, damping: 15 }
    }
  };

  return (
    <section className="w-full bg-white py-24" id="portfolio">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring" as any, stiffness: 60, damping: 20 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
        >
          <h2 className="font-urbanist font-bold text-[48px] md:text-[64px] leading-[1.1]">
            <span className="text-[#2A3240] block">Lets have a look at</span>
            <span className="text-[#2A3240]">my </span>
            <span className="text-brand-orange">Portfolio</span>
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-orange text-white font-sans font-semibold px-8 py-3 rounded-full hover:bg-brand-orangeDark transition-colors"
          >
            See All
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {displayProjects.map((project: any, idx: number) => (
            <motion.div 
              key={project._id || idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setActiveIndex(idx)}
              transition={{ type: "spring" as any, stiffness: 300, damping: 20 }}
              className={`w-full aspect-[4/3] bg-neutral-200 rounded-3xl overflow-hidden relative shadow-sm group cursor-pointer border transition-all ${activeIndex === idx ? 'border-brand-orange ring-4 ring-brand-orange/20' : 'border-neutral-100'}`}
            >
               {project.image ? (
                 <Image src={urlFor(project.image).url()} alt={project.title || 'Project'} fill className="absolute inset-0 object-cover" />
               ) : (
                 <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] to-[#E3DCD5] flex flex-col justify-between p-8 pt-12">
                    <div className="w-full flex items-center justify-center">
                        <span className="text-neutral-400 font-urbanist text-2xl font-semibold opacity-30">Screenshot Placeholder</span>
                    </div>
                 </div>
               )}
               
               {/* Overlay Title */}
               <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-3xl md:text-5xl font-urbanist font-bold z-10 drop-shadow-md">{project.title}</h3>
               </div>
               
               {/* Circular Arrow top right */}
               <a href={project.link || '#'} target="_blank" rel="noreferrer" className="absolute top-6 right-6 w-12 h-12 rounded-full border border-brand-orange flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all bg-white/50 backdrop-blur-sm z-20">
                  <span className="text-xl leading-none">→</span>
               </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel Indicators (Visual only, binds to mapped projects length) */}
        {displayProjects.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex justify-center items-center gap-2 mb-12"
          >
            {displayProjects.map((_: any, idx: number) => (
              <div 
                key={idx} 
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full cursor-pointer transition-all ${activeIndex === idx ? 'w-10 bg-brand-orange' : 'w-2 bg-neutral-200 hover:bg-neutral-300'}`}
              ></div>
            ))}
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring" as any, stiffness: 100, damping: 15 }}
            className="w-full"
          >
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {activeProject.tech?.map((tag: string, idx: number) => (
                <span 
                  key={idx} 
                  className="bg-[#F3F4F6] text-[#4B5563] font-sans text-sm font-medium px-6 py-2.5 rounded-full hover:bg-neutral-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Project Description */}
            <div className="flex flex-col items-center text-center max-w-[800px] mx-auto gap-4">
              <div className="flex items-center justify-center gap-4">
                <h3 className="font-urbanist font-bold text-[36px] md:text-[40px] text-[#2A3240]">
                  {activeProject.title}
                </h3>
                {activeProject.link && (
                  <a 
                    href={activeProject.link}
                    target="_blank" rel="noreferrer"
                    className="bg-brand-orange text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 cursor-pointer hover:bg-brand-orangeDark transition-colors"
                  >
                    <span className="text-xl leading-none font-light mb-0.5">↗</span>
                  </a>
                )}
              </div>
              <p className="font-sans text-[16px] text-[#8C94A3] leading-relaxed">
                {activeProject.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
