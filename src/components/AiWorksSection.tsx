import React, { useState } from 'react';
import { Bot, Play, Sparkles, Sliders, ExternalLink } from 'lucide-react';
import { AI_WORKS } from '../data/portfolioData';
import { AiWorkItem } from '../types';
import { Modal } from './Modal';

export const AiWorksSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'images' | 'videos' | 'marketing' | 'experiments'>('all');
  const [activeModalItem, setActiveModalItem] = useState<AiWorkItem | null>(null);

  const filteredWorks = AI_WORKS.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  return (
    <section className="flex flex-col gap-6" id="ai-works">
      {/* Title */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-[#2fd9f4]" />
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#dfe3e9] tracking-tight">
            AI Creative Works
          </h2>
        </div>
        <p className="text-sm text-[#c2c6d6]">
          A collection of AI-generated images, videos, marketing creatives, and creative experiments by Nusrat Jahan Shraboni.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 py-1" id="filter-container">
        <button
          onClick={() => setSelectedFilter('all')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            selectedFilter === 'all'
              ? 'bg-[#adc6ff] text-[#002e6a] shadow-[0_2px_12px_rgba(173,198,255,0.4)]'
              : 'bg-[#262a2f] text-[#c2c6d6] hover:bg-[#353a3e] hover:text-white'
          }`}
        >
          All
        </button>

        <button
          onClick={() => setSelectedFilter('images')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            selectedFilter === 'images'
              ? 'bg-[#adc6ff] text-[#002e6a] shadow-[0_2px_12px_rgba(173,198,255,0.4)]'
              : 'bg-[#262a2f] text-[#c2c6d6] hover:bg-[#353a3e] hover:text-white'
          }`}
        >
          AI Images
        </button>

        <button
          onClick={() => setSelectedFilter('videos')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            selectedFilter === 'videos'
              ? 'bg-[#adc6ff] text-[#002e6a] shadow-[0_2px_12px_rgba(173,198,255,0.4)]'
              : 'bg-[#262a2f] text-[#c2c6d6] hover:bg-[#353a3e] hover:text-white'
          }`}
        >
          AI Videos
        </button>

        <button
          onClick={() => setSelectedFilter('marketing')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            selectedFilter === 'marketing'
              ? 'bg-[#adc6ff] text-[#002e6a] shadow-[0_2px_12px_rgba(173,198,255,0.4)]'
              : 'bg-[#262a2f] text-[#c2c6d6] hover:bg-[#353a3e] hover:text-white'
          }`}
        >
          Marketing Creatives
        </button>

        <button
          onClick={() => setSelectedFilter('experiments')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            selectedFilter === 'experiments'
              ? 'bg-[#adc6ff] text-[#002e6a] shadow-[0_2px_12px_rgba(173,198,255,0.4)]'
              : 'bg-[#262a2f] text-[#c2c6d6] hover:bg-[#353a3e] hover:text-white'
          }`}
        >
          Creative Experiments
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6" id="ai-works-grid">
        {filteredWorks.map((work) => {
          const isVideo = work.category === 'videos';
          return (
            <article
              key={work.id}
              onClick={() => setActiveModalItem(work)}
              className="flex flex-col rounded-2xl bg-[#171c20] border border-white/5 hover:border-[#adc6ff]/40 overflow-hidden shadow-md hover:shadow-[0_12px_30px_rgba(77,142,255,0.15)] transition-all cursor-pointer group"
            >
              {/* Media Container */}
              <div className="relative w-full aspect-video bg-[#262a2f] flex items-center justify-center overflow-hidden">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Video Play Overlay */}
                {isVideo && (
                  <div className="absolute inset-0 bg-[#0f1418]/40 flex items-center justify-center transition-colors group-hover:bg-[#0f1418]/25">
                    <div className="w-12 h-12 rounded-full bg-[#adc6ff] text-[#002e6a] flex items-center justify-center shadow-lg shadow-[#adc6ff]/30 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>
                )}

                {/* Tag pill */}
                <span className="absolute top-2 left-2 px-2.5 py-1 rounded text-xs font-semibold bg-[#0a0f13]/85 text-[#2fd9f4] backdrop-blur-md border border-white/5">
                  {work.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      work.category === 'videos' || work.category === 'experiments'
                        ? 'text-[#2fd9f4]'
                        : work.category === 'images'
                        ? 'text-[#adc6ff]'
                        : 'text-[#d0bcff]'
                    }`}
                  >
                    {work.categoryLabel}
                  </span>
                  <span className="text-xs text-[#8c909f] font-medium">{work.badge}</span>
                </div>

                <h4 className="font-headline text-base sm:text-lg font-bold text-[#dfe3e9] group-hover:text-white transition-colors">
                  {work.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#c2c6d6] line-clamp-2 leading-relaxed">
                  {work.description}
                </p>

                <div className="pt-2 mt-auto flex items-center justify-between text-xs text-[#8c909f]">
                  <span className="truncate">{work.tools}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#adc6ff]" />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Lightbox / Detail Modal */}
      <Modal
        isOpen={activeModalItem !== null}
        onClose={() => setActiveModalItem(null)}
        title={activeModalItem?.title || 'AI Artwork Details'}
        maxWidth="max-w-4xl"
      >
        {activeModalItem && (
          <div className="flex flex-col gap-5">
            {/* Visual display */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-white/10 shadow-lg">
              <img
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {activeModalItem.category === 'videos' && (
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#adc6ff] text-[#002e6a] flex items-center justify-center shadow-xl mb-3">
                    <Play className="w-8 h-8 fill-current translate-x-1" />
                  </div>
                  <span className="text-white font-semibold text-sm bg-black/70 px-3 py-1 rounded-full backdrop-blur-md">
                    15s Dynamic Reel Preview Ready
                  </span>
                </div>
              )}
            </div>

            {/* Metadata & breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-3 p-4 rounded-xl bg-[#262a2f]/60 border border-white/5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#2fd9f4] uppercase tracking-wider">
                  <Sliders className="w-4 h-4" />
                  <span>Production Parameters</span>
                </div>
                <div className="text-sm text-[#dfe3e9]">
                  <p className="text-xs text-[#8c909f]">Category</p>
                  <p className="font-semibold">{activeModalItem.categoryLabel} ({activeModalItem.badge})</p>
                </div>
                <div className="text-sm text-[#dfe3e9]">
                  <p className="text-xs text-[#8c909f]">Toolstack</p>
                  <p className="font-semibold text-[#adc6ff]">{activeModalItem.tools}</p>
                </div>
                {activeModalItem.metrics && (
                  <div className="text-sm text-[#dfe3e9]">
                    <p className="text-xs text-[#8c909f]">Performance Metric</p>
                    <p className="font-semibold text-[#d0bcff]">{activeModalItem.metrics}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3 p-4 rounded-xl bg-[#262a2f]/60 border border-white/5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#adc6ff] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Creative & Prompt Strategy</span>
                </div>
                <p className="text-xs sm:text-sm text-[#c2c6d6] leading-relaxed">
                  {activeModalItem.description}
                </p>
                {activeModalItem.promptSnippet && (
                  <div className="mt-1 p-2.5 rounded-lg bg-[#0f1418] border border-white/5">
                    <span className="text-[10px] uppercase font-bold text-[#8c909f] tracking-wider block mb-1">
                      Prompt Archetype
                    </span>
                    <p className="text-xs text-[#dfe3e9] italic font-mono">
                      "{activeModalItem.promptSnippet}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
