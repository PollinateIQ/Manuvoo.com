import { motion } from 'framer-motion';
import { 
  Utensils,
  Smartphone,
  Store,
  Building2,
  CreditCard,
  Package,
  Shield,
  Zap
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { seoConfig } from '@/config/seo';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { Architecture } from '@/sections/Architecture';

const services = [
  {
    icon: Smartphone,
    title: 'Guest Ordering & Payment',
    description: 'A mobile journey that connects the guest directly to the venue service flow.',
    items: ['Digital menu', 'Mobile ordering', 'Payment flow', 'Order updates'],
  },
  {
    icon: Utensils,
    title: 'Order Management & Routing',
    description: 'Keep orders, tables, and service stations visible while the venue is moving.',
    items: ['Live queues', 'Table activity', 'Kitchen routing', 'Prep and ready states'],
  },
  {
    icon: Smartphone,
    title: 'TPOS for Service Teams',
    description: 'Give staff a connected tablet interface for orders, payments, and station coordination.',
    items: ['Staff order entry', 'Item routing', 'Payment status', 'Live service updates'],
  },
  {
    icon: Store,
    title: 'Admin & Venue Control',
    description: 'Manage the business from one cloud dashboard across connected locations.',
    items: ['Venue setup', 'Menu control', 'Order visibility', 'Performance overview'],
  },
  {
    icon: CreditCard,
    title: 'Payments & Cash-up',
    description: 'Connect payment status and reconciliation to the orders that created them.',
    items: ['Payment tracking', 'Bill history', 'Cash-up visibility', 'Reconciliation support'],
  },
  {
    icon: Package,
    title: 'Inventory & Multi-venue Operations',
    description: 'Keep stock signals and venue activity visible as the business grows.',
    items: ['Stock tracking', 'Receiving and waste', 'Location visibility', 'Shared operational data'],
  },
];

const highlights = [
  { icon: Zap, title: 'Live Operations', description: 'Service updates move across the platform as the venue works' },
  { icon: Shield, title: 'One Source of Truth', description: 'Guests, staff, and owners work from the same cloud data' },
  { icon: Building2, title: 'Built for Many Venue Types', description: 'Restaurants, food trucks, events, shops, hotels, and lodges' },
];

export function Services() {
  return (
    <div className="pt-20">
      <SEO config={seoConfig.services} />
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-medium text-orange-500 uppercase tracking-wider mb-4 block">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Services that power{' '}
              <span className="text-orange-500">your growth.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From restaurant management to customer engagement, we provide 
              everything you need to succeed in the hospitality industry.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  className="bg-card border border-border rounded-2xl p-8 h-full"
                  whileHover={{ y: -8, borderColor: 'rgba(249, 115, 22, 0.3)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
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
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {highlights.map((highlight) => (
              <StaggerItem key={highlight.title}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-6">
                    <highlight.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Architecture */}
      <Architecture />
    </div>
  );
}
