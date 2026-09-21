/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { AiWorksSection } from './components/AiWorksSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificateSection } from './components/CertificateSection';
import { EducationSection } from './components/EducationSection';
import { WhyWorkWithMeSection } from './components/WhyWorkWithMeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { TabType } from './types';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 3000);
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(label);
      showToast(`${label} copied to clipboard`);
      setTimeout(() => {
        setCopiedKey((curr) => (curr === label ? null : curr));
      }, 2500);
    }).catch(() => {
      showToast(`Could not copy: ${text}`);
    });
  };

  const handleNavigate = (sectionId: string) => {
    // If user is not on 'home' and wants to jump, switch to home or target tab
    if (sectionId === 'ai-works') {
      setActiveTab('ai-works');
    } else if (sectionId === 'projects') {
      setActiveTab('projects');
    } else if (sectionId === 'skills') {
      setActiveTab('skills');
    } else if (sectionId === 'about') {
      setActiveTab('about-me');
    } else if (sectionId === 'contact') {
      setActiveTab('contact');
    } else {
      setActiveTab('home');
    }

    // Smooth scroll to target element if present
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleSelectTab = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keep track of scroll or hash if any
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        handleNavigate(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1418] text-[#dfe3e9] flex flex-col selection:bg-[#adc6ff] selection:text-[#002e6a]">
      {/* Fixed Header */}
      <Header onNavigate={handleNavigate} activeSection={activeTab} />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20 pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
          {/* HOME VIEW: displays comprehensive full experience matching the HTML spec */}
          {activeTab === 'home' && (
            <>
              <HeroSection
                onNavigate={handleNavigate}
                onCopyText={handleCopyText}
                copiedKey={copiedKey}
              />
              <AboutSection onNavigate={handleNavigate} />
              <SkillsSection />
              <ServicesSection />
              <AiWorksSection />
              <ProjectsSection />
              <CertificateSection />
              <EducationSection />
              <WhyWorkWithMeSection />
              <ContactSection
                onCopyText={handleCopyText}
                copiedKey={copiedKey}
                onShowToast={showToast}
              />
            </>
          )}

          {/* AI WORKS DEDICATED VIEW */}
          {activeTab === 'ai-works' && (
            <div className="flex flex-col gap-10">
              <AiWorksSection />
              <ServicesSection />
            </div>
          )}

          {/* PROJECTS DEDICATED VIEW */}
          {activeTab === 'projects' && (
            <div className="flex flex-col gap-10">
              <ProjectsSection />
              <CertificateSection />
            </div>
          )}

          {/* SKILLS DEDICATED VIEW */}
          {activeTab === 'skills' && (
            <div className="flex flex-col gap-10">
              <SkillsSection />
              <EducationSection />
            </div>
          )}

          {/* ABOUT DEDICATED VIEW */}
          {activeTab === 'about-me' && (
            <div className="flex flex-col gap-10">
              <AboutSection onNavigate={handleNavigate} />
              <WhyWorkWithMeSection />
              <EducationSection />
              <CertificateSection />
            </div>
          )}

          {/* CONTACT DEDICATED VIEW */}
          {activeTab === 'contact' && (
            <div className="flex flex-col gap-10">
              <ContactSection
                onCopyText={handleCopyText}
                copiedKey={copiedKey}
                onShowToast={showToast}
              />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer onCopyEmail={() => handleCopyText(PERSONAL_INFO.email, 'Email address')} />

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onSelectTab={handleSelectTab} />

      {/* Toast notifications */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
