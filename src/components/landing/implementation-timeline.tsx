'use client'

import { motion } from 'framer-motion'
import { Clock, CheckCircle, Users, Settings } from 'lucide-react'

export default function ImplementationTimeline() {
  const timelineSteps = [
    {
      day: "Day 1 - Morning",
      icon: Settings,
      tasks: [
        "Initial consultation",
        "Menu data collection", 
        "System configuration"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      day: "Day 1 - Afternoon", 
      icon: Users,
      tasks: [
        "Staff training session",
        "QR code setup",
        "Test orders"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      day: "Day 2",
      icon: CheckCircle,
      tasks: [
        "Live monitoring",
        "Fine-tuning",
        "You're operational!"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            GO LIVE IN 48 HOURS
          </motion.h2>

          {/* Subheader */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our proven implementation process
          </motion.p>

          {/* Timeline Badge */}
          <motion.div 
            className="inline-flex items-center px-3 sm:px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs sm:text-sm font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            48-Hour Implementation
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent hidden md:block"></div>
          
          {/* Timeline Line - Mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent md:hidden"></div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {timelineSteps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.day}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Mobile Layout */}
                  <div className="flex items-start gap-4 md:hidden">
                    {/* Mobile Timeline Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg border-4 border-gray-950`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Mobile Content Card */}
                    <div className="flex-1">
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 hover:bg-white/[0.05] transition-all duration-300">
                        <h3 className="text-lg font-bold text-white mb-3">{step.day}</h3>
                        <ul className="space-y-2">
                          {step.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-start text-white/80 text-sm">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mr-3 flex-shrink-0 mt-1`}></div>
                              <span className="leading-relaxed">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden md:flex md:items-center md:gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Desktop Content Card */}
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 md:p-8 hover:bg-white/[0.05] transition-all duration-300">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">{step.day}</h3>
                        <ul className="space-y-2">
                          {step.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-center text-white/80 text-sm sm:text-base">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mr-3 flex-shrink-0`}></div>
                              <span className="leading-relaxed">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Desktop Timeline Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Spacer for desktop layout */}
                    <div className="flex-1"></div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-green-500/10 border border-green-500/20 rounded-full">
            <p className="text-green-400 font-medium text-sm sm:text-base">
              No disruption to your business
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
