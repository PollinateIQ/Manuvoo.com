import About from '@/app/home/about'
import Header from '@/components/shared/header'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="relative py-20 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-orange/10 via-transparent to-primary-blue-start/10"></div>
          <div className="relative z-10 max-w-container mx-auto px-container-mobile lg:px-container-desktop text-center">
            <h1 className="text-hero-mobile lg:text-hero-desktop text-foreground-primary mb-6">
              About Manuvoo
            </h1>
            <p className="text-body-mobile lg:text-body-desktop text-foreground-secondary max-w-2xl mx-auto">
              Revolutionizing the dining experience through innovative technology and seamless connections
            </p>
          </div>
        </section>

        {/* About Content */}
        <About />
        
        {/* Mission & Vision */}
        <section className="py-section-mobile lg:py-section-desktop bg-gradient-background">
          <div className="max-w-container mx-auto px-container-mobile lg:px-container-desktop">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-section-mobile lg:text-section-desktop text-foreground-primary mb-8">
                  Our Mission
                </h2>
                <p className="text-body-mobile lg:text-body-desktop text-foreground-secondary mb-6">
                  At Manuvoo, we believe that great dining experiences should be accessible to everyone. Our mission is to bridge the gap between restaurants and diners through innovative technology that makes discovering, booking, and enjoying meals effortless.
                </p>
                <p className="text-body-mobile lg:text-body-desktop text-foreground-secondary">
                  We're committed to empowering restaurants with tools that help them thrive while providing diners with personalized experiences that match their unique tastes and preferences.
                </p>
              </div>
              <div className="bg-card-glass backdrop-blur-glass border border-border-glass rounded-xl p-8 shadow-glass">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-2">
                        Innovation First
                      </h3>
                      <p className="text-foreground-secondary">
                        Leveraging cutting-edge technology to solve real-world dining challenges
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-2">
                        Community Focused
                      </h3>
                      <p className="text-foreground-secondary">
                        Building stronger connections between restaurants and their communities
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-2">
                        Quality Driven
                      </h3>
                      <p className="text-foreground-secondary">
                        Ensuring every interaction exceeds expectations for both restaurants and diners
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-section-mobile lg:py-section-desktop bg-gradient-background-darker">
          <div className="max-w-container mx-auto px-container-mobile lg:px-container-desktop">
            <div className="text-center mb-16">
              <h2 className="text-section-mobile lg:text-section-desktop text-foreground-primary mb-6">
                Our Story
              </h2>
              <p className="text-body-mobile lg:text-body-desktop text-foreground-secondary max-w-3xl mx-auto">
                Founded by a team of passionate technologists and hospitality experts, Manuvoo was born from the simple idea that dining out should be a delightful experience from start to finish. We've combined our expertise in technology, design, and hospitality to create a platform that truly understands both sides of the dining equation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2020</span>
                </div>
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                  Founded
                </h3>
                <p className="text-foreground-secondary">
                  Started with a vision to transform how people discover and book restaurants
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">500+</span>
                </div>
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                  Restaurants
                </h3>
                <p className="text-foreground-secondary">
                  Partner restaurants across multiple cities trust our platform
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">50K+</span>
                </div>
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-4">
                  Happy Diners
                </h3>
                <p className="text-foreground-secondary">
                  Users who have discovered their new favorite restaurants through us
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
