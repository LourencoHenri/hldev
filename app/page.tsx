"use client";

import SocialMedia from "./components/SocialMedia";
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skilss";
import Contact from "./components/Contact";
import { Header } from "./components/Header";
import { useState } from "react";
// import { Drawer } from "./components/Drawer";
import Three from "./components/Three";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { I18nextProvider, useTranslation, Trans } from "react-i18next";
import i18n from "./i18n/i18n";
import Link from "next/link";
import LocaleSwitcher from "./components/LocaleSwitcher";

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

export default function Home() {
	const { t } = useTranslation();

	const pages = [
		{
			id: "Home",
			name: "Home",
			link: "#Home",
		},
		{
			id: "About",
			name: "About",
			link: "#About",
		},
		{
			id: "Skills",
			name: "Skills",
			link: "#Skills",
		},
		{
			id: "Projects",
			name: "Projects",
			link: "#Projects",
		},
		{
			id: "IntegratedProjects",
			name: "IntegratedProjects",
			link: "#IntegratedProjects",
		},
		{
			id: "Contact",
			name: "Contact",
			link: "#Contact",
		},
	];

	return (
		<I18nextProvider i18n={i18n}>
			<main className="flex min-h-screen flex-col">
				<Header />

				<Main />

				<Three />

				<About />

				<Skills />

				<Projects />

				<Contact />
			</main>
		</I18nextProvider>
	);
}
