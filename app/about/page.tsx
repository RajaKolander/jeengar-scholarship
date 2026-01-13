'use client';

import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { programInfo } from '../data/program';

export default function AboutPage() {

  const { lang } = useContext(LanguageContext);

  return (
    <div className="p-10 max-w-5xl mx-auto bg-gray-50 rounded-2xl shadow-sm mt-10">

      <h1 className="text-3xl font-bold mb-10 text-center">
        {programInfo[lang].heading}
      </h1>

      {/* Program Description Section */}
      <section className="mb-16">

        <h2 className="text-2xl font-semibold mb-6">
          {lang === 'en' ? "Program Description" : "कार्यक्रम विवरण"}
        </h2>

        <div className="grid gap-4">

          {programInfo[lang].description.map((text, i) => (
            <div key={i}
              className="bg-white border rounded-2xl p-6">
              <p className="text-sm leading-relaxed">
                {text}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* History Section */}
      <section>

        <h2 className="text-2xl font-semibold mb-6">
          {lang === 'en' ? "Program History" : "कार्यक्रम का इतिहास"}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {programInfo[lang].history.map((text, i) => (
            <div key={i}
              className="bg-white border rounded-2xl p-6">
              <p className="text-sm leading-relaxed">
                {text}
              </p>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}
