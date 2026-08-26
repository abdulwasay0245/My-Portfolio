import Hero from "./component/hero";
import Clients from "./component/Clients";
import Testimonials from "./component/Testimonials";
import Experience from "./component/Experience";
import Services from "./component/Services";
import Portfolio from "./component/Portfolio";
import Blog from "./component/Blog";
import CTA from "./component/CTA";
import { Footer } from "./component/Contact";
import { client } from "@/lib/sanity.client";

export default async function Home() {
  const testimonials = await client.fetch(`*[_type == "testimonial"]`);
  const projects = await client.fetch(`*[_type == "project"]`);
  const services = await client.fetch(`*[_type == "service"]`);

  return (
    <div className="bg-[#171717] min-h-screen overflow-x-hidden w-full">
      <Hero />
      <Services services={services} />
      <Clients />
      <Experience />
      <Portfolio projects={projects} />
      <Testimonials testimonials={testimonials} />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}
