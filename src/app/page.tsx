'use client'
import Hero from "./component/hero";
import Clients from "./component/Clients";
import Testimonials from "./component/Teams";
import Experience from "./component/Experience";
import Services from "./component/Services";
import Portfolio from "./component/Portfolio";
import Blog from "./component/Blog";
import CTA from "./component/CTA";
import { Footer } from "./component/Contact";

export default function Home() {
  return (
    <div className="bg-[#171717] min-h-screen overflow-x-hidden w-full">
      <Hero />
      <Services />
      <Clients />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}
