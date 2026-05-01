import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Bell,
  Clock3,
  CreditCard,
  Gauge,
  ReceiptText,
  Utensils,
  Users,
  type LucideIcon,
} from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
  minDuration?: number;
}

const devices = [
  {
    src: "/images/splash/guest-phone.png",
    alt: "Guest mobile ordering app",
    className: "w-[24vw] max-w-[315px] min-w-[150px] -mr-[11vw] sm:-mr-[10vw] lg:-mr-[170px]",
    imageClassName: "-scale-x-100",
    shadowClassName: "left-[18%] right-[20%] bottom-[6%] h-[16%]",
    from: { x: -180, y: 120, scale: 1.22, rotate: -8 },
    delay: 0.15,
  },
  {
    src: "/images/splash/admin-laptop.png",
    alt: "Admin portal laptop",
    className: "z-20 w-[42vw] max-w-[660px] min-w-[280px]",
    imageClassName: "",
    shadowClassName: "left-[5%] right-[5%] bottom-[8%] h-[17%]",
    from: { x: 140, y: 125, scale: 1.2, rotate: 5 },
    delay: 0.82,
  },
  {
    src: "/images/splash/oms-tablet.png",
    alt: "OMS tablet",
    className: "z-10 w-[37vw] max-w-[555px] min-w-[245px] -ml-[12vw] sm:-ml-[10vw] lg:-ml-[172px]",
    imageClassName: "",
    shadowClassName: "left-[9%] right-[9%] bottom-[7%] h-[17%]",
    from: { x: 0, y: 150, scale: 1.22, rotate: -3 },
    delay: 0.58,
  },
];

const mobileSequence = [
  {
    src: "/images/splash/guest-phone.png",
    alt: "Guest mobile ordering app",
    className: "w-[58vw] max-w-[260px]",
    imageClassName: "-scale-x-100",
    delay: 0.25,
  },
  {
    src: "/images/splash/admin-laptop.png",
    alt: "Admin portal laptop",
    className: "w-[94vw] max-w-[520px]",
    imageClassName: "",
    delay: 1.18,
  },
  {
    src: "/images/splash/oms-tablet.png",
    alt: "OMS tablet",
    className: "w-[88vw] max-w-[480px]",
    imageClassName: "",
    delay: 2.08,
  },
];

const floatingCards: {
  Icon: LucideIcon;
  className: string;
  delay: number;
  bars: string[];
  dots?: number;
}[] = [
  {
    Icon: Users,
    className: "left-[5%] top-[31%] w-[150px]",
    bars: ["w-[78%]", "w-[54%]", "w-[64%]"],
    dots: 5,
    delay: 1.15,
  },
  {
    Icon: Gauge,
    className: "left-[5%] top-[50%] w-[156px]",
    bars: ["w-[46%]", "w-[82%]", "w-[68%]"],
    dots: 3,
    delay: 1.32,
  },
  {
    Icon: ReceiptText,
    className: "right-[5%] top-[27%] w-[190px]",
    bars: ["w-[88%]", "w-[70%]", "w-[58%]", "w-[74%]"],
    dots: 4,
    delay: 1.49,
  },
  {
    Icon: Clock3,
    className: "right-[5%] top-[46%] w-[190px]",
    bars: ["w-[76%]", "w-[54%]", "w-[88%]"],
    dots: 3,
    delay: 1.66,
  },
  {
    Icon: Bell,
    className: "right-[5%] top-[64%] w-[190px]",
    bars: ["w-[50%]", "w-[72%]", "w-[62%]"],
    dots: 3,
    delay: 1.83,
  },
  {
    Icon: Utensils,
    className: "left-[18%] top-[39%] w-[128px]",
    bars: ["w-[62%]", "w-[44%]"],
    dots: 4,
    delay: 1.74,
  },
  {
    Icon: CreditCard,
    className: "right-[22%] top-[35%] w-[128px]",
    bars: ["w-[78%]", "w-[52%]"],
    dots: 2,
    delay: 1.9,
  },
  {
    Icon: Activity,
    className: "left-[28%] top-[28%] w-[128px]",
    bars: ["w-[48%]", "w-[80%]"],
    dots: 3,
    delay: 2.04,
  },
];

