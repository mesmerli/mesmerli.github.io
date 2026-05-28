import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send, Command, RefreshCw, MessageSquare, ArrowDown, BotIcon } from 'lucide-react';
import { ChatMessage } from '../types';

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const QUICK_PROMPTS = [
  '推薦有哪些精選的作品專案？',
  '介紹一下工作經歷與職涯軌跡',
  '最擅長的前端與後端技術堆疊是什麼？',
  '如何直接與主人 李振邦 聯絡？'
];

export default function AiAssistant({ isOpen, onClose, onOpen }: AiAssistantProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasScrolledUp, setHasScrolledUp] = useState(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Initialize with greeting message on mount
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          role: 'model',
          text: '您好！我是 李振邦 (mesmerli) 的 AI 互動助理 👾。我可以為您快速解答關於他的職涯背景、技能深度、精選成果、甚至工作態度等任何問題哦！請問今天有什麼我可以為您介紹的嗎？',
          timestamp: new Date()
        }
      ]);
    }
  }, [messages.length]);

  // Handle message scrolling
  useEffect(() => {
    if (!hasScrolledUp) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen, hasScrolledUp]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBodyScroll = () => {
    if (!bodyRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = bodyRef.current;
    // If user scrolled up past 100px from bottom, stop auto-scrolling
    const isAtBottom = scrollHeight - scrollTop - clientHeight < 100;
    setHasScrolledUp(!isAtBottom);
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    setHasScrolledUp(false); // Snap back to bottom on message sent

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({
            role: m.role,
            text: m.text
          }))
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Server responded with an error');
      }

      const modelMsg: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: data.text,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (error: any) {
      console.error('Chat error:', error);
      const errorMsg: ChatMessage = {
        id: `error-${Date.now()}`,
        role: 'model',
        text: error.message || '⚠️ 抱歉，AI 助理目前在連線上有些狀況。您可以直接填寫下方的聯絡表單傳送郵件給李振邦，他會撥冗親自與您回覆！',
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'model',
        text: '對話記錄已重設。您好！我是李振邦的 AI 助理，請問有什麼我可以協助您的？',
        timestamp: new Date()
      }
    ]);
  };

  return (
    <>
      {/* Redundant Activator Blob floating button if closed */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            id="ai-floating-trigger"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={onOpen}
            className="fixed bottom-6 right-6 z-45 w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center cursor-pointer shadow-md hover:scale-105 transition-transform"
            title="開啟 AI 助理"
          >
            <Bot size={22} className="animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Chat Drawer UI Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-chat-drawer"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[420px] h-[550px] bg-white border border-slate-200 rounded-xl shadow-xl flex flex-col overflow-hidden"
          >
            {/* Header Sticky */}
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-xs">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm text-slate-900 block leading-tight">李振邦 AI 互動助理</h3>
                  <span className="font-mono text-[9px] text-slate-400 tracking-wider block uppercase mt-0.5 font-bold">Gemini 3.5 Model Configured</span>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5">
                <button 
                  onClick={resetChat}
                  className="p-1.5 rounded-md text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer"
                  title="重置對話"
                >
                  <RefreshCw size={13} />
                </button>
                <button 
                  onClick={onClose}
                  className="p-1.5 rounded-md text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer"
                  title="關閉對話"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Chat Body Scroll division */}
            <div 
              ref={bodyRef}
              onScroll={handleBodyScroll}
              className="flex-grow overflow-y-auto p-6 space-y-4 bg-white"
            >
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex gap-3 max-w-[85%] ${
                    msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''
                  }`}
                >
                  {/* Avatar */}
                  {msg.role === 'model' && (
                    <div className="w-7 h-7 rounded bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center text-[9px] flex-shrink-0 font-bold uppercase tracking-wider font-mono">
                      AI
                    </div>
                  )}

                  {/* Message Bubble content */}
                  <div 
                    className={`rounded-xl p-3 text-xs sm:text-sm font-sans leading-relaxed tracking-wide ${
                      msg.role === 'user'
                        ? 'bg-slate-900 text-white rounded-tr-none font-medium shadow-xs'
                        : 'bg-slate-50 text-slate-700 rounded-tl-none border border-slate-200/80 shadow-xs'
                    }`}
                  >
                    {/* Inline Text Markdown render mock */}
                    <div className="whitespace-pre-wrap">
                      {msg.text.split('\n').map((line, lid) => {
                        // Bold parsing
                        let textNode: React.ReactNode = line;
                        if (line.includes('**')) {
                          const parts = line.split('**');
                          textNode = parts.map((part, partId) => 
                            partId % 2 === 1 ? <strong key={partId} className={msg.role === 'user' ? 'text-white font-extrabold' : 'text-slate-950 font-bold'}>{part}</strong> : part
                          );
                        }
                        
                        // List rendering style
                        if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
                          return (
                            <div key={lid} className="flex gap-1.5 items-start mt-1 first:mt-0">
                              <span className="text-slate-900 mt-1.5 font-bold">•</span>
                              <span className="flex-grow text-slate-750">{typeof textNode === 'string' ? textNode.trim().substring(2) : textNode}</span>
                            </div>
                          );
                        }
                        return <p key={lid} className="mt-1 first:mt-0">{textNode}</p>;
                      })}
                    </div>
                  </div>
                </div>
              ))}

              {/* Loader indicator bubble */}
              {isLoading && (
                <div className="flex gap-3 max-w-[80%]">
                  <div className="w-7 h-7 rounded bg-slate-100 text-slate-755 border border-slate-200 flex items-center justify-center text-[9px] flex-shrink-0 animate-pulse font-bold tracking-wider font-mono">
                    AI
                  </div>
                  <div className="bg-slate-50 text-slate-400 rounded-xl rounded-tl-none border border-slate-200 p-3 shrink-0 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full animate-bounce delay-100" />
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full animate-bounce delay-200" />
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full animate-bounce delay-300" />
                  </div>
                </div>
              )}

              {/* Anchor block */}
              <div ref={chatEndRef} />
            </div>

            {/* Float scroll indicator */}
            {hasScrolledUp && (
              <button
                onClick={() => {
                  setHasScrolledUp(false);
                  scrollToBottom();
                }}
                className="absolute bottom-24 right-4 p-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 shadow flex items-center justify-center animate-bounce z-10 cursor-pointer"
                title="滑動到最底下"
              >
                <ArrowDown size={12} />
              </button>
            )}

            {/* Quick Prompts Sticky Drawer base (shows when prompt history has 1 greetings only) */}
            {messages.length === 1 && !isLoading && (
              <div className="bg-slate-50 px-4 py-3 border-t border-slate-200 select-none">
                <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest mb-1.5 pl-1 font-bold">猜您想問：</span>
                <div className="flex flex-col gap-1">
                  {QUICK_PROMPTS.map((prompt, pi) => (
                    <button
                      key={pi}
                      onClick={() => handleSendMessage(prompt)}
                      className="text-left w-full text-xs font-sans text-slate-600 hover:text-slate-900 hover:bg-slate-100 bg-white border border-slate-150 px-3 py-1.5 rounded-lg transition-colors cursor-pointer block truncate shadow-xs"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Input Area */}
            <form 
              onSubmit={handleSubmit}
              className="bg-slate-50 p-4 border-t border-slate-200 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="輸入關於主人 李振邦 的提問..."
                disabled={isLoading}
                className="flex-1 h-11 px-4 rounded-lg bg-white border border-slate-250 font-sans text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-slate-800 focus:outline-hidden shadow-xs disabled:opacity-50"
                required
              />
              <button
                type="submit"
                id="send-ai-chat"
                disabled={isLoading || !input.trim()}
                className="w-11 h-11 rounded-lg bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-slate-900 text-white flex items-center justify-center cursor-pointer transition-all shadow-xs"
              >
                <Send size={13} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
