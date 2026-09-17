type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={
        centered ? "mx-auto max-w-[760px] text-center" : "max-w-[760px]"
      }
    >
      <p
        className={`text-xs font-bold uppercase tracking-[0.16em] ${dark ? "text-white/55" : "text-accent-600"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-serif text-[40px] font-bold leading-[1.08] tracking-[-0.025em] sm:text-[48px] ${dark ? "text-white" : "text-text"}`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 max-w-[640px] text-[16px] leading-[26px] ${dark ? "text-white/65" : "text-text-muted"} ${centered ? "mx-auto" : ""}`}
      >
        {description}
      </p>
    </div>
  );
}
