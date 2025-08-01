'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calculator, TrendingDown, CheckCircle, Phone, Mail, Building, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog'

export default function ProblemCalculator() {
  const [revenue, setRevenue] = useState('')
  const [staff, setStaff] = useState('')
  const [manualHours, setManualHours] = useState('')
  const [shrinkage, setShrinkage] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurant: '',
    message: ''
  })
  
  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { ...formData, calculatedLosses: losses })
    
    // Show success message
    alert('Thank you! We\'ll contact you within 24 hours to discuss your savings opportunity.')
    setIsDialogOpen(false)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      restaurant: '',
      message: ''
    })
  }

  const calculateLosses = () => {
    const monthlyRevenue = parseFloat(revenue) || 0
    const staffCount = parseFloat(staff) || 0
    const hoursDaily = parseFloat(manualHours) || 0
    const shrinkagePercent = parseFloat(shrinkage) || 0

    const annualRevenue = monthlyRevenue * 12
    const theftLoss = annualRevenue * (shrinkagePercent / 100)
    const laborWaste = staffCount * hoursDaily * 30 * 12 * 150 // R150/hour average
    const revenueLeak = annualRevenue * 0.15 // 15% revenue leakage from inefficiency
    
    return {
      theft: Math.round(theftLoss),
      labor: Math.round(laborWaste),
      revenue: Math.round(revenueLeak),
      total: Math.round(theftLoss + laborWaste + revenueLeak)
    }
  }

  const losses = calculateLosses()

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent leading-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            WHAT'S INEFFICIENCY COSTING YOU?
          </motion.h2>

          {/* Subheader */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-10 md:mb-12 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Calculate your hidden losses
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Calculator Form */}
          <motion.div 
            className="bg-white/[0.03] border border-white/[0.08] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2 sm:mr-3 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Interactive Calculator</h3>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-white/80 mb-2">
                  Average Monthly Revenue (R)
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 500000"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-white/80 mb-2">
                  Number of Staff
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 15"
                  value={staff}
                  onChange={(e) => setStaff(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-white/80 mb-2">
                  Hours Spent on Manual Tasks Daily
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 4"
                  value={manualHours}
                  onChange={(e) => setManualHours(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-white/80 mb-2">
                  Estimated Shrinkage %
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 3"
                  value={shrinkage}
                  onChange={(e) => setShrinkage(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>
            </div>
          </motion.div>

          {/* Results Display */}
          <motion.div 
            className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mr-2 sm:mr-3 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Your Hidden Costs</h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 sm:py-3 border-b border-white/10 gap-1 sm:gap-0">
                <span className="text-white/80 text-sm sm:text-base">Annual loss to theft:</span>
                <span className="text-lg sm:text-xl font-bold text-red-400">R{losses.theft.toLocaleString()}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 sm:py-3 border-b border-white/10 gap-1 sm:gap-0">
                <span className="text-white/80 text-sm sm:text-base">Annual labor waste:</span>
                <span className="text-lg sm:text-xl font-bold text-orange-400">R{losses.labor.toLocaleString()}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 sm:py-3 border-b border-white/10 gap-1 sm:gap-0">
                <span className="text-white/80 text-sm sm:text-base">Annual revenue leakage:</span>
                <span className="text-lg sm:text-xl font-bold text-yellow-400">R{losses.revenue.toLocaleString()}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 sm:py-4 bg-red-500/10 rounded-lg px-3 sm:px-4 mt-4 sm:mt-6 gap-1 sm:gap-0">
                <span className="text-base sm:text-lg font-bold text-white">TOTAL HIDDEN COSTS:</span>
                <span className="text-2xl sm:text-3xl font-bold text-red-400">R{losses.total.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-4 sm:mb-6 leading-relaxed">
                Stop losing <span className="text-red-400 font-bold">R{losses.total.toLocaleString()}</span> per year
              </p>
              
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="relative bg-gradient-to-r from-red-600/80 to-red-500/80 hover:from-red-500/90 hover:to-red-400/90 text-white backdrop-blur-xl px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 w-full text-sm sm:text-base border border-red-400/30 hover:border-red-300/50 shadow-lg hover:shadow-red-500/25 overflow-hidden group"
                  >
                    {/* Glowing effect layers */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-400/30 to-red-500/30 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <span className="relative z-10 font-semibold">Start Saving Now</span>
                  </Button>
                </DialogTrigger>
                
                <DialogContent className="bg-gradient-to-br from-gray-950 via-gray-900 to-black border border-white/10 text-white max-w-[95vw] sm:max-w-md max-h-[90vh] overflow-y-auto">
                  <DialogHeader className="space-y-3 pb-4">
                    <DialogTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-center">
                      Stop Losing R{losses.total.toLocaleString()} Per Year
                    </DialogTitle>
                    <DialogDescription className="text-sm sm:text-base text-gray-300 text-center leading-relaxed">
                      Get a free consultation to see how Manuvoo can save your restaurant money starting this month.
                    </DialogDescription>
                  </DialogHeader>

                  {/* Savings Summary */}
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                    <h4 className="font-semibold text-red-400 mb-2 text-sm sm:text-base">Your Potential Annual Savings:</h4>
                    <div className="space-y-1 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Theft Prevention:</span>
                        <span className="text-red-400 font-bold">R{losses.theft.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Labor Efficiency:</span>
                        <span className="text-orange-400 font-bold">R{losses.labor.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Revenue Recovery:</span>
                        <span className="text-yellow-400 font-bold">R{losses.revenue.toLocaleString()}</span>
                      </div>
                      <div className="border-t border-red-500/20 pt-2 mt-2">
                        <div className="flex justify-between text-base sm:text-lg">
                          <span className="text-white font-bold">Total Savings:</span>
                          <span className="text-red-400 font-bold">R{losses.total.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                          Your Name *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleFormChange('name', e.target.value)}
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-9 sm:h-10 text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                          Restaurant Name *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.restaurant}
                          onChange={(e) => handleFormChange('restaurant', e.target.value)}
                          className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-9 sm:h-10 text-sm"
                          placeholder="Your Restaurant"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleFormChange('email', e.target.value)}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-9 sm:h-10 text-sm"
                        placeholder="john@restaurant.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleFormChange('phone', e.target.value)}
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40 h-9 sm:h-10 text-sm"
                        placeholder="+27 12 345 6789"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                        Additional Information (Optional)
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleFormChange('message', e.target.value)}
                        className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/40 rounded-md px-3 py-2 text-sm resize-none h-16 sm:h-20"
                        placeholder="Tell us about your biggest operational challenges..."
                      />
                    </div>

                    {/* Form Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <DialogClose asChild>
                        <Button 
                          type="button"
                          variant="outline" 
                          className="bg-transparent border-white/20 text-white hover:bg-white/5 h-10 sm:h-11 text-sm"
                        >
                          Maybe Later
                        </Button>
                      </DialogClose>
                      <Button 
                        type="submit"
                        className="bg-gradient-to-r from-red-600/80 to-red-500/80 hover:from-red-500/90 hover:to-red-400/90 text-white border border-red-400/30 hover:border-red-300/50 shadow-lg hover:shadow-red-500/25 h-10 sm:h-11 text-sm font-semibold flex-1"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Get My Free Consultation
                      </Button>
                    </div>
                  </form>

                  {/* Trust Indicators */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>Free consultation</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>No commitment required</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>24-hour response</span>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
