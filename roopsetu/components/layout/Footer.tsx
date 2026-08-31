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
                href="https://in.pinterest.com/RoopSetu_26/"
                aria-label="Pinterest"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eadfdb] text-[#403a3a] transition hover:bg-[#c9828d] hover:text-white hover:border-[#c9828d]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.279 1.14c-.038.154-.127.189-.286.115-1.068-.498-1.736-2.066-1.736-3.332 0-2.71 1.968-5.204 5.679-5.204 2.99 0 5.318 2.131 5.318 4.975 0 2.973-1.874 5.367-4.477 5.367-1.396 0-2.709-.726-3.159-1.583 0 0-.691 2.632-.858 3.275-.31 1.197-1.15 2.693-1.714 3.606 1.34.409 2.76.629 4.237.629 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
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