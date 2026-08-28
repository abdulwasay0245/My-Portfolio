'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, AppWindow, GitMerge, LayoutDashboard, Workflow, Globe } from 'lucide-react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity.client';

export default function Services({ services = [] }: { services?: any[] }) {
  const defaultServices = [
    { title: "Web Development", description: "Modern, responsive, and high-performance websites built with cutting-edge technologies." },
    { title: "AI Integration", description: "Intelligent AI solutions embedded directly into your workflows to automate and scale." },
    { title: "Landing Page", description: "High-converting landing pages designed to capture leads and drive business growth." },
    { title: "Automation", description: "End-to-end workflow automation to eliminate manual tasks and save you time." },
    { title: "Dashboard", description: "Custom analytics and admin dashboards for visualizing data and managing systems." },
    { title: "Workflow", description: "Optimized operational workflows tailored to your team's specific needs and processes." }
  ];

  const displayServices = services && services.length > 0 ? services : defaultServices;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring" as any, 
        stiffness: 80, 
        damping: 15 
      }
    }
  };

  const getIcon = (title: string) => {
    const lowerTitle = (title || '').toLowerCase();
    if (lowerTitle.includes('web')) return AppWindow;
    if (lowerTitle.includes('ai') || lowerTitle.includes('artificial')) return Bot;
    if (lowerTitle.includes('landing')) return LayoutDashboard;
    if (lowerTitle.includes('auto')) return GitMerge;
    if (lowerTitle.includes('dash')) return Code;
    if (lowerTitle.includes('work')) return Workflow;
    return Globe;
  };

  return (
    <section className="w-full bg-[#111111] py-24 md:py-32 relative overflow-hidden" id="services">
      {/* Abstract Background Wavy Shapes Placeholder */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring" as any, stiffness: 60, damping: 20 }}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
        >
          {displayServices.map((service: any, idx: number) => {
            const IconComponent = getIcon(service.title);
            return (
              <motion.div 
                key={service._id || idx} 
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 flex flex-col relative group overflow-hidden transition-all duration-300 hover:border-brand-orange/30 hover:bg-white/10"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                
                <div className="relative z-10 flex justify-between items-start mb-6">
                  {service.image ? (
                    <div className="w-14 h-14 rounded-2xl overflow-hidden relative border border-white/10">
                       <Image src={urlFor(service.image).url()} alt={service.title} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-orange border border-white/10 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg">
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                  )}
                  <span className="text-white/10 font-urbanist text-5xl font-light select-none group-hover:text-white/20 transition-colors duration-300">
                    {`0${idx + 1}`}
                  </span>
                </div>

                <div className="relative z-10 flex-grow">
                  <h3 className="text-2xl text-white font-urbanist font-medium mb-3 group-hover:text-brand-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {service.description || service.summary || "Transforming ideas into scalable, efficient, and robust solutions tailored to your unique requirements."}
                  </p>
                </div>
                
                <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                  <a href={service.link || '#'} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/70 font-medium text-sm hover:text-brand-orange transition-colors group/btn">
                    Learn more 
                  </a>
                  <a href={service.link || '#'} target="_blank" rel="noreferrer">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-brand-orange transition-colors duration-300">
                      <svg className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
