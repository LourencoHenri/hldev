"use client";

import Image from "next/image";
import { IoMenu, IoSettingsSharp } from "react-icons/io5";

import logo from "../assets/logoBlack.svg";
import { LogoBlack } from "@/app/assets/logo/logoBlack";
import { LogoWhite } from "@/app/assets/logo/LogoWhite";

interface HeaderProps {
	drawerOpen: boolean;
	toggleDrawer: () => void;
}

export function Header({ drawerOpen, toggleDrawer }: HeaderProps) {
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
						Home
					</a>
					<a
						href="#About"
						className="text-base leading-6 text-neutral-300 duration-300 hover:text-blue-400"
					>
						About
					</a>
					<a
						href="#Skills"
						className="text-base leading-6 text-neutral-300 duration-300 hover:text-blue-400"
					>
						Skills
					</a>
					<a
						href="#Projects"
						className="text-base leading-6 text-neutral-300 duration-300 hover:text-blue-400"
					>
						Projects
					</a>
					<a
						href="#Contact"
						className="text-base leading-6 text-neutral-300 duration-300 hover:text-blue-400"
					>
						Contact
					</a>
				</div>

				<div className="hidden md:flex flex-row items-center justify-center gap-2">
					<button className="text-base p-1 rounded-full leading-6 text-neutral-300 duration-300 hover:text-blue-400">
						<IoMenu size={24} />
					</button>
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
