"use client";

import {
  SiReact,
  SiNextdotjs,
  SiFigma,
  SiGithub,
  SiGit,
  SiMui,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiDocker,
  SiPrisma,
  SiFastify,
} from "react-icons/si";

const iconSize = 20;

export const TECHNOLOGIES_MAP = {
  react: { name: "React", icon: <SiReact size={iconSize} /> },
  nextJs: { name: "Next.js", icon: <SiNextdotjs size={iconSize} /> },
  figma: { name: "Figma", icon: <SiFigma size={iconSize} /> },
  gitHub: { name: "GitHub", icon: <SiGithub size={iconSize} /> },
  git: { name: "Git", icon: <SiGit size={iconSize} /> },
  mui: { name: "MUI", icon: <SiMui size={iconSize} /> },
  styledComponents: {
    name: "Styled Components",
    icon: <SiStyledcomponents size={iconSize} />,
  },
  tailwind: { name: "Tailwind", icon: <SiTailwindcss size={iconSize} /> },
  typeScript: { name: "TypeScript", icon: <SiTypescript size={iconSize} /> },
  javaScript: { name: "JavaScript", icon: <SiJavascript size={iconSize} /> },
  html: { name: "HTML5", icon: <SiHtml5 size={iconSize} /> },
  css: { name: "CSS3", icon: <SiCss3 size={iconSize} /> },
  node: { name: "Node.js", icon: <SiNodedotjs size={iconSize} /> },
  docker: { name: "Docker", icon: <SiDocker size={iconSize} /> },
  prisma: { name: "Prisma", icon: <SiPrisma size={iconSize} /> },
  fastify: { name: "Fastify", icon: <SiFastify size={iconSize} /> },
} as const;
