"use client";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-sm border-b border-white/5">
      {/* Ferrari red top bar */}
      <div className="h-[3px] bg-[#DC0000] w-full" />
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-[#DC0000] flex items-center justify-center">
            <span className="text-white text-xs font-black tracking-tighter">GR</span>
          </div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">Gowtham Revanur</span>
        </div>
        <div className="flex items-center gap-8 text-xs font-semibold tracking-[0.15em] uppercase text-[#888]">
          <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
          <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          <a
            href="#contact"
            className="px-4 py-1.5 border border-[#DC0000]/60 text-[#DC0000] hover:bg-[#DC0000] hover:text-white transition-all duration-200 tracking-widest text-xs"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
