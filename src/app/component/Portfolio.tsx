'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const tags = ["Landing Page", "Product Design", "Animation", "Glassmorphism", "Cards"];

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
      transition: { type: "spring", stiffness: 60, damping: 15 }
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
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
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

        {/* Carousel / Images */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {/* Portfolio Card 1 */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full aspect-[4/3] bg-neutral-200 rounded-3xl overflow-hidden relative shadow-sm group cursor-pointer border border-neutral-100"
          >
             {/* Fake Lirante Image content based on screenshot */}
             <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] to-[#E3DCD5] flex flex-col justify-between p-8 pt-12">
                <div className="w-full flex items-center justify-center">
                    <span className="text-neutral-400 font-urbanist text-2xl font-semibold opacity-30">Screenshot Placeholder</span>
                </div>
                <h3 className="text-white text-5xl font-urbanist font-bold z-10 drop-shadow-md relative translate-y-4">Lirante</h3>
             </div>
             
             {/* Circular Arrow top right */}
             <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-brand-orange flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all bg-white/50 backdrop-blur-sm">
                <span className="text-xl leading-none">→</span>
             </div>
          </motion.div>

          {/* Portfolio Card 2 */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full aspect-[4/3] bg-neutral-200 rounded-3xl overflow-hidden relative shadow-sm group cursor-pointer border border-neutral-100"
          >
             <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] to-[#E3DCD5] flex flex-col justify-between p-8 pt-12">
                <div className="w-full flex items-center justify-center">
                    <span className="text-neutral-400 font-urbanist text-2xl font-semibold opacity-30">Screenshot Placeholder</span>
                </div>
                <h3 className="text-white text-5xl font-urbanist font-bold z-10 drop-shadow-md relative translate-y-4">Lirante</h3>
             </div>
             
             {/* Circular Arrow top right */}
             <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-brand-orange flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all bg-white/50 backdrop-blur-sm">
                <span className="text-xl leading-none">→</span>
             </div>
          </motion.div>
        </motion.div>

        {/* Carousel Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center items-center gap-2 mb-12"
        >
          <div className="w-10 h-2 bg-brand-orange rounded-full"></div>
          <div className="w-2 h-2 bg-neutral-200 rounded-full"></div>
          <div className="w-2 h-2 bg-neutral-200 rounded-full"></div>
          <div className="w-2 h-2 bg-neutral-200 rounded-full"></div>
        </motion.div>

        {/* Tags */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tags.map((tag, idx) => (
            <motion.span 
              key={idx} 
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F3F4F6] text-[#4B5563] font-sans text-sm font-medium px-6 py-2.5 rounded-full hover:bg-neutral-200 cursor-pointer transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Project Description */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          className="flex flex-col items-center text-center max-w-[800px] mx-auto gap-4"
        >
          <div className="flex items-center justify-center gap-4">
            <h3 className="font-urbanist font-bold text-[36px] md:text-[40px] text-[#2A3240]">
              Lirante - Food Dilvery Solution
            </h3>
            <motion.div 
              whileHover={{ scale: 1.15, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="bg-brand-orange text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 cursor-pointer hover:bg-brand-orangeDark transition-colors"
            >
              <span className="text-xl leading-none font-light mb-0.5">↗</span>
            </motion.div>
          </div>
          <p className="font-sans text-[16px] text-[#8C94A3] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
