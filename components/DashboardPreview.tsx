const activity = [
  {
    initials: "SC",
    name: "Sarah Chen",
    note: "Joined the welcome group",
    time: "9:12",
  },
  {
    initials: "TR",
    name: "Tom Reyes",
    note: "Confirmed for Sunday",
    time: "9:24",
  },
  {
    initials: "MP",
    name: "Maya Patel",
    note: "Shared a prayer update",
    time: "10:03",
  },
];
const sidebar = [
  "Home",
  "People",
  "Groups",
  "Giving",
  "Engage",
  "Prayer",
  "Library",
];

export default function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-bg shadow-[0_40px_90px_-24px_rgba(0,0,0,.7)]">
      <div className="flex h-10 items-center gap-2 border-b border-border-soft bg-bg-soft px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-accent-red/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-yellow/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-green/50" />
        <span className="mx-auto text-[10px] font-medium text-text-faint">
          Hillcrest Church · Sunday workspace
        </span>
      </div>
      <div className="flex min-h-[430px] sm:min-h-[500px]">
        <aside className="hidden w-[190px] shrink-0 border-r border-border-soft bg-bg-soft p-3 md:block">
          <div className="mb-5 flex items-center gap-2 px-2 py-1">
            <span className="grid h-6 w-6 place-items-center rounded-sm bg-ink-900 font-serif text-xs text-white">
              H
            </span>
            <span className="truncate text-xs font-semibold">
              Hillcrest Church
            </span>
          </div>
          {sidebar.map((item, index) => (
            <div
              className={`mb-1 rounded-sm px-3 py-2 text-xs ${index === 0 ? "bg-bg-select font-semibold text-accent-700" : "text-text-muted"}`}
              key={item}
            >
              {item}
            </div>
          ))}
        </aside>
        <div className="min-w-0 flex-1 p-5 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-faint">
                Monday · May 11
              </p>
              <h2 className="mt-1 font-serif text-2xl font-bold text-text sm:text-3xl">
                Good morning, Grace.
              </h2>
            </div>
            <span className="hidden rounded-full bg-accent-green-bg px-3 py-1 text-xs font-semibold text-accent-green sm:block">
              All systems ready
            </span>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              ["412", "Sunday attendance"],
              ["14", "New people"],
              ["$8,420", "Giving"],
              ["6", "Open follow-ups"],
            ].map(([value, label]) => (
              <div
                className="rounded-md border border-border-soft p-3 sm:p-4"
                key={label}
              >
                <p className="font-serif text-xl font-bold text-text sm:text-2xl">
                  {value}
                </p>
                <p className="mt-1 text-[11px] text-text-muted sm:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-[1.35fr_.65fr]">
            <div className="rounded-md border border-border-soft p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold">
                  Recent activity
                </h3>
                <span className="text-xs text-accent-600">Live</span>
              </div>
              <div className="mt-3">
                {activity.map((item) => (
                  <div
                    className="flex items-center gap-3 border-t border-border-soft py-3"
                    key={item.name}
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-50 text-[10px] font-bold text-accent-700">
                      {item.initials}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold sm:text-sm">
                        {item.name}
                      </p>
                      <p className="truncate text-[10px] text-text-muted sm:text-xs">
                        {item.note}
                      </p>
                    </div>
                    <span className="text-[10px] text-text-faint">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-md bg-ink-900 p-4 text-white sm:p-5">
              <p className="text-xs font-semibold text-white/60">
                Next service
              </p>
              <p className="mt-2 font-serif text-xl font-bold">
                Sunday · 9:00am
              </p>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-[82%] rounded-full bg-white" />
              </div>
              <p className="mt-2 text-xs text-white/65">
                27 of 33 serving roles confirmed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
