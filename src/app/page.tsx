"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PainSolution from "@/components/PainSolution";
import About from "@/components/About";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="neon-line" />
        <Services />
        <div className="neon-line" />
        <PainSolution />
        <div className="neon-line" />
        <About />
        <div className="neon-line" />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
