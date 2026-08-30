import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ShopLook() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="rounded-[24px] border border-[#eadfdb] bg-white p-7 sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f3dde0] text-[#c9828d]">
              <Sparkles size={20} strokeWidth={1.7} />
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c9828d]">
                Recreate the look
              </p>

              <h2 className="mt-1 font-serif text-2xl text-[#292526]">
                Love what you see?
              </h2>

              <p className="mt-1 max-w-xl text-sm leading-6 text-[#77706f]">
                Discover the beauty products and tools that can help
                you recreate your favorite looks.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}