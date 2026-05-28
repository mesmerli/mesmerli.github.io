import React, { useState, useEffect } from 'react';
import { Menu, X, Bot, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface NavigationProps {
  onOpenAiAssistant: () => void;
  activeSection: string;
}

export default function Navigation({ onOpenAiAssistant, activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '關於我', id: 'about' },
    { label: '核心技能', id: 'skills' },
    { label: '精選專案', id: 'projects' },
    { label: '工作經歷', id: 'experience' },
    { label: '聯絡我', id: 'contact' },
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
              <span className="font-sans font-extrabold tracking-tight text-base text-slate-900 block leading-tight">{PERSONAL_INFO.name}</span>
              <span className="font-mono text-[9px] text-slate-500 block tracking-widest uppercase">Senior Full-Stack</span>
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
            <div className="flex space-x-3 text-slate-450 mr-2">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors duration-200" title="GitHub">
                <Github size={16} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors duration-200" title="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>

            {/* AI Assistant Quick Trigger */}
            <button
              id="nav-ai-btn"
              onClick={onOpenAiAssistant}
              className="flex items-center gap-2 px-4 h-9 rounded-md bg-slate-900 hover:bg-slate-850 text-white font-sans text-xs font-semibold tracking-wide uppercase transition-all duration-250 cursor-pointer shadow-xs"
            >
              <Bot size={13} className="text-teal-400" />
              <span>與 AI 分身聊聊</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenAiAssistant}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
              title="AI 助理"
            >
              <Bot size={16} />
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
          isOpen ? 'max-h-[350px] border-b border-slate-200' : 'max-h-0'
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
                onOpenAiAssistant();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 text-white font-sans text-xs font-bold transition-all duration-200 cursor-pointer"
            >
              <Bot size={12} className="text-teal-400" />
              <span>與 AI 分身聊聊</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
