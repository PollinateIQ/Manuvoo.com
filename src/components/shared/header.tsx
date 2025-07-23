"use client"

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LoginModal from '@/components/auth/login-modal';
import SignupModal from '@/components/auth/signup-modal';
import { ManuvooLogo } from '@/components/ui/manuvoo-logo';
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      {/* Header */}
      <motion.header 
        ref={ref}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <motion.div 
          className="relative mx-auto"
          animate={{
            width: isScrolled ? "70%" : "100%",
            y: isScrolled ? 20 : 0,
            marginTop: isScrolled ? "10px" : "0",
            borderRadius: isScrolled ? "2rem" : "0rem",
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 50,
          }}
          style={{
            overflow: "hidden"
          }}
        >
          {/* Background with Glass Morphism */}
          <motion.div 
            className="absolute inset-0 backdrop-blur-xl shadow-2xl"
            animate={{
              background: isScrolled 
                ? "linear-gradient(135deg, rgba(30, 58, 138, 0.95), rgba(15, 23, 42, 0.95), rgba(31, 41, 55, 0.95))" 
                : "linear-gradient(135deg, rgba(30, 58, 138, 0.90), rgba(15, 23, 42, 0.90), rgba(31, 41, 55, 0.90))",
              borderWidth: isScrolled ? "1px" : "0px",
              borderRadius: isScrolled ? "2rem" : "0rem",
              boxShadow: isScrolled 
                ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)" 
                : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 50,
            }}
            style={{
              borderColor: "rgba(96, 165, 250, 0.2)"
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-400/10"></div>
            {/* Additional glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent"></div>
          </motion.div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div 
              className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-8"
              animate={{
                padding: isScrolled ? "12px 24px" : "16px 24px"
              }}
            >
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <motion.div 
                  animate={{
                    scale: isScrolled ? 0.9 : 1
                  }}
                >
                  <ManuvooLogo 
                    width={48}
                    height={48}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
                <motion.div 
                  className="hidden sm:block"
                  animate={{
                    opacity: isScrolled ? 0.8 : 1,
                    scale: isScrolled ? 0.95 : 1
                  }}
                >
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    Manuvoo
                  </h1>
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <motion.nav 
                className="hidden lg:flex items-center space-x-2"
                animate={{
                  scale: isScrolled ? 0.95 : 1,
                  opacity: isScrolled ? 0.9 : 1
                }}
              >
                <Link 
                  href="/"
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium group overflow-hidden ${
                    pathname === '/' 
                      ? 'text-white bg-primary/20 shadow-lg shadow-primary/25' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg'
                  }`}
                >
                  <span className="relative z-10">Home</span>
                  {pathname !== '/' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
                <Link 
                  href="/services"
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium group overflow-hidden ${
                    pathname === '/services' 
                      ? 'text-white bg-primary/20 shadow-lg shadow-primary/25' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg'
                  }`}
                >
                  <span className="relative z-10">Services</span>
                  {pathname !== '/services' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
                <Link 
                  href="/reservations"
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium group overflow-hidden ${
                    pathname === '/reservations' 
                      ? 'text-white bg-primary/20 shadow-lg shadow-primary/25' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg'
                  }`}
                >
                  <span className="relative z-10">Reservations</span>
                  {pathname !== '/reservations' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
                <Link 
                  href="/about"
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium group overflow-hidden ${
                    pathname === '/about' 
                      ? 'text-white bg-primary/20 shadow-lg shadow-primary/25' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg'
                  }`}
                >
                  <span className="relative z-10">About</span>
                  {pathname !== '/about' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
                <Link 
                  href="/contact"
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium group overflow-hidden ${
                    pathname === '/contact' 
                      ? 'text-white bg-primary/20 shadow-lg shadow-primary/25' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg'
                  }`}
                >
                  <span className="relative z-10">Contact</span>
                  {pathname !== '/contact' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
              </motion.nav>

              {/* Desktop Auth Buttons */}
              <motion.div 
                className="hidden lg:flex items-center space-x-3"
                animate={{
                  scale: isScrolled ? 0.9 : 1,
                  opacity: isScrolled ? 0.9 : 1
                }}
              >
                <Button 
                  variant="ghost" 
                  onClick={() => setIsLoginOpen(true)}
                  className="text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg backdrop-blur-sm border border-transparent hover:border-white/20 rounded-full px-6 py-2 transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="relative z-10">Login</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                <Button 
                  onClick={() => setIsSignupOpen(true)}
                  className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 group relative overflow-hidden"
                >
                  <span className="relative z-10">Sign Up</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </motion.div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-blue-950/95 via-slate-900/95 to-gray-900/95 backdrop-blur-xl border-b border-blue-400/20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-6 space-y-2">
            <Link 
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`relative block py-3 px-4 rounded-xl transition-all duration-300 group overflow-hidden ${
                pathname === '/' 
                  ? 'text-white bg-primary/20 shadow-lg shadow-primary/25 border border-primary/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg border border-transparent hover:border-white/20'
              }`}
            >
              <span className="relative z-10 font-medium">Home</span>
              {pathname !== '/' && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </Link>
            <Link 
              href="/services"
              onClick={() => setIsMenuOpen(false)}
              className={`relative block py-3 px-4 rounded-xl transition-all duration-300 group overflow-hidden ${
                pathname === '/services' 
                  ? 'text-white bg-primary/20 shadow-lg shadow-primary/25 border border-primary/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg border border-transparent hover:border-white/20'
              }`}
            >
              <span className="relative z-10 font-medium">Services</span>
              {pathname !== '/services' && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </Link>
            <Link 
              href="/reservations"
              onClick={() => setIsMenuOpen(false)}
              className={`relative block py-3 px-4 rounded-xl transition-all duration-300 group overflow-hidden ${
                pathname === '/reservations' 
                  ? 'text-white bg-primary/20 shadow-lg shadow-primary/25 border border-primary/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg border border-transparent hover:border-white/20'
              }`}
            >
              <span className="relative z-10 font-medium">Reservations</span>
              {pathname !== '/reservations' && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </Link>
            <Link 
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`relative block py-3 px-4 rounded-xl transition-all duration-300 group overflow-hidden ${
                pathname === '/about' 
                  ? 'text-white bg-primary/20 shadow-lg shadow-primary/25 border border-primary/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg border border-transparent hover:border-white/20'
              }`}
            >
              <span className="relative z-10 font-medium">About</span>
              {pathname !== '/about' && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </Link>
            <Link 
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`relative block py-3 px-4 rounded-xl transition-all duration-300 group overflow-hidden ${
                pathname === '/contact' 
                  ? 'text-white bg-primary/20 shadow-lg shadow-primary/25 border border-primary/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg border border-transparent hover:border-white/20'
              }`}
            >
              <span className="relative z-10 font-medium">Contact</span>
              {pathname !== '/contact' && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </Link>
            
            <div className="border-t border-blue-400/20 pt-4 space-y-3 mt-6">
              <Button 
                variant="ghost" 
                onClick={() => {
                  setIsLoginOpen(true)
                  setIsMenuOpen(false)
                }}
                className="w-full text-white hover:bg-white/10 hover:shadow-lg backdrop-blur-sm border border-transparent hover:border-white/20 rounded-xl py-3 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 font-medium">Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                onClick={() => {
                  setIsSignupOpen(true)
                  setIsMenuOpen(false)
                }}
                className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white rounded-xl py-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group relative overflow-hidden"
              >
                <span className="relative z-10 font-medium">Sign Up</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      )}
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
