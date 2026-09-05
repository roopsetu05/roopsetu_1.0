"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="flex items-center justify-center gap-4 overflow-x-auto pb-6 pt-2 scrollbar-hide sm:gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={category.href}
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/60 bg-white/70 backdrop-blur-md px-7 py-3.5 text-[15px] font-semibold text-[#403a3a] shadow-sm transition-colors hover:border-[#c9828d]/50 hover:bg-white hover:text-[#c9828d] hover:shadow-[0_8px_20px_rgba(201,130,141,0.15)]"
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}