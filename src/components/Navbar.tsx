import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Sparkles, 
  Phone,
  Menu,
  X,
  Mail,
  Info,
  Map,
  User,
  Moon,
  Sun
} from 'lucide-react';
import { ImWhatsapp } from 'react-icons/im';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';

const desktopNavLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Info },
  { href: '/services', label: 'Services', icon: Sparkles },
  { href: '/pricing', label: 'Pricing', icon: Map },
  { href: '/roadmap', label: 'Resource', icon: Map },
];

const mobileNavLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Info },
  { href: '/services', label: 'Services', icon: Sparkles },
  { href: '/pricing', label: 'Pricing', icon: Map },
  { href: '/contact', label: 'Contact', icon: Phone },
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    if (href === '/') {
      return location.pathname === '/';
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
        className="fixed top-6 left-0 right-0 z-50 hidden lg:block"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.nav
            className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
              isScrolled 
                ? theme === 'dark' 
                  ? 'bg-black/90 backdrop-blur-xl shadow-2xl shadow-black/20 border border-white/10' 
                  : 'bg-white/90 backdrop-blur-xl shadow-2xl shadow-black/10 border border-gray-200'
                : theme === 'dark'
                  ? 'bg-black/80 backdrop-blur-md border border-white/10'
                  : 'bg-white/80 backdrop-blur-md border border-gray-200'
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
                  src={theme === 'dark' ? '/images/MANUVOO/3.png' : '/images/MANUVOO/4.png'}
                  alt="Manuvoo"
                  className="w-12 h-12 object-contain"
                />
                {/* Brand Name */}
                <span className={`font-bold text-lg tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  MANUVOO
                </span>
              </motion.div>
            </NavLink>

            {/* Navigation Links - Center */}
            <div className="flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
              {desktopNavLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                      isActive
                        ? theme === 'dark'
                          ? 'text-white bg-white/10'
                          : 'text-black bg-black/10'
                        : theme === 'dark'
                          ? 'text-gray-400 hover:text-white hover:bg-white/5'
                          : 'text-gray-600 hover:text-black hover:bg-black/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Contact & WhatsApp Buttons - Right */}
            <div className="flex items-center gap-2 flex-shrink-0 pr-2">
              <NavLink to="/contact">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    theme === 'dark'
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>Contact</span>
                </motion.div>
              </NavLink>
              
              <a 
                href="https://wa.me/27696848796" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700"
                >
                  <ImWhatsapp className="w-4 h-4" />
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
            ? theme === 'dark' 
              ? 'bg-black/95 backdrop-blur-xl shadow-lg' 
              : 'bg-white/95 backdrop-blur-xl shadow-lg'
            : theme === 'dark'
              ? 'bg-black/80 backdrop-blur-md'
              : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between h-12 px-4">
          {/* Mobile Logo */}
          <NavLink to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5"
            >
              {/* Logo */}
              <img 
                src={theme === 'dark' ? '/images/MANUVOO/3.png' : '/images/MANUVOO/4.png'}
                alt="Manuvoo"
                className="w-8 h-8 object-contain"
              />
              {/* Brand Name */}
              <span className={`font-bold text-base tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                MANUVOO
              </span>
            </motion.div>
          </NavLink>

          {/* Theme Toggle Only - Hamburger moved to bottom nav */}
          <div className="flex items-center">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className={`p-1.5 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'text-white hover:bg-white/10'
                  : 'text-black hover:bg-black/10'
              }`}
              whileTap={{ scale: 0.95 }}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {theme === 'dark' ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
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
                theme === 'dark' ? 'bg-black/90' : 'bg-white/95'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`fixed top-12 left-0 right-0 bottom-0 z-50 lg:hidden ${
                theme === 'dark' ? 'bg-black' : 'bg-white'
              }`}
            >
              {/* Close button - Top right */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-black/10 text-black hover:bg-black/20'
                }`}
              >
                <X className="w-6 h-6" />
              </motion.button>

              <div className="flex flex-col h-full p-6">
                {/* Mobile Nav Links */}
                <nav className="flex-1 flex flex-col items-center justify-center gap-4">
                  {desktopNavLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <NavLink
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-3xl font-semibold transition-all duration-200 ${
                          isActiveRoute(link.href)
                            ? theme === 'dark'
                              ? 'text-orange-500'
                              : 'text-orange-600'
                            : theme === 'dark'
                              ? 'text-white hover:text-orange-500'
                              : 'text-black hover:text-orange-600'
                        }`}
                      >
                        {link.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Contact & WhatsApp Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pb-8 space-y-3"
                >
                  <NavLink
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-medium transition-all duration-200 ${
                      theme === 'dark'
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contact</span>
                  </NavLink>
                  
                  <a 
                    href="https://wa.me/27696848796" 
                    target="_blank" 
                    rel="noopener noreferrer"
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

      {/* Mobile Bottom Navigation - iOS Safari Style (Two separate components) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden safe-area-inset-bottom">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 mx-3 mb-3"
        >
          {/* Hamburger Menu Button - Separate pill on left */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`flex-shrink-0 p-3 rounded-full shadow-2xl border transition-all duration-200 ${
              isMobileMenuOpen
                ? theme === 'dark'
                  ? 'bg-white text-black border-white/20'
                  : 'bg-black text-white border-black/20'
                : theme === 'dark'
                  ? 'bg-black/95 backdrop-blur-xl border-white/10 text-gray-400 hover:text-white shadow-black/50'
                  : 'bg-white/95 backdrop-blur-xl border-gray-200 text-gray-500 hover:text-black shadow-black/10'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 stroke-[2.5]" /> : <Menu className="w-5 h-5" />}
          </motion.button>

          {/* Nav Links - Separate pill on right */}
          <div className={`flex-1 rounded-full shadow-2xl border ${
            theme === 'dark'
              ? 'bg-black/95 backdrop-blur-xl border-white/10 shadow-black/50'
              : 'bg-white/95 backdrop-blur-xl border-gray-200 shadow-black/10'
          }`}>
            <div className="flex items-center justify-around h-12 px-2">
              {mobileNavLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `flex flex-col items-center justify-center px-2 py-1 rounded-full transition-all duration-200 ${
                      isActive
                        ? theme === 'dark'
                          ? 'text-white'
                          : 'text-black'
                        : theme === 'dark'
                          ? 'text-gray-500 hover:text-gray-300'
                          : 'text-gray-400 hover:text-gray-600'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className={`p-1 rounded-full transition-all duration-200 ${
                        isActive 
                          ? theme === 'dark'
                            ? 'bg-white/20'
                            : 'bg-black/10'
                          : ''
                      }`}>
                        <link.icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-medium">{link.label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
}
