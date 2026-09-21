import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, Check, Copy, Clock, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onCopyText: (text: string, label: string) => void;
  copiedKey: string | null;
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onCopyText,
  copiedKey,
  onShowToast
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast(`Thank you, ${name}! Your message has been delivered.`);
      setName('');
      setEmail('');
      setMessage('');
    }, 600);
  };

  return (
    <section className="flex flex-col gap-6 mb-12" id="contact">
      {/* Title */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Mail className="w-6 h-6 text-[#d0bcff]" />
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#dfe3e9] tracking-tight">
            Let’s Connect
          </h2>
        </div>
        <p className="text-sm text-[#c2c6d6]">
          Have a project, idea, or collaboration in mind? I’d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Direct Contact Details (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#171c20] border border-white/5 flex flex-col justify-between gap-6 shadow-md">
          <div className="flex flex-col gap-3">
            <h3 className="font-headline text-lg font-bold text-[#dfe3e9]">
              Get in Touch Directly
            </h3>
            <p className="text-xs sm:text-sm text-[#c2c6d6] leading-relaxed">
              Reach out through phone, email, or message. I'm open to digital marketing internships, junior content roles, and creative projects.
            </p>

            <div className="flex flex-col gap-2.5 pt-2">
              {/* Name */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#262a2f] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-[#adc6ff]/10 flex items-center justify-center text-[#adc6ff] flex-shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#8c909f]">Name</span>
                  <span className="text-xs sm:text-sm font-semibold text-[#dfe3e9]">
                    {PERSONAL_INFO.name}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#262a2f] border border-white/5 group hover:bg-[#31353a] transition-colors">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-3 text-left flex-1"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#2fd9f4]/10 flex items-center justify-center text-[#2fd9f4] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-[#8c909f]">Phone</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#2fd9f4]">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </a>
                <button
                  onClick={() => onCopyText(PERSONAL_INFO.phone, 'Phone number')}
                  className="text-[#8c909f] hover:text-[#2fd9f4] p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                  title="Copy Phone"
                  aria-label="Copy Phone"
                >
                  {copiedKey === 'Phone number' ? (
                    <Check className="w-4 h-4 text-[#2fd9f4]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#262a2f] border border-white/5 group hover:bg-[#31353a] transition-colors">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 text-left flex-1 truncate mr-2"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#d0bcff]/10 flex items-center justify-center text-[#d0bcff] flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="text-[11px] text-[#8c909f]">Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#d0bcff] truncate">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>
                <button
                  onClick={() => onCopyText(PERSONAL_INFO.email, 'Email address')}
                  className="text-[#8c909f] hover:text-[#d0bcff] p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer flex-shrink-0"
                  title="Copy Email"
                  aria-label="Copy Email"
                >
                  {copiedKey === 'Email address' ? (
                    <Check className="w-4 h-4 text-[#2fd9f4]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#262a2f] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#dfe3e9] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-[#8c909f]">Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-[#dfe3e9]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Response window badge */}
          <div className="p-3 rounded-xl bg-[#262a2f] border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#8c909f]" />
              <span className="text-xs text-[#8c909f]">Response Window</span>
            </div>
            <span className="text-xs font-semibold text-[#2fd9f4]">
              {PERSONAL_INFO.responseWindow}
            </span>
          </div>
        </div>

        {/* Contact Form (7 cols) */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#171c20] border border-white/5 flex flex-col gap-4 shadow-md"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name-input" className="text-xs font-semibold text-[#c2c6d6]">
              Your Name
            </label>
            <input
              id="name-input"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Ayesha Rahman"
              className="w-full px-4 py-3 rounded-xl bg-[#262a2f] text-[#dfe3e9] placeholder:text-[#8c909f] text-sm focus:outline-none focus:ring-2 focus:ring-[#adc6ff] border border-transparent transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email-input" className="text-xs font-semibold text-[#c2c6d6]">
              Email Address
            </label>
            <input
              id="email-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. ayesha@example.com"
              className="w-full px-4 py-3 rounded-xl bg-[#262a2f] text-[#dfe3e9] placeholder:text-[#8c909f] text-sm focus:outline-none focus:ring-2 focus:ring-[#adc6ff] border border-transparent transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message-input" className="text-xs font-semibold text-[#c2c6d6]">
              Your Message
            </label>
            <textarea
              id="message-input"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project, idea, or role..."
              className="w-full px-4 py-3 rounded-xl bg-[#262a2f] text-[#dfe3e9] placeholder:text-[#8c909f] text-sm focus:outline-none focus:ring-2 focus:ring-[#adc6ff] border border-transparent transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full py-3.5 rounded-full bg-gradient-to-r from-[#4d8eff] to-[#571bc1] text-white font-semibold text-sm sm:text-base shadow-[0_4px_20px_rgba(77,142,255,0.35)] hover:shadow-[0_6px_28px_rgba(87,27,193,0.5)] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            <Send className="w-4 h-4" />
          </button>

          {submitted && (
            <div className="p-4 rounded-xl bg-[#009fb4]/20 border border-[#2fd9f4]/30 text-[#2fd9f4] text-xs sm:text-sm text-center flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span>Thank you! Your message has been prepared. I’ll get back to you soon.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
