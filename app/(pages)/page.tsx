import Landing from "./_components/landing";
import About from "./_components/about";
import Projects from "./_components/projects";
import Experience from "./_components/experience";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div className="max-w-screen">
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
