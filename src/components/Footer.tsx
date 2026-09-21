import React from 'react';
import { Sparkles, Globe, Share2, AtSign } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onCopyEmail: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCopyEmail }) => {
  return (
    <footer className="w-full mt-12 py-10 px-4 bg-[#0a0f13] border-t border-white/5 flex flex-col items-center text-center gap-4">
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-[#2fd9f4]" />
        <span className="font-headline text-lg sm:text-xl font-bold text-[#dfe3e9]">
          {PERSONAL_INFO.name}
        </span>
      </div>

      <p className="text-xs uppercase tracking-widest text-[#8c909f] font-mono">
        {PERSONAL_INFO.role}
      </p>

      {/* Social / Connect icons */}
      <div className="flex items-center justify-center gap-3 my-1">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-11 h-11 rounded-full bg-[#262a2f] hover:bg-[#353a3e] border border-white/5 flex items-center justify-center text-[#dfe3e9] hover:text-[#adc6ff] transition-all cursor-pointer"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <Globe className="w-5 h-5" />
        </button>

        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: `${PERSONAL_INFO.name} Portfolio`,
                url: window.location.href
              }).catch(() => {});
            }
          }}
          className="w-11 h-11 rounded-full bg-[#262a2f] hover:bg-[#353a3e] border border-white/5 flex items-center justify-center text-[#dfe3e9] hover:text-[#2fd9f4] transition-all cursor-pointer"
          title="Share Portfolio"
          aria-label="Share Portfolio"
        >
          <Share2 className="w-5 h-5" />
        </button>

        <button
          onClick={onCopyEmail}
          className="w-11 h-11 rounded-full bg-[#262a2f] hover:bg-[#353a3e] border border-white/5 flex items-center justify-center text-[#dfe3e9] hover:text-[#d0bcff] transition-all cursor-pointer"
          title="Copy Email Address"
          aria-label="Copy Email Address"
        >
          <AtSign className="w-5 h-5" />
        </button>
      </div>

      <p className="text-xs text-[#8c909f]">
        © 2026 {PERSONAL_INFO.name}. All Rights Reserved.
      </p>
    </footer>
  );
};
