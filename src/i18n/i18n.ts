import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import pt from "./locales/pt.json";
import en from "./locales/en.json";
import de from "./locales/de.json";
import es from "./locales/es.json";

i18n
	.use(initReactI18next)
	.init({
		lng: "en",
		fallbackLng: "en",
		compatibilityJSON: "v3",
		resources: {
			pt,
			en,
			es,
			de,
		},
		react: {
			useSuspense: false,
		},
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
