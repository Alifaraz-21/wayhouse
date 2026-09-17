import BrandMark from "./BrandMark";

const groups = [
  {
    title: "Product",
    links: [
      ["Modules", "#features"],
      ["Workflow", "#workflow"],
      ["Member portal", "#portal"],
    ],
  },
  {
    title: "Explore",
    links: [
      ["Built for church", "#built-for"],
      ["Pricing", "#pricing"],
      ["Get started", "#contact"],
    ],
  },
] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t border-border-soft bg-bg-soft py-16 sm:py-20">
      <div className="gutters mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <a aria-label="Back to top" href="#top">
            <BrandMark />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-6 text-text-muted">
            A polished concept for calmer church operations—from the people who
            arrive to the teams who make Sunday happen.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-bold uppercase tracking-wider text-text-faint">
                {group.title}
              </p>
              <ul className="mt-4 space-y-3">
                {group.links.map(([label, href]) => (
                  <li key={href}>
                    <a
                      className="link-u text-sm text-text-muted hover:text-text"
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border-soft pt-6 text-xs text-text-faint md:col-span-2">
          © 2026 WayHouse concept. Built as a portfolio project; all actions
          remain local.
        </div>
      </div>
    </footer>
  );
}
