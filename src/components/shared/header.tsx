"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { X, Menu } from 'lucide-react'
import LoginModal from '@/components/auth/login-modal'
import SignupModal from '@/components/auth/signup-modal'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  const pathname = usePathname()

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
        isScrolled ? 'backdrop-blur-3xl shadow-glass-3d' : 'backdrop-blur-xl shadow-glass-border'
      }`}>
        {/* Glass morphism bottom border with 3D reflective effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px">
          {/* Main border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          
          {/* 3D reflective top edge */}
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent blur-[0.5px]"></div>
          
          {/* 3D reflective bottom edge */}
          <div className="absolute top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent blur-[0.5px]"></div>
          
          {/* Glow effect */}
          <div className="absolute -top-1 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary-blue-start/20 to-transparent blur-sm"></div>
          
          {/* Shimmer animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-glass-shimmer opacity-50"></div>
        </div>
        {/* Enhanced Vibrant Multi-layered Background with Glass Morphism */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Glass morphism base layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] via-white/[0.08] to-white/[0.15] backdrop-blur-3xl animate-glass-pulse"></div>
          
          {/* 3D depth layers */}
          <div className="absolute inset-0">
            {/* Inner shadow for depth */}
            <div className="absolute inset-0 shadow-glass-3d"></div>
          </div>
          {/* Base gradient layers with higher opacity */}
          <div className="absolute inset-0 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue-start/25 via-transparent to-secondary-purple-start/25"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-secondary-purple-start/20 via-transparent to-accent-orange/15"></div>
          
          {/* Strategic radial gradients for dramatic depth */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-radial from-secondary-purple-start/30 via-secondary-purple-start/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary-blue-start/30 via-primary-blue-start/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent-orange/20 via-transparent to-transparent rounded-full blur-3xl"></div>
          
          {/* Floating gradient orbs for atmospheric depth */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-radial from-secondary-purple-start/40 to-transparent rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-radial from-primary-blue-start/35 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-radial from-accent-orange/45 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Modern mesh gradient overlay for sophisticated depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-purple-start/15 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-blue-start/15 to-transparent"></div>
          
          {/* Grainy texture overlay with glass effect */}
          <div className="absolute inset-0 opacity-25" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px'
          }}></div>
          

          
          {isScrolled && (
            <div className="absolute inset-0 bg-gradient-to-r from-gradient-dark-start/99 via-gradient-dark-mid/98 to-gradient-dark-start/99 backdrop-blur-3xl"></div>
          )}
        </div>
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-20 w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="w-14 h-14 mr-2 transition-transform duration-300 group-hover:scale-110">
                <img 
                  src="/manuvoo.svg" 
                  alt="Manuvoo Logo" 
                  className="w-full h-full object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                />
              </div>
              <span className="text-3xl font-bold text-white group-hover:text-primary-blue-start transition-colors duration-300">
                Manuvoo
              </span>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center ml-16">
              <Link 
                href="/"
                className={`relative transition-all duration-300 font-normal text-lg group hover:font-medium ${
                  pathname === '/' 
                    ? 'text-blue-400 font-medium' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 z-10 ${
                  pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <Link 
                href="/services"
                className={`relative transition-all duration-300 font-normal text-lg group hover:font-medium ${
                  pathname === '/services' 
                    ? 'text-blue-400 font-medium' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Services
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 z-10 ${
                  pathname === '/services' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <Link 
                href="/reservations"
                className={`relative transition-all duration-300 font-normal text-lg group hover:font-medium ${
                  pathname === '/reservations' 
                    ? 'text-blue-400 font-medium' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Reservations
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 z-10 ${
                  pathname === '/reservations' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>

              <Link 
                href="/about"
                className={`relative transition-all duration-300 font-normal text-lg group hover:font-medium ${
                  pathname === '/about' 
                    ? 'text-blue-400 font-medium' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                About
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 z-10 ${
                  pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              <Link 
                href="/contact"
                className={`relative transition-all duration-300 font-normal text-lg group hover:font-medium ${
                  pathname === '/contact' 
                    ? 'text-blue-400 font-medium' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Contact
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 z-10 ${
                  pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </nav>

            {/* Desktop Auth Buttons - Far Right */}
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
              <Button 
                variant="ghost" 
                onClick={() => setIsLoginOpen(true)}
                className="text-white hover:bg-white/10 text-lg px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Login
              </Button>
              <Button 
                onClick={() => setIsSignupOpen(true)}
                className="bg-gradient-primary hover:opacity-90 text-white text-lg px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Sign Up
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
              {/* Enhanced Mobile Menu Background */}
              <div className="absolute inset-0">
                {/* Base gradient layers with higher opacity */}
                <div className="absolute inset-0 bg-gradient-to-br from-gradient-dark-start/98 via-gradient-dark-mid/95 to-gradient-dark-end/98"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue-start/30 via-transparent to-secondary-purple-start/30"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-secondary-purple-start/25 via-transparent to-accent-orange/20"></div>
                
                {/* Radial gradients for depth */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-secondary-purple-start/40 via-secondary-purple-start/20 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-primary-blue-start/40 via-primary-blue-start/20 to-transparent rounded-full blur-2xl"></div>
                
                {/* Floating gradient orbs */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-radial from-accent-orange/50 to-transparent rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-radial from-primary-blue-start/45 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
                
                {/* Mesh gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-purple-start/20 to-transparent"></div>
                
                {/* Grainy texture overlay */}
                <div className="absolute inset-0 opacity-25" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
                  backgroundSize: '150px 150px'
                }}></div>
              </div>
              <div className="relative z-10">
              <nav className="flex flex-col space-y-2">
                <Link 
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative transition-all duration-300 text-xl font-normal hover:font-medium text-left py-3 px-4 rounded-lg hover:bg-white/10 group ${
                    pathname === '/' 
                      ? 'text-white bg-gradient-to-r from-primary-blue-start/20 to-secondary-purple-start/20 border-l-4 border-primary-blue-start' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">Home</span>
                  {pathname !== '/' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-start/10 to-secondary-purple-start/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
                <Link 
                  href="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative transition-all duration-300 text-xl font-normal hover:font-medium text-left py-3 px-4 rounded-lg hover:bg-white/10 group ${
                    pathname === '/services' 
                      ? 'text-white bg-gradient-to-r from-primary-blue-start/20 to-secondary-purple-start/20 border-l-4 border-primary-blue-start' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">Services</span>
                  {pathname !== '/services' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-start/10 to-secondary-purple-start/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
                <Link 
                  href="/reservations"
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative transition-all duration-300 text-xl font-normal hover:font-medium text-left py-3 px-4 rounded-lg hover:bg-white/10 group ${
                    pathname === '/reservations' 
                      ? 'text-white bg-gradient-to-r from-secondary-purple-start/20 to-accent-orange/20 border-l-4 border-secondary-purple-start' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">Reservations</span>
                  {pathname !== '/reservations' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary-purple-start/10 to-accent-orange/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
                <Link 
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative transition-all duration-300 text-xl font-normal hover:font-medium text-left py-3 px-4 rounded-lg hover:bg-white/10 group ${
                    pathname === '/about' 
                      ? 'text-white bg-gradient-to-r from-primary-blue-start/20 to-secondary-purple-start/20 border-l-4 border-primary-blue-start' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">About</span>
                  {pathname !== '/about' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-start/10 to-secondary-purple-start/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
                <Link 
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative transition-all duration-300 text-xl font-normal hover:font-medium text-left py-3 px-4 rounded-lg hover:bg-white/10 group ${
                    pathname === '/contact' 
                      ? 'text-white bg-gradient-to-r from-primary-blue-start/20 to-secondary-purple-start/20 border-l-4 border-primary-blue-start' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">Contact</span>
                  {pathname !== '/contact' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-start/10 to-secondary-purple-start/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
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