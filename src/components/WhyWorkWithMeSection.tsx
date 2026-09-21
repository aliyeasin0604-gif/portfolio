import React from 'react';
import {
  Star,
  Palette,
  RefreshCw,
  Brain,
  Binary,
  Eye,
  HeartHandshake,
  Laptop,
  Sparkles,
  Flag
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const WhyWorkWithMeSection: React.FC = () => {
  const attributes = [
    { label: 'Creative Mindset', icon: Palette, color: 'text-[#adc6ff]' },
    { label: 'Continuous Learner', icon: RefreshCw, color: 'text-[#2fd9f4]' },
    { label: 'AI Curious', icon: Brain, color: 'text-[#d0bcff]' },
    { label: 'Analytical Thinking', icon: Binary, color: 'text-[#adc6ff]' },
    { label: 'Detail Oriented', icon: Eye, color: 'text-[#2fd9f4]' },
    { label: 'Dedicated', icon: HeartHandshake, color: 'text-[#d0bcff]' },
    { label: 'Modern Digital', icon: Laptop, color: 'text-[#adc6ff]' },
    { label: 'Willing to Learn', icon: Sparkles, color: 'text-[#2fd9f4]' }
  ];

  return (
    <section className="flex flex-col gap-6" id="why-work">
      {/* Title */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Star className="w-6 h-6 text-[#2fd9f4]" />
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#dfe3e9] tracking-tight">
            Why Work With Me
          </h2>
        </div>
        <p className="text-sm text-[#c2c6d6]">
          Core attributes that define my personal work ethic and collaborative value.
        </p>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {attributes.map((attr) => {
          const Icon = attr.icon;
          return (
            <div
              key={attr.label}
              className="p-4 rounded-xl bg-[#171c20] border border-white/5 flex flex-col items-center text-center gap-2 shadow-sm hover:border-white/15 hover:bg-[#1b2025] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#262a2f] flex items-center justify-center">
                <Icon className={`w-5 h-5 ${attr.color}`} />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#dfe3e9]">
                {attr.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* My Goal Callout Box */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#171c20] border border-white/5 shadow-lg flex flex-col gap-3 relative overflow-hidden">
        <div className="flex items-center gap-2">
          <Flag className="w-5 h-5 text-[#adc6ff]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#adc6ff] font-mono">
            My Professional Goal
          </span>
        </div>

        <blockquote className="font-headline text-lg sm:text-xl font-medium text-[#dfe3e9] leading-relaxed italic">
          {PERSONAL_INFO.goalQuote}
        </blockquote>
      </div>
    </section>
  );
};
