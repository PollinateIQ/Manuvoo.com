'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ComparisonTable() {
  const comparisons = [
    {
      feature: "Order Accuracy",
      traditional: { value: "83%", isGood: false },
      manuvoo: { value: "99.5%", isGood: true }
    },
    {
      feature: "Setup Time", 
      traditional: { value: "2-4 weeks", isGood: false },
      manuvoo: { value: "48 hours", isGood: true }
    },
    {
      feature: "Monthly Cost",
      traditional: { value: "R15,000+", isGood: false },
      manuvoo: { value: "R3,999", isGood: true }
    },
    {
      feature: "Systems Needed",
      traditional: { value: "5-7", isGood: false },
      manuvoo: { value: "1", isGood: true }
    },
    {
      feature: "Training Time",
      traditional: { value: "40+ hours", isGood: false },
      manuvoo: { value: "2 hours", isGood: true }
    },
    {
      feature: "Theft Prevention",
      traditional: { value: "No", isGood: false, isBoolean: true },
      manuvoo: { value: "Yes", isGood: true, isBoolean: true }
    },
    {
      feature: "Real-time Data",
      traditional: { value: "No", isGood: false, isBoolean: true },
      manuvoo: { value: "Yes", isGood: true, isBoolean: true }
    },
    {
      feature: "Support",
      traditional: { value: "Business hours", isGood: false },
      manuvoo: { value: "24/7", isGood: true }
    }
  ]

  return (
    <section className="relative py-24 bg-black overflow-hidden">
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
            MANUVOO VS. THE OLD WAY
          </motion.h2>
        </motion.div>

        {/* Comparison Table */}
        <motion.div 
          className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-white/[0.05] border-b border-white/[0.08]">
            <div className="p-6 text-white/60 font-medium"></div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-red-400">Traditional</h3>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-primary">Manuvoo</h3>
            </div>
          </div>

          {/* Table Rows */}
          {comparisons.map((item, index) => (
            <motion.div
              key={item.feature}
              className="grid grid-cols-3 border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors duration-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + (index * 0.05) }}
            >
              {/* Feature Name */}
              <div className="p-6 font-medium text-white">
                {item.feature}
              </div>

              {/* Traditional Value */}
              <div className="p-6 text-center">
                <div className="flex items-center justify-center">
                  {item.traditional.isBoolean ? (
                    <div className="flex items-center">
                      <X className="w-5 h-5 text-red-400 mr-2" />
                      <span className="text-red-400">{item.traditional.value}</span>
                    </div>
                  ) : (
                    <span className={item.traditional.isGood ? "text-green-400" : "text-red-400"}>
                      {item.traditional.value}
                    </span>
                  )}
                </div>
              </div>

              {/* Manuvoo Value */}
              <div className="p-6 text-center">
                <div className="flex items-center justify-center">
                  {item.manuvoo.isBoolean ? (
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span className="text-primary">{item.manuvoo.value}</span>
                    </div>
                  ) : (
                    <span className={item.manuvoo.isGood ? "text-primary" : "text-red-400"}>
                      {item.manuvoo.value}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            See Full Comparison
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
