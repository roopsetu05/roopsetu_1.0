import Link from "next/link";

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#eadfdb] bg-white/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-around">
        <Link
          href="/"
          className="flex flex-col items-center gap-1 text-xs text-[#292526]"
        >
          <span className="text-lg">⌂</span>
          Home
        </Link>

        <Link
          href="/nails"
          className="flex flex-col items-center gap-1 text-xs text-[#77706f]"
        >
          <span className="text-lg">✨</span>
          Explore
        </Link>

        <Link
          href="/search"
          className="flex flex-col items-center gap-1 text-xs text-[#77706f]"
        >
          <span className="text-lg">⌕</span>
          Search
        </Link>
      </div>
    </nav>
  );
}