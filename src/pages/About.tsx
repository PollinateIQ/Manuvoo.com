import { motion } from 'framer-motion';
import { Leaf, Smartphone, TrendingUp, Zap, Database, Layers, Check } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { seoConfig } from '@/config/seo';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const values = [
  {
    icon: Leaf,
    title: 'Eco-Conscious',
    description: 'Reducing paper waste through digital receipts and orders.',
  },
  {
    icon: Smartphone,
    title: 'Digital First',
    description: 'Leveraging the power of mobile technology for seamless interactions.',
  },
  {
    icon: TrendingUp,
    title: 'Business Growth',
    description: 'Driving productivity and efficiency to help venues thrive.',
  },
  {
    icon: Zap,
    title: 'Efficiency',
    description: 'Streamlining operations from order processing to management.',
  },
];

const stats = [
  { value: '500+', label: 'Venues Served' },
  { value: '10M+', label: 'Orders Processed' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
];

export function About() {
  return (
    <div className="pt-20">
      <SEO config={seoConfig.about} />
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-sm font-medium text-orange-500 uppercase tracking-wider mb-4 block">
                About Manuvoo
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Digitizing hospitality,{' '}
                <span className="text-orange-500">one order at a time.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We are on a mission to become the world's number one digital hospitality 
                platform, driving efficiency, growth, and seamless experiences for venues 
                and their guests.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Database className="w-5 h-5 text-orange-500" />
                  <span>One Shared Database</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Layers className="w-5 h-5 text-orange-500" />
                  <span>Three Integrated Layers</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-3xl blur-2xl" />
                <img
                  src="/images/admin-portal.jpg"
                  alt="Manuvoo Platform"
                  className="relative rounded-2xl border border-border shadow-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <span className="text-sm font-medium text-orange-500 uppercase tracking-wider mb-4 block">
                The Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why we built Manuvoo
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The hospitality industry is tough. It's busy, fast-paced, and 
                  administration often eats into the time that should be spent on 
                  customers. We saw a gap where technology could step in not just 
                  to manage, but to understand the day-to-day needs of the business.
                </p>
                <p>
                  We created Manuvoo to bring efficiency to this chaos. By reducing 
                  paper usage and embracing smartphones, we're not just modernizing 
                  the process; we're empowering businesses to grow and helping customers 
                  be more money-conscious about their hospitality spending.
                </p>
                <p>
                  Our goal is simple: take care of the admin so you can focus on 
                  what matters most—your guests and your growth.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <StaggerContainer className="grid grid-cols-2 gap-6" staggerDelay={0.1}>
                {values.map((value) => (
                  <StaggerItem key={value.title}>
                    <motion.div
                      className="bg-card border border-border rounded-xl p-6 h-full"
                      whileHover={{ y: -4, borderColor: 'rgba(249, 115, 22, 0.3)' }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                        <value.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl sm:text-5xl font-bold text-orange-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              To revolutionize the hospitality industry by providing innovative, 
              easy-to-use technology that empowers venues to deliver exceptional 
              experiences while optimizing their operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Innovation', 'Simplicity', 'Reliability', 'Growth'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium"
                >
                  <Check className="w-4 h-4" />
                  {item}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
