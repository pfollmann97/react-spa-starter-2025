import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import {isDevelopment} from '@shared/constants';
import {defaultLanguage} from './constants';
import {nsAll, nsCommon} from './namespaces.js';

const publicPath = import.meta.env.VITE_PUBLIC_PATH;

void i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    ns: nsAll,
    defaultNS: nsCommon,
    fallbackNS: nsCommon,
    fallbackLng: defaultLanguage,
    lowerCaseLng: true,
    nonExplicitSupportedLngs: true,
    load: 'currentOnly',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      prefix: '{',
      suffix: '}',
    },
    keySeparator: false,
    saveMissing: false,
    // console logging
    debug: isDevelopment,
    react: {
      useSuspense: true,
      bindI18n: 'languageChanged loaded',
      bindI18nStore: 'added removed',
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'b'],
    },
    backend: {
      loadPath: `${window.location.origin}${publicPath === '/' ? '' : publicPath}/locales/{lng}/{ns}.json`,
      // Adds parameters to resource URL. For example, 'dashboard.json' -> 'dashboard.json?v=1.3.5'.
      // This is necessary for providing unique URL for a translation file.
      queryStringParams: {v: import.meta.env.VITE_APP_VERSION},
    },
    returnEmptyString: false,
    // Enforce the old JSON format.
    // https://www.i18next.com/misc/migration-guide#v20.x.x-to-v21.0.0
    // compatibilityJSON: 'v3',
    returnNull: false,
  });

// eslint-disable-next-line unicorn/prefer-export-from
export default i18n;
