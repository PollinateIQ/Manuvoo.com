import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { NavLink } from 'react-router-dom';
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  readCookieChoice,
  saveCookieChoice,
} from '@/lib/cookieConsent';

export function CookieConsent() {
  // Shown when there is no choice yet, or the last one is over 12 months old.
  const [isVisible, setIsVisible] = useState(() => !readCookieChoice());
  const { theme } = useTheme();

  // The footer's "Cookie Settings" link reopens the banner.
  useEffect(() => {
    const open = () => setIsVisible(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, open);
  }, []);

  const saveChoice = (analytics: boolean) => {
    saveCookieChoice(analytics);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          role="dialog"
          aria-label="Cookie settings"
        >
          <div
            className={`max-w-4xl mx-auto rounded-2xl backdrop-blur-md border shadow-2xl overflow-hidden ${
              theme === 'dark'
                ? 'bg-black/90 border-white/20 shadow-black/50'
                : 'bg-white/90 border-gray-200 shadow-black/10'
            }`}
          >
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-start gap-4 flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-tr from-white/20 to-white/10'
                      : 'bg-gradient-to-tr from-black/10 to-black/5'
                  }`}
                >
                  <Cookie
                    className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}
                  >
                    Cookie settings
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    Essential cookies keep this website secure and remember your
                    choices, and are always on. Analytics cookies, which count
                    visits so we can improve the site, are only used if you
                    accept. Read our{' '}
                    <NavLink
                      to="/privacy-policy#cookie-policy"
                      className={`underline font-medium ${
                        theme === 'dark'
                          ? 'text-white hover:text-gray-300'
                          : 'text-black hover:text-gray-700'
                      }`}
                    >
                      Cookie Policy
                    </NavLink>
                    .
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <motion.button
                  onClick={() => saveChoice(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-8 py-3 rounded-full font-medium text-sm transition-all ${
                    theme === 'dark'
                      ? 'bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/20'
                      : 'bg-black text-white hover:bg-gray-900 shadow-lg shadow-black/20'
                  }`}
                >
                  Accept
                </motion.button>
                <motion.button
                  onClick={() => saveChoice(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-8 py-3 rounded-full font-medium text-sm border transition-all ${
                    theme === 'dark'
                      ? 'border-white/20 text-gray-300 hover:bg-white/5 hover:text-white'
                      : 'border-gray-300 text-gray-700 hover:bg-black/5 hover:text-black'
                  }`}
                >
                  Decline
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
