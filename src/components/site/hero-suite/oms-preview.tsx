"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Grid3X3,
  List,
  Search,
  UtensilsCrossed,
  Flame,
  CheckCircle2,
  Clock,
  ChefHat,
  Beer,
} from "lucide-react";

import { cn } from "@/lib/cn";
import { omsOrders, omsTables, type OrderStatus } from "./mock-data";

function StatusPill({
  label,
  active,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={cn(
        "inline-flex h-9 items-center gap-2 rounded-full border px-3 text-xs font-semibold transition-colors",
        active
          ? "border-borderAccent bg-surface2 text-text1"
          : "border-borderNeutral bg-surface1 text-text2 hover:bg-surface2"
      )}
    >
      {label}
    </div>
  );
}

function TableCard({
  label,
  status,
  timer,
  pulse,
}: {
  label: string;
  status: "available" | "occupied" | "attention";
  timer?: string;
  pulse?: boolean;
}) {
  const dot =
    status === "available"
      ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]"
      : status === "occupied"
        ? "bg-accent1 shadow-[0_0_8px_rgba(255,90,31,0.4)]"
        : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]";

  return (
    <div
      className={cn(
        "relative rounded-[22px] border border-borderNeutral bg-surface1 p-4 transition-all duration-300",
        pulse && "shadow-[0_0_0_1px_var(--borderAccent),0_30px_80px_-55px_var(--glowAccent)] scale-[1.02]",
        !pulse && "hover:border-borderAccent/50"
      )}
    >
      <div className="flex items-start justify-between">
        <div className={cn("grid h-12 w-12 place-items-center rounded-2xl", dot)}>
          <span className="text-xs font-extrabold text-bg0">{label}</span>
        </div>
        {timer ? (
          <div className={cn("flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-bold", 
            status === "attention" ? "bg-red-500/10 text-red-400" : "bg-bg2 text-text2"
          )}>
            <Clock className="h-3 w-3" />
            {timer}
          </div>
        ) : null}
      </div>
      
      <div className="mt-8 space-y-1.5">
        <div className="h-1.5 w-3/4 rounded-full bg-bg2/60" />
        <div className="h-1.5 w-1/2 rounded-full bg-bg2/40" />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[10px] font-medium text-text3">
          <span className={cn("h-1.5 w-1.5 rounded-full", dot)} />
          {status.toUpperCase()}
        </div>
        {status === "occupied" && (
          <div className="text-[10px] font-medium text-text3">
            4 Guests
          </div>
        )}
      </div>
    </div>
  );
}

function OrderChip({ status }: { status: OrderStatus }) {
  const cfg =
    status === "pending"
      ? { bg: "bg-amber-500/15", text: "text-amber-500", icon: Flame }
      : status === "preparing"
        ? { bg: "bg-sky-500/15", text: "text-sky-500", icon: ChefHat }
        : { bg: "bg-emerald-500/15", text: "text-emerald-500", icon: CheckCircle2 };
  const Icon = cfg.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wide",
        cfg.bg,
        cfg.text
      )}
    >
      <Icon className="h-3 w-3" />
      {status}
    </span>
  );
}

