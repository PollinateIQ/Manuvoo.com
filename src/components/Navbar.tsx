import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Sparkles,
  Menu,
  X,
  Mail,
  Map,
  User,
  Moon,
  CreditCard,
  LayoutDashboard,
  Sun,
} from "lucide-react";
import { ImWhatsapp } from "react-icons/im";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const desktopNavLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/features", label: "Features", icon: LayoutDashboard },
  { href: "/services", label: "Services", icon: Sparkles },
  { href: "/pricing", label: "Pricing", icon: CreditCard },
  { href: "/roadmap", label: "Roadmap", icon: Map },
];

const mobileNavLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/features", label: "Features", icon: LayoutDashboard },
  { href: "/services", label: "Services", icon: Sparkles },
  { href: "/pricing", label: "Pricing", icon: CreditCard },
];

const mobileMenuCards = [
  {
    href: "/",
    label: "Home",
    description: "Landing page and platform overview",
    icon: Home,
  },
  {
    href: "/features",
    label: "Features",
    description: "QR ordering, payments, admin, and live ops",
    icon: LayoutDashboard,
  },
  {
    href: "/services",
    label: "Services",
    description: "Restaurant, cafe, hotel, and venue workflows",
    icon: Sparkles,
  },
  {
    href: "/pricing",
    label: "Pricing",
    description: "Plans, modules, and monthly estimates",
    icon: CreditCard,
  },
  {
    href: "/contact",
    label: "Command",
    description: "Open the direct sales and demo action",
    icon: User,
    featured: true,
  },
  {
    href: "/roadmap",
    label: "Roadmap",
    description: "What is live now and what is coming next",
    icon: Map,
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Talk to sales or request a guided demo",
    icon: User,
  },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change - using requestAnimationFrame to avoid sync setState
  useEffect(() => {
    const timeoutId = requestAnimationFrame(() => {
      setIsMobileMenuOpen(false);
    });
    return () => cancelAnimationFrame(timeoutId);
  }, [location.pathname]);

  // Check if current route is active
  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop Pill Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-7 left-0 right-0 z-50 hidden lg:block"
      >
        <div className="max-w-[1500px] mx-auto px-5">
          <motion.nav
            className={`flex items-center justify-between px-8 py-4 rounded-full transition-all duration-300 ${
              isScrolled
                ? theme === "dark"
                  ? "bg-black/90 backdrop-blur-xl shadow-2xl shadow-black/20 border border-white/10"
                  : "bg-white/90 backdrop-blur-xl shadow-2xl shadow-black/10 border border-gray-200"
                : theme === "dark"
                  ? "bg-black/80 backdrop-blur-md border border-white/10"
                  : "bg-white/80 backdrop-blur-md border border-gray-200"
            }`}
          >
            {/* Logo - Left */}
            <NavLink to="/" className="flex-shrink-0 pl-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                {/* Logo - Without Background */}
                <img
                  src={
                    theme === "dark"
                      ? "/images/brand/wordmark-white-transparent.png"
                      : "/images/brand/wordmark-black-transparent.png"
                  }
                  alt="Manuvoo"
                  className="h-9 w-auto object-contain"
                />
              </motion.div>
            </NavLink>

            {/* Navigation Links - Center */}
            <div className="flex items-center gap-1.5 absolute left-1/2 transform -translate-x-1/2">
              {desktopNavLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `relative px-5 py-2.5 text-base font-medium transition-all duration-200 rounded-full ${
                      isActive
                        ? theme === "dark"
                          ? "text-white bg-white/10"
                          : "text-black bg-black/10"
                        : theme === "dark"
                          ? "text-gray-400 hover:text-white hover:bg-white/5"
                          : "text-gray-600 hover:text-black hover:bg-black/5"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Contact & WhatsApp Buttons - Right */}
            <div className="flex items-center gap-2 flex-shrink-0 pr-2">
              <motion.button
                onClick={toggleTheme}
                className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 ${
                  theme === "dark"
                    ? "text-white hover:bg-white/10 border border-white/10"
                    : "text-black hover:bg-black/10 border border-black/10"
                }`}
                whileTap={{ scale: 0.95 }}
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </motion.button>

              <NavLink to="/contact">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-base font-medium transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  <User className="w-5 h-5" />
                  <span>Contact sales</span>
                </motion.div>
              </NavLink>

              <a
                href="https://wa.me/27696848796"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Manuvoo on WhatsApp"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-full text-base font-medium transition-all duration-200 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
                >
                  <ImWhatsapp className="w-5 h-5" />
                  <span>WhatsApp</span>
                </motion.div>
              </a>
            </div>
          </motion.nav>
        </div>
      </motion.header>

      {/* Mobile Header - iOS Safari Style (compact) */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${
          isScrolled
            ? theme === "dark"
              ? "bg-black/95 backdrop-blur-xl shadow-lg"
              : "bg-white/95 backdrop-blur-xl shadow-lg"
            : theme === "dark"
              ? "bg-black/80 backdrop-blur-md"
              : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between h-14 px-4">
          {/* Mobile Logo */}
          <NavLink to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5"
            >
              {/* Logo */}
              <img
                src={
                  theme === "dark"
                    ? "/images/brand/wordmark-white-transparent.png"
                    : "/images/brand/wordmark-black-transparent.png"
                }
                alt="Manuvoo"
                className="h-7 w-auto object-contain"
              />
            </motion.div>
          </NavLink>

          {/* Theme Toggle Only - Hamburger moved to bottom nav */}
          <div className="flex items-center">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-colors ${
                theme === "dark"
                  ? "text-white hover:bg-white/10"
                  : "text-black hover:bg-black/10"
              }`}
              whileTap={{ scale: 0.95 }}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {theme === "dark" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`fixed inset-0 z-40 lg:hidden ${
                theme === "dark" ? "bg-black/90" : "bg-white/95"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`fixed top-14 left-0 right-0 bottom-0 z-50 lg:hidden ${
                theme === "dark" ? "bg-black" : "bg-white"
              }`}
            >
              {/* Close button - Top right */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-black/10 text-black hover:bg-black/20"
                }`}
              >
                <X className="w-6 h-6" />
              </motion.button>

              <div className="flex h-full flex-col overflow-y-auto px-5 pb-6 pt-16">
                {/* Mobile Nav Cards */}
                <nav className="grid gap-3">
                  {mobileMenuCards.map((link, index) => {
                    const active = isActiveRoute(link.href);
                    return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <NavLink
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`group flex items-center gap-4 rounded-md border p-4 text-left shadow-lg transition-[background-color,border-color,box-shadow,transform] duration-200 active:scale-[0.985] ${
                          link.featured
                            ? "border-orange-500/55 bg-orange-500 text-white shadow-orange-500/20"
                            : active
                            ? theme === "dark"
                              ? "border-orange-500/45 bg-orange-500/12 text-white"
                              : "border-orange-500/45 bg-orange-500/10 text-black"
                            : theme === "dark"
                              ? "border-white/10 bg-white/[0.045] text-white hover:border-orange-500/30 hover:bg-white/[0.07]"
                              : "border-black/10 bg-black/[0.035] text-black hover:border-orange-500/30 hover:bg-black/[0.055]"
                        }`}
                      >
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md transition-colors duration-200 ${
                            link.featured
                              ? "bg-white text-orange-600"
                              : active
                              ? "bg-orange-500 text-white"
                              : theme === "dark"
                                ? "bg-white/8 text-orange-400 group-hover:bg-orange-500/15"
                                : "bg-black/5 text-orange-600 group-hover:bg-orange-500/12"
                          }`}
                        >
                          <link.icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-base font-semibold leading-tight">
                            {link.label}
                          </span>
                          <span
                            className={`mt-1 block text-sm leading-snug ${
                              link.featured
                                ? "text-white/78"
                                : theme === "dark"
                                ? "text-white/58"
                                : "text-black/58"
                            }`}
                          >
                            {link.description}
                          </span>
                        </span>
                        <span
                          className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                            link.featured
                              ? "bg-white"
                              : active
                              ? "bg-orange-500"
                              : theme === "dark"
                                ? "bg-white/18 group-hover:bg-orange-500/70"
                                : "bg-black/18 group-hover:bg-orange-500/70"
                          }`}
                        />
                      </NavLink>
                    </motion.div>
                    );
                  })}
                </nav>

                {/* Mobile Contact & WhatsApp Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-auto space-y-3 pt-6"
                >
                  <NavLink
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-medium transition-all duration-200 ${
                      theme === "dark"
                        ? "bg-white text-black hover:bg-gray-100"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contact sales</span>
                  </NavLink>

                  <a
                    href="https://wa.me/27696848796"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with Manuvoo on WhatsApp"
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-medium transition-all duration-200 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
                  >
                    <ImWhatsapp className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation — full-width single tab bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`border-t ${
            theme === "dark"
              ? "bg-black/95 backdrop-blur-xl border-white/10"
              : "bg-white/95 backdrop-blur-xl border-gray-200"
          }`}
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <div className="flex items-stretch h-[62px]">
            {/* Main nav links — 4 tabs */}
            {mobileNavLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className="flex-1 min-w-0"
              >
                {({ isActive }) => (
                  <div
                    className={`flex flex-col items-center justify-center h-full gap-[3px] transition-all duration-200 ${
                      isActive
                        ? "text-orange-500"
                        : theme === "dark"
                          ? "text-gray-500 hover:text-gray-300"
                          : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {/* Icon with subtle orange pill when active */}
                    <div
                      className={`flex items-center justify-center w-10 h-7 rounded-full transition-all duration-200 ${
                        isActive
                          ? theme === "dark"
                            ? "bg-orange-500/15"
                            : "bg-orange-500/12"
                          : ""
                      }`}
                    >
                      <link.icon className="w-[20px] h-[20px]" />
                    </div>
                    <span className="text-[10px] font-semibold leading-none tracking-wide">
                      {link.label}
                    </span>
                  </div>
                )}
              </NavLink>
            ))}

            {/* Thin vertical divider before More */}
            <div
              className={`w-px my-4 flex-shrink-0 ${
                theme === "dark" ? "bg-white/10" : "bg-gray-200"
              }`}
            />

            {/* More / Menu tab */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`flex-1 min-w-0 flex flex-col items-center justify-center h-full gap-[3px] transition-all duration-200 ${
                isMobileMenuOpen
                  ? "text-orange-500"
                  : theme === "dark"
                    ? "text-gray-500 hover:text-gray-300"
                    : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <div
                className={`flex items-center justify-center w-10 h-7 rounded-full transition-all duration-200 ${
                  isMobileMenuOpen
                    ? theme === "dark"
                      ? "bg-orange-500/15"
                      : "bg-orange-500/12"
                    : ""
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-[20px] h-[20px]" />
                ) : (
                  <Menu className="w-[20px] h-[20px]" />
                )}
              </div>
              <span className="text-[10px] font-semibold leading-none tracking-wide">
                More
              </span>
            </button>
          </div>
        </motion.div>
      </nav>
    </>
  );
}
