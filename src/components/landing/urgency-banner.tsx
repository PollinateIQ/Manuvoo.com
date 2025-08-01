'use client'

import { motion } from 'framer-motion'
import { Target } from 'lucide-react'

export default function UrgencyBanner() {
  return (
    <motion.div 
      className="bg-gradient-to-r from-green-500 to-blue-500 py-3 sm:py-4 md:py-5 px-4 sm:px-6 text-center text-black font-semibold"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg max-w-4xl mx-auto">
        <div className="flex items-center gap-1 sm:gap-2">
          <Target className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="text-center sm:text-left">
            Special Launch Offer: First 100 restaurants get 3 months free!
          </span>
        </div>
        <span className="whitespace-nowrap">
          Only <span className="font-bold">23 spots remaining.</span>
        </span>
      </div>
    </motion.div>
  )
}
