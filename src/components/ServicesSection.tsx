import React from 'react';
import { Handshake } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-5 sm:gap-6" id="services">
      {/* Title */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Handshake className="w-6 h-6 text-[#2fd9f4]" />
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#dfe3e9] tracking-tight">
            What I Can Help With
          </h2>
        </div>
        <p className="text-sm text-[#c2c6d6]">
          Pragmatic, high-impact digital solutions tailored to your brand.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {SERVICES.map((service) => {
          const numberColor =
            service.color === 'primary'
              ? 'text-[#adc6ff]'
              : service.color === 'tertiary'
              ? 'text-[#2fd9f4]'
              : 'text-[#d0bcff]';

          return (
            <div
              key={service.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#171c20] border border-white/5 hover:border-white/15 flex flex-col gap-3 shadow-md hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:scale-[1.01] transition-all group"
            >
              <span className={`font-headline text-2xl sm:text-3xl font-bold ${numberColor}`}>
                {service.number}
              </span>

              <h3 className="font-headline text-lg font-semibold text-[#dfe3e9] group-hover:text-white transition-colors">
                {service.title}
              </h3>

              <p className="text-sm text-[#c2c6d6] leading-relaxed">
                {service.description}
              </p>

              {service.tools && service.tools.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
                  {service.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#262a2f] text-[#8c909f] border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
