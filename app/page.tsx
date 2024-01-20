"use client";

import SocialMedia from "./components/SocialMedia";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skilss";
import Contact from "./components/Contact";
import { Header } from "./components/Header";
import { useState } from "react";
import { Drawer } from "./components/Drawer";
import Three, { Overlay } from "./components/Three";
import { SiGithub, SiLinkedin } from "react-icons/si";
import HelloThree from "./components/ThreeText";

export default function Home() {
	const [drawerOpen, setDrawerOpen] = useState(false);

	function toggleDrawer() {
		setDrawerOpen(!drawerOpen);
	}

	return (
		<main className="flex min-h-screen flex-col">
			<Header drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

			<Drawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

			<Three />

			<div className="text-white min-h-screen w-full absolute flex justify-center items-center">
				<div className="text-center flex flex-col">
					<h1 className="text-xl md:text-2xl">Hello, my name is</h1>
					<h1 className="text-7xl md:text-9xl font-medium">Henrique</h1>
					<h1 className="text-2xl md:text-3xl font-medium mt-2 md:mt-4">
						I'm Software Developer
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

			<About />

			<Skills />

			<Projects />

			<Contact />
		</main>
	);
}
