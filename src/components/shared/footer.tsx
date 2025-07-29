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
      <div className="relative z-10 container mx-auto max-w-7xl px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 group">
                <div className="w-20 h-20 transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src="/manuvoo.svg" 
                    alt="Manuvoo Logo" 
                    className="w-full h-full object-contain filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <span className="text-4xl font-bold text-white group-hover:text-primary transition-colors duration-300">Manuvoo</span>
              </div>
              <p className="text-gray-300 max-w-sm leading-relaxed">
                Revolutionizing the dining experience by connecting restaurants and diners through intelligent reservation management and personalized recommendations.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">info@pollinateiq.co.za</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+27 69 684 8796</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">67th on 7th, Edenvale, Gauteng</span>
              </div>
            </div>

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

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300">
              {currentYear} Manuvoo. All rights reserved.
            </div>

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

          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-400 text-xs leading-relaxed max-w-4xl mx-auto">
              Manuvoo is committed to protecting your privacy and complying with the Protection of Personal Information Act (POPIA). 
              We use secure payment processing and never store sensitive card information. 
              All restaurant partners are verified and meet our quality standards.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}