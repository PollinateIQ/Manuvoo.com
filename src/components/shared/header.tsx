"use client"

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import { ManuvooLogo } from '@/components/ui/manuvoo-logo';
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  
  // Handle scroll behavior for header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when at top
      if (currentScrollY < 10) {
        setIsVisible(true);
        setIsScrolled(false);
      }
      // Hide header when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsScrolled(true);
      }
      // Show header when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
        setIsScrolled(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
  }, [isMenuOpen]);

  return (
    <>
      {/* Header */}
            <motion.header 
        ref={ref}
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        <div className="relative mx-auto w-full overflow-hidden">
          {/* Premium Background Effects - Inspired by Hero */}
          <div className="absolute inset-0">
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
            
            {/* Scrolled state enhancement */}
            {isScrolled && (
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40 backdrop-blur-2xl"></div>
            )}
            
            {/* Border effects */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          
          {/* Content */}
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center justify-between px-4 py-5 md:px-6 lg:px-8">
              {/* Logo - Enhanced */}
              <Link href="/" className="flex items-center space-x-3 group min-w-0 relative">
                <div className="flex-shrink-0 relative">
                  {/* Glow effect behind logo */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <ManuvooLogo 
                    width={44}
                    height={44}
                    className="sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300 relative z-10"
                  />
                </div>
                <div className="hidden sm:block min-w-0">
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent truncate group-hover:from-primary group-hover:to-blue-400 transition-all duration-300">
                    Manuvoo
                  </h1>
                </div>
              </Link>

              {/* Desktop Navigation & WhatsApp */}
              <div className="hidden lg:flex items-center space-x-6">
                {/* Navigation Items - Premium Style */}
                <nav className="flex items-center space-x-2">
                  <Link 
                    href="/"
                    className={`relative px-4 py-2.5 transition-all duration-300 text-sm font-medium group rounded-lg backdrop-blur-sm ${
                      pathname === '/' 
                        ? 'text-white bg-white/10 shadow-lg' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="relative z-10">Home</span>
                    <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 rounded-full ${
                      pathname === '/' 
                        ? 'w-3/4' 
                        : 'w-0 group-hover:w-3/4'
                    }`}></span>
                    {pathname !== '/' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </Link>
                  <Link 
                    href="/services"
                    className={`relative px-4 py-2.5 transition-all duration-300 text-sm font-medium group rounded-lg backdrop-blur-sm ${
                      pathname === '/services' 
                        ? 'text-white bg-white/10 shadow-lg' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="relative z-10">Services</span>
                    <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 rounded-full ${
                      pathname === '/services' 
                        ? 'w-3/4' 
                        : 'w-0 group-hover:w-3/4'
                    }`}></span>
                    {pathname !== '/services' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </Link>
                  <Link 
                    href="/about"
                    className={`relative px-4 py-2.5 transition-all duration-300 text-sm font-medium group rounded-lg backdrop-blur-sm ${
                      pathname === '/about' 
                        ? 'text-white bg-white/10 shadow-lg' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="relative z-10">About</span>
                    <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 rounded-full ${
                      pathname === '/about' 
                        ? 'w-3/4' 
                        : 'w-0 group-hover:w-3/4'
                    }`}></span>
                    {pathname !== '/about' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </Link>
                  <Link 
                    href="/contact"
                    className={`relative px-4 py-2.5 transition-all duration-300 text-sm font-medium group rounded-lg backdrop-blur-sm ${
                      pathname === '/contact' 
                        ? 'text-white bg-white/10 shadow-lg' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="relative z-10">Contact</span>
                    <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 rounded-full ${
                      pathname === '/contact' 
                        ? 'w-3/4' 
                        : 'w-0 group-hover:w-3/4'
                    }`}></span>
                    {pathname !== '/contact' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </Link>
                </nav>

                {/* Divider */}
                <div className="h-6 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                {/* WhatsApp Contact Button - Premium Style */}
                <motion.div 
                  className="flex items-center"
                  animate={{
                    scale: isScrolled ? 0.9 : 1,
                    opacity: isScrolled ? 0.9 : 1
                  }}
                >
                  <a
                    href="https://wa.me/27696848796"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-green-600/80 to-green-500/80 hover:from-green-500/90 hover:to-green-400/90 backdrop-blur-xl border border-green-400/30 hover:border-green-300/50 text-white px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25 overflow-hidden"
                  >
                    {/* Premium glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-300/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400/30 to-green-300/30 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                    
                    <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span className="font-medium text-sm relative z-10">WhatsApp</span>
                  </a>
                </motion.div>
              </div>

              {/* Mobile menu button - Premium Style */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden group relative p-3 text-gray-300 hover:text-white backdrop-blur-xl bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 flex-shrink-0 border border-white/10 hover:border-white/20 shadow-lg hover:scale-105 overflow-hidden"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {isMenuOpen ? <X className="w-5 h-5 relative z-10" /> : <Menu className="w-5 h-5 relative z-10" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Mobile Menu Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Mobile Menu Content */}
          <div className="lg:hidden fixed top-[80px] left-0 right-0 bg-gradient-to-br from-blue-950/95 via-slate-900/95 to-gray-900/95 backdrop-blur-xl border-b border-blue-400/20 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto z-40">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-4 sm:py-6 space-y-1 sm:space-y-2">
            <Link 
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`relative block py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-all duration-300 group overflow-hidden ${
                pathname === '/' 
                  ? 'text-white bg-primary/20 shadow-lg shadow-primary/25 border border-primary/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg border border-transparent hover:border-white/20'
              }`}
            >
              <span className="relative z-10 font-medium text-sm sm:text-base">Home</span>
              {pathname !== '/' && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </Link>
            <Link 
              href="/services"
              onClick={() => setIsMenuOpen(false)}
              className={`relative block py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-all duration-300 group overflow-hidden ${
                pathname === '/services' 
                  ? 'text-white bg-primary/20 shadow-lg shadow-primary/25 border border-primary/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg border border-transparent hover:border-white/20'
              }`}
            >
              <span className="relative z-10 font-medium text-sm sm:text-base">Services</span>
              {pathname !== '/services' && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </Link>

            <Link 
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`relative block py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-all duration-300 group overflow-hidden ${
                pathname === '/about' 
                  ? 'text-white bg-primary/20 shadow-lg shadow-primary/25 border border-primary/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg border border-transparent hover:border-white/20'
              }`}
            >
              <span className="relative z-10 font-medium text-sm sm:text-base">About</span>
              {pathname !== '/about' && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </Link>
            <Link 
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`relative block py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl transition-all duration-300 group overflow-hidden ${
                pathname === '/contact' 
                  ? 'text-white bg-primary/20 shadow-lg shadow-primary/25 border border-primary/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg border border-transparent hover:border-white/20'
              }`}
            >
              <span className="relative z-10 font-medium text-sm sm:text-base">Contact</span>
              {pathname !== '/contact' && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </Link>
            
            {/* WhatsApp Contact Button - Mobile */}
            <div className="border-t border-blue-400/20 pt-3 sm:pt-4 mt-4 sm:mt-6">
              <a
                href="https://wa.me/27696848796"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="w-full inline-flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group relative overflow-hidden text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="font-medium">WhatsApp Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            </div>
          </div>
        </>
      )}
      
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
