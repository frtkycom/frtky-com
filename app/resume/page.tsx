import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume | Fırat Kaya",
  description:
    "Professional profile of Fırat Kaya, focused on Customer Experience, Quality Operations, Operational Excellence, SLA Analytics, Process Improvement and AI-Assisted Quality Evaluation.",
};

const linkedinUrl =
  "https://www.linkedin.com/in/firat-kaya-068384164/";

const focusAreas = [
  "Customer Experience Analysis",
  "Quality Operations",
  "SLA Analytics",
  "Process Improvement",
  "Operational Excellence",
  "NPS & Customer Feedback Analysis",
  "AI-Assisted Quality Evaluation",
  "Power BI Reporting",
];

const strengths = [
  "Turning operational data into clear business insights",
  "Identifying root causes behind SLA and support delays",
  "Creating practical improvement actions from quality findings",
  "Communicating analysis results clearly to business stakeholders",
  "Combining customer feedback with operational performance data",
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <section className="mx-auto max-w-5xl px-6 py-28">
        <header className="mb-14">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Professional Profile
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Fırat Kaya
          </h1>

          <p className="max-w-3xl text-xl leading-relaxed text-white/70">
            Customer Experience, Quality Operations and Operational Excellence
            professional focused on transforming operational data, customer
            feedback and process findings into measurable improvement actions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-violet-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-400"
            >
              View Projects
            </Link>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10"
            >
              View LinkedIn Profile
            </a>
          </div>
        </header>

        <div className="grid gap-6">
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              Professional Summary
            </h2>

            <p className="leading-relaxed text-white/70">
              Experienced in customer experience, quality operations and
              operational excellence. Skilled in analyzing support processes,
              SLA performance, customer feedback, service quality and
              operational bottlenecks. Produces clear findings, dashboards and
              improvement recommendations that support business decisions.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              Core Focus Areas
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {focusAreas.map((item) => (
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
            <h2 className="mb-4 text-2xl font-semibold">
              Experience Highlights
            </h2>

            <div className="space-y-5 leading-relaxed text-white/70">
              <p>
                Developed analysis models focused on SLA performance,
                long-running tickets, waiting statuses, operational
                bottlenecks and high-impact problem areas.
              </p>

              <p>
                Managed and analyzed customer feedback studies such as NPS,
                identified key experience drivers and converted findings into
                actionable recommendations.
              </p>

              <p>
                Contributed to quality evaluation studies covering first update
                quality, ticket handling behavior, process compliance and
                communication standards.
              </p>

              <p>
                Used Power BI, Excel, Jira and process analysis methods to
                transform operational data into dashboards, management insights
                and improvement opportunities.
              </p>

              <p>
                Supported AI-assisted quality evaluation initiatives by defining
                evaluation criteria, reviewing model outputs and improving
                operational quality rules.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              Selected Strengths
            </h2>

            <ul className="space-y-3 text-white/70">
              {strengths.map((strength) => (
                <li key={strength} className="flex gap-3">
                  <span className="text-violet-400">•</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-violet-500/30 bg-violet-500/10 p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              Contact & Professional Profile
            </h2>

            <p className="mb-6 leading-relaxed text-white/70">
              Explore my selected projects for detailed examples of customer
              experience analysis, operational reporting, process improvement
              and AI-assisted quality evaluation. You can also visit my
              LinkedIn profile for professional background and connection.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/80"
              >
                Open LinkedIn Profile
              </a>

              <Link
                href="/contact"
                className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Contact Me
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}