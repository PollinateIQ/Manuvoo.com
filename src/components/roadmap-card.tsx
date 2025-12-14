"use client";

import { useState } from "react";
import {
  Store,
  Clock,
  Smartphone,
  CheckCircle2,
  Construction,
  CircleDashed,
  ArrowRight,
  Zap,
  Tag,
  Bug,
  Sparkles,
  Info,
  BarChart3,
  Receipt,
  ChefHat,
  Layout,
  Boxes,
  UserCog,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { cn } from "@/lib/cn";

export type Category = "Mobile App" | "OMS" | "Admin Portal";
export type Status = "Live" | "In Progress" | "Planned";
export type FeatureType = "New Feature" | "Enhancement" | "Bug Fix";
export type PricingType = "Included" | "Add-on" | "Free";

export interface RoadmapCardProps {
  title: string;
  description: string;
  category: Category;
  status: Status;
  date?: string;
  version?: string;
  details?: string;
  featureType?: FeatureType;
  pricingType?: PricingType;
  className?: string;
  // If provided, clicking the card will just use this href instead of opening modal (for navigation scenarios if needed)
  href?: string; 
  // Icon name override if category isn't enough
  iconName?: string;
}

const categoryIcons: Record<Category, React.ElementType> = {
  "Mobile App": Smartphone,
  "OMS": Clock,
  "Admin Portal": Store,
};

// Map string names to actual components to avoid passing functions from Server Components
const iconMap: Record<string, React.ElementType> = {
  "Store": Store,
  "BarChart3": BarChart3,
  "Receipt": Receipt,
  "ChefHat": ChefHat,
  "Layout": Layout,
  "Boxes": Boxes,
  "UserCog": UserCog,
  "ShieldCheck": ShieldCheck,
  "Clock": Clock,
  "Smartphone": Smartphone,
  "Zap": Zap,
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

const featureTypeConfig: Record<FeatureType, { icon: React.ElementType; color: string }> = {
  "New Feature": { icon: Sparkles, color: "text-indigo-500" },
  "Enhancement": { icon: Zap, color: "text-yellow-500" },
  "Bug Fix": { icon: Bug, color: "text-red-500" },
};

export function RoadmapCard({
  title,
  description,
  category,
  status,
  date,
  version,
  details,
  featureType = "New Feature",
  pricingType = "Included",
  className,
  href,
  iconName,
}: RoadmapCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Resolve icon from name, or fallback to category default
  const Icon = (iconName && iconMap[iconName]) ? iconMap[iconName] : categoryIcons[category];
  const StatusIcon = statusConfig[status].icon;
  const FeatureIcon = featureTypeConfig[featureType].icon;

  const handleClick = () => {
    if (href) return; // Allow default link behavior if wrapped in Link, or handled externally
    setIsOpen(true);
  };

  const statusColor = statusConfig[status].color;
  const categoryColor = categoryColors[category];

  return (
    <>
      <Card 
        onClick={handleClick}
        className={cn(
          "group relative h-full overflow-hidden border-borderNeutral/60 transition-all hover:border-borderAccent/50 hover:shadow-lg cursor-pointer",
          className
        )}
      >
        <div className={cn("absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity")}>
          <Icon className="h-24 w-24 -mr-8 -mt-8" />
        </div>
        
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between gap-4 mb-3">
            <Badge variant="implemented" className={cn("border-0", categoryColor)}>
              {category}
            </Badge>
            {/* Mobile Only Status/Date - shown here for consistency with original design */}
            <div className="flex items-center gap-2 text-xs font-medium text-text2 sm:hidden">
              <span className={statusColor}>
                {status === "Live" ? date : status}
              </span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-text1 pr-8">
            {title}
          </h3>
        </CardHeader>
        
        <CardBody className="flex flex-col justify-between h-full">
          <p className="text-sm leading-relaxed text-text2 line-clamp-2 mb-4">
            {description}
          </p>
          
          <div className="flex items-center justify-between mt-auto pt-2 border-t border-borderNeutral/30">
            <div className="flex items-center gap-2 text-xs text-text3">
               <FeatureIcon className={cn("h-3.5 w-3.5", featureTypeConfig[featureType].color)} />
               <span>{featureType}</span>
            </div>
            
            <div className="flex items-center text-xs font-medium text-accent1 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
               Details <ArrowRight className="ml-1 h-3 w-3" />
            </div>
          </div>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className="max-w-3xl">
         <div className="relative flex flex-col sm:flex-row min-h-[400px]">
            {/* Left Side: Visual / Brand */}
            <div className={cn("relative w-full sm:w-1/3 flex items-center justify-center p-8 bg-gradient-to-br from-surface2 to-surface1 border-b sm:border-b-0 sm:border-r border-borderNeutral overflow-hidden")}>
                {/* Background decorative glow */}
                <div className={cn("absolute inset-0 opacity-20 bg-gradient-to-br from-transparent via-transparent to-current", categoryColor.replace("text-", "text-opacity-20 "))} />
                
                <div className="relative z-10 flex flex-col items-center text-center gap-6">
                   <div className={cn("flex h-20 w-20 items-center justify-center rounded-2xl bg-surface1 border border-borderNeutral shadow-lg", categoryColor)}>
                      <Icon className="h-10 w-10" />
                   </div>
                   <div className="space-y-2">
                      <Badge variant="implemented" className={cn("border-0", categoryColor)}>
                        {category}
                      </Badge>
                      <Badge variant="implemented" className="flex items-center gap-1 mx-auto w-fit">
                           <StatusIcon className={cn("h-3 w-3", statusColor)} />
                           {status}
                      </Badge>
                   </div>
                </div>
            </div>
            
            {/* Right Side: Content */}
            <div className="flex-1 p-6 sm:p-8 flex flex-col">
                <div className="mb-6">
                    <div className="flex items-center gap-2 text-xs font-medium text-text3 mb-2 uppercase tracking-wider">
                       {featureTypeConfig[featureType].icon && <FeatureIcon className={cn("h-4 w-4", featureTypeConfig[featureType].color)} />}
                       {featureType}
                    </div>
                    <h2 className="text-2xl font-bold text-text1 mb-2">{title}</h2>
                    {version && <span className="text-xs font-mono px-2 py-1 rounded-md bg-surface2 text-text2 border border-borderNeutral">{version}</span>}
                </div>

                <div className="flex-1 space-y-6">
                   <div>
                      <h3 className="text-sm font-semibold text-text1 mb-2 flex items-center gap-2">
                        <Info className="h-4 w-4 text-accent1" />
                        Overview
                      </h3>
                      <p className="text-base leading-relaxed text-text2">
                        {details || description}
                      </p>
                   </div>

                   <div className="grid grid-cols-2 gap-4 pt-4 mt-auto">
                      <div className="rounded-xl border border-borderNeutral bg-surface2/30 p-4 transition-colors hover:bg-surface2/50">
                         <div className="text-xs text-text3 mb-1">Availability</div>
                         <div className="text-sm font-medium text-text1 flex items-center gap-2">
                            <Tag className="h-4 w-4 text-emerald-500" />
                            {pricingType}
                         </div>
                      </div>
                       <div className="rounded-xl border border-borderNeutral bg-surface2/30 p-4 transition-colors hover:bg-surface2/50">
                            <div className="text-xs text-text3 mb-1">Released</div>
                            <div className="text-sm font-medium text-text1">
                               {date || "TBA"}
                            </div>
                         </div>
                   </div>
                </div>

                <div className="mt-8 flex justify-end border-t border-borderNeutral pt-4">
                   <button 
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-medium text-text2 hover:text-text1 px-4 py-2 rounded-lg hover:bg-surface2 transition-colors"
                   >
                      Close
                   </button>
                </div>
            </div>
         </div>
      </Modal>
    </>
  );
}
