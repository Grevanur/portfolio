import Image from "next/image";

const links = [
  {
    label: "GitHub",
    value: "@Grevanur",
    href: "https://github.com/Grevanur",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Gowtham Revanur",
    href: "https://www.linkedin.com/in/gowthamrevanur/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "gautam.revanur@gmail.com",
    href: "mailto:gautam.revanur@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 carbon-bg border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[10px] text-[#DC0000] tracking-[0.3em] uppercase mb-3 font-semibold">
            — Pit Lane
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">Contact</h2>
        </div>

        <div className="racing-stripe-full mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Links */}
          <div>
            <p className="text-sm text-[#666] leading-relaxed mb-8">
              Open to full-time roles in systems security, embedded engineering, and security research
              starting May 2027.
            </p>

            <div className="space-y-3">
              {links.map(({ label, value, href, icon }) => {
                const isEmail = href.startsWith("mailto:");
                return (
                  <a
                    key={label}
                    href={href}
                    {...(!isEmail && { target: "_blank", rel: "noopener noreferrer" })}
                    className="flex items-center gap-4 p-4 bg-[#111] border border-white/[0.06] hover:border-[#DC0000]/50 hover:bg-[#161616] transition-all duration-200 group"
                  >
                    <div className="text-[#444] group-hover:text-[#DC0000] transition-colors duration-200">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[9px] text-[#444] uppercase tracking-[0.2em] mb-0.5 font-bold">{label}</p>
                      <p className="text-xs text-[#888] group-hover:text-white transition-colors duration-200 font-medium">
                        {value}
                      </p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {isEmail
                        ? <span className="text-[9px] text-[#DC0000] uppercase tracking-widest font-bold">Open Mail ↗</span>
                        : <div className="w-1.5 h-1.5 bg-[#DC0000]" />
                      }
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#DC0000]" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#DC0000]" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#DC0000]" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#DC0000]" />

              <div className="relative w-44 h-44 sm:w-56 sm:h-56 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <Image
                  src="/dp.jpeg"
                  alt="Gowtham Revanur"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 176px, 224px"
                />
              </div>

              <div className="absolute -bottom-4 left-0 right-0 flex">
                <div className="flex-1 bg-[#DC0000] px-3 py-1.5">
                  <p className="text-white text-[9px] font-black tracking-[0.2em] uppercase">Gowtham Revanur</p>
                </div>
                <div className="bg-[#FFF200] px-2 py-1.5 flex items-center">
                  <span className="text-black text-[9px] font-black">GSU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-24 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-[#DC0000]" />
          <span className="text-[10px] text-[#444] tracking-[0.2em] uppercase">© 2026 Gowtham Revanur</span>
        </div>

        {/* Footer social icons */}
        <div className="flex items-center gap-5">
          <a href="https://github.com/Grevanur" target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-white transition-colors duration-200" aria-label="GitHub">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/gowthamrevanur/" target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-white transition-colors duration-200" aria-label="LinkedIn">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="mailto:gautam.revanur@gmail.com" className="text-[#444] hover:text-white transition-colors duration-200" aria-label="Email">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        <span className="text-[10px] text-[#333] tracking-[0.15em] uppercase">Built with Next.js · Scuderia Portfolio</span>
      </div>
    </section>
  );
}
