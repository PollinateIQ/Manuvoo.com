import * as React from "react";
import {
  ClipboardList,
  CreditCard,
  FileText,
  Home,
  Menu,
  ShoppingBag,
  Users,
  Search,
  Star,
  ChevronRight,
  Plus,
} from "lucide-react";

import { cn } from "@/lib/cn";

type MobileTab = "home" | "menu" | "orders" | "pay" | "invoices";

function NavItem({
  label,
  active,
  icon: Icon,
  onClick,
}: {
  label: string;
  active?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1 cursor-pointer group" onClick={onClick}>
      <button
        type="button"
        className={cn(
          "grid h-10 w-10 place-items-center rounded-2xl border transition-all duration-300",
          active
            ? "border-accent1/20 bg-accent1/10 text-accent1 shadow-[0_0_10px_rgba(255,90,31,0.15)]"
            : "border-transparent bg-transparent text-text3 group-hover:text-text1"
        )}
      >
        <Icon className="h-5 w-5" />
      </button>
      <p className={cn("text-[9px] font-semibold transition-colors", active ? "text-accent1" : "text-text3 group-hover:text-text2")}>
        {label}
      </p>
    </div>
  );
}

export function CustomerMobilePreview({
  className,
  interactive = false,
}: {
  className?: string;
  interactive?: boolean;
}) {
  const [tab, setTab] = React.useState<MobileTab>("home");

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-[28px] border border-borderNeutral bg-bg0",
        className
      )}
    >
      {/* status bar */}
      <div className="flex items-center justify-between px-5 py-3 text-[10px] font-medium text-text3">
        <span className="flex items-center gap-1.5">
          <span className="block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          app.manuvoo.com
        </span>
        <div className="flex items-center gap-2">
          <span>100%</span>
        </div>
      </div>

      <div className={cn("h-full pb-24", interactive && "overflow-y-auto")}>
        {/* header hero */}
        <div className="relative mx-4 overflow-hidden rounded-[24px] border border-borderNeutral bg-surface1 shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,90,31,0.25),transparent_60%),radial-gradient(circle_at_80%_60%,rgba(255,90,31,0.1),transparent_60%)]" />
          
          <div className="relative p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-sm">
                <div className="h-5 w-5 rounded-md bg-accent1 rotate-45" />
              </div>
              <div className="flex gap-2">
                <button className="grid h-9 w-9 place-items-center rounded-full bg-bg1/80 border border-borderNeutral backdrop-blur hover:bg-bg2 transition-colors">
                  <Search className="h-4 w-4 text-text2" />
                </button>
              </div>
            </div>

            <p className="text-[10px] font-bold uppercase tracking-widest text-accent1/80">Welcome to</p>
            <h3 className="mt-1 text-xl font-bold text-text1 leading-tight">
              Green Side<br/>Restaurant & Grill
            </h3>
            
            <div className="mt-4 flex items-center gap-3 text-xs text-text2">
              <span className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 border border-white/5">
                <Star className="h-3 w-3 text-amber-400 fill-amber-400" /> 4.8
              </span>
              <span>•</span>
              <span>Steakhouse</span>
              <span>•</span>
              <span>$$$</span>
            </div>
          </div>
        </div>

        {/* table card */}
        <div className="mx-4 mt-4 rounded-[20px] bg-surface1 p-1 shadow-sm border border-borderNeutral">
          <div className="flex items-center justify-between rounded-[16px] bg-bg1/50 px-4 py-3 border border-dashed border-borderNeutral/50">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-text1">Table #4</p>
                <p className="text-[10px] text-text3">Main Dining Room</p>
              </div>
            </div>
            <button className="text-[10px] font-semibold text-accent1 hover:underline">
              Change
            </button>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="mx-4 mt-6 grid grid-cols-2 gap-3">
          <button 
            onClick={() => interactive && setTab("menu")}
            className="group relative overflow-hidden rounded-[20px] bg-surface1 p-4 text-left border border-borderNeutral hover:border-accent1/30 transition-all shadow-sm hover:shadow-md"
          >
            <div className="mb-3 grid h-8 w-8 place-items-center rounded-full bg-accent1/10 text-accent1 group-hover:scale-110 transition-transform">
              <Menu className="h-4 w-4" />
            </div>
            <p className="text-sm font-bold text-text1">Browse Menu</p>
            <p className="text-[10px] text-text3 mt-0.5">Order food & drinks</p>
          </button>
          
          <button 
            onClick={() => interactive && setTab("orders")}
            className="group relative overflow-hidden rounded-[20px] bg-surface1 p-4 text-left border border-borderNeutral hover:border-accent1/30 transition-all shadow-sm hover:shadow-md"
          >
            <div className="mb-3 grid h-8 w-8 place-items-center rounded-full bg-accent1/10 text-accent1 group-hover:scale-110 transition-transform">
              <ClipboardList className="h-4 w-4" />
            </div>
            <p className="text-sm font-bold text-text1">My Orders</p>
            <p className="text-[10px] text-text3 mt-0.5">Track status</p>
          </button>
        </div>

        {/* Popular Items */}
        <div className="mt-6 pl-4">
          <div className="flex items-center justify-between pr-4 mb-3">
            <h4 className="text-sm font-bold text-text1">Popular Items</h4>
            <span className="text-[10px] font-medium text-accent1 cursor-pointer">View All</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pr-4 pb-4 no-scrollbar">
             {[
               { name: "Cheese Burger", price: "R89", img: "bg-amber-100" },
               { name: "Milkshake", price: "R48", img: "bg-purple-100" },
               { name: "Caesar Salad", price: "R75", img: "bg-green-100" },
             ].map((item, i) => (
               <div key={i} className="min-w-[140px] shrink-0 rounded-[20px] border border-borderNeutral bg-surface1 p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                 <div className={cn("h-24 w-full rounded-[14px] mb-3", item.img)} />
                 <p className="text-xs font-bold text-text1 truncate">{item.name}</p>
                 <div className="mt-2 flex items-center justify-between">
                   <p className="text-xs font-medium text-text2">{item.price}</p>
                   <button className="grid h-6 w-6 place-items-center rounded-full bg-text1 text-bg1">
                     <Plus className="h-3 w-3" />
                   </button>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className="absolute bottom-4 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 rounded-[24px] border border-borderNeutral/50 bg-bg1/90 p-2 backdrop-blur-md shadow-lg shadow-black/20">
        <div className="flex items-center justify-between px-2">
          <NavItem
            label="Home"
            active={tab === "home"}
            icon={Home}
            onClick={interactive ? () => setTab("home") : undefined}
          />
          <NavItem
            label="Menu"
            active={tab === "menu"}
            icon={Menu}
            onClick={interactive ? () => setTab("menu") : undefined}
          />
          <NavItem
            label="Orders"
            active={tab === "orders"}
            icon={ClipboardList}
            onClick={interactive ? () => setTab("orders") : undefined}
          />
          <NavItem
            label="Pay"
            active={tab === "pay"}
            icon={CreditCard}
            onClick={interactive ? () => setTab("pay") : undefined}
          />
        </div>
      </div>

      {interactive && tab !== "home" ? (
        <div className="absolute inset-x-4 bottom-28 top-20 rounded-[24px] border border-borderNeutral bg-surface1/95 p-4 backdrop-blur shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold text-text1">
              {tab === "menu"
                ? "Full Menu"
                : tab === "orders"
                  ? "Your Orders"
                  : tab === "pay"
                    ? "Checkout"
                    : "Invoices"}
            </p>
            <button
              type="button"
              className="grid h-7 w-7 place-items-center rounded-full bg-bg2 text-text2 hover:bg-bg3"
              onClick={() => setTab("home")}
            >
              <ChevronRight className="h-4 w-4 rotate-90" />
            </button>
          </div>
          <div className="flex h-full flex-col items-center justify-center gap-3 text-center opacity-60">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-bg2">
              {tab === "menu" && <Menu className="h-6 w-6 text-text3" />}
              {tab === "orders" && <ClipboardList className="h-6 w-6 text-text3" />}
              {tab === "pay" && <CreditCard className="h-6 w-6 text-text3" />}
            </div>
            <p className="text-xs text-text3">Interactive content coming soon</p>
          </div>
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.55))]" />
    </div>
  );
}
