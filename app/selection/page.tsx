'use client';

import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { programInfo } from '../data/program';

export default function SelectionPage() {

  const { lang } = useContext(LanguageContext);

  return (
    <div className="p-10 max-w-5xl mx-auto mt-10 bg-gray-50 rounded-2xl shadow-sm">

      <h1 className="text-3xl font-bold mb-10 text-center">
        {programInfo[lang].selection.heading}
      </h1>

      <div className="grid gap-4 md:grid-cols-2">

        {programInfo[lang].selection.content.map((text, i) => (
          <div key={i}
            className="bg-white border rounded-2xl p-6 shadow-sm">
            <p className="text-sm leading-relaxed">
              {text}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}
