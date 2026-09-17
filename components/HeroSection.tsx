import DashboardPreview from "./DashboardPreview";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900" id="top">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[850px] bg-[radial-gradient(ellipse_at_top,rgba(91,117,96,.55),transparent_68%)]"
      />
      <div className="gutters relative pb-20 pt-36 sm:pb-28 sm:pt-40">
        <div className="mx-auto max-w-[1200px] text-center">
          <a
            className="mb-7 inline-flex min-h-9 items-center gap-2 rounded-full border border-white/20 bg-white/[.04] py-1 pl-1 pr-3 text-xs font-medium text-white/85 transition hover:border-white/35"
            href="#pricing"
          >
            <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-900">
              New
            </span>
            <span>Free is a real plan for small churches</span>
            <span aria-hidden="true" className="text-white/50">
              →
            </span>
          </a>
          <h1 className="mx-auto max-w-[1000px] font-serif text-[48px] font-bold leading-[1.04] tracking-[-0.035em] text-white sm:text-[72px]">
            Run Sunday in one place.
          </h1>
          <p className="mx-auto mt-6 max-w-[670px] text-lg leading-8 text-white/75 sm:text-xl">
            Members, broadcasts, attendance, sermons, prayer requests. One
            workspace, one login, one place your team opens on Monday.
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              className="inline-flex h-12 items-center justify-center rounded-sm bg-white px-7 text-[15px] font-semibold text-ink-900 transition hover:bg-bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
              href="#contact"
            >
              Start free
            </a>
            <a
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-white/30 px-7 text-[15px] font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              href="#features"
            >
              Explore the product <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="mt-6 text-xs font-semibold text-white/65 sm:text-[13px]">
            Free under 100 members <span className="mx-2">·</span> No credit
            card <span className="mx-2">·</span> 5-minute setup
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-[1040px] sm:mt-20">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
