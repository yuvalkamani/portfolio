import Navbar from "./_components/nav";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-bdo font-light">
      <Navbar />
      <main className="px-10 pb-10">{children}</main>
    </div>
  );
}
