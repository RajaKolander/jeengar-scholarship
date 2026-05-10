'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../LanguageContext';
import { translations } from '../i18n';

export default function Navbar() {

  const { lang, setLang } = useContext(LanguageContext);

  return (

    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left: Title */}
        <Link href="/" className="flex flex-col">

          <span className="font-bold text-lg md:text-xl text-gray-900 leading-tight">
            {translations[lang].title}
          </span>

          <span className="text-xs text-gray-500">
            Since 2012
          </span>

        </Link>

        {/* Center: Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

          <Link
            href="/"
            className="hover:text-black transition"
          >
            {lang === 'en' ? 'Home' : 'होम'}
          </Link>

          <Link
            href="/about"
            className="hover:text-black transition"
          >
            {lang === 'en' ? 'About' : 'परिचय'}
          </Link>

          <Link
            href="/selection"
            className="hover:text-black transition"
          >
            {lang === 'en' ? 'Selection' : 'चयन'}
          </Link>

          <Link
            href="/events"
            className="hover:text-black transition"
          >
            {translations[lang].events}
          </Link>

          <Link
            href="/gallery"
            className="hover:text-black transition"
          >
            {lang === 'en' ? 'Gallery' : 'गैलरी'}
          </Link>

          <Link
            href="/register"
            className="hover:text-black transition"
          >
            {translations[lang].register}
          </Link>

          <Link
            href="/contact"
            className="hover:text-black transition"
          >
            {translations[lang].contact}
          </Link>

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* Apply Button */}
          <a
            href="https://forms.gle/ogN2egeUipvmeKG67"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-black text-white px-5 py-2 rounded-xl text-sm hover:bg-gray-800 transition"
          >
            {lang === 'en' ? 'Apply Now' : 'आवेदन करें'}
          </a>

          {/* Language Switch */}
          <div className="flex items-center border rounded-xl overflow-hidden">

            <button
              onClick={() => setLang('en')}
              className={`px-3 py-2 text-sm transition ${
                lang === 'en'
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              EN
            </button>

            <button
              onClick={() => setLang('hi')}
              className={`px-3 py-2 text-sm transition ${
                lang === 'hi'
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              हिंदी
            </button>

          </div>

        </div>

      </div>

    </nav>

  );
}