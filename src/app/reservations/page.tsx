import RestaurantDiscovery from '@/components/restaurant/restaurant-discovery'
import Header from '@/components/shared/header'

export default function ReservationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="relative py-20 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-purple-start/10 via-transparent to-accent-orange/10"></div>
          <div className="relative z-10 max-w-container mx-auto px-container-mobile lg:px-container-desktop text-center">
            <h1 className="text-hero-mobile lg:text-hero-desktop text-foreground-primary mb-6">
              Make a Reservation
            </h1>
            <p className="text-body-mobile lg:text-body-desktop text-foreground-secondary max-w-2xl mx-auto">
              Discover amazing restaurants and book your table instantly with real-time availability
            </p>
          </div>
        </section>

        {/* Restaurant Discovery & Booking */}
        <RestaurantDiscovery />

        {/* Reservation Features */}
        <section className="py-section-mobile lg:py-section-desktop bg-gradient-background">
          <div className="max-w-container mx-auto px-container-mobile lg:px-container-desktop">
            <div className="text-center mb-16">
              <h2 className="text-section-mobile lg:text-section-desktop text-foreground-primary mb-6">
                Why Book with Manuvoo?
              </h2>
              <p className="text-body-mobile lg:text-body-desktop text-foreground-secondary max-w-2xl mx-auto">
                Experience the future of restaurant reservations with our advanced booking platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card-glass backdrop-blur-glass border border-border-glass rounded-xl p-8 shadow-glass text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                  Instant Confirmation
                </h3>
                <p className="text-foreground-secondary">
                  Get immediate confirmation for your reservation. No waiting, no uncertainty.
                </p>
              </div>

              <div className="bg-card-glass backdrop-blur-glass border border-border-glass rounded-xl p-8 shadow-glass text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                  Real-Time Availability
                </h3>
                <p className="text-foreground-secondary">
                  See live table availability and choose the perfect time for your dining experience.
                </p>
              </div>

              <div className="bg-card-glass backdrop-blur-glass border border-border-glass rounded-xl p-8 shadow-glass text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                  Easy Management
                </h3>
                <p className="text-foreground-secondary">
                  Modify or cancel reservations with just a few clicks. Complete control at your fingertips.
                </p>
              </div>

              <div className="bg-card-glass backdrop-blur-glass border border-border-glass rounded-xl p-8 shadow-glass text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                  Personalized Recommendations
                </h3>
                <p className="text-foreground-secondary">
                  Discover restaurants tailored to your taste preferences and dining history.
                </p>
              </div>

              <div className="bg-card-glass backdrop-blur-glass border border-border-glass rounded-xl p-8 shadow-glass text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                  Exclusive Deals
                </h3>
                <p className="text-foreground-secondary">
                  Access special offers and discounts available only through our platform.
                </p>
              </div>

              <div className="bg-card-glass backdrop-blur-glass border border-border-glass rounded-xl p-8 shadow-glass text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                  24/7 Support
                </h3>
                <p className="text-foreground-secondary">
                  Our customer support team is always ready to help with any reservation needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Book Section */}
        <section className="py-section-mobile lg:py-section-desktop bg-gradient-background-darker">
          <div className="max-w-container mx-auto px-container-mobile lg:px-container-desktop">
            <div className="text-center mb-16">
              <h2 className="text-section-mobile lg:text-section-desktop text-foreground-primary mb-6">
                How to Make a Reservation
              </h2>
              <p className="text-body-mobile lg:text-body-desktop text-foreground-secondary max-w-2xl mx-auto">
                Booking your perfect dining experience is just a few clicks away
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                  Search
                </h3>
                <p className="text-foreground-secondary">
                  Browse restaurants by location, cuisine, or special features
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                  Select
                </h3>
                <p className="text-foreground-secondary">
                  Choose your preferred restaurant, date, time, and party size
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                  Book
                </h3>
                <p className="text-foreground-secondary">
                  Complete your reservation with instant confirmation
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                  Enjoy
                </h3>
                <p className="text-foreground-secondary">
                  Arrive at your restaurant and enjoy your dining experience
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
