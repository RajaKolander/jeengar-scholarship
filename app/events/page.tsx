'use client';

import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

export default function EventsPage() {

  const { lang } = useContext(LanguageContext);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow">

        <h1 className="text-2xl font-bold mb-6">
          {lang === 'en' ? "Past Events" : "पिछले आयोजन"}
        </h1>

        <p className="text-gray-700">
          {lang === 'en'
            ? "The scholarship program has been conducted in multiple cities since 2012. The latest event was held in Indore in 2025."
            : "यह कार्यक्रम 2012 से विभिन्न शहरों में आयोजित किया जा रहा है। नवीनतम आयोजन 2025 में इंदौर में हुआ।"}
        </p>

      </div>
    </div>
  );
}