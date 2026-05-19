import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Background3D from "@/components/Background3D";

export const metadata: Metadata = {
  title: "KnowXtra | Global Capacity Development",
  description: "Raising your profile to global standards through human capacity development, conferences, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="pristine-bg" />
        <div className="subtle-grain" />
        <div className="holographic-spine" />
        <Background3D />
        <Navigation />
        <main style={{ paddingTop: "80px", paddingLeft: "16px", flex: 1, position: 'relative', zIndex: 1, perspective: '2500px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
