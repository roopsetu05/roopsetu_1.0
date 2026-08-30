import Link from "next/link";
import { Sparkles, WandSparkles } from "lucide-react";

const categories = [
  {
    name: "Nails",
    href: "/nails",
    icon: "💅",
  },
  {
    name: "Hairstyles",
    href: "/hairstyles",
    icon: "✦",
  },
  {
    name: "Makeup",
    href: "/makeup",
    icon: "✧",
  },
];

export default function CategoryTabs() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-hide sm:gap-3">
        {categories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="flex shrink-0 items-center gap-2 rounded-full border border-[#e7dcd8] bg-white px-5 py-3 text-sm font-medium text-[#403a3a] transition hover:border-[#c9828d] hover:bg-[#f3dde0]"
          >
            <span>{category.icon}</span>
            {category.name}
          </Link>
        ))}
      </div>
    </section>
  );
}