import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/cn";

export function Logo({
  className,
  variant = "inverse",
  size = "md",
}: {
  className?: string;
  /**
   * - inverse: 2D logo for dark UI (white mark on dark)
   * - mono: 2D logo for light UI (black mark on white)
   * - 3d: legacy 3D logo (not recommended for header)
   */
  variant?: "inverse" | "mono" | "3d";
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const px = size === "sm" ? 34 : size === "lg" ? 48 : size === "xl" ? 56 : 40;
  const src =
    variant === "3d"
      ? "/Main Logo bwb 3d.png"
      : variant === "mono"
        ? "/Main Logo bw.png"
        : "/Main Logo bwb.png";

  return (
    <Link href="/" className={cn("inline-flex items-center gap-2", className)}>
      <span
        className={cn(
          "grid place-items-center overflow-hidden rounded-2xl border",
          "shadow-[0_0_30px_-10px_var(--glowSoft)]",
          variant === "3d" ? "border-borderAccent bg-surface2" : "border-borderNeutral",
          variant === "mono" ? "bg-white" : "bg-transparent"
        )}
        style={{ height: px, width: px }}
      >
        <Image
          src={src}
          alt="Manuvoo logo"
          width={px}
          height={px}
          className={cn(
            "object-contain",
            variant === "mono" ? "p-1" : ""
          )}
          priority
        />
      </span>
      <span
        className={cn(
          "font-semibold tracking-[0.18em] text-text1",
          size === "sm" ? "text-xs" : size === "lg" ? "text-base" : size === "xl" ? "text-base" : "text-sm"
        )}
      >
        MANUVOO
      </span>
    </Link>
  );
}
