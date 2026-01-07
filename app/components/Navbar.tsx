'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../LanguageContext';
import { translations } from '../i18n';

export default function Navbar() {

  const { lang, setLang } = useContext(LanguageContext);

  return (
    <nav className="p-4 flex justify-between items-center shadow-md max-w-6xl mx-auto">

      {/* Left: Site Title / Logo */}
      <div className="font-bold text-lg">
        {translations[lang].title}
      </div>

      {/* Center: Navigation Links */}
      <div className="space-x-6 text-sm font-medium">
        <Link href="/">{lang==='en' ? 'Home' : 'होम'}</Link>
        <Link href="/events">{translations[lang].events}</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/register">{translations[lang].register}</Link>
        <Link href="/contact">{translations[lang].contact}</Link>
      </div>

      {/* Right: Language Switch */}
      <div className="space-x-2">
        <button
          onClick={() => setLang('en')}
          className={lang==='en' ? 'font-bold' : 'opacity-70'}
        >
          EN
        </button>
        <button
          onClick={() => setLang('hi')}
          className={lang==='hi' ? 'font-bold' : 'opacity-70'}
        >
          हिंदी
        </button>
      </div>

    </nav>
  );
}
