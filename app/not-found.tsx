import Link from "next/link";
import BrandMark from "@/components/BrandMark";

export default function NotFound() {
  return (
    <main className="gutters grid min-h-dvh place-items-center bg-bg-soft py-20">
      <div className="max-w-md text-center">
        <div className="flex justify-center">
          <BrandMark />
        </div>
        <p className="mt-10 text-xs font-bold uppercase tracking-wider text-accent-600">
          404
        </p>
        <h1 className="mt-3 font-serif text-4xl font-bold">
          This room is empty.
        </h1>
        <p className="mt-4 leading-7 text-text-muted">
          The page you requested is not part of this portfolio demo.
        </p>
        <Link
          className="mt-8 inline-flex h-11 items-center rounded-sm bg-ink-900 px-6 text-sm font-bold text-white"
          href="/"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
