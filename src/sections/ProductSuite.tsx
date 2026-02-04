import { motion } from 'framer-motion';
import { Check, Layers, Settings, Users } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const features = [
  'Real-time order synchronization',
  'Multi-location management',
  'QR-based table ordering',
  'Inventory tracking',
  'Staff scheduling',
  'Payment processing',
];

const layers = [
  {
    icon: Layers,
    title: 'Operations Layer',
    description: 'Real-time visibility into orders, tables, and staff',
  },
  {
    icon: Settings,
    title: 'Configuration Layer',
    description: 'Menu management, inventory, and business settings',
  },
  {
    icon: Users,
    title: 'Experience Layer',
    description: 'Customer-facing QR ordering and mobile app',
  },
];

export function ProductSuite() {
  return (
    <section id="features" className="relative py-24 lg:py-32 bg-background dark:bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                One platform,{' '}
                <span className="text-orange-500">three layers.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A unified suite: ops visibility, configuration, and a guest
                experience that plugs into the same backend flow.
              </p>
            </AnimatedSection>

            {/* Features List */}
            <StaggerContainer className="space-y-4" staggerDelay={0.08}>
              {features.map((feature) => (
                <StaggerItem key={feature}>
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Layers Visualization */}
          <StaggerContainer className="space-y-4" staggerDelay={0.15}>
            {layers.map((layer, index) => (
              <StaggerItem key={layer.title}>
                <motion.div
                  className="group relative bg-card dark:bg-charcoal-800 border border-border dark:border-charcoal-600 rounded-xl p-6 transition-all duration-300 hover:border-orange-500/30"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-orange-500/20">
                      <layer.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {layer.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Layer Number */}
                  <div className="absolute top-4 right-4 text-4xl font-bold text-muted-foreground/20 dark:text-charcoal-700">
                    0{index + 1}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
