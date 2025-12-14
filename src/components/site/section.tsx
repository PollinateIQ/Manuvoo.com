import * as React from "react";

import { cn } from "@/lib/cn";

export function Section({
  className,
  children,
  variant = "plain",
}: {
  className?: string;
  children: React.ReactNode;
  variant?: "plain" | "muted";
}) {
  return (
    <section
      className={cn(
        "py-16 sm:py-20",
        variant === "plain" && "bg-bg1",
        variant === "muted" && "bg-bg2",
        className
      )}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}
