'use client'

import { motion } from 'framer-motion'
import { Target } from 'lucide-react'

export default function UrgencyBanner() {
  return (
    <motion.div 
      className="bg-gradient-to-r from-green-500 to-blue-500 py-5 px-6 text-center text-black font-semibold"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-center gap-2 text-lg">
        <Target className="w-5 h-5" />
        <span>
          Special Launch Offer: First 100 restaurants get 3 months free! 
          Only <span className="font-bold">23 spots remaining.</span>
        </span>
      </div>
    </motion.div>
  )
}
