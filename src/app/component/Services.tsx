'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    { title: "Web Development" },
    { title: "Ai Integration" },
    { title: "Landing Page" },
    { title: "Automation" },
    { title: "Dashboard" },
    { title: "Workflow" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 70, 
        damping: 15 
      }
    }
  };

  return (
    <section className="w-full bg-[#111111] py-24 md:py-32 relative overflow-hidden" id="services">
      {/* Abstract Background Wavy Shapes Placeholder */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/20 blur-[120px] rounded-full z-0"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/10 blur-[100px] rounded-full z-0"></div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <h2 className="font-urbanist font-medium text-[48px] md:text-[56px] text-white leading-tight">
            My <span className="text-brand-orange">Services</span>
          </h2>
          <p className="max-w-[400px] text-white/80 font-sans text-sm md:text-base pb-2">
           Designing and building AI-powered agents and automated workflows using tools like Claude, n8n, and agentic AI concepts — helping streamline repetitive tasks and connect your systems intelligently.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[32px] p-5 flex flex-col gap-6 relative group"
            >
              <div className="pb-4 border-b border-white/10 mt-2">
                <h3 className="text-[28px] text-white font-urbanist font-medium px-2">{service.title}</h3>
              </div>
              
              <div className="relative mt-4">
                {/* Stacked effect layers */}
                <div className="absolute -top-6 left-8 right-8 h-10 bg-white/5 rounded-t-2xl border border-white/10 border-b-0"></div>
                <div className="absolute -top-3 left-4 right-4 h-10 bg-white/10 rounded-t-2xl border border-white/10 border-b-0 backdrop-blur-sm z-10"></div>
                
                {/* Image Container with Cutout */}
                <div 
                  className="relative w-full aspect-[4/3] bg-[#EBE9E4] rounded-3xl p-4 shadow-lg z-20 overflow-hidden flex gap-3 justify-center items-center"
                  style={{
                    maskImage: 'radial-gradient(circle at calc(100% - 10px) calc(100% - 10px), transparent 75px, black 76px)',
                    WebkitMaskImage: 'radial-gradient(circle at calc(100% - 10px) calc(100% - 10px), transparent 75px, black 76px)'
                  }}
                >
                   {/* Fake Mobile Screens */}
                   <motion.div 
                     whileHover={{ y: -10 }}
                     transition={{ type: "spring", stiffness: 200, damping: 15 }}
                     className="w-[45%] h-[120%] bg-[#B89B85] rounded-xl shadow-md -translate-y-4 flex flex-col p-2"
                   >
                      <div className="w-full h-24 bg-white/20 rounded-lg mb-2"></div>
                      <div className="w-full h-12 bg-white/20 rounded-lg mb-2"></div>
                      <div className="w-full h-12 bg-white/20 rounded-lg"></div>
                   </motion.div>
                   <motion.div 
                     whileHover={{ y: -10 }}
                     transition={{ type: "spring", stiffness: 200, damping: 15 }}
                     className="w-[45%] h-[120%] bg-[#B89B85] rounded-xl shadow-md translate-y-4 flex flex-col p-2"
                   >
                      <div className="w-full h-12 bg-white/20 rounded-lg mb-2"></div>
                      <div className="w-full flex-1 bg-white/20 rounded-lg mb-2"></div>
                   </motion.div>
                </div>

                {/* Corner Button */}
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="absolute -bottom-2 -right-2 bg-[#1A1F2C] text-white hover:bg-brand-orange cursor-pointer rounded-full w-[84px] h-[84px] flex items-center justify-center shadow-2xl z-30"
                >
                  <span className="text-3xl font-light">↗</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex justify-center items-center gap-2 mt-16"
        >
          <div className="w-10 h-2.5 bg-brand-orange rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-neutral-600 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-neutral-600 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-neutral-600 rounded-full"></div>
        </motion.div>

      </div>
    </section>
  );
}
