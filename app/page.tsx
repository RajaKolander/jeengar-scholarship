'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from './LanguageContext';
import { translations } from './i18n';

export default function HomePage() {

  const { lang } = useContext(LanguageContext);

  return (

    <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16">

      {/* NOTICE BAR */}
      <section className="mt-6">

        <div className="bg-neutral-800/90 backdrop-blur-md text-gray-100 rounded-3xl px-6 py-5 shadow-xl border border-white/10">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Left */}
            <div>

              <p className="text-xs uppercase tracking-[3px] opacity-70">
                Important Notice
              </p>

              <h2 className="text-xl md:text-3xl font-bold mt-2 leading-tight">
                {lang === 'en'
                  ? 'Scholarship applications for 2026 are now open.'
                  : 'वर्ष 2026 हेतु छात्रवृत्ति आवेदन प्रारंभ हो चुके हैं।'}
              </h2>

            </div>

            {/* Right */}
            <div className="md:text-right">

              <p className="text-sm opacity-70">
                {lang === 'en'
                  ? 'Last Date'
                  : 'अंतिम तिथि'}
              </p>

              <p className="text-2xl md:text-4xl font-bold mt-1">
                15 July 2026
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden rounded-[40px] mt-8 min-h-[650px] flex items-center shadow-2xl"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-8 md:px-16 py-20 text-white">

          <p className="uppercase tracking-[4px] text-sm opacity-80 mb-5">

            {lang === 'en'
              ? 'Empowering Students, Building Futures'
              : 'विद्यार्थियों को सशक्त बनाना, भविष्य का निर्माण'}

          </p>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight">

            {lang === 'en'
              ? 'Jeengar Scholarship Program'
              : 'जीनगर छात्रवृत्ति कार्यक्रम'}

          </h1>

          <p className="mt-8 text-lg md:text-2xl leading-relaxed text-gray-200">

            {lang === 'en'
              ? 'Supporting meritorious students through education, opportunity and community support since 2009.'
              : '2009 से मेधावी विद्यार्थियों को शिक्षा, अवसर और सामाजिक सहयोग के माध्यम से आगे बढ़ाने का प्रयास।'}

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="https://forms.gle/xtdZkm8KfmWX6pFq8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition"
            >
              {lang === 'en'
                ? 'Apply Now'
                : 'आवेदन करें'}
            </a>

            <Link
              href="/events"
              className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition"
            >
              {lang === 'en'
                ? 'Past Events'
                : 'पिछले आयोजन'}
            </Link>

          </div>

        </div>

      </section>

      {/* INFO CARDS */}
      <section className="mt-20 grid md:grid-cols-3 gap-8">

        {/* ABOUT */}
        <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {translations[lang].about}
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {lang === 'en'
              ? 'Annual scholarship initiative supporting deserving students from economically weaker backgrounds.'
              : 'आर्थिक रूप से कमजोर मेधावी विद्यार्थियों को प्रोत्साहित करने हेतु वार्षिक छात्रवृत्ति पहल।'}
          </p>

          <Link
            href="/about"
            className="inline-block mt-6 text-black font-semibold hover:underline"
          >
            {lang === 'en'
              ? 'Read More →'
              : 'और पढ़ें →'}
          </Link>

        </div>

        {/* SELECTION */}
        <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {translations[lang].process}
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {lang === 'en'
              ? 'Transparent merit-based selection process with defined eligibility criteria.'
              : 'पारदर्शी मेरिट आधारित चयन प्रक्रिया एवं स्पष्ट पात्रता मानदंड।'}
          </p>

          <Link
            href="/selection"
            className="inline-block mt-6 text-black font-semibold hover:underline"
          >
            {lang === 'en'
              ? 'Read More →'
              : 'और पढ़ें →'}
          </Link>

        </div>

        {/* EVENTS */}
        <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition">

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {translations[lang].events}
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {lang === 'en'
              ? 'Explore reports, memories and highlights from scholarship events conducted across India.'
              : 'देशभर में आयोजित छात्रवृत्ति कार्यक्रमों की झलकियाँ, रिपोर्ट एवं स्मृतियाँ देखें।'}
          </p>

          <Link
            href="/events"
            className="inline-block mt-6 text-black font-semibold hover:underline"
          >
            {lang === 'en'
              ? 'View Events →'
              : 'आयोजन देखें →'}
          </Link>

        </div>

      </section>

    </div>

  );
}