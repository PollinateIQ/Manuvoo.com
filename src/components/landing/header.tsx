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

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen])

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
        {/* Premium Background Effects - Matching Hero Section */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Base gradient matching hero */}
          <div className="absolute inset-0 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end"></div>
          
          {/* Animated star field background */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="stars absolute inset-0 opacity-30"></div>
            <div className="stars2 absolute inset-0 opacity-20"></div>
            <div className="stars3 absolute inset-0 opacity-10"></div>
          </div>
          
          {/* Premium glass morphism layers */}
          <div className="absolute inset-0 backdrop-blur-xl bg-black/20"></div>
          
          {/* Dynamic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-blue-500/10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
          
          {/* Floating light effects */}
          <div className="absolute top-0 left-1/4 w-96 h-24 bg-gradient-radial from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-1/4 w-96 h-24 bg-gradient-radial from-blue-500/15 via-blue-500/5 to-transparent rounded-full blur-3xl"></div>
          
          {/* Animated orbs */}
          <div className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-1/2 right-10 w-20 h-20 bg-gradient-radial from-blue-400/20 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Enhanced scrolled state */}
          {isScrolled && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40 backdrop-blur-2xl"></div>
          )}
          
          {/* Border effects */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Enhanced */}
            <div className="flex items-center space-x-3 group cursor-pointer min-w-0 relative">
              <div className="flex-shrink-0 relative">
                {/* Glow effect behind logo */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <ManuvooLogo width={44} height={44} className="sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300 relative z-10 text-white" />
              </div>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent truncate group-hover:from-primary group-hover:to-blue-400 transition-all duration-300">
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

            {/* Desktop Auth Buttons - Premium Style */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => setIsLoginOpen(true)}
                className="group relative text-white hover:text-white backdrop-blur-xl bg-white/5 hover:bg-white/10 text-base font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/30 shadow-lg hover:shadow-white/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Login</span>
              </Button>
              <Button 
                onClick={() => setIsSignupOpen(true)}
                className="group relative bg-gradient-to-r from-primary/90 to-blue-400/90 hover:from-primary hover:to-blue-400 text-white text-base font-medium px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-primary/25 border border-primary/30 backdrop-blur-xl overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-blue-400/50 rounded-xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Get Started</span>
              </Button>
            </div>

            {/* Mobile Menu Button - Premium Style */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden group relative p-3 text-white backdrop-blur-xl bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 flex-shrink-0 border border-white/10 hover:border-white/20 shadow-lg hover:scale-105 overflow-hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isMenuOpen ? <X size={20} className="relative z-10" /> : <Menu size={20} className="relative z-10" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 rounded-xl sm:rounded-2xl mt-3 sm:mt-4 mx-4 sm:mx-6 lg:mx-8 p-4 sm:p-6 space-y-4 sm:space-y-6 border border-white/10 shadow-xl backdrop-blur-md overflow-hidden max-h-[calc(100vh-120px)] overflow-y-auto z-40">
              {/* Mobile Menu Background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gradient-dark-start/95 via-gradient-dark-mid/90 to-gradient-dark-start/95"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-start/10 via-transparent to-secondary-purple-start/10"></div>
              </div>
              <div className="relative z-10">
              <nav className="flex flex-col space-y-2 sm:space-y-3">
                <button 
                  onClick={() => scrollToSection('#how-it-works')}
                  className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg font-medium text-left py-2 sm:py-2.5 px-3 rounded-lg hover:bg-white/5"
                >
                  How It Works
                </button>
                <button 
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg font-medium text-left py-2 sm:py-2.5 px-3 rounded-lg hover:bg-white/5"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg font-medium text-left py-2 sm:py-2.5 px-3 rounded-lg hover:bg-white/5"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg font-medium text-left py-2 sm:py-2.5 px-3 rounded-lg hover:bg-white/5"
                >
                  Contact
                </button>
              </nav>
              
              <div className="border-t border-white/20 pt-4 sm:pt-6 space-y-2 sm:space-y-3">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setIsLoginOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="w-full text-white hover:bg-white/10 text-base sm:text-lg rounded-lg py-2.5 sm:py-3"
                >
                  Login
                </Button>
                <Button 
                  onClick={() => {
                    setIsSignupOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="w-full bg-gradient-primary hover:opacity-90 text-white text-base sm:text-lg rounded-lg py-2.5 sm:py-3"
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
      
      {/* Premium CSS Animations - Star Field */}
      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          .stars {
            background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="10" cy="10" r="0.5" fill="white"/><circle cx="30" cy="25" r="0.3" fill="white"/><circle cx="60" cy="15" r="0.4" fill="white"/><circle cx="80" cy="35" r="0.2" fill="white"/><circle cx="20" cy="50" r="0.3" fill="white"/><circle cx="70" cy="60" r="0.5" fill="white"/><circle cx="40" cy="80" r="0.2" fill="white"/><circle cx="90" cy="75" r="0.4" fill="white"/></svg>') repeat;
            animation: move-stars 60s linear infinite;
          }
          
          .stars2 {
            background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="15" cy="20" r="0.3" fill="white"/><circle cx="45" cy="10" r="0.4" fill="white"/><circle cx="75" cy="30" r="0.2" fill="white"/><circle cx="25" cy="60" r="0.5" fill="white"/><circle cx="85" cy="50" r="0.3" fill="white"/></svg>') repeat;
            animation: move-stars 120s linear infinite;
          }
          
          .stars3 {
            background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="35" cy="40" r="0.2" fill="white"/><circle cx="65" cy="70" r="0.4" fill="white"/><circle cx="95" cy="20" r="0.3" fill="white"/></svg>') repeat;
            animation: move-stars 180s linear infinite;
          }
          
          @keyframes move-stars {
            from { transform: translateX(0); }
            to { transform: translateX(-100px); }
          }
        }
      `}</style>
    </>
  )
}