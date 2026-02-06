const pains = [
  "Ihre Website sieht veraltet aus und schreckt potenzielle Kunden ab.",
  "Sie investieren in Werbung — aber es kommen keine Anfragen.",
  "Bei Google werden nur Ihre Mitbewerber gefunden.",
  "Social Media kostet Zeit, bringt aber kein messbares Ergebnis.",
];

const solutions = [
  "Modernes Webdesign, das Vertrauen schafft und Besucher zu Kunden macht.",
  "Datengetriebenes Marketing mit messbarem ROI und klaren Ergebnissen.",
  "SEO-Strategien, die Sie dauerhaft auf Seite 1 bringen.",
  "Social Media mit Strategie — Reichweite, die Umsatz bringt.",
];

export default function PainSolution() {
  return (
    <section className="section-alt py-28 lg:py-36 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue text-[11px] font-semibold tracking-[0.25em] uppercase">Warum wir</span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-light mt-3 mb-5 leading-tight">
            Kennen Sie das?
          </h2>
          <p className="text-muted text-[16px] max-w-xl mx-auto">
            Viele Unternehmen kämpfen mit denselben digitalen Herausforderungen. Wir lösen sie — nachhaltig.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Pain */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-red/10 border border-red/20 flex items-center justify-center">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-red"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </div>
              <h3 className="text-red text-sm font-bold tracking-wide uppercase">Das Problem</h3>
            </div>
            <div className="flex flex-col gap-4">
              {pains.map((p, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-red/[0.03] border border-red/[0.08] transition-all duration-300 hover:border-red/20">
                  <span className="w-6 h-6 rounded-md bg-red/10 flex items-center justify-center shrink-0 mt-0.5 text-red text-xs font-bold">{i + 1}</span>
                  <p className="text-muted text-[14px] leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-blue/10 border border-blue/20 flex items-center justify-center">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-blue"><path d="M5 12l5 5L20 7"/></svg>
              </div>
              <h3 className="text-blue text-sm font-bold tracking-wide uppercase">Unsere Lösung</h3>
            </div>
            <div className="flex flex-col gap-4">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-blue/[0.03] border border-blue/[0.08] transition-all duration-300 hover:border-blue/20">
                  <span className="w-6 h-6 rounded-md bg-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="text-blue"><path d="M5 12l5 5L20 7"/></svg>
                  </span>
                  <p className="text-muted text-[14px] leading-relaxed">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
