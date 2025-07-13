"use client"

import React from 'react'
import { Star, MapPin, Users, TrendingUp } from 'lucide-react'
import { InfiniteMovingCards } from '@/components/aceternity/infinite-moving-cards'

const testimonials = [
  {
    quote: "Since joining Manuvoo, our dinner reservations increased by 40%. The platform is intuitive and our customers love the easy booking process.",
    name: "Sarah Johnson",
    title: "Owner, The Vineyard Table",
    location: "Stellenbosch",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b000?w=150&h=150&fit=crop&crop=face",
    restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop",
    rating: 4.9,
    bookings: "+200%"
  },
  {
    quote: "The analytics dashboard gives us incredible insights into customer behavior. We've optimized our service times and increased revenue by 35%.",
    name: "Michael Chen",
    title: "Manager, Ocean Basket Cape Town",
    location: "Cape Town",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    restaurant: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop",
    rating: 4.8,
    bookings: "+150%"
  },
  {
    quote: "Our customers discovered us through Manuvoo's platform. Now we're fully booked most weekends. The best investment we've made for our restaurant.",
    name: "Priya Naidoo",
    title: "Chef & Owner, Spice Route",
    location: "Durban",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    restaurant: "https://images.unsplash.com/photo-1559329007-40df8e126277?w=300&h=200&fit=crop",
    rating: 4.9,
    bookings: "+300%"
  },
  {
    quote: "The QR code ordering system revolutionized our service. Customers love the contactless experience and we process orders 50% faster.",
    name: "James van der Merwe",
    title: "Owner, Braai Brothers",
    location: "Johannesburg",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    restaurant: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=200&fit=crop",
    rating: 4.7,
    bookings: "+180%"
  },
  {
    quote: "Finding quality restaurants was always a challenge. Manuvoo made it effortless - I can book tables instantly and discover new places easily.",
    name: "Lisa Williams",
    title: "Food Enthusiast",
    location: "Cape Town",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    restaurant: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop",
    rating: 5.0,
    bookings: "300+ Bookings"
  },
  {
    quote: "As a frequent diner, I appreciate how Manuvoo shows real-time availability. No more disappointments or long waits - just perfect dining experiences.",
    name: "David Thompson",
    title: "Business Traveler",
    location: "Pretoria",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop",
    rating: 4.8,
    bookings: "150+ Bookings"
  }
]

const stats = [
  { 
    number: "500+", 
    label: "Partner Restaurants",
    sublabel: "Across South Africa",
    icon: <MapPin className="w-6 h-6" />
  },
  { 
    number: "50K+", 
    label: "Happy Customers",
    sublabel: "Monthly Active Users",
    icon: <Users className="w-6 h-6" />
  },
  { 
    number: "4.9", 
    label: "Average Rating",
    sublabel: "Customer Satisfaction",
    icon: <Star className="w-6 h-6 fill-current" />
  },
  { 
    number: "35%", 
    label: "Revenue Increase",
    sublabel: "Average for Partners",
    icon: <TrendingUp className="w-6 h-6" />
  }
]

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Enhanced Vibrant Multi-layered Background */}
      <div className="absolute inset-0">
        {/* Base gradient layers with higher opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue-start/18 via-transparent to-secondary-purple-start/18"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary-purple-start/14 via-transparent to-accent-orange/10"></div>
        
        {/* Strategic radial gradients for dramatic depth */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-radial from-primary-blue-start/22 via-primary-blue-start/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-radial from-secondary-purple-start/22 via-secondary-purple-start/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent-orange/12 via-transparent to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating gradient orbs for atmospheric depth */}
        <div className="absolute top-32 left-20 w-32 h-32 bg-gradient-radial from-primary-blue-start/32 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-radial from-secondary-purple-start/28 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-24 h-24 bg-gradient-radial from-accent-orange/38 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-1/2 w-28 h-28 bg-gradient-radial from-primary-blue-start/24 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Modern mesh gradient overlay for sophisticated depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-blue-start/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-purple-start/10 to-transparent"></div>
        
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-22" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px'
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <span className="text-gray-300 ml-2">Trusted by thousands</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Loved by Restaurants & Diners Across South Africa
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Join the growing community of satisfied customers and thriving restaurants who trust Manuvoo for their dining experiences
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              
              <div className="text-gray-300 font-medium mb-1">
                {stat.label}
              </div>
              
              <div className="text-sm text-gray-400">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
            What Our Community Says
          </h3>
          
          {/* Custom Testimonial Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <div key={index} className="glass glass-hover rounded-2xl overflow-hidden group">
                {/* Restaurant Image */}
                <div className="h-40 overflow-hidden">
                  <img
                    src={testimonial.restaurant}
                    alt={testimonial.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                        />
                      ))}
                      <span className="text-white font-bold ml-2">{testimonial.rating}</span>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-primary-blue-start font-bold text-sm">{testimonial.bookings}</div>
                      <div className="text-gray-400 text-xs">Growth</div>
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.title}</div>
                      <div className="text-primary-blue-start text-xs flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infinite Moving Cards for Additional Testimonials */}
        <div className="mb-16">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            className="mb-8"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center glass rounded-3xl p-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h3>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you're a food lover looking for your next great meal or a restaurant owner ready to grow your business, Manuvoo is here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="font-semibold py-4 px-8 btn-floating shadow-button hover:shadow-button-hover transition-all duration-300 text-lg bg-gradient-primary hover:bg-gradient-primary-hover text-white">
              Start Discovering Restaurants
            </button>
            <button className="font-semibold py-4 px-8 rounded-xl border-2 border-white/20 bg-transparent hover:bg-white/5 hover:border-white/30 text-white transition-all duration-300 text-lg">
              Grow My Restaurant
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}