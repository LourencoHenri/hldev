import "server-only";

const dictionaries = {
	en: () =>
		import("../../i18n/locales/en.json").then((module) => module.default),
	de: () =>
		import("../../i18n/locales/de.json").then((module) => module.default),
	pt: () =>
		import("../../i18n/locales/pt.json").then((module) => module.default),
	es: () =>
		import("../../i18n/locales/es.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
