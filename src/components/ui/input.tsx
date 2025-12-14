import * as React from "react";

import { cn } from "@/lib/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-2xl border border-borderNeutral bg-surface3 px-4 text-sm text-text1",
        "placeholder:text-text3",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg1",
        "disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
