"use client";

import { LogoWhite } from "../../assets/logo/LogoWhite";
import { LogoBlack } from "../../assets/logo/LogoBlack";
import {
	IoChevronDown,
	IoClose,
	IoFlag,
	IoMenu,
	IoSettingsSharp,
} from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { Fragment, useEffect, useState } from "react";

import brazilFlag from "../../assets/flags/brazil.png";
import germanyFlag from "../../assets/flags/germany.png";
import spainFlag from "../../assets/flags/spain.png";
import usaFlag from "../../assets/flags/usa.png";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { Drawer, Placeholder } from "rsuite";

interface HeaderProps {
	drawerOpen: boolean;
	toggleDrawer: () => void;
}

interface LanguagesProps {
	id: string;
	name: string;
	image: any;
}

export function Header() {
	const { t, i18n } = useTranslation();

	const [openDrawer, setOpenDrawer] = useState(false);

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

	const [currentLanguage, setCurrentLanguage] = useState<LanguagesProps>({
		id: "en-US",
		name: "english",
		image: usaFlag,
	});

	const languagesWithoutCurrentLanguage = languages.filter(
		(a) => a.id !== currentLanguage.id
	);

	function handleChangeLanguage(language: LanguagesProps) {
		i18n.changeLanguage(language.id);
		localStorage.setItem("language", language.id);
		setCurrentLanguage(language);
	}

	useEffect(() => {
		const storageLanguage = localStorage.getItem("language");

		const language =
			storageLanguage &&
			languages.find((language) => language.id === storageLanguage);

		storageLanguage
			? i18n.changeLanguage(storageLanguage)
			: i18n.changeLanguage("en-US");
		storageLanguage
			? language && setCurrentLanguage(language)
			: setCurrentLanguage({
					id: "en-US",
					name: "english",
					image: usaFlag,
			  });
	}, []);

	return (
		<header className="fixed left-0 top-0 w-full bg-[rgb(15,15,15)] lg:py-2 bg-opacity-85 shadow z-50">
			<div
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

					{/* <Popover className="relative">
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
					</Popover> */}

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
				</div>

				<div className="flex md:hidden gap-1 items-center justify-center">
					<Popover className="relative">
						<Popover.Button className="flex rounded-full gap-2 p-2 justify-center items-center text-base leading-6 text-neutral-300 duration-300 hover:text-blue-400">
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
					<button className="rounded-full p-2 lg:hidden" onClick={toggleDrawer}>
						<IoMenu size={28} />
					</button>
				</div>

				<Drawer
					open={openDrawer}
					onClose={() => setOpenDrawer(false)}
					className="max-w-32"
					closeButton={
						<div className="p-2 flex justify-end shadow">
							<button
								onClick={toggleDrawer}
								className="flex p-2 justify-end rounded-full"
							>
								<IoClose size={28} />
							</button>
						</div>
					}
				>
					<Drawer.Body className="bg-neutral-800 m-0 p-0 h-svh">
						<div className="flex flex-1 flex-col gap-4 p-4 text-right shadow">
							<a
								href="#Home"
								onClick={toggleDrawer}
								className="text-base leading-6 text-neutral-300"
							>
								{t(`header.home`)}
							</a>
							<a
								href="#About"
								onClick={toggleDrawer}
								className="text-base leading-6 text-neutral-300"
							>
								{t(`header.about`)}
							</a>
							<a
								href="#Skills"
								onClick={toggleDrawer}
								className="text-base leading-6 text-neutral-300"
							>
								{t(`header.skills`)}
							</a>
							<a
								href="#Projects"
								onClick={toggleDrawer}
								className="text-base leading-6 text-neutral-300"
							>
								{t(`header.projects`)}
							</a>
							<a
								href="#Contact"
								onClick={toggleDrawer}
								className="text-base leading-6 text-neutral-300"
							>
								{t(`header.contact`)}
							</a>
						</div>
						{/* <Popover className="relative">
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
						</Popover> */}
						{/* <div className="flex flex-1 flex-col justify-end items-center gap-2 p-2">
							<a
								href="#About"
								className="text-base bg-neutral-700 rounded-md p-2 leading-6 text-neutral-300"
							>
								<IoFlag size={28} />
							</a>
							<a
								href="#Home"
								className="text-base bg-neutral-700 rounded-md p-2 leading-6 text-neutral-300"
							>
								<IoSettingsSharp size={28} />
							</a>
						</div> */}
					</Drawer.Body>
				</Drawer>
			</div>
		</header>
	);
}
