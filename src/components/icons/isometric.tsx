import * as React from "react";

import { cn } from "@/lib/cn";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export function IsoCubeIcon({ size = 48, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
      {...props}
    >
      <path
        d="M32 6l22 12v28L32 58 10 46V18L32 6z"
        fill="rgba(255,90,31,0.16)"
        stroke="rgba(255,90,31,0.55)"
      />
      <path
        d="M32 6v52"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="2"
      />
      <path
        d="M10 18l22 12 22-12"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="2"
      />
      <path
        d="M32 30L10 18v28l22 12V30z"
        fill="rgba(255,255,255,0.04)"
      />
      <path
        d="M32 30l22-12v28L32 58V30z"
        fill="rgba(255,90,31,0.08)"
      />
    </svg>
  );
}

export function IsoQrIcon({ size = 48, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
      {...props}
    >
      <rect
        x="10"
        y="10"
        width="44"
        height="44"
        rx="14"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.10)"
      />
      <path
        d="M20 20h10v10H20V20zm14 0h10v10H34V20zM20 34h10v10H20V34zm22 14h-8v-8h8v8z"
        fill="rgba(255,90,31,0.55)"
      />
      <path
        d="M38 34h6v6h-6v-6zm0 8h6v6h-6v-6z"
        fill="rgba(255,255,255,0.12)"
      />
    </svg>
  );
}

export function IsoStationIcon({ size = 48, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
      {...props}
    >
      <path
        d="M16 46h32"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M22 18h20l4 10H18l4-10z"
        fill="rgba(255,90,31,0.18)"
        stroke="rgba(255,90,31,0.55)"
      />
      <path
        d="M20 28v14c0 2 2 4 4 4h16c2 0 4-2 4-4V28"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.12)"
      />
      <circle cx="26" cy="38" r="3" fill="rgba(255,90,31,0.55)" />
      <circle cx="38" cy="38" r="3" fill="rgba(255,255,255,0.14)" />
    </svg>
  );
}
