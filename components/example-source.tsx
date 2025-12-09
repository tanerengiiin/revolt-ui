import fs from "node:fs/promises";
import path from "node:path";
import { highlightCode } from "@/lib/highlight-code";
import { cn } from "@/lib/utils";
import { Store } from "@/store";
import React from "react";

export default async function ExampleSource({
  className,
  name,
  language,
  ...props
}: React.ComponentProps<"div"> & {
  name: string;
  language: string;
}) {
  if (!name) return null;

  const filePath = path.join(process.cwd(), "store", "examples", `${name}.tsx`);

  const content = await fs.readFile(filePath, "utf-8");

  const highlightedCode = await highlightCode(content, language ?? "tsx");

  return (
    <div className={cn("relative", className)} {...props}>
      <figure data-rehype-pretty-code-figure="">
        <div
          className="overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </figure>
    </div>
  );
}
