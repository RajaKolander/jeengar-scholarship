'use client';

import './globals.css';
import { useState } from 'react';
import { translations } from './i18n';
import { LanguageContext } from './LanguageContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [lang, setLang] = useState<'en'|'hi'>('hi');

  return (
    <LanguageContext.Provider value={{lang, setLang}}>
      <html lang={lang}>
        <body className="bg-white text-gray-900">

          <header className="p-4 flex justify-between shadow-md">

            <h1 className="text-xl font-bold">
              {translations[lang].title}
            </h1>

            <div className="space-x-2">
              <button onClick={()=>setLang('en')}>English</button>
              <button onClick={()=>setLang('hi')}>हिंदी</button>
            </div>

          </header>

          {children}

        </body>
      </html>
    </LanguageContext.Provider>
  );
}
