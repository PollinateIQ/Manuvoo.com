import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/config/seo";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalButton } from "@/components/CalButton";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Newsletter } from "@/sections/Newsletter";
import { createInquiry } from "@/lib/api";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@manuvoo.com",
    href: "mailto:info@manuvoo.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+27 69 684 8796",
    href: "https://wa.me/27696848796",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "18 Angola Rd, Selcourt, Springs, 1567",
    href: "#",
  },
];

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  venue: z.string().min(1, "Please select a venue type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      venue: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Submit inquiry to backend API
      const result = await createInquiry({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        venueType: data.venue,
        message: data.message,
        source: "website",
      });

      if (result.error) {
        throw new Error(result.error);
      }

      // Show success message
      setIsSubmitted(true);
      toast.success("Message sent successfully!", {
        description: `Thank you, ${data.firstName}! We'll get back to you soon.`,
        duration: 5000,
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        form.reset();
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className="pt-20">
      <SEO config={seoConfig.contact} />
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-medium text-orange-500 uppercase tracking-wider mb-4 block">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's <span className="text-orange-500">talk.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about Manuvoo? We're here to help. Reach out and
              we'll get back to you as soon as possible.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Get in touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you're interested in a demo, have a question about
                features, or need support, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.label === "WhatsApp" ? "_blank" : undefined}
                    rel={
                      item.label === "WhatsApp"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-orange-500/30 transition-colors"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-4">Follow us</p>
                <div className="flex gap-3">
                  {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:border-orange-500/30 transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.2}>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Send us a message
                </h3>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John"
                                className="bg-background border-border"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Doe"
                                className="bg-background border-border"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              className="bg-background border-border"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="venue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Venue type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-background border-border">
                                <SelectValue placeholder="Select your venue type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="restaurant">
                                Restaurant
                              </SelectItem>
                              <SelectItem value="cafe">Café</SelectItem>
                              <SelectItem value="bar">Bar</SelectItem>
                              <SelectItem value="hotel">Hotel</SelectItem>
                              <SelectItem value="food_truck">
                                Food Truck
                              </SelectItem>
                              <SelectItem value="catering">Catering</SelectItem>
                              <SelectItem value="fast_food">
                                Fast Food
                              </SelectItem>
                              <SelectItem value="fine_dining">
                                Fine Dining
                              </SelectItem>
                              <SelectItem value="casual_dining">
                                Casual Dining
                              </SelectItem>
                              <SelectItem value="bakery">Bakery</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your venue and what you're looking for..."
                              rows={5}
                              className="bg-background border-border resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 text-green-600 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800"
                      >
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">
                            Message sent successfully!
                          </p>
                          <p className="text-sm text-green-600/80 dark:text-green-400/80">
                            We'll get back to you soon.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting
                        ? "Sending..."
                        : "Send message"}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </Form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Book a Meeting CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Prefer a personal meeting?
            </h2>
            <p className="text-muted-foreground mb-8">
              Choose the type of meeting that works best for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CalButton className="inline-flex" eventType="demo">
                <motion.span
                  className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get started
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </CalButton>
              <CalButton className="inline-flex" eventType="training">
                <motion.span
                  className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book training
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </CalButton>
              <CalButton className="inline-flex" eventType="quick-chat">
                <motion.span
                  className="inline-flex items-center gap-2 px-8 py-4 bg-card border-2 border-orange-500 hover:bg-orange-500 text-foreground hover:text-white font-semibold rounded-lg transition-colors cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a call
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </CalButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
