'use client'
import { Contact } from "./component/Contact";
import Hero from "./component/hero";
import Project from "./component/Project";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


export default function Home() {
  
  return (
    <div>
      
      <Hero />
      <Project />
      <Contact />
      
  
   </div>
  );
}
