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
			className="flex flex-col rounded-md bg-cover bg-center-y"
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className="flex flex-col rounded-md p-4 gap-8 flex-1 bg-white dark:bg-neutral-800 opacity-95 dark:opacity-90 transition-colors duration-300">
				<div className="flex gap-1 flex-col flex-1">
					<h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
						{t(`portfolio.${name}.title`)}
					</h3>

					<p className="text-base text-neutral-600 dark:text-neutral-300">
						{t(`portfolio.${name}.description`)}
					</p>
				</div>

				<div className="flex gap-4 flex-row justify-center">
					{technologies &&
						technologies.map((technology) => (
							<div key={technology.name} className="text-neutral-800 dark:text-neutral-50">
								{technology.icon}
							</div>
						))}
				</div>

				<div className="flex flex-row justify-end items-center pt-1 gap-4 border-t border-neutral-500">
					{siteUrl && (
						<a
							href={siteUrl}
							target="_blank"
							className="p-2 rounded-md border border-transparent duration-300 cursor-pointer text-neutral-800 dark:text-neutral-50 hover:bg-neutral-900 dark:hover:bg-neutral-50 hover:text-white dark:hover:text-neutral-800"
						>
							{t(`projects.card.access`)}
						</a>
					)}

					<a
						className="p-2 rounded-full duration-300 cursor-pointer text-neutral-800 dark:text-neutral-50 hover:bg-neutral-900 dark:hover:bg-neutral-50 hover:text-white dark:hover:text-neutral-800"
						target="_blank"
						href={gitHubUrl}
					>
						<SiGithub size={24} />
					</a>
				</div>
			</div>
		</div>
	);
}
