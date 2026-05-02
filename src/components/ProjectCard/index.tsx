"use client";

import { SiGithub } from "react-icons/si";
import { HiArrowUpRight } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

import { Project } from "@/src/types/project";
import { TECHNOLOGIES_MAP } from "@/src/lib/technologies";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();

  const translatedTitle = t(`portfolio.${project.name}.title`, {
    defaultValue: "",
  });
  const translatedDescription = t(`portfolio.${project.name}.description`, {
    defaultValue: "",
  });

  const title = project.title || translatedTitle || project.name;
  const description = translatedDescription || project.description;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-[0_1px_2px_rgba(15,15,15,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_24px_60px_-20px_rgba(15,15,15,0.18)] dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-neutral-700 dark:hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${title} — project preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900" />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex flex-1 flex-col gap-2">
          <h3 className="text-lg font-semibold leading-snug tracking-tight text-neutral-900 dark:text-neutral-50">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-3">
            {description}
          </p>
        </div>

        {project.technologies.length > 0 && (
          <ul className="flex flex-wrap gap-4">
            {project.technologies.map((key) => {
              const tech = TECHNOLOGIES_MAP[key];
              if (!tech) return null;
              return (
                <li
                  key={key}
                  className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-200"
                >
                  <span
                    className="text-neutral-500 dark:text-neutral-400"
                    aria-hidden
                  >
                    {tech.icon}
                  </span>
                </li>
              );
            })}
          </ul>
        )}

        <div className="flex items-center justify-between border-t border-neutral-100 pt-4 dark:border-neutral-800">
          {project.siteUrl ? (
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("projects.card.access", {
                defaultValue: "View live",
              })} — ${title}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:text-blue-500 dark:text-neutral-100 dark:hover:text-blue-400"
            >
              {t("projects.card.access", { defaultValue: "View live" })}
              <HiArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ) : (
            <span className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
              {t("projects.card.repository", {
                defaultValue: "Source available",
              })}
            </span>
          )}

          {project.gitHubUrl && (
            <a
              href={project.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("projects.card.github", {
                defaultValue: "Open repository",
              })} — ${title}`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition-all duration-200 hover:bg-neutral-900 hover:text-white dark:text-neutral-400 dark:hover:bg-neutral-100 dark:hover:text-neutral-900"
            >
              <SiGithub size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
