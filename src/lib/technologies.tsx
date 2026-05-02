"use client";

import {
	SiReact,
	SiNextdotjs,
	SiFigma,
	SiGithub,
	SiGit,
	SiMui,
	SiStyledcomponents,
	SiTailwindcss,
	SiTypescript,
	SiJavascript,
	SiHtml5,
	SiCss,
	SiNodedotjs,
	SiDocker,
	SiPrisma,
	SiFastify,
	SiVuedotjs,
	SiStorybook,
	SiJira,
} from "react-icons/si";

import { TechnologyKey } from "@/src/types/project";

const iconSize = 20;

export const TECHNOLOGIES_MAP: Record<
	TechnologyKey,
	{ name: string; icon: React.ReactNode }
> = {
	react: { name: "React", icon: <SiReact size={iconSize} /> },
	reactNative: { name: "React Native", icon: <SiReact size={iconSize} /> },
	nextJs: { name: "Next.js", icon: <SiNextdotjs size={iconSize} /> },
	vue: { name: "Vue.js", icon: <SiVuedotjs size={iconSize} /> },
	node: { name: "Node.js", icon: <SiNodedotjs size={iconSize} /> },
	typeScript: { name: "TypeScript", icon: <SiTypescript size={iconSize} /> },
	javaScript: { name: "JavaScript", icon: <SiJavascript size={iconSize} /> },
	tailwind: { name: "Tailwind CSS", icon: <SiTailwindcss size={iconSize} /> },
	styledComponents: {
		name: "Styled Components",
		icon: <SiStyledcomponents size={iconSize} />,
	},
	mui: { name: "Material UI", icon: <SiMui size={iconSize} /> },
	figma: { name: "Figma", icon: <SiFigma size={iconSize} /> },
	git: { name: "Git", icon: <SiGit size={iconSize} /> },
	gitHub: { name: "GitHub", icon: <SiGithub size={iconSize} /> },
	docker: { name: "Docker", icon: <SiDocker size={iconSize} /> },
	prisma: { name: "Prisma", icon: <SiPrisma size={iconSize} /> },
	fastify: { name: "Fastify", icon: <SiFastify size={iconSize} /> },
	html: { name: "HTML5", icon: <SiHtml5 size={iconSize} /> },
	css: { name: "CSS3", icon: <SiCss size={iconSize} /> },
	storybook: { name: "Storybook", icon: <SiStorybook size={iconSize} /> },
	jira: { name: "Jira", icon: <SiJira size={iconSize} /> },
};
