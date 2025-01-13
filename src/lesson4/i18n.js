import i18n from "i18next";
import { initReactI18next } from "react-i18next"; // Correct import

import en from './locales/en.json';
import he from './locales/he.json';

// the translations
const resources = {
  en: {
    translation: en
  },
  he: {
    translation: he
  }
};

i18n
  .use(initReactI18next) // Use initReactI18next instead of reactI18nextModule
  .init({
    resources,
    lng: "en", // default language

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;