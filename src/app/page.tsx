import About from "@/components/About";
import Certificates from "@/components/Certificates";
import CircuitBackground from "@/components/CircuitBackground";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Preloader />
      <CircuitBackground />
      <Navbar />
      <main className="relative flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
