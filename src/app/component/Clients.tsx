'use client';
import React from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import { urlFor } from '@/lib/sanity.client';

const Clients = ({ clients = [] }: { clients?: any[] }) => {
  const defaultClients = [
    { name: "Mana fragrances", style: "font-serif italic text-[#2A3240]" ,
      src: "/clients/mf-logo.webp"
    },
    { name: "Dynamo Fitness GYM", style: "font-serif italic text-[#2A3240]" ,
      src: "/clients/dynamo.jpg"
    },
     { name: "5D Revive", style: "font-serif italic text-[#2A3240]" ,
      src: "/clients/5drevive.jpg"
    },
    { name: "Orgafresh", style: "font-serif italic text-[#2A3240]" ,
      src: "/clients/orgafresh.jpeg"
    },
      { name: "Versatile", style: "font-serif italic text-[#2A3240]" ,
      src: "/clients/versatile.jfif"
    },
     { name: "Mana fragrances", style: "font-serif italic text-[#2A3240]" ,
      src: "/clients/mf-logo.webp"
    },
    { name: "Dynamo Fitness GYM", style: "font-serif italic text-[#2A3240]" ,
      src: "/clients/dynamo.jpg"
    }
  ];

  const displayClients = clients && clients.length > 0 ? clients : defaultClients;

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
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex items-center whitespace-nowrap animate-marquee">
              {[...displayClients, ...displayClients, ...displayClients].map((client: any, idx: number) => (
                <div key={client._id ? `${client._id}-${idx}` : idx} className="flex items-center hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer mx-10 md:mx-16 relative w-[120px] h-[60px] md:h-[80px]">
                  {client.logo ? (
                    <Image src={urlFor(client.logo).url()} alt={client.name} fill className="object-contain" />
                  ) : client.src ? (
                    <Image src={client.src} alt={client.name} fill className="object-contain" />
                  ) : (
                    <span className={`text-[28px] md:text-[34px] ${client.style || 'font-serif italic text-[#2A3240]'}`}>
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
