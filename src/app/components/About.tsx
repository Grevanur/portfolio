const skills = [
  { category: "Languages", items: ["Python", "Java", "C/C++", "SQL", "Bash"] },
  { category: "Embedded", items: ["ESP32", "STM32", "Firmware", "HW/SW Integration", "Real-Time"] },
  { category: "Security", items: ["Cryptography", "NIST", "OWASP Top 10", "Zero Trust", "RBAC"] },
  { category: "Tools", items: ["Docker", "Linux", "Git", "ELK Stack", "Wireshark", "PostgreSQL"] },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[10px] text-[#DC0000] tracking-[0.3em] uppercase mb-3 font-semibold">
            — Driver Profile
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">About</h2>
        </div>

        <div className="racing-stripe-full mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bio */}
          <div className="space-y-5 text-[#888] leading-relaxed text-sm">
            <p>
              Graduate CS student at Georgia State University (GPA 3.90) specializing in cybersecurity and
              systems engineering. Selected as a{" "}
              <span className="text-white font-semibold">Hagan Scholar</span> — one of 25 international
              scholars globally — for academic excellence and leadership.
            </p>
            <p>
              My work spans the full systems stack: safety-critical firmware on{" "}
              <span className="text-white font-semibold">ESP32 and STM32 microcontrollers</span> with
              cryptographic validation, through to cloud-native threat detection platforms processing
              distributed telemetry in real time.
            </p>
            <p>
              Currently a Graduate Research Intern and Teaching Assistant for Cybersecurity &amp; Networking
              at GSU. Looking for full-time roles in{" "}
              <span className="text-white font-semibold">
                systems security, embedded engineering, or security research
              </span>{" "}
              starting May 2027.
            </p>

            {/* Certs */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["CompTIA Security+", "Google Cybersecurity", "Cisco Cybersecurity", "IRM Level 1"].map(
                (cert) => (
                  <span
                    key={cert}
                    className="text-[10px] font-bold text-[#DC0000] bg-[#DC0000]/10 border border-[#DC0000]/20 px-3 py-1.5 uppercase tracking-widest"
                  >
                    {cert}
                  </span>
                )
              )}
            </div>

            {/* Off the clock */}
            <div className="pt-4 border-t border-white/[0.05]">
              <p className="text-[10px] text-[#DC0000] uppercase tracking-[0.25em] mb-4 font-semibold">
                Off the Clock
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🏀", label: "Basketball", sub: "Lakers · LeBron James" },
                  { icon: "🎾", label: "Tennis & Pickleball", sub: "Court time year-round" },
                  { icon: "🎬", label: "Movies", sub: "Thriller genre" },
                  { icon: "🏎️", label: "F1", sub: "Forza Ferrari" },
                ].map(({ icon, label, sub }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 p-3 bg-white/[0.02] border border-white/[0.05] hover:border-[#DC0000]/20 transition-colors duration-200"
                  >
                    <span className="text-lg leading-none mt-0.5">{icon}</span>
                    <div>
                      <p className="text-xs text-white font-semibold">{label}</p>
                      <p className="text-[10px] text-[#555] mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills — pit wall readout style */}
          <div className="space-y-6">
            {skills.map(({ category, items }) => (
              <div key={category} className="border-l-2 border-[#DC0000]/30 pl-4">
                <p className="text-[10px] text-[#DC0000] uppercase tracking-[0.25em] mb-3 font-semibold">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-[#888] bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 uppercase tracking-wide font-medium hover:border-[#DC0000]/30 hover:text-white transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
