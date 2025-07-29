'use client'

import { motion } from 'framer-motion'
import { Target, DollarSign, Trophy, TrendingUp, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MissionImpact() {
  const missionSteps = [
    {
      phase: "Phase 1: Foundation",
      icon: Target,
      number: '2,000+',
      label: 'SME RESTAURANTS',
      description: 'Transforming operations for small to medium establishments by 2026',
      title: 'Target Impact',
      color: "from-blue-500 to-cyan-500",
      goals: [
        "Launch in major SA cities",
        "Onboard first 500 restaurants",
        "Establish core technology stack"
      ]
    },
    {
      phase: "Phase 2: Optimization",
      icon: DollarSign,
      number: '35%',
      label: 'COST REDUCTION', 
      description: 'Guaranteed operational savings through integrated efficiency',
      title: 'Cost Revolution',
      color: "from-green-500 to-emerald-500",
      goals: [
        "Implement AI-driven analytics",
        "Reduce operational costs by 35%",
        "Automate inventory management"
      ]
    },
    {
      phase: "Phase 3: Expansion",
      icon: Trophy,
      number: '#1',
      label: 'HOSPITALITY PARTNER',
      description: 'Becoming Africa\'s most trusted restaurant technology advocate',
      title: 'Industry Champion',
      color: "from-purple-500 to-pink-500",
      goals: [
        "Expand across African markets",
        "Build strategic partnerships",
        "Become industry standard"
      ]
    },
    {
      phase: "Phase 4: Innovation",
      icon: TrendingUp,
      number: '40%',
      label: 'PROFIT INCREASE',
      description: 'Average profit boost through waste reduction & efficiency gains',
      title: 'Profit Growth',
      color: "from-orange-500 to-red-500",
      goals: [
        "Launch next-gen features",
        "Achieve 40% profit increase",
        "Pioneer hospitality innovation"
      ]
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

        {/* Mission Timeline Badge */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Clock className="w-4 h-4 mr-2" />
            2026 Mission Roadmap
          </motion.div>
        </motion.div>

        {/* Mission Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent hidden md:block"></div>

          <div className="space-y-12 md:space-y-16">
            {missionSteps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.title}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 md:p-8 hover:bg-white/[0.05] transition-all duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2">{step.phase}</h3>
                      
                      {/* Impact Metrics */}
                      <div className="mb-4">
                        <div className="text-3xl font-bold mb-1 text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                          {step.number}
                        </div>
                        <div className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                          {step.label}
                        </div>
                        <p className="text-sm text-white/60 mb-4">
                          {step.description}
                        </p>
                      </div>

                      {/* Goals List */}
                      <ul className="space-y-2">
                        {step.goals.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-center text-white/80">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mr-3 flex-shrink-0`}></div>
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {/* Connecting Line for Mobile */}
                    {index < missionSteps.length - 1 && (
                      <div className="md:hidden w-1 h-12 bg-gradient-to-b from-primary/50 to-transparent mx-auto mt-4"></div>
                    )}
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              )
            })}
          </div>
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
