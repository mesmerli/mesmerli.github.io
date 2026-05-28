import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AiAssistant from './components/AiAssistant';
import { PERSONAL_INFO } from './data';
import { Heart } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  // Set up intersection observer for navigation highlighting
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger near center-top of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div id="app-root" className="bg-[#f8fafc] min-h-screen text-slate-800 selection:bg-slate-900 selection:text-white scroll-smooth font-sans">
      {/* Navigation */}
      <Navigation 
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)} 
        activeSection={activeSection} 
      />

      {/* Main Contents */}
      <main>
        <Hero onOpenAiAssistant={() => setIsAiAssistantOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Simple Footer */}
      <footer id="app-footer" className="bg-white border-t border-slate-200/50 py-12 px-6 lg:px-8 text-center text-xs text-slate-500 relative z-10 font-sans">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-slate-900 font-bold mb-2 text-xs sm:text-sm">
            <span>{PERSONAL_INFO.name}</span>
            <span>•</span>
            <span>{PERSONAL_INFO.englishName}</span>
          </div>
          <p className="max-w-md mx-auto leading-relaxed text-slate-500">
            採用 React 19 + TypeScript + Motion + Tailwind CSS 設計的 AI 互動式全端作品網頁。搭載 Gemini 智慧對話系統。
          </p>
          <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 pt-4 font-medium uppercase tracking-wider font-mono">
            <span>© 2026 {PERSONAL_INFO.englishName}. Designed with</span>
            <Heart size={10} className="text-red-500 fill-red-500 inline" />
            <span>in Taipei, Taiwan. All Rights Reserved.</span>
          </div>
        </div>
      </footer>

      {/* Interactive AI Agent Chat Assistant Drawer */}
      <AiAssistant 
        isOpen={isAiAssistantOpen} 
        onClose={() => setIsAiAssistantOpen(false)} 
        onOpen={() => setIsAiAssistantOpen(true)} 
      />
    </div>
  );
}
