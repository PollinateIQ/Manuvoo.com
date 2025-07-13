"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react'

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    userType: 'diner' as 'diner' | 'restaurant'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        userType: 'diner'
      })
    }, 3000)
  }

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Enhanced Vibrant Multi-layered Background */}
      <div className="absolute inset-0">
        {/* Base gradient layers with higher opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gradient-dark-end via-transparent to-gradient-dark-start/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-start/22 via-transparent to-secondary-purple-start/22"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary-purple-start/16 via-transparent to-accent-orange/12"></div>
        
        {/* Strategic radial gradients for dramatic depth */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-radial from-primary-blue-start/28 via-primary-blue-start/12 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-radial from-secondary-purple-start/25 via-secondary-purple-start/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-radial from-accent-orange/18 via-accent-orange/8 to-transparent rounded-full blur-xl"></div>
        
        {/* Floating gradient orbs for atmospheric depth */}
        <div className="absolute top-32 left-20 w-48 h-48 bg-gradient-radial from-primary-blue-start/30 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-16 w-56 h-56 bg-gradient-radial from-secondary-purple-start/26 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-radial from-accent-orange/35 to-transparent rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-gradient-radial from-primary-blue-start/22 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Modern mesh gradient overlay for sophisticated depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-blue-start/12 to-secondary-purple-start/15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-accent-orange/10 via-transparent to-primary-blue-start/10 mix-blend-soft-light"></div>
        
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px'
        }}></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Dining Experience?
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Join thousands of satisfied customers and restaurant partners across South Africa. Get started today or reach out with any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8">
                Have questions? We're here to help. Reach out to our team for support, partnerships, or general inquiries.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-300 text-sm mb-2">Get in touch via email</p>
                  <a href="mailto:hello@manuvoo.com" className="text-primary-blue-start hover:text-primary-blue-end transition-colors">
                    hello@manuvoo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-300 text-sm mb-2">Monday - Friday, 8:00 AM - 6:00 PM SAST</p>
                  <a href="tel:+27211234567" className="text-primary-blue-start hover:text-primary-blue-end transition-colors">
                    +27 (0) 21 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                  <p className="text-gray-300 text-sm mb-2">Our headquarters</p>
                  <p className="text-primary-blue-start">
                    Cape Town, South Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Live Chat</h4>
                  <p className="text-gray-300 text-sm mb-2">Get instant support</p>
                  <button className="text-secondary-purple-start hover:text-secondary-purple-end transition-colors">
                    Start Chat
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass rounded-2xl p-6 mt-8">
              <h4 className="text-white font-semibold mb-4">Why Choose Manuvoo?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue-start mb-1">500+</div>
                  <div className="text-gray-300 text-sm">Partner Restaurants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-blue-start mb-1">50K+</div>
                  <div className="text-gray-300 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-purple-start mb-1">4.9</div>
                  <div className="text-gray-300 text-sm">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-purple-start mb-1">24/7</div>
                  <div className="text-gray-300 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-300">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type Selection */}
                <div>
                  <label className="text-sm font-medium text-white mb-3 block">I am a...</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleInputChange('userType', 'diner')}
                      className={`p-4 rounded-lg border transition-all duration-300 ${
                        formData.userType === 'diner'
                          ? 'border-primary-blue-start bg-primary-blue-start/20 text-white'
                          : 'border-white/20 text-gray-300 hover:border-white/30'
                      }`}
                    >
                      <div className="font-medium">Diner</div>
                      <div className="text-xs opacity-70">Looking for restaurants</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('userType', 'restaurant')}
                      className={`p-4 rounded-lg border transition-all duration-300 ${
                        formData.userType === 'restaurant'
                          ? 'border-secondary-purple-start bg-secondary-purple-start/20 text-white'
                          : 'border-white/20 text-gray-300 hover:border-white/30'
                      }`}
                    >
                      <div className="font-medium">Restaurant Owner</div>
                      <div className="text-xs opacity-70">Growing my business</div>
                    </button>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue-start focus:ring-2 focus:ring-primary-blue-start/20"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue-start focus:ring-2 focus:ring-primary-blue-start/20"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-white mb-2 block">Phone (Optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue-start focus:ring-2 focus:ring-primary-blue-start/20"
                    placeholder="+27 or 0XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-white mb-2 block">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue-start focus:ring-2 focus:ring-primary-blue-start/20 resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:bg-gradient-primary-hover text-lg py-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Join the Manuvoo Community Today
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're a food lover or restaurant owner, we're here to enhance your dining experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="font-semibold py-4 px-8 btn-floating shadow-button hover:shadow-button-hover transition-all duration-300 text-lg bg-gradient-primary hover:bg-gradient-primary-hover text-white">
                Get Started Now
              </Button>
              <Button variant="outline" className="font-semibold py-4 px-8 rounded-xl border-2 border-white/20 bg-transparent hover:bg-white/5 hover:border-white/30 text-white transition-all duration-300 text-lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}