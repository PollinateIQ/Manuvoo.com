import { motion } from 'framer-motion';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const screens = [
  {
    title: 'Admin Portal',
    subtitle: 'Owners & managers run the business',
    image: '/images/admin-portal.jpg',
    features: ['Dashboard KPIs + operational widgets', 'Orders, bills, and payments visibility', 'Menu builder foundations'],
  },
  {
    title: 'OMS',
    subtitle: 'Stations, routing, and live statuses',
    image: '/images/oms-interface.jpg',
    features: ['Real-time table management', 'Live order tracking', 'Staff coordination'],
  },
  {
    title: 'Customer App',
    subtitle: 'Scan → browse → order → pay',
    image: '/images/customer-app.jpg',
    features: ['QR table ordering', 'Mobile payments', 'Order tracking'],
  },
];

export function PlatformPreview() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-background dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Three layers.{' '}
            <span className="text-orange-500">One seamless experience.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A unified suite: ops visibility, configuration, and a guest experience
            that plugs into the same backend flow.
          </p>
        </AnimatedSection>

        {/* Screens Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {screens.map((screen) => (
            <StaggerItem key={screen.title}>
              <motion.div
                className="group relative"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Card */}
                <div className="relative bg-card dark:bg-charcoal-800 border border-border dark:border-charcoal-600 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-orange-500/30 group-hover:shadow-glow">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card dark:from-charcoal-800 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">
                        {screen.title}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {screen.subtitle}
                    </p>
                    <ul className="space-y-2">
                      {screen.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
