import { Project } from "@/src/types/project";

export const fallbackProjects: Project[] = [
	{
		id: 15,
		name: "bellasDiVestidos",
		description:
			"Children's boutique for buying and renting party dresses, with a charming catalog.",
		technologies: ["nextJs", "react", "airtable"],
		gitHubUrl: "",
		siteUrl: "https://atelie-bellas-di-vestidos.vercel.app/",
		image:
			"https://images.unsplash.com/photo-1560506840-ec148e82a604?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		featured: true,
		order: 1,
	},
	{
		id: 16,
		name: "drAmandaCorrea",
		description:
			"Dental practice website designed to convey care, trust and a welcoming first impression.",
		technologies: ["nextJs", "react"],
		gitHubUrl: "",
		siteUrl: "https://dra-amanda-correa.vercel.app/",
		image:
			"https://images.unsplash.com/photo-1559592892-19db4235d786?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		featured: true,
		order: 2,
	},
	{
		id: 17,
		name: "appMeuCard",
		description:
			"Mobile app for requesting a prepaid credit card, with crypto support.",
		technologies: ["react", "node", "mui"],
		gitHubUrl: "",
		siteUrl: "https://app.meucard.io/",
		image:
			"https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		featured: true,
		order: 3,
	},
	{
		id: 18,
		name: "getPay",
		description:
			"Payment gateway with a complete back-office for end-to-end transaction management.",
		technologies: ["php", "docker", "laravel"],
		gitHubUrl: "",
		siteUrl: "https://app.getpay.one/dashboard",
		image:
			"https://images.unsplash.com/photo-1667566455648-262db767912b?q=80&w=1157&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		featured: true,
		order: 4,
	},
	{
		id: 11,
		name: "gymPassSystem",
		description: "API developed in Node.js, using Prisma and Docker.",
		technologies: ["javaScript", "node", "docker", "prisma", "fastify"],
		gitHubUrl: "https://github.com/LourencoHenri/node-03",
		siteUrl: "",
		image:
			"https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=1770&auto=format&fit=crop",
		featured: true,
		order: 5,
	},
	{
		id: 10,
		name: "gymApi",
		description:
			"API for the training app, developed in Node.js, using Prisma and Docker.",
		technologies: ["javaScript", "node", "docker", "prisma"],
		gitHubUrl: "https://github.com/LourencoHenri/gym-api",
		siteUrl: "",
		image:
			"https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=1769&auto=format&fit=crop",
		order: 6,
	},
	{
		id: 9,
		name: "gymMobileApp",
		description:
			"Training app prototyped in Figma and developed with React Native.",
		technologies: ["reactNative", "typeScript", "figma"],
		gitHubUrl: "https://github.com/LourencoHenri/gym-mobile-app",
		siteUrl: "",
		image:
			"https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1856&auto=format&fit=crop",
		featured: true,
		order: 7,
	},
	{
		id: 14,
		name: "saasApi",
		description: "API for SaaS, developed in Node.js.",
		technologies: ["javaScript", "node", "docker", "prisma"],
		gitHubUrl: "https://github.com/LourencoHenri/next-rbac",
		siteUrl: "",
		image:
			"https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
		order: 8,
	},
	{
		id: 7,
		name: "toggleThemeMui",
		description:
			"The Toggle Theme MUI project allows you to switch between light and dark themes in a web application.",
		technologies: ["react", "typeScript", "nextJs", "mui", "styledComponents"],
		gitHubUrl: "https://github.com/LourencoHenri/toggleThemeMui",
		siteUrl: "https://toggle-theme-mui-lourencohenri.vercel.app/",
		image:
			"https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1770&auto=format&fit=crop",
		featured: true,
		order: 9,
	},
	{
		id: 13,
		name: "dailyDietApi",
		description:
			"API for a nutritional control system, developed in Node.js.",
		technologies: ["javaScript", "node", "fastify"],
		gitHubUrl: "https://github.com/LourencoHenri/node-challenge-02",
		siteUrl: "",
		image:
			"https://images.unsplash.com/photo-1708987379841-2badb0d3a95a?q=80&w=1770&auto=format&fit=crop",
		order: 10,
	},
	{
		id: 12,
		name: "findAFriend",
		description:
			"API for an animal search system, developed in Node.js, using Prisma and Docker.",
		technologies: ["javaScript", "node", "docker", "prisma", "fastify"],
		gitHubUrl: "https://github.com/LourencoHenri/node-challenge-03",
		siteUrl: "",
		image:
			"https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1770&auto=format&fit=crop",
		order: 11,
	},
	{
		id: 8,
		name: "weatherApp",
		description:
			"Utilization of API to provide real-time weather information.",
		technologies: ["react", "typeScript", "nextJs", "mui", "styledComponents"],
		gitHubUrl: "https://github.com/LourencoHenri/weatherApp",
		siteUrl: "",
		image:
			"https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1025&auto=format&fit=crop",
		order: 12,
	},
	{
		id: 2,
		name: "pomodoroTimer",
		description:
			"Pomodoro Timer application that assists in time management and productivity enhancement.",
		technologies: ["react", "typeScript", "styledComponents"],
		gitHubUrl: "https://github.com/LourencoHenri/pomodoroTimer",
		siteUrl: "",
		image:
			"https://images.unsplash.com/photo-1495364141860-b0d03eccd065?q=80&w=1770&auto=format&fit=crop",
		order: 13,
	},
	{
		id: 3,
		name: "feed",
		description:
			"Simulates a feed system, allowing the display of organized and interactive posts and comments.",
		technologies: ["react", "css", "html"],
		gitHubUrl: "https://github.com/LourencoHenri/feed",
		siteUrl: "https://lourencohenri.github.io/feed/",
		image:
			"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1740&auto=format&fit=crop",
		order: 14,
	},
	{
		id: 4,
		name: "toDoList",
		description:
			"Task list application, allowing users to create, organize, and manage their tasks efficiently and conveniently.",
		technologies: ["react", "typeScript", "css"],
		gitHubUrl: "https://github.com/LourencoHenri/toDoList",
		siteUrl: "",
		image:
			"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1772&auto=format&fit=crop",
		order: 15,
	},
	{
		id: 6,
		name: "calculator",
		description:
			"The project provides a calculator with both normal and scientific modes, featuring an intuitive interface.",
		technologies: ["react", "typeScript", "nextJs", "css"],
		gitHubUrl: "https://github.com/LourencoHenri/calculator",
		siteUrl: "",
		image:
			"https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1771&auto=format&fit=crop",
		order: 16,
	},
	{
		id: 5,
		name: "shop",
		description:
			"The project incorporates e-commerce features, facilitating order processing and payment transactions.",
		technologies: ["react", "typeScript", "nextJs", "css"],
		gitHubUrl: "https://github.com/LourencoHenri/Shop",
		siteUrl: "",
		image:
			"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1770&auto=format&fit=crop",
		order: 17,
	},
	{
		id: 1,
		name: "coffeeShop",
		description:
			"The project includes café-related features, making it easy to handle orders and process payments efficiently.",
		technologies: ["react", "typeScript", "styledComponents"],
		gitHubUrl: "https://github.com/LourencoHenri/coffeeShop",
		siteUrl: "",
		image:
			"https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1770&auto=format&fit=crop",
		order: 18,
	},
];
