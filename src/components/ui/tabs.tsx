"use client";

import * as React from "react";

import { cn } from "@/lib/cn";

export type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export function Tabs({
  tabs,
  defaultTabId,
  className,
}: {
  tabs: TabItem[];
  defaultTabId?: string;
  className?: string;
}) {
  const first = tabs[0]?.id;
  const [active, setActive] = React.useState(defaultTabId ?? first);

  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={cn(
                "h-10 rounded-2xl px-4 text-sm font-medium transition",
                "border",
                isActive
                  ? "border-borderAccent bg-surface2 text-text1 shadow-[0_0_0_1px_var(--borderAccent),0_10px_30px_-15px_var(--glowSoft)]"
                  : "border-borderNeutral bg-surface1 text-text2 hover:bg-surface2 hover:text-text1"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div>{activeTab?.content}</div>
    </div>
  );
}
