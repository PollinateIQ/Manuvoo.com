"use client"

import React, { useState } from 'react'
import { Search, Clock, Menu, Star, CreditCard, Calendar, BarChart3, Users, Package, Smartphone, MessageCircle, Target } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  image: string
}

const customerFeatures: Feature[] = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Restaurant Discovery",
    description: "Smart search with filters for cuisine, location, and price",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Real-Time Availability",
    description: "See exact table availability and book instantly",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=250&fit=crop"
  },
  {
    icon: <Menu className="w-6 h-6" />,
    title: "Menu Previews",
    description: "Browse full menus with photos before you visit",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop"
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Verified Reviews",
    description: "Read authentic reviews from confirmed diners",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Instant Booking",
    description: "Secure tables with immediate confirmation",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=250&fit=crop"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Reservation Management",
    description: "Easy cancellation and modification",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
  }
]

const restaurantFeatures: Feature[] = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Complete POS System",
    description: "Full point-of-sale with inventory integration",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=250&fit=crop"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Table Management",
    description: "Real-time table status and reservation handling",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Customer Discovery",
    description: "Featured listings on our discovery platform",
    image: "https://images.unsplash.com/photo-1559329007-40df8e126277?w=400&h=250&fit=crop"
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Inventory Tracking",
    description: "Automated stock management with theft prevention",
    image: "https://images.unsplash.com/photo-1556909114-2f39ac43fee2?w=400&h=250&fit=crop"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Staff Management",
    description: "Scheduling, performance tracking, and payroll",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Financial Analytics",
    description: "Real-time reporting and profit optimization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "QR Code Ordering",
    description: "Contactless menu and payment processing",
    image: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=400&h=250&fit=crop"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Marketing Tools",
    description: "Customer retention and promotional campaigns",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=250&fit=crop"
  }
]

export default function PlatformFeatures() {
  const [activeTab, setActiveTab] = useState<'customers' | 'restaurants'>('customers')

  const currentFeatures = activeTab === 'customers' ? customerFeatures : restaurantFeatures

  return (
    <section id="features" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Enhanced Vibrant Multi-layered Background */}
      <div className="absolute inset-0">
        {/* Base gradient layers with higher opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue-start/20 via-transparent to-secondary-purple-start/20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary-purple-start/15 via-transparent to-accent-orange/12"></div>
        
        {/* Strategic radial gradients for dramatic depth */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary-blue-start/25 via-primary-blue-start/12 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-secondary-purple-start/25 via-secondary-purple-start/12 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent-orange/15 via-transparent to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating gradient orbs for atmospheric depth */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-radial from-primary-blue-start/35 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-radial from-secondary-purple-start/30 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-radial from-accent-orange/40 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-28 h-28 bg-gradient-radial from-primary-blue-start/25 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Modern mesh gradient overlay for sophisticated depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-blue-start/12 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-purple-start/12 to-transparent"></div>
        
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Top Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-3 h-3 bg-green-500 rounded-full mb-3"></div>
            <div className="text-sm font-medium text-white">500+ Partner Restaurants</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-3 h-3 bg-green-500 rounded-full mb-3"></div>
            <div className="text-sm font-medium text-white">Same-Day Setup</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-3 h-3 bg-green-500 rounded-full mb-3"></div>
            <div className="text-sm font-medium text-white">24/7 Support</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-3 h-3 bg-green-500 rounded-full mb-3"></div>
            <div className="text-sm font-medium text-white">No Long-Term Contracts</div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Discover the comprehensive features that make Manuvoo the perfect choice for both diners and restaurants
          </p>
        </div>

        {/* Simple Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="glass rounded-xl p-2 inline-flex">
            <button
              onClick={() => setActiveTab('customers')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'customers'
                  ? 'bg-gradient-primary text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>For Customers</span>
            </button>
            <button
              onClick={() => setActiveTab('restaurants')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'restaurants'
                  ? 'bg-gradient-secondary text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>For Restaurants</span>
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {currentFeatures.map((feature, index) => (
            <div 
              key={`${activeTab}-${index}`}
              className="glass glass-hover rounded-2xl overflow-hidden group"
            >
              {/* Feature Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
              {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 ${
                activeTab === 'customers' 
                  ? 'bg-gradient-primary text-white' 
                  : 'bg-gradient-secondary text-white'
              }`}>
                {feature.icon}
              </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-blue-start transition-colors duration-300">
                {feature.title}
              </h3>
              
                <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats with South African Context */}
        <div className="border-t border-white/20 pt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            <div className="space-y-3 group">
              <div className="text-4xl lg:text-5xl font-bold text-white group-hover:text-primary-blue-start transition-colors duration-300">
                500+
              </div>
              <div className="text-gray-300 font-medium">
                Partner Restaurants
              </div>
              <div className="text-sm text-gray-400">
                Across South Africa
              </div>
            </div>
            <div className="space-y-3 group">
              <div className="text-4xl lg:text-5xl font-bold text-white group-hover:text-primary-blue-start transition-colors duration-300">
                50K+
              </div>
              <div className="text-gray-300 font-medium">
                Happy Diners
              </div>
              <div className="text-sm text-gray-400">
                Active Monthly Users
              </div>
            </div>
            <div className="space-y-3 group">
              <div className="text-4xl lg:text-5xl font-bold text-white group-hover:text-secondary-purple-start transition-colors duration-300">
                R35k+
              </div>
              <div className="text-gray-300 font-medium">
                Monthly Revenue
              </div>
              <div className="text-sm text-gray-400">
                Average for Partners
              </div>
            </div>
            <div className="space-y-3 group">
              <div className="text-4xl lg:text-5xl font-bold text-white group-hover:text-secondary-purple-start transition-colors duration-300">
                9
              </div>
              <div className="text-gray-300 font-medium">
                Provinces
              </div>
              <div className="text-sm text-gray-400">
                Cape Town to Johannesburg
              </div>
            </div>
          </div>
          
          {/* South African Cities Showcase */}
          <div className="glass rounded-2xl p-8">
            <h4 className="text-center text-white font-semibold text-lg mb-6">
              Available in Major South African Cities
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {['Cape Town', 'Johannesburg', 'Durban', 'Pretoria', 'Port Elizabeth', 'Stellenbosch', 'Bloemfontein', 'Kimberley'].map((city) => (
                <span 
                  key={city}
                  className="px-4 py-2 bg-primary-blue-start/20 text-primary-blue-start rounded-full font-medium hover:bg-primary-blue-start/30 transition-colors duration-300 cursor-pointer"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center pt-16">
          <div className="inline-flex items-center space-x-2 text-gray-300 mb-8">
            <div className="w-2 h-2 bg-primary-blue-start rounded-full animate-pulse"></div>
            <span>Ready to transform your dining experience?</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="font-semibold py-4 px-8 btn-floating shadow-button hover:shadow-button-hover transition-all duration-300 text-lg bg-gradient-primary hover:bg-gradient-primary-hover text-white">
              Explore Restaurants
            </button>
            <button className="font-semibold py-4 px-8 rounded-xl border-2 border-white/20 bg-transparent hover:bg-white/5 hover:border-white/30 text-white transition-all duration-300 text-lg">
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}