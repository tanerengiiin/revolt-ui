import Sidebar from "@/components/sidebar";
import React from "react";

export default function DocsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="container pt-8 pb-32 flex-1 flex-col grid grid-cols-[var(--sidebar-width)_minmax(0,1fr)] gap-x-4 [--sidebar-width:calc(var(--spacing)*60)]">
      <Sidebar />
      {children}
    </div>
  );
}
