import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Database,
  LayoutDashboard,
  MonitorCheck,
  Smartphone,
  Check,
} from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

type NodeId = 'admin' | 'hub' | 'oms' | 'mobile';

interface FlowNode {
  id: NodeId;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  tag: string;
  features: string[];
}

const nodes: Record<NodeId, FlowNode> = {
  admin: {
    id: 'admin',
    icon: LayoutDashboard,
    title: 'Admin Portal',
    subtitle: 'Owners & managers',
    tag: 'Web',
    features: ['Menu & settings', 'Reports & analytics', 'Team management'],
  },
  hub: {
    id: 'hub',
    icon: Database,
    title: 'Central Hub',
    subtitle: 'Cloud database',
    tag: 'Cloud',
    features: ['One shared record', 'Real-time sync', 'Always up to date'],
  },
  oms: {
    id: 'oms',
    icon: MonitorCheck,
    title: 'OMS',
    subtitle: 'Floor & kitchen staff',
    tag: 'Tablet',
    features: ['Orders & payments', 'Menu & tables', 'Staff check-in'],
  },
  mobile: {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile App',
    subtitle: 'Your guests',
    tag: 'Phone',
    features: ['Scan, order & pay', 'Live order status', 'Syncs with OMS'],
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/* ---------------------------------------------------------------- card --- */

interface ComponentCardProps {
  node: FlowNode;
  isCenter?: boolean;
  isActive?: boolean;
  onHover: (isHovered: boolean) => void;
}

function ComponentCard({
  node,
  isCenter = false,
  isActive = false,
  onHover,
}: ComponentCardProps) {
  const { icon: Icon, title, subtitle, tag, features } = node;

  return (
    <motion.div
      className={`group relative flex h-full flex-col rounded-2xl border bg-card p-6 transition-colors duration-300 dark:bg-charcoal-800 ${
        isCenter
          ? 'border-orange-500/50 shadow-glow'
          : isActive
            ? 'border-orange-500/40'
            : 'border-border dark:border-charcoal-600'
      }`}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* Surface tag — the hub shows a live-sync pulse instead */}
      <span
        className={`absolute right-4 top-4 flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
          isCenter
            ? 'border-orange-500/40 bg-orange-500/10 text-orange-500'
            : 'border-border text-muted-foreground dark:border-charcoal-600'
        }`}
      >
        {isCenter && (
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-500" />
          </span>
        )}
        {isCenter ? 'Live' : tag}
      </span>

      {/* Icon + heading */}
      <div className="mb-5 flex items-center gap-3 pr-14">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
            isCenter
              ? 'bg-orange-500 text-white'
              : 'bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white'
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold leading-tight text-foreground">
            {title}
          </h3>
          <p className="truncate text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-2.5 border-t border-border pt-4 dark:border-charcoal-700">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-sm text-muted-foreground"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ----------------------------------------------------------- connector --- */

interface FlowLineProps {
  direction: 'horizontal' | 'vertical';
  label?: string;
  isActive?: boolean;
  isVisible: boolean;
  delay?: number;
}

function FlowLine({
  direction,
  label,
  isActive = false,
  isVisible,
  delay = 0,
}: FlowLineProps) {
  const reduceMotion = useReducedMotion();
  const horizontal = direction === 'horizontal';

  // 2px, not 1px: a hairline landing on a half-pixel position gets split across
  // two pixel rows/columns by the browser and washes out to nothing.
  const track = horizontal ? 'h-0.5 w-full' : 'h-full w-0.5';

  // Explicit stops keep the line solid across its middle. A plain `via-`
  // gradient fades over the whole length, which made short runs invisible.
  const lineColor = isActive
    ? 'rgba(249, 115, 22, 0.9)'
    : 'hsl(var(--muted-foreground) / 0.45)';
  const lineImage = `linear-gradient(${
    horizontal ? 'to right' : 'to bottom'
  }, transparent 0%, ${lineColor} 14%, ${lineColor} 86%, transparent 100%)`;

  const dotTravel = (reverse: boolean) =>
    reduceMotion
      ? {}
      : {
          [horizontal ? 'left' : 'top']: reverse
            ? ['100%', '0%']
            : ['0%', '100%'],
          opacity: [0, 1, 1, 0],
        };

  const labelClass = `whitespace-nowrap text-[10px] font-medium uppercase tracking-wider transition-colors duration-300 ${
    isActive ? 'text-orange-500' : 'text-muted-foreground/70'
  }`;

  const line = (
    <div
      className={`relative ${track} transition-all duration-300`}
      style={{ backgroundImage: lineImage }}
    >
      {[false, true].map((reverse) => (
        <motion.span
          key={String(reverse)}
          className="absolute h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.9)]"
          style={
            horizontal
              ? { top: '50%', marginTop: -3, marginLeft: -3 }
              : { left: '50%', marginLeft: -3, marginTop: -3 }
          }
          animate={dotTravel(reverse)}
          transition={{
            duration: isActive ? 1.4 : 2.4,
            repeat: Infinity,
            ease: 'linear',
            delay: reverse ? 1 : 0,
          }}
        />
      ))}
    </div>
  );

  // Both directions render the same way: an unbroken line with a small plain
  // label — above it when horizontal, beside it when vertical.
  return (
    <motion.div
      className={
        horizontal
          ? 'flex w-full flex-col items-center justify-center gap-2'
          : 'relative flex h-full w-full items-center justify-center'
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {horizontal && label && <span className={labelClass}>{label}</span>}
      {line}
      {!horizontal && label && (
        <span
          className={`absolute left-1/2 top-1/2 ml-3 -translate-y-1/2 ${labelClass}`}
        >
          {label}
        </span>
      )}
    </motion.div>
  );
}

/* -------------------------------------------------------------- section --- */

export function Architecture() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hovered, setHovered] = useState<NodeId | null>(null);

  const linkActive = (id: NodeId) => hovered === id || hovered === 'hub';
  const cardActive = (id: NodeId) => hovered === 'hub' && id !== 'hub';

  const stacked: NodeId[] = ['admin', 'hub', 'oms', 'mobile'];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-muted/30 py-24 dark:bg-charcoal-900/50 lg:py-32"
    >
      {/* Soft glow behind the hub */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16 text-center">
          <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-orange-500">
            Architecture
          </span>
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            How It All <span className="text-orange-500">Connects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Every surface writes to the same live record — so the guest&apos;s
            phone, the floor, and the back office never disagree.
          </p>
        </AnimatedSection>

        {/* Desktop diagram */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[minmax(0,1fr)_130px_minmax(0,1.05fr)_130px_minmax(0,1fr)] items-stretch">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.1}
            >
              <ComponentCard
                node={nodes.admin}
                isActive={cardActive('admin')}
                onHover={(h) => setHovered(h ? 'admin' : null)}
              />
            </motion.div>

            <div className="flex items-center px-4">
              <FlowLine
                direction="horizontal"
                label="Menu & reports"
                isVisible={isInView}
                isActive={linkActive('admin')}
                delay={0.35}
              />
            </div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.2}
            >
              <ComponentCard
                node={nodes.hub}
                isCenter
                onHover={(h) => setHovered(h ? 'hub' : null)}
              />
            </motion.div>

            <div className="flex items-center px-4">
              <FlowLine
                direction="horizontal"
                label="Live orders"
                isVisible={isInView}
                isActive={linkActive('oms')}
                delay={0.45}
              />
            </div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.3}
            >
              <ComponentCard
                node={nodes.oms}
                isActive={cardActive('oms')}
                onHover={(h) => setHovered(h ? 'oms' : null)}
              />
            </motion.div>
          </div>

          {/* Hub to Mobile */}
          <div className="mx-auto flex h-24 w-full max-w-xs justify-center">
            <FlowLine
              direction="vertical"
              label="Guest orders & payments"
              isVisible={isInView}
              isActive={linkActive('mobile')}
              delay={0.55}
            />
          </div>

          <motion.div
            className="mx-auto w-full max-w-sm"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0.4}
          >
            <ComponentCard
              node={nodes.mobile}
              isActive={cardActive('mobile')}
              onHover={(h) => setHovered(h ? 'mobile' : null)}
            />
          </motion.div>
        </div>

        {/* Tablet & mobile diagram */}
        <div className="mx-auto max-w-md lg:hidden">
          {stacked.map((id, index) => (
            <div key={id}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={0.1 + index * 0.1}
              >
                <ComponentCard
                  node={nodes[id]}
                  isCenter={id === 'hub'}
                  onHover={(h) => setHovered(h ? id : null)}
                />
              </motion.div>

              {index < stacked.length - 1 && (
                <div className="flex h-14 justify-center">
                  <FlowLine
                    direction="vertical"
                    isVisible={isInView}
                    isActive={linkActive(stacked[index + 1])}
                    delay={0.2 + index * 0.1}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
