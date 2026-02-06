"use client";

import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingButtons from "@/components/FloatingButtons";

/* ═══════════════════════════════════════════
   SERVICES DATA
   ═══════════════════════════════════════════ */
const services = [
  { icon: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z", title: "Webdesign", text: "Individuell, performant & markenstark. Websites, die Vertrauen schaffen und Besucher in Kunden verwandeln." },
  { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", title: "SEO / SEA", text: "Sichtbarkeit, die messbar wirkt. Wir bringen Ihr Unternehmen auf Seite 1 — organisch und bezahlt." },
  { icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z", title: "Video & Film", text: "Emotionales Storytelling. Imagefilme, Produktvideos und Social-Content, die wirken." },
  { icon: "M14 2l-3 14 3 2 3-2-3-14zM7 14l3 2M17 14l-3 2M7 14L3 22h18l-4-8", title: "3D / CGI", text: "Visuelle Erlebnisse mit Tiefgang. 3D-Animationen und CGI für Produkte und Marken." },
  { icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z", title: "Social Media", text: "Reichweite mit Strategie. Community-Building, Content-Planung und Performance-Ads." },
  { icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", title: "Grafik & Print", text: "Design, das im Kopf bleibt. Logos, Flyer, Verpackungen — analog und digital." },
];

/* ═══════════════════════════════════════════
   PAIN / SOLUTION DATA
   ═══════════════════════════════════════════ */
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
  "Social Media mit Strategie — Reichweite, die zu Umsatz wird.",
];

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Header />
      <FloatingButtons />

      <main>
        {/* ════════════════════════════════════
            HERO SECTION
            ════════════════════════════════════ */}
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
          {/* BG gradients */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-neon/[0.04] blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-neon-dark/[0.03] blur-[100px]" />
          </div>

          {/* Video rabbit — blended into bg */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[10%] pointer-events-none">
            <div className="relative w-[55vw] h-[55vw] max-w-[650px] max-h-[650px]">
              <video autoPlay loop muted playsInline className="video-blend w-full h-full object-contain opacity-20 animate-float">
                <source src="/logo.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 rounded-full bg-neon/[0.03] blur-[80px] scale-75 animate-pulse-glow" />
            </div>
          </div>

          {/* Edge fades */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-deep via-dark-deep/40 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark-deep to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0 w-full">
            <div className="max-w-[560px]">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neon/10 bg-neon/[0.03] mb-10"
                style={{ animation: "fadeInUp 0.6s ease-out both" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse-glow" />
                <span className="text-neon/70 text-[11px] font-medium tracking-[0.2em] uppercase">
                  Digital Agentur — Franken
                </span>
              </div>

              {/* Heading */}
              <h1
                className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-extrabold leading-[1.08] tracking-tight mb-7"
                style={{ animation: "fadeInUp 0.7s ease-out 0.15s both" }}
              >
                <span className="text-light">Mehr Sichtbarkeit.</span>
                <br />
                <span className="text-light">Mehr Kunden.</span>
                <br />
                <span className="gradient-text" style={{ textShadow: "0 0 60px rgba(0,179,255,0.2)" }}>
                  Mehr Wirkung.
                </span>
              </h1>

              {/* Sub */}
              <p
                className="text-muted text-[16px] sm:text-[17px] leading-[1.75] max-w-[460px] mb-10"
                style={{ animation: "fadeInUp 0.7s ease-out 0.3s both" }}
              >
                Wir verbinden Technologie, Kreativität und regionale Identität — für Webauftritte, die Vertrauen schaffen und messbar Kunden bringen.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-wrap gap-4"
                style={{ animation: "fadeInUp 0.7s ease-out 0.45s both" }}
              >
                <a href="#contact" className="btn-primary px-7 py-3.5 sm:px-8 sm:py-4 text-[14px] sm:text-[15px]">
                  Kostenloses Erstgespräch
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M13 5l6 7-6 7" /></svg>
                </a>
                <a href="#services" className="btn-ghost px-7 py-3.5 sm:px-8 sm:py-4 text-[14px] sm:text-[15px]">
                  Leistungen
                </a>
              </div>

              {/* Trust */}
              <div
                className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-14"
                style={{ animation: "fadeInUp 0.7s ease-out 0.6s both" }}
              >
                {[
                  { text: "DSGVO-konform", d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
                  { text: "100% regional", d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" },
                  { text: "Schnell & transparent", d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
                ].map((t) => (
                  <span key={t.text} className="flex items-center gap-2 text-subtle text-[11px] tracking-wide">
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d={t.d} /></svg>
                    {t.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom stats bar */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10"
            style={{ animation: "fadeInUp 0.7s ease-out 0.75s both" }}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-8">
              <div className="grid grid-cols-3 gap-4 max-w-md">
                {[
                  { val: "10+", label: "Jahre Erfahrung" },
                  { val: "150+", label: "Projekte" },
                  { val: "100%", label: "Regional" },
                ].map((s) => (
                  <div key={s.label} className="text-center py-3 px-2 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.04]">
                    <div className="text-xl sm:text-2xl font-extrabold gradient-text">{s.val}</div>
                    <div className="text-subtle text-[10px] uppercase tracking-[0.12em] mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="neon-line" />

        {/* ════════════════════════════════════
            SERVICES SECTION
            ════════════════════════════════════ */}
        <section id="services" className="relative py-24 sm:py-32">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon/[0.02] blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-xl mb-14">
                <span className="text-neon text-[11px] font-semibold tracking-[0.25em] uppercase">Leistungen</span>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-light mt-3 mb-5 leading-[1.15]">
                  Alles aus einer Hand —{" "}
                  <span className="gradient-text">Strategie bis Umsetzung.</span>
                </h2>
                <p className="text-muted text-[15px] leading-relaxed">
                  Digitale Lösungen mit messbarem Ergebnis. Jede Leistung ist auf den Erfolg Ihres Unternehmens ausgerichtet.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 100}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.04] bg-dark-card/60 p-7 transition-all duration-500 hover:border-neon/15 hover:shadow-xl hover:shadow-neon/[0.03] hover:-translate-y-1">
                    {/* Glow on hover */}
                    <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-neon/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                    {/* Top line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div className="w-11 h-11 rounded-xl bg-neon/[0.06] border border-neon/[0.08] flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-neon/[0.12] group-hover:border-neon/20 group-hover:shadow-lg group-hover:shadow-neon/10">
                        <svg width="20" height="20" fill="none" stroke="#00b3ff" strokeWidth="1.5" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                      </div>
                      <h3 className="text-light text-[16px] font-bold mb-2 transition-colors duration-300 group-hover:text-neon-light">{s.title}</h3>
                      <p className="text-muted text-[13px] leading-[1.7]">{s.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="neon-line" />

        {/* ════════════════════════════════════
            PAIN → SOLUTION SECTION
            ════════════════════════════════════ */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon/[0.02] blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span className="text-neon text-[11px] font-semibold tracking-[0.25em] uppercase">Warum wir</span>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-light mt-3 mb-5 leading-[1.15]">
                  Kennen Sie das?
                </h2>
                <p className="text-muted text-[15px] max-w-lg mx-auto">
                  Viele Unternehmen kämpfen mit denselben digitalen Herausforderungen. Wir lösen sie — nachhaltig.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Pains */}
              <ScrollReveal delay={100}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-red/10 border border-red/15 flex items-center justify-center">
                      <svg width="14" height="14" fill="none" stroke="#ff2d55" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
                    </div>
                    <h3 className="text-red text-sm font-bold tracking-wide uppercase">Das Problem</h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    {pains.map((p, i) => (
                      <div key={i} className="group flex items-start gap-4 p-4 rounded-xl bg-red/[0.02] border border-red/[0.06] transition-all duration-300 hover:border-red/15 hover:bg-red/[0.04]">
                        <span className="w-6 h-6 rounded-md bg-red/10 flex items-center justify-center shrink-0 mt-0.5 text-red text-[11px] font-bold transition-all duration-300 group-hover:bg-red/20">{i + 1}</span>
                        <p className="text-muted text-[13px] leading-[1.7] transition-colors duration-300 group-hover:text-light/70">{p}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Solutions */}
              <ScrollReveal delay={250}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-neon/10 border border-neon/15 flex items-center justify-center">
                      <svg width="14" height="14" fill="none" stroke="#00b3ff" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7" /></svg>
                    </div>
                    <h3 className="text-neon text-sm font-bold tracking-wide uppercase">Unsere Lösung</h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    {solutions.map((s, i) => (
                      <div key={i} className="group flex items-start gap-4 p-4 rounded-xl bg-neon/[0.02] border border-neon/[0.06] transition-all duration-300 hover:border-neon/15 hover:bg-neon/[0.04]">
                        <span className="w-6 h-6 rounded-md bg-neon/10 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-neon/20">
                          <svg width="12" height="12" fill="none" stroke="#00b3ff" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7" /></svg>
                        </span>
                        <p className="text-muted text-[13px] leading-[1.7] transition-colors duration-300 group-hover:text-light/70">{s}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <div className="neon-line" />

        {/* ════════════════════════════════════
            ABOUT SECTION
            ════════════════════════════════════ */}
        <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              {/* Video side */}
              <ScrollReveal className="lg:w-[45%] shrink-0">
                <div className="relative max-w-sm mx-auto lg:mx-0">
                  {/* Decorative border */}
                  <div className="absolute -inset-3 rounded-2xl border border-neon/[0.06] pointer-events-none" />
                  <div className="absolute -inset-6 rounded-3xl border border-neon/[0.03] pointer-events-none" />

                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <video autoPlay loop muted playsInline className="video-blend w-full h-full object-contain scale-110">
                      <source src="/logo.mp4" type="video/mp4" />
                    </video>
                  </div>

                  {/* Glow */}
                  <div className="absolute -inset-12 bg-neon/[0.03] blur-[80px] rounded-full -z-10 animate-pulse-glow" />
                </div>
              </ScrollReveal>

              {/* Text side */}
              <ScrollReveal delay={200} className="flex-1">
                <span className="text-neon text-[11px] font-semibold tracking-[0.25em] uppercase">Über uns</span>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-light mt-3 mb-6 leading-[1.15]">
                  Digital & regional —{" "}
                  <span className="gradient-text">das ist Franken.</span>
                </h2>
                <p className="text-muted text-[15px] leading-[1.8] mb-5">
                  Digitales Franken ist mehr als eine Agentur — es ist ein kreatives Netzwerk für Unternehmen, die Digitalisierung ganzheitlich denken. Wir arbeiten ehrlich, transparent und mit klarem Fokus auf nachhaltige Ergebnisse.
                </p>
                <p className="text-muted text-[15px] leading-[1.8] mb-8">
                  Unser Stil: modern, reduziert, technisch präzise — kombiniert mit fränkischer Bodenständigkeit und Handschlagqualität.
                </p>

                {/* Targets */}
                <div className="flex flex-wrap gap-3">
                  {["KMU", "Startups", "Industrie", "Handwerk"].map((t) => (
                    <span key={t} className="px-4 py-2 rounded-xl text-[12px] font-medium text-neon/80 bg-neon/[0.04] border border-neon/[0.08] tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <div className="neon-line" />

        {/* ════════════════════════════════════
            CTA SECTION
            ════════════════════════════════════ */}
        <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
          {/* BG glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-neon/[0.03] blur-[130px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <ScrollReveal>
              <span className="text-neon text-[11px] font-semibold tracking-[0.25em] uppercase">Bereit?</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-light mt-3 mb-6 leading-[1.15]">
                Lassen Sie uns über Ihr{" "}
                <span className="gradient-text" style={{ textShadow: "0 0 40px rgba(0,179,255,0.15)" }}>
                  nächstes Projekt
                </span>{" "}
                sprechen.
              </h2>
              <p className="text-muted text-[15px] leading-relaxed max-w-md mx-auto mb-10">
                Ob Website-Relaunch, SEO-Offensive oder komplette digitale Strategie — wir finden die passende Lösung. Kostenlos und unverbindlich.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a href="mailto:info@franken-solution.de" className="btn-primary px-8 py-4 text-[15px]">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" /></svg>
                  Erstgespräch vereinbaren
                </a>
                <a href="tel:+4991131234567" className="btn-ghost px-8 py-4 text-[15px]">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                  Jetzt anrufen
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-subtle text-[11px] tracking-wide">
                {["Kostenlos & unverbindlich", "Antwort innerhalb 24h", "DSGVO-konform"].map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-neon/40"><circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" /></svg>
                    {t}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* ════════════════════════════════════
          FOOTER
          ════════════════════════════════════ */}
      <footer className="border-t border-white/[0.03] bg-dark-deep">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="leading-none mb-4">
                <span className="block text-red text-[9px] font-light italic tracking-[0.3em] mb-0.5">digitales</span>
                <span className="block gradient-text text-lg font-extrabold tracking-[0.12em]">FRANKEN</span>
              </div>
              <p className="text-subtle text-[13px] leading-relaxed max-w-xs">
                Digitale Full-Service Agentur aus Franken. Modern, regional, wirkungsvoll.
              </p>
            </div>

            {/* Nav */}
            <div>
              <h4 className="text-light/50 text-[11px] font-semibold uppercase tracking-[0.2em] mb-5">Navigation</h4>
              <ul className="flex flex-col gap-3">
                {["Home", "Leistungen", "Über uns", "Kontakt"].map((l) => (
                  <li key={l}><a href={`#${l === "Über uns" ? "about" : l === "Leistungen" ? "services" : l === "Kontakt" ? "contact" : "home"}`} className="text-subtle text-[13px] hover:text-light transition-colors duration-300">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact + Legal */}
            <div>
              <h4 className="text-light/50 text-[11px] font-semibold uppercase tracking-[0.2em] mb-5">Kontakt & Recht</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="mailto:info@franken-solution.de" className="text-subtle text-[13px] hover:text-light transition-colors">info@franken-solution.de</a></li>
                <li><a href="tel:+4991131234567" className="text-subtle text-[13px] hover:text-light transition-colors">+49 911 312 345 67</a></li>
                <li><a href="/impressum" className="text-subtle text-[13px] hover:text-light transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="text-subtle text-[13px] hover:text-light transition-colors">Datenschutz (DSGVO)</a></li>
              </ul>
            </div>
          </div>

          <div className="neon-line mb-6" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-subtle text-[11px] tracking-wide pb-14 lg:pb-0">
            <span>&copy; {new Date().getFullYear()} Digitales Franken. Alle Rechte vorbehalten.</span>
            <span className="flex items-center gap-1.5">
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              Franken, Deutschland
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
