import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Analytics from "@/components/Analytics";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <Hero />
      <Stats />
      <Analytics />
      <Work />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
