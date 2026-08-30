import { Info } from 'lucide-react';

interface NoticeBoxProps {
  title?: string;
  children: React.ReactNode;
}

export default function NoticeBox({ title = 'Good to know', children }: NoticeBoxProps) {
  return (
    <div className="flex items-start gap-4 p-5 my-8 rounded-2xl bg-primary-light/50 border border-primary-light">
      <div className="shrink-0 p-2 rounded-full bg-white shadow-sm text-primary">
        <Info size={20} />
      </div>
      <div>
        <h4 className="mb-1 text-sm font-bold tracking-wider uppercase text-[#a85a66]">{title}</h4>
        <div className="text-sm text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
