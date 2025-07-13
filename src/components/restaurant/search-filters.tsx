"use client"

import React, { useState } from 'react'
import { Search, MapPin, Filter, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FilterState {
  location: string
  cuisine: string
  priceRange: string
  rating: string
  availability: string
}

interface SearchFiltersProps {
  isOpen?: boolean
  onClose?: () => void
  onApplyFilters?: (filters: FilterState) => void
}

const cuisineTypes = [
  'All Cuisines',
  'Contemporary South African', 
  'Traditional Braai',
  'Cape Malay',
  'Indian Fusion',
  'Fresh Seafood',
  'Wine & Dine',
  'Traditional African',
  'Portuguese',
  'Italian',
  'Steakhouse'
]

const priceRanges = [
  'All Prices',
  'Under R150',
  'R150 - R300', 
  'R300 - R500',
  'R500+'
]

const cities = [
  'All Cities',
  'Cape Town',
  'Johannesburg', 
  'Durban',
  'Pretoria',
  'Port Elizabeth',
  'Stellenbosch',
  'Bloemfontein',
  'Kimberley'
]

const ratings = ['All Ratings', '4.5+', '4.0+', '3.5+', '3.0+']

export default function SearchFilters({ isOpen, onClose, onApplyFilters }: SearchFiltersProps = {}) {
  const [filters, setFilters] = useState<FilterState>({
    location: '',
    cuisine: '',
    priceRange: '',
    rating: '',
    availability: ''
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      location: '',
      cuisine: '',
      priceRange: '',
      rating: '',
      availability: ''
    })
    setSearchQuery('')
  }

  const applyFilters = () => {
    if (onApplyFilters) {
      onApplyFilters(filters)
    }
    if (onClose) {
      onClose()
    }
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== '') || searchQuery !== ''

  // If used as a modal
  if (isOpen !== undefined) {
    if (!isOpen) return null

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
        <div className="glass rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="sticky top-0 glass border-b border-white/20 p-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Filter Restaurants</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search restaurants, dishes, or cuisine..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-primary-blue-start focus:outline-none transition-colors duration-300"
                />
              </div>
            </div>

            {/* Filter Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Location Filter */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-white">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full pl-9 pr-4 py-3 glass border border-white/20 rounded-lg text-white focus:border-primary-blue-start focus:outline-none appearance-none bg-white/5"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city === 'All Cities' ? 'all' : city} className="bg-gray-800 text-white">
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Cuisine Filter */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-white">Cuisine</label>
                <select
                  value={filters.cuisine}
                  onChange={(e) => handleFilterChange('cuisine', e.target.value)}
                  className="w-full px-3 py-3 glass border border-white/20 rounded-lg text-white focus:border-primary-blue-start focus:outline-none appearance-none bg-white/5"
                >
                  {cuisineTypes.map((cuisine) => (
                    <option key={cuisine} value={cuisine === 'All Cuisines' ? 'all' : cuisine} className="bg-gray-800 text-white">
                      {cuisine}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-white">Price Range</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  className="w-full px-3 py-3 glass border border-white/20 rounded-lg text-white focus:border-primary-blue-start focus:outline-none appearance-none bg-white/5"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range === 'All Prices' ? 'all' : range} className="bg-gray-800 text-white">
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-white">Minimum Rating</label>
                <select
                  value={filters.rating}
                  onChange={(e) => handleFilterChange('rating', e.target.value)}
                  className="w-full px-3 py-3 glass border border-white/20 rounded-lg text-white focus:border-primary-blue-start focus:outline-none appearance-none bg-white/5"
                >
                  {ratings.map((rating) => (
                    <option key={rating} value={rating === 'All Ratings' ? 'all' : rating} className="bg-gray-800 text-white">
                      {rating}
                    </option>
                  ))}
                </select>
              </div>

              {/* Availability Filter */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-white">Availability</label>
                <select
                  value={filters.availability}
                  onChange={(e) => handleFilterChange('availability', e.target.value)}
                  className="w-full px-3 py-3 glass border border-white/20 rounded-lg text-white focus:border-primary-blue-start focus:outline-none appearance-none bg-white/5"
                >
                  <option value="all" className="bg-gray-800 text-white">All Restaurants</option>
                  <option value="open" className="bg-gray-800 text-white">Open Now</option>
                  <option value="reservations" className="bg-gray-800 text-white">Takes Reservations</option>
                </select>
              </div>
            </div>

            {/* Quick Filter Chips */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-white mb-4">Popular Filters</h3>
              <div className="flex flex-wrap gap-2">
                {['Popular', 'Romantic', 'Family Friendly', 'Outdoor Seating', 'Live Music', 'Wine Pairing', 'Vegetarian Options'].map((chip) => (
                  <button
                    key={chip}
                    className="px-4 py-2 glass border border-white/20 hover:border-primary-blue-start/50 rounded-full text-sm text-gray-300 hover:text-primary-blue-start transition-all duration-300"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="sticky bottom-0 glass border-t border-white/20 p-6 flex justify-between">
            <Button
              onClick={clearFilters}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Clear All
            </Button>
            <div className="flex space-x-3">
              <Button
                onClick={onClose}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Cancel
              </Button>
              <Button
                onClick={applyFilters}
                className="bg-gradient-primary hover:bg-gradient-primary-hover"
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Original embedded version
  return (
    <div className="glass rounded-lg p-6 mb-8">
      {/* Main Search Bar */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-secondary w-5 h-5" />
          <input
            type="text"
            placeholder="Search restaurants, dishes, or cuisine..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-input-background border border-input-border rounded-lg text-foreground-primary placeholder-foreground-secondary focus:border-primary-blue-start focus:outline-none transition-colors duration-300"
          />
        </div>
        
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center space-x-2"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </Button>
          
          {hasActiveFilters && (
            <Button
              variant="outline"
              onClick={clearFilters}
              className="flex items-center space-x-2 text-foreground-secondary"
            >
              <X className="w-4 h-4" />
              <span>Clear</span>
            </Button>
          )}
        </div>
      </div>

      {/* Quick Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        {['Popular', 'Open Now', 'Takes Reservations', 'Outdoor Seating', 'Live Music'].map((chip) => (
          <button
            key={chip}
            className="px-3 py-1 bg-white/5 hover:bg-primary-blue-start/20 border border-border-glass hover:border-primary-blue-start/50 rounded-full text-sm text-foreground-secondary hover:text-primary-blue-start transition-all duration-300"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-border-glass">
          {/* Location Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground-primary">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-secondary w-4 h-4" />
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-input-background border border-input-border rounded-lg text-foreground-primary focus:border-primary-blue-start focus:outline-none appearance-none"
              >
                {cities.map((city) => (
                  <option key={city} value={city === 'All Cities' ? '' : city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Cuisine Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground-primary">Cuisine</label>
            <select
              value={filters.cuisine}
              onChange={(e) => handleFilterChange('cuisine', e.target.value)}
              className="w-full px-3 py-2 bg-input-background border border-input-border rounded-lg text-foreground-primary focus:border-primary-blue-start focus:outline-none appearance-none"
            >
              {cuisineTypes.map((cuisine) => (
                <option key={cuisine} value={cuisine === 'All Cuisines' ? '' : cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground-primary">Price Range</label>
            <select
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              className="w-full px-3 py-2 bg-input-background border border-input-border rounded-lg text-foreground-primary focus:border-primary-blue-start focus:outline-none appearance-none"
            >
              {priceRanges.map((range) => (
                <option key={range} value={range === 'All Prices' ? '' : range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          {/* Rating Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground-primary">Minimum Rating</label>
            <select
              value={filters.rating}
              onChange={(e) => handleFilterChange('rating', e.target.value)}
              className="w-full px-3 py-2 bg-input-background border border-input-border rounded-lg text-foreground-primary focus:border-primary-blue-start focus:outline-none appearance-none"
            >
              {ratings.map((rating) => (
                <option key={rating} value={rating === 'All Ratings' ? '' : rating}>
                  {rating}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border-glass">
          <span className="text-sm text-foreground-secondary">Active filters:</span>
          {Object.entries(filters).map(([key, value]) => 
            value && (
              <span
                key={key}
                className="px-2 py-1 bg-primary-blue-start/20 text-primary-blue-start rounded-full text-xs flex items-center space-x-1"
              >
                <span>{value}</span>
                <button
                  onClick={() => handleFilterChange(key as keyof FilterState, '')}
                  className="hover:text-primary-blue-end"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )
          )}
        </div>
      )}
    </div>
  )
}