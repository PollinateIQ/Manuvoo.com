'use client'

import { motion } from 'framer-motion'
import { Target, DollarSign, Trophy, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import MissionTimeline from './mission-timeline'

export default function MissionImpact() {
  const impactCards = [
    {
      icon: Target,
      number: '2,000+',
      label: 'SME RESTAURANTS',
      description: 'Transforming operations for small to medium establishments by 2026',
      title: 'Target Impact'
    },
    {
      icon: DollarSign,
      number: '35%',
      label: 'COST REDUCTION', 
      description: 'Guaranteed operational savings through integrated efficiency',
      title: 'Cost Revolution'
    },
    {
      icon: Trophy,
      number: '#1',
      label: 'HOSPITALITY PARTNER',
      description: 'Becoming Africa\'s most trusted restaurant technology advocate',
      title: 'Industry Champion'
    },
    {
      icon: TrendingUp,
      number: '40%',
      label: 'PROFIT INCREASE',
      description: 'Average profit boost through waste reduction & efficiency gains',
      title: 'Profit Growth'
    }
  ]

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Animated Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent animate-shimmer"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Mission Badge */}
          <motion.div 
            className="inline-block px-5 py-2 mb-6 text-xs font-semibold tracking-wider text-white/80 uppercase border border-white/20 bg-white/5 rounded-full backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            [ OUR 2026 MISSION ]
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Championing Small & Medium Restaurants Across Africa
          </motion.h2>

          {/* Subtext */}
          <motion.p 
            className="text-lg text-white/70 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We're building the future of hospitality technology. Our mission is to empower 
            every restaurant with enterprise-level capabilities at revolutionary pricing.
          </motion.p>
        </motion.div>

        {/* Impact Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {impactCards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <motion.div
                key={card.title}
                className="group relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.15] hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              >
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>

                {/* Number */}
                <div className="text-3xl font-bold mb-2 text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  {card.number}
                </div>

                {/* Label */}
                <div className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-3">
                  {card.label}
                </div>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Mission Timeline */}
        <div className="mt-20">
          <MissionTimeline />
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">
            Join Our Mission
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Partner With Us
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/5 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Request Early Access
            </Button>
          </div>

          <p className="text-white/70 text-sm">
            Be part of the hospitality revolution. Let's grow together.
          </p>
        </motion.div>
      </div>

      {/* Custom CSS for shimmer animation */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 10s infinite;
        }
      `}</style>
    </section>
  )
}
