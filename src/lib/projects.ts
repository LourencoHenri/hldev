import "server-only";

import { airtableFetch } from "./airtable";
import { Project, TechnologyKey } from "@/src/types/project";
import { fallbackProjects } from "@/src/data/projects";

interface AirtableProjectFields {
	name?: string;
	title?: string;
	description?: string;
	technologies?: string | string[];
	gitHubUrl?: string;
	siteUrl?: string;
	image?:
		| string
		| Array<{ url: string; thumbnails?: { large?: { url: string } } }>;
	featured?: boolean;
	order?: number;
}

const TABLE_NAME =
	process.env.AIRTABLE_TABLE_NAME ?? process.env.AIRTABLE_TABLE ?? "Projects";

const TECH_ALIASES: Record<string, TechnologyKey> = {
	react: "react",
	"react native": "reactNative",
	reactnative: "reactNative",
	"next.js": "nextJs",
	nextjs: "nextJs",
	next: "nextJs",
	"vue.js": "vue",
	vue: "vue",
	vuejs: "vue",
	"node.js": "node",
	nodejs: "node",
	node: "node",
	typescript: "typeScript",
	ts: "typeScript",
	javascript: "javaScript",
	js: "javaScript",
	"tailwind css": "tailwind",
	tailwindcss: "tailwind",
	tailwind: "tailwind",
	"styled components": "styledComponents",
	styledcomponents: "styledComponents",
	styled: "styledComponents",
	"material ui": "mui",
	materialui: "mui",
	mui: "mui",
	figma: "figma",
	git: "git",
	github: "gitHub",
	docker: "docker",
	prisma: "prisma",
	fastify: "fastify",
	html: "html",
	html5: "html",
	css: "css",
	css3: "css",
	storybook: "storybook",
	jira: "jira",
};

function normalizeTechnologies(
	input: string | string[] | undefined
): TechnologyKey[] {
	if (!input) return [];
	const list = Array.isArray(input) ? input : input.split(",");
	const seen = new Set<TechnologyKey>();

	for (const raw of list) {
		const key = TECH_ALIASES[raw.trim().toLowerCase()];
		if (key) seen.add(key);
	}

	return Array.from(seen);
}

function pickImage(value: AirtableProjectFields["image"]): string {
	if (!value) return "";
	if (typeof value === "string") return value;
	const first = value[0];
	if (!first) return "";
	return first.thumbnails?.large?.url ?? first.url ?? "";
}

function mapAirtableRecord(record: {
	id: string;
	fields: AirtableProjectFields;
}): Project | null {
	const f = record.fields;
	const slug = (f.name ?? f.title ?? "").trim();
	if (!slug) return null;

	return {
		id: record.id,
		name: slug,
		title: f.title?.trim() || undefined,
		description: f.description?.trim() ?? "",
		technologies: normalizeTechnologies(f.technologies),
		gitHubUrl: f.gitHubUrl?.trim() ?? "",
		siteUrl: f.siteUrl?.trim() ?? "",
		image: pickImage(f.image),
		featured: Boolean(f.featured),
		order: typeof f.order === "number" ? f.order : undefined,
	};
}

function sortProjects(projects: Project[]): Project[] {
	return [...projects].sort((a, b) => {
		if (Boolean(a.featured) !== Boolean(b.featured)) {
			return a.featured ? -1 : 1;
		}
		const ao = a.order ?? Number.MAX_SAFE_INTEGER;
		const bo = b.order ?? Number.MAX_SAFE_INTEGER;
		return ao - bo;
	});
}

export async function getProjects(): Promise<Project[]> {
	try {
		const records = await airtableFetch<AirtableProjectFields>(TABLE_NAME);
		const mapped = records
			.map(mapAirtableRecord)
			.filter((p): p is Project => p !== null);

		if (!mapped.length) return sortProjects(fallbackProjects);
		return sortProjects(mapped);
	} catch (error) {
		console.error(
			"[projects] Airtable fetch failed, falling back to local data.",
			error
		);
		return sortProjects(fallbackProjects);
	}
}
