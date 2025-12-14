import * as React from "react";

import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition",
        "rounded-2xl",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg1",
        "disabled:pointer-events-none disabled:opacity-50",
        size === "sm" && "h-9 px-4 text-sm",
        size === "md" && "h-11 px-5 text-sm",
        size === "lg" && "h-12 px-6 text-base",
        variant === "primary" &&
          cn(
            "bg-accent1 text-bg0",
            "hover:bg-accent2",
            "shadow-[0_0_0_1px_var(--borderAccent),0_10px_30px_-10px_var(--glowAccent)]"
          ),
        variant === "secondary" &&
          cn(
            "border border-borderAccent bg-surface1 text-text1",
            "hover:bg-surface2",
            "shadow-[0_0_0_1px_var(--borderNeutral)]"
          ),
        variant === "tertiary" &&
          cn(
            "bg-transparent text-text2",
            "hover:text-text1 hover:bg-surface2",
            "px-3"
          ),
        className
      )}
      {...props}
    />
  );
}
