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
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            GO LIVE IN 48 HOURS
          </motion.h2>

          {/* Subheader */}
          <motion.p 
            className="text-xl text-white/70 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our proven implementation process
          </motion.p>

          {/* Timeline Badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Clock className="w-4 h-4 mr-2" />
            48-Hour Implementation
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent hidden md:block"></div>

          <div className="space-y-12 md:space-y-16">
            {timelineSteps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.day}
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
                      <h3 className="text-2xl font-bold text-white mb-4">{step.day}</h3>
                      <ul className="space-y-2">
                        {step.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-center text-white/80">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mr-3 flex-shrink-0`}></div>
                            {task}
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
                    {index < timelineSteps.length - 1 && (
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

        {/* Bottom Message */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-block px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full">
            <p className="text-green-400 font-medium">
              No disruption to your business
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
