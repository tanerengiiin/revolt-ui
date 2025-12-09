"use client";
import React from "react";
import { config } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function AppNav({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav className={cn("items-center gap-4 flex", className)} {...props}>
      {config.nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-surface-700 dark:text-surface-300 hover:text-surface-950 dark:hover:text-surface-50 transition-colors duration-150"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
