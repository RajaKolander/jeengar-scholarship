'use client';

import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from './i18n';
import Link from 'next/link';

export default function HomePage() {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="p-6 max-w-6xl mx-auto">

      {/* Hero Section */}
      <section className="mt-10 text-center bg-gray-50 p-10 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-4">
          {translations[lang].title}
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          {translations[lang].memoir}
        </p>
        <Link
          href="/register"
          className="bg-gray-900 text-white px-6 py-3 rounded-2xl text-lg hover:bg-gray-800"
        >
          {translations[lang].apply}
        </Link>
      </section>

      {/* Info Cards */}
      <section className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="border rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{translations[lang].about}</h2>
          <p className="text-sm mt-2">
            {lang==='en'
              ? "Annual scholarship for classes 10th and 12th."
              : "कक्षा 10वीं एवं 12वीं के मेधावी छात्रों के लिए वार्षिक छात्रवृति।"}
          </p>
        </div>

        <div className="border rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{translations[lang].process}</h2>
          <p className="text-sm mt-2">
            {lang==='en'
              ? "Merit-based transparent selection."
              : "मेरिट आधारित पारदर्शी चयन प्रक्रिया।"}
          </p>
        </div>

        <div className="border rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{translations[lang].events}</h2>
          <p className="text-sm mt-2">
            {lang==='en'
              ? "Last event held in Indore - 2025."
              : "नवीनतम आयोजन: इंदौर - 2025।"}
          </p>
        </div>
      </section>

    </div>
  );
}
