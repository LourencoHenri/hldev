interface SkillProps {
	name: string;
	icon: React.ReactNode;
}

export default function Skill({ name, icon }: SkillProps) {
	return (
		<div className="flex flex-col items-center w-20 text-center gap-1 duration-300 hover:text-blue-400">
			{icon}
			<span>{name}</span>
		</div>
	);
}
