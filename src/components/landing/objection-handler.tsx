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
            COMMON CONCERNS, CLEAR ANSWERS
          </motion.h2>
        </motion.div>

        {/* Objection Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {objections.map((objection, index) => (
            <motion.div
              key={index}
              className="group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
            >
              {/* Concern */}
              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    "{objection.concern}"
                  </h3>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Answer */}
              <div className="text-center">
                <p className="text-white/80 leading-relaxed">
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
