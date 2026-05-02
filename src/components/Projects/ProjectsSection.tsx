"use client";

import { useTranslation } from "react-i18next";
import ProjectsList from "./ProjectsList";
import { Project } from "@/src/types/project";

interface ProjectsSectionProps {
	projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
	const { t } = useTranslation();

	return (
		<section
			id="Projects"
			aria-labelledby="projects-title"
			className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-24 text-neutral-900 transition-colors duration-300 md:px-8 md:py-32 dark:text-white"
		>
			<header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
				<div className="flex max-w-2xl flex-col gap-3">
					<span className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
						{t("projects.eyebrow", { defaultValue: "Selected work" })}
					</span>
					<h2
						id="projects-title"
						className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
					>
						{t("projects.subtitle")}
					</h2>
				</div>
				<p className="max-w-md text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
					{t("projects.instruction")}
				</p>
			</header>

			<ProjectsList projects={projects} />
		</section>
	);
}
