"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { Drawer } from "rsuite";
import { IoClose, IoMenu } from "react-icons/io5";

import { LogoWhite } from "../../assets/logo/LogoWhite";
import { LogoBlack } from "../../assets/logo/LogoBlack";
import LanguageChanger from "../LanguageChanger";
import ThemeToggle from "../ThemeToggle";

const NAV_ITEMS = [
  { id: "Home", key: "home" },
  { id: "About", key: "about" },
  { id: "Skills", key: "skills" },
  { id: "Projects", key: "projects" },
  { id: "Contact", key: "contact" },
] as const;

export default function Header() {
  const { t } = useTranslation();
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-neutral-200/60 bg-white/80 backdrop-blur-md dark:border-neutral-800/60 dark:bg-neutral-950/70"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label={t("header.aria", { defaultValue: "Primary navigation" })}
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6"
      >
        <a
          href="#Home"
          aria-label="Henrique Lourenço — back to top"
          className="flex shrink-0 items-center"
        >
          {mounted ? isDark ? <LogoWhite /> : <LogoBlack /> : <LogoBlack />}
        </a>

        <ul className="hidden items-center gap-x-8 lg:flex w-full justify-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-md font-normal text-neutral-600 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                {t(`header.${item.key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageChanger />
		  <div
		  	className="border-r border-neutral-600 h-6"
		  />
          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() => setOpenDrawer(true)}
          aria-label={t("header.openMenu", { defaultValue: "Open menu" })}
          className="rounded-full p-2 text-neutral-700 transition-colors duration-200 hover:bg-neutral-100 lg:hidden dark:text-neutral-200 dark:hover:bg-neutral-800"
        >
          <IoMenu size={26} />
        </button>

        <Drawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          className="max-w-72"
          closeButton={false}
        >
          <Drawer.Body className="m-0 h-svh bg-white p-0 dark:bg-neutral-950">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-neutral-200 p-4 dark:border-neutral-800">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                  {t("header.menu", { defaultValue: "Menu" })}
                </span>
                <button
                  type="button"
                  onClick={() => setOpenDrawer(false)}
                  aria-label={t("header.closeMenu", {
                    defaultValue: "Close menu",
                  })}
                  className="rounded-full p-2 text-neutral-700 transition-colors duration-200 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                >
                  <IoClose size={24} />
                </button>
              </div>

              <ul className="flex flex-1 flex-col gap-1 px-4 py-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpenDrawer(false)}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-neutral-800 transition-colors duration-200 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800"
                    >
                      {t(`header.${item.key}`)}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between gap-3 border-t border-neutral-200 p-4 dark:border-neutral-800">
                <ThemeToggle />
                <LanguageChanger />
              </div>
            </div>
          </Drawer.Body>
        </Drawer>
      </nav>
    </header>
  );
}
