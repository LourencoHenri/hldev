import { SiGithub } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { TechnologyProps } from "../Projects";

interface ProjectCardProps {
	name: string;
	description?: string;
	technologies: TechnologyProps[];
	gitHubUrl: string;
	siteUrl: string;
	image: string;
}

export default function ProjectCard({
	name,
	technologies,
	siteUrl,
	gitHubUrl,
	image,
}: ProjectCardProps) {
	const { t } = useTranslation();

	return (
		<div
			className="group flex flex-col h-full rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-cover bg-center"
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className="flex flex-col h-full p-5 gap-5 bg-white/95 dark:bg-neutral-800/95 transition-colors duration-300">
				<div className="flex flex-col gap-2 flex-1">
					<h3 className="text-base font-semibold leading-snug text-neutral-900 dark:text-neutral-50">
						{t(`portfolio.${name}.title`)}
					</h3>

					<p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-3">
						{t(`portfolio.${name}.description`)}
					</p>
				</div>

				<div className="flex flex-wrap gap-2.5">
					{technologies &&
						technologies.map((technology) => (
							<div
								key={technology.name}
								title={technology.name}
								className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200"
							>
								{technology.icon}
							</div>
						))}
				</div>

				<div className="flex flex-row justify-between items-center pt-4 border-t border-neutral-200 dark:border-neutral-700">
					{siteUrl ? (
						<a
							href={siteUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm font-medium px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:border-blue-400 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200"
						>
							{t(`projects.card.access`)}
						</a>
					) : (
						<span />
					)}

					<a
						className="p-2 rounded-full text-neutral-500 dark:text-neutral-400 hover:bg-neutral-900 dark:hover:bg-neutral-100 hover:text-white dark:hover:text-neutral-800 transition-all duration-200"
						target="_blank"
						rel="noopener noreferrer"
						href={gitHubUrl}
					>
						<SiGithub size={20} />
					</a>
				</div>
			</div>
		</div>
	);
}
