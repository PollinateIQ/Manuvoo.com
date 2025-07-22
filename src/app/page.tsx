import Hero from '@/app/home/hero'
import MissionImpact from '@/components/landing/mission-impact'
import CustomerJourney from '@/components/landing/customer-journey'
import RestaurantDiscovery from '@/components/restaurant/restaurant-discovery'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Mission & Impact Vision Bar */}
      <MissionImpact />
      
      
      
      
    </main>
  )
}