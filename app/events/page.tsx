'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../LanguageContext';

export default function EventsPage() {

  const { lang } = useContext(LanguageContext);

  return (

    <div className="bg-gray-100 min-h-screen p-6">

      <div className="max-w-6xl mx-auto">

        {/* Heading Section */}
        <div className="bg-white p-8 rounded-3xl shadow-md mb-10">

          <h1 className="text-3xl font-bold mb-6 text-gray-900">
            {lang === 'en'
              ? "Past Events"
              : "पिछले आयोजन"}
          </h1>

          <p className="text-gray-700 leading-relaxed">
            {lang === 'en'
              ? "The scholarship program has been conducted across multiple cities since 2009. These events reflect the community’s commitment towards education, unity and social upliftment."
              : "यह छात्रवृत्ति कार्यक्रम वर्ष 2009 से विभिन्न शहरों में आयोजित किया जा रहा है। यह आयोजन समाज की शिक्षा, एकता और उत्थान के प्रति प्रतिबद्धता को दर्शाते हैं।"}
          </p>

        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* 2025 Event Card */}
          <Link href="/events/2025">

            <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer">

              <div className="p-8">

                <p className="text-sm text-gray-500 mb-3">
                  14 September 2025
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Bhopal 2025
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  {lang === 'en'
                    ? "National Jeengar Samaj Mahakumbh scholarship event conducted in Bhopal with participation from students and community members across India."
                    : "भोपाल में आयोजित राष्ट्रीय जीनगर समाज महाकुंभ छात्रवृत्ति कार्यक्रम, जिसमें देशभर से विद्यार्थी एवं समाजजन सम्मिलित हुए।"}
                </p>

                <div className="mt-6 text-sm font-medium text-black">
                  {lang === 'en'
                    ? "Read Full Report →"
                    : "पूरी रिपोर्ट पढ़ें →"}
                </div>

              </div>

            </div>

          </Link>

        </div>

      </div>

    </div>

  );
}