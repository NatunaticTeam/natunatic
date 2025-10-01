import i18next from 'i18next';
import es from './locales/es.json';
import en from './locales/en.json';
import es_CL from './locales/es-CL.json';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18next.use(LanguageDetector).use(Backend).init({
    fallbackLng: 'en',
    debug: true,
    resources: {
        en: { translation: en },
        es: { translation: es },
        es_CL: { translation: es_CL }
    },
    backend: {
        loadPath: 'locales/{{lng}}.json'
    }
});

export default i18next;