import { useTranslation } from "react-i18next";
import PageHeader from "../PageHeader";

interface SkillsClassProps {
	title: string;
	content: React.ReactNode;
}

export default function IntegratedProjects() {
	const { t } = useTranslation();

	return (
		<div
			id="Skills"
			className="flex flex-col items-center text-white p-20 mx-8 gap-8"
		>
			<PageHeader
				title={"Integrated Projects"}
				subtitle="These are some integrated projects"
			/>
		</div>
	);
}
