import LandingPage from "@/components/LandingPage";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Extras from "@/components/Extras";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      {/* <Extras /> */}
    </div>
  );
}
