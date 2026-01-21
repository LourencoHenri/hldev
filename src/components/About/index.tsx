"use client";

import { useTranslation } from "react-i18next";
import PageHeader from "../PageHeader";
import { IoCodeDownloadOutline, IoDownloadOutline } from "react-icons/io5";

import { FiDownload } from "react-icons/fi";

export default function About() {
	const { t } = useTranslation();

	return (
		<div id="About" className="flex flex-col pb-20 pt-40 mx-8 gap-40 transition-colors duration-300">
			<div className="flex text-neutral-900 dark:text-white flex-col items-center text-center gap-4">
				<PageHeader title={t(`about.title`)} subtitle={t(`about.subtitle`)} />

				<p className="text-lg leading-relaxed md:w-3/5 text-justify">
					{t(`about.content`)}
				</p>

				<a
					href={"/Henrique_Lourenço_Resume_English.pdf"}
					target="_blank"
					download={"Curriculum - Henrique Lourenço.pdf"}
					className="p-2 rounded-md duration-300 cursor-pointer bg-transparent text-neutral-900 dark:text-neutral-50 md:hover:text-blue-400 md:dark:hover:text-blue-400 mt-2"
				>
					<div className="flex gap-2 items-center justify-center">
						<FiDownload size={28} />
						<p>Curriculum</p>
					</div>
				</a>
			</div>

			<div className="flex flex-col items-center justify-center">
				<div className="relative w-full max-w-2xl rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-md px-6 py-6 text-center shadow-sm">
					<div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5" />

					<p className="mb-2 text-xs tracking-widest uppercase text-neutral-800 dark:text-neutral-300">
						Mindset
					</p>

					<h3 className="text-2xl md:text-3xl font-semibold">
						<span className="text-blue-400">Building</span>
						<span className="text-neutral-900 dark:text-white">, learning </span>
						<span className="text-blue-400">& evolving</span>
						<span className="text-neutral-900 dark:text-white"> every day.</span>
					</h3>

					<p className="mt-2 text-sm text-neutral-800 dark:text-neutral-300">
						Continuous growth through real-world projects.
					</p>
				</div>
			</div>

		</div>
	);
}
