"use client";

import { useEffect, useState } from "react";

const sections = ["projects", "writing", "about", "contact"];
const navLinks = ["projects", "writing", "about"];

export default function Nav() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close menu on scroll
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-sm border-b border-white/5">
        <div className="h-[3px] bg-[#DC0000] w-full" />
        <div className="flex items-center justify-between px-5 sm:px-8 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 bg-[#DC0000] flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-black tracking-tighter">GR</span>
            </div>
            <span className="text-xs font-bold tracking-[0.15em] uppercase text-white/60 hidden sm:block">
              Gowtham Revanur
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-[0.15em] uppercase">
            {navLinks.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`transition-colors duration-200 ${
                  active === id ? "text-white" : "text-[#555] hover:text-[#aaa]"
                }`}
              >
                {active === id && (
                  <span className="inline-block w-1 h-1 bg-[#DC0000] rounded-full mr-1.5 mb-0.5" />
                )}
                {id}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-white/10 text-[#888] hover:border-white/30 hover:text-white transition-all duration-200 tracking-widest text-xs"
            >
              ↓ Resume
            </a>
            <a
              href="#contact"
              className={`px-4 py-1.5 border transition-all duration-200 tracking-widest text-xs ${
                active === "contact"
                  ? "bg-[#DC0000] border-[#DC0000] text-white"
                  : "border-[#DC0000]/60 text-[#DC0000] hover:bg-[#DC0000] hover:text-white"
              }`}
            >
              Contact
            </a>
          </div>

          {/* Mobile: Resume + Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-white/10 text-[#888] text-[10px] uppercase tracking-widest font-bold"
            >
              ↓ CV
            </a>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            >
              <span className={`block w-5 h-[2px] bg-white transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-[2px] bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-[2px] bg-white transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={handleLinkClick}
        />

        {/* Drawer */}
        <div
          className={`absolute top-[52px] left-0 right-0 bg-[#0d0d0d] border-b border-white/10 transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="px-5 py-6 flex flex-col gap-1">
            {navLinks.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={handleLinkClick}
                className={`flex items-center gap-3 py-3 border-b border-white/[0.05] text-sm font-bold uppercase tracking-[0.2em] transition-colors duration-200 ${
                  active === id ? "text-white" : "text-[#555]"
                }`}
              >
                {active === id && <span className="w-1.5 h-1.5 bg-[#DC0000] rounded-full shrink-0" />}
                {id}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-4 flex items-center justify-center py-3 bg-[#DC0000] text-white text-sm font-black uppercase tracking-[0.2em]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
