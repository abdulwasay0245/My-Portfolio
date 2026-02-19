
import React from "react";
import { ExternalLink, Github } from "lucide-react"; 

const projects = [
  {
    id: 1,
    title: "VRR Gaming",
    tech: "Next.js • TailwindCSS • TS",
    img: "/projectImg/gamingmockup.png",
    link: "https://games-website-hazel.vercel.app/",
  },
  {
    id: 2,
    title: "Resume Craft AI Agent",
    tech: "Next.js • FastAPI • TS",
    img: "/projectImg/AiAgent.png",
    link: "https://resumecraft-pearl.vercel.app/",
  },
  {
    id: 3,
    title: "Comforty E-Commerce",
    tech: "Next.js • TailwindCSS • TS",
    img: "/projectImg/hackathon.png",
    link: "https://hackathon2-giaic.vercel.app/",
  },
  {
    id: 4,
    title: "Food Wagon",
    tech: "Next.js • TailwindCSS • TS",
    img: "/img4.jpg",
    link: "https://food-wagon-sepia.vercel.app/",
  },
  {
    id: 5,
    title: "Anonymous Message App",
    tech: "Next.js • MongoDB • Resend",
    img: "/img5.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Website Coding",
    tech: "HTML • CSS • JS",
    img: "/img6.jpg",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="project" className="w-full py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
            <h2 className="text-orange text-sm font-bold tracking-[0.2em] uppercase mb-2">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white text-center">Featured Projects</h3>
            <div className="w-24 h-1 bg-orange mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#14141f]/50 border border-white/5 rounded-2xl overflow-hidden hover:border-orange/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange/10 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14141f] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-orange text-white rounded-full flex items-center justify-center hover:bg-white hover:text-orange transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-orange text-xs font-semibold tracking-wider mb-2">{project.tech}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-orange transition-colors duration-300 mb-2">{project.title}</h3>
                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="text-gray-400 text-sm">View Project</span>
                    <ExternalLink size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
