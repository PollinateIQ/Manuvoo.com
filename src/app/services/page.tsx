import PlatformFeatures from '@/app/home/platform-features'
import RestaurantValue from '@/app/home/restaurant-value'
import CustomerJourney from '@/app/home/customer-journey'
import Header from '@/components/shared/header'

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="relative py-20 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-purple-start/10 via-transparent to-primary-blue-start/10"></div>
          <div className="relative z-10 max-w-container mx-auto px-container-mobile lg:px-container-desktop text-center">
            <h1 className="text-hero-mobile lg:text-hero-desktop text-foreground-primary mb-6">
              Our Services
            </h1>
            <p className="text-body-mobile lg:text-body-desktop text-foreground-secondary max-w-2xl mx-auto">
              Comprehensive solutions for restaurants and diners to create exceptional dining experiences
            </p>
          </div>
        </section>

        {/* Platform Features */}
        <PlatformFeatures />

        {/* How It Works */}
        <section id="how-it-works" className="py-section-mobile lg:py-section-desktop bg-gradient-background">
          {/* How It Works Content */}
          <CustomerJourney />
          
          {/* Additional Process Details */}
          <div className="max-w-container mx-auto px-container-mobile lg:px-container-desktop">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card-glass backdrop-blur-glass border border-border-glass rounded-lg p-8 shadow-glass">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                  Smart Discovery
                </h3>
                <p className="text-foreground-secondary">
                  Our AI-powered search helps you find the perfect restaurant based on your preferences, location, and dining history.
                </p>
              </div>

              <div className="bg-card-glass backdrop-blur-glass border border-border-glass rounded-lg p-8 shadow-glass">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                  Instant Booking
                </h3>
                <p className="text-foreground-secondary">
                  Book tables instantly with real-time availability. No more waiting for confirmation calls or emails.
                </p>
              </div>

              <div className="bg-card-glass backdrop-blur-glass border border-border-glass rounded-lg p-8 shadow-glass">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                  Seamless Experience
                </h3>
                <p className="text-foreground-secondary">
                  From discovery to dining, enjoy a smooth experience with personalized recommendations and easy management.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Restaurant Value */}
        <RestaurantValue />
        
        {/* Service Categories */}
        <section className="py-section-mobile lg:py-section-desktop bg-gradient-background-darker">
          <div className="max-w-container mx-auto px-container-mobile lg:px-container-desktop">
            <div className="text-center mb-16">
              <h2 className="text-section-mobile lg:text-section-desktop text-foreground-primary mb-6">
                Complete Restaurant Solutions
              </h2>
              <p className="text-body-mobile lg:text-body-desktop text-foreground-secondary max-w-2xl mx-auto">
                Everything you need to manage and grow your restaurant business
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* For Restaurants */}
              <div className="bg-card-glass backdrop-blur-glass border border-border-glass rounded-xl p-8 shadow-glass">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary">
                    For Restaurants
                  </h3>
                </div>
                <ul className="space-y-4 text-foreground-secondary">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue-start mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Real-time reservation management system
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue-start mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Advanced analytics and insights dashboard
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue-start mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Customer relationship management tools
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-blue-start mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Marketing and promotion features
                  </li>
                </ul>
              </div>

              {/* For Diners */}
              <div className="bg-card-glass backdrop-blur-glass border border-border-glass rounded-xl p-8 shadow-glass">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary">
                    For Diners
                  </h3>
                </div>
                <ul className="space-y-4 text-foreground-secondary">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-purple-start mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Personalized restaurant recommendations
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-purple-start mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Instant booking with real-time availability
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-purple-start mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Dining history and preferences tracking
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-purple-start mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Exclusive deals and loyalty rewards
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
