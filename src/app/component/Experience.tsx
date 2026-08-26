'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      company: "Freelance, Hybrid",
      date: "Jan 2023- Feb 2025",
      role: "AI Creative Technologist",
      desc: "Produced AI-driven marketing campaigns, leveraging generative AI to create compelling content and visuals that enhanced brand engagement and customer acquisition.",
      color: "orange"
    },
    {
      company: "Freelance, Remote",
      date: "Feb 2025- Present",
      role: "Full Stack Developer",
      desc: "Developed and maintained web applications using React, Node.js, and MongoDB, implementing responsive designs and optimizing performance for a seamless user experience.",
      color: "dark"
    },
    {
      company: "MAJU, Karachi",
      date: "July 2026- Sept 2026",
      role: "SQA and Automation Intern",
      desc: "Conducted software quality assurance testing and developed automated test scripts to ensure the reliability and functionality of web applications, contributing to improved product quality.",
      color: "orange"
    },
   
  ];

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden" id="experience">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring" as any, stiffness: 60, damping: 20 }}
          className="font-urbanist font-bold text-[48px] md:text-[56px] text-center mb-24"
        >
          <span className="text-[#2A3240]">My </span>
          <span className="text-brand-orange">Work Experience</span>
        </motion.h2>
        
        <div className="relative w-full max-w-[900px] mx-auto">
          {/* Center Dashed Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 top-4 w-0 border-r-2 border-dashed border-neutral-400 -translate-x-[1px]"
          ></motion.div>

          <div className="flex flex-col gap-16">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring" as any, stiffness: 50, damping: 15, delay: idx * 0.2 }}
                className="relative flex items-center justify-between w-full"
              >
                
                {/* Left Side (Company & Date) */}
                <div className="w-[45%] text-right pr-8">
                  <h3 className="font-urbanist font-bold text-[28px] text-[#2A3240]">
                    {exp.company}
                  </h3>
                  <p className="font-sans text-[18px] text-[#8C94A3] mt-2">
                    {exp.date}
                  </p>
                </div>
                
                {/* Center Timeline Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring" as any, stiffness: 200, damping: 10, delay: 0.3 + (idx * 0.2) }}
                  className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center bg-white z-10 w-[36px] h-[36px] rounded-full border border-dashed border-[#2A3240]"
                >
                   <div className={`w-[20px] h-[20px] rounded-full ${exp.color === 'orange' ? 'bg-brand-orange' : 'bg-[#2A3240]'}`}></div>
                </motion.div>

                {/* Right Side (Role & Description) */}
                <div className="w-[45%] text-left pl-8">
                  <h3 className="font-urbanist font-bold text-[28px] text-[#2A3240]">
                    {exp.role}
                  </h3>
                  {exp.desc && (
                    <p className="font-sans text-[15px] text-[#8C94A3] mt-3 leading-relaxed max-w-[400px]">
                      {exp.desc}
                    </p>
                  )}
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
