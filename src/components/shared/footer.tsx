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



  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Background with Glass Morphism - matching header */}
      <div className="absolute inset-0 backdrop-blur-xl">
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(30, 58, 138, 0.90), rgba(15, 23, 42, 0.90), rgba(31, 41, 55, 0.90))"
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-400/10"></div>
          {/* Additional glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent"></div>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-6 sm:space-y-8 text-center">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center space-x-3 group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src="/manuvoo.svg" 
                    alt="Manuvoo Logo" 
                    className="w-full h-full object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-primary transition-colors duration-300">Manuvoo</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base max-w-lg leading-relaxed mx-auto">
                Revolutionizing the dining experience by connecting restaurants and diners through intelligent reservation management and personalized recommendations.
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">info@pollinateiq.co.za</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base">+27 69 684 8796</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base">67th on 7th, Edenvale, Gauteng</span>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 sm:space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/10"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5 sm:space-y-6 text-center">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-5 border-b border-white/10 pb-2">Company</h3>
            <ul className="space-y-3 sm:space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 block py-1 hover:scale-105 text-sm sm:text-base leading-relaxed hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 sm:space-y-6 text-center">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-5 border-b border-white/10 pb-2">Product</h3>
            <ul className="space-y-3 sm:space-y-4">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 block py-1 hover:scale-105 text-sm sm:text-base leading-relaxed hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5 sm:space-y-6 text-center">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-5 border-b border-white/10 pb-2">Support</h3>
            <ul className="space-y-3 sm:space-y-4">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 block py-1 hover:scale-105 text-sm sm:text-base leading-relaxed hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 sm:pt-10">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="text-gray-300 text-sm sm:text-base font-medium">
              © {currentYear} Manuvoo. All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:text-primary transition-all duration-300 text-xs sm:text-sm relative group"
                >
                  {link.label}
                  {index < legalLinks.length - 1 && (
                    <span className="hidden sm:inline text-gray-500 ml-3 sm:ml-4 lg:ml-6">•</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-5xl mx-auto px-2 sm:px-4">
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