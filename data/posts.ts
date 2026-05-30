export const posts = [
  {
    slug: "ai-assisted-quality-evaluation",
    title: "AI-Assisted Quality Evaluation in Support Operations",
    category: "AI & Quality",
    description:
      "How AI can help quality teams evaluate tickets, detect weak first updates and create more consistent review standards.",
    readTime: "6 min read",
    date: "2026",
  },
  {
    slug: "sla-impact-analysis",
    title: "From SLA Breach to Business Impact",
    category: "SLA Analytics",
    description:
      "A practical approach to understanding where customer waiting time is created and which operational delays matter most.",
    readTime: "7 min read",
    date: "2026",
  },
  {
    slug: "customer-experience-signals",
    title: "Connecting Quality Signals with Customer Experience",
    category: "Customer Experience",
    description:
      "How NPS, ticket behavior, resolution time and contact quality can be combined to understand the real customer journey.",
    readTime: "6 min read",
    date: "2026",
  },
  {
    slug: "first-update-quality",
    title: "Why First Update Quality Matters",
    category: "Support Quality",
    description:
      "The first written response is more than an update; it shapes trust, clarity and the customer’s perception of ownership.",
    readTime: "5 min read",
    date: "2026",
  },
  {
    slug: "quality-operations-dashboarding",
    title: "Designing Quality Dashboards That Drive Action",
    category: "Dashboarding",
    description:
      "Dashboards should not only report performance; they should help teams see bottlenecks, priorities and next actions.",
    readTime: "6 min read",
    date: "2026",
  },
  {
    slug: "process-improvement-quality-culture",
    title: "Building a Quality Culture Through Process Improvement",
    category: "Process Improvement",
    description:
      "Sustainable quality comes from clear standards, measurable behaviors and simple processes that teams can actually use.",
    readTime: "7 min read",
    date: "2026",
  },
];

export type Post = (typeof posts)[number];