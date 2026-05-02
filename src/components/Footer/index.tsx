"use client";

import { useTranslation } from "react-i18next";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

const EMAIL = "henri.lourenco@outlook.com";

export default function Footer() {
	const { t } = useTranslation();
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-neutral-200 bg-white text-neutral-700 transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300">
			<div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-14 md:px-8">
				<div className="grid gap-10 md:grid-cols-12">
					<div className="flex flex-col gap-3 md:col-span-5">
						<span className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
							{t("footer.eyebrow", { defaultValue: "Henrique Lourenço" })}
						</span>
						<p className="max-w-md text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
							{t("footer.tagline", {
								defaultValue:
									"Front-End Developer building thoughtful, performant interfaces with React, TypeScript, and modern web tooling.",
							})}
						</p>
					</div>

					<div className="flex flex-col gap-3 md:col-span-3">
						<span className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
							{t("footer.connect", { defaultValue: "Connect" })}
						</span>
						<ul className="flex flex-col gap-2 text-sm">
							<li>
								<a
									href={`mailto:${EMAIL}`}
									className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-white"
								>
									<IoMail size={16} />
									{EMAIL}
								</a>
							</li>
							<li>
								<a
									href="https://github.com/LourencoHenri"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-white"
								>
									<SiGithub size={16} />
									GitHub
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/henrique-lourenco/"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-white"
								>
									<FaLinkedin size={16} />
									LinkedIn
								</a>
							</li>
						</ul>
					</div>

					<div className="flex flex-col gap-3 md:col-span-4">
						<span className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
							{t("footer.resume", { defaultValue: "Resume" })}
						</span>
						<ul className="flex flex-col gap-2 text-sm">
							<li>
								<a
									href="/Henrique_Lourenço_Resume_English.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-white"
								>
									<FiDownload size={14} />
									{t("about.resumeEn", {
										defaultValue: "Download resume — English",
									})}
								</a>
							</li>
							<li>
								<a
									href="/Henrique_Lourenço_Resume_Deutsch.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-white"
								>
									<FiDownload size={14} />
									{t("about.resumeDe", {
										defaultValue: "Lebenslauf herunterladen — Deutsch",
									})}
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col items-start justify-between gap-3 border-t border-neutral-200 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center dark:border-neutral-800 dark:text-neutral-400">
					<span>
						© {year} Henrique Lourenço.{" "}
						{t("footer.rights", { defaultValue: "All rights reserved." })}
					</span>
					<span>
						{t("footer.builtWith", {
							defaultValue: "Built with Next.js, TypeScript and Tailwind CSS.",
						})}
					</span>
				</div>
			</div>
		</footer>
	);
}
