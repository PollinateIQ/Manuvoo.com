'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { X, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface ExitIntentPopupProps {
  onCtaClick?: () => void
  isOpen?: boolean
  onClose?: () => void
}

export default function ExitIntentPopup({ onCtaClick, isOpen, onClose }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false)
  const [ctaClicked, setCtaClicked] = useState(false)
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false)
  const pathname = usePathname()

  // Only show on HomePage and Services page
  const shouldShowOnCurrentPage = pathname === '/' || pathname === '/services'
  
  // Check if popup has been dismissed in this session
  useEffect(() => {
    const dismissed = sessionStorage.getItem('exitIntentDismissed')
    if (dismissed === 'true') {
      setHasBeenDismissed(true)
    }
  }, [])

  useEffect(() => {
    if (!shouldShowOnCurrentPage) return

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Check if user has scrolled to bottom (within 100px)
      if (scrollTop + windowHeight >= documentHeight - 100) {
        setHasScrolledToBottom(true)
      }
    }

    const handleCtaClick = (e: Event) => {
      const target = e.target as HTMLElement
      // Check if clicked element is a CTA button
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        setCtaClicked(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleCtaClick)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleCtaClick)
    }
  }, [shouldShowOnCurrentPage])

  // Show popup when user has scrolled to bottom AND clicked a CTA, OR when externally controlled
  useEffect(() => {
    // Don't show if already dismissed in this session
    if (hasBeenDismissed) {
      return
    }
    
    if (isOpen !== undefined) {
      setIsVisible(isOpen)
    } else if (shouldShowOnCurrentPage && hasScrolledToBottom && ctaClicked && !isVisible) {
      // Add a small delay to make it feel less aggressive
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      
      return () => clearTimeout(timer)
    }
  }, [hasScrolledToBottom, ctaClicked, isVisible, shouldShowOnCurrentPage, isOpen, hasBeenDismissed])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log('Email submitted:', email)
    handleClose()
  }
  
  const handleClose = () => {
    setIsVisible(false)
    setHasBeenDismissed(true)
    sessionStorage.setItem('exitIntentDismissed', 'true')
    onClose?.()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl p-8 max-w-md mx-4 relative"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Connected!
              </h3>
              
              <p className="text-white/80 mb-2">
                We'd love to keep you updated on how Manuvoo can transform your restaurant.
              </p>
              
              <h4 className="text-lg font-bold text-primary mt-2">
                Leave your contact details and we'll be in touch!
              </h4>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                required
              />
              
              <Input
                type="tel"
                placeholder="Enter your phone number (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
              />
              
              <Button 
                type="submit"
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Keep Me Updated
              </Button>
            </form>

            {/* Bottom Text */}
            <p className="text-center text-white/60 text-sm mt-4">
              We'll reach out with personalized insights for your restaurant
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
