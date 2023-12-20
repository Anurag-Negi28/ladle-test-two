import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
 .use(initReactI18next)
 .init({
   fallbackLng: "en",
   lng: i18n.language, // Use the language property of the i18n instance
   interpolation: {
     escapeValue: false,
   },
   resources: {
     en: {
       translation: {
         line1: "Welcome to my i18n project",
         line2: "How is your day going?"
       },
     },
     hi: {
       translation: {
         line1: "मेरी आवाज में आपका स्वागत है",
         line2: "आपका दिन कैसा है?"
       },
     },
   },
 });

export default i18n;
