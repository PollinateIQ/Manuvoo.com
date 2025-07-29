'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calculator, TrendingDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ProblemCalculator() {
  const [revenue, setRevenue] = useState('')
  const [staff, setStaff] = useState('')
  const [manualHours, setManualHours] = useState('')
  const [shrinkage, setShrinkage] = useState('')

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
    <section className="relative py-24 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            WHAT'S INEFFICIENCY COSTING YOU?
          </motion.h2>

          {/* Subheader */}
          <motion.p 
            className="text-xl text-white/70 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Calculate your hidden losses
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <motion.div 
            className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <Calculator className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-white">Interactive Calculator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Average Monthly Revenue (R)
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 500000"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Number of Staff
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 15"
                  value={staff}
                  onChange={(e) => setStaff(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Hours Spent on Manual Tasks Daily
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 4"
                  value={manualHours}
                  onChange={(e) => setManualHours(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Estimated Shrinkage %
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 3"
                  value={shrinkage}
                  onChange={(e) => setShrinkage(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                />
              </div>
            </div>
          </motion.div>

          {/* Results Display */}
          <motion.div 
            className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <TrendingDown className="w-6 h-6 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Your Hidden Costs</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-white/80">Annual loss to theft:</span>
                <span className="text-xl font-bold text-red-400">R{losses.theft.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-white/80">Annual labor waste:</span>
                <span className="text-xl font-bold text-orange-400">R{losses.labor.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-white/80">Annual revenue leakage:</span>
                <span className="text-xl font-bold text-yellow-400">R{losses.revenue.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center py-4 bg-red-500/10 rounded-lg px-4 mt-6">
                <span className="text-lg font-bold text-white">TOTAL HIDDEN COSTS:</span>
                <span className="text-3xl font-bold text-red-400">R{losses.total.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-white/80 mb-6">
                Stop losing <span className="text-red-400 font-bold">R{losses.total.toLocaleString()}</span> per year
              </p>
              
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 w-full"
              >
                Start Saving Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
