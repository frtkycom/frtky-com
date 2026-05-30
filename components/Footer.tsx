import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-white">
              Fırat Kaya
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Quality Operations Specialist focused on
              Customer Experience, SLA Analytics,
              Process Improvement and AI-Assisted
              Quality Evaluation.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Navigation
            </h4>

            <div className="flex flex-col gap-3 text-zinc-400">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">
              Connect
            </h4>

            <div className="flex flex-col gap-3 text-zinc-400">
              <a
                href="https://linkedin.com"
                target="_blank"
              >
                LinkedIn
              </a>

              <a
                href="mailto:firatkaya8234@gmail.com"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-zinc-500">
          © 2026 Fırat Kaya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}