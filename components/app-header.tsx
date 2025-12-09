import React from "react";
import RevoltUIWordmark from "./revoltui-wordmark";
import RevoltUILogo from "./revoltui-logo";
import AppNav from "./app-nav";
import Link from "next/link";
import { Github, GithubIcon, SearchIcon } from "lucide-react";
import { config } from "@/lib/config";
import ThemeSwitcher from "./theme-switcher";

export default function AppHeader() {
  return (
    <header className="container sticky top-0 z-50 w-full bg-background mx-auto py-6 ">
      <div className="flex items-center w-full gap-x-8">
        <Link href="/" className="flex items-center gap-x-2">
          <RevoltUILogo className="fill-surface-800 dark:fill-surface-50 w-auto h-6" />
        </Link>
        <AppNav />
        <div className="flex items-center justify-end flex-1 gap-x-4">
          <button className="cursor-pointer pl-3 pr-2 py-1.25 flex items-center gap-1.5 rounded-full w-full  max-w-52 bg-surface-100 hover:bg-surface-200/75 dark:bg-surface-800 dark:hover:bg-surface-700/75 text-surface-500 dark:text-surface-400/75 transition-colors duration-150">
            <SearchIcon className="size-4" />
            Search
            <span className="inline-flex items-center gap-1 ms-auto">
              <kbd className="bg-surface-200/75 dark:bg-surface-700/75 text-sm font-mono px-1 py-1 rounded-md leading-none">
                Ctrl
              </kbd>
              <kbd className="bg-surface-200/75 dark:bg-surface-700/75 text-sm font-mono px-1.5 py-1 rounded-md leading-none">
                K
              </kbd>
            </span>
          </button>
          <ThemeSwitcher />
          <Link
            href="https://github.com"
            className="flex items-center gap-1.5 px-2 py-1.5 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-lg text-surface-700 dark:text-surface-300 transition-colors duration-150"
          >
            <GithubIcon className="size-4 stroke-2" />
            <span className="text-sm ">
              {config.github_stars}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
