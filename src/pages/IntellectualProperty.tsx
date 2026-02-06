import { motion } from 'framer-motion';
import { Scale, Shield, FileText, AlertCircle, Copyright, Award } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { useTheme } from '@/hooks/useTheme';

const intellectualPropertySections = [
  {
    icon: Copyright,
    title: 'Copyright',
    description: 'All content, design, and functionality of the Manuvoo platform is the exclusive property of PollinateIQ.',
    details: [
      'Website design and layout',
      'Software code and algorithms',
      'Text, graphics, logos, and images',
      'Audio and video content',
    ],
  },
  {
    icon: Award,
    title: 'Trademarks',
    description: 'The Manuvoo name, logo, and related marks are trademarks owned by PollinateIQ.',
    details: [
      'Manuvoo brand name and logo',
      'Product names and service marks',
      'Visual identity and branding elements',
      'Taglines and slogans',
    ],
  },
  {
    icon: Shield,
    title: 'Trade Secrets',
    description: 'Our proprietary technology, algorithms, and business processes are protected as trade secrets.',
    details: [
      'Reservation matching algorithms',
      'Recommendation engine technology',
      'Database architecture and schemas',
      'Business methodologies and processes',
    ],
  },
  {
    icon: FileText,
    title: 'Patents & Innovation',
    description: 'Innovative features and methodologies developed for the Manuvoo platform may be subject to patent protection.',
    details: [
      'Novel dining reservation systems',
      'AI-powered recommendation features',
      'Unique user experience innovations',
      'Proprietary data processing methods',
    ],
  },
];

const usageGuidelines = [
  {
    title: 'Permitted Use',
    icon: '✓',
    color: 'green',
    items: [
      'Using the platform as intended for making and managing reservations',
      'Sharing publicly available content with proper attribution',
      'Creating links to our website',
    ],
  },
  {
    title: 'Prohibited Use',
    icon: '✗',
    color: 'red',
    items: [
      'Copying, reproducing, or distributing our content without permission',
      'Reverse engineering or decompiling our software',
      'Using our trademarks without authorization',
      'Creating derivative works based on our platform',
    ],
  },
];

export function IntellectualProperty() {
  const { theme } = useTheme();

  return (
    <div className="pt-20">
      <SEO 
        config={{
          title: 'Intellectual Property - PollinateIQ | Manuvoo',
          description: 'Information about Manuvoo intellectual property rights and usage guidelines. A product of PollinateIQ.',
          keywords: ['intellectual property', 'copyright', 'trademark', 'PollinateIQ', 'Manuvoo', 'IP rights', 'ownership'],
        }}
      />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-500/10 mb-6">
              <Scale className="w-10 h-10 text-orange-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Intellectual Property
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Manuvoo is a product of PollinateIQ. All intellectual property rights are 
              owned and protected by PollinateIQ.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: <span className="font-medium">February 6, 2026</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Ownership Statement Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ownership Statement
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Manuvoo is a proprietary product developed and owned by <strong className="text-foreground">PollinateIQ</strong>. 
                All intellectual property rights, including but not limited to copyrights, trademarks, 
                patents, trade secrets, and other proprietary rights in and to the Manuvoo platform, 
                are the exclusive property of PollinateIQ.
              </p>
              <p>
                PollinateIQ retains all rights, title, and interest in the Manuvoo platform, including 
                all associated technologies, algorithms, software code, designs, content, and documentation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* IP Types Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Protected Intellectual Property
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              PollinateIQ protects various types of intellectual property within the Manuvoo platform.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {intellectualPropertySections.map((section) => (
              <StaggerItem key={section.title}>
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
                      <section.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{section.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  <div className="pl-16">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Includes:</p>
                    <ul className="space-y-1">
                      {section.details.map((detail) => (
                        <li key={detail} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-orange-500" />
                          {detail}
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

      {/* Usage Guidelines Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Usage Guidelines
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please review these guidelines for proper use of our intellectual property.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {usageGuidelines.map((guideline) => (
              <AnimatedSection key={guideline.title}>
                <div className={`bg-card border rounded-xl p-6 h-full ${
                  theme === 'dark' ? 'border-white/10' : 'border-gray-200'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      guideline.color === 'green'
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-red-500/10 text-red-500'
                    }`}>
                      <span className="text-xl font-bold">{guideline.icon}</span>
                    </div>
                    <h3 className="font-semibold text-foreground">{guideline.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {guideline.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                          guideline.color === 'green' ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PollinateIQ Information Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className={`p-8 rounded-2xl border ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20' 
                : 'bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/30'
            }`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    About PollinateIQ
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    PollinateIQ is a technology company specializing in innovative digital solutions. 
                    Manuvoo represents our commitment to revolutionizing the dining and hospitality 
                    industry through cutting-edge technology and exceptional user experiences.
                  </p>
                  <a
                    href="https://pollinateiq.co.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                      theme === 'dark'
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'bg-black text-white hover:bg-gray-900'
                    }`}
                  >
                    Visit PollinateIQ
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Infringement Notice Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Reporting IP Infringement
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                If you believe that your intellectual property rights have been infringed by content 
                on the Manuvoo platform, or if you believe that content on our platform infringes 
                your rights, please contact us immediately.
              </p>
              <div className={`p-6 rounded-xl border ${
                theme === 'dark' 
                  ? 'bg-orange-500/5 border-orange-500/20' 
                  : 'bg-orange-500/5 border-orange-500/30'
              }`}>
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Submit an Infringement Notice
                    </h4>
                    <p className="text-sm mb-3">
                      Please include the following information in your notice:
                    </p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• Description of the copyrighted work or intellectual property</li>
                      <li>• Location of the infringing material on our platform</li>
                      <li>• Your contact information</li>
                      <li>• A statement of good faith belief</li>
                      <li>• Your electronic or physical signature</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Questions About Our IP?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              For questions about intellectual property rights, licensing, or permissions, 
              please contact PollinateIQ.
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
                Contact PollinateIQ
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
