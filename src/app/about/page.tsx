'use client'

import { motion } from 'framer-motion'
import { Target, Telescope, Utensils, Zap, Users, Rocket } from 'lucide-react'
import { useState, useEffect } from 'react'
import Header from '@/components/shared/header'

interface CounterProps {
  target: number
  suffix?: string
  prefix?: string
}

function Counter({ target, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 overflow-hidden bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
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
              ABOUT MANUVOO
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block sm:inline">
                Revolutionizing Hospitality,
              </span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent block sm:inline">
                One Restaurant at a Time
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto px-2"
            >
              Born from a deep understanding of restaurant challenges, Manuvoo is more than software—we&apos;re your partner in prosperity.
            </motion.p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  The Manuvoo Story
                </h2>
                
                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-white/80 leading-relaxed">
                  <p>
                    It started with a simple observation: restaurants were bleeding money through preventable inefficiencies. Legacy systems charged fortunes while delivering frustration. Staff struggled with multiple platforms. Owners watched profits disappear to theft and waste.
                  </p>
                  
                  <p className="text-white/90 font-medium">
                    We knew there had to be a better way.
                  </p>
                  
                  <p>
                    Founded by PollinateIQ PTY LTD, Manuvoo emerged from months of deep research into the hospitality industry. We spoke to hundreds of restaurant owners, managers, and staff. We studied every pain point, every inefficiency, every lost rand.
                  </p>
                  
                  <div className="bg-white/3 border-l-4 border-white/30 pl-4 sm:pl-8 py-4 sm:py-6 my-6 sm:my-8 italic text-base sm:text-lg text-white/90 rounded-r-lg">
                    &quot;We realized the industry didn&apos;t need another app—it needed a complete reimagining of restaurant operations.&quot;
                    <div className="text-xs sm:text-sm text-white/60 mt-2 not-italic">
                      - Reginald Nkabinde, Founder
                    </div>
                  </div>
                  
                  <p>
                    Today, Manuvoo stands as the only truly integrated hospitality platform in Africa. We&apos;re not just building technology; we&apos;re championing an industry that feeds communities and creates livelihoods.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative order-1 lg:order-2"
              >
                {/* Story Image */}
                <div className="relative mb-8 sm:mb-12 rounded-xl sm:rounded-2xl overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <img 
                      src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Restaurant technology and innovation" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-lg sm:text-xl font-bold text-white">M</span>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm sm:text-base">The Manuvoo Journey</p>
                          <p className="text-white/80 text-xs sm:text-sm">Transforming restaurants through technology</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline */}
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base flex-shrink-0">
                      2023
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold text-sm sm:text-base">Research & Development Begins</h3>
                      <p className="text-white/60 text-xs sm:text-sm">Deep industry analysis and platform architecture</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base flex-shrink-0">
                      2024
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold text-sm sm:text-base">Platform Architecture Completed</h3>
                      <p className="text-white/60 text-xs sm:text-sm">Core systems built and tested</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base flex-shrink-0">
                      2025
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold text-sm sm:text-base">Official Launch & First Customers</h3>
                      <p className="text-white/60 text-xs sm:text-sm">Market entry and initial partnerships</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm lg:text-base flex-shrink-0">
                      2026
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold text-sm sm:text-base">Target 2,000+ Restaurant Partners</h3>
                      <p className="text-white/60 text-xs sm:text-sm">Scale across South Africa</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-12 sm:py-16 lg:py-25 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Mission & Vision
              </h2>
              <p className="text-white/60 text-base sm:text-lg max-w-3xl mx-auto px-4">
                Driven by passion, guided by experience
              </p>
            </motion.div>

            {/* Mission & Vision Cards */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/2 border border-white/8 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500" />
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-6 bg-blue-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Our Mission</h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  To empower the hospitality industry with next-generation technology that transforms operational efficiency, eliminates revenue leakage, and enhances customer experiences through comprehensive vertical integration.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/2 border border-white/8 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500" />
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-6 bg-purple-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Telescope className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Our Vision</h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  To become Africa&apos;s leading hospitality technology partner, setting new standards for operational excellence while enabling every restaurant—from street corner cafés to fine dining establishments—to thrive in the digital age.
                </p>
              </motion.div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  icon: Utensils,
                  title: 'Restaurant First',
                  subtitle: 'Your Success is Our Success',
                  description: 'Every feature, every update, every decision starts with one question: Will this help restaurants succeed?',
                  color: 'text-green-400',
                  bgColor: 'bg-green-500/20'
                },
                {
                  icon: Zap,
                  title: 'Radical Simplicity',
                  subtitle: 'Powerful Yet Simple',
                  description: 'Complex problems don\'t require complicated solutions. We believe in elegant simplicity that just works.',
                  color: 'text-yellow-400',
                  bgColor: 'bg-yellow-500/20'
                },
                {
                  icon: Users,
                  title: 'Ubuntu',
                  subtitle: 'Growing Together',
                  description: 'We succeed when our community succeeds. Together, we\'re stronger than any individual restaurant or company.',
                  color: 'text-blue-400',
                  bgColor: 'bg-blue-500/20'
                },
                {
                  icon: Rocket,
                  title: 'Continuous Innovation',
                  subtitle: 'Never Settling',
                  description: 'The hospitality industry evolves daily. So do we. Constant improvement is our commitment to you.',
                  color: 'text-purple-400',
                  bgColor: 'bg-purple-500/20'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="text-center p-4 sm:p-6 lg:p-8 bg-white/2 border border-white/8 rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-white/4 group"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 ${value.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <value.icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${value.color}`} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-xs sm:text-sm text-green-400 mb-3 sm:mb-4 font-medium">{value.subtitle}</p>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-12 sm:py-16 lg:py-25 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Leadership Team
              </h2>
              <p className="text-white/60 text-base sm:text-lg px-4">
                Driven by passion, guided by experience
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {[
                {
                  avatar: '👤',
                  name: 'Reginald Nkabinde',
                  title: 'FOUNDER & CEO',
                  bio: 'Visionary technologist with 10+ years building scalable solutions. Architected the Manuvoo platform from the ground up with a deep commitment to solving real restaurant problems.'
                },
                {
                  avatar: '👤',
                  name: 'Solomon [Last Name]',
                  title: 'CO-FOUNDER & STRATEGIC ADVISOR',
                  bio: 'Serial entrepreneur with successful exits in technology. Brings strategic vision and business development expertise to guide Manuvoo\'s growth.'
                },
                {
                  avatar: '👥',
                  name: 'Join Our Team',
                  title: 'COULD BE YOU',
                  bio: 'We\'re looking for passionate individuals who believe in transforming the hospitality industry. Interested in joining our mission?',
                  isCareer: true
                }
              ].map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`text-center p-6 sm:p-8 lg:p-10 bg-white/2 border border-white/8 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:bg-white/4 ${index === 2 && 'sm:col-span-2 lg:col-span-1'}`}
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-30 lg:h-30 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 flex items-center justify-center overflow-hidden">
                    {leader.name === 'Reginald Nkabinde' ? (
                      <div className="w-full h-full bg-gradient-to-br from-green-400/20 to-blue-500/20 flex items-center justify-center">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg">
                          RN
                        </div>
                      </div>
                    ) : leader.isCareer ? (
                      <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-pink-500/20 flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl">
                        {leader.avatar}
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl">
                        {leader.avatar}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{leader.name}</h3>
                  <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wider mb-3 sm:mb-4">{leader.title}</p>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{leader.bio}</p>
                  {leader.isCareer && (
                    <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full text-xs sm:text-sm font-medium hover:shadow-lg transition-all duration-300 active:transform active:scale-95">
                      View Careers
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Stats Section */}
        <section className="py-12 sm:py-16 lg:py-25 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {[
                { number: 8.5, suffix: 'M', prefix: 'R', label: 'SEED FUNDING', description: 'Ready to scale' },
                { number: 2026, label: 'TARGET YEAR', description: 'Industry leadership' },
                { number: 35, suffix: '%', label: 'COST SAVINGS', description: 'Guaranteed minimum' },
                { number: 24, suffix: '/7', label: 'SUPPORT', description: 'Always here for you' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-3 sm:mb-4">
                    <div className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent font-bold">
                      <Counter 
                        target={stat.number} 
                        suffix={stat.suffix || ''} 
                        prefix={stat.prefix || ''} 
                      />
                    </div>
                  </div>
                  <h3 className="text-white/80 text-xs sm:text-sm lg:text-base uppercase tracking-wider mb-1 sm:mb-2">{stat.label}</h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Manuvoo Section */}
        <section className="py-12 sm:py-16 lg:py-25 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 lg:p-12 bg-white/2 border border-white/8 rounded-2xl sm:rounded-3xl"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">🏆</span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">Why Restaurants Choose Manuvoo</h3>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    'Only truly integrated platform in Africa',
                    'Built specifically for African market needs',
                    'No expensive hardware requirements',
                    'Transaction-based pricing aligned with your success',
                    'Local support that understands your challenges',
                    'Proven ROI within 60 days'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-white/80">
                      <span className="text-green-400 font-bold mt-1 flex-shrink-0">✓</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 lg:p-12 bg-white/2 border border-white/8 rounded-2xl sm:rounded-3xl"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">🤝</span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">Our Commitment to You</h3>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {[
                    'Free onboarding and training',
                    'No long-term contracts',
                    'Regular feature updates at no extra cost',
                    'Dedicated success manager',
                    'Community of restaurant partners',
                    'Your feedback shapes our roadmap'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-white/80">
                      <span className="text-green-400 font-bold mt-1 flex-shrink-0">✓</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 sm:py-16 lg:py-25 bg-gradient-to-br from-gradient-dark-start via-gradient-dark-mid to-gradient-dark-end relative overflow-hidden text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
                Ready to Transform Your Restaurant?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
                Join the growing community of restaurants thriving with Manuvoo
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-6 sm:mb-8">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base">
                  Schedule a Demo
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 active:bg-white/15 text-sm sm:text-base">
                  Download Brochure
                </button>
              </div>
              
              <p className="text-white/60 text-sm sm:text-base">
                Questions? Call us at <span className="text-white font-medium">+27 11 XXX XXXX</span>
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      
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
    </>
  )
}
