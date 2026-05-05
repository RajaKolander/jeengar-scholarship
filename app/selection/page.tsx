'use client';

import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

export default function SelectionPage() {

  const { lang } = useContext(LanguageContext);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow">

        <h1 className="text-2xl font-bold mb-6">
          {lang === 'en' ? "Selection Process" : "चयन प्रक्रिया"}
        </h1>

        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            {lang === 'en'
              ? "Only students of classes 10th and 12th are eligible."
              : "केवल कक्षा 10वीं एवं 12वीं के छात्र पात्र हैं।"}
          </li>
          <li>
            {lang === 'en'
              ? "Selection is based purely on academic merit."
              : "चयन पूर्णतः शैक्षणिक मेरिट के आधार पर होता है।"}
          </li>
          <li>
            {lang === 'en'
              ? "Documents are verified by the committee."
              : "दस्तावेजों की जांच समिति द्वारा की जाती है।"}
          </li>
        </ul>

      </div>
    </div>
  );
}