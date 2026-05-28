import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errMessage, setErrMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrMessage('請確認填妥您的姓名、聯絡信箱與留言內容！');
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate sending network request (1.2 seconds)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-b border-slate-200/50">
      {/* Decorative Orbs - Soft Light Tones */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-slate-400/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest block mb-2 font-bold">GET IN TOUCH</span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tighter">
              啟動專案合作與對話
            </h2>
          </div>
          <p className="max-w-md text-slate-500 text-xs sm:text-sm mt-4 md:mt-0 font-sans leading-relaxed">
            歡迎填寫表單快速留言，或透過下方的聯絡渠道與我一同釋放無限可能。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Card Left: Physical Contacts Brief */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div className="space-y-6">
              <h3 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight">
                準備好開始創造不一樣了嗎？
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-650 leading-relaxed max-w-sm">
                不論是全新的外包專案、客製化生成式 AI 工具開發、正職職缺招聘，或是單純的技術交流，都非常歡迎隨時與我聯繫。
              </p>
            </div>

            {/* Direct Contact Links List */}
            <div className="space-y-4">
              <div id="contact-info-email" className="flex items-center gap-4 bg-white border border-slate-200 p-5 rounded-xl shadow-xs hover:border-slate-350 transition-colors duration-200">
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-700 border border-slate-150">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-slate-450 uppercase tracking-widest font-bold">電子信箱</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="block text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div id="contact-info-phone" className="flex items-center gap-4 bg-white border border-slate-200 p-5 rounded-xl shadow-xs hover:border-slate-350 transition-colors duration-200">
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-700 border border-slate-150">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-slate-450 uppercase tracking-widest font-bold">聯絡專線</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="block text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div id="contact-info-location" className="flex items-center gap-4 bg-white border border-slate-200 p-5 rounded-xl shadow-xs hover:border-slate-350 transition-colors duration-200">
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-700 border border-slate-150">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-slate-450 uppercase tracking-widest font-bold">通訊定居</span>
                  <span className="block text-sm font-bold text-slate-800">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-8 shadow-xs"
          >
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              {/* Row: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">您的姓名 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="例如：林陳美"
                    className="w-full h-11 px-4 rounded-md bg-slate-50 border border-slate-200 font-sans text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-slate-900 focus:outline-hidden transition-all shadow-xs"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">聯絡電子信箱 *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="例如：visitor@example.com"
                    className="w-full h-11 px-4 rounded-md bg-slate-50 border border-slate-200 font-sans text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-slate-900 focus:outline-hidden transition-all shadow-xs"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">主旨主題</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="例如：專案外包洽詢"
                  className="w-full h-11 px-4 rounded-md bg-slate-50 border border-slate-200 font-sans text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-slate-900 focus:outline-hidden transition-all shadow-xs"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">留言細節 *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="請敘述您的專案需求、合作細節或職缺特徵，我會盡速回信..."
                  className="w-full p-4 rounded-md bg-slate-50 border border-slate-200 font-sans text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-slate-900 focus:outline-hidden transition-all resize-none shadow-xs"
                  required
                />
              </div>

              {/* Messages Feedback */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 rounded-md bg-slate-50 border border-slate-200 flex items-center gap-3 text-slate-800"
                  >
                    <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                    <span className="text-xs font-sans font-medium">您的訊息已成功送出！李振邦 (mesmerli) 會在第一時間詳閱並回信，非常感謝！</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 rounded-md bg-red-50 border border-red-200 flex items-center gap-3 text-red-900"
                  >
                    <AlertCircle size={16} className="flex-shrink-0" />
                    <span className="text-xs font-sans font-semibold">{errMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit CTA */}
              <button
                type="submit"
                id="submit-contact-form"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 px-6 h-12 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-xs disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    <span>正安全傳送中...</span>
                  </>
                ) : (
                  <>
                    <Send size={12} />
                    <span>送出問詢訊息</span>
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
