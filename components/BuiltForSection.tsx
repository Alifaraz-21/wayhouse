import SectionHeading from "./SectionHeading";

const principles = [
  {
    number: "01",
    title: "Quiet by default",
    description:
      "Dense information is organized into predictable views, not noisy dashboards.",
  },
  {
    number: "02",
    title: "Useful on Monday",
    description:
      "Sunday activity automatically becomes the follow-up list for the week ahead.",
  },
  {
    number: "03",
    title: "Ready for volunteers",
    description:
      "Plain language and focused permissions make training faster and safer.",
  },
];

export default function BuiltForSection() {
  return (
    <section
      className="gutters scroll-mt-16 py-24 sm:py-[120px]"
      id="built-for"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="Designed with restraint"
          title="Built for churches, not software operators."
          description="WayHouse keeps the depth administrators need while giving occasional volunteers an interface they can understand at a glance."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border-soft bg-border-soft md:grid-cols-3">
          {principles.map((principle) => (
            <article className="bg-bg p-7 sm:p-9" key={principle.number}>
              <span className="font-serif text-sm font-bold text-accent-600">
                {principle.number}
              </span>
              <h3 className="mt-12 font-serif text-2xl font-bold">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-muted">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
