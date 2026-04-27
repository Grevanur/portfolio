const skills = [
  { category: "Languages", items: ["Python", "Java", "C/C++", "SQL", "Bash"] },
  { category: "Embedded", items: ["ESP32", "STM32", "Firmware", "HW/SW Integration", "Real-Time Systems"] },
  { category: "Security", items: ["Cryptography", "NIST Controls", "OWASP Top 10", "Zero Trust", "RBAC"] },
  { category: "Tools", items: ["Docker", "Linux", "Git", "ELK Stack", "Wireshark", "PostgreSQL"] },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-sm text-blue-400 tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-5 text-[#a1a1a1] leading-relaxed">
            <p>
              I&apos;m a graduate CS student at Georgia State University (GPA 3.90) specializing in cybersecurity
              and systems engineering. I was selected as a{" "}
              <span className="text-white font-medium">Hagan Scholar</span> — one of 25 international scholars
              globally — for academic excellence and leadership at Mahindra University.
            </p>
            <p>
              My work spans the full systems stack: from writing safety-critical firmware on{" "}
              <span className="text-white font-medium">ESP32 and STM32 microcontrollers</span> with cryptographic
              validation, to building cloud-native threat detection platforms that process distributed telemetry
              in real time. I care about systems that are verifiable, not just functional.
            </p>
            <p>
              Currently a Graduate Research Intern at GSU and Teaching Assistant for Cybersecurity &amp; Networking.
              I&apos;m looking for full-time roles in{" "}
              <span className="text-white font-medium">systems security, embedded engineering, or security research</span>{" "}
              starting May 2027.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["CompTIA Security+", "Google Cybersecurity", "Cisco Cybersecurity", "IRM Level 1"].map((cert) => (
                <span
                  key={cert}
                  className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {skills.map(({ category, items }) => (
              <div key={category}>
                <p className="text-xs text-[#555] uppercase tracking-wider mb-3">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-[#a1a1a1] bg-white/[0.04] border border-white/[0.07] px-3 py-1.5 rounded-lg"
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
