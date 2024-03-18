import LandingPage from "@/components/LandingPage";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Extras from "@/components/Extras";

export default function Home() {
  return (
    <div>
      <div className="max-h-screen max-w-screen snap-mandatory snap-y overflow-y-scroll">
        <LandingPage />
        <AboutMe />
        <Education />
        <Experience />
        <Projects />
        <Extras />
      </div>
    </div>
  );
}
