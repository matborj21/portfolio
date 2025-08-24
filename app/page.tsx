import About from "@/components/about";
import HerorSection from "@/components/hero-section";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="mx-5 my-5 flex-1">
      <HerorSection />
      <About />
    </main>
    </>
  );
}
