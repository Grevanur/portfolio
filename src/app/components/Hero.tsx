export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 relative overflow-hidden">
      {/* Background racing lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent to-[#DC0000]/20" />
        <div className="absolute top-1/2 right-0 w-1/3 h-[1px] bg-gradient-to-l from-transparent to-[#DC0000]/20" />
        <div className="absolute bottom-1/3 left-0 w-1/4 h-[1px] bg-gradient-to-r from-transparent to-[#FFF200]/10" />
        <div className="absolute top-1/4 left-[10%] w-px h-32 bg-gradient-to-b from-transparent via-[#DC0000]/20 to-transparent" />
        <div className="absolute top-1/4 right-[10%] w-px h-32 bg-gradient-to-b from-transparent via-[#DC0000]/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        {/* Race number tag */}
        <div className="fade-up fade-up-delay-1 inline-flex items-center gap-3">
          <div className="bg-[#DC0000] px-3 py-1">
            <span className="text-white text-xs font-black tracking-widest uppercase">Scuderia</span>
          </div>
          <span className="text-xs text-[#555] tracking-[0.3em] uppercase">Atlanta, GA · Georgia State University</span>
        </div>

        {/* Name */}
        <h1 className="fade-up fade-up-delay-2 leading-none uppercase" style={{ fontFamily: "var(--font-bebas)" }}>
          <span className="block text-[80px] sm:text-[110px] md:text-[140px] text-white tracking-[0.05em]">
            Gowtham
          </span>
          <span className="block text-[80px] sm:text-[110px] md:text-[140px] tracking-[0.05em] gradient-text">
            Revanur
          </span>
        </h1>

        {/* Tagline */}
        <p className="fade-up fade-up-delay-3 text-base sm:text-lg text-[#888] max-w-xl mx-auto leading-relaxed font-light">
          Graduate CS · Georgia State University
          <br />
          <span className="text-[#f0f0f0]">Embedded Systems · Security Engineering · Real-Time Detection</span>
        </p>

        {/* Racing stripe accent */}
        <div className="fade-up fade-up-delay-3 flex items-center justify-center gap-0 mx-auto w-48">
          <div className="h-[2px] flex-1 bg-[#DC0000]" />
          <div className="h-[2px] w-8 bg-[#FFF200]" />
          <div className="h-[2px] w-4 bg-white/20" />
        </div>

        {/* CTAs */}
        <div className="fade-up fade-up-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="px-8 py-3 bg-[#DC0000] hover:bg-[#ff1111] text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 hover:shadow-lg hover:shadow-[#DC0000]/30"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-[#FFF200]/40 text-[#FFF200] hover:bg-[#FFF200]/10 hover:border-[#FFF200]/70 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200"
          >
            ↓ Download Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white/10 hover:border-white/30 text-[#888] hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Telemetry stats strip */}
        <div className="fade-up fade-up-delay-4 flex items-center justify-center divide-x divide-white/10 pt-6">
          {[
            { label: "GPA", value: "3.90" },
            { label: "Status", value: "Hagan Scholar" },
            { label: "Cert", value: "Security+" },
            { label: "Avail", value: "May 2027", sub: "Open to internships now" },
          ].map(({ label, value, sub }) => (
            <div key={label} className="px-5 first:pl-0 last:pr-0 text-center">
              <p className="text-[10px] text-[#DC0000] tracking-[0.2em] uppercase mb-1">{label}</p>
              <p className="text-xs text-[#aaa] font-medium">{value}</p>
              {sub && <p className="text-[9px] text-[#555] mt-0.5">{sub}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
