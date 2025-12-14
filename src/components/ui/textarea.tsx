import * as React from "react";

import { cn } from "@/lib/cn";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-[var(--radiusCard)] border border-borderNeutral bg-surface3 px-4 py-3 text-sm text-text1",
        "placeholder:text-text3",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg1",
        className
      )}
      {...props}
    />
  );
}
