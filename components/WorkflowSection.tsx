import SectionHeading from "./SectionHeading";

const workflows = [
  {
    mark: "P",
    label: "People",
    title: "Welcome people with context.",
    description:
      "A visitor becomes a familiar face when their household, attendance, and follow-up live together.",
    accent: "var(--color-accent-orange)",
    background: "var(--color-accent-yellow-bg)",
    preview: "people",
  },
  {
    mark: "E",
    label: "Engage",
    title: "Send a thoughtful message.",
    description:
      "Build the right audience from the same records your care and ministry teams already use.",
    accent: "var(--color-accent-purple)",
    background: "var(--color-accent-purple-bg)",
    preview: "message",
  },
  {
    mark: "V",
    label: "Serving",
    title: "See Sunday before it happens.",
    description:
      "Plan every role, track responses, and solve coverage gaps while there is still time.",
    accent: "var(--color-accent-red)",
    background: "var(--color-accent-red-bg)",
    preview: "schedule",
  },
  {
    mark: "D",
    label: "Giving",
    title: "Close the loop on Monday.",
    description:
      "Attendance, giving, care, and communication reports already agree because they share one source.",
    accent: "var(--color-accent-green)",
    background: "var(--color-accent-green-bg)",
    preview: "report",
  },
] as const;

function WorkflowPreview({
  type,
  accent,
}: {
  type: (typeof workflows)[number]["preview"];
  accent: string;
}) {
  if (type === "people")
    return (
      <div className="space-y-2.5">
        {["Sarah Chen", "Maya Patel", "Tom Reyes"].map((name, index) => (
          <div
            className="grid grid-cols-[32px_1fr_auto] items-center gap-3 rounded-md border border-border-soft bg-bg p-3"
            key={name}
          >
            <span
              className="grid h-8 w-8 place-items-center rounded-full font-serif text-xs font-bold"
              style={{ background: `${accent}1a`, color: accent }}
            >
              {name[0]}
            </span>
            <div>
              <p className="text-sm font-semibold">{name}</p>
              <p className="text-[11px] text-text-faint">
                {index === 1 ? "First visit Sunday" : "Household profile"}
              </p>
            </div>
            <span className="rounded-full bg-bg-soft px-2 py-1 text-[10px] font-semibold text-text-muted">
              {index === 1 ? "Follow up" : "Active"}
            </span>
          </div>
        ))}
      </div>
    );
  if (type === "message")
    return (
      <div className="rounded-md border border-border-soft bg-bg p-5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-text-faint">
          Sunday follow-up
        </p>
        <p className="mt-4 font-serif text-xl font-bold">
          Thanks for being with us.
        </p>
        <div className="mt-3 space-y-2">
          <span className="block h-2 w-full rounded bg-bg-block" />
          <span className="block h-2 w-4/5 rounded bg-bg-block" />
          <span className="block h-2 w-2/3 rounded bg-bg-block" />
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-border-soft pt-4">
          <span className="text-xs text-text-muted">248 recipients</span>
          <span
            className="rounded-sm px-3 py-2 text-xs font-semibold text-white"
            style={{ background: accent }}
          >
            Ready to send
          </span>
        </div>
      </div>
    );
  if (type === "schedule")
    return (
      <div className="rounded-md border border-border-soft bg-bg p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-semibold">Sunday · 10:00 AM</p>
          <span className="text-[11px] font-semibold" style={{ color: accent }}>
            92% covered
          </span>
        </div>
        {["Welcome", "Worship", "Kids check-in"].map((team, index) => (
          <div
            className="flex items-center gap-3 border-t border-border-soft py-3"
            key={team}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: index === 2 ? "#e03e3e" : "#0f7b6c" }}
            />
            <span className="flex-1 text-sm font-medium">{team}</span>
            <span className="text-xs text-text-faint">
              {index === 2 ? "1 open" : "Ready"}
            </span>
          </div>
        ))}
      </div>
    );
  return (
    <div className="rounded-md border border-border-soft bg-bg p-5">
      <p className="text-[11px] font-bold uppercase tracking-wider text-text-faint">
        Weekly pulse
      </p>
      <div className="mt-4 flex items-end gap-2">
        {[42, 57, 48, 68, 63, 82, 76].map((height, index) => (
          <span
            className="flex-1 rounded-t-sm"
            key={height + index}
            style={{ background: index === 5 ? accent : `${accent}30`, height }}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded bg-bg-soft p-3">
          <p className="text-[10px] text-text-faint">Attendance</p>
          <p className="font-serif text-xl font-bold">638</p>
        </div>
        <div className="rounded bg-bg-soft p-3">
          <p className="text-[10px] text-text-faint">Follow-ups</p>
          <p className="font-serif text-xl font-bold">27</p>
        </div>
      </div>
    </div>
  );
}

export default function WorkflowSection() {
  return (
    <section
      className="gutters scroll-mt-16 bg-bg-soft py-24 sm:py-[120px]"
      id="workflow"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="Built around the week"
          title="From Sunday morning to Monday morning."
          description="One shared rhythm means less data entry, fewer hand-offs, and more time with people."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {workflows.map((item) => (
            <article
              className="group flex min-h-[450px] flex-col overflow-hidden rounded-xl border border-border-soft bg-bg transition hover:-translate-y-1 hover:shadow-lg"
              key={item.label}
            >
              <div className="p-7 pb-4 sm:p-9 sm:pb-4">
                <div className="flex items-center gap-2">
                  <span
                    className="grid h-7 w-7 place-items-center rounded-full font-serif text-xs font-bold"
                    style={{ background: item.background, color: item.accent }}
                  >
                    {item.mark}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-text-faint">
                    {item.label}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-[28px] font-bold leading-tight tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[480px] text-sm leading-6 text-text-muted">
                  {item.description}
                </p>
              </div>
              <div className="mt-auto p-5 sm:p-7">
                <div
                  className="rounded-lg p-4 sm:p-6"
                  style={{ background: item.background }}
                >
                  <WorkflowPreview accent={item.accent} type={item.preview} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
