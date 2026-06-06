import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import BeforeAfter from "@/components/BeforeAfter";
import ContentStrategy from "@/components/ContentStrategy";
import Analytics from "@/components/Analytics";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Services />
      <CaseStudies />
      <BeforeAfter />
      <ContentStrategy />
      <Analytics />
      <Testimonials />
      <Contact />
    </>
  );
}
