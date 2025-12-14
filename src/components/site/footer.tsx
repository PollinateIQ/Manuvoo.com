import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

import { Logo } from "@/components/site/logo";
import { ScrollToTopButton } from "@/components/site/scroll-to-top";
import { cn } from "@/lib/cn";

export function Footer() {
  const socialLinks = [
    { label: "Facebook", icon: Facebook, href: "#" },
    { label: "Twitter", icon: Twitter, href: "#" },
    { label: "Instagram", icon: Instagram, href: "#" },
    { label: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-borderNeutral bg-bg0 pt-20">
      {/* Creative Background Flare: Central spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent1/5 blur-[120px]"
      />
      
      {/* Secondary accent flare */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-accent2/5 blur-[100px]"
      />

      <div className="container-site relative z-10">
        {/* Brand Block - Centered */}
        <div className="flex flex-col items-center text-center">
          <Logo variant="inverse" size="xl" />
          <p className="mt-6 max-w-lg text-base leading-relaxed text-text2">
            Revolutionizing the dining experience by connecting restaurants and
            diners through intelligent reservation management and personalized
            recommendations.
          </p>

          {/* Unique Contact Cluster */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-medium text-text2">
            <a
              href="mailto:info@pollinateiq.co.za"
              className="group flex items-center gap-2 rounded-full border border-borderNeutral bg-surface1/50 px-5 py-2.5 transition hover:border-accent1/50 hover:bg-surface2 hover:text-text1"
            >
              <Mail className="h-4 w-4 text-text3 group-hover:text-accent1" />
              info@pollinateiq.co.za
            </a>
            <a
              href="tel:+27696848796"
              className="group flex items-center gap-2 rounded-full border border-borderNeutral bg-surface1/50 px-5 py-2.5 transition hover:border-accent1/50 hover:bg-surface2 hover:text-text1"
            >
              <Phone className="h-4 w-4 text-text3 group-hover:text-accent1" />
              +27 69 684 8796
            </a>
          </div>
          
          <a
            href="https://www.google.com/maps/search/?api=1&query=67th%20on%207th%2C%20Edenvale%2C%20Gauteng"
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center gap-2 text-sm text-text3 hover:text-accent1 transition-colors"
          >
            <MapPin className="h-4 w-4" />
            67th on 7th, Edenvale, Gauteng
          </a>

          {/* Creative Socials - Floating Pill */}
          <div className="mt-8 flex items-center gap-1 rounded-full border border-borderNeutral bg-surface1 p-1.5 shadow-xl">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-text2 transition hover:bg-surface2 hover:text-text1"
                aria-label={s.label}
              >
                <s.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Grid - Centered & Balanced */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-borderNeutral pt-12 md:grid-cols-3 lg:px-20">
          <div className="flex flex-col items-center text-center">
            <h4 className="mb-6 font-semibold text-text1">Company</h4>
            <div className="flex flex-col gap-3 text-sm text-text2">
              <Link href="/about" className="hover:text-accent1 hover:underline">About Us</Link>
              <Link href="/about" className="hover:text-accent1 hover:underline">Our Story</Link>
              <Link href="/careers" className="hover:text-accent1 hover:underline">Careers</Link>
              <Link href="/press" className="hover:text-accent1 hover:underline">Press</Link>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <h4 className="mb-6 font-semibold text-text1">Product</h4>
            <div className="flex flex-col gap-3 text-sm text-text2">
              <Link href="/services" className="hover:text-accent1 hover:underline">For Restaurants</Link>
              <Link href="/roadmap" className="hover:text-accent1 hover:underline">For Diners</Link>
              <Link href="/features" className="hover:text-accent1 hover:underline">Features</Link>
              <Link href="/pricing" className="hover:text-accent1 hover:underline">Pricing</Link>
            </div>
          </div>

          <div className="flex flex-col items-center text-center col-span-2 md:col-span-1">
            <h4 className="mb-6 font-semibold text-text1">Support</h4>
            <div className="flex flex-col gap-3 text-sm text-text2">
              <Link href="/help-center" className="hover:text-accent1 hover:underline">Help Center</Link>
              <Link href="/contact" className="hover:text-accent1 hover:underline">Contact Us</Link>
              <Link href="/restaurant-support" className="hover:text-accent1 hover:underline">Restaurant Support</Link>
              <Link href="/technical-support" className="hover:text-accent1 hover:underline">Technical Support</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-borderNeutral py-8">
          <div className="flex flex-col items-center gap-6 text-center text-xs text-text3">
            <p>© {new Date().getFullYear()} Manuvoo. All rights reserved.</p>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-medium">
              <Link href="/privacy" className="hover:text-text1 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-text1 transition-colors">Terms of Service</Link>
              <Link href="/popia" className="hover:text-text1 transition-colors">POPIA Compliance</Link>
              <Link href="/cookie-policy" className="hover:text-text1 transition-colors">Cookie Policy</Link>
            </div>

            <p className="max-w-2xl text-text3/60 leading-relaxed">
              Manuvoo is committed to protecting your privacy and complying with the Protection of Personal Information Act (POPIA). We use secure payment processing and never store sensitive card information. All restaurant partners are verified and meet our quality standards.
            </p>
          </div>
        </div>
      </div>
      
      <ScrollToTopButton />
    </footer>
  );
}
