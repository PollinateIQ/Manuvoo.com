'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Server, Clock, Database, Award } from 'lucide-react'

export default function SecurityCompliance() {
  const securityBadges = [
    {
      icon: Shield,
      title: "PCI Compliant",
      description: "Payment security standards"
    },
    {
      icon: Lock,
      title: "POPIA Compliant", 
      description: "Data protection compliance"
    },
    {
      icon: Server,
      title: "256-bit Encryption",
      description: "Military-grade security"
    },
    {
      icon: Clock,
      title: "99.9% Uptime",
      description: "Always available"
    },
    {
      icon: Database,
      title: "Daily Backups",
      description: "Your data is safe"
    },
    {
      icon: Award,
      title: "SOC 2",
      description: "Coming Soon"
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 bg-white/[0.02] border-t border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ENTERPRISE-GRADE SECURITY
          </motion.h2>
        </motion.div>

        {/* Security Badges Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {securityBadges.map((badge, index) => {
            const IconComponent = badge.icon
            return (
              <motion.div
                key={badge.title}
                className="group text-center p-3 sm:p-4 md:p-6 bg-white/[0.03] border border-white/[0.08] rounded-lg sm:rounded-xl hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                
                <h3 className="font-bold text-white text-xs sm:text-sm mb-1">
                  {badge.title}
                </h3>
                
                <p className="text-xs text-white/60 leading-tight">
                  {badge.description}
                </p>
                
                {badge.title === "SOC 2" && (
                  <div className="mt-1 sm:mt-2">
                    <span className="inline-block px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Message */}
        <motion.div 
          className="text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm sm:text-base md:text-lg text-white/80 italic leading-relaxed">
            "Your data is safer with us than in a filing cabinet"
          </p>
        </motion.div>
      </div>
    </section>
  )
}
