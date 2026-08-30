import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedArticle() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="overflow-hidden rounded-[24px] bg-[#f3dde0]">
        <div className="grid md:grid-cols-2">

          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[440px]">
            <Image
              src="/images/featured/pink-nail-guide.jpg"
              alt="Pink nail art inspiration"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex items-center p-7 sm:p-10 lg:p-14">
            <div className="max-w-lg">

              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a96570]">
                Featured beauty guide
              </p>

              <h2 className="mt-3 font-serif text-3xl leading-tight text-[#292526] sm:text-4xl">
                15 Pink Nail Designs You&apos;ll Want to Try
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#665e5d]">
                From soft pink French tips to glossy chrome finishes,
                discover beautiful ideas for your next manicure.
              </p>

              <Link
                href="/articles/pink-nail-designs"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#292526] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore the guide
                <ArrowRight size={16} strokeWidth={1.8} />
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}