import React from 'react'
import { Users, Settings, TrendingUp } from 'lucide-react'

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
  proofPoint: string
}

const benefits: Benefit[] = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Get Found by More Customers",
    description: "Thousands of diners search our platform daily. Featured listings put your restaurant in front of hungry customers actively looking for their next meal.",
    proofPoint: "Average 40% increase in new customer visits"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Complete Restaurant Management",
    description: "Full POS system, inventory tracking, staff management, and financial analytics. Everything you need to run a modern restaurant efficiently.",
    proofPoint: "Replace 7+ systems with one platform"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Proven Revenue Increase",
    description: "Our partners see average 35% revenue growth through better efficiency, reduced theft, and more customers. Pay only when you succeed.",
    proofPoint: "Only 1% transaction fee - no monthly charges"
  }
]

export default function RestaurantValue() {
  return (
    <section className="py-section-mobile lg:py-section-desktop relative overflow-hidden">
      {/* Enhanced Vibrant Multi-layered Background */}
      <div className="absolute inset-0">
        {/* Base gradient layers with higher opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue-start/25 via-transparent to-secondary-purple-start/25"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary-purple-start/20 via-transparent to-accent-orange/15"></div>
        
        {/* Strategic radial gradients for dramatic depth */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-radial from-secondary-purple-start/30 via-secondary-purple-start/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary-blue-start/30 via-primary-blue-start/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent-orange/25 via-accent-orange/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating gradient orbs with increased opacity to 25-35% */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-radial from-secondary-purple-start/35 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-radial from-primary-blue-start/30 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-radial from-accent-orange/35 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/2 w-40 h-40 bg-gradient-radial from-primary-blue-start/25 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-gradient-radial from-secondary-purple-start/30 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/4 right-1/3 w-28 h-28 bg-gradient-radial from-accent-orange/35 to-transparent rounded-full blur-lg animate-pulse" style={{animationDelay: '5s'}}></div>
        
        {/* Modern mesh gradient overlay for sophisticated depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-blue-start/15 to-secondary-purple-start/18 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-accent-orange/12 via-transparent to-primary-blue-start/12 mix-blend-soft-light"></div>
        
        {/* Grainy texture overlay */}
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px'
        }}></div>
      </div>

      <div className="container mx-auto max-w-container container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-section-mobile lg:text-section-desktop text-foreground-primary mb-6">
            More Than Just Bookings - Complete Restaurant Success
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-foreground-secondary">
            Join hundreds of successful restaurants that have transformed their business with our comprehensive platform
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass glass-hover rounded-xl p-8 text-center group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-full text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-body-mobile text-foreground-secondary leading-relaxed mb-6">
                {benefit.description}
              </p>

              {/* Proof Point */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-secondary/20 rounded-full border border-secondary-purple-start/30">
                <span className="text-sm font-semibold text-secondary-purple-hover-end">
                  {benefit.proofPoint}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Success Story Highlight */}
        <div className="glass rounded-2xl p-8 lg:p-12 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-secondary rounded-full text-white font-semibold text-lg mb-4">
              🎉 Success Story
            </div>
          </div>
          
          <blockquote className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-6 font-medium italic max-w-4xl mx-auto">
            "Since joining Manuvoo, we've seen 45% more new customers. The platform pays for itself and the management tools are incredible. Best investment we've made."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4 text-foreground-secondary">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
              LB
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground-primary">The Local Bistro</div>
              <div className="text-sm">Stellenbosch</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-foreground-secondary text-sm mb-6">
            <div className="w-2 h-2 bg-secondary-purple-start rounded-full animate-pulse"></div>
            <span>Ready to grow your restaurant business?</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-secondary hover:bg-gradient-secondary-hover text-white font-semibold py-4 px-8 btn-floating shadow-button hover:shadow-button-hover transition-all duration-300 text-lg">
              Book a Free Demo
            </button>
            <button className="border-2 border-border bg-transparent hover:bg-accent hover:border-opacity-60 text-foreground font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg">
              Learn More
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-foreground-tertiary text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>500+ Partner Restaurants</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Same-Day Setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No Long-Term Contracts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}