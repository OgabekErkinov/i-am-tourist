import i18n from "i18next"

import translationUz from './locales/uz/translation.json'
import translationEn from './locales/en/translation.json'
import translationRu from './locales/ru/translation.json'
import i18next from 'i18next'
import { initReactI18next } from "react-i18next"


i18n.use(initReactI18next).init({
    resources : {
        en : {
            translation : translationEn
        },

        ru : {
            translation : translationRu
        },
        
        uz : {
            translation : translationUz
        },

        lng : 'uz',
        fallbackLng : 'en',

    }
})

export default i18n