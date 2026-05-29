import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Server, Cloud, Paintbrush, ChevronRight } from 'lucide-react';
import { SKILLS } from '../data';
import { Skill } from '../types';

export default function Skills() {
  const categories: Array<Skill['category']> = ['Frontend', 'Backend', 'DevOps & Cloud', 'Design / Other'];
  const [activeTab, setActiveTab] = useState<Skill['category']>('Frontend');

  const filteredSkills = SKILLS.filter((s) => s.category === activeTab);

  const getTabIcon = (cat: Skill['category']) => {
    switch (cat) {
      case 'Frontend': return <Code2 size={14} />;
      case 'Backend': return <Server size={14} />;
      case 'DevOps & Cloud': return <Cloud size={14} />;
      case 'Design / Other': return <Paintbrush size={14} />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50/50 relative overflow-hidden border-b border-slate-200/50">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-slate-400/[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest block mb-2 font-bold">TECHNICAL STACK</span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tighter">
              掌握專業技術與前沿開發
            </h2>
          </div>
          <p className="max-w-md text-slate-500 text-xs sm:text-sm mt-4 md:mt-0 font-sans leading-relaxed">
            涵蓋雲端架構、全端運維、前端體驗設計及現代 AI 模型提示詞工程開發。
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`skill-tab-${cat.replace(/[^a-zA-Z]/g, '')}`}
              onClick={() => setActiveTab(cat)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs ${
                activeTab === cat
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-500 border-slate-200 hover:text-slate-900'
              }`}
            >
              {getTabIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[300px]">
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-slate-300 transition-all duration-200 shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-slate-900" />
                    <span className="font-sans font-bold text-sm text-slate-900">{skill.name}</span>
                  </div>
                  <span className="font-mono text-xs text-slate-900 font-bold">{skill.level}%</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="h-full bg-slate-900 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic Skill Summary Footer */}
        <div className="mt-12 bg-white border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-xs font-sans font-medium text-slate-700">
              專精範疇：生成式 AI 自定義 Agent 應對流程、雲端高併發核心模組重構。
            </span>
          </div>
          <button
            id="view-experience-btn"
            onClick={() => {
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[10px] font-mono text-slate-400 hover:text-slate-900 flex items-center gap-1 uppercase tracking-wider font-bold transition-colors cursor-pointer focus:outline-hidden"
          >
            <span>檢視詳細經歷點擊工作經歷</span>
            <ChevronRight size={12} />
          </button>
        </div>

      </div>
    </section>
  );
}
