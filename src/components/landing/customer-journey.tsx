import React from 'react'
import { Search, Eye, Calendar } from 'lucide-react'

interface JourneyStep {
  icon: React.ReactNode
  title: string
  description: string
  step: number
}

const journeySteps: JourneyStep[] = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Find Amazing Restaurants",
    description: "Search by location, cuisine, or mood. Discover hidden gems and local favorites with real reviews from verified diners.",
    step: 1
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Preview & Choose",
    description: "See real menus, photo galleries, and authentic reviews. Check real-time availability and choose your perfect time slot.",
    step: 2
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Instant Confirmation",
    description: "Secure your table instantly. Get confirmation via SMS and email. Arrive and enjoy - everything's ready for you.",
    step: 3
  }
]

export default function CustomerJourney() {
  return (
    <section className="py-section-mobile lg:py-section-desktop relative overflow-hidden">
      {/* Enhanced Vibrant Multi-layered Background */}
      <div className="absolute inset-0">
        {/* Base gradient layers with higher opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue-start/25 via-transparent to-secondary-purple-start/25"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary-purple-start/20 via-transparent to-accent-orange/15"></div>
        
        {/* Strategic radial gradients for dramatic depth */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary-blue-start/30 via-primary-blue-start/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-secondary-purple-start/30 via-secondary-purple-start/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent-orange/25 via-accent-orange/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating gradient orbs with increased opacity to 25-35% */}
        <div className="absolute top-32 right-20 w-32 h-32 bg-gradient-radial from-primary-blue-start/35 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-radial from-secondary-purple-start/30 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-radial from-accent-orange/35 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
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
      <div className="container mx-auto max-w-container container-padding">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section-mobile lg:text-section-desktop text-foreground-primary mb-6">
            Book Your Perfect Table in 3 Simple Steps
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-foreground-secondary">
            From discovery to dining - we've made it effortless to find and book your next great meal
          </p>
        </div>

        {/* Journey Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {journeySteps.map((step, index) => (
            <div 
              key={step.step}
              className="relative group"
            >
              {/* Connection Line (hidden on mobile) */}
              {index < journeySteps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-blue-start to-transparent opacity-30 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary-blue-start rounded-full opacity-60"></div>
                </div>
              )}

              <div className="glass glass-hover rounded-xl p-8 text-center relative z-10">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full text-white font-bold text-lg mb-6">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-full text-primary-blue-start mb-6">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                  {step.title}
                </h3>
                
                <p className="text-body-mobile text-foreground-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-foreground-secondary text-sm mb-4">
            <div className="w-2 h-2 bg-primary-blue-start rounded-full animate-pulse"></div>
            <span>Ready to start your culinary journey?</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-primary hover:bg-gradient-primary-hover text-white font-semibold py-3 px-8 btn-floating shadow-button hover:shadow-button-hover transition-all duration-300">
              Explore Restaurants
            </button>
            <button className="border-2 border-border bg-transparent hover:bg-accent hover:border-opacity-60 text-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}