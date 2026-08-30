import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface LinkButtonProps {
  href: string;
  text: string;
}

export default function LinkButton({ href, text }: LinkButtonProps) {
  return (
    <div className="my-6">
      <Link 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white transition-colors bg-black rounded-full hover:bg-gray-800"
      >
        {text}
        <ExternalLink size={18} />
      </Link>
    </div>
  );
}
