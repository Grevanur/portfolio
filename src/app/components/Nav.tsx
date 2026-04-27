"use client";

import { useEffect, useState } from "react";

const sections = ["projects", "writing", "about", "contact"];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-sm border-b border-white/5">
      <div className="h-[3px] bg-[#DC0000] w-full" />
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-[#DC0000] flex items-center justify-center">
            <span className="text-white text-xs font-black tracking-tighter">GR</span>
          </div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">Gowtham Revanur</span>
        </div>

        <div className="flex items-center gap-6 text-xs font-semibold tracking-[0.15em] uppercase">
          {["projects", "writing", "about"].map((id) => (
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
      </div>
    </nav>
  );
}
