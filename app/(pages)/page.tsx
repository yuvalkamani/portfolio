import { Landing } from "./_components/landing";
import { About } from "./_components/about";
import { Projects } from "./_components/projects";
import Experience from "./_components/experience";

export default function Home() {
  return (
    <div className="sm:max-h-screen max-h-fit snap-y snap-mandatory sm:overflow-y-scroll text-center no-scrollbar">
      <Landing />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
