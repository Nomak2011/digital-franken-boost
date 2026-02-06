export default function About() {
  return (
    <section id="about" className="section-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Video */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden glow-blue">
              <div className="absolute inset-0 bg-gradient-to-br from-dark/30 to-transparent z-10 pointer-events-none" />
              <video
                autoPlay
                loop
                muted
                playsInline
                className="video-blend w-full h-full object-contain scale-110"
              >
                <source src="/logo.mp4" type="video/mp4" />
              </video>
            </div>
            {/* Decorative glow behind */}
            <div className="absolute -inset-4 bg-blue/5 blur-3xl rounded-full -z-10" />
          </div>

          {/* Right — Text */}
          <div>
            <span className="text-blue text-sm font-semibold tracking-widest uppercase">
              Über uns
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-light mt-3 mb-6">
              Digitales Franken
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Digitales Franken ist mehr als eine Agentur — es ist ein kreatives Netzwerk
              für Unternehmen, die Digitalisierung ganzheitlich denken. Wir arbeiten ehrlich,
              transparent und mit einem klaren Fokus auf nachhaltige Ergebnisse.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Unser Stil: modern, reduziert, technisch präzise — kombiniert mit fränkischer
              Bodenständigkeit und Handschlagqualität.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue text-glow">10+</div>
                <div className="text-subtle text-xs mt-1 uppercase tracking-wider">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue text-glow">150+</div>
                <div className="text-subtle text-xs mt-1 uppercase tracking-wider">Projekte</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue text-glow">100%</div>
                <div className="text-subtle text-xs mt-1 uppercase tracking-wider">Regional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
