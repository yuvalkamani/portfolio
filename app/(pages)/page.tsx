import Navbar from "./_components/nav";
import Landing from "./_components/landing";

export default function Home() {
  return (
    <div className="dark:bg-black bg-white overflow-hidden">
      <Navbar />
      <Landing />
      <div className="h-screen w-screen"></div>
      <div className="h-screen w-screen"></div>
    </div>
  );
}
