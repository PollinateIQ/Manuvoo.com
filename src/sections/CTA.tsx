import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { CalButton } from '@/components/CalButton';

export function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600" />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-full h-full bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Ready to transform your hospitality operations?
          </motion.h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Join venues already running smarter with Manuvoo. Book a demo and see
            how we can help your business thrive.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <CalButton className="inline-flex" eventType="demo">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-white/90 font-semibold px-8 py-6 text-base"
                >
                  Get started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CalButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <CalButton className="inline-flex" eventType="training">
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-white/90 font-semibold px-8 py-6 text-base"
                >
                  Book training
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CalButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <CalButton className="inline-flex" eventType="quick-chat">
                <Button
                  size="lg"
                  className="bg-orange-600 text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-6 text-base transition-colors border-2 border-white"
                >
                  Book a call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CalButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="bg-orange-600 text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-6 text-base transition-colors border-2 border-white"
                asChild
              >
                <NavLink to="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact sales
                </NavLink>
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
