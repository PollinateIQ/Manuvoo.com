import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { CalButton } from "@/components/CalButton";
import { useTheme } from "@/hooks/useTheme";

const heroSlides = [
  {
    eyebrow: "QR ordering / table service / live operations",
    title: "from guest scan to every station.",
    description:
      "Guests order from the table, service teams see the request, and managers keep the full flow visible from the same live system.",
    image: "/images/generated/hero-service-flow.png",
    imageAlt:
      "Realistic restaurant table with QR ordering, phone app, tablet dashboard, and floating service workflow panels",
  },
  {
    eyebrow: "OMS / table activity / station routing",
    title: "through the live OMS.",
    description:
      "Table activity, order queues, prep states, and kitchen, bar, and kiosk routing stay visible while service is moving.",
    image: "/images/generated/oms-tablet-flow.png",
    imageAlt:
      "Realistic tablet showing restaurant operations, table activity, and order routing",
  },
  {
    eyebrow: "Admin portal / cash-up / inventory",
    title: "into the admin dashboard.",
    description:
      "Owners and managers can track orders, payments, inventory signals, and station performance without leaving the service flow.",
    image: "/images/generated/admin-laptop-flow.png",
    imageAlt:
      "Realistic laptop showing restaurant admin dashboard and management panels",
  },
  {
    eyebrow: "TPOS / kitchen / bar / kiosk",
    title: "across every order station.",
    description:
      "Staff can place orders, route items, process payments, and keep kitchen, bar, and kiosk teams aligned in real time.",
    image: "/images/generated/tpos-stations-flow.png",
    imageAlt:
      "Realistic staff point of sale tablet with restaurant station routing panels",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { theme } = useTheme();
  const slide = heroSlides[activeSlide];
  const isDark = theme === "dark";

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-20"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={`bg-${slide.image}`}
          src={slide.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: isDark ? 0.42 : 0.64, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
      </AnimatePresence>
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-[linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/0.96)_26%,hsl(var(--background)/0.68)_52%,hsl(var(--background)/0.2)_100%)]"
            : "bg-[linear-gradient(90deg,hsl(var(--background)/0.92)_0%,hsl(var(--background)/0.78)_30%,hsl(var(--background)/0.28)_58%,transparent_100%)]"
        }`}
      />
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-[linear-gradient(180deg,hsl(var(--background)/0.72)_0%,transparent_34%,hsl(var(--background)/0.82)_100%)]"
            : "bg-[radial-gradient(circle_at_76%_44%,transparent_0%,transparent_36%,hsl(var(--background)/0.5)_82%),linear-gradient(180deg,hsl(var(--background)/0.42)_0%,transparent_42%,hsl(var(--background)/0.62)_100%)]"
        }`}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/25 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`copy-${activeSlide}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <Badge
                  variant="secondary"
                  className="border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-500"
                >
                  {slide.eyebrow}
                </Badge>

                <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Run every service moment{" "}
                  <span className="text-orange-500">{slide.title}</span>
                </h1>

                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CalButton
                  className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-orange-500 px-8 py-6 text-base font-semibold text-white shadow-lg shadow-orange-500/25 outline-none transition-all hover:bg-orange-600 hover:shadow-orange-500/40 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"
                  eventType="demo"
                >
                  Book a demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </CalButton>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-border bg-background/60 px-8 py-6 text-base text-foreground backdrop-blur-sm hover:border-orange-500/50 hover:bg-muted"
                >
                  <NavLink to="/features">
                    <Play className="mr-2 h-5 w-5" />
                    Explore platform
                  </NavLink>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3"
            >
              {[
                "Setup support included",
                "No setup fee",
                "Built for restaurants, cafes & hotels",
              ].map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>{tag}</span>
                </div>
              ))}
            </motion.div>

          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`visual-${slide.image}`}
                initial={{ opacity: 0, x: 36, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -18, scale: 0.99 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="relative mx-auto max-w-[940px] lg:-mr-10 xl:-mr-20"
              >
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="h-auto w-full rounded-[1.75rem] object-contain shadow-2xl shadow-black/35"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-white/10" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
