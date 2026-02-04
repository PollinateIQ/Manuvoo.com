import { motion } from 'framer-motion';
import { Cookie, Shield, Eye, Settings, Database, Bell, Check } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { seoConfig } from '@/config/seo';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { useTheme } from '@/hooks/useTheme';

const cookieTypes = [
  {
    icon: Shield,
    title: 'Essential Cookies',
    description: 'Required for basic site functionality like authentication and security.',
    examples: ['Session management', 'Security tokens', 'Load balancing'],
    required: true,
  },
  {
    icon: Settings,
    title: 'Functional Cookies',
    description: 'Enable personalized features and remember your preferences.',
    examples: ['Language preferences', 'Theme selection', 'UI customization'],
    required: false,
  },
  {
    icon: Eye,
    title: 'Analytics Cookies',
    description: 'Help us understand how visitors interact with our website.',
    examples: ['Page views', 'User behavior', 'Performance metrics'],
    required: false,
  },
  {
    icon: Bell,
    title: 'Marketing Cookies',
    description: 'Used to deliver relevant advertisements and track campaign effectiveness.',
    examples: ['Ad targeting', 'Campaign tracking', 'Social media integration'],
    required: false,
  },
];

const cookieDetails = [
  {
    name: 'manuvoo-theme',
    purpose: 'Stores your theme preference (light/dark mode)',
    duration: 'Persistent (no expiry)',
    type: 'Functional',
  },
  {
    name: 'manuvoo-cookies-accepted',
    purpose: 'Records your cookie consent preferences',
    duration: 'Persistent (no expiry)',
    type: 'Essential',
  },
  {
    name: 'session_id',
    purpose: 'Maintains your logged-in session',
    duration: '24 hours',
    type: 'Essential',
  },
];

export function CookiePolicy() {
  const { theme } = useTheme();

  return (
    <div className="pt-20">
      <SEO config={seoConfig.cookiePolicy} />
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-500/10 mb-6">
              <Cookie className="w-10 h-10 text-orange-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Cookie Policy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Learn about how Manuvoo uses cookies to enhance your experience and 
              protect your privacy.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: <span className="font-medium">February 4, 2026</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What Are Cookies Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              What Are Cookies?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Cookies are small text files that are stored on your device when you visit 
                a website. They help websites remember your preferences, understand how you 
                use the site, and provide a personalized experience.
              </p>
              <p>
                At Manuvoo, we use cookies responsibly to enhance your browsing experience, 
                improve our services, and ensure the security of your data. We are committed 
                to transparency about the cookies we use and giving you control over your preferences.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Types of Cookies Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use different types of cookies to provide and improve our services.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {cookieTypes.map((cookie) => (
              <StaggerItem key={cookie.title}>
                <motion.div
                  className={`bg-card border rounded-xl p-6 h-full ${
                    theme === 'dark' ? 'border-white/10' : 'border-gray-200'
                  }`}
                  whileHover={{ 
                    y: -4, 
                    borderColor: theme === 'dark' ? 'rgba(249, 115, 22, 0.3)' : 'rgba(249, 115, 22, 0.5)' 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                      <cookie.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">{cookie.title}</h3>
                        {cookie.required && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500 font-medium">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {cookie.description}
                      </p>
                    </div>
                  </div>
                  <div className="pl-16">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Examples:</p>
                    <ul className="space-y-1">
                      {cookie.examples.map((example) => (
                        <li key={example} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-orange-500" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Cookie Details Table Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Cookies We Set
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Below is a detailed list of the cookies we use on our website.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className={`overflow-hidden rounded-xl border ${
              theme === 'dark' ? 'border-white/10' : 'border-gray-200'
            }`}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`border-b ${
                      theme === 'dark' 
                        ? 'bg-white/5 border-white/10' 
                        : 'bg-black/5 border-gray-200'
                    }`}>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Cookie Name
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Purpose
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Duration
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookieDetails.map((cookie, index) => (
                      <tr
                        key={cookie.name}
                        className={`border-b transition-colors ${
                          theme === 'dark'
                            ? 'border-white/10 hover:bg-white/5'
                            : 'border-gray-200 hover:bg-black/5'
                        } ${index === cookieDetails.length - 1 ? 'border-b-0' : ''}`}
                      >
                        <td className="px-6 py-4">
                          <code className={`text-sm font-mono px-2 py-1 rounded ${
                            theme === 'dark' ? 'bg-white/10' : 'bg-black/10'
                          }`}>
                            {cookie.name}
                          </code>
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {cookie.purpose}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {cookie.duration}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center text-xs px-2 py-1 rounded-full font-medium ${
                            cookie.type === 'Essential'
                              ? 'bg-orange-500/10 text-orange-500'
                              : 'bg-blue-500/10 text-blue-500'
                          }`}>
                            {cookie.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Managing Cookies Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Managing Your Cookie Preferences
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  On Our Website
                </h3>
                <p className="mb-3">
                  You can manage your cookie preferences directly through our cookie consent 
                  banner that appears when you first visit our website. You can choose to 
                  accept or decline non-essential cookies at any time.
                </p>
                <p>
                  To change your preferences later, you can clear your browser cookies and 
                  refresh the page to see the consent banner again.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  In Your Browser
                </h3>
                <p className="mb-3">
                  Most web browsers allow you to control cookies through their settings. 
                  You can typically:
                </p>
                <ul className="space-y-2 ml-6">
                  {[
                    'View and delete cookies stored on your device',
                    'Block all cookies or block cookies from specific websites',
                    'Delete cookies when you close your browser',
                    'Set your browser to notify you when a website tries to set a cookie',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-6 rounded-xl border ${
                theme === 'dark' 
                  ? 'bg-orange-500/5 border-orange-500/20' 
                  : 'bg-orange-500/5 border-orange-500/30'
              }`}>
                <div className="flex gap-3">
                  <Database className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Note About Essential Cookies
                    </h4>
                    <p className="text-sm">
                      Please note that blocking essential cookies may prevent certain features 
                      of our website from working properly, such as maintaining your login session 
                      or remembering your theme preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Third-Party Cookies Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Third-Party Cookies
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                In some cases, we use cookies provided by trusted third parties to help us 
                analyze website traffic, understand user behavior, and improve our services. 
                These third-party cookies are subject to the respective privacy policies of 
                these external services.
              </p>
              <p>
                We work only with reputable service providers who comply with data protection 
                regulations and respect your privacy.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Updates to Policy Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Updates to This Policy
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our 
                practices or for other operational, legal, or regulatory reasons. We encourage 
                you to review this page periodically to stay informed about our use of cookies.
              </p>
              <p>
                Any changes to this policy will be posted on this page with an updated "Last 
                updated" date at the top of this document.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Questions About Cookies?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              If you have any questions about our use of cookies or this Cookie Policy, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:info@pollinateiq.co.za"
                className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all ${
                  theme === 'dark'
                    ? 'bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/20'
                    : 'bg-black text-white hover:bg-gray-900 shadow-lg shadow-black/20'
                }`}
              >
                Contact Us
              </a>
              <a
                href="/contact"
                className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium border transition-all ${
                  theme === 'dark'
                    ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30'
                    : 'bg-black/5 border-gray-300 text-black hover:bg-black/10 hover:border-gray-400'
                }`}
              >
                Visit Contact Page
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
