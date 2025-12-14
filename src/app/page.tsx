import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  CreditCard,
  Layout,
  Smartphone,
  Store,
  Users,
  ShieldCheck,
  ChefHat,
  Receipt,
  UserCog,
  Boxes,
  Zap,
  TrendingUp,
} from "lucide-react";

import { ParallaxCard } from "@/components/motion/parallax";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ScrollyHeroSection } from "@/components/site/hero-suite";
import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";
import { OutcomesSection } from "@/components/site/outcomes-section";
import { HowItWorksSection } from "@/components/site/how-it-works-section";
import { TestimonialsSection } from "@/components/site/testimonials-section";
import { FAQSection } from "@/components/site/faq-section";
import { CTASection } from "@/components/site/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { cn } from "@/lib/cn";
import { RoadmapCard, type Category } from "@/components/roadmap-card";

export default function Home() {

  const suite = [
    {
      title: "Tenant Admin Portal",
      description:
        "Where owners and managers configure tenants, menus, tables, staff, and inventory.",
      category: "Admin Portal" as Category,
      href: "/roadmap",
      details: "The command center for your business. Manage everything from menu engineering to staff permissions in one place.",
    },
    {
      title: "ManuvooOMS",
      description:
        "The operations layer: stations, routing, and live status-driven fulfillment for service.",
      category: "OMS" as Category,
      href: "/roadmap",
      details: "Real-time routing for every order. Ensure drinks go to the bar and food goes to the kitchen, instantly.",
    },
    {
      title: "Customer Ordering App",
      description:
        "The guest experience: scan → browse → order → track → pay → invoices.",
      category: "Mobile App" as Category,
      href: "/roadmap",
      details: "A frictionless ordering experience for guests. No app download needed—just scan and order.",
    },
  ];

  const howItWorks = [
    {
      title: "Set up your business",
      description: "Add your profile, locations, branding, and settings.",
      icon: Store,
    },
    {
      title: "Create your menu",
      description: "Build categories, items, images, and recipes/ingredients.",
      icon: ChefHat,
    },
    {
      title: "Run service",
      description: "Manage tables + QR, orders, bills, and payments in one flow.",
      icon: Receipt,
    },
    {
      title: "Control stock",
      description: "Track inventory, record receiving and waste, export data.",
      icon: Boxes,
    },
    {
      title: "Manage your team",
      description: "Add staff, manage activation, and view schedules.",
      icon: Users,
    },
  ];

  const implementedModules = [
    { 
      name: "Multi-tenant access", 
      iconName: "Store", 
      category: "Admin Portal" as Category,
      description: "Manage multiple brands and locations from a single login.",
      details: "Switch between venues instantly. Centralized reporting for groups."
    },
    { 
      name: "Dashboard (KPIs)", 
      iconName: "BarChart3", 
      category: "Admin Portal" as Category,
      description: "Real-time insights into sales, orders, and operational performance.",
      details: "Track gross sales, active tables, and labor costs live."
    },
    { 
      name: "Orders & Transactions", 
      iconName: "Receipt", 
      category: "OMS" as Category,
      description: "Full audit trail of every order, modification, and payment.",
      details: "Never lose track of a ticket. Searchable history for all transactions."
    },
    { 
      name: "Menu Builder", 
      iconName: "ChefHat", 
      category: "Admin Portal" as Category,
      description: "Drag-and-drop menu creation with modifier support.",
      details: "Update prices and availability instantly across all devices."
    },
    { 
      name: "Tables + QR", 
      iconName: "Layout", 
      category: "Mobile App" as Category,
      description: "Generate unique QR codes for every table and zone.",
      details: "Link orders to physical locations automatically."
    },
    { 
      name: "Inventory Management", 
      iconName: "Boxes", 
      category: "Admin Portal" as Category,
      description: "Track stock levels, recipes, and ingredient usage.",
      details: "Automatic depletion based on sales. Low stock alerts."
    },
    { 
      name: "Staff Management", 
      iconName: "UserCog", 
      category: "Admin Portal" as Category,
      description: "Role-based access control and shift scheduling.",
      details: "Secure your data by giving staff only the access they need."
    },
    { 
      name: "Tenant profile", 
      iconName: "Store", 
      category: "Admin Portal" as Category,
      description: "Customize your brand identity and venue settings.",
      details: "Upload logos, set operating hours, and configure tax rates."
    },
    { 
      name: "Authentication", 
      iconName: "ShieldCheck", 
      category: "Admin Portal" as Category,
      description: "Secure login with email/password and social providers.",
      details: "Enterprise-grade security for your business data."
    },
  ];

  const faq = [
    {
      id: "setup-time",
      question: "How long does setup take?",
      answer:
        "Typically minutes to create your tenant, menu, and tables — then generate QR codes and run service.",
    },
    {
      id: "hardware",
      question: "Do I need special hardware?",
      answer:
        "No. QR-first experiences work with standard smartphones, and your ops team runs the platform in the browser.",
    },
    {
      id: "multi-venue",
      question: "Can I run multiple venues?",
      answer:
        "Yes. Multi-tenant access is designed for teams operating across locations and brands.",
    },
    {
      id: "refunds-splits",
      question: "Do you support refunds, splits, and verification workflows?",
      answer:
        "These workflows are supported at the platform/service layer and are rolling into the UI based on the roadmap.",
    },
    {
      id: "pricing",
      question: "Do you show pricing publicly?",
      answer:
        "Not currently. We scope based on your operation and rollout requirements.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <ScrollyHeroSection />

      {/* Outcomes */}
      <OutcomesSection />

      {/* Product suite */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="Product suite"
            title="One platform, three layers."
            description="A unified suite: ops visibility, configuration, and a guest experience that plugs into the same backend flow."
          />
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {suite.map((s) => (
            <StaggerItem key={s.title}>
              <ParallaxCard strength={10} className="h-full">
                <RoadmapCard 
                  title={s.title}
                  description={s.description}
                  category={s.category}
                  status="Live"
                  href={s.href}
                  details={s.details}
                  featureType="New Feature"
                  className="h-full bg-surface1/50 backdrop-blur"
                />
              </ParallaxCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* How it works */}
      <HowItWorksSection />

      {/* Modules highlight */}
      <Section>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Modules"
            title="Implemented today."
            description="A clean catalog of what’s live in the tenant portal right now."
          />
          <Link href="/roadmap">
            <Button variant="secondary" size="sm">
              View full roadmap
            </Button>
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {implementedModules.map((mod) => (
            <RoadmapCard
              key={mod.name}
              title={mod.name}
              description={mod.description}
              category={mod.category}
              status="Live"
              iconName={mod.iconName}
              details={mod.details}
              featureType="New Feature"
            />
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
