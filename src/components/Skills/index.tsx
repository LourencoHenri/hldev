"use client";

import { useTranslation } from "react-i18next";
import PageHeader from "../PageHeader";
import Skill from "./Skill";

import {
	SiStyledcomponents,
	SiTailwindcss,
	SiTypescript,
	SiJavascript,
	SiNextdotjs,
	SiNodedotjs,
	SiVuedotjs,
	SiAngular,
	SiRadixui,
	SiGithub,
	SiDocker,
	SiFigma,
	SiReact,
	SiHtml5,
	SiSass,
	SiCss3,
	SiGit,
	SiMui,
} from "react-icons/si";

interface SkillsClassProps {
	title: string;
	content: React.ReactNode;
}

function SkillsClass({ title, content }: SkillsClassProps) {
	return (
		<div className="flex items-center justify-center">
			<div className="flex flex-col items-center gap-4">
				<h3 className="text-lg font-medium">{title}</h3>
				<div className="flex flex-row gap-4">{content}</div>
			</div>
		</div>
	);
}

export default function Skills() {
	const { t } = useTranslation();

	return (
		<>
			<div
				id="Skills"
				className="flex flex-col items-center text-neutral-900 dark:text-white p-20 gap-8 transition-colors duration-300 max-w-7xl mx-auto px-8"
			>
				<PageHeader title={t(`skills.title`)} subtitle="These are my skills" />

				{/* <div
					className="flex flex-col w-full items-center gap-4"
				>
					<div
						className="flex gap-4 w-full items-center"
					>
						<div className="border-b border-neutral-400 dark:border-neutral-600 flex flex-1 w-full" />
						<span className="text-sm text-neutral-400  " >
							Frameworks
						</span>
						<div className="border-b border-neutral-400 dark:border-neutral-600 flex flex-1 w-full" />
					</div>
					<div
						className="flex flex-row gap-4"
					>
						<Skill name="React" icon={<SiReact size={48} />} />
						<Skill name="Next.js" icon={<SiNextdotjs size={48} />} />
					</div>
				</div>

				<div
					className="flex flex-col w-full items-center gap-4"
				>
					<div
						className="flex gap-4 w-full items-center"
					>
						<div className="border-b border-neutral-400 dark:border-neutral-600 flex flex-1 w-full" />
						<span className="text-sm text-neutral-400  " >
							Frameworks
						</span>
						<div className="border-b border-neutral-400 dark:border-neutral-600 flex flex-1 w-full" />
					</div>
					<div
						className="flex flex-row gap-4"
					>
						<Skill name="MUI" icon={<SiMui size={48} />} />
						<Skill
							name="Styled Components"
							icon={<SiStyledcomponents size={48} />}
						/>
						<Skill name="Tailwind" icon={<SiTailwindcss size={48} />} />
					</div>
				</div>

				<div
					className="flex flex-col w-full items-center gap-4"
				>
					<div
						className="flex gap-4 w-full items-center"
					>
						<div className="border-b border-neutral-400 dark:border-neutral-600 flex flex-1 w-full" />
						<span className="text-sm text-neutral-400  " >
							Frameworks
						</span>
						<div className="border-b border-neutral-400 dark:border-neutral-600 flex flex-1 w-full" />
					</div>
					<div
						className="flex flex-row gap-4"
					>
						<Skill name="Figma" icon={<SiFigma size={48} />} />
						<Skill name="GitHub" icon={<SiGithub size={48} />} />
						<Skill name="Git" icon={<SiGit size={48} />} />
					</div>
				</div>

				<div
					className="flex flex-col w-full items-center gap-4"
				>
					<div
						className="flex gap-4 w-full items-center"
					>
						<div className="border-b border-neutral-400 dark:border-neutral-600 flex flex-1 w-full" />
						<span className="text-sm text-neutral-400  " >
							Frameworks
						</span>
						<div className="border-b border-neutral-400 dark:border-neutral-600 flex flex-1 w-full" />
					</div>
					<div
						className="flex flex-row gap-4"
					>
						<Skill name="TypeScript" icon={<SiTypescript size={48} />} />
						<Skill name="JavaScript" icon={<SiJavascript size={48} />} />
						<Skill name="HTML5" icon={<SiHtml5 size={48} />} />
						<Skill name="CSS3" icon={<SiCss3 size={48} />} />
					</div>
				</div> */}

				<div className="flex md:hidden lg:hidden flex-col gap-8 w-30">
					<SkillsClass
						title={t(`skills.frameworks`)}
						content={
							<>
								<Skill name="React" icon={<SiReact size={48} />} />
								<Skill name="Next.js" icon={<SiNextdotjs size={48} />} />
							</>
						}
					/>

					<SkillsClass
						title={t(`skills.systemAndPlatforms`)}
						content={
							<>
								<Skill name="Figma" icon={<SiFigma size={48} />} />
								<Skill name="GitHub" icon={<SiGithub size={48} />} />
								<Skill name="Git" icon={<SiGit size={48} />} />
							</>
						}
					/>

					<SkillsClass
						title={t(`skills.styles`)}
						content={
							<>
								<Skill name="MUI" icon={<SiMui size={48} />} />
								<Skill
									name="Styled Components"
									icon={<SiStyledcomponents size={48} />}
								/>
								<Skill name="Tailwind" icon={<SiTailwindcss size={48} />} />
							</>
						}
					/>

					<SkillsClass
						title={t(`skills.languages`)}
						content={
							<>
								<Skill name="TypeScript" icon={<SiTypescript size={48} />} />
								<Skill name="JavaScript" icon={<SiJavascript size={48} />} />
								<Skill name="HTML5" icon={<SiHtml5 size={48} />} />
								<Skill name="CSS3" icon={<SiCss3 size={48} />} />
							</>
						}
					/>
				</div>

				<div className="hidden md:flex lg:flex flex-row text-neutral-900 dark:text-white h-40 gap-8">
					<SkillsClass
						title={t(`skills.frameworks`)}
						content={
							<>
								<Skill name="React" icon={<SiReact size={48} />} />
								<Skill name="Next.js" icon={<SiNextdotjs size={48} />} />
								<Skill name="Vue.js" icon={<SiVuedotjs size={48} />} />
								<Skill name="Angular" icon={<SiAngular size={48} />} />
								<Skill name="Node.js" icon={<SiNodedotjs size={48} />} />


							</>
						}
					/>

					<div className="border-r border-neutral-600" />

					<SkillsClass
						title={t(`skills.styles`)}
						content={
							<>
								<Skill name="MUI" icon={<SiMui size={48} />} />
								<Skill
									name="Styled Components"
									icon={<SiStyledcomponents size={48} />}
								/>
								<Skill name="Tailwind" icon={<SiTailwindcss size={48} />} />
								<Skill name="Sass" icon={<SiSass size={48} />} />
								<Skill name="Radix UI" icon={<SiRadixui size={48} />} />
							</>
						}
					/>
				</div>
				<div className="hidden md:flex lg:flex flex-row h-48 gap-8">
					<SkillsClass
						title={t(`skills.systemAndPlatforms`)}
						content={
							<>
								<Skill name="Figma" icon={<SiFigma size={48} />} />
								<Skill name="GitHub" icon={<SiGithub size={48} />} />
								<Skill name="Git" icon={<SiGit size={48} />} />
								<Skill name="Docker" icon={<SiDocker size={48} />} />
							</>
						}
					/>

					<div className="border-r border-neutral-600" />

					<SkillsClass
						title={t(`skills.languages`)}
						content={
							<>
								<Skill name="TypeScript" icon={<SiTypescript size={48} />} />
								<Skill name="JavaScript" icon={<SiJavascript size={48} />} />
								<Skill name="HTML5" icon={<SiHtml5 size={48} />} />
								<Skill name="CSS3" icon={<SiCss3 size={48} />} />
							</>
						}
					/>
				</div>
			</div>
		</>
	);
}
