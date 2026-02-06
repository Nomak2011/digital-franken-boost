"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "REFERENZEN", href: "#referenzen" },
  { label: "ÜBER FD", href: "#ueber" },
  { label: "FAQs", href: "#faqs" },
  { label: "KONTAKT", href: "#kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="glass-header fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="text-cyan text-glow-cyan">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Geometric wireframe fox/wolf — matches koncept logo */}
                <path
                  d="M8 40L16 8L24 20L32 8L40 40H8Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M16 8L24 28L32 8"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M12 32L24 20L36 32"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                />
                <circle cx="20" cy="28" r="1.5" fill="currentColor" />
                <circle cx="28" cy="28" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-red-accent text-xs font-light italic tracking-wider">
                digitales
              </span>
              <span className="text-cyan text-xl font-bold tracking-widest uppercase text-glow-cyan">
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
                className="text-text-secondary text-sm font-medium tracking-wide hover:text-cyan transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="mailto:info@digitales-franken.de"
              className="btn-outline-cyan px-5 py-2 text-sm flex items-center gap-2"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
              E MAIL
            </a>
            <a
              href="tel:+49123456789"
              className="btn-cyan px-5 py-2 text-sm flex items-center gap-2"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              TEL
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden text-cyan"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path d="M6 6L18 18M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-header border-t border-cyan-border/20 px-4 pb-6">
          <nav className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-text-secondary text-sm font-medium tracking-wide hover:text-cyan transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-3 mt-6">
            <a
              href="mailto:info@digitales-franken.de"
              className="btn-outline-cyan px-4 py-2 text-sm flex items-center gap-2"
            >
              E MAIL
            </a>
            <a
              href="tel:+49123456789"
              className="btn-cyan px-4 py-2 text-sm flex items-center gap-2"
            >
              TEL
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
