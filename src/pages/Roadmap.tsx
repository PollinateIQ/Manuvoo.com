import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Sparkles, Rocket } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { seoConfig } from '@/config/seo';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Badge } from '@/components/ui/badge';

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
  {
    title: 'AI-Powered Demand Forecasting',
    description: 'Predict busy periods and optimize staffing and inventory accordingly.',
    date: 'Mar 2026',
    version: 'v1.5.0',
    status: 'planned',
    module: 'Analytics',
  },
  {
    title: 'Multi-language Support',
    description: 'Support for multiple languages to serve diverse customer bases.',
    date: 'Q2 2026',
    version: 'v2.0.0',
    status: 'planned',
    module: 'Platform',
  },
];

export function RoadmapPage() {
  return (
    <div className="pt-20">
      <SEO config={seoConfig.roadmap} />
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-medium text-orange-500 uppercase tracking-wider mb-4 block">
              Product Updates
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The Manuvoo{' '}
              <span className="text-orange-500">Roadmap.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track our progress across the entire suite. New features, 
              improvements, and what's coming next.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-1/2" />

            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`relative grid lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 0 ? '' : 'lg:direction-rtl'
                  }`}
                >
                  {/* Content */}
                  <div className={`pl-20 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}`}>
                    <motion.div
                      className="bg-card border border-border rounded-xl p-6"
                      whileHover={{ borderColor: 'rgba(249, 115, 22, 0.3)' }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Status Badge */}
                      <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        {item.status === 'completed' ? (
                          <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Released
                          </Badge>
                        ) : item.status === 'upcoming' ? (
                          <Badge variant="secondary" className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20">
                            <Clock className="w-3 h-3 mr-1" />
                            Coming Soon
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">
                            <Rocket className="w-3 h-3 mr-1" />
                            Planned
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">{item.module}</span>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.description}
                      </p>

                      <div className={`flex items-center gap-4 text-sm ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        <span className="text-orange-500 font-medium">{item.date}</span>
                        <span className="text-muted-foreground">{item.version}</span>
                      </div>

                      {item.status === 'completed' && (
                        <div className={`flex items-center gap-1 text-xs text-purple-500 mt-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                          <Sparkles className="w-3 h-3" />
                          New Feature
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-8 lg:left-1/2 top-6 -translate-x-1/2">
                    <motion.div
                      className={`w-4 h-4 rounded-full border-4 border-background ${
                        item.status === 'completed'
                          ? 'bg-green-500'
                          : item.status === 'upcoming'
                          ? 'bg-orange-500'
                          : 'bg-blue-500'
                      }`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Have a feature request?
            </h2>
            <p className="text-muted-foreground mb-8">
              We'd love to hear your ideas. Help us shape the future of Manuvoo.
            </p>
            <motion.a
              href="https://wa.me/27696848796?text=Hi%20Manuvoo%20Team%2C%0A%0AI%20have%20a%20feature%20request%3A%0A%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit feedback
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
