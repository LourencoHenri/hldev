"use client";

import { I18nextProvider, useTranslation } from "react-i18next";
import { SiGithub, SiLinkedin } from "react-icons/si";

import { getDictionary } from "./dictionaries";
import i18n from "@/src/i18n/i18n";
import Header from "@/src/components/Header";
import Three from "@/src/components/Three";
import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Projects from "@/src/components/Projects";
import IntegratedProjects from "@/src/components/IntegratedProjects";
import Contact from "@/src/components/Contact";

interface PageProps {
	params: {
		lang: string;
	};
}
function Main() {
	const { t } = useTranslation();

	return (
		<div className="text-white h-svh min-h-96 w-full absolute flex justify-center items-center">
			<div className="text-center flex flex-col">
				<h1 className="text-xl md:text-2xl">{t(`home.hello`)}</h1>
				<h1 className="text-7xl md:text-9xl font-medium">{t(`home.name`)}</h1>
				<h1 className="text-2xl md:text-3xl font-medium mt-2 md:mt-4">
					{t(`home.role`)}
				</h1>
				<div className="flex justify-center gap-2 mt-2">
					<a
						href="https://github.com/LourencoHenri"
						target="_blank"
						className="flex flex-row gap-4 p-1 rounded cursor-pointer duration-300 hover:text-blue-400"
					>
						<SiGithub size={28} />
					</a>
					<a
						href="https://www.linkedin.com/in/henrique-lourenco/"
						target="_blank"
						className="flex flex-row gap-4 p-1 rounded justify-center items-center cursor-pointer duration-300 hover:text-blue-400"
					>
						<SiLinkedin size={28} />
					</a>
				</div>
			</div>
		</div>
	);
}

export default function Home(
	// { params: { lang } }: PageProps
	) {
	// const locale = await getDictionary(lang); // en

	return (
		<I18nextProvider i18n={i18n}>
			<main className="flex min-h-screen flex-1 flex-col">
				<Header />

				{/* <text>{locale.translation.header.home}</text> */}

				<Main />

				<div
					id="Home"
					className="h-svh min-h-96 -z-10 border-b border-b-neutral-800"
				>
					<Three />
				</div>

				<About />

				<Skills />

				<Projects />

				<Contact />
			</main>
		</I18nextProvider>
	);
}

// export interface PageProps {
// 	params: {
// 		lang: string;
// 	};
// }

// import React from "react";

// import Header from "@/src/components/Header";
// import About from "@/src/components/About";
// import Skills from "@/src/components/Skills";
// import Projects from "@/src/components/Projects";
// import Contact from "@/src/components/Contact";
// import IntegratedProjects from "@/src/components/IntegratedProjects";

// import { getDictionary } from "./dictionaries";
// import Test from "@/src/components/Test";
// import { I18nextProvider } from "react-i18next";
// import i18n from "@/src/i18n/i18n";

// export default async function Page({ params: { lang } }: PageProps) {
// 	const locale = await getDictionary(lang); // en
// 	return (
// 		// <main className="flex min-h-screen flex-1 flex-col">
// 		// 	<h1>{locale.translation.header.home}</h1>

// 		// 	<text>{locale.translation.header.home}</text>

// 		// 	<Test />
// 		// </main>

// 		<main className="flex min-h-screen flex-1 flex-col">
// 			<h1>{locale.translation.header.home}</h1>

// 			<text>{locale.translation.header.home}</text>

// 			<Test />
// 		</main>
// 	);
// }
