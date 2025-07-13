"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CardStack } from '@/components/ui/card-stack'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import ReservationDialog from '@/components/reservation/ReservationDialog'
import { TimeSlot } from '@/types/reservations'

// Fallback restaurant data in case API fails
const fallbackRestaurants = [
  {
    id: '1',
    name: 'The Grill House',
    logo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=80&h=80&fit=crop',
    banner: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=200&fit=crop',
    rating: 4.8,
    cuisine: 'Steakhouse',
    location: 'Cape Town',
    price: '$$'
  },
  {
    id: '2',
    name: 'Ocean Blue',
    logo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=80&h=80&fit=crop',
    banner: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=200&fit=crop',
    rating: 4.7,
    cuisine: 'Seafood',
    location: 'Durban',
    price: '$$$'
  },
  {
    id: '3',
    name: 'Spice Garden',
    logo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=80&h=80&fit=crop',
    banner: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=200&fit=crop',
    rating: 4.6,
    cuisine: 'Indian',
    location: 'Johannesburg',
    price: '$$'
  }
]

// Fallback time slots in case API fails
const fallbackTimeSlots: TimeSlot[] = [
  { time: '12:00', available: true }, 
  { time: '12:30', available: true }, 
  { time: '13:00', available: true }, 
  { time: '13:30', available: true }, 
  { time: '14:00', available: true },
  { time: '18:00', available: true }, 
  { time: '18:30', available: true }, 
  { time: '19:00', available: true }, 
  { time: '19:30', available: true }, 
  { time: '20:00', available: true }, 
  { time: '20:30', available: true }
]

export default function Hero() {
  // Dialog state
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  
  // Handle register restaurant click
  const handleRegisterRestaurant = () => {
    // Scroll to services section
    const servicesSection = document.getElementById('services-section')
    
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      // Fallback if services section not found
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }
  }
  
  // Hero images for card stack
  const heroImages = [
    { id: 0, image: 'https://images.unsplash.com/photo-1601047453876-3d60dc27c882?w=600&h=400&fit=crop' },
    { id: 1, image: 'https://images.unsplash.com/photo-1556741533-f6acd647d2f6?w=600&h=400&fit=crop' },
    { id: 2, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop' },
    { id: 3, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop' },
  ]
  
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Book Your Table in Seconds
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Scan, order, and dine seamlessly. Experience the future of dining with instant reservations and mobile ordering.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ReservationDialog 
                isOpen={isDialogOpen} 
                onOpenChange={setIsDialogOpen}
                triggerButton={
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Find a Table
                  </Button>
                }
              />
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10"
                onClick={handleRegisterRestaurant}
              >
                Register Restaurant
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-primary" />
                <span>500+ Partner Restaurants</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-primary" />
                <span>50K+ Happy Diners</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-primary" />
                <span>15+ Major Cities</span>
              </div>
            </div>
          </div>
          
          {/* Hero Images */}
          <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
            <CardStack items={heroImages} />
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-primary/20 rounded-full blur-3xl -z-10 transform -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-secondary/20 rounded-full blur-3xl -z-10" />
    </section>
  )
}
