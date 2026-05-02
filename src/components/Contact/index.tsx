"use client";

import { useTranslation } from "react-i18next";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoMail } from "react-icons/io5";

const EMAIL = "henri.lourenco@outlook.com";

export default function Contact() {
	const { t } = useTranslation();

	const channels = [
		{
			icon: <IoMail size={20} />,
			label: t("contact.channels.email", { defaultValue: "Email" }),
			value: EMAIL,
			href: `mailto:${EMAIL}`,
		},
		{
			icon: <FaLinkedin size={20} />,
			label: "LinkedIn",
			value: "henrique-lourenco",
			href: "https://www.linkedin.com/in/henrique-lourenco/",
		},
		{
			icon: <SiGithub size={20} />,
			label: "GitHub",
			value: "LourencoHenri",
			href: "https://github.com/LourencoHenri",
		},
	];

	return (
		<section
			id="Contact"
			aria-labelledby="contact-title"
			className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-24 text-neutral-900 transition-colors duration-300 md:px-8 md:py-32 dark:text-white"
		>
			<div className="grid gap-12 md:grid-cols-12 md:gap-16">
				<div className="flex flex-col gap-3 md:col-span-5">
					<span className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
						{t("contact.eyebrow", { defaultValue: "Contact" })}
					</span>
					<h2
						id="contact-title"
						className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
					>
						{t("contact.subtitle")}
					</h2>
					<p className="mt-2 max-w-md text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
						{t("contact.intro", {
							defaultValue:
								"Open to front-end opportunities, freelance projects, and collaborations. I usually respond within a business day.",
						})}
					</p>

					<a
						href={`mailto:${EMAIL}`}
						className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:bg-white dark:text-neutral-900"
					>
						{t("contact.cta", { defaultValue: "Start a conversation" })}
						<HiArrowUpRight
							size={14}
							className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</a>
				</div>

				<ul className="grid gap-px self-start overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 md:col-span-7 dark:border-neutral-800 dark:bg-neutral-800">
					{channels.map((channel) => (
						<li key={channel.label} className="bg-white dark:bg-neutral-900">
							<a
								href={channel.href}
								target={channel.href.startsWith("http") ? "_blank" : undefined}
								rel={
									channel.href.startsWith("http")
										? "noopener noreferrer"
										: undefined
								}
								className="flex items-center justify-between gap-6 px-6 py-5 transition-colors duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/60"
							>
								<div className="flex items-center gap-4">
									<span
										aria-hidden
										className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
									>
										{channel.icon}
									</span>
									<div className="flex flex-col">
										<span className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
											{channel.label}
										</span>
										<span className="text-base font-medium text-neutral-900 dark:text-neutral-50">
											{channel.value}
										</span>
									</div>
								</div>
								<HiArrowUpRight
									size={16}
									className="text-neutral-400 transition-transform duration-200 group-hover:translate-x-0.5 dark:text-neutral-500"
								/>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
