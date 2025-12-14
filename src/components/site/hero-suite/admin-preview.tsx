import * as React from "react";
import {
  BarChart3,
  Bell,
  ClipboardList,
  LayoutDashboard,
  ListOrdered,
  Package,
  RefreshCcw,
  Scale,
  Settings,
  Users,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

import { cn } from "@/lib/cn";
import { adminChart, adminKpis, adminTopProducts, formatMoney } from "./mock-data";

type TabId = "dashboard" | "orders" | "menu" | "inventory" | "settings";

function KpiIcon({ label }: { label: string }) {
  if (label.includes("Bills")) return <ClipboardList className="h-4 w-4" />;
  if (label.includes("Customers")) return <Users className="h-4 w-4" />;
  if (label.includes("Table")) return <LayoutDashboard className="h-4 w-4" />;
  return <BarChart3 className="h-4 w-4" />;
}

const tabs: Array<{
  id: TabId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "orders", label: "Orders", icon: ListOrdered },
  { id: "menu", label: "Menu", icon: BarChart3 },
  { id: "inventory", label: "Inventory", icon: Package },
  { id: "settings", label: "Settings", icon: Settings },
];

const mockOrders = [
  {
    id: "#1024",
    customer: "Walk-in",
    total: { amount: 288, currency: "ZAR" as const },
    status: "Pending" as const,
    items: "2x Burger, 1x Coke",
  },
  {
    id: "#1023",
    customer: "Table #4",
    total: { amount: 125.0, currency: "ZAR" as const },
    status: "Preparing" as const,
    items: "1x Pizza",
  },
  {
    id: "#1022",
    customer: "Table #3",
    total: { amount: 445.0, currency: "ZAR" as const },
    status: "Ready" as const,
    items: "3x Pasta, 1x Wine",
  },
  {
    id: "#1021",
    customer: "Delivery",
    total: { amount: 150.0, currency: "ZAR" as const },
    status: "Completed" as const,
    items: "2x Salad",
  },
  {
    id: "#1020",
    customer: "Table #1",
    total: { amount: 890.0, currency: "ZAR" as const },
    status: "Completed" as const,
    items: "Steak Platter",
  },
  {
    id: "#1019",
    customer: "Uber Eats",
    total: { amount: 320.0, currency: "ZAR" as const },
    status: "Completed" as const,
    items: "Sushi Set",
  },
];

const mockMenu = [
  {
    category: "Burgers & Mains",
    items: [
      { name: "Cheese Burger", price: 89.0, stock: "High" },
      { name: "Chicken Burger", price: 84.0, stock: "Medium" },
      { name: "Ribeye Steak", price: 220.0, stock: "Low" },
      { name: "Vegan Wrap", price: 75.0, stock: "High" },
    ],
  },
  {
    category: "Drinks & Desserts",
    items: [
      { name: "Blueberry Milkshake", price: 48.0, stock: "High" },
      { name: "Craft Beer", price: 55.0, stock: "Medium" },
      { name: "Ice Pops", price: 15.0, stock: "High" },
      { name: "Chocolate Cake", price: 65.0, stock: "Medium" },
    ],
  },
];

const mockInventory = [
  { name: "Burger Buns", level: 68, unit: "pcs" },
  { name: "Cheddar Cheese", level: 22, unit: "kg" },
  { name: "Chicken Breast", level: 44, unit: "kg" },
  { name: "Whole Milk", level: 18, unit: "L" },
  { name: "Tomatoes", level: 85, unit: "kg" },
  { name: "Coffee Beans", level: 30, unit: "kg" },
];

function StatusTag({ status }: { status: string }) {
  const cfg =
    status === "Ready" || status === "Completed"
      ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
      : status === "Preparing"
        ? "bg-sky-500/15 text-sky-600 dark:text-sky-400"
        : status === "Pending"
          ? "bg-amber-500/15 text-amber-600 dark:text-amber-400"
          : "bg-surface2 text-text2";
  return (
    <span className={cn("inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium", cfg)}>
      {status}
    </span>
  );
}

