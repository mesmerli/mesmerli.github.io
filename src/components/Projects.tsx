import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, Sparkles, X } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { label: '全部作品', id: 'all' },
    { label: 'AI 生成應用', id: 'ai' },
    { label: '全端系統', id: 'fullstack' },
    { label: '前端一體化', id: 'frontend' },
    { label: '極簡行動應用', id: 'mobile' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden border-b border-slate-200/50">
      {/* Decorative Orbs */}
      <div className="absolute bottom-0 right-[15%] w-96 h-96 rounded-full bg-slate-400/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest block mb-2 font-bold">PORTFOLIO</span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tighter">
              精選成果與開源專案
            </h2>
          </div>
          <p className="max-w-md text-slate-500 text-xs sm:text-sm mt-4 md:mt-0 font-sans leading-relaxed">
            點擊各個作品卡片即可閱覽深入的技術架構與關鍵系統設計。
          </p>
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`proj-filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-md font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-500 border border-slate-200/80 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white border border-slate-200 hover:border-slate-350 rounded-xl overflow-hidden flex flex-col justify-between shadow-xs transition-all duration-200"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-50 border-b border-slate-150">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-300"
                  />
                  {/* Category Accent */}
                  <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded bg-white/95 border border-slate-205 text-[9px] font-mono font-bold text-slate-800 uppercase tracking-widest shadow-xs">
                    {project.category}
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10 p-1.5 rounded bg-slate-900 text-white border border-slate-800" title="精選核心推介">
                      <Sparkles size={11} />
                    </div>
                  )}
                </div>

                {/* Card Content Brief */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-sans font-extrabold text-lg text-slate-900 tracking-tight">{project.title}</h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <span key={i} className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200/85 text-slate-500 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between pt-4 gap-4">
                    <button
                      id={`project-view-details-${project.id}`}
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-sans font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                    >
                      <span>技術解析 & 系統導覽</span>
                      <ArrowUpRight size={13} />
                    </button>

                    <div className="flex items-center gap-3 text-slate-450">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors" title="檢視原始碼">
                          <Github size={15} />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors" title="開啟 Live 網頁">
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Backdrop Expand Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative w-full max-w-3xl bg-white border border-slate-250 rounded-xl overflow-hidden shadow-xl flex flex-col max-h-[85vh]"
              >
                {/* Image & Header */}
                <div className="relative aspect-[21/9] w-full overflow-hidden bg-slate-50 border-b border-slate-200">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                  <button
                    id="close-project-modal"
                    onClick={() => setActiveModalProject(null)}
                    className="absolute top-4 right-4 p-2 bg-white/95 border border-slate-200/80 rounded-full text-slate-600 hover:text-slate-900 hover:scale-105 transition-all cursor-pointer shadow-xs"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Modal Body Scroll Container */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
                  <div className="space-y-3">
                    <span className="inline-flex px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono font-bold text-slate-700 uppercase tracking-widest leading-none">
                      {activeModalProject.category} 專案
                    </span>
                    <h3 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight">
                      {activeModalProject.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">核心架構與實踐解析</h4>
                    <p className="font-sans text-slate-650 leading-relaxed text-sm">
                      {activeModalProject.longDescription}
                    </p>
                  </div>

                  {/* Expanded Stack Cards */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">配屬技術堆疊</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeModalProject.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-mono px-3 py-1 rounded bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Action Bar Sticky */}
                <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex gap-3">
                    {activeModalProject.demoUrl && (
                      <a
                        href={activeModalProject.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs"
                      >
                        <span>線上展示 Demo</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    {activeModalProject.githubUrl && (
                      <a
                        href={activeModalProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold text-slate-750 transition-all"
                      >
                        <span>GitHub</span>
                        <Github size={12} />
                      </a>
                    )}
                  </div>
                  <button
                    id="close-modal-footer"
                    onClick={() => setActiveModalProject(null)}
                    className="text-xs font-sans font-bold text-slate-400 hover:text-slate-800 cursor-pointer"
                  >
                    關閉
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
