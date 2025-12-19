import { source } from "@/lib/source";
import React from "react";

export default function Sidebar({ tree }: { tree: typeof source.pageTree }) {
  console.log(tree);
  return <div>Sidebar</div>;
}
