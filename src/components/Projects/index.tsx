"use client";

import ProjectCard from "../ProjectCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import PageHeader from "../PageHeader";

export interface TechnologyProps {
	name: string;
	icon: React.ReactNode;
}

interface PortfolioProps {
	id: number;
	name: string;
	description: string;
	technologies: TechnologyProps[];
	gitHubUrl: string;
	siteUrl: string;
	image: string;
}

import {
	SiStyledcomponents,
	SiTailwindcss,
	SiTypescript,
	SiJavascript,
	SiNextdotjs,
	SiGithub,
	SiFigma,
	SiReact,
	SiHtml5,
	SiCss3,
	SiGit,
	SiMui,
	SiNodedotjs,
	SiDocker,
	SiPrisma,
	SiFastify,
} from "react-icons/si";
import { useState } from "react";

export default function Projects() {
	const { t } = useTranslation();

	const iconSize = 32;

	const technologies = {
		react: {
			name: "React",
			icon: <SiReact size={iconSize} />,
		},
		nextJs: {
			name: "NextJs",
			icon: <SiNextdotjs size={iconSize} />,
		},
		figma: {
			name: "Figma",
			icon: <SiFigma size={iconSize} />,
		},
		gitHub: {
			name: "GitHub",
			icon: <SiGithub size={iconSize} />,
		},
		git: {
			name: "Git",
			icon: <SiGit size={iconSize} />,
		},
		mui: {
			name: "MUI",
			icon: <SiMui size={iconSize} />,
		},
		styledComponents: {
			name: "Styled Components",
			icon: <SiStyledcomponents size={iconSize} />,
		},
		tailwind: {
			name: "Tailwind",
			icon: <SiTailwindcss size={iconSize} />,
		},
		typeScript: {
			name: "Type Script",
			icon: <SiTypescript size={iconSize} />,
		},
		javaScript: {
			name: "JavaScript",
			icon: <SiJavascript size={iconSize} />,
		},
		html: {
			name: "HTML5",
			icon: <SiHtml5 size={iconSize} />,
		},
		css: {
			name: "CSS3",
			icon: <SiCss3 size={iconSize} />,
		},
		node: {
			name: "Node.js",
			icon: <SiNodedotjs size={iconSize} />,
		},
		docker: {
			name: "Docker",
			icon: <SiDocker size={iconSize} />,
		},
		prisma: {
			name: "Prisma",
			icon: <SiPrisma size={iconSize} />,
		},
		fastify: {
			name: "Prisma",
			icon: <SiFastify size={iconSize} />,
		},
	};

	const {
		react,
		nextJs,
		figma,
		gitHub,
		git,
		mui,
		styledComponents,
		tailwind,
		typeScript,
		javaScript,
		html,
		css,
		node,
		docker,
		prisma,
		fastify,
	} = technologies;

	const portfolio: PortfolioProps[] = [
		{
			id: 11,
			name: "gymPassSystem",
			description: "API desenvolvida em Node.js, utilizando Prisma e Docker.",
			technologies: [javaScript, node, docker, prisma, fastify],
			gitHubUrl: "https://github.com/LourencoHenri/node-03",
			siteUrl: "",
			image:
				"https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 10,
			name: "gymApi",
			description:
				"API para aplicativo de treino desenvolvida em Node.js, utilizando Prisma e Docker.",
			technologies: [javaScript, node, docker, prisma],
			gitHubUrl: "https://github.com/LourencoHenri/gym-api",
			siteUrl: "",
			image:
				"https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 9,
			name: "gymMobileApp",
			description:
				"Aplicativo de treino prototipado no Figma e desenvolvido em React Native.",
			technologies: [react, typeScript, figma],
			gitHubUrl: "https://github.com/LourencoHenri/gym-mobile-app",
			siteUrl: "",
			image:
				"https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 14,
			name: "saasApi",
			description: "API para SaaS, desenvolvida em Node.js.",
			technologies: [javaScript, node, docker, prisma],
			gitHubUrl: "https://github.com/LourencoHenri/next-rbac",
			siteUrl: "",
			image:
				"https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 7,
			name: "toggleThemeMui",
			description:
				"The Toggle Theme MUI project allows you to switch between light and dark themes in a web application.",
			technologies: [react, typeScript, nextJs, mui, styledComponents],
			gitHubUrl: "https://github.com/LourencoHenri/toggleThemeMui",
			siteUrl: "https://toggle-theme-mui-lourencohenri.vercel.app/",
			image:
				"https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		},
		{
			id: 13,
			name: "dailyDietApi",
			description:
				"API para sistema de controle nutricional, desenvolvida em Node.js",
			technologies: [javaScript, node, fastify],
			gitHubUrl: "https://github.com/LourencoHenri/node-challenge-02",
			siteUrl: "",
			image:
				"https://images.unsplash.com/photo-1708987379841-2badb0d3a95a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 12,
			name: "findAFriend",
			description:
				"API para sistema de busca de animais, desenvolvida em Node.js, utilizando Prisma e Docker.",
			technologies: [javaScript, node, docker, prisma, fastify],
			gitHubUrl: "https://github.com/LourencoHenri/node-challenge-03",
			siteUrl: "",
			image:
				"https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},

		{
			id: 8,
			name: "weatherApp",
			description:
				"Utilização de API para fornecer informações meteorológicas em tempo real.",
			technologies: [react, typeScript, nextJs, mui, styledComponents],
			gitHubUrl: "https://github.com/LourencoHenri/weatherApp",
			siteUrl: "",
			image:
				"https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
		},
		{
			id: 2,
			name: "pomodoroTimer",
			description:
				"Pomodoro Timer application that assists in time management and productivity enhancement.",
			technologies: [react, typeScript, styledComponents],
			gitHubUrl: "https://github.com/LourencoHenri/pomodoroTimer",
			siteUrl: "",
			image:
				"https://img.freepik.com/vetores-gratis/fundo-de-tecnologia-de-rede-5g-com-linha-digital-azul_53876-119505.jpg?size=626&ext=jpg&ga=GA1.1.1049139390.1684335736&semt=sph",
		},

		{
			id: 3,
			name: "feed",
			description:
				"Simulates a feed system, allowing the display of organized and interactive posts and comments.",
			technologies: [react, css, html],
			gitHubUrl: "https://github.com/LourencoHenri/feed",
			siteUrl: "https://lourencohenri.github.io/feed/",
			image:
				"https://img.freepik.com/fotos-gratis/computador-laptop-cinza-ligado_400718-47.jpg?w=1390&t=st=1684722782~exp=1684723382~hmac=a272128d1cea39a87a6a828d5adf4a3e423341028b2b972dd6d30cef041da769",
		},
		{
			id: 4,
			name: "toDoList",
			description:
				"Task list application, allowing users to create, organize, and manage their tasks efficiently and conveniently.",
			technologies: [react, typeScript, css],
			gitHubUrl: "https://github.com/LourencoHenri/toDoList",
			siteUrl: "",
			image:
				"https://img.freepik.com/fotos-gratis/fundo-de-programacao-com-html_23-2150038863.jpg?size=626&ext=jpg&ga=GA1.2.1049139390.1684335736&semt=sph",
		},
		{
			id: 6,
			name: "calculator",
			description:
				"The project provides a calculator with both normal and scientific modes, featuring an intuitive interface.",
			technologies: [react, typeScript, nextJs, css],
			gitHubUrl: "https://github.com/LourencoHenri/calculator",
			siteUrl: "",
			image:
				"https://img.freepik.com/fotos-gratis/programador-profissional-trabalhando-ate-tarde-no-escritorio-escuro_1098-18705.jpg?w=1390&t=st=1684722836~exp=1684723436~hmac=c3d5dbb990c23f0116b61052573978690abd97b7430deb83b04bef66b092b5a7",
		},
		{
			id: 5,
			name: "shop",
			description:
				"The project incorporates e-commerce features, facilitating order processing and payment transactions.",
			technologies: [react, typeScript, nextJs, css],
			gitHubUrl: "https://github.com/LourencoHenri/Shop",
			siteUrl: "",
			image:
				"https://img.freepik.com/fotos-gratis/plano-de-fundo-de-programacao-com-pessoa-trabalhando-com-codigos-no-computador_23-2150010125.jpg?w=1390&t=st=1684722821~exp=1684723421~hmac=4fbedd7d45fc5efd3d695757896b8da9538913d8ad67878f02532085a12fca68",
		},
		{
			id: 1,
			name: "coffeeShop",
			description:
				"The project includes café-related features, making it easy to handle orders and process payments efficiently.",
			technologies: [react, typeScript, styledComponents],
			gitHubUrl: "https://github.com/LourencoHenri/coffeeShop",
			siteUrl: "",
			image:
				"https://images.unsplash.com/photo-1498804103079-a6351b050096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
		},
	];

	// pagination system

	const projectsPerPage: number = 6;

	const totalPages: number = Math.ceil(portfolio.length / projectsPerPage);

	const [currentPage, setCurrentPage] = useState(1);

	const indexOfLastItem = currentPage * projectsPerPage;

	const indexOfFirstItem = indexOfLastItem - projectsPerPage;

	const currentProjects = portfolio.slice(indexOfFirstItem, indexOfLastItem);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	return (
		<div
			id="Projects"
			className="flex flex-col text-white items-center py-20 mx-8 gap-8"
		>
			<div className="flex flex-col items-center text-center gap-4 mb-4">
				<PageHeader
					title={t(`projects.title`)}
					subtitle={t(`projects.subtitle`)}
				/>
				<p className="text-lg">{t(`projects.instruction`)}</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-8 gap-8 ">
				{currentProjects.map((project) => (
					<ProjectCard
						key={project.id}
						name={project.name}
						description={project.description}
						technologies={project.technologies}
						gitHubUrl={project.gitHubUrl}
						siteUrl={project.siteUrl}
						image={project.image}
					/>
				))}
			</div>

			<div className=" flex flex-1 justify-between w-full border-t border-t-neutral-800 p-4 md:px-10">
				<button
					onClick={() => handlePreviousPage()}
					className="rounded-md border border-transparent duration-300 cursor-pointer bg-transparent text-neutral-50"
				>
					<div className="flex gap-2 items-center justify-center">
						<IoChevronBackOutline size={28} />
						<p className="hidden md:flex lg:flex">Previous</p>
					</div>
				</button>

				<div className="justify-center flex flex-row gap-6">
					{Array.from({ length: totalPages }, (_, index) => index + 1).map(
						(number) => (
							<button
								key={number}
								onClick={() => handlePageChange(number)}
								disabled={currentPage === number}
								className={`rounded-full border w-7 h-7 border-transparent duration-300 cursor-pointer ${
									currentPage === number
										? "bg-neutral-50 text-neutral-800"
										: "bg-transparent text-neutral-50"
								} `}
							>
								<p className="text-base">{number}</p>
							</button>
						)
					)}
				</div>

				<button
					onClick={() => handleNextPage()}
					className="rounded-md border border-transparent duration-300 cursor-pointer bg-transparent text-neutral-50 "
				>
					<div className="flex gap-2 items-center justify-center">
						<p className="hidden md:flex lg:flex">Next</p>
						<IoChevronForwardOutline size={28} />
					</div>
				</button>
			</div>
		</div>
	);
}
