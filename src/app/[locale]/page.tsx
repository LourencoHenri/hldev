import React from "react";

import Header from "@/src/components/Header";
import initTranslations from "@/src/i18n/i18n";
import TranslationsProvider from "@/src/providers/Translations";

import Three from "@/src/components/Three";
import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Projects from "@/src/components/Projects";
import Contact from "@/src/components/Contact";
import Home from "@/src/components/Home";

export interface PageProps {
	params: {
		locale: string;
	};
}

export default async function Page({
	params: { locale },
}: {
	params: { locale: string };
}) {
	const i18nNamespaces = [""];

	const { t, resources } = await initTranslations(locale, i18nNamespaces);

	return (
		<TranslationsProvider
			namespaces={i18nNamespaces}
			locale={locale}
			resources={resources}
		>
			<main className="flex min-h-screen flex-1 flex-col overflow-x-hidden">
				<Header />

				<section className="relative w-full">
					<Home />
					<div
						id="Home"
						className="h-svh min-h-96 -z-10 border-b border-b-neutral-100 dark:border-b-neutral-800"
					>
						<Three />
					</div>
				</section>

				<About />

				<Skills />

				<Projects />

				<Contact />
			</main>
		</TranslationsProvider>
	);
}
