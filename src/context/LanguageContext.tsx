import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../translations';

export type Language = 'zh-TW' | 'en';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tText: (zhText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('portfolio_lang');
      if (stored === 'en' || stored === 'zh-TW') {
        return stored as Language;
      }
      // Default to zh-TW
      return 'zh-TW';
    }
    return 'zh-TW';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_lang', lang);
      document.documentElement.lang = lang === 'zh-TW' ? 'zh-Hant' : 'en';
    }
  };

  useEffect(() => {
    document.documentElement.lang = language === 'zh-TW' ? 'zh-Hant' : 'en';
  }, [language]);

  const t = (key: string): string => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS['zh-TW'];
    return (dict as any)[key] || key;
  };

  const tText = (zhText: string, enText: string): string => {
    return language === 'zh-TW' ? zhText : enText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tText }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
