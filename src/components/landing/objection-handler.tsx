'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ObjectionHandler() {
  const objections = [
    {
      concern: "My staff isn't tech-savvy",
      answer: "Our interface is simpler than WhatsApp. If they can use a phone, they can use Manuvoo."
    },
    {
      concern: "What if customers prefer traditional ordering?",
      answer: "They still can! Manuvoo enhances, not replaces. Staff can input orders for customers who prefer it."
    },
    {
      concern: "I'm locked into contracts",
      answer: "We'll help you transition smoothly. Many clients run both systems briefly. No rush, no pressure."
    },
    {
      concern: "It sounds too good to be true",
      answer: "That's why we offer a 30-day free trial. See the results yourself, risk-free."
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
            COMMON CONCERNS, CLEAR ANSWERS
          </motion.h2>
        </motion.div>

        {/* Objection Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {objections.map((objection, index) => (
            <motion.div
              key={index}
              className="group bg-white/[0.03] border border-white/[0.08] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
            >
              {/* Concern */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-start mb-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-500/20 flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400"></div>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">
                    "{objection.concern}"
                  </h3>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
              </div>

              {/* Answer */}
              <div className="text-center">
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  "{objection.answer}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
