'use client';

import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

export default function AboutPage() {

  const { lang } = useContext(LanguageContext);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow">

        <h1 className="text-2xl font-bold mb-6">
          {lang === 'en' ? "About Program" : "कार्यक्रम विवरण"}
        </h1>

        <p className="text-gray-700 leading-relaxed">
          {lang === 'en'
            ? "The Jeengar Scholarship Program has been conducted annually since 2009 to support meritorious students of classes 10th and 12th. It aims to promote higher education and recognize academic excellence within the community."
            : "जीनगर छात्रवृति कार्यक्रम 2009 से निरंतर आयोजित किया जा रहा है, जिसका उद्देश्य कक्षा 10वीं एवं 12वीं के मेधावी छात्रों को प्रोत्साहित करना और उच्च शिक्षा को बढ़ावा देना है।"}
        </p>

      </div>
    </div>
  );
}