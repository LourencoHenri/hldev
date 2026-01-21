"use client";

import { Fragment, useEffect, useState } from "react";

import { LogoWhite } from "../../assets/logo/LogoWhite";
import { LogoBlack } from "../../assets/logo/LogoBlack";
import { useTheme } from "next-themes";

import { Popover, Transition } from "@headlessui/react";
import { Drawer } from "rsuite";
import Image from "next/image";

import germanyFlag from "../../assets/flags/germany.png";
import brazilFlag from "../../assets/flags/brazil.png";
import spainFlag from "../../assets/flags/spain.png";
import usaFlag from "../../assets/flags/usa.png";

import { IoClose, IoMenu } from "react-icons/io5";

type LanguageProps = "en-US" | "es-ES" | "pt-BR" | "de-GE";

interface LanguagesProps {
	id: LanguageProps;
	name: string;
	image: any;
}

import { useTranslation } from "react-i18next";
import LanguageChanger from "../LanguageChanger";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
	const { t, i18n } = useTranslation();
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const [openDrawer, setOpenDrawer] = useState(false);

	const [integratedProjectsAccordion, setIntegratedProjectsAccordion] =
		useState(false);

	function toggleIntegratedProjectsAccordion() {
		setIntegratedProjectsAccordion(!integratedProjectsAccordion);
	}

	function toggleDrawer() {
		setOpenDrawer(!openDrawer);
	}

	const languages: LanguagesProps[] = [
		{
			id: "en-US",
			name: "english",
			image: usaFlag,
		},
		{
			id: "es-ES",
			name: "spanish",
			image: spainFlag,
		},
		{
			id: "pt-BR",
			name: "portuguese",
			image: brazilFlag,
		},
		{
			id: "de-GE",
			name: "german",
			image: germanyFlag,
		},
	];

	return (
		<header className="fixed left-0 top-0 w-full bg-white dark:bg-[rgb(15,15,15)] py-2 bg-opacity-85 dark:bg-opacity-85 shadow-sm z-50 transition-colors duration-300">
			<div
				className="mx-auto flex items-center justify-between lg:justify-between px-2 lg:p-2 lg:px-4 duration-1000"
				aria-label="Global"
			>
				<a href="#Home" className="flex p-2 flex-1 lg:p-0">
					{mounted && (theme === "dark" || theme === "system") ? (
						<LogoWhite />
					) : (
						<LogoBlack />
					)}
				</a>

				<div className="hidden lg:flex flex-1 gap-x-8 justify-center">
					<a
						href="#Home"
						className="text-base leading-6 text-neutral-600 dark:text-neutral-300 hover:text-blue-400 dark:hover:text-blue-400"
					>
						{t(`header.home`)}
					</a>
					<a
						href="#About"
						className="text-base leading-6 text-neutral-600 dark:text-neutral-300 duration-300 hover:text-blue-400 dark:hover:text-blue-400"
					>
						{t(`header.about`)}
					</a>
					<a
						href="#Skills"
						className="text-base leading-6 text-neutral-600 dark:text-neutral-300 duration-300 hover:text-blue-400 dark:hover:text-blue-400"
					>
						{t(`header.skills`)}
					</a>
					<a
						href="#Projects"
						className="text-base leading-6 text-neutral-600 dark:text-neutral-300 duration-300 hover:text-blue-400 dark:hover:text-blue-400"
					>
						{t(`header.projects`)}
					</a>

					<a
						href="#Contact"
						className="text-base leading-6 text-neutral-600 dark:text-neutral-300 duration-300 hover:text-blue-400 dark:hover:text-blue-400"
					>
						{t(`header.contact`)}
					</a>
				</div>

				<div className="hidden lg:flex flex-1 items-center justify-end gap-x-4">
					<ThemeToggle />
					<LanguageChanger />
				</div>

				<div className="flex lg:hidden">
					<a className="rounded-full p-2 lg:hidden" onClick={toggleDrawer}>
						<IoMenu size={28} />
					</a>
				</div>

				<Drawer
					open={openDrawer}
					onClose={() => setOpenDrawer(false)}
					className="max-w-60"
					closeButton={false}
				>
					<Drawer.Body className="bg-white dark:bg-neutral-800 m-0 p-0 h-svh">
						<div className="flex flex-col flex-1 h-full justify-between">
							<div className="p-2 flex justify-end shadow">
								<a
									onClick={toggleDrawer}
									className="flex p-2 justify-end rounded-full"
								>
									<IoClose size={28} />
								</a>
							</div>
							<div className="flex flex-1 flex-col gap-4 p-4 text-right shadow">
								<a
									href="#Home"
									onClick={toggleDrawer}
									className="text-lg leading-6 text-neutral-600 dark:text-neutral-300"
								>
									{t(`header.home`)}
								</a>
								<a
									href="#About"
									onClick={toggleDrawer}
									className="text-lg leading-6 text-neutral-600 dark:text-neutral-300"
								>
									{t(`header.about`)}
								</a>
								<a
									href="#Skills"
									onClick={toggleDrawer}
									className="text-lg leading-6 text-neutral-600 dark:text-neutral-300"
								>
									{t(`header.skills`)}
								</a>
								<a
									href="#Projects"
									onClick={toggleDrawer}
									className="text-lg leading-6 text-neutral-600 dark:text-neutral-300"
								>
									{t(`header.projects`)}
								</a>
								<a
									href="#Contact"
									onClick={toggleDrawer}
									className="text-lg leading-6 text-neutral-600 dark:text-neutral-300"
								>
									{t(`header.contact`)}
								</a>
							</div>

							<div className="flex p-4 text-right justify-end shadow gap-x-4">
								<ThemeToggle />
								<LanguageChanger />
							</div>
						</div>
					</Drawer.Body>
				</Drawer>
			</div>
		</header>
	);
}
