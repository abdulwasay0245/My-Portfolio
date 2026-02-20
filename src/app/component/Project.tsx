
import React from "react";
import { ExternalLink, Github, Terminal, Sparkles, Layers } from "lucide-react"; 
import { roboto } from '../fonts/fonts';

const projects = [
  {
    id: 1,
    title: "VRR Gaming",
    tech: ["Next.js", "TailwindCSS", "TS"],
    img: "/projectImg/gamingmockup.png",
    link: "https://games-website-hazel.vercel.app/",
    description: "A high-performance gaming platform built for seamless user experience and dynamic content delivery."
  },
  {
    id: 2,
    title: "Resume Craft AI Agent",
    tech: ["Next.js", "FastAPI", "TS"],
    img: "/projectImg/AiAgent.png",
    link: "https://resumecraft-pearl.vercel.app/",
    description: "Intelligent resume builder leveraging AI to optimize professional profiles and streamline applications."
  },
  {
    id: 3,
    title: "Comforty E-Commerce",
    tech: ["Next.js", "TailwindCSS", "TS"],
    img: "/projectImg/hackathon.png",
    link: "https://hackathon2-giaic.vercel.app/",
    description: "A modern e-commerce storefront with optimized performance and user-centric design patterns."
  },
  {
    id: 4,
    title: "Food Wagon",
    tech: ["Next.js", "TailwindCSS", "TS"],
    img: "/img4.jpg",
    link: "https://food-wagon-sepia.vercel.app/",
    description: "Feature-rich food delivery application featuring real-time tracking and intuitive ordering flows."
  },
  {
    id: 5,
    title: "Anonymous Message App",
    tech: ["Next.js", "MongoDB", "Resend"],
    img: "/img5.jpg",
    link: "#",
    description: "Secure, privacy-focused messaging platform with encrypted communication and anonymous interactions."
  },
  {
    id: 6,
    title: "Website Coding",
    tech: ["HTML", "CSS", "JS"],
    img: "/img6.jpg",
    link: "#",
    description: "A foundational showcase of clean code architecture and responsive web design principles."
  },
];

export default function Portfolio() {
  return (
    <section id="project" className="w-full py-32 px-6 relative overflow-hidden bg-background">
      {/* Futuristic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-orange/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-24" data-aos="fade-up">
            <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-orange/50"></div>
                <h2 className="text-orange text-xs font-bold tracking-[0.3em] uppercase">Digital Chronicles</h2>
                <div className="h-px w-8 bg-orange/50"></div>
            </div>
            <h3 className={`text-4xl md:text-6xl font-black text-white text-center mb-6 ${roboto.className}`}>
                Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange via-white to-orange">Works</span>
            </h3>
            <p className="text-gray-400 max-w-2xl text-center text-lg font-light leading-relaxed">
                Exploring the intersection of code and creativity through high-performance digital solutions.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative h-full flex flex-col"
            >
              {/* Card Container */}
              <div className="relative flex flex-col h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 group-hover:border-orange/40 group-hover:bg-white/[0.05] group-hover:-translate-y-3 group-hover:shadow-[0_20px_50px_rgba(248,201,112,0.15)]">
                
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10"></div>
                  
                  {/* Glass Header Info */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    {project.tech.slice(0, 2).map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/80">
                            {t}
                        </span>
                    ))}
                  </div>

                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-orange text-black rounded-2xl transform scale-75 group-hover:scale-100 transition-all duration-500 hover:bg-white flex items-center gap-2 font-bold text-sm"
                    >
                      Explore Project <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                        <Terminal size={14} className="text-orange/60" />
                        <span className="text-orange/80 text-[10px] font-bold tracking-[0.2em] uppercase">Core Architecture</span>
                    </div>
                    
                    <h3 className={`text-2xl font-bold text-white mb-4 group-hover:text-orange transition-colors duration-300 ${roboto.className}`}>
                        {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                        {project.description}
                    </p>

                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-6 uppercase tracking-tighter">
                            {project.tech.map((t, i) => (
                                <span key={i} className="text-[10px] text-gray-500 flex items-center gap-1">
                                    <span className="w-1 h-1 bg-orange/40 rounded-full"></span>
                                    {t}
                                </span>
                            ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                            <div className="flex items-center gap-2 text-white/40 text-xs group-hover:text-orange transition-colors">
                                <Sparkles size={14} />
                                <span className="font-medium">Modern UI</span>
                            </div>
                            <div className="flex gap-4">
                                <Github size={18} className="text-white/20 hover:text-white cursor-pointer transition-colors" />
                                <ExternalLink size={18} className="text-white/20 hover:text-white cursor-pointer transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cyberpunk Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute bottom-1 right-1 w-1 h-3 bg-orange opacity-40"></div>
                <div className="absolute bottom-1 right-1 w-3 h-1 bg-orange opacity-40"></div>
              </div>

              {/* Glowing Background Effect on Hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange/20 to-purple-600/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-10"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-20" data-aos="fade-up">
            <button className="group relative px-10 py-4 bg-transparent border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange/50">
                <span className="relative z-10 text-white font-bold tracking-widest uppercase text-xs flex items-center gap-3">
                    Inquire More Artifacts <Layers size={16} className="text-orange" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
        </div>
      </div>
    </section>
  );
}