export function SplashScreen({ onComplete, minDuration = 3900 }: SplashScreenProps) {
  const logo = "/images/brand/wordmark-white-transparent.png";

  useEffect(() => {
    const completeTimer = window.setTimeout(() => onComplete(), minDuration);
    return () => window.clearTimeout(completeTimer);
  }, [onComplete, minDuration]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[100] overflow-hidden bg-black"
      >
        <motion.img
          src="/images/splash/splash-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(0,0,0,0.1)_34%,rgba(0,0,0,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.02)_44%,rgba(0,0,0,0.76)_100%)]" />

        <div className="hidden absolute bottom-[7%] left-1/2 w-[90vw] max-w-[1260px] -translate-x-1/2 items-end justify-center sm:bottom-[8%] sm:flex lg:bottom-[8%]">
          {devices.map((device) => (
            <motion.div
              key={device.src}
              className={`relative flex shrink-0 items-end justify-center ${device.className}`}
              initial={{
                opacity: 0,
                x: device.from.x,
                y: device.from.y,
                scale: device.from.scale,
                rotate: device.from.rotate,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                filter: "blur(0px)",
              }}
              transition={{
                opacity: { duration: 0.4, delay: device.delay },
                x: { duration: 0.8, delay: device.delay, ease: [0.16, 1, 0.3, 1] },
                scale: { duration: 0.8, delay: device.delay, ease: [0.16, 1, 0.3, 1] },
                rotate: { duration: 0.8, delay: device.delay, ease: [0.16, 1, 0.3, 1] },
                filter: { duration: 0.45, delay: device.delay },
                y: { duration: 0.8, delay: device.delay, ease: [0.16, 1, 0.3, 1] },
              }}
              style={{ transformOrigin: "bottom center" }}
            >
              <div
                aria-hidden="true"
                className={`absolute rounded-full bg-black/62 blur-xl ${device.shadowClassName}`}
              />
              <img
                src={device.src}
                alt={device.alt}
                className={`relative z-10 h-auto w-full object-contain drop-shadow-[0_22px_26px_rgba(0,0,0,0.52)] ${device.imageClassName}`}
              />
            </motion.div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          {floatingCards.map((card, cardIndex) => (
            <motion.div
              key={`${card.className}-${cardIndex}`}
              aria-hidden="true"
              className={`absolute overflow-hidden rounded-lg border border-white/14 bg-black/44 p-3 text-white shadow-2xl shadow-black/35 backdrop-blur-md ${card.className}`}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-500/16 text-orange-300 ring-1 ring-orange-500/20">
                  <card.Icon className="h-5 w-5" />
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {Array.from({ length: card.dots ?? 3 }).map((_, index) => (
                    <span
                      key={index}
                      className={`h-2 w-2 rounded-full ${
                        index % 3 === 0
                          ? "bg-orange-500"
                          : index % 3 === 1
                            ? "bg-emerald-400"
                            : "bg-white/36"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-3 space-y-1.5">
                {card.bars.map((bar, index) => (
                  <div key={bar + index} className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full ${
                        index === card.bars.length - 1
                          ? "bg-emerald-400"
                          : "bg-orange-500"
                      } ${bar}`}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 sm:hidden">
          <div className="pointer-events-none absolute left-1/2 top-[16%] grid -translate-x-1/2 grid-cols-4 gap-2">
            {floatingCards.slice(0, 4).map((card, index) => (
              <motion.div
                key={`mobile-icon-${index}`}
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/14 bg-black/44 text-orange-300 shadow-2xl shadow-black/30 backdrop-blur-md"
                initial={{ opacity: 0, y: 12, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.45,
                  delay: 0.35 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <card.Icon className="h-5 w-5" />
              </motion.div>
            ))}
          </div>

          <div className="absolute inset-x-0 top-[23%] h-[48vh]">
            {mobileSequence.map((device) => (
              <motion.div
                key={`mobile-${device.src}`}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: 28, scale: 0.94, filter: "blur(8px)" }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: [28, 0, 0, -14],
                  scale: [0.94, 1, 1, 0.98],
                  filter: ["blur(8px)", "blur(0px)", "blur(0px)", "blur(5px)"],
                }}
                transition={{
                  duration: 1.15,
                  delay: device.delay,
                  times: [0, 0.2, 0.72, 1],
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className={`relative ${device.className}`}>
                  <div className="absolute left-[12%] right-[12%] bottom-[4%] h-[14%] rounded-full bg-black/68 blur-xl" />
                  <img
                    src={device.src}
                    alt={device.alt}
                    className={`relative z-10 h-auto w-full object-contain drop-shadow-[0_22px_26px_rgba(0,0,0,0.55)] ${device.imageClassName}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute left-1/2 top-[43%] -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.94, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.65, delay: 3.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={logo}
                alt="Manuvoo"
                className="h-20 w-auto object-contain drop-shadow-[0_14px_26px_rgba(0,0,0,0.55)]"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute left-[38%] top-[5.5%] hidden -translate-x-1/2 sm:block sm:top-[6.5%] lg:left-[38%]"
          initial={{ opacity: 0, y: -28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={logo}
            alt="Manuvoo"
            className="h-20 w-auto object-contain drop-shadow-[0_14px_26px_rgba(0,0,0,0.45)] sm:h-24 lg:h-32"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
