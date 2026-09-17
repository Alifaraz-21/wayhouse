"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BrandMark from "./BrandMark";

const navigation = [
  { label: "Product", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Member portal", href: "#portal" },
  { label: "Pricing", href: "#pricing" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const inverse = !scrolled && !menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-200 ${inverse ? "border-transparent bg-transparent" : "border-border-soft bg-bg/95 shadow-sm backdrop-blur-md"}`}
    >
      <div className="gutters mx-auto flex h-16 max-w-[1440px] items-center justify-between">
        <Link
          aria-label="WayHouse home"
          href="#top"
          onClick={() => setMenuOpen(false)}
        >
          <BrandMark inverse={inverse} />
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navigation.map((item) => (
            <a
              className={`link-u text-sm font-medium ${inverse ? "text-white/85 hover:text-white" : "text-text-muted hover:text-text"}`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a
            className={`text-sm font-medium ${inverse ? "text-white/80 hover:text-white" : "text-text-muted hover:text-text"}`}
            href="#contact"
          >
            Sign in
          </a>
          <a
            className={`inline-flex h-10 items-center rounded-sm px-5 text-sm font-semibold transition ${inverse ? "bg-white text-ink-900 hover:bg-bg-soft" : "bg-ink-900 text-white hover:bg-ink-800"}`}
            href="#contact"
          >
            Start free
          </a>
        </div>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className={`grid h-10 w-10 place-items-center rounded-sm lg:hidden ${inverse ? "text-white hover:bg-white/10" : "text-text hover:bg-bg-soft"}`}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="h-[calc(100dvh-4rem)] border-t border-border-soft bg-bg px-6 py-8 lg:hidden"
        >
          <div className="flex flex-col">
            {navigation.map((item) => (
              <a
                className="border-b border-border-soft py-4 font-serif text-2xl font-bold text-text"
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-ink-900 px-5 font-semibold text-white"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Start free
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
