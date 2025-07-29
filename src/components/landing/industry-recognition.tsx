'use client'

import { motion } from 'framer-motion'

interface RecognitionItem {
  name: string
  logo: string
}

export default function IndustryRecognition() {
  // This is optional - can be enabled when press/awards are available
  const recognitions: RecognitionItem[] = [
    // Placeholder for future press/awards
    // { name: "TechCrunch", logo: "/logos/techcrunch.png" },
    // { name: "Forbes", logo: "/logos/forbes.png" },
  ]

  const associations: RecognitionItem[] = [
    // Placeholder for industry associations
    // { name: "Restaurant Association of SA", logo: "/logos/rasa.png" },
    // { name: "Hospitality Tech Alliance", logo: "/logos/hta.png" },
  ]

  // Only render if there are recognitions or associations
  if (recognitions.length === 0 && associations.length === 0) {
    return null
  }

  return (
    <section className="relative py-16 bg-black border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.h3 
            className="text-lg font-medium text-white/60 mb-8 uppercase tracking-wider"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {recognitions.length > 0 ? "AS FEATURED IN" : "PROUD MEMBER OF"}
          </motion.h3>

          {/* Logos Grid */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {(recognitions.length > 0 ? recognitions : associations).map((item, index) => (
              <motion.div
                key={item.name}
                className="grayscale hover:grayscale-0 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
              >
                <img 
                  src={item.logo} 
                  alt={item.name}
                  className="h-8 md:h-10 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
