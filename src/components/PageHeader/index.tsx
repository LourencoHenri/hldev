import { useTranslation } from "react-i18next";

interface PageHeaderProps {
	title: string;
	subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
	const { t } = useTranslation();

	return (
		<div className="flex text-white flex-col items-center text-center gap-2">
			<h3 className="text-base font-medium uppercase text-neutral-200">
				{title}
			</h3>
			<h2 className="text-4xl font-semibold">{subtitle}</h2>
		</div>
	);
}
