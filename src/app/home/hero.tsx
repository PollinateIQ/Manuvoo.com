"use client"

import React, { useState, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { CheckCircle, Star, MessageCircle, ArrowRight } from 'lucide-react'
import ExitIntentPopup from '@/components/landing/exit-intent-popup'
import { useRouter } from 'next/navigation'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'


// Fallback restaurant data with optimized images
/*
const fallbackRestaurants = [
  {
    id: '1',
    name: 'The Grill House',
    logo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=80&h=80&fit=crop&fm=webp&q=80',
    banner: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=200&fit=crop&fm=webp&q=80',
    rating: 4.8,
    cuisine: 'Steakhouse',
    location: 'Cape Town',
    price: '$$'
  },
  {
    id: '2',
    name: 'Ocean Blue',
    logo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=80&h=80&fit=crop&fm=webp&q=80',
    banner: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=200&fit=crop&fm=webp&q=80',
    rating: 4.7,
    cuisine: 'Seafood',
    location: 'Durban',
    price: '$$$'
  },
  {
    id: '3',
    name: 'Spice Garden',
    logo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=80&h=80&fit=crop&fm=webp&q=80',
    banner: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=200&fit=crop&fm=webp&q=80',
    rating: 4.6,
    cuisine: 'Indian',
    location: 'Johannesburg',
    price: '$$'
  }
]
*/

export default function Hero() {
  // Dialog state

  const [showExitIntent, setShowExitIntent] = useState(false)
  const router = useRouter()
  
  // Animation refs and state
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: true, margin: "-100px" })
  
  // Handle primary CTA click - navigate to schedule page
  const handlePrimaryCTA = () => {
    router.push('/schedule')
  }

  // Handle contact page navigation
  const handleContactClick = () => {
    router.push('/contact')
  }
  
  // Hero images for parallax effect - optimized WebP format  
  const heroImages = [
    {
      id: 0,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&fm=webp&q=90',
      alt: 'Fine dining restaurant interior'
    },
    {
      id: 1, 
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&fm=webp&q=90',
      alt: 'Elegant restaurant atmosphere'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&fm=webp&q=90', 
      alt: 'Modern restaurant dining'
    }
  ]
  
  // Enhanced parallax scroll effect with more dramatic movement
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 800], [0, -300])
  const y2 = useTransform(scrollY, [0, 800], [0, -400]) 
  const y3 = useTransform(scrollY, [0, 800], [0, -500])
  const scale = useTransform(scrollY, [0, 400], [1, 1.1])
  

  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end pt-24"
    >
      {/* Animated star field background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars absolute inset-0 opacity-30"></div>
        <div className="stars2 absolute inset-0 opacity-20"></div>
        <div className="stars3 absolute inset-0 opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20 pt-20 pb-8">
        <motion.div 
          className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {/* Centered Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Reserve. Order. Dine.
              </span>
              <br />
              <span className="text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                All in One Tap.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Skip phone calls and queues—secure a table, browse menus, and pay right from your phone.
            </p>
          </motion.div>
          
          {/* Primary CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Get Started Button with Moving Border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="z-20"
            >
              <MovingBorderButton
                onClick={handlePrimaryCTA}
                borderRadius="1.75rem"
                containerClassName="h-16 w-52 text-lg font-semibold hover:scale-105 transition-transform duration-300"
                borderClassName="h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]"
                className="bg-slate-900/[0.8] text-white border-slate-800 backdrop-blur-xl hover:bg-slate-800/[0.9] transition-all duration-300"
                duration={3000}
              >
                <span className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </MovingBorderButton>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="z-20"
            >
              <MovingBorderButton
                onClick={handleContactClick}
                borderRadius="1.75rem"
                containerClassName="h-16 w-52 text-lg font-semibold hover:scale-105 transition-transform duration-300"
                borderClassName="h-20 w-20 bg-[radial-gradient(#ffffff_40%,transparent_60%)] opacity-[0.6]"
                className="bg-transparent border-white/20 text-white backdrop-blur-xl hover:bg-white/5 transition-all duration-300"
                duration={4000}
              >
                <span className="flex items-center gap-2">
                  <MessageCircle size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  Contact Us
                </span>
              </MovingBorderButton>
            </motion.div>
          </motion.div>
          
          {/* Exit Intent Popup */}
          {showExitIntent && (
            <ExitIntentPopup />
          )}
          
          {/* Centered Key Features */}
          <motion.div 
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle size={16} className="text-primary" />
              <span className="font-medium">Instant Reservations</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle size={16} className="text-primary" />
              <span className="font-medium">Mobile Menu Ordering</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle size={16} className="text-primary" />
              <span className="font-medium">Seamless Payments</span>
            </div>
          </motion.div>
          
          {/* Centered Social Proof */}
          <motion.div 
            className="pt-6 border-t border-white/10 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-300">4.9/5 from 12,000+ reviews</span>
            </div>
            <p className="text-xs text-gray-400 mb-4">Featured in:</p>
            <div className="flex items-center justify-center gap-6 opacity-60">
              <span className="text-xs font-medium text-gray-400">TechCrunch</span>
              <span className="text-xs font-medium text-gray-400">Forbes</span>
              <span className="text-xs font-medium text-gray-400">Business Day</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Large Parallax Images - Absolutely Positioned for Better Control */}
      {heroImages.map((img, index) => {
        const positions = [
          { top: '85%', left: '10%' },   // Left image
          { top: '80%', left: '50%', transform: '-translate-x-1/2' },  // Center image
          { top: '85%', right: '10%' }   // Right image
        ]
        
        return (
          <motion.div
            key={img.id}
            className={`absolute overflow-hidden rounded-3xl shadow-2xl z-30 ${
              index === 1 ? 'transform -translate-x-1/2' : ''
            }`}
            style={{
              y: index === 0 ? y1 : index === 1 ? y2 : y3,
              scale: scale,
              width: '28%',
              height: '35vh',
              top: positions[index].top,
              left: positions[index].left,
              right: positions[index].right
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.08, y: -30 }}
          >
            <img
              src={img.image}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Enhanced overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
            
            {/* Floating badge on center image */}
            {index === 1 && (
              <motion.div 
                className="absolute top-6 right-6 bg-primary/90 backdrop-blur-sm rounded-full p-3 border border-primary/30 shadow-lg"
                animate={{ 
                  scale: [1, 1.15, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <CheckCircle size={20} className="text-white" />
              </motion.div>
            )}
            
            {/* Image number indicator */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white font-semibold text-sm">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </motion.div>
        )
      })}
      
      {/* Enhanced background decoration */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-primary/20 rounded-full blur-3xl -z-10 transform -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-secondary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 left-0 w-1/6 h-1/6 bg-accent/10 rounded-full blur-2xl -z-10" />
      
      {/* Bottom fade to ensure smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 via-black/10 to-transparent z-10" />
      
      {/* CSS for star field animation and neon glow effects */}
      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          .stars {
            background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="10" cy="10" r="0.5" fill="white"/><circle cx="30" cy="25" r="0.3" fill="white"/><circle cx="60" cy="15" r="0.4" fill="white"/><circle cx="80" cy="35" r="0.2" fill="white"/><circle cx="20" cy="50" r="0.3" fill="white"/><circle cx="70" cy="60" r="0.5" fill="white"/><circle cx="40" cy="80" r="0.2" fill="white"/><circle cx="90" cy="75" r="0.4" fill="white"/></svg>') repeat;
            animation: move-stars 50s linear infinite;
          }
          
          .stars2 {
            background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="15" cy="20" r="0.3" fill="white"/><circle cx="45" cy="10" r="0.4" fill="white"/><circle cx="75" cy="30" r="0.2" fill="white"/><circle cx="25" cy="60" r="0.5" fill="white"/><circle cx="85" cy="50" r="0.3" fill="white"/></svg>') repeat;
            animation: move-stars 100s linear infinite;
          }
          
          .stars3 {
            background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="35" cy="40" r="0.2" fill="white"/><circle cx="65" cy="70" r="0.4" fill="white"/><circle cx="95" cy="20" r="0.3" fill="white"/></svg>') repeat;
            animation: move-stars 150s linear infinite;
          }
          
          @keyframes move-stars {
            from { transform: translateX(0); }
            to { transform: translateX(-100px); }
          }
          
          /* Neon Glow Beam Effects */
          @keyframes beam {
            0% { transform: translateX(-150%) skewX(-12deg); }
            50% { transform: translateX(-50%) skewX(-12deg); }
            100% { transform: translateX(250%) skewX(-12deg); }
          }
          
          @keyframes glow-pulse {
            0%, 100% { 
              opacity: 0.6;
              transform: scale(1);
            }
            50% { 
              opacity: 0.9;
              transform: scale(1.05);
            }
          }
          
          .animate-beam {
            animation: beam 3s ease-in-out infinite;
            animation-delay: 1s;
          }
          
          .animate-glow-pulse {
            animation: glow-pulse 2s ease-in-out infinite;
            animation-delay: 0.5s;
          }
        }
      `}</style>
      
      {/* Exit Intent Popup */}
      <ExitIntentPopup 
        isOpen={showExitIntent}
        onClose={() => setShowExitIntent(false)}
      />
    </section>
  )
}
