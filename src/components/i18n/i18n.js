import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// language
import de from './de'
import fa from './fa'

const resources = {
    de: {
        translation: de
    },
    fa: {
        translation: fa
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "fa",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;