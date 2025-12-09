import { exec, execFile } from "child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { rimraf } from "rimraf";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, "../store/examples");
const OUTPUT_FILE = path.join(__dirname, "../store/index.ts");

async function main() {
  const entries = await fs.readdir(INPUT_DIR, { withFileTypes: true });

  const items: string[] = [];

  for (const file of entries) {
    if (file.isFile() && file.name.endsWith(".tsx")) {
      const name = file.name.replace(/\.tsx$/, "");

      items.push(`
  "${name}": {
    component: React.lazy(() =>
      import("../store/examples/${name}").then(mod => ({ default: mod.default }))
    ),
  }`);
    }
  }

  const content = `/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
// REVOLT UI STORE - AUTO-GENERATED FILE - DO NOT EDIT MANUALLY

import * as React from "react"

export const Store: Record<string, Record<string, any>> = {${items.join(",")}
};
`;

  // Eski output dosyasını sil
  await rimraf(OUTPUT_FILE);

  // Yeni dosyayı yaz
  await fs.writeFile(OUTPUT_FILE, content, "utf-8");

  return true;
}

main();
