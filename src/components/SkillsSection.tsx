import React, { useState } from 'react';
import {
  Megaphone,
  Bot,
  Share2,
  BrainCircuit,
  FileEdit,
  Terminal,
  Lightbulb,
  BarChart3,
  Calendar,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'core' | 'practical' | 'growth'>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Megaphone':
        return <Megaphone className="w-5 h-5" />;
      case 'Bot':
        return <Bot className="w-5 h-5" />;
      case 'Share2':
        return <Share2 className="w-5 h-5" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5" />;
      case 'FileEdit':
        return <FileEdit className="w-5 h-5" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const filteredSkills = SKILLS.filter((skill) => {
    if (activeFilter === 'all') return true;
    return skill.type === activeFilter;
  });

  return (
    <section className="flex flex-col gap-6" id="skills">
      {/* Title */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-[#adc6ff]" />
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#dfe3e9] tracking-tight">
            My Skills
          </h2>
        </div>
        <p className="text-sm text-[#c2c6d6]">
          ATS-structured competencies & verified digital proficiencies.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            activeFilter === 'all'
              ? 'bg-[#adc6ff] text-[#002e6a] shadow-[0_0_12px_rgba(173,198,255,0.3)]'
              : 'bg-[#262a2f] text-[#c2c6d6] hover:bg-[#353a3e] hover:text-white'
          }`}
        >
          All ({SKILLS.length})
        </button>
        <button
          onClick={() => setActiveFilter('core')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            activeFilter === 'core'
              ? 'bg-[#d0bcff] text-[#23005c] shadow-[0_0_12px_rgba(208,188,255,0.3)]'
              : 'bg-[#262a2f] text-[#c2c6d6] hover:bg-[#353a3e] hover:text-white'
          }`}
        >
          Core Competencies
        </button>
        <button
          onClick={() => setActiveFilter('practical')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            activeFilter === 'practical'
              ? 'bg-[#4d8eff] text-white shadow-[0_0_12px_rgba(77,142,255,0.3)]'
              : 'bg-[#262a2f] text-[#c2c6d6] hover:bg-[#353a3e] hover:text-white'
          }`}
        >
          Practical Skills
        </button>
        <button
          onClick={() => setActiveFilter('growth')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            activeFilter === 'growth'
              ? 'bg-[#2fd9f4] text-[#00363e] shadow-[0_0_12px_rgba(47,217,244,0.3)]'
              : 'bg-[#262a2f] text-[#c2c6d6] hover:bg-[#353a3e] hover:text-white'
          }`}
        >
          AI & Growth
        </button>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {filteredSkills.map((skill) => {
          const isSelected = selectedSkill?.id === skill.id;
          const badgeStyles =
            skill.type === 'core'
              ? 'bg-[#571bc1]/30 text-[#e9ddff] border border-[#d0bcff]/20'
              : skill.type === 'growth'
              ? 'bg-[#009fb4]/20 text-[#2fd9f4] border border-[#2fd9f4]/20'
              : 'bg-[#4d8eff]/15 text-[#adc6ff] border border-[#4d8eff]/20';

          const iconContainerStyles =
            skill.type === 'core'
              ? 'bg-[#d0bcff]/10 text-[#d0bcff]'
              : skill.type === 'growth'
              ? 'bg-[#2fd9f4]/10 text-[#2fd9f4]'
              : 'bg-[#adc6ff]/10 text-[#adc6ff]';

          return (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(isSelected ? null : skill)}
              className={`p-4 rounded-xl bg-[#171c20] border transition-all cursor-pointer shadow-sm flex flex-col justify-between gap-3 ${
                isSelected
                  ? 'border-[#2fd9f4] shadow-[0_0_20px_rgba(47,217,244,0.15)] bg-[#1b2025]'
                  : 'border-white/5 hover:border-white/15 hover:bg-[#1b2025]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${iconContainerStyles}`}>
                    {getSkillIcon(skill.icon)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#dfe3e9] leading-tight">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-[#8c909f] mt-0.5">
                      {skill.level}
                    </p>
                  </div>
                </div>

                <span className={`px-2.5 py-0.5 rounded text-[11px] font-semibold flex-shrink-0 ${badgeStyles}`}>
                  {skill.tag}
                </span>
              </div>

              {skill.description && (
                <div className="pt-2 border-t border-white/5">
                  <p className="text-xs text-[#c2c6d6] leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ATS Alignment Footnote */}
      <div className="flex items-center gap-2 p-3 rounded-xl bg-[#171c20] border border-white/5 text-xs text-[#8c909f]">
        <CheckCircle2 className="w-4 h-4 text-[#2fd9f4] flex-shrink-0" />
        <span>
          Skill definitions mapped to quantitative workflow standards in digital analytics and generative AI asset production.
        </span>
      </div>
    </section>
  );
};
