import { motion } from 'framer-motion';
import { Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

const roadmapItems = [
  {
    title: 'Multi-tenant Access & Switching',
    description: 'Seamlessly switch between different restaurant brands and locations with a single login.',
    date: 'Dec 14, 2025',
    version: 'v1.2.0',
    status: 'completed',
    module: 'Admin Portal',
  },
  {
    title: 'Orders & Transactions Hub',
    description: 'Centralized view for all live orders, bill status, and payment tracking in real-time.',
    date: 'Dec 10, 2025',
    version: 'v1.1.5',
    status: 'completed',
    module: 'OMS',
  },
  {
    title: 'Advanced Analytics Dashboard',
    description: 'Deep insights into sales trends, customer behavior, and operational efficiency.',
    date: 'Jan 2026',
    version: 'v1.3.0',
    status: 'upcoming',
    module: 'Admin Portal',
  },
  {
    title: 'Loyalty & Rewards Program',
    description: 'Built-in customer loyalty system with points, rewards, and personalized offers.',
    date: 'Feb 2026',
    version: 'v1.4.0',
    status: 'upcoming',
    module: 'Customer App',
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 lg:py-32 bg-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Manuvoo{' '}
            <span className="text-orange-500">Roadmap.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track our progress across the entire suite. New features,
            improvements, and what's coming next.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-charcoal-600 -translate-x-1/2" />

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.title}
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
                    index % 2 === 0
                      ? 'lg:pr-16 lg:text-right'
                      : 'lg:col-start-2 lg:pl-16'
                  }`}
                >
                  <motion.div
                    className={`relative bg-charcoal-900 border rounded-xl p-6 transition-all duration-300 ${
                      item.status === 'completed'
                        ? 'border-orange-500/30'
                        : 'border-charcoal-600 hover:border-orange-500/30'
                    }`}
                    whileHover={{ y: -4 }}
                  >
                    {/* Status Badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                        index % 2 === 0 ? 'lg:ml-auto' : ''
                      }`}
                    >
                      {item.status === 'completed' ? (
                        <span className="flex items-center gap-1 text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                          <CheckCircle2 className="w-3 h-3" />
                          Released
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-orange-500 bg-orange-500/10 px-2 py-1 rounded-full">
                          <Clock className="w-3 h-3" />
                          Coming Soon
                        </span>
                      )}
                      <span className="text-muted-foreground">{item.module}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>

                    {/* Meta */}
                    <div
                      className={`flex items-center gap-4 text-sm ${
                        index % 2 === 0 ? 'lg:justify-end' : ''
                      }`}
                    >
                      <span className="text-orange-500">{item.date}</span>
                      <span className="text-muted-foreground">{item.version}</span>
                    </div>

                    {/* New Feature Badge */}
                    {item.status === 'completed' && (
                      <div
                        className={`flex items-center gap-1 text-xs text-purple-500 mt-4 ${
                          index % 2 === 0 ? 'lg:justify-end' : ''
                        }`}
                      >
                        <Sparkles className="w-3 h-3" />
                        New Feature
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Center Dot - Desktop */}
                <div className="hidden lg:block absolute left-1/2 top-6 -translate-x-1/2">
                  <motion.div
                    className={`w-4 h-4 rounded-full border-4 border-charcoal-800 ${
                      item.status === 'completed'
                        ? 'bg-orange-500'
                        : 'bg-charcoal-600'
                    }`}
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
