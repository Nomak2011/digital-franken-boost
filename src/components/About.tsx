export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Video */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border border-blue/[0.06]" />
              <div className="absolute inset-4 rounded-full border border-blue/[0.04]" />
              <div className="absolute inset-8 rounded-full overflow-hidden">
                <video autoPlay loop muted playsInline className="video-blend w-full h-full object-contain">
                  <source src="/logo.mp4" type="video/mp4" />
                </video>
              </div>
              {/* Glow */}
              <div className="absolute inset-0 bg-blue/[0.03] blur-[60px] rounded-full scale-110 -z-10 anim-glow" />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="text-blue text-[11px] font-semibold tracking-[0.25em] uppercase">Über uns</span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-light mt-3 mb-6 leading-tight">
              Digital & regional —<br />
              <span className="gradient-text">das ist Franken.</span>
            </h2>
            <p className="text-muted text-[16px] leading-[1.8] mb-5">
              Digitales Franken ist mehr als eine Agentur — es ist ein kreatives Netzwerk für Unternehmen, die Digitalisierung ganzheitlich denken.
            </p>
            <p className="text-muted text-[16px] leading-[1.8] mb-10">
              Unser Stil: modern, reduziert, technisch präzise — kombiniert mit fränkischer Bodenständigkeit und Handschlagqualität.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "10+", label: "Jahre" },
                { value: "150+", label: "Projekte" },
                { value: "100%", label: "Regional" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-blue/[0.03] border border-blue/[0.06]">
                  <div className="text-2xl lg:text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
                  <div className="text-subtle text-[11px] uppercase tracking-[0.15em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
