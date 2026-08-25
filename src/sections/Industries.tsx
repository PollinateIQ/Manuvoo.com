import { motion } from "framer-motion";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const industries = [
  {
    title: "Restaurants & Cafés",
    description:
      "Full table service, quick service counters, takeaway, and delivery.",
    image: "/images/generated/venue-restaurant-v2.webp",
  },
  {
    title: "Food Trucks",
    description: "Cloud-connected service wherever your kitchen moves.",
    image: "/images/generated/venue-food-truck-v2.webp",
  },
  {
    title: "Catering & Events",
    description:
      "Live ordering and station visibility for temporary venues.",
    image: "/images/generated/venue-event-v2.webp",
  },
  {
    title: "Independent Food Shops",
    description:
      "A professional digital system for growing local food businesses.",
    image: "/images/generated/venue-food-shop-v2.webp",
  },
  {
    title: "Hotels & Lodges",
    description:
      "Guest service, venue operations, ordering, and management.",
    image: "/images/generated/venue-lodge-v2.webp",
  },
];

export function Industries() {
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Designed for{" "}
            <span className="text-orange-500">real venues.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            One cloud platform, adapted to the way different hospitality
            businesses actually serve their customers.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
          staggerDelay={0.1}
        >
          {industries.map((industry) => (
            <StaggerItem key={industry.title}>
              <motion.article
                className="group relative h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 group-hover:border-orange-500/30 group-hover:shadow-card-hover">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={industry.image}
                      alt={industry.title + " using Manuvoo's connected hospitality platform"}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.035]"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {industry.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
