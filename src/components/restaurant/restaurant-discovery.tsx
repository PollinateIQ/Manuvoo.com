"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import RestaurantCard from './restaurant-card'
import SearchFilters from './search-filters'
import { Search, MapPin, Filter } from 'lucide-react'

// Sample restaurant data for demo
const sampleRestaurants = [
  {
    id: '1',
    name: 'The Cape Grace',
    cuisine: 'Fine Dining',
    location: 'V&A Waterfront, Cape Town',
    rating: 4.8,
    reviewCount: 324,
    priceRange: 'R350-R500',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
    openNow: true,
    nextAvailable: '7:30 PM',
    tags: ['Romantic', 'Ocean View', 'Wine Pairing'],
    distance: '2.1 km'
  },
  {
    id: '2',
    name: 'Mama Africa',
    cuisine: 'Traditional South African',
    location: 'Long Street, Cape Town',
    rating: 4.6,
    reviewCount: 189,
    priceRange: 'R200-R350',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
    openNow: true,
    nextAvailable: '8:00 PM',
    tags: ['Traditional', 'Live Music', 'Cultural'],
    distance: '1.8 km'
  },
  {
    id: '3',
    name: 'Nobu Johannesburg',
    cuisine: 'Japanese',
    location: 'Sandton, Johannesburg',
    rating: 4.9,
    reviewCount: 412,
    priceRange: 'R400-R600',
    image: 'https://images.unsplash.com/photo-1579027989054-b11169749304?w=600&h=400&fit=crop',
    openNow: false,
    nextAvailable: 'Tomorrow 6:00 PM',
    tags: ['Luxury', 'Sushi', 'Celebrity Chef'],
    distance: '15.2 km'
  },
  {
    id: '4',
    name: 'The Grillhouse',
    cuisine: 'Steakhouse',
    location: 'Camps Bay, Cape Town',
    rating: 4.7,
    reviewCount: 298,
    priceRange: 'R300-R450',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop',
    openNow: true,
    nextAvailable: '7:00 PM',
    tags: ['Steaks', 'Ocean View', 'Premium Cuts'],
    distance: '3.5 km'
  },
  {
    id: '5',
    name: 'Marble Restaurant',
    cuisine: 'Contemporary',
    location: 'Rosebank, Johannesburg',
    rating: 4.5,
    reviewCount: 167,
    priceRange: 'R250-R400',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    openNow: true,
    nextAvailable: '8:30 PM',
    tags: ['Modern', 'Artisanal', 'Rooftop'],
    distance: '12.7 km'
  },
  {
    id: '6',
    name: 'Ocean Basket',
    cuisine: 'Seafood',
    location: 'Sea Point, Cape Town',
    rating: 4.3,
    reviewCount: 156,
    priceRange: 'R150-R280',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop',
    openNow: true,
    nextAvailable: '6:45 PM',
    tags: ['Fresh Seafood', 'Family Friendly', 'Casual'],
    distance: '4.2 km'
  }
]

