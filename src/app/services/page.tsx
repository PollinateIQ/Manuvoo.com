import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  Settings,
  Smartphone,
  Users,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  ChefHat,
  Receipt,
  Boxes,
  Store,
  CreditCard,
  Lock,
  Sparkles,
  BarChart3,
  Globe,
  Layout,
  UserCog
} from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { ContactForm } from "@/components/site/forms/contact-form";
import { RoadmapCard, type Category, type Status, type FeatureType, type PricingType } from "@/components/roadmap-card";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Services | Manuvoo",
  description:
    "Onboarding, rollout, and training to get hospitality teams live with Manuvoo.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Onboarding & Setup",
      description:
        "We handle the heavy lifting: tenant creation, menu digitization, table mapping, and initial configuration to get you service-ready in record time.",
      icon: Rocket,
    },
    {
      title: "Operations Rollout",
      description:
        "Strategic deployment of stations, routing logic, and status-driven workflows for your kitchen, bar, and floor teams.",
      icon: Settings,
    },
    {
      title: "Customer Experience",
      description:
        "Enable frictionless guest journeys with QR strategy, ordering flow optimization, and payment integration.",
      icon: Smartphone,
    },
    {
      title: "Training & Empowerment",
      description:
        "Comprehensive hands-on training for managers and staff, establishing repeatable operating patterns and confidence.",
      icon: Users,
    },
  ];

  const benefits = [
    {
      title: "Increase Revenue",
      description: "Faster ordering and smoother table turnover lead to higher sales volume.",
      icon: TrendingUp,
    },
    {
      title: "Reduce Friction",
      description: "A central place to manage menu, tables, orders, bills, payments, and inventory.",
      icon: Zap,
    },
    {
      title: "Improve Control",
      description: "Track operational KPIs, stock movements, and staff activity in real-time.",
      icon: ShieldCheck,
    },
  ];

  const process = [
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
  ];

  // Converted to RoadmapCard props format
  const modulesSummary: {
    title: string;
    description: string;
    category: Category;
    status: Status;
    featureType: FeatureType;
    pricingType?: PricingType;
    details?: string;
    iconName?: string;
  }[] = [
    { 
      title: "Orders & Transactions", 
      description: "Full audit trail of every order, modification, and payment.",
      category: "OMS",
      status: "Live",
      featureType: "New Feature",
      pricingType: "Included",
      details: "Centralized hub for all order types. Filter by status, time, or table.",
      iconName: "Receipt"
    },
    { 
      title: "Menu Builder", 
      description: "Drag-and-drop menu creation with modifier support.",
      category: "Admin Portal",
      status: "Live",
      featureType: "Enhancement",
      pricingType: "Included",
      details: "Create categories, items, and modifiers. Upload images and set availability.",
      iconName: "ChefHat"
    },
    { 
      title: "Tables + QR", 
      description: "Generate unique QR codes for every table and zone.",
      category: "Mobile App",
      status: "Live",
      featureType: "New Feature",
      pricingType: "Included",
      details: "Map your floor plan and generate instant ordering QRs.",
      iconName: "Layout"
    },
    { 
      title: "Inventory Management", 
      description: "Track stock levels, recipes, and ingredient usage.",
      category: "Admin Portal",
      status: "Live",
      featureType: "New Feature",
      pricingType: "Included",
      details: "Manage suppliers, receiving logs, and waste tracking.",
      iconName: "Boxes"
    },
    { 
      title: "Sales Dashboards", 
      description: "Real-time insights into sales and performance.",
      category: "Admin Portal",
      status: "In Progress",
      featureType: "New Feature",
      pricingType: "Included",
      details: "Visual analytics for revenue, product mix, and peak hours.",
      iconName: "BarChart3"
    },
    { 
      title: "Suppliers UI", 
      description: "Manage vendor relationships and purchasing.",
      category: "Admin Portal",
      status: "In Progress",
      featureType: "New Feature",
      pricingType: "Included",
      details: "Centralized supplier database and purchase order workflows.",
      iconName: "Store"
    },
    { 
      title: "Refunds & Splits", 
      description: "Advanced payment workflows for complex tables.",
      category: "OMS",
      status: "Planned", // Service ready -> Planned/In Progress for UI
      featureType: "Enhancement",
      pricingType: "Included",
      details: "UI for splitting bills by seat or item, and processing refunds.",
      iconName: "CreditCard" // Using generic or Receipt
    },
    { 
      title: "Roles & Permissions", 
      description: "Granular access control for your team.",
      category: "Admin Portal",
      status: "Planned",
      featureType: "Enhancement",
      pricingType: "Included",
      details: "Define custom roles and restrict access to sensitive modules.",
      iconName: "UserCog"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-bg1">
        {/* Ambient background glow - matched to Home/About */}
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent2/10 blur-[100px]" />
           <div className="absolute top-20 -left-20 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[80px]" />
           <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-surface2/30 blur-[120px]" />
        </div>

        <Section className="relative pt-24 pb-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <SectionHeader
                eyebrow="Services"
                title="Get onboarded fast, then scale with confidence."
                description="We help hospitality teams roll out Manuvoo with clear operating patterns — from tables and stations to inventory and training."
              />
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Book a demo
                  </Button>
                </Link>
                <Link href="/roadmap">
                  <Button variant="secondary" size="lg">
                    View Roadmap
                  </Button>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2} className="relative">
               {/* Hero Image */}
               <div className="relative rounded-2xl overflow-hidden border border-borderNeutral shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent2/40 via-transparent to-primary/20 pointer-events-none z-10 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg1/40 to-transparent pointer-events-none z-10" />
                  
                  <Image 
                    src="/hero/service.jpg"
                    alt="Manuvoo Services" 
                    width={800} 
                    height={600}
                    className="w-full h-auto object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
               </div>
            </Reveal>
          </div>
        </Section>
      </div>

      {/* Services Grid */}
      <Section variant="muted" className="relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle at 50% 0, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>
        
         <Reveal>
          <SectionHeader
            eyebrow="Our Approach"
            title="Comprehensive Support"
            description="We don't just give you software; we partner with you to ensure your success."
            className="mx-auto text-center mb-12 relative z-10"
          />
        </Reveal>
        <Stagger className="grid gap-6 md:grid-cols-2 relative z-10">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <Card className="h-full border-2 border-transparent hover:border-surface2 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-2xl bg-surface2 flex items-center justify-center text-primary mb-4">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-text1">
                    {s.title}
                  </h3>
                </CardHeader>
                <CardBody>
                  <p className="text-base leading-relaxed text-text2">{s.description}</p>
                </CardBody>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Benefits Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <Reveal>
             <SectionHeader
               eyebrow="Why Manuvoo"
               title="Outcomes that matter."
               description="Our platform is designed to drive real business results, not just digitize existing problems."
             />
             <div className="mt-8 space-y-6">
                {benefits.map((b) => (
                   <div key={b.title} className="flex gap-4 p-4 rounded-2xl hover:bg-surface1 transition-colors border border-transparent hover:border-borderNeutral">
                      <div className="flex-shrink-0">
                         <div className="h-12 w-12 rounded-full bg-surface2 flex items-center justify-center text-accent2 shadow-sm">
                            <b.icon className="h-6 w-6" />
                         </div>
                      </div>
                      <div>
                         <h4 className="text-lg font-semibold text-text1">{b.title}</h4>
                         <p className="text-text2 mt-1 leading-relaxed">{b.description}</p>
                      </div>
                   </div>
                ))}
             </div>
           </Reveal>
           <Reveal delay={0.2}>
              <div className="bg-surface1 rounded-3xl p-8 border border-borderNeutral shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-accent2/5 rounded-full blur-3xl pointer-events-none"></div>
                 <h3 className="text-xl font-bold text-text1 mb-8 flex items-center gap-2">
                   <div className="h-8 w-1 rounded-full bg-accent2"></div>
                   How it works
                 </h3>
                 <div className="space-y-10 relative">
                    {/* Connecting line */}
                    <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-borderNeutral/50"></div>
                    
                    {process.map((p, i) => (
                       <div key={p.title} className="relative pl-12">
                          <div className="absolute left-0 top-0 h-10 w-10 rounded-full bg-surface2 border-4 border-surface1 flex items-center justify-center text-text2 z-10 shadow-sm">
                             <p.icon className="h-5 w-5" />
                          </div>
                          <h4 className="text-lg font-semibold text-text1 leading-none mb-2 pt-2">{p.title}</h4>
                          <p className="text-text2 text-sm leading-relaxed">{p.description}</p>
                       </div>
                    ))}
                 </div>
              </div>
           </Reveal>
        </div>
      </Section>

      {/* Subscription & Pricing Strategy */}
      <Section variant="muted" className="border-y border-borderNeutral/50">
        <Reveal>
           <SectionHeader 
              eyebrow="Flexibility"
              title="Subscriptions & Access"
              description="A transparent model designed to grow with your business, from early adoption to enterprise scale."
              className="mx-auto text-center mb-12"
           />
        </Reveal>
        
        <Stagger className="grid gap-8 md:grid-cols-3">
           <StaggerItem>
              <Card className="h-full border-t-4 border-t-accent1 hover:shadow-lg transition-shadow">
                 <CardHeader>
                    <CreditCard className="h-10 w-10 text-accent1 mb-4" />
                    <h3 className="text-xl font-bold text-text1">Pay-As-You-Use</h3>
                    <Badge variant="implemented" className="mt-2 w-fit">Flexible</Badge>
                 </CardHeader>
                 <CardBody>
                    <p className="text-text2 mb-4 leading-relaxed">
                       Ideal for getting started. Charged per customer transaction.
                    </p>
                    <ul className="space-y-2 text-sm text-text2">
                       <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-accent1 shrink-0" />
                          <span>Tenant can absorb cost or pass to customer</span>
                       </li>
                       <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-accent1 shrink-0" />
                          <span>No massive upfront license fees</span>
                       </li>
                    </ul>
                 </CardBody>
              </Card>
           </StaggerItem>

           <StaggerItem>
              <Card className="h-full border-t-4 border-t-text1 hover:shadow-lg transition-shadow bg-surface2/30">
                 <CardHeader>
                    <Lock className="h-10 w-10 text-text1 mb-4" />
                    <h3 className="text-xl font-bold text-text1">Advanced Features</h3>
                    <Badge variant="serviceReady" className="mt-2 w-fit">Premium Tiers</Badge>
                 </CardHeader>
                 <CardBody>
                    <p className="text-text2 mb-4 leading-relaxed">
                       Power-user tools that utilize significant database bandwidth.
                    </p>
                    <ul className="space-y-2 text-sm text-text2">
                       <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-text1 shrink-0" />
                          <span>Advanced Analytics & Reporting</span>
                       </li>
                       <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-text1 shrink-0" />
                          <span>Deep Inventory Services</span>
                       </li>
                       <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-text1 shrink-0" />
                          <span>Multi-location aggregation</span>
                       </li>
                    </ul>
                 </CardBody>
              </Card>
           </StaggerItem>

           <StaggerItem>
              <Card className="h-full border-t-4 border-t-accent2 hover:shadow-lg transition-shadow relative overflow-hidden">
                 <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent2/10 rounded-full blur-2xl"></div>
                 <CardHeader>
                    <Sparkles className="h-10 w-10 text-accent2 mb-4" />
                    <h3 className="text-xl font-bold text-text1">Insider Program</h3>
                    <Badge variant="serviceReady" className="mt-2 w-fit">Early Access</Badge>
                 </CardHeader>
                 <CardBody>
                    <p className="text-text2 mb-4 leading-relaxed">
                       Join our early adopter circle to preview features before anyone else.
                    </p>
                    <ul className="space-y-2 text-sm text-text2">
                       <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-accent2 shrink-0" />
                          <span>Test new features for extended periods</span>
                       </li>
                       <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-accent2 shrink-0" />
                          <span>Provide feedback to shape the roadmap</span>
                       </li>
                       <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-accent2 shrink-0" />
                          <span>Priority support channels</span>
                       </li>
                    </ul>
                 </CardBody>
              </Card>
           </StaggerItem>
        </Stagger>
      </Section>

      {/* Modules Section */}
      <Section className="relative">
        <Reveal>
          <SectionHeader
            eyebrow="What’s included"
            title="Truth-labeled modules."
            description="A transparent, consistent look at what’s live today and what’s in the pipeline."
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modulesSummary.map((m) => (
            <StaggerItem key={m.title}>
               <RoadmapCard 
                  title={m.title}
                  description={m.description}
                  category={m.category}
                  status={m.status}
                  featureType={m.featureType}
                  pricingType={m.pricingType}
                  details={m.details}
                  iconName={m.iconName}
                  className="bg-surface1"
               />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12 text-center">
          <Link href="/roadmap">
            <Reveal>
              <Button variant="secondary" size="lg">View full roadmap</Button>
            </Reveal>
          </Link>
        </div>
      </Section>

      {/* Booking Form Section */}
      <Section variant="muted" className="relative overflow-hidden py-24">
         {/* Background decoration to look "fresh and modern" */}
         <div className="absolute inset-0 bg-gradient-to-br from-bg1 via-surface1 to-accent2/5 pointer-events-none" />
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold tracking-tight text-text1 sm:text-4xl mb-4">
                  Ready to optimize your service?
               </h2>
               <p className="text-lg text-text2 max-w-2xl mx-auto">
                  Book a demo or join the Insider Program. We’ll map Manuvoo to your venue’s specific flow.
               </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
             <div className="bg-surface1 rounded-2xl shadow-2xl border border-borderNeutral overflow-hidden">
                <div className="grid md:grid-cols-5">
                   <div className="md:col-span-2 bg-surface2/50 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-borderNeutral">
                      <div>
                         <h3 className="font-semibold text-text1 mb-2">What happens next?</h3>
                         <ul className="space-y-4 text-sm text-text2 mt-6">
                            <li className="flex gap-3">
                               <div className="h-6 w-6 rounded-full bg-accent2/10 flex items-center justify-center text-accent2 shrink-0">1</div>
                               <span>We'll schedule a brief 15-min discovery call.</span>
                            </li>
                            <li className="flex gap-3">
                               <div className="h-6 w-6 rounded-full bg-accent2/10 flex items-center justify-center text-accent2 shrink-0">2</div>
                               <span>We map your floor plan and menu together.</span>
                            </li>
                            <li className="flex gap-3">
                               <div className="h-6 w-6 rounded-full bg-accent2/10 flex items-center justify-center text-accent2 shrink-0">3</div>
                               <span>You get access to the Insider Program pilot.</span>
                            </li>
                         </ul>
                      </div>
                      <div className="mt-8 pt-8 border-t border-borderNeutral/50">
                         <p className="text-xs text-text3">Trusted by forward-thinking venues.</p>
                      </div>
                   </div>
                   <div className="md:col-span-3 p-8">
                      <ContactForm />
                   </div>
                </div>
             </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
