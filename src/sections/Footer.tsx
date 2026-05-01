import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Moon,
  Sun,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Story", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Product: [
    { label: "For Restaurants", href: "/restaurants" },
    { label: "For Diners", href: "/diners" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "/contact" },
    { label: "Restaurant Support", href: "#" },
    { label: "Technical Support", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const { theme, toggleTheme } = useTheme();
  const { scrollPosition } = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Check if user has scrolled near the bottom of the page
  const isNearBottom = scrollPosition > 200;

  // Theme-aware logo - use the provided wordmark assets directly.
  const logo =
    theme === "dark"
      ? "/images/brand/wordmark-white-transparent.png"
      : "/images/brand/wordmark-black-transparent.png";

  return (
    <footer
      className={`relative border-t ${
        theme === "dark"
          ? "bg-black border-white/10"
          : "bg-white border-gray-200"
      }`}
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24">
        {/* Top Section - Centered */}
        <div className="flex flex-col items-center text-center mb-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center mb-8 group">
            <img
              src={logo}
              alt="Manuvoo"
              className="h-14 w-auto object-contain md:h-16"
            />
          </NavLink>

          {/* Tagline */}
          <p
            className={`max-w-2xl mb-10 text-base sm:text-lg leading-relaxed ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Revolutionizing the dining experience by connecting restaurants and
            diners through intelligent reservation management and personalized
            recommendations.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="mailto:info@manuvoo.com"
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full border text-base transition-colors ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                  : "bg-black/5 border-gray-200 text-gray-600 hover:bg-black/10 hover:text-black"
              }`}
            >
              <Mail className="w-5 h-5" />
              info@manuvoo.com
            </a>
            <a
              href="tel:+27696848796"
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full border text-base transition-colors ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                  : "bg-black/5 border-gray-200 text-gray-600 hover:bg-black/10 hover:text-black"
              }`}
            >
              <Phone className="w-5 h-5" />
              +27 69 684 8796
            </a>
          </div>

          {/* Address */}
          <div
            className={`flex items-center gap-2.5 text-base mb-10 ${
              theme === "dark" ? "text-gray-500" : "text-gray-500"
            }`}
          >
            <MapPin className="w-5 h-5" />
            <span>18 Angola Rd, Selcourt, Springs, 1567</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 hover:border-orange-500/30"
                    : "bg-black/5 border-gray-200 text-gray-500 hover:text-orange-500 hover:bg-orange-500/10 hover:border-orange-500/30"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className={`border-t mb-14 ${
            theme === "dark" ? "border-white/10" : "border-gray-200"
          }`}
        ></div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-14 mb-14">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="text-center">
              <h3
                className={`text-lg font-semibold mb-5 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <NavLink
                        to={link.href}
                        className={`text-base transition-colors ${
                          theme === "dark"
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-black"
                        }`}
                      >
                        {link.label}
                      </NavLink>
                    ) : (
                      <a
                        href={link.href}
                        className={`text-base transition-colors ${
                          theme === "dark"
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-black"
                        }`}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className={`border-t mb-8 ${
            theme === "dark" ? "border-white/10" : "border-gray-200"
          }`}
        ></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-5">
          <p className="text-base text-gray-500">
            © 2025 Manuvoo. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-7 text-base">
            <a
              href="#"
              className={`transition-colors ${
                theme === "dark"
                  ? "text-gray-500 hover:text-white"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={`transition-colors ${
                theme === "dark"
                  ? "text-gray-500 hover:text-white"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className={`transition-colors ${
                theme === "dark"
                  ? "text-gray-500 hover:text-white"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              POPIA Compliance
            </a>
            <NavLink
              to="/cookie-policy"
              className={`transition-colors ${
                theme === "dark"
                  ? "text-gray-500 hover:text-white"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Cookie Policy
            </NavLink>
            <NavLink
              to="/intellectual-property"
              className={`transition-colors ${
                theme === "dark"
                  ? "text-gray-500 hover:text-white"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Intellectual Property
            </NavLink>
          </div>

          {/* PollinateIQ Branding */}
          <div
            className={`mt-4 pt-4 border-t w-full max-w-md mx-auto text-center ${
              theme === "dark" ? "border-white/10" : "border-gray-200"
            }`}
          >
            <p className="text-base text-gray-500">
              A Product of{" "}
              <a
                href="https://pollinateiq.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold transition-colors ${
                  theme === "dark"
                    ? "text-orange-400 hover:text-orange-300"
                    : "text-orange-600 hover:text-orange-500"
                }`}
              >
                PollinateIQ
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Smart Action Button - Hidden on mobile/tablet, visible on desktop */}
      {/* Shows theme toggle when at top, scroll to top button when scrolled down */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-50">
        <AnimatePresence mode="wait">
          {isNearBottom ? (
            <motion.button
              key="scroll-to-top"
              onClick={scrollToTop}
              className={`w-16 h-16 rounded-full backdrop-blur-sm border shadow-lg flex items-center justify-center transition-all duration-300 group ${
                theme === "dark"
                  ? "bg-gradient-to-tr from-white/10 to-white/5 border-white/20 shadow-black/50 text-white hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-black/60"
                  : "bg-gradient-to-tr from-black/10 to-black/5 border-gray-300 shadow-black/10 text-black hover:from-black/20 hover:to-black/10 hover:border-gray-400 hover:shadow-xl hover:shadow-black/20"
              }`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
              transition={{ duration: 0.3 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
            </motion.button>
          ) : (
            <motion.button
              key="theme-toggle"
              onClick={toggleTheme}
              className={`w-16 h-16 rounded-full backdrop-blur-sm border shadow-lg flex items-center justify-center transition-all duration-300 group ${
                theme === "dark"
                  ? "bg-gradient-to-tr from-white/10 to-white/5 border-white/20 shadow-black/50 text-white hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-black/60"
                  : "bg-gradient-to-tr from-black/10 to-black/5 border-gray-300 shadow-black/10 text-black hover:from-black/20 hover:to-black/10 hover:border-gray-400 hover:shadow-xl hover:shadow-black/20"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
              transition={{ duration: 0.3 }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Moon className="w-6 h-6 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
}
