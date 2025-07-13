import Hero from '@/app/home/hero'
import SocialProof from '@/app/home/social-proof'
import About from '@/app/home/about'
import PlatformFeatures from '@/app/home/platform-features'
import RestaurantValue from '@/app/home/restaurant-value'
import CustomerJourney from '@/app/home/customer-journey'
import RestaurantDiscovery from '@/components/restaurant/restaurant-discovery'
import FinalCTA from '@/app/home/final-cta'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Social Proof Section */}
      <SocialProof />
      
      {/* How It Works Section */}
      <section id="how-it-works">
        <CustomerJourney />
      </section>
      
      {/* Services Section (Platform Features) */}
      <section id="services">
        <PlatformFeatures />
      </section>
      
      {/* Restaurant Value Section (Part of Services) */}
      <div className="relative">
        <RestaurantValue />
      </div>
      
      {/* Live Demo Section - Restaurant Discovery & Booking */}
      <section className="relative" data-section="restaurant-discovery">
        <RestaurantDiscovery />
      </section>
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>
      
      {/* Contact Section (Final CTA) */}
      <section id="contact">
        <FinalCTA />
      </section>
    </main>
  )
}