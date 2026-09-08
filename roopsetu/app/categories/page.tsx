import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIES_INFO, CATEGORY_ITEMS } from "@/data/categoryData";

export const metadata = {
  title: "All Beauty Categories | RoopSetu",
  description: "Browse all beauty categories: Nail Art, Makeup, Hairstyles, Fashion, Mehndi, and Bridal.",
};

export default function CategoriesPage() {
  const categoriesList = Object.values(CATEGORIES_INFO);

  return (
    <main className="min-h-screen bg-[#FFF9F6] py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <header className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#7A0B2E]">
            Directory
          </p>
          <h1 className="mt-4 font-serif text-[42px] leading-[1.02] tracking-[-0.03em] text-[#2B1B20] sm:text-5xl lg:text-[58px]">
            Explore all beauty categories.
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-[#6F6267]">
            Find curated looks, step-by-step detail guides, and editorial beauty inspiration.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categoriesList.map((cat) => {
            const count = CATEGORY_ITEMS.filter((item) => item.categorySlug === cat.slug).length;

            return (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group relative overflow-hidden rounded-[24px] border border-[#EADFDB] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] bg-[#FDF0F2]">
                  <Image
                    src={cat.bannerImage}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#7A0B2E] backdrop-blur-xs">
                    {count} {count === 1 ? "Look" : "Looks"}
                  </div>
                </div>

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <h2 className="font-serif text-[24px] font-medium text-[#2B1B20] group-hover:text-[#7A0B2E] transition-colors">
                      {cat.title}
                    </h2>
                    <p className="mt-1.5 text-[13px] text-[#6F6267] line-clamp-2">
                      {cat.subtitle}
                    </p>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FDF0F2] text-[#2B1B20] transition-colors group-hover:bg-[#7A0B2E] group-hover:text-white">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
