'use client';

import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from './i18n';
import Link from 'next/link';

export default function HomePage() {

  const { lang } = useContext(LanguageContext);

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <section className="mt-10 relative rounded-2xl overflow-hidden shadow-lg">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-[center_25%] md:bg-[center_40%]"
    style={{ backgroundImage: "url('/bg.jpg')" }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 text-center p-10 md:p-16 text-white">

    <h1 className="text-3xl md:text-5xl font-bold mb-4">
      {translations[lang].title}
    </h1>

    <p className="text-lg md:text-xl mb-6 opacity-90">
      {translations[lang].memoir}
    </p>

    <a
      href="https://forms.gle/Jg4zLiL29EGG2cnE9"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-black px-6 py-3 rounded-2xl text-lg font-medium hover:bg-gray-200 transition"
    >
      {translations[lang].apply}
    </a>

  </div>

</section>

        {/* Info Cards */}
        <section className="mt-16 grid md:grid-cols-3 gap-6">

          {/* About Program */}
          <div className="border rounded-2xl p-6 shadow-sm bg-white hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-gray-900">
              {translations[lang].about}
            </h2>

            <p className="text-sm mt-2 text-gray-700">
              {lang === 'en'
                ? "Annual scholarship for classes 10th and 12th."
                : "कक्षा 10वीं एवं 12वीं के मेधावी छात्रों के लिए वार्षिक छात्रवृति।"}
            </p>

            <Link
              href="/about"
              className="text-sm text-black mt-4 inline-block hover:underline"
            >
              {lang === 'en' ? "Read More" : "अधिक पढ़ें"}
            </Link>
          </div>

          {/* Selection Process */}
          <div className="border rounded-2xl p-6 shadow-sm bg-white hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-gray-900">
              {translations[lang].process}
            </h2>

            <p className="text-sm mt-2 text-gray-700">
              {lang === 'en'
                ? "Merit-based transparent selection."
                : "मेरिट आधारित पारदर्शी चयन प्रक्रिया।"}
            </p>

            <Link
              href="/selection"
              className="text-sm text-black mt-4 inline-block hover:underline"
            >
              {lang === 'en' ? "Read More" : "अधिक पढ़ें"}
            </Link>
          </div>

          {/* Events */}
          <div className="border rounded-2xl p-6 shadow-sm bg-white hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-gray-900">
              {translations[lang].events}
            </h2>

            <p className="text-sm mt-2 text-gray-700">
              {lang === 'en'
                ? "Last city: Indore – 2025."
                : "नवीनतम आयोजन: इंदौर – 2025।"}
            </p>

            <Link
              href="/events"
              className="text-sm text-black mt-4 inline-block hover:underline"
            >
              {lang === 'en' ? "View Gallery" : "गैलरी देखें"}
            </Link>
          </div>

        </section>

      </div>
    </div>
  );
}