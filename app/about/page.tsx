export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-8 py-20 text-white">
      <div className="glow-bg" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-violet-300">
          About Me
        </p>

        <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
          Fırat Kaya
        </h1>

        <p className="mt-4 text-xl text-violet-300">
          Quality Operations Specialist • Customer Experience • Data Analytics
        </p>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
          15+ years of experience in service quality, customer experience,
          operational performance, process improvement and AI-assisted quality
          evaluation. Passionate about transforming operational data into
          actionable business decisions.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="text-4xl font-bold">15+</div>
            <div className="mt-2 text-zinc-400">Years Experience</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="text-4xl font-bold">CX</div>
            <div className="mt-2 text-zinc-400">Customer Experience</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="text-4xl font-bold">AI</div>
            <div className="mt-2 text-zinc-400">LLM Evaluation & Quality</div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="mb-6 text-2xl font-semibold">
              Professional Focus
            </h2>

            <ul className="space-y-4 text-zinc-400">
              <li>• Customer Experience Analytics</li>
              <li>• Service Quality Management</li>
              <li>• SLA & Operational Performance Analysis</li>
              <li>• Process Excellence & Continuous Improvement</li>
              <li>• Power BI & Data Visualization</li>
              <li>• AI Assisted Quality Evaluation</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h2 className="mb-6 text-2xl font-semibold">
              Core Competencies
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                "Power BI",
                "Customer Experience",
                "NPS",
                "SLA Analytics",
                "Pareto Analysis",
                "Process Mapping",
                "Root Cause Analysis",
                "AI Evaluation",
                "LLM",
                "Quality Management",
                "Reporting",
                "Data Analysis",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <h2 className="mb-6 text-2xl font-semibold">
            Professional Summary
          </h2>

          <p className="max-w-5xl leading-relaxed text-zinc-400">
            Throughout my career, I have worked on customer experience
            measurement programs, operational quality initiatives, service
            performance analytics, executive reporting and process optimization.
            Recently, my focus has expanded into AI-supported quality evaluation
            models and operational intelligence dashboards that help teams make
            better decisions through data.
          </p>
        </div>
      </div>
    </section>
  );
}