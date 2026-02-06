const services = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Webdesign",
    desc: "Individuell, performant & markenstark. Websites, die nicht nur gut aussehen — sondern verkaufen.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M8 11h6M11 8v6" />
      </svg>
    ),
    title: "SEO / SEA",
    desc: "Sichtbarkeit, die messbar wirkt. Organisch und bezahlt — wir bringen Sie auf Seite 1.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <polygon points="23,7 16,12 23,17" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    title: "Video & Film",
    desc: "Storytelling für digitale Kanäle. Imagefilme, Produktvideos und Social-Content.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "3D / CGI",
    desc: "Visuelle Erlebnisse mit Tiefgang. 3D-Animationen und CGI für Produkte und Marken.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
    title: "Social Media",
    desc: "Reichweite mit Strategie. Community-Building, Content-Planung und Ads-Management.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    title: "Grafik & Print",
    desc: "Design, das im Kopf bleibt. Logos, Flyer, Verpackungen — analog und digital.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-blue text-sm font-semibold tracking-widest uppercase">
            Was wir bieten
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-light mt-3 mb-5">
            Unsere Leistungen
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Alles aus einer Hand — von der Strategie bis zur Umsetzung.
            Digital & regional, immer mit Fokus auf Ihren Erfolg.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`glass-card p-8 flex flex-col gap-5 opacity-0 animate-fade-in-up delay-${(i + 1) * 100}`}
            >
              <div className="text-blue">{s.icon}</div>
              <h3 className="text-xl font-bold text-light">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
