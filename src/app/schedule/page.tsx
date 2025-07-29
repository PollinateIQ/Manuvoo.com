'use client'

import { useEffect } from 'react'
import Header from '@/components/shared/header'
import ScrollToTop from '@/components/ui/scroll-to-top'

export default function SchedulePage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 1px, transparent 1px),
                               radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
                📅 SCHEDULE YOUR DEMO
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Book Your Free
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  Manuvoo Demo
                </span>
              </h1>
              
              <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                See how Manuvoo can transform your restaurant operations. Our team will show you exactly how our platform can increase your revenue and streamline your processes.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: '⚡', title: 'Quick Setup', desc: 'Get started in just 30 minutes' },
                { icon: '💰', title: 'ROI Calculator', desc: 'See your potential savings' },
                { icon: '🎯', title: 'Personalized Demo', desc: 'Tailored to your restaurant' }
              ].map((benefit, index) => (
                <div key={index} className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-white/60 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendly Widget Section */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Choose Your Preferred Time</h2>
                <p className="text-white/70">
                  Select a time that works best for you. Our team will be ready to show you how Manuvoo can transform your restaurant.
                </p>
              </div>

              {/* Calendly Inline Widget */}
              <div 
                className="calendly-inline-widget rounded-2xl overflow-hidden" 
                data-url="https://calendly.com/manuvooa" 
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What to Expect</h2>
              <p className="text-white/70 text-lg">
                Your 30-minute demo will cover everything you need to know about Manuvoo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Platform Walkthrough',
                  items: [
                    'Live demonstration of all features',
                    'Digital ordering system showcase',
                    'Inventory management tools',
                    'Analytics and reporting dashboard'
                  ]
                },
                {
                  title: 'Your Restaurant Focus',
                  items: [
                    'Discuss your specific needs',
                    'ROI calculation for your business',
                    'Integration possibilities',
                    'Implementation timeline'
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ScrollToTop />
      </main>
    </>
  )
}
