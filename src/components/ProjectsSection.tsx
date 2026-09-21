import React, { useState } from 'react';
import { Briefcase, ArrowUpRight, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { Modal } from './Modal';

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section className="flex flex-col gap-5 sm:gap-6" id="projects">
      {/* Title */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-[#adc6ff]" />
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#dfe3e9] tracking-tight">
            My Projects
          </h2>
        </div>
        <p className="text-sm text-[#c2c6d6]">
          Practical, self-driven research and experiential marketing concepts.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {PROJECTS.map((proj) => {
          const numberColor =
            proj.accentColor === 'primary'
              ? 'text-[#adc6ff]'
              : proj.accentColor === 'secondary'
              ? 'text-[#d0bcff]'
              : 'text-[#2fd9f4]';

          return (
            <article
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className="p-5 sm:p-6 rounded-2xl bg-[#171c20] border border-white/5 hover:border-white/15 flex flex-col justify-between gap-5 shadow-md hover:shadow-[0_10px_28px_rgba(0,0,0,0.5)] transition-all cursor-pointer group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold font-mono tracking-wider ${numberColor}`}>
                    PROJECT {proj.number}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#262a2f] text-[#c2c6d6] border border-white/5">
                    {proj.badge}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-headline text-lg sm:text-xl font-bold text-[#dfe3e9] group-hover:text-white transition-colors">
                    {proj.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-[#8c909f] group-hover:text-[#adc6ff] transition-colors flex-shrink-0 mt-1" />
                </div>

                <p className="text-xs sm:text-sm text-[#c2c6d6] leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {proj.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded text-xs font-medium bg-[#262a2f] text-[#8c909f] border border-white/5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#8c909f]">
                <span>Role: <strong className="text-[#dfe3e9] font-medium">{proj.role}</strong></span>
                <span className="text-[#adc6ff] font-semibold text-[11px] uppercase tracking-wider">
                  View Case
                </span>
              </div>
            </article>
          );
        })}
      </div>

      {/* Project Case Detail Modal */}
      <Modal
        isOpen={activeProject !== null}
        onClose={() => setActiveProject(null)}
        title={activeProject ? `Project ${activeProject.number}: ${activeProject.title}` : 'Case Study'}
      >
        {activeProject && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#262a2f] border border-white/5">
              <span className="text-xs text-[#8c909f]">Classification:</span>
              <span className="text-xs font-semibold text-[#2fd9f4]">{activeProject.badge}</span>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-xs uppercase tracking-widest text-[#8c909f] font-bold">
                Project Overview
              </h4>
              <p className="text-sm text-[#dfe3e9] leading-relaxed">
                {activeProject.description}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-xs uppercase tracking-widest text-[#8c909f] font-bold">
                Role & Execution Responsibility
              </h4>
              <p className="text-sm font-semibold text-[#adc6ff]">
                {activeProject.role}
              </p>
            </div>

            {activeProject.impact && (
              <div className="p-4 rounded-xl bg-[#1b2025] border border-white/5 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2fd9f4] uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 text-[#2fd9f4]" />
                  <span>Key Result & Takeaway</span>
                </div>
                <p className="text-xs sm:text-sm text-[#dfe3e9]">
                  {activeProject.impact}
                </p>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <h4 className="text-xs uppercase tracking-widest text-[#8c909f] font-bold">
                Applied Toolset & Methodology
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.tools.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#262a2f] text-[#dfe3e9] border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
