import Landing from "./_components/landing";
import About from "./_components/about";
import Projects from "./_components/projects";

export default function Home() {
  return (
    <div className="max-w-screen">
      <Landing />
      <About />
      <Projects />
    </div>
  );
}
