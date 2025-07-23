import Hero from '@/app/home/hero'
import MissionImpact from '@/components/landing/mission-impact'

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