"use client";
import { cn } from "@/lib/utils";
import { Airplay, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const themes = [
  {
    name: "light",
    icon: Sun,
  },
  {
    name: "dark",
    icon: Moon,
  },
  {
    name: "system",
    icon: Airplay,
  },
];

export default function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useLayoutEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="p-1 flex items-center gap-0.5 rounded-full bg-surface-100 dark:bg-surface-800 text-surface-500"
    >
      {themes.map((t) => (
        <button
          key={t.name}
          onClick={() => setTheme(t.name)}
          className={cn(
            "size-6.5 inline-flex items-center justify-center rounded-full cursor-pointer hover:text-surface-800 dark:hover:text-surface-100 transition-colors duration-150",
            mounted && theme === t.name  &&
              "bg-surface-200/75 dark:bg-surface-700/75 text-surface-800 dark:text-surface-100"
          )}
        >
          <t.icon className="size-4" />
        </button>
      ))}
    </div>
  );
}
