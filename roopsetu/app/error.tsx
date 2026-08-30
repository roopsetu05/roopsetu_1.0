'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="mb-4 text-3xl font-bold font-playfair">Something went wrong!</h2>
      <p className="max-w-md mb-8 text-gray-500">
        We apologize for the inconvenience. Our team has been notified.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2 text-white transition-colors bg-black rounded-full hover:bg-gray-800"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-6 py-2 text-black transition-colors border border-black rounded-full hover:bg-gray-100"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
