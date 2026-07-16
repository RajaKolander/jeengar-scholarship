'use client';

import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

export default function SelectionPage() {

  const { lang } = useContext(LanguageContext);

  return (

    <div className="bg-gray-100 min-h-screen p-6">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          {lang === 'en'
            ? 'Selection Process'
            : 'चयन प्रक्रिया'}
        </h1>

        <p className="text-gray-600 mb-10">
          {lang === 'en'
            ? 'Guidelines and eligibility criteria for scholarship selection.'
            : 'छात्रवृति चयन हेतु दिशा-निर्देश एवं पात्रता जानकारी।'}
        </p>

        {/* Eligibility */}
        <section className="mb-10">

          <h2 className="text-xl font-semibold mb-4">
            {lang === 'en'
              ? 'Eligibility Criteria'
              : 'पात्रता मानदंड'}
          </h2>

          <div className="bg-gray-50 border rounded-2xl p-6 space-y-3 text-gray-700">

            <p>
              {lang === 'en'
                ? '• Applicant must belong to Jeengar community.'
                : '• आवेदक जीनगर समाज से संबंधित होना चाहिए।'}
            </p>

            <p>
              {lang === 'en'
                ? '• The student must have passed Class 10/12 with a minimum of 70%.'
                : '• छात्र कक्षा 10th/ 12th में न्यूनतम 70% से पास होना चाहिए'}
            </p>

            <p>
              {lang === 'en'
                ? '• Selection is purely merit based.'
                : '• चयन पूर्णतः मेरिट आधारित होगा।'}
            </p>

          </div>

        </section>

        {/* Documents */}
        <section className="mb-10">

          <h2 className="text-xl font-semibold mb-4">
            {lang === 'en'
              ? 'Required Documents'
              : 'आवश्यक दस्तावेज'}
          </h2>

          <div className="bg-gray-50 border rounded-2xl p-6 space-y-3 text-gray-700">

            <p>
              {lang === 'en'
                ? '• Board marksheet'
                : '• अंकतालिका'}
            </p>

            <p>
              {lang === 'en'
                ? '• Passport-size photograph'
                : '• पासपोर्ट आकार फोटो'}
            </p>

            <p>
              {lang === 'en'
                ? '• Identity proof'
                : '• पहचान प्रमाण'}
            </p>

          </div>

        </section>

        {/* PDF Download */}
        <section className="mt-12 text-center">

          <a
            href="/pdfs/selection-guidelines.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition"
          >
            {lang === 'en'
              ? 'Download Detailed Guidelines PDF'
              : 'विस्तृत दिशा-निर्देश PDF डाउनलोड करें'}
          </a>

        </section>

      </div>

    </div>

  );
}