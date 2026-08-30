import { CheckCircle2, XCircle } from 'lucide-react';

interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export default function ProsCons({ pros = [], cons = [] }: ProsConsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 my-8 sm:grid-cols-2">
      {pros.length > 0 && (
        <div className="p-6 bg-green-50 rounded-2xl">
          <h4 className="flex items-center gap-2 mb-4 text-lg font-bold text-green-900 font-playfair">
            <CheckCircle2 className="text-green-600" size={20} />
            Pros
          </h4>
          <ul className="space-y-2">
            {pros.map((pro, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-green-800">
                <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-green-500" />
                {pro}
              </li>
            ))}
          </ul>
        </div>
      )}

      {cons.length > 0 && (
        <div className="p-6 bg-red-50 rounded-2xl">
          <h4 className="flex items-center gap-2 mb-4 text-lg font-bold text-red-900 font-playfair">
            <XCircle className="text-red-500" size={20} />
            Cons
          </h4>
          <ul className="space-y-2">
            {cons.map((con, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-red-800">
                <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-red-400" />
                {con}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
