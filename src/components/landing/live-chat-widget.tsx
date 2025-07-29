'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Interface */}
      {isOpen && (
        <motion.div 
          className="mb-4 w-80 h-96 bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Chat Header */}
          <div className="bg-primary/10 border-b border-white/[0.1] p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-white font-medium">Need help?</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 h-64 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-primary/20 rounded-lg p-3 max-w-[80%]">
                <p className="text-white text-sm">
                  Hi! I'm here to help you learn more about Manuvoo. What questions do you have?
                </p>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="border-t border-white/[0.1] p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 flex-1"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    // Handle send message
                    setMessage('')
                  }
                }}
              />
              <Button 
                size="sm" 
                className="bg-primary hover:bg-primary/90 text-white px-3"
                onClick={() => {
                  // Handle send message
                  setMessage('')
                }}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary hover:bg-primary/90 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>

      {/* Pulsing Indicator */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
      )}
    </div>
  )
}
