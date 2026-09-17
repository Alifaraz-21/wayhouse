import SectionHeading from "./SectionHeading";
import { plans } from "./site-data";

export default function PricingSection() {
  return (
    <section
      className="gutters scroll-mt-16 bg-bg-soft py-24 sm:py-[120px]"
      id="pricing"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="Simple pricing"
          title="Start small. Keep every feature."
          description="Member count changes the price—not which ministry tools your team is allowed to use."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <article
              className={`relative flex flex-col rounded-xl border p-6 ${plan.featured ? "border-ink-900 bg-ink-900 text-white shadow-xl" : "border-border-soft bg-bg"}`}
              key={plan.name}
            >
              {plan.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                  Most popular
                </span>
              )}
              <h3 className="font-serif text-2xl font-bold">{plan.name}</h3>
              <div className="mt-7 flex items-end gap-1">
                <span className="font-serif text-4xl font-bold">
                  {plan.price}
                </span>
                <span
                  className={
                    plan.featured
                      ? "pb-1 text-sm text-white/60"
                      : "pb-1 text-sm text-text-faint"
                  }
                >
                  /month
                </span>
              </div>
              <p
                className={`mt-2 text-xs font-semibold ${plan.featured ? "text-white/75" : "text-text-muted"}`}
              >
                {plan.members}
              </p>
              <p
                className={`mt-5 min-h-16 text-sm leading-6 ${plan.featured ? "text-white/65" : "text-text-muted"}`}
              >
                {plan.description}
              </p>
              <ul
                className={`mt-5 space-y-3 border-t pt-5 text-sm ${plan.featured ? "border-white/15 text-white/80" : "border-border-soft text-text-muted"}`}
              >
                {plan.features.map((feature) => (
                  <li className="flex gap-2" key={feature}>
                    <span aria-hidden="true" className="font-bold">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className={`mt-7 inline-flex h-11 items-center justify-center rounded-sm text-sm font-bold transition ${plan.featured ? "bg-white text-ink-900 hover:bg-bg-soft" : "bg-ink-900 text-white hover:bg-ink-800"}`}
                href="#contact"
              >
                Choose {plan.name}
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-text-faint">
          Illustrative portfolio pricing. Buttons open the local demo form.
        </p>
      </div>
    </section>
  );
}
