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
    <Link href={href} className="group block">
      <article>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#f3ebe8]">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#f3ebe8] text-[#c9828d]/40 font-medium tracking-widest text-xs uppercase transition duration-500 group-hover:bg-[#efe4e0]">
              Coming Soon
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-4 pt-12">
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/85">
              {category}
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-start justify-between gap-3">
          <h3 className="text-[14px] font-medium leading-5 text-[#302b2b]">
            {title}
          </h3>

          <ArrowUpRight
            size={17}
            strokeWidth={1.7}
            className="mt-0.5 shrink-0 text-[#a49a98] transition group-hover:text-[#c9828d]"
          />
        </div>
      </article>
    </Link>
  );
}