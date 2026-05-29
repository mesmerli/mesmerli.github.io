import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { PERSONAL_INFO } from './data';
import { Heart } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const { t, tText } = useLanguage();

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
        activeSection={activeSection} 
      />

      {/* Main Contents */}
      <main>
        <Hero />
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
            <span>{tText(PERSONAL_INFO.name, PERSONAL_INFO.nameEn)}</span>
            <span>•</span>
            <span>{PERSONAL_INFO.englishName}</span>
          </div>
          <p className="max-w-md mx-auto leading-relaxed text-slate-500">
            {t('footer.sub')}
          </p>
          <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 pt-4 font-medium uppercase tracking-wider font-mono">
            <span>© 2026 {PERSONAL_INFO.englishName}. Designed with</span>
            <Heart size={10} className="text-red-500 fill-red-500 inline" />
            <span>in Taipei, Taiwan. {t('footer.rights')}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
