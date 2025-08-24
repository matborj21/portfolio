import About from "@/components/about";
import Experience from "@/components/experience";
import HerorSection from "@/components/hero-section";
import Navbar from "@/components/Navbar";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="mx-5 my-5 flex-1">
      <HerorSection />
      <About />
      <Experience />
      <Projects />
    </main>
    </>
  );
}
