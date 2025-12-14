import * as React from "react";

import { cn } from "@/lib/cn";

export type BadgeVariant = "implemented" | "comingSoon" | "serviceReady";

const variantStyles: Record<BadgeVariant, string> = {
  implemented:
    "border-borderNeutral bg-surface2 text-text1 shadow-[0_0_0_1px_var(--borderNeutral)]",
  comingSoon: "border-borderNeutral bg-bg2 text-text2",
  serviceReady: "border-borderAccent bg-bg2 text-accent2",
};

export function Badge({
  variant = "implemented",
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
