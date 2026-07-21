"use client";

import { useEffect } from "react";

/**
 * Drives the Obsidian-style "flowing scroll" effect:
 *  - reveals any [data-reveal] element as it enters the viewport (fade + rise)
 *  - fills the top progress bar ([data-scrollbar]) as you scroll
 * Uses a rect-based check on a capturing scroll listener so it works
 * regardless of which element is the actual scroll container.
 */
export default function ScrollFx() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const bar = document.querySelector<HTMLElement>("[data-scrollbar]");

    // stagger siblings
    const counts = new Map<Element | null, number>();
    reveals.forEach((el) => {
      const p = el.parentElement;
      const i = counts.get(p) || 0;
      counts.set(p, i + 1);
      el.style.transitionDelay = Math.min(i, 6) * 70 + "ms";
    });

    let raf = 0;
    const tick = () => {
      raf = 0;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (!reduce) {
        for (const el of reveals) {
          if (el.classList.contains("is-in")) continue;
          const r = el.getBoundingClientRect();
          if (r.top < vh * 0.9 && r.bottom > 0) el.classList.add("is-in");
        }
      } else {
        reveals.forEach((el) => el.classList.add("is-in"));
      }
      if (bar) {
        const de = document.scrollingElement || document.documentElement;
        const max = de.scrollHeight - de.clientHeight;
        const st = de.scrollTop || window.scrollY || 0;
        bar.style.width = (max > 0 ? (st / max) * 100 : 0) + "%";
      }
    };

    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", schedule, { passive: true, capture: true });
    window.addEventListener("resize", schedule, { passive: true });
    tick();

    // safety sweep for late layout / font shifts
    const sweep = window.setInterval(tick, 250);
    const stop = window.setTimeout(() => window.clearInterval(sweep), 4000);

    return () => {
      window.removeEventListener("scroll", schedule, { capture: true } as EventListenerOptions);
      window.removeEventListener("resize", schedule);
      window.clearInterval(sweep);
      window.clearTimeout(stop);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
