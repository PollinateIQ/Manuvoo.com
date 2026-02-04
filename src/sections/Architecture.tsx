import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Database, 
  Users, 
  Heart, 
  Smartphone,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  RefreshCw
} from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

interface ComponentCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  features: string[];
  isCenter?: boolean;
  onHover: (isHovered: boolean) => void;
  isHighlighted?: boolean;
}

function ComponentCard({ 
  icon: Icon, 
  title, 
  subtitle, 
  features, 
  isCenter = false,
  onHover,
  isHighlighted = false
}: ComponentCardProps) {
  return (
    <motion.div
      className={`relative bg-card dark:bg-charcoal-800 border rounded-2xl p-6 transition-all duration-300 ${
        isCenter 
          ? 'border-orange-500/50 shadow-lg shadow-orange-500/10' 
          : isHighlighted 
            ? 'border-orange-500/30' 
            : 'border-border dark:border-charcoal-600'
      }`}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        borderColor: 'rgba(249, 115, 22, 0.5)',
      }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${
        isCenter ? 'bg-orange-500' : 'bg-orange-500/10'
      }`}>
        <Icon className={`w-7 h-7 ${isCenter ? 'text-white' : 'text-orange-500'}`} />
      </div>

      {/* Title & Subtitle */}
      <h3 className="text-xl font-semibold text-foreground text-center mb-1">
        {title}
      </h3>
      <p className="text-sm text-orange-500 text-center mb-4">
        {subtitle}
      </p>

      {/* Features */}
      {features.length > 0 && (
        <div className="space-y-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-muted/50 dark:bg-charcoal-700 rounded-lg px-4 py-2 text-sm text-center text-muted-foreground"
            >
              {feature}
            </div>
          ))}
        </div>
      )}

      {/* Center card extra info */}
      {isCenter && (
        <p className="text-sm text-muted-foreground text-center mt-4">
          Real-time sync across all components
        </p>
      )}
    </motion.div>
  );
}

function AnimatedArrow({ 
  direction, 
  isVisible,
  isHighlighted = false 
}: { 
  direction: 'horizontal' | 'vertical';
  isVisible: boolean;
  isHighlighted?: boolean;
}) {
  const arrowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  if (direction === 'horizontal') {
    return (
      <motion.div 
        className="flex items-center justify-center gap-1"
        variants={arrowVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div
          animate={{ x: isHighlighted ? [0, 4, 0] : 0 }}
          transition={{ duration: 1, repeat: isHighlighted ? Infinity : 0 }}
        >
          <ArrowRight className={`w-5 h-5 ${isHighlighted ? 'text-orange-500' : 'text-muted-foreground'}`} />
        </motion.div>
        <motion.div
          animate={{ x: isHighlighted ? [0, -4, 0] : 0 }}
          transition={{ duration: 1, repeat: isHighlighted ? Infinity : 0 }}
        >
          <ArrowLeft className={`w-5 h-5 ${isHighlighted ? 'text-orange-500' : 'text-muted-foreground'}`} />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="flex flex-col items-center justify-center gap-1"
      variants={arrowVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.div
        animate={{ y: isHighlighted ? [0, -4, 0] : 0 }}
        transition={{ duration: 1, repeat: isHighlighted ? Infinity : 0 }}
      >
        <ArrowUp className={`w-5 h-5 ${isHighlighted ? 'text-orange-500' : 'text-muted-foreground'}`} />
      </motion.div>
      <motion.div
        animate={{ y: isHighlighted ? [0, 4, 0] : 0 }}
        transition={{ duration: 1, repeat: isHighlighted ? Infinity : 0 }}
      >
        <ArrowDown className={`w-5 h-5 ${isHighlighted ? 'text-orange-500' : 'text-muted-foreground'}`} />
      </motion.div>
    </motion.div>
  );
}

export function Architecture() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  const components = {
    admin: {
      icon: Users,
      title: 'Admin Portal',
      subtitle: 'Owner Dashboard',
      features: ['Menu & Settings', 'Reports & Analytics', 'Team Management']
    },
    central: {
      icon: Database,
      title: 'Central Hub',
      subtitle: 'Database',
      features: []
    },
    oms: {
      icon: Heart,
      title: 'OMS',
      subtitle: 'Staff Operations',
      features: ['Orders & Payments', 'Menu & Tables', 'Staff Check-In']
    },
    mobile: {
      icon: Smartphone,
      title: 'Mobile App',
      subtitle: 'Customer Experience',
      features: []
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1] as const
      }
    })
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-muted/30 dark:bg-charcoal-900/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-orange-500 uppercase tracking-wider mb-4 block">
            Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It All{' '}
            <span className="text-orange-500">Connects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A unified ecosystem where every component works together seamlessly
          </p>
        </AnimatedSection>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-6 items-center">
            {/* Admin Portal */}
            <motion.div
              className="col-span-1"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.1}
            >
              <ComponentCard
                {...components.admin}
                onHover={(h) => setHoveredComponent(h ? 'admin' : null)}
                isHighlighted={hoveredComponent === 'central'}
              />
            </motion.div>

            {/* Arrow Left */}
            <div className="col-span-1 flex justify-center">
              <AnimatedArrow 
                direction="horizontal" 
                isVisible={isInView}
                isHighlighted={hoveredComponent === 'admin' || hoveredComponent === 'central'}
              />
            </div>

            {/* Central Hub */}
            <motion.div
              className="col-span-1"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.2}
            >
              <ComponentCard
                {...components.central}
                isCenter
                onHover={(h) => setHoveredComponent(h ? 'central' : null)}
              />
            </motion.div>

            {/* Arrow Right */}
            <div className="col-span-1 flex justify-center">
              <AnimatedArrow 
                direction="horizontal" 
                isVisible={isInView}
                isHighlighted={hoveredComponent === 'oms' || hoveredComponent === 'central'}
              />
            </div>

            {/* OMS */}
            <motion.div
              className="col-span-1"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.3}
            >
              <ComponentCard
                {...components.oms}
                onHover={(h) => setHoveredComponent(h ? 'oms' : null)}
                isHighlighted={hoveredComponent === 'central'}
              />
            </motion.div>
          </div>

          {/* Vertical Arrow */}
          <div className="flex justify-center my-6">
            <AnimatedArrow 
              direction="vertical" 
              isVisible={isInView}
              isHighlighted={hoveredComponent === 'mobile' || hoveredComponent === 'central'}
            />
          </div>

          {/* Mobile App */}
          <motion.div
            className="max-w-md mx-auto"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.4}
          >
            <motion.div
              className={`relative bg-card dark:bg-charcoal-800 border rounded-2xl p-6 transition-all duration-300 ${
                hoveredComponent === 'central' 
                  ? 'border-orange-500/30' 
                  : 'border-border dark:border-charcoal-600'
              }`}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                borderColor: 'rgba(249, 115, 22, 0.5)',
              }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredComponent('mobile')}
              onMouseLeave={() => setHoveredComponent(null)}
            >
              <div className="flex items-center justify-center gap-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <Smartphone className="w-7 h-7 text-orange-500" />
                </div>

                {/* Content */}
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {components.mobile.title}
                  </h3>
                  <p className="text-sm text-orange-500 mb-2">
                    {components.mobile.subtitle}
                  </p>
                </div>

                {/* Sync indicator */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Orders & Pay</span>
                  <RefreshCw className="w-4 h-4 text-orange-500" />
                  <span>Syncs with OMS</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-8">
            {/* Admin Portal */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.1}
            >
              <ComponentCard
                {...components.admin}
                onHover={(h) => setHoveredComponent(h ? 'admin' : null)}
              />
            </motion.div>

            {/* OMS */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.2}
            >
              <ComponentCard
                {...components.oms}
                onHover={(h) => setHoveredComponent(h ? 'oms' : null)}
              />
            </motion.div>
          </div>

          {/* Arrows pointing to center */}
          <div className="flex justify-center my-6">
            <AnimatedArrow direction="vertical" isVisible={isInView} />
          </div>

          {/* Central Hub */}
          <motion.div
            className="max-w-sm mx-auto mb-8"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.3}
          >
            <ComponentCard
              {...components.central}
              isCenter
              onHover={(h) => setHoveredComponent(h ? 'central' : null)}
            />
          </motion.div>

          {/* Arrow to mobile */}
          <div className="flex justify-center my-6">
            <AnimatedArrow direction="vertical" isVisible={isInView} />
          </div>

          {/* Mobile App */}
          <motion.div
            className="max-w-sm mx-auto"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.4}
          >
            <ComponentCard
              {...components.mobile}
              features={['Orders & Pay', 'Syncs with OMS']}
              onHover={(h) => setHoveredComponent(h ? 'mobile' : null)}
            />
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* Admin Portal */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.1}
          >
            <ComponentCard
              {...components.admin}
              onHover={() => {}}
            />
          </motion.div>

          {/* Arrow */}
          <div className="flex justify-center">
            <AnimatedArrow direction="vertical" isVisible={isInView} />
          </div>

          {/* Central Hub */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.2}
          >
            <ComponentCard
              {...components.central}
              isCenter
              onHover={() => {}}
            />
          </motion.div>

          {/* Arrow */}
          <div className="flex justify-center">
            <AnimatedArrow direction="vertical" isVisible={isInView} />
          </div>

          {/* OMS */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.3}
          >
            <ComponentCard
              {...components.oms}
              onHover={() => {}}
            />
          </motion.div>

          {/* Arrow */}
          <div className="flex justify-center">
            <AnimatedArrow direction="vertical" isVisible={isInView} />
          </div>

          {/* Mobile App */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.4}
          >
            <ComponentCard
              {...components.mobile}
              features={['Orders & Pay', 'Syncs with OMS']}
              onHover={() => {}}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
