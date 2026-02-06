export default function CtaSection() {
  return (
    <section id="contact" className="section-alt relative py-28 lg:py-36 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
        <span className="text-blue text-[11px] font-semibold tracking-[0.25em] uppercase">Bereit?</span>
        <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold text-light mt-3 mb-6 leading-tight">
          Lassen Sie uns über Ihr<br />
          <span className="gradient-text text-glow">nächstes Projekt</span> sprechen.
        </h2>
        <p className="text-muted text-[16px] leading-relaxed max-w-lg mx-auto mb-12">
          Ob Website-Relaunch, SEO-Offensive oder komplette digitale Strategie — wir finden die passende Lösung. Kostenlos und unverbindlich.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a href="mailto:info@franken-solution.de" className="btn-primary px-10 py-4 text-[15px]">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13L2 4"/></svg>
            Erstgespräch vereinbaren
          </a>
          <a href="tel:+4991131234567" className="btn-ghost px-10 py-4 text-[15px]">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            Jetzt anrufen
          </a>
        </div>

        {/* Trust */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-subtle text-[12px] tracking-wide">
          {["Kostenlos & unverbindlich", "Antwort innerhalb 24h", "DSGVO-konform"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-blue/50"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
