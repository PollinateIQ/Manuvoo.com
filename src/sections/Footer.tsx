import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { PaymentMethods } from "@/components/PaymentMethods";
import { company, addressOneLine } from "@/config/company";
import { openCookieSettings } from "@/lib/cookieConsent";

/**
 * Every link appears exactly once across the three columns — no link is
 * repeated elsewhere in the footer. An `onClick` entry is a button, not a
 * page link (Cookie Settings reopens the consent banner).
 */
const footerLinks: Record<
  string,
  { label: string; href?: string; onClick?: () => void }[]
> = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Contact Us", href: "/contact" },
  ],
  "Customer Policies": [
    { label: "Refunds & Returns", href: "/refund-policy" },
    { label: "Cancellations", href: "/cancellation-policy" },
    { label: "Delivery & Shipping", href: "/delivery-policy" },
  ],
  Legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/privacy-policy#cookie-policy" },
    { label: "Cookie Settings", onClick: openCookieSettings },
    { label: "Intellectual Property", href: "/intellectual-property" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const { theme } = useTheme();
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
                    {link.onClick ? (
                      <button
                        type="button"
                        onClick={link.onClick}
                        className={`text-base transition-colors ${
                          theme === "dark"
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-500 hover:text-black"
                        }`}
                      >
                        {link.label}
                      </button>
                    ) : link.href?.startsWith("/") ? (
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

        {/*
          Section 1 — registered business identity. Centred, on its own,
          between dividers. This is the site's only copy of these details.
        */}
        <address className="not-italic text-center mb-8">
          <span
            className={`block text-base font-semibold ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {company.legalName}
          </span>
          <span className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-base text-gray-500">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>{addressOneLine}</span>
          </span>
          <span className="mt-1 block text-sm text-gray-500">
            Company Registration No. {company.registrationNumber}
          </span>
        </address>

        {/* Divider */}
        <div
          className={`border-t mb-8 ${
            theme === "dark" ? "border-white/10" : "border-gray-200"
          }`}
        ></div>

        {/*
          Section 2 — card acceptance, currency and country of domicile.
          Its own centred row after the navigation links and before the
          copyright line, which is the standard e-commerce footer pattern.
        */}
        <PaymentMethods className="mb-8" />

        {/* Divider */}
        <div
          className={`border-t mb-8 ${
            theme === "dark" ? "border-white/10" : "border-gray-200"
          }`}
        ></div>

        {/* Copyright, governing law and attribution */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-base text-gray-500 text-center">
            © {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </p>
          <p className="max-w-2xl text-center text-sm text-gray-500">
            Governed by the laws of the Republic of South Africa. No goods are
            shipped or exported outside South Africa.
          </p>

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

      {/* Scroll-to-top button - hidden on mobile/tablet */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-50">
        <AnimatePresence mode="wait">
          {isNearBottom && (
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
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
}
