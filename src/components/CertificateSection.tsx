import React, { useState } from 'react';
import { Award, ExternalLink, Download, CheckCircle2, ShieldCheck, Eye } from 'lucide-react';
import { CERTIFICATE_DATA } from '../data/portfolioData';
import { Modal } from './Modal';

export const CertificateSection: React.FC = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <section className="flex flex-col gap-5 sm:gap-6" id="certificates">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Award className="w-6 h-6 text-[#d0bcff]" />
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#dfe3e9] tracking-tight">
            Certificates & Achievements
          </h2>
        </div>
        <p className="text-sm text-[#c2c6d6]">
          Verified credentials validating technical proficiency and digital workplace preparedness.
        </p>
      </div>

      {/* Showcase Card */}
      <div className="p-5 sm:p-7 rounded-2xl bg-[#171c20] border border-white/5 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center shadow-lg">
        {/* Certificate Preview Image Container */}
        <div
          onClick={() => setIsViewerOpen(true)}
          className="relative w-full lg:w-3/5 rounded-xl overflow-hidden bg-[#262a2f] shadow-inner group border border-white/10 cursor-pointer"
        >
          <img
            src={CERTIFICATE_DATA.previewUrl}
            alt="Certificate of Completion: Excel Essentials for Workplace Productivity issued to Nusrat Jahan Shraboni by Passport to Earning Bangladesh, UNICEF and Generation Unlimited"
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-102"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="px-4 py-2 rounded-full bg-[#171c20]/90 text-[#adc6ff] text-xs font-semibold flex items-center gap-2 backdrop-blur-md shadow-lg">
              <Eye className="w-4 h-4" />
              <span>Click to Enlarge</span>
            </div>
          </div>
        </div>

        {/* Certificate Details & Metadata */}
        <div className="w-full lg:w-2/5 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#4d8eff]/20 text-[#adc6ff] border border-[#adc6ff]/20">
              Verified Credential
            </span>
            <span className="text-xs text-[#8c909f] font-medium">{CERTIFICATE_DATA.date}</span>
          </div>

          <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#dfe3e9] leading-tight">
            {CERTIFICATE_DATA.title}
          </h3>

          <div className="flex flex-col gap-1.5 text-xs sm:text-sm text-[#c2c6d6]">
            <p>
              <span className="text-[#8c909f]">Issued to:</span>{' '}
              <strong className="text-white font-semibold">{CERTIFICATE_DATA.recipient}</strong>
            </p>
            <p>
              <span className="text-[#8c909f]">Issued by:</span> {CERTIFICATE_DATA.issuer}
            </p>
            <p>
              <span className="text-[#8c909f]">Endorsed by:</span> {CERTIFICATE_DATA.endorser}
            </p>
          </div>

          {/* Verification Badge */}
          <div className="p-3 rounded-xl bg-[#262a2f] border border-white/5 flex items-center gap-2.5 text-[#c2c6d6]">
            <ShieldCheck className="w-5 h-5 text-[#2fd9f4] flex-shrink-0" />
            <span className="text-xs font-medium">{CERTIFICATE_DATA.verificationTag}</span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setIsViewerOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#adc6ff] hover:bg-[#8bb4ff] text-[#002e6a] font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Certificate</span>
            </button>

            <a
              href={CERTIFICATE_DATA.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Nusrat_Jahan_Shraboni_Certificate.png"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#262a2f] hover:bg-[#353a3e] text-[#dfe3e9] font-medium text-xs sm:text-sm border border-white/5 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <Modal
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        title={CERTIFICATE_DATA.title}
        maxWidth="max-w-4xl"
      >
        <div className="flex flex-col gap-4">
          <div className="w-full bg-[#0a0f13] rounded-xl overflow-hidden border border-white/10 p-2">
            <img
              src={CERTIFICATE_DATA.previewUrl}
              alt={CERTIFICATE_DATA.title}
              className="w-full h-auto object-contain max-h-[70vh] mx-auto rounded"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5">
            <div className="flex items-center gap-2 text-xs text-[#8c909f]">
              <CheckCircle2 className="w-4 h-4 text-[#2fd9f4]" />
              <span>Official UNICEF & Generation Unlimited Partner Credential</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={CERTIFICATE_DATA.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#262a2f] hover:bg-[#353a3e] text-xs font-semibold text-[#adc6ff] inline-flex items-center gap-1.5"
              >
                <span>Direct Asset Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={CERTIFICATE_DATA.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#adc6ff] text-[#002e6a] hover:bg-white text-xs font-semibold inline-flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Asset</span>
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};
