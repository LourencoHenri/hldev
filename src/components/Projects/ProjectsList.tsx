"use client";

import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import ProjectCard from "../ProjectCard";
import { Project } from "@/src/types/project";

interface ProjectsListProps {
	projects: Project[];
	pageSize?: number;
}

type Filter = "all" | "featured";

export default function ProjectsList({
	projects,
	pageSize = 6,
}: ProjectsListProps) {
	const { t } = useTranslation();
	const [filter, setFilter] = useState<Filter>("all");
	const [currentPage, setCurrentPage] = useState(1);

	const hasFeatured = useMemo(
		() => projects.some((p) => p.featured),
		[projects]
	);

	const filtered = useMemo(() => {
		if (filter === "featured") return projects.filter((p) => p.featured);
		return projects;
	}, [projects, filter]);

	const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
	const safePage = Math.min(currentPage, totalPages);
	const start = (safePage - 1) * pageSize;
	const visible = filtered.slice(start, start + pageSize);

	const handleFilter = (next: Filter) => {
		setFilter(next);
		setCurrentPage(1);
	};

	const goTo = (page: number) => {
		if (page < 1 || page > totalPages) return;
		setCurrentPage(page);
		const target = document.getElementById("Projects");
		if (target) {
			target.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	if (!filtered.length) {
		return (
			<p className="py-12 text-center text-sm text-neutral-500 dark:text-neutral-400">
				{t("projects.empty", {
					defaultValue: "No projects available right now.",
				})}
			</p>
		);
	}

	return (
		<div className="flex w-full flex-col gap-10">

			<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{visible.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>

			{totalPages > 1 && (
				<nav
					aria-label={t("projects.pagination.label", {
						defaultValue: "Projects pagination",
					})}
					className="flex w-full items-center justify-between border-t border-neutral-200 pt-6 dark:border-neutral-800"
				>
					<button
						onClick={() => goTo(safePage - 1)}
						disabled={safePage === 1}
						className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-all duration-200 hover:bg-neutral-100 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
					>
						<IoChevronBackOutline size={18} />
						<span className="hidden sm:inline">
							{t("projects.pagination.previous", {
								defaultValue: "Previous",
							})}
						</span>
					</button>

					<div className="flex items-center gap-1">
						{Array.from({ length: totalPages }, (_, i) => i + 1).map(
							(number) => (
								<button
									key={number}
									onClick={() => goTo(number)}
									aria-current={safePage === number ? "page" : undefined}
									className={`h-9 w-9 rounded-lg text-sm font-medium transition-all duration-200 ${
										safePage === number
											? "bg-neutral-900 text-white shadow-sm dark:bg-neutral-50 dark:text-neutral-900"
											: "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
									}`}
								>
									{number}
								</button>
							)
						)}
					</div>

					<button
						onClick={() => goTo(safePage + 1)}
						disabled={safePage === totalPages}
						className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-all duration-200 hover:bg-neutral-100 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
					>
						<span className="hidden sm:inline">
							{t("projects.pagination.next", { defaultValue: "Next" })}
						</span>
						<IoChevronForwardOutline size={18} />
					</button>
				</nav>
			)}
		</div>
	);
}
