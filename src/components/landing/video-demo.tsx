'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function VideoDemo() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center"
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
            SEE MANUVOO IN ACTION
          </motion.h2>

          {/* Subheader */}
          <motion.p 
            className="text-xl text-white/70 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Watch how a real order flows through the system
          </motion.p>

          {/* Video Player */}
          <motion.div 
            className="relative max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 overflow-hidden group cursor-pointer">
              {/* Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-black/50 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                </div>
              </div>
              
              {/* Demo Steps Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-white/80">
                    <div>• Customer scans QR</div>
                    <div>• Places order on phone</div>
                    <div>• Kitchen receives order</div>
                    <div>• Admin views analytics</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Text */}
          <motion.p 
            className="text-lg text-white/80 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            See the difference 2 minutes can make
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Schedule Live Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
