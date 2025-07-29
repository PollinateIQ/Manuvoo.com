'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Headphones, 
  Handshake,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Rocket,
  ExternalLink,
  Linkedin,
  Twitter,
  Facebook,
  Youtube
} from 'lucide-react'
import Header from '@/components/shared/header'
import ScrollToTop from '@/components/ui/scroll-to-top'
import GoogleMap from '@/components/ui/google-map'

export default function ContactPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false)
  const [interestDropdownOpen, setInterestDropdownOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({})
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    restaurantName: '',
    locations: '',
    interest: '',
    message: '',
    consent: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const validateForm = () => {
    const errors: {[key: string]: string} = {}
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    }
    
    if (!formData.consent) {
      errors.consent = 'Please agree to receive communications'
    }
    
    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Clear previous errors
    setFormErrors({})
    
    // Validate form
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Simulate API call - replace with your actual endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        // Reset form on success
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          restaurantName: '',
          locations: '',
          interest: '',
          message: '',
          consent: false
        })
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const handleDropdownSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (field === 'locations') {
      setLocationsDropdownOpen(false)
    } else if (field === 'interest') {
      setInterestDropdownOpen(false)
    }
  }

  const contactCards = [
    {
      icon: <Briefcase className="w-9 h-9" />,
      method: "Talk to Sales",
      details: "Ready to see Manuvoo in action? Our sales team will show you exactly how Manuvoo can transform your restaurant.",
      email: "sales@manuvoo.com",
      phone: "+27 69 684 8796",
      link: "Schedule a Demo →",
      href: "/schedule",
      availability: "Mon-Fri: 8am-6pm SAST",
      color: "green"
    },
    {
      icon: <Headphones className="w-9 h-9" />,
      method: "Get Support",
      details: "Need help with your Manuvoo platform? Our support team is here to ensure your success every step of the way.",
      email: "support@manuvoo.com",
      phone: "+27 69 684 8796",
      link: "Access Help Center →",
      href: "https://help.manuvoo.com",
      availability: "24/7 Support Available",
      color: "blue"
    },
    {
      icon: <Handshake className="w-9 h-9" />,
      method: "Partner With Us",
      details: "Interested in reselling, integrating, or partnering with Manuvoo? Let's explore opportunities together.",
      email: "partners@manuvoo.com",
      phone: "+27 69 684 8796",
      link: "Explore Partnerships →",
      href: "https://partners.manuvoo.com",
      availability: "Response within 48 hours",
      color: "amber"
    }
  ]

  const faqs = [
    {
      question: "How long does it take to set up Manuvoo?",
      answer: "Most restaurants are up and running within 48 hours. Our team handles the entire setup process, including menu upload, staff training, and system configuration. You'll have a dedicated onboarding specialist to ensure everything runs smoothly from day one."
    },
    {
      question: "Do I need to buy special hardware?",
      answer: "No special hardware required! Manuvoo works on any device with internet access. Your existing smartphones, tablets, or computers are all you need. We'll provide QR code stickers for tables—that's it!"
    },
    {
      question: "What happens if my internet goes down?",
      answer: "Manuvoo includes offline capabilities that keep your restaurant running during internet outages. Orders are stored locally and automatically sync when connection is restored. You never lose a sale."
    },
    {
      question: "Can I integrate with my existing systems?",
      answer: "Yes! Manuvoo integrates with popular payment gateways, accounting software, and delivery platforms. We also offer API access for custom integrations. Our team will help set up any integrations you need."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 technical support via phone, email, and chat. Every restaurant also gets a dedicated success manager for the first 90 days. Plus, we offer comprehensive training materials and regular check-ins to ensure your success."
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
          {/* Star Field Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="stars absolute inset-0 opacity-30"></div>
            <div className="stars2 absolute inset-0 opacity-20"></div>
            <div className="stars3 absolute inset-0 opacity-10"></div>
          </div>
          
          {/* Background Gradient Overlays */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>

          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-6 py-2 bg-white/5 border border-white/15 rounded-full text-xs uppercase tracking-[2px] text-white/80 mb-8"
            >
              GET IN TOUCH
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let's Start Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Success Story
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
            >
              Whether you're ready to transform your restaurant or just exploring options, 
              we're here to help. Reach out and let's discuss how Manuvoo can work for you.
            </motion.p>
          </div>
        </section>

        {/* Contact Options Section */}
        <section className="py-20 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              {contactCards.map((card, index) => {
                const colorClasses = {
                  green: 'hover:border-green-500/30 [--card-color:theme(colors.green.500)]',
                  blue: 'hover:border-blue-500/30 [--card-color:theme(colors.blue.500)]',
                  amber: 'hover:border-amber-500/30 [--card-color:theme(colors.amber.500)]'
                }
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`group relative bg-white/[0.02] border border-white/[0.08] rounded-3xl p-12 text-center overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03] ${colorClasses[card.color as keyof typeof colorClasses]}`}
                  >
                    {/* Top border animation */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--card-color)] to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
                    
                    {/* Icon */}
                    <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-white/5 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--card-color)]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {card.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4">{card.method}</h3>
                    <p className="text-white/70 leading-relaxed mb-6">{card.details}</p>
                    
                    <div className="space-y-2 mb-6">
                      <a 
                        href={`mailto:${card.email}`}
                        className="text-white font-medium hover:text-[var(--card-color)] transition-colors duration-300"
                      >
                        {card.email}
                      </a>
                      {card.phone && (
                        <a 
                          href={`tel:${card.phone}`}
                          className="block text-white/80 hover:text-white transition-colors duration-300"
                        >
                          {card.phone}
                        </a>
                      )}
                    </div>
                    
                    <a 
                      href={card.href} 
                      {...(card.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="inline-flex items-center gap-2 text-white font-medium hover:text-[var(--card-color)] transition-all duration-300 hover:translate-x-1"
                    >
                      {card.link}
                    </a>
                    
                    <p className="text-sm text-white/50 mt-4">{card.availability}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Main Contact Form Section */}
        <section className="py-25 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-12">
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Send Us a Message</h2>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 bg-white/[0.03] border rounded-lg text-white placeholder-white/40 focus:outline-none focus:bg-white/[0.05] transition-all duration-300 ${
                          formErrors.firstName ? 'border-red-500 focus:border-red-400' : 'border-white/20 focus:border-white/50'
                        }`}
                        required
                      />
                      {formErrors.firstName && (
                        <p className="text-red-400 text-sm mt-1">{formErrors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 bg-white/[0.03] border rounded-lg text-white placeholder-white/40 focus:outline-none focus:bg-white/[0.05] transition-all duration-300 ${
                          formErrors.lastName ? 'border-red-500 focus:border-red-400' : 'border-white/20 focus:border-white/50'
                        }`}
                        required
                      />
                      {formErrors.lastName && (
                        <p className="text-red-400 text-sm mt-1">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 bg-white/[0.03] border rounded-lg text-white placeholder-white/40 focus:outline-none focus:bg-white/[0.05] transition-all duration-300 ${
                          formErrors.email ? 'border-red-500 focus:border-red-400' : 'border-white/20 focus:border-white/50'
                        }`}
                        required
                      />
                      {formErrors.email && (
                        <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/[0.03] border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/[0.05] transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Restaurant Details */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Restaurant Name
                      </label>
                      <input
                        type="text"
                        name="restaurantName"
                        value={formData.restaurantName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/[0.03] border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/[0.05] transition-all duration-300"
                      />
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Number of Locations
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setLocationsDropdownOpen(!locationsDropdownOpen)}
                          className="w-full px-4 py-4 bg-white/[0.03] border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/50 focus:bg-white/[0.05] transition-all duration-300 text-left flex items-center justify-between"
                        >
                          <span className={formData.locations ? 'text-white' : 'text-white/40'}>
                            {formData.locations ? 
                              (formData.locations === 'single' ? 'Single location' :
                               formData.locations === '2-5' ? '2-5 locations' :
                               formData.locations === '6-10' ? '6-10 locations' :
                               formData.locations === '10+' ? '10+ locations' : 'Select...') 
                              : 'Select...'}
                          </span>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${locationsDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {locationsDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-white/20 rounded-lg shadow-xl z-50 overflow-hidden">
                            {[
                              { value: 'single', label: 'Single location' },
                              { value: '2-5', label: '2-5 locations' },
                              { value: '6-10', label: '6-10 locations' },
                              { value: '10+', label: '10+ locations' }
                            ].map((option) => (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => handleDropdownSelect('locations', option.value)}
                                className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors duration-200 border-b border-white/10 last:border-b-0"
                              >
                                {option.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Interest */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      I'm interested in:
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setInterestDropdownOpen(!interestDropdownOpen)}
                        className="w-full px-4 py-4 bg-white/[0.03] border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/50 focus:bg-white/[0.05] transition-all duration-300 text-left flex items-center justify-between"
                      >
                        <span className={formData.interest ? 'text-white' : 'text-white/40'}>
                          {formData.interest ? 
                            (formData.interest === 'demo' ? 'Product Demo' :
                             formData.interest === 'pricing' ? 'Pricing Information' :
                             formData.interest === 'partnership' ? 'Partnership Opportunities' :
                             formData.interest === 'support' ? 'Technical Support' :
                             formData.interest === 'general' ? 'General Inquiry' : 'Select...') 
                            : 'Select...'}
                        </span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${interestDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {interestDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-white/20 rounded-lg shadow-xl z-50 overflow-hidden">
                          {[
                            { value: 'demo', label: 'Product Demo' },
                            { value: 'pricing', label: 'Pricing Information' },
                            { value: 'partnership', label: 'Partnership Opportunities' },
                            { value: 'support', label: 'Technical Support' },
                            { value: 'general', label: 'General Inquiry' }
                          ].map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handleDropdownSelect('interest', option.value)}
                              className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors duration-200 border-b border-white/10 last:border-b-0"
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Message*
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell us about your restaurant and how we can help..."
                      className={`w-full px-4 py-4 bg-white/[0.03] border rounded-lg text-white placeholder-white/40 focus:outline-none focus:bg-white/[0.05] transition-all duration-300 resize-vertical ${
                        formErrors.message ? 'border-red-500 focus:border-red-400' : 'border-white/20 focus:border-white/50'
                      }`}
                      required
                    />
                    {formErrors.message && (
                      <p className="text-red-400 text-sm mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Consent Checkbox */}
                  <div className="mt-6">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className={`w-5 h-5 mt-0.5 accent-green-500 ${
                          formErrors.consent ? 'ring-2 ring-red-500' : ''
                        }`}
                      />
                      <label className="text-sm text-white/70 leading-relaxed">
                        I agree to receive communications from Manuvoo about products and services.
                      </label>
                    </div>
                    {formErrors.consent && (
                      <p className="text-red-400 text-sm mt-1 ml-8">{formErrors.consent}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-12 py-4 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                        isSubmitting 
                          ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 hover:from-blue-500 hover:to-blue-400 active:translate-y-0'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                    
                    {/* Success/Error Messages */}
                    {submitStatus === 'success' && (
                      <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <div>
                          <p className="text-green-400 font-medium">Message sent successfully!</p>
                          <p className="text-green-300/80 text-sm">We'll get back to you within 24 hours.</p>
                        </div>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">!</span>
                        </div>
                        <div>
                          <p className="text-red-400 font-medium">Failed to send message</p>
                          <p className="text-red-300/80 text-sm">Please try again or contact us directly.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </motion.div>

              {/* Information Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24"
              >
                {/* Why Choose Manuvoo */}
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-12 mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Manuvoo?</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: <CheckCircle className="w-6 h-6 text-green-500" />, title: "Free Demo", desc: "See the platform in action" },
                      { icon: <CheckCircle className="w-6 h-6 text-green-500" />, title: "Quick Setup", desc: "Go live in just 48 hours" },
                      { icon: <CheckCircle className="w-6 h-6 text-green-500" />, title: "Local Support", desc: "South African team that understands you" },
                      { icon: <CheckCircle className="w-6 h-6 text-green-500" />, title: "No Obligation", desc: "30-day free trial, cancel anytime" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-4 py-4 border-b border-white/5 last:border-b-0">
                        {item.icon}
                        <div>
                          <div className="font-medium text-white">{item.title}</div>
                          <div className="text-white/80 text-sm">{item.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Office Location */}
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-12 text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">Visit Our Office</h3>
                  <div className="text-white/70 leading-relaxed mb-6">
                    <p>PollinateIQ PTY LTD</p>
                    <p>67th on 7th, Edenvale</p>
                    <p>Gauteng, South Africa</p>
                  </div>
                  
                  {/* Interactive Google Map */}
                  <div className="w-full h-48 mb-6 relative overflow-hidden">
                    <GoogleMap 
                      lat={-26.1336}
                      lng={28.1708}
                      title="PollinateIQ PTY LTD - Manuvoo Office"
                      className="border border-white/[0.08]"
                      zoom={16}
                    />
                  </div>
                  
                  <a href="#" className="text-green-500 font-medium hover:underline transition-colors duration-300">
                    Schedule an in-person meeting
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-25 bg-gradient-to-br from-[#0e1420] via-[#111827] to-[#121824] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 1px, transparent 1px),
                               radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }} />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
                Got questions? We've got answers. Here are the most common questions we receive from restaurant owners.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/[0.02] border border-white/[0.08] rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/[0.02] transition-colors duration-300"
                  >
                    <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-white/60" />
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeAccordion === index ? 'auto' : 0,
                      opacity: activeAccordion === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-white/80 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 1px, transparent 1px),
                               radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }} />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 rounded-full text-sm font-medium text-white mb-6">
                <Rocket className="w-4 h-4" />
                Ready to Transform Your Restaurant?
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Get Started Today
              </h2>
              
              <p className="text-xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
                Join hundreds of restaurants already using Manuvoo to increase revenue, 
                improve efficiency, and delight customers. Your success story starts here.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 active:translate-y-0">
                  Schedule Free Demo
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Call Sales: +27 69 684 8796
                </button>
              </div>
              
              {/* Emergency Contact */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Need Immediate Assistance?</h3>
                <div className="grid md:grid-cols-2 gap-6 text-white/90">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <div>
                      <div className="font-medium">24/7 Emergency Support</div>
                      <div className="text-white/80">+27 69 684 8796</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Priority Email</div>
                      <div className="text-white/80">info@pollinateiq.co.za</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="py-12 bg-gradient-to-br from-[#0e1420] via-[#111827] to-[#121824] border-t border-white/[0.08]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-white font-medium">ISO 27001 Certified</div>
                    <div className="text-white/60 text-sm">Enterprise Security</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-white font-medium">GDPR Compliant</div>
                    <div className="text-white/60 text-sm">Data Protection</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-white font-medium">99.9% Uptime</div>
                    <div className="text-white/60 text-sm">Guaranteed Reliability</div>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="flex items-center gap-4">
                <span className="text-white/60 text-sm mr-2">Follow us:</span>
                <a href="#" className="w-10 h-10 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll to Top */}
        <ScrollToTop />
      </main>
    </>
  )
}
