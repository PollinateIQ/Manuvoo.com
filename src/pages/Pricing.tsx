import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { seoConfig } from '@/config/seo';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const plans = [
  {
    name: 'Starter',
    target: 'Cafes & Quick Service',
    description: 'Essential QR ordering and order management.',
    price: 'Custom',
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
    price: 'Custom',
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
    price: 'Custom',
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

const faqs = [
  {
    question: 'How does pricing work?',
    answer: 'Our pricing is tailored to your specific needs based on venue size, number of locations, and required features. Contact us for a custom quote.',
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No, we don\'t charge any setup fees. Our team will help you get started at no additional cost.',
  },
  {
    question: 'Can I switch plans?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and can set up invoicing for Enterprise customers.',
  },
];

export function Pricing() {
  return (
    <div className="pt-20">
      <SEO config={seoConfig.pricing} />
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-medium text-orange-500 uppercase tracking-wider mb-4 block">
              Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Scoped to your{' '}
              <span className="text-orange-500">operation.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We tailor our rollout to your venue type. No hidden fees, just clear value.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <motion.div
                  className={`relative h-full rounded-2xl p-8 ${
                    plan.featured
                      ? 'bg-card border-2 border-orange-500 shadow-lg shadow-orange-500/10'
                      : 'bg-card border border-border'
                  }`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {plan.featured && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white">
                      Most Popular
                    </Badge>
                  )}

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

                  <div className="mb-6">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground"> pricing</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.featured
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                  >
                    Request quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <p className="text-muted-foreground">
              Need a custom integration?{' '}
              <NavLink to="/contact" className="text-orange-500 hover:text-orange-400 font-medium inline-flex items-center gap-1">
                Contact our sales team
                <ArrowRight className="w-4 h-4" />
              </NavLink>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about our pricing.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-2xl border border-border bg-card/80 p-2 shadow-xl shadow-black/5 backdrop-blur-sm">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`faq-${index}`}
                    className="border-border px-4 last:border-b-0"
                  >
                    <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:text-orange-500 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
