import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		// we init with resources
		resources: {
			ru: {
				translations: {
					"title": "Каршеринг",
					"subtitle": "Поминутная аренда авто твоего города",
					"reserve": "Забронировать",
					"city": "Ваш город",
					"yes": "Да",
					"no": "Нет"
				}
			},
			en: {
				translations: {
					"title": "Carsharing",
					"subtitle": "Minute car rental in your city",
					"reserve": "Go to reserve",
					"city": "Your city",
					"yes": "Yes",
					"no": "No"
				}
			}
		},
		fallbackLng: "ru",
		debug: true,

		// have a common namespace used around the full app
		ns: ["translations"],
		defaultNS: "translations",

		keySeparator: false, // we use content as keys

		interpolation: {
			escapeValue: false
		}
	});

export default i18n;