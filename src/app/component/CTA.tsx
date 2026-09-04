'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function CTA({ siteSettings = {} }: { siteSettings?: any }) {
  const marqueeItems = [
    "Full-Stack Dev", "Automation", "Ai Agents", "Business Workflows", "Dashboard", 
  ];

  return (
    <section className="w-full bg-white pt-24 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center z-10 relative">
        
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring" as any, stiffness: 60, damping: 20 }}
          className="font-urbanist font-bold text-[48px] md:text-[64px] text-center leading-[1.15] mb-12"
        >
          <span className="text-[#2A3240]">Have an Awesome Project<br/>Idea? </span>
          <span className="text-brand-orange">Let's Discuss</span>
        </motion.h2>

        {/* Input Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring" as any, stiffness: 70, damping: 15, delay: 0.2 }}
          className="w-full max-w-[600px] border border-neutral-200 rounded-full p-2 flex items-center justify-between bg-white shadow-sm mb-10"
        >
          <div className="flex items-center flex-1 px-2">
            <div className="w-10 h-10 bg-brand-orange/20 rounded-full flex items-center justify-center text-brand-orange shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <input 
              type="email" 
              placeholder="Enter Email Address"
              className="w-full bg-transparent border-none outline-none px-4 font-sans text-neutral-600 placeholder:text-neutral-500"
            />
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-orange text-white font-sans font-medium px-8 py-3.5 rounded-full hover:bg-brand-orangeDark transition-colors shrink-0"
          >
            Send
          </motion.button>
        </motion.div>

        {/* Mini Stats */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.4 } }
          }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-[#2A3240] font-sans text-sm font-medium"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-2">
            <span className="text-brand-orange text-lg leading-none">★</span>
            <span>4.9/5 Average Ratings</span>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-2">
            <span className="text-[#2A3240] text-lg leading-none">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            </span>
            <span>25+ Winning Awards</span>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-2">
            <span className="text-[#2A3240] text-lg leading-none">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
            </span>
            <span>Certified Product Designer</span>
          </motion.div>
        </motion.div>

      </div>

      {/* Marquee Section */}
      <div className="relative w-full h-[160px] md:h-[200px] mt-16 flex items-center justify-center">
        {/* Background Orange Strip */}
        <div className="absolute w-[110%] h-[80px] md:h-[100px] bg-brand-orange transform -rotate-2 scale-110 z-0"></div>
        
        {/* Foreground White Strip */}
        <div className="absolute w-[110%] h-[80px] md:h-[100px] bg-white border-y border-neutral-200 transform rotate-1 scale-110 z-10 flex items-center overflow-hidden">
          <div className="flex items-center whitespace-nowrap animate-marquee">
            {/* Repeat array for seamless looping */}
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={idx} className="flex items-center">
                <span className="font-urbanist text-[32px] md:text-[40px] text-neutral-900 mx-6">{item}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#FD853A" xmlns="http://www.w3.org/2000/svg" className="mx-2">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
