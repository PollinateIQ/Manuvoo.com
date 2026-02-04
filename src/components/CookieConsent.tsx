import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, ChevronDown, Shield, Settings, Eye, Bell } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { NavLink } from 'react-router-dom';
import { Switch } from '@/components/ui/switch';

interface CookiePreferences {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const cookieCategories = [
  {
    id: 'essential' as const,
    icon: Shield,
    title: 'Essential Cookies',
    description: 'Required for basic site functionality like authentication and security.',
    required: true,
  },
  {
    id: 'functional' as const,
    icon: Settings,
    title: 'Functional Cookies',
    description: 'Enable personalized features and remember your preferences.',
    required: false,
  },
  {
    id: 'analytics' as const,
    icon: Eye,
    title: 'Analytics Cookies',
    description: 'Help us understand how visitors interact with our website.',
    required: false,
  },
  {
    id: 'marketing' as const,
    icon: Bell,
    title: 'Marketing Cookies',
    description: 'Used to deliver relevant advertisements and track campaigns.',
    required: false,
  },
];

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    functional: true,
    analytics: true,
    marketing: true,
  });
  const { theme } = useTheme();

  useEffect(() => {
    // Check if user has already set cookie preferences
    const savedPreferences = localStorage.getItem('manuvoo-cookie-preferences');
    if (!savedPreferences) {
      // Show dialog immediately on every page load until user makes a selection
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const handleDeclineAll = () => {
    const essentialOnly: CookiePreferences = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    savePreferences(essentialOnly);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('manuvoo-cookie-preferences', JSON.stringify(prefs));
    setIsVisible(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
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
        >
          <div
            className={`max-w-6xl mx-auto rounded-2xl backdrop-blur-md border shadow-2xl overflow-hidden ${
              theme === 'dark'
                ? 'bg-black/90 border-white/20 shadow-black/50'
                : 'bg-white/90 border-gray-200 shadow-black/10'
            }`}
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
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
                    We value your privacy
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    We use cookies to enhance your browsing experience, serve personalized
                    content, and analyze our traffic. You can customize your preferences or learn more in
                    our{' '}
                    <NavLink
                      to="/cookie-policy"
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
                <button
                  onClick={handleDeclineAll}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    theme === 'dark'
                      ? 'hover:bg-white/10 text-gray-400 hover:text-white'
                      : 'hover:bg-black/5 text-gray-500 hover:text-black'
                  }`}
                  aria-label="Decline all cookies"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cookie Preferences */}
              <AnimatePresence>
                {showPreferences && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`mt-6 pt-6 border-t space-y-4 ${
                      theme === 'dark' ? 'border-white/10' : 'border-gray-200'
                    }`}>
                      {cookieCategories.map((category) => (
                        <div
                          key={category.id}
                          className={`flex items-start gap-4 p-4 rounded-xl border ${
                            theme === 'dark'
                              ? 'bg-white/5 border-white/10'
                              : 'bg-black/5 border-gray-200'
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              theme === 'dark'
                                ? 'bg-white/10'
                                : 'bg-black/10'
                            }`}
                          >
                            <category.icon className={`w-5 h-5 ${
                              theme === 'dark' ? 'text-white' : 'text-black'
                            }`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className={`font-semibold text-sm ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                              }`}>
                                {category.title}
                              </h4>
                              {category.required && (
                                <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500 font-medium">
                                  Required
                                </span>
                              )}
                            </div>
                            <p className={`text-xs ${
                              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {category.description}
                            </p>
                          </div>
                          <Switch
                            checked={preferences[category.id]}
                            onCheckedChange={() => togglePreference(category.id)}
                            disabled={category.required}
                            className={category.required ? 'opacity-50 cursor-not-allowed' : ''}
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <motion.button
                  onClick={handleAcceptAll}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 sm:flex-initial px-8 py-3 rounded-full font-medium text-sm transition-all ${
                    theme === 'dark'
                      ? 'bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/20'
                      : 'bg-black text-white hover:bg-gray-900 shadow-lg shadow-black/20'
                  }`}
                >
                  Accept All
                </motion.button>
                
                {showPreferences ? (
                  <motion.button
                    onClick={handleSavePreferences}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-1 sm:flex-initial px-8 py-3 rounded-full font-medium text-sm border transition-all ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30'
                        : 'bg-black/5 border-gray-300 text-black hover:bg-black/10 hover:border-gray-400'
                    }`}
                  >
                    Save Preferences
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={() => setShowPreferences(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-1 sm:flex-initial px-8 py-3 rounded-full font-medium text-sm border transition-all ${
                      theme === 'dark'
                        ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30'
                        : 'bg-black/5 border-gray-300 text-black hover:bg-black/10 hover:border-gray-400'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      Customize
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </motion.button>
                )}
                
                <motion.button
                  onClick={handleDeclineAll}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 sm:flex-initial px-8 py-3 rounded-full font-medium text-sm border transition-all ${
                    theme === 'dark'
                      ? 'border-white/20 text-gray-400 hover:bg-white/5 hover:text-white'
                      : 'border-gray-300 text-gray-600 hover:bg-black/5 hover:text-black'
                  }`}
                >
                  Decline All
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
