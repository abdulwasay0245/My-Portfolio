

import React from "react";
import { ExternalLink } from "lucide-react"; 

const projects = [
  {
    id: 1,
    title: "VRR Gaming (NEXTJS, TailwindCSS, TS)",
    img: "/projectimg/gamingmockup.png",
    link: "#",
  },
  {
    id: 2,
    title: "Website Coding (HTML, CSS, JS)",
    img: "/img2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Website Coding (HTML, CSS, JS)",
    img: "/img3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Website Coding (HTML, CSS, JS)",
    img: "/img4.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Website Coding (HTML, CSS, JS)",
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
    <section className="bg-[#0d0d14] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-pink-400 text-xl uppercase font-bold tracking-widest mb-10">
          Portfolio
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
