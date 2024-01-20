import { SiGithub } from "react-icons/si";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
	name: string;
	description: string;
	gitHubUrl: string;
	siteUrl: string;
	image: string;
}

export default function ProjectCard({
	name,
	description,
	siteUrl,
	image,
}: ProjectCardProps) {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col bg-neutral-800 rounded-md">
			<div className="flex h-20 overflow-hidden rounded-t-md justify-center items-center">
				<img src={image} />
			</div>

			<div className="flex flex-1 flex-col p-4 gap-8">
				<div className="flex flex-1 flex-col">
					<h3 className="text-lg font-semibold">{name}</h3>

					<p>{description}</p>
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

					<a className="p-2 rounded-full duration-300 cursor-pointer hover:bg-neutral-50 hover:text-neutral-800">
						<SiGithub size={24} />
					</a>
				</div>
			</div>
		</div>
	);
}
