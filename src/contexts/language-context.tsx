'use client';

import { createContext, useContext, ReactNode } from 'react';
import { translations, Language } from '@/lib/i18n';
import { usePathname, useRouter } from 'next/navigation';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en | typeof translations.es;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, initialLang }: { children: ReactNode, initialLang: Language }) {
  const router = useRouter();
  const pathname = usePathname();
  const language = initialLang;

  const setLanguage = (newLang: Language) => {
    if (newLang === language) return;

    // Replace the language segment in the URL
    // pathname starts with /en or /es
    const segments = pathname.split('/');
    if (segments.length > 1) {
      segments[1] = newLang;
      const newPath = segments.join('/');
      router.push(newPath);
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
