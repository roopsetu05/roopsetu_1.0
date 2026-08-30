import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-6xl font-bold font-playfair mb-4 text-primary">404</h2>
      <h3 className="mb-4 text-3xl font-bold font-playfair">Page Not Found</h3>
      <p className="max-w-md mb-8 text-gray-500">
        We couldn't find the page you were looking for. It might have been moved or doesn't exist.
      </p>
      <Link
        href="/"
        className="px-8 py-3 text-white transition-colors bg-black rounded-full hover:bg-gray-800"
      >
        Return Home
      </Link>
    </div>
  );
}
