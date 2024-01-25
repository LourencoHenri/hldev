/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		locales: ["en-US", "es-ES", "pt-BR", "de-GE"],
		defaultLocale: "en-US",
		localeDetection: false,
	},
};

module.exports = nextConfig;
