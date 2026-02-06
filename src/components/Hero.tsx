"use client";

export default function Hero() {
  return (
    <section id="home" className="hero-bg relative min-h-screen flex items-center">
      {/* Background animated video — blended into the hero */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-blend w-[800px] h-[800px] object-contain opacity-30 animate-float"
        >
          <source src="/logo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay gradient to darken edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-dark-deep pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-transparent to-dark/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40 w-full">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue/20 bg-blue/5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-blue animate-pulse-glow" />
            <span className="text-blue text-xs font-semibold tracking-widest uppercase">
              Aus Franken, für Franken
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 animate-fade-in-up">
            <span className="text-light">Digitales</span>
            <br />
            <span className="text-blue text-glow">Franken</span>
          </h1>

          {/* Subline */}
          <p className="text-xl sm:text-2xl text-blue-light font-semibold mb-4 animate-fade-in-up delay-100">
            Mehr Sichtbarkeit. Mehr Kunden. Mehr Wirkung.
          </p>

          {/* Description */}
          <p className="text-muted text-lg leading-relaxed max-w-xl mb-10 animate-fade-in-up delay-200">
            Wir verbinden Technologie, Kreativität und regionale Identität. Moderne Weblösungen,
            visuelle Innovation und zukunftsorientiertes Marketing — direkt aus der Region.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
            <a href="#contact" className="btn-primary px-8 py-4 text-base">
              Kostenloses Erstgespräch
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#services" className="btn-outline px-8 py-4 text-base">
              Unsere Leistungen
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 mt-14 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2 text-subtle text-sm">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              DSGVO-konform
            </div>
            <div className="flex items-center gap-2 text-subtle text-sm">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              100% regional
            </div>
            <div className="flex items-center gap-2 text-subtle text-sm">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              Schnell & transparent
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
