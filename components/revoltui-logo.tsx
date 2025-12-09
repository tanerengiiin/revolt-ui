import React from "react";
import { cn } from "@/lib/utils";

const RevoltUILogo = ({ className, ...props }: React.ComponentProps<"svg">) => {
  return (
    <svg
      className={cn("", className)}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M35 0H30.6364L3 43.75H35V70H39.3636L67 26.25H35V0Z"
      />
    </svg>
  );
};

export default RevoltUILogo;
