import {
	SiCss3,
	SiFigma,
	SiGit,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiMui,
	SiNextdotjs,
	SiReact,
	SiStyledcomponents,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import ProjectCard from "../ProjectCard";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import Skill from "../Skill";

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
	return (
		<>
			<div
				id="Skills"
				className="flex flex-col items-center text-white p-20 mx-8 gap-8"
			>
				<h2 className="text-4xl font-semibold">Skills</h2>

				<div className="flex md:hidden lg:hidden flex-col gap-8 w-30">
					<SkillsClass
						title="Frameworks"
						content={
							<>
								<Skill name="React" icon={<SiReact size={48} />} />
								<Skill name="Next.js" icon={<SiNextdotjs size={48} />} />
							</>
						}
					/>

					<SkillsClass
						title="Systems and Platforms"
						content={
							<>
								<Skill name="Figma" icon={<SiFigma size={48} />} />
								<Skill name="GitHub" icon={<SiGithub size={48} />} />
								<Skill name="Git" icon={<SiGit size={48} />} />
							</>
						}
					/>

					<SkillsClass
						title="Styles"
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
						title="Languages"
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

				<div className="hidden md:flex lg:flex flex-row text-white h-40 gap-8">
					<SkillsClass
						title="Frameworks"
						content={
							<>
								<Skill name="React" icon={<SiReact size={48} />} />
								<Skill name="Next.js" icon={<SiNextdotjs size={48} />} />
							</>
						}
					/>

					<div className="border-r border-neutral-600" />

					<SkillsClass
						title="Styles"
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
				</div>
				<div className="hidden md:flex lg:flex flex-row h-48 gap-8">
					<SkillsClass
						title="Systems and Platforms"
						content={
							<>
								<Skill name="Figma" icon={<SiFigma size={48} />} />
								<Skill name="GitHub" icon={<SiGithub size={48} />} />
								<Skill name="Git" icon={<SiGit size={48} />} />
							</>
						}
					/>

					<div className="border-r border-neutral-600" />

					<SkillsClass
						title="Languages"
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

{
	/* <div className="flex flex-col justify-center items-center gap-8">
				<SkillsClass
					title="Frameworks"
					content={
						<>
							<Skill name="React" icon={<SiReact size={48} />} />
							<Skill name="Next.js" icon={<SiNextdotjs size={48} />} />
						</>
					}
				/>

				<div className="border-r border-neutral-600" />

				<SkillsClass
					title="Styles"
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
			</div>
			<div className="flex flex-col items-center gap-4">
				<SkillsClass
					title="Systems and Platforms"
					content={
						<>
							<Skill name="Figma" icon={<SiFigma size={48} />} />
							<Skill name="GitHub" icon={<SiGithub size={48} />} />
							<Skill name="Git" icon={<SiGit size={48} />} />
						</>
					}
				/>

				<div className="border-r border-neutral-600" />

				<SkillsClass
					title="Languages"
					content={
						<>
							<Skill name="TypeScript" icon={<SiTypescript size={48} />} />
							<Skill name="JavaScript" icon={<SiJavascript size={48} />} />
							<Skill name="HTML5" icon={<SiHtml5 size={48} />} />
							<Skill name="CSS3" icon={<SiCss3 size={48} />} />
						</>
					}
				/>
			</div> */
}
