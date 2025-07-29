import Hero from '@/app/home/hero'
import MissionImpact from '@/components/landing/mission-impact'
import ProblemCalculator from '@/components/landing/problem-calculator'
import ObjectionHandler from '@/components/landing/objection-handler'
import VideoDemo from '@/components/landing/video-demo'
import ImplementationTimeline from '@/components/landing/implementation-timeline'
import SecurityCompliance from '@/components/landing/security-compliance'
import IndustryRecognition from '@/components/landing/industry-recognition'
import ComparisonTable from '@/components/landing/comparison-table'
import UrgencyBanner from '@/components/landing/urgency-banner'
import ScrollToTop from '@/components/ui/scroll-to-top'

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      {/* Hero Section */}
      <Hero />
      
      {/* Mission & Impact Vision Bar */}
      <MissionImpact />
      
      {/* Problem Calculator */}
      <ProblemCalculator />
      
      {/* Objection Handler */}
      <ObjectionHandler />
      
      {/* Video Demo Section */}
      <VideoDemo />
      
      {/* Implementation Timeline */}
      <ImplementationTimeline />
      
      {/* Security & Compliance */}
      <SecurityCompliance />
      
      {/* Industry Recognition */}
      <IndustryRecognition />
      
      {/* Comparison Table */}
      <ComparisonTable />
      
      {/* Urgency Banner */}
      <UrgencyBanner />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  )
}