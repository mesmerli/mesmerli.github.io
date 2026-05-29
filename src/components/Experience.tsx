import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { EXPERIENCES } from '../data';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { t, tText } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>('exp1'); // expand first by default!

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 bg-slate-50/50 relative overflow-hidden border-b border-slate-200/50">
      {/* Glow background orbs - Soft Light Tones */}
      <div className="absolute top-1/2 left-[-10%] w-[450px] h-[450px] rounded-full bg-slate-400/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest block mb-2 font-bold">{t('experience.tag')}</span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tighter">
              {t('experience.title')}
            </h2>
          </div>
          <p className="max-w-md text-slate-500 text-xs sm:text-sm mt-4 md:mt-0 font-sans leading-relaxed">
            {t('experience.sub')}
          </p>
        </div>

        {/* Timeline Path Layout */}
        <div className="relative border-l border-slate-200 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const pointsToRender = tText(exp.points, exp.pointsEn);
            return (
              <motion.div
                key={exp.id}
                id={`exp-item-${exp.id}`}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Orb */}
                <div className="absolute left-[-41px] md:left-[-57px] top-1.5 w-5 h-5 rounded-full bg-white border-2 border-slate-900 flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-slate-900" />
                </div>

                {/* Main Experience Card */}
                <div 
                  className={`bg-white border transition-all duration-300 rounded-xl p-6 sm:p-8 cursor-pointer shadow-xs ${
                    isExpanded 
                      ? 'border-slate-900 ring-1 ring-slate-900 shadow-sm' 
                      : 'border-slate-200 hover:border-slate-350'
                  }`}
                  onClick={() => toggleExpand(exp.id)}
                >
                  {/* Top Details Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-grow">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-sans font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                          {tText(exp.role, exp.roleEn)}
                        </h3>
                        {exp.companyUrl ? (
                          <a 
                            href={exp.companyUrl} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="inline-flex items-center gap-1 text-[10px] uppercase font-mono font-bold text-slate-800 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded hover:bg-slate-150 transition-colors"
                            onClick={(e) => e.stopPropagation()} // stop parent trigger!
                          >
                            <span>{tText(exp.company, exp.companyEn)}</span>
                            <ExternalLink size={9} />
                          </a>
                        ) : (
                          <span className="text-[10px] uppercase font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
                            {tText(exp.company, exp.companyEn)}
                          </span>
                        )}
                      </div>

                      {/* Location & Period info */}
                      <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-slate-400 font-semibold uppercase tracking-wider pt-1">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} className="text-slate-400" />
                          <span>{tText(exp.period, exp.periodEn)}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} className="text-slate-400" />
                          <span>{tText(exp.location, exp.locationEn)}</span>
                        </span>
                      </div>
                    </div>

                    {/* Expand Trigger Icon */}
                    <button className="self-end md:self-auto p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors shadow-xs">
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                  {/* Expandable Core Actions and details */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-[800px] mt-6 pt-6 border-t border-slate-100' : 'max-h-0'
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-slate-600 text-sans leading-relaxed italic mb-6">
                      {tText(exp.description, exp.descriptionEn)}
                    </p>

                    {/* Bullet Points achievements */}
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2 font-bold">
                        {tText('關鍵工作成就', 'Key Core Achievements')}
                      </h4>
                      {pointsToRender.map((pt: string, i: number) => (
                        <div key={i} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-950 mt-2 flex-shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    {/* Associated Skills tags inside project */}
                    <div className="mt-8 pt-4 border-t border-slate-100">
                      <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3 font-bold">
                        {tText('應用的專業技能', 'Involved Engineering Technologies')}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-slate-600 font-medium whitespace-nowrap">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
