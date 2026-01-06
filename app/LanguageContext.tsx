'use client';

import { createContext } from 'react';

export const LanguageContext = createContext<{
  lang: 'en'|'hi',
  setLang: (l: 'en'|'hi') => void
}>({
  lang: 'hi',
  setLang: ()=>{}
});
