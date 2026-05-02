"use client";

import { useTranslation } from "react-i18next";
import { FiDownload } from "react-icons/fi";

export default function About() {
  const { t } = useTranslation();

  const stats = [
    {
      label: t("about.stats.role", { defaultValue: "Role" }),
      value: t("about.stats.roleValue", {
        defaultValue: "Front-End Developer",
      }),
    },
    {
      label: t("about.stats.location", { defaultValue: "Based in" }),
      value: t("about.stats.locationValue", {
        defaultValue: "Santos, Brazil — open to relocation",
      }),
    },
    {
      label: t("about.stats.focus", { defaultValue: "Focus" }),
      value: t("about.stats.focusValue", {
        defaultValue: "React · TypeScript · Modern UI",
      }),
    },
  ];

  return (
    <section
      id="About"
      aria-labelledby="about-title"
      className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-24 transition-colors duration-300 md:px-8 md:py-32"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="flex flex-col gap-3 md:col-span-4">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
            {t("about.eyebrow", { defaultValue: "About" })}
          </span>
          <h2
            id="about-title"
            className="text-4xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-5xl dark:text-white"
          >
            {t("about.subtitle")}
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:col-span-8">
          <p className="text-lg leading-relaxed text-neutral-700 md:text-xl dark:text-neutral-300">
            {t("about.content")}
          </p>

          <p className="text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
            {t("about.secondary", {
              defaultValue:
                "Experience across fintech platforms in digital banking and cryptocurrency, building reusable design-system components with Storybook and collaborating closely with backend and product teams in agile environments.",
            })}
          </p>

          {/* <div className="flex flex-wrap gap-3 pt-2">
						<a
							href="/Henrique_Lourenço_Resume_English.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:bg-white dark:text-neutral-900"
						>
							<FiDownload size={14} />
							{t("about.resumeEn", {
								defaultValue: "Download resume — English",
							})}
						</a>
						<a
							href="/Henrique_Lourenço_Resume_Deutsch.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:text-white dark:hover:border-neutral-600 dark:hover:bg-neutral-900"
						>
							<FiDownload size={14} />
							{t("about.resumeDe", {
								defaultValue: "Lebenslauf herunterladen — Deutsch",
							})}
						</a>
					</div> */}
        </div>
      </div>
    </section>
  );
}
