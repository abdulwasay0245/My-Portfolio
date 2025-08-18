

import React from "react";
import { ExternalLink } from "lucide-react"; 

const projects = [
  {
    id: 1,
    title: "VRR Gaming (NEXTJS, TailwindCSS, TS)",
    img: "/projectImg/gamingmockup.png",
    link: "https://games-website-hazel.vercel.app/",
  },
  {
    id: 2,
    title: "Resume Craft AI Agent(NextJS, FastAPI, TypeScript)",
    img: "/projectImg/AiAgent.png",
    link: "https://resumecraft-pearl.vercel.app/",
  },
  {
    id: 3,
    title: "Comforty E-Commerce (NextJS, TailwindCSS, TS)",
    img: "/projectImg/hackathon.png",
    link: "https://hackathon2-giaic.vercel.app/",
  },
  {
    id: 4,
    title: "Food Wagon (NextJS, TailwindCSS, TS)",
    img: "/img4.jpg",
    link: "https://food-wagon-sepia.vercel.app/",
  },
  {
    id: 5,
    title: "FullStack Anonymous Message App (NextJS, React-Hook-Form, TS,MongoDB,Resend Email)",
    img: "/img5.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Website Coding (HTML, CSS, JS)",
    img: "/img6.jpg",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="project" className="bg-[#0d0d14] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-orange text-xl uppercase text-center font-bold tracking-widest mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#14141f] rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-400/40 transition-shadow duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex justify-between items-center">
                <h3 className="text-white text-sm">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-400 transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
