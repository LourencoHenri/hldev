"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { ChangeEvent } from "react";

export default function LanguageChanger() {
	const { i18n } = useTranslation();
	const currentLocale = i18n.language;
	const router = useRouter();
	const currentPathname = usePathname();

	const handleChange = (
		// e: ChangeEvent<HTMLSelectElement>,
		lang: string
	) => {
		// const newLocale = e.target.value;lang

		const newLocale = lang;

		// set cookie for next-i18n-router
		const days = 30;
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

		// redirect to the new locale path
		if (
			currentLocale === i18nConfig.defaultLocale &&
			!i18nConfig.prefixDefault
		) {
			router.push("/" + newLocale + currentPathname);
		} else {
			router.push(
				currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
			);
		}

		router.refresh();
	};

	return (
		<div className="flex flex-row items-center justify-end">
			<div className="flex flex-row items-center justify-center gap-4">
				<button
					className="text-sm px-2 rounded-full text-neutral-600 dark:text-neutral-300 duration-300 md:hover:text-blue-400"
					onClick={() => handleChange("en")}
					value={"en"}
				>
					EN
				</button>
				<button
					className="text-sm px-2 rounded-full text-neutral-600 dark:text-neutral-300 duration-300 md:hover:text-blue-400"
					onClick={() => handleChange("de")}
					value={"de"}
				>
					DE
				</button>
				<button
					className="text-sm px-2 rounded-full text-neutral-600 dark:text-neutral-300 duration-300 md:hover:text-blue-400"
					onClick={() => handleChange("pt")}
					value={"pt"}
				>
					PT
				</button>
				<button
					className="text-sm px-2 rounded-full text-neutral-600 dark:text-neutral-300 duration-300 md:hover:text-blue-400"
					onClick={() => handleChange("es")}
				>
					ES
				</button>
			</div>
		</div>
	);
}
