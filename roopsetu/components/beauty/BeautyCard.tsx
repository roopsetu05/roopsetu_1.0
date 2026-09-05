"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface BeautyCardProps {
  title: string;
  category: string;
  image: string;
  href: string;
}

export default function BeautyCard({
  title,
  category,
  image,
  href,
}: BeautyCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <article className="flex flex-col h-full">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#f3ebe8] shadow-sm transition-all duration-500 group-hover:shadow-[0_12px_30px_rgba(41,37,38,0.15)] group-hover:-translate-y-1">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#f3ebe8] text-[#c9828d]/40 font-medium tracking-widest text-xs uppercase transition duration-500 group-hover:bg-[#efe4e0]">
              Coming Soon
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 pt-20 transition-opacity duration-500 group-hover:opacity-90">
            <span className="inline-block transform text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 transition-transform duration-500 group-hover:-translate-y-1">
              {category}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-3">
          <h3 className="text-[15px] font-semibold leading-snug text-[#292526] transition-colors duration-300 group-hover:text-[#c9828d]">
            {title}
          </h3>

          <ArrowUpRight
            size={18}
            strokeWidth={2}
            className="mt-0.5 shrink-0 text-[#a49a98] transition-all duration-300 group-hover:text-[#c9828d] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </article>
    </Link>
  );
}