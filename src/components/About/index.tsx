"use client"

import { useTranslation } from "react-i18next";
import PageHeader from "../PageHeader";

export default function About() {
	const { t } = useTranslation();

	return (
		<div id="About" className="flex flex-col pb-20 pt-40 mx-8 gap-32">
			<div className="flex text-white flex-col items-center text-center gap-2">
				<PageHeader title={t(`about.title`)} subtitle={t(`about.subtitle`)} />
				<p className="text-lg leading-relaxed md:w-4/5">{t(`about.content`)}</p>
			</div>

			<div className="flex flex-col items-center justify-center">
				<h3 className="text-2xl font-medium text-blue-400">
					Living
					<span className="text-2xl font-medium text-white">, </span>
					learning
					<span className="text-2xl font-medium text-white"> & </span>
					evolving
				</h3>
				<h3 className="text-2xl text-white font-medium">every day</h3>
			</div>
		</div>
	);
}
