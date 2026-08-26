'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 0.5, 
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    }
  };

  const centerCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    }
  };

  return (
    <div className="w-full bg-white px-4 md:px-8 py-12" id="testimonials">
      <section className="w-full bg-[#111111] rounded-[40px] md:rounded-[60px] py-24 relative overflow-hidden flex flex-col items-center">
        
        {/* Abstract Dark Wavy Background Placeholders */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-orange/10 blur-[120px] rounded-full z-0"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full z-0"></div>

        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Header */}
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="font-urbanist font-medium text-[48px] md:text-[56px] text-white text-center leading-[1.15] relative"
          >
            Testimonials That<br />
            Speak to <span className="text-brand-orange">My Results</span>
            {/* Sparkle Decorations */}
        
           
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="font-sans text-neutral-300 text-center max-w-[700px] mt-6 text-[15px] leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </motion.p>

          {/* Cards Carousel (Faked with flex overflow) */}
          <div className="w-full overflow-hidden mt-16 flex justify-center">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex gap-6 items-center w-max px-[50vw] md:px-0 md:w-auto"
            >
              
              {/* Left Card (Faded/Cut off) */}
              <motion.div 
                variants={cardVariants}
                className="w-[320px] md:w-[450px] shrink-0 bg-white/5 border border-white/10 backdrop-blur-md rounded-[24px] p-8 relative overflow-hidden hidden md:block"
              >
                <span className="absolute top-8 right-8 text-[140px] leading-none font-serif text-white/5 select-none">❞</span>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-neutral-600 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                     <span className="text-xs">IMG</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-urbanist font-bold text-[20px] text-white leading-tight">Jayesh Patil</span>
                    <span className="font-sans text-[14px] text-neutral-400 mt-1">CEO. Lirante</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-4 relative z-10">
                  <div className="flex text-brand-orange text-lg">★★★★★</div>
                  <span className="font-urbanist font-bold text-white text-lg mt-1">5.0</span>
                </div>
                <p className="font-sans text-[14px] text-neutral-300 leading-relaxed mt-4 relative z-10">
                  consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.
                </p>
              </motion.div>

              {/* Center Card (Active) */}
              <motion.div 
                variants={centerCardVariants}
                className="w-[340px] md:w-[480px] shrink-0 bg-white/5 border border-white/20 backdrop-blur-md rounded-[24px] p-8 relative overflow-hidden shadow-2xl z-20"
              >
                <span className="absolute top-4 right-8 text-[160px] leading-none font-serif text-white-[0.03] select-none text-[#2A2A2A]">❞</span>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 bg-neutral-600 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                     <span className="text-xs text-white">IMG</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-urbanist font-bold text-[22px] text-white leading-tight">Jayesh Patil</span>
                    <span className="font-sans text-[15px] text-neutral-400 mt-1">CEO. Lirante</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-5 relative z-10">
                  <div className="flex text-brand-orange text-xl">★★★★★</div>
                  <span className="font-urbanist font-bold text-white text-xl mt-1">5.0</span>
                </div>
                <p className="font-sans text-[15px] text-neutral-300 leading-relaxed mt-5 relative z-10">
                  consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.
                </p>
              </motion.div>

              {/* Right Card (Faded/Cut off) */}
              <motion.div 
                variants={cardVariants}
                className="w-[320px] md:w-[450px] shrink-0 bg-white/5 border border-white/10 backdrop-blur-md rounded-[24px] p-8 relative overflow-hidden hidden md:block"
              >
                <span className="absolute top-8 right-8 text-[140px] leading-none font-serif text-white/5 select-none">❞</span>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-neutral-600 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                     <span className="text-xs">IMG</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-urbanist font-bold text-[20px] text-white leading-tight">Jayesh Patil</span>
                    <span className="font-sans text-[14px] text-neutral-400 mt-1">CEO. Lirante</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-4 relative z-10">
                  <div className="flex text-brand-orange text-lg">★★★★★</div>
                  <span className="font-urbanist font-bold text-white text-lg mt-1">5.0</span>
                </div>
                <p className="font-sans text-[14px] text-neutral-300 leading-relaxed mt-4 relative z-10">
                  consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.
                </p>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Testimonials;
