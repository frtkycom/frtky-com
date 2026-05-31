import Link from "next/link";

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-black text-white">
      <div className="glow-bg" />

      <div className="relative z-10 mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-8 py-20 md:grid-cols-[1fr_0.9fr]">
        {/* LEFT */}
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.32em] text-violet-300 md:text-sm">
            15+ YEARS EXPERIENCE • CX • QUALITY • AI
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-5xl">
            Customer Experience,
            <br />
            Quality & Operational
            <br />
            Excellence Professional
          </h1>

          <h2 className="mt-5 max-w-2xl text-lg font-medium text-zinc-400 md:text-xl">
            15+ years of experience in customer experience, quality management,
            SLA analytics and AI-assisted quality evaluation.
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-500 md:text-lg">
            Helping organizations improve customer experience, service quality
            and operational performance through data-driven analysis, process
            improvement and AI-assisted quality evaluation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              View Projects
            </Link>

            <Link
              href="https://www.linkedin.com/in/f%C4%B1rat-kaya-068384164/"
              target="_blank"
              className="rounded-full border border-zinc-700 bg-white/5 px-6 py-3 backdrop-blur transition hover:border-violet-400 hover:bg-white/10"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm text-zinc-400">Professional Focus</span>

            <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs text-violet-200">
              Open to Connect
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Customer Experience</h3>

              <p className="mt-2 text-zinc-400">
                NPS programs, customer feedback analytics and experience
                improvement initiatives.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Operational Excellence
              </h3>

              <p className="mt-2 text-zinc-400">
                SLA analytics, process improvement and operational performance
                visibility.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">AI-Assisted Quality</h3>

              <p className="mt-2 text-zinc-400">
                Quality evaluation models, first update assessment and
                data-supported service improvement.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
              <div className="text-2xl font-bold">15+</div>
              <div className="mt-1 text-xs text-zinc-500">Years</div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
              <div className="text-2xl font-bold">SLA</div>
              <div className="mt-1 text-xs text-zinc-500">Analytics</div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
              <div className="text-2xl font-bold">AI</div>
              <div className="mt-1 text-xs text-zinc-500">Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}