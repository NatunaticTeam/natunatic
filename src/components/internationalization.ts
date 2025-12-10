import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true, // Enable debug mode for development
    fallbackLng: 'en', // Fallback language if a translation is missing
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: '../locales/{{lng}}.json', // Path to your translation files
    },
  });

export default i18n;