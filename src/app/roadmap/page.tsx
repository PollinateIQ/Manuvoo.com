import type { Metadata } from "next";
import {
  Store,
  Clock,
  Smartphone,
  CheckCircle2,
  Rocket,
  Construction,
  CircleDashed,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";
import { FeedbackForm } from "@/components/site/forms/feedback-form";
import { cn } from "@/lib/cn";
import { RoadmapCard, type Category, type Status, type FeatureType, type PricingType } from "@/components/roadmap-card";

export const metadata: Metadata = {
  title: "Product Roadmap",
  description:
    "A timeline of recent updates, new features, and what's coming next across the Manuvoo platform.",
};

interface Update {
  date: string;
  title: string;
  description: string;
  category: Category;
  status: Status;
  version?: string;
  details?: string;
  featureType?: FeatureType;
  pricingType?: PricingType;
}

const updates: Update[] = [
  // Live / Recent (Top of the list = Newest)
  {
    date: "Dec 14, 2025",
    title: "Multi-tenant Access & Switching",
    description: "Seamlessly switch between different restaurant brands and locations with a single login.",
    details: "This update introduces a global user context that allows operators with multiple brands or locations to switch contexts instantly without logging out. Permissions are scoped per tenant, ensuring data isolation while maintaining a unified experience for multi-unit managers.",
    category: "Admin Portal",
    status: "Live",
    version: "v1.2.0",
    featureType: "New Feature",
    pricingType: "Included",
  },
  {
    date: "Dec 10, 2025",
    title: "Orders & Transactions Hub",
    description: "Centralized view for all live orders, bill status, and payment tracking in real-time.",
    details: "The Orders Hub is the new nerve center for operations. It aggregates data from all input sources (QR, POS, Waiter App) into a single live feed. Managers can void items, split bills, and audit payment trails in real-time.",
    category: "OMS",
    status: "Live",
    version: "v1.1.5",
    featureType: "New Feature",
    pricingType: "Included",
  },
  {
    date: "Dec 05, 2025",
    title: "Customer Ordering App Launch",
    description: "The guest experience is live: Scan QR, browse menu, order, and track status.",
    details: "Our first public release of the guest ordering experience. Supports dynamic menu rendering based on time of day, allergen filtering, and instant Apple Pay/Google Pay integration. No app download required.",
    category: "Mobile App",
    status: "Live",
    version: "v1.0.0",
    featureType: "New Feature",
    pricingType: "Included",
  },
  {
    date: "Nov 28, 2025",
    title: "Menu Builder & Recipe Management",
    description: "Complete control over categories, items, modifiers, and ingredient tracking.",
    details: "A complete overhaul of the menu management system. Now supports nested modifier groups (e.g., 'Choose Side' -> 'Choose Sauce'), inventory linking for automatic countdowns, and bulk price updates.",
    category: "Admin Portal",
    status: "Live",
    version: "v1.1.0",
    featureType: "Enhancement",
    pricingType: "Included",
  },
  {
    date: "Nov 15, 2025",
    title: "Staff Management & Schedules",
    description: "Onboard staff, assign roles, and manage shifts directly from the portal.",
    details: "Role-based access control (RBAC) is now fully live. You can create custom roles (e.g., 'Head Chef', 'Runner') and assign specific permissions. Also includes a basic scheduling view to track who is working when.",
    category: "Admin Portal",
    status: "Live",
    version: "v1.0.5",
    featureType: "New Feature",
    pricingType: "Included",
  },
  
  // Upcoming / In Progress
  {
    date: "Coming Soon",
    title: "Kitchen Display System (KDS) V2",
    description: "Enhanced routing logic for multiple stations and expo view.",
    details: "V2 of our KDS introduces 'Expo Mode' for the pass, allowing expediters to coordinate items from different stations (e.g., Bar vs. Kitchen). Includes bump bars support and color-coded timers for late tickets.",
    category: "OMS",
    status: "In Progress",
    featureType: "Enhancement",
    pricingType: "Add-on",
  },
  {
    date: "Coming Soon",
    title: "Sales & Analytics Dashboard",
    description: "Deep dive into revenue, best sellers, and peak hours with visual charts.",
    details: "Visualizing your data: Hourly heatmaps for sales, product mix analysis (PMix), and server performance metrics. Exportable to CSV/PDF for accounting.",
    category: "Admin Portal",
    status: "In Progress",
    featureType: "New Feature",
    pricingType: "Included",
  },
  {
    date: "Planned",
    title: "Loyalty & Rewards Program",
    description: "Points accumulation and redemption flows for returning guests.",
    details: "A comprehensive loyalty engine allowing points per dollar spent. Guests can redeem points for specific items or dollar discounts. Includes a CRM component to view guest visit history.",
    category: "Mobile App",
    status: "Planned",
    featureType: "New Feature",
    pricingType: "Add-on",
  },
];

const categoryIcons: Record<Category, React.ElementType> = {
  "Mobile App": Smartphone,
  "OMS": Clock,
  "Admin Portal": Store,
};

const categoryColors: Record<Category, string> = {
  "Mobile App": "text-blue-500 bg-blue-500/10 border-blue-500/20",
  "OMS": "text-orange-500 bg-orange-500/10 border-orange-500/20",
  "Admin Portal": "text-purple-500 bg-purple-500/10 border-purple-500/20",
};

const statusConfig: Record<Status, { icon: React.ElementType; color: string; label: string }> = {
  "Live": { icon: CheckCircle2, color: "text-green-500", label: "Released" },
  "In Progress": { icon: Construction, color: "text-amber-500", label: "In Progress" },
  "Planned": { icon: CircleDashed, color: "text-slate-400", label: "Planned" },
};

export default function RoadmapPage() {
  return (
    <>
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="Product Updates"
            title="The Manuvoo Roadmap."
            description="Track our progress across the entire suite. New features, improvements, and what's coming next."
          />
        </Reveal>
      </Section>

      <Section variant="muted" className="relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle at 50% 0, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="space-y-12">
            {updates.map((update, index) => {
              const Icon = categoryIcons[update.category];
              const StatusIcon = statusConfig[update.status].icon;
              const isLast = index === updates.length - 1;

              return (
                <div key={index} className="relative pl-8 sm:pl-0">
                  {/* Timeline Line (Desktop centered, Mobile left) */}
                  <div className="absolute left-8 top-0 h-full w-px -translate-x-1/2 bg-borderNeutral sm:left-1/2 hidden sm:block"></div>
                  {!isLast && (
                     <div className="absolute left-0 top-8 bottom-[-48px] w-px bg-borderNeutral sm:hidden ml-[19px]"></div>
                  )}

                  <div className={cn(
                    "flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between",
                    index % 2 === 0 ? "sm:flex-row-reverse" : ""
                  )}>
                    
                    {/* Date / Status Side (Desktop) */}
                    <div className={cn(
                      "flex items-center gap-4 sm:w-[45%] hidden sm:flex",
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    )}>
                      <div className={cn(
                        "flex items-center gap-2 text-sm font-medium",
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      )}>
                         <span className={cn("flex items-center gap-1.5", statusConfig[update.status].color)}>
                            <StatusIcon className="h-4 w-4" />
                            {update.status === "Live" ? update.date : update.status}
                         </span>
                         {update.status === "Live" && update.version && (
                           <span className="rounded-full bg-surface2 px-2 py-0.5 text-xs text-text2 border border-borderNeutral">
                             {update.version}
                           </span>
                         )}
                      </div>
                    </div>

                    {/* Center Point */}
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-surface2 bg-surface1 shadow-sm sm:left-1/2 sm:-translate-x-1/2 z-10">
                       <Icon className={cn("h-5 w-5", categoryColors[update.category].split(' ')[0])} />
                    </div>

                    {/* Content Card */}
                    <div className="w-full sm:w-[45%]">
                      <Reveal delay={index * 0.1}>
                        <RoadmapCard 
                          {...update}
                        />
                      </Reveal>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
             <div className="inline-flex items-center gap-2 rounded-full border border-borderNeutral bg-surface1 px-4 py-2 text-sm text-text2">
                <Rocket className="h-4 w-4 text-accent1" />
                <span>More updates coming every week.</span>
             </div>
          </div>
        </div>
      </Section>

      {/* Suggestion / Feedback Section */}
      <Section className="border-t border-borderNeutral/50">
        <Reveal>
          <div className="mx-auto max-w-2xl">
             <FeedbackForm />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
