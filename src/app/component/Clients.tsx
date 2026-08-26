'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    { name: "Mana fragrances", style: "font-serif italic text-[#2A3240]" ,
      src: "/clients/mf-logo.webp"
    },
    { name: "Dynamo Fitness GYM", style: "font-serif italic text-[#2A3240]" ,
      src: "/clients/dynamo.jpg"
    },
     { name: "Dynamo Fitness GYM", style: "font-serif italic text-[#2A3240]" ,
      src: "/clients/5drevive.jpg"
    },
    { name: "Dynamo Fitness GYM", style: "font-serif italic text-[#2A3240]" ,
      src: "/clients/orgafresh.jpeg"
    },
      { name: "Dynamo Fitness GYM", style: "font-serif italic text-[#2A3240]" ,
      src: "/clients/versatile.jfif"
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 border-b border-neutral-100 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 z-10 relative">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring" as any, stiffness: 60, damping: 20 }}
          className="flex-shrink-0 text-center md:text-left z-20 bg-white md:pr-4"
        >
          <p className="text-sm font-urbanist font-semibold text-neutral-400 uppercase tracking-widest">Trusted By</p>
          <p className="text-xl font-urbanist font-bold text-[#2A3240] mt-1">Awesome Clients</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full relative overflow-hidden flex items-center"
        >
            {/* Fade gradients for edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex items-center whitespace-nowrap animate-marquee">
              {/* Repeat array for seamless looping (3 sets is 300%, moving -33.33% loops 1 set) */}
              {[...clients].map((client, idx) => (
                <div key={idx} className="flex items-center hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer mx-10 md:mx-16">
                  {client.src ? (
                    <img 
                      src={client.src} 
                      alt={client.name} 
                      className="h-[80px] w-auto object-contain" 
                    />
                  ) : (
                    <span className={`text-[28px] md:text-[34px] ${client.style}`}>
                      {client.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Clients;
