"use client";

import { useState, useEffect } from "react";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Leistungen", href: "#services" },
  { label: "Über uns", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Topbar ── */}
      <div
        className="relative z-50 transition-all duration-500"
        style={{
          maxHeight: scrolled ? 0 : 40,
          opacity: scrolled ? 0 : 1,
          overflow: "hidden",
        }}
      >
        <div className="bg-dark-deep/90 border-b border-white/[0.03]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-end items-center h-10 gap-6 text-xs text-muted">
            <a href="mailto:info@franken-solution.de" className="hidden sm:flex items-center gap-2 hover:text-neon transition-colors duration-300">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
              info@franken-solution.de
            </a>
            <a href="tel:+4991131234567" className="flex items-center gap-2 hover:text-neon transition-colors duration-300">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              +49 911 312 345 67
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header
        className="sticky top-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(6,10,19,0.97)" : "rgba(6,10,19,0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(0,179,255,0.06)" : "1px solid transparent",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.25), 0 0 60px rgba(0,179,255,0.03)" : "none",
          padding: scrolled ? "4px 0" : "0",
          borderRadius: scrolled ? "0 0 16px 16px" : "0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div
              className="relative overflow-hidden rounded-lg transition-all duration-500"
              style={{ width: scrolled ? 36 : 42, height: scrolled ? 36 : 42 }}
            >
              <video autoPlay loop muted playsInline className="video-blend w-full h-full object-cover scale-[2]">
                <source src="/logo.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="leading-none">
              <span className="block text-red text-[9px] font-light italic tracking-[0.3em] mb-0.5 transition-all duration-500" style={{ fontSize: scrolled ? 8 : 9 }}>digitales</span>
              <span className="block gradient-text font-extrabold tracking-[0.12em] transition-all duration-500" style={{ fontSize: scrolled ? 15 : 18 }}>FRANKEN</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="relative text-muted text-[13px] font-medium tracking-wide hover:text-light transition-colors duration-300 group/link"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-neon rounded-full transition-all duration-300 group-hover/link:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex btn-primary text-[13px] transition-all duration-500"
            style={{ padding: scrolled ? "8px 20px" : "10px 24px" }}
          >
            Projekt starten
          </a>

          {/* Burger */}
          <button className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü">
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-[2px] bg-neon rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`h-[2px] bg-neon rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : ""}`} />
              <span className={`h-[2px] bg-neon rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
            </div>
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── Mobile Menu Panel ── */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-dark/95 backdrop-blur-xl border-l border-neon/5 transition-transform duration-500 ease-out lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="pt-24 px-8">
          <nav className="flex flex-col gap-6">
            {nav.map((n, i) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="text-light text-lg font-medium tracking-wide hover:text-neon transition-all duration-300"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(20px)",
                  transitionDelay: menuOpen ? `${i * 60 + 200}ms` : "0ms",
                }}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary w-full py-3 text-sm mt-10 text-center"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(10px)",
              transitionDelay: menuOpen ? "500ms" : "0ms",
              transition: "all 0.4s ease",
            }}
          >
            Projekt starten
          </a>
        </div>
      </div>
    </>
  );
}
