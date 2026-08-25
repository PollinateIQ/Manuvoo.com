import { motion } from "framer-motion";
import { ArrowRight, Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { CalButton } from "@/components/CalButton";

const serviceProof = [
  "Guest ordering and payments",
  "Live service operations",
  "Multi-venue management",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#fbf2e8] pt-14 lg:min-h-screen lg:pt-0"
    >
      <img
        src="/images/generated/hero-ecosystem-desktop-v2.webp"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 hidden h-full w-full object-contain object-right lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(251,242,232,1)_0%,rgba(251,242,232,0.98)_28%,rgba(251,242,232,0.9)_42%,rgba(251,242,232,0.56)_54%,rgba(251,242,232,0)_70%)] lg:block"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-start px-5 pb-0 pt-3 text-center sm:px-6 sm:pt-8 lg:min-h-screen lg:justify-center lg:px-8 lg:py-28 lg:text-left">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2.125rem] font-black leading-[0.96] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[4.75rem] lg:leading-[0.94] xl:text-[5.35rem]"
          >
            One connected{" "}
            <span className="text-orange-500">hospitality system.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-xl text-base font-medium leading-7 text-slate-700 sm:mt-6 sm:text-lg lg:mx-0 lg:mt-8 lg:text-xl lg:leading-8"
          >
            Guests order and pay, teams run service, and owners manage every
            venue from one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-5 grid w-full max-w-md gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-3 lg:mx-0 lg:mt-10"
          >
            <CalButton
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-7 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-[background-color,transform] duration-150 hover:bg-orange-600 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:h-14 sm:text-base"
              eventType="demo"
            >
              Book a demo
              <ArrowRight className="h-4 w-4" />
            </CalButton>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 w-full border-border bg-white/90 px-7 text-sm font-bold text-foreground backdrop-blur-sm transition-[background-color,border-color,transform] duration-150 hover:border-orange-500/40 hover:bg-white active:scale-[0.98] sm:h-14 sm:text-base"
            >
              <NavLink to="/features">
                <Play className="mr-2 h-4 w-4" />
                Explore the platform
              </NavLink>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 hidden gap-2 lg:grid"
          >
            {serviceProof.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <Check className="h-4 w-4 shrink-0 text-orange-500" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="-mx-5 mt-3 w-[calc(100%+2.5rem)] border-t border-orange-500/10 sm:-mx-6 sm:mt-6 sm:w-[calc(100%+3rem)] lg:hidden"
        >
          <img
            src="/images/generated/hero-ecosystem-mobile-display-v2.webp"
            alt="Phone, tablets, and laptop connected through Manuvoo's cloud hospitality platform"
            fetchPriority="high"
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
