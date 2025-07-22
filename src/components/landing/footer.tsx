import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Story', href: '#story' },
    { label: 'Careers', href: '#careers' },
    { label: 'Press', href: '#press' },
  ]

  const productLinks = [
    { label: 'For Restaurants', href: '#restaurants' },
    { label: 'For Diners', href: '#diners' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
  ]

  const supportLinks = [
    { label: 'Help Center', href: '#help' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Restaurant Support', href: '#restaurant-support' },
    { label: 'Technical Support', href: '#tech-support' },
  ]

  const legalLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'POPIA Compliance', href: '#popia' },
    { label: 'Cookie Policy', href: '#cookies' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  // Manuvoo Logo Component
  const ManuvooLogo = ({ width = 32, height = 32, className = "" }: { width?: number; height?: number; className?: string }) => (
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
    <footer className="relative overflow-hidden">
      {/* Enhanced Vibrant Multi-layered Background */}
      <div className="absolute inset-0">
        {/* Base gradient layers with higher opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gradient-dark-end via-transparent to-gradient-dark-start/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-start/25 via-transparent to-secondary-purple-start/25"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary-purple-start/20 via-transparent to-accent-orange/15"></div>
        
        {/* Strategic radial gradients for dramatic depth */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary-blue-start/30 via-primary-blue-start/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-radial from-secondary-purple-start/30 via-secondary-purple-start/15 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-radial from-accent-orange/25 via-accent-orange/10 to-transparent rounded-full blur-xl"></div>
        
        {/* Floating gradient orbs for atmospheric depth - increased opacity to 25-35% */}
        <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-radial from-primary-blue-start/35 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-56 h-56 bg-gradient-radial from-secondary-purple-start/30 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-radial from-accent-orange/35 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/2 w-40 h-40 bg-gradient-radial from-primary-blue-start/25 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-gradient-radial from-secondary-purple-start/30 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/4 right-1/3 w-28 h-28 bg-gradient-radial from-accent-orange/35 to-transparent rounded-full blur-lg animate-pulse" style={{animationDelay: '5s'}}></div>
        
        {/* Modern mesh gradient overlay for sophisticated depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-blue-start/15 to-secondary-purple-start/18 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-accent-orange/12 via-transparent to-primary-blue-start/12 mix-blend-soft-light"></div>
        
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px'
        }}></div>
      </div>
      
      {/* Single Unified Glass Container - Full Width */}
      <div className="glass-card glass-reflection w-full relative z-10">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <ManuvooLogo width={40} height={40} className="text-white" />
                  <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Manuvoo
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Transforming restaurant operations while creating unforgettable dining experiences for customers across South Africa.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>hello@manuvoo.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+27 (0) 21 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Cape Town, South Africa</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/10"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h3 className="text-white font-semibold text-lg">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 block py-1 hover:translate-x-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Links */}
            <div className="space-y-6">
              <h3 className="text-white font-semibold text-lg">Product</h3>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 block py-1 hover:translate-x-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-6">
              <h3 className="text-white font-semibold text-lg">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 block py-1 hover:translate-x-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar - Integrated within same container */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-300">
                © {currentYear} Manuvoo. All rights reserved.
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6">
                {legalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Additional compliance info */}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-gray-400 text-xs leading-relaxed max-w-4xl mx-auto">
                Manuvoo is committed to protecting your privacy and complying with the Protection of Personal Information Act (POPIA). 
                We use secure payment processing and never store sensitive card information. 
                All restaurant partners are verified and meet our quality standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}