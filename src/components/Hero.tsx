"use client";

const services = [
  "WEBDESIGN",
  "SEO/SEA",
  "VIDEO/FILM",
  "CGI/CGO",
  "3D ANIMATION",
  "SOCIAL MEDIA",
  "PRINT",
  "GRAFIK",
  "FOTOGRAFIE",
  "PODCAST",
];

export default function Hero() {
  return (
    <section id="home" className="hero-gradient relative min-h-screen pt-20">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column — Text */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-text-primary">CHANGELING </span>
                <span className="text-red-accent italic">NEO</span>
              </h1>
            </div>

            <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
              Mehr Kunden. Mehr Sichtbarkeit. Mehr Wirkung. Wir sind Ihre
              digitale Full-Service Agentur aus Franken. Von Webdesign über
              SEO bis hin zu Video und 3D — wir bringen Ihr Unternehmen
              digital nach vorne.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#kontakt"
                className="btn-cyan px-8 py-3 text-base"
              >
                Jetzt starten
              </a>
              <a
                href="#portfolio"
                className="btn-outline-cyan px-8 py-3 text-base"
              >
                Portfolio ansehen
              </a>
            </div>
          </div>

          {/* Right Column — Services + Video */}
          <div className="flex flex-col gap-10">
            {/* Services Card */}
            <div className="glass-card p-6 sm:p-8">
              <ul className="flex flex-col gap-3">
                {services.map((service) => (
                  <li
                    key={service}
                    className="text-cyan text-sm sm:text-base font-semibold tracking-wide flex items-center gap-2"
                  >
                    <span className="text-cyan/60">›</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="video-blend w-full h-full object-contain"
            >
              <source src="/logo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
