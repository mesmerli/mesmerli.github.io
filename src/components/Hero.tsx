import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Bot, Sparkles, Mail, Circle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  onOpenAiAssistant: () => void;
}

export default function Hero({ onOpenAiAssistant }: HeroProps) {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-slate-50/50 border-b border-slate-200/60"
    >
      {/* Background Glowing Ambient Orbs - Soft Light Tones */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-slate-400/[0.05] blur-[120px] pointer-events-none" />
      
      {/* Dynamic Grid Background with soft white masks */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-blue-600 font-mono text-[11px] font-bold tracking-wider uppercase shadow-xs"
            >
              <Sparkles size={12} className="text-blue-500 animate-pulse" />
              <span>開放專案合作 & 正職機會中</span>
              <Circle size={6} className="fill-blue-500 stroke-none animate-ping ml-1" />
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans font-extrabold text-5xl sm:text-6xl text-slate-900 tracking-tighter leading-tight"
              >
                你好，我是 <span className="block mt-1 text-slate-900">{PERSONAL_INFO.name}</span>
              </motion.h1>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans font-semibold text-lg sm:text-xl text-blue-600 uppercase tracking-widest mt-2"
              >
                {PERSONAL_INFO.title}
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl"
              >
                {PERSONAL_INFO.bio}
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                id="hero-projects-btn"
                onClick={scrollToProjects}
                className="flex items-center justify-center gap-2 px-6 h-12 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-sans font-semibold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-xs"
              >
                <span>瀏覽精選專案</span>
                <ArrowUpRight size={14} />
              </button>

              <button
                id="hero-ai-assistant-btn"
                onClick={onOpenAiAssistant}
                className="flex items-center justify-center gap-2 px-6 h-12 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-sans font-semibold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-xs"
              >
                <Bot size={14} className="text-teal-600" />
                <span>與我的 AI 助理對話</span>
              </button>
            </motion.div>

            {/* Accomplishments Numbers */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200"
            >
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <span className="block font-mono text-[10px] text-slate-500 tracking-widest uppercase">{stat.label}</span>
                  <span className="block font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">{stat.value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Right Interactive Component Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 h-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              {/* Card top bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-slate-900 flex items-center justify-center font-bold text-white text-xs">
                    {PERSONAL_INFO.avatarText}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-900 leading-none">{PERSONAL_INFO.englishName}</span>
                    <span className="block text-[9px] font-mono text-slate-400 mt-1 uppercase tracking-widest">EST. 2019</span>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              </div>

              {/* Aesthetic Text layout */}
              <div className="my-8 space-y-4">
                <div className="font-mono text-slate-400 text-[10px] tracking-wider uppercase mb-1">{"// Core Philosophy"}</div>
                <div className="font-sans italic text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                  「{PERSONAL_INFO.tagline}」
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-[1px] bg-slate-100 flex-grow" />
                  <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest">Stack Focus</span>
                  <div className="h-[1px] bg-slate-100 flex-grow" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['React & Next', 'Generative AI', 'TypeScript', 'Node / Nest'].map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-50 border border-slate-150 text-slate-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Invitation */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold text-slate-900">正在尋找合作夥伴嗎？</span>
                  <span className="block text-[9px] font-mono text-slate-500 mt-1">發送電子郵件以啟動專案</span>
                </div>
                <button
                  onClick={scrollToContact}
                  className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center cursor-pointer transition-all duration-200 shadow-sm"
                >
                  <Mail size={14} />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
