import React, { useState, useEffect } from 'react';
import { Menu, X, Bot, Github, Linkedin, Mail, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { useLanguage } from '../context/LanguageContext';

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t, tText } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.skills'), id: 'skills' },
    { label: t('nav.projects'), id: 'projects' },
    { label: t('nav.experience'), id: 'experience' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-md bg-slate-900 flex items-center justify-center font-bold text-white text-xs">
              {PERSONAL_INFO.avatarText}
            </div>
            <div>
              <span className="font-sans font-extrabold tracking-tight text-base text-slate-900 block leading-tight">{tText(PERSONAL_INFO.name, PERSONAL_INFO.englishName)}</span>
              <span className="font-mono text-[9px] text-slate-500 block tracking-widest uppercase">{t('nav.role')}</span>
            </div>
          </div>

          {/* Desktop Navigation Link */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer py-1.5 hover:text-slate-900 border-b-2 ${
                  activeSection === item.id 
                    ? 'text-slate-900 border-slate-900' 
                    : 'text-slate-500 border-transparent hover:border-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Quick Links */}
            <div className="flex space-x-3 text-slate-405 mr-2 items-center">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors duration-200" title="GitHub">
                <Github size={16} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors duration-200" title="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>

            {/* Language Selection Toggle */}
            <button
              onClick={() => setLanguage(language === 'zh-TW' ? 'en' : 'zh-TW')}
              className="px-2.5 py-1.5 rounded-md border border-slate-200 hover:border-slate-350 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-sans text-[10px] font-bold tracking-wider transition-colors duration-200 cursor-pointer flex items-center gap-1.5 shadow-xs"
              title="Switch Language / 切換語言"
            >
              <Globe size={11} className="text-slate-400" />
              <span>{language === 'zh-TW' ? 'EN' : '繁中'}</span>
            </button>

            {/* Contact Quick Trigger */}
            <button
              id="nav-contact-btn"
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 px-4 h-9 rounded-md bg-slate-900 hover:bg-slate-850 text-white font-sans text-xs font-semibold tracking-wide uppercase transition-all duration-250 cursor-pointer shadow-xs"
            >
              <Mail size={13} className="text-blue-400" />
              <span>{t('nav.contact')}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Language Button Quick access */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLanguage(language === 'zh-TW' ? 'en' : 'zh-TW');
              }}
              className="p-2.5 rounded-lg border border-slate-200/80 bg-white text-slate-600 hover:text-slate-900 text-[10px] font-bold tracking-widest cursor-pointer flex items-center gap-1"
            >
              <Globe size={11} className="text-slate-400" />
              <span>{language === 'zh-TW' ? 'EN' : '繁中'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-555 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[380px] border-b border-slate-200' : 'max-h-0'
        } bg-white`}
      >
        <div className="px-6 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-mobile-${item.id}`}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left py-2.5 font-sans font-semibold text-xs uppercase tracking-wider hover:text-slate-900 cursor-pointer ${
                activeSection === item.id ? 'text-slate-900 pl-3 border-l-2 border-slate-900' : 'text-slate-500'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex space-x-4 text-slate-400">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-slate-900">
                <Github size={18} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900">
                <Linkedin size={18} />
              </a>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                scrollToSection('contact');
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 text-white font-sans text-xs font-bold transition-all duration-200 cursor-pointer"
            >
              <Mail size={12} className="text-blue-400" />
              <span>{t('nav.contact')}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
