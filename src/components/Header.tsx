"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Leistungen", href: "#services" },
  { label: "Über uns", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

export default function Header() {
  const [s, setS] = useState(false);
  const [m, setM] = useState(false);

  useEffect(() => {
    const fn = () => setS(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = m ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [m]);

  return (
    <>
      {/* Topbar */}
      <div className="relative z-50 overflow-hidden transition-all duration-500" style={{ maxHeight: s ? 0 : 36, opacity: s ? 0 : 1 }}>
        <div className="border-b border-white/[0.03]" style={{ background: "rgba(5,20,32,0.8)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-end items-center h-9 gap-6 text-[11px] text-muted tracking-wide">
            <a href="mailto:info@franken-solution.de" className="hidden sm:flex items-center gap-2 hover:text-neon transition-colors">
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
              info@franken-solution.de
            </a>
            <a href="tel:+4991131234567" className="flex items-center gap-2 hover:text-neon transition-colors">
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              +49 911 312 345 67
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${s ? "glass-header-scrolled" : "glass-header"}`} style={{ padding: s ? "2px 0" : 0, borderRadius: s ? "0 0 14px 14px" : 0 }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between" style={{ height: s ? 60 : 68 }}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-lg transition-all duration-500" style={{ width: s ? 32 : 40, height: s ? 32 : 40 }}>
              <video autoPlay loop muted playsInline className="video-blend w-full h-full object-cover scale-[2.2]">
                <source src="/logo.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="leading-none">
              <span className="block text-red text-[9px] font-light italic tracking-[0.3em] mb-0.5">digitales</span>
              <span className="block gradient-text font-extrabold tracking-[0.14em] transition-all duration-500" style={{ fontSize: s ? 14 : 17 }}>FRANKEN</span>
            </div>
          </a>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-9">
            {links.map(l => (
              <a key={l.label} href={l.href} className="relative text-muted text-[13px] font-medium tracking-wider hover:text-light transition-colors duration-300 group/l">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-neon to-neon-light rounded-full transition-all duration-300 group-hover/l:w-full" />
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden lg:inline-flex btn-neon text-[12px] transition-all duration-500" style={{ padding: s ? "7px 18px" : "9px 22px" }}>
            Projekt starten
          </a>

          {/* Burger */}
          <button className="lg:hidden relative z-[60] w-10 h-10 flex items-center justify-center" onClick={() => setM(!m)} aria-label="Menü">
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-[1.5px] bg-neon rounded-full transition-all duration-300 origin-center ${m ? "rotate-45 translate-y-[4.5px]" : ""}`} />
              <span className={`h-[1.5px] bg-neon rounded-full transition-all duration-300 ${m ? "opacity-0 scale-0" : ""}`} />
              <span className={`h-[1.5px] bg-neon rounded-full transition-all duration-300 origin-center ${m ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${m ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setM(false)} />

      {/* Mobile panel */}
      <div className={`fixed top-0 right-0 z-50 h-full w-[280px] transition-transform duration-500 ease-out lg:hidden ${m ? "translate-x-0" : "translate-x-full"}`} style={{ background: "rgba(7,27,38,0.97)", backdropFilter: "blur(40px)", borderLeft: "1px solid rgba(0,179,255,0.06)" }}>
        <div className="pt-24 px-8">
          <nav className="flex flex-col gap-5">
            {links.map((l, i) => (
              <a key={l.label} href={l.href} onClick={() => setM(false)} className="text-light/80 text-lg font-medium tracking-wider hover:text-neon transition-all duration-300" style={{ opacity: m ? 1 : 0, transform: m ? "translateX(0)" : "translateX(20px)", transitionDelay: m ? `${i * 70 + 150}ms` : "0ms", transition: "all 0.4s ease" }}>
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" onClick={() => setM(false)} className="btn-neon w-full py-3 text-sm mt-8 text-center" style={{ opacity: m ? 1 : 0, transform: m ? "translateY(0)" : "translateY(10px)", transitionDelay: m ? "500ms" : "0ms", transition: "all 0.4s ease" }}>
            Projekt starten
          </a>
        </div>
      </div>
    </>
  );
}
