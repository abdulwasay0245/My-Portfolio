'use client';
import React from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import { urlFor } from '@/lib/sanity.client';

const Hero = ({ hero = {} }: { hero?: any }) => {
  // Common spring transition for entrance
  const springTransition = {
    type: "spring" as any,
    stiffness: 80,
    damping: 15,
    mass: 1
  };

  const defaultHero = {
    greeting: "Hello!",
    headline: "I'm <span class='text-brand-orange'>Wasay</span>,<br /> Ai & workflow automation expert.",
    statsText: "3+ Years",
    statsLabel: "Experience",
    quoteText: "Abdul's full-stack development skills ensured our project's success.<br/>Highly Recommended",
  };

  const data = Object.keys(hero).length > 0 ? hero : defaultHero;
  
  // A helper to safely parse the orange highlights
  const parseHeadline = (htmlString: string) => {
    return htmlString.replace(/<orange>/g, "<span class='text-brand-orange'>").replace(/<\/orange>/g, "</span>");
  };

  return (
    <main className="min-h-screen pt-32 relative flex flex-col items-center justify-start overflow-hidden bg-white">
      <div className="flex flex-col items-center z-10 px-6 max-w-[1200px] mx-auto relative w-full h-full">
        
        {/* Floating Left Quote - continuous floating */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...springTransition, delay: 0.2 }}
          className="absolute left-[0%] top-[45%] hidden md:flex flex-col max-w-[280px]"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[#344054] text-5xl font-serif leading-none">“</span>
            <p 
              className="font-urbanist text-[#344054] text-lg font-medium leading-snug mt-2"
              dangerouslySetInnerHTML={{ __html: data.quoteText || defaultHero.quoteText }}
            />
          </motion.div>
        </motion.div>
        
        {/* Floating Right Stats - continuous floating */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...springTransition, delay: 0.3 }}
          className="absolute right-[0%] top-[45%] hidden md:flex flex-col items-end text-right"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="flex items-center gap-1 text-brand-orange text-2xl">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span className="font-urbanist font-bold text-[56px] text-neutral-900 leading-none mt-2">{data.statsText || defaultHero.statsText}</span>
            <span className="font-urbanist text-xl text-[#344054] font-medium">{data.statsLabel || defaultHero.statsLabel}</span>
          </motion.div>
        </motion.div>

        {/* Top Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springTransition}
          className="border border-neutral-900 rounded-[38px] px-6 py-2 mb-6"
        >
          <span className="text-neutral-900 font-urbanist font-medium text-lg">{data.greeting || defaultHero.greeting}</span>
        </motion.div>

        {/* Massive Text */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...springTransition, delay: 0.1 }}
          className="font-urbanist font-medium text-[72px] md:text-[100px] text-neutral-900 text-center leading-[1.1] mb-12 relative z-20"
          dangerouslySetInnerHTML={{ __html: parseHeadline(data.headline || defaultHero.headline) }}
        />

        {/* Center Person Graphic */}
        <div className="relative mt-8 w-full max-w-[700px] flex justify-center h-[600px]">
          {/* Orange Half Circle */}
          <motion.div 
            initial={{ opacity: 0, scaleY: 0, transformOrigin: "bottom" }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ ...springTransition, delay: 0.3 }}
            className="absolute bottom-0 w-full aspect-[2/1] bg-[#fca26e] rounded-t-full z-0"
          ></motion.div>
          
          {/* Person Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.4 }}
            className="absolute bottom-[-140px] w-[90%] md:w-[80%] saturate-50 h-auto max-h-[150%] object-contain z-10 drop-shadow-xl pointer-events-none"
          >
            {data.heroImage ? (
              <img src={urlFor(data.heroImage).url()} alt="Hero" className="w-full h-auto" />
            ) : (
              <img src="/png.png" alt="Abdul Wasay" className="w-full h-auto" />
            )}
          </motion.div>

          {/* Action Buttons (Glassmorphic over the person) */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...springTransition, delay: 0.6 }}
            className="absolute bottom-12 z-20 bg-white/20 backdrop-blur-md border border-white/40 p-2 rounded-[60px] flex items-center shadow-lg"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring" as any, stiffness: 400, damping: 17 }}
              href="#portfolio" 
              className="bg-brand-orange text-white rounded-[60px] px-8 py-3 font-urbanist font-semibold text-lg flex items-center gap-2 hover:opacity-90"
            >
              Portfolio <span className="text-xl leading-none">↗</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring" as any, stiffness: 400, damping: 17 }}
              href="#contact" 
              className="text-white px-8 py-3 font-urbanist font-semibold text-lg hover:bg-white/10 rounded-[60px]"
            >
              Hire me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
