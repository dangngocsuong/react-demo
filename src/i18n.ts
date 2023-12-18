import i18n, { use } from "i18next";
import { initReactI18next } from "react-i18next";
import langVi from "./i18n/vi.json"
import langEn from "./i18n/en.json"

const DEFAULT_LANGUAGE = 'en';

use(initReactI18next).init({
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    resources: {
        vi: {
            translation: langVi,
        },
        en: {
            translation: langEn,
        }
    },
});

export default i18n;