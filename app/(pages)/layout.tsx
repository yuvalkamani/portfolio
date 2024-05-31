export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="font-bdo no-scrollbar">{children}</div>;
}