export default function OMSPreview({
  className,
  interactive = false,
}: {
  className?: string;
  interactive?: boolean;
}) {
  const [mode, setMode] = React.useState<"tables" | "orders">("tables");
  const [pulseIdx, setPulseIdx] = React.useState(0);
  const [orders, setOrders] = React.useState(omsOrders);

  React.useEffect(() => {
    if (interactive) return;
    const t = setInterval(() => {
      setMode((m) => (m === "tables" ? "orders" : "tables"));
      setPulseIdx((i) => (i + 1) % omsTables.length);
    }, 4000); // Slower toggle for better readability
    return () => clearInterval(t);
  }, [interactive]);

  function nextStatus(s: OrderStatus): OrderStatus {
    if (s === "pending") return "preparing";
    if (s === "preparing") return "ready";
    return "pending";
  }

  function onClickOrder(id: string) {
    if (!interactive) return;
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: nextStatus(o.status) } : o))
    );
  }

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-[22px] border border-borderNeutral bg-bg1",
        className
      )}
    >
      {/* header */}
      <div className="flex items-center justify-between border-b border-borderNeutral bg-bg1/80 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-borderNeutral bg-surface1 shadow-sm">
            <UtensilsCrossed className="h-4 w-4 text-accent1" />
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-text3">ManuvooOMS</p>
            <p className="text-sm font-semibold text-text1">Floor Operations</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <StatusPill label="Dine In" active />
          <StatusPill label="Takeaway" />
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <div className="flex h-9 items-center gap-2 rounded-xl border border-borderNeutral bg-surface1/50 px-3 text-xs text-text3 hover:bg-surface1 transition-colors cursor-pointer">
            <Search className="h-3.5 w-3.5" />
            <span className="hidden lg:inline">Search tables or orders…</span>
          </div>
        </div>
      </div>

      <div className={cn("p-4", interactive && "overflow-y-auto max-h-[calc(100%-60px)]")}>
        {/* view toggles */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2 rounded-xl bg-surface1 p-1 border border-borderNeutral">
            <button
              type="button"
              className={cn(
                "inline-flex h-8 items-center gap-2 rounded-lg px-3 text-xs font-semibold transition-all",
                mode === "tables"
                  ? "bg-surface2 text-text1 shadow-sm"
                  : "text-text3 hover:text-text1"
              )}
              onClick={() => setMode("tables")}
            >
              <Grid3X3 className="h-3.5 w-3.5" />
              Tables
            </button>
            <button
              type="button"
              className={cn(
                "inline-flex h-8 items-center gap-2 rounded-lg px-3 text-xs font-semibold transition-all",
                mode === "orders"
                  ? "bg-surface2 text-text1 shadow-sm"
                  : "text-text3 hover:text-text1"
              )}
              onClick={() => setMode("orders")}
            >
              <List className="h-3.5 w-3.5" />
              Orders
            </button>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-medium text-text3 bg-surface1/50 px-2 py-1 rounded-lg border border-borderNeutral/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Live Status
          </div>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {mode === "tables" ? (
              <motion.div
                key="tables"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="grid gap-3 grid-cols-2 md:grid-cols-4"
              >
                {omsTables.map((t, idx) => (
                  <TableCard
                    key={t.id}
                    label={t.label}
                    status={t.status}
                    timer={t.timer}
                    pulse={idx === pulseIdx}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="orders"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="grid gap-3 md:grid-cols-3"
              >
                {(["pending", "preparing", "ready"] as const).map((status) => (
                  <div
                    key={status}
                    className="flex flex-col rounded-[18px] border border-borderNeutral bg-surface1/50 overflow-hidden"
                  >
                    <div className="flex items-center justify-between bg-surface1 px-3 py-2 border-b border-borderNeutral">
                      <p className="text-[11px] font-bold text-text1 uppercase tracking-wide">
                        {status}
                      </p>
                      <OrderChip status={status} />
                    </div>
                    <div className="p-2 space-y-2 flex-1">
                      {orders
                        .filter((o) => o.status === status)
                        .map((o) => (
                          <div
                            key={o.id}
                            className={cn(
                              "group rounded-xl border border-transparent bg-bg1 p-3 shadow-sm transition-all",
                              interactive && "cursor-pointer hover:border-accent1/30 hover:shadow-md"
                            )}
                            onClick={() => onClickOrder(o.id)}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <p className="text-xs font-semibold text-text1 leading-tight">
                                  {o.item}
                                </p>
                                <p className="text-[10px] text-text3 mt-0.5">
                                  {o.code}
                                </p>
                              </div>
                              {o.station === "Bar" ? (
                                <Beer className="h-3.5 w-3.5 text-text3" />
                              ) : (
                                <UtensilsCrossed className="h-3.5 w-3.5 text-text3" />
                              )}
                            </div>
                            
                            <div className="mt-3 flex items-center justify-between">
                              <span className="rounded-md bg-surface2 px-1.5 py-0.5 text-[9px] font-semibold text-text2 uppercase">
                                {o.station}
                              </span>
                              <span className="text-[9px] font-medium text-text3 opacity-0 group-hover:opacity-100 transition-opacity text-accent1">
                                Update ›
                              </span>
                            </div>
                          </div>
                        ))}
                        {orders.filter((o) => o.status === status).length === 0 && (
                          <div className="flex h-20 items-center justify-center text-[10px] text-text3 italic">
                            No active orders
                          </div>
                        )}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.55))]" />
    </div>
  );
}
