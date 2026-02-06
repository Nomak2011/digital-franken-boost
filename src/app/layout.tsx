import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digitales Franken – Mehr Kunden. Mehr Sichtbarkeit. Mehr Wirkung.",
  description:
    "Digitale Full-Service Agentur aus Franken. Webdesign, SEO/SEA, Video, 3D Animation, Social Media und mehr.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
