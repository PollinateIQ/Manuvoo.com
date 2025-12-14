"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

const AccordionContext = React.createContext<{
  activeItem: string | undefined;
  setActiveItem: (id: string | undefined) => void;
}>({
  activeItem: undefined,
  setActiveItem: () => {},
});

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  type?: "single" | "multiple"; // currently only single supported
  collapsible?: boolean;
}

export function Accordion({ children, className, collapsible = true }: AccordionProps) {
  const [activeItem, setActiveItem] = React.useState<string | undefined>(undefined);

  const handleSetActive = (id: string | undefined) => {
    if (activeItem === id && collapsible) {
      setActiveItem(undefined);
    } else {
      setActiveItem(id);
    }
  };

  return (
    <AccordionContext.Provider
      value={{ activeItem, setActiveItem: handleSetActive }}
    >
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function AccordionItem({ children, value, className }: AccordionItemProps) {
  const { activeItem } = React.useContext(AccordionContext);
  const isOpen = activeItem === value;

  return (
    <div
      data-state={isOpen ? "open" : "closed"}
      className={cn("overflow-hidden", className)}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // @ts-ignore
          return React.cloneElement(child, { value, isOpen });
        }
        return child;
      })}
    </div>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  value?: string; // injected
  isOpen?: boolean; // injected
}

export function AccordionTrigger({
  children,
  className,
  value,
  isOpen,
}: AccordionTriggerProps) {
  const { setActiveItem } = React.useContext(AccordionContext);

  return (
    <button
      type="button"
      onClick={() => value && setActiveItem(value)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-medium transition-all [&[data-state=open]>svg]:rotate-180",
        className
      )}
      data-state={isOpen ? "open" : "closed"}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean; // injected
}

export function AccordionContent({
  children,
  className,
  isOpen,
}: AccordionContentProps) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <div className={cn("pb-4 pt-0", className)}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
