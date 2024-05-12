import { Landing } from "./_components/landing";
import { About } from "./_components/about";

export default function Home() {
  return (
    <div className="max-h-screen snap-y snap-mandatory scroll-smooth overflow-y-scroll text-center no-scrollbar">
      <Landing />
      <About />
    </div>
  );
}
