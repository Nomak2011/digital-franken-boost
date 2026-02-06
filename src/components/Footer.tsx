import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Leistungen", href: "#services" },
  { label: "Über uns", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz (DSGVO)", href: "/datenschutz" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-deep border-t border-blue/8">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex flex-col leading-tight">
                <span className="text-red text-[10px] font-light italic tracking-[0.2em]">
                  digitales
                </span>
                <span className="text-blue text-lg font-bold tracking-[0.15em] text-glow">
                  FRANKEN
                </span>
              </div>
            </div>
            <p className="text-subtle text-sm leading-relaxed max-w-xs">
              Digitale Full-Service Agentur aus Franken. Modern, regional, wirkungsvoll.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-light text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h4 className="text-light text-sm font-semibold uppercase tracking-wider mb-4">
              Kontakt & Rechtliches
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:info@franken-solution.de"
                  className="text-muted text-sm hover:text-blue transition-colors"
                >
                  info@franken-solution.de
                </a>
              </li>
              <li>
                <a
                  href="tel:+4991131234567"
                  className="text-muted text-sm hover:text-blue transition-colors"
                >
                  +49 911 312 345 67
                </a>
              </li>
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-subtle text-xs">
          <p>&copy; {new Date().getFullYear()} Digitales Franken. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-2">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Franken, Deutschland
          </div>
        </div>
      </div>
    </footer>
  );
}
