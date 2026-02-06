"use client";

import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingButtons from "@/components/FloatingButtons";

/* ═══ Data ═══ */
const services = [
  { icon: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z", title: "Webdesign", text: "Individuell, performant & markenstark. Websites, die Vertrauen schaffen und Besucher in Kunden verwandeln." },
  { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", title: "SEO / SEA", text: "Sichtbarkeit, die messbar wirkt. Wir bringen Sie dauerhaft auf Seite 1 — organisch und bezahlt." },
  { icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z", title: "Video & Film", text: "Emotionales Storytelling für digitale Kanäle. Imagefilme, Produktvideos, Social-Content." },
  { icon: "M14 2l-3 14 3 2 3-2-3-14zM7 14l3 2M17 14l-3 2M7 14L3 22h18l-4-8", title: "3D / CGI", text: "Visuelle Erlebnisse mit Tiefgang. 3D-Animationen und CGI für Produkte und Marken." },
  { icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z", title: "Social Media", text: "Reichweite mit Strategie. Community-Building, Content-Planung und Performance-Ads." },
  { icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", title: "Grafik & Print", text: "Design, das im Kopf bleibt. Logos, Flyer, Verpackungen — analog und digital." },
];

const pains = [
  "Ihre Website sieht veraltet aus und schreckt Kunden ab.",
  "Sie investieren in Werbung — aber es kommen keine Anfragen.",
  "Bei Google werden nur Ihre Mitbewerber gefunden.",
  "Social Media kostet Zeit, bringt aber keinen Umsatz.",
];
const solutions = [
  "Modernes Webdesign, das Vertrauen schafft und konvertiert.",
  "Datengetriebenes Marketing mit messbarem ROI.",
  "SEO-Strategien, die Sie dauerhaft auf Seite 1 bringen.",
  "Social Media mit Strategie — Reichweite, die verkauft.",
];

export default function Home() {
  return (
    <>
      {/* ═══ Animated BG Orbs ═══ */}
      <div className="bg-orbs" />
      <div className="orb-3" />

      <Header />
      <FloatingButtons />

      <main className="relative z-10">

        {/* ══════════════════════════════════════
            HERO — 100vh, video centered
            ══════════════════════════════════════ */}
        <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* Video — centered, large, blended */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <video
              autoPlay loop muted playsInline
              className="video-blend w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] object-contain opacity-30 animate-float"
            >
              <source src="/logo.mp4" type="video/mp4" />
            </video>
            {/* Glow behind video */}
            <div className="absolute w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-neon/[0.04] blur-[120px] animate-pulse-neon" />
          </div>

          {/* Edge fades */}
          <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-dark to-transparent pointer-events-none" />

          {/* Content — on top of video */}
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass mb-10 animate-border-glow"
              style={{ animation: "fadeInUp 0.7s ease-out 0.1s both, borderGlow 3s ease-in-out infinite" }}
            >
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse-neon" />
              <span className="text-neon/80 text-[11px] font-semibold tracking-[0.25em] uppercase">Digital Agentur — Franken</span>
            </div>

            {/* Headline */}
            <h1
              className="text-[clamp(2.2rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight mb-7"
              style={{ animation: "fadeInUp 0.8s ease-out 0.25s both" }}
            >
              <span className="text-light">Mehr Sichtbarkeit.</span>
              <br />
              <span className="text-light">Mehr Kunden.</span>
              <br />
              <span className="gradient-text text-glow-neon">Mehr Wirkung.</span>
            </h1>

            {/* Sub */}
            <p
              className="text-muted text-[16px] sm:text-[18px] leading-[1.8] max-w-lg mx-auto mb-10"
              style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
            >
              Technologie, Kreativität und regionale Identität — für Webauftritte, die Vertrauen schaffen und messbar Kunden bringen.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center" style={{ animation: "fadeInUp 0.8s ease-out 0.55s both" }}>
              <a href="#contact" className="btn-neon px-8 py-4 text-[15px]">
                Kostenloses Erstgespräch
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M13 5l6 7-6 7"/></svg>
              </a>
              <a href="#services" className="btn-glass px-8 py-4 text-[15px]">
                Leistungen entdecken
              </a>
            </div>
          </div>

          {/* Bottom stats */}
          <div className="absolute bottom-8 left-0 right-0 z-10" style={{ animation: "fadeInUp 0.8s ease-out 0.7s both" }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex justify-center gap-4 sm:gap-6">
                {[
                  { val: "10+", label: "Jahre Erfahrung" },
                  { val: "150+", label: "Projekte" },
                  { val: "100%", label: "Regional" },
                ].map(st => (
                  <div key={st.label} className="glass text-center px-5 py-3 sm:px-8 sm:py-4 min-w-[100px]">
                    <div className="text-xl sm:text-2xl font-extrabold gradient-text">{st.val}</div>
                    <div className="text-subtle text-[9px] sm:text-[10px] uppercase tracking-[0.15em] mt-0.5">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="neon-line" />

        {/* ══════════════════════════════════════
            SERVICES
            ══════════════════════════════════════ */}
        <section id="services" className="relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-neon text-[11px] font-semibold tracking-[0.3em] uppercase">Leistungen</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light mt-4 mb-5 leading-[1.1]">
                  Alles aus einer Hand —<br />
                  <span className="gradient-text">Strategie bis Umsetzung.</span>
                </h2>
                <p className="text-muted text-[15px] sm:text-[16px] leading-relaxed">
                  Digitale Lösungen mit messbarem Ergebnis. Jede Leistung zielt auf den Erfolg Ihres Unternehmens.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((sv, i) => (
                <ScrollReveal key={sv.title} delay={i * 80}>
                  <div className="glass-card p-8 group h-full">
                    {/* Hover glow blob */}
                    <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-neon/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-neon/[0.06] border border-neon/[0.08] flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-neon/[0.15] group-hover:border-neon/25 group-hover:shadow-lg group-hover:shadow-neon/10 group-hover:scale-110">
                        <svg width="22" height="22" fill="none" stroke="#00b3ff" strokeWidth="1.5" viewBox="0 0 24 24"><path d={sv.icon}/></svg>
                      </div>
                      <h3 className="text-light text-[17px] font-bold mb-3 tracking-wide transition-colors duration-300 group-hover:text-neon-light">{sv.title}</h3>
                      <p className="text-muted text-[13px] leading-[1.8]">{sv.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="neon-line" />

        {/* ══════════════════════════════════════
            PAIN → SOLUTION
            ══════════════════════════════════════ */}
        <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-neon text-[11px] font-semibold tracking-[0.3em] uppercase">Warum Digitales Franken</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light mt-4 mb-5 leading-[1.1]">Kennen Sie das?</h2>
                <p className="text-muted text-[15px] sm:text-[16px] max-w-lg mx-auto">Viele Unternehmen kämpfen mit denselben Herausforderungen. Wir lösen sie nachhaltig.</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <ScrollReveal delay={100}>
                <div className="glass-strong p-8 h-full">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-9 h-9 rounded-xl bg-red/10 border border-red/15 flex items-center justify-center">
                      <svg width="16" height="16" fill="none" stroke="#ff2d55" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
                    </div>
                    <h3 className="text-red text-[13px] font-bold tracking-[0.15em] uppercase">Das Problem</h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    {pains.map((p, i) => (
                      <div key={i} className="group/p flex items-start gap-4 p-4 rounded-xl border border-red/[0.06] bg-red/[0.02] transition-all duration-400 hover:border-red/15 hover:bg-red/[0.05]">
                        <span className="w-7 h-7 rounded-lg bg-red/10 flex items-center justify-center shrink-0 text-red text-[11px] font-bold transition-all duration-300 group-hover/p:bg-red/20 group-hover/p:scale-110">{i + 1}</span>
                        <p className="text-muted text-[13px] leading-[1.75] transition-colors duration-300 group-hover/p:text-light/60">{p}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <div className="glass-strong p-8 h-full">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-9 h-9 rounded-xl bg-neon/10 border border-neon/15 flex items-center justify-center">
                      <svg width="16" height="16" fill="none" stroke="#00b3ff" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg>
                    </div>
                    <h3 className="text-neon text-[13px] font-bold tracking-[0.15em] uppercase">Unsere Lösung</h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    {solutions.map((sl, i) => (
                      <div key={i} className="group/s flex items-start gap-4 p-4 rounded-xl border border-neon/[0.06] bg-neon/[0.02] transition-all duration-400 hover:border-neon/15 hover:bg-neon/[0.05]">
                        <span className="w-7 h-7 rounded-lg bg-neon/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover/s:bg-neon/20 group-hover/s:scale-110">
                          <svg width="13" height="13" fill="none" stroke="#00b3ff" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg>
                        </span>
                        <p className="text-muted text-[13px] leading-[1.75] transition-colors duration-300 group-hover/s:text-light/60">{sl}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <div className="neon-line" />

        {/* ══════════════════════════════════════
            ABOUT
            ══════════════════════════════════════ */}
        <section id="about" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              {/* Video */}
              <ScrollReveal className="lg:w-[45%] shrink-0">
                <div className="relative max-w-[360px] mx-auto lg:mx-0">
                  <div className="absolute -inset-4 rounded-3xl border border-neon/[0.05] animate-border-glow pointer-events-none" />
                  <div className="absolute -inset-8 rounded-[28px] border border-neon/[0.03] pointer-events-none" />
                  <div className="relative aspect-square rounded-2xl overflow-hidden glass">
                    <video autoPlay loop muted playsInline className="video-blend w-full h-full object-contain scale-[1.15]">
                      <source src="/logo.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="absolute -inset-16 bg-neon/[0.03] blur-[100px] rounded-full -z-10 animate-pulse-neon" />
                </div>
              </ScrollReveal>

              {/* Text */}
              <ScrollReveal delay={200} className="flex-1">
                <span className="text-neon text-[11px] font-semibold tracking-[0.3em] uppercase">Über uns</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light mt-4 mb-7 leading-[1.1]">
                  Digital & regional —<br />
                  <span className="gradient-text">das ist Franken.</span>
                </h2>
                <p className="text-muted text-[15px] leading-[1.85] mb-5">
                  Digitales Franken ist mehr als eine Agentur — es ist ein kreatives Netzwerk für Unternehmen, die Digitalisierung ganzheitlich denken. Ehrlich, transparent, nachhaltig.
                </p>
                <p className="text-muted text-[15px] leading-[1.85] mb-9">
                  Modern, reduziert, technisch präzise — kombiniert mit fränkischer Bodenständigkeit und Handschlagqualität.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["KMU", "Startups", "Industrie", "Handwerk"].map(t => (
                    <span key={t} className="glass px-5 py-2.5 text-[12px] font-medium text-neon/80 tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <div className="neon-line" />

        {/* ══════════════════════════════════════
            CTA
            ══════════════════════════════════════ */}
        <section id="contact" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <ScrollReveal>
              <span className="text-neon text-[11px] font-semibold tracking-[0.3em] uppercase">Bereit?</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-light mt-4 mb-7 leading-[1.1]">
                Lassen Sie uns über Ihr <span className="gradient-text text-glow-neon">nächstes Projekt</span> sprechen.
              </h2>
              <p className="text-muted text-[15px] sm:text-[16px] leading-relaxed max-w-md mx-auto mb-12">
                Website-Relaunch, SEO-Offensive oder komplette digitale Strategie — kostenlos und unverbindlich.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
                <a href="mailto:info@franken-solution.de" className="btn-neon px-9 py-4 text-[15px]">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
                  Erstgespräch vereinbaren
                </a>
                <a href="tel:+4991131234567" className="btn-glass px-9 py-4 text-[15px]">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  Jetzt anrufen
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-subtle text-[11px] tracking-wider">
                {["Kostenlos & unverbindlich", "Antwort innerhalb 24h", "DSGVO-konform"].map(t => (
                  <span key={t} className="flex items-center gap-2">
                    <svg width="12" height="12" fill="none" stroke="#00b3ff" strokeWidth="2" viewBox="0 0 24 24" className="opacity-40"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                    {t}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="relative z-10 border-t border-white/[0.03]" style={{ background: "rgba(5,20,32,0.6)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="leading-none mb-4">
                <span className="block text-red text-[9px] font-light italic tracking-[0.3em] mb-0.5">digitales</span>
                <span className="block gradient-text text-lg font-extrabold tracking-[0.12em]">FRANKEN</span>
              </div>
              <p className="text-subtle text-[13px] leading-relaxed max-w-xs">Digitale Full-Service Agentur aus Franken. Modern, regional, wirkungsvoll.</p>
            </div>
            <div>
              <h4 className="text-light/40 text-[11px] font-semibold uppercase tracking-[0.25em] mb-5">Navigation</h4>
              <ul className="flex flex-col gap-3">
                {[["Home","#home"],["Leistungen","#services"],["Über uns","#about"],["Kontakt","#contact"]].map(([l,h]) => (
                  <li key={l}><a href={h} className="text-subtle text-[13px] hover:text-light transition-colors duration-300 tracking-wide">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-light/40 text-[11px] font-semibold uppercase tracking-[0.25em] mb-5">Kontakt & Recht</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="mailto:info@franken-solution.de" className="text-subtle text-[13px] hover:text-light transition-colors tracking-wide">info@franken-solution.de</a></li>
                <li><a href="tel:+4991131234567" className="text-subtle text-[13px] hover:text-light transition-colors tracking-wide">+49 911 312 345 67</a></li>
                <li><a href="/impressum" className="text-subtle text-[13px] hover:text-light transition-colors tracking-wide">Impressum</a></li>
                <li><a href="/datenschutz" className="text-subtle text-[13px] hover:text-light transition-colors tracking-wide">Datenschutz (DSGVO)</a></li>
              </ul>
            </div>
          </div>
          <div className="neon-line mb-6" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-subtle text-[11px] tracking-wider pb-14 lg:pb-0">
            <span>&copy; {new Date().getFullYear()} Digitales Franken. Alle Rechte vorbehalten.</span>
            <span className="flex items-center gap-1.5">
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Franken, Deutschland
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
