import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}
