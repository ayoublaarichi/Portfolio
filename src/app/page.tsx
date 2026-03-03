/**
 * Page d'accueil du portfolio — Assemble toutes les sections.
 * Pour modifier le contenu, édite le fichier src/data/portfolio.ts
 */
import BackgroundWrapper from "@/components/BackgroundWrapper";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundWrapper />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
