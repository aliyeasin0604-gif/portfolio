import React from 'react';
import { Sparkles, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="fixed top-0 w-full z-40 pt-safe bg-[#0f1418]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
      <div className="h-16 px-4 sm:px-6 max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2 text-left group cursor-pointer focus:outline-none"
        >
          <Sparkles className="w-5 h-5 text-[#2fd9f4] transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-headline font-bold text-xl tracking-tight bg-gradient-to-r from-[#adc6ff] via-[#d0bcff] to-[#2fd9f4] bg-clip-text text-transparent">
            {PERSONAL_INFO.shortName}
          </span>
        </button>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('contact')}
            className="hidden sm:flex items-center justify-center h-10 px-5 rounded-full bg-gradient-to-r from-[#4d8eff] to-[#571bc1] text-white font-medium text-xs uppercase tracking-wider shadow-[0_4px_20px_-2px_rgba(77,142,255,0.4)] hover:shadow-[0_6px_28px_rgba(87,27,193,0.6)] hover:scale-102 active:scale-98 transition-all cursor-pointer"
          >
            Let's Connect
          </button>

          <button
            onClick={() => onNavigate('about')}
            title="View Profile Overview"
            className="w-9 h-9 rounded-full bg-[#adc6ff] text-[#002e6a] flex items-center justify-center hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-sm"
            aria-label="Profile Overview"
          >
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
