
import React from 'react';
import { User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-black text-[#5C21B5] tracking-tight">StubHub</span>
      </div>
      <button className="p-2 hover:bg-slate-50 rounded-full transition-colors">
        <User size={24} className="text-slate-700" />
      </button>
    </header>
  );
};
