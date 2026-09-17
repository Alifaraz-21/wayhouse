"use client";

import { FormEvent, useState } from "react";

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }
  return (
    <section className="gutters scroll-mt-16 py-24 sm:py-[136px]" id="contact">
      <div className="mx-auto max-w-[920px] overflow-hidden rounded-2xl bg-ink-900 px-6 py-14 text-center text-white shadow-xl sm:px-12 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[.14em] text-white/60">
          Ready when you are
        </p>
        <h2 className="mx-auto mt-4 max-w-[680px] font-serif text-[40px] font-bold leading-tight tracking-[-0.025em] sm:text-[52px]">
          Try WayHouse for your church.
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-base leading-7 text-white/70">
          Free under 100 members. No credit card. This portfolio demo keeps
          every action safely on the page.
        </p>
        {submitted ? (
          <div
            className="mx-auto mt-8 max-w-[520px] rounded-lg border border-white/20 bg-white/10 p-5"
            role="status"
          >
            <p className="font-semibold">You are on the demo list.</p>
            <p className="mt-1 text-sm text-white/65">
              No data was sent—this interaction is intentionally local.
            </p>
            <button
              className="mt-4 text-sm font-semibold underline underline-offset-4"
              onClick={() => setSubmitted(false)}
              type="button"
            >
              Reset form
            </button>
          </div>
        ) : (
          <form
            className="mx-auto mt-8 flex max-w-[560px] flex-col gap-3 sm:flex-row"
            onSubmit={handleSubmit}
          >
            <label className="sr-only" htmlFor="demo-email">
              Work email
            </label>
            <input
              autoComplete="email"
              className="h-12 min-w-0 flex-1 rounded-sm border border-white/20 bg-white/10 px-4 text-white outline-none placeholder:text-white/45 focus:border-white/50 focus:ring-2 focus:ring-white/25"
              id="demo-email"
              name="email"
              placeholder="you@yourchurch.org"
              required
              type="email"
            />
            <button
              className="h-12 rounded-sm bg-white px-6 text-sm font-bold text-ink-900 transition hover:bg-bg-soft"
              type="submit"
            >
              Start free
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
