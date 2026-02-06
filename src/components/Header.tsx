"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Leistungen", href: "#services" },
  { label: "Über uns", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="topbar hidden md:block">
        <div className="max-w-7xl mx-auto px-8 flex justify-end items-center gap-8 h-9 text-xs tracking-wide">
          <a href="mailto:info@franken-solution.de" className="text-muted hover:text-blue transition-colors flex items-center gap-2">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13L2 4"/></svg>
            info@franken-solution.de
          </a>
          <a href="tel:+4991131234567" className="text-muted hover:text-blue transition-colors flex items-center gap-2">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            +49 911 312 345 67
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className={`glass-header sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg shadow-black/20" : ""}`}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                <video autoPlay loop muted playsInline className="video-blend w-full h-full object-cover scale-[1.8]">
                  <source src="/logo.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="leading-none">
                <span className="block text-red text-[10px] font-light italic tracking-[0.25em] mb-0.5">digitales</span>
                <span className="block gradient-text text-lg font-extrabold tracking-[0.12em]">FRANKEN</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {nav.map((n) => (
                <Link key={n.label} href={n.href} className="text-muted text-[13px] font-medium tracking-wide hover:text-light transition-colors duration-200">
                  {n.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <a href="#contact" className="hidden lg:inline-flex btn-primary px-6 py-2.5 text-[13px]">
              Projekt starten
            </a>

            {/* Mobile */}
            <button className="lg:hidden text-blue" onClick={() => setOpen(!open)} aria-label="Menü">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {open ? <path d="M6 6L18 18M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden px-8 pb-6 border-t border-white/5">
            <nav className="flex flex-col gap-4 pt-5">
              {nav.map((n) => (
                <Link key={n.label} href={n.href} className="text-muted text-sm hover:text-light transition-colors" onClick={() => setOpen(false)}>
                  {n.label}
                </Link>
              ))}
              <a href="#contact" className="btn-primary px-6 py-3 text-sm mt-2 text-center" onClick={() => setOpen(false)}>
                Projekt starten
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
