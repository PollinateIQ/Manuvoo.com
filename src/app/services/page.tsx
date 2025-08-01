'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Smartphone,
  Settings,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  CreditCard,
  Package,
  Mail,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Clock,
  Eye
} from 'lucide-react'
import Header from '@/components/shared/header'
import ScrollToTop from '@/components/ui/scroll-to-top'

export default function ServicesPage() {

  const [email, setEmail] = useState('')

  const ecosystemModules = [
    {
      icon: <Smartphone className="w-4 h-4" />,
      title: 'Customer Experience Module',
      description: 'Transform how customers interact with your restaurant through seamless digital ordering and payment.',
      features: [
        'QR code instant menu access',
        'Visual menu with rich images',
        'Real-time order tracking',
        'Integrated payment processing',
        'Digital receipts & history',
        'Multi-language support'
      ],
      color: '#4ADE80'
    },
    {
      icon: <Settings className="w-4 h-4" />,
      title: 'Operations Management Module',
      description: 'Streamline every aspect of your restaurant operations with intelligent automation and real-time coordination.',
      features: [
        'Kitchen display system',
        'Order queue management',
        'Inventory tracking',
        'Staff performance metrics',
        'Table management',
        'Prep time optimization'
      ],
      color: '#3B82F6'
    },
    {
      icon: <BarChart3 className="w-4 h-4" />,
      title: 'Business Intelligence Module',
      description: 'Make data-driven decisions with comprehensive analytics and insights that drive profitability.',
      features: [
        'Real-time sales dashboard',
        'Inventory analytics',
        'Customer behavior insights',
        'Profit margin analysis',
        'Predictive forecasting',
        'Custom reports'
      ],
      color: '#F59E0B'
    }
  ]

  const detailedServices = [
    {
      badge: 'CUSTOMER FACING',
      title: 'Digital Ordering That Delights',
      description: 'Give your customers the modern dining experience they expect. No app downloads, no friction, just scan and order.',
      visual: '📱',
      features: [
        { icon: <Zap className="w-4 h-4" />, title: 'Instant QR Access', desc: 'Customers scan and browse immediately' },
        { icon: <Eye className="w-4 h-4" />, title: 'Visual Menus', desc: 'Rich images and descriptions that sell' },
        { icon: <Settings className="w-4 h-4" />, title: 'Smart Customization', desc: 'Handle modifications and special requests' },
        { icon: <Clock className="w-4 h-4" />, title: 'Real-time Updates', desc: 'Menu changes reflect instantly' }
      ]
    },
    {
      badge: 'BACKEND EFFICIENCY',
      title: 'Never Run Out, Never Waste',
      description: 'Automated inventory tracking that prevents both stockouts and waste. Know exactly what you have, what you need, and when to order.',
      visual: '📦',
      features: [
        { icon: <BarChart3 className="w-4 h-4" />, title: 'Auto-tracking', desc: 'Every sale updates stock levels' },
        { icon: <Shield className="w-4 h-4" />, title: 'Low Stock Alerts', desc: 'Get notified before running out' },
        { icon: <Package className="w-4 h-4" />, title: 'Supplier Integration', desc: 'Direct ordering from the platform' },
        { icon: <TrendingUp className="w-4 h-4" />, title: 'Waste Analytics', desc: 'Identify and reduce waste patterns' }
      ]
    },
    {
      badge: 'SECURE TRANSACTIONS',
      title: 'Get Paid Every Time',
      description: 'Eliminate walkouts and payment disputes with integrated digital payments. Multiple options, instant processing, zero friction.',
      visual: '💳',
      features: [
        { icon: <CreditCard className="w-4 h-4" />, title: 'Multiple Methods', desc: 'Card, mobile money, cash options' },
        { icon: <Users className="w-4 h-4" />, title: 'Split Bills', desc: 'Easy group payment handling' },
        { icon: <Zap className="w-4 h-4" />, title: 'Instant Settlement', desc: 'Funds in your account faster' },
        { icon: <Shield className="w-4 h-4" />, title: 'Zero Disputes', desc: 'Digital records of every transaction' }
      ]
    },
    {
      badge: 'BUSINESS INTELLIGENCE',
      title: 'Insights That Drive Growth',
      description: 'Transform raw data into actionable insights. Understand your business like never before with real-time analytics.',
      visual: '📊',
      features: [
        { icon: <BarChart3 className="w-4 h-4" />, title: 'Live Metrics', desc: 'Real-time sales and performance' },
        { icon: <TrendingUp className="w-4 h-4" />, title: 'Trend Analysis', desc: 'Spot patterns and opportunities' },
        { icon: <Star className="w-4 h-4" />, title: 'Profit Optimization', desc: 'Identify high-margin opportunities' },
        { icon: <BarChart3 className="w-4 h-4" />, title: 'Custom Reports', desc: 'Get the data you need, when you need it' }
      ]
    }
  ]



  const pricingPlans = [
    {
      id: 'starter',
      tier: 'Starter',
      amount: '1.5%',
      period: 'per transaction',
      features: [
        'Full platform access',
        'Unlimited orders',
        'Basic analytics',
        'Email support',
        'Free updates',
        'No setup fees'
      ],
      cta: 'Start Free Trial',
      featured: false
    },
    {
      id: 'professional',
      tier: 'Professional',
      amount: 'R3,999',
      period: 'per month',
      features: [
        'Everything in Starter',
        'Advanced analytics',
        'Priority support',
        'Multi-location support',
        'Custom branding',
        'API access',
        'Training included'
      ],
      cta: 'Get Started',
      featured: true
    },
    {
      id: 'enterprise',
      tier: 'Enterprise',
      amount: 'Custom',
      period: 'tailored pricing',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'White-label options',
        'SLA guarantee',
        'On-site training',
        'Custom development'
      ],
      cta: 'Contact Sales',
      featured: false
    }
  ]

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
          {/* Star Field Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="stars absolute inset-0 opacity-30"></div>
            <div className="stars2 absolute inset-0 opacity-20"></div>
            <div className="stars3 absolute inset-0 opacity-10"></div>
          </div>
          
          {/* Background Gradient Overlays */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-radial from-blue-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 sm:px-6 py-2 bg-white/5 border border-white/15 rounded-full text-xs sm:text-sm uppercase tracking-[1px] sm:tracking-[2px] text-white/80 mb-6 sm:mb-8"
            >
              COMPREHENSIVE SOLUTIONS
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block sm:inline">
                Everything Your Restaurant Needs,
              </span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent block sm:inline">
                Nothing It Doesn&apos;t
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto px-2"
            >
              From the moment a customer sits down to long after they leave, 
              Manuvoo handles every aspect of your restaurant operations in one seamless platform.
            </motion.p>
          </div>
        </section>

        {/* Core Services Overview */}
        <section className="py-12 sm:py-16 lg:py-25 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">The Manuvoo Ecosystem</h2>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto px-4">
                Three powerful modules working in perfect harmony
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
              {ecosystemModules.map((module, index) => {
                const colorClasses = {
                  '#4ADE80': 'hover:border-green-500/30 [--module-color:theme(colors.green.500)]',
                  '#3B82F6': 'hover:border-blue-500/30 [--module-color:theme(colors.blue.500)]',
                  '#F59E0B': 'hover:border-amber-500/30 [--module-color:theme(colors.amber.500)]'
                }
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`group relative bg-white/[0.02] border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:bg-white/[0.03] ${colorClasses[module.color as keyof typeof colorClasses]} ${index === 2 && 'sm:col-span-2 lg:col-span-1'}`}
                  >
                    {/* Top border animation */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--module-color)] to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
                    
                    {/* Icon */}
                    <div className="relative w-16 h-16 sm:w-18 sm:h-18 mx-auto mb-4 sm:mb-6 flex items-center justify-center bg-white/5 rounded-xl sm:rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--module-color)]/20 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="text-3xl sm:text-4xl">
                        {index === 0 ? '📱' : index === 1 ? '⚙️' : '📊'}
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 text-center">{module.title}</h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4 sm:mb-6 text-center">{module.description}</p>
                    
                    <ul className="space-y-2 sm:space-y-3">
                      {module.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-white/80 text-sm sm:text-base">
                          <ArrowRight className="w-4 h-4 text-[var(--module-color)] flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section className="py-12 sm:py-16 lg:py-25 bg-gradient-to-br from-[#0e1420] via-[#111827] to-[#121824] relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {detailedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 sm:mb-20 lg:mb-30 last:mb-0"
              >
                <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-green-500/10 border border-green-500/30 rounded-full sm:rounded-2xl text-xs sm:text-sm font-medium text-green-400 mb-4 sm:mb-6">
                      {service.badge}
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">{service.title}</h2>
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6 sm:mb-8">{service.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3 sm:gap-4">
                          <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 text-green-400">
                            {feature.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white font-medium mb-1 text-sm sm:text-base">{feature.title}</h4>
                            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Visual */}
                  <div className={`order-first lg:order-none ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative bg-white/[0.02] border border-white/[0.08] rounded-2xl sm:rounded-3xl overflow-hidden h-64 sm:h-80 lg:h-96">
                      <img 
                        src={
                          index === 0 ? "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800" :
                          index === 1 ? "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800" :
                          index === 2 ? "https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg?auto=compress&cs=tinysrgb&w=800" :
                          "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                        }
                        alt={
                          index === 0 ? "Digital ordering system" :
                          index === 1 ? "Inventory management" :
                          index === 2 ? "Payment processing" :
                          "Business analytics dashboard"
                        }
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="text-6xl mb-2 opacity-80">
                          {index === 0 ? '📱' : index === 1 ? '📦' : index === 2 ? '💳' : '📊'}
                        </div>
                        <p className="text-white/90 font-medium">
                          {index === 0 ? 'Digital Ordering' : index === 1 ? 'Smart Inventory' : index === 2 ? 'Secure Payments' : 'Business Intelligence'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Integration Capabilities */}
        <section className="py-12 sm:py-16 lg:py-25 bg-gradient-to-br from-[#0e1420] via-[#111827] to-[#121824] relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Seamlessly Connected</h2>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto px-4">
                Manuvoo integrates with the tools you already use to create a unified restaurant management ecosystem
              </p>
            </motion.div>

            {/* Mobile/Tablet: Grid Layout, Desktop: Circular Layout */}
            <div className="lg:hidden mb-12 sm:mb-16">
              {/* Mobile Grid Layout */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
                {[
                  {
                    icon: CreditCard,
                    title: "Payment Gateways",
                    description: "Secure payment processing with South African providers",
                    items: ["Paystack", "Yoco", "SnapScan", "Zapper"],
                    color: "green"
                  },
                  {
                    icon: Package,
                    title: "Delivery Platforms", 
                    description: "Seamless integration with major delivery services",
                    items: ["Uber Eats", "Mr D Food", "Checkers Sixty60"],
                    color: "blue"
                  },
                  {
                    icon: BarChart3,
                    title: "Accounting",
                    description: "Sync financial data with popular accounting software", 
                    items: ["QuickBooks", "Sage", "Xero", "Excel Export"],
                    color: "purple"
                  },
                  {
                    icon: Mail,
                    title: "Marketing",
                    description: "Automated marketing campaigns and customer engagement",
                    items: ["SMS Campaigns", "Email Marketing", "Push Notifications"],
                    color: "amber"
                  },
                  {
                    icon: Smartphone,
                    title: "POS Systems",
                    description: "Compatible with leading point-of-sale systems",
                    items: ["Square", "Clover", "Toast", "Lightspeed"],
                    color: "cyan"
                  },
                  {
                    icon: Users,
                    title: "Staff Management",
                    description: "Integrate with HR and scheduling platforms",
                    items: ["Deputy", "When I Work", "BambooHR"],
                    color: "pink"
                  }
                ].map((integration, index) => {
                  const colorMapping = {
                    green: { bg: "bg-green-500/20", text: "text-green-400", border: "border-green-500/30" },
                    blue: { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
                    purple: { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/30" },
                    amber: { bg: "bg-amber-500/20", text: "text-amber-400", border: "border-amber-500/30" },
                    cyan: { bg: "bg-cyan-500/20", text: "text-cyan-400", border: "border-cyan-500/30" },
                    pink: { bg: "bg-pink-500/20", text: "text-pink-400", border: "border-pink-500/30" }
                  };
                  
                  const colorClasses = colorMapping[integration.color as keyof typeof colorMapping];
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`${index >= 4 ? 'col-span-1 sm:col-span-1' : ''}`}
                    >
                      <div className={`bg-white/[0.02] border-2 ${colorClasses.border} rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:bg-white/[0.04] transition-all duration-300 group`}>
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3`}>
                          <integration.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colorClasses.text}`} />
                        </div>
                        <h4 className="text-white font-semibold text-xs sm:text-sm mb-1 leading-tight">{integration.title}</h4>
                        <p className="text-white/60 text-xs leading-relaxed hidden sm:block">{integration.description}</p>
                        
                        {/* Mobile expanded info on tap/hover */}
                        <div className="sm:hidden">
                          <details className="mt-2">
                            <summary className="text-white/60 text-xs cursor-pointer">Details</summary>
                            <div className="mt-2 text-left">
                              <p className="text-white/60 text-xs mb-2">{integration.description}</p>
                              <div className="text-xs">
                                {integration.items.map((item, itemIndex) => (
                                  <div key={itemIndex} className="text-white/70">• {item}</div>
                                ))}
                              </div>
                            </div>
                          </details>
                        </div>
                        
                        {/* Tablet hover details */}
                        <div className="hidden sm:block lg:hidden mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-xs text-white/80 space-y-1">
                            {integration.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-center gap-1">
                                <div className={`w-1 h-1 rounded-full ${colorClasses.bg.replace('/20', '/60')}`} />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Central Hub for Mobile */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-500/30 via-blue-500/30 to-purple-500/30 border-2 border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm"
                >
                  <div className="text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1 bg-white/20 rounded-full flex items-center justify-center">
                      <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white">Manuvoo</h3>
                    <p className="text-white/70 text-xs">Central Hub</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Desktop: Circular Integration Hub */}
            <div className="hidden lg:block relative h-[600px] flex items-center justify-center mb-20">
              {/* Central Manuvoo Hub */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-20 w-40 h-40 bg-gradient-to-br from-green-500/30 via-blue-500/30 to-purple-500/30 border-2 border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">Manuvoo</h3>
                  <p className="text-white/70 text-xs">Central Hub</p>
                </div>
                
                {/* Animated pulse rings */}
                <div className="absolute inset-0 rounded-full border-2 border-green-500/40 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-[-8px] rounded-full border border-blue-500/20 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
              </motion.div>

              {/* Orbital Circle Layers */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 border-2 border-dashed border-white/30 rounded-full animate-spin-slow" />
                <div className="absolute w-96 h-96 border-2 border-dashed border-white/20 rounded-full animate-spin-reverse" />
                <div className="absolute w-[28rem] h-[28rem] border border-dashed border-white/10 rounded-full" />
              </div>

              {/* Integration Cards in Circle */}
              {[
                {
                  icon: CreditCard,
                  title: "Payment Gateways",
                  description: "Secure payment processing with South African providers",
                  items: ["Paystack", "Yoco", "SnapScan", "Zapper"],
                  color: "green",
                  position: { top: "10%", left: "50%", transform: "translate(-50%, -50%)" }
                },
                {
                  icon: Package,
                  title: "Delivery Platforms",
                  description: "Seamless integration with major delivery services",
                  items: ["Uber Eats", "Mr D Food", "Checkers Sixty60"],
                  color: "blue",
                  position: { top: "30%", right: "10%", transform: "translate(50%, -50%)" }
                },
                {
                  icon: BarChart3,
                  title: "Accounting",
                  description: "Sync financial data with popular accounting software",
                  items: ["QuickBooks", "Sage", "Xero", "Excel Export"],
                  color: "purple",
                  position: { bottom: "10%", left: "50%", transform: "translate(-50%, 50%)" }
                },
                {
                  icon: Mail,
                  title: "Marketing",
                  description: "Automated marketing campaigns and customer engagement",
                  items: ["SMS Campaigns", "Email Marketing", "Push Notifications"],
                  color: "amber",
                  position: { top: "30%", left: "10%", transform: "translate(-50%, -50%)" }
                },
                {
                  icon: Smartphone,
                  title: "POS Systems",
                  description: "Compatible with leading point-of-sale systems",
                  items: ["Square", "Clover", "Toast", "Lightspeed"],
                  color: "cyan",
                  position: { top: "70%", right: "10%", transform: "translate(50%, -50%)" }
                },
                {
                  icon: Users,
                  title: "Staff Management",
                  description: "Integrate with HR and scheduling platforms",
                  items: ["Deputy", "When I Work", "BambooHR"],
                  color: "pink",
                  position: { top: "70%", left: "10%", transform: "translate(-50%, -50%)" }
                }
              ].map((integration, index) => {
                const colorMapping = {
                  green: { bg: "bg-green-500/20", text: "text-green-400", border: "border-green-500/30", glow: "shadow-green-500/20" },
                  blue: { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30", glow: "shadow-blue-500/20" },
                  purple: { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/30", glow: "shadow-purple-500/20" },
                  amber: { bg: "bg-amber-500/20", text: "text-amber-400", border: "border-amber-500/30", glow: "shadow-amber-500/20" },
                  cyan: { bg: "bg-cyan-500/20", text: "text-cyan-400", border: "border-cyan-500/30", glow: "shadow-cyan-500/20" },
                  pink: { bg: "bg-pink-500/20", text: "text-pink-400", border: "border-pink-500/30", glow: "shadow-pink-500/20" }
                };
                
                const colorClasses = colorMapping[integration.color as keyof typeof colorMapping] || {
                  bg: "bg-gray-500/20", text: "text-gray-400", border: "border-gray-500/30", glow: "shadow-gray-500/20"
                };

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="absolute group z-30"
                    style={integration.position}
                  >
                    {/* Integration Card - Circular */}
                    <div className={`relative bg-white/[0.02] border-2 ${colorClasses.border} rounded-full p-4 w-32 h-32 flex flex-col items-center justify-center text-center hover:bg-white/[0.04] hover:shadow-lg ${colorClasses.glow} transition-all duration-300 hover:scale-110 cursor-pointer group-hover:-translate-y-2`}>
                      {/* Icon */}
                      <div className={`w-12 h-12 ${colorClasses.bg} rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        <integration.icon className={`w-6 h-6 ${colorClasses.text}`} />
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-white font-semibold text-xs mb-1 leading-tight">{integration.title}</h4>
                      
                      {/* Hover Description - Positioned to the Right */}
                      <div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-4 w-56 bg-black/95 backdrop-blur-sm border border-white/30 rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[100] shadow-2xl">
                        <p className="text-white text-sm mb-3 font-medium">{integration.description}</p>
                        <div className="text-sm text-white/80 space-y-2">
                          <div className="font-semibold text-white/90 mb-2">Integrations:</div>
                          {integration.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${colorClasses.bg.replace('/20', '/60')}`} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                        {/* Left Arrow */}
                        <div className="absolute top-1/2 right-full transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[6px] border-transparent border-r-black/95" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional Integration Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white/[0.02] border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">One Platform, Endless Possibilities</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">Real-time Sync</h4>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">All your tools work together instantly</p>
                  </div>
                </div>
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">Secure Connections</h4>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">Bank-level security for all integrations</p>
                  </div>
                </div>
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 text-left sm:col-span-2 lg:col-span-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">Easy Setup</h4>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">Connect in minutes, not hours</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-25 bg-gradient-to-br from-[#121824] via-[#111827] to-[#0e1420] relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Simple, Transparent Pricing</h2>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto px-4">
                Choose the plan that fits your restaurant&apos;s needs. No hidden fees, no surprises.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-white/[0.02] border rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 transition-all duration-300 ${
                    plan.featured 
                      ? 'border-green-500 bg-white/[0.03] sm:transform sm:scale-105' 
                      : 'border-white/[0.08] hover:-translate-y-1 hover:border-white/20'
                  } ${index === 2 && 'sm:col-span-2 lg:col-span-1'}`}
                >
                  {plan.featured && (
                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 px-3 sm:px-4 py-1 bg-green-500 text-black text-xs font-semibold rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">{plan.tier}</h3>
                    <div className="mb-2">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{plan.amount}</span>
                    </div>
                    <p className="text-white/60 text-sm sm:text-base">{plan.period}</p>
                  </div>
                  
                  <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-white/80 text-sm sm:text-base">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                      plan.featured
                        ? 'bg-white text-black hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0'
                        : 'bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-black active:bg-white/90'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-12 sm:py-16 lg:py-25 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Proven Results</h2>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto px-4">
                Real restaurants, real success
              </p>
            </motion.div>

            {/* Success Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
              {[
                { number: '35%', label: 'Average cost reduction' },
                { number: '2 days', label: 'Setup time' },
                { number: '99.5%', label: 'Order accuracy' },
                { number: '40%', label: 'Profit increase' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-500 mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm sm:text-base leading-relaxed">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/[0.02] border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center max-w-4xl mx-auto"
            >
              <blockquote className="text-lg sm:text-xl lg:text-2xl font-light italic text-white/90 leading-relaxed mb-6 sm:mb-8">
                &quot;Manuvoo didn&apos;t just replace our old systems—it transformed how we think 
                about restaurant operations. We&apos;re serving more customers with less stress 
                and making more profit than ever before.&quot;
              </blockquote>
              
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-full flex items-center justify-center text-xl sm:text-2xl">
                  👨‍🍳
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm sm:text-base">Michael Dlamini</div>
                  <div className="text-white/60 text-xs sm:text-sm">Owner, The Local Kitchen</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 sm:py-16 lg:py-25 bg-gradient-to-br from-[#0e1420] via-[#111827] to-[#121824] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Ready to Transform Your Restaurant?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed mb-8 sm:mb-12 px-4">
                See why restaurants are switching to Manuvoo
              </p>
              
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto mb-6 sm:mb-8">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                  required
                />
                <button
                  type="submit"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-lg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 active:translate-y-0 text-sm sm:text-base whitespace-nowrap"
                >
                  Get Free Demo
                </button>
              </form>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>30-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Setup in 48 hours</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Scroll to Top */}
        <ScrollToTop />
        
        {/* Star Field CSS Animations */}
        <style jsx>{`
          @media (prefers-reduced-motion: no-preference) {
            .stars {
              background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="10" cy="10" r="0.5" fill="white"/><circle cx="30" cy="25" r="0.3" fill="white"/><circle cx="60" cy="15" r="0.4" fill="white"/><circle cx="80" cy="35" r="0.2" fill="white"/><circle cx="20" cy="50" r="0.3" fill="white"/><circle cx="70" cy="60" r="0.5" fill="white"/><circle cx="40" cy="80" r="0.2" fill="white"/><circle cx="90" cy="75" r="0.4" fill="white"/></svg>') repeat;
              animation: move-stars 50s linear infinite;
            }
            
            .stars2 {
              background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="15" cy="20" r="0.3" fill="white"/><circle cx="45" cy="10" r="0.4" fill="white"/><circle cx="75" cy="30" r="0.2" fill="white"/><circle cx="25" cy="60" r="0.5" fill="white"/><circle cx="85" cy="50" r="0.3" fill="white"/></svg>') repeat;
              animation: move-stars 100s linear infinite;
            }
            
            .stars3 {
              background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="35" cy="40" r="0.2" fill="white"/><circle cx="65" cy="70" r="0.4" fill="white"/><circle cx="95" cy="20" r="0.3" fill="white"/></svg>') repeat;
              animation: move-stars 150s linear infinite;
            }
            
            @keyframes move-stars {
              from { transform: translateX(0); }
              to { transform: translateX(-100px); }
            }
          }
        `}</style>
      </main>
    </>
  )
}
