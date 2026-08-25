import { motion } from "framer-motion";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const screens = [
  {
    title: "Admin Portal",
    subtitle: "Owners & managers run the business",
    image: "/images/generated/platform-admin-light-v2.webp",
    features: [
      "Track orders across kitchen, bar, and kiosk stations",
      "Reconcile payments, inventory, and cash-up",
      "Understand service performance from one dashboard",
    ],
  },
  {
    title: "OMS",
    subtitle: "Stations, routing, and live table statuses",
    image: "/images/generated/platform-oms-light-v2.webp",
    features: [
      "Monitor table activity and order queues",
      "Route items to the right service station",
      "Keep prep, ready, paid, and served states visible",
    ],
  },
  {
    title: "Connected Service",
    subtitle: "Guests, staff, and owners share one live flow",
    image: "/images/generated/venue-restaurant-v2.webp",
    features: [
      "Guests order and pay from their phones",
      "Teams see the same order across service stations",
      "Owners keep the full venue visible in the cloud",
    ],
  },
];

export function PlatformPreview() {
  return (
    <section
      id="about"
      className="relative bg-background py-24 dark:bg-charcoal-900 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Every service surface.{" "}
            <span className="text-orange-500">One connected cloud.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Guest ordering, live operations, and admin control work together
            across phones, tablets, and laptops.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid gap-8 md:grid-cols-3"
          staggerDelay={0.15}
        >
          {screens.map((screen) => (
            <StaggerItem key={screen.title} className="h-full">
              <motion.div
                className="group relative h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative flex h-full min-h-[460px] flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 group-hover:border-orange-500/30 group-hover:shadow-glow dark:border-charcoal-600 dark:bg-charcoal-800">
                  <div className="relative h-[230px] overflow-hidden bg-muted sm:h-[250px] md:h-[220px] lg:h-[250px]">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent dark:from-charcoal-800" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-orange-500">
                        {screen.title}
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {screen.subtitle}
                    </p>
                    <ul className="mt-auto space-y-2 pt-2">
                      {screen.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
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
