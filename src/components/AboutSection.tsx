import React from 'react';
import { BadgeCheck, Calculator, ArrowRight, Compass, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section className="flex flex-col gap-5 sm:gap-6" id="about">
      {/* Header */}
      <div className="flex items-center gap-2">
        <BadgeCheck className="w-6 h-6 text-[#d0bcff]" />
        <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#dfe3e9] tracking-tight">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        {/* Left decorative summary box */}
        <div className="md:col-span-4 p-5 sm:p-6 rounded-2xl bg-[#171c20] border border-white/5 flex flex-col justify-between gap-6 shadow-md">
          <div className="flex flex-col gap-2">
            <div className="w-12 h-12 rounded-xl bg-[#571bc1] text-[#c4abff] flex items-center justify-center mb-2 shadow-inner">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-headline text-xl font-semibold text-[#dfe3e9]">
              Mathematics & AI
            </h3>
            <p className="text-sm text-[#c2c6d6] leading-relaxed">
              Blending structured mathematical rationale with generative creative technology.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 pt-2">
            <div className="p-3 rounded-xl bg-[#262a2f] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#8c909f]" />
                <span className="text-xs text-[#8c909f]">Focus Area</span>
              </div>
              <span className="text-xs text-[#2fd9f4] font-semibold">Digital Growth & AI</span>
            </div>

            <div className="p-3 rounded-xl bg-[#262a2f] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8c909f]" />
                <span className="text-xs text-[#8c909f]">Location</span>
              </div>
              <span className="text-xs text-[#dfe3e9] font-semibold">{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>

        {/* Right detailed statement */}
        <div className="md:col-span-8 p-6 sm:p-7 rounded-2xl bg-[#171c20] border border-white/5 flex flex-col justify-between gap-5 shadow-md">
          <div className="flex flex-col gap-4 text-base text-[#c2c6d6] leading-relaxed">
            <p>
              Hello, I’m <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, an Honours 3rd Year Mathematics student from Bangladesh with a strong interest in Digital Marketing and AI Content Creation.
            </p>
            <p>
              Alongside my academic studies, I am developing practical skills in digital marketing, AI-powered content creation, social media marketing, and modern digital tools.
            </p>
            <p>
              My Mathematics background helps me develop analytical thinking, problem-solving ability, and attention to detail. I want to combine these qualities with creativity and AI technology to create meaningful digital solutions.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('skills')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#262a2f] hover:bg-[#353a3e] text-[#adc6ff] font-medium text-xs sm:text-sm border border-white/5 transition-colors cursor-pointer"
            >
              <span>Explore My Skills & Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
