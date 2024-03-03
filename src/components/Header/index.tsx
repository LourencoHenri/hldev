"use client";

import { Fragment, useEffect, useState } from "react";

import { LogoWhite } from "../../assets/logo/LogoWhite";

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

export default function Header() {
	const { t, i18n } = useTranslation();

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
		<header className="fixed left-0 top-0 w-full bg-[rgb(15,15,15)] lg:py-2 bg-opacity-85 shadow z-50">
			<div
				className="mx-auto flex items-center justify-between md:justify-between p-2 lg:px-8"
				aria-label="Global"
			>
				<a href="#Home" className="flex p-2 flex-1 md:p-0">
					<LogoWhite />
				</a>

				<div className="hidden md:flex flex-1 justify-center md:gap-x-8 lg:flex lg:gap-x-8">
					<a
						href="#Home"
						className="text-base leading-6 text-neutral-300 hover:text-blue-400"
					>
						{t(`header.home`)}
					</a>
					<a
						href="#About"
						className="text-base leading-6 text-neutral-300 duration-300 hover:text-blue-400"
					>
						{t(`header.about`)}
					</a>
					<a
						href="#Skills"
						className="text-base leading-6 text-neutral-300 duration-300 hover:text-blue-400"
					>
						{t(`header.skills`)}
					</a>
					<a
						href="#Projects"
						className="text-base leading-6 text-neutral-300 duration-300 hover:text-blue-400"
					>
						{t(`header.projects`)}
					</a>

					<a
						href="#Contact"
						className="text-base leading-6 text-neutral-300 duration-300 hover:text-blue-400"
					>
						{t(`header.contact`)}
					</a>
				</div>

				<div className="hidden md:flex flex-1 items-center justify-end">
					<LanguageChanger />
				</div>

				<div className="flex md:hidden">
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
					<Drawer.Body className="bg-neutral-800 m-0 p-0 h-svh">
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
									className="text-lg leading-6 text-neutral-300"
								>
									{t(`header.home`)}
								</a>
								<a
									href="#About"
									onClick={toggleDrawer}
									className="text-lg leading-6 text-neutral-300"
								>
									{t(`header.about`)}
								</a>
								<a
									href="#Skills"
									onClick={toggleDrawer}
									className="text-lg leading-6 text-neutral-300"
								>
									{t(`header.skills`)}
								</a>
								<a
									href="#Projects"
									onClick={toggleDrawer}
									className="text-lg leading-6 text-neutral-300"
								>
									{t(`header.projects`)}
								</a>
								<a
									href="#Contact"
									onClick={toggleDrawer}
									className="text-lg leading-6 text-neutral-300"
								>
									{t(`header.contact`)}
								</a>
							</div>

							<div className="flex p-4 text-right justify-end shadow">
								<LanguageChanger />
							</div>
						</div>
					</Drawer.Body>
				</Drawer>
			</div>
		</header>
	);
}
