'use client';

import Image from 'next/image';
import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';

const images = [
  '/events/2025/1.jpg',
  '/events/2025/2.jpg',
];

export default function Gallery2025Page() {

  const { lang } = useContext(LanguageContext);

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-4">
          {lang === 'en'
            ? 'Indore Event 2025'
            : 'इंदौर आयोजन 2025'}
        </h1>

        <p className="text-center text-gray-600 mb-10">
          {lang === 'en'
            ? 'Photographs from the scholarship ceremony.'
            : 'छात्रवृति समारोह की तस्वीरें।'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {images.map((img, i) => (

            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md bg-white group"
            >

              <Image
                src={img}
                alt="Gallery Image"
                width={600}
                height={500}
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
              />

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}