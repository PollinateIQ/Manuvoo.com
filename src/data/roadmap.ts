export type RoadmapStatus = 'completed' | 'upcoming' | 'planned';

export interface RoadmapItem {
  title: string;
  description: string;
  /** Human-readable release date (or target window for unreleased work). */
  date: string;
  version: string;
  status: RoadmapStatus;
  module: string;
}

/**
 * Single source of truth for the roadmap timeline.
 *
 * Order: shipped work first (newest to oldest), then what's next.
 *
 * NOTE: dates and version numbers for the newly added "completed" entries are
 * placeholders — confirm them against the real release history before this
 * goes live.
 */
export const roadmapItems: RoadmapItem[] = [
  {
    title: 'Live Cloud Sync Across Devices',
    description:
      'Orders and service updates stay connected across phones, tablets, and laptops in real time.',
    date: 'Jun 2026',
    version: 'v1.6.0',
    status: 'completed',
    module: 'Platform',
  },
  {
    title: 'Inventory & Venue Control',
    description:
      'Track the operational signals that protect stock and margins across connected venues.',
    date: 'May 2026',
    version: 'v1.5.0',
    status: 'completed',
    module: 'Admin Portal',
  },
  {
    title: 'Role-aware Access & Staff Check-In',
    description:
      'Give every team member the product view their role needs, with staff check-in built into service.',
    date: 'Mar 2026',
    version: 'v1.4.0',
    status: 'completed',
    module: 'Platform',
  },
  {
    title: 'Payments & Cash-up',
    description:
      'Payment status and end-of-day reconciliation stay attached to the orders that created them.',
    date: 'Feb 2026',
    version: 'v1.3.0',
    status: 'completed',
    module: 'OMS',
  },
  {
    title: 'Multi-tenant Access & Switching',
    description:
      'Seamlessly switch between different restaurant brands and locations with a single login.',
    date: 'Dec 14, 2025',
    version: 'v1.2.0',
    status: 'completed',
    module: 'Admin Portal',
  },
  {
    title: 'Orders & Transactions Hub',
    description:
      'Centralized view for all live orders, bill status, and payment tracking in real-time.',
    date: 'Dec 10, 2025',
    version: 'v1.1.5',
    status: 'completed',
    module: 'OMS',
  },
  {
    title: 'TPOS & Service Stations',
    description:
      'Staff place orders from a tablet and keep kitchen, bar, and kiosk teams aligned on one queue.',
    date: 'Nov 2025',
    version: 'v1.1.0',
    status: 'completed',
    module: 'OMS',
  },
  {
    title: 'Guest Ordering & Payment',
    description:
      'Guests scan, browse, order, pay, and follow their service journey from their own phones.',
    date: 'Oct 2025',
    version: 'v1.0.0',
    status: 'completed',
    module: 'Customer App',
  },
  {
    title: 'Advanced Analytics Dashboard',
    description:
      'Deep insights into sales trends, customer behavior, and operational efficiency.',
    date: 'Q4 2026',
    version: 'v1.7.0',
    status: 'upcoming',
    module: 'Admin Portal',
  },
  {
    title: 'Loyalty & Rewards Program',
    description:
      'Built-in customer loyalty system with points, rewards, and personalized offers.',
    date: 'Q1 2027',
    version: 'v1.8.0',
    status: 'upcoming',
    module: 'Customer App',
  },
  {
    title: 'AI-Powered Demand Forecasting',
    description:
      'Predict busy periods and optimize staffing and inventory accordingly.',
    date: 'Q2 2027',
    version: 'v2.0.0',
    status: 'planned',
    module: 'Analytics',
  },
  {
    title: 'Multi-language Support',
    description:
      'Support for multiple languages to serve diverse customer bases.',
    date: 'Q3 2027',
    version: 'v2.1.0',
    status: 'planned',
    module: 'Platform',
  },
];

export const roadmapCounts = {
  shipped: roadmapItems.filter((item) => item.status === 'completed').length,
  upcoming: roadmapItems.filter((item) => item.status === 'upcoming').length,
  planned: roadmapItems.filter((item) => item.status === 'planned').length,
};
