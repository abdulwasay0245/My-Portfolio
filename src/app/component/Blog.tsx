'use client';
import React from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import { urlFor } from '@/lib/sanity.client';

export default function Blog({ blogs = [] }: { blogs?: any[] }) {
  const defaultBlogs = [
    {
      category: "UI/ UX Design",
      author: "Jayesh Patil",
      date: "10 Nov, 2023",
      title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
      bgColor: "bg-[#8E90DC]",
      imagePlaceholder: "Music App UI"
    },
    {
      category: "App Design",
      author: "Jayesh Patil",
      date: "09 Oct, 2023",
      title: "Sugee: Loan Management System for Rural Sector.",
      bgColor: "bg-[#188B57]",
      imagePlaceholder: "Dashboard UI"
    },
    {
      category: "App Design",
      author: "Jayesh Patil",
      date: "13 Aug, 2023",
      title: "Cinetrade: Innovative way to invest in Digital Media",
      bgColor: "bg-[#F3B306]",
      imagePlaceholder: "Mobile App UI"
    }
  ];

  const displayBlogs = blogs && blogs.length > 0 ? blogs : defaultBlogs;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { type: "spring" as any, stiffness: 70, damping: 15 }
    }
  };

  return (
    <section className="w-full bg-white py-24" id="blog">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring" as any, stiffness: 60, damping: 20 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
        >
          <h2 className="font-urbanist font-bold text-[48px] md:text-[56px] text-[#2A3240] leading-[1.1]">
            From my<br />
            blog post
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-orange text-white font-sans font-semibold px-8 py-3 rounded-full hover:bg-brand-orangeDark transition-colors"
          >
            See All
          </motion.button>
        </motion.div>

        {/* Blog Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {displayBlogs.map((blog: any, idx: number) => (
            <motion.div 
              key={blog._id || idx} 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring" as any, stiffness: 300, damping: 20 }}
              className="flex flex-col gap-6 group cursor-pointer"
            >
              
              {/* Image Container */}
              <div className="relative w-full aspect-square rounded-[32px] overflow-hidden shadow-sm bg-neutral-100">
                 {/* Solid Color Background based on screenshot */}
                 <motion.div 
                   whileHover={{ scale: 1.05 }}
                   transition={{ type: "spring" as any, stiffness: 100, damping: 15 }}
                   className={`absolute inset-0 ${blog.bgColor || 'bg-[#8E90DC]'} flex items-center justify-center`}
                 >
                    {blog.image ? (
                      <Image src={urlFor(blog.image).url()} alt={blog.title} fill className="object-cover" />
                    ) : (
                      <>
                        {/* Abstract Shapes to mimic the screenshot UI */}
                        <div className="w-[80%] h-[80%] border-4 border-white/20 rounded-full blur-[2px]"></div>
                        <span className="absolute text-white/90 font-urbanist font-bold text-3xl drop-shadow-md z-10 text-center px-4">{blog.imagePlaceholder || "Blog Image"}</span>
                      </>
                    )}
                 </motion.div>
                 
                 {/* The Cutout Corner (Apple Notch style) */}
                 {/* 1. Main white wrapper holding the button */}
                 <div className="absolute bottom-0 right-0 w-[100px] h-[100px] bg-white rounded-tl-[48px] z-10 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring" as any, stiffness: 400, damping: 10 }}
                      className="w-[72px] h-[72px] bg-[#1A1F2C] text-white hover:bg-brand-orange rounded-full flex items-center justify-center shadow-inner cursor-pointer"
                    >
                        <span className="text-2xl font-light leading-none mb-0.5">↗</span>
                    </motion.div>
                 </div>

                 {/* 2. Left flaring fillet */}
                 <div className="absolute bottom-0 right-[100px] w-[24px] h-[24px] bg-transparent rounded-br-[24px] shadow-[12px_12px_0_12px_white] z-10"></div>

                 {/* 3. Top flaring fillet */}
                 <div className="absolute bottom-[100px] right-0 w-[24px] h-[24px] bg-transparent rounded-br-[24px] shadow-[12px_12px_0_12px_white] z-10"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 mt-2">
                {/* Tag */}
                <div className="bg-[#F3F4F6] text-[#4B5563] font-sans text-sm font-medium px-5 py-2 rounded-full w-max">
                  {blog.category}
                </div>
                
                {/* Meta */}
                <div className="flex items-center gap-4 text-[#8C94A3] font-sans text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                    {blog.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                    {blog.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-urbanist font-semibold text-[24px] md:text-[26px] text-[#2A3240] leading-snug group-hover:text-brand-orange transition-colors">
                  {blog.title}
                </h3>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