export function AdminPortalPreview({
  className,
  interactive = false,
}: {
  className?: string;
  interactive?: boolean;
}) {
  const maxValue = Math.max(...adminChart.map((d) => d.orderValue.amount), 1);
  const [tab, setTab] = React.useState<TabId>("dashboard");

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-[22px] border border-borderNeutral bg-bg1",
        className
      )}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-borderNeutral bg-bg1/80 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-borderNeutral bg-surface1 shadow-sm">
            <Scale className="h-4 w-4 text-accent1" />
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-text3">Admin Portal</p>
            <p className="text-sm font-semibold text-text1">Dashboard</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-text2">
          <button
            type="button"
            className="grid h-8 w-8 place-items-center rounded-lg hover:bg-surface2 transition-colors"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="inline-flex h-8 items-center gap-2 rounded-lg border border-borderNeutral bg-surface1 px-3 text-xs font-medium hover:bg-surface2 transition-colors shadow-sm"
            aria-label="Refresh"
          >
            <RefreshCcw className="h-3 w-3" />
            <span className="hidden sm:inline">Refresh</span>
          </button>
        </div>
      </div>

      <div className={cn("grid gap-4 p-4", interactive && "overflow-y-auto max-h-[calc(100%-60px)]")}>
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => {
            const active = tab === t.id;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => interactive && setTab(t.id)}
                className={cn(
                  "inline-flex h-8 items-center gap-2 rounded-lg border px-3 text-xs font-medium transition-all",
                  active
                    ? "border-accent1/20 bg-accent1/5 text-accent1 shadow-sm"
                    : "border-transparent bg-transparent text-text2 hover:bg-surface2 hover:text-text1",
                  !interactive && !active && "opacity-60 grayscale"
                )}
                style={{ cursor: interactive ? "pointer" : "default" }}
              >
                <Icon className="h-3.5 w-3.5" />
                {t.label}
              </button>
            );
          })}
        </div>

        {tab === "dashboard" ? (
          <>
            {/* KPIs */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {adminKpis.map((k) => (
                <div
                  key={k.label}
                  className="group relative overflow-hidden rounded-[16px] border border-borderNeutral bg-surface1/50 p-4 transition-all hover:bg-surface1 hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-medium text-text3">{k.label}</p>
                      <div className="mt-1 flex items-baseline gap-2">
                        <p className="text-xl font-bold tracking-tight text-text1">
                          {k.value}
                        </p>
                      </div>
                    </div>
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-surface2 text-text2 group-hover:scale-110 transition-transform">
                      <KpiIcon label={k.label} />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5">
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-500">
                      <ArrowUpRight className="mr-0.5 h-3 w-3" />
                      {k.deltaPct.toFixed(1)}%
                    </span>
                    <span className="text-[10px] text-text3">vs last month</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart + Top products */}
            <div className="grid gap-3 md:grid-cols-5">
              <div className="md:col-span-3 flex flex-col rounded-[18px] border border-borderNeutral bg-surface1/50 p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-text1">
                      Revenue Overview
                    </p>
                    <p className="mt-1 text-xs text-text3">
                      Monthly order value performance
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase text-text3">Total Revenue</p>
                    <p className="text-sm font-bold text-text1">
                      {formatMoney({ amount: 148300.95, currency: "ZAR" })}
                    </p>
                  </div>
                </div>
                <div className="mt-auto flex h-32 items-end justify-between gap-2 pt-4">
                  {adminChart.map((d) => {
                    const h = Math.max(
                      8,
                      Math.round((d.orderValue.amount / maxValue) * 100)
                    );
                    const isMax = d.orderValue.amount === maxValue;
                    return (
                      <div
                        key={d.month}
                        className="group flex flex-1 flex-col items-center gap-2"
                      >
                        <div className="relative w-full max-w-[24px] rounded-t-sm bg-bg2/50 transition-all group-hover:bg-bg2">
                          <div
                            className={cn(
                              "absolute bottom-0 left-0 right-0 rounded-t-sm transition-all duration-500",
                              isMax ? "bg-accent1 shadow-[0_0_10px_rgba(255,90,31,0.25)]" : "bg-accent1/60 group-hover:bg-accent1/80"
                            )}
                            style={{ height: `${h}%` }}
                          />
                        </div>
                        <p className="text-[9px] font-medium text-text3 group-hover:text-text2">
                          {d.month}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="md:col-span-2 rounded-[18px] border border-borderNeutral bg-surface1/50 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-text1">Top Items</p>
                  <button type="button" className="text-[10px] font-medium text-accent1 hover:underline">View All</button>
                </div>
                <div className="mt-4 space-y-3">
                  {adminTopProducts.slice(0, 4).map((p, idx) => (
                    <div key={p.name} className="flex items-center gap-3">
                      <div className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-surface2 text-[10px] font-bold text-text2">
                        {idx + 1}
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <p className="truncate text-xs font-medium text-text1">
                            {p.name}
                          </p>
                          <p className="text-xs font-semibold text-text1">
                            {formatMoney(p.total)}
                          </p>
                        </div>
                        <div className="mt-1.5 h-1.5 w-full rounded-full bg-bg2">
                          <div
                            className="h-1.5 rounded-full bg-accent1"
                            style={{ width: `${Math.min(100, (p.sold / 50) * 100)}%`, opacity: 0.8 - idx * 0.15 }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : tab === "orders" ? (
          <div className="rounded-[18px] border border-borderNeutral bg-surface1/50 overflow-hidden">
            <div className="flex items-center justify-between border-b border-borderNeutral px-4 py-3 bg-surface1">
              <p className="text-sm font-semibold text-text1">Recent Orders</p>
              <div className="flex gap-2">
                <span className="inline-flex items-center rounded-full bg-surface2 px-2 py-0.5 text-[10px] font-medium text-text2">
                  All Statuses
                </span>
              </div>
            </div>
            <div className={cn("divide-y divide-borderNeutral", interactive && "max-h-[480px] overflow-auto")}>
              {mockOrders.map((o) => (
                <div key={o.id} className="flex items-center justify-between px-4 py-3 hover:bg-surface1 transition-colors">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-text3">{o.id}</span>
                      <p className="text-xs font-semibold text-text1 truncate">
                        {o.customer}
                      </p>
                    </div>
                    <p className="mt-0.5 text-[11px] text-text3 truncate">{o.items}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 ml-3">
                    <StatusTag status={o.status} />
                    <p className="text-[11px] font-medium text-text1">
                      {formatMoney(o.total)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : tab === "menu" ? (
          <div className={cn("grid gap-3", interactive && "max-h-[520px] overflow-auto")}>
            {mockMenu.map((c) => (
              <div key={c.category} className="rounded-[18px] border border-borderNeutral bg-surface1/50 p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-text1">{c.category}</p>
                  <button className="text-[10px] text-accent1 hover:underline">Edit</button>
                </div>
                <div className="space-y-2">
                  {c.items.map((i) => (
                    <div key={i.name} className="flex items-center justify-between rounded-xl border border-borderNeutral/50 bg-bg1/50 px-3 py-2 hover:bg-bg1 transition-colors">
                      <div className="flex items-center gap-2">
                        <div className={cn("h-2 w-2 rounded-full", i.stock === "High" ? "bg-emerald-500" : i.stock === "Medium" ? "bg-amber-500" : "bg-rose-500")} />
                        <p className="text-xs font-medium text-text1">{i.name}</p>
                      </div>
                      <p className="text-xs font-semibold text-text2">R{i.price.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : tab === "inventory" ? (
          <div className={cn("grid gap-3", interactive && "max-h-[520px] overflow-auto")}>
            {mockInventory.map((i) => (
              <div key={i.name} className="rounded-[18px] border border-borderNeutral bg-surface1/50 p-4 hover:bg-surface1 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-text1">{i.name}</p>
                    <p className="text-[10px] text-text3">{i.level} {i.unit} in stock</p>
                  </div>
                  <p className={cn("text-xs font-bold", i.level < 25 ? "text-amber-500" : "text-emerald-500")}>
                    {i.level < 25 ? "Low Stock" : "Healthy"}
                  </p>
                </div>
                <div className="mt-3 h-2 rounded-full bg-bg2 overflow-hidden">
                  <div 
                    className={cn("h-full rounded-full transition-all duration-500", i.level < 25 ? "bg-amber-500" : "bg-emerald-500")} 
                    style={{ width: `${Math.min(100, i.level)}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-[18px] border border-borderNeutral bg-surface1 p-8 text-center">
            <Settings className="mx-auto h-8 w-8 text-text3 mb-3 opacity-50" />
            <p className="text-sm font-semibold text-text1">Settings</p>
            <p className="mt-2 text-xs text-text2 max-w-[200px] mx-auto">
              Configure business details, staff permissions, and payment methods.
            </p>
            <button className="mt-4 rounded-lg bg-surface2 px-4 py-2 text-xs font-medium text-text1 hover:bg-borderNeutral transition-colors">
              Open Settings
            </button>
          </div>
        )}
      </div>

      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.55))]" />
    </div>
  );
}
