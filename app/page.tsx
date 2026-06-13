import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Infra from "@/components/sections/Infra";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-fg">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Infra />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
