"use client";

import { LogoWhite } from "../../assets/logo/LogoWhite";
import { LogoBlack } from "../../assets/logo/LogoBlack";
import { IoChevronDown, IoMenu } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { Fragment, useState } from "react";

import brazilFlag from "../../assets/flags/brazil.png";
import germanyFlag from "../../assets/flags/germany.png";
import spainFlag from "../../assets/flags/spain.png";
import usaFlag from "../../assets/flags/usa.png";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";

interface HeaderProps {
	drawerOpen: boolean;
	toggleDrawer: () => void;
}

interface LanguagesProps {
	id: string;
	name: string;
	image: any;
}

export function Header({ drawerOpen, toggleDrawer }: HeaderProps) {
	const { t, i18n } = useTranslation();

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

	const [currentLanguage, setCurrentLanguage] = useState<LanguagesProps>({
		id: "es-ES",
		name: "spanish",
		image: spainFlag,
	});

	const languagesWithoutCurrentLanguage = languages.filter(
		(a) => a.id !== currentLanguage.id
	);

	function handleChangeLanguage(language: LanguagesProps) {
		i18n.changeLanguage(language.id);
		localStorage.setItem("language", language.id);
		setCurrentLanguage(language);
	}

	return (
		<header className="fixed left-0 top-0 w-full bg-[rgb(15,15,15)] lg:py-2 bg-opacity-85 shadow z-50">
			<nav
				className="mx-auto flex items-center justify-between md:justify-between p-2 lg:px-8"
				aria-label="Global"
			>
				<a href="#Home" className="flex p-2 md:p-0">
					<LogoWhite />
				</a>
				<div className="hidden p-2 md:p-0">
					<LogoBlack />
				</div>
				<div className="hidden md:flex md:gap-x-8 lg:flex lg:gap-x-8">
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
					
					<Popover className="relative">
					<Popover.Button className="flex gap-2 justify-center items-center text-base leading-6 text-neutral-300 duration-300 hover:text-blue-400">
							<span>Integrated Projects</span>
							<IoChevronDown />
						</Popover.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute z-10 mt-2">
								<div className="rounded-md flex flex-1 bg-neutral-800">
									<div className="relative flex flex-1 rounded-md flex-col bg-neutral-800">
										{languagesWithoutCurrentLanguage.map((language) => (
											<button
												key={language.id}
												onClick={() => handleChangeLanguage(language)}
												className="text-base p-1 rounded-full text-neutral-300 duration-300 hover:text-blue-400"
											>
												<Image
													src={language.image}
													alt={language.id}
													width={24}
												/>
											</button>
										))}
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</Popover>
					<a
						href="#Contact"
						className="text-base leading-6 text-neutral-300 duration-300 hover:text-blue-400"
					>
						{t(`header.contact`)}
					</a>
				</div>

				<div className="hidden md:flex flex-row items-center justify-center gap-2">
					<Popover className="relative">
						<Popover.Button className="flex gap-2 p-1 justify-center items-center text-base leading-6 text-neutral-300 duration-300 hover:text-blue-400">
							<Image
								src={currentLanguage.image}
								alt={currentLanguage.id}
								width={24}
							/>
						</Popover.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute z-10 mt-2">
								<div className="rounded-md flex flex-1 bg-neutral-800">
									<div className="relative flex flex-1 rounded-md flex-col bg-neutral-800">
										{languagesWithoutCurrentLanguage.map((language) => (
											<button
												key={language.id}
												onClick={() => handleChangeLanguage(language)}
												className="text-base p-1 rounded-full text-neutral-300 duration-300 hover:text-blue-400"
											>
												<Image
													src={language.image}
													alt={language.id}
													width={24}
												/>
											</button>
										))}
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</Popover>

					<button className="text-base p-1 rounded-full leading-6 text-neutral-300 duration-300 hover:text-blue-400">
						<IoMenu size={24} />
					</button>
				</div>

				<button className="rounded-full p-2 lg:hidden" onClick={toggleDrawer}>
					<IoMenu size={24} />
				</button>
			</nav>
		</header>
	);
}
