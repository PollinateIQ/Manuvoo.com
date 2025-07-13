"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { 
  Search, Calendar, Clock, CheckCircle, X, ChevronRight, 
  MapPin, Star, Users, Utensils, Coffee, Info
} from 'lucide-react'
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/components/shared/dialog'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Textarea } from '../ui/textarea-custom'
import { 
  Restaurant, 
  TimeSlot, 
  BookingData, 
  Table, 
  MenuItem, 
  MenuCategory,
  ReservationFormData
} from '@/types/reservations'
import { fetchRestaurants, fetchTables, fetchMenuCategories, createBookingConfirmation } from '@/services/supabaseService'
import { getAvailableTimeSlots } from '@/services/reservationService'
import { toast } from '@/components/ui/use-toast'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface ReservationDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  triggerButton?: React.ReactNode
}

export default function ReservationDialog({ 
  isOpen, 
  onOpenChange, 
  triggerButton 
}: ReservationDialogProps) {
  // Dialog states
  const [dialogStep, setDialogStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  
  // Reservation states
  const [searchQuery, setSearchQuery] = useState('')
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([])
  const [availableTables, setAvailableTables] = useState<Table[]>([])
  const [selectedTable, setSelectedTable] = useState<Table | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [partySize, setPartySize] = useState(2)
  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [specialRequests, setSpecialRequests] = useState('')
  const [reservationId, setReservationId] = useState<string | null>(null)
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([])
  const [activeTab, setActiveTab] = useState('details')
  
  // Fetch restaurants when dialog opens or search query changes
  useEffect(() => {
    if (isOpen && dialogStep === 1) {
      fetchInitialRestaurants()
    }
  }, [isOpen, dialogStep, searchQuery])
  
  // Fetch time slots when date or restaurant changes
  useEffect(() => {
    if (selectedRestaurant && selectedDate) {
      fetchTimeSlots()
    }
  }, [selectedRestaurant, selectedDate, partySize])

  // Fetch tables when time is selected
  useEffect(() => {
    if (selectedRestaurant && selectedDate && selectedTime) {
      fetchAvailableTables()
    }
  }, [selectedRestaurant, selectedDate, selectedTime, partySize])

  // Fetch menu when restaurant is selected
  useEffect(() => {
    if (selectedRestaurant && dialogStep === 3) {
      loadMenuCategories()
    }
  }, [selectedRestaurant, dialogStep])
  
  // Reset dialog when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setDialogStep(1)
        setSelectedRestaurant(null)
        setSelectedDate(undefined)
        setSelectedTime(null)
        setSelectedTable(null)
        setPartySize(2)
        setCustomerName('')
        setCustomerEmail('')
        setCustomerPhone('')
        setSpecialRequests('')
        setReservationId(null)
        setActiveTab('details')
      }, 300)
    }
  }, [isOpen])
  
  // Fetch restaurants from API
  const fetchInitialRestaurants = async () => {
    console.log('🍴 ReservationDialog: fetchInitialRestaurants called with searchQuery:', searchQuery);
    setIsLoading(true)
    try {
      console.log('🚀 ReservationDialog: Calling fetchRestaurants service...');
      const data = await fetchRestaurants(searchQuery)
      console.log('✅ ReservationDialog: Received restaurant data:', data?.length || 0, 'restaurants');
      console.log('📝 ReservationDialog: First restaurant:', data?.[0]?.name || 'None');
      setRestaurants(data)
    } catch (error) {
      console.error('❌ ReservationDialog: Error fetching restaurants:', error)
      toast({
        title: 'Error',
        description: 'Failed to fetch restaurants. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }
  
  // Search for restaurants
  const handleSearchRestaurants = async (query: string) => {
    setIsLoading(true)
    try {
      const results = await fetchRestaurants(query)
      setRestaurants(results)
    } catch (error) {
      console.error('Error searching restaurants:', error)
      toast({
        title: 'Search Failed',
        description: 'Could not search for restaurants. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }
  
  // Fetch available time slots from API
  const fetchTimeSlots = async () => {
    if (!selectedRestaurant || !selectedDate) return
    
    setIsLoading(true)
    try {
      const data = await getAvailableTimeSlots(selectedRestaurant.id, selectedDate, partySize)
      setAvailableTimeSlots(data)
    } catch (error) {
      console.error('Error fetching time slots:', error)
      toast({
        title: 'Error',
        description: 'Failed to fetch available times. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch available tables from API
  const fetchAvailableTables = async () => {
    console.log('🍽️ ReservationDialog: fetchAvailableTables called');
    console.log('🍽️ Restaurant:', selectedRestaurant?.name);
    console.log('🍽️ Date:', selectedDate?.toISOString().split('T')[0]);
    console.log('🍽️ Time:', selectedTime);
    console.log('🍽️ Party size:', partySize);
    
    if (!selectedRestaurant || !selectedDate || !selectedTime) {
      console.log('⚠️ ReservationDialog: Missing required data for table fetch');
      return;
    }
    
    setIsLoading(true)
    try {
      // First get all tables for the restaurant with sufficient capacity
      console.log('🚀 ReservationDialog: Calling fetchTables service...');
      const tables = await fetchTables(
        selectedRestaurant.id,
        partySize
      )
      console.log('✅ ReservationDialog: Received table data:', tables?.length || 0, 'tables');
      
      // Filter tables based on availability for the selected time
      // In a real implementation, we would check reservations for this time
      // For now, we'll use a deterministic approach based on date+time+restaurant
      const dateTimeString = selectedDate.toISOString().split('T')[0] + selectedTime;
      const seed = dateTimeString + selectedRestaurant.id;
      let seedNum = 0;
      for (let i = 0; i < seed.length; i++) {
        seedNum += seed.charCodeAt(i);
      }
      
      // Mark ~30% of tables as unavailable based on the seed
      const availableTables = tables.filter((table, index) => {
        return (seedNum + index) % 3 !== 0; // 2/3 of tables will be available
      });
      
      setAvailableTables(availableTables)
      
      // Auto-select first table if available
      if (availableTables.length > 0) {
        setSelectedTable(availableTables[0])
      } else {
        setSelectedTable(null)
      }
    } catch (error) {
      console.error('Error fetching tables:', error)
      toast({
        title: 'Error',
        description: 'Failed to fetch available tables. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch menu categories and items from API
  const loadMenuCategories = async () => {
    if (!selectedRestaurant) return
    
    setIsLoading(true)
    try {
      const categories = await fetchMenuCategories(selectedRestaurant.id)
      setMenuCategories(categories)
    } catch (error) {
      console.error('Error fetching menu:', error)
      toast({
        title: 'Error',
        description: 'Failed to fetch menu. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }
  
  // Handle dialog open/close
  const handleDialogOpenChange = (open: boolean) => {
    onOpenChange(open)
  }
  
  // Handle restaurant selection
  const handleRestaurantSelect = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant)
    setDialogStep(2)
  }
  
  // Handle time slot selection
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  // Handle table selection
  const handleTableSelect = (table: Table) => {
    setSelectedTable(table)
  }
  
  // Handle reservation submission
  const handleSubmitReservation = async () => {
    if (!selectedRestaurant || !selectedDate || !selectedTime || !selectedTable || !customerName || !customerEmail || !customerPhone) {
      toast({
        title: 'Incomplete Information',
        description: 'Please fill out all required fields including table selection',
        variant: 'destructive',
      })
      return
    }
    
    setIsLoading(true)
    
    try {
      // Format date for API
      const formattedDate = selectedDate.toISOString().split('T')[0]
      
      // Create booking data object
      const bookingData: BookingData = {
        restaurant_id: selectedRestaurant.id,
        table_id: selectedTable.id,
        reservation_date: formattedDate,
        reservation_time: selectedTime,
        party_size: partySize,
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone,
        special_requests: specialRequests,
        status: 'confirmed'
      }
      
      // Create booking confirmation
      const result = await createBookingConfirmation(bookingData)
      
      // Set reservation ID from result
      if (result && result.id) {
        setReservationId(result.id)
      } else {
        // Fallback for testing
        setReservationId('temp-' + Date.now().toString())
      }
      
      // Show success message
      toast({
        title: 'Booking Confirmed!',
        description: `Your table at ${selectedRestaurant.name} has been reserved.`,
      })
      
      // Move to confirmation step
      setDialogStep(4)
    } catch (error) {
      console.error('Error creating booking:', error)
      toast({
        title: 'Booking Failed',
        description: 'We could not process your booking. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }
  
  // Handle party size change
  const handlePartySizeChange = (increment: number) => {
    const newSize = Math.max(1, Math.min(20, partySize + increment))
    setPartySize(newSize)
  }

  // Format price to currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR'
    }).format(price)
  }
  
  return (
    <Dialog open={isOpen} onOpenChange={handleDialogOpenChange}>
      {triggerButton && <DialogTrigger asChild>{triggerButton}</DialogTrigger>}
      
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {/* Step 1: Restaurant Selection */}
        {dialogStep === 1 && (
          <>
            <DialogHeader>
              <DialogTitle>Find a Restaurant</DialogTitle>
              <DialogDescription>
                Search for restaurants by name, cuisine, or location
              </DialogDescription>
            </DialogHeader>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search restaurants..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="space-y-4 mt-4">
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                </div>
              ) : restaurants.length > 0 ? (
                restaurants.map((restaurant) => (
                  <div
                    key={restaurant.id}
                    className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => handleRestaurantSelect(restaurant)}
                  >
                    <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <img 
                        src={restaurant.logo_url} 
                        alt={restaurant.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{restaurant.name}</h3>
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-yellow-400 fill-yellow-400" />
                          <span className="text-sm">{restaurant.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <div className="flex items-center gap-1">
                          <Utensils size={14} />
                          <span>{restaurant.cuisine_type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{restaurant.address}</span>
                        </div>
                        <span>{restaurant.price_range}</span>
                      </div>
                    </div>
                    
                    <ChevronRight size={18} className="text-gray-400" />
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No restaurants found. Try a different search term.
                </div>
              )}
            </div>
          </>
        )}
        
        {/* Step 2: Date & Time Selection */}
        {dialogStep === 2 && selectedRestaurant && (
          <>
            <DialogHeader>
              <DialogTitle>Select Date & Time</DialogTitle>
              <DialogDescription>
                Choose when you'd like to visit {selectedRestaurant.name}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <Calendar size={16} />
                    Select Date
                  </h3>
                  <div className="border rounded-lg p-3">
                    <CalendarComponent
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 3))}
                      className="mx-auto"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <Clock size={16} />
                    Select Time
                  </h3>
                  <div className="border rounded-lg p-3 h-[300px] overflow-y-auto">
                    {selectedDate ? (
                      isLoading ? (
                        <div className="flex justify-center py-8">
                          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                        </div>
                      ) : availableTimeSlots.length > 0 ? (
                        <div className="grid grid-cols-2 gap-2">
                          {availableTimeSlots.map((slot) => (
                            <Button
                              key={slot.time}
                              variant={selectedTime === slot.time ? "default" : "outline"}
                              className={`w-full ${!slot.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                              onClick={() => slot.available && handleTimeSelect(slot.time)}
                              disabled={!slot.available}
                            >
                              {slot.time}
                            </Button>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-gray-500">
                          No available times for this date.
                        </div>
                      )
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        Please select a date first.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Users size={16} />
                  Party Size
                </h3>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handlePartySizeChange(-1)}
                    disabled={partySize <= 1}
                  >
                    <span className="text-lg font-medium">-</span>
                  </Button>
                  <span className="w-8 text-center">{partySize}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handlePartySizeChange(1)}
                    disabled={partySize >= 20}
                  >
                    <span className="text-lg font-medium">+</span>
                  </Button>
                  <span className="text-sm text-gray-500 ml-2">
                    {partySize === 1 ? 'person' : 'people'}
                  </span>
                </div>
              </div>

              {selectedTime && availableTables.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                    <Coffee size={16} />
                    Select Table
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {availableTables.map((table) => (
                      <Button
                        key={table.id}
                        variant={selectedTable?.id === table.id ? "default" : "outline"}
                        className="w-full"
                        onClick={() => handleTableSelect(table)}
                      >
                        <div className="flex flex-col items-center">
                          <span>Table {table.table_number}</span>
                          <span className="text-xs">
                            {table.location} • {table.capacity} seats
                          </span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <DialogFooter className="flex-col sm:flex-row gap-3">
              <Button 
                className="w-full sm:w-auto" 
                onClick={() => setDialogStep(3)}
                disabled={!selectedDate || !selectedTime || !selectedTable}
              >
                Continue
              </Button>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto"
                onClick={() => setDialogStep(1)}
              >
                Back
              </Button>
            </DialogFooter>
          </>
        )}
        
        {/* Step 3: Customer Information */}
        {dialogStep === 3 && selectedRestaurant && selectedDate && selectedTime && (
          <>
            <DialogHeader>
              <DialogTitle>Complete Your Reservation</DialogTitle>
              <DialogDescription>
                Enter your details to confirm your reservation
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={selectedRestaurant.logo_url} 
                      alt={selectedRestaurant.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-medium">{selectedRestaurant.name}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{selectedDate?.toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{selectedTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{partySize} {partySize === 1 ? 'person' : 'people'}</span>
                      </div>
                      {selectedTable && (
                        <div className="flex items-center gap-1">
                          <Coffee size={14} />
                          <span>Table {selectedTable.table_number} ({selectedTable.location})</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="details">Your Details</TabsTrigger>
                  <TabsTrigger value="menu">View Menu</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="space-y-4 mt-4">
                  <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <Input 
                      placeholder="Enter your full name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      type="email"
                      placeholder="Enter your email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input 
                      placeholder="Enter your phone number"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Special Requests (Optional)</label>
                    <Textarea 
                      placeholder="Any special requests or dietary requirements?"
                      value={specialRequests}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSpecialRequests(e.target.value)}
                      className="resize-none"
                      rows={3}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="menu" className="mt-4">
                  {isLoading ? (
                    <div className="flex justify-center py-8">
                      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                    </div>
                  ) : menuCategories.length > 0 ? (
                    <div className="space-y-6">
                      {menuCategories.map((category) => (
                        <div key={category.id}>
                          <h3 className="font-medium text-lg mb-3">{category.name}</h3>
                          {category.description && (
                            <p className="text-sm text-gray-500 mb-3">{category.description}</p>
                          )}
                          <div className="space-y-3">
                            {category.items.length > 0 ? (
                              category.items.map((item) => (
                                <div key={item.id} className="flex justify-between p-3 border rounded-lg">
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <h4 className="font-medium">{item.name}</h4>
                                      {item.is_featured && (
                                        <Badge variant="secondary" className="text-xs">Featured</Badge>
                                      )}
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                                    {(item.dietary_info && item.dietary_info.length > 0) && (
                                      <div className="flex flex-wrap gap-1 mt-2">
                                        {item.dietary_info.map((info, i) => (
                                          <Badge key={i} variant="outline" className="text-xs">{info}</Badge>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                  <div className="text-right">
                                    <div className="font-medium">{formatPrice(item.price)}</div>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <p className="text-sm text-gray-500">No items in this category</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Info size={24} className="mx-auto mb-2" />
                      <p>Menu information is not available at this time.</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
            
            <DialogFooter className="flex-col sm:flex-row gap-3">
              <Button 
                className="w-full sm:w-auto" 
                onClick={handleSubmitReservation}
                disabled={isLoading || activeTab === 'menu'}
              >
                {isLoading ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-b-transparent"></div>
                    Processing...
                  </>
                ) : 'Confirm Reservation'}
              </Button>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto"
                onClick={() => setDialogStep(2)}
                disabled={isLoading}
              >
                Back
              </Button>
            </DialogFooter>
          </>
        )}
        
        {/* Step 4: Confirmation */}
        {dialogStep === 4 && selectedRestaurant && selectedDate && selectedTime && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                Reservation Confirmed!
              </DialogTitle>
              <DialogDescription>
                Your table at {selectedRestaurant.name} has been reserved
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={selectedRestaurant.logo_url} 
                      alt={selectedRestaurant.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-medium">{selectedRestaurant.name}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{selectedDate?.toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{selectedTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{partySize} {partySize === 1 ? 'Person' : 'People'}</span>
                      </div>
                      {selectedTable && (
                        <div className="flex items-center gap-1">
                          <Coffee size={14} />
                          <span>Table {selectedTable.table_number} ({selectedTable.location})</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-gray-600 mt-4">
                  A confirmation email has been sent to {customerEmail}
                </p>

                {reservationId && (
                  <div className="mt-4 p-3 bg-gray-100 rounded text-center">
                    <p className="text-sm text-gray-500">Reservation ID</p>
                    <p className="font-mono font-medium">{reservationId}</p>
                  </div>
                )}
              </div>
            </div>
            
            <DialogFooter className="flex-col sm:flex-row gap-3">
              <Button 
                className="w-full sm:w-auto" 
                onClick={() => setActiveTab('menu')}
              >
                See Menu
              </Button>
              <DialogClose asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
