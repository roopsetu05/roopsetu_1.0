import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BeautyCarousel from "@/components/home/BeautyCarousel";

interface BeautyItem {
  title: string;
  category: string;
  image: string;
  href: string;
}

interface BeautySectionProps {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  items: BeautyItem[];
}

export default function BeautySection({
  eyebrow,
  title,
  description,
  href,
  items,
}: BeautySectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-7 flex items-end justify-between gap-5">
        <div className="max-w-xl">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c9828d]">
            {eyebrow}
          </p>

          <h2 className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#292526] sm:text-4xl">
            {title}
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#77706f]">
            {description}
          </p>
        </div>

        <Link
          href={href}
          className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-[#403a3a] transition hover:text-[#c9828d] sm:flex"
        >
          See all
          <ArrowRight size={16} strokeWidth={1.8} />
        </Link>
      </div>

      <BeautyCarousel items={items} />

    </section>
  );
}