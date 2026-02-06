export default function CtaSection() {
  return (
    <section id="contact" className="section-darker relative py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-blue/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-blue text-sm font-semibold tracking-widest uppercase">
          Bereit loszulegen?
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold text-light mt-3 mb-6">
          Lassen Sie uns über Ihr
          <br />
          <span className="text-blue text-glow">nächstes Projekt</span> sprechen
        </h2>
        <p className="text-muted text-lg max-w-2xl mx-auto mb-10">
          Ob Website-Relaunch, SEO-Offensive oder komplette digitale Strategie —
          wir finden die richtige Lösung für Sie. Kostenlos und unverbindlich.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:info@franken-solution.de"
            className="btn-primary px-10 py-4 text-base"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13L2 4" />
            </svg>
            Erstgespräch vereinbaren
          </a>
          <a
            href="tel:+4991131234567"
            className="btn-outline px-10 py-4 text-base"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Jetzt anrufen
          </a>
        </div>

        {/* Trust line */}
        <div className="flex flex-wrap justify-center gap-8 text-subtle text-sm">
          <span className="flex items-center gap-2">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" />
            </svg>
            Kostenlos & unverbindlich
          </span>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
            Antwort innerhalb 24h
          </span>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            DSGVO-konform
          </span>
        </div>
      </div>
    </section>
  );
}
