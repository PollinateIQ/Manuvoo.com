import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const plans = [
  {
    name: 'Starter',
    target: 'Cafes & Quick Service',
    description: 'Essential QR ordering and order management.',
    features: [
      'Table QR codes + seating',
      'Menu browsing & ordering',
      'Live order tracking',
      'Basic kitchen display',
      'Email support',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    target: 'Restaurants & Bars',
    description: 'Full service flow with payments and inventory.',
    features: [
      'Everything in Starter',
      'Payment requests + tips',
      'Invoice history + PDF export',
      'Inventory management',
      'Staff schedules',
      'Priority support',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    target: 'Multi-location Groups',
    description: 'Scale, control, and custom rollout.',
    features: [
      'Everything in Growth',
      'Multi-tenant management',
      'Customer profiles & loyalty',
      'Advanced analytics',
      'Dedicated account manager',
      'SLA support',
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Scoped to your{' '}
            <span className="text-orange-500">operation.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We tailor our rollout to your venue type. No hidden fees, just clear
            value.
          </p>
        </AnimatedSection>

        {/* Pricing Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                className="relative h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`h-full rounded-2xl p-8 transition-all duration-300 ${
                    plan.featured
                      ? 'bg-charcoal-800 border-2 border-orange-500 shadow-glow'
                      : 'bg-charcoal-800 border border-charcoal-600 hover:border-orange-500/30'
                  }`}
                >
                  {/* Featured Badge */}
                  {plan.featured && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white">
                      Most Popular
                    </Badge>
                  )}

                  {/* Plan Info */}
                  <div className="mb-6">
                    <p className="text-sm text-orange-500 font-medium mb-2">
                      {plan.target}
                    </p>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    className={`w-full ${
                      plan.featured
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'bg-charcoal-700 hover:bg-charcoal-600 text-foreground border border-charcoal-600'
                    }`}
                  >
                    Request quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Custom Integration */}
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <p className="text-muted-foreground">
            Need a custom integration?{' '}
            <a
              href="#contact"
              className="text-orange-500 hover:text-orange-400 font-medium inline-flex items-center gap-1"
            >
              Contact sales team
              <ArrowRight className="w-4 h-4" />
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
