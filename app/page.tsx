'use client';

import { useState } from 'react';
import { translations } from './i18n';

export default function HomePage() {

  const [lang] = useState<'en'|'hi'>('hi');

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
            Annual scholarship for classes 10th and 12th
          </p>
        </div>

        <div className="border rounded-2xl p-4">
          <h2 className="text-lg font-semibold">
            {translations[lang].process}
          </h2>
          <p className="text-sm mt-2">
            Merit based transparent selection
          </p>
        </div>

        <div className="border rounded-2xl p-4">
          <h2 className="text-lg font-semibold">
            {translations[lang].events}
          </h2>
          <p className="text-sm mt-2">
            Last event held in Indore - 2025
          </p>
        </div>

      </section>

    </main>
  );
}