export default function RestaurantDiscovery() {
  const [filteredRestaurants, setFilteredRestaurants] = useState(sampleRestaurants)
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    if (term.trim() === '') {
      setFilteredRestaurants(sampleRestaurants)
    } else {
      const filtered = sampleRestaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(term.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(term.toLowerCase()) ||
        restaurant.location.toLowerCase().includes(term.toLowerCase())
      )
      setFilteredRestaurants(filtered)
    }
  }

  const handleFiltersApply = (filters: any) => {
    let filtered = sampleRestaurants

    // Apply cuisine filter
    if (filters.cuisine && filters.cuisine !== 'all') {
      filtered = filtered.filter(restaurant =>
        restaurant.cuisine.toLowerCase().includes(filters.cuisine.toLowerCase())
      )
    }

    // Apply location filter
    if (filters.location && filters.location !== 'all') {
      filtered = filtered.filter(restaurant =>
        restaurant.location.includes(filters.location)
      )
    }

    // Apply price range filter
    if (filters.priceRange && filters.priceRange !== 'all') {
      const priceRanges = {
        'budget': ['R100', 'R200'],
        'mid': ['R200', 'R400'],
        'high': ['R400', 'R600']
      }
      // Simple price filtering logic (in real app, this would be more sophisticated)
      filtered = filtered.filter(restaurant => {
        const price = parseInt(restaurant.priceRange.split('-')[0].replace('R', ''))
        const range = priceRanges[filters.priceRange as keyof typeof priceRanges]
        if (range) {
          const min = parseInt(range[0].replace('R', ''))
          const max = parseInt(range[1].replace('R', ''))
          return price >= min && price <= max
        }
        return true
      })
    }

    // Apply availability filter
    if (filters.availability === 'open') {
      filtered = filtered.filter(restaurant => restaurant.openNow)
    }

    setFilteredRestaurants(filtered)
  }

  return (
    <section className="py-section-mobile lg:py-section-desktop relative overflow-hidden">
      {/* Enhanced Vibrant Multi-layered Background */}
      <div className="absolute inset-0">
        {/* Base gradient layers with higher opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue-start/25 via-transparent to-secondary-purple-start/25"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary-purple-start/20 via-transparent to-accent-orange/15"></div>
        
        {/* Strategic radial gradients for dramatic depth */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-radial from-primary-blue-start/30 via-primary-blue-start/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-radial from-secondary-purple-start/30 via-secondary-purple-start/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-accent-orange/25 via-accent-orange/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating gradient orbs with increased opacity to 25-35% */}
        <div className="absolute top-40 right-40 w-32 h-32 bg-gradient-radial from-secondary-purple-start/35 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-40 h-40 bg-gradient-radial from-primary-blue-start/30 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-2/3 w-24 h-24 bg-gradient-radial from-accent-orange/35 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/2 w-40 h-40 bg-gradient-radial from-primary-blue-start/25 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-gradient-radial from-secondary-purple-start/30 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/4 right-1/3 w-28 h-28 bg-gradient-radial from-accent-orange/35 to-transparent rounded-full blur-lg animate-pulse" style={{animationDelay: '5s'}}></div>
        
        {/* Modern mesh gradient overlay for sophisticated depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary-purple-start/3 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-blue-start/3 to-transparent"></div>
        
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px'
        }}></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Discover & Book Amazing Restaurants
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Browse our curated selection of restaurants and book your table instantly. No waiting, no phone calls - just great food experiences.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search restaurants, cuisines, or locations..."
              className="w-full pl-12 pr-20 py-4 glass rounded-xl border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue-start focus:ring-2 focus:ring-primary-blue-start/20 text-lg"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
              <Button
                onClick={() => setIsFiltersOpen(true)}
                variant="outline"
                size="sm"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-primary-blue-start" />
            <span className="text-white font-medium">
              {filteredRestaurants.length} restaurants found
              {searchTerm && ` for "${searchTerm}"`}
            </span>
          </div>
          <div className="text-gray-300 text-sm">
            Sorted by: Distance
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onFavorite={(id) => console.log('Favorited restaurant:', id)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredRestaurants.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">No restaurants found</h3>
            <p className="text-gray-300 mb-8">
              Try adjusting your search terms or filters to find more restaurants.
            </p>
            <Button
              onClick={() => {
                setSearchTerm('')
                setFilteredRestaurants(sampleRestaurants)
              }}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Clear Search
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredRestaurants.length > 0 && (
          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4"
            >
              Load More Restaurants
            </Button>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary-blue-start mb-2">500+</div>
            <div className="text-gray-300">Partner Restaurants</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary-blue-start mb-2">50K+</div>
            <div className="text-gray-300">Bookings Made</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-secondary-purple-start mb-2">15+</div>
            <div className="text-gray-300">Cities Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-secondary-purple-start mb-2">4.9★</div>
            <div className="text-gray-300">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Search Filters Modal */}
      <SearchFilters
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
        onApplyFilters={handleFiltersApply}
      />
    </section>
  )
}