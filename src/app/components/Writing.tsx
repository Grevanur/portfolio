const posts = [
  {
    title: "Building Safety-Critical Firmware on ESP32: Lessons from Adversarial Testing",
    date: "Jan 2026",
    summary:
      "What I learned designing replay-attack and MITM mitigations for an embedded authentication system — and why adversarial testing caught what unit tests missed.",
    href: "#",
    tag: "Embedded Systems",
  },
  {
    title: "Behavioral Trust Modeling: Beyond Signature-Based Threat Detection",
    date: "Mar 2026",
    summary:
      "How adaptive behavioral baselines catch attacks that rule engines miss, and the tradeoffs between false-positive rate and detection latency in production systems.",
    href: "#",
    tag: "Security",
  },
];

export default function Writing() {
  return (
    <section id="writing" className="px-6 py-24 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[10px] text-[#DC0000] tracking-[0.3em] uppercase mb-3 font-semibold">
            — Debrief
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">Writing</h2>
        </div>

        <div className="racing-stripe-full mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              className="group flex flex-col p-6 bg-[#111] hover:bg-[#161616] border-r-0 transition-all duration-300 hover:border-l-2 hover:border-l-[#DC0000]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-[#DC0000] tracking-widest uppercase bg-[#DC0000]/10 px-2 py-1">
                  {post.tag}
                </span>
                <span className="text-[10px] text-[#444] tracking-widest uppercase">{post.date}</span>
              </div>

              <h3 className="text-sm font-bold text-white mb-3 leading-snug group-hover:text-[#f0f0f0] transition-colors">
                {post.title}
              </h3>

              <p className="text-xs text-[#666] leading-relaxed flex-1 mb-5">{post.summary}</p>

              <div className="flex items-center gap-2 text-[#DC0000] group-hover:gap-3 transition-all duration-200">
                <span className="text-[10px] uppercase tracking-widest font-bold">Read</span>
                <span className="text-sm">→</span>
              </div>
            </a>
          ))}
        </div>

        <p className="text-[10px] text-[#333] mt-6 tracking-widest uppercase text-center">
          More articles coming soon
        </p>
      </div>
    </section>
  );
}
