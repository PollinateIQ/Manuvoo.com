import { motion } from 'framer-motion';
import { Coffee, Hotel, Truck, Calendar } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const industries = [
  {
    icon: Coffee,
    title: 'Restaurants & Cafés',
    description: 'Full table service, quick service counters, takeaway and delivery.',
    color: 'from-orange-500/20 to-orange-600/10',
  },
  {
    icon: Hotel,
    title: 'Hotels & Lodges',
    description: 'Room service, restaurant operations, guest ordering and billing.',
    color: 'from-blue-500/20 to-blue-600/10',
  },
  {
    icon: Truck,
    title: 'Food Trucks & Ghost Kitchens',
    description: 'Order management, quick payments, mobile operations.',
    color: 'from-green-500/20 to-green-600/10',
  },
  {
    icon: Calendar,
    title: 'Catering & Events',
    description: 'Large-scale ordering, inventory tracking, multi-location.',
    color: 'from-purple-500/20 to-purple-600/10',
  },
];

export function Industries() {
  return (
    <section className="relative py-24 lg:py-32 bg-background dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Designed for{' '}
            <span className="text-orange-500">real venues.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for the people who actually run the floor, the pass, and the
            back office.
          </p>
        </AnimatedSection>

        {/* Industries Grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {industries.map((industry) => (
            <StaggerItem key={industry.title}>
              <motion.div
                className="group relative h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-full bg-card dark:bg-charcoal-800 border border-border dark:border-charcoal-600 rounded-xl p-6 transition-all duration-300 group-hover:border-orange-500/30 overflow-hidden">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative">
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-muted dark:bg-charcoal-700 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-orange-500/20"
                      whileHover={{ scale: 1.1 }}
                    >
                      <industry.icon className="w-6 h-6 text-orange-500" />
                    </motion.div>

                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
