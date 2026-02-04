import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { LayoutDashboard, Package, Smartphone, QrCode } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
  minDuration?: number;
}

export function SplashScreen({ onComplete, minDuration = 5000 }: SplashScreenProps) {
  const { theme } = useTheme();
  const [phase, setPhase] = useState<'features' | 'logo' | 'fadeout'>('features');

  // Logo path based on theme - using only 3.png (white) or 4.png (black)
  const logo = theme === 'dark' ? '/images/3.png' : '/images/4.png';

  // Feature icons data with text descriptions
  const features = [
    { icon: LayoutDashboard, label: 'Admin Portal', text: 'Manage your restaurant', delay: 0 },
    { icon: Package, label: 'OMS', text: 'Order Management System', delay: 0.3 },
    { icon: Smartphone, label: 'Customer App', text: 'Book & discover dining', delay: 0.6 },
    { icon: QrCode, label: 'QR Code', text: 'Scan & order instantly', delay: 0.9 },
  ];

  useEffect(() => {
    // Phase timing
    const timings = {
      'features': 2400, // Show feature icons with text (longer duration)
      'logo': 1800,     // Show logo with brand name (slower)
      'fadeout': 400,   // Fade out
    };

    // Start with features, then show logo with brand, then fade out
    const timer1 = setTimeout(() => setPhase('logo'), timings['features']);
    const timer2 = setTimeout(() => setPhase('fadeout'), timings['features'] + timings['logo']);
    const timer3 = setTimeout(() => onComplete(), minDuration);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete, minDuration]);

  return (
    <AnimatePresence>
      {phase !== 'fadeout' ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={`fixed inset-0 z-[100] flex items-center justify-center ${
            theme === 'dark' ? 'bg-black' : 'bg-white'
          }`}
        >
          {/* Background gradient effect */}
          <div className={`absolute inset-0 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
              : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
          }`} />
          
          {/* Subtle radial glow behind logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={`absolute w-96 h-96 rounded-full blur-3xl ${
              theme === 'dark' 
                ? 'bg-white/5' 
                : 'bg-black/5'
            }`}
          />

          {/* Feature Icons - Sequential Reveal with Text (First) */}
          {phase === 'features' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-3xl px-8"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    delay: feature.delay,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-center gap-5 p-5 rounded-2xl backdrop-blur-sm"
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    theme === 'dark'
                      ? 'bg-white/10 border border-white/20'
                      : 'bg-black/10 border border-black/20'
                  }`}>
                    <feature.icon className={`w-8 h-8 md:w-10 md:h-10 ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`} />
                  </div>
                  <div className="flex flex-col gap-1 text-left">
                    <motion.h3
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: feature.delay + 0.2,
                        duration: 0.5,
                      }}
                      className={`text-base md:text-lg font-semibold ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                      }`}
                    >
                      {feature.label}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: feature.delay + 0.3,
                        duration: 0.5,
                      }}
                      className={`text-xs md:text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {feature.text}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Logo Container (Second - After Icons) */}
          {phase === 'logo' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="Manuvoo Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Brand Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
                className="mt-12"
              >
                <h1 className={`text-4xl md:text-5xl font-bold tracking-[0.3em] ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  MANUVOO
                </h1>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
