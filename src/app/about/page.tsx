import type { Metadata } from "next";
import Image from "next/image";
import {
  Users,
  Globe,
  Rocket,
  Zap,
  Smartphone,
  Leaf,
  TrendingUp,
  Quote,
  Layout,
  Database,
  Server,
  Layers,
  Heart,
  Briefcase
} from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Manuvoo",
  description: "The story, mission, and team behind the world's next leading hospitality platform.",
};

export default function AboutPage() {
  const founders = [
    {
      name: "Reginald Nkabinde",
      title: "Founder",
      role: "Product & Technology",
      bio: "Focusing on the development side, ensuring the platform architecture is robust, scalable, and cutting-edge.",
    },
    {
      name: "Solomon Ramafalo",
      title: "Founder",
      role: "Sales & Marketing",
      bio: "Driving the strategic growth, market penetration, and partnerships that bring Manuvoo to the world.",
    },
  ];

  return (
    <>
      {/* Hero Section with Blended Background */}
      <div className="relative overflow-hidden bg-bg1">
        {/* Ambient background glow for blending */}
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent2/10 blur-[100px]" />
           <div className="absolute top-20 -left-20 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[80px]" />
        </div>

        <Section className="relative pt-24 pb-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <SectionHeader
                eyebrow="About Manuvoo"
                title="Digitizing hospitality, one order at a time."
                description="We are on a mission to become the world's number one digital hospitality platform, driving efficiency, growth, and seamless experiences."
              />
               <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2 text-text2">
                    <Database className="h-5 w-5 text-accent2" />
                    <span>One Shared Database</span>
                  </div>
                  <div className="flex items-center gap-2 text-text2">
                    <Layers className="h-5 w-5 text-accent2" />
                    <span>Three Integrated Layers</span>
                  </div>
               </div>
            </Reveal>
            <Reveal delay={0.2} className="relative">
               {/* Hero Image / Composition */}
               <div className="relative rounded-2xl overflow-hidden border border-borderNeutral shadow-2xl group">
                  {/* Overlay for blending */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent2/40 via-transparent to-primary/20 pointer-events-none z-10 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg1/40 to-transparent pointer-events-none z-10" />
                  
                  <Image 
                    src="/hero/about2.jpg"
                    alt="Modern Hospitality Technology" 
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

      {/* The Story / Problem Section - flowing from hero */}
      <Section className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
           <Reveal>
            <div>
               <div className="flex items-center gap-2 mb-4">
                  <Badge variant="implemented" className="w-fit">The Story</Badge>
               </div>
              <h2 className="text-3xl font-bold tracking-tight text-text1 sm:text-4xl">
                Why we built Manuvoo
              </h2>
              <div className="mt-6 space-y-6 text-lg text-text2">
                <p>
                  The hospitality industry is tough. It's busy, fast-paced, and administration often eats into the time that should be spent on customers. We saw a gap where technology could step in not just to manage, but to understand the day-to-day needs of the business.
                </p>
                <p>
                  We created Manuvoo to bring efficiency to this chaos. By reducing paper usage and embracing smartphones, we're not just modernizing the process; we're empowering businesses to grow and helping customers be more money-conscious about their hospitality spending.
                </p>
                <p>
                  Our goal is simple: take care of the admin so you can focus on what matters most—your guests and your growth.
                </p>
              </div>
            </div>
          </Reveal>
           <Reveal delay={0.2}>
             <div className="grid gap-6 sm:grid-cols-2">
                <Card className="h-full bg-surface1/50 backdrop-blur-sm border-borderNeutral/50">
                  <CardHeader>
                    <Leaf className="h-8 w-8 text-accent2 mb-2" />
                    <h3 className="text-lg font-semibold text-text1">Eco-Conscious</h3>
                  </CardHeader>
                  <CardBody>
                    <p className="text-sm text-text2">Reducing paper waste through digital receipts and orders.</p>
                  </CardBody>
                </Card>
                <Card className="h-full bg-surface1/50 backdrop-blur-sm border-borderNeutral/50">
                  <CardHeader>
                    <Smartphone className="h-8 w-8 text-accent2 mb-2" />
                    <h3 className="text-lg font-semibold text-text1">Digital First</h3>
                  </CardHeader>
                  <CardBody>
                    <p className="text-sm text-text2">Leveraging the power of mobile technology for seamless interactions.</p>
                  </CardBody>
                </Card>
                <Card className="h-full bg-surface1/50 backdrop-blur-sm border-borderNeutral/50">
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-accent2 mb-2" />
                    <h3 className="text-lg font-semibold text-text1">Business Growth</h3>
                  </CardHeader>
                  <CardBody>
                     <p className="text-sm text-text2">Driving productivity and efficiency to help venues thrive.</p>
                  </CardBody>
                </Card>
                <Card className="h-full bg-surface1/50 backdrop-blur-sm border-borderNeutral/50">
                   <CardHeader>
                    <Zap className="h-8 w-8 text-accent2 mb-2" />
                    <h3 className="text-lg font-semibold text-text1">Efficiency</h3>
                  </CardHeader>
                  <CardBody>
                    <p className="text-sm text-text2">Streamlining operations from order processing to management.</p>
                  </CardBody>
                </Card>
             </div>
           </Reveal>
        </div>
      </Section>

      {/* Platform Architecture & Impact Section */}
      <Section className="relative bg-bg1">
          {/* Subtle gradient separator */}
         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-borderNeutral to-transparent" />
         
         <Reveal>
          <SectionHeader
            eyebrow="The Platform"
            title="An All-In-One PaaS Ecosystem"
            description="Manuvoo is more than just software; it's a Platform as a Service (PaaS) designed to disrupt the industry by creating genuine value for everyone involved."
            className="mx-auto text-center"
          />
        </Reveal>

        <Stagger className="mt-16 grid gap-8 md:grid-cols-3">
            <StaggerItem>
               <Card className="h-full border-t-4 border-t-accent2">
                  <CardHeader>
                     <Server className="h-10 w-10 text-text1 mb-4" />
                     <h3 className="text-xl font-bold text-text1">Unified Architecture</h3>
                  </CardHeader>
                  <CardBody>
                     <p className="text-text2">
                        Three powerful solutions (Tenant Admin, OMS, and Customer App) working in harmony on a single, shared database. This ensures real-time data consistency and eliminates silos.
                     </p>
                  </CardBody>
               </Card>
            </StaggerItem>
            <StaggerItem>
               <Card className="h-full border-t-4 border-t-primary">
                  <CardHeader>
                     <Heart className="h-10 w-10 text-text1 mb-4" />
                     <h3 className="text-xl font-bold text-text1">Social Impact</h3>
                  </CardHeader>
                  <CardBody>
                     <p className="text-text2">
                        We aren't just here for profit. We're building a platform that creates opportunities for freelancers, connects advertisers with audiences, and helps customers spend wisely.
                     </p>
                  </CardBody>
               </Card>
            </StaggerItem>
            <StaggerItem>
               <Card className="h-full border-t-4 border-t-accent2">
                  <CardHeader>
                     <Briefcase className="h-10 w-10 text-text1 mb-4" />
                     <h3 className="text-xl font-bold text-text1">Job Creation</h3>
                  </CardHeader>
                  <CardBody>
                     <p className="text-text2">
                        In a tough economy, Manuvoo aims to empower individuals to become admins and service providers within our ecosystem, fostering employment and skill development.
                     </p>
                  </CardBody>
               </Card>
            </StaggerItem>
        </Stagger>
      </Section>

      {/* Vision & Future Section */}
      <Section className="relative overflow-hidden">
         {/* Background decoration */}
         <div className="absolute inset-0 bg-gradient-to-b from-bg1 via-surface1/30 to-bg1 pointer-events-none" />

        <div className="relative z-10">
          <Reveal>
            <SectionHeader
              eyebrow="Our Vision"
              title="Beyond South Africa."
              description="We are starting with order processing, but our destination is a comprehensive global ecosystem."
            />
          </Reveal>
          
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Global Ambition",
                icon: Globe,
                description: "We aim to take Manuvoo into international markets, becoming the standard for digital hospitality worldwide.",
              },
              {
                title: "Full Integration",
                icon: Layout,
                description: "From food pickup and deliveries to integrating suppliers, OEMs, and vendors directly into the platform.",
              },
              {
                title: "Continuous Innovation",
                icon: Rocket,
                description: "We constantly evolve to meet the changing needs of the hospitality space, creating solutions that truly matter.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className="h-full border-2 border-transparent hover:border-surface2 transition-colors bg-surface1">
                  <CardHeader>
                    <item.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-text1">{item.title}</h3>
                  </CardHeader>
                  <CardBody>
                    <p className="text-text2">{item.description}</p>
                  </CardBody>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Founders Section */}
      <Section className="bg-gradient-to-b from-bg1 to-surface1/20">
        <Reveal>
          <SectionHeader
            eyebrow="Leadership"
            title="Meet the Founders"
            description="United by a shared vision to disrupt the industry."
            className="mx-auto text-center"
          />
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <Reveal key={founder.name} delay={index * 0.1}>
              <div className="flex flex-col h-full p-8 rounded-3xl bg-surface1 border border-borderNeutral hover:border-accent2/50 transition-colors shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                   <div className="h-16 w-16 rounded-full bg-surface2 flex items-center justify-center border border-borderNeutral">
                     <Users className="h-8 w-8 text-text2" />
                   </div>
                   <div className="text-left">
                      <h3 className="text-xl font-bold text-text1">{founder.name}</h3>
                      <Badge variant="serviceReady" className="mt-1">{founder.title}</Badge>
                   </div>
                </div>
                <div className="text-left flex-grow">
                   <p className="text-sm font-semibold text-accent2 mb-2 uppercase tracking-wider">{founder.role}</p>
                   <p className="text-text2 leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Quote Section */}
      <Section className="relative pb-32">
         <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="h-12 w-12 text-accent2 mx-auto mb-6 opacity-50" />
            <blockquote className="text-2xl font-medium text-text1 italic">
              "One man can get so far. But a team can walk a journey."
            </blockquote>
            <div className="mt-6">
              <cite className="not-italic font-semibold text-text1">Reginald Nkabinde</cite>
              <p className="text-sm text-text2">Founder, Manuvoo</p>
            </div>
            <p className="mt-8 text-text2 leading-relaxed max-w-2xl mx-auto">
               Building Manuvoo started as a one-man mission to solve a real problem. Today, it's a growing reality, driven by a commitment to serve the people and the industry.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
