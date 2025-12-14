export type Money = {
  amount: number;
  currency: "ZAR";
};

export function formatMoney(m: Money): string {
  // Use a hardcoded formatter to avoid hydration mismatches between server and client
  // Server might use comma for thousands, client might use space, etc.
  const amountStr = m.amount.toFixed(2);
  const parts = amountStr.split('.');
  const wholePart = parts[0];
  const decimalPart = parts[1];
  
  // Add thousands separators (comma)
  const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return `R${formattedWholePart}.${decimalPart}`;
}

export type AdminKpi = {
  label: string;
  value: string;
  deltaPct: number;
};

export const adminKpis: AdminKpi[] = [
  { label: "Bills Processed", value: "142", deltaPct: 12.5 },
  { label: "Customers", value: "89", deltaPct: 8.3 },
  { label: "Table Occupation", value: "15/19", deltaPct: 5.0 },
];

export const adminTopProducts: Array<{ name: string; sold: number; total: Money }> = [
  { name: "Cheese Burger", sold: 42, total: { amount: 3738, currency: "ZAR" } },
  { name: "Blueberry Milkshake", sold: 38, total: { amount: 1824, currency: "ZAR" } },
  { name: "Spicy Thai Curry", sold: 25, total: { amount: 2125, currency: "ZAR" } },
  { name: "Margherita Pizza", sold: 21, total: { amount: 1890, currency: "ZAR" } },
  { name: "Craft Beer", sold: 18, total: { amount: 810, currency: "ZAR" } },
  { name: "Chocolate Cake", sold: 15, total: { amount: 750, currency: "ZAR" } },
];

export const adminChart: Array<{ month: string; orderValue: Money; paidBills: number; payments: number }> = [
  { month: "Jul", orderValue: { amount: 18500.50, currency: "ZAR" }, paidBills: 120, payments: 135 },
  { month: "Aug", orderValue: { amount: 21200.00, currency: "ZAR" }, paidBills: 145, payments: 150 },
  { month: "Sep", orderValue: { amount: 19800.75, currency: "ZAR" }, paidBills: 132, payments: 140 },
  { month: "Oct", orderValue: { amount: 24500.25, currency: "ZAR" }, paidBills: 160, payments: 175 },
  { month: "Nov", orderValue: { amount: 28900.00, currency: "ZAR" }, paidBills: 195, payments: 210 },
  { month: "Dec", orderValue: { amount: 35400.50, currency: "ZAR" }, paidBills: 240, payments: 265 },
];

export type TableStatus = "available" | "occupied" | "attention";

export const omsTables: Array<{ id: string; label: string; status: TableStatus; timer?: string }> = [
  { id: "t1", label: "T-1", status: "attention", timer: "1:35" },
  { id: "t2", label: "T-2", status: "occupied", timer: "0:45" },
  { id: "t3", label: "T-3", status: "occupied", timer: "12:10" },
  { id: "t4", label: "T-4", status: "available" },
  { id: "t5", label: "T-5", status: "available" },
  { id: "t6", label: "T-6", status: "occupied", timer: "5:20" },
  { id: "t7", label: "T-7", status: "available" },
  { id: "t8", label: "T-8", status: "attention", timer: "2:00" },
];

export type OrderStatus = "pending" | "preparing" | "ready";

export const omsOrders: Array<{
  id: string;
  status: OrderStatus;
  code: string;
  item: string;
  station: "Kitchen" | "Bar";
}> = [
  { id: "o1", status: "pending", code: "#2DD3", item: "Margherita Pizza", station: "Kitchen" },
  { id: "o2", status: "pending", code: "#3E6D", item: "Spicy Thai Curry", station: "Kitchen" },
  { id: "o3", status: "preparing", code: "#7E09", item: "Mushroom Soup", station: "Kitchen" },
  { id: "o4", status: "ready", code: "#507B", item: "Blueberry Milkshake", station: "Bar" },
  { id: "o5", status: "preparing", code: "#8A2C", item: "Beef Burger", station: "Kitchen" },
  { id: "o6", status: "pending", code: "#9B1D", item: "Craft Beer", station: "Bar" },
];

export const customerQuickActions: Array<{ title: string; subtitle: string; icon: "menu" | "orders" | "pay" | "invoices" }> = [
  { title: "Browse Menu", subtitle: "View food & drinks", icon: "menu" },
  { title: "My Orders", subtitle: "Track your orders", icon: "orders" },
  { title: "Pay", subtitle: "Request payment", icon: "pay" },
  { title: "Invoices", subtitle: "History & receipts", icon: "invoices" },
];
