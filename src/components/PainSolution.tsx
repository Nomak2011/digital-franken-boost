const pains = [
  {
    icon: "😟",
    text: "Ihre Website sieht veraltet aus und schreckt potenzielle Kunden ab.",
  },
  {
    icon: "📉",
    text: "Sie investieren in Werbung, aber es kommen keine Anfragen.",
  },
  {
    icon: "🔍",
    text: "Bei Google werden nur Ihre Mitbewerber gefunden — nicht Sie.",
  },
  {
    icon: "😐",
    text: "Social Media kostet Zeit, bringt aber kein messbares Ergebnis.",
  },
];

const solutions = [
  {
    icon: "🚀",
    text: "Modernes Webdesign, das Vertrauen schafft und Besucher zu Kunden macht.",
  },
  {
    icon: "📊",
    text: "Datengetriebenes Marketing mit messbaren Ergebnissen und klarem ROI.",
  },
  {
    icon: "🏆",
    text: "SEO-Strategien, die Sie dauerhaft auf Seite 1 bringen.",
  },
  {
    icon: "🎯",
    text: "Social Media mit Strategie — Reichweite, die zu Umsatz wird.",
  },
];

export default function PainSolution() {
  return (
    <section className="section-darker py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue text-sm font-semibold tracking-widest uppercase">
            Warum wir
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-light mt-3 mb-5">
            Kennen Sie das?
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Viele Unternehmen in Franken kämpfen mit denselben digitalen Herausforderungen.
            Wir lösen sie — nachhaltig.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Pain */}
          <div>
            <h3 className="text-red text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red/50" />
              Das Problem
            </h3>
            <div className="flex flex-col gap-4">
              {pains.map((p, i) => (
                <div key={i} className="pain-card px-6 py-5 flex items-start gap-4">
                  <span className="text-2xl shrink-0">{p.icon}</span>
                  <p className="text-muted text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-blue text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue/50" />
              Unsere Lösung
            </h3>
            <div className="flex flex-col gap-4">
              {solutions.map((s, i) => (
                <div key={i} className="solution-card px-6 py-5 flex items-start gap-4">
                  <span className="text-2xl shrink-0">{s.icon}</span>
                  <p className="text-muted text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
