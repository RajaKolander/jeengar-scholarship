'use client';

import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';

export default function Event2025Page() {

  const { lang } = useContext(LanguageContext);

  return (

    <div className="bg-gray-100 min-h-screen p-4 md:p-6">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <section className="bg-white rounded-3xl shadow-md p-6 md:p-12 mb-10">

          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide mb-4">

            {lang === 'en'
              ? 'National Jeengar Samaj Utthan Evam Protsahan Samiti, Hisar'
              : 'राष्ट्रीय जीनगर समाज उत्थान एवं प्रोत्साहन समिति, हिसार'}

          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">

            {lang === 'en'
              ? 'National Jeengar Samaj Mahakumbh – Bhopal 2025'
              : 'राष्ट्रीय जीनगर समाज महाकुंभ – भोपाल 2025'}

          </h1>

          <p className="mt-6 text-base md:text-xl text-gray-700 leading-relaxed max-w-4xl">

            {lang === 'en'
              ? 'A grand national scholarship gathering dedicated towards education, unity, social upliftment and encouragement of meritorious students from economically weaker backgrounds.'
              : 'शिक्षा, सामाजिक एकता एवं आर्थिक रूप से कमजोर मेधावी विद्यार्थियों के प्रोत्साहन हेतु आयोजित एक भव्य राष्ट्रीय छात्रवृत्ति महाकुंभ।'}

          </p>

        </section>

        {/* EVENT DETAILS */}
        <section className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-3xl shadow-md p-6">

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {lang === 'en' ? 'Date' : 'आयोजन तिथि'}
            </h2>

            <p className="text-gray-700 text-lg">
              14 September 2025
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {lang === 'en' ? 'Venue' : 'स्थान'}
            </h2>

            <p className="text-gray-700 leading-relaxed">
              {lang === 'en'
                ? 'Gulshan Garden Marriage Palace, Lal Ghati, Bhopal'
                : 'गुलशन गार्डन मैरिज पैलेस, हलाल चौक, लाल घाटी, भोपाल'}
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {lang === 'en' ? 'Organizer' : 'आयोजक'}
            </h2>

            <p className="text-gray-700">
              {lang === 'en'
                ? 'Bhopal Jeengar Samaj'
                : 'भोपाल जीनगर समाज'}
            </p>

          </div>

        </section>

        {/* CHIEF GUESTS */}
        <section className="bg-white rounded-3xl shadow-md p-6 md:p-10 mb-10">

          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">

            {lang === 'en'
              ? 'Presiding & Chief Guests'
              : 'अध्यक्षता एवं मुख्य अतिथि'}

          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border rounded-2xl p-6">

              <h3 className="font-bold text-xl mb-3 text-gray-900">
                {lang === 'en' ? 'Presided By' : 'अध्यक्षता'}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {lang === 'en'
                  ? 'Shri Ajay Panwar, President, Jeengar Samaj Bhopal'
                  : 'श्री अजय पंवार, प्रधान, जीनगर समाज भोपाल'}
              </p>

              <p className="text-gray-700 leading-relaxed">
                {lang === 'en'
                  ? 'Shri Bhagwan Das Dhalia, Event President, Bhopal'
                  : 'श्री भगवानदास ढालिया, कार्यक्रम अध्यक्ष, भोपाल'}
              </p>

              <p className="text-gray-700 leading-relaxed">
                {lang === 'en'
                  ? 'Shri Prithviraj Chauhan, Event Coordinator, Bhopal'
                  : 'श्री पृथ्वीराज चौहान, कार्यक्रम संयोजन, भोपाल'}
              </p>

            </div>

            <div className="border rounded-2xl p-6">

              <h3 className="font-bold text-xl mb-3 text-gray-900">
                {lang === 'en' ? 'Chief Guest' : 'मुख्य अतिथि'}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {lang === 'en'
                  ? 'Shri Jagdish Devda, Deputy Chief Minister, Madhya Pradesh'
                  : 'श्री जगदीश जी देवड़ा, उपमुख्यमंत्री, मध्यप्रदेश'}
              </p>

            </div>

          </div>

        </section>

        {/* HIGHLIGHTS */}
        <section className="bg-white rounded-3xl shadow-md p-6 md:p-10 mb-10">

          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">

            {lang === 'en'
              ? 'Major Highlights'
              : 'कार्यक्रम की मुख्य झलकियाँ'}

          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">

            <p>
              {lang === 'en'
                ? '• The program commenced with Ganesh Vandana and Saraswati Pujan.'
                : '• कार्यक्रम का शुभारंभ गणेश वंदना एवं सरस्वती पूजन से हुआ।'}
            </p>

            <p>
              {lang === 'en'
                ? '• Deputy CM Shri Jagdish Devda was welcomed traditionally with pagdi and sarafa.'
                : '• उपमुख्यमंत्री श्री जगदीश जी देवड़ा का स्वागत पगड़ी एवं सराफा पहनाकर किया गया।'}
            </p>

            <p>
              {lang === 'en'
                ? '• Donors and contributors from across India were honored on stage.'
                : '• देशभर से आए भामाशाहों एवं सहयोगियों का सम्मान किया गया।'}
            </p>

            <p>
              {lang === 'en'
                ? '• Discussions focused on education, unity and hostel development for society students.'
                : '• कार्यक्रम में शिक्षा, सामाजिक एकता एवं छात्रावास निर्माण पर विशेष चर्चा हुई।'}
            </p>

            <p>
              {lang === 'en'
                ? '• For the first time, the event was broadcast live digitally.'
                : '• पहली बार कार्यक्रम का लाइव टेलीकास्ट किया गया।'}
            </p>

          </div>

        </section>

        {/* SUCCESS STORIES */}
        <section className="bg-white rounded-3xl shadow-md p-6 md:p-10 mb-10">

          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">

            {lang === 'en'
              ? 'Success Stories'
              : 'सफलता की प्रेरणादायक कहानियाँ'}

          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

            <p>
              {lang === 'en'
                ? '• A girl from Bhopal supported through scholarship is now working in Australia.'
                : '• भोपाल की एक बेटी छात्रवृत्ति के सहयोग से ऑस्ट्रेलिया में कार्यरत है।'}
            </p>

            <p>
              {lang === 'en'
                ? '• Shri Ashok Songara (2009 Scholarship) cleared UPSC and is serving in Railways.'
                : '• श्री अशोक सोनगरा (2009 स्कॉलरशिप) UPSC उत्तीर्ण कर रेलवे सेवा में कार्यरत हैं।'}
            </p>

          </div>

        </section>

        {/* ELIGIBILITY */}
        <section className="bg-white rounded-3xl shadow-md p-6 md:p-10 mb-10">

          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">

            {lang === 'en'
              ? 'Scholarship Eligibility'
              : 'छात्रवृत्ति पात्रता'}

          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">

            <p>
              {lang === 'en'
                ? '• Student must belong to Jeengar / Mochi community.'
                : '• विद्यार्थी जीनगर / मोची समाज से संबंधित हो।'}
            </p>

            <p>
              {lang === 'en'
                ? '• Minimum 75% marks required in Class 10th or 12th.'
                : '• विद्यार्थी ने 10वीं या 12वीं में न्यूनतम 75% अंक प्राप्त किए हों।'}
            </p>

            <p>
              {lang === 'en'
                ? '• Economically weaker families are prioritized.'
                : '• आर्थिक रूप से कमजोर परिवारों को प्राथमिकता।'}
            </p>

            <p>
              {lang === 'en'
                ? '• Students whose fathers are deceased receive priority.'
                : '• जिन विद्यार्थियों के पिता जीवित नहीं हैं उन्हें प्राथमिकता दी जाती है।'}
            </p>

            <p>
              {lang === 'en'
                ? '• Divyang students are eligible with minimum 60% marks.'
                : '• दिव्यांग विद्यार्थियों हेतु न्यूनतम 60% अंक आवश्यक।'}
            </p>

          </div>

        </section>

        {/* PROGRESS REPORT */}
        <section className="bg-white rounded-3xl shadow-md p-6 md:p-10 mb-10">

          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">

            {lang === 'en'
              ? 'Program Growth'
              : 'कार्यक्रम की प्रगति'}

          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">

            <p>
              {lang === 'en'
                ? '• Started with only 3 scholarships in 2009 and expanded to 258 scholarships in 2025.'
                : '• वर्ष 2009 में केवल 3 छात्रवृत्तियों से प्रारंभ होकर 2025 में 258 छात्रवृत्तियों तक पहुँचा।'}
            </p>

            <p>
              {lang === 'en'
                ? '• Events have been organized in multiple cities including Hisar, Jaipur, Jodhpur, Pushkar, Udaipur, Ludhiana, Sangaria and Bhopal.'
                : '• हिसार, जयपुर, जोधपुर, उदयपुर, पुष्कर, लुधियाना, संगरिया एवं भोपाल सहित अनेक शहरों में आयोजन सम्पन्न हुए।'}
            </p>

          </div>

        </section>

        {/* NEXT EVENT */}
        <section className="bg-neutral-900 text-white rounded-3xl shadow-xl p-8 md:p-14 text-center mb-10">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">

            {lang === 'en'
              ? 'Upcoming Announcement'
              : 'आगामी आयोजन'}

          </h2>

          <p className="text-lg md:text-2xl leading-relaxed text-gray-200">

            {lang === 'en'
              ? 'The next National Scholarship Event will be organized in Lucknow.'
              : 'अगला राष्ट्रीय छात्रवृत्ति कार्यक्रम लखनऊ में आयोजित किया जाएगा।'}

          </p>

        </section>

        {/* CLOSING */}
        <section className="text-center pb-16">

          <p className="text-2xl font-bold text-gray-900">
            ✍️ सुरेंद्र कुमार निर्वाण
          </p>

          <p className="mt-3 text-lg text-gray-700">
            {lang === 'en'
              ? 'National Coordinator'
              : 'राष्ट्रीय संयोजक'}
          </p>

          <p className="mt-2 text-gray-600">
            {lang === 'en'
              ? 'National Jeengar Samaj Utthan Evam Protsahan Samiti, Hisar'
              : 'राष्ट्रीय जीनगर समाज उत्थान एवं प्रोत्साहन समिति, हिसार'}
          </p>

        </section>

      </div>

    </div>

  );
}