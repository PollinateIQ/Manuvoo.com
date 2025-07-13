"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { X, Clock, Users, Calendar as CalendarIcon, Phone, Mail, MessageSquare, Check } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  restaurant: {
    id: string
    name: string
    cuisine: string
    location: string
    image: string
    rating: number
    priceRange: string
  }
}

interface BookingData {
  date: Date | undefined
  time: string
  partySize: number
  firstName: string
  lastName: string
  email: string
  phone: string
  specialRequests: string
}

export default function BookingModal({ isOpen, onClose, restaurant }: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
  
  const [bookingData, setBookingData] = useState<BookingData>({
    date: undefined,
    time: '',
    partySize: 2,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  })

  // Available time slots
  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', 
    '20:00', '20:30', '21:00', '21:30', '22:00'
  ]

  const partySizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const handleInputChange = (field: keyof BookingData, value: any) => {
    setBookingData(prev => ({ ...prev, [field]: value }))
  }

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // Simulate booking submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsConfirmed(true)
    setIsSubmitting(false)
    
    // Auto close after 5 seconds
    setTimeout(() => {
      onClose()
      setIsConfirmed(false)
      setCurrentStep(1)
      setBookingData({
        date: undefined,
        time: '',
        partySize: 2,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialRequests: ''
      })
    }, 5000)
  }

  const isStep1Valid = bookingData.date && bookingData.time && bookingData.partySize
  const isStep2Valid = bookingData.firstName && bookingData.lastName && bookingData.email && bookingData.phone

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Modal Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-2xl w-full max-w-4xl max-h-[95vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/90 backdrop-blur-xl border-b border-white/20 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-xl font-bold text-white">{restaurant.name}</h2>
              <p className="text-gray-300 text-sm">{restaurant.cuisine} • {restaurant.location}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 border-b border-white/20 bg-gray-900/50">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step <= currentStep 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'bg-gray-700 text-gray-400'
                }`}>
                  {step}
                </div>
                <div className={`ml-3 text-sm font-medium ${
                  step <= currentStep ? 'text-white' : 'text-gray-500'
                }`}>
                  {step === 1 && 'Date & Time'}
                  {step === 2 && 'Your Details'}
                  {step === 3 && 'Confirmation'}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-0.5 ml-6 ${
                    step < currentStep ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 bg-gray-900/30 max-h-[calc(95vh-200px)] overflow-y-auto">
          {/* Booking Confirmed */}
          {isConfirmed ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Booking Confirmed!</h3>
              <div className="glass rounded-xl p-6 max-w-md mx-auto text-left">
                <h4 className="font-semibold text-white mb-4">Reservation Details</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Restaurant:</span>
                    <span className="text-white">{restaurant.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Date:</span>
                    <span className="text-white">{bookingData.date?.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Time:</span>
                    <span className="text-white">{bookingData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Party Size:</span>
                    <span className="text-white">{bookingData.partySize} {bookingData.partySize === 1 ? 'guest' : 'guests'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Name:</span>
                    <span className="text-white">{bookingData.firstName} {bookingData.lastName}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mt-6">
                A confirmation has been sent to {bookingData.email}
              </p>
            </div>
          ) : (
            <>
              {/* Step 1: Date & Time Selection */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <h3 className="text-xl font-semibold text-white">Select Date & Time</h3>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Calendar */}
                    <div>
                      <h4 className="text-sm font-medium text-white mb-4">Choose Date</h4>
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <Calendar
                          mode="single"
                          selected={bookingData.date}
                          onSelect={(date) => handleInputChange('date', date)}
                          disabled={(date) => date < new Date()}
                          className="w-full"
                          classNames={{
                            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                            month: "space-y-4",
                            caption: "flex justify-center pt-1 relative items-center text-gray-900",
                            caption_label: "text-sm font-medium text-gray-900",
                            nav: "space-x-1 flex items-center",
                            nav_button: "h-7 w-7 bg-transparent p-0 hover:bg-gray-100 rounded-md",
                            nav_button_previous: "absolute left-1",
                            nav_button_next: "absolute right-1",
                            table: "w-full border-collapse space-y-1",
                            head_row: "flex",
                            head_cell: "text-gray-500 rounded-md w-8 font-normal text-[0.8rem]",
                            row: "flex w-full mt-2",
                            cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-blue-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                            day: "h-8 w-8 p-0 font-normal text-gray-900 hover:bg-gray-100 rounded-md",
                            day_selected: "bg-blue-600 text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white",
                            day_today: "bg-gray-100 text-gray-900",
                            day_outside: "text-gray-400 opacity-50",
                            day_disabled: "text-gray-400 opacity-50 cursor-not-allowed",
                            day_range_middle: "aria-selected:bg-blue-100 aria-selected:text-blue-900",
                            day_hidden: "invisible",
                          }}
                        />
                      </div>
                    </div>

                    {/* Time & Party Size */}
                    <div className="space-y-6">
                      {/* Party Size */}
                      <div>
                        <h4 className="text-sm font-medium text-white mb-4">Party Size</h4>
                        <div className="grid grid-cols-5 gap-2">
                          {partySizes.map((size) => (
                            <button
                              key={size}
                              onClick={() => handleInputChange('partySize', size)}
                              className={`p-3 rounded-lg border transition-all duration-300 ${
                                bookingData.partySize === size
                                  ? 'border-primary-blue-start bg-primary-blue-start/20 text-white'
                                  : 'border-white/20 text-gray-300 hover:border-white/30'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Time Slots */}
                      <div>
                        <h4 className="text-sm font-medium text-white mb-4">Available Times</h4>
                        <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => handleInputChange('time', time)}
                              className={`p-3 rounded-lg border transition-all duration-300 flex items-center justify-center ${
                                bookingData.time === time
                                  ? 'border-primary-blue-start bg-primary-blue-start/20 text-white'
                                  : 'border-white/20 text-gray-300 hover:border-white/30'
                              }`}
                            >
                              <Clock className="w-4 h-4 mr-2" />
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Contact Details */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <h3 className="text-xl font-semibold text-white">Your Details</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Fields */}
                    <div>
                      <label className="text-sm font-medium text-white mb-2 block">First Name</label>
                      <input
                        type="text"
                        value={bookingData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue-start focus:ring-2 focus:ring-primary-blue-start/20"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-white mb-2 block">Last Name</label>
                      <input
                        type="text"
                        value={bookingData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue-start focus:ring-2 focus:ring-primary-blue-start/20"
                        placeholder="Your last name"
                        required
                      />
                    </div>

                    {/* Contact Fields */}
                    <div>
                      <label className="text-sm font-medium text-white mb-2 block">Email</label>
                      <input
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue-start focus:ring-2 focus:ring-primary-blue-start/20"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-white mb-2 block">Phone</label>
                      <input
                        type="tel"
                        value={bookingData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue-start focus:ring-2 focus:ring-primary-blue-start/20"
                        placeholder="+27 or 0XX XXX XXXX"
                        required
                      />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Special Requests (Optional)</label>
                    <textarea
                      value={bookingData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue-start focus:ring-2 focus:ring-primary-blue-start/20 resize-none"
                      placeholder="Any dietary requirements, celebrations, or special accommodations..."
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Review & Confirm */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <h3 className="text-xl font-semibold text-white">Review Your Booking</h3>
                  
                  <div className="glass rounded-xl p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Booking Summary */}
                      <div>
                        <h4 className="font-semibold text-white mb-4">Reservation Details</h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <CalendarIcon className="w-5 h-5 text-primary-blue-start" />
                            <div>
                              <div className="text-white font-medium">{bookingData.date?.toLocaleDateString('en-ZA', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}</div>
                              <div className="text-gray-300 text-sm">Date</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <Clock className="w-5 h-5 text-primary-blue-start" />
                            <div>
                              <div className="text-white font-medium">{bookingData.time}</div>
                              <div className="text-gray-300 text-sm">Time</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <Users className="w-5 h-5 text-primary-blue-start" />
                            <div>
                              <div className="text-white font-medium">{bookingData.partySize} {bookingData.partySize === 1 ? 'guest' : 'guests'}</div>
                              <div className="text-gray-300 text-sm">Party size</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div>
                        <h4 className="font-semibold text-white mb-4">Contact Information</h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-5 h-5 bg-gradient-primary rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">{bookingData.firstName[0]}</span>
                            </div>
                            <div>
                              <div className="text-white font-medium">{bookingData.firstName} {bookingData.lastName}</div>
                              <div className="text-gray-300 text-sm">Name</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-primary-blue-start" />
                            <div>
                              <div className="text-white font-medium">{bookingData.email}</div>
                              <div className="text-gray-300 text-sm">Email</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-primary-blue-start" />
                            <div>
                              <div className="text-white font-medium">{bookingData.phone}</div>
                              <div className="text-gray-300 text-sm">Phone</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Special Requests */}
                    {bookingData.specialRequests && (
                      <div className="mt-6 pt-6 border-t border-white/20">
                        <div className="flex items-start space-x-3">
                          <MessageSquare className="w-5 h-5 text-primary-blue-start mt-0.5" />
                          <div>
                            <div className="text-white font-medium">Special Requests</div>
                            <div className="text-gray-300 text-sm mt-1">{bookingData.specialRequests}</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Restaurant Policies */}
                  <div className="glass rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-3">Restaurant Policies</h4>
                    <div className="text-gray-300 text-sm space-y-2">
                      <p>• Please arrive within 15 minutes of your reservation time</p>
                      <p>• Cancellations must be made at least 2 hours in advance</p>
                      <p>• Large parties (8+) may be subject to a service charge</p>
                      <p>• Contact the restaurant directly for dietary accommodations</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Actions */}
        {!isConfirmed && (
          <div className="sticky bottom-0 bg-gray-900/90 backdrop-blur-xl border-t border-white/20 p-6 flex justify-between items-center">
            <div>
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  onClick={handlePrevStep}
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 py-2"
                >
                  Back
                </Button>
              )}
            </div>
            
            <div>
              {currentStep < 3 ? (
                <Button
                  onClick={handleNextStep}
                  disabled={
                    (currentStep === 1 && !isStep1Valid) ||
                    (currentStep === 2 && !isStep2Valid)
                  }
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-2 font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-2 font-semibold shadow-lg min-w-[140px] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Booking...</span>
                    </div>
                  ) : (
                    'Confirm Booking'
                  )}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}