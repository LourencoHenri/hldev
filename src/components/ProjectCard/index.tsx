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
			<div className="flex flex-col rounded-md p-4 gap-4 flex-1 bg-neutral-800 opacity-90">
				<div className="flex gap-1 flex-col flex-1">
					<h3 className="text-lg font-semibold">
						{t(`portfolio.${name}.title`)}
					</h3>

					<p className="text-base">{t(`portfolio.${name}.description`)}</p>
				</div>

				<div className="flex gap-4 flex-row justify-center">
					{technologies &&
						technologies.map((technology) => <>{technology.icon}</>)}
				</div>

				<div className="flex flex-row justify-end items-center gap-4">
					{siteUrl && (
						<a
							href={siteUrl}
							target="_blank"
							className="p-2 rounded-md border border-transparent duration-300 cursor-pointer hover:bg-neutral-50 hover:text-neutral-800"
						>
							{t(`projects.card.access`)}
						</a>
					)}

					<a
						className="p-2 rounded-full duration-300 cursor-pointer hover:bg-neutral-50 hover:text-neutral-800"
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
