import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-[#eadfdb] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block"
            >
              <Image 
                src="/images/roopsetu-logo.png" 
                alt="RoopSetu" 
                width={500} 
                height={150} 
                className="w-[200px] sm:w-[260px] h-auto object-contain"
              />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#77706f]">
              Beauty inspiration for your next nail, hair and makeup look.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-2">

              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                aria-label="Pinterest"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eadfdb] text-sm font-semibold text-[#292526] transition hover:bg-[#f3dde0]"
              >
                P
              </a>

            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-[#292526]">
              Explore
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-[#77706f]">
              <Link
                href="/nails"
                className="transition hover:text-[#c9828d]"
              >
                Nail Art
              </Link>

              <Link
                href="/hairstyles"
                className="transition hover:text-[#c9828d]"
              >
                Hairstyles
              </Link>

              <Link
                href="/makeup"
                className="transition hover:text-[#c9828d]"
              >
                Makeup
              </Link>

              <Link
                href="/inspiration"
                className="transition hover:text-[#c9828d]"
              >
                Inspiration
              </Link>
            </div>
          </div>

          {/* RoopSetu */}
          <div>
            <h3 className="text-sm font-semibold text-[#292526]">
              RoopSetu
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-[#77706f]">
              <Link
                href="/about"
                className="transition hover:text-[#c9828d]"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-[#c9828d]"
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                className="transition hover:text-[#c9828d]"
              >
                Privacy
              </Link>

              <Link
                href="/affiliate-disclosure"
                className="transition hover:text-[#c9828d]"
              >
                Affiliate Disclosure
              </Link>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-[#eadfdb] pt-6">
          <p className="text-xs text-[#918887]">
            © {new Date().getFullYear()} RoopSetu. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}