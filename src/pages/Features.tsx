import { motion } from 'framer-motion';
import { 
  Monitor, 
  QrCode, 
  CreditCard,
  Package,
  Layers,
  TabletSmartphone,
  Shield,
  Zap
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { seoConfig } from '@/config/seo';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const features = [
  {
    icon: Monitor,
    title: 'Admin Portal',
    description: 'A clear business view for owners and managers across every connected venue.',
    items: ['Order visibility', 'Payment reconciliation', 'Inventory signals', 'Venue performance'],
  },
  {
    icon: QrCode,
    title: 'Guest Ordering',
    description: 'Guests browse, order, pay, and follow their service journey from their phones.',
    items: ['Digital menu', 'Mobile cart', 'Integrated payment', 'Order updates'],
  },
  {
    icon: Layers,
    title: 'Order Management System',
    description: 'Live queues, table activity, and service statuses stay visible while the venue is moving.',
    items: ['Live order queues', 'Table activity', 'Station routing', 'Prep and ready states'],
  },
  {
    icon: TabletSmartphone,
    title: 'TPOS & Service Stations',
    description: 'Staff place orders and keep kitchen, bar, and kiosk teams aligned from a tablet.',
    items: ['Staff order entry', 'Station routing', 'Live item status', 'Connected payments'],
  },
  {
    icon: CreditCard,
    title: 'Payments & Cash-up',
    description: 'Keep payment status and reconciliation connected to the same service flow.',
    items: ['Payment status', 'Cash-up visibility', 'Bill history', 'Reconciliation support'],
  },
  {
    icon: Package,
    title: 'Inventory & Venue Control',
    description: 'Track the operational signals that help protect stock and margins.',
    items: ['Stock tracking', 'Receiving records', 'Waste logging', 'Multi-venue visibility'],
  },
];

const highlights = [
  { icon: Zap, title: 'Live Cloud Sync', description: 'Orders and service updates stay connected across supported devices' },
  { icon: Shield, title: 'Role-aware Access', description: 'Give each team member the product view needed for their work' },
  { icon: Monitor, title: 'Any-screen Operations', description: 'Run the platform from phones, tablets, and laptops' },
];

export function Features() {
  return (
    <div className="pt-20">
      <SEO config={seoConfig.features} />
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-medium text-orange-500 uppercase tracking-wider mb-4 block">
              Features
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Everything you need to{' '}
              <span className="text-orange-500">run smarter.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete suite of tools designed to streamline your hospitality 
              operations from front-of-house to back-of-house.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div
                  className="bg-card border border-border rounded-2xl p-8 h-full"
                  whileHover={{ y: -8, borderColor: 'rgba(249, 115, 22, 0.3)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Built for performance
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Designed with speed, security, and reliability at its core.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {highlights.map((highlight) => (
              <StaggerItem key={highlight.title}>
                <motion.div
                  className="text-center p-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
                    <highlight.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <img
                src="/images/generated/platform-oms-light-v2.webp"
                alt="OMS Interface"
                className="rounded-2xl border border-border shadow-2xl shadow-black/10"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="text-sm font-medium text-orange-500 uppercase tracking-wider mb-4 block">
                Order Management System
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                The heart of your operations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our OMS gives you complete visibility and control over every order, 
                from the moment it's placed to when it's served. Real-time updates 
                keep your kitchen and floor staff in perfect sync.
              </p>
              <div className="space-y-4">
                {['Live order tracking', 'Kitchen display system', 'Table management', 'Payment integration'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <span className="text-orange-500 text-xs">✓</span>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
