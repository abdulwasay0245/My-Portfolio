'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    }
  };

  return (
    <footer className="w-full bg-white pt-12" id="contact">
      <div className="w-full bg-[#282828] rounded-t-[40px] px-8 md:px-16 py-16 flex flex-col gap-12">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="font-urbanist font-bold text-[48px] md:text-[56px] text-white leading-tight"
          >
            Lets Connect there
          </motion.h2>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="bg-brand-orange text-white font-sans font-medium text-lg px-8 py-3.5 rounded-full hover:bg-brand-orangeDark transition-colors flex items-center gap-2"
          >
            Hire me <span className="font-light text-xl leading-none mb-0.5">↗</span>
          </motion.button>
        </div>

        {/* Separator */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-px bg-white/10 origin-left"
        ></motion.div>

        {/* Middle Section - 4 Columns */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8"
        >
          
          {/* Column 1: Logo & Info */}
          <motion.div variants={itemVariants} className="md:col-span-12 lg:col-span-5 flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold font-sans">
                JC
              </div>
              <span className="font-urbanist font-bold text-2xl text-white tracking-wide">
                JCREA
              </span>
            </div>
            {/* Description */}
            <p className="font-sans text-[15px] text-neutral-300 leading-relaxed max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <motion.a whileHover={{ y: -3 }} href="#" className="w-6 h-6 text-white hover:text-brand-orange transition-colors"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg></motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="w-6 h-6 text-white hover:text-brand-orange transition-colors"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg></motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="w-6 h-6 text-white hover:text-brand-orange transition-colors"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-6h2v1.1c.36-.6 1.2-1.2 2-1.2 1.66 0 3 1.34 3 3v4.9z"/></svg></motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="w-6 h-6 text-white hover:text-brand-orange transition-colors"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.94 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10zM12 20a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-12H8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-4 7a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm2.5-4a1 1 0 1 1-1-1 1 1 0 0 1 1 1z"/></svg></motion.a>
            </div>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div variants={itemVariants} className="md:col-span-4 lg:col-span-2 flex flex-col gap-5">
            <h3 className="font-urbanist font-bold text-brand-orange text-lg">Navigation</h3>
            <div className="flex flex-col gap-4 mt-2">
              <a href="#" className="font-sans text-[15px] text-white hover:text-brand-orange transition-colors">Home</a>
              <a href="#" className="font-sans text-[15px] text-white hover:text-brand-orange transition-colors">About Us</a>
              <a href="#" className="font-sans text-[15px] text-white hover:text-brand-orange transition-colors">Service</a>
              <a href="#" className="font-sans text-[15px] text-white hover:text-brand-orange transition-colors">Resume</a>
              <a href="#" className="font-sans text-[15px] text-white hover:text-brand-orange transition-colors">Project</a>
            </div>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div variants={itemVariants} className="md:col-span-4 lg:col-span-2 flex flex-col gap-5">
            <h3 className="font-urbanist font-bold text-brand-orange text-lg">Contact</h3>
            <div className="flex flex-col gap-4 mt-2">
              <a href="tel:+917738443636" className="font-sans text-[15px] text-white hover:text-brand-orange transition-colors">+91 7738443636</a>
              <a href="mailto:Jaycrea36@gmail.com" className="font-sans text-[15px] text-white hover:text-brand-orange transition-colors">Jaycrea36@gmail.com</a>
              <a href="https://Portfolio-jcrea.com" className="font-sans text-[15px] text-white hover:text-brand-orange transition-colors">Portfolio-jcrea.com</a>
            </div>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div variants={itemVariants} className="md:col-span-4 lg:col-span-3 flex flex-col gap-5">
            <h3 className="font-urbanist font-bold text-brand-orange text-lg">Get the latest information</h3>
            <div className="w-full bg-white rounded-full p-1.5 flex mt-2 h-12">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent text-neutral-800 text-sm px-4 outline-none flex-1 font-sans placeholder:text-neutral-500"
              />
              <button className="bg-brand-orange text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-brand-orangeDark transition-colors shrink-0">
                 <span className="text-lg leading-none">➤</span>
              </button>
            </div>
          </motion.div>

        </motion.div>

        {/* Separator */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-px bg-white/10 mt-4 origin-left"
        ></motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-sans text-neutral-300"
        >
          <p>Copyright© 2026 Jayesh. All Rights Reserved.</p>
          <div className="flex gap-1">
            <a href="#" className="hover:text-white transition-colors">User Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
