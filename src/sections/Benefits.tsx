import { motion } from 'framer-motion';
import { Zap, Shield, TrendingUp } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const benefits = [
  {
    icon: Zap,
    title: 'Faster ordering & turnover',
    description:
      'Reduce friction at the table with QR-first flows and clearer service signals. Customers order directly from their phones.',
  },
  {
    icon: Shield,
    title: 'Less operational chaos',
    description:
      'Run service in real time with statuses for orders, bills, and payments. Everyone stays synchronized.',
  },
  {
    icon: TrendingUp,
    title: 'Better margin control',
    description:
      'Track receiving and waste to protect costs behind the scenes. Make data-driven decisions.',
  },
];

export function Benefits() {
  return (
    <section className="relative py-24 lg:py-32 bg-muted dark:bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Clear wins for{' '}
            <span className="text-orange-500">service and margins.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Faster throughput, fewer mistakes, and better control—without adding
            complexity.
          </p>
        </AnimatedSection>

        {/* Benefits Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <motion.div
                className="group relative h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-full bg-card dark:bg-charcoal-900 border border-border dark:border-charcoal-600 rounded-2xl p-8 transition-all duration-300 group-hover:border-orange-500/30 group-hover:shadow-card-hover">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-orange-500/20"
                    whileHover={{ scale: 1.1 }}
                  >
                    <benefit.icon className="w-7 h-7 text-orange-500" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Hover Gradient Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
