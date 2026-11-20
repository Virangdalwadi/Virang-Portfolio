import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';

const resources = {
  en: {
    translation: translationEN
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en'],
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

// Attribut lang du document synchronisé (lecteurs d'écran, césure, SEO)
const syncLang = () => document.documentElement.setAttribute('lang', 'en');
syncLang();
i18n.on('languageChanged', syncLang);

export default i18n;
