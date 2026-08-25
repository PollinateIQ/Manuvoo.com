import { motion } from 'framer-motion';
import { Smartphone, TrendingUp, Zap, Database, Layers, Check } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { seoConfig } from '@/config/seo';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const values = [
  {
    icon: Smartphone,
    title: 'Digital First',
    description: 'Practical tools that work across the devices hospitality teams already use.',
  },
  {
    icon: Database,
    title: 'Cloud Connected',
    description: 'One shared source of truth for guests, service teams, and owners.',
  },
  {
    icon: TrendingUp,
    title: 'Built for Growth',
    description: 'A platform that can grow from one venue to many locations.',
  },
  {
    icon: Zap,
    title: 'Operational Clarity',
    description: 'Clear order, payment, inventory, and service signals in one flow.',
  },
];

const stats = [
  { value: '3+', label: 'Venues Connected' },
  { value: '10K+', label: 'Orders Processed' },
  { value: '4', label: 'Product Surfaces' },
  { value: '1', label: 'Cloud Platform' },
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
                Built in South Africa,{' '}
                <span className="text-orange-500">for hospitality everywhere.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Manuvoo is a Black-owned South African technology company building
                one cloud platform for guest ordering, live service, payments, and
                venue management.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Database className="w-5 h-5 text-orange-500" />
                  <span>One Shared Cloud System</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Layers className="w-5 h-5 text-orange-500" />
                  <span>Four Connected Product Surfaces</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-3xl blur-2xl" />
                <img
                  src="/images/generated/about-team-v2.webp"
                  alt="Black South African Manuvoo team collaborating around the connected hospitality platform"
                  className="relative aspect-[4/3] w-full rounded-2xl border border-border object-cover shadow-2xl"
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
                  Hospitality is fast, physical, and constantly moving. Yet many
                  venues still rely on disconnected tools that make it difficult to
                  see what is happening across guests, service stations, and management.
                </p>
                <p>
                  We built Manuvoo to connect that work in the cloud. Guests can
                  order and pay from their phones, teams can manage live service on
                  tablets, and owners can run the business from a laptop.
                </p>
                <p>
                  Our goal is simple: give hospitality businesses clear, practical
                  technology so they can focus on their guests, their teams, and
                  sustainable growth.
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
