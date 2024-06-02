import Navbar from "./_components/nav";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-bdo overflow-hidden">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
