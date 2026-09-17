"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { modules, type ModuleKey } from "./site-data";

export default function ModulesSection() {
  const [activeKey, setActiveKey] = useState<ModuleKey>("people");
  const active = modules.find((item) => item.key === activeKey) ?? modules[0];

  return (
    <section className="gutters scroll-mt-16 py-24 sm:py-[120px]" id="features">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="One connected workspace"
          title="Everything your church team needs. Nothing it does not."
          description="Seven focused modules share one member database, so every update is useful everywhere else."
        />
        <div
          aria-label="Product modules"
          className="mt-10 flex gap-2 overflow-x-auto pb-3"
          role="tablist"
        >
          {modules.map((item) => (
            <button
              aria-selected={activeKey === item.key}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${activeKey === item.key ? "border-ink-900 bg-ink-900 text-white" : "border-border-strong bg-bg text-text-muted hover:bg-bg-soft hover:text-text"}`}
              key={item.key}
              onClick={() => setActiveKey(item.key)}
              role="tab"
              type="button"
            >
              <span
                className="grid h-5 w-5 place-items-center rounded-full text-[10px]"
                style={{
                  background:
                    activeKey === item.key
                      ? "rgba(255,255,255,.15)"
                      : item.background,
                  color: activeKey === item.key ? "white" : item.accent,
                }}
              >
                {item.mark}
              </span>
              {item.label}
            </button>
          ))}
        </div>
        <div
          className="mt-6 grid overflow-hidden rounded-xl border border-border-soft bg-bg shadow-sm lg:grid-cols-[.8fr_1.2fr]"
          role="tabpanel"
        >
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <div className="flex items-center gap-2">
              <span
                className="grid h-7 w-7 place-items-center rounded-full font-serif text-xs font-bold"
                style={{ background: active.background, color: active.accent }}
              >
                {active.mark}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-text-faint">
                {active.eyebrow}
              </span>
            </div>
            <h3 className="mt-5 font-serif text-[34px] font-bold leading-[1.12] tracking-[-0.02em] text-text">
              {active.title}
            </h3>
            <p className="mt-4 text-[15px] leading-6 text-text-muted">
              {active.description}
            </p>
            <div className="mt-8 flex items-baseline gap-2">
              <span
                className="font-serif text-4xl font-bold"
                style={{ color: active.accent }}
              >
                {active.metric}
              </span>
              <span className="text-sm text-text-muted">
                {active.metricLabel}
              </span>
            </div>
          </div>
          <div
            className="min-h-[380px] p-5 sm:p-8"
            style={{ background: active.background }}
          >
            <div className="h-full rounded-lg border border-white/70 bg-bg p-5 shadow-lg sm:p-7">
              <div className="flex items-center justify-between border-b border-border-soft pb-4">
                <div>
                  <p className="text-xs font-semibold text-text-faint">
                    {active.label}
                  </p>
                  <p className="mt-1 font-serif text-xl font-bold">
                    Weekly overview
                  </p>
                </div>
                <span className="rounded-sm bg-ink-900 px-3 py-2 text-xs font-semibold text-white">
                  New item
                </span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  ["Today", "12"],
                  ["This week", "38"],
                  ["Needs care", "4"],
                ].map(([label, value]) => (
                  <div className="rounded-md bg-bg-soft p-3" key={label}>
                    <p className="text-[11px] text-text-faint">{label}</p>
                    <p className="mt-1 font-serif text-2xl font-bold">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-2">
                {[
                  "Welcome team follow-up",
                  "Sunday service preparation",
                  "Community group check-in",
                ].map((task, index) => (
                  <div
                    className="flex items-center gap-3 rounded-md border border-border-soft p-3"
                    key={task}
                  >
                    <span
                      className="grid h-7 w-7 place-items-center rounded-full text-[10px] font-bold"
                      style={{
                        background: active.background,
                        color: active.accent,
                      }}
                    >
                      {index + 1}
                    </span>
                    <span className="flex-1 text-sm font-medium">{task}</span>
                    <span className="text-xs text-text-faint">
                      {index === 0 ? "Today" : "Upcoming"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
