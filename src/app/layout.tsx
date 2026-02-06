import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digitales Franken – Mehr Sichtbarkeit. Mehr Kunden. Mehr Wirkung.",
  description:
    "Digitale Full-Service Agentur aus Franken. Webdesign, SEO, Video, 3D, Social Media – modern, regional, wirkungsvoll.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
