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
        <div className="relative mx-auto w-full">
          {/* Content */}
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <div>
                  <ManuvooLogo 
                    width={48}
                    height={48}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    Manuvoo
                  </h1>
                </div>
              </Link>

              {/* Desktop Navigation & WhatsApp */}
              <div className="hidden lg:flex items-center space-x-6">
                {/* Navigation Items */}
                <nav className="flex items-center space-x-1">
                  <Link 
                    href="/"
                    className={`relative px-4 py-2 transition-all duration-300 text-sm font-medium group ${
                      pathname === '/' 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">Home</span>
                    <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 ${
                      pathname === '/' 
                        ? 'w-3/4' 
                        : 'w-0 group-hover:w-3/4'
                    }`}></span>
                  </Link>
                  <Link 
                    href="/services"
                    className={`relative px-4 py-2 transition-all duration-300 text-sm font-medium group ${
                      pathname === '/services' 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">Services</span>
                    <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 ${
                      pathname === '/services' 
                        ? 'w-3/4' 
                        : 'w-0 group-hover:w-3/4'
                    }`}></span>
                  </Link>
                  <Link 
                    href="/about"
                    className={`relative px-4 py-2 transition-all duration-300 text-sm font-medium group ${
                      pathname === '/about' 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">About</span>
                    <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 ${
                      pathname === '/about' 
                        ? 'w-3/4' 
                        : 'w-0 group-hover:w-3/4'
                    }`}></span>
                  </Link>
                  <Link 
                    href="/contact"
                    className={`relative px-4 py-2 transition-all duration-300 text-sm font-medium group ${
                      pathname === '/contact' 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">Contact</span>
                    <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 ${
                      pathname === '/contact' 
                        ? 'w-3/4' 
                        : 'w-0 group-hover:w-3/4'
                    }`}></span>
                  </Link>
                </nav>

                {/* Divider */}
                <div className="h-6 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                {/* WhatsApp Contact Button */}
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
                    className="inline-flex items-center space-x-2 backdrop-blur-md bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 hover:border-blue-400/50 text-white px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group relative overflow-hidden"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span className="font-medium text-sm">WhatsApp</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </motion.div>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-300"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
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
            
            {/* WhatsApp Contact Button - Mobile */}
            <div className="border-t border-blue-400/20 pt-4 mt-6">
              <a
                href="https://wa.me/27696848796"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="w-full inline-flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group relative overflow-hidden"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="font-medium">WhatsApp Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
