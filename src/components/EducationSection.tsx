import React from 'react';
import { GraduationCap } from 'lucide-react';
import { ACADEMIC_TRACK, PROGRESSION_MILESTONES } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-5 sm:gap-6" id="education">
      {/* Title */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-[#adc6ff]" />
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#dfe3e9] tracking-tight">
            My Education & Journey
          </h2>
        </div>
        <p className="text-sm text-[#c2c6d6]">
          Formal academic trajectory combined with focused self-driven specialization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        {/* Academic Timeline (5 cols) */}
        <div className="md:col-span-5 p-5 sm:p-6 rounded-2xl bg-[#171c20] border border-white/5 flex flex-col gap-5 shadow-md">
          <h3 className="text-xs font-bold text-[#adc6ff] uppercase tracking-wider font-mono">
            Academic Track
          </h3>

          <div className="flex flex-col gap-6 relative pl-5">
            {/* Timeline line */}
            <div className="absolute left-1.5 top-2.5 bottom-2.5 w-0.5 bg-[#31353a]" />

            {ACADEMIC_TRACK.map((track, idx) => {
              return (
                <div key={idx} className="relative flex flex-col gap-1">
                  {/* Dot */}
                  <div
                    className={`absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#171c20] ${
                      track.current
                        ? 'bg-[#adc6ff] shadow-[0_0_10px_#adc6ff]'
                        : 'bg-[#424754]'
                    }`}
                  />
                  <span
                    className={`text-xs font-semibold ${
                      track.current ? 'text-[#adc6ff]' : 'text-[#8c909f]'
                    }`}
                  >
                    {track.period}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-[#dfe3e9] leading-snug font-headline">
                    {track.degree}
                  </h4>
                  <p className="text-xs text-[#c2c6d6]">
                    {track.institution}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skill Progression Milestones (7 cols) */}
        <div className="md:col-span-7 p-5 sm:p-6 rounded-2xl bg-[#171c20] border border-white/5 flex flex-col gap-5 shadow-md">
          <h3 className="text-xs font-bold text-[#2fd9f4] uppercase tracking-wider font-mono">
            Skill Progression Milestones
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
            {PROGRESSION_MILESTONES.map((m) => {
              const numColor =
                m.color === 'tertiary'
                  ? 'text-[#2fd9f4]'
                  : m.color === 'primary'
                  ? 'text-[#adc6ff]'
                  : 'text-[#d0bcff]';

              const isWide = m.number === '07';

              return (
                <div
                  key={m.number}
                  className={`p-3 rounded-xl bg-[#262a2f] border border-white/5 flex items-center gap-3 ${
                    isWide ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span className={`font-mono font-bold text-sm ${numColor}`}>
                    {m.number}
                  </span>
                  <span className="text-[#dfe3e9] font-medium leading-snug">
                    {m.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
