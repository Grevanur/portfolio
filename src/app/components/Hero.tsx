export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="fade-up fade-up-delay-1 text-sm font-medium text-blue-400 tracking-widest uppercase">
          Available May 2027
        </p>

        <h1 className="fade-up fade-up-delay-2 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Gowtham <br className="hidden sm:block" />
          <span className="gradient-text">Revanur</span>
        </h1>

        <p className="fade-up fade-up-delay-3 text-lg sm:text-xl text-[#a1a1a1] max-w-xl mx-auto leading-relaxed">
          Graduate CS student at Georgia State University. Building secure systems — from{" "}
          <span className="text-[#ededed]">embedded firmware</span> to{" "}
          <span className="text-[#ededed]">cloud-native threat detection</span>.
        </p>

        <div className="fade-up fade-up-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/10 hover:border-white/30 text-[#a1a1a1] hover:text-white text-sm font-medium rounded-lg transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        <div className="fade-up fade-up-delay-4 flex items-center justify-center gap-8 pt-8 text-xs text-[#555] uppercase tracking-wider">
          <span>Security+</span>
          <span className="w-1 h-1 rounded-full bg-[#333]" />
          <span>GPA 3.90</span>
          <span className="w-1 h-1 rounded-full bg-[#333]" />
          <span>Hagan Scholar</span>
        </div>
      </div>
    </section>
  );
}
