const services = [
  {
    d: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
    title: "Webdesign",
    text: "Individuell, performant & markenstark. Websites, die verkaufen.",
  },
  {
    d: "M10 21l-2-2m2 2l2-2m-2 2V3m0 0L8 5m2-2l2 2M3 10h18M3 14h18",
    title: "SEO / SEA",
    text: "Sichtbarkeit, die messbar wirkt — organisch und bezahlt.",
  },
  {
    d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8h12v8H3z",
    title: "Video & Film",
    text: "Storytelling für digitale Kanäle. Image- und Produktfilme.",
  },
  {
    d: "M14 2l-3 14 3 2 3-2-3-14zM7 14l3 2M17 14l-3 2M7 14L3 22h18l-4-8",
    title: "3D / CGI",
    text: "Visuelle Erlebnisse mit Tiefgang. Produkt- und Marken-3D.",
  },
  {
    d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z",
    title: "Social Media",
    text: "Reichweite mit Strategie — Community und Ads-Management.",
  },
  {
    d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    title: "Grafik & Print",
    text: "Design, das im Kopf bleibt. Logos, Flyer, Verpackungen.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-blue text-[11px] font-semibold tracking-[0.25em] uppercase">Leistungen</span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-light mt-3 mb-5 leading-tight">
            Alles aus einer Hand —<br />
            <span className="gradient-text">Strategie bis Umsetzung.</span>
          </h2>
          <p className="text-muted text-[16px] leading-relaxed">
            Digitale Lösungen, die Ihren Umsatz steigern. Jede Leistung zielt auf messbaren Erfolg.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="glass-card p-7 group">
              <div className="icon-circle mb-5">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-blue">
                  <path d={s.d} />
                </svg>
              </div>
              <h3 className="text-light text-[17px] font-bold mb-2.5">{s.title}</h3>
              <p className="text-muted text-[14px] leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
