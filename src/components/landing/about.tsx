import React from 'react'
import { Heart, Target, Users, Shield } from 'lucide-react'

interface Value {
  icon: React.ReactNode
  title: string
  description: string
}

const values: Value[] = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Customer Success First",
    description: "We succeed only when our restaurants and diners succeed"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Fairness",
    description: "Transparent pricing with no hidden fees or surprise charges"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Innovation",
    description: "Constantly improving based on real user feedback"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Reliability",
    description: "Your business depends on us - we take that responsibility seriously"
  }
]

export default function About() {
  return (
    <section id="about" className="py-section-mobile lg:py-section-desktop relative overflow-hidden">
      {/* Enhanced Vibrant Multi-layered Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient layers with higher opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-gradient-dark-start/40 via-transparent to-gradient-dark-mid/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gradient-dark-start/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-secondary-purple-start/20 via-transparent to-accent-orange/15"></div>
        
        {/* Strategic radial gradients for dramatic depth */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-radial from-primary-blue-start/30 via-primary-blue-start/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-radial from-secondary-purple-start/30 via-secondary-purple-start/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-radial from-accent-orange/25 via-accent-orange/10 to-transparent rounded-full blur-2xl"></div>
        
        {/* Floating gradient orbs with increased opacity to 25-35% */}
        <div className="absolute top-1/4 left-20 w-48 h-48 bg-gradient-radial from-primary-blue-start/30 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-16 w-56 h-56 bg-gradient-radial from-secondary-purple-start/25 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-32 h-32 bg-gradient-radial from-accent-orange/35 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-radial from-primary-blue-start/25 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-radial from-secondary-purple-start/30 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-gradient-radial from-accent-orange/35 to-transparent rounded-full blur-lg animate-pulse" style={{animationDelay: '5s'}}></div>
        
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
            Our Story
          </h2>
          <p className="text-body-mobile lg:text-body-desktop text-foreground-secondary">
            Born from the frustration of South African restaurant owners struggling with outdated, expensive systems
          </p>
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Story Text */}
          <div className="space-y-6">
            <div className="glass rounded-xl p-8">
              <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-6">
                Why Manuvoo Exists
              </h3>
              <p className="text-foreground-secondary leading-relaxed mb-6">
                Manuvoo was created to solve the biggest operational challenges in South Africa's hospitality industry. 
                We witnessed restaurants losing money to theft, struggling with manual processes, and paying for multiple 
                expensive systems that don't talk to each other.
              </p>
              <p className="text-foreground-secondary leading-relaxed mb-6">
                Meanwhile, diners struggled to discover great restaurants and often faced long waits for tables. 
                We knew there had to be a better way.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                Founded by restaurant industry veterans who understood the daily challenges firsthand, we built Manuvoo 
                to solve real problems with practical solutions. Every feature exists because a restaurant owner asked for it. 
                Every improvement comes from listening to both diners and restaurant staff.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="glass rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-white mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                Our Mission
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                To empower every restaurant with world-class technology while creating unforgettable dining experiences for every customer.
              </p>
            </div>

            <div className="glass rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-full text-white mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                What Makes Us Different
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                Only true vertical integration with customer discovery built-in. Fair pricing with no monthly subscriptions. 
                Built for South African restaurants by people who understand the market.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
              Our Values
            </h3>
            <p className="text-foreground-secondary">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="glass glass-hover rounded-xl p-6 text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-blue-start to-secondary-purple-start rounded-full text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-foreground-primary font-semibold mb-3">
                  {value.title}
                </h4>
                <p className="text-foreground-secondary text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats & Achievement */}
        <div className="glass rounded-2xl p-8 lg:p-12 text-center">
          <div className="mb-8">
            <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
              Today's Impact
            </h3>
            <p className="text-foreground-secondary max-w-3xl mx-auto">
              We're proud to support over 500 restaurants across South Africa, helping them thrive in an increasingly 
              digital world while connecting food lovers with their next favorite meal.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-foreground-primary">
                500+
              </div>
              <div className="text-sm text-foreground-secondary">
                Partner Restaurants
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-foreground-primary">
                50K+
              </div>
              <div className="text-sm text-foreground-secondary">
                Happy Customers
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-foreground-primary">
                35%
              </div>
              <div className="text-sm text-foreground-secondary">
                Avg Revenue Increase
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-foreground-primary">
                15+
              </div>
              <div className="text-sm text-foreground-secondary">
                Major Cities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}