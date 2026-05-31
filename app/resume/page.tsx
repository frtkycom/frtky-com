import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume | Fırat Kaya",
  description:
    "Read-only resume of Fırat Kaya, focused on Customer Experience, Quality, Operational Excellence, SLA Analytics, Process Improvement and AI-Assisted Quality Evaluation.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <section className="max-w-5xl mx-auto px-6 py-28">
        <div className="mb-12">
          <p className="text-violet-400 text-sm mb-4"></p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Fırat Kaya
          </h1>

          <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
            Customer Experience, Quality & Operational Excellence Professional
            focused on SLA Analytics, Process Improvement and AI-Assisted
            Quality Evaluation.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/projects"
              className="rounded-full bg-violet-500 px-6 py-3 text-sm font-medium text-white hover:bg-violet-400 transition"
            >
              View Projects
            </Link>

            <a
              href="https://www.linkedin.com/in/f%C4%B1rat-kaya-63b43a243/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/80 hover:bg-white/10 transition"
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
            <p className="text-white/70 leading-relaxed">
              Experienced professional in customer experience, quality
              operations and operational excellence. Skilled in analyzing
              support processes, SLA performance, customer feedback and
              operational bottlenecks to improve service quality and business
              outcomes.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold mb-4">Core Focus Areas</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Customer Experience Analysis",
                "Quality Evaluation",
                "SLA Analytics",
                "Process Improvement",
                "Operational Excellence",
                "NPS & Feedback Analysis",
                "AI-Assisted Quality Evaluation",
                "Power BI Reporting",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold mb-4">Experience Highlights</h2>

            <div className="space-y-5 text-white/70 leading-relaxed">
              <p>
                Built and supported analysis models focused on SLA performance,
                long-running tickets, waiting statuses, bottlenecks and
                high-impact operational problem areas.
              </p>

              <p>
                Managed and analyzed customer feedback programs such as NPS,
                identifying experience gaps and sharing actionable insights with
                business stakeholders.
              </p>

              <p>
                Contributed to quality evaluation studies for customer support
                processes, including first update quality, ticket handling
                behavior and communication standards.
              </p>

              <p>
                Used Power BI, Excel and process analysis methods to transform
                operational data into clear dashboards, findings and improvement
                opportunities.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold mb-4">Selected Strengths</h2>

            <ul className="space-y-3 text-white/70">
              <li>• Turning operational data into clear business insights</li>
              <li>• Identifying root causes behind SLA and support delays</li>
              <li>• Creating practical improvement actions from quality findings</li>
              <li>• Communicating analysis results in a simple and actionable way</li>
              <li>• Combining customer feedback with process performance data</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-violet-500/30 bg-violet-500/10 p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact & Professional Profile</h2>

            <p className="text-white/70 leading-relaxed mb-6">
              This resume page is designed as a read-only professional profile.
              For detailed career information, project background and
              professional connection, please visit the LinkedIn profile.
            </p>

            <a
              href="https://www.linkedin.com/in/f%C4%B1rat-kaya-63b43a243/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/80 transition"
            >
              Open LinkedIn Profile
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}