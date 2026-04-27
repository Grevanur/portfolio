"use client";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/5">
      <span className="text-sm font-semibold tracking-tight text-white">GR</span>
      <div className="flex items-center gap-8 text-sm text-[#a1a1a1]">
        <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
        <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
        <a href="#contact" className="hover:text-white transition-colors duration-200 px-4 py-1.5 border border-blue-500/50 text-blue-400 rounded-full hover:border-blue-400 hover:bg-blue-500/10">
          Contact
        </a>
      </div>
    </nav>
  );
}
