import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { toast } from 'sonner';
import { subscribeToNewsletter } from '@/lib/api';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Subscribe to newsletter via backend API
      const result = await subscribeToNewsletter({
        email,
        source: 'website_newsletter',
      });

      if (result.error) {
        throw new Error(result.error);
      }
      
      // Show success message
      setIsSubscribed(true);
      toast.success('Successfully subscribed to our newsletter!');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast.error(
        error instanceof Error ? error.message : 'Failed to subscribe. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 text-center">
            {/* Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="w-8 h-8 text-orange-500" />
            </motion.div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Stay in the{' '}
              <span className="text-orange-500">loop</span>
            </h2>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates, tips, and exclusive insights 
              on how Manuvoo can transform your food service business.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="newsletter-email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-background border-border flex-1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isSubmitting || isSubscribed}
                    />
                    <Button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6"
                      disabled={isSubmitting || isSubscribed}
                    >
                      {isSubmitting ? (
                        'Subscribing...'
                      ) : isSubscribed ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <>
                          Subscribe
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {isSubscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-medium">Successfully subscribed!</span>
                  </motion.div>
                )}

                <p className="text-xs text-muted-foreground">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </form>

            {/* Features */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                </div>
                <span className="text-muted-foreground">Product updates</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                </div>
                <span className="text-muted-foreground">Industry insights</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                </div>
                <span className="text-muted-foreground">Exclusive offers</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
