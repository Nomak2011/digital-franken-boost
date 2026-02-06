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
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <PainSolution />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
