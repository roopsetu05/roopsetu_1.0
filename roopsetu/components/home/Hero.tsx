import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20">

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c9828d] sm:text-xs">
            ROOPSETU BEAUTY
          </p>

          <h1 className="font-serif text-[38px] leading-[1.08] tracking-[-0.035em] text-[#292526] sm:text-5xl lg:text-6xl">
            Discover your next
            <span className="block text-[#c9828d]">
              beauty look.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#77706f] sm:text-base">
            Beautiful nail art, hairstyles and makeup inspiration
            you&apos;ll actually want to try.
          </p>

          {/* Search */}
          <div className="mx-auto mt-7 max-w-xl">
            <Link
              href="/search"
              className="flex h-14 items-center gap-3 rounded-full border border-[#e5d9d5] bg-white px-5 text-left shadow-[0_8px_30px_rgba(80,50,50,0.05)] transition hover:border-[#c9828d]"
            >
              <Search
                size={19}
                strokeWidth={1.8}
                className="shrink-0 text-[#8c8280]"
              />

              <span className="flex-1 text-sm text-[#928987]">
                Search nail, hair or makeup ideas...
              </span>

              <ArrowRight
                size={18}
                strokeWidth={1.8}
                className="text-[#c9828d]"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}