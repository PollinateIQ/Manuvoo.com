"use client"

import React, { useState } from 'react'
import { Star, MapPin, Clock, Users, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CardContainer, CardBody, CardItem } from '@/components/aceternity/3d-card'
import BookingModal from './booking-modal'

interface RestaurantCardProps {
  restaurant: {
    id: string
    name: string
    cuisine: string
    location: string
    rating: number
    reviewCount: number
    priceRange: string
    image: string
    openNow: boolean
    nextAvailable: string
    tags: string[]
    distance?: string
  }
  onFavorite?: (restaurantId: string) => void
}

export default function RestaurantCard({ restaurant, onFavorite }: RestaurantCardProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  const {
    id,
    name,
    cuisine,
    location,
    rating,
    reviewCount,
    priceRange,
    image,
    openNow,
    nextAvailable,
    tags,
    distance
  } = restaurant

  const handleBookNow = () => {
    setIsBookingModalOpen(true)
  }

  const handleFavorite = () => {
    setIsFavorited(!isFavorited)
    onFavorite?.(id)
  }

  return (
    <>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <div className="glass glass-hover rounded-xl overflow-hidden group cursor-pointer">
            {/* Restaurant Image */}
            <CardItem translateZ="50" className="w-full h-48 relative overflow-hidden">
              <img
                src={image || `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop`}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Status Badge */}
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  openNow 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {openNow ? 'Open Now' : 'Closed'}
                </span>
              </div>

              {/* Favorite Button */}
              <CardItem translateZ="60" className="absolute top-3 right-3">
                <button
                  onClick={handleFavorite}
                  className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-black/40 transition-colors duration-300"
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? 'text-red-500 fill-red-500' : 'text-white'}`} />
                </button>
              </CardItem>

              {/* Distance Badge */}
              {distance && (
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {distance}
                  </span>
                </div>
              )}
            </CardItem>

            {/* Restaurant Info */}
            <div className="p-6">
              <CardItem translateZ="50" className="mb-2">
                <h3 className="text-lg font-semibold text-foreground-primary group-hover:text-primary-blue-start transition-colors duration-300">
                  {name}
                </h3>
              </CardItem>

              <CardItem translateZ="40" className="mb-3">
                <div className="flex items-center justify-between">
                  <span className="text-foreground-secondary text-sm">{cuisine}</span>
                  <span className="text-green-400 text-sm font-medium">{priceRange}</span>
                </div>
              </CardItem>

              {/* Rating and Location */}
              <CardItem translateZ="30" className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-foreground-primary font-medium text-sm">{rating}</span>
                  <span className="text-foreground-tertiary text-sm">({reviewCount})</span>
                </div>
                
                <div className="flex items-center space-x-1 text-foreground-secondary text-sm">
                  <MapPin className="w-3 h-3" />
                  <span>{location}</span>
                </div>
              </CardItem>

              {/* Tags */}
              {tags.length > 0 && (
                <CardItem translateZ="20" className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-blue-start/20 text-primary-blue-start rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {tags.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-foreground-tertiary rounded-full text-xs">
                        +{tags.length - 3} more
                      </span>
                    )}
                  </div>
                </CardItem>
              )}

              {/* Availability Info */}
              <CardItem translateZ="10" className="mb-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="w-4 h-4 text-foreground-secondary" />
                  <span className="text-foreground-secondary">
                    {openNow ? 'Available now' : `Next: ${nextAvailable}`}
                  </span>
                </div>
              </CardItem>

              {/* Action Buttons */}
              <CardItem translateZ="60" className="flex space-x-3">
                <Button
                  onClick={handleBookNow}
                  size="sm"
                  className="flex-1 group-hover:scale-105 transition-transform duration-300"
                  disabled={!openNow}
                >
                  <Users className="w-4 h-4 mr-2" />
                  {openNow ? 'Book Table' : 'View Menu'}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="px-3"
                >
                  View Details
                </Button>
              </CardItem>
            </div>
          </div>
        </CardBody>
      </CardContainer>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        restaurant={{
          id: restaurant.id,
          name: restaurant.name,
          cuisine: restaurant.cuisine,
          location: restaurant.location,
          image: restaurant.image,
          rating: restaurant.rating,
          priceRange: restaurant.priceRange
        }}
      />
    </>
  )
}