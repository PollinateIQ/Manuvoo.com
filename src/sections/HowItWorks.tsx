import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Building2, UtensilsCrossed, ChefHat, Package, Users } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const steps = [
  {
    icon: Building2,
    title: 'Set up your business',
    description: 'Add your profile, locations, branding, and settings.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Create your menu',
    description: 'Build categories, items, images, and recipes/ingredients.',
  },
  {
    icon: ChefHat,
    title: 'Run service',
    description: 'Manage tables + QR, orders, bills, and payments in one flow.',
  },
  {
    icon: Package,
    title: 'Control stock',
    description: 'Track inventory, record receiving and waste, export data.',
  },
  {
    icon: Users,
    title: 'Manage your team',
    description: 'Add staff, manage activation, and view schedules.',
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section className="relative py-24 lg:py-32 bg-muted dark:bg-charcoal-800" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built around{' '}
            <span className="text-orange-500">real service flow.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Setup → menu → service → stock → team. Simple steps, repeatable
            patterns.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="relative">
          {/* Progress Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border dark:bg-charcoal-600 -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-orange-500 to-orange-600"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                  index !== 0 ? 'lg:mt-12' : ''
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'
                  }`}
                >
                  <motion.div
                    className="bg-card dark:bg-charcoal-900 border border-border dark:border-charcoal-600 rounded-xl p-6 transition-all duration-300 hover:border-orange-500/30"
                    whileHover={{ y: -4 }}
                  >
                    <div
                      className={`flex items-start gap-4 ${
                        index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Icon */}
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                      >
                        <step.icon className="w-6 h-6 text-orange-500" />
                      </motion.div>

                      {/* Text */}
                      <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">
                            Step {index + 1}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center Dot - Desktop */}
                <div className="hidden lg:block absolute left-1/2 top-6 -translate-x-1/2">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-orange-500 border-4 border-muted dark:border-charcoal-800"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
