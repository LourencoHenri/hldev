"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { SiGithub } from "react-icons/si";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div
      id="Home"
      className="pointer-events-none absolute z-10 flex h-svh min-h-96 w-full items-center justify-center text-neutral-900 transition-colors duration-300 dark:text-white"
    >
      <div className="pointer-events-auto mx-auto flex max-w-5xl flex-col items-center px-6 text-center md:px-8">
        <p className="text-sm uppercase tracking-[0.30em] text-neutral-600 dark:text-neutral-300">
          {t("home.hello")}
        </p>

        <h1 className="text-7xl md:text-9xl font-medium tracking-tight">
          Henrique{" "}
          <span className="font-serif italic font-normal tracking-wider">Lourenço</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl dark:text-neutral-300">
          {t("home.role")}
        </p>

        <div className="flex justify-center gap-2 mt-2">
          <a
            href="https://github.com/LourencoHenri"
            target="_blank"
            className="flex flex-row gap-4 p-1 rounded cursor-pointer duration-300 hover:text-blue-400"
          >
            <SiGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/henrique-lourenco/"
            target="_blank"
            className="flex flex-row gap-4 p-1 rounded justify-center items-center cursor-pointer duration-300 hover:text-blue-400"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="#Projects"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-white dark:text-neutral-900"
          >
            {t("home.ctaPrimary", { defaultValue: "View selected work" })}
            <FiArrowDown
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </Link>
          <Link
            href="#Contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:text-white dark:hover:border-neutral-600 dark:hover:bg-neutral-900"
          >
            {t("home.ctaSecondary", { defaultValue: "Get in touch" })}
          </Link>
        </div> */}

        {/* <div className="mt-8 flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
          <a
            href="/Henrique_Lourenço_Resume_English.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-white"
          >
            <FiDownload size={14} />
            {t("home.resumeEn", { defaultValue: "Resume — EN" })}
          </a>
          <span
            aria-hidden
            className="h-3 w-px bg-neutral-300 dark:bg-neutral-700"
          />
          <a
            href="/Henrique_Lourenço_Resume_Deutsch.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-white"
          >
            <FiDownload size={14} />
            {t("home.resumeDe", { defaultValue: "Lebenslauf — DE" })}
          </a>
          <span
            aria-hidden
            className="h-3 w-px bg-neutral-300 dark:bg-neutral-700"
          />
          <a
            href="https://github.com/LourencoHenri"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex items-center transition-colors duration-200 hover:text-neutral-900 dark:hover:text-white"
          >
            <SiGithub size={16} />
          </a>
        </div> */}
      </div>
    </div>
  );
}
