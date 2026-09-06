"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowUpRight } from "lucide-react";
import { TrendingItem } from "@/data/trending";

interface TrendingCardProps {
  item: TrendingItem;
  priority?: boolean;
}

export default function TrendingCard({ item, priority = false }: TrendingCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSaved(!isSaved);
  };

  return (
    <Link href={item.href} className="group relative block w-full outline-none">
      {/* ── Image Container ── */}
      <div className="relative w-full overflow-hidden rounded-[18px] bg-[#f3ebe8] sm:rounded-[20px]">
        {/* We use an arbitrary aspect ratio to simulate masonry if sizes aren't perfect, but next/image with layout="responsive" or intrinsic works best. 
            Since we're using css columns, we don't fix the height here. We let the image natural height dictate it, OR we use a padding trick if needed. 
            For best masonry results with CSS columns, we just let the image render its natural height. */}
        <Image
          src={item.image}
          alt={item.title}
          width={800}
          height={1000} // providing a high baseline height to prevent layout shift before load
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={priority}
          className="h-auto w-full object-cover transition-transform duration-[450ms] ease-out group-hover:scale-[1.025]"
        />

        {/* Subtle overlay on hover (desktop only) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B20]/60 via-[#2B1B20]/10 to-transparent opacity-0 transition-opacity duration-[450ms] group-hover:opacity-100 sm:block hidden" />

        {/* ── Save Button ── */}
        <button
          type="button"
          onClick={toggleSave}
          aria-label={isSaved ? "Remove from saved" : "Save this look"}
          aria-pressed={isSaved}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF9F6]/95 text-[#2B1B20] shadow-[0_2px_10px_rgba(43,27,32,0.08)] transition-all duration-300 hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A0B2E] sm:right-4 sm:top-4 sm:h-10 sm:w-10"
        >
          <Heart
            size={18}
            strokeWidth={1.8}
            fill={isSaved ? "#7A0B2E" : "none"}
            className={`transition-colors duration-300 ${isSaved ? "text-[#7A0B2E]" : ""}`}
          />
        </button>

        {/* ── Hover Metadata (Desktop Only) ── */}
        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-4 p-5 opacity-0 transition-all duration-[450ms] ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:block hidden">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
            {item.category}
          </p>
          <h3 className="flex items-center gap-2 text-[15px] font-semibold leading-tight text-white">
            {item.title}
            <ArrowUpRight size={16} className="text-white/70" />
          </h3>
        </div>
      </div>
    </Link>
  );
}
