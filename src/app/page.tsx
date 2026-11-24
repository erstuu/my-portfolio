import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactBand from "@/components/ImpactBand";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// The one-page homepage, sections in the order visitors read them.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImpactBand />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
