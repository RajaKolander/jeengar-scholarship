'use client';

import './globals.css';
import { useState } from 'react';
import { translations } from './i18n';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [lang, setLang] = useState<'en'|'hi'>('hi');

  return (
    <html lang={lang}>
      <body className="bg-white text-gray-900">

        <header className="p-4 shadow-md flex justify-between">
          <h1 className="text-xl font-bold">
            {translations[lang].title}
          </h1>

          <div className="space-x-2">
            <button onClick={()=>setLang('en')}
              className="border px-2 py-1 rounded">
              English
            </button>

            <button onClick={()=>setLang('hi')}
              className="border px-2 py-1 rounded">
              हिंदी
            </button>
          </div>
        </header>

        {children}

        <footer className="p-4 mt-10 text-center text-sm text-gray-600">
          {translations[lang].contact}: scholarshipjeengar@gmail.com
        </footer>

      </body>
    </html>
  );
}
