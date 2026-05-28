import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Compass, HelpCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  const values = [
    {
      icon: <Award size={18} className="text-slate-800" />,
      title: '極致品質要求',
      description: '重視高可維護性的乾淨程式碼（Clean Code）與極致的效能優化（Web Performance）。'
    },
    {
      icon: <GraduationCap size={18} className="text-slate-800" />,
      title: '持續終身學習',
      description: '緊跟 GenAI 大語言模型整合、現代全端框架與雲端原生微服務的技術演進。'
    },
    {
      icon: <Compass size={18} className="text-slate-800" />,
      title: '產品思維導向',
      description: '在理解技術的同時，從使用者與商業邏輯出發，建構真正切合使用者痛點的產品。'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-b border-slate-200/50">
      {/* Decorative Tints */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-slate-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest block mb-2 font-bold">ABOUT MESMERLI</span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tighter">
              探索我的專業與核心價值
            </h2>
          </div>
          <p className="max-w-md text-slate-500 text-xs sm:text-sm mt-4 md:mt-0 font-sans leading-relaxed">
            結合美學思維與系統架構，讓每一次互動都充滿驚喜與流暢感。
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Grid Left: Detail Text Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-xs"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-extrabold text-slate-900 font-sans">
                我是 李振邦 (mesmerli)，一名軟體工藝的實踐者。
              </h3>
              <p className="text-slate-650 leading-relaxed text-sm">
                在過去 25+ 年的實戰職涯中，我熱衷於將生硬的代碼轉換為直覺、流暢的使用者經驗。不論是基於 React 建構高吞吐數據流的分析平台前端，或是使用 Node.js / Express 設計穩定且防禦度高的後端系統，亦或整合先進的 AI (Generative AI) 系統，我都尋求性能與可擴展性的完美契合。
              </p>
              <p className="text-slate-550 leading-relaxed text-sm">
                我擅長於敏捷開發的多人團隊中扮演銜接設計與後台的技術核心，並具備產品與用戶導向思維，能夠跨學科合作，為公司與終端用戶創造真正持久的商業與生活價值。
              </p>
            </div>

            {/* NTU Education Section */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 border border-slate-150">
                <GraduationCap size={18} />
              </div>
              <div>
                <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold">學術背景</span>
                <span className="block text-sm font-extrabold text-slate-900 mt-0.5">國立台灣大學 資訊工程學系 碩士 & 學士</span>
                <span className="block text-xs text-slate-500 mt-0.5">National Taiwan University - Computer Science</span>
              </div>
            </div>
          </motion.div>

          {/* Grid Right: Value blocks (Vertical layout) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {values.map((val, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-350 transition-colors duration-300 flex gap-4 items-start shadow-xs"
              >
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-150 flex-shrink-0 text-slate-700">
                  {val.icon}
                </div>
                <div className="space-y-1 flex-1">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-sans">{val.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{val.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Quick Helper Info */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 flex items-center gap-4"
            >
              <HelpCircle size={20} className="text-slate-800 flex-shrink-0 animate-pulse" />
              <div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {"對我的工作哲學有任何疑問？點擊網頁右下角的「AI 助理」或上方選單按鈕，可以直接與我的專屬助理進行深度問答。"}
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
