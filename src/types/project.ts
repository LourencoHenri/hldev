export type TechnologyKey =
	| "react"
	| "reactNative"
	| "nextJs"
	| "vue"
	| "node"
	| "typeScript"
	| "javaScript"
	| "tailwind"
	| "styledComponents"
	| "mui"
	| "figma"
	| "git"
	| "gitHub"
	| "docker"
	| "prisma"
	| "fastify"
	| "html"
	| "css"
	| "storybook"
	| "jira";

export interface Project {
	id: string | number;
	name: string;
	title?: string;
	description: string;
	technologies: TechnologyKey[];
	gitHubUrl: string;
	siteUrl: string;
	image: string;
	featured?: boolean;
	order?: number;
}
