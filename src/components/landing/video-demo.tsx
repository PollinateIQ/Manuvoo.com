'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function VideoDemo() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div 
          className="text-center"
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
            SEE MANUVOO IN ACTION
          </motion.h2>

          {/* Subheader */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Watch how a real order flows through the system
          </motion.p>

          {/* Mobile Instructions */}
          <motion.div 
            className="sm:hidden mb-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center">
              <p className="text-primary text-sm font-medium">
                👆 Tap the video to see our 2-minute demo
              </p>
            </div>
          </motion.div>

          {/* Video Player */}
          <motion.div 
            className="relative max-w-4xl mx-auto mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden group cursor-pointer">
              {/* Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-black/50 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary ml-1" fill="currentColor" />
                </div>
              </div>
              
              {/* Demo Steps Overlay */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs sm:text-sm text-white/90">
                    <div className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                      <span>Customer scans QR</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
                      <span>Places order on phone</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                      <span>Kitchen receives order</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></span>
                      <span>Admin views analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Text */}
          <motion.div 
            className="mb-4 sm:mb-6 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-2">
              See the difference 2 minutes can make
            </p>
            <p className="text-xs sm:text-sm text-white/60 sm:hidden">
              From QR scan to kitchen order in seconds – watch the complete customer journey
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="px-4"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto text-sm sm:text-base max-w-xs mx-auto"
            >
              Schedule Live Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
