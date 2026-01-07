'use client';

import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { translations } from '../i18n';

export default function ContactPage() {

  const { lang } = useContext(LanguageContext);

  return (
    <div className="p-10 max-w-4xl mx-auto">

      <h2 className="text-2xl font-bold mb-8">
        {translations[lang].contact}
      </h2>

      <div className="border rounded-2xl p-6 shadow-sm bg-gray-50">

        <p className="text-lg font-semibold mb-6">
          {lang === 'en'
            ? "Jeengar Scholarship Program Offices"
            : "जीनगर छात्रवृति कार्यक्रम – कार्यालय विवरण"}
        </p>

        <div className="space-y-8 text-sm">

          {/* Head Office */}
          <div>
            <p className="font-bold mb-1">
              {lang === 'en' ? "Head Office:" : "मुख्य कार्यालय:"}
            </p>
            <p>56, Sector-13, Hisar – 125001</p>
          </div>

          {/* Branch Office */}
          <div>
            <p className="font-bold mb-1">
              {lang === 'en' ? "Branch Office:" : "शाखा कार्यालय:"}
            </p>
            <p>9/24, Vidhyadhar Nagar, Jaipur – 302039</p>
          </div>

          {/* People Details */}
          <div className="border-t pt-6">
            <p className="font-bold mb-3">
              {lang === 'en' ? "Key Contacts:" : "प्रमुख संपर्क:"}
            </p>

            <div className="space-y-6">

              {/* Chief Patron */}
              <div>
                <p className="font-semibold">
                  {lang === 'en' ? "Chief Patron:" : "मुख्य संरक्षक:"}
                </p>
                <p>Nathu Ram Nirwan (IRS)</p>
                <p>{lang === 'en' ? "City:" : "शहर:"} Hisar</p>
                <p>{lang === 'en' ? "Mobile Number:" : "मोबाइल नंबर:"} 9416499520</p>
              </div>

              {/* Coordinator */}
              <div>
                <p className="font-semibold">
                  {lang === 'en' ? "Coordinator:" : "संयोजक:"}
                </p>
                <p>Surender Nirvan (AGM, BSNL)</p>
                <p>{lang === 'en' ? "City:" : "शहर:"} Shimla</p>
                <p>{lang === 'en' ? "Mobile Number:" : "मोबाइल नंबर:"} 9416000725</p>
              </div>

            </div>
          </div>

          {/* Email */}
          <div className="border-t pt-6">
            <span className="font-medium">
              {lang === 'en' ? "Official Email:" : "आधिकारिक ईमेल:"}
            </span>
            <span className="ml-2">jeengarscholarship@gmail.com</span>
          </div>

        </div>

      </div>

    </div>
  );
}
