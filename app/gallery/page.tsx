'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const years = ['2025'];

export default function GalleryPage() {

  const { lang } = useContext(LanguageContext);

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-4">
          {lang === 'en'
            ? 'Photo Gallery'
            : 'फोटो गैलरी'}
        </h1>

        <p className="text-center text-gray-600 mb-12">
          {lang === 'en'
            ? 'Year-wise archive of scholarship event photographs.'
            : 'छात्रवृति कार्यक्रम की वर्षवार तस्वीरों का संग्रह।'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {years.map((year) => (

            <Link
              key={year}
              href={`/gallery/${year}`}
              className="bg-white rounded-2xl shadow-md p-10 text-center hover:shadow-lg transition"
            >

              <h2 className="text-2xl font-bold text-gray-900">
                {year}
              </h2>

              <p className="mt-3 text-sm text-gray-600">
                {lang === 'en'
                  ? 'View Photos'
                  : 'तस्वीरें देखें'}
              </p>

            </Link>

          ))}

        </div>

      </div>

    </div>
  );
}