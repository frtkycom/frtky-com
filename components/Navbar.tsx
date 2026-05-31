"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050816]/75 backdrop-blur-2xl">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-bold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 group-hover:scale-105">
            FK
          </div>

          <div className="leading-tight">
            <div className="font-semibold text-white">Fırat Kaya</div>
            <div className="text-xs text-slate-400">
              Customer Experience, Quality & Operational Excellence Professional
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm transition-all duration-300 ${
                  active ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,0.9)] transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(167,139,250,0.4)] md:block"
          >
            Let&apos;s Connect
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {isOpen && (
          <div className="absolute left-0 top-full w-full border-b border-white/10 bg-[#050816]/95 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col px-6 py-6">
              {navItems.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-4 py-4 text-base transition-all ${
                      active
                        ? "bg-violet-500/10 text-violet-300"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-center font-medium text-white transition hover:scale-[1.02]"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}