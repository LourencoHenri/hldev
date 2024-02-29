"use client";

import { useTranslation } from "react-i18next";
import {
	IoChevronForward,
	IoClose,
	IoFlag,
	IoSettings,
	IoSettingsSharp,
} from "react-icons/io5";

interface DrawerProps {
	drawerOpen: boolean;
	toggleDrawer: () => void;
}

export function Drawer({ drawerOpen, toggleDrawer }: DrawerProps) {
	const { t } = useTranslation();

	return (
		<div className="fixed w-screen flex flex-1 z-50">
			<button
				className="flex-1 bg-neutral-900 opacity-50"
				onClick={toggleDrawer}
			/>
			<div
				className={`${
					drawerOpen ? "" : "hidden"
				} w-1/4 min-h-screen bg-neutral-900`}
			>
				<div className="flex flex-col min-h-screen" aria-label="Global">
					<div className="p-2 flex justify-end shadow">
						<button
							onClick={toggleDrawer}
							className="flex p-2 justify-end rounded-full"
						>
							<IoClose size={24} />
						</button>
					</div>
					<div className="flex flex-1 flex-col gap-6 p-4 text-right ">
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
							href="#Projects"
							onClick={toggleDrawer}
							className="text-base leading-6 text-neutral-300"
						>
							Integrated Projects
						</a>
						<a
							href="#Contact"
							onClick={toggleDrawer}
							className="text-base leading-6 text-neutral-300"
						>
							{t(`header.contact`)}
						</a>
					</div>
					<div className="flex flex-1 flex-col justify-center items-center gap-8 p-4">
						<a href="#Home" className="text-base leading-6 text-neutral-300">
							<IoSettingsSharp size={28} />fdsfsd
						</a>
						<a href="#About" className="text-base leading-6 text-neutral-300">
							<IoFlag size={28} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
