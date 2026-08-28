'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '@/lib/sanity.client';

import Image from 'next/image';

export default function Testimonials({ testimonials = [] }: { testimonials?: any[] }) {
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
      transition: { type: "spring" as any, stiffness: 60, damping: 15 }
    }
  };

  const centerCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring" as any, stiffness: 60, damping: 15 }
    }
  };

  // Fallback to defaults if Sanity is empty
  const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials : [
    {
      _id: '1',
      name: 'Jayesh Patil',
      role: 'CEO. Lirante',
      rating: 5.0,
      text: 'consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.',
    },
    {
      _id: '2',
      name: 'Sarah Jenkins',
      role: 'CTO, TechNova',
      rating: 5.0,
      text: 'Abdul completely transformed our workflow. His expertise in agentic AI and workflow automation saved us countless hours of manual work. Highly recommended for any complex project!',
    },
    {
      _id: '3',
      name: 'Michael Chen',
      role: 'Founder, Cinetstox',
      rating: 4.8,
      text: 'The best developer I have ever worked with. Delivered our project ahead of schedule with flawless execution and pixel-perfect design matching our Figma files.',
    }
  ];

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
            transition={{ type: "spring" as any, stiffness: 60, damping: 20 }}
            className="font-urbanist font-medium text-[48px] md:text-[56px] text-white text-center leading-[1.15] relative"
          >
            Testimonials That<br />
            Speak to <span className="text-brand-orange">My Results</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="font-sans text-neutral-300 text-center max-w-[700px] mt-6 text-[15px] leading-relaxed"
          >
            Don't just take my word for it. Here is what my clients and colleagues have to say about my work, dedication, and the results we achieved together.
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
              
              {displayTestimonials.map((testimonial: any, idx: number) => {
                const isActive = idx === 1; // Highlight the middle one for layout effect
                const variant = isActive ? centerCardVariants : cardVariants;
                
                return (
                  <motion.div 
                    key={testimonial._id || idx}
                    variants={variant}
                    className={`shrink-0 bg-white/5 border backdrop-blur-md rounded-[24px] p-8 relative overflow-hidden ${
                      isActive 
                        ? 'w-[340px] md:w-[480px] border-white/20 shadow-2xl z-20' 
                        : 'w-[320px] md:w-[450px] border-white/10 hidden md:block opacity-50'
                    }`}
                  >
                    <span className={`absolute right-8 leading-none font-serif select-none ${isActive ? 'top-4 text-[160px] text-white-[0.03] text-[#2A2A2A]' : 'top-8 text-[140px] text-white/5'}`}>❞</span>
                    
                    <div className="flex items-center gap-4 relative z-10">
                      <div className={`relative rounded-full overflow-hidden flex items-center justify-center shrink-0 bg-neutral-600 ${isActive ? 'w-14 h-14' : 'w-12 h-12'}`}>
                        {testimonial.image ? (
                          <Image src={urlFor(testimonial.image).width(100).height(100).url()} alt={testimonial.name} fill className="object-cover" />
                        ) : (
                          <span className={`text-xs text-white font-bold`}>{testimonial.name?.charAt(0) || 'U'}</span>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className={`font-urbanist font-bold text-white leading-tight ${isActive ? 'text-[22px]' : 'text-[20px]'}`}>{testimonial.name}</span>
                        <span className={`font-sans text-neutral-400 mt-1 ${isActive ? 'text-[15px]' : 'text-[14px]'}`}>{testimonial.role}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mt-5 relative z-10">
                      <div className={`flex text-brand-orange ${isActive ? 'text-xl' : 'text-lg'}`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={i < Math.floor(testimonial.rating || 5) ? 'text-brand-orange' : 'text-neutral-600'}>★</span>
                        ))}
                      </div>
                      <span className={`font-urbanist font-bold text-white mt-1 ${isActive ? 'text-xl' : 'text-lg'}`}>{testimonial.rating || '5.0'}</span>
                    </div>

                    <p className={`font-sans text-neutral-300 leading-relaxed relative z-10 ${isActive ? 'mt-5 text-[15px]' : 'mt-4 text-[14px] line-clamp-4'}`}>
                      {testimonial.text}
                    </p>
                  </motion.div>
                );
              })}

            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
