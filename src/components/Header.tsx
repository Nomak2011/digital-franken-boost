"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Leistungen", href: "#services" },
  { label: "Über uns", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kontakt", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Top Bar ── */}
      <div className="topbar">
        <div className="max-w-7xl mx-auto px-6 flex justify-end items-center gap-6 h-10 text-sm">
          <a
            href="mailto:info@franken-solution.de"
            className="text-blue hover:text-blue-light transition-colors flex items-center gap-2"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13L2 4" />
            </svg>
            info@franken-solution.de
          </a>
          <a
            href="tel:+4991131234567"
            className="text-blue hover:text-blue-light transition-colors flex items-center gap-2"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +49 911 312 345 67
          </a>
        </div>
      </div>

      {/* ── Sticky Header ── */}
      <header className="glass-header sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-dark-deep flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="video-blend w-full h-full object-cover scale-150"
                >
                  <source src="/logo.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-red text-[11px] font-light italic tracking-[0.2em]">
                  digitales
                </span>
                <span className="text-blue text-xl font-bold tracking-[0.15em] text-glow">
                  FRANKEN
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-muted text-sm font-medium tracking-wide hover:text-blue transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="#contact" className="btn-primary px-6 py-2.5 text-sm">
                Erstgespräch buchen
              </a>
            </div>

            {/* Mobile burger */}
            <button
              className="lg:hidden text-blue p-2"
              onClick={() => setOpen(!open)}
              aria-label="Menü öffnen"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {open ? (
                  <path d="M6 6L18 18M6 18L18 6" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-blue/10 px-6 pb-6 bg-dark/95 backdrop-blur-xl">
            <nav className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-muted text-base font-medium hover:text-blue transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a href="#contact" className="btn-primary px-6 py-3 text-sm mt-6 w-full text-center">
              Erstgespräch buchen
            </a>
          </div>
        )}
      </header>
    </>
  );
}
