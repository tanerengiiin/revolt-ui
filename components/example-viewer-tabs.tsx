"use client";

import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

type TabSwitcher = "preview" | "code";

export default function ExampleViewerTabs({
  Example,
  source,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  Example: React.ReactNode;
  source: React.ReactNode;
}) {
  const [active, setActive] = React.useState<TabSwitcher>("preview");
  return (
    <div
      className={cn(
        "mt-10 overflow-hidden rounded-xl bg-surface-50/25 dark:bg-surface-950/25 border border-surface-200 dark:border-surface-800/75",
        className
      )}
      {...props}
    >
      <div className="bg-surface-100/50 dark:bg-surface-900/75 p-2 border-b border-surface-200 dark:border-surface-800/75 flex items-center">
        <div className="h-9 flex gap-0.5 border border-surface-200 dark:border-surface-800 p-0.5 rounded-lg bg-surface-0 dark:bg-surface-950/25">
          {(["preview", "code"] as TabSwitcher[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="capitalize relative cursor-pointer font-medium flex items-center px-3 rounded-full transition-colors duration-150"
            >
              <span
                className={cn(
                  "text-surface-500 hover:text-surface-700 dark:hover:text-surface-100 z-10 transition-colors",
                  active === tab && "text-surface-800 dark:text-surface-0"
                )}
              >
                {tab}
              </span>
              {active === tab && (
                <motion.span
                  layoutId="tab-switcher"
                  className="bg-surface-200/75 dark:bg-surface-800 rounded-[0.38rem] absolute inset-0 z-0"
                  transition={{ type: "spring", stiffness: 600, damping: 50 }}
                />
              )}
            </button>
          ))}
        </div>
        <div className="flex-1 ml-auto flex items-center justify-end">
          <button className="size-9 rounded-lg flex items-center justify-center border border-surface-200 dark:border-surface-800 bg-surface-0 dark:bg-surface-950/25 transition-colors duration-150">
            <Copy className="size-4 stroke-2" />
          </button>
        </div>
      </div>
      {active === "preview" && <div className="px-12 py-8">{Example}</div>}
      {active === "code" && <div className="max-h-160 overflow-auto">{source}</div>}
    </div>
  );
}
