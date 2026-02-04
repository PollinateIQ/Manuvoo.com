import { motion } from 'framer-motion';
import { 
  Utensils, 
  Smartphone, 
  Store, 
  Calendar, 
  Star, 
  Bell,
  Clock,
  Shield,
  Zap
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { seoConfig } from '@/config/seo';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { Architecture } from '@/sections/Architecture';

const services = [
  {
    icon: Utensils,
    title: 'Restaurant Management',
    description: 'Complete solution for restaurants to manage operations, orders, and customer experience.',
    items: ['Table management', 'Menu builder', 'Order processing', 'Kitchen display'],
  },
  {
    icon: Smartphone,
    title: 'Customer App',
    description: 'Native mobile app for diners to browse, book, and order from their favorite restaurants.',
    items: ['Easy reservations', 'Menu browsing', 'Order tracking', 'Loyalty rewards'],
  },
  {
    icon: Store,
    title: 'Vendor Portal',
    description: 'Dedicated portal for restaurant owners and managers to control their business.',
    items: ['Dashboard analytics', 'Menu management', 'Staff scheduling', 'Financial reports'],
  },
  {
    icon: Calendar,
    title: 'Reservation System',
    description: 'Intelligent reservation management with real-time availability and automated confirmations.',
    items: ['Online bookings', 'Waitlist management', 'SMS reminders', 'Walk-in handling'],
  },
  {
    icon: Star,
    title: 'Review Management',
    description: 'Collect, manage, and respond to customer reviews to build your reputation.',
    items: ['Review collection', 'Response templates', 'Rating analytics', 'Reputation insights'],
  },
  {
    icon: Bell,
    title: 'Marketing Tools',
    description: 'Built-in marketing features to attract and retain customers.',
    items: ['Email campaigns', 'Push notifications', 'Promo codes', 'Customer segmentation'],
  },
];

const highlights = [
  { icon: Zap, title: 'Real-time Updates', description: 'Instant notifications and live updates across all platforms' },
  { icon: Shield, title: 'Secure Platform', description: 'Bank-level security to protect your data and transactions' },
  { icon: Clock, title: 'Always Available', description: '99.9% uptime guarantee with 24/7 customer support' },
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
