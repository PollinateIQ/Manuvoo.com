import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin, ArrowUp, Moon, Sun } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Story', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Product: [
    { label: 'For Restaurants', href: '/restaurants' },
    { label: 'For Diners', href: '/diners' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
  ],
  Support: [
    { label: 'Help Center', href: '#' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Restaurant Support', href: '#' },
    { label: 'Technical Support', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  const { theme, toggleTheme } = useTheme();
  const { scrollPosition } = useScrollPosition();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check if user has scrolled near the bottom of the page
  const isNearBottom = scrollPosition > 200;

  // Theme-aware logo - using 3.png (white) for dark mode and 4.png (black) for light mode
  const logo = theme === 'dark' ? '/images/3.png' : '/images/4.png';

  return (
    <footer className={`relative border-t ${
      theme === 'dark' 
        ? 'bg-black border-white/10' 
        : 'bg-white border-gray-200'
    }`}>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - Centered */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center mb-6 group">
            <img 
              src={logo}
              alt="Manuvoo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <span className={`text-2xl md:text-3xl font-bold tracking-wider ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>MANUVOO</span>
          </NavLink>
          
          {/* Tagline */}
          <p className={`max-w-lg mb-8 leading-relaxed ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Revolutionizing the dining experience by connecting restaurants and
            diners through intelligent reservation management and personalized
            recommendations.
          </p>
          
          {/* Contact Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <a 
              href="mailto:info@pollinateiq.co.za"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm transition-colors ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                  : 'bg-black/5 border-gray-200 text-gray-600 hover:bg-black/10 hover:text-black'
              }`}
            >
              <Mail className="w-4 h-4" />
              info@pollinateiq.co.za
            </a>
            <a 
              href="tel:+27696848796"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm transition-colors ${
                theme === 'dark'
                  ? 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                  : 'bg-black/5 border-gray-200 text-gray-600 hover:bg-black/10 hover:text-black'
              }`}
            >
              <Phone className="w-4 h-4" />
              +27 69 684 8796
            </a>
          </div>
          
          {/* Address */}
          <div className={`flex items-center gap-2 text-sm mb-8 ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
          }`}>
            <MapPin className="w-4 h-4" />
            <span>67th on 7th, Edenvale, Gauteng</span>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/10 text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 hover:border-orange-500/30'
                    : 'bg-black/5 border-gray-200 text-gray-500 hover:text-orange-500 hover:bg-orange-500/10 hover:border-orange-500/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t mb-12 ${
          theme === 'dark' ? 'border-white/10' : 'border-gray-200'
        }`}></div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="text-center">
              <h3 className={`font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <NavLink
                        to={link.href}
                        className={`text-sm transition-colors ${
                          theme === 'dark'
                            ? 'text-gray-400 hover:text-white'
                            : 'text-gray-500 hover:text-black'
                        }`}
                      >
                        {link.label}
                      </NavLink>
                    ) : (
                      <a
                        href={link.href}
                        className={`text-sm transition-colors ${
                          theme === 'dark'
                            ? 'text-gray-400 hover:text-white'
                            : 'text-gray-500 hover:text-black'
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
        <div className={`border-t mb-8 ${
          theme === 'dark' ? 'border-white/10' : 'border-gray-200'
        }`}></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Manuvoo. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#" className={`transition-colors ${
              theme === 'dark' ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-black'
            }`}>
              Privacy Policy
            </a>
            <a href="#" className={`transition-colors ${
              theme === 'dark' ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-black'
            }`}>
              Terms of Service
            </a>
            <a href="#" className={`transition-colors ${
              theme === 'dark' ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-black'
            }`}>
              POPIA Compliance
            </a>
            <NavLink to="/cookie-policy" className={`transition-colors ${
              theme === 'dark' ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-black'
            }`}>
              Cookie Policy
            </NavLink>
            <NavLink to="/intellectual-property" className={`transition-colors ${
              theme === 'dark' ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-black'
            }`}>
              Intellectual Property
            </NavLink>
          </div>
          
          {/* PollinateIQ Branding */}
          <div className={`mt-4 pt-4 border-t w-full max-w-md mx-auto text-center ${
            theme === 'dark' ? 'border-white/10' : 'border-gray-200'
          }`}>
            <p className="text-sm text-gray-500">
              A Product of{' '}
              <a 
                href="https://pollinateiq.co.za" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`font-semibold transition-colors ${
                  theme === 'dark' 
                    ? 'text-orange-400 hover:text-orange-300' 
                    : 'text-orange-600 hover:text-orange-500'
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
              className={`w-14 h-14 rounded-full backdrop-blur-sm border shadow-lg flex items-center justify-center transition-all duration-300 group ${
                theme === 'dark'
                  ? 'bg-gradient-to-tr from-white/10 to-white/5 border-white/20 shadow-black/50 text-white hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-black/60'
                  : 'bg-gradient-to-tr from-black/10 to-black/5 border-gray-300 shadow-black/10 text-black hover:from-black/20 hover:to-black/10 hover:border-gray-400 hover:shadow-xl hover:shadow-black/20'
              }`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
              transition={{ duration: 0.3 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
            </motion.button>
          ) : (
            <motion.button
              key="theme-toggle"
              onClick={toggleTheme}
              className={`w-14 h-14 rounded-full backdrop-blur-sm border shadow-lg flex items-center justify-center transition-all duration-300 group ${
                theme === 'dark'
                  ? 'bg-gradient-to-tr from-white/10 to-white/5 border-white/20 shadow-black/50 text-white hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-black/60'
                  : 'bg-gradient-to-tr from-black/10 to-black/5 border-gray-300 shadow-black/10 text-black hover:from-black/20 hover:to-black/10 hover:border-gray-400 hover:shadow-xl hover:shadow-black/20'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
              transition={{ duration: 0.3 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
}
