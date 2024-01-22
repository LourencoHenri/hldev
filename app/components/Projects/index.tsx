import { SiGithub } from "react-icons/si";
import ProjectCard from "../ProjectCard";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import PageHeader from "../PageHeader";

interface PortfolioProps {
	id: number;
	name: string;
	description: string;
	gitHubUrl: string;
	siteUrl: string;
	image: string;
}

export default function Projects() {
	const { t } = useTranslation();

	const portfolio: PortfolioProps[] = [
		{
			id: 8,
			name: "Weather App",
			description:
				"The project is a web application that provides real-time weather information, with an intuitive and responsive interface.",
			gitHubUrl: "https://github.com/LourencoHenri/weatherApp",
			siteUrl: "https://weather-app-lourencohenri.vercel.app/",
			image:
				"https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
		},
		{
			id: 2,
			name: "Pomodoro Timer",
			description:
				"Pomodoro Timer application that assists in time management and productivity enhancement.",
			gitHubUrl: "https://github.com/LourencoHenri/pomodoroTimer",
			siteUrl: "https://lourencohenri.github.io/pomodoroTimer/",
			image:
				"https://img.freepik.com/vetores-gratis/fundo-de-tecnologia-de-rede-5g-com-linha-digital-azul_53876-119505.jpg?size=626&ext=jpg&ga=GA1.1.1049139390.1684335736&semt=sph",
		},
		{
			id: 7,
			name: "Toggle Theme - MUI",
			description:
				"The Toggle Theme MUI project allows you to switch between light and dark themes in a web application.",
			gitHubUrl: "https://github.com/LourencoHenri/toggleThemeMui",
			siteUrl: "https://toggle-theme-mui-lourencohenri.vercel.app/",
			image:
				"https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
		},
		{
			id: 3,
			name: "Feed",
			description:
				"Simulates a feed system, allowing the display of organized and interactive posts and comments.",
			gitHubUrl: "https://github.com/LourencoHenri/feed",
			siteUrl: "https://lourencohenri.github.io/feed/",
			image:
				"https://img.freepik.com/fotos-gratis/computador-laptop-cinza-ligado_400718-47.jpg?w=1390&t=st=1684722782~exp=1684723382~hmac=a272128d1cea39a87a6a828d5adf4a3e423341028b2b972dd6d30cef041da769",
		},
		{
			id: 4,
			name: "ToDo List",
			description:
				"Task list application, allowing users to create, organize, and manage their tasks efficiently and conveniently.",
			gitHubUrl: "https://github.com/LourencoHenri/toDoList",
			siteUrl: "https://lourencohenri.github.io/toDoList/",
			image:
				"https://img.freepik.com/fotos-gratis/fundo-de-programacao-com-html_23-2150038863.jpg?size=626&ext=jpg&ga=GA1.2.1049139390.1684335736&semt=sph",
		},
		{
			id: 6,
			name: "Calculator",
			description:
				"The project offers an intuitive and user-friendly interface for performing both.",
			gitHubUrl: "https://github.com/LourencoHenri/calculator",
			siteUrl: "",
			image:
				"https://img.freepik.com/fotos-gratis/programador-profissional-trabalhando-ate-tarde-no-escritorio-escuro_1098-18705.jpg?w=1390&t=st=1684722836~exp=1684723436~hmac=c3d5dbb990c23f0116b61052573978690abd97b7430deb83b04bef66b092b5a7",
		},
		{
			id: 5,
			name: "Shop",
			description:
				"The project encompasses everything from the user interface to order processing and payments, providing a comprehensive solution for the online shopping experience.",
			gitHubUrl: "https://github.com/LourencoHenri/Shop",
			siteUrl: "",
			image:
				"https://img.freepik.com/fotos-gratis/plano-de-fundo-de-programacao-com-pessoa-trabalhando-com-codigos-no-computador_23-2150010125.jpg?w=1390&t=st=1684722821~exp=1684723421~hmac=4fbedd7d45fc5efd3d695757896b8da9538913d8ad67878f02532085a12fca68",
		},
		{
			id: 1,
			name: "Coffee Shop",
			description:
				"Sales system of a cafeteria. Allows for order control, providing an efficient solution for operation and administration.",
			gitHubUrl: "https://github.com/LourencoHenri/coffeeShop",
			siteUrl: "",
			image:
				"https://images.unsplash.com/photo-1498804103079-a6351b050096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
		},
	];

	return (
		<div
			id="Projects"
			className="flex flex-col text-white items-center py-20 mx-8 gap-12"
		>
			<div className="flex flex-col items-center text-center gap-4">
				<PageHeader
					title={t(`projects.title`)}
					subtitle={t(`projects.subtitle`)}
				/>
				<p className="text-lg">{t(`projects.instruction`)}</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-8 gap-8">
				{portfolio.map((project) => (
					<ProjectCard
						key={project.id}
						name={project.name}
						description={project.description}
						gitHubUrl={project.gitHubUrl}
						siteUrl={project.siteUrl}
						image={project.image}
					/>
				))}
			</div>
		</div>
	);
}
