import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bdo = localFont({
  src: [{ path: "../public/fonts/BDOGrotesk-VF.woff2" }],
  variable: "--font-bdo",
});

export const metadata: Metadata = {
  title: "Yuval Kamani",
  description: "SE & Mathematician",
  icons: { icon: "/1.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bdo.variable}>{children}</body>
    </html>
  );
}
