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
import Header from "./component/header";

export default async function Home() {
  const testimonials = await client.fetch(`*[_type == "testimonial"]`);
  const projects = await client.fetch(`*[_type == "project"]`);
  const services = await client.fetch(`*[_type == "service"]`);
  const experiences = await client.fetch(`*[_type == "experience"]`);
  const blogs = await client.fetch(`*[_type == "blog"]`);
  const clientsData = await client.fetch(`*[_type == "client"]`);
  
  const siteSettingsArray = await client.fetch(`*[_type == "siteSettings"]`);
  const siteSettings = siteSettingsArray[0] || {};
  
  const heroArray = await client.fetch(`*[_type == "hero"]`);
  const heroData = heroArray[0] || {};

  return (
    <div className="bg-[#171717] min-h-screen overflow-x-hidden w-full">
      <Header />
      <Hero hero={heroData} />
      <Services services={services} />
      <Clients clients={clientsData} />
      <Experience experiences={experiences} />
      <Portfolio projects={projects} />
      <Testimonials testimonials={testimonials} />
      <Blog blogs={blogs} />
      <CTA siteSettings={siteSettings} />
      <Footer siteSettings={siteSettings} />
    </div>
  );
}
