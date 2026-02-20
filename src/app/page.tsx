'use client'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Contact } from "./component/Contact";
import Hero from "./component/hero";
import Project from "./component/Project";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div>
      <Hero />
      <Project />
      <Contact />
   </div>
  );
}
