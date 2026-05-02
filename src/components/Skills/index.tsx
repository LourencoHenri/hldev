"use client";

import { useTranslation } from "react-i18next";

import {
  SiAngular,
  SiCss,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiFlutter,
  SiDart,
  SiJira,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRadixui,
  SiSass,
  SiPhp,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import Skill from "./Skill";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillsGroup {
  title: string;
  items: SkillItem[];
}

const ICON_SIZE = 48;

interface SkillsClassProps {
  title: string;
  content: React.ReactNode;
}

function SkillsClass({ title, content }: SkillsClassProps) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="grid grid-cols-4 lg:grid-cols-5 gap-4 h-52">{content}</div>
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useTranslation();

  const groups: SkillsGroup[] = [
    {
      title: t("skills.frameworks"),
      items: [
        { name: "React", icon: <SiReact size={ICON_SIZE} /> },
        { name: "React Native", icon: <SiReact size={ICON_SIZE} /> },
        { name: "Next.js", icon: <SiNextdotjs size={ICON_SIZE} /> },
        { name: "Vue.js", icon: <SiVuedotjs size={ICON_SIZE} /> },
        { name: "Angular", icon: <SiAngular size={ICON_SIZE} /> },
        { name: "Node.js", icon: <SiNodedotjs size={ICON_SIZE} /> },
        { name: "Laravel", icon: <SiLaravel size={ICON_SIZE} /> },
        { name: "Flutter", icon: <SiFlutter size={ICON_SIZE} /> },
      ],
    },
    {
      title: t("skills.languages"),
      items: [
        { name: "TypeScript", icon: <SiTypescript size={ICON_SIZE} /> },
        { name: "JavaScript", icon: <SiJavascript size={ICON_SIZE} /> },
        { name: "PHP", icon: <SiPhp size={ICON_SIZE} /> },
        { name: "HTML5", icon: <SiHtml5 size={ICON_SIZE} /> },
        { name: "CSS3", icon: <SiCss size={ICON_SIZE} /> },
        { name: "Dart", icon: <SiDart size={ICON_SIZE} /> },
      ],
    },
    {
      title: t("skills.styles"),
      items: [
        { name: "Tailwind CSS", icon: <SiTailwindcss size={ICON_SIZE} /> },
        {
          name: "Styled Components",
          icon: <SiStyledcomponents size={ICON_SIZE} />,
        },
        { name: "Material UI", icon: <SiMui size={ICON_SIZE} /> },
        { name: "Radix UI", icon: <SiRadixui size={ICON_SIZE} /> },
        { name: "Sass", icon: <SiSass size={ICON_SIZE} /> },
        { name: "Storybook", icon: <SiStorybook size={ICON_SIZE} /> },
      ],
    },
    {
      title: t("skills.systemAndPlatforms"),
      items: [
        { name: "Git", icon: <SiGit size={ICON_SIZE} /> },
        { name: "GitHub", icon: <SiGithub size={ICON_SIZE} /> },
        { name: "Docker", icon: <SiDocker size={ICON_SIZE} /> },
        { name: "Figma", icon: <SiFigma size={ICON_SIZE} /> },
        { name: "Jira", icon: <SiJira size={ICON_SIZE} /> },
      ],
    },
  ];

  return (
    <section
      id="Skills"
      aria-labelledby="skills-title"
      className="border-y border-neutral-200/70 bg-neutral-50/40 transition-colors duration-300 dark:border-neutral-800/70 dark:bg-neutral-900/30"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-24 text-neutral-900 md:px-8 md:py-32 dark:text-white">
        <header className="flex max-w-2xl flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
            {t("skills.eyebrow", { defaultValue: "Toolkit" })}
          </span>
          <h2
            id="skills-title"
            className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
          >
            {t("skills.subtitle", {
              defaultValue: "Tools I use to ship modern systems",
            })}
          </h2>
        </header>

        {/* <div className="grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-neutral-800 dark:bg-neutral-800">
          {groups.map((group) => (
            <div
              key={group.title}
              className="flex flex-col gap-6 bg-white p-6 dark:bg-neutral-900"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 text-sm text-neutral-700 transition-colors duration-200 hover:text-blue-500 dark:text-neutral-200 dark:hover:text-blue-400"
                  >
                    <span
                      aria-hidden
                      className="text-neutral-500 dark:text-neutral-400"
                    >
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}

        <div className="flex flex-col md:flex-row text-neutral-900 dark:text-white gap-4 w-full h-full">
          <SkillsClass
            title={t(`skills.frameworks`)}
            content={groups[0].items.map((item) => (
              <Skill key={item.name} name={item.name} icon={item.icon} />
            ))}
          />

          <div className="border-r border-neutral-600" />

          <SkillsClass
            title={t(`skills.languages`)}
            content={groups[1].items.map((item) => (
              <Skill key={item.name} name={item.name} icon={item.icon} />
            ))}
          />
        </div>

        <div className="flex flex-col md:flex-row text-neutral-900 dark:text-white gap-4 w-full">
          <SkillsClass
            title={t(`skills.styles`)}
            content={groups[2].items.map((item) => (
              <Skill key={item.name} name={item.name} icon={item.icon} />
            ))}
          />

          <div className="border-r border-neutral-600" />

          <SkillsClass
            title={t(`skills.systemAndPlatforms`)}
            content={groups[3].items.map((item) => (
              <Skill key={item.name} name={item.name} icon={item.icon} />
            ))}
          />
        </div>
      </div>
    </section>
  );
}
