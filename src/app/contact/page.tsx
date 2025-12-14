import type { Metadata } from "next";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  ArrowRight
} from "lucide-react";

import { ContactForm } from "@/components/site/forms/contact-form";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/site/section";
import { SectionHeader } from "@/components/site/section-header";
import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Contact Us | Manuvoo",
  description: "Book a demo or get in touch with our support team.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section with Orange Overlay */}
      <div className="relative overflow-hidden bg-bg1">
        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent2/10 blur-[100px]" />
           <div className="absolute top-20 -left-20 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[80px]" />
        </div>

        <Section className="relative pt-24 pb-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <SectionHeader
                eyebrow="Contact"
                title="Let’s map Manuvoo to your service flow."
                description="Whether you're a single venue or a multi-location franchise, we're here to help you streamline your operations."
              />
              <div className="mt-8 flex flex-col gap-4 text-text2">
                <div className="flex items-center gap-3">
                   <div className="h-10 w-10 rounded-full bg-accent2/10 flex items-center justify-center text-accent2">
                      <MessageSquare className="h-5 w-5" />
                   </div>
                   <div>
                      <p className="font-medium text-text1">Sales & Inquiries</p>
                      <p className="text-sm">info@pollinateiq.co.za</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="h-10 w-10 rounded-full bg-accent2/10 flex items-center justify-center text-accent2">
                      <Phone className="h-5 w-5" />
                   </div>
                   <div>
                      <p className="font-medium text-text1">Support Line</p>
                      <p className="text-sm">+27 69 684 8796</p>
                   </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="relative">
               {/* Hero Image */}
               <div className="relative rounded-2xl overflow-hidden border border-borderNeutral shadow-2xl group">
                  {/* Strong Orange Overlay as requested */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent2/60 via-accent2/20 to-primary/20 pointer-events-none z-10 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg1/40 to-transparent pointer-events-none z-10" />
                  
                  <Image 
                    src="/hero/contact-1.jpg"
                    alt="Contact Manuvoo Team" 
                    width={800} 
                    height={600}
                    className="w-full h-auto object-cover opacity-95 transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
               </div>
            </Reveal>
          </div>
        </Section>
      </div>

      <Section variant="muted" className="relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle at 50% 0, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>

        <div className="relative z-10">
          <Reveal>
             {/* Unified Card Container - "In Unison" with Services Page */}
             <div className="bg-surface1 rounded-3xl shadow-2xl border border-borderNeutral overflow-hidden">
                <div className="grid lg:grid-cols-12 h-full">
                   {/* Left Side: Contact Form (Larger) */}
                   <div className="lg:col-span-7 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-borderNeutral bg-surface1/50">
                      <ContactForm embedded={true} />
                   </div>

                   {/* Right Side: Map & Info (Sidebar) */}
                   <div className="lg:col-span-5 bg-surface2/30 flex flex-col h-full">
                      {/* Map Section */}
                      <div className="relative h-64 w-full border-b border-borderNeutral group overflow-hidden">
                        <div className="absolute top-4 left-4 z-10 bg-surface1/90 backdrop-blur px-3 py-1.5 rounded-lg border border-borderNeutral shadow-sm flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-accent2" />
                            <span className="text-xs font-semibold text-text1">Visit HQ</span>
                        </div>
                         <iframe 
                            src="https://maps.google.com/maps?q=67th%20on%207th%2C%20Edenvale%2C%20Gauteng&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                         />
                      </div>

                      {/* Info Section */}
                      <div className="p-8 flex-1 flex flex-col space-y-8">
                         <div>
                            <h3 className="text-lg font-semibold text-text1 mb-6">Other ways to reach us</h3>
                            <div className="space-y-6">
                               <div className="flex gap-4">
                                  <div className="h-10 w-10 rounded-full bg-surface1 border border-borderNeutral flex items-center justify-center shrink-0 text-text2">
                                     <Mail className="h-5 w-5" />
                                  </div>
                                  <div>
                                     <p className="text-sm font-medium text-text1">Email Us</p>
                                     <a href="mailto:info@pollinateiq.co.za" className="text-sm text-text2 hover:text-accent2 transition-colors">
                                        info@pollinateiq.co.za
                                     </a>
                                  </div>
                               </div>

                               <div className="flex gap-4">
                                  <div className="h-10 w-10 rounded-full bg-surface1 border border-borderNeutral flex items-center justify-center shrink-0 text-text2">
                                     <Phone className="h-5 w-5" />
                                  </div>
                                  <div>
                                     <p className="text-sm font-medium text-text1">Call Us</p>
                                     <a href="tel:+27696848796" className="text-sm text-text2 hover:text-accent2 transition-colors">
                                        +27 69 684 8796
                                     </a>
                                  </div>
                               </div>

                               <div className="flex gap-4">
                                  <div className="h-10 w-10 rounded-full bg-surface1 border border-borderNeutral flex items-center justify-center shrink-0 text-text2">
                                     <Clock className="h-5 w-5" />
                                  </div>
                                  <div>
                                     <p className="text-sm font-medium text-text1">Response Time</p>
                                     <p className="text-sm text-text2">Usually within 1–2 business days</p>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
