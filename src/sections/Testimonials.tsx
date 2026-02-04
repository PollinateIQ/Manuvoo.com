import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    quote:
      'We finally have a single view of orders, bills, and payments during peak service. Manuvoo has transformed how we run our restaurant.',
    author: 'Sarah Mitchell',
    role: 'Operations Director',
    venue: 'The Golden Spoon',
  },
  {
    quote:
      'Tables and QR workflows reduced payment delays and improved turnover. Our customers love the seamless experience.',
    author: 'Michael Chen',
    role: 'Restaurant Owner',
    venue: 'Chen\'s Bistro',
  },
  {
    quote:
      'Inventory receiving and waste tracking made our cost conversations real. We\'ve reduced waste by 30% since implementing Manuvoo.',
    author: 'Emma Rodriguez',
    role: 'General Manager',
    venue: 'Coastal Kitchen',
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-muted dark:bg-charcoal-800 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Loved by{' '}
            <span className="text-orange-500">hospitality teams.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what venue owners and operators are saying about Manuvoo.
          </p>
        </AnimatedSection>

        {/* Testimonials Carousel */}
        <AnimatedSection delay={0.2}>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    className="h-full"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-full bg-card dark:bg-charcoal-900 border border-border dark:border-charcoal-600 rounded-xl p-8 transition-all duration-300 hover:border-orange-500/30">
                      {/* Quote Icon */}
                      <Quote className="w-10 h-10 text-orange-500/30 mb-4" />

                      {/* Quote */}
                      <p className="text-foreground leading-relaxed mb-6">
                        "{testimonial.quote}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                          <span className="text-white font-semibold">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.venue}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0 bg-muted dark:bg-charcoal-700 border-border dark:border-charcoal-600 hover:bg-accent dark:hover:bg-charcoal-600 hover:border-orange-500/30" />
              <CarouselNext className="relative right-0 translate-x-0 translate-y-0 bg-muted dark:bg-charcoal-700 border-border dark:border-charcoal-600 hover:bg-accent dark:hover:bg-charcoal-600 hover:border-orange-500/30" />
            </div>
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  );
}
