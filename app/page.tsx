'use client';

import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from './i18n';

export default function HomePage() {

  const { lang } = useContext(LanguageContext);

  return (
    <main className="p-6 max-w-6xl mx-auto">

      <section className="mt-10 text-center">

        <p className="text-lg text-gray-700">
          {translations[lang].memoir}
        </p>

        <div className="mt-6">
          <a href="/register"
            className="bg-gray-900 text-white px-6 py-3 rounded-2xl text-lg">
            {translations[lang].apply}
          </a>
        </div>

      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-6">

        <div className="border rounded-2xl p-4">
          <h2 className="text-lg font-semibold">
            {translations[lang].about}
          </h2>
          <p className="text-sm mt-2">
            {lang==='en'
              ? "Annual scholarship for classes 10th and 12th"
              : "कक्षा 10वीं एवं 12वीं के मेधावी छात्रों हेतु वार्षिक छात्रवृति"}
          </p>
        </div>

        <div className="border rounded-2xl p-4">
          <h2 className="text-lg font-semibold">
            {translations[lang].process}
          </h2>
          <p className="text-sm mt-2">
            {lang==='en'
              ? "Merit based transparent selection"
              : "पूरी तरह पारदर्शी मेरिट आधारित चयन"}
          </p>
        </div>

        <div className="border rounded-2xl p-4">
          <h2 className="text-lg font-semibold">
            {translations[lang].events}
          </h2>
          <p className="text-sm mt-2">
            {translations[lang].title} – Indore 2025
          </p>
        </div>

      </section>

    </main>
  );
}
