import { Store } from "@/store";
import React from "react";
import ExampleViewerTabs from "./example-viewer-tabs";
import ExampleSource from "./example-source";

export default function ExampleViewer({
  name,
  ...props
}: React.ComponentProps<"div"> & { name: string }) {
  const Example = Store[name]?.component;
  if (!Example) {
    return <div>No</div>;
  }

  return (
    <ExampleViewerTabs
      Example={<Example />}
      source={<ExampleSource name={name} language="tsx" />}
      {...props}
    />
  );
}
