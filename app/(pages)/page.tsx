import { Landing } from "./_components/landing";
import { About } from "./_components/about";

export default function Home() {
  return (
    <div className="max-h-screen snap-y snap-mandatory scroll-smooth sm:overflow-y-scroll overflow-auto text-center no-scrollbar">
      <Landing />
      <About />
    </div>
  );
}
