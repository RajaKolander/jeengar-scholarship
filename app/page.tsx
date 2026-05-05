'use client';

import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from './i18n';
import Link from 'next/link';

export default function HomePage() {

  const { lang } = useContext(LanguageContext);

  return (
    <div className="bg-gray-100 min-h-screen p-6 max-w-6xl mx-auto">

      {/* Hero Section */}
      <section className="mt-10 text-center bg-white p-10 rounded-2xl shadow-md">
  <h1 className="text-3xl font-bold mb-4 text-gray-900">
    {translations[lang].title}
  </h1>

  <p className="text-lg text-gray-800 mb-6">
    {translations[lang].memoir}
  </p>

  <a
    href="https://forms.gle/YOUR_FORM_LINK"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-black text-white px-6 py-3 rounded-2xl text-lg hover:bg-gray-800"
  >
    {translations[lang].apply}
  </a>
</section>

      {/* Info Cards */}
      <section className="mt-16 grid md:grid-cols-3 gap-6">

        <div className="border rounded-2xl p-6 shadow-sm bg-white hover:shadow-md transition">
          <h2 className="text-lg font-semibold">
            {translations[lang].about}
          </h2>

          <p className="text-sm mt-2">
            {lang === 'en'
              ? "Annual scholarship for classes 10th and 12th."
              : "कक्षा 10वीं एवं 12वीं के मेधावी छात्रों के लिए वार्षिक छात्रवृति।"}
          </p>

          <Link
            href="/about"
            className="text-xs opacity-70 mt-4 inline-block hover:underline"
          >
            {lang === 'en'
              ? "Read More"
              : "अधिक पढ़ें"}
          </Link>
        </div>

        <div className="border rounded-2xl p-6 shadow-sm bg-white hover:shadow-md transition">

  <h2 className="text-lg font-semibold">
    {translations[lang].process}
  </h2>

  <p className="text-sm mt-2">
    {lang === 'en'
      ? "Merit-based transparent selection."
      : "मेरिट आधारित पारदर्शी चयन प्रक्रिया।"}
  </p>

  <Link
    href="/selection"
    className="text-xs opacity-70 mt-4 inline-block hover:underline"
  >
    {lang === 'en'
      ? "Read More"
      : "अधिक पढ़ें"}
  </Link>

</div>


        <div className="border rounded-2xl p-6 shadow-sm bg-white hover:shadow-md transition">
          <h2 className="text-lg font-semibold">
            {translations[lang].events}
          </h2>

          <p className="text-sm mt-2">
            {lang === 'en'
              ? "Last city: Indore – 2025."
              : "नवीनतम आयोजन: इंदौर – 2025।"}
          </p>

          <Link
            href="/events"
            className="text-xs opacity-70 mt-4 inline-block hover:underline"
          >
            {lang === 'en'
              ? "View Gallery"
              : "गैलरी देखें"}
          </Link>
        </div>

      </section>

    </div>
  );
}
