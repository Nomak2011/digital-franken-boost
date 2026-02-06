"use client";

export default function Hero() {
  return (
    <section id="home" className="hero-bg min-h-[100vh] flex items-center relative overflow-hidden">
      {/* ── Background video ── */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <div className="relative w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] mr-[-5%] mt-[-5%]">
          <video
            autoPlay loop muted playsInline
            className="video-blend w-full h-full object-contain opacity-25 anim-float"
          >
            <source src="/logo.mp4" type="video/mp4" />
          </video>
          {/* Glow behind video */}
          <div className="absolute inset-0 bg-blue/[0.03] blur-[80px] rounded-full scale-75 anim-glow" />
        </div>
      </div>

      {/* ── Edge fades ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-deep via-transparent to-dark-deep/90 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-deep to-transparent pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 lg:py-0 w-full">
        <div className="max-w-[580px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue/15 bg-blue/[0.04] mb-10 anim-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-blue anim-glow" />
            <span className="text-blue/80 text-[11px] font-medium tracking-[0.2em] uppercase">Digital Agentur aus Franken</span>
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight mb-7 anim-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-light">Mehr Sichtbarkeit.</span>
            <br />
            <span className="text-light">Mehr Kunden.</span>
            <br />
            <span className="gradient-text text-glow">Mehr Wirkung.</span>
          </h1>

          {/* Sub */}
          <p className="text-muted text-[17px] leading-[1.7] max-w-[480px] mb-10 anim-fade-up" style={{ animationDelay: "0.2s" }}>
            Wir verbinden Technologie, Kreativität und regionale Identität — für Webauftritte, die Vertrauen schaffen und Kunden bringen.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 anim-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#contact" className="btn-primary px-8 py-4 text-[15px]">
              Kostenloses Erstgespräch
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M13 5l6 7-6 7"/></svg>
            </a>
            <a href="#services" className="btn-ghost px-8 py-4 text-[15px]">
              Leistungen entdecken
            </a>
          </div>

          {/* Trust */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-16 anim-fade-up" style={{ animationDelay: "0.45s" }}>
            {[
              { label: "DSGVO-konform", d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
              { label: "100% regional", d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 10m-3 0a3 3 0 116 0 3 3 0 01-6 0" },
              { label: "Schnell & transparent", d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
            ].map((t) => (
              <span key={t.label} className="flex items-center gap-2 text-subtle text-[12px] tracking-wide">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d={t.d}/></svg>
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
