import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-dark-deep">
      <div className="max-w-7xl mx-auto px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="leading-none mb-4">
              <span className="block text-red text-[10px] font-light italic tracking-[0.25em] mb-0.5">digitales</span>
              <span className="block gradient-text text-lg font-extrabold tracking-[0.12em]">FRANKEN</span>
            </div>
            <p className="text-subtle text-[13px] leading-relaxed max-w-xs">
              Digitale Full-Service Agentur aus Franken. Modern, regional, wirkungsvoll.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-light/60 text-[11px] font-semibold uppercase tracking-[0.2em] mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {["Home", "Leistungen", "Über uns", "Kontakt"].map((l) => (
                <li key={l}>
                  <Link href={`#${l.toLowerCase().replace(/\s|ü/g, (m) => m === "ü" ? "u" : "-")}`} className="text-subtle text-[13px] hover:text-light transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Legal */}
          <div>
            <h4 className="text-light/60 text-[11px] font-semibold uppercase tracking-[0.2em] mb-5">Kontakt & Rechtliches</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="mailto:info@franken-solution.de" className="text-subtle text-[13px] hover:text-light transition-colors">info@franken-solution.de</a></li>
              <li><a href="tel:+4991131234567" className="text-subtle text-[13px] hover:text-light transition-colors">+49 911 312 345 67</a></li>
              <li><Link href="/impressum" className="text-subtle text-[13px] hover:text-light transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-subtle text-[13px] hover:text-light transition-colors">Datenschutz (DSGVO)</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="neon-line mt-10 mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-subtle text-[11px] tracking-wide">
          <span>&copy; {new Date().getFullYear()} Digitales Franken. Alle Rechte vorbehalten.</span>
          <span className="flex items-center gap-1.5">
            <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Franken, Deutschland
          </span>
        </div>
      </div>
    </footer>
  );
}
