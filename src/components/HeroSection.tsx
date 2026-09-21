import React from 'react';
import { Zap, Eye, Send, Phone, Mail, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO, QUICK_TAGS } from '../data/portfolioData';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onCopyText: (text: string, label: string) => void;
  copiedKey: string | null;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onCopyText,
  copiedKey
}) => {
  return (
    <section className="relative flex flex-col pt-4 sm:pt-6 gap-6 sm:gap-8" id="hero">
      {/* Ambient glow decorative layers */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#4d8eff]/15 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-48 right-0 w-72 h-72 bg-[#571bc1]/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Top Badge */}
      <div className="self-start inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#262a2f] border border-white/5 shadow-[0_0_15px_rgba(47,217,244,0.12)]">
        <span className="w-2 h-2 rounded-full bg-[#2fd9f4] shadow-[0_0_8px_#2fd9f4] animate-pulse" />
        <span className="text-[11px] sm:text-xs font-semibold text-[#2fd9f4] uppercase tracking-widest font-sans">
          {PERSONAL_INFO.badgeText}
        </span>
      </div>

      {/* Main Hero Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Text & Intro (7 cols on desktop) */}
        <div className="flex flex-col gap-4 sm:gap-5 lg:col-span-7">
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#dfe3e9] leading-[1.15]">
            Hi, I’m{' '}
            <span className="bg-gradient-to-r from-[#adc6ff] via-[#d0bcff] to-[#2fd9f4] bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          <p className="font-headline text-xl sm:text-2xl text-[#2fd9f4] font-semibold tracking-tight">
            {PERSONAL_INFO.role}
          </p>

          <p className="text-[#c2c6d6] text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
            {PERSONAL_INFO.bio}
          </p>

          {/* Highlight Quote Line */}
          <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-[#171c20] border border-white/5 shadow-inner">
            <div className="w-8 h-8 rounded-lg bg-[#adc6ff]/10 flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 text-[#adc6ff]" />
            </div>
            <span className="text-xs sm:text-sm text-[#adc6ff] font-medium tracking-wide">
              {PERSONAL_INFO.tagline}
            </span>
          </div>

          {/* Skill Chips / Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {QUICK_TAGS.map((tag, idx) => {
              const colorClasses =
                idx === 0
                  ? 'text-[#dfe3e9] bg-[#262a2f]'
                  : idx === 1
                  ? 'text-[#adc6ff] bg-[#262a2f]'
                  : idx === 2
                  ? 'text-[#2fd9f4] bg-[#262a2f]'
                  : idx === 3
                  ? 'text-[#d0bcff] bg-[#262a2f]'
                  : 'text-[#c2c6d6] bg-[#262a2f]';
              return (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-xs font-medium border border-white/5 ${colorClasses}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-wrap gap-3 pt-3">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#4d8eff] to-[#571bc1] text-white font-medium text-sm shadow-[0_4px_24px_rgba(77,142,255,0.35)] hover:shadow-[0_6px_30px_rgba(87,27,193,0.5)] hover:scale-102 active:scale-98 transition-all cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>View My Work</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#262a2f] hover:bg-[#353a3e] text-[#dfe3e9] font-medium text-sm border border-white/5 active:scale-98 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>

        {/* Profile Portrait & Quick Detail Card (5 cols on desktop) */}
        <div className="flex flex-col gap-4 lg:col-span-5 items-center">
          {/* Portrait Container with Ambient Glow Frame */}
          <div className="relative w-full max-w-[320px] aspect-[0.75] rounded-2xl overflow-hidden bg-[#262a2f] shadow-[0_10px_35px_rgba(77,142,255,0.25)] flex items-center justify-center group border border-white/10">
            <img
              src={PERSONAL_INFO.portraitUrl}
              alt="Nusrat Jahan Shraboni - Digital Marketer and AI Content Creator"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f13] via-transparent to-transparent opacity-85" />
            
            {/* Live status badge */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2 rounded-xl bg-[#0a0f13]/85 backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2fd9f4] animate-pulse shadow-[0_0_8px_#2fd9f4]" />
                <span className="text-xs font-semibold text-[#dfe3e9]">{PERSONAL_INFO.availability}</span>
              </div>
              <span className="text-[11px] font-semibold text-[#adc6ff] uppercase tracking-wider">
                {PERSONAL_INFO.portfolioYear}
              </span>
            </div>
          </div>

          {/* Personal Quick Details Card */}
          <div className="w-full max-w-[320px] p-4 rounded-2xl bg-[#171c20] border border-white/5 flex flex-col gap-1.5 shadow-md">
            <div className="flex items-center justify-between py-1 border-b border-white/5">
              <span className="text-xs text-[#8c909f]">Name</span>
              <span className="text-xs text-[#dfe3e9] font-semibold">{PERSONAL_INFO.name}</span>
            </div>
            
            <div className="flex items-center justify-between py-1 border-b border-white/5">
              <span className="text-xs text-[#8c909f]">Role</span>
              <span className="text-xs text-[#2fd9f4] font-semibold">Digital Marketer | AI Creator</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-white/5">
              <span className="text-xs text-[#8c909f]">Education</span>
              <span className="text-xs text-[#dfe3e9]">{PERSONAL_INFO.educationSummary}</span>
            </div>

            {/* Phone row with quick copy */}
            <div className="flex items-center justify-between py-1 border-b border-white/5">
              <span className="text-xs text-[#8c909f]">Phone</span>
              <div className="flex items-center gap-1.5">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-xs text-[#adc6ff] hover:underline"
                >
                  {PERSONAL_INFO.phone}
                </a>
                <button
                  onClick={() => onCopyText(PERSONAL_INFO.phone, 'Phone number')}
                  className="text-[#8c909f] hover:text-[#adc6ff] p-1 rounded transition-colors"
                  title="Copy phone"
                  aria-label="Copy phone"
                >
                  {copiedKey === 'Phone number' ? (
                    <Check className="w-3 h-3 text-[#2fd9f4]" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>
            </div>

            {/* Email row with quick copy */}
            <div className="flex items-center justify-between py-1">
              <span className="text-xs text-[#8c909f]">Email</span>
              <div className="flex items-center gap-1.5 max-w-[170px]">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs text-[#adc6ff] truncate hover:underline"
                  title={PERSONAL_INFO.email}
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={() => onCopyText(PERSONAL_INFO.email, 'Email address')}
                  className="text-[#8c909f] hover:text-[#adc6ff] p-1 rounded transition-colors flex-shrink-0"
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {copiedKey === 'Email address' ? (
                    <Check className="w-3 h-3 text-[#2fd9f4]" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
