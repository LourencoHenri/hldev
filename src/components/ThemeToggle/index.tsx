"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="p-2 w-10 h-10" />; // placeholder
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-300 text-neutral-600 dark:text-neutral-300"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <FiSun size={24} className="hover:text-yellow-500 transition-colors" />
            ) : (
                <FiMoon size={24} className="hover:text-indigo-500 transition-colors" />
            )}
        </button>
    );
}
