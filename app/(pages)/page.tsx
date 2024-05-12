import { Landing } from "./_components/landing";
import { About } from "./_components/about";

export default function Home() {
  return (
    <div className="max-h-screen max-w-screen snap-y snap-mandatory overflow-y-scroll text-center">
      <Landing />
      {/* <About /> */}
    </div>
  );
}
