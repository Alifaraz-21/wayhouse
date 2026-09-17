type BrandMarkProps = { inverse?: boolean; compact?: boolean };

export default function BrandMark({
  inverse = false,
  compact = false,
}: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-sm font-serif text-sm font-bold ${inverse ? "bg-white text-ink-900" : "bg-ink-900 text-white"}`}
      >
        W
      </span>
      {!compact && (
        <span
          className={`font-serif text-[19px] font-bold tracking-[-0.02em] ${inverse ? "text-white" : "text-text"}`}
        >
          WayHouse
        </span>
      )}
    </span>
  );
}
