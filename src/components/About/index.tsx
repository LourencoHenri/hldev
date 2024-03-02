"use client";

import { useTranslation } from "react-i18next";
import PageHeader from "../PageHeader";
import { IoCodeDownloadOutline, IoDownloadOutline } from "react-icons/io5";

import { FiDownload } from "react-icons/fi";

export default function About() {
	const { t } = useTranslation();

	return (
		<div id="About" className="flex flex-col pb-20 pt-40 mx-8 gap-32">
			<div className="flex text-white flex-col items-center text-center gap-4">
				<PageHeader title={t(`about.title`)} subtitle={t(`about.subtitle`)} />


				<p className="text-lg leading-relaxed md:w-4/5">{t(`about.content`)}</p>
				<a
					href={"/curriculum.pdf"}
					target="_blank"
					download={"Curriculum - Henrique Lourenço.pdf"}
					className="p-2 rounded-md border border-transparent duration-300 cursor-pointer bg-neutral-50 text-neutral-800 md:hover:text-neutral-50 md:hover:bg-transparent"
				>
					<div className="flex gap-2 items-center justify-center">
						<FiDownload size={28} />
						<p>Curriculum</p>
					</div>
				</a>
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
