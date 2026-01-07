'use client';

import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import Link from 'next/link';

export default function Events() {
  const { lang } = useContext(LanguageContext);

  const years = Array.from({ length: 14 }, (_, i) => 2012 + i);

  return (
    <div className="p-10 max-w-6xl mx-auto">

      <h2 className="text-2xl font-bold mb-10">
        {lang==='en'
          ? "Jeengar Scholarship Events Archive"
          : "जीनगर छात्रवृति कार्यक्रम – आयोजन संग्रह"}
      </h2>

      {/* Year Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        {years.map(y => (
          <div key={y} className="border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-2">{y}</h3>
            <Link
              href={`/events/${y}`}
              className="text-sm text-blue-600 hover:underline"
            >
              {lang==='en' ? "View Details" : "विवरण देखें"}
            </Link>
          </div>
        ))}
      </div>

      {/* Latest Event Highlight */}
      <div className="mt-16 border rounded-2xl p-6 text-center shadow-sm bg-gray-50">
        <h3 className="text-xl font-bold mb-2">Indore – 2025</h3>
        <p className="text-sm">
          {lang==='en'
            ? "Latest scholarship program successfully held in Indore."
            : "नवीनतम छात्रवृति कार्यक्रम 2025 में इंदौर में आयोजित।"}
        </p>
      </div>

    </div>
  );
}
