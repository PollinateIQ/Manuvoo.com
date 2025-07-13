import FinalCTA from '@/app/home/final-cta'
import Header from '@/components/shared/header'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="relative py-20 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-start/10 via-transparent to-accent-orange/10"></div>
          <div className="relative z-10 max-w-container mx-auto px-container-mobile lg:px-container-desktop text-center">
            <h1 className="text-hero-mobile lg:text-hero-desktop text-foreground-primary mb-6">
              Contact Us
            </h1>
            <p className="text-body-mobile lg:text-body-desktop text-foreground-secondary max-w-2xl mx-auto">
              Get in touch with our team. We're here to help you make the most of your dining experience.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-section-mobile lg:py-section-desktop bg-gradient-background">
          <div className="max-w-container mx-auto px-container-mobile lg:px-container-desktop">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-section-mobile lg:text-section-desktop text-foreground-primary mb-8">
                  Let's Connect
                </h2>
                <p className="text-body-mobile lg:text-body-desktop text-foreground-secondary mb-8">
                  Whether you're a restaurant owner looking to join our platform or a diner with questions, we'd love to hear from you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-2">
                        Email Us
                      </h3>
                      <p className="text-foreground-secondary">hello@manuvoo.com</p>
                      <p className="text-foreground-secondary">support@manuvoo.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-2">
                        Call Us
                      </h3>
                      <p className="text-foreground-secondary">+1 (555) 123-4567</p>
                      <p className="text-foreground-secondary text-sm">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-2">
                        Visit Us
                      </h3>
                      <p className="text-foreground-secondary">123 Innovation Drive</p>
                      <p className="text-foreground-secondary">Tech City, TC 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card-glass backdrop-blur-glass border border-border-glass rounded-xl p-8 shadow-glass">
                <h3 className="text-subheading-mobile lg:text-subheading-desktop text-foreground-primary mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground-primary mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 bg-input-background border border-input-border rounded-lg text-foreground-primary placeholder-foreground-tertiary focus:outline-none focus:ring-2 focus:ring-primary-blue-start focus:border-transparent transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground-primary mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 bg-input-background border border-input-border rounded-lg text-foreground-primary placeholder-foreground-tertiary focus:outline-none focus:ring-2 focus:ring-primary-blue-start focus:border-transparent transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground-primary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-input-background border border-input-border rounded-lg text-foreground-primary placeholder-foreground-tertiary focus:outline-none focus:ring-2 focus:ring-primary-blue-start focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground-primary mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-input-background border border-input-border rounded-lg text-foreground-primary focus:outline-none focus:ring-2 focus:ring-primary-blue-start focus:border-transparent transition-colors"
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="restaurant">Restaurant Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground-primary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-input-background border border-input-border rounded-lg text-foreground-primary placeholder-foreground-tertiary focus:outline-none focus:ring-2 focus:ring-primary-blue-start focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-primary hover:bg-gradient-primary-hover text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-button hover:shadow-button-hover"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <FinalCTA />
      </main>
    </>
  )
}
