import Link from "next/link";

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-black text-white">
      <div className="glow-bg" />

      <div className="relative z-10 mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-8 py-20 md:grid-cols-[1fr_0.9fr]">
        {/* LEFT */}
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.32em] text-violet-300 md:text-sm">
            CUSTOMER EXPERIENCE • QUALITY OPERATIONS • ANALYTICS • AI
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Fırat Kaya
          </h1>

          <h2 className="mt-4 max-w-3xl text-2xl font-medium text-zinc-300 md:text-3xl">
            Customer Experience, Quality & Analytics Professional
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            15+ years of experience in customer experience, operational quality,
            service performance and process improvement. Focused on turning
            operational insights into measurable business outcomes through
            analytics, reporting and AI-assisted quality evaluation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              View Projects
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-zinc-700 bg-white/5 px-6 py-3 backdrop-blur transition hover:border-violet-400 hover:bg-white/10"
            >
              About Me
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm text-zinc-400">
              Professional Overview
            </span>

            <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs text-violet-200">
              Open to Connect
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">
                Quality Operations
              </h3>

              <p className="mt-2 text-zinc-400">
                Service quality management, operational excellence and process
                improvement.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Customer Experience
              </h3>

              <p className="mt-2 text-zinc-400">
                NPS programs, customer feedback analytics and experience
                optimization.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Analytics & AI
              </h3>

              <p className="mt-2 text-zinc-400">
                SLA analytics, Power BI reporting and AI-assisted quality
                evaluation.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
              <div className="text-2xl font-bold">15+</div>
              <div className="mt-1 text-xs text-zinc-500">
                Years
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
              <div className="text-2xl font-bold">CX</div>
              <div className="mt-1 text-xs text-zinc-500">
                Analytics
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
              <div className="text-2xl font-bold">AI</div>
              <div className="mt-1 text-xs text-zinc-500">
                Evaluation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}