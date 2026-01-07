'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';
import Navbar from './components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  // default to English
  const [lang, setLang] = useState<'en'|'hi'>('en');

  // On first load, check if user had a saved language
  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as 'en'|'hi' | null;
    if (savedLang) setLang(savedLang);
  }, []);

  // wrap setLang to also save choice
  const handleSetLang = (l: 'en'|'hi') => {
    localStorage.setItem('lang', l);
    setLang(l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      <html lang={lang}>
        <body className="bg-white text-gray-900">

          {/* Navbar appears once */}
          <Navbar />

          {/* Page content */}
          <main>{children}</main>

        </body>
      </html>
    </LanguageContext.Provider>
  );
}
