"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

const portalViews = [
  {
    key: "home",
    label: "Home",
    title: "Good morning, Maya",
    subtitle: "Everything happening at Hillcrest this week.",
  },
  {
    key: "groups",
    label: "Groups",
    title: "Your groups",
    subtitle: "Stay connected beyond Sunday.",
  },
  {
    key: "prayer",
    label: "Prayer",
    title: "Prayer wall",
    subtitle: "Share a need or pray with someone today.",
  },
] as const;

export default function MemberPortalSection() {
  const [active, setActive] =
    useState<(typeof portalViews)[number]["key"]>("home");
  const current =
    portalViews.find((view) => view.key === active) ?? portalViews[0];
  return (
    <section
      className="gutters scroll-mt-16 overflow-hidden bg-ink-900 py-24 text-white sm:py-[120px]"
      id="portal"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          dark
          eyebrow="For the whole church"
          title="A member portal people will actually use."
          description="A calm, mobile-first home for groups, prayer, giving, sermons, and the church directory—without another app to learn."
        />
        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-3">
            {portalViews.map((view) => (
              <button
                className={`w-full rounded-lg border p-5 text-left transition ${active === view.key ? "border-white/25 bg-white/10" : "border-transparent text-white/65 hover:bg-white/[.05] hover:text-white"}`}
                key={view.key}
                onClick={() => setActive(view.key)}
                type="button"
              >
                <span className="block text-sm font-bold">{view.label}</span>
                <span className="mt-1 block text-sm leading-6">
                  {view.subtitle}
                </span>
              </button>
            ))}
          </div>
          <div className="mx-auto w-full max-w-[620px] rounded-[42px] border border-white/15 bg-white/[.06] p-3 shadow-2xl sm:p-5">
            <div className="min-h-[580px] overflow-hidden rounded-[32px] bg-bg text-text">
              <div className="flex items-center justify-between px-6 pb-5 pt-8">
                <div>
                  <p className="text-xs font-semibold text-text-faint">
                    Hillcrest Community
                  </p>
                  <h3 className="mt-1 font-serif text-[28px] font-bold">
                    {current.title}
                  </h3>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-purple-bg font-serif font-bold text-accent-purple">
                  M
                </span>
              </div>
              <div className="px-6">
                <div className="rounded-xl bg-accent-green-bg p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent-green">
                    This Sunday
                  </p>
                  <p className="mt-2 font-serif text-xl font-bold">
                    A life of generous presence
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    10:00 AM · Main auditorium
                  </p>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    ["Prayer", "4 new"],
                    ["Groups", "Tonight"],
                    ["Giving", "View history"],
                    ["Sermons", "126 messages"],
                  ].map(([label, detail]) => (
                    <div
                      className="rounded-lg border border-border-soft p-4"
                      key={label}
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-bg-soft font-serif text-sm font-bold">
                        {label[0]}
                      </span>
                      <p className="mt-4 text-sm font-bold">{label}</p>
                      <p className="mt-1 text-xs text-text-faint">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 border-t border-border-soft bg-bg px-3 py-3">
                {portalViews.map((view) => (
                  <button
                    className={`rounded-md py-2 text-xs font-semibold ${active === view.key ? "bg-accent-50 text-accent-700" : "text-text-faint"}`}
                    key={view.key}
                    onClick={() => setActive(view.key)}
                    type="button"
                  >
                    {view.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
