'use client';

import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { translations } from '../i18n';

export default function Register() {

  const { lang } = useContext(LanguageContext);

  return (
    <div className="p-10 text-center">

      <h2 className="text-xl font-bold mb-6">
        {translations[lang].register} 2026
      </h2>

      <p className="mb-6">
        {lang==='en'
          ? "Click below to open Google Form"
          : "Google Form खोलने के लिए नीचे क्लिक करें"}
      </p>

      <a
        href="https://forms.gle/YOUR_FORM_LINK"
        className="bg-black text-white px-6 py-3 rounded-2xl"
      >
        {translations[lang].apply}
      </a>

    </div>
  );
}
