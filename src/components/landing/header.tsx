"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X, Menu } from 'lucide-react'
import LoginModal from '@/components/auth/login-modal'
import SignupModal from '@/components/auth/signup-modal'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  // Manuvoo Logo Component
  const ManuvooLogo = ({ width = 40, height = 40, className = "" }: { width?: number; height?: number; className?: string }) => (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform="translate(50, 50)">
        {/* Shadow */}
        <g opacity="0.3" transform="translate(2, 2)">
          <rect x="-35" y="-40" width="70" height="80" rx="20" ry="15" fill="#000"/>
          <rect x="-35" y="-40" width="70" height="80" rx="20" ry="15" fill="#000" transform="rotate(60)"/>
          <rect x="-35" y="-40" width="70" height="80" rx="20" ry="15" fill="#000" transform="rotate(-60)"/>
        </g>
        
        {/* Main hexagon */}
        <rect x="-35" y="-40" width="70" height="80" rx="20" ry="15" fill="#1a1a1a" stroke="#fff" strokeWidth="2"/>
        <rect x="-35" y="-40" width="70" height="80" rx="20" ry="15" fill="#1a1a1a" stroke="#fff" strokeWidth="2" transform="rotate(60)"/>
        <rect x="-35" y="-40" width="70" height="80" rx="20" ry="15" fill="#1a1a1a" stroke="#fff" strokeWidth="2" transform="rotate(-60)"/>
        
        {/* Menu lines */}
        <rect x="-18" y="-15" width="36" height="4" rx="2" fill="#fff"/>
        <rect x="-11" y="-5" width="22" height="4" rx="2" fill="#fff"/>
        <rect x="-14" y="5" width="28" height="4" rx="2" fill="#fff"/>
        <rect x="-18" y="15" width="36" height="4" rx="2" fill="#fff"/>
      </g>
    </svg>
  )

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-black/20 shadow-2xl border-b border-white/10' 
          : 'backdrop-blur-lg bg-black/10'
      }`}>
        {/* Modern Glass Morphism Background */}
        <div className="absolute inset-0">
          {/* Primary glass layer */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30"></div>
          
          {/* Subtle accent gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-500/5"></div>
          
          {/* Dynamic light effects */}
          <div className="absolute top-0 left-1/3 w-64 h-32 bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute top-0 right-1/3 w-64 h-32 bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent-orange/20 via-transparent to-transparent rounded-full blur-3xl"></div>
          
          {/* Floating gradient orbs for atmospheric depth */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-radial from-secondary-purple-start/40 to-transparent rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-radial from-primary-blue-start/35 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-radial from-accent-orange/45 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Modern mesh gradient overlay for sophisticated depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-purple-start/15 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-blue-start/15 to-transparent"></div>
          
          {/* Grainy texture overlay */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}></div>
          
          {isScrolled && (
            <div className="absolute inset-0 bg-gradient-to-r from-gradient-dark-start/98 via-gradient-dark-mid/95 to-gradient-dark-start/98"></div>
          )}
        </div>
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="transform transition-transform duration-300 group-hover:scale-110">
                <ManuvooLogo width={44} height={44} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Manuvoo
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <button 
                onClick={() => scrollToSection('#how-it-works')}
                className="text-gray-300 hover:text-white transition-all duration-300 text-base font-medium relative group px-4 py-2 rounded-lg hover:bg-white/5"
              >
                How It Works
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 group-hover:w-3/4"></span>
              </button>
              <button 
                onClick={() => scrollToSection('#services')}
                className="text-gray-300 hover:text-white transition-all duration-300 text-base font-medium relative group px-4 py-2 rounded-lg hover:bg-white/5"
              >
                Services
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 group-hover:w-3/4"></span>
              </button>
              <button 
                onClick={() => scrollToSection('#about')}
                className="text-gray-300 hover:text-white transition-all duration-300 text-base font-medium relative group px-4 py-2 rounded-lg hover:bg-white/5"
              >
                About
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 group-hover:w-3/4"></span>
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="text-gray-300 hover:text-white transition-all duration-300 text-base font-medium relative group px-4 py-2 rounded-lg hover:bg-white/5"
              >
                Contact
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 group-hover:w-3/4"></span>
              </button>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button 
                variant="ghost" 
                onClick={() => setIsLoginOpen(true)}
                className="text-white hover:text-white hover:bg-white/10 text-base font-medium px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 border border-transparent hover:border-white/20 backdrop-blur-sm"
              >
                Login
              </Button>
              <Button 
                onClick={() => setIsSignupOpen(true)}
                className="bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90 text-white text-base font-medium px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-primary/20 backdrop-blur-sm"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden relative rounded-2xl mt-4 p-6 space-y-6 border border-white/10 shadow-xl backdrop-blur-md overflow-hidden">
              {/* Mobile Menu Background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gradient-dark-start/95 via-gradient-dark-mid/90 to-gradient-dark-start/95"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-start/10 via-transparent to-secondary-purple-start/10"></div>
              </div>
              <div className="relative z-10">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('#how-it-works')}
                  className="text-gray-300 hover:text-white transition-colors text-lg font-medium text-left py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  How It Works
                </button>
                <button 
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-300 hover:text-white transition-colors text-lg font-medium text-left py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-300 hover:text-white transition-colors text-lg font-medium text-left py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-300 hover:text-white transition-colors text-lg font-medium text-left py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  Contact
                </button>
              </nav>
              
              <div className="border-t border-white/20 pt-6 space-y-3">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setIsLoginOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="w-full text-white hover:bg-white/10 text-lg rounded-lg"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => {
                    setIsSignupOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="w-full bg-gradient-primary hover:opacity-90 text-white text-lg rounded-lg"
                >
                  Sign Up
                </Button>
              </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Authentication Modals */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onSwitchToSignup={() => {
          setIsLoginOpen(false)
          setIsSignupOpen(true)
        }}
      />
      
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)}
        onSwitchToLogin={() => {
          setIsSignupOpen(false)
          setIsLoginOpen(true)
        }}
      />
    </>
  )
}