import { useEffect } from "react";
import { useLenis } from "@/hooks/useLenis";
import SEO from "@/components/ui/SEO";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
// Open Source section is built but not wired in — no data in the resume yet.
// import OpenSource from "@/components/sections/OpenSource";

export default function App() {
  useLenis();

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <SEO />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {/* <OpenSource /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
